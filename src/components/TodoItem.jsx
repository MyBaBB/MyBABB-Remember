/* eslint-disable react/prop-types */
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
    <div className="outerDivContainer"> 
      <li  className="ListItem9">
        
    <label  className="label1 relative flex -left-3 border-2 p-2 border-varMEDBLUEFEATHER rounded-md max-w-[355px] h-auto ">
          <input
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
            
          />
          <div className="checkbox1 overflow-x-auto" >
          <span className="title1   ">{title}</span>
          </div>

     </label>


        <button onClick={() => deleteTodo(id)}
        
          className="btn btn-danger relative flex -left-4 ">
          Delete
        </button>
      </li>
    </div>

    )
  }