import { createStore, combineReducers } from "redux";
import { inputStatus } from "./reducerList";

const store = createStore(
    combineReducers({inputStatus})
);

export default store;