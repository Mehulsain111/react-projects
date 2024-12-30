import { Dice } from "./dice";
import React, { useState } from "react";

export const Rolldice = ({ sides }) => {
  const [dice, setDice] = useState({
    die1: "one",
    die2: "two",
    rolling: false,
    totalscore: 4,
  });

  const { die1, die2, rolling, totalscore } = dice;

  const roll = () => {
    const newDie1Index = Math.floor(Math.random() * sides.length);
    const newDie2Index = Math.floor(Math.random() * sides.length);

    // Get the new dice faces
    const newDie1 = sides[newDie1Index];
    const newDie2 = sides[newDie2Index];

    // Extract scores directly from the selected die objects
    const score1 = parseInt(Object.keys(newDie1)[0], 10);
    const score2 = parseInt(Object.keys(newDie2)[0], 10);

    setDice({
      die1: newDie1[score1], // Get face name from the rolled score
      die2: newDie2[score2], // Get face name from the rolled score
      rolling: true,
      totalscore: score1 + score2,
    });

    setTimeout(() => {
      setDice((prevDice) => ({ ...prevDice, rolling: false }));
    }, 1000); // Delay in milliseconds
  };

  return (
    <>
      <div className="roll-dice w-50  m-auto">
        <div className="rolldice-container row   ">
          <div className="col">
            <Dice face={String(die1)} rolling={rolling}></Dice>
          </div>
          <div className="col">
            <Dice face={String(die2)} rolling={rolling}></Dice>
          </div>
        </div>
        <button className="btn btn-info mb-3" onClick={roll} disabled={rolling}>
          {rolling ? "Rolling..." : "Roll Dice"}
        </button>
        <p>Total score: {totalscore}</p>
      </div>
    </>
  );
};

// Default props for the Rolldice component
Rolldice.defaultProps = {
  sides: [
    { 1: "one" },
    { 2: "two" },
    { 3: "three" },
    { 4: "four" },
    { 5: "five" },
    { 6: "six" },
  ],
};
