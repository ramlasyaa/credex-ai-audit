# AI Spend Auditor

**Summary**
This is an AI Spend Auditing tool built for Engineering Managers and Founders. It takes an organization's current AI tool stack, evaluates it against real-time vendor pricing, and instantly surfaces overlapping tools, over-provisioned seats, and cheaper API alternatives. 

**Quick Start**
1. `npm install`
2. `npm run dev`
3. Deploy directly to Vercel.

**Decisions & Trade-offs**
1. **Next.js + Tailwind:** Chosen for speed of development and easy deployment to Vercel over an SPA.
2. **Hardcoded Audit Engine:** Chosen over an LLM-based engine because financial math must be deterministic and defensible. LLMs are bad at math.
3. **Supabase for DB:** Chosen over Firebase because Postgres relations make it easier to link leads to their specific audit results for future querying.
4. **Resend for Transactional Emails:** Easiest to integrate with React Email for clean receipts.
5. **No Auth required for Audit:** To maximize top-of-funnel conversion, the value (the audit) is shown immediately. Email is only captured *after* savings are found.

**Deployed URL:** https://credex-ai-audit-demo.vercel.app
