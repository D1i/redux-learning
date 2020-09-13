import React from "react";
import PropTypes from "prop-types";
import {
	SET_SORTING_TYPE_FORKS,
	SET_SORTING_TYPE_SUBSCRIBERS,
} from "../../../redux/constants";
import style from "./style";

function SelectSortType(props) {
	return (
		<select
			className={style.selectorTypeSorting}
			onChange={(event) => {
				props.handleChange(event.target.value);
			}}
		>
			<option value={SET_SORTING_TYPE_FORKS}>
				Соритировка по форкам
			</option>
			<option value={SET_SORTING_TYPE_SUBSCRIBERS}>
				Сортировка по подписчикам
			</option>
		</select>
	);
}

SelectSortType.propTypes = {
	handleChange: PropTypes.func,
};

export default SelectSortType;
