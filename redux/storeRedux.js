import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { URLReposList, sortBy } from "./reducerList";

const store = createStore(
  combineReducers({ URLReposList, sortBy}),
  applyMiddleware(thunk)
);

export default store;