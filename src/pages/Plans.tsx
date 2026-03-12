import React from 'react';
import { Check, X } from 'lucide-react';

const Plans: React.FC = () => {
  // Define interface for feature
  interface Feature {
    name: string;
    included: boolean;
    note?: string;  // Optional property
  }

  interface Plan {
    name: string;
    price: string;
    period?: string;
    popular?: boolean;
    features: Feature[];
  }

  const plans: Plan[] = [
    {
      name: 'Standard',
      price: 'Free',
      features: [
        { name: 'Knowledge Base Access', included: true },
        { name: 'Community Forums', included: true },
        { name: 'Driver Downloads', included: true },
        { name: 'Email Support', included: true, note: '48hr response' },
        { name: 'Phone Support', included: false },
        { name: 'Remote Assistance', included: false },
        { name: 'On-site Service', included: false }
      ]
    },
    {
      name: 'Premium',
      price: '$14.99',
      period: 'month',
      popular: true,
      features: [
        { name: 'Knowledge Base Access', included: true },
        { name: 'Community Forums', included: true },
        { name: 'Driver Downloads', included: true },
        { name: '24/7 Phone Support', included: true },
        { name: 'Remote Assistance', included: true },
        { name: 'HP Smart App Premium', included: true },
        { name: 'Extended Warranty', included: true },
        { name: 'On-site Service', included: false }
      ]
    },
    {
      name: 'Business Pro',
      price: '$29.99',
      period: 'month',
      features: [
        { name: 'Everything in Premium', included: true },
        { name: '1-Hour Response', included: true },
        { name: 'On-site Service', included: true },
        { name: 'Dedicated Manager', included: true },
        { name: 'Fleet Management', included: true },
        { name: 'Volume Licensing', included: true },
        { name: 'API Access', included: true }
      ]
    }
  ];

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Support <span>Plans</span></h1>
          <p>Choose the perfect support plan for your HP printer</p>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">RECOMMENDED</div>}
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  {plan.period && <span className="period">/{plan.period}</span>}
                </div>
                <ul className="features-list">
                  {plan.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {feature.included ? 
                        <Check size={16} color="#0066b3" /> : 
                        <X size={16} color="#999" />
                      }
                      <span>{feature.name}</span>
                      {feature.note && (
                        <span style={{ color: '#999', fontSize: '12px', marginLeft: '5px' }}>
                          ({feature.note})
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <button className="pricing-btn">
                  {plan.name === 'Standard' ? 'Get Started' : 'Subscribe Now'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Plan <span>Comparison</span></h2>
            <p>Detailed comparison of all support features</p>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Standard</th>
                  <th>Premium</th>
                  <th>Business Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Knowledge Base</td>
                  <td style={{ color: '#0066b3', fontWeight: 'bold' }}>✓</td>
                  <td style={{ color: '#0066b3', fontWeight: 'bold' }}>✓</td>
                  <td style={{ color: '#0066b3', fontWeight: 'bold' }}>✓</td>
                </tr>
                <tr>
                  <td>Community Forums</td>
                  <td style={{ color: '#0066b3', fontWeight: 'bold' }}>✓</td>
                  <td style={{ color: '#0066b3', fontWeight: 'bold' }}>✓</td>
                  <td style={{ color: '#0066b3', fontWeight: 'bold' }}>✓</td>
                </tr>
                <tr>
                  <td>Driver Downloads</td>
                  <td style={{ color: '#0066b3', fontWeight: 'bold' }}>✓</td>
                  <td style={{ color: '#0066b3', fontWeight: 'bold' }}>✓</td>
                  <td style={{ color: '#0066b3', fontWeight: 'bold' }}>✓</td>
                </tr>
                <tr>
                  <td>Email Support</td>
                  <td>✓ (48hr)</td>
                  <td>✓ (24hr)</td>
                  <td>✓ (4hr)</td>
                </tr>
                <tr>
                  <td>Phone Support</td>
                  <td style={{ color: '#999' }}>✗</td>
                  <td>✓ 24/7</td>
                  <td>✓ Priority</td>
                </tr>
                <tr>
                  <td>Remote Assistance</td>
                  <td style={{ color: '#999' }}>✗</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>On-site Service</td>
                  <td style={{ color: '#999' }}>✗</td>
                  <td style={{ color: '#999' }}>✗</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Dedicated Manager</td>
                  <td style={{ color: '#999' }}>✗</td>
                  <td style={{ color: '#999' }}>✗</td>
                  <td>✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;