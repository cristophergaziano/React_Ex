import React from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Login } from "./Login";

export class App extends React.Component {
  render() {
    return (
      <div className="welcome">
        <Welcome name="Bernard" />
        <Counter />
        <Login />
      </div>
    );
  }
}
