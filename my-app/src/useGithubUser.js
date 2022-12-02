import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

const useGithubUser = ({ username }) => {
  const { data, error, mutate } = useSWR(
    username !== null ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  function handleRefresh() {
    mutate();
  }

  return { data, error, onRefresh: handleRefresh };
};

export default useGithubUser;
