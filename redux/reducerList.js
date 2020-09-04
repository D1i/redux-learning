import { actionTypes } from "./actionTypes";

export const inputStatus = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.INPUT_VALUE_CHANGE:
            return {
                value: action.payload
            };
        case actionTypes.INPUT_VALUE_CLEAR:
            return {
                value: ""
            };
        default:
            return {}
            ;
    }
};