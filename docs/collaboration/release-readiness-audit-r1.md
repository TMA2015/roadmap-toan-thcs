# Self-Learning Math — Release Readiness Audit R1

**Audit ID:** `MATH-RELEASE-READINESS-R1-20261011`  
**Date:** 11/10/2026  
**Target:** family-use **high-quality THCS V1**, not commercial/public-scale launch  
**Status:** **BASELINE + REPRESENTATIVE QA**, not final release clearance  
**Source of implementation truth:** GitHub `main` at audit start `d99f6617fd09b3b7dd8ef71ad7aa0d922c78dfd2`  
**Audit change scope:** read-only tests, documentation and checkpoint. No learner runtime/content/taxonomy/assessment mutations.

## Owner decision and interpretation

The owner wants a finished, reliable and educationally strong product **even with only family/friends using it**, and a durable platform that can later host THPT and SAT/ACT Math without discarding the THCS investment. This does **not** authorize a commercial architecture, paid services, accounts/cloud sync, or content for future tracks today.

The 80–85% family-beta and 70–75% stable-V1 estimates previously given are **subjective provisional planning estimates, not a computed release quality score**. Do not increase either number or claim 100% based only on PR green status.

## Evidence verified at source level

| Area | Verified source facts | Limits |
| --- | --- | --- |
| KNTT entry | `docs/hoc-theo-lop/index.md` has **39 chapter cards** across Grades 6–9 (9+10+10+10), with **46 chapter→topic Core links** (11+11+13+11). | Landing links primarily route to a shared topic Core; they are not individual lesson-player routes. Students may need to select the correct grade-labelled Core card. |
| Learner cycle | Chapter links, topic Core pages, Practice pages and Readiness pages exist. The guide prescribes Core → Practice → Readiness → review mistakes. | Real correctness/feedback, natural task completion, and learner comprehension need actual journey QA. |
| Academic Skill | **131 canonical families**, notebook-reviewed priority matrix and KNTT semantic mapping 6–9. | Taxonomy v2 `runtime_enabled=false`; skill priority is not automatic recommendation/mastery or a question quota. |
| Practice / Readiness / Written | Practice post-W1 audit: 3,163 items / 131 families; Readiness: 237 items with 100/100 Core primary mapping; Written: 63 canonical items and 76/100 Core families covered, remaining zero-Written intentionally closed by independent review. | Family coverage ≠ lesson-level proof; Written is deliberately not one-item-per-lesson. |
| Local evidence | `practice-engine-v2.js`, `assessment-engine-v1.js` and `learner-evidence-v1.js` persist in browser localStorage. | No cross-device continuity or backup/restore guarantee has been verified in this audit. Browser storage loss is a real product risk to test and clearly explain. |
| Existing QA | Public GitHub PR QA includes strict MkDocs build and broad browser regressions. PR #413 tested desktop/mobile priority preview without changing learner grading. | Automated CI does not prove a child can self-learn without help, or that AI network outages always degrade gracefully. |
| Future-track boundary | One Knowledge Graph / two THCS learning paths, stable canonical IDs, separated content/engines and grade-specific display metadata are useful extension foundations. | Present grade chooser explicitly accepts only 6–9; 25-topic taxonomy, KNTT/Entrance10 layers and assessment assumptions are THCS-specific. SAT and ACT must not be treated as just extra grades. |

## Four representative learner journeys under test

The automated smoke test `scripts/test-release-readiness-r1-browser.py` exercises on desktop and phone:

| Grade | Entry | Representative skill domain | Smoke route |
| --- | --- | --- | --- |
| 6 | Học theo lớp → Lớp 6 | Arithmetic foundations | `02-so-va-phep-tinh` |
| 7 | Học theo lớp → Lớp 7 | Triangle geometry | `14-tam-giac` |
| 8 | Học theo lớp → Lớp 8 | Rational expressions / domain restrictions | `07-phan-thuc-dai-so` |
| 9 | Học theo lớp → Lớp 9 | Linear systems and modeling | `09-he-phuong-trinh` |

For each: grade selection → chapter Core entry → open teaching modal → switch to Micro Practice without submitting → open separate Practice page → open unsubmitted Readiness page. Check navigation, no premature result, no page JS errors, responsive layout and preservation of a localStorage sentinel.

**Do not overstate this test:** no real student performance is scored, hints/negative feedback are not fully exercised, and this is not a manual comprehension study. A green smoke test means the four routes are navigable; it does not mean Grade 6–9 lesson coverage is globally complete.

## Pending release gates (in order)

### Gate A1 — Automated end-to-end route baseline

- Run `node scripts/test-release-readiness-r1.js`.
- Run the representative browser smoke in the regular PR QA (desktop + phone).
- Run `mkdocs build --strict` and the existing regressions.
- Record exact SHA, CI outcome and any failure; **QA failure is not PASS**.

### Gate A2 — Human learner journey QA

Have a learner (ideally from the intended family age group) complete a brief Grade-6 and Grade-8 scenario; separately test Grade-7 and Grade-9 flows. For each, observe:

1. Can they find the desired chapter and correct **grade-specific** Core content without the developer's instructions?
2. Can they read an explanation, attempt a question, understand *why* a wrong answer is wrong, and return to the needed skill?
3. Can they resume after navigating away or reloading without fake attempts or silently lost work?
4. Is it clear that Practice feedback, soft Readiness and Written self-check provide different types of evidence?
5. Is AI optional and helpful, never a blocker for deterministic learning?

Record observed steps/frictions, not just a subjective thumbs-up. No claims about general learning effectiveness from one child or one session.

### Gate B1 — Durability, safety, free-first operation

Test with **test-only browser profiles/data**: reload, same-device continuation, browser cleanup, export/import if an implementation exists, recovery from malformed localStorage and a failed AI/network request. Establish what is supported versus unsupported, prominently explain any limits before relying on it for long-term progress. Do not silently add paid cloud infrastructure.

### Gate B2 — Product consistency and accessibility

Manual QA for mobile/tablet/desktop on real devices; MathJax/formulas, geometry labels and zoom, hit targets, responsive dialogs, soft Readiness semantics, meaningful alt text and keyboard access. Use failing observations for targeted fixes, not wholesale redesign.

### Gate C1 — Extension architecture feasibility (design-only)

Before any THPT/SAT/ACT content import, prove a proposed track adapter can specify:

- `track_id`, `curriculum_id`, `course_id`, `grade_or_level`, `version`, canonical `family_id` or scoped skill relation;
- explicit layer and topic placements, with track-specific prerequisite and access rules;
- question formats and scoring policy per track; ACT/SAT test-mode mechanics must not be reused as THCS Core Readiness policy;
- separate learner progress/evidence namespaces and reversible migration contract;
- shared core engines only where semantics remain valid; ability to keep old THCS URLs, IDs, records and KNTT placements untouched.

This is a **feasibility check**, not a demand to implement adapters now. SAT and ACT names represent distinct exam tracks, not a continuation of KNTT Grades 10–12.

## Prioritized initial issues to validate

| ID | Priority | Observation / risk | Decision now |
| --- | --- | --- | --- |
| `RR-A-01` | P1 | Chapter-to-shared-Core navigation may require a younger student to self-select the correct lesson/grade; grade-specific labels exist but comprehension is unverified. | Validate with human flow; do not build a parallel grade content bank. |
| `RR-A-02` | P1 | Student progress currently uses browser-local stores; tested backup/restore and cross-device continuity have not been established. | Inventory storage and perform isolated backup/restore tests; do not promise cloud sync. |
| `RR-A-03` | P1 | Failed AI/provider requests could reduce learning UX; non-AI content and deterministic checking should remain accessible. | Simulate outage with local/browser QA before final release gate. |
| `RR-A-04` | P2 | R1 Skill Priority owner preview is good but not integrated into primary learner Skill Map. | No immediate integration. Use topic-local simple “cần biết trước / nên ôn” for younger learners; overview optional for older learners. |
| `RR-C-01` | P1 for future expansion | Current chooser and curriculum taxonomy are hard-coded to Grades 6–9/KNTT/25 THCS topics. | Prepare track-adapter design and backwards compatibility proof **later**, not content import now. |
| `RR-Q-01` | P1 | Historic six-dimension inventory summaries for Grades 7–9 reflect pre-repair snapshots, although the corresponding repair PRs have merged. | Reconcile only against live source and post-repair closures; don't re-author merely because a historical audit still says PARTIAL/NONE. |

## Immutable boundaries

- No auto-authoring, skill merge/split, optional-to-Core promotion, priority-driven question quota or forced Readiness gate.
- No regrade/backfill of attempts; existing learner storage keys untouched.
- No Firebase App Check/security/billing change; no requirement to add accounts.
- NotebookLM remains the **only independent academic reviewer for new Math academic content**. Governance documents and technical QA do not need academic review when they author no mathematical items.
- This audit's release status is **not final** until the user has checked meaningful learner flows and durability constraints.

## Checkpoint

If a chat ends, begin by reading this file and `docs/collaboration/current-handoff.md`; confirm the current GitHub `main`, PR and QA run before proceeding. Next work after baseline PR QA is **A2 human learner journey checklist and B1 browser-local data durability audit**, not broad content expansion.
