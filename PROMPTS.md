# Prompts

**The Personalized Summary Prompt**
```text
You are a fractional CFO for a tech startup. Review the following AI Spend Audit:
[INSERT JSON AUDIT DATA]

Write a personalized, 100-word executive summary addressing the engineering manager. 
Highlight the biggest area of wasted spend. Be direct and financial. 
End by suggesting they use Credex to consolidate their billing and capture these savings.
```

**Why I wrote it this way:**
I explicitly gave the AI a persona ("fractional CFO") to ensure the tone wasn't overly enthusiastic or "chatgpt-like". By passing the deterministic JSON audit data, I prevent the LLM from hallucinating savings numbers.

**What didn't work:**
Originally, I asked the LLM to calculate the savings based on the user's raw input. It hallucinated prices (e.g., claiming ChatGPT Plus was $15/mo). I learned to only use LLMs for language generation, never for financial math.
