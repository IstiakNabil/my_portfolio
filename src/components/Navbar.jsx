export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo">Muhammad Nabil</div>
        {/* Burger Menu Icon */}
        <div className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="nav-links">
          <a href="#about" className="nv-button">About</a>
          <a href="#projects" className="nv-button">Projects</a>
          <a href="#skills" className="nv-button">Skills</a>
          <a href="#contact" className="nv-button">Contact</a>
        </div>
      </nav>
    </header>
  );
}