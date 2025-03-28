/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiFastForward } from "react-icons/fi";
import { FaUserSecret } from "react-icons/fa";
import { SiTestinglibrary } from "react-icons/si";
import "./Todo.css";
import { Link } from "react-router-dom";
import { FiRewind } from "react-icons/fi";
import { TfiNotepad } from "react-icons/tfi";
import  FrogSplash from "../assets/FrogSplash.mp3"
import TurnPage from "../assets/TurnPage.mp3"
import ScreenSaver from "../components/ScreenSaver";
import SwimFish from "../assets/SwimFish.mp3"
export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  function playFrogSplash() {
    const audio = new Audio(FrogSplash);
    audio.play();
   }
  function PlaySwimFish() {
    const audio = new Audio(SwimFish);
    audio.play();
   }
  function playTurnPage() {
    const audio = new Audio(TurnPage);
    audio.play();
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");

    playFrogSplash();
  }


  return (
    <>
      <div className="relative    flex justify-between">
        <div className="inline-block  whitespace-nowrap">
          <ScreenSaver />
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

        <div
          className="relative  mb-2 flex 
           w-full  justify-around text-center        "
        >
        
          <Link to="/WholeTodo">
            <div
              className="fishyNotepad relative text-[14px] text-blue-400
                             xs:text-[18px] sm:text-[19px]"
             onClick={playTurnPage}>
              
              <span
                className=" absolute left-[15px] top-[9px]
                           font-BlackOpsOne-Regular text-white"
               >
                1
              </span>
              <TfiNotepad size={40} />
            </div>
          </Link>

          <Link to="/WholeTodo2">

            <div
              className="fishyNotepad relative  text-[14px]  
                            text-blue-400
                             xs:text-[18px] sm:text-[19px]   "
                             onClick={playTurnPage}>
              <span
                className=" absolute left-[15px] top-[9px]
                           font-BlackOpsOne-Regular text-white"
               >
                2
              </span>
              <TfiNotepad size={40} />
            </div>
          </Link>


          <Link to="/WholeTodo3">
            <div
              className="fishyNotepad relative text-[14px] text-blue-400
                             xs:text-[18px] sm:text-[19px]"
                             onClick={playTurnPage}>
              <span
                className=" absolute left-[15px] top-[9px]
                           font-BlackOpsOne-Regular text-white"
               >
                3
              </span>
              <TfiNotepad size={40} />
            </div>
          </Link>

        </div>
        <div className="inline-block whitespace-nowrap ">
          <a href="https://passwords.mybabb.com">
            <div className=" relative z-50    inline-block    ">
              <span className=" mb-1 inline-block text-blue-50">
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
<div className="ClickAndCastButton relative flex-row xs:flex ">
        <button
      
          className="btn3  w-[9rem]
                      relative m-auto mb-8 flex justify-center 
                      whitespace-nowrap from-blue-700 to-blue-950  text-blue-50 
                           hover:bg-gradient-to-b "
            >
          <span className="font-PTSerif-Bold">Holding Tank</span>
        </button>
      <a href="mailto:" className=" btn3 w-[9rem] relative m-auto mb-8 flex justify-center 
           from-blue-700 to-blue-950 text-blue-50 
            whitespace-nowrap hover:bg-gradient-to-b">
        
        <button
          type="button"
          className="  "
          onClick={PlaySwimFish}
            >
          <span className="font-PTSerif-Bold">Release</span>
       
        </button>
      </a>
        </div>
</form>

     
    </>
  );
}
