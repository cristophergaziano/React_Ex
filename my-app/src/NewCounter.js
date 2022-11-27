// Create a custom hook useCounter that keeps track of the state of a counter,
// and returns the current value of the counter as well as three functions to increment,
// decrement and reset the counter.

import { useCounter } from "./useCounter";

const NewCounter = ({ initialValue = 0 }) => {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  return (
    <div>
      <p>Your counter is setted to {counter}</p>
      <p>What do you want to do?</p>
      <button onClick={onDecrement} disabled={counter < 1 ? true : false}>
        Decrement
      </button>
      <button onClick={onReset} disabled={counter < 1 ? true : false}>
        Reset
      </button>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};

export default NewCounter;
