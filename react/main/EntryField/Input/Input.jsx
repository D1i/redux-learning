import React from "react";

function Input (props) {
        return (
            <input
                type="text"
                onChange={props.handleChange}
                placeholder="Пользователь/Репозиторий"
            />
        )
}

export default Input;