import React from "react";

function TodoItem({ todo, onDelete }) {
  return (
    <div className="todo-item">
      <span>{todo}</span>
      <button onClick={onDelete}>❌</button>
    </div>
  );
}

export default TodoItem;
