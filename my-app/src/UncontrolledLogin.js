import React from "react";

export class UncontrolledLogin extends React.Component {
  handleFormLogin = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({
      username,
      password,
      remember,
    });
  };

  handleLoginDisabled = () => {};

  render() {
    return (
      <div style={{ border: "solid 1px blue" }}>
        <div>
          <h2>This is the Login form with uncontrolled components</h2>
          <form onSubmit={this.handleFormLogin}>
            <input name="username" defaultValue="" autoFocus />
            <input name="password" type="password" defaultValue="" />
            <input name="remember" type="checkbox" defaultValue="" />
            <br />
            <button type="submit">Login</button>
            <button type="reset">Reset</button>
          </form>
        </div>
      </div>
    );
  }
}
