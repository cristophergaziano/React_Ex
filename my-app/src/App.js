import React from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { Sum } from "./Sum";

export class App extends React.Component {
  state = {
    language: "en",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <p className="select-language">Select language: {" "}
        <select className="select-button" value={this.state.language} onChange={this.handleLanguageChange}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        </p>
        <LanguageContext.Provider value={this.state.language}>
        <Container title="My not-so-awesome App">
          <Welcome name="Bernard" />
          <DisplayLanguage />
          <Counter />
          <Sum numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/>
        </Container>
        </LanguageContext.Provider>
      </div>
    );
  }
}
