import React, { useState } from "react";
import validator from "validator";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [PasswordVisible, setPasswordVisible] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minUppercase: 1,
        minLowercase: 1,
        minSymbols: 1,
        minNumbers: 1,
      })
    ) {
      setErrMessage(`It is a strong password`);
    } else {
      setErrMessage("It is not a strong password");
    }
  };

  const togglePasswordDisplay = () => {
    setPasswordVisible((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validate(value);
  };
  return (
    <>
      <h1>Enter your password</h1>
      <input
        type={PasswordVisible ? "text" : "password"}
        placeholder="Enter password"
        onChange={handleOnChange}
      />
      <i className="fa-solid fa-eye" onClick={togglePasswordDisplay}></i>
      <p>{errMessage}</p>
    </>
  );
}

export default App;
