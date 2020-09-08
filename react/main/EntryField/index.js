import { connect } from "react-redux";
import EntryField from "./EntryField";
import { actionTypes } from "../../../redux/actionTypes";

const mapDispatchToProps = {
    ADD_repos: value => ({
      type: actionTypes.REPOS_LIST_ADD,
      payload: value
    }),

    CLEAR_repos: () => ({
      type: actionTypes.REPOS_LIST_CLEAR,
    }),
};

export default connect(undefined, mapDispatchToProps)(EntryField);