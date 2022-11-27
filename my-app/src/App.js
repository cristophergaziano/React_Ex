import { React } from "react";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { Routes, Route, Link } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

export function App() {
  return (
    <div>
      <Container title="My Not So Awesome App">
        <Routes>
          <Route path="/" element={<Welcome name="Bernard" />} />
          
          <Route path="counter" element={<Counter />} />
          <Route path="users/:username" element={<ShowGithubUser />} />
          
        </Routes>
      </Container>
    </div>
  );
}
