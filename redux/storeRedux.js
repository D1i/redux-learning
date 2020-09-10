import { createStore, combineReducers } from "redux";
import { URLReposList, sortBy } from "./reducerList";

const store = createStore(
  combineReducers({ URLReposList, sortBy})
);

export default store;