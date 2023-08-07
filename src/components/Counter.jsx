import React from "react";
import { useState,memo } from "react";

const Counter = ({data}) => {
  const [count, setCount] = useState(0);

  // console.log("Counter render");

  const handleAdd = (x) => setCount((pre) => pre + x);
  const handleRemove = (x) => setCount((pre) => pre - x);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => handleAdd(2)}>Add</button>
      <button onClick={() => handleRemove(3)}>Remove</button>
      <p>{data}</p>
    </div>
  );
};

export default memo(Counter);
