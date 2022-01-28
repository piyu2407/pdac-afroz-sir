import React from "react";
import { useState } from "react";

export const Counter = () => {
  console.log("check if the state has updated");

  const [text, setText] = useState(" Guest ");
  const [count, setCount] = useState(100);
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <h1> Hello {text} </h1>

      <button onClick={() => count <= 99 && setCount(count + 1)}>
        {" "}
        Increment{" "}
      </button>
      <h1> Value : {count} </h1>
      <button onClick={() => count >= 1 && setCount(count - 1)}>
        {" "}
        Decrement{" "}
      </button>
    </div>
  );
};

export default Counter;
