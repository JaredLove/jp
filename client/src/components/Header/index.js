import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

import './nav.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  return (
    <header className="header">
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-brand">
          JaredL.
        </a>
        <button className="navbar-toggler" onClick={toggle}>
          <FaBars />
        </button>
        <ul
          className={`navbar-nav ${isOpen ? "navbar-open" : "navbar-closed"}`}
        >
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={close}>
            <span className='navSign'></span> About
            </a>
          </li>
          <li className="nav-item">
            <a href="#resume" className="nav-link" onClick={close}>
            <span className='navSign'></span> Expertise
            </a>
          </li>
          <li className="nav-item">
            <a href="#work" className="nav-link" onClick={close}>
            <span className='navSign'></span> Work
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={close}>
            <span className='navSign'></span> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </header>
  );
};

export default Header;