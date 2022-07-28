import React, { useState } from "react";
import Header from "./component/Header";
import TodoList from "./component/TodoList";

function App() {
  const [todo, setTodo] = useState([
    { name: "Learn react", mark: false, id: 1 },
    { name: "javascript", mark: false, id: 2 },
  ]);

  const markText = (index) => {
    
  };

  const deleteState = (index) => {
    const finishDelete = todo.filter((el) => {
      return el.id !== index + 1;
    });
    setTodo(finishDelete);
  };
  return (
    <div>
      <Header />
      <TodoList todos={todo} deleteState={deleteState} markText={markText} />
    </div>
  );
}

export default App;
