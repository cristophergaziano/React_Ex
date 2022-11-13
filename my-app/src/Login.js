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

    componentDidUpdate() {
        console.log(this.state)
      }

  render() {
    return (
      <div>
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
        <button
        name="login"
        type="button"
        disabled={this.state.loginDisabled}
        onChange={this.handleInputChange}
        onClick={this.onLogin}>Login</button>
      </div>
    );
  }
}

// Add a "login" button to the Login component. 
// This button should be disabled as long as the username and password inputs are empty. 
// When clicked, the event handler attached to the button should call an onLogin function 
// passed as a prop to the Login component, passing it the state.
