import React from 'react';
import '../styles/Navbar.css';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img 
            src="/TestGenX_Logo.png" 
            alt="TestGenX Logo" 
            className="logo-icon floating" 
            style={{ width: '40px', height: '40px' }}
          />
          <span className="logo-text responsie-hide">E2E Test Generator</span>
        </div>
        <div className="navbar-links">
          <div className="nav-item responsie-hide">
            <span className="new-badge">Beta</span>
            <a href="#features" style={{ textDecoration: 'none', color: 'inherit' }}>Features</a>
          </div>
          <div className="nav-item responsie-hide"><a href="#demo" className="nav-item">Demo</a></div>
          <div className="nav-item responsie-hide"><a href="#faq" className="nav-item">FAQ</a></div>
          <div className="nav-item responsie-hide"><a href="#docs" className="nav-item">Docs</a></div>
          <div className="nav-item"><button className="try-button">Get the VS Code Extension</button></div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 