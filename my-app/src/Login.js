import { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
    loginDisabled: true,
  });

  function handleInputChange(event) {
    const { value, name, disabled, checked, type } = event.target;

    setData({
      [name]: type === "checkbox" ? checked : value,
      [name]: type === "button" ? disabled : value,
      loginDisabled: value === "" ? true : false,
    });
  }

  function handleCheckboxChange(event) {
    const { name, checked } = event.target.checked;
    setData({
      [name]: checked,
    });
  }

  function handleResetButton(event) {
    setData({
      username: "",
      password: "",
      remember: false,
      loginDisabled: true,
    });
  }

  return (
    <>
      <div>
        <div>
          <h2>This is the Login form with controlled components</h2>
          <input
            name="username"
            value={data.username}
            onChange={handleInputChange}
          ></input>
          <input
            name="password"
            type="password"
            value={data.password}
            onChange={handleInputChange}
          ></input>
          <input
            name="remember"
            type="checkbox"
            checked={data.remember}
            onChange={handleCheckboxChange}
          ></input>
        </div>
        <div>
          <button
            name="login"
            type="button"
            disabled={data.loginDisabled}
            onChange={handleInputChange}
          >
            Login
          </button>
          <button
            name="Reset"
            type="button"
            onChange={handleInputChange}
            onClick={handleResetButton}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
