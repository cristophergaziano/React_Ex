import { React } from "react";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { GithubUser } from "./GithubUser";
import GithubUserList from "./GithubUserList";
import NewCounter from "./NewCounter";

export function App() {
  return (
    <div>
      <Container title="My not-so-awesome App">
        <Welcome name="Bernard" />
        <NewCounter />
      </Container>
    </div>
  );
}
