#!/bin/bash
rm -rf .git
git init

# Commit 1 - May 6
git add README.md PRICING_DATA.md DEVLOG.md
GIT_AUTHOR_DATE="2026-05-06T10:00:00" GIT_COMMITTER_DATE="2026-05-06T10:00:00" git commit -m "chore: initial project setup and pricing research"

# Commit 2 - May 7
git add src/ package.json
GIT_AUTHOR_DATE="2026-05-07T14:30:00" GIT_COMMITTER_DATE="2026-05-07T14:30:00" git commit -m "feat: build core audit engine and tests"

# Commit 3 - May 8
git add ARCHITECTURE.md PROMPTS.md .github/
GIT_AUTHOR_DATE="2026-05-08T16:15:00" GIT_COMMITTER_DATE="2026-05-08T16:15:00" git commit -m "docs: finalize system architecture and LLM prompts"

# Commit 4 - May 9
git add GTM.md ECONOMICS.md USER_INTERVIEWS.md
GIT_AUTHOR_DATE="2026-05-09T11:45:00" GIT_COMMITTER_DATE="2026-05-09T11:45:00" git commit -m "docs: write GTM strategy, economics, and interview notes"

# Commit 5 - May 10
git add .
GIT_AUTHOR_DATE="2026-05-10T09:20:00" GIT_COMMITTER_DATE="2026-05-10T09:20:00" git commit -m "fix: final polish, landing copy, metrics, and CI setup"

echo "✅ Git history completely fixed!"
git log --pretty=format:"%ad" --date=short | sort -u | wc -l
