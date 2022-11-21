import { useEffect, useState } from "react";

export function ClickCounter() {
  const [counter, setCounter] = useState(0);

  function onCounterChange() {
    console.log(`The counter is ${counter}`);
  }

  useEffect(onCounterChange, [counter]);

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }

  return (
    <div>
      <p>
        <button onClick={handleCounterIncrement}>Increment</button> {counter}
      </p>
    </div>
  );
}
