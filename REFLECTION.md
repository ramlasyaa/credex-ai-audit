# Reflection

**1. Hardest Bug**
The hardest bug was handling dynamic form state when a user added the same tool twice (e.g., paying for Cursor Pro for devs and Cursor Business for contractors). My initial state array used the tool name as a key, which caused re-rendering collisions. I debugged by logging the React render cycle, realized the key collision, and switched to using a unique `uuid` for every form row rather than the tool name.

**2. Decision Reversed**
I originally planned to use ChatGPT to do the actual audit math (passing the user's stack to the LLM and asking "how much can they save?"). I quickly reversed this when I realized LLMs hallucinate numbers and plans that don't exist. I switched to a hardcoded TypeScript rule engine.

**3. Week 2 Plans**
If I had Week 2, I would build the "Benchmark Mode". I would anonymize the data stored in Supabase to calculate averages (e.g., "The average 50-person startup spends $X on AI"). Then I would show users how they compare to their peers.

**4. Use of AI Tools**
I used Claude 3.5 Sonnet to help write the tedious UI components (like the long select dropdowns for every pricing tier). I didn't trust it to write the `AuditEngine` logic because it kept missing edge cases (like minimum seat requirements for ChatGPT Team). I caught it suggesting a 1-person company switch to ChatGPT Team, which is impossible since Team requires 2 minimum seats.

**5. Self-Rating**
- **Discipline: 8/10.** I paced the commits across the week well, though I rushed the UI polish at the end.
- **Code Quality: 8/10.** Strong typings and pure functions, but some components could be broken down further.
- **Design Sense: 7/10.** Clean and functional, leveraging shadcn, but lacking unique branding.
- **Problem-Solving: 9/10.** Recognizing that LLMs are bad at math and building a deterministic engine was the right call.
- **Entrepreneurial Thinking: 9/10.** The GTM and Economics docs are highly realistic and actionable.
