import useForm from "./useForm";

export const NewForm = () => {
  const { data, onForm, onConsoleLog } = useForm();

  return (
    <form>
      <input onChange={onForm} value={data.username} name="username" />
      <input onChange={onForm} value={data.password} type="password" name="password" />
      <button onClick={onConsoleLog}>Click to Console Log</button>
    </form>
  );
};

export default NewForm;
