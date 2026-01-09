import React, { createContext, useState,useContext, useReducer } from "react";
import "./App.css";

const FormContext = createContext();
const initialState = {
  isLogin: false,
  user: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isLogin: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        isLogin: false,
        user: null,
      };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <div>
        <h2>Authentication</h2>
        <Login />
      </div>
    </FormContext.Provider>
  );
}
function Login() {
  const { state, dispatch } = useContext(FormContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName]=useState("");
  if (state.isLogin) {
    return (
      <div>
        <p>Welcome,{name}</p>
        <p>{email}</p>
        <button onClick={() => dispatch({ type: "LOGOUT" })}>
          Logout
        </button>
      </div>
    );
  }
  return (
    <div>
       <input
        type="name"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /> <br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /> <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>Please login</p>
      <button
        onClick={() =>
          dispatch({
            type: "LOGIN",
            payload: {
             email,password
            },
          })
        }
      >Login
      </button>
    </div>
  );
}
export default App;
