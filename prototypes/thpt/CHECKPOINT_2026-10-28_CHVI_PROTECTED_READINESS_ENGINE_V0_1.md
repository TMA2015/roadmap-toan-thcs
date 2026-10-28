# THPT G10 ChVI — Protected Readiness implementation checkpoint v0.1

**Recorded:** 2026-10-28 · **Lane:** integration Draft PR #612 · **Owner:** user requested immediate development, no idle hourly waiting.  
**Golden UI R4 and THCS remain unchanged.** This is **actual implemented code + passing regression**, not just a planning document. **No merge / no deployment.**

## 1. New implementation in integration branch

| File | Actual delivered function |
|---|---|
| `services/thpt-readiness/assessment-service.mjs` | Validates complete protected bank and held-out flags, one canonical item ID, no publicly exposed item reused as another independent readiness record; starts/resumes per learner; returns question text/choices **without key or explanation**; commits first Final Submit only. Objective CHOICE scoring after submit; TEXT responses persist privately and stay **PENDING_MANUAL_RUBRIC_REVIEW**, no guessed score |
| `services/thpt-readiness/worker.mjs` | Undeployed Cloudflare Worker with Firebase ID token signature verification, exact permitted origin, D1 protected item/attempt/exposure access; never accepts a user-provided learner identity |
| `services/thpt-readiness/schema.sql` | Empty, default-disabled private banks, protected item answer/rubric metadata, versioned attempts, immutable first result and shared per-learner canonical exposure history |
| `docs/assets/javascripts/thpt-protected-readiness-v1.js` | **Opt-in only** R4 question interface: previous/next, editable answers, Final Submit and post-submit result; TEXT shows pending manual review; no answer/hint in client or before Final Submit. Requires a separately provided verified auth token and a configured private HTTPS endpoint; absent configuration → disabled, non-credit |
| `mkdocs.thpt-preview.yml` | Loads the inert opt-in client without activating it on current demo or altering THCS |
| `scripts/test-thpt-readiness-secure.mjs` | Synthetic end-to-end domain QA: no pre-submit key leak, user/attempt isolation, exposed item conflict across SGK/Topic, required answer count, version mismatch, one-time submitted result, opt-in written hold, no fake mastery, server fails closed when unconfigured |
| `scripts/test-thpt-readiness-d1-schema.py` | **Real SQLite execution** of D1-compatible schema and claim/answer/exposure SQL with synthetic data, including duplicate first attempt, cross-route exposure and immutable First Submit |
| `scripts/test-thpt-r4-preview-browser.js` | Synthetic browser trial of opt-in protected UI: retrieve mock questions, modify answers via Previous/Next, Final Submit once, TEXT pending-manual state; existing Golden UI R4 and demo tests remain present |
| `.github/workflows/thpt-r4-preview-quality.yml` | CI enforces Node source QA + real SQLite schema QA before building R4 preview and running Chromium browser tests |

## 2. QA evidence and exact gates

- [THPT R4 MkDocs Preview QA run 40675901332](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/40675901332): **SUCCESS** on exact commit `95f63edd06a8665077d41eaeba2fa30aa307149c`. Covers server-side unit tests, SQLite schema constraints, browser mock, previous core R4 regression, no deploy.
- Roadmap PR Quality for that commit remained `IN_PROGRESS` at last observation; don't claim its new run PASS without checking.
- The approved ChVI 18 real held-out Readiness items still have **zero keys, stems, solutions, numeric answers or rubric text in public GitHub/JS**. Synthetic QA data are fabricated. Existing 4-item `TECHNICAL_DEMO_ONLY` remains unchanged, no learner credit.
- Chapter VI SGK public Knowledge, Core/Practice and Written snapshot integration retained (19 mapped outcomes, 36 public formative/Written IDs, previous review receipt), not touched by this service work.

## 3. Production gates — explicitly NOT PASSED

1. **Actual authenticated learner session:** Firebase Auth not wired for the intended learner workflow; Worker still not deployed, no Cloudflare D1 bound, no real production HTTPS origin configured. The code expects verified ID tokens; it does not create/manage student accounts.
2. **Real protected academic items:** No import from owner-only reviewed Temp_03. Bank tables empty and disabled; cannot start a real protected ChVI exam.
3. **Rubric-based grading:** ChVI items include open response. TEXT answers can be collected and stored safely in a configured D1 backend but **not yet manually graded**. No official grades, outcomes or mastery can be issued; no conversion to multiple-choice without academic delta review.
4. **Exposure evidence:** The private assessment engine tracks exposures across secure banks; public static Practice page views currently do NOT guarantee authenticated exposure events. Real learning-history cross-route protection, overlap screening and publication history require independent QA.
5. **Production QA:** Verify real D1 concurrency, auth revocation, abuse limits, privacy retention, response formats, actual deployed endpoint/server logs, real mobile Safari/Android Chrome, user acceptance, hosting route and rollback plan.
6. **Academic proof:** NotebookLM PASS is scoped to original reviewed ChVI private content; the new *engineering* mock cannot assert any new Academic PASS or whole-site production PASS.

## 4. Next engineering tasks in correct priority

- Configure private staging authentication and D1 with no production keys, run real integration HTTP tests on non-secret synthetic items.
- Implement production-approved mathematical response and/or secure human rubric review for the actual 18 reviewed items. Keep mastery OFF.
- Instrument public formative exposures or enforce a separately verified anti-repeat policy; prevent false independent readiness evidence across SGK and Topic.
- Perform full D6 security, device and rollback QA. Only then consider official THPT launch under owner's conditional approval.
- After first controlled release, consolidate QA/release workflow per owner's already recorded decision; future ChVII–VIII content integration remains a separate stage.

```text
PROTECTED_ASSESSMENT_CORE|IMPLEMENTED_IN_DRAFT_PR
FIREBASE_TOKEN_VALIDATION_SOURCE|IMPLEMENTED_NOT_PRODUCTION_CONNECTED
D1_SQLITE_SCHEMA_TEST|PASS
R4_OPTIONAL_PROTECTED_CLIENT_BROWSER_MOCK|PASS
THPT_PREVIEW_QA_COMMIT_95f63edd|PASS
REAL_PRIVATE_BANK_IMPORTED|NO
REAL_CHVI_READINESS_ACTIVATED|NO
LIVE_REAL_LEARNER_AUTH|NO
OPEN_RESPONSE_RUBRIC_GRADING|NOT_IMPLEMENTED
MASTERY|OFF
RELEASE_PERMISSION|CONDITIONAL_GATES_NOT_MET
MERGE_DEPLOY|NO
```
