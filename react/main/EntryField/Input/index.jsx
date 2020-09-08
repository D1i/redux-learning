import React from "react";

function Index(props) {
  return (
    <input
      type="text"
      onChange={event => {props.handleChange(event.target.value)}}
      placeholder="Пользователь/Репозиторий"
      value={props.value}
    />
  )
}

export default Index;