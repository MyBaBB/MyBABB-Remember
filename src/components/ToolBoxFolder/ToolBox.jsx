// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import ToolBoxList from "./ToolBoxList.json";

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="sm:[95%] absolute
    right-6 top-[5.8rem]  z-0 hidden sm:block
     
   
      

       "
    >
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
            {ToolBoxList.map((item, i) => (
              <div
                className=" relative flex w-full cursor-pointer flex-col  justify-between 
                rounded-r-lg border-l-4 border-l-transparent hover:border-l-white hover:bg-blue-300"
                key={i}
              >
                <a href="https://mybabb.github.io/MyBaBB_Password_Machine/">
                  <div
                    className="relative flex w-full flex-row justify-between
                   py-1 hover:rounded-lg hover:bg-blue-300"
                  >
                    <h3 className="font-bold ">{item.Thingy}</h3>
                    <h3>{item.Emoji}</h3>
                  </div>
                </a>

                <a href="https://mybabb.github.io/MyBABB-Remember/">
                  <div className="flex w-full flex-row justify-between hover:rounded-lg  hover:bg-blue-300   ">
                    <h3 className="font-bold">{item.Other}</h3>
                    <h3 className="">{item.Stuff}</h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DropDown;
