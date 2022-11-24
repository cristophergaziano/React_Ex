import { useState } from "react";

const New = () => {
  const [data, setData] = useState("Hello");

  const dataString = () => {
    let data = "Hello world!";
    setData(data);
  };

  return (
    <div>
      {data}
      <button onClick={dataString}>Push</button>
    </div>
  );
};

export default New;
