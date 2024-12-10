import { useReducer, useState } from "react";
import { counterReducer, initialState } from "./CounterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [number, setNumber] = useState(0);
  //this function increments the counter by the number entered in the input field
  const handleDecrementByAmount = () => {
    dispatch({ type: "DECREMENT_BY_AMOUNT", payload: Number(number) });
    setNumber(0);
  };
  //this function decrements the counter by the number entered in the input field

  const handleIncrementByAmount = () => {
    dispatch({ type: "INCREMENT_BY_AMOUNT", payload: Number(number) });
    setNumber(0);
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>{" "}
      {/*this button is for incrementing the counter*/}
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>{" "}
      {/*this button is for decrementing the counter*/}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter number which you want to increment by"
      />{" "}
      {/*this input field takes the number which you want to increment or decrement the counter by the number*/}
      <button onClick={handleIncrementByAmount}>Increment By Amount</button>
      <button onClick={handleDecrementByAmount}>Decrement By Amount</button>
    </div>
  );
};

export default Counter;
