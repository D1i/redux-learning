import React from "react";
import EntryField from "./EntryField/index";
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

export default Main;