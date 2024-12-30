import { Timer } from "./timer";
import { ShuffleArray } from "./shuffleFunction";
import { useState } from "react";
export const Game = () => {
  const [filled, setfilled] = useState();
  return (
    <>
      <div className="bg-black text-info">
        <h1>welcome to puzzle game</h1>
        <Timer></Timer>
        <div>
          <ShuffleArray />
        </div>
      </div>
    </>
  );
};
