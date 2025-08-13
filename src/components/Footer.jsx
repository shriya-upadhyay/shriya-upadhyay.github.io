import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Use build time for last updated date
  const buildTime = import.meta.env.VITE_BUILD_TIME || new Date().toISOString();
  const lastUpdated = new Date(buildTime).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p className="copyright">
            © {currentYear} Shriya Upadhyay. All rights reserved.
          </p>
        </div>
        
        <div className="footer-section">
          <p className="tech-stack">
            Built with <span className="tech-item">React</span>, <span className="tech-item">TypeScript</span>, and <span className="tech-item">Vite</span>
          </p>
        </div>
        
        <div className="footer-section">
          <p className="last-updated">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
