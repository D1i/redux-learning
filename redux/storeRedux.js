import { createStore, combineReducers } from "redux";
import { URLReposList } from "./reducerList";

const store = createStore(combineReducers({ URLReposList }));

export default store;
