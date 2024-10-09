import React, { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      {
        id: Date.now(),
        text: itemName,
        dueDate: itemDueDate,
      },
    ]);
  };

  const deleteItem = (id) => {
    setTodoItems((currValue) => currValue.filter((item) => item.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
