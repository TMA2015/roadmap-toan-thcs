# W7 — CT23 Grade 9 Readiness: production evidence and release gates (R1)

**Date:** 2026-10-21  
**State:** DESIGN ACCEPTANCE / DRAFT ONLY / NO_LIVE_RELEASE.  
**Source of academic truth:** `MATH-CT23-G9-NEW-READINESS-TEN-ITEM-AUTHORING-R0-20261021` independent NotebookLM 10/10 PASS; exact source in [PR #560](https://github.com/TMA2015/roadmap-toan-thcs/pull/560). **Owner has NOT approved a Grade-9 live launch.**  
**Current QA preview:** [PR #561](https://github.com/TMA2015/roadmap-toan-thcs/pull/561) uses `docs/assets/data/qa/ct23-g9-readiness-candidate-v1.json`, unlinked URL `/kien-thuc/23-xac-suat/tu-kiem-tra-lop-9-qa/`, and an in-memory-only player. The preview's lack of persistence is intentional, not a production-ready result record.

## 1. Independent result semantics

- Proposed Grade9 `assessment_id=PROB23-G9-CORE-READY-V1`, `grade_scope=[9]`, ten fixed reviewed questions from KNTT Grade9 Core cards `prob23-core-g9-6` and `prob23-core-g9-7`, source snapshot and `version` pinned. No prompts from a Grade9 bank should appear as mandatory Grade6–8 Readiness.
- Grade6–8 source `PROB23-CORE-READY-V1`: preserve **all 12 existing IDs and keys**, past attempts, best/latest, readiness states and existing soft thresholds. No automatic recomputation or migration.
- A Grade9 learner completes the ten questions independently with no hints/AI and feedback after Final Submit. Percent may be displayed as *a short Readiness screen* (not a certified per-skill mastery result); readiness remains soft and non-gating.
- Only explicit Grade9 pathway or explicit Grade9 Core selection may expose the future live check. Do **not** add a Grade9 link to the shared, mixed-grade `/kien-thuc/23-xac-suat/tu-kiem-tra/` page without a guard/clear grade label.

## 2. Storage/evidence contract — must be implemented and verified before live launch

- Evidence must have its **own unambiguous Grade9 assessment ID and version**, with `grade:9`, source-snapshot ID or hash, attempt UUID, stable submitted timestamp, total=10, answered, score, selected answers/IDs, feedback after final submission, and a label denoting protected independent Readiness (not formative or Practice).
- Do not reuse `toan-thcs-class-mixed-quiz-v1` or normal Practice/Skill evidence. If using the existing `toan-thcs-assessment-v1` container, only mutate bucket `PROB23-G9-CORE-READY-V1`; preserve all other per-assessment buckets *byte-equivalent in logical content*. If choosing a separate store, integrate it into existing learner backup/export/restore first. The canonical storage choice remains to be approved with an implementation diff, not inferred from this spec.
- Review the current shared engine `assessment-engine-v1.js`: it keeps at most 20 attempt records per assessment and has optional `MathV2CanaryBridgeR5.captureReadiness`. The Grade9 release must **not** silently truncate previously retained historical evidence or send Grade9 evidence into a shared unscoped CT23 Mastery/Readiness aggregate. Explicitly test the bridge boundary for Grade9.
- Corrupt, unknown-version and write-failure cases must fail safely without overwriting old records. Successful local or backup persistence is required before saying `Saved`. Persisted attempts must not be duplicated on double-submit, Back/Forward, refresh, browser retry or device restoration. No backfill of 6–8 scores.

## 3. QA acceptance matrix

| Gate | Minimum proof |
|---|---|
| Math source | Exactly 10 reviewed Grade9 IDs/answers; L1=2/L2=5/L3=3, correct Core cards and keys, no clone from Micro |
| Test independence | No hints/solutions before Final Submit; Previous/Next, answer changes, empty submission handling |
| Grading | Score 0/10, 8/10, 10/10, exactly one Grade9 result per submission; test no stale answers after retake |
| Isolation | Keep legacy CĐ23 12-item history/keys unchanged; no Grade9 result in Grade6–8 or general CT23 mastery |
| Durable results | Reopen after refresh; source/version recorded; corrupt storage refuses overwrite; backup/export/import roundtrip |
| Scope & navigation | Only Grade9 path; Grade6–8 entry never links to new check or requires Grade9 questions |
| Devices | CI Playwright 1365px/390px plus **owner manual iPad check** (touch, scrolling, focus, text size) |
| Release | Exact-head PR Quality PASS, specific Owner assent to **this** live release, then verify Pages deploy + source blobs |

## 4. Current verified vs pending

- Independent NotebookLM ten-item academic `OVERALL|PASS`: **DONE**.
- QA-only source mapping + zero-persistence player and 1365/390 browser QA: **DONE**, verified [CI run 39564889865](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/39564889865).
- Official Grade9-only route, versioned durable evidence, backup/restore and bridge isolation: **PENDING**.
- Owner manual iPad QA and permission to merge/publish: **PENDING**.

**DO NOT mark Draft #561 as production READY or merge based on academic PASS alone.** PR #559 (Grade6 mixed Core) also remains independent and Draft; its formative marks must never become Grade9 Readiness.
