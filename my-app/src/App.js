import React from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Login } from "./Login";
import { Container } from "./Container";

export class App extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Welcome name="Bernard" />
          <Counter />
          <Login />
        </div>
      </Container>
    );
  }
}
