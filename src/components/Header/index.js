import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

import './nav.css'

const Header = ({handleNavigationClick, currentPage}) => {
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
        <button className="navbar-brand" onClick={() => handleNavigationClick('work')}>
          J.
        </button>
        <button className="navbar-toggler" onClick={toggle}>
          <FaBars />
        </button>
        <ul
          className={`navbar-nav ${isOpen ? "navbar-open" : "navbar-closed"}`}
        >
          <li className="nav-item">
          <button onClick={() => handleNavigationClick('about')} style={{ color: currentPage === 'about' ? '#777777' : '#ecedee' }}>About</button>
          </li>
          <li className="nav-item">
          <button onClick={() => handleNavigationClick('resume')} style={{ color: currentPage === 'expertise' ? '#777777' : '#ecedee' }}>Expertise</button>
          </li>
          <li className="nav-item">
          <button onClick={() => handleNavigationClick('work')} style={{ color: currentPage === 'work' ? '#777777' : '#ecedee' }}>Work</button>
          </li>
          <li className="nav-item">
          <button onClick={() => handleNavigationClick('contact')} style={{ color: currentPage === 'contact' ? '#777777' : '#ecedee' }}><span className='bn30'>Contact</span></button>
          </li>
        </ul>
      </div>
    </nav>
    </header>
  );
};

export default Header;