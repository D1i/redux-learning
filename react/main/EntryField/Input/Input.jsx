import React from "react";

function Input(props) {
        return (
            <input
                type="text"
                onChange={props.handleChange}
                placeholder="Пользователь/Репозиторий"
                value={props.inputStatus.value}
            />
        )
}

export default Input;