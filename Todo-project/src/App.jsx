// import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import TodoItems from "./component /TodoItems";
// import AddTodo from "./component /AddTodo";
// import React, { useState } from "react";
// import ContextElement from "../src/store/Todo-items";
// import WelcomeMessage from "./component /WelcomeMessage";
// function App() {
//   const todoItemslist = [
//     {
//       id: "02/01/2024  ",
//       text: "Do laundry",
//     },
//   ];

//   const [todoItems, settodoItems] = useState(todoItemslist);

//   const addnewitems = (itemName, itemDueDate) => {
//     settodoItems((currvalue) => [
//       ...currvalue,
//       {
//         id: Date.now(), // or use a better unique identifier
//         text: itemName,
//         dueDate: itemDueDate,
//       },
//     ]);
//   };

//   // const handlenewItem = (itemDueDate, itemName) => {
//   //   console.log(`New Added: ${itemName} date: ${itemDueDate}`);
//   //   const newTodoItems = [
//   //     ...todoItems,
//   //     {
//   //       id: Date.now(),
//   //       text: itemName,
//   //       dueDate: itemDueDate,
//   //     },
//   //   ];
//   //   settodoItems(newTodoItems);
//   // };

//   const deleteitems = (id) => {
//     settodoItems(todoItems.filter((item) => item.id !== id));
//   };

//   return (
//     // <ContextElement.Provider> in this case .Provider is for use as a component
//     <ContextElement.Provider value={{ todoItems, addnewitems, deleteitems }}>
//       <div className="container">
//         <h1>Todo List</h1>
//         <WelcomeMessage />
//         <AddTodo />
//         <TodoItems />
//       </div>
//     </ContextElement.Provider>
//   );
// }

// export default App;
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TodoItems from "../src/component /TodoItems";
import AddTodo from "../src/component /AddTodo";
import React from "react";
import { TodoProvider } from "../src/store/Todo-items";
import WelcomeMessage from "../src/component /WelcomeMessage";

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <h1>Todo List</h1>
        <WelcomeMessage />
        <AddTodo />
        <TodoItems />
      </div>
    </TodoProvider>
  );
}

export default App;
