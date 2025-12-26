function Header({ links }) {
  return (
    <header className="header">
      <h2 className="logo">Portfolio</h2>
      <nav>
        {links.map((link, index) => (
          <a key={index} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
