import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

const useGithubUser = ({ username }) => {
  const { data, error } = useSWR(
    username !== null ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  return { data, error };
};

export default useGithubUser;
