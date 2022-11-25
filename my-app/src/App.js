import { React } from "react";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import NewForm from "./NewForm";

export function App() {
  return (
    <div>
      <Container title="My not-so-awesome App">
        <Welcome name="Bernard" />
        <NewForm />
      </Container>
    </div>
  );
}
