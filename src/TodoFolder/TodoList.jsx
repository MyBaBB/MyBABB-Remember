import { TodoItem } from "./TodoItem";
import { useState } from "react";
import PropTypes from "prop-types";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };
  const [isReversed] = useState(false);

  const reversedTodos = isReversed ? todos.slice().reverse() : todos;

  return (
    <div>
      <ul className="list -mt-4 mb-2 text-center font-Itim-Regular">
        {reversedTodos.map((todo) => (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
