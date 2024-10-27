import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  toggleTodoCompletion: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoItem({ todo, toggleTodoCompletion, deleteTodo }: TodoItemProps) {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <button onClick={() => toggleTodoCompletion(todo.id)}>
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
