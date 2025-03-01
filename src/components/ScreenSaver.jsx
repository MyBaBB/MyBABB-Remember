// eslint-disable-next-line no-unused-vars
import React from 'react'



function startScreenSaver() {
  setTimeout(() => {
    window.location.href = 'https://octo-space.mybabb.com'
  }, 50000)
}




const ScreenSaver = () => {
  return (
    <div>
        {startScreenSaver()}
        <div className="screensaver absolute">
            
        </div>

    </div>
  )
}

export default ScreenSaver