import React from "react";
import { useDispatch, useSelector } from "react-redux";

function incrementCount() {
  return { type: "count/increment" };
}

function Counter() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  function handleOnClick() {
    dispatch(incrementCount());
  }

  return (
    <div>
      <button onClick={handleOnClick}>Click</button>
      <p>{items.length}</p>
    </div>
  );
}

export default Counter;