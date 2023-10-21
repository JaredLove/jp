import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

import './nav.css'

const Header = ({handleNavigationClick, currentPage}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // const close = () => setIsOpen(false);

  // const scrollToSection = (sectionId) => {
    
  //   const section = document.getElementById(sectionId);
  //   if (section) {
      
  //     section.scrollIntoView({
  //       behavior: 'smooth',
  //     });
  //   }
  //   close();
  // };

  return (
    <header className="header">
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-brand" onClick={() => handleNavigationClick('home')}>
        <a href="#home">J.</a>
        </button>
        <button className="navbar-toggler" onClick={toggle}>
          <FaBars />
        </button>
        <ul
          className={`navbar-nav ${isOpen ? "navbar-open" : "navbar-closed"}`}
        >
          <li className="nav-item">
          <button onClick={() => handleNavigationClick('about')} style={{ color: currentPage === 'about' ? '#777777' : '#ecedee' }}><a href="#about" >About</a></button>
          </li>
          <li className="nav-item">
          <button onClick={() => handleNavigationClick('resume')} style={{ color: currentPage === 'resume' ? '#777777' : '#ecedee' }}><a href="#resume">Expertise</a></button>
          </li>
          <li className="nav-item">
          <button onClick={() => handleNavigationClick('work')} style={{ color: currentPage === 'work' ? '#777777' : '#ecedee' }}><a href="#work">Work</a></button>
          </li>
          <li className="nav-item">
          <button onClick={() => handleNavigationClick('contact')} style={{ color: currentPage === 'contact' ? '#777777' : '#ecedee' }}><a href="#contact">Contact</a></button>
          </li>
        </ul>
      </div>
    </nav>
    </header>
  );
};

export default Header;