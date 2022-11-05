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

  componentWillUnmount() {
    if (this._interval) {
        clearInterval(this._interval)
    }
  }

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