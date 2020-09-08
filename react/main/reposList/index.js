import { connect } from "react-redux";
import ReposList from "./ReposList";

function mapStateToProps(state) {
    return {reposList: state.URLReposList};
}

export default connect(mapStateToProps, undefined)(ReposList);
