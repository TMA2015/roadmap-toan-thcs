# CHECKPOINT 2026-10-28 v1.3 — G10 ChI Readiness 8/8 PASS, D5 visual review-ready

**Academic-only branch; no release. Owner-approved priority: SGK Grade 10 ChI–V first, then 11/12.** Keep previously reviewed G10 ChVI–IX and Topic Xác suất unchanged. Website Golden UI R4, backend, D6, merge/deploy belong to separate conversation.

## NotebookLM latest private ChI readiness R0

```text
PACKET_ID|THPT-G10-CHI-SGK-CHAPTER-READINESS-EIGHT-HELDOUT-20261028-R0
SOURCE_RECEIPT_G10_SGK|SGK_TOAN_10_TAP_1_KNTT,TRANG_6-21
SOURCE_RECEIPT_G10_SBT|SBT_TOAN_10_TAP_1_KNTT,TRANG_5-15
PREVIOUS_VERDICTS_PRESERVED|G10_CHI_D1D2_PASS;G10_CHI_D3D4_16ITEMS_PASS
SLOT_REGISTER|EXPECTED=8|REVIEWED=8|MISSING=0|UNEXPECTED=0|DUPLICATED=0
RD01_RD08|ALL_8_PASS
OUTCOME_COVERAGE|10_OF_10
HELDOUT_NONCLONE|PASS
P0_ERRORS|0
P1_WARNINGS|3
P2_NOTICES|1
ACADEMIC_OVERALL_G10_CHI_READINESS|PASS
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
```

**Public academic records, metadata only:** `prototypes/thpt/content-drafts/THPT_G10_CHI_SGK_PRIVATE_READINESS_8_NOTEBOOKLM_R0_PASS_RECEIPT_20261028.md` and `prototypes/thpt/content-drafts/THPT_G10_CHI_PRIVATE_CHAPTER_READINESS_8_ID_ONLY_INDEX_v0.2.md`. These contain **NO 8 protected stems/answers/keys/rubrics**, just identifiers and reviewer verdict. Eight private questions remain **0 activated**. Cross-route exposure log, server-only keys and no hint/feedback/Tutor/answers before Final Submit are implementation gates, not academic authoring tasks.

## D5 new real assets and review transport

```text
PACKET_ID|THPT-G10-CHI-D5-VENN-AXIS-SVG-20261028-R0
D5_SOURCE_SVGS|2
D5_RENDERED_PNG_PREVIEWS|2
D5_REVIEW_MARKDOWN|1
REVIEW_HANDOFF_ZIP|Temp_THPT_G10_CHI_D5_VENN_AXIS_5FILE_REVIEW_20261028.zip
ZIP_SHA256|0569d920a3af9fef18f02314c8d5aba0eb843c66e181d585d53906e10a3deccb
D5_EXTERNAL_NOTEBOOKLM_VERDICT|PENDING
```

- D5 Venn 4-operation SVG source SHA-256 `0ff6fbc532e1e0f1d49a447d0a2e87e73a4c9d680e2f30adb0c50b4cfc273159`, covering A∪B/A∩B/A-minus-B/U-minus-A, local rendering inspected and incorrect-mask overlap fixed **before** review snapshot.
- D5 interval SVG source SHA-256 `972c50716acdafb24bd63825a25fba07c6549db71f5fc914ec9d31641041ce86`, covering A=[-2,3), B=(1,5], intersection (1,3), union [-2,5], difference [-2,1]. Endpoint tests passed locally, label spacing corrected before snapshot.
- Exact SVG bytes, PNG previews, and source-embedded Markdown are in the **five-file real Temp ZIP**. **Unzip before loading NotebookLM** (06 rule for 3+); send it with a short prompt, never JSON. Actual SVG/PNG files are **not yet GitHub production assets**. Public academic hash/asset register: `prototypes/thpt/content-drafts/THPT_G10_CHI_D5_VENN_INTERVAL_SVG_CANDIDATE_REGISTER_v0.1_20261028.md`.

## Current academic status and sequence

| Unit | Verified |
|---|---|
| G10 ChI Knowledge/Examples D1D2 | NotebookLM PASS |
| G10 ChI D3D4 16 canonical Core/Practice/Written | NotebookLM PASS |
| G10 ChI independent private Chapter Readiness | **8/8 NotebookLM PASS**, not active |
| G10 ChI D5 visual maths | 2 source SVG + 2 PNG review-ready, external PASS **PENDING** |
| G10 ChI final whole chapter | **NOT YET PASS**, awaits D5 and full scope reconciliation |
| Next academic chapter | **G10 ChII B03/B04**, requires original SGK/SBT S1 receipt |
| G10 ChVI–IX | Existing scoped PASS preserved |

Golden UI R4 unchanged, SGK complete chapter-end readiness, Topic exactly Knowledge/Practice/Topic Readiness (no separate Topic Core), one canonical item/answer/history shared via role mapping. No new GitHub keys, no site changes, no merge/deploy, no self-issued Academic PASS.

```text
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
MERGE_DEPLOY|NO
```
