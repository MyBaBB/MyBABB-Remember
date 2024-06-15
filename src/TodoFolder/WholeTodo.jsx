import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./Todo.css";
import { TodoList } from "./TodoList";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import WebApp from "../components/MainWrapper/PWAFolder/WebApp";
import { GiClick } from "react-icons/gi";
import { IoFishOutline } from "react-icons/io5";
import { CgCopy } from "react-icons/cg";
import  NightOcean  from "../assets/nightOcean400x200.jpg";
import  NightOcean240px  from "../assets/nightOcean240x190.jpg";
import Copyright from "../components/Copyright";

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
    todos.forEach((todo, index) => {
      todosText +=
        index + 1 + ". " + getRandomEmoji() + " " + todo.title + " " + "\n";
    });
    navigator.clipboard.writeText(todosText);
  }

  return (
    <>
      <div
        className="controlContainer relative flex-row m-auto rounded-3xl border-2 border-black
         w-[95%] max-w-[550px]  p-4"
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
          className="copyAllOptions 
          relative m-auto mt-[-1.3rem]    flex-col items-center 
           rounded-lg  px-[2rem] z-[1]"
        >
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="btn3 z-50  m-auto mt-4 relative  flex w-[80%] items-center   
            justify-between rounded-[5px]   
           from-[#00bfff] to-blue-950 px-2 font-PTSerif-Bold
          hover:bg-gradient-to-b " >

            &nbsp;&nbsp;Options
            
            {isOpen ? (
              <AiOutlineCaretUp size={20} color=" #a3e1f5 ;" />
            ) : (
              <AiOutlineCaretDown size={20} color=" #a3e1f5 ;" />
            )}
          </button>
      
          <div
            className={`bg-grey-800 relative z-50 flex w-full  p-1 origin-top flex-col rounded-lg  
               text-blue-200 ${isOpen ? "animate-open-menu" : "animate-close-menu"}`}
          >
            <div className="subButtonWrapper  m-auto w-full ">
              
              <button
                onClick={() => {
                  copyAllTodosNormal();
                  const alertBox = document.createElement("div");
                  alertBox.textContent =
                    "👉🏻 Entire List was Copied to  ClipBoard ✍🏻   ";
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
               
                <span className="relative text-[9px] xxs:text-[12px] xs:text-[15px]  flex w-full justify-between font-PTSerif-Bold ">
                  {" "}
                  <span  className="font-PTSerif-Bold  ">Copy List</span><span className="absolute left-1/2 translate-x-[0%] hidden sm:block text-[9px]  text-9px text-blue-300">
                     (The Entire List)</span>  {" "}
                </span>
                <span className="inline-block">
                  <CgCopy />
                </span>
              </button>
              
              {/*3rd button */}

              <div className="mb-1   w-full   ">
                <button
                  onClick={toggleRandomEmoji}
                  className={`btn2 toggleButton relative flex m-auto    
                    justify-between font-PTSerif-Bold      
                  hover:bg-gradient-to-b text-[9px] xxs:text-[12px] xs:text-[15px]  ${
                    isRandomEmojiEnabled
                      ? "from-green-600 to-green-950"
                      : "from-red-600 to-red-950"
                  }`}
                >
                  {isRandomEmojiEnabled ? " Indicator On" : "Indicator Off "}
                 <span className="absolute left-1/2 translate-x-[-20%] hidden sm:block text-[9px]  text-9px text-blue-300">
                     (Enables Fish Icons)</span>
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
                  className={`btn2 toggleButton  relative flex  m-auto   
                    justify-between font-PTSerif-Bold       
                  hover:bg-gradient-to-b  ${isAddToTopEnabled ? "from-green-950 to-green-600" : "from-green-600 to-green-950"}`}
                >
                  {isAddToTopEnabled ? (
                     <div className="relative flex justify-between w-full ">
                     <span className="font-PTSerif-Bold text-[9px] xxs:text-[12px] xs:text-[15px] ">Bottom Feeder</span>
                     <span className="absolute left-1/2 translate-x-[0%] hidden sm:block text-[9px]  text-9px text-blue-300">
                     (Input at Bottom)</span>
                     <span ><AiOutlineCaretDown size={20} /></span>
                     </div>
                  ) : (
                    <div className="relative flex justify-between w-full ">
                     <span className="text-[9px] xxs:text-[12px] xs:text-[15px]  font-PTSerif-Bold">Top Feeder</span>
                     <span className="absolute left-1/2 translate-x-[0%] hidden sm:block text-[9px]  text-9px text-blue-300">
                     (Input at Top)</span>
                     <span ><AiOutlineCaretUp size={20} /></span>
                     </div>
                  )}

                  
                </button>
              <button
                onClick={toggleTodoOrder}
                className="btn2 copyButton relative     m-auto my-1  flex
                text-[9px] xxs:text-[12px] xs:text-[15px]  
                 from-green-600 to-green-950 hover:bg-gradient-to-b"
              >
                <span className="relative  flex w-full justify-between  font-PTSerif-Bold
                  ">
                    <span className="absolute left-1/2 translate-x-[0%] hidden sm:block text-[9px]  text-9px text-blue-300">
                    (Chronological Order)</span>
                  {" "}
                  Flipper {" "}
                </span>
                <span className="inline-block "></span>
                <GiClick size={20} />
                &nbsp;2x
              </button>
            </div>
            
          </div>
          <div className="absolute hidden sm:block z-[0] left-[50%] -translate-x-1/2 bottom-[0rem]   w-full    ">

          <img src={NightOcean} alt="Ocean at Night" className="nightOcean rounded-lg  relative flex m-auto"></img>
          </div>
          <div className="absolute  sm:hidden z-[0] left-[50%] -translate-x-1/2 bottom-[.5rem]  xxs:bottom-[0rem] w-full     ">
          <img src={NightOcean240px} alt="Ocean at Night" className="nightOcean240px rounded-lg relative flex m-auto"   ></img>
          </div>
          </div>
          < Copyright />
        </div>
         
        
        <div className=" mb-[-1rem] mt-[1rem]">
          <WebApp />
        </div>
        
    </>
  );
}
