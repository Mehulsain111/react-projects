import React, { useContext } from "react";
import TodoContext from "../store/Todo-items";
import TodoItem from "../component /TodoItem";

function TodoItems() {
  const { todoItems, deleteItem } = useContext(TodoContext);

  return (
    <ul className="list-group">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          onDelete={deleteItem}
        />
      ))}
    </ul>
  );
}

export default TodoItems;

// import React, { useContext } from "react";
// import TodoContext from "../store/Todo-items";

// function TodoItems({ onDelete }) {
//   const { items } = useContext(TodoContext); // Adjust based on how your context is structured

//   // Log items to check its structure
//   console.log(items);

//   return (
//     <ul className="list-group">
//       {items && items.length > 0 ? (
//         items.map((item) => (
//           <li
//             key={item.id}
//             className="list-group-item d-flex justify-content-between"
//           >
//             <div>
//               <strong>{item.text}</strong>
//               <div>Due Date: {item.dueDate}</div>
//             </div>
//             <button
//               onClick={() => onDelete(item.id)}
//               className="btn btn-danger"
//             >
//               Delete
//             </button>
//           </li>
//         ))
//       ) : (
//         <li className="list-group-item">No items found.</li>
//       )}
//     </ul>
//   );
// }
