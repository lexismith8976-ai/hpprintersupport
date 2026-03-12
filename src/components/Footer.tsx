import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>HP Printer Support</h4>
            <p>Professional customer support for all HP printer models since 1984.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/drivers">Driver Downloads</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 HP Printer Support Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  // ✅ Ye IMPORTANT hai!