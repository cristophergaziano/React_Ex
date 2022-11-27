import useGithubUser from "./useGithubUser";

const GithubUser = (username) => {
  const { data, error } = useGithubUser(username);
  return (
    <div>
      {!data && !error && <h3>Loading...</h3>}
      {error && <h3>An error has occured.</h3>}
      {data && !error && (
        <h3>
          Name: {data && data.name}
          <br></br>LinkedIn: {data && data.blog}
        </h3>
      )}
    </div>
  );
};

export default GithubUser;
