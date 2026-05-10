# Tests

All tests are written using standard Jest.
Run them using: `npm run test`

1. `auditEngine.test.ts`
   - **Covers:** Correctly identifies when a 2-person team on ChatGPT Team should downgrade to Plus.
2. `auditEngine.test.ts`
   - **Covers:** Correctly identifies when an 8-person team on Claude Pro should switch to Anthropic API Direct based on specified low-coding usage.
3. `auditEngine.test.ts`
   - **Covers:** Correctly calculates "Total Annual Savings" (Monthly savings * 12).
4. `auditEngine.test.ts`
   - **Covers:** Handles overlapping tools (Flags an error/warning if user pays for both Cursor Pro and GitHub Copilot).
5. `auditEngine.test.ts`
   - **Covers:** Minimum seat enforcement (Verifies logic doesn't recommend Claude Team for 3 users, as it requires 5).
