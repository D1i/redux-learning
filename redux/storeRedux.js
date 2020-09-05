import { createStore, combineReducers } from "redux";
import { inputStatus, URLReposList } from "./reducerList";

const store = createStore(
    combineReducers({inputStatus, URLReposList})
);

setInterval(() => {console.log(store.getState())}, 1000);

export default store;