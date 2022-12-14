import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
  en: {
    CURRENT_LANGUAGE: "The language is setted on english",
  },
  it: {
    CURRENT_LANGUAGE: "La lingua è impostata su italiano",
  },
};

export class DisplayLanguage extends React.Component {
  state = {
    CURRENT_LANGUAGE: "en",
  };

  render() {
    return (
      <LanguageContext.Consumer>
        {(language) => {
          return <h1>{Strings[language].CURRENT_LANGUAGE}</h1>;
        }}
      </LanguageContext.Consumer>
    );
  }
}
