import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import Button from "./button";
import style from "./style";
import githubAPIRequest from "../../../services/githubAPIRequest";

class EntryField extends React.Component {
	state = {
		inputValue: "",
		incorrectValue: false,
	};
	handleChange = (value) => {
		this.setState({ inputValue: value });
	};

	clearField = () => {
		this.setState({ incorrectValue: false });
		this.setState({ inputValue: "" });
	};

	handleADD = () => {
		if (
			this.state.inputValue.length < 3 ||
			this.state.inputValue.search("/") === -1
		) {
			this.setState({ incorrectValue: true });
			return;
		}
		this.props.ADD_repos({
			value: githubAPIRequest(this.state.inputValue),
			repoName: this.state.inputValue,
			clearField: this.clearField,
		});
	};

	handleCLEAR = () => {
		this.setState({ inputValue: "" });
		this.props.CLEAR_repos();
	};

	render() {
		return (
			<div>
				<Input
					incorrectValue={this.state.incorrectValue}
					handleChange={this.handleChange}
					value={this.state.inputValue}
				/>
				<div className={style.buttonContainer}>
					<Button handleClick={this.handleADD} title="ADD" />
					<Button handleClick={this.handleCLEAR} title="CLEAR" />
				</div>
			</div>
		);
	}
}

EntryField.propTypes = {
	ADD_repos: PropTypes.func,
	CLEAR_repos: PropTypes.func,
	sortingList: PropTypes.func,
};

export default EntryField;
