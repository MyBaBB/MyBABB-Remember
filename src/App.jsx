// eslint-disable-next-line no-unused-vars
import React from "react";
import WholeTodo from "./TodoFolder/WholeTodo.jsx";
import WholeTodo2 from "./TodoFolder2/WholeTodo2.jsx";
import WholeTodo3 from "./TodoFolder3/WholeTodo3.jsx";
 
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      
 
      <Route path="/" element={<WholeTodo />} />
      <Route path="/WholeTodo2" element={<WholeTodo2 />} />
      <Route path="/WholeTodo3" element={<WholeTodo3 />} />
      <Route path="/*" element={<WholeTodo />} />
    </Routes>
  );
}

export default App;
