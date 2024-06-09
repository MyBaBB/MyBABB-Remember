// eslint-disable-next-line no-unused-vars
import React from "react";
import WholeTodo from "../../TodoFolder/WholeTodo.jsx";
import Copyright from "../Copyright";
 
import "./MainWrapper.css";
const MainWrapper = () => {
  return (
   
     
      <div className="relative m-auto flex h-fit min-h-screen w-[100vw] p-2">
        <div className=" relative flex m-auto justify-center">
        <div className="m-auto w-full p-4">
          <WholeTodo />
          <Copyright />
        </div>
      </div>
    </div>
   
  );
};

export default MainWrapper;
