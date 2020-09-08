import { actionTypes } from "./actionTypes";

export const URLReposList = (state = [], action) => {
    switch (action.type) {
        case actionTypes.REPOS_LIST_ADD:
            return [
                ...state,
              {
                  URL: action.payload.URL,
                  forks: action.payload.forks,
                  subscribers_count: action.payload.subscribers_count
              },
            ];
        case actionTypes.REPOS_LIST_CLEAR:
            return []
              ;
        case actionTypes.SORTING_LIST_BY_FORKS:
            return state.map(v => v).sort((a, b) => {
                if (a.forks > b.forks) {
                    return 1;
                }
                if (a.forks < b.forks) {
                    return -1;
                }

                return 0;
            })
        ;
        case actionTypes.SORTING_LIST_BY_SUBSCRIBERS_COUNT:
            return state.map(v => v).sort((a, b) => {
                if (a.subscribers_count > b.subscribers_count) {
                    return 1;
                }
                if (a.subscribers_count < b.subscribers_count) {
                    return -1;
                }

                return 0;
            })
        ;
        default:
            return state;
    }
};

export const sortBy = (state = actionTypes.SORTING_LIST_BY_FORKS, action) => {
    switch (action.type) {
        case actionTypes.SORTING_LIST_BY_FORKS:
            return actionTypes.SORTING_LIST_BY_FORKS
                ;
        case actionTypes.SORTING_LIST_BY_SUBSCRIBERS_COUNT:
            return actionTypes.SORTING_LIST_BY_SUBSCRIBERS_COUNT
                ;
        default :
            return state
                ;
    }
};