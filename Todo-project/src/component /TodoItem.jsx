import React from "react";

export default function TodoItem({ id, text, onDelete }) {
  return (
    <div className="row mb-2 d-flex">
      <div className="col">{text}</div>
      <div className="col">{id}</div>
      <div className="col">
        <button
          className="btn btn-danger"
          onClick={() => onDelete({ id, text })}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
