import { connect } from "react-redux";
import RatingPoints from "./raitingPoints";

function mapStateToProps(state) {
    return {
        reposList: state.URLReposList.list,
        sortBy: state.sortBy
    };
}

export default connect(mapStateToProps, undefined)(RatingPoints);