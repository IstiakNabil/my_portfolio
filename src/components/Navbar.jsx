
import React, { useState } from 'react';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky-header">
      <nav>
        <div className="logo">Muhammad Nabil</div>
        {/* 1. The Burger Button: Clicking it flips the switch */}
        <div className="burger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        {/* 2. The Links: If isOpen is true, it adds the "active" class */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#about" className="nv-button" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" className="nv-button" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#skills" className="nv-button" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#contact" className="nv-button" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </nav>
    </header>
  );
}