// Create a CarDetails uncontrolled form that uses the HTML Form API to allow the user to insert details about a car,
// such as the model, the year and the color. Allow the form to receive a initialData prop that contains the default values of each input,
// and reset the form every time the initialData value changes.

import { useEffect, useRef } from "react";

const CarDetails = ({
  initialData = {
    model: "Renault Captur",
    year: "2021",
    color: "Light Yellow",
  },
}) => {
  const inputData = useRef();

  useEffect(() => {
    inputData.current.reset();
  }, [initialData]);
  // This is useful to reset data in case of updating data

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    inputData.current[name].value = value;
    console.log(inputData.current[name].value);
  };

  return (
    <div>
      <div>
        <h2>This is the Car Details uncontrolled components</h2>
        <form onChange={handleInputChange} ref={inputData}>
          <input name="model" defaultValue={initialData.model} />
          <input name="year" defaultValue={initialData.year} />
          <input name="color" defaultValue={initialData.color} />
        </form>
      </div>
    </div>
  );
};

export default CarDetails;
