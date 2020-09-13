import React from "react";
import PropTypes from "prop-types";
import style from "./style";

function Button(props) {
	return (
		<button className={style.buttonControl} onClick={props.handleClick}>
			{props.title}
		</button>
	);
}

Button.propTypes = {
	handleChange: PropTypes.func,
};

export default Button;
