/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    //     <ul className="list -mt-4 mb-2 text-center font-Itim-Regular">
    //       {todos.length === 0 && "Your Notes Appear Here"}
    //       {todos.map((todo) => {
    //         return (
    //           <TodoItem
    //             {...todo}
    //             key={todo.id}
    //             toggleTodo={toggleTodo}
    //             deleteTodo={deleteTodo}
    //           />
    //         );
    //       })}
    //     </ul>
    //   );
    // }

    <ul className="list -mt-4 mb-2 text-center font-Itim-Regular">
      {todos
        .slice()
        .reverse()
        .map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
    </ul>
  );
}
