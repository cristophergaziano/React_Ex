import React from "react";

export class ClickCounter extends React.Component {
  state = { count: 0 };

  handleCounterIncrement() {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  }

  render() {
    return (
      <div>
        
        <p><button onClick={this.handleCounterIncrement.bind(this)}>
          Increment
        </button> 👈 Click the button on the left​ to increase the counter on the right 👉​ {this.state.count}</p>
        <p>Thank you! 🥰​</p>
      </div>
    );
  }
}
