import React from "react";
import EntryField from "./EntryField/EntryField";
import store from "../../redux/storeRedux"

function Main(props) {
        return (
            <main>
                <EntryField />
                {/*<ReposListUl />*/}
            </main>
        )
}
store.dispatch({type: "TEST_VALUE"});

export default Main;