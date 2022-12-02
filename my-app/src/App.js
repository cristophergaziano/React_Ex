import { React } from "react";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { Login } from "./Login";
import CarDetails from "./CarDetails";

export function App() {
  return (
    <div>
      <Container title="My not-so-awesome App">
        <Welcome name="Bernard" />
        <CarDetails />
      </Container>
    </div>
  );
}
