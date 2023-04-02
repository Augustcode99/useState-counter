import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(5);

  function decrement() {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  }
  function increment() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
