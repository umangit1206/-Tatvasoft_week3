import React, { useState } from "react";

function CounterHook() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <h3>Count - {count}</h3>
      <button onClick={increment}>Counter Component</button>
    </>
  );
}

export default CounterHook;
