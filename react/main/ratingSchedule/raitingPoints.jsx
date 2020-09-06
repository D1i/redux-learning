import React from "react";
import {actionTypes} from "../../../redux/actionTypes";
import style from "./style.css";
import store from "../../../redux/storeRedux";

function RatingPoints(props) {


    let list = props.state.URLReposList.map((value, item) => {
        const heightRating = props.state.URLReposList[props.state.URLReposList.length - 1] === undefined
            ? 100
            : value.forks / (props.state.URLReposList[props.state.URLReposList.length - 1].forks / 100);
        return (
            <div key={value.URL + item} className={style.ratingColumn}>
                <div className={style.ratingColumnValue} style=
                     {{height: heightRating + "%"}}
                    >
                    {value.forks}
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