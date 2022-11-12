import React from "react";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    
    return (
      <div>
        <Welcome name = "John" />
        <Counter initialValue={0} incrementInterval={1000} incrementAmount={1}/>
        <ClickTracker />
        <InteractiveWelcome name={this.props.name}/>
        <Login />
      </div>
    );
  }
}
