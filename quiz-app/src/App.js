import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Question } from "./component/Question";
import { qBank } from "./component/Questionbank";
import { Score } from "./component/score";
import "./App.css";

const App = () => {
  const [questionBank] = useState(qBank);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    checkAnswer();
    handleNextQuestion();
  };

  const checkAnswer = () => {
    if (selectedOption === questionBank[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questionBank.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedOption("");
    } else {
      setQuizEnd(true);
    }
  };

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center">
      <h1 className="app-title">QUIZ APP</h1>
      {!quizEnd ? (
        <Question
          question={questionBank[currentQuestion]}
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          onSubmit={handleFormSubmit}
        />
      ) : (
        <Score
          score={score}
          onNextQuestion={handleNextQuestion}
          className="score"
        />
      )}
    </div>
  );
};

export default App;
