import useGithubUser from "./useGithubUser";

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
