import React from "react";
import { CounterDisplay } from "./CounterDisplay";
import {Link} from "react-router-dom"

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          color: "darkgreen",
          border: "1px solid darkgreen",
          paddingLeft: "10px",
        }}
      >
        <CounterDisplay count={this.state.count <= 10 && this.state.count} />
        <Link to="/">Back to Home</Link>{" "}
        <Link to="/users/:username">Go to my profile!</Link>
      </div>
    );
  }
}
