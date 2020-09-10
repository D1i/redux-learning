import React from "react";
import PropTypes from "prop-types";
import {actionTypes} from "../../../redux/actionTypes";

function SelectSortType(props) {
    return (
        <select onChange={props.handleChange}>
            <option value={actionTypes.SORTING_LIST_BY_FORKS}>Соритировка по форкам</option>
            <option value={actionTypes.SORTING_LIST_BY_SUBSCRIBERS_COUNT}>Сортировка по подписчикам</option>
        </select>
    )
}

SelectSortType.propTypes = {
  handleChange: PropTypes.func
};

export default SelectSortType;