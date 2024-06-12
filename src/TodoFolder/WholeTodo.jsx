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
    todos.slice().reverse().forEach((todo, index) => {
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






        
<div className=" w-fit m-auto">Options</div>
        <button
          onClick={() => {
            copyAllTodos();
            alert("👉🏻 Copied All Items to your ClipBoard ✍🏻");
          }}
          className="btn2 copyButton relative m-auto flex justify-center    from-green-600
                 to-green-950   font-PTSerif-Bold text-blue-50 hover:bg-gradient-to-b"
        >
          Copy All ⬆️
        </button>
        <button
          onClick={() => {
            copyAllTodosNormal();
            alert("👉🏻 Copied All Items to your ClipBoard ✍🏻");
          }}
          className="btn2 mt-2  copyButton relative m-auto flex justify-center    from-green-600
                 to-green-950   font-PTSerif-Bold text-blue-50 hover:bg-gradient-to-b"
        >
          Copy all ⬇️
        </button>
        <div
          className="dataToolTip82  m-auto w-fit font-Caprasimo-Regular   "
          data-tool-tip="add Fish to your list"
        >
          <button
            onClick={toggleRandomEmoji}
            className={`btn2 toggleButton relative m-auto mb-8 mt-2  flex justify-center    font-PTSerif-Bold
                text-blue-50   hover:bg-gradient-to-b ${isRandomEmojiEnabled ? "from-green-600 to-green-950" : "from-red-600 to-red-950"}`}
          >
            {isRandomEmojiEnabled ? "Add Fish" : "No Fish"}
          </button>
        </div>
        <div className="tools relative flex h-[40px] w-[150px] flex-col items-center rounded-lg">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between rounded-lg border-4 
          border-transparent bg-[#243055] p-0 py-2 text-center font-Orbitron 
          text-lg font-bold tracking-wider text-blue-200 duration-300
          hover:bg-blue-200 hover:bg-opacity-20 active:border-white active:text-white"
        >
          &nbsp;&nbsp;Tool Box
          {isOpen ? (
            <AiOutlineCaretUp className="h-8" />
          ) : (
            <AiOutlineCaretDown className="h-8" />
          )}
        </button>

        {isOpen && (
          <div
            className="absolute top-[2.85rem] flex w-full flex-col items-start 
          rounded-lg bg-[#243055] p-1 text-blue-200"
          >
             
              <div>
                <a href="https://mybabb.github.io/MyBaBB_Password_Machine/">
                  <div
                    className="relative flex w-full flex-row justify-between
                   py-1 hover:rounded-lg hover:bg-blue-300"
                  >
                    <h3 className="font-bold "></h3>
                    <h3></h3>
                  </div>
                </a>

                <a href="https://mybabb.github.io/MyBABB-Remember/">
                  <div className="flex w-full flex-row justify-between hover:rounded-lg  hover:bg-blue-300   ">
                    <h3 className="font-bold"></h3>
                    <h3 className=""></h3>
                  </div>
                </a>
              </div>
            
          </div>
        )}
      </div>

        
      </div>
    </>
  );
}
