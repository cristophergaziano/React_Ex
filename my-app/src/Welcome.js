import React from "react";
import { Age } from "./Age";
import { LanguageContext } from "./LanguageContext";

const Strings = {
  en: {
    CURRENT_LANGUAGE: "Welcome, ",
  },
  it: {
    CURRENT_LANGUAGE: "Benvenuto, ",
  },
};

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        {this.props.name === "John" ? (
          <div>
            <p>
              <LanguageContext.Consumer>
                {(language) => {
                  return (
                    <div>
                      {Strings[language].CURRENT_LANGUAGE} {this.props.name}
                    </div>
                  );
                }}
              </LanguageContext.Consumer>{" "}
            </p>
            <Age age={17} />
          </div>
        ) : (
          <div>
            <p>
              <LanguageContext.Consumer>
                {(language) => {
                  return (
                    <div>
                      {Strings[language].CURRENT_LANGUAGE} {this.props.name}
                    </div>
                  );
                }}
              </LanguageContext.Consumer>
            </p>
          </div>
        )}
      </div>
    );
  }
}

// Setting default value for props
Welcome.defaultProps = {
  name: "User",
};
