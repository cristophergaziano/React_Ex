// Create a GithubUserList component that maintains an array of usernames,
// showing a GithubUser component for each username entered.
// The usernames should be added to the array using an input field and a button.

import { useState } from "react";
import { GithubUser } from "./GithubUser";
import ShowGithubUser from "./ShowGithubUser";
import { Route, Routes, Link } from "react-router-dom";

export default function GithubUserList() {
  const [data, setData] = useState({
    inputField: "",
    usernames: [],
  });

  function handleInputSave(event) {
    event.preventDefault();
    setData((data) => {
      return {
        inputField: event.target.value,
        usernames: [...data.usernames],
      };
    });
  }

  const handleInputAdd = (event) => {
    event.preventDefault();

    setData((data) => {
      return {
        inputField: "",
        usernames: [...data.usernames, data.inputField],
      };
    });
  };

  return (
    <div>
      <Link to="/users/:username">
        Check the profile!
      </Link>
    </div>
  );
}
