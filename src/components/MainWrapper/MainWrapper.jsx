// eslint-disable-next-line no-unused-vars
import React from "react";
import WholeTodo from "../../TodoFolder/WholeTodo.jsx";

import "./MainWrapper.css";
//  import Gorilla from "../GorillaFolder/Gorilla.jsx"

const MainWrapper = () => {
  return (
    <div className=" relative m-auto    h-fit min-h-screen w-screen justify-center p-4  ">
      {/* <div className="bg-gradient-to-b from-sky-500 from-40% to-green-800 to-60%
       p-[2rem] text-center shadow-2xl">
<p className="    whitespace-nowrap font-BlackOpsOne-Regular text-base text-lime-400 "> This is the Old Version</p>
<p>It has moved out of production</p>
<p>Copy your notes, and Uninstall</p>
<p>Then Install the New Version</p>
<p>⬇️ Get it ⬇️</p>
 <a href="https://fishy-notepad.mybabb.com"> <div className="border-2 border-red-500
  relative flex p-2 m-auto bg-black text-red-500
  rounded-3xl font-Changa-Regular  w-fit  ">New Version</div>
</a>
       </div> */}
      <WholeTodo />
    </div>
  );
};

export default MainWrapper;
