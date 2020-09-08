import React from "react";
import Input from "./Input";
import Button from "./button";
import request from "../../../services/APIRequest";

class EntryField extends React.Component {
state = {
  inputValue: "",
};
  handleChange = (value) => {
    this.setState({inputValue: value});
  };

  handleADD = () => {
    if (this.state.inputValue.length < 3 ||
        this.state.inputValue.search("/") === -1) {
      return
    }
    request(this.state.inputValue);
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