import React from "react";

export class Colors extends React.Component {
  render() {
    const items = this.props.colors.map((color, index) => <li key={color + index}>{color}</li>);

    return (
      <div>
        <ul>{items}</ul>
      </div>
    );
  }
}
