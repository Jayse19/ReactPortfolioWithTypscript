import React, { useState, useRef, FormEvent, useEffect } from "react";
import { TodoComponent } from "../Components/Todo";
import "./App.css";

export type Todo = {
  id: number;
  todo: string;
  isDone: boolean;
};

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>("")

  const handleAdd = (event: FormEvent) => {
    event.preventDefault();
    if (todo.length === 0) return;
    setTodos((prevTodos) => [
     ...prevTodos,
       {
        id: Date.now(),
        todo,
        isDone: false,
      },
    ]);
    setTodo("")
  };

  const deleteTodo = (id: number) => {
    console.log("deleteTodo", id)
    const deleteTheTodo = todos.filter((todo) => todo.id !== id)
    console.log(todos, deleteTheTodo)
    setTodos(deleteTheTodo);
  };

  const toggleDone = (id: number) => {
    console.log("toggleDone")
    const newToDos= todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    )
    setTodos(newToDos);
  };

  return (
     <div className="App">
      <h1>Example Todo List using Parent-child</h1>
      <form onSubmit={handleAdd}>
        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button type="submit">Add New</button>
      </form>
      <ul className="todos">
        {todos.map((todo) => (
          <TodoComponent
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            isDone={todo.isDone}
            deleteTodo={deleteTodo}
            toggleDone={toggleDone}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;