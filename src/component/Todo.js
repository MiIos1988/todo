import React from "react";
import "../CSS/todo.css";
import "../CSS/mark.css";

function Todo({ todo, index, deleteState, markText }) {
  return (
    <div className="form">
      <div className="title">
        <h2> Todo: {index + 1} </h2>
      </div>
      <div className="content">
        <h1 className={todo.mark ? "markOn" : "markOff"}>{todo.name}</h1>
      </div>
      <div className="btn">
        <button
          onClick={() => {
            deleteState(index);
          }}
          className="delBtn"
        >
          Delet
        </button>
        <button
          onClick={() => {
            markText(index);
          }}
          className="markBtn"
        >
          Mark
        </button>
      </div>
    </div>
  );
}

export default Todo;
