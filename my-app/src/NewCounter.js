// Create a custom hook useCounter that keeps track of the state of a counter,
// and returns the current value of the counter as well as three functions to increment,
// decrement and reset the counter.

import { useCounter } from "./useCounter";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/Button";

const NewCounter = ({ initialValue = 0 }) => {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  return (
    <div>
      <p>Your counter is setted to {counter}</p>
      <p>What do you want to do?</p>
      <ButtonGroup
        variant="outlined"
        color="primary"
        size="small"
        aria-label="outlined small primary button group"
      >
        <Button onClick={onDecrement} disabled={counter < 1 ? true : false}>
          Decrement
        </Button>
        <Button onClick={onReset} disabled={counter < 1 ? true : false}>
          Reset
        </Button>
        <Button onClick={onIncrement}>Increment</Button>
      </ButtonGroup>
    </div>
  );
};

export default NewCounter;
