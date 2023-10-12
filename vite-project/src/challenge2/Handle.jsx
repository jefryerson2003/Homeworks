import React, { useState } from "react";

const handle = ({ value = 0}) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <div>
      <h1>Counter</h1>
      <span>{counter}</span>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default handle;
