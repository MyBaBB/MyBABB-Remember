// eslint-disable-next-line no-unused-vars
import React from "react";
import "./WebApp.css";

const InstallApp = () => {
  let deferredPrompt;
  window.addEventListener("beforeinstallprompt", (e) => {
    deferredPrompt = e;
  });

  const handleClick = async () => {
    if (deferredPrompt !== null) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        deferredPrompt = null;
      }
    }
  };
  const isAppMode = window.matchMedia("(display-mode: standalone)").matches;

  return (
    <div className="relative m-auto   w-[75%]  flex justify-between">
      {!isAppMode && (
        <button
          id="installApp"
          onClick={handleClick}
          className="installButton mb-1 font-Changa-Regular text-[12px]"
        >
          Install the App
        </button>
      )}
      <a
        href="https://www.youtube.com/watch?v=AwfKUpq5seE "
        className="relative "
      >
        <div className="relative  mb-1">
          <button
            className="installButton relative  
         flex w-fit justify-center"
          >
            <span className="  w-full justify-between font-Changa-Regular text-[12px]">
              IPhone Instructions{" "}
            </span>
          </button>
        </div>
      </a>
    </div>
  );
};

export default InstallApp;
