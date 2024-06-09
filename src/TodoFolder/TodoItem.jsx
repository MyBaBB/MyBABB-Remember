/* eslint-disable react/prop-types */
function copyTodoItem(title) {
  navigator.clipboard.writeText(title);
}

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <div className="outerDivContainer   m-auto w-fit">
      <li className="ListItem9  ">
        <label
          className="label1 relative m-auto flex w-[250px] rounded-md border-[1px] border-black bg-slate-700 
                    xs:w-[400px] md:w-[500px]   "
        >
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          <div className="checkbox1 overflow-x-auto">
            <span className="title1 font-DMSerifDisplay-Regular text-xl">
              {title}
            </span>
          </div>
        </label>
      </li>
      <div className=" relative m-auto ml-[.49rem] flex justify-between pb-4 pt-1 font-Aclonica-Regular">
        <button
          onClick={() => deleteTodo(id)}
          className="btn relative  bg-red-900
                    from-red-500 to-red-950 text-blue-50 hover:bg-gradient-to-b"
        >
          Delete
        </button>

        <button
          onClick={() => {
            copyTodoItem(title);
            alert("👉🏻 Copied to ClipBoard ✍🏻");
          }}
          className="btn  copyButton relative flex  from-green-600 to-green-950 
            font-PTSerif-Bold text-blue-50 hover:bg-gradient-to-b"
        >
          Copy
        </button>
      </div>
    </div>
  );
}
