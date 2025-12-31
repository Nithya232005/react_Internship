import React, { useState } from "react";
import './App.css';
function App(){
 const[count,setCount]=useState(0);
 const[show,setShow]=useState(true);
 return(
  <div className="container">
  <h1>COUNTER APP</h1>
  {show && <h2>count:{count}</h2>}
  <div className="buttons">
    <button onClick={()=> setCount(prevCount=>prevCount+1)}>Increament</button>
    <button onClick={()=> setCount(prevCount=>prevCount-1)}>Decreament</button>
    <button onClick={()=> setCount(0)}>Reset</button>
  </div>
  <button className="toggle-btn" onClick={()=>setShow(!show)}>
    {show ? "Hidecount":"ShowCount"}
  </button>
  </div>
);
}
export default App;
