import { useReducer } from "react";
import { counterReducer, counterState } from "../counterReducer";

const initialState: counterState = { count: 0 };

const CounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h1>CounterReducer</h1>
      <h3>Counter : {state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default CounterReducer;
