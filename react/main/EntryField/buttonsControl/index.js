import { connect } from "react-redux";
import { actionTypes } from "../../../../redux/actionTypes";
import store from "../../../../redux/storeRedux";
import ButtonControlADDOfConnection from "./ButtonControlADD";
import ButtonControlCLEAROfConnection from "./ButtonControlCLEAR";

store.dispatch({type: actionTypes.INIT_URL_LIST});

const mapDispatchToPropsOfADD = {
    handleClickADD: () => ({
        type: actionTypes.REPOS_LIST_ADD,
        payload: store.getState().inputStatus.value
    }),
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
