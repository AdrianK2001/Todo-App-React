import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (text: string) => void;
}

//Input

function TodoForm({ addTodo }: TodoFormProps) {
  let [newTodo, setNewTodo] = useState<string>("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
