import React from "react";

function ButtonControlCLEAROfConnection(props) {
    return (
        <button onClick={() => {
            props.handleClickCLEAR();
        }}
        >CLEAR</button>
    )
}

export default ButtonControlCLEAROfConnection;