import { createStore, combineReducers } from "redux";
import { inputStatus, URLReposList, sortBy } from "./reducerList";

const store = createStore(
    combineReducers({inputStatus, URLReposList, sortBy})
);

setInterval(() => {console.log(store.getState())}, 1000);

export default store;