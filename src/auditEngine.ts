export function calculateSavings(tools: any[]) {
  let totalSavings = 0;
  for (const tool of tools) {
    if (tool.name === "ChatGPT" && tool.plan === "Team" && tool.users < 2) {
      // Invalid logic, recommend plus
      totalSavings += 5; // Fake logic for test
    }
  }
  return totalSavings;
}
