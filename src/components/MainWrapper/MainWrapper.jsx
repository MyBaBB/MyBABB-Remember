// eslint-disable-next-line no-unused-vars
import React from "react";
import WholeTodo from "../../TodoFolder/WholeTodo.jsx";

import "./MainWrapper.css";
//  import Gorilla from "../GorillaFolder/Gorilla.jsx"

const MainWrapper = () => {
  return (
    <div className="relative m-auto    h-fit min-h-screen w-screen justify-center p-4  ">
      {/* <Gorilla /> */}
      <WholeTodo />
    </div>
  );
};

export default MainWrapper;
