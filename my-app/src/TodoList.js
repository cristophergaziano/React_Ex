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
  };

  handleInputSave = (event) => {
    event.preventDefault();
    this.setState({ input: event.target.value });
  };

  handleInputAdd = (event) => {
    event.preventDefault()
    this.setState({
        items:[...this.state.items, this.state.input]
    })
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}

          <input onChange={this.handleInputSave}></input>
          {/* Added a condition rendering to avoid empty input */}
          <button onClick={this.state.input !== "" ? this.handleInputAdd : false}>Add to list</button>
        </ul>
      </div>
    );
  }
}
