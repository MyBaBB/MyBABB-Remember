import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./Todo.css";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        { id: crypto.randomUUID(), title, completed: false },
        ...currentTodos,
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  function copyAllTodos() {
    let todosText = "";
    todos.forEach((todo) => {
      todosText += todo.title + "\n";
    });
    navigator.clipboard.writeText(todosText);
  }
  return (
    <>
      <div className="controlContainer m-auto   w-fit rounded-3xl border-2 border-black bg-gray-500 p-4  ">
        <NewTodoForm onSubmit={addTodo} />
        <div className="mt-4 mb-2 relative flex justify-between">

            <u>
              <span className="relative flex w-fit   pb-2 text-blue-100 font-LibreBaskerville-Italic text-base">
                Your Items :
              </span>
            </u> 
           
            <button
              onClick={() => {
                copyAllTodos();
                alert("📋Copied to ClipBoard");
              }}
              className="btn2 copyButton  font-Aclonica-Regular   hover:bg-white hover:text-black"
            >
              Copy All Lines
            </button>
                 
        </div>          
          

        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}
