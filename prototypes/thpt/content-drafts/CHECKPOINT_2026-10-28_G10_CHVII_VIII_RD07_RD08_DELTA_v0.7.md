# CHECKPOINT 2026-10-28 v0.7 · G10 VII–VIII · RD07 PASS / RD08 HOLD and revision

**Branch:** `content/thpt-g10-chvii-chviii-authoring-20261028` — independent content workstream forked from Draft PR #612 head at `20e0a6041daa6378f1d45f2b0806bc1482fd0e83`. All authoring commits in `prototypes/thpt/content-drafts/`; ChVI integration and Golden UI R4 unmodified. **NO MERGE / NO DEPLOY / NO SELF-AWARDED ACADEMIC PASS**.

## 1. Source/review verdict ledger

- `THPT-G10-CHVII-VIII-BATCH-REVIEW-20261028`: D1–D2 B19–B25 reviewed PASS, original readiness math PASS on snapshot, release NO.
- `THPT-G10-CHVII-VIII-D1D2-RD-DELTA-20261028-R1`: RD09 math/rubric/held-out PASS for replacement of retired RD02; 35/35 canonical outcome ID S1 receipts, release NO.
- `THPT-G10-CHVIII-B25-CORE-BOUNDARY-DELTA-20261028-R01`: B25-C01/C02 CORE_ELIGIBLE; B25-P02/P06, ChVIII-RD05/RD06 OPTIONAL_EXTENSION; no mandatory SGK chapter readiness for latter two. Math correctness of originals retained.
- **NEW** `THPT-G10-CHVIII-B25-READINESS-CORE-REPLACEMENTS-20261028-R1`: `RD07=PASS`, `RD08(v0.1)=HOLD`, `ACADEMIC_OVERALL=HOLD_REVISIONS_REQUIRED`, `ACADEMIC_CLEARANCE_FOR_RELEASE=NO`. RD08 was near-clone of the public D1–D2 coefficient-sum worked example. The reviewer's proposed `(x-2)^5` alternative collides with the existing `THPT-G10-B25-P04` practice polynomial. Therefore reviewer-suggested replacement **NOT directly adopted**.
- Newly authored **private candidate** `THPT-G10-CHVIII-RD08` revision `v0.2`: inverse parameter from a known coefficient + another coefficient + sum; entirely new keys and rubric, mathematically preflighted, but `RD08_V02=NOT_REVIEWED`. Real handoff `Temp_THPT_G10_CHVIII_RD08_REVISION_V02_DELTA_REVIEW_20261028.md` exists **only outside GitHub/client**; send file + short prompt per Source 06 and 07 to request delta review.

## 2. Readiness plan status, no active question engine

| SGK Chapter Readiness | Reviewer PASS candidate slots | Pending/HOLD | Remarks |
|---|---:|---:|---|
| ChVII (8 slots) | 8 | 0 | RD02 permanently RETIRED_EXPOSED; RD09 reviewed PASS in its place |
| ChVIII (6 slots) | 5 | 1 | RD01–RD04 and RD07 PASS; original RD05/RD06 optional extension only; RD08 v0.1 HOLD and v0.2 pending |
| **Total (14)** | **13** | **1** | **0** deployed; no credit/mastery |

No answer keys/stems/rubrics for revised RD08 committed to GitHub. Security requirements include protected server-side evaluation, canonical-item exposure tracking, strict Final Submit, no hint/Tutor/answer or per-question feedback before final. Not implemented or tested here.

## 3. Existing complete bank still pending D3–D4

- ChVII **36** unique existing canonical IDs (32 C/P/Application + 4 Written, one tagged Anchor); ChVIII **27** (24 C/P/Application + 3 Written, one tagged Anchor). Total **63**, all still D3–D4 not reviewed.
- 35/35 outcomes with NotebookLM-reported S1 source receipts **do not equal** 63/63 item audits or chapter Academic PASS.
- B22-C01 eccentricity flagged specialized; B25-P02, B25-P06 optional extension. Do not silently promote into Core or invent unverified runtime enum.
- Four draft SVG visuals await source-aligned D5 checks; D6 UI/browser QA not covered here.
- SGK self-contained lesson Knowledge/Core/Practice/Application + readiness **at end of chapter**; Topic self-contained Knowledge/Practice/Topic Readiness, no dedicated Core; one canonical item with placement mappings and one answer/attempt across both.

## 4. Next actions

1. Request one-ID NotebookLM `RD08 v0.2` `DELTA_C_ACADEMIC_MATERIAL` review, noting original HOLD and practice collision. **No automatic PASS.**
2. Independently continue D3–D4 batch prep for the **63 full exact** item stems/answers/solutions/rubrics with id reconciliation and complete S1 item placement. Avoid waiting for RD08 to prepare 63 bank; never transfer its verdict to the bank.
3. On new verdict, reconcile reviewer changes by Source 07 v1.1 and preserve audit chain. No merger/deployment or owner Academic PASS.

```text
D1_D2_7_LESSONS|NOTEBOOKLM_PASS_SCOPED
S1_OUTCOMES_35|REVIEWER_RECEIPTS_COMPLETE
RD02|RETIRED_EXPOSED
RD09|REVIEWED_MATH_RUBRIC_HELDOUT_PASS
CHVIII_RD05_RD06|OPTIONAL_EXTENSION_NOT_CORE
RD07|REVIEWED_PASS_CANDIDATE
RD08_V01|HOLD_NEAR_CLONE
RD08_V02|PRIVATE_DELTA_PENDING
CHAPTER_READINESS|13_PASS_CANDIDATE_SLOTS_1_HOLD_0_ACTIVE
ITEM_BANK_63|D3_D4_NOT_REVIEWED
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
MERGE_DEPLOY|NO
```
