import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./Todo.css";
import { TodoList } from "./TodoList";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import WebApp from "../components/MainWrapper/PWAFolder/WebApp";
import { GiClick } from "react-icons/gi";
import { IoFishOutline } from "react-icons/io5";
import { CgCopy } from "react-icons/cg";
// import    NightOcean  from "../assets/nightOcean.jpg";

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
      const newTodo = { id: crypto.randomUUID(), title, completed: false };
      if (addToTop) {
        return [newTodo, ...currentTodos];
      } else {
        return [...currentTodos, newTodo];
      }
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

  const [isOpen, setIsOpen] = useState(false);

  const [isTodoOrderReversed, setIsTodoOrderReversed] = useState(false);

  function toggleTodoOrder() {
    // Directly use prevValue to decide if the order should be reversed
    const reversedTodos = !isTodoOrderReversed ? [...todos].reverse() : todos;
    setTodos(reversedTodos);
    setIsTodoOrderReversed(!isTodoOrderReversed); // Update the state based on the new value

    // Since we're now setting the state synchronously within the same function,
    // we don't need to rely on the previous state value here anymore.
    localStorage.setItem("todos", JSON.stringify(reversedTodos));
  }
  // Here I need to write the function that toggles the top and bottom
  const [addToTop, setAddToTop] = useState(true);
  const [isAddToTopEnabled, setIsAddToTopEnabled] = useState(false);
  // const [isAddToBottomEnabled, setAddToBottomEnabled] = useState(true);

  function toggleAddToTop() {
    setAddToTop((prevValue) => !prevValue);
  }
  function toggleAddToTopEnabled() {
    setIsAddToTopEnabled((prevValue) => !prevValue);
  }

  // function toggleAddToBottom() {
  //   setAddToBottomEnabled( );
  // }

  const [isRandomEmojiEnabled, setIsRandomEmojiEnabled] = useState(true);
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

        <div
          className="copyAllOptions    fit relative m-auto w-[143px]   flex-col items-center rounded-lg
         xs:mt-[-3rem]"
        >
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="btn3 relative z-50  m-auto -mb-2 -mt-4 flex w-full items-center   
            justify-between rounded-[5px]  bg-gray-500 
           from-blue-700 to-blue-950 px-2 font-PTSerif-Bold text-blue-50 hover:bg-gradient-to-b 
             xxs:mt-4 xs:mt-10  "
          >
            &nbsp;&nbsp;Options
            {isOpen ? (
              <AiOutlineCaretUp size={20} color="#00bfff" />
            ) : (
              <AiOutlineCaretDown size={20} color="#00bfff" />
            )}
          </button>

          <div
            className={`bg-grey-800 relative z-50 flex w-full origin-top flex-col rounded-lg p-2 text-blue-200 ${
              isOpen ? "animate-open-menu" : "animate-close-menu"
            }`}
          >
            <div>
              <button
                onClick={() => {
                  copyAllTodosNormal();
                  const alertBox = document.createElement("div");
                  alertBox.textContent =
                    "👉🏻 Copied Your List to your ClipBoard ✍🏻   ";
                  alertBox.classList.add(
                    "fixed",
                    "top-1/2",
                    "left-1/2",
                    "transform",
                    "-translate-x-1/2",
                    "-translate-y-1/2",
                    "bg-red-950",
                    "py-2",
                    "px-4",
                    "border-2",
                    "border-yellow-800",
                    "rounded-lg",
                    "shadow-lg",
                    "z-50",
                  );
                  document.body.appendChild(alertBox);
                  setTimeout(() => {
                    alertBox.remove();
                  }, 2000);
                }}
                className="btn2 copyButton   relative m-auto my-1 flex
           w-full justify-center   from-green-600
                 to-green-950    text-blue-50 hover:bg-gradient-to-b"
              >
                <span className="relative  flex w-full justify-between font-PTSerif-Bold ">
                  {" "}
                  Copy List{" "}
                </span>
                <span className="inline-block">
                  <CgCopy />
                </span>
              </button>

              {/*3rd button */}

              <div className="   w-full   ">
                <button
                  onClick={toggleRandomEmoji}
                  className={`btn2 toggleButton relative flex  w-full  
                    justify-between font-PTSerif-Bold  text-blue-100    
                  hover:bg-gradient-to-b  ${
                    isRandomEmojiEnabled
                      ? "from-green-600 to-green-950"
                      : "from-red-600 to-red-950"
                  }`}
                >
                  {isRandomEmojiEnabled ? " Fish On" : "Fish Off "}
                  <span className="inline-block  ">
                    <IoFishOutline size={20} />
                  </span>
                </button>
              </div>
              <div className="   w-full   ">
                <button
                  onClick={() => {
                    toggleAddToTopEnabled();
                    toggleAddToTop();
                  }}
                  className={`btn2 toggleButton relative flex  w-full  
                    justify-between font-PTSerif-Bold  text-blue-100    
                  hover:bg-gradient-to-b  ${isAddToTopEnabled ? "from-red-600 to-red-950" : "from-green-600 to-green-950"}`}
                >
                  {isAddToTopEnabled ? " Bottom" : "Top "}

                  <span className="inline-block  ">
                    <IoFishOutline size={20} />
                  </span>
                </button>
              </div>

              <button
                onClick={toggleTodoOrder}
                className="btn2 copyButton   relative m-auto my-1 flex
            w-full justify-center   from-green-600
                  to-green-950    text-blue-50 hover:bg-gradient-to-b"
              >
                <span className="relative  flex w-full justify-between font-PTSerif-Bold ">
                  {" "}
                  Reverse{" "}
                </span>
                <span className="inline-block whitespace-nowrap"></span>
                <GiClick size={25} />
                &nbsp;2x
              </button>
            </div>
          </div>
        </div>
        <div className="relative z-[0]  mt-[-9.5rem] flex justify-center xxs:mt-[-9.5rem]  xs:mt-[-9.5rem]">
          {/* <img src={NightOcean} alt="Ocean at Night" className="rounded-lg"></img> */}
        </div>
        <div className=" mb-[-1rem] mt-[1rem]">
          <WebApp />
        </div>
      </div>
    </>
  );
}
