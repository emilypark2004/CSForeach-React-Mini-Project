import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")
  const [notes, setNotes] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem, notes)

    setNewItem("")
    setNotes("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <div className="form-row">
        <label htmlFor="notes">Notes</label>
        <textarea
          value={notes}
          onChange={e => setNotes(e.target.value)}
          id="notes"
        ></textarea>
      </div>
      <button className="btn">Add</button>
    </form>
  )
}