import { connect } from "react-redux";
import { actionTypes } from "../../../../redux/actionTypes";
import ButtonControlADD from "./ButtonControlADD";
import store from "../../../../redux/storeRedux";

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

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, mapDispatchToPropsOfADD)(ButtonControlADD);