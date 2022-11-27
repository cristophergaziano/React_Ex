import { React } from "react";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import FilteredList from "./FilteredList";

export function App() {

  const users = [
    {
      name: "Ugo",
      id: 1,
      age: 12,
    },
    {
      name: "Davide",
      id: 2,
      age: 19,
    },
    {
      name: "Teresa",
      id: 3,
      age: 16,
    },
    {
      name: "Fabrizio",
      id: 4,
      age: 21,
    },
  ];

  return (
    <div>
      <Container title="My not-so-awesome App">
        <Welcome name="Bernard" />
        <FilteredList users={users} />
      </Container>
    </div>
  );
}
