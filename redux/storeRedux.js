import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { inputStatus, URLReposList, sortBy } from "./reducerList";

const store = createStore(
  combineReducers({inputStatus, URLReposList, sortBy}),
  applyMiddleware(thunk)
);

export default store;