import React from "react";

export class Colors extends React.Component {
  render() {
    const items = this.props.colors.map((name, id) => <li key={id}>{name}</li>);

    return (
      <div>
        <ul>{items}</ul>
      </div>
    );
  }
}
