import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./Components/Navbar";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs"


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

       <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route path="profile" element={<Profile />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />
      </Route>

       <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<h2>404 Page Not Found</h2>} />
    </Routes>
    </>
  );
}

export default App;
