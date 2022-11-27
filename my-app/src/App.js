import { React } from "react";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { Routes, Route, Link } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

export function App() {
  return (
    <div>
      <Container
        title={
          <div>
            <h1>"My Not So Awesome App"</h1>
            <h6><Link to="/">Back to Home</Link> | 
            <Link to="/counter">Check the counter!</Link> | 
            <Link to="/users/:username">Go to my profile!</Link></h6>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Welcome name="Bernard" />} />
          <Route path="counter" element={<Counter />} />
          <Route path="users/:username" element={<ShowGithubUser />} />
        </Routes>
      </Container>
    </div>
  );
}
