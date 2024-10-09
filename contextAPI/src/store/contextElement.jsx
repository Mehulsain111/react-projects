// import { useState, createContext } from "react";

// export const ContextElement = createContext(null);

// export const ContextProvider = (props) => {
//   const [count, setCount] = useState(0);
//   return (
//     <ContextElement.Provider value={{ count, name: "hello" }}>
//       {props.children}
//     </ContextElement.Provider>
//   );
// };

import { createContext, useState } from "react";

export const ContextElement = createContext(null);

export const ContextProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <ContextElement.Provider value={{ count, setCount, name: "rohit" }}>
        {props.children}
      </ContextElement.Provider>
    </>
  );
};
