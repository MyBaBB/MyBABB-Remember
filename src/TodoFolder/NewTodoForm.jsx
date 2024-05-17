/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiFastForward } from "react-icons/fi";
import { FaUserSecret } from "react-icons/fa";
import { SiTestinglibrary } from "react-icons/si";
import { GiNotebook } from "react-icons/gi";
import { FiRewind } from "react-icons/fi";
import { IoFileTrayStackedSharp } from "react-icons/io5";
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
        <div className="inline-block">
          <a href="https://resume-hub.mybabb.com/"></a>
          <a href="https://resume-hub.mybabb.com/">
            <div className=" rewindButton relative   z-50 inline-block   w-fit    text-white  ">
              <span className="mt-2 inline-block text-blue-300">
                {" "}
                <FiRewind size={30} />
              </span>
              &nbsp;&nbsp;
              <span className="inline-block">
                {" "}
                <SiTestinglibrary size={30} />
              </span>
            </div>
          </a>
        </div>

        <div className="inline-block  ">
          <a href="https://mybabb.github.io/MyBaBB_Password_Machine/">
            <div className=" rewindButton relative z-50    inline-block    ">
              <span className="inline-block text-gray-800">
                <FaUserSecret size={27} />
              </span>
              &nbsp;&nbsp;
              <span className="mt-2 inline-block text-blue-300">
                <FiFastForward size={30} />
              </span>
            </div>
          </a>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="new-item-form relative m-auto -mt-4 flex w-[250px] xs:w-[400px] md:w-[500px] "
      >
        <div className="form-row  ">
          <label htmlFor="item">
            <div className="btn relative m-auto mb-4 flex w-fit items-center justify-center align-middle  text-blue-100  ">
              <span className="font-ArchivoBlack-Regular">Write&nbsp;</span>
              <span className="inline-block text-blue-200">
                <GiNotebook size={35} />
              </span>
              <span className="font-ArchivoBlack-Regular"> </span>
            </div>
          </label>

          <textarea
            className="placeHolder1 h-12 w-full rounded-lg  
                          border-2 border-varDARKBLUEFEATHER text-center font-LibreBaskerville-Bold hover:opacity-80"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
            placeholder="Type here"
          />
        </div>
        <button className="btn relative m-auto -mb-4 flex w-fit items-center justify-center align-middle  text-blue-100  ">
          <span className="font-ArchivoBlack-Regular">
            Add&nbsp;&nbsp;&nbsp;
          </span>
          <span className="inline-block text-blue-200">
            <IoFileTrayStackedSharp size={35} />
          </span>
          <span className="font-ArchivoBlack-Regular"> </span>
        </button>
      </form>
    </>
  );
}
