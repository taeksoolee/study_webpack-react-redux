import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/store/counter";


export default function Counter() {
  const count = useSelector((s) => (s.counter.count));
  const dispatch = useDispatch();

  function handleClickIncrementBtn() {
    dispatch(increment(1));
  }

  function handleClickDecrementBtn() {
    dispatch(decrement(1));
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClickIncrementBtn}>+</button>
      <button onClick={handleClickDecrementBtn}>-</button>
    </div>
  )
}