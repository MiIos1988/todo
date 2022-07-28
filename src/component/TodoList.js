import React from "react";
import Todo from "./Todo";

function TodoList({ todos, deleteState, markText }) {
  const listTodo = todos.map((todo, index) => {
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
