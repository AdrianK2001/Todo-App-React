import { Todo } from "../types";
import TodoItem from "./TodoItem";


interface TodoListProps {
  todos: Todo[];
  toggleTodoCompletion: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoList({ todos, toggleTodoCompletion, deleteTodo }: TodoListProps) {
  return (
    <ul>    
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodoCompletion={toggleTodoCompletion}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
