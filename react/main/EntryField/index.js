import { connect } from "react-redux";
import EntryField from "./EntryField";
import {
	REPOS_LIST_ADD,
	REPOS_LIST_CLEAR,
	SORTING_LIST,
} from "../../../redux/constants";

const mapDispatchToProps = {
	ADD_repos: ({ value, repoName, clearField }) => {
		return (dispatch) => {
			value
				.then(({ forks, subscribers_count }) => {
					if (forks === undefined) {
						repoName = `${repoName} | Такого репозитория не существует`;
						forks = 0;
						subscribers_count = 0;
					}
					dispatch({
						type: REPOS_LIST_ADD,
						payload: { repoName, forks, subscribers_count },
					});
				})
				.then(() => {
					clearField();
					dispatch({
						type: SORTING_LIST,
					});
				});
		};
	},
	CLEAR_repos: () => ({
		type: REPOS_LIST_CLEAR,
	}),
};

export default connect(undefined, mapDispatchToProps)(EntryField);
