/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiFastForward } from "react-icons/fi";
import { FaUserSecret } from "react-icons/fa";
import { SiTestinglibrary } from "react-icons/si";

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
      <div className="relative flex justify-between">
        <div className="inline-block ">
          <a href="https://resume-hub.mybabb.com/" className="">
            <div className=" rewindButton relative   z-50 inline-block   w-fit   ">
              <span className="mt-2 inline-block text-black hover:text-blue-50">
                {" "}
                <FiRewind size={30} />
              </span>
              &nbsp;&nbsp;
              <span className="inline-block text-blue-50 ">
                {" "}
                <SiTestinglibrary size={30} />
              </span>
            </div>
          </a>
        </div>

        <div className="inline-block  ">
          <a href="https://mybabb.github.io/MyBaBB_Password_Machine/">
            <div className=" rewindButton relative z-50    inline-block    ">
              <span className="inline-block text-blue-50">
                <FaUserSecret size={27} />
              </span>
              &nbsp;&nbsp;
              <span className="mt-2 inline-block text-black hover:text-blue-50">
                <FiFastForward size={30} />
              </span>
            </div>
          </a>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="new-item-form relative m-auto mb-4  flex w-[220px] xs:w-[300px] md:w-[500px] "
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
          className="btn3 relative m-auto flex justify-center  from-blue-700 
         to-blue-950 text-blue-50 hover:bg-gradient-to-b "
        >
          <span className="font-PTSerif-Bold">Click to Add Item</span>

          <span className="font-ArchivoBlack-Regular"> </span>
        </button>
      </form>
    </>
  );
}
