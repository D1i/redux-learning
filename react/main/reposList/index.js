import { connect } from "react-redux";
import RepostList from "./ReposList";

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, undefined)(RepostList);
