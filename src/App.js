import React from "react";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import TodoList from "./components/TodoList";

const App = () => {
  return (
     <BrowserRouter>
         <Routes>
             <Route path="/" element={<TodoList/>}/>
         </Routes>
     </BrowserRouter>
  );
}
export default App;
