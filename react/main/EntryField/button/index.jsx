import React from "react";
import PropTypes from "prop-types";

function Button(props) {

    return (
      <button onClick={props.handleClick}>
        {props.title}
      </button>
    )
}

Button.propTypes = {
  handleChange: PropTypes.func
};

export default Button;