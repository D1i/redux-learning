import React from "react";
import EntryField from "./EntryField/EntryField";
import store from "../../redux/storeRedux"
import ReposList from "./ReposList/index";
import RatingPoints from "./ratingSchedule/index";

function Main(props) {
        return (
            <main>
                <EntryField />
                <ReposList />
                <RatingPoints />
            </main>
        )
}
store.dispatch({type: "TEST_VALUE"});

export default Main;