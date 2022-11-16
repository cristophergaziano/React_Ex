import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div className="welcome">
        <Welcome name="Bernard"/>
      </div>
    );
  }
}
