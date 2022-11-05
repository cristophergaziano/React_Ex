import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };



  render() {
    return (
      <div>
        <CounterDisplay
          count={
            this.state.count <= 10 && this.state.count
          }
        />
      </div>
    );
  }
}