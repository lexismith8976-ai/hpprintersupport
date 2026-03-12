import React from 'react';
import { AlertCircle, Wifi, Printer, FileText, Zap, RefreshCw, Youtube } from 'lucide-react';

const Troubleshoot: React.FC = () => {
  const issues = [
    {
      icon: <Wifi size={32} />,
      title: 'WiFi Connection Issues',
      symptoms: 'Printer offline, cannot connect to network',
      solutions: [
        'Restart your printer and router',
        'Check if printer is within range of router',
        'Run HP Print and Scan Doctor',
        'Reconnect printer to WiFi using HP Smart app'
      ]
    },
    {
      icon: <Printer size={32} />,
      title: 'Paper Jams',
      symptoms: 'Paper stuck, error message on display',
      solutions: [
        'Turn off printer and unplug',
        'Remove paper tray and check for stuck paper',
        'Open rear access door and gently remove jammed paper',
        'Check for torn pieces of paper'
      ]
    },
    {
      icon: <FileText size={32} />,
      title: 'Print Quality Issues',
      symptoms: 'Streaks, faded prints, blank pages',
      solutions: [
        'Check ink/toner levels',
        'Run printer cleaning cycle',
        'Align printheads',
        'Use genuine HP cartridges'
      ]
    },
    {
      icon: <AlertCircle size={32} />,
      title: 'Error Codes',
      symptoms: 'Display shows error codes like 0x6100004',
      solutions: [
        'Note down the error code',
        'Restart printer',
        'Check HP support website for specific code',
        'Contact support if persists'
      ]
    },
    {
      icon: <Zap size={32} />,
      title: 'Power Issues',
      symptoms: 'Printer won\'t turn on, randomly shuts off',
      solutions: [
        'Check power cable connections',
        'Try different outlet',
        'Check for blown fuses',
        'Inspect power supply'
      ]
    },
    {
      icon: <RefreshCw size={32} />,
      title: 'Scanner Problems',
      symptoms: 'Scanner not working, scan quality poor',
      solutions: [
        'Update scanner drivers',
        'Check scanner glass for smudges',
        'Restart HP Smart app',
        'Reinstall scanning software'
      ]
    }
  ];

  const videoTutorials = [
    {
      title: 'How to Fix Paper Jam in HP LaserJet Printers',
      description: 'Step-by-step guide to clear paper jams in HP LaserJet printers',
      url: 'https://www.youtube.com/results?search_query=hp+printer+paper+jam+fix'
    },
    {
      title: 'How to Connect HP Printer to WiFi',
      description: 'Complete guide for wireless setup on HP printers',
      url: 'https://www.youtube.com/results?search_query=hp+printer+wifi+setup'
    },
    {
      title: 'Fix Print Quality Issues - Streaks & Faded Prints',
      description: 'Learn how to fix print quality problems on HP printers',
      url: 'https://www.youtube.com/results?search_query=hp+printer+print+quality+issues'
    },
    {
      title: 'HP Printer Error Codes Explained',
      description: 'Common HP printer error codes and their solutions',
      url: 'https://www.youtube.com/results?search_query=hp+printer+error+codes'
    }
  ];

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Troubleshoot <span>Your Printer</span></h1>
          <p>Step-by-step solutions for common HP printer problems</p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Common <span>Issues & Solutions</span></h2>
            <p>Find quick fixes for your printer problems</p>
          </div>

          <div className="features-grid">
            {issues.map((issue, index) => (
              <div key={index} className="feature-card" style={{ textAlign: 'left' }}>
                <div className="feature-icon">
                  {issue.icon}
                </div>
                <h3>{issue.title}</h3>
                <p style={{ color: '#ff6b6b', marginBottom: '10px' }}>
                  <strong>Symptoms:</strong> {issue.symptoms}
                </p>
                <div>
                  <strong style={{ color: '#003366' }}>Solutions:</strong>
                  <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                    {issue.solutions.map((solution, i) => (
                      <li key={i} style={{ marginBottom: '5px', color: '#666' }}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <div className="section-title">
            <h2>Video <span>Tutorials</span></h2>
            <p>Watch step-by-step troubleshooting guides</p>
          </div>

          <div className="card-grid">
            {videoTutorials.map((video, index) => (
              <div key={index} className="card">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                  <Youtube size={48} color="#ff0000" />
                </div>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <a 
                  href={video.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <button 
                    className="pricing-btn" 
                    style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                  >
                    <Youtube size={18} />
                    Watch Video
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Troubleshoot;