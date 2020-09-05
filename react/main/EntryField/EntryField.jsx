import React from "react";
import Input from "./Input/index.js";
import { ButtonControlADD, ButtonControlCLEAR }from "./buttonsControl/index.js";

function EntryField(props) {
    return (
        <div>
            <Input />
            <ButtonControlADD />
            <ButtonControlCLEAR />
        </div>
    )
}

export default EntryField;