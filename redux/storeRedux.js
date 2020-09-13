import { createStore, combineReducers, applyMiddleware } from "redux";
import { URLReposList } from "./reducerList";
import thunk from "redux-thunk";

const store = createStore(
	combineReducers({ URLReposList }),
	applyMiddleware(thunk)
);

export default store;
