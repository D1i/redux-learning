import React from "react";
import PropTypes from "prop-types";
import style from "./style.css";

function RatingPoints(props) {

    let list = props.reposList.map((value, item) => {
        let heightRating = null;
        if (props.sortBy === "forks") {
            heightRating = props.reposList[props.reposList.length - 1] === undefined
                ? 100
                : value.forks / (props.reposList[props.reposList.length - 1].forks / 100);
        } else if (props.sortBy === "subscribers count") {
            heightRating = props.reposList[props.reposList.length - 1] === undefined
                ? 100
                : value.subscribers_count / (props.reposList[props.reposList.length - 1].subscribers_count / 100);
        }
        return (
            <div key={value.repoName + item} className={style.ratingColumn}>
                <div className={style.ratingColumnValue} style=
                     {{height: heightRating + "%"}}
                    title={"forks: " + value.forks + "\n"
                    + "subscribers_count: " + value.subscribers_count}
                >
                    <p className={style.ratingColumnURL}>{value.repoName}</p>
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

RatingPoints.propTypes = {
    reposList: PropTypes.array,
    sortBy: PropTypes.string
};

export default RatingPoints;