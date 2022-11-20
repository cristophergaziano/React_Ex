import React from "react";

export class TodoList extends React.Component {
  state = {
    items: [
      "HTML exercises",
      "CSS exercises",
      "SASS exercises",
      "JavaScript exercises",
      "React exercises",
    ],
    inputField: "",
  };

  handleInputSave = (event) => {
    event.preventDefault();
    this.setState({
      inputField: event.target.value,
    });
  };

  handleInputAdd = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.inputField],
      inputField: "",
    });
  };

  handleResetList = (event) => {
    event.preventDefault();
    this.setState({
      items: [],
    });
  };

  handleRemoveItem(index) {
    const items = this.state.items;
    items.splice(index, 1);
    this.setState({ items });
  }

  render() {
    return (
      <div>
        {this.props.render(this.state.items, this.handleRemoveItem)}
        <input
          value={this.state.inputField}
          onChange={this.handleInputSave}
        ></input>
        {/* Added a condition rendering to avoid empty input */}
        <button
          onClick={this.state.inputField !== "" ? this.handleInputAdd : false}
        >
          Add to list
        </button>
        <button onClick={this.handleResetList}>Reset</button>
      </div>
    );
  }
}
