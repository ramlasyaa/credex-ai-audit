import { calculateSavings } from './auditEngine';

describe('Audit Engine', () => {
  it('correctly calculates savings for overlapping tools', () => {
    // A single ChatGPT Team seat should trigger a warning to downgrade
    const result = calculateSavings([{ name: 'ChatGPT', plan: 'Team', users: 1, spend: 50 }], 10);
    expect(result.totalSavingsMonthly).toBe(30);
    expect(result.warnings.length).toBeGreaterThan(0);
  });
  
  it('identifies downgrade opportunities', () => {
    // Claude Pro with 10 users should trigger API recommendation
    const result = calculateSavings([{ name: 'Claude', plan: 'Pro', users: 10, spend: 200 }], 10);
    expect(result.totalSavingsMonthly).toBeGreaterThan(0);
    expect(result.recommendations.length).toBeGreaterThan(0);
  });
  
  it('calculates total annual savings correctly', () => {
    const result = calculateSavings([{ name: 'ChatGPT', plan: 'Team', users: 1, spend: 50 }], 10);
    expect(result.totalSavingsAnnual).toBe(result.totalSavingsMonthly * 12);
  });

  it('handles overlapping tools properly', () => {
    // Both Cursor and Copilot should trigger overlapping tools warning
    const result = calculateSavings([
      { name: 'Cursor', plan: 'Pro', users: 5, spend: 100 },
      { name: 'GitHub Copilot', plan: 'Individual', users: 5, spend: 50 }
    ], 10);
    expect(result.warnings[0]).toContain("overlapping");
    expect(result.totalSavingsMonthly).toBe(50);
  });

  it('enforces minimum seat requirements', () => {
    const result = calculateSavings([{ name: 'ChatGPT', plan: 'Team', users: 1, spend: 50 }], 10);
    expect(result.warnings[0]).toContain("minimum of 2 seats");
  });
});
