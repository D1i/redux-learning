import React from "react";
import EntryField from "./EntryField/EntryField";
import store from "../../redux/storeRedux"
import ReposList from "./ReposList/index";
import RatingPoints from "./ratingSchedule/index";
import SelectSortType from "./sortingChange/index";

function Main(props) {
        return (
            <main>
                <EntryField />
                <ReposList />
                <RatingPoints />
                <SelectSortType />
            </main>
        )
}
store.dispatch({type: "TEST_VALUE"});

export default Main;