/* eslint-disable react/prop-types */
import { useState } from "react";
import { SlControlRewind } from "react-icons/sl";
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

    <a href="https://resume-hub.mybabb.com/">
    <div className=" rewindButton relative z-50  hidden md:block text-amber-200 mb-[-2rem] "><SlControlRewind size={30}/>
    </div>
    </a>
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
