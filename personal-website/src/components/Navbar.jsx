import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import any CSS specific to the navbar

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className={`navbar ${isActive ? 'active' : ''}`}>
    <div className="hamburger" onClick={toggleNavbar}>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className={`navbar-links ${isActive ? 'active' : ''}`}>
      <Link to="/" className="navbar-element">Home</Link>
      <Link to="/experience" className="navbar-element">Experience</Link>
      <Link to="/portfolio" className="navbar-element">Portfolio</Link>
      <Link to="/leisure" className="navbar-element">Leisure</Link>
    </div>
  </nav>
  );
};

export default Navbar;