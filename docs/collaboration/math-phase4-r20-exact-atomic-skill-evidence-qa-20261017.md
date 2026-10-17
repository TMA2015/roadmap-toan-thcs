# Math Phase 4 R20 — Exact action + skill evidence in one atomic journal (QA only)

**Date:** 2026-10-17 · **Status:** QA CANDIDATE · NO LEARNER CUTOVER

## Why this exists

Owner goal: eventually unify reliable **per-skill progress counters** behind a single canonical event source. Formative Practice, independently graded Readiness, and self-reported Written remain distinct evidence classes; their counts must not be summed into a pseudo-mastery score.

R19 (#505) established pure stable identities (learner scope / session / presentation / first action / canonical chosen option / exact source SHA), but did not persist them. R20 experimentally **persists** the whole answer identity in the SAME IndexedDB as the staged intent, committed answer event and pending outbox. The event/intent/outbox transition occurs in one atomic transaction; there is **no second metadata database**.

## QA behavior

- New isolated database: `math-v2-qa-exact-ledger-r20`; only explicitly enabled `QA_R16_R19_R20_...` synthetic learner scopes.
- First `stage()` writes exact option/action/source identity and reviewed skill references to one durable intent. Concurrent repeats of the **same presentation** reuse its unique submission key and original event ID.
- A changed wrong option, changed first action, changed source, or inconsistent skill attribution for the same presentation is **rejected**, not interpreted as another attempt.
- `commit()` writes the full evidence event, outbox receipt, and saved intent together. A simulated abort rolls all three back. Subsequent same-ID commit is idempotent.
- `project()` counts each **saved event ID** once, and derives distinct per-skill Practice attempted/correct counters from its explicitly supplied `skill_ids`. A question may legitimately tag multiple skills: the sum of per-skill counters is **not** the number of unique answered questions. No system-verified mastery or Readiness credit follows from these numbers.
- A single consistent read supports SHA-256 checksummed backup of both committed and unfinished intents; import requires scope match, hash verification, and explicit consent before replacing existing QA data. The checksum detects corruption, not malicious re-signing. 2 MiB QA size limit.
- One standalone browser test (1365px desktop and 390px mobile-width Chromium) covers multi-connection stage/commit races, same-wrong-choice conflict, failed-commit rollback, reload, cross-browser export/import of SAVED + STAGED records, unchanged v1 storage and duplicate-free per-skill projection.

## What R20 does NOT claim

1. **Not a live learner release.** No `mkdocs.yml` entry, no Practice/Readiness engine import, no real student scores or backups, no actual school-session flag.
2. **Not a full unified Skill dashboard.** This prototype handles **only formative MCQ answer_attempt**; grade-independent Readiness results, Written, remediation and exams need separately reviewed evidence contracts and safe projection.
3. **Not verified curricular skill mapping.** R20 accepts supplied synthetic `skill_ids` for QA; future integration must obtain canonical skill mapping from reviewed content at the exact question version, not invent tags.
4. **Not self-authenticating scoring.** R20 accepts synthetic `correct` and source digest from caller; future production connection must compute score from trusted reviewed source, not accept learner-supplied grading.
5. **Not v1/v2 dual-write atomicity.** No replay into legacy localStorage. Do not migrate PC and phone histories automatically.
6. **Not Safari proof.** Real family iPad Safari IndexedDB/quota, multiple tabs and browser-kill tests remain necessary.

## Next safe product step

Design an owner-visible **read-only comparison** of existing legacy counters versus canonical v2 evidence on synthetic/approved canary data. Show “not yet comparable” when the evidence has not been migrated rather than fabricating totals. Obtain owner approval before any real learner capture or cutover. Until then keep the family site on v1.

**Release boundary:** Full public Math CI PASS permits merging these isolated QA files only; it is not permission to enable experimental counters for family learners.
