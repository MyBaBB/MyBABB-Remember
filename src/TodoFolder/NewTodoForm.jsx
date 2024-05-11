/* eslint-disable react/prop-types */
import { useState } from "react";
import { SlControlRewind } from "react-icons/sl";
import { FaUserSecret } from "react-icons/fa";
import { SiTestinglibrary } from "react-icons/si";

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
<div className="relative">
    <a href="https://resume-hub.mybabb.com/">
    <div className=" rewindButton relative   z-50  hidden md:block text-white  ">
      <span className="inline-block text-blue-300"> <SlControlRewind size={30}/></span>&nbsp;&nbsp;
      <span className="inline-block"> <SiTestinglibrary   size={30}/></span>
    </div>
    </a>
   
    <a href="https://mybabb.github.io/MyBaBB_Password_Machine/">
    <div className=" rewindButton relative z-50  hidden md:block  mb-[-5rem]  ">
      <span className="inline-block mt-2 text-blue-300"><SlControlRewind size={30}/></span>&nbsp;&nbsp; 
      <span className="inline-block text-gray-800"><FaUserSecret size={27}/></span>
    </div>
    </a>
    </div>
    <form
      onSubmit={handleSubmit}
      className="new-item-form relative m-auto flex w-[250px] xs:w-[400px] md:w-[500px] "
    >
      <div className="form-row  ">
        <label htmlFor="item">
          <span
            className="oldFart m-auto my-4 w-fit
                       rounded-2xl bg-slate-500 p-2 font-ChunkFive-Regular text-3xl text-blue-200
                       sm:text-2xl"
          >
            Take a Note
          </span>
        </label>
        <input
          className="placeHolder1 h-12 w-full rounded-lg  
                          border-2 border-blue-200 text-center font-LibreBaskerville-Bold hover:opacity-80"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
          placeholder="Type here to take a note"
        />
      </div>
      <button className="btn m-auto w-fit font-LibreBaskerville-Regular text-blue-100  ">
        Push Here To Remember{" "}
      </button>
    </form>
    </>
  );
}
