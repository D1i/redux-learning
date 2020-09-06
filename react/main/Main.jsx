import React from "react";
import EntryField from "./EntryField/EntryField";
import store from "../../redux/storeRedux"
import ReposList from "./ReposList/index";

function Main(props) {
        return (
            <main>
                <EntryField />
                <ReposList />
            </main>
        )
}
store.dispatch({type: "TEST_VALUE"});

export default Main;