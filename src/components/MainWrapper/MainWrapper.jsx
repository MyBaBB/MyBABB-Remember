// eslint-disable-next-line no-unused-vars
import React from "react";
import WholeTodo from "../../TodoFolder/WholeTodo.jsx";
import Copyright from "../Copyright";
import WebApp from "./PWAFolder/WebApp.jsx"
import "./MainWrapper.css";
//  import Gorilla from "../GorillaFolder/Gorilla.jsx"
 

const MainWrapper = () => {
  return (
   
     
      <div className="relative  m-auto flex h-fit min-h-screen w-screen p-2">
        <div className=" relative flex m-auto justify-center">
        <div className="m-auto w-full p-4">
          {/* <Gorilla /> */}
          <WholeTodo />
           <WebApp />
          <Copyright />
        </div>
      </div>
    </div>
   
  );
};

export default MainWrapper;
