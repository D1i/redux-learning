import { actionTypes } from "./actionTypes";

export const inputStatus = (state = {
    value: "",
}, action) => {
    switch (action.type) {
        case actionTypes.INPUT_VALUE_CHANGE:
            return {
                ...state,
                value: action.payload
            };
        case actionTypes.INPUT_VALUE_CLEAR:
            return {
                ...state,
                value: ""
            };
        default:
            return {
                ...state
            };
    }
};

export const URLReposList = (state = [], action) => {
    switch (action.type) {
        case actionTypes.REPOS_LIST_ADD:
            return [
                ...state,
                action.payload,
            ];
        case actionTypes.REPOS_LIST_CLEAR:
            return [];
        case actionTypes.INIT_URL_LIST:
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