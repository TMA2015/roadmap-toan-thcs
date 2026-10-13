# Dashboard R2-A — Student-readable activity report

**Date:** 13/10/2026  
**Status:** `CANDIDATE / FULL_MATH_PR_QA_PENDING`  
**Source base:** `TMA2015/roadmap-toan-thcs` public main `64235fbb14ec0d5fcb85eb6264ed82e8dfef0399`  
**Scope:** visible dashboard wording, layout and read-only test assertions only.

## Product decision and ground-truth limitations

The student-facing progress page emphasizes three clearly identified **activities**, not three invented numeric histories:

1. **Trong bài học (Core)** — explaining, examples and short micro questions; show a relevant link to class lessons, **no fabricated independent historical count**.
2. **Luyện tập** — existing `toan-thcs-practice-v1.questions[*].attempted` cumulative answer attempts, which **include Core micro and topic Practice**. Label the combined source explicitly and distinguish repeats from distinct questions. Do not split the old record using guessed ID patterns or retrospective migrations.
3. **Tự kiểm tra** — existing `toan-thcs-assessment-v1.assessments[*].attempts` with `submitted_at`, stored independently. Count **submitted assessments**, not correct answers or inferred mastery.

The formerly highlighted “Đơn vị luyện độc lập / Taxonomy v2” indicator is intentionally removed **from the learner-facing summary**, not from any engine, history or diagnostic source. Group counts for skills are descriptive participation only. Do not display raw skill ID codes or classify a child as weak/strong from repeated attempts. The user can still navigate to the dedicated Skill Map.

### Critical empty/error states

- **Missing storage key (fresh learner):** `0` for cumulatively measured answer attempts and submitted checks. Show clear, friendly instructions and **no false “Chưa đọc được dữ liệu”** warning.
- **Valid storage key with no attempts:** likewise `0`.
- **Malformed or blocked Practice/Readiness storage:** `—` only for the affected lane, with visible warning that history cannot be read and **is not deleted/overwritten**. Other unaffected lanes keep their truthful numeric totals.
- Backup/restore behavior, SHA-256 validation, conflict-safe import and storage namespace all **unchanged**.

### Deliberately deferred R2-B

Activity during the past **7/30 days**, streaks, most active grade/topic, per-Core-session counts and last exact lesson would require complete, correctly sourced per-attempt timestamps/grade/topic/lane. Legacy `questions/tags` are cumulative, some observer `recent_events` are bounded and Readiness has independent submission dates. Do not compute partial historical activity and label it comprehensive. New tracking would need owner approval and independent local-backup/restore and privacy tests.

## Tests and release gates

- Existing `Dashboard.summarize()` Node API contract and backup/restore JSON byte invariants remain untouched.
- In disposable Chromium at 390px width: **empty** device must render `Học và thử / 0 / 0` without storage errors; **malformed storage** must render `Học và thử / — / —` with errors and exact unchanged bytes.
- Existing seeded desktop counts render `Học và thử / 3 / 1`; shows shared Core+Practice history, no Taxonomy jargon, no Markdown leakage, no horizontal overflow.
- Desktop→phone fake-data backup still verifies SHA-256, non-overwrite default, replacement consent, tampered JSON refusal, no real learner records.
- Full GitHub PR QA, strict MkDocs, CSS and existing B1/B2 scenarios must pass on exact HEAD; deploy only after review.
- No academic question content, score grading, AI, account/Firebase, THPT/SAT, or private English Actions modifications; public Math standard runners, no artifact/cache uploads.

**A2 learner understanding remains OPEN** until real pupil feedback; technical QA does not prove student comprehension.
