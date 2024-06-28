// eslint-disable-next-line no-unused-vars
import React from "react";
import "./WebApp.css";


const checkAndUninstallPWA = () => {
  if (window.matchMedia("(display-mode: standalone)").matches) {
    window.matchMedia("(display-mode: standalone)").addEventListener("change", (e) => {
      if (!e.matches) {
        window.location.reload();
      }
    });
    if (window.matchMedia("(display-mode: standalone)").matches) {
      window.location.reload();
    }
    window.history.pushState({}, '', '/');
    window.location.reload();
  }
};

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
        {!isAppMode && (
          <button
            id="installApp"
            onClick={handleClick}
            className="installButton mb-1 font-Changa-Regular text-[12px]"
          >
            Android/Desk App
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
      
   
        <button className="installButton mb-1 font-Changa-Regular text-[12px]"
         onClick={checkAndUninstallPWA}>
          Upgrade
        </button>;
     
      

    </div>
  );
};

export default InstallApp;
