import React from "react";

function ButtonControlADDOfConnection(props) {
    return (
        <button onClick={() => {
            props.handleClickADD();
            props.handleClickADDClearInput();
        }}
        >ADD</button>
    )
}

export default ButtonControlADDOfConnection;