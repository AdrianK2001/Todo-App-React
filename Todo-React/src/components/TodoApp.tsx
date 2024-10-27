import { useState } from "react";
import { Todo } from "../types";
import TodoForm from "./NewTodo";
import TodoList from "./TodoList";

function TodoApp() {
  let [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string) {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  function toggleTodoCompletion(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodoCompletion={toggleTodoCompletion}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default TodoApp;




