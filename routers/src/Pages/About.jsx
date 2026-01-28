import "./about.css";

function About() {
  return (
    <div className="about-container">
      <h3 className="about-title">About Me</h3>

      <p className="about-text">
        I am a Computer Science Engineering student with an interest in
        frontend and full-stack web development. I enjoy learning new
        technologies and building simple, user-friendly applications.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <h4>Education</h4>
          <p>Final Year B.E. Computer Science</p>
        </div>

        <div className="about-card">
          <h4>Skills</h4>
          <p>HTML, CSS, JavaScript, React</p>
        </div>
      </div>
    </div>
  );
}

export default About;
