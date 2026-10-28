# CHECKPOINT v0.5 · G10 Chương VII–VIII · Delta R1 tiếp nhận + D3/D4 preflight

**Date:** 2026-10-28. **Source branch:** `content/thpt-g10-chvii-chviii-authoring-20261028`, originally forked from PR #612 commit `20e0a6041daa6378f1d45f2b0806bc1482fd0e83`. **Ownership:** authoring only, not ChVI integration. PR #612 workstream may advance separately; no merge/deploy.

## A. Evidence checkpoints

- `THPT-G10-CHVII-VIII-BATCH-REVIEW-20261028`: D1–D2 B19–25 academically PASS within seven exact reviewed snapshots. Original 14-item assessment candidate mathematics reviewed PASS, but original RD02 retired because of public exposure.
- `THPT-G10-CHVII-VIII-D1D2-RD-DELTA-20261028-R1`: `RD09_MATH|PASS`, `RD09_HELDOUT_ELIGIBILITY|PASS`, `RD09_RUBRIC|PASS`. Six missing exact canonical outcome rows evaluated FULL with S1 source receipt. Thus **35/35 outcome IDs have reviewer-reported S1 source receipt**, not 35/35 independent D1–D6 item verdicts.
- Both reviews explicitly `ACADEMIC_CLEARANCE_FOR_RELEASE|NO`. This authoring branch never grants owner Academic PASS.
- Retire `THPT-G10-CHVII-RD02` permanently. `THPT-G10-CHVII-RD09` is the new item for `CHVII-READ-B19-02`; stem/key/rubric must be stored only in protected candidate material, not public Git or client runtime.
- Flag P1-01 `THPT-G10-B22-C01` eccentricity specialist scope; flag P1-02 `THPT-G10-B25-P02`, `THPT-G10-B25-P06` extended Newton scope. Reviewer proposed labels `ELECTIVE_SPECIALIZED` / `SUPPORT_EXTENSION`, but **do not deploy as runtime enums** without schema/source validation.
- **Newly observed P1 consistency question:** original Math-PASS Chapter VIII readiness `THPT-G10-CHVIII-RD05` uses power 6 and `RD06` uses power 7, whereas Delta R1 suggests any `n>=6` should be extension. **Mark CORE_ELIGIBILITY_SCOPE_HOLD for RD05/RD06; math verdict unchanged.** Review separately against SGK B25 printed pp.72–77 and SBT pp.55–56 before enabling SGK Chapter Readiness. Candidate-only Temp review document generated out-of-repo: `Temp_THPT_G10_CHVIII_B25_CURRICULUM_SCOPE_CONFLICT_20261028.md`.

## B. Canonical bank preflight (GitHub actual source headings)

| Source content | ChVII | ChVIII | Total |
|---|---:|---:|---:|
| Original C/P/Application draft v0.1 | 24 | 18 | 42 |
| Incremental advanced P05/P06 draft v0.2 | 8 | 6 | 14 |
| Shared Written/Anchor candidates v0.1 | 4 | 3 | 7 |
| **Unique canonical bank IDs for D3/D4 review** | **36** | **27** | **63** |

Item heading counts read from **five original Markdown candidate files** in GitHub: 24+18+14 C/P and 4+3 Written, Anchor included in Written not double-counted. All original 63 retain existing stem/key/solution and stable identity; no duplication via Topic role/placement. A full 63/63 item-level D3–D4 review **has not yet occurred**; programmatic preflight of headings is not academic clearance.

## C. Next batch contract

- Group by chapter: ChVII 36 unique IDs, ChVIII 27 unique IDs. Provide full exact stem, solution, answer, hint or self-rubric for **each**; canonical role/placement/outcome map and S1 printed pages, plus four figure/graph SVG source receipts and D1–D2 reviewed references.
- NotebookLM must return verdict per each item and each mapped outcome, expected/reviewed ID reconciliation, missing/duplicate/clone register, D3/D4/D5/D6 coverage, S1 source receipt, P0/P1/P2 and minimal source-aligned delta.
- A reviewer should adjudicate the B22-C01 and B25-P02/P06 P1 flags and separate Chapter VIII Readiness n≥6 conflict. Do not automatically map optional material to mandatory Core.
- When actually handing over to user, adhere to Project Source 06 (real `Temp_` Markdown/TXT, 1–2 direct links or >=3 ZIP plus 3–6 sentence prompt) and Source 07 batch/delta; don't hand GitHub link in place of real file.
- S1 chapter bounds: SGK ChVII 29–58/SBT 27–49; SGK ChVIII 59–79/SBT 50–59.

## D. Governance

No edits to PR #612 integration branch, ChVI files, THCS runtime, Golden UI R4, Adaptive Knowledge Tabs v2, canonical item IDs, learner history, answer engine or production paths. Chuyên đề: exactly Kiến thức/Luyện tập/Tự kiểm tra, no separate Core tab; SGK: lesson Core and chapter-end Readiness; shared one canonical item multiple placements with learner-exposure control.

```text
D1_D2_SEVEN_LESSONS=NOTEBOOKLM_PASS_SCOPED
S1_OUTCOME_RECEIPT=35_OF_35
RD02=RETIRED_EXPOSED
RD09=MATH_RUBRIC_HELDOUT_ELIGIBILITY_REVIEW_PASS_CANDIDATE
RD05_RD06_CHVIII=CURRICULUM_SCOPE_HOLD
BANK_63=SOURCE_REGISTER_RECONCILED_D3_D4_NOT_REVIEWED
ACADEMIC_CLEARANCE_FOR_RELEASE=NO
MERGE_DEPLOY=NO
```
