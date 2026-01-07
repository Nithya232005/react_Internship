import React, { useContext } from 'react'
import usecontext from "./App.jsx";

function User() {
    const use=useContext(usecontext);
  return (
    <div>
        <p>{use.name}</p>
        <p>{use.age}</p>

    </div>
  )
}

export default User