# Todolist
This is React Training with a todo list.

this is vite react tailwind setup
https://www.youtube.com/watch?v=22CxRxryQFE&t=443s

this is tailwind setup
https://tailwindcss.com/docs/installation

this is the todo list
https://www.youtube.com/watch?v=Rh3tobg7hEo


Kyle
Web Dev Simplified

Setup with Vite

npm create vite@latest
"." for create folder where you are at
choose  javascript
npm install   or   npm i
npm run dev     to start

https://www.youtube.com/watch?v=Rh3tobg7hEo   - copy
7:50  vite files to delete
10:00 app jsx test  
10:30 add styles and import custom

10:50 form element  
11:30 className
12:00 form-row
12:30 btn
13:15 fragmant replace to div <>  < />
13:45 <ul>
13:50 <label/>
14:00 <button>
15:30 use-state
16:00  [] newItem, setNewItem
18:00  onChange=
18:30  onInput
19:00 event e.target.Value
20:30 on submit 
20:30 handleSubmit
20:31 e.preventDefault
21:00 useState
21:00 set Todo's
21:46 set Todo Function 
21:30 crypto.randomUUID()
21:35 completed:false
22:00  current todos compare new todo
23:00 continued about passing a function for a current new todo.
24:00 {todo.map}
24:30 todo => return <li>
24:31 todo.title
24:35 checkbox
24:46 <input type'checkbox' checked={todo.completed}/
25:22 <li key={todo.id}>
26:00 explain on deleting todo items errors.
26:37 onChange {e =>toggleTodo(todo.id, e.target.cheked)};
27:08 return {...todo, completed} 
28:53 return currentTodos.filter(todo => todo/id !== id)
29:01 function deleteTodo(id){}
20:01 return currentTodos.filter(todo => todo.id !== id)
29:13 <button  onClick={() => deleteTodo(todo.id)}
30:35 {todos.length === 0 && "No Todos"}

      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                 
      xx Above is functional-- Next is Breaking xx
      xx       it down into components          xx
      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

31:16 NewTodoForm.jsx 
31:40 copy and paste files from app.jsx to NewTodoForm.jsx
33:30 if (newItem === "") return
33:27 props.onsubmit
35:00 TodoList.jsx
36:40 <TodoItem id={todo.id} completed={todo.completed} title=
       {todo.title} key={todo.id}>
37:25  ...todo
37:24  export an import altered todos.
37:52 toggleTodo
38:30 useEffect() => {
        localStorage.setItem('ITEMS' JSON.stringify(todos))
        }, [todos])
39:50 if (local value) --null return[]


       





       











