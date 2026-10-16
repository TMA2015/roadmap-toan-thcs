# Phase 4 — Unified Learning Evidence Inventory R1 (audit-only)

**Date:** 2026-10-17  
**Project:** Self-Learning Math · One Knowledge Graph / two learner paths  
**Status:** ENGINEERING INVENTORY / NO RUNTIME MIGRATION  
**Base:** after W3A-WR receipt PR #481 (`main`).  

## 1. Observed implementation (source-locked)

| Surface | Observed storage/evidence | Verified by |
|---|---|---|
| Practice / Core interactive attempts | `toan-thcs-practice-v1` with `questions`, `tags`; descriptive dashboard computes attempted / correct | `docs/assets/javascripts/math-progress-dashboard-v1.js`, `local-progress-backup-v1.js` |
| Remediation | `toan-thcs-remediation-v1` contains `events` | `local-progress-backup-v1.js` |
| Readiness / independent checks | `toan-thcs-assessment-v1` (`assessments`) plus `toan-thcs-assessment-v2` pilot events; dashboard reads Readiness separately from Practice | `math-progress-dashboard-v1.js`, `local-progress-backup-v1.js` |
| Canonical evidence | `toan-thcs-canonical-evidence-v1` and `-v2`; v2 has `recent_events`, `seen_questions`, `independent_units` | `local-progress-backup-v1.js` |
| Skill taxonomy evidence | `toan-thcs-taxonomy-v2-evidence-v1` with recent events / seen questions / independent units | `local-progress-backup-v1.js` |
| Exam runs | `roadmap:exam-history-v1` and `roadmap:exam-v1:EXAM25-01/02/03` | `local-progress-backup-v1.js` |
| Written Exercise Library | Paper solution + self-check rubric; expressly **no Readiness score**; current viewer is descriptive, not automatic grading | `docs/assets/javascripts/written-exercise-library-v1.js`; Written Library Contract v1 |

The backup also includes UI preference keys (`roadmap.ui.focus.v1`, `roadmap.home.style.v1`), which must not be interpreted as student evidence.

## 2. What is already implemented

- Local-only backup contract `self-learning-math-local-backup-v1` (version 1) with a fixed allowlist, SHA-256 integrity, validation, previewed conflicts, and opt-in replacement.
- Restore defaults to **missing keys only**. Replacement requires acknowledgment of a fresh backup; failed writes attempt rollback.
- Descriptive Math dashboard already reads Practice and Readiness separately; tests assert no mutation or regrading.
- `scripts/test-math-progress-backup-v1.js` tests restore/corruption/quota behaviors, and `.github/workflows/qa-pr.yml` runs this test and `test-math-progress-backup-v1-browser.py`.

**Not established:** a single authoritative event model for *all* learning activities; full device-to-device synchronization; automatic handwriting assessment; equivalence of written self-rubrics and protected independent assessment; production migration safety. These are NOT marked complete.

## 3. Proposed event model (DESIGN ONLY — do not activate)

For any future additive event store, review the minimal vocabulary before coding:

- `event_id` (globally unique within learner/device), `schema_version`, `occurred_at`, `source_store` and `source_event_id`;
- `learner_scope` (local opaque ID; never leak external account or claim identity across devices);
- `item_id` and canonical `skill_id` **only if actually available**; topic/context placements should not create duplicate identities;
- `event_kind`: practice attempt, micro-practice, independent assessment, written self-check, remediation action, exam submission (candidate vocabulary, not approved enum);
- `evidence_class`: FORMATIVE / INDEPENDENT_ASSESSMENT / SELF_REPORTED; never combine into automatic Mastery;
- `payload_version`, `source_hash` when appropriate; `import_batch_id` for provenance and deduplication.

The new store must be a **read-only projection first** (on test fixtures only), with no writers switched over and no dual-write until reconciliation is reviewed.

## 4. R1 investigation tasks

1. Enumerate real producers and consumers of every allowlisted key; trace write, read, import/export, assessment and rendering behavior (including device-local session semantics).
2. Inventory all canonical IDs and versioned event shapes. Check historical v1/v2 coexistence; prohibit inventing synthetic attempts or dates.
3. Define replay/dedup rules and collision treatment without rewriting historical events or regrading old answers.
4. Prototype a **read-only** projection using synthetic fixtures: Practice, Micro, Readiness, Written self-check, remediation and exams remain visibly distinct.
5. Device QA: desktop, 390px mobile/iPad responsive, refresh/reopen persistence, SHA-256 backup roundtrip, same-device restore, another-device import, existing-key conflicts, storage-quota failure + rollback.
6. Owner review decides whether and when to migrate; migration/rollout must be a separate PR with explicit rollback and no Mastery/Readiness semantic changes.

## 5. Non-negotiable gates

- No changes to student local storage keys, payload bytes, historical IDs, dates, scores, attempt logs, Mastery or Readiness.
- No unreviewed normalization of scoring or inference from sparse evidence.
- No second separate Written exercise bank; no self-graded written results promoted to assessment evidence.
- Do not treat a backup file as cloud synchronization; it is manual cross-device transport.
- Do not confuse code/QA pass with owner release authorization.

**R1 deliverable:** inventory and engineering decisions only. **No production student-facing changes** in this PR.
