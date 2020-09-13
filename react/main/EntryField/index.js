import { connect } from "react-redux";
import EntryField from "./EntryField";
import { actionTypes } from "../../../redux/actionTypes";

const mapStateToProps = (globalState) => {
	return { sortBy: globalState.sortBy };
};

const mapDispatchToProps = {
	ADD_repos: (payload) => ({
		type: actionTypes.REPOS_LIST_ADD,
		payload,
	}),
	CLEAR_repos: () => ({
		type: actionTypes.REPOS_LIST_CLEAR,
	}),
	sortingBy: (sortBy) => {
		let sortedBy =
			sortBy === "forks"
				? actionTypes.SORTING_LIST_BY_FORKS
				: actionTypes.SORTING_LIST_BY_SUBSCRIBERS_COUNT;
		return {
			type: sortedBy,
		};
	},
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryField);
