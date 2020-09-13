import { connect } from "react-redux";
import EntryField from "./EntryField";
import {
	REPOS_LIST_ADD,
	REPOS_LIST_CLEAR,
	SORTING_LIST,
} from "../../../redux/constants";
// import { } from "../../../redux/constants";

const mapDispatchToProps = {
	ADD_repos: (payload) => ({
		type: REPOS_LIST_ADD,
		payload,
	}),
	CLEAR_repos: () => ({
		type: REPOS_LIST_CLEAR,
	}),
	sortingList: () => ({
		type: SORTING_LIST,
	}),
};

export default connect(undefined, mapDispatchToProps)(EntryField);
