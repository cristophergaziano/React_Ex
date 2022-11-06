import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        {this.props.name === "John" ? (
          <div>
            <p>Welcome, {this.props.name}</p>
            <Age age={17} />
          </div>
        ) : (
          <div>
            <p>Welcome, {this.props.name}</p>
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
