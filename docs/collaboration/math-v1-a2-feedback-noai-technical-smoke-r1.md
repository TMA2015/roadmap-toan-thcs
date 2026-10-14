# Math V1 — A2 feedback + AI-transport outage technical smoke R1

**Packet:** `MATH-V1-A2-FEEDBACK-NOAI-R1-20261014`  
**Baseline:** public `TMA2015/roadmap-toan-thcs`, after Dashboard R2-A PR #433 merged into `main`.  
**Status:** `TEST_CANDIDATE / EXACT_HEAD_CI_PENDING / HUMAN_A2_OPEN`.

## Why this exists

The 13/10 V1 review `math-v1-pedagogical-readiness-audit-r2-20261013.md` identifies missing browser evidence for **V1-LX-02** (visible wrong-answer explanations), **V1-LX-03** (route back to meaningful practice), and **V1-LX-05** (availability of authored learning without an AI provider). Previous R1 route smoke opened pages and Core modals but did not intentionally answer wrong or inspect the post-submit Review.

## Exact technical scope

Test file: `scripts/test-release-readiness-a2-feedback-no-ai-browser.py`, invoked by the existing **public Math** `.github/workflows/qa-pr.yml` browser QA job.

- Two representative cases: **G6 / CĐ02 Số và phép tính** and **G8 / CĐ07 Phân thức đại số**.
- Two disposable Chromium contexts each: desktop 1365×900 and phone-sized 390×844.
- Block Firebase/Gemini transport endpoints and Firebase JS CDN inside those contexts. Do **not** click or call Gemini; retain the locally served MkDocs source, curriculum JSON and deterministic authored explanations.
- Core: open the first approved Core card, switch to Micro, deliberately choose an incorrect option using the repository's reviewed answer key **in test code only**, see `Chưa đúng` feedback, nonempty explanation and local review panel.
- Practice: choose a provably wrong option by reading the **test-only** original answer index from the current session item. See authored explanation and `Xem lời giải hiện có`, and verify practice history saved only in the disposable profile.
- Readiness: deliberately choose a wrong answer, confirm **no pre-Submit feedback or attempt write**, submit with remaining items unanswered, verify post-submit item review and a `Luyện lại` deep link to the same topic Practice.
- Assert that Readiness does not overwrite Practice and following the remediation link does not erase either history.

**Important:** The test reads answer keys only inside QA code running against local fixtures. The learner-facing app remains unchanged and the Readiness UI must not show answers before submission. No novel question or explanation is generated.

## Evidence boundary

A technical PASS demonstrates that the **tested** authored feedback and navigation controls are rendered and saved in a simulated Chromium environment with AI transport blocked. It does **not** show whether Grade-6 or Grade-8 students understand the explanation, whether the mathematical reasoning is correct, whether all question families have adequate hints, or whether every offline dependency (including externally hosted site resources) is locally available. This is **AI unavailable**, **not a full offline-PWA certification**.

The human A2-6 and A2-8 observation steps in `release-readiness-a2-learner-qa-r1.md` remain OPEN, followed by A2-7/A2-9 cross-checks and the separately expected two Grade-9/10 feedback forms. Never infer `A2_PASS` from CI alone. New/revised academic explanations, if indicated by child feedback, require a source-backed NotebookLM review before changes.

## Protections and release gate

Only new technical test + CI invocation + documentation. No production JS/CSS, mathematical content, grading, curriculum, IDs, localStorage keys, learner history, Firebase settings, billing, deployment or AI calls. No private English GitHub Actions, no artifact/cache cross-upload. Keep this PR Draft until **the final exact HEAD** passes the public Math PR Quality workflow; then follow the existing Math merge and deployment verification procedure.
