import { createStore, combineReducers } from "redux";
import { URLReposList, sortBy } from "./reducerList";

const store = createStore(
  combineReducers({ URLReposList, sortBy})
);

setInterval(() => {console.log(store.getState())}, 1000)

export default store;