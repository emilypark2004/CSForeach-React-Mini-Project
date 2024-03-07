import React, { useState } from 'react';

export function TodoItem({ completed, id, title, notes, toggleTodo, deleteTodo }) {
    const [expanded, setExpanded] = useState(false);
    
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          Delete
        </button>
        <button onClick={() => setExpanded(!expanded)} className="btn">
        {expanded ? "Collapse" : "Expand"} Notes
        </button>
        {expanded && (
            <div>
            <p>Notes:</p>
            <textarea value={notes} readOnly={true} />
            </div>
        )}
      </li>
    )
  }