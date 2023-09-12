import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

import './nav.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  const scrollToSection = (sectionId) => {
    
    const section = document.getElementById(sectionId);
    if (section) {
      
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
    close();
  };

  return (
    <header className="header">
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-brand">
          J.
        </a>
        <button className="navbar-toggler" onClick={toggle}>
          <FaBars />
        </button>
        <ul
          className={`navbar-nav ${isOpen ? "navbar-open" : "navbar-closed"}`}
        >
          <li className="nav-item">
          <button onClick={() => scrollToSection('about')} handleClick={close}>About</button>
          </li>
          <li className="nav-item">
          <button onClick={() => scrollToSection('resume')} handleClick={close}>Expertise</button>
          </li>
          <li className="nav-item">
          <button onClick={() => scrollToSection('work')} handleClick={close}>Work</button>
          </li>
          <li className="nav-item">
          <button onClick={() => scrollToSection('contact')} handleClick={close}><span className="contact-link">Contact</span></button>
          </li>
        </ul>
      </div>
    </nav>
    </header>
  );
};

export default Header;