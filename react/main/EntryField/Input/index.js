import { connect } from "react-redux";
import { actionTypes } from "../../../../redux/actionTypes";
import Input from "./Input";

const mapDispatchToProps = {
    handleChange: event => ({
        type: actionTypes.INPUT_VALUE_CHANGE,
        payload: event.target.value
    })
};

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);