import React from "react";
import Button from "@mui/material/Button";
import cl from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../action/CounterAction";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);

  return (
    <div>
      <div className={cl.main}>
        <h1>Counter</h1>
      </div>
      <div className={cl.wrapper}>
        <Button
          onClick={() => dispatch(increment())}
          variant="contained"
          size="large"
        >
          +
        </Button>
        <span className={cl.current}>{count}</span>
        <Button
          onClick={() => {
            dispatch(decrement());
          }}
          variant="contained"
          size="large"
        >
          -
        </Button>
      </div>
    </div>
  );
}
