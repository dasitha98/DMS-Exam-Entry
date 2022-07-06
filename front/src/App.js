import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import St from "./pages/student.js";
import Sub from "./pages/subject.js";
import List from "./pages/list.js";
import Edit_Student from "./pages/edit_student.js";
import Edit_Subject from "./pages/edit_subject.js";

function App() {
  return (
    <BrowserRouter>
          <Routes>
                <Route path="/" element={<List/>} exact></Route>
                <Route path="/student" element={<St/>} exact></Route>
                <Route path="/subject" element={<Sub/>} exact></Route>
                <Route path="/editstudent/:id" element={<Edit_Student/>} exact></Route>
                <Route path="/editsubject/:id" element={<Edit_Subject/>} exact></Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
