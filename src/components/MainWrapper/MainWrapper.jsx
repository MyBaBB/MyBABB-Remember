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
      ".relative.flex.m-auto.w-fit.h-fit",
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
    <div className="relative   m-auto h-fit min-h-screen w-screen flex-row p-2">
      <div className="relative m-auto flex justify-center">
        <div className="m-auto w-full p-4">
          <WholeTodo />
          <Copyright />
        </div>
      </div>
      <div className="relative m-auto flex h-fit w-fit font-Aclonica-Regular ">
        <button onClick={showInstallButton} className="showInstallButton">
          Install
        </button>
      </div>
    </div>
  );
};
export default MainWrapper;
