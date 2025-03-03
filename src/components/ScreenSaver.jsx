// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './ScreenSaver.css';
import { FaCaretDown } from "react-icons/fa6";

let timerID = null;
let timeout = 300000; // initial timeout value (5 minutes)

function resetTimer() {
  if (timerID) {
    clearTimeout(timerID);
  }

  if (window.innerWidth < 640) {
    return;
  } else {
    timerID = setTimeout(() => {
      window.location.href = 'https://screen.saver.mybabb.com/fishynotepad'
    }, timeout);
  }
}

function ScreenSaver() {
  const [isScreensaverOn, setIsScreensaverOn] = useState(true);
  const [timeoutValue, setTimeoutValue] = useState(300000); // new state for timeout value
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  useEffect(() => {
    if (isScreensaverOn) {
      window.addEventListener('mousemove', resetTimer);
      window.addEventListener('touchstart', resetTimer);
    } else {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('touchstart', resetTimer);
    }
  }, [isScreensaverOn]);

  const handleToggleScreensaver = () => {
    setIsScreensaverOn(!isScreensaverOn);
  };

  const handleTimeoutChange = (event) => {
    const newTimeoutValue = parseInt(event.target.value);
    setTimeoutValue(newTimeoutValue);
    timeout = newTimeoutValue; // update the timeout variable
  };

  const handleAccordionToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <>
    <div className='fixed top-10 right-10 hidden lg:block'>
    <div className="accordion" style={{ width: '8rem' }}>
      <div className="accordion-header  " onClick={handleAccordionToggle}>
        <span>Screensaver</span> 
       
        <span className={`accordion-icon ${isAccordionOpen ? 'open' : ''}`}>
        <FaCaretDown />
        </span>
      </div>
      {isAccordionOpen && (
        <div className="accordion-content">
          <button onClick={handleToggleScreensaver}>
            {isScreensaverOn ? 'Turn off' : 'Turn on '}
          </button>
          <div className="slider-container">
            <input
              type="range"
              min="3000" // 30 seconds
              max="900000" // 15 minutes
              step="30000" // 30 seconds
              value={timeoutValue}
              onChange={handleTimeoutChange}
              orient="vertical"
            />
            <span>{timeoutValue / 60000}&nbsp;minutes</span>
          </div>
        </div>
      )}
    </div>
    </div>
    </>
  );
}

export default ScreenSaver;