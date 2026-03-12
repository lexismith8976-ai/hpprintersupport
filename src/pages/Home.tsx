import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Printer, Wrench, Wifi, FileText, 
  Scan, Briefcase, Users, Star, 
  Clock, Award
} from 'lucide-react';
import AuthModal from '../components/AuthModal';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Stats Data
  const stats = [
    { icon: <Users size={32} />, number: '500K+', label: 'DAILY ISSUES SOLVED' },
    { icon: <Star size={32} />, number: '15M+', label: 'HAPPY CUSTOMERS' },
    { icon: <Clock size={32} />, number: '24/7', label: 'LIVE SUPPORT' },
    { icon: <Award size={32} />, number: '1984', label: 'SINCE' }
  ];

  // Features Data
  const features = [
    {
      icon: <Printer size={24} />,
      title: 'Driver & Software',
      description: 'Latest drivers, firmware updates, and full software installation guides'
    },
    {
      icon: <Wrench size={24} />,
      title: 'Hardware Issues',
      description: 'Paper jams, error codes, hardware troubleshooting and repairs'
    },
    {
      icon: <Wifi size={24} />,
      title: 'Wireless Setup',
      description: 'WiFi connection, mobile printing, AirPrint, and HP Smart app setup'
    },
    {
      icon: <FileText size={24} />,
      title: 'Print Quality',
      description: 'Blurry prints, streaks, faded output, and color calibration issues'
    },
    {
      icon: <Scan size={24} />,
      title: 'Scan & Fax',
      description: 'Scanner not working, fax setup, and document digitization help'
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Business Solutions',
      description: 'Enterprise printer management, fleet support, and commercial troubleshooting'
    }
  ];

  // Plans Data
  const plans = [
    {
      name: 'Standard Support',
      price: 'Free',
      features: [
        'Knowledge base access',
        'Community forums',
        'Driver downloads',
        'Email support (48hr)',
        'No live phone support',
        'No remote assistance'
      ]
    },
    {
      name: 'Premium Support',
      price: '$14.99',
      period: 'month',
      popular: true,
      features: [
        '24/7 live phone support',
        'Priority response (2hrs)',
        'Remote diagnostic sessions',
        'Extended hardware warranty',
        'HP Smart app premium',
        'No on-site service'
      ]
    },
    {
      name: 'Business Pro',
      price: '$29.99',
      period: 'month',
      features: [
        'Everything in Premium',
        '1-hour response time',
        'On-site service',
        'Dedicated account manager',
        'Fleet management tools',
        'Volume licensing support'
      ]
    }
  ];

  // Open Chat Support
  const openChat = () => {
    window.open('https://getchatsupport.live/', '_blank');
  };

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="update-badge">UPDATED MARCH 2026</span>
            
            <h1>HP Printer <span>Support Center</span></h1>
            
            <p>
              Professional troubleshooting, driver downloads, and 24/7 customer support 
              for all HP printer models
            </p>

            {/* Stats Grid */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div style={{ color: '#ffcc00', marginBottom: '15px', fontSize: '32px' }}>
                    {stat.icon}
                  </div>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Your Complete <span>HP Printer Support</span> Resource</h2>
            <p>Comprehensive solutions for all your printer problems</p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section className="pricing">
        <div className="container">
          <div className="section-title">
            <h2>HP Support <span>Service Plans 2026</span></h2>
            <p>Choose the perfect plan for your needs</p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">MOST POPULAR</div>}
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  {plan.period && <span className="period">/{plan.period}</span>}
                </div>
                <ul className="features-list">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button 
                  className="pricing-btn"
                  onClick={() => navigate('/plans')}
                >
                  {plan.name === 'Standard Support' && 'Get Started'}
                  {plan.name === 'Premium Support' && 'Choose Premium'}
                  {plan.name === 'Business Pro' && 'Contact Sales'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section">
        <div className="container">
          <h2>Get Your HP Printer Working Perfectly Today</h2>
          <p>
            Join over 15 million satisfied customers who trust HP for reliable printer support.
          </p>
          <div className="cta-buttons">
            <button 
              className="btn-primary" 
              onClick={openChat}
            >
              Start Free Diagnostic
            </button>
            <button 
              className="btn-secondary" 
              onClick={() => setIsAuthModalOpen(true)}
            >
              Sign In / Register
            </button>
          </div>
        </div>
      </section>

      {/* ===== AUTH MODAL ===== */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
};

export default Home;