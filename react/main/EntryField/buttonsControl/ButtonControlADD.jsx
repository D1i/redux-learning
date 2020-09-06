import React from "react";

function ButtonControlADDOfConnection(props) {
    return (
        <button onClick={() => {
            if (props.handleClickADD().type !== "INTRODUCED_NOT_CORRECT_DATA") {
                props.handleClickADDClearInput();
                props.handleClickADDSortedRepos();//ПЕРЕДЕЛАТЬ
                //компоненты не должны знать про редакс ничего
            }
        }}
        >ADD</button>
    )
}

export default ButtonControlADDOfConnection;