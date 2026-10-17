# Math Phase 4 R15 — Journal-first Practice MCQ gate (QA off by default)

**Date:** 2026-10-17 · **State:** Candidate, awaiting QA · **NOT ENABLED FOR LEARNERS**

## Achievement

R14 merged with full QA and demonstrated that original Practice/Readiness post-save hooks can stage stable R13 intents and replay without v2 duplicates. However, real learner routes still saved v1 **before** staging. A crash before intent staging could therefore leave a saved original attempt without v2 evidence. R15 tests the reverse order on **one real Practice multiple-choice answer path only**, under an injected flag that is absent by default.

In `docs/assets/javascripts/practice-engine-v2.js`, `answer(selectedIndex)` now checks `window.MathV2PracticeCommitGateR15?.enabled === true` before incrementing the session score or calling the existing `record()` writer. With no injected gate, the existing answer path and all rich-response cases behave unchanged. For QA, `answerJournalFirst()`:

1. Captures the selected answer and a caller-scoped stable `submission_key` for this specific attempt (a genuine new attempt receives a fresh token).
2. Locks duplicate clicks and invokes an injected R15 gate, which uses reviewed R13 intent staging and R8/R6 atomic journal commit.
3. On `NOT_SAVED`, leaves `answered=false`, old localStorage counters and current score untouched. Presents an explicit **Thử lưu lại lượt này** button that retains the original key and answer.
4. On a durable `SAVED` acknowledgment, calls the original synchronous `answer(selectedIndex, true)` logic to preserve the existing feedback, skills, remediation and legacy save. If this **subsequent legacy save** fails, the existing warning still appears; v2 remains committed as the future authoritative evidence for the new epoch.
5. The injected bridge `scripts/prototypes/math-v2-practice-journal-first-gate-r15.js` is **only** under `scripts/`, rejects non-`QA_R15_` scopes and is never registered in `mkdocs.yml`. Its simulated journal failure is test-only. If a page reload loses the in-memory submission key but re-encounters the same unresolved question+answer, the bridge reuses the matching staged R13 token; a conflicting pending answer cannot silently overwrite it.

## Automated QA

`scripts/test-math-v2-practice-journal-first-r15.js` checks source ordering, default-off loader isolation, same-key retry and authorization-before-old-score semantics.

`scripts/test-math-v2-practice-journal-first-r15-browser.py` runs disposable Chromium 1365px and 390px profiles: ordinary learner page unchanged without injection; deliberately fail first journal write, confirm **no v2 event and no legacy score**, staged ID remains; click retry, confirm **one** journal event and **one** original Practice attempt, no duplicate; reload, confirm durable journal; and verify ordinary successful journal-first single click. A synthetic localStorage sentinel must stay untouched.

## Explicit production blockers

- **Not a release:** R15 is not loaded on live learner pages, and only the MCQ `answer` path has a gated branch. Rich response questions and independent Readiness remain on their existing mechanisms.
- **Crash safety:** R13 intent staging is durable, but if the tab closes after v2 journal commit and before the v1 feedback/save, the QA ledger already records that submission. Future learner UI must support resume and clear saved vs graded display after reload.
- **Source semantics:** The R8/R13 prototype currently records a boolean Practice `correct` only; academic source tags, assistance state and independently graded Readiness results must be preserved and audited before production counters replace v1.
- **Backup:** R10 currently archives R6 event/outbox only. Production must additionally archive uncommitted R13 intents or unify events, outbox and intents in one safe database, tested on PC and iPad.
- **Learner scope:** R15 uses fixed *synthetic* per-test IDs. Production requires stable identity for one family learner, explicit separation from QA/history and a clean labeled v2 metric start. Old device histories are separate (PC 149 attempts vs phone 116 in the R12 screenshot), potentially overlapping; never sum them or invent event timestamps.
- **Rollout:** A separately controlled feature flag, owner acceptance on actual Safari/iPad/PC and revert procedure are required. No silent historical deletion or score rewriting is permitted.

R15 QA PASS means only that the isolated journal-first Practice action works on synthetic sessions. It does **not** authorize a live switch of Readiness or existing student progress.
