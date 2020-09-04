import { connect } from "react-redux";
import { actionTypes } from "../../../../redux/actionTypes";
import Input from "./Input";

const mapDispatchToProps = {
    handleChange: event => ({
        type: actionTypes.INPUT_VALUE_CHANGE,
        payload: event.target.value
    })
};

export default connect(undefined, mapDispatchToProps)(Input);