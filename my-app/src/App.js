import React, { useState } from "react";
import Welcome from "./Welcome";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";

const App = () => {
  const [language, setLanguage] = useState("en");

  function handleLanguageChange(event) {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="it">Italiano</option>
      </select>
      <LanguageContext.Provider value={language}>
        <Container title="My not-so-awesome App">
          <Welcome />
        </Container>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
