import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import Button from "./button";
import asyncAddingRepositoriesInStore from "../../../services/asyncAddingRepositoriesInStore";

class EntryField extends React.Component {
state = {
  inputValue: "",
  incorrectValue: false,
};
  handleChange = (value) => {
    this.setState({inputValue: value});
  };

  handleADD = () => {
    if (this.state.inputValue.length < 3 ||
      this.state.inputValue.search("/") === -1) {
      this.setState({incorrectValue: true});
      return
    }
    asyncAddingRepositoriesInStore({repoName: this.state.inputValue,
      functionToCallToRespond: this.props.ADD_repos,
      sortBy: this.props.sortBy,
      functionToSortingReposList: this.props.sortingBy
    });
    this.setState({incorrectValue: false});
    this.setState({inputValue: ""});
  };

  handleCLEAR = () => {
    this.setState({inputValue: ""});
    this.props.CLEAR_repos();
  };

  render() {
    return (
      <div>
        <Input incorrectValue={this.state.incorrectValue} handleChange={this.handleChange} value={this.state.inputValue}/>
        <Button handleClick={this.handleADD} title="ADD" />
        <Button handleClick={this.handleCLEAR} title="CLEAR" />
      </div>
    )
  }
}

EntryField.propTypes = {
  ADD_repos: PropTypes.func,
  CLEAR_repos: PropTypes.func,
  sortingBy: PropTypes.func,
};

export default EntryField;