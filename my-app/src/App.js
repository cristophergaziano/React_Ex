import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name={<strong>Cristopher</strong>} />
      </div>
    );
  }
}
