import { connect } from "react-redux";
import ReposList from "./ReposList";

function mapStateToProps(state) {
	return { reposList: state.URLReposList.list };
}

export default connect(mapStateToProps, undefined)(ReposList);
