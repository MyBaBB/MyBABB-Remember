// eslint-disable-next-line no-unused-vars
import React from 'react'



let timerID = null;
let timeout = 50000;

function resetTimer() {
  if (timerID) {
    clearTimeout(timerID);
  }

  timerID = setTimeout(() => {
    window.location.href = 'https://screen.saver.mybabb.com'
  }, timeout);
}

window.addEventListener('mousemove', resetTimer);
window.addEventListener('touchstart', resetTimer);




const ScreenSaver = () => {
  return (
    <div>
        {resetTimer()}
        <div className="screensaver absolute">
            
        </div>

    </div>
  )
}

export default ScreenSaver