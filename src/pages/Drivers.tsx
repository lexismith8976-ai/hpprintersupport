import React, { useState } from 'react';
import { Download, Search, Printer } from 'lucide-react';

const Drivers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const driverCategories = [
    {
      category: 'LaserJet Series',
      models: [
        { name: 'LaserJet Pro M402dn', os: 'Windows 11/10/8/7', size: '245 MB' },
        { name: 'LaserJet Enterprise M607', os: 'Windows 11/10/8/7', size: '312 MB' },
        { name: 'LaserJet Tank 2502', os: 'Windows 11/10/8/7', size: '189 MB' },
        { name: 'Color LaserJet Pro M454', os: 'Windows 11/10/8/7', size: '278 MB' }
      ]
    },
    {
      category: 'OfficeJet Series',
      models: [
        { name: 'OfficeJet Pro 9025', os: 'Windows 11/10/8/7', size: '298 MB' },
        { name: 'OfficeJet 3830', os: 'Windows 11/10/8/7', size: '234 MB' },
        { name: 'OfficeJet 6958', os: 'Windows 11/10/8/7', size: '267 MB' },
        { name: 'OfficeJet Pro 7740', os: 'Windows 11/10/8/7', size: '312 MB' }
      ]
    },
    {
      category: 'DeskJet Series',
      models: [
        { name: 'DeskJet 2755', os: 'Windows 11/10/8/7', size: '198 MB' },
        { name: 'DeskJet Plus 4155', os: 'Windows 11/10/8/7', size: '212 MB' },
        { name: 'DeskJet 3755', os: 'Windows 11/10/8/7', size: '178 MB' },
        { name: 'DeskJet 2720', os: 'Windows 11/10/8/7', size: '189 MB' }
      ]
    },
    {
      category: 'Envy Series',
      models: [
        { name: 'Envy Pro 6455', os: 'Windows 11/10/8/7', size: '256 MB' },
        { name: 'Envy 6055', os: 'Windows 11/10/8/7', size: '245 MB' },
        { name: 'Envy 7855', os: 'Windows 11/10/8/7', size: '278 MB' },
        { name: 'Envy Photo 7155', os: 'Windows 11/10/8/7', size: '289 MB' }
      ]
    }
  ];

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Driver <span>Downloads</span></h1>
          <p>Download the latest drivers and software for your HP printer</p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Find Your <span>Printer Model</span></h2>
            <p>Search by model number or select from popular models below</p>
          </div>

          <div style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                placeholder="Enter printer model (e.g., LaserJet Pro M402dn)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  flex: 1,
                  padding: '15px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '16px'
                }}
              />
              <button
                style={{
                  padding: '15px 30px',
                  background: '#0066b3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Search size={20} />
                Search
              </button>
            </div>
          </div>

          {driverCategories.map((category, idx) => (
            <div key={idx} style={{ marginBottom: '50px' }}>
              <h3 style={{ color: '#003366', marginBottom: '20px', fontSize: '24px' }}>
                {category.category}
              </h3>
              
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Model</th>
                      <th>Operating System</th>
                      <th>File Size</th>
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.models.map((model, index) => (
                      <tr key={index}>
                        <td><strong>{model.name}</strong></td>
                        <td>{model.os}</td>
                        <td>{model.size}</td>
                        <td>
                          <button
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#0066b3',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '5px'
                            }}
                          >
                            <Download size={16} />
                            Download
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Drivers;