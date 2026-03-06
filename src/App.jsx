import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';
import Leisure from './pages/Leisure';
import Writing from './pages/Writing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Navbar />
                <div id="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/leisure" element={<Leisure />} />
                        <Route path="/writing" element={<Writing />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;
