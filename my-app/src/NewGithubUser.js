import { useEffect, useState } from "react";

const useGithubUser = (username) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser(username) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();

      setData(json);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubUser(username);
  }, [username]);

  return { data, error, loading };
};

const NewGithubUser = ({ username }) => {
  const { data, error, loading } = useGithubUser(username);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>There is an error!</p>}
      {data && (
        <p>
          {data.name} @ {data.url}
        </p>
      )}
    </div>
  );
};

export default NewGithubUser;
