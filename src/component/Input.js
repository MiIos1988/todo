import React, { useState } from "react";
import "../CSS/input.css";

function Input({ newInput }) {
  const [addTodo, setAddTodo] = useState();
  return (
    <div className="input">
      <input
        type="text"
        id="input"
        onChange={(e) => {
          const newTodo = e.target.value;
          setAddTodo(newTodo);
        }}
      />
      <button
        onClick={() => {
          newInput(addTodo);
          document.getElementById("input").value = "";
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Input;
