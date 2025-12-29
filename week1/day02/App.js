import "./App.css";
import Navbar from "./Navbar";
import image from "./assets/image.png";

function App() {
  const user = {
    name: "Nithya Thangaraju",
    title: "Frontend Developer",
    bio: "Final Year B.E CSE Student Passionate About Full Stack Development",
  };

  return (
    <>
      <Navbar />

      <div className="profilecard">
        <img src={image} className="profile" alt="profile" />
        <h2>{user.name}</h2>
        <h4>{user.title}</h4>
        <p>{user.bio}</p>
      </div>
    </>
  );
}

export default App;
