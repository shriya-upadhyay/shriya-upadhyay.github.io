import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Link as ScrollLink } from 'react-scroll';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';
import Leisure from './pages/Leisure';



function App() {

  return (

    <Router>
        <nav className ="navbar">
        <Link  to="/" className='navbar-element'>Home</Link>
        <Link to="/experience" className='navbar-element'>Experience</Link>
        <Link to="/portfolio" className='navbar-element'>Portfolio</Link>
        <Link to="/leisure" className='navbar-element'>Leisure</Link>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/leisure" element={<Leisure />} />
        </Routes>

    </Router>
  );
}

export default App;
