import { connect } from "react-redux";
import { actionTypes } from "../../../../redux/actionTypes";
import store from "../../../../redux/storeRedux";
import ButtonControlADDOfConnection from "./ButtonControlADD";
import ButtonControlCLEAROfConnection from "./ButtonControlCLEAR";
import pseudoAPIRequest from "../../../../services/pseudoAPIResponse"

store.dispatch({type: actionTypes.INIT_URL_LIST});

const mapDispatchToPropsOfADD = {
    handleClickADD: () => {
        if (store.getState().inputStatus.value.length < 3) {
            return {type: actionTypes.INTRODUCED_NOT_CORRECT_DATA};
        } else if (store.getState().inputStatus.value.search("/") === -1) {
            return {type: actionTypes.INTRODUCED_NOT_CORRECT_DATA};
        }
        return {
        type: actionTypes.REPOS_LIST_ADD,
        payload: {
            URL: store.getState().inputStatus.value,
            forks: pseudoAPIRequest.forks,
            subscribers_count: pseudoAPIRequest.subscribers_count
        }
    }},
    handleClickADDClearInput: () => ({
        type: actionTypes.INPUT_VALUE_CLEAR,
    })
};

const mapDispatchToPropsOfCLEAR = {
    handleClickCLEAR: () => ({
        type: actionTypes.REPOS_LIST_CLEAR,
    }),
};

export const ButtonControlADD = connect(undefined, mapDispatchToPropsOfADD)(ButtonControlADDOfConnection);
export const ButtonControlCLEAR = connect(undefined, mapDispatchToPropsOfCLEAR)(ButtonControlCLEAROfConnection);
