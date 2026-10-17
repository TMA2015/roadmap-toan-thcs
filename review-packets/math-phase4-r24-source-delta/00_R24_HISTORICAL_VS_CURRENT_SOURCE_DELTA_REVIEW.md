# R24 — Historical/current question delta evidence for Skill source-lock holds

**Date:** 2026-10-17  
**Purpose:** Verify exact existing independent academic locks and retain source-provenance/counter activation gates. NO new blanket approval, NO learner migration, NO mastery credit.  
**Parent phase:** Skill counter unification, R22 #508 and R23 #509 both merged after full Math public CI PASS.

## Provenance and method

R22 compiled source-lock policy: `docs/assets/data/curriculum/taxonomy-v2-runtime/index-r1.json` (CT02–CT25; **3,114** historical question IDs).  
R23 compares 24 latest-version Practice *catalog candidates*, not presumed live bank routes; **3,173 distinct candidate IDs = 3,114 historic + 59 additional**. The 59 are **49 MCQ + 10 rich typed-answer** and lie outside the original 3,114-item historical source-lock. This does **not** imply all 59 lack independent academic approval; e.g., nine CT09 P1-C2 MCQs have a separately reviewed additive taxonomy extension and owner QA PASS. There were **0 missing historical IDs** in catalog candidates.

R22 held **150 historical questions** because the original Git blob SHA differed from the current source chunk. We compared each of these items by exact question ID against the historical immutable Git blob stored in the repository and the current `main` file. For each item, we compared its full JSON payload, then separated the exact changed fields. The comparison was read-only; no bank, tag, grading key, or learner history changed.

## The five changed source chunks

| Topic | Chunk | Historical blob SHA | Current blob SHA | Question count | Actual item differences |
|---|---|---|---|---:|---|
| CT08 | `08-phuong-trinh-bat-phuong-trinh-v1-02.json` | `717e6988da610c382e744118fe4aca0c20d40244` | `0eda14ac65f06d0cd5d281893ab70d395f3bab37` | 30 | 26 identical; 4 question stems + explanations revised |
| CT09 | `09-he-phuong-trinh-v1-01.json` | `f74f701f23c2c2fa03e7e6f2162954d52ec0586f` | `a7e9b39e85d0b52449661e101d2b3ad2106b9f18` | 30 | `variant_group` added to all 30 |
| CT09 | `09-he-phuong-trinh-v1-02.json` | `ea101b62695d37174dfc257e6d49e5b09a45893e` | `b6dc363399cc9f030256b93251e5e9faf449df87` | 30 | `variant_group` added to all 30 |
| CT09 | `09-he-phuong-trinh-v1-03.json` | `18e4f5e4d00956e3f6a0a979cf5d59f5afb506e3` | `0ba5cb4b23d0b668c5f0ce83a1efd70883c0e7bc` | 30 | `variant_group` added to all 30 |
| CT09 | `09-he-phuong-trinh-v1-04.json` | `09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f` | `e980933d5a432d86084f0c471fd5ce1b1fc9c2da` | 30 | `variant_group` added to all 30 |

**150 holds = 26 field-for-field identical question records + 4 changed educational texts + 120 metadata-only changes.** No historical IDs were added/removed within these five chunks.

For CT09, the fields `question`, `options`, `answer`, `tags`, `difficulty`, and `explanation` were unchanged on all 120 items, but the added `variant_group` may influence how practice variants are grouped. Its values need a separate *engineering grouping/coverage review*; metadata-only does not automatically mean behavioral irrelevance.

## Four CT08 item-level changes covered by a pre-existing notation-only review

The displayed `options`, `answer` (index 0), `tags` and `difficulty` did **not** change. Only the denominator notation in the question and its accompanying explanation changed:

| ID | Historical denominator | Current denominator | Answer option retained | Review concern |
|---|---|---|---|---|
| `EQ08V1_047` | `x--4` | `x+4` | \(x\ne -4\) | Check corrected notation renders clearly and has same domain |
| `EQ08V1_048` | `x--3` | `x+3` | \(x\ne -3\) | Check domain and distractors |
| `EQ08V1_049` | `x--2` | `x+2` | \(x\ne -2\) | Check domain and distractors |
| `EQ08V1_050` | `x--1` | `x+1` | \(x\ne -1\) | Check domain and distractors |

Full question pattern before/after: “Điều kiện xác định của phương trình \(\frac{x+1}{x--n}=2\) là:” → “Điều kiện xác định của phương trình \(\frac{x+1}{x+n}=2\) là:”, with \(n\in\{4,3,2,1\}\). Corresponding explanations change the denominator from `x--n` to `x+n` and continue to require \(x\ne -n\).

**Previously documented academic approval found:** `review-packets/academic-depth/ct08-p1a/01_CT08_P1A_NOTATION_ACADEMIC_LOCK_R1.json` records `NOTEBOOKLM_R1_APPROVED_NOTATION_ONLY_EXCEPTION`, with exactly these four IDs, exactly the current `question` and `explanation` replacements and unchanged `id`, `options`, `answer`, `tags`, `difficulty`. The authorization is `CLEARED_FOR_CT08_P1_IMPLEMENTATION_ONLY`. This meets the narrow notation-change review requirement **without requesting NotebookLM to repeat the existing work**; it does **not** authorize changing historical learner evidence or production Skill counters.


## R24 follow-up — previously approved CT09 delivery policy, not an open academic re-review

The current CT09 manifest explicitly declares `variant_group_policy.status = ACTIVE_CT09_P1C2`, `group_count = 27`, `affects_evidence = false`; all **120 historical questions** carry group labels and nine reviewed P1-C2 extension questions add nine structural groups (129 questions total).

This was not an undocumented change: `scripts/test-topic09-p1c1-variant-groups.js`, `scripts/test-topic09-p1c1-variant-browser.py`, `scripts/test-topic09-p1c2-integration.js`, and `scripts/test-topic09-p1c2-browser.py` already run in the public Math PR workflow. The P1-C2 academic review is recorded at `review-packets/academic-depth/ct09-p1c2/02_NOTEBOOKLM_CT09_P1C2_INTERACTIVE_R1_PASS_RECEIPT.md`, and the learner-facing follow-up QA receipt `review-packets/academic-depth/ct09-p1c2/04_CT09_P1C2_OWNER_QA_PASS.md` declares owner QA PASS for that release.

The Practice selector intentionally **prefers unseen `variant_group` values within a session**, then refills from repeated groups if needed. Thus the added metadata **can affect which question is displayed**, even though it must not change correctness, learner Skill mapping, Readiness, or mastery credit. R24 does not claim the 120 labels are behaviorally inert. Existing tests and receipts make a new general-purpose CT09 re-review unnecessary; require new review only if a regression or a changed grouping policy is discovered.

New R24 regression script `scripts/test-math-r24-ct08-source-delta-gates.js` asserts that the 4 CT08 current denominators, corresponding domain choices, reviewed Skill tag structure and the 27-group CT09 delivery safeguards remain in place. It is **technical regression only**, not NotebookLM PASS for the four edited CT08 stems.

**No new CT08 NotebookLM review needed for these exact corrections:** the prior 2026-10-03 notation-only academic lock already defines the four permitted replacements. Still pending: formally source-locking the refreshed compiled Taxonomy policy (a **separate** decision), and evidence-specific review of new candidate-bank items. Of 59 newer items, CT09 P1-C2 receipts cover exactly **nine**; the other 50 need individual provenance/evidence classification. No current catalog item receives Skill mastery or backfill authorization by this packet.

## Required review decisions

1. **Existing academic receipt reused:** the exact four CT08 corrections and invariant answer/Skill fields must continue matching `01_CT08_P1A_NOTATION_ACADEMIC_LOCK_R1.json`; fail CI on any mismatch. A new academic verdict is needed **only for a subsequent different edit**, not for the already reviewed four replacements.
2. **Existing CT09 engineering QA reused:** 120 historical questions match `review-packets/academic-depth/ct09-p1c1/01_CT09_PRACTICE_ACADEMIC_LOCK_R1.json` except for an added `variant_group`, and 129 questions currently partition into 27 validated delivery groups. Existing P1-C1/P1-C2 browser and owner QA continue to run; re-review only if this contract changes.
3. **Source integrity:** Decide whether an explicitly reviewed policy refresh is warranted. If so, regenerate correct per-chunk Git blob pins without touching historical learner data, keep stable question IDs and grading keys, and test exact-source identity. Do not simply swap all SHA values to make R22 PASS.
4. **New content:** Triage R23's 59 additional item IDs by exact live-route status, response type, source version, academic status, Skill role and answer option identity. Rich answers need their own response/grading contract.
5. **Rollout:** Even after review, R20 Skill counters are QA-only. No Readiness/Mastery authorization, no silent migration or score writes on PC/iPad.

## Narrow outstanding gate after R24

The per-question evidence is now backed by prior repo academic locks (CT08 notation-only; CT09 approved additive delivery metadata) and by the R24 all-150-record regression test. **Do not** silently rewrite the frozen Taxonomy v2 source hash pins, or give Practice-formative evidence independent Readiness/Mastery status.

The 59 newer catalog question IDs still require a topic-specific reviewed mapping inventory; nine CT09 P1-C2 question IDs have their own existing PASS and owner QA receipts, while the other 50 require status-by-ID. A separate source-provenance policy regeneration/change review can be planned with exact SHA anchoring and cross-version identity tests. Its default is HOLD. This R24 packet alone grants **no learner cutover**.

**R24 status: PRE-EXISTING REVIEW RECEIPTS LOCATED; all-150 technical regression required before any QA-only merge. No fresh NotebookLM verdict claimed or requested.**
