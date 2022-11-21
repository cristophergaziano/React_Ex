import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          fontWeight: 700,
          color: "darkgreen",
          border: "1px solid darkgreen",
          paddingLeft: "10px",
        }}
      >
        <CounterDisplay count={this.state.count <= 10 && this.state.count} />
      </div>
    );
  }
}
