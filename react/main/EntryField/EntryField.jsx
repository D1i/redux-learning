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

	handleADD = () => {
		if (
			this.state.inputValue.length < 3 ||
			this.state.inputValue.search("/") === -1
		) {
			this.setState({ incorrectValue: true });
			return;
		}
		githubAPIRequest(this.state.inputValue)
			.then(({ forks, subscribers_count }) => {
				let repoName = this.state.inputValue;
				if (forks === undefined) {
					repoName = `${repoName} | Такого репозитория не существует`;
					forks = 0;
					subscribers_count = 0;
				}
				this.props.ADD_repos({
					repoName: repoName,
					forks,
					subscribers_count,
				});
			})
			.then(() => {
				this.setState({ incorrectValue: false });
				this.setState({ inputValue: "" });
				this.props.sortingList();
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
