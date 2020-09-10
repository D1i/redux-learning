import React from "react";
import PropTypes from "prop-types";
import style from "./style.css";

function Index(props) {
  let classNameOfInput = null;
  let incorrectValueExplanation = "";
  if (props.incorrectValue) {
    classNameOfInput = "incorrectValue";
    incorrectValueExplanation = "Строка должна содержать как минимум 3 символа и /"
  }
  return (
    <input
      type="text"
      title={incorrectValueExplanation}
      className={style.borderOfInput + " " + style[classNameOfInput]}
      onChange={event => {props.handleChange(event.target.value)}}
      placeholder="Пользователь/Репозиторий"
      value={props.value}
    />
  )
}

Index.propTypes = {
  incorrectValue: PropTypes.bool,
  handleChange: PropTypes.func,
  value: PropTypes.string
};

export default Index;