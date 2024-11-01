import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Link as ScrollLink } from 'react-scroll';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';
import Leisure from './pages/Leisure';
import Navbar from './components/Navbar';



function App() {

  return (
    <Router>
      <Navbar /> 
      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/leisure" element={<Leisure />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
