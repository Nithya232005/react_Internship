import { NavLink, Outlet } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>

      <nav className="dashboard-nav">
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="blogs">Blogs</NavLink>
      </nav>

      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
