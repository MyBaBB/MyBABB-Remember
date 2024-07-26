/* eslint-disable react/prop-types */
function copyTodoItem(title) {
  navigator.clipboard.writeText(title) ;
}

export function TodoItem({ lockedTodo, id, title, toggleTodo, deleteTodo }) {
  return (
    <div className="outerDivContainer m-auto  w-full">
      <li className="ListItem9  ">
        <label
          className="label1 relative m-auto flex w-full  rounded-md border-[1px] border-black bg-slate-700 
                      "
        >
          <input
            type="checkbox"
            checked={lockedTodo}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          <div className="checkbox1 overflow-x-auto">
            <span className="title1 font-DMSerifDisplay-Regular text-xl">
              {title}
            </span>
          </div>
        </label>
      </li>

      <div
        className=" relative m-auto  flex 
      w-full justify-end pb-1 pt-1 font-Aclonica-Regular"
      >
        <button
          onClick={() => {
            if (lockedTodo) {
              return;
            }
            const updatedTitle = `${title}`;
            copyTodoItem(updatedTitle);
            const alertBox = document.createElement("div");
            alertBox.textContent =
              "👉🏻 Copied Single Item to your ClipBoard ✍🏻   ";
            alertBox.classList.add(
              "fixed",
              "top-[35%]",
              "left-1/2",
              "transform",
              "-translate-x-1/2",
              "-translate-y-1/2",
              "bg-red-950",
              "py-2",
              "px-4",
              "rounded-lg",
              "shadow-lg",
              "z-50",
              "font-PTSerif-Bold",
              "border-2",
              "border-yellow-800",
              "text-blue-50",
            );
            document.body.appendChild(alertBox);
            setTimeout(() => {
              alertBox.remove();
            }, 2000);
          }}
          className={`btn  copyButton relative mb-4   ${
            lockedTodo ? "from-gray-600" : "from-green-600"
          } 
            to-green-950 font-PTSerif-Bold ${
              lockedTodo
                ? `pointer-events-none opacity-70 text-[#f991519c]  bg-gradient-to-b from-gray-600 to-slate-900`
                : "text-blue-50 hover:bg-gradient-to-b"
            }`}
        >
          Copy
        </button>

        <button
          onClick={() => !lockedTodo && deleteTodo(id)}
          disabled={lockedTodo}
          className={`btn deleteButton relative  mb-4
            ${
              lockedTodo
                ? `pointer-events-none opacity-70 text-[#f991519c]  bg-gradient-to-b from-gray-600 to-slate-900`
                : "bg-red-900 from-red-500 to-red-950 text-blue-50 hover:bg-gradient-to-b"
            }`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
