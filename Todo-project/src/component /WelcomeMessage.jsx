import React, { useContext } from "react";
import TodoContext from "../store/Todo-items";

export default function WelcomeMessage() {
  const { todoItems } = useContext(TodoContext);

  return (
    <div>
      <h1>Welcome to Your Todo List!</h1>
      <p>You have {todoItems.length} items in your list.</p>
    </div>
  );
}
