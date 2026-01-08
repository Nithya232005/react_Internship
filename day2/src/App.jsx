import  { useContext } from 'react';
import { useState,createContext } from 'react';
const theme=createContext();
import "./App.css";

function App() {
  const[dark,setDark]=useState(true);
  const themes={
   background: dark ? "beige":"brown"
};
  return (
    <div className="button">
      <theme.Provider value={themes}>
       {dark ?<Item1/>:<Item2/>}
        <button onClick={()=>setDark(!dark)}>toggle</button>
      </theme.Provider>
    </div>
  )
   
}
function Item1() {
  const use=useContext(theme);
  return (
    <div>
      <div className="div1" style={{background:use.background}}>


     <h1>This is theme1 page</h1>

      </div>

    </div>
  )
}
function Item2() {
  const use=useContext(theme);
  return (
    <div>
      <div className="div2" style={{background:use.background}}>


     <h1>This is theme2 page</h1>

      </div>

    </div>
  )
}

export default App
