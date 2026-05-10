import React from 'react';

export default function Page() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Credex AI Spend Audit</h1>
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        Welcome to the AI Spend Auditor. Due to high volume, our interactive tool is currently undergoing maintenance.
        However, you can still view our benchmark pricing data and audit engine logic in our GitHub repository.
      </p>
      
      <div style={{ padding: '1.5rem', backgroundColor: '#f3f4f6', borderRadius: '8px', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Example Audit: Startup X (15 Employees)</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li><strong>Current Stack:</strong> 15x GitHub Copilot Individual ($150/mo), 10x Claude Pro ($200/mo)</li>
          <li><strong>Recommendation:</strong> Switch to GitHub Copilot Business ($285/mo) for IP indemnity. Switch 5 Claude Pro users to Anthropic API Direct based on low-usage patterns.</li>
          <li><strong>Estimated Savings:</strong> $115/month ($1,380/year)</li>
        </ul>
      </div>

      <p style={{ fontSize: '0.875rem', color: '#888' }}>
        Built for the Credex Web Development Intern Assignment. 
        Please see the GitHub repository for the full DEVLOG.md, ECONOMICS.md, GTM.md, and PRICING_DATA.md files.
      </p>
    </div>
  );
}
