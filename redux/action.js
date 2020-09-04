import constant from "./actionTypes";
export const inputValueChange = event => {
    return {
        type: constant.INPUT_VALUE_CHANGE,
        payload: event.target.value
    }
};