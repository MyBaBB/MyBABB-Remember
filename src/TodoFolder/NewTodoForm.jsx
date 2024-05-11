/* eslint-disable react/prop-types */
import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form relative flex m-auto w-[250px] xs:w-[400px] md:w-[500px] ">
      <div className="form-row  ">
        <label htmlFor="item">
                      <span className="oldFart bg-slate-500 rounded-2xl p-2
                       text-blue-200 font-ChunkFive-Regular my-4 text-3xl sm:text-2xl m-auto
                       w-fit">
          Take a Note</span>
       </label>
        <input className="placeHolder1 text-center font-LibreBaskerville-Bold hover:opacity-80  
                          border-2 border-blue-200 rounded-lg w-full h-12"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
          placeholder="Type here to take a note" 
        />
      </div>
      <button className="btn text-blue-100 font-LibreBaskerville-Regular w-fit m-auto  ">Push Here To Remember </button>
       
    </form>
  )
}