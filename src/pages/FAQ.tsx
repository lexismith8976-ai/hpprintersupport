import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          q: 'How do I find my HP printer model number?',
          a: 'You can find your printer model number on the front or top of your printer. It usually starts with "HP" followed by letters and numbers (e.g., HP LaserJet Pro M402dn). You can also find it in the printer settings or on the original packaging.'
        },
        {
          q: 'Is HP support free?',
          a: 'Basic support including knowledge base, community forums, and driver downloads is always free. Premium features like live phone support and remote assistance require a subscription to one of our support plans.'
        },
        {
          q: 'How do I register my HP printer?',
          a: 'You can register your HP printer through the HP Smart app or visit the HP Support website. Registration helps with warranty claims and provides personalized support.'
        }
      ]
    },
    {
      category: 'Setup & Installation',
      questions: [
        {
          q: 'How do I connect my HP printer to WiFi?',
          a: '1. Press the Wireless button on your printer until the light flashes\n2. Download and open the HP Smart app on your phone\n3. Follow the in-app instructions to complete the connection\n4. Make sure your printer and phone are on the same network'
        },
        {
          q: 'How do I install HP printer drivers?',
          a: 'You can download the latest drivers from our Drivers page. Select your printer model, choose your operating system, and download the full feature driver package. Run the installer and follow the on-screen instructions.'
        },
        {
          q: 'How do I set up HP Smart app?',
          a: 'Download HP Smart from the App Store (iOS), Google Play Store (Android), or Microsoft Store (Windows). Open the app, create an account or sign in, and follow the setup wizard to add your printer.'
        }
      ]
    },
    {
      category: 'Printing Issues',
      questions: [
        {
          q: 'Why is my HP printer printing blank pages?',
          a: 'Blank pages are usually caused by:\n- Low or empty ink/toner cartridges\n- Clogged printheads\n- Driver issues\n\nRun the HP Print and Scan Doctor tool to diagnose and fix the problem automatically.'
        },
        {
          q: 'How do I clear a paper jam?',
          a: '1. Turn off the printer and unplug it\n2. Remove all paper from the input tray\n3. Open the front and rear access doors\n4. Gently pull out any jammed paper in the direction it would normally feed\n5. Check for torn pieces of paper\n6. Close all doors and turn the printer back on'
        },
        {
          q: 'How do I improve print quality?',
          a: '1. Check ink/toner levels\n2. Run the printer cleaning cycle from the printer settings\n3. Align the printheads\n4. Use high-quality paper\n5. Ensure you\'re using genuine HP cartridges'
        }
      ]
    },
    {
      category: 'Account & Billing',
      questions: [
        {
          q: 'How do I cancel my support subscription?',
          a: 'You can cancel your subscription anytime from your account dashboard. Go to Account Settings > Subscription > Cancel. Your access will continue until the end of the billing period.'
        },
        {
          q: 'Do you offer refunds?',
          a: 'Yes, we offer a 30-day money-back guarantee on all paid plans. If you\'re not satisfied, contact our support team within 30 days of purchase for a full refund.'
        },
        {
          q: 'How do I update my payment method?',
          a: 'Log in to your account, go to Billing Settings, and you can update your payment method there. We accept all major credit cards and PayPal.'
        }
      ]
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const openChat = () => {
    window.open('https://getchatsupport.live/', '_blank');
  };

  const goToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Frequently Asked <span>Questions</span></h1>
          <p>Find answers to common questions about HP printer support</p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} style={{ marginBottom: '50px' }}>
              <h3 style={{ color: '#003366', marginBottom: '20px', fontSize: '24px' }}>
                {category.category}
              </h3>
              
              <div style={{ background: 'white', borderRadius: '10px', overflow: 'hidden' }}>
                {category.questions.map((faq, qIndex) => {
                  const itemIndex = catIndex * 100 + qIndex;
                  return (
                    <div
                      key={qIndex}
                      style={{
                        borderBottom: '1px solid #e6eef9',
                        padding: '20px',
                        cursor: 'pointer'
                      }}
                      onClick={() => toggleItem(itemIndex)}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4 style={{ color: '#003366', fontSize: '16px' }}>{faq.q}</h4>
                        {openItems.includes(itemIndex) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                      {openItems.includes(itemIndex) && (
                        <div style={{ marginTop: '15px', color: '#666', whiteSpace: 'pre-line' }}>
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <div className="section-title">
            <h2>Still Have <span>Questions?</span></h2>
            <p>Our support team is here to help</p>
          </div>

          <div style={{ textAlign: 'center', display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <button 
              className="btn-primary" 
              onClick={goToContact}
              style={{ 
                padding: '15px 40px',
                background: '#0066b3',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'inline-block'
              }}
            >
              Contact Support
            </button>
            <button 
              className="btn-secondary"
              onClick={openChat}
              style={{ 
                padding: '15px 40px',
                background: 'transparent',
                color: '#0066b3',
                border: '2px solid #0066b3',
                borderRadius: '6px',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'inline-block'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#0066b3';
                e.currentTarget.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#0066b3';
              }}
            >
              Live Chat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;