// eslint-disable-next-line no-unused-vars
import React from "react";
import WholeTodo from "./TodoFolder/WholeTodo.jsx";
import WholeTodo2 from "./TodoFolder2/WholeTodo2.jsx";
import WholeTodo3 from "./TodoFolder3/WholeTodo3.jsx";
import "./App.css";
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      {/*<Route path="/" element={<Home />} />
       <Route path="/newpost" element={<NewPost />} />
      <Route path="/postpage" element={<PostPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/nav" element={<Nav />} />
      <Route path="/header" element={<Header />} />
      <Route path="/missing" element={<Missing />} /> */}
      <Route path="/" element={<WholeTodo />} />
      <Route path="/WholeTodo2" element={<WholeTodo2 />} />
      <Route path="/WholeTodo3" element={<WholeTodo3 />} />
      <Route path="/*" element={< WholeTodo />} />  
    </Routes>
  )
}

export default App
