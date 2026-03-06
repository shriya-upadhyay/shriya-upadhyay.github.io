import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const { theme, toggleTheme } = useTheme();

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
                <Link to="/writing" className="navbar-element">Writing</Link>
                <Link to="/leisure" className="navbar-element">Outside the Code</Link>
            </div>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
        </nav>
    );
};

export default Navbar;
