# Math-only GitHub resource isolation R1 — 12/10/2026

**Owner constraint (mandatory):** All ongoing work on Self-Learning Math must preserve the GitHub Actions minutes reserved for the **private** Self-Learning English repository. No Math task may trigger, call, push, create PRs, or dispatch any workflow in `TMA2015/self-learning-english` or its older aliases. This constraint is not an authorization to change English workflows or account billing.

## Practical separation

- Math repository: `TMA2015/roadmap-toan-thcs`, **public**.
- All Math PR and deploy jobs use **standard GitHub-hosted `ubuntu-latest` runners**. GitHub documents these runners as free for public repositories and distinct from private repository minute allowances. No large/special runners, self-hosted billing, foreign reusable workflows, or indirect English operations.
- GitHub Actions artifacts can occupy a pooled storage allowance. To avoid encroaching on the private project's shared resource pool, the Math PR QA workflow **no longer uploads routine screenshot artifacts**. Local screenshot capture and all Playwright/Node/MkDocs assertions still run; previews remain ephemeral runner files.
- No `actions/cache` or `actions/upload-artifact` in any Math workflow. Any future upload or cache must be separately reviewed against the strict owner budget, **not enabled automatically**.
- Automated source-only guard: `scripts/test-math-actions-isolation-r1.js`; it scans Math workflow YAML and checks the isolation baseline. It does not prove actual GitHub account balances or independent billing statements.
- Existing public GitHub Pages deploy remains Math-only; do not copy Math's workflow, Actions quota assumptions, or screenshots to the private English repo.

## Owner QA/release policy

- Every GitHub operation must name the Math repository explicitly; never use an implicit default repository when connector context could be ambiguous.
- Author/test/merge only within Math, and keep PR QA/public Pages release checks on Math.
- Do not spend private-account minutes for Math even if free public PR QA is delayed. Prefer local/manual source validation rather than falling back to English Actions.
- No premium runners and no paid Actions/billing changes without independent explicit owner approval.
- The English private repository remains **untouched** by this change; only Math's CI source and handoff are modified.

## Evidence

GitHub official billing reference: https://docs.github.com/en/billing/concepts/product-billing/github-actions

This policy does not require NotebookLM academic review and does not alter THCS learning content, scoring, records, skill taxonomy, backup envelope or Firebase.
