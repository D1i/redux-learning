import React from "react";
import { actionTypes } from "../../../redux/actionTypes";
import style from "./style.css";
import store from "../../../redux/storeRedux";

function RatingPoints(props) {


    let list = props.reposList.map((value, item) => {
        let heightRating = null;
        if (store.getState().sortBy === actionTypes.SORTING_LIST_BY_FORKS) {
            heightRating = props.reposList[props.reposList.length - 1] === undefined
                ? 100
                : value.forks / (props.reposList[props.reposList.length - 1].forks / 100);
        } else if (store.getState().sortBy === actionTypes.SORTING_LIST_BY_SUBSCRIBERS_COUNT) {
            heightRating = props.reposList[props.reposList.length - 1] === undefined
                ? 100
                : value.subscribers_count / (props.reposList[props.reposList.length - 1].subscribers_count / 100);
        }
        return (
            <div key={value.URL + item} className={style.ratingColumn}>
                <div className={style.ratingColumnValue} style=
                     {{height: heightRating + "%"}}
                    title={"forks: " + value.forks + "\n"
                    + "subscribers_count: " + value.subscribers_count}
                >
                    <p className={style.ratingColumnURL}>{value.URL}</p>
                </div>
            </div>

    )
    });
    return (
        <div className={style.raitingContainer}>
            {list}
        </div>
    )
}

export default RatingPoints;