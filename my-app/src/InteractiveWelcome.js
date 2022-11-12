import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    username: "",
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <input name="username" value={this.state.username} onChange={this.handleInputChange}>
        </input>
        <Welcome name={this.state.username} />
      </div>
    );
  }
}

// Create an InteractiveWelcome component that renders an input tag and the Welcome component.
// Pass the current content of the input tag to the name prop of the Welcome component.
// The input tag should be a controlled component.
