import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';
import Leisure from './pages/Leisure';
import Writing from './pages/Writing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollEffects from './components/ScrollEffects';
import { ThemeProvider } from './context/ThemeContext';

// Keyed on the path so each page plays the enter transition
function AnimatedRoutes() {
    const location = useLocation();
    return (
        <div className="page" key={location.pathname}>
            <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/leisure" element={<Leisure />} />
                <Route path="/writing" element={<Writing />} />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <Router>
                <ScrollEffects />
                <Navbar />
                <div id="content">
                    <AnimatedRoutes />
                </div>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;
