import React from "react";
import Input from "./Input";
import Button from "./button";
import handlerResponse from "../../../services/handlerResponse";

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
    handlerResponse(this.state.inputValue);
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