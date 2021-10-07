import React, { useState } from "react";
import "./App.scss";
import Modal from "./Components/Modal/Modal";

import Todo from "./Components/Todo/Todo";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(window.localStorage.getItem("todos")) || [
      { id: 0, title: "Wake up", isCompleted: false },
    ]
  );

  const handleKeyUpInput = (evt) => {
    if (evt.code === "Enter" && evt.target.value.trim() !== "") {
      const newTodo = {
        id: todos[todos.length - 1]?.id + 1 || 0,
        title: evt.target.value.trim(),
        isCompleted: false,
      };

      setTodos([...todos, newTodo]);
      window.localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
      evt.target.value = null;
    }
  };

  const handleCompleteTodo = (evt) => {
    const { id } = evt.target.dataset;

    const foundTodo = todos.find((row) => row.id === Number(id));
    foundTodo.isCompleted = !foundTodo.isCompleted;
    setTodos([...todos]);
    window.localStorage.setItem("todos", JSON.stringify([...todos]));
  };

  const handleRemoveTodo = (evt) => {
    const { id } = evt.target.dataset;

    const filteredTodos = todos.filter((row) => row.id !== Number(id));
    setTodos(filteredTodos);
    window.localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };
  const [open, setOpen] = React.useState(false);
  return (
    <div className="todos">
      <button className="open-modal-btn" onClick={() => setOpen(true)}>
        open modal
      </button>
      <h1 className="todos__heading">todos list</h1>
      <input
        className="todo__input"
        type="text"
        placeholder="What needs to be done?"
        onKeyUp={handleKeyUpInput}
      />
      <ul className="todos__list">
        {todos.length > 0 &&
          todos.map((row) => (
            <Todo
              key={row.id}
              title={row.title}
              id={row.id}
              row={row}
              removeTodo={handleRemoveTodo}
              completeTodo={handleCompleteTodo}
            />
          ))}
      </ul>

      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
