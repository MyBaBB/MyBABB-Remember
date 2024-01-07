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
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row  ">
        <label htmlFor="item"><span className="oldFart mt-8 text-3xl sm:text-2xl    ">Important</span></label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
          placeholder="Add a new item"
        />
      </div>
      <button className="btn mt-4">Push To Remember </button>
       
    </form>
  )
}