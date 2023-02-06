"use client";
import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState([
    { todoText: "todo-1", completed: false },
    { todoText: "todo-2", completed: false },
  ]);

  const onChangeHandler = (myElem: any) => {
    const newTodos = todos.map((todo) => {
      if (todo.todoText === myElem.todoText) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo(" ")
  };

  const deleteTodo = (myTodo:any) => {
    const newTodos = todos.filter((todo) => {
        if (todo.todoText == myTodo.todoText)return false;
        return true;
    });
    setTodos(newTodos)
  }

  return (
    <>
      <div>Todo App</div>
      <input
        placeholder="Add to do"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((elem) => {
          return (
            <li
              style={{
                color: elem.completed ? "blue" : "grey",
                listStyle: "none",
              }}
            >
              <input
                type="checkbox"
                checked={elem.completed}
                onChange={() => {
                  onChangeHandler(elem);
                }}
              />
              {elem.todoText}
              <button onClick={() => {deleteTodo(elem)}} style={{color: "red"}}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
