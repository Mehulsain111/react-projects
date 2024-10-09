import "./App.css";
import Button from "./component/Button";
import React, { useState } from "react";
import { InputBox } from "./component/InputBox";

function App() {
  const [toEnter, setToEnter] = useState("");
  const num = [
    "Ac",
    "%",
    "/",
    "*",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    ".",
    "0",
    "=",
  ];

  function handleButtonClick(btntxt) {
    if (btntxt === "Ac") {
      setToEnter("");
    } else if (btntxt === "=") {
      let output = eval(toEnter);
      setToEnter(output);
    } else {
      let newvalue = toEnter + btntxt;
      setToEnter(newvalue);
    }
  }

  return (
    <div className="container">
      <h1>Calculator</h1>
      <InputBox calval={toEnter} />
      <Button nums={num} clicked={handleButtonClick} />
    </div>
  );
}
export default App;
