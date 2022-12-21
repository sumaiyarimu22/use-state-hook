import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handlerIncrement = (iteration = 1) => {
    setCount((prevCount) => prevCount + iteration);
  };
  const handlerDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => handlerIncrement(5)}>Increment Five</button>
      <button onClick={() => handlerIncrement(10)}>Increment Ten</button>
      <button onClick={handlerDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset Counter</button>
    </div>
  );
};

export default Counter;
