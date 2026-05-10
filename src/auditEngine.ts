export interface ToolInput {
  name: string;
  plan: string;
  users: number;
  spend: number;
}

export interface AuditResult {
  totalSavingsMonthly: number;
  totalSavingsAnnual: number;
  warnings: string[];
  recommendations: string[];
}

export function calculateSavings(tools: ToolInput[], teamSize: number): AuditResult {
  let totalSavingsMonthly = 0;
  const warnings: string[] = [];
  const recommendations: string[] = [];

  // Check for overlapping tools
  const hasCopilot = tools.some(t => t.name === 'GitHub Copilot');
  const hasCursor = tools.some(t => t.name === 'Cursor');
  if (hasCopilot && hasCursor) {
    warnings.push("You are paying for overlapping coding assistants (Cursor and Copilot).");
    recommendations.push("Standardize on Cursor for your engineering team and cancel Copilot to save redundant seat costs.");
    // Estimate savings: cancel all Copilot individual seats
    const copilotSpend = tools.find(t => t.name === 'GitHub Copilot')?.spend || 0;
    totalSavingsMonthly += copilotSpend;
  }

  // Check API vs Seat math
  tools.forEach(tool => {
    if ((tool.name === 'ChatGPT' || tool.name === 'Claude') && (tool.plan === 'Plus' || tool.plan === 'Pro')) {
      if (tool.users > 3) {
        warnings.push(`You are paying retail subscription prices ($20/mo) for ${tool.users} ${tool.name} seats.`);
        // Math: Average API user costs $5/mo. Seat is $20/mo. Savings = $15/user for 80% of users.
        const nonPowerUsers = Math.floor(tool.users * 0.8);
        const savings = nonPowerUsers * 15;
        totalSavingsMonthly += savings;
        recommendations.push(`Switch ${nonPowerUsers} non-power users from ${tool.name} ${tool.plan} to API Direct via a UI wrapper. Estimated savings: $${savings}/mo.`);
      }
    }

    if (tool.name === 'ChatGPT' && tool.plan === 'Team' && tool.users < 2) {
      warnings.push("ChatGPT Team requires a minimum of 2 seats ($50/mo).");
      recommendations.push("Downgrade to ChatGPT Plus to save $30/mo.");
      totalSavingsMonthly += 30;
    }
  });

  // If no specific savings found but they have a large team, suggest bulk negotiation
  if (totalSavingsMonthly === 0 && teamSize > 10) {
    recommendations.push("Your baseline usage is optimal, but with your team size, you are eligible for bulk volume discounts via Credex.");
  }

  return {
    totalSavingsMonthly,
    totalSavingsAnnual: totalSavingsMonthly * 12,
    warnings,
    recommendations
  };
}
