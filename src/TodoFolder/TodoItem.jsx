/* eslint-disable react/prop-types */
function copyTodoItem(title) {
  navigator.clipboard.writeText(title);
}

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <div className="outerDivContainer   m-auto w-fit">
      <li className="ListItem9  ">
        <label
          className="label1 relative m-auto flex w-[250px] rounded-md border-2 border-varMEDBLUEFEATHER bg-slate-700 
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
      <div className=" relative m-auto flex justify-between pb-4 pt-1 ml-[.42rem] font-Aclonica-Regular">
        <button
          onClick={() => deleteTodo(id)}
          className="btn relative  bg-red-900
                    text-gray-200 hover:bg-red-700  "
        >
          Delete
        </button>

        <button
          onClick={() => {
            copyTodoItem(title);
            alert("👉🏻 Copied to ClipBoard ✍🏻");
          }}
          className="btn  copyButton  relative  flex font-PTSerif-Bold   hover:bg-blue-700"
        >
          Copy
        </button>
      </div>
    </div>
  );
}
