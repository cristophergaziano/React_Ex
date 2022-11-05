import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  componentDidMount() {
    this._interval = setInterval(() => {
      this.setState((state) => {
        return {
          count: this.state.count + this.props.incrementAmount,
        };
      });
    }, this.props.incrementInterval);
  }

  componentDidUpdate(prevState) {
    if (this.state.count !== prevState.count) {
      return this.state.count;
    }
  }

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count <= 10 && this.state.count} />
      </div>
    );
  }
}
