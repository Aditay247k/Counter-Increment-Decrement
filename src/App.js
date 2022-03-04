import "./styles.css";
import React, { useState } from "react";

function App() {
  const state = useState();
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <h1> {counter}</h1>
      <div>
        <button onClick={decrementCounter}>-</button>
        <button onClick={incrementCounter}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}
export default App;
