import { useState } from 'react'
import './App.css'
import Home from './Home'; // Import the Home component
import { Link as ScrollLink } from 'react-scroll';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Portfolio from './Portfolio';
import Experience from './Experience';



function App() {

  return (

    <Router>
        <nav className ="navbar">
        <Link  to="/" className='navbar-element'>Home</Link>
        <Link to="/experience" className='navbar-element'>Experience</Link>
        <Link to="/portfolio" className='navbar-element'>Portfolio</Link>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          {/* Define other Routes here if you have more pages */}
        </Routes>

    </Router>
  );
}

export default App;
