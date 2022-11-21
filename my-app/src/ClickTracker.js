import React from "react";

export class ClickTracker extends React.Component {
  state = {
    str: "",
  };

  handleButtonClick = (event) => {
    this.setState({
      str: event.target.innerHTML,
    });
  };

  render() {
    return (
      <div>
        <h1>Qual è l'ultimo bottone che ho premuto?</h1>
        <button onClick={this.handleButtonClick}>Button 1</button>
        <button onClick={this.handleButtonClick}>Button 2</button>
        <button onClick={this.handleButtonClick}>Button 3</button>
        <h1>L'ultimo bottone premuto è {this.state.str}</h1>
      </div>
    );
  }
}
