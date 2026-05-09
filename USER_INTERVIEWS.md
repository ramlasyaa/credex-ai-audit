# User Interviews

**Interview 1**
- **Name:** M.K.
- **Role:** Engineering Manager
- **Company Stage:** Series A (B2B SaaS)
- **Quotes:** 
  - "I genuinely have no idea how much we spend on AI until the finance guy yells at me at the end of the month."
  - "We bought GitHub Copilot for the whole engineering team of 15, but I know for a fact the frontend guys only use Cursor anyway."
  - "If a tool told me exactly who is overlapping on subscriptions, I'd use it today."
- **Surprising thing:** They don't track API spend per developer. It's all lumped into one AWS/Anthropic invoice, making it impossible to know if someone left a script running.
- **What it changed:** I added a specific warning in the audit engine to flag overlapping coding tools (e.g., paying for both Copilot and Cursor).

**Interview 2**
- **Name:** S.R.
- **Role:** Founder & CEO
- **Company Stage:** Pre-Seed (Consumer Tech)
- **Quotes:**
  - "We just default to ChatGPT Plus for everyone. Is there a better option?"
  - "I don't have time to read pricing pages. Just tell me what to buy."
  - "If Credex can actually get me a discount, why wouldn't I book a call?"
- **Surprising thing:** The founder was entirely unaware that the OpenAI API could be significantly cheaper than $20/mo per seat for low-volume users like their marketing intern.
- **What it changed:** I made the "Total Annual Savings" number massive and sticky on the screen. Founders respond to big numbers.

**Interview 3**
- **Name:** T.H.
- **Role:** Lead Data Scientist
- **Company Stage:** Series B (Fintech)
- **Quotes:**
  - "We spend thousands on Anthropic API direct. Seats are irrelevant to us."
  - "Our biggest fear is token price drops that we miss out on because we are locked into old models."
  - "I wouldn't use a random web tool for this unless I knew it was secure."
- **Surprising thing:** Data teams don't care about seat licenses, they care about volume limits and rate limits.
- **What it changed:** I ensured the form had an option to specify "API Direct" as the plan type, rather than assuming everyone uses standard subscription seats.
