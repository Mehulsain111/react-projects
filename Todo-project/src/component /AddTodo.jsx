// import React, { useState, useRef } from "react";
// import { FaBeer } from "react-icons/fa";
// import { useContext } from "react";
// import ContextElement from "../store/Todo-items";
// function AddTodo() {
//   // const [itemName, setItemName] = useState("");
//   // const [itemDueDate, setItemDueDate] = useState("");
//   const nameNewElement = useRef();
//   const dateNewElement = useRef();
//   const { addnewitems } = useContext(ContextElement);
//   /* useRef is a hook that allows you to access and manipulate the DOM directly. It provides a reference to the element, but it doesn't trigger a re-render when its content changes.
//   => useState is a hook that allows you to manage the state of a component. When the state changes, the component re-renders with the new state.*/
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // if (itemName && itemDueDate) {
//     // THIS THE METHOD TO  GET THE VALUE OF THE INPUT
//     const itemName = nameNewElement.current.value;
//     const itemDueDate = dateNewElement.current.value;
//     // THIS IS  THE METHOD TO CALL THE FUNCTION THAT IS IN THE PARENT COMPONENT
//     nameNewElement.current.value = "";
//     dateNewElement.current.value = "";
//     addnewitems(itemName, itemDueDate);
//     // } else {
//     //  alert("Please fill in both fields");
//     //  }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-3">
//       <div className="input-group">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Task Name"
//           ref={nameNewElement}
//           // value={itemName}
//           // onChange={(e) => setItemName(e.target.value)}
//         />
//         <input
//           type="date"
//           className="form-control"
//           ref={dateNewElement}
//           // value={itemDueDate}
//           // onChange={(e) => setItemDueDate(e.target.value)}
//         />
//         <button type="submit" className="btn btn-primary">
//           <FaBeer />
//         </button>
//       </div>
//     </form>
//   );
// }

// export default AddTodo;
import React, { useRef, useContext } from "react";
import { FaBeer } from "react-icons/fa";
import TodoContext from "../store/Todo-items";

function AddTodo() {
  const nameNewElement = useRef();
  const dateNewElement = useRef();
  const { addNewItem } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemName = nameNewElement.current.value;
    const itemDueDate = dateNewElement.current.value;

    if (itemName && itemDueDate) {
      addNewItem(itemName, itemDueDate);
      nameNewElement.current.value = "";
      dateNewElement.current.value = "";
    } else {
      alert("Please fill in both fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Task Name"
          ref={nameNewElement}
        />
        <input type="date" className="form-control" ref={dateNewElement} />
        <button type="submit" className="btn btn-primary">
          <FaBeer />
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
