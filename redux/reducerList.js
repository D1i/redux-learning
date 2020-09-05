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

export const URLReposList = (state = {}, action) => {
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
        default:
            return state;
    }
};