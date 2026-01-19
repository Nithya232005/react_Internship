import React, { useEffect, useState } from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import withLoading from "./withLoading";
import UserCard from "./UserCard";

const UserCardWithLoading = withLoading(UserCard);

function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  // Simulate initial loading
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const addUser = () => {
    if (name.trim() === "") return;
    setUsers([...users, name]);
    setName("");
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Add Users App</h1>

      {/* Input Section */}
      <div className="input-box">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addUser}>Add</button>
      </div>

      <ErrorBoundary>
        <UserCardWithLoading isLoading={loading} users={users} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
