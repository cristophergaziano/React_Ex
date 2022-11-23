// Create a GithubUser component that fetches the data of the username passed as a prop,
// and renders some of the data within a div tag. The API to query is https://api.github.com/users/${username}.

import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [username]);

  return (
    <div>
      <p>
        <h3>Name: {data && data.name}</h3>
      </p>
      <p>
        <h3>LinkedIn: {data && data.blog}</h3>
      </p>
      <p>
        <img src={data.avatar_url} alt="User Avatar"></img>
      </p>
    </div>
  );
}
