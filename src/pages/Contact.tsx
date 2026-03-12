import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Clock, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us. We will respond within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openChat = () => {
    window.open('https://getchatsupport.live/', '_blank');
  };

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Contact <span>Support</span></h1>
          <p>We're here to help 24/7</p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="card-grid" style={{ marginBottom: '50px' }}>
            <div className="card">
              <Phone size={32} color="#0066b3" />
              <h3>Phone Support</h3>
              <p>24/7 Available</p>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#0066b3' }}>1-800-234-5678</p>
            </div>
            <div className="card">
              <Mail size={32} color="#0066b3" />
              <h3>Email Support</h3>
              <p>24hr Response Time</p>
              <p style={{ color: '#0066b3' }}>support@hpprinter.com</p>
            </div>
            <div className="card" onClick={openChat} style={{ cursor: 'pointer' }}>
              <MessageCircle size={32} color="#0066b3" />
              <h3>Live Chat</h3>
              <p>Instant Response</p>
              <button className="pricing-btn" style={{ marginTop: '10px' }}>
                Start Chat
              </button>
            </div>
            <div className="card">
              <Clock size={32} color="#0066b3" />
              <h3>Business Hours</h3>
              <p>Mon-Fri: 24/7</p>
              <p>Sat-Sun: 24/7</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ color: '#003366', marginBottom: '20px' }}>Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Printer Model</label>
                  <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    placeholder="e.g., HP LaserJet Pro M402dn"
                  />
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <select name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="">Select a subject</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Driver Issues">Driver Issues</option>
                    <option value="Billing Question">Billing Question</option>
                    <option value="Warranty Claim">Warranty Claim</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }}
                  />
                </div>
                <button type="submit" className="modal-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h3 style={{ color: '#003366', marginBottom: '20px' }}>Office Location</h3>
              <div style={{ background: '#f5f7fa', padding: '30px', borderRadius: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <MapPin color="#0066b3" />
                  <p>123 Printer Street, Tech Park<br />Palo Alto, CA 94304<br />United States</p>
                </div>
                
                <h4 style={{ color: '#003366', marginTop: '30px', marginBottom: '15px' }}>Quick Links</h4>
                <ul style={{ listStyle: 'none' }}>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="#" onClick={openChat} style={{ color: '#0066b3', textDecoration: 'none' }}>Live Chat Support</a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/faq" style={{ color: '#0066b3', textDecoration: 'none' }}>Frequently Asked Questions</a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/drivers" style={{ color: '#0066b3', textDecoration: 'none' }}>Driver Downloads</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;