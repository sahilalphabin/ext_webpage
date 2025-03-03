import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span className="logo-icon">
          <img 
            src="/TestGenX_Logo.png" 
            alt="TestGenX Logo" 
            className="logo-icon floating" 
            style={{ width: '40px', height: '40px' }}
          />
          </span>
          <span className="logo-text">E2E Test Generator</span>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="https://marketplace.visualstudio.com/items?itemName=TestGenXTeam.e2e-test-generator">Demo</a></li>
              {/* <li><a href="#docs">Documentation</a></li> */}
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="https://marketplace.visualstudio.com/items?itemName=TestGenXTeam.e2e-test-generator" target="_blank" rel="noopener noreferrer">VS Code Marketplace</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://twitter.com/testgenx" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="mailto:info@testgenx.com">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TestGenX Team. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="https://testgenx.com/privacypolicy.html">Privacy Policy</a>
          <a href="https://testgenx.com/tnc.html">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 