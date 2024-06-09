// eslint-disable-next-line no-unused-vars
import React from "react";
import WholeTodo from "../../TodoFolder/WholeTodo.jsx";
import Copyright from "../Copyright";

import "./MainWrapper.css";

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  showInstallButton();
});
let deferredPrompt;

function showInstallButton() {
  let installButton = document.querySelector(".installAppButton");
  if (!installButton) {
    installButton = document.createElement("button");
    installButton.textContent = "Install App";
    installButton.classList.add("installAppButton");
    installButton.addEventListener("click", () => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("App installed");
        } else {
          console.log("App installation cancelled");
        }
        deferredPrompt = null;
      });
    });

    // put button in the same div
    const parentDiv = document.querySelector(
      ".relative.flex.m-auto.w-fit.h-fit.font-Aclonica-Regular",
    );
    parentDiv.appendChild(installButton);

    // put button in middle of div
    const style = installButton.style;
    style.position = "absolute";
    style.top = "50%";
    style.left = "50%";
    style.transform = "translate(-50%, -50%)";
    installButton.textContent = "Install App";
    installButton.classList.add("installAppButton");
    installButton.addEventListener("click", () => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("App installed");
        } else {
          console.log("App installation cancelled");
        }
        deferredPrompt = null;
      });
    });
    parentDiv.appendChild(installButton);
  }
}

const MainWrapper = () => {
  return (
    <div className="relative    m-auto h-fit min-h-screen w-screen flex p-2">
      <div className="relative   m-auto flex-row justify-center">
        <div className="m-auto w-full p-4">
          <WholeTodo />
          <Copyright />
        </div>
      
      <div className="relative flex m-auto items-center w-fit justify-center   ">
        <button
          type="button"
          className="showInstallButton  bg-gray-700 text-white px-4 py-2 font-Aclonica-Regular hover:opacity-80"
          onClick={showInstallButton}
        >
          Install App
        </button>
        </div>
      </div>
    </div>
  );
};
export default MainWrapper;
