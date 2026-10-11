# Math App — Durable Continuation Checkpoint 2026-10-11

**Current initiative:** Family-use THCS V1 Release Readiness Audit R1; future-track extension architecture feasibility (THPT/SAT/ACT), no new academic content.

## Continuation — A2 learner QA + B1 durability (11/10/2026)

Release Readiness R1 baseline PR **#414 was merged** at `6ed3e5dfa2d147031f4689b825a00c6ce45c785f`, Roadmap PR Quality run `38129119032` SUCCESS, Deploy MkDocs run `38129453318` SUCCESS. Four representative route smoke tests passed. **A1 CLOSED; A2/B1 NOT CLOSED.**

Active branch: `audit/release-readiness-b1-a2-20261011`. New scope:
- `docs/collaboration/release-readiness-b1-storage-audit-r1.md`: actual localStorage inventory and durability risks; no broad backup/restore flow found in the current app scripts;
- `docs/collaboration/release-readiness-a2-learner-qa-r1.md`: learner-observation scenarios for Grades 6/8 first and 7/9 follow-up;
- `scripts/test-release-readiness-b1-browser.py`: disposable-profile valid-store persistence, malformed JSON fallback and AI-transport independence tests;
- corresponding public-repo QA workflow step.

**Risks:** B1 user backup/restore not demonstrated, cross-device sync is not supported, storage-write failures not handled uniformly, malformed-store fallback is not data recovery. Any implementation of backup or storage schema change requires a separate owner-approved design/PR; do not alter learner history under this audit.

**Next:** check PR/QA HEAD; fix any browser QA false assumption or actual defect; merge audit-only packet on green; then collect A2 learner observations and decide whether to authorize a local-only manual backup prototype. Do NOT claim A2/B1 or V1 release PASS from CI alone.

## Owner intent
Self-Learning Math remains a **family/friends** product, not a commercialization or growth project. However, it must be reliable and pedagogically complete even with few users. THCS should become a durable foundation for later THPT, SAT and ACT Math without making the present project unnecessarily complex or paid.

## Stable academic implementation checkpoint
- 131 Skill Taxonomy v2 families, 386 mappings, current priority distribution KNTT-Core P0=11 / P1=37 / P2=52.
- Practice: 3,163 items / 131 families after Wave 1; Readiness: 237 items / 100 of 100 Core families; Written Library: 63 canonical items / 76 of 100 Core families, with reviewed intentional zero-Written exceptions.
- Priority coverage reconciliation: 14/14 KEEP_CLOSED. No automatic question quota or new content wave.
- Skill Priority owner preview PR #413 merged as `d99f6617fd09b3b7dd8ef71ad7aa0d922c78dfd2`; PR QA and Pages deployment PASS; full learner Skill Map has **not** been changed by priority preview.

## Active work
- Baseline file: `docs/collaboration/release-readiness-audit-r1.md`.
- Branch: `audit/release-readiness-r1-20261011`.
- Static QA: `scripts/test-release-readiness-r1.js` (39 KNTT chapters / 46 chapter→Core links, four representative paths, no schema/runtime mutation).
- Browser QA: `scripts/test-release-readiness-r1-browser.py` (Grade 6 CT02, Grade 7 CT14, Grade 8 CT07, Grade 9 CT09; desktop/mobile; Core teaching→micro switch→Practice→Readiness without submission).
- Existing public repo PR QA runs strict MkDocs and regression suite. This round does not implement learner-facing UI, change storage or activate Mastery.

## Next handoff steps
1. Recheck branch/PR exact HEAD, failed CI step if any; fix only QA/smoke or real bug exposed by QA.
2. Merge **audit-only** PR only after successful CI; update this checkpoint with exact merge/deploy verification.
3. Conduct A2 human learner flows with test account/device; record navigation confusion, grade selection and feedback clarity.
4. B1 inventory persistent storage, verify offline/provider-failure and safe backup/restore using **test-only** data.
5. C1 describe THPT/SAT/ACT track adapters separately; do not import content or modify KNTT layers now.

**Never conflate:** GitHub QA green ≠ human learning study PASS ≠ release ready. Prior 80–85% family beta / 70–75% stable V1 estimates are subjective checkpoints, **not computed certification**.

## NotebookLM rules
For any *new math academic review*, use NotebookLM only; no Gemini. Do not upload JSON into NotebookLM. Keep two unchanged permanent sources; give ZIP of changed batch sources only (when 2+), and a short prompt **directly in chat**. Governance/audit-only work here requires no new NotebookLM packet.

## File sources
Canonical Master Plan `governance/TOAN_THCS_MASTER_PLAN.md`, durable NotebookLM workflow `governance/NOTEBOOKLM_REVIEW_WORKFLOW.md`, current handoff `docs/collaboration/current-handoff.md`, and live GitHub `main`.
