import React from "react";
import { Age } from "./Age";
import { LanguageContext } from "./LanguageContext";
import {Link} from "react-router-dom"

const Strings = {
  en: {
    CURRENT_LANGUAGE: "Welcome, ",
  },
  it: {
    CURRENT_LANGUAGE: "Benvenuto, ",
  },
};

export function Welcome(props) {
  return (
    <div>
      {props.name === "John" ? (
        <div>
          <LanguageContext.Consumer>
            {(language) => {
              return (
                <div>
                  {Strings[language].CURRENT_LANGUAGE} {props.name}
                </div>
              );
            }}
          </LanguageContext.Consumer>{" "}
          <Age age={17} />
        </div>
      ) : (
        <div>
          <LanguageContext.Consumer>
            {(language) => {
              return (
                <div>
                  {Strings[language].CURRENT_LANGUAGE} {props.name}
                </div>
              );
            }}
          </LanguageContext.Consumer>
          
        </div>


      )}

<Link to="/counter">Check the counter!</Link>{" "}
<Link to="/users/:username">Go to my profile!</Link>
    </div>

    
  );
}

// Setting default value for props
Welcome.defaultProps = {
  name: "User",
};
