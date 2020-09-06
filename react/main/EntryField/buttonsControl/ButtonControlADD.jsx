import React from "react";

function ButtonControlADDOfConnection(props) {
    return (
        <button onClick={() => {
            if (props.handleClickADD().type !== "INTRODUCED_NOT_CORRECT_DATA") {
                props.handleClickADDClearInput();
                props.handleClickADDSortedRepos();
            }
        }}
        >ADD</button>
    )
}

export default ButtonControlADDOfConnection;