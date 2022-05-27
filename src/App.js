import React from "react";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import TodoList from "./components/TodoList";

const App = () => {
  return (
     <BrowserRouter>
         <Routes>
             <Route path="/todoList" element={<TodoList/>}/>
         </Routes>
     </BrowserRouter>
  );
}
export default App;
