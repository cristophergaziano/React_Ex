import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
    loginDisabled: true,
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const disabled = event.target.disabled;
    const type = event.target.type;

    this.setState({
      [name]: type === "button" ? disabled : value,
      loginDisabled: value === "" ? true : false
    });
  };

  handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    const name = event.target.name;

    this.setState({
      [name]: checked,
    });
  };

  handleLoginButtonChange = (event) => {
    const disabled = event.target.disabled;
    const name = event.target.name;

    this.setState({
        [name]: disabled,
      });
    };

    onLogin = (event) => {
        this.setState({
            username: this.state.username,
            password: this.state.password,
            remember: this.state.remember
        })
    }

    handleResetButton = (event) => {
        this.setState({
            username: "",
            password: "",
            remember: false,
            loginDisabled: true
        })
    }

  render() {
    return (
      <><div style={{border: "solid 1px red"}}><div>
        <h2>This is the Login form with controlled components</h2>
            <input
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
            ></input>
            <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
            ></input>
            <input
                name="remember"
                type="checkbox"
                checked={this.state.remember}
                onChange={this.handleCheckboxChange}
            ></input>
        </div><div>
                <button
                    name="login"
                    type="button"
                    disabled={this.state.loginDisabled}
                    onChange={this.handleInputChange}
                    onClick={this.onLogin}>Login</button>
                    <button
                    name="Reset"
                    type="button"
                    disabled={this.state.loginDisabled}
                    onChange={this.handleInputChange}
                    onClick={this.handleResetButton}>Reset</button>
            </div></div></>
    );
  }
}