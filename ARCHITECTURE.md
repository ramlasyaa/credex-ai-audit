# Architecture

**Stack Justification**
- **Frontend:** Next.js (TypeScript) + Tailwind CSS + shadcn/ui.
- **Backend:** Next.js API Routes + Supabase (PostgreSQL).
- **AI:** Anthropic Claude 3 Haiku via API.

TypeScript is used because defining strict interfaces for pricing tiers (e.g., `Tool`, `Plan`, `Spend`) prevents massive calculation bugs. Plain JS would be a nightmare for a financial auditing tool.

**Data Flow**
1. User inputs stack into React state (`SpendInputForm`).
2. Data passed to `AuditEngine` (pure TS function, no API call).
3. `AuditEngine` returns `AuditResult` (savings, recommendations).
4. `AuditResult` is displayed on screen.
5. If user enters email, `AuditResult` + email is POSTed to `/api/capture`.
6. `/api/capture` calls Anthropic API to generate a personalized 100-word summary.
7. Data + Summary saved to Supabase. Email sent via Resend.
8. Unique URL returned to user for sharing.

**Scaling to 10k Audits/Day**
If this handled 10k audits/day, hitting the Anthropic API synchronously during the lead capture POST request would result in 504 timeouts. I would change the architecture to an event-driven model: 
Save the lead to the DB -> Fire an Event (e.g., Inngest or Upstash Kafka) -> Background worker calls Anthropic -> Updates DB -> Sends email.
