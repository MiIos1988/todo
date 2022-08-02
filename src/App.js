import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Input from "./component/Input";
import TodoList from "./component/TodoList";

function App() {
  const [todo, setTodo] = useState([]);

  const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    let data = [];
    if (localStorage.data) {
      data = JSON.parse(localStorage.data);
      console.log(data);
      setTodo(data);
    }
  }, []);

  const markText = (index) => {
    todo[index].mark = !todo[index].mark;
    localStorage.data = JSON.stringify([...todo]);
    setTodo([...todo]);
  };

  const deleteState = (index) => {
    const finishDelete = todo.filter((el) => {
      return el.id !== index + 1;
    });
    localStorage.data = JSON.stringify(finishDelete);
    setTodo(finishDelete);
  };
  const newInput = (newState) => {
    const newTodo = { name: newState, mark: false, id: todo.length + 1 };
    localStorage.data = JSON.stringify([...todo, newTodo]);
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
