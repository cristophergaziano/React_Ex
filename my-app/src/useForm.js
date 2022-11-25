import { useState } from "react";

const useForm = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const onForm = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onConsoleLog = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return { data, onForm, onConsoleLog };
};

export default useForm;
