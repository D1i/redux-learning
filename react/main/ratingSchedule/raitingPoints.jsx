import React from "react";
import PropTypes from "prop-types";
import style from "./style.css";
import { SORTBY_FORKS, SORTBY_SUBSCRIBRES } from '../../../redux/constants';
import RatingColumn from './ratingColumn';

function RatingPoints(props) {

    let list = props.reposList.map((value, item) => {
        let heightRating = null;
        if (props.sortBy === SORTBY_FORKS) {
            heightRating = props.reposList[0] === undefined
                ? 100
                : value.forks / (props.reposList[props.reposList.length - 1].forks / 100);
        } else if (props.sortBy === SORTBY_SUBSCRIBRES) {
            heightRating = props.reposList[0] === undefined
                ? 100
                : value.subscribers_count / (props.reposList[0].subscribers_count / 100);
        }
        return (
            <RatingColumn value={value} heightRating={heightRating} keyValue={`${value.repoName} | ${item}`} ratingPosition={item + 1} />
    )
    }).reverse();
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