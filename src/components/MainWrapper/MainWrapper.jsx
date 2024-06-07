// eslint-disable-next-line no-unused-vars
import React from "react";
import WholeTodo from "../../TodoFolder/WholeTodo.jsx";
import Copyright from "../Copyright";
import OceanNightImg from "./nightOcean.jpg";
const MainWrapper = () => {
  return (
    <div className="absolute inset-0">
      <img src={OceanNightImg} alt="Ocean View At Night" className="absolute sm:hidden inset-0 w-full h-full" />
      <img src={OceanNightImg} alt="Ocean View At Night" className="absolute hidden sm:block   w-cover" />
      <div className="relative m-auto flex h-fit min-h-screen w-[100vw] p-2">
        <div className="m-auto w-full p-4">
          <WholeTodo />

          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default MainWrapper;
