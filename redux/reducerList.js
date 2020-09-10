import { actionTypes } from "./actionTypes";

export const URLReposList = (state = {list: []}, action) => {
    switch (action.type) {
      case actionTypes.REPOS_LIST_ADD:
          let copyList = state.list.map(v => v);
          copyList.push({
            repoName: action.payload.repoName,
            forks: action.payload.forks,
            subscribers_count: action.payload.subscribers_count
          });

            return {
              ...state,
              list: copyList,
            };
        case actionTypes.REPOS_LIST_CLEAR:
            return {...state,
        list: []
            }
              ;
        case actionTypes.SORTING_LIST_BY_FORKS:
          copyList = state.list.map(v => v).sort((a, b) => {
            if (a.forks > b.forks) {
              return 1;
            }
            if (a.forks < b.forks) {
              return -1;
            }

            return 0;
          });

            return {
              ...state,
              list: copyList
            }
        ;
        case actionTypes.SORTING_LIST_BY_SUBSCRIBERS_COUNT:
            return {
              ...state,
              list: state.list.map(v => v).sort((a, b) => {
                if (a.subscribers_count > b.subscribers_count) {
                  return 1;
                }
                if (a.subscribers_count < b.subscribers_count) {
                  return -1;
                }

                return 0;
              })
            }
        ;
        default:
            return state;
    }
};

export const sortBy = (state = "forks", action) => {
    switch (action.type) {
        case actionTypes.SORTING_LIST_BY_FORKS:
            return "forks"
                ;
        case actionTypes.SORTING_LIST_BY_SUBSCRIBERS_COUNT:
            return "subscribers count"
                ;
        default :
            return state
                ;
    }
};