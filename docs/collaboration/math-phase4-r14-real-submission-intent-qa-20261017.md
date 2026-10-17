# Math Phase 4 R14 — Real Practice/Readiness hook → retry-safe v2 QA intent

**Date:** 2026-10-17 · **Scope:** isolated Playwright QA, NOT a learner production integration

## Baseline

R13 (#499) was merged after full GitHub Actions QA PASS. It demonstrated one stable staged submission token/event ID through a failed write, browser reload, retry and a crash between journal commit and intent receipt. R13 did **not** connect this mechanism to real lesson interactions; existing R5 post-save observer callbacks were still wired only to R4/R7 prototypes in isolated tests.

R14 injects `scripts/prototypes/math-v2-real-submission-intent-bridge-r14.js` together with the **unchanged** R6/R8/R13 scripts into disposable Chrome contexts. It binds the existing `MathV2CanaryBridgeR5` observer hooks of the actual Practice and Readiness pages to R13 staging and R8 journal commit.

## Verified event semantics in R14 browser QA

1. A successful original Practice answer triggers one staged **FORMATIVE** v2 intent with its own persisted ID; then R8 commits it into R6 event journal/outbox.
2. A genuinely submitted Readiness check triggers a separate **INDEPENDENT_ASSESSMENT** intent. Neither source grants Written self-check or additional readiness credit.
3. Existing original Practice and Readiness localStorage stores still receive their records, and normal score feedback remains authoritative for that legacy UX. The new QA counter is independent.
4. In a controlled `deferCommit` fixture, the R5 hook saves the existing legacy record but stages the v2 intent without committing it. Refreshing the page preserves both staged IDs; a manual QA `qaRecover()` replays exactly those IDs and commits exactly one v2 event per intent. An additional retry creates no events.
5. If original Practice/Readiness localStorage is corrupted and refuses a save, the existing R5 post-save hook does not fire: no new v2 staging or journal event is recorded.
6. Browser tests cover desktop 1365px, mobile-width 390px, ordinary learner route script absence and untouched original localStorage outside explicitly simulated legacy submissions.

## Critical not-yet-solved production blockers

- **Split write remains:** the actual learner engine still saves legacy v1 first, then invokes R5 asynchronously. A browser closure/crash **before R13 staging** can lose the QA shadow event. An R13 retry cannot reconstruct a token that never reached the intent store. No user-facing v2 counter switch is safe on that path.
- **Unique submit tokens must be allocated by the real submission lifecycle BEFORE original success**, not fabricated afterward by an observer. Repeating the same question as a genuinely new attempt must get a new key; a failed-save retry must reuse the old one.
- Readiness here is recorded as an unscored v2 submission event. The original graded `correct/answered/total/readiness_state` payload must be carried over without regrading, and only after making the journal the durable source.
- Existing R13 intents and R6 events live in separate QA databases. R10 backup covers the R6 journal/outbox but not the R13 staging database. A production backup/restore must also protect uncommitted intents or include an atomic production DB redesign.
- Cross-device and multi-tab competing edits to old localStorage are still outside the QA observer's guarantees. PC and phone currently contain different real histories; never add them together or fake their timestamps.
- No new scripts are in `docs/` or global MkDocs loader. All production student routes and historical scores remain unchanged. A separate owner-controlled migration/release approval is mandatory.

## Next actual release requirement

The next phase should refactor a narrow actual Practice/Readiness submission path behind an **off-by-default official feature flag**, with a single authoritative transaction / durable pending submission and visible saved-versus-unsaved feedback. Before any owner enables it, archive the separate original PC and phone real-progress files and verify the new backup includes pending intents. **R14 is engineering evidence, not a production canary.**
