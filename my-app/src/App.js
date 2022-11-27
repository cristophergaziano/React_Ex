import { React } from "react";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <div>
      <Container title="My Not So Awesome App">
        <Routes>
          <Route path="/" element={<Welcome name="Bernard" />} />
        </Routes>
      </Container>
    </div>
  );
}

// Create an App component that wraps a Routes component and add a single Route to the / path
// that renders the Welcome component from Function Components 01, passing it a name prop.
// Render the App component within a BrowserRouter component.
