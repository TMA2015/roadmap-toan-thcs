# Release Lane — Simplified THPT Self-Check, Issue #662

**Date:** 2026-10-31. **Status:** TECHNICAL_QA_ONLY / NO LIVE ASSESSMENT / NO MERGE OR DEPLOY AUTHORIZED. 
**Owner handoff:** [Issue #662](https://github.com/TMA2015/self-learning-math/issues/662); related earlier [PR #651](https://github.com/TMA2015/self-learning-math/pull/651). Maintains source contracts 06/07/08 and Golden R4. This artifact describes runtime and release acceptance only; academic item authoring and NotebookLM remain with the separate development lane.

## Accepted architecture and release boundaries

- **Static client-only self-check:** Public GitHub/MkDocs JS may contain answers and explanations **once a specific academic snapshot is cleared for publication**. Deliberately NO backend, anti-DevTools, Firebase Auth, proctoring, obfuscation or password mechanism for concealment. No new repo.
- **Pre-Final Submit:** navigate, jump, change answers; **no hint, AI Tutor, correct answer, rationale, rubric, interim points, correct/incorrect signal or scored outcome in visible UI**. A downloaded JS bank is not a guarded independent exam source; no false secrecy claim.
- **Post-Final Submit:** one submission locks responses and reveals per-question answer/solution/optional rubric; summarizes QA self-check evidence by scope and outcome. Revisit links are learner support only. Do not label a client-side score an independent ability measure.
- **Hard separation:** Core/Practice continue existing per-question formative checks, unlike Final Submit assessments. `SGK_CHAPTER` vs `TOPIC` are independent scope identifiers and results; there is **no automatic Skill Mastery, SGK_CHAPTER_READINESS or TOPIC_READINESS update**, no learner evidence write or merging two scopes.
- **Four input types:** MCQ A–D with explicitly reviewed key; T/F group with all statements' reviewed booleans; SHORT only exact-match checks when **explicitly reviewed allowed strings** and `EXACT_TEXT_REVIEWED` are supplied; other short/free text and WRITTEN use comparison-only rubric/solution. Never interpret arbitrary algebraic equivalence or claim to have machine-graded free-form proofs.
- **Technical scoring policy for QA only (NOT owner-approved production threshold):** 1 correct per keyed MCQ; 1 correct per fully correct TF group (all-or-nothing); 1 correct per explicitly keyed exact short question; **WRITTEN and unkeyed open text excluded from numeric denominator** and marked `tự đối chiếu`. Blank keyed answers count not correct. No separate readiness threshold or automatic credit. Owner decision on production aggregation/threshold/recording remains pending.
- **Canonical source:** eventual production loader must accept only reviewed versioned `item_id`, shared placement, `outcome_id`, answerKey/solution/rubric with traceable Git SHA. No duplicate questions, no arbitrary fake key, no unreviewed RD1 publication, no clone bank. No Grade 11 or Topic completion claim.
- **Evidence/storage guard:** current tests verify no `localStorage`/`sessionStorage` writes, no network calls, no Firebase/Gemini, no existing student keys touched. Session responses held in memory only. No score callback or event bus to Mastery.

## Actual technical implementation

- `docs/assets/javascripts/thpt-self-check-qa-v1.js`: isolated opt-in engine `window.THPTSelfCheckQAV1.mount(root,cfg)`, with strict gate `root[data-thpt-self-check-demo=true]`, `releaseMode=TECHNICAL_DEMO_ONLY`, `masteryCredit=false`, `persistResults=false`, and **QA-SC-*** item IDs only. Throws before rendering on any real RD1 ID or supposed public production config.
- `docs/assets/stylesheets/thpt-self-check-qa-v1.css`: optional responsive, isolated QA styling.
- `scripts/test-thpt-self-check-qa-browser.cjs`: independent Chromium DOM test; **does not mount on an official Readiness page**. Synthetic fixtures have no canonical academic meaning and no notebook verdict. Tests both scope types at 390 / 820 / 1440px, MCQ, T/F, keyed SHORT, unkeyed SHORT and WRITTEN rubric, navigation and revised answer, no leak before final, one Final Submit, answer/solution reveal after final, no storage/network calls, and rejection of invalid/premature production modes.
- Official `docs/thpt-preview/**/tu-kiem-tra*` pages, source bank files, `mkdocs.yml`, R4 JS and CSS, Firebase, Gemini, THCS, local progress and Skill Mastery are **unchanged** in this PR.

## QA release gates R1–R5 (not declared PASS by static demo)

| Gate | Evidence needed for future non-demo launch |
|---|---|
| R1 SOURCE_LOCK | Authorized canonical snapshot, conditions/rubric/outcomes, academic scope and owner review; no RD1-private publication without owner release clearance |
| R2 TECHNICAL | Current exact-head THPT + Roadmap CI, 390/820/1440 QA, keyboard, MathJax/SVG and THCS regression |
| R3 UI/SEMANTICS | No pre-submit answer/hint/correctness, edit/navigate, one final, correct self-assessment labels, post-final rationale/outcomes |
| R4 EVIDENCE | No Mastery/Readiness/progress writes; independently decide future storage, thresholds and consent |
| R5 OWNER RELEASE | Owner signs off scoped functionality/score policy + specific material version; deploy then verify Pages source/route and P1/P2 |

**Acceptance of this engine's QA tests does not activate official scoring.** On any future real integration, replace the technical-only gate only after the owner approves the concrete assessment scope and technical scoring policy, then re-run all relevant exact-HEAD checks; this change is not part of the current PR.
