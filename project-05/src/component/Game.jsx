import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import React, { useState } from "react";

export const Game = () => {
  const [userval, setUserval] = useState("paper");
  const [computerVal, setComputerVal] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const choices = ["rock", "paper", "scissors"];

  const handleChoice = (choice) => {
    setUserval(choice);
    const compChoice = computerChoice();
    setComputerVal(compChoice);
    updateScore(choice, compChoice);
  };

  const computerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const updateScore = (userChoice, compChoice) => {
    if (userChoice === compChoice) return;

    if (
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissors" && compChoice === "paper")
    ) {
      setUserScore((prev) => prev + 1);
    } else {
      setComputerScore((prev) => prev + 1);
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-evenly my-4">
        <button
          className="btn btn-success d-flex"
          onClick={() => handleChoice("rock")}
        >
          <FaHandRock />
          <span className="p-sm-3">Rock</span>
        </button>
        <button
          className="btn btn-success d-flex"
          onClick={() => handleChoice("paper")}
        >
          <FaHandPaper />
          <span className="p-sm-3">Paper</span>
        </button>
        <button
          className="btn btn-success d-flex"
          onClick={() => handleChoice("scissors")}
        >
          <FaHandScissors />
          <span className="p-sm-3">Scissors</span>
        </button>
      </div>
      <h3 className="mt-5 ms-0">Your choice: {userval}</h3>
      <h3>Computer's choice: {computerVal}</h3>
      <h2>Your score: {userScore}</h2>
      <h2>Computer's score: {computerScore}</h2>
    </div>
  );
};
