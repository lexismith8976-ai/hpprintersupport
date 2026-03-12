import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Home from './pages/Home';
import Plans from './pages/Plans';
import Drivers from './pages/Drivers';
import Troubleshoot from './pages/Troubleshoot';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import AuthModal from './components/AuthModal';
import './App.css';

// Header Component
const Header = () => {
  const location = useLocation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/plans', label: 'Plans' },
    { path: '/drivers', label: 'Drivers' },
    { path: '/troubleshoot', label: 'Troubleshoot' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            🖨️ HP <span>Printer Support</span>
          </Link>
          <nav className="nav-menu">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
            <button className="login-btn" onClick={() => setIsAuthModalOpen(true)}>
              Sign In
            </button>
          </nav>
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

// Footer Component
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>HP PRINTER SUPPORT</h4>
          <p>Professional customer support for all HP printer models since 1984. We're here to help 24/7.</p>
        </div>
        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/plans">Support Plans</Link></li>
            <li><Link to="/drivers">Driver Downloads</Link></li>
            <li><Link to="/troubleshoot">Troubleshoot</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>SUPPORT</h4>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="https://getchatsupport.live/" target="_blank" rel="noopener noreferrer">Live Chat</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>CONNECT</h4>
          <ul>
            <li><a href="https://twitter.com/HP" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.facebook.com/HP" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.youtube.com/hp" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a href="https://www.linkedin.com/company/hp" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 HP Printer Support Center. All rights reserved. HP and all HP product names are trademarks of HP Inc.</p>
      </div>
    </div>
  </footer>
);

// Chat Support Button
const ChatSupport = () => {
  const openChat = () => {
    window.open('https://getchatsupport.live/', '_blank');
  };

  return (
    <div className="chat-support">
      <button className="chat-btn" onClick={openChat}>
        <MessageCircle size={20} />
        Chat Support
      </button>
    </div>
  );
};
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/troubleshoot" element={<Troubleshoot />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ChatSupport />
    </Router>
  );
}

export default App;