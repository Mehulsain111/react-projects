import "./App.css";
import { useContext } from "react";
import Counter from "./component/counter";
import { ContextElement } from "./store/contextElement";
function App() {
  const counterState = useContext(ContextElement);
  console.log(counterState, "context");

  return (
    <>
      <h1>Counter 0</h1>
      <Counter></Counter>
    </>
  );
}

export default App;
