# CHECKPOINT 2026-10-28 v0.8 · G10 ChVII–VIII · Readiness 14/14 candidates reviewed

**Scope / ownership:** Chapter VII–VIII authored content only, isolated branch `content/thpt-g10-chvii-chviii-authoring-20261028`; original forked commit of Draft PR #612 `20e0a6041daa6378f1d45f2b0806bc1482fd0e83`. ChVI integration, Golden UI R4, THCS, runtime and data engine belong to another workstream. No merge, no deploy, no Academic PASS awarded by assistant.

## 1. Latest owner-supplied NotebookLM result

- Packet `THPT-G10-CHVIII-RD08-V02-HELDOUT-DELTA-20261028` reviewed **only** `THPT-G10-CHVIII-RD08` v0.2, slot `CHVIII-READ-B25-02`.
- `RD08_V02_MATH=PASS`; `RD08_V02_CURRICULUM_SCOPE=PASS`; `RD08_V02_RUBRIC=PASS`; `RD08_V02_HELDOUT=PASS`. ID reconciliation: expected/reviewed 1/1, no missing/unexpected/duplicates, `ACADEMIC_OVERALL=PASS`; `ACADEMIC_CLEARANCE_FOR_RELEASE=NO`.
- v0.2 fixes the prior `RD08` v0.1 near-clone. Keep v0.1 `SUPERSEDED_HOLD`, **not** converted to PASS. Do not alter the stable, unpublished RD08 canonical ID; maintain version-aware reviewer provenance, not duplicated answer/history.
- Earlier `RD07=PASS` remains valid from its own packet. `CHVIII-RD05` and `CHVIII-RD06` remain `OPTIONAL_EXTENSION`, correct mathematically but **excluded from mandatory SGK chapter Readiness**; no change to their original canonical IDs.
- `CHVII-RD02=RETIRED_EXPOSED_CANDIDATE` permanently; `CHVII-RD09=REVIEW_PASS_CANDIDATE` from separate delta, not released.

## 2. Gate-by-gate status

| Gate | Coverage / status | What it DOES NOT mean |
|---|---|---|
| D1/D2 Knowledge & worked examples | 7 lessons B19–B25 snapshot-scoped NotebookLM PASS | Not a full chapter D1–D6 PASS |
| S1 35 canonical outcome IDs | 35/35 reviewer-reported source receipts FULL within reported scopes | Not 63 reviewed item solutions |
| SGK chapter-end Readiness candidate slots | **14/14 academically reviewed eligible** (ChVII 8/8, ChVIII 6/6) | Not secure active server bank; not learner mastery |
| 63 unique C/P/Application/Written IDs | 36 ChVII + 27 ChVIII; 7 Written incl. 2 Anchor tags | **All D3/D4 item-level review still pending** |
| D5 figure audits | 4 draft SVG available | Figure/source and accessibility QA still pending |
| D6 Golden UI/browser/integration | R4 unchanged | Not tested here |
| Independent Topic 10–12 path | General policy understood, only partial mappings in G10 source | Not academic completion of full Topic path |

**Reviewed chapter slots mapping (metadata only, no stems/keys):**
- Chapter VII 8: `THPT-G10-CHVII-RD01, RD03, RD04, RD05, RD06, RD07, RD08, RD09`. All reviewers Math/Rubric/Eligibility scoped (RD09 separately); RD02 retired, never reuse.
- Chapter VIII 6: `THPT-G10-CHVIII-RD01, RD02, RD03, RD04, RD07, RD08(v0.2)`. RD08 newly passed, RD05/RD06 optional only.
- **0/14 active student-facing Readiness slots**: server storage, graded Final Submit, response normalization, exposure control, source/answer isolation have not been implemented/verified by this branch. Student did not submit or earn credit.
- Scope flags: `THPT-G10-B22-C01` eccentricity hold specialized; `THPT-G10-B25-P02` and `B25-P06` optional extension; `B25-C01/C02` Core eligible. Reviewer-proposed metadata value names are not proven runtime enums.

## 3. Immediate authoring/review next step

**D3/D4 exact-item academic review of 63 existing canonical bank IDs**, grouped by chapter (ChVII=36, ChVIII=27). Five current source Markdown files remain unchanged:
1. `prototypes/thpt/shared-items/THPT_G10_CHVII_B19_B22_CORE_PRACTICE_CANDIDATES_v0.1.md` (24);
2. `prototypes/thpt/shared-items/THPT_G10_CHVIII_B23_B25_CORE_PRACTICE_CANDIDATES_v0.1.md` (18);
3. `prototypes/thpt/shared-items/THPT_G10_CHVII_CHVIII_ADVANCED_PRACTICE_CANDIDATES_v0.2.md` (14; ChVII 8 / ChVIII 6);
4. `prototypes/thpt/shared-items/THPT_G10_CHVII_WRITTEN_ANCHOR_CANDIDATES_v0.1.md` (4);
5. `prototypes/thpt/shared-items/THPT_G10_CHVIII_WRITTEN_ANCHOR_CANDIDATES_v0.1.md` (3).

Reviewer must receive actual full item stems, answer, mathematical worked solution, hint, written rubric, stable ID, SGK/Topic placement, 35-outcome crosswalk, source-page S1 receipts, diagram dependency where applicable. **Do not claim D3/D4 ready for NotebookLM from links/ID-only manifest**. When materials are assembled, deliver real `Temp_` Markdown/TXT file(s) with 3–6 sentence prompt same response (1–2 individually, >=3 in a Temp_ ZIP; extract first), per Protocol 06 and Delta Policy 07. Do not upload review JSON or use Permanent v1.0.

The review should evaluate arithmetic errors, circular math, missing cases, S1 scope and depth, answer/hint leaking, item clones across Practice/Written, Core vs Optional, diagram-source and correct handling of student answer equivalence. No cloning canonical item to share SGK-Core and Topic-Practice.

## 4. Non-negotiable architecture
- SGK KNTT is a complete independent path: Kiến thức, lesson Core, Luyện tập/Vận dụng, **Tự kiểm tra cuối chương**.
- Chuyên đề is also complete independently with exactly **Kiến thức / Luyện tập / Tự kiểm tra Chuyên đề**; no dedicated Topic Core.
- One canonical item/answer/attempt/history with role and placement mappings; no readiness credit from seen Practice, no hint/Tutor/feedback before Final Submit.
- Golden UI R4, knowledge tabs 1/2 levels and existing interfaces retained; only Topic menu 4→3 as separately approved, not performed in this branch.

```text
RD08_V02|SCOPED_NOTEBOOKLM_PASS
RD08_V01|HOLD_SUPERSEDED
CHVII_READY_CANDIDATES|8_OF_8_REVIEWED
CHVIII_READY_CANDIDATES|6_OF_6_REVIEWED
SGK_CHAPTER_READINESS_PLANNED|14_OF_14_REVIEWED_CANDIDATES
SGK_CHAPTER_READINESS_ACTIVE|0_OF_14
CORE_PRACTICE_WRITTEN_BANK|63_EXISTING_D3_D4_NOT_REVIEWED
WHOLE_CHAPTER_ACADEMIC_PASS|NO
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
MERGE_DEPLOY|NO
```
