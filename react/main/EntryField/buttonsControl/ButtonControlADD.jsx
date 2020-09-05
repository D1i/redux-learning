import React from "react";
import store from "../../../../redux/storeRedux"

class ButtonControlADD extends React.Component {
    render() {
        console.log(store.getState().inputStatus.value);
        return (
            <button onClick={() => {
                this.props.handleClickADD();
                this.props.handleClickADDClearInput();
            }}
                    value={this.props.inputStatus.value}//Почему не перерисовывается ?
            >ADD</button>
        )
    }
}

export default ButtonControlADD;