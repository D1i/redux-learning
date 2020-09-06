import { connect } from "react-redux";
import SelectSortType from "./SelectOfCangeTypeSorting";
import { actionTypes } from "../../../redux/actionTypes";

const mapDispatchToProps = {
    handleChange: (event) => {
        return {
            type: event.target.value
        }
    }
};

export default connect(undefined, mapDispatchToProps)(SelectSortType);