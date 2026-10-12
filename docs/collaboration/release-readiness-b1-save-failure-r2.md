# Self-Learning Math — B1 R2: Save-failure & non-destructive data safety audit

**Audit ID:** `MATH-B1-SAVE-FAILURE-R2-20261012`  
**Base:** public GitHub `main` commit `59fbe3cce694005490335e63de527276b82cd1b2`  
**Status:** `BASELINE_REPRODUCED / BOUNDED_FIX_CANDIDATE_QA_PENDING / NO_DEPLOYMENT_AUTHORIZED`  
**Nature:** source-locked, documentation-only investigation. No runtime, stored user data, assessment score, schema, learner history, Firebase, or academic-content change.

## Evidence update — deterministic Chromium reproducer, 12/10/2026

- **PR #422** test-only baseline: https://github.com/TMA2015/roadmap-toan-thcs/pull/422, commit `716265689c414f12ee9a7bc377e2cfd7af21c59c`.
- GitHub Roadmap PR Quality run `38232454288`: **SUCCESS**. Full job logs explicitly report all four reproduced baseline defects:
  - `B1-R2-01`: denied Practice write aborts feedback/next controls, prior raw bytes preserved;
  - `B1-R2-02`: denied Readiness write aborts result, prior raw bytes preserved;
  - `B1-R2-03` Practice: malformed prior raw bytes replaced on next synthetic answer;
  - `B1-R2-03` Readiness: malformed prior raw bytes replaced on next synthetic submission.
- A green baseline reproducer means the **unsafe original behavior was observed**, **not** that the bug is fixed. No personal learner data or live iPhone browser data were used.
- **PR #423**: https://github.com/TMA2015/roadmap-toan-thcs/pull/423, separate bounded runtime fix candidate with reversed safety assertions and normal-save positive controls. The fix may only be considered for merge after its own full PR QA and source/diff review. Owner device QA remains a separate gate.
- PR #422 is kept unmerged as historical baseline; merge the fixed safety assertions through the implementation PR instead. Do not publish a CI test whose expected outcome is the known unsafe behavior.

## Why this audit now

The released local JSON backup/restore utility (#416/#418) covers *manual movement of already saved data*. It does not prevent an ordinary answer from failing to save in the first place, or guarantee preservation of malformed legacy storage after a subsequent write. These are separate family-use V1 reliability gates. Dashboard and backup owner QA on desktop/iPhone do not close this audit.

## Source evidence and bounded interpretation

| ID | Priority | Source location at pinned base | Static finding | Status |
| --- | --- | --- | --- | --- |
| B1-R2-01 | P1 | `docs/assets/javascripts/learner-evidence-v1.js:19,70–84`, `practice-engine-v2.js:897–902,968–977` | `recordAnswer` ultimately calls unguarded `localStorage.setItem`. Practice sets `answered=true` and adjusts session score **before** the call; a storage exception can interrupt the feedback path and leave a session unsaved, without a dedicated saved/unsaved warning. | Source-observed risk, **not reproduced on an owner device** |
| B1-R2-02 | P1 | `assessment-engine-v1.js:201–206,238–255,36` | Readiness sets `submitted=true`, then calls `persist`/`saveStore` before `renderResult`. Storage write failure may stop the result UI although the learner submitted answers. | Source-observed risk, not a proved production incident |
| B1-R2-03 | P1 | `learner-evidence-v1.js:15–16`, `practice-engine-v2.js:13–17`, `assessment-engine-v1.js:26–34` | Parse errors return empty normalized/default state. A later successful save may overwrite the original malformed key; no explicit quarantine/backup is shown on those paths. | Source-observed conditional risk |
| B1-R2-04 | P2 | `practice-engine-v2.js:26–29,1099–1103,1192–1211` | Remediation writes use a bare `setItem`. Failure can affect remediation navigation/history even when Practice answer evidence uses a separate storage key. | Source-observed risk |
| B1-R2-05 | Contract | `docs/assets/javascripts/local-progress-backup-v1.js` and `docs/collaboration/progress-backup-dashboard-r1.md` | Manual export/import has integrity checks, conflict preview and guarded replace; **it is not an automatic transaction or fix for failures during normal Practice/Readiness submissions**. | Existing contract, must preserve |

Source blob IDs used for reconciliation:
- learner evidence `cc7a256687986e6d04832a0141a82ecb085ffae4`;
- Practice v2 `13a97db1601505b2055b77b2efe91089638fb931`;
- Readiness v1 `9698ea8520f10ef30fad64c24721ab087f98de2c`;
- backup utility `960c094ab7bb44698868d12b05a7f9e03cbd8bcf`.

**Do not overstate:** No denied-write browser reproduction, iPhone quota reproduction, confirmed record loss, or fixed-result verification has been performed here. Source-path inspection alone does not establish defect frequency.

## Proposed QA gate (synthetic disposable profiles only)

1. **Practice denied write:** seed valid Practice JSON, intercept only writes to `toan-thcs-practice-v1` to throw a `QuotaExceededError`; answer a correct and incorrect item. Assert mathematical feedback and next-step controls remain accessible **with a truthful unsaved warning**; assert persisted storage remains unchanged. Check both paths with/without the optional `RoadmapLearnerEvidence` global.
2. **Readiness denied write:** in a dedicated test profile, finish a short Readiness and submit while writes to `toan-thcs-assessment-v1` throw. Assert that result/review can be seen, but the page clearly states the result was **not saved**, and reload never fabricates an attempt.
3. **Invalid saved JSON:** seed distinct malformed strings in Practice and Readiness keys; open the pages, submit a test answer and verify the original corrupt bytes are **not overwritten** without a separate, explicit recovery/backup decision. No silent reset or reinterpretation as success.
4. **Remediation write failure:** throw only for `toan-thcs-remediation-v1`. Verify the learner can still read corrections and continue unrelated learning; no claim that remediation history was saved.
5. **Positive-control regression:** with storage working normally, the exact existing counters, evidence separation, soft Readiness semantics, hint flags and max-attempt retention remain unchanged. Backup R1 contract and prior-browser QA continue to PASS.
6. **Real-device gate later:** test an actual low-storage/private/restricted browser only with a disposable profile; do not intentionally damage a real learner's storage.

## Target behavior for a separately authorized implementation

- Display score/answer explanations based on current answers even if saving fails; **distinguish result calculated on screen from record successfully persisted**. Do not claim a saved attempt without a successful write.
- Protect existing raw invalid data first; do not silently overwrite or delete it. A quarantine design must itself handle quota denial and cannot treat inaccessible storage as safely backed up.
- Never regrade old attempts, alter `skill_id`, IDs, canonical-family mapping, assessment threshold, or priority metadata. Do not write Readiness evidence into Practice or vice versa.
- Keep all current localStorage namespaces and backup R1 envelope intact. No Firebase/cloud/account/billing work, no new provider requirement.
- Optional observer failures remain fail-open; **primary Practice/Readiness failures must be visible**, not silently swallowed.
- Ship as a **separate small, tested, reviewed implementation PR** after the source issue is proven with a failing test. No direct merge from this audit; owner QA remains a release gate.

## Scope and decision

This audit is an R2 **candidate QA plan**, not an emergency production patch or a claim that all learner history is at risk. Highest-value next action is a deterministic denied-write browser reproducer with exact source SHA; only after reproducing should a narrow UX/data-safety fix be authored. Parallel A2 human learner feedback (including two Grade 9/10 peer testers) remains pending and independent.
