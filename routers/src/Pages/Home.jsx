import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <h2>Home Page</h2>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}

export default Home;
