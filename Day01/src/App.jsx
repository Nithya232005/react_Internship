
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import './App.css';
function App() {
  return (
    <div className="header">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
       <Route path="/About" element={<About/>}/>
         <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  
  )
}

export default App