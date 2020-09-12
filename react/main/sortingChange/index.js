import { connect } from "react-redux";
import SelectSortType from "./SelectOfChangeTypeSorting";

const mapDispatchToProps = {
    handleChange: value => {
        return {
            type: value
        }
    }
};

export default connect(undefined, mapDispatchToProps)(SelectSortType);