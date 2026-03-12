import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Printer } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Support Plans', path: '/plans' },
    { name: 'Drivers', path: '/drivers' },
    { name: 'Troubleshoot', path: '/troubleshoot' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <Printer size={32} color="#0066b3" />
          <span>HP Printer <span className="logo-highlight">Support</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mobile-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;