import React from "react";
import PropTypes from "prop-types";
import style from "./style.css";
import { SORTBY_FORKS, SORTBY_SUBSCRIBRES } from "../../../redux/constants";
import RatingColumn from "./ratingColumn";

function RatingPoints(props) {
	const comparison = (comparisonProperty, value) =>
		props.reposList[0] === undefined
			? 100
			: value[comparisonProperty] /
			  (props.reposList[0][comparisonProperty] / 100);

	let list = props.reposList
		.map((value, item) => {
			let heightRating = null;
			if (props.sortBy === SORTBY_FORKS) {
				heightRating = comparison("forks", value);
			} else if (props.sortBy === SORTBY_SUBSCRIBRES) {
				heightRating = comparison("subscribers_count", value);
			}
			return (
				<div key={`${value.repoName} | ${item}`}>
					<RatingColumn
						value={value}
						heightRating={heightRating}
						ratingPosition={item + 1}
					/>
				</div>
			);
		})
		.reverse();
	return <div className={style.raitingContainer}>{list}</div>;
}

RatingPoints.propTypes = {
	reposList: PropTypes.array,
	sortBy: PropTypes.string,
};

export default RatingPoints;
