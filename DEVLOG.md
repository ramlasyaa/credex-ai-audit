## Day 1 — 2026-05-06
**Hours worked:** 3
**What I did:** Initialized the Next.js repository, configured Tailwind, and set up the repository structure. Started researching and verifying vendor pricing data for the top 8 AI tools to build the foundational rule engine.
**What I learned:** API pricing is often obfuscated. For example, Anthropic's Claude 3 pricing requires deep-diving into input/output token ratios to compare accurately against the $20/mo Pro seat.
**Blockers / what I'm stuck on:** Deciding whether to use Supabase or Firebase for the lead capture.
**Plan for tomorrow:** Finalize the Pricing Data markdown and build the core Audit Engine math.

## Day 2 — 2026-05-07
**Hours worked:** 4
**What I did:** Built the core `calculateSavings` logic in TypeScript. It now successfully evaluates whether a user should downgrade from Enterprise to Team, or switch from ChatGPT Plus to OpenAI API based on their stated use case. Wrote the unit tests for this engine.
**What I learned:** Writing pure, deterministic functions for the math makes testing incredibly easy compared to mixing it with UI state.
**Blockers / what I'm stuck on:** None today.
**Plan for tomorrow:** Build the frontend UI (Spend Input Form).

## Day 3 — 2026-05-08
**Hours worked:** 5
**What I did:** Developed the React frontend using shadcn/ui. Built a dynamic form that allows users to add multiple tools, specify their current plan, and input their monthly spend. 
**What I learned:** Managing complex array state in React for dynamic forms can get messy; extracting the tool inputs into a separate reducer simplified things.
**Blockers / what I'm stuck on:** Designing a mobile-friendly view for the data tables in the results page.
**Plan for tomorrow:** Integrate the Anthropic API for the personalized summary and build the Results page.

## Day 4 — 2026-05-09
**Hours worked:** 4
**What I did:** Connected the Anthropic API. Wrote the prompt to generate a 100-word financial summary of the audit. Built the Supabase backend to capture the emails and store the audit results for the shareable URL feature.
**What I learned:** Serverless functions on Vercel have a strict timeout. I had to ensure the LLM API call was optimized to not cause a 504 error during lead capture.
**Blockers / what I'm stuck on:** Figuring out how to strip PII (emails) from the public share URL while keeping the core audit data intact.
**Plan for tomorrow:** Write the founder/business documentation (GTM, Economics) and do user interviews.

## Day 5 — 2026-05-10
**Hours worked:** 6
**What I did:** Conducted 3 user interviews with engineering managers. Wrote the GTM strategy and ran the unit economics for Credex. Finalized the CI/CD pipeline, added Open Graph tags, and pushed the final Vercel deployment.
**What I learned:** Users don't care about "saving $50/mo", they care about the psychological relief of knowing they aren't being ripped off. 
**Blockers / what I'm stuck on:** Wrapping up the final documentation formatting.
**Plan for tomorrow:** Rest. Project completed.
