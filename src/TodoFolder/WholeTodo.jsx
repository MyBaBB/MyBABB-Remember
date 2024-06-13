import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./Todo.css";
import { TodoList } from "./TodoList";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
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
  const [isOpen, setIsOpen] = useState(false);

  function toggleRandomEmoji() {
    setIsRandomEmojiEnabled((prevValue) => !prevValue);
  }

  function getRandomEmoji() {
    const emojis = [
      "🐠",
      "🦀",
      "🦈",
      "🐟",
      "🎣",
      "🪼",
      "🐬",
      "🐳",
      "🦞",
      "🦭",
      "🐚",
      "🪸",
      "🦑",
      "🐡",
      "🐋",
      "🐙",
      "🦐",
      "🐊",
      "🐍",
      "🐢",
    ];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return isRandomEmojiEnabled ? emojis[randomIndex] : "";
  }
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  // function copyAllTodos() {
  //   let todosText = "";
  //   todos.forEach((todo, index) => {
  //     todosText +=
  //       index + 1 + ". " + getRandomEmoji() + " " + todo.title + " " + "\n";
  //   });
  //   navigator.clipboard.writeText(todosText);
  // }

  function copyAllTodos() {
    let todosText = "";
    todos
      .slice()
      .reverse()
      .forEach((todo, index) => {
        todosText +=
          index + 1 + ". " + getRandomEmoji() + " " + todo.title + " " + "\n";
      });
    navigator.clipboard.writeText(todosText);
  }
  function copyAllTodosNormal() {
    let todosText = "";
    todos.forEach((todo, index) => {
      todosText +=
        index + 1 + ". " + getRandomEmoji() + " " + todo.title + " " + "\n";
    });
    navigator.clipboard.writeText(todosText);
  }

  return (
    <>
      <div
        className="controlContainer relative m-auto  w-fit rounded-3xl border-2 border-black
        p-4  "
        style={{ background: "radial-gradient(circle, #707070, #606060)" }}
      >
        <div className="relative flex-row ">
          <NewTodoForm onSubmit={addTodo} />
        </div>

        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />

        {/* Copy All Options Folder  Temporary xxxxxxx hidden xxxxxxxxx */}

        <div className="copyAllOptions hidden fit relative m-auto xs:mt-[-3rem]   w-[150px] flex-col items-center rounded-lg">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="btn3 relative m-auto flex w-full   items-center justify-between  rounded-lg 
         from-blue-700  to-blue-950 px-2 font-PTSerif-Bold text-blue-50 
             hover:bg-gradient-to-b  "
          >
            &nbsp;&nbsp;Options
            {isOpen ? (
              <AiOutlineCaretUp className="h-8" />
            ) : (
              <AiOutlineCaretDown className="h-8" />
            )}
          </button>

          {isOpen && (
            <div
              className="animate-open-menu relative  flex w-full origin-top flex-col 
          rounded-lg bg-grey-800 p-2  text-blue-200"
            >
              <div>
                <button
                  onClick={() => {
                    copyAllTodos();
                    alert("👉🏻 Copied All Items to your ClipBoard ✍🏻");
                  }}
                  className="btn2   copyButton   relative m-auto my-1 flex
           w-full justify-center   from-green-600
                 to-green-950    text-blue-50 hover:bg-gradient-to-b"
                >
                  {/* first button */}

                  <span
                    className="relative  flex w-full justify-between font-PTSerif-Bold 
           "
                  >
                    Copy All
                  </span>
                  <span>⬆️</span>
                </button>

                {/* second button */}

                <button
                  onClick={() => {
                    copyAllTodosNormal();
                    alert("👉🏻 Copied All Items to your ClipBoard ✍🏻");
                  }}
                  className="btn2 copyButton   relative m-auto my-1 flex
           w-full justify-center   from-green-600
                 to-green-950    text-blue-50 hover:bg-gradient-to-b"
                >
                  <span
                    className="relative  flex w-full justify-between font-PTSerif-Bold "
                  >
                    {" "}
                    Copy all{" "}
                  </span>
                  <span>⬇️</span>
                </button>

                {/* third button */}

                <div className="relative flex w-full  justify-center">
                  <button
                    onClick={toggleRandomEmoji}
                    className={`btn2 toggleButton  
                    w-full font-PTSerif-Bold m-auto  text-blue-100    
                  hover:bg-gradient-to-b ${
                    isRandomEmojiEnabled
                      ? "from-green-600 to-green-950"
                      : "from-red-600 to-red-950"
                  }`}
                  >
                    {isRandomEmojiEnabled ? "Add Fish Labels" : "Remove Fish"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
