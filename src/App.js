import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Input from "./component/Input";
import TodoList from "./component/TodoList";

function App() {
  const [todo, setTodo] = useState([]);

  // useEffect(() => {
  //   const data = localStorage.getItem("todo");
  //   if (data) {
  //     setTodo(JSON.parse(data));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  useEffect(() => {
    console.log(localStorage.getItem("todo"));
  }, [todo]);

  const markText = (index) => {
    todo[index].mark = !todo[index].mark;
    setTodo([...todo]);
  };

  const deleteState = (index) => {
    const finishDelete = todo.filter((el) => {
      return el.id !== index + 1;
    });
    setTodo(finishDelete);
  };
  const newInput = (newState) => {
    const newTodo = { name: newState, mark: false, id: todo.length + 1 };
    setTodo([...todo, newTodo]);
  };

  return (
    <div>
      <Header />
      <Input newInput={newInput} />
      <TodoList todos={todo} deleteState={deleteState} markText={markText} />
    </div>
  );
}

export default App;
