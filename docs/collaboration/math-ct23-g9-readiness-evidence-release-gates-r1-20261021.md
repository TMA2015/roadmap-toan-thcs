# W7 — CT23 Grade 9 Readiness: production evidence and release gates (R1)

**Date:** 2026-10-21  
**State:** DESIGN ACCEPTANCE / DRAFT ONLY / NO_LIVE_RELEASE.  
**Source of academic truth:** `MATH-CT23-G9-NEW-READINESS-TEN-ITEM-AUTHORING-R0-20261021` independent NotebookLM 10/10 PASS; exact source in [PR #560](https://github.com/TMA2015/roadmap-toan-thcs/pull/560). **Owner has NOT approved a Grade-9 live launch.**  
**Current QA preview (R2/R16):** [PR #561](https://github.com/TMA2015/roadmap-toan-thcs/pull/561) uses `docs/assets/data/qa/ct23-g9-readiness-candidate-v1.json` at `/kien-thuc/23-xac-suat/tu-kiem-tra-lop-9-qa/`. The Draft contains a **QA-only Grade9 Chapter 8 hub link**, protected **local Grade9-only result persistence** inside `toan-thcs-assessment-v1` and an explicit dashboard exclusion. This is **not published on `main`** and is **not production authorization**.

## 1. Independent result semantics

- Proposed Grade9 `assessment_id=PROB23-G9-CORE-READY-V1`, `grade_scope=[9]`, ten fixed reviewed questions from KNTT Grade9 Core cards `prob23-core-g9-6` and `prob23-core-g9-7`, source snapshot and `version` pinned. No prompts from a Grade9 bank should appear as mandatory Grade6–8 Readiness.
- Grade6–8 source `PROB23-CORE-READY-V1`: preserve **all 12 existing IDs and keys**, past attempts, best/latest, readiness states and existing soft thresholds. No automatic recomputation or migration.
- A Grade9 learner completes the ten questions independently with no hints/AI and feedback after Final Submit. Percent may be displayed as *a short Readiness screen* (not a certified per-skill mastery result); readiness remains soft and non-gating.
- Only explicit Grade9 pathway or explicit Grade9 Core selection may expose the future live check. Do **not** add a Grade9 link to the shared, mixed-grade `/kien-thuc/23-xac-suat/tu-kiem-tra/` page without a guard/clear grade label.

## 2. Storage/evidence contract — implemented for Draft QA; production authorization pending

- Evidence must have its **own unambiguous Grade9 assessment ID and version**, with `grade:9`, source-snapshot ID or hash, attempt UUID, stable submitted timestamp, total=10, answered, score, selected answers/IDs, feedback after final submission, and a label denoting protected independent Readiness (not formative or Practice).
- Do not reuse `toan-thcs-class-mixed-quiz-v1` or normal Practice/Skill evidence. If using the existing `toan-thcs-assessment-v1` container, only mutate bucket `PROB23-G9-CORE-READY-V1`; preserve all other per-assessment buckets *byte-equivalent in logical content*. If choosing a separate store, integrate it into existing learner backup/export/restore first. The QA candidate explicitly chooses this existing-container/new-bucket option, verified in its implementation diff. The **production release and any future evidence-semantic promotion remain subject to separate Owner approval**.
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
| Devices | CI Playwright 1365px/390px/**820px touch-tablet emulator** plus **owner manual real iPad/Safari check** (touch, scrolling, focus, text size); emulation is not a real device |
| Release | Exact-head PR Quality PASS, specific Owner assent to **this** live release, then verify Pages deploy + source blobs |

## R2 implementation note — Draft QA, not a live release (2026-10-21)

The QA-only preview was extended to **persist submitted Grade9 results only** under the **already-backed-up** `toan-thcs-assessment-v1` container, new unique `assessments.PROB23-G9-CORE-READY-V1` bucket. This choice avoids an orphan standalone key and reuses the existing SHA-256 local Progress Backup allowlist. Existing Grade6–8 or other assessment bucket values are copied without scoring or modification.

- Pure evidence module `docs/assets/javascripts/readiness-g9-evidence-qa-v1.js`: validates the old store shape, rejects corrupt/unknown Grade9 history, writes only the Grade9 key, version/grade/source/ID annotated, unique attempt ID, **idempotent duplicate attempt ID**, no silent 20-attempt truncation, preserve old `latest`/`best` of unrelated assessments. Storage failure yields an explicit warning without falsely claiming saved.
- Player `readiness-g9-qa-v1.js`: Final Submit only, full ten answers required, in-memory feedback plus attempt persistence; Grade9 result preview after reload, separate `READY` screen at 8/10; **does not call `MathV2CanaryBridgeR5.captureReadiness`** and never credits general CT23 Mastery/Skill.
- `scripts/test-ct23-g9-readiness-evidence-r2.js`: verifies eight/ten, ten/ten and zero/ten scores, exact legacy bucket equality, duplicate replay, corrupt store and quota failure, old backup round-trip, restore-in-missing mode no overwrite.
- `scripts/test-ct23-g9-readiness-qa-browser.py`: verifies old Grade6–8 data preserved after new Grade9 submission, one independent Grade9 record, refresh reading history at desktop (1365px) and mobile (390px).
- **Release status remains NO_LIVE_RELEASE.** Grade9 Chapter 8 now has a **QA-only Draft link**, while `main` remains unchanged; no Grade6–8 entry links to this assessment. The `docs/assets/data/qa/` bank is not a production-approved release. Real iPad owner acceptance and a separate explicit release authorization remain pending.
- As with local-only Progress Backup, this protects data **on the current browser**, not cross-device synchronization automatically; transferring between devices requires explicit backup/export and restore.

## 4. Current verified vs pending (R17 reconciliation, 2026-10-21)

- Independent NotebookLM ten-item academic `OVERALL|PASS`: **DONE**; academic PASS alone does not authorize publishing.
- Original *in-memory-only* preview and its [older CI run 39564889865](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/39564889865) are **historical**, not the current implementation.
- Current protected `toan-thcs-assessment-v1` Grade9 QA evidence, version/grade/source tracking, isolated legacy buckets, SHA-256 backup/restore, corrupt/quota safeguards and official dashboard exclusion: **IMPLEMENTED IN DRAFT**.
- Grade9-only Chapter 8 **QA link in the Draft class hub** (not on production `main`): **IMPLEMENTED IN DRAFT**; Grade6–8 navigation stays separate.
- Automated source, storage and browser QA on PR #561 exact previous head `b4a9202ffef1121515162fec14494a1f9bd7d10a`: **CI PASS**. Integration-only PR #562 previous head `33c4a6a2de7aab785ffd30a071a26ee1fc3041d9`: [CI run 39578246864](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/39578246864) **PASS**, including 1365/390/820 emulator G6/G9 tests and same-device coexistence. Any documentation follow-up commit changes exact head and therefore needs its **own new status check**.
- Official Grade9 Readiness/Skill/Mastery credit promotion: **NOT AUTHORIZED / NOT IMPLEMENTED**; QA attempts intentionally excluded from the official progress dashboard. No backfill.
- **Owner manual real-iPad/Safari QA: PENDING. Live release approval: PENDING.**

**DO NOT merge Draft #561 or integration-only Draft #562 to production based on CI or academic PASS alone.** Grade6 formative Draft #559 and Grade9 independent Readiness remain separately gated. Preserve 74 canonical Written and 237 existing Readiness items.
