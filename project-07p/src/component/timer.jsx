import React, { useEffect, useState } from "react";

export const Timer = () => {
  const [timeleft, settimeLeft] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      settimeLeft((prevtime) => {
        if (prevtime <= 0) {
          clearInterval(interval);
          return 1;
        }
        return prevtime - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="d-flex justify-content-evenly justify-content-center w-50 m-auto">
        <p>Moves: 0</p>
        <p>Time: {timeleft}s</p>
      </div>
    </>
  );
};
