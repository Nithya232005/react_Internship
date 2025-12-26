function Footer({ socials }) {
  return (
    <footer className="footer">
  <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
  <a href={socials.github} target="_blank" rel="noreferrer">GitHub</a>
  <a href={`mailto:${socials.email}`}>Email</a>
</footer>

  );
}

export default Footer;
