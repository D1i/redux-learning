import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../redux/storeRedux";
import Main from "./main/Main";

class App extends React.Component {
	render() {
		return (
			<div>
				<Main />
			</div>
		);
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,

	document.getElementById("root")
);
