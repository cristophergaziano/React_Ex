import { React } from "react";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { Login } from "./Login";

export function App() {
  return (
    <div>
      <Container title="My not-so-awesome App">
        <Welcome name="Bernard" />
        <Login />
      </Container>
    </div>
  );
}
