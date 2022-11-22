import { useEffect, useState } from "react";

export function ClickCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`I have mounted`);

    return () => {
      console.log(`I'm unmounted`);
    };
  }, []);

  useEffect(onCounterChange, [counter]);

  function onCounterChange() {
    console.log(`The counter is ${counter}`);
  }

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
