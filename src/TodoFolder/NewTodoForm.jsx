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
        <label htmlFor="item"><span className="oldFart my-4 text-3xl sm:text-2xl m-auto
          w-fit   ">Take a Note</span></label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
          placeholder="Add a new item"
        />
      </div>
      <button className="btn mt-4 ">Push To Remember </button>
       
    </form>
  )
}