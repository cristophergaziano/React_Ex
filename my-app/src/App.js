import { React } from "react";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import NewGithubUser from "./NewGithubUser";

export function App() {
  return (
    <div>
      <Container title="My not-so-awesome App">
        <Welcome name="Bernard" />
        <NewGithubUser username="cristophergaziano" />
      </Container>
    </div>
  );
}
