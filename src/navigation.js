import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Task1 from './task1';
import Task2 from './task2';
import Task3 from './task3';


export default function Navigation() {
  return (
    <Router>
      <div className="Navbar">
        <nav>
          <ul>
            <li>
              <NavLink className= "link" to="/">Task 1</NavLink>
            </li>
            <li>
              <NavLink className= "link" to="/task2">Task 2</NavLink>
            </li>
            <li>
              <NavLink className= "link" to="/task3">Task 3</NavLink>
            </li>
         </ul>
        </nav>
       <Routes>
       <Route path="/" element={<Task1></Task1>} />
       <Route path="/task2" element={<Task2></Task2>} />
       <Route path="/task3" element={<Task3></Task3>} />    

       </Routes>
               
              </div>
    </Router>
  );
}


