function Hero({ hero }) {
  return (
    <section className="hero" id="home">
      <h1>{hero.name}</h1>
      <p>{hero.tagline}</p>
    </section>
  );
}

export default Hero;
