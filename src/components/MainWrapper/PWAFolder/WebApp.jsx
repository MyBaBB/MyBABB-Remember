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
    <div className="relative m-auto -mt-4  flex  w-[65%] justify-between">
      <div>
        {!isAppMode ? (
          <button
            id="installApp"
            onClick={handleClick}
            className="installButton mb-1 font-Changa-Regular text-[12px]"
          >
            Android/Desk App
          </button>
        ) : (
          <button
            id="installApp"
            className="installButton mb-1 font-Changa-Regular text-[12px]"
          >
            ✅ App-Installed
          </button>
        )}
      </div>
     




      <a
        href="https://www.youtube.com/watch?v=AwfKUpq5seE "
        className="relative "
      >
       
        <div>
          {!isAppMode && (
            <button
              id="installApp"
              onClick={handleClick}
              className="installButton mb-1 font-Changa-Regular text-[12px]"
            >
              IPhone Instructions
            </button>
          )}
        </div>
      </a>
      
      <a href="https://fishy-notepad.mybabb.com/">
      <div className=" justify-center ">
        <button className=" installButton  relative flex m-auto mb-1 font-Changa-Regular text-[12px]">
          Upgrade
        </button>
        <p className="text-[10px] text-center">(uninstall first)</p>
        </div>
      </a>
      

    </div>
  );
};

export default InstallApp;
