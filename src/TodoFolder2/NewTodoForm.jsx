/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiFastForward } from "react-icons/fi";
import { FaUserSecret } from "react-icons/fa";
import { SiTestinglibrary } from "react-icons/si";
import "./Todo.css";
import { FiRewind } from "react-icons/fi";
import { TfiNotepad } from "react-icons/tfi";
export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <>
      <div className="relative    justify-between flex">
        <div className="inline-block  whitespace-nowrap">
          <a href="https://resume-hub.mybabb.com/" className="">
            <div className="  relative   z-50 inline-block   w-fit   ">
              <span className="rewindButton mt-2 inline-block text-black ">
                {" "}
                <FiRewind size={30} className=" hidden sm:block" />
              </span>
              &nbsp;&nbsp;
              <span className="inline-block text-blue-50 ">
                {" "}
                <SiTestinglibrary size={30} />
              </span>
            </div>
          </a>
        </div>

        <div className="relative  flex text-center 
           w-full  justify-around mb-2        ">
<a href="#/WholeTodo1">
          <div className="fishyNotepad relative text-blue-400 text-[14px]
                             xs:text-[18px] sm:text-[19px]">
                           <span  className=" absolute top-[9px] left-[15px]
                           font-BlackOpsOne-Regular text-white">1</span>
                           <TfiNotepad size={40}/> 
         </div>
        </a>
        
        <a href="#/WholeTodo2">
        <div className="fishyNotepad relative  text-blue-400  
                            text-[14px]
                             xs:text-[18px] sm:text-[19px]   ">
                           <span  className=" absolute top-[9px] left-[15px]
                           font-BlackOpsOne-Regular text-white">2</span>
                           <TfiNotepad size={40}/> 
         </div>
        
        </a>
        <a href="#/WholeTodo3">
          <div className="fishyNotepad relative text-blue-400 text-[14px]
                             xs:text-[18px] sm:text-[19px]">
                           <span  className=" absolute top-[9px] left-[15px]
                           font-BlackOpsOne-Regular text-white">3</span>
                           <TfiNotepad size={40}/> 
         </div>
        </a>
            
       
        </div>
        <div className="inline-block whitespace-nowrap ">
          <a href="https://passwords.mybabb.com">
            <div className=" relative z-50    inline-block    ">
              <span className=" inline-block text-blue-50 mb-1">
                <FaUserSecret size={27} />
              </span>
              &nbsp;&nbsp;
              <span className="fastForwardButton mt-2 inline-block text-black ">
                <FiFastForward size={30} className="hidden sm:block" />
              </span>
            </div>
          </a>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="new-item-form relative m-auto mb-4  flex w-[90%] "
      >
        <textarea
          className="placeHolder1 min-h-[18px]  w-full rounded-lg border-2  
                          border-black pt-1 text-center font-LibreBaskerville-Bold hover:opacity-80"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
          placeholder="Type here"
        />

        <button
          className="btn3 relative m-auto mb-8 flex justify-center  from-blue-700 to-blue-950  text-blue-50 
         hover:bg-gradient-to-b "
        >
          <span className="font-PTSerif-Bold">Click to Add Item</span>
        </button>
      </form>
    </>
  );
}
