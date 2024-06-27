// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Copyright.css";
import { PiShareFatBold } from "react-icons/pi";

function Copyright() {
  return (
    <div className=" relative -mb-2 mt-2 flex w-full  justify-between   ">
      <div>
        <button
          id="shareButton"
          onClick={() => {
            navigator
              .share({
                title: "Fishy-Notes",
                text: "Check out this awesome website! Use the link below to access it.",
                url: window.location.href,
                icon: "../../../../public/logo256.png",
              })
              .then(() => {
                console.log("Shared successfully.");
              })
              .catch((error) => {
                console.error("Error sharing:", error);
              });
          }}
        >
          <span className="hover:opacity-50">
            <u className="underlineShare text-green-700">
              <span className="shareButton  font-LibreBaskerville-Bold text-[#75bfc4] ">
                share-app
              </span>
            </u>
            <span className="inline-block text-[#75bfc4]">
              <PiShareFatBold />
            </span>
          </span>
        </button>
      </div>
      <div className=" w-fit">
        <a href="https://mybabb.com">
          <p className="relative -bottom-2 m-auto flex w-fit whitespace-nowrap font-Orbitron-Regular ">
            <span className="z-1 text-[7px]  text-xs text-[#75bfc4] sm:text-[9px]">
              &lt;&lt;&lt;&nbsp;&copy;
              <span className="font-Aclonica-Regular text-orange-400">
                &nbsp;MyBaBB
              </span>{" "}
              <em>12-2023</em>
              &nbsp;&gt;&gt;&gt;
            </span>
          </p>
        </a>
      </div>
    </div>
  );
}

export default Copyright;
