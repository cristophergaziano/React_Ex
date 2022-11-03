import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
        <div>
    <p>Welcome, {this.props.name}</p>
    <Age age={30}/>
    </div>
    )
  }
}

// Setting default value for props
Welcome.defaultProps = {
  name: "User",
};
