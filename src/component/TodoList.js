import React from "react";
import Todo from "./Todo";

function TodoList({ todoAll, deleteState, markText }) {
  const listTodo = todoAll.map((todo, index) => {
    return (
      <Todo
        todo={todo}
        index={index}
        key={index}
        deleteState={deleteState}
        markText={markText}
      />
    );
  });
  return <div className="container">{listTodo}</div>;
}

export default TodoList;
