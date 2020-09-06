import { connect } from "react-redux";
import { actionTypes } from "../../../redux/actionTypes";
import store from "../../../redux/storeRedux";
import RatingPoints from "./raitingPoints";

// const mapDispatchToProps = {
// };

function mapStateToProps(state) {
    return {state};
}

export default connect(mapStateToProps, undefined)(RatingPoints);
