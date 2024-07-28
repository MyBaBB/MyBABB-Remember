import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./Todo.css";
import { TodoList } from "./TodoList3";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import WebApp from "../components/MainWrapper/PWAFolder/WebApp";
import { GiClick } from "react-icons/gi";
import { IoFishOutline } from "react-icons/io5";
import { CgCopy } from "react-icons/cg";
import Lagoon from "../assets/lagoon400x200.jpg";
import Lagoon240px from "../assets/lagoon240x190.jpg";
import Copyright from "../components/Copyright";

export default function WholeTodo3() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS3");

    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS3", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      const newTodo = { id: crypto.randomUUID(), title, lockedTodo: false };
      if (addToTop) {
        return [newTodo, ...currentTodos];
      } else {
        return [...currentTodos, newTodo];
      }
    });
  }

  function toggleTodo(id, lockedTodo) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, lockedTodo };
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
  }

  // switches input from top to bottom
  const [addToTop, setAddToTop] = useState(true);
  const [isAddToTopEnabled, setIsAddToTopEnabled] = useState(false);

  function toggleAddToTop() {
    setAddToTop((prevValue) => !prevValue);
  }
  function toggleAddToTopEnabled() {
    setIsAddToTopEnabled((prevValue) => !prevValue);
  }

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

  function copyAllTodosNormal() {
    let todosText = "";
    todos
      .filter((todo) => !todo.lockedTodo)
      .forEach((todo, index) => {
        const emoji = getRandomEmoji();
        todosText += index + 1 + ". " + emoji + " " + todo.title + " " + "\n";
      });
    navigator.clipboard.writeText(todosText);
  }

  // function copyAllTodosNormal2() {
  //   let todosText = "";
  //   todos.forEach((todo, index) => {
  //     if (!todo.lockedTodo) {
  //       const emoji = todo.lockedTodo ? "✅" : getRandomEmoji();
  //       todosText +=
  //         index + 1 + ". " + emoji + " " + todo.title + " " + "\n";
  //     }
  //   });
  //   navigator.clipboard.writeText(todosText);
  // }

  return (
    <>
      <div className=" relative m-auto    h-fit min-h-screen w-screen justify-center p-4 ">
        <div
          className="controlContainer relative m-auto w-[95%] max-w-[550px] flex-row rounded-3xl
         border-2 border-black  p-4"
          style={{ background: "radial-gradient(circle,   #606060, #374032)" }}
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
            className="copyAllOptions 
          relative z-[1] m-auto    mt-[-1.3rem] flex-col 
           items-center  rounded-lg px-[2rem]"
          >
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="btn3 relative  z-50 m-auto mt-4  flex w-[80%] items-center   
            justify-between rounded-[5px]   
           from-[#00bfff] to-blue-950 px-2 font-PTSerif-Bold
          hover:bg-gradient-to-b "
            >
              &nbsp;&nbsp;Options
              {isOpen ? (
                <AiOutlineCaretUp size={20} color=" #a3e1f5 ;" />
              ) : (
                <AiOutlineCaretDown size={20} color=" #a3e1f5 ;" />
              )}
            </button>

            <div
              className={`bg-grey-800 relative z-50 flex w-full  origin-top flex-col rounded-lg p-1  
               text-blue-200 ${isOpen ? "animate-open-menu" : "animate-close-menu"}`}
            >
              <div className="subButtonWrapper  m-auto w-full ">
                <button
                  onClick={() => {
                    copyAllTodosNormal();

                    const alertBox = document.createElement("div");
                    alertBox.textContent =
                      " All '' Unlocked '' Items Copied to ClipBoard ✍🏻";
                    alertBox.classList.add(
                      "fixed",
                      "bottom-[25%]",
                      "left-[50%]",
                      "transform",
                      "-translate-x-[50%]",
                      "-translate-y-[3.4rem]",
                      "bg-red-950",
                      "py-2",
                      "px-4",
                      "border-2",
                      "border-yellow-800",
                      "rounded-lg",
                      "shadow-lg",
                      "z-50",
                      "font-PTSerif-Bold",
                    );
                    document.body.appendChild(alertBox);
                    setTimeout(() => {
                      alertBox.remove();
                    }, 2000);
                  }}
                  className="btn2  copyButton   relative m-auto my-1 flex
            justify-center   from-green-600
                 to-green-950    hover:bg-gradient-to-b "
                >
                  <span className="relative flex w-full justify-between  font-PTSerif-Bold text-[9px] xxs:text-[12px] xs:text-[15px] ">
                    {" "}
                    <span className="font-PTSerif-Bold  ">Copy List</span>
                    <span className="text-9px absolute left-1/2 hidden translate-x-[0%] text-[9px]  text-blue-300 sm:block">
                      (The Entire List)
                    </span>{" "}
                  </span>
                  <span className="inline-block">
                    <CgCopy />
                  </span>
                </button>

                {/*3rd button */}

                <div className="mb-1   w-full   ">
                  <button
                    onClick={toggleRandomEmoji}
                    className={`btn2 toggleButton relative m-auto flex    
                    justify-between font-PTSerif-Bold      
                  text-[9px] hover:bg-gradient-to-b xxs:text-[12px] xs:text-[15px]  ${
                    isRandomEmojiEnabled
                      ? "from-green-600 to-green-950"
                      : "from-red-600 to-red-950"
                  }`}
                  >
                    {isRandomEmojiEnabled ? " Indicator On" : "Indicator Off "}
                    <span className="text-9px absolute left-1/2 hidden translate-x-[-20%] text-[9px]  text-blue-300 sm:block">
                      (Enables Fish Icons)
                    </span>
                    <span className="inline-block  ">
                      <IoFishOutline size={20} />
                    </span>
                  </button>
                </div>

                <button
                  onClick={() => {
                    toggleAddToTopEnabled();
                    toggleAddToTop();
                  }}
                  className={`btn2 toggleButton  relative m-auto  flex   
                    justify-between font-PTSerif-Bold       
                  hover:bg-gradient-to-b  ${isAddToTopEnabled ? "from-green-950 to-green-600" : "from-green-600 to-green-950"}`}
                >
                  {isAddToTopEnabled ? (
                    <div className="relative flex w-full justify-between ">
                      <span className="font-PTSerif-Bold text-[9px] xxs:text-[12px] xs:text-[15px] ">
                        Bottom Feeder
                      </span>
                      <span className="text-9px absolute left-1/2 hidden translate-x-[0%] text-[9px]  text-blue-300 sm:block">
                        (Input at Bottom)
                      </span>
                      <span>
                        <AiOutlineCaretDown size={20} />
                      </span>
                    </div>
                  ) : (
                    <div className="relative flex w-full justify-between ">
                      <span className="font-PTSerif-Bold text-[9px] xxs:text-[12px]  xs:text-[15px]">
                        Top Feeder
                      </span>
                      <span className="text-9px absolute left-1/2 hidden translate-x-[0%] text-[9px]  text-blue-300 sm:block">
                        (Input at Top)
                      </span>
                      <span>
                        <AiOutlineCaretUp size={20} />
                      </span>
                    </div>
                  )}
                </button>

                <button
                  onClick={toggleTodoOrder}
                  className="btn2 copyButton relative     m-auto my-1  flex
                from-green-600 to-green-950 text-[9px]  
                 hover:bg-gradient-to-b xxs:text-[12px] xs:text-[15px]"
                >
                  <span
                    className="relative  flex w-full justify-between  font-PTSerif-Bold
                  "
                  >
                    <span className="text-9px absolute left-1/2 hidden translate-x-[0%] text-[9px]  text-blue-300 sm:block">
                      (Chronological Order)
                    </span>{" "}
                    Flipper{" "}
                  </span>
                  <span className="inline-block "></span>
                  <GiClick size={20} />
                  &nbsp;2x
                </button>
              </div>
            </div>
            <div className="absolute bottom-[0rem] left-[50%] z-[0] hidden w-full -translate-x-1/2   sm:block    ">
              <img
                src={Lagoon}
                alt="lagoon"
                className="lagoon relative  m-auto flex rounded-lg"
              ></img>
            </div>
            <div className="absolute  bottom-[.5rem] left-[50%] z-[0] w-full -translate-x-1/2  xxs:bottom-[0rem] sm:hidden     ">
              <img
                src={Lagoon240px}
                alt="lagoon"
                className="lagoon240px relative m-auto flex rounded-lg"
              ></img>
            </div>
          </div>
          <Copyright />
        </div>

        <div className=" mb-[-1rem] mt-[1rem]">
          <WebApp />
        </div>
      </div>
    </>
  );
}
