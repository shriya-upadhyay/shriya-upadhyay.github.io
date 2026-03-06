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

    const closeNavbar = () => {
        setIsActive(false);
    };

    return (
        <nav className={`navbar ${isActive ? 'active' : ''}`}>
            <div className="hamburger" onClick={toggleNavbar}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`navbar-links ${isActive ? 'active' : ''}`}>
                <Link to="/" className="navbar-element" onClick={closeNavbar}>Home</Link>
                <Link to="/experience" className="navbar-element" onClick={closeNavbar}>Experience</Link>
                <Link to="/portfolio" className="navbar-element" onClick={closeNavbar}>Portfolio</Link>
                <Link to="/writing" className="navbar-element" onClick={closeNavbar}>Writing</Link>
                <Link to="/leisure" className="navbar-element" onClick={closeNavbar}>Outside the Code</Link>
            </div>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
        </nav>
    );
};

export default Navbar;
