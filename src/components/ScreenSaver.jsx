// eslint-disable-next-line no-unused-vars
import React from 'react'



let timerID = null;
let timeout = 300000;

function resetTimer() {
  if (timerID) {
    clearTimeout(timerID);
  }

  if (window.innerWidth < 640) {
    return;
  } else {
    // Set timeout to 300000 milliseconds (5 minutes)
    timeout = 300000;
  }
  timerID = setTimeout(() => {
    window.location.href = 'https://screen.saver.mybabb.com/fishynotepad'
  }, timeout);
}

window.addEventListener('mousemove', resetTimer);
window.addEventListener('touchstart', resetTimer);




const ScreenSaver = () => {
  return (
    <div>
        {resetTimer()}
        <div className="screensaver absolute ">
            <button>
              


            </button>
        </div>

    </div>
  )
}

export default ScreenSaver