/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiFastForward } from "react-icons/fi";
import { FaUserSecret } from "react-icons/fa";
import { SiTestinglibrary } from "react-icons/si";
import "./Todo.css";
import { FiRewind } from "react-icons/fi";

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
      <div className="relative   hidden justify-between xxs:flex">
        <div className="inline-block ">
          <a href="https://resume-hub.mybabb.com/" className="">
            <div className="  relative   z-50 inline-block   w-fit   ">
              <span className="rewindButton mt-2 inline-block text-black ">
                {" "}
                <FiRewind size={30} className="" />
              </span>
              &nbsp;&nbsp;
              <span className="inline-block text-blue-50 ">
                {" "}
                <SiTestinglibrary size={30} />
              </span>
            </div>
          </a>
        </div>
        <div className="relative text-center ">
          <span className="text-red-300  ">&apos; Beta Version &apos;</span> 
        <a href="./WholeTodo2">
          <div className="fishyNotepad  text-blue-400 text-center whitespace-nowrap font-Aclonica-Regular text-[14px]
                      xxs:block  xs:text-[14px] sm:text-[19px]">Note Pad 1
         </div>
         <span className="text-red-300"></span>
        </a>
        </div>
        <div className="inline-block  ">
          <a href="https://passwords.mybabb.com">
            <div className=" relative z-50    inline-block    ">
              <span className=" inline-block text-blue-50">
                <FaUserSecret size={27} />
              </span>
              &nbsp;&nbsp;
              <span className="fastForwardButton mt-2 inline-block text-black ">
                <FiFastForward size={30} />
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
