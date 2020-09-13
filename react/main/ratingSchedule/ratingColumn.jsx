import React from "react";
import PropTypes from "prop-types";
import style from "./style.css";

function RatingColumn(props) {
	return (
		<div key={props.keyValue} className={style.ratingColumn}>
			<div
				className={style.ratingColumnValue}
				style={{ height: `${props.heightRating}%` }}
				title={`forks: ${props.value.forks}
subscribers_count: ${props.value.subscribers_count}`}
			>
				<p className={style.ratingColumnURL}>{props.ratingPosition}</p>
			</div>
		</div>
	);
}

RatingColumn.propTypes = {
	value: PropTypes.object,
	heightRating: PropTypes.number,
	key: PropTypes.string,
};

export default RatingColumn;
