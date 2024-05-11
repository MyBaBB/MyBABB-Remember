/* eslint-disable react/prop-types */
function copyTodoItem(title) {
 
  navigator.clipboard.writeText(title);
}


export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
      <div className="outerDivContainer w-fit m-auto" > 
        <li  className="ListItem9  ">
          
          <label  className="label1 relative flex m-auto border-2 w-[250px] xs:w-[400px] md:w-[500px] border-varMEDBLUEFEATHER rounded-md   ">
            <input
              type="checkbox"
              checked={completed}
              onChange={e => toggleTodo(id, e.target.checked)}
              
            />
            <div className="checkbox1 overflow-x-auto" >
              <span className="title1">{title}</span>
            </div>

          </label>
          </li>
       <div className=" relative flex justify-between pt-1 pb-4 m-auto">
          <button onClick={() => deleteTodo(id)} className="btn btn-danger relative  ">
            Delete
          </button> 

          <button onClick={() => {
            copyTodoItem(title);
            alert("📋Copied to ClipBoard");
          }} className="btn copyButton relative flex">
            Copy
          </button>
          </div>
       
      </div>
    );
  }