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
  const [isRandomEmojiEnabled, setIsRandomEmojiEnabled] = useState(true);

  function toggleRandomEmoji() {
    setIsRandomEmojiEnabled((prevValue) => !prevValue);
  }

  function getRandomEmoji() {
    const emojis = ["🐠", "🦀", "🦈", "🐟", "🎣","🪼","🐬","🐳","🦞","🦭","🐚","🪸","🦑","🐡","🐋","🐙","🦐","🐊","🐍","🐢"];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return isRandomEmojiEnabled ? emojis[randomIndex] : "";
  }
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  function copyAllTodos() {
    let todosText = "";
    todos.forEach((todo, index) => {
      todosText +=  (index + 1) + ". " + getRandomEmoji()  + " " + todo.title + " " + "\n";
    });
    navigator.clipboard.writeText(todosText);
   
    
  }
  
  return (
    <>
      <div className="controlContainer relative m-auto  w-fit rounded-3xl border-2 border-black
        p-4  " style={{ background: 'radial-gradient(circle, #707070, #606060)' }}>
        <div className="relative flex-row ">
          <NewTodoForm onSubmit={addTodo} />
       
            
        </div> 

        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
         
         <button
            onClick={() => {
              copyAllTodos();
              alert("👉🏻 Copied All Items to your ClipBoard ✍🏻");
            }}
            className="btn2 copyButton relative flex justify-center m-auto    text-blue-50
                 font-PTSerif-Bold   hover:bg-gradient-to-b from-green-600 to-green-950"
          >
            Copy Everything
          </button>
          <div
            className="dataToolTip82  font-Caprasimo-Regular w-fit m-auto   "
            data-tool-tip="Memory Helper">
            <button
              onClick={toggleRandomEmoji}
              className={`btn2 mt-2 mb-8 toggleButton relative flex justify-center m-auto    text-blue-50
                font-PTSerif-Bold   hover:bg-gradient-to-b ${isRandomEmojiEnabled ? 'from-green-600 to-green-950' : 'from-red-600 to-red-950'}`}
            >
              {isRandomEmojiEnabled ? "Add Fish" : "No Fish"} 
            </button>

      </div>
      </div>
    </>
  );
}
