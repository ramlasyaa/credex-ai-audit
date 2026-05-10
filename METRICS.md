# Metrics

**North Star Metric**
`Number of Completed Audits with >$500/mo in Savings`
*Why:* If the tool just generates audits where people save $10/mo, Credex can't monetize them effectively. Our business relies on finding high-value leads that warrant a consultation call.

**3 Input Metrics**
1. `Landing Page to Audit Completion Rate` (Is the form too long?)
2. `Email Capture Rate on >$500 Savings Audits` (Is our value proposition strong enough to gate the report?)
3. `Share URL Generation Rate` (Are people actually sending this to their CFO or founder?)

**What I'd instrument first**
I would instrument PostHog to track the exact drop-off point in the multi-step form. If users drop off at "Input Current Spend", we know the cognitive load is too high and we need to simplify it.

**Pivot Trigger**
If the `Email Capture Rate` drops below 2%, it means the audit results aren't providing enough "shock value" to warrant an email, and we should pivot the tool to focus exclusively on Enterprise API volume rather than seat subscriptions.
