import React from "react";
import EntryField from "./EntryField/index";
import ReposList from "./ReposList/index";
import RatingPoints from "./ratingSchedule/index";
import SelectSortType from "./sortingChange/index";
import style from "./style";

function Main(props) {
        return (
            <main className={style.main}>
                <EntryField />
                <SelectSortType />
                <ReposList />
                <RatingPoints />
            </main>
        )
}

export default Main;