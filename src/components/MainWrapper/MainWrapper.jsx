// eslint-disable-next-line no-unused-vars
import React from 'react'
import WholeTodo from '../../TodoFolder/WholeTodo.jsx'
import Copyright from '../Copyright'

const MainWrapper = () => {
  return (
    <div>
        <div className=' relative flex w-[100vw]  p-2 m-auto h-fit'>
            <div className=' p-4 w-full m-auto '>
      <WholeTodo />





      <Copyright />
      </div>
    </div>
  </div>
  )
}

export default MainWrapper
