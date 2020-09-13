import React from "react";
import PropTypes from "prop-types";
import { actionTypes } from "../../../redux/actionTypes";
import style from "./style";

function SelectSortType(props) {
	return (
		<select
			className={style.selectorTypeSorting}
			onChange={(event) => {
				props.handleChange(event.target.value);
			}}
		>
			<option value={actionTypes.SORTING_LIST_BY_FORKS}>
				Соритировка по форкам
			</option>
			<option value={actionTypes.SORTING_LIST_BY_SUBSCRIBERS_COUNT}>
				Сортировка по подписчикам
			</option>
		</select>
	);
}

SelectSortType.propTypes = {
	handleChange: PropTypes.func,
};

export default SelectSortType;
