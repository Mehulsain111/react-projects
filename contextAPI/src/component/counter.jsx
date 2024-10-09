import { useReducer } from "react";
//import { ContextElement } from "../store/contextElement";
const initializer = 0;
const reducer = (state, action) => {
  if (action.type === "Increment") {
    return state + 1;
  }
  if (action.type === "Decrement") {
    return state - 1;
  }
  return state;
};
const Counter = () => {
  // const { count, setCount } = useContext(ContextElement);

  const [state, dispatch] = useReducer(reducer, initializer);

  return (
    <>
      <h2>Counter: {state}</h2>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </>
  );
};

export default Counter;
