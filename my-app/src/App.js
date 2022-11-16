import React from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";

export class App extends React.Component {
  render() {
    return (
      <div className="welcome">
        <Welcome name="Bernard" />
        <Counter />
      </div>
    );
  }
}
