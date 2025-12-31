import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (form.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (form.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }
    if (form.password.trim() === "") {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Registration Successful");
      setForm({ name: "", email: "", password: "" });
    }
  };
  return (
    <>
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="error">{errors.password}</span>
          )}
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
    
    </>
  );
}

export default App;
