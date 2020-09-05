import { actionTypes } from "./actionTypes";

export const inputStatus = (state = {}, action) => {
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
        case actionTypes.TEST_VALUE:
            return{
                ...state,
                testValue: "__TEST__"
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
        case actionTypes.INIT_URL_LIST:
            return []
        ;
        default:
            return state;
    }
};