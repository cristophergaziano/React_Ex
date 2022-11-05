import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState((state) => {
        return {
          count: this.state.count + this.props.incrementAmount,
        };
      });
    }, this.props.incrementInterval);
  }

  render() {
    return (
        <div>
        <CounterDisplay count={this.state.count<= 10 ? this.state.count : this.state.count=0}/>
      </div>
    );
  }
}
