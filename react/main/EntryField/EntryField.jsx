import React from "react";
import Input from "./Input";
import Button from "./button";


class EntryField extends React.Component {
state = {
  inputValue: "",
};
  handleChange = (value) => {
    this.setState({inputValue: value});
  };

  handleADD = () => {
    this.props.ADD_repos(this.state.inputValue);
    this.props.SORTING_repos_list(this.props.sortBy);
    this.setState({inputValue: ""});
  };
  handleCLEAR = () => {
    this.setState({inputValue: ""});
    this.props.CLEAR_repos();
  };

  render() {
    return (
      <div>
        <Input handleChange={this.handleChange} value={this.state.inputValue}/>
        <Button handleClick={this.handleADD} title="ADD" />
        <Button handleClick={this.handleCLEAR} title="CLEAR" />
      </div>
    )
  }
}

export default EntryField;