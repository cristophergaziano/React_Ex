import { React } from "react";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import FilteredList from "./FilteredList";

export function App() {
  return (
    <div>
      <Container title="My not-so-awesome App">
        <Welcome name="Bernard" />
        <FilteredList />
      </Container>
    </div>
  );
}
