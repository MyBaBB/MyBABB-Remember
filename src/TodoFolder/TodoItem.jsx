/* eslint-disable react/prop-types */
function copyTodoItem(title) {
 
  navigator.clipboard.writeText(title);
}


export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
      <div className="outerDivContainer  w-fit m-auto" > 
        <li  className="ListItem9  ">
          
          <label  className="label1 relative bg-slate-700 flex m-auto border-2 w-[250px] xs:w-[400px] md:w-[500px] 
                    border-varMEDBLUEFEATHER rounded-md   ">
            <input
              type="checkbox"
              checked={completed}
              onChange={e => toggleTodo(id, e.target.checked)}
              
            />
            <div className="checkbox1 overflow-x-auto" >
              <span className="title1 font-NotoSans-VariableFont_wdth,wght text-lg">{title}</span>
            </div>

          </label>
          </li>
       <div className=" relative flex font-Aclonica-Regular justify-between pt-1 pb-4 m-auto">
          <button onClick={() => deleteTodo(id)} className="btn hover:bg-red-700  text-gray-200
                    bg-red-900 relative  ">
            Delete
          </button> 

          <button onClick={() => {
            copyTodoItem(title);
            alert("📋Copied to ClipBoard");
          }} className="btn  copyButton  hover:bg-white  relative flex   font-Aclonica-Regular hover:text-black">
            Copy
          </button>
          
          </div>
       
      </div>
    );
  }