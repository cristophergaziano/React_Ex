import { React, useState } from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { Login } from "./Login";

export function App() {

  const [showCounter, setShowCounter] = useState(true)

  function handleToggleCounter() {
    setShowCounter(s => !s)
  }
  return (
    <div>
      <Container title="My not-so-awesome App">
        <Welcome name="Bernard" />
        <hr></hr>
        <button onClick={handleToggleCounter}>Toggle counter</button>
        {showCounter && <Counter />}
      </Container>
    </div>
  );
}
