function About({ about }) {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p>{about.bio}</p>
    </section>
  );
}

export default About;