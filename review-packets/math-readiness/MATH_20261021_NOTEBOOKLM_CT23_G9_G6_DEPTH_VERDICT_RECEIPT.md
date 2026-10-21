# Independent NotebookLM verdict — CT23 Grade 9 Readiness and 21 Grade-6 candidate Micro
Received by Owner on 2026-10-21 in Math App chat as pasted report `Văn bản đã dán (1)(20261021-072003).txt`.

**REPORT_ID:** `MATH-TEMP-SOURCES-21CANDIDATE-CT23G9-ACADEMIC-R0-20261021`  
**Sources:** `TEMP_CT23_G9_READINESS_FULL_SCOPE_SOURCE_TRIAGE_20261021` and `TEMP_G6_CORE_MIXED_DEPTH_21_CANDIDATES_20261021` (uploaded to NotebookLM as TXT; repository snapshot MD).
**Scope:** 8 current Grade 9 Micro plus 12 original CT23 Readiness items; 21 candidate G6 source MCQs.  
**Authorization:** `AUTHORIZATION|NO_LIVE_RELEASE`. This is an independent academic verdict, not a grant of permission to publish new learner-facing questions.

## Source 1 — CT23: Grade 9 requires separate Readiness probe

```text
PACKET_ID|MATH-CT23-G9-READINESS-DEPTH-BATCH-R0-20261021
EXPECTED_ITEMS=8
REVIEWED_ITEMS=8
PRO23MICRO_021|MATH:PASS|S1_LAYER:KNTT-G9-Core|PRIMARY_SKILL:khong-gian-mau|ITEM_VERDICT:PASS
PRO23MICRO_022|MATH:PASS|S1_LAYER:KNTT-G9-Core|PRIMARY_SKILL:khong-gian-mau|ITEM_VERDICT:PASS
PRO23MICRO_023|MATH:PASS|S1_LAYER:KNTT-G9-Core|PRIMARY_SKILL:bien-co|ITEM_VERDICT:PASS
PRO23MICRO_024|MATH:PASS|S1_LAYER:KNTT-G9-Core|PRIMARY_SKILL:xac-suat-co-dien|ITEM_VERDICT:PASS
PRO23MICRO_025|MATH:PASS|S1_LAYER:KNTT-G9-Core|PRIMARY_SKILL:xac-suat-co-dien|ITEM_VERDICT:PASS
PRO23MICRO_026|MATH:PASS|S1_LAYER:KNTT-G9-Core|PRIMARY_SKILL:kiem-tra-xac-suat|ITEM_VERDICT:PASS
PRO23MICRO_027|MATH:PASS|S1_LAYER:KNTT-G9-Core|PRIMARY_SKILL:xac-suat-co-dien|ITEM_VERDICT:PASS
PRO23MICRO_028|MATH:PASS|S1_LAYER:KNTT-G9-Core|PRIMARY_SKILL:kiem-tra-xac-suat|ITEM_VERDICT:PASS
MISSING_IDS|none
DUPLICATE_IDS|none
UNEXPECTED_IDS|none
OVERALL|G9_SEPARATE_PROBE_REQUIRED
AUTHORIZATION|NO_LIVE_RELEASE
```

The existing `PROB23-CORE-READY-V1` remains a **12-item Grade 6–8 quick screen**, immutable IDs `PRO23READY_001`–`_012`, answer keys, prior records and contract. Grade 9 `PROB23-G9-CORE-READY-V1` is a **new, independent educational proposal**, NOT yet created as a live bank and not co-scored with the existing assessment. Original Grade9 Micro `PRO23MICRO_021`–`_028` passed academically **as Micro**; they do NOT thereby authorize identical derivative Readiness copies.

## Source 2 — Grade-6 cognitive classification of 21 existing Micro items

```text
PACKET_ID|MATH-G6-MIXED-DEPTH-21CANDIDATE-40-40-20-R0-20261021
EXPECTED_SOURCE_ITEMS=21
REVIEWED_SOURCE_ITEMS=21
L1_ACCEPTED|NUM02MICRO_004,NUM02MICRO_011,RAT03MICRO_001,GEO13MICRO_018,GEO20MICRO_001,GEO20MICRO_003,PRO23MICRO_001,PRO23MICRO_019
L2_ACCEPTED|NUM02MICRO_015,NUM02MICRO_020,RAT03MICRO_003,GEO13MICRO_003,GEO13MICRO_019,STA21MICRO_001,STA21MICRO_004,PRO23MICRO_002
L3_ACCEPTED|NUM02MICRO_006,NUM02MICRO_032,NUM02MICRO_037,STA21MICRO_013,PRO23MICRO_003
PROPOSED_G6_10_ID_SET|NUM02MICRO_004,RAT03MICRO_001,GEO20MICRO_003,PRO23MICRO_001,NUM02MICRO_015,GEO13MICRO_019,STA21MICRO_001,PRO23MICRO_002,NUM02MICRO_006,STA21MICRO_013
MISSING_IDS|none
DUPLICATE_IDS|none
UNEXPECTED_IDS|none
OVERALL|PASS
AUTHORIZATION|NO_LIVE_RELEASE
```

**21/21 Math PASS**, cognitively reclassified 8 L1, 8 L2, 5 L3 according to NotebookLM, independent of existing source `difficulty` labels (`basic`, `intermediate`, `advanced`). The 10 proposed **source IDs** are 4 L1 + 4 L2 + 2 L3, across six topics CĐ02/03/13/20/21/23. No new underlying learner question IDs/answer keys. The previously approved **initial** ten-item Grade6 source pilot cohort remains a valid separate reviewed historical source set (7 L1/3 L2); this new cohort is proposed as a better-composed **formative** preview, not a certified standardized grade diagnostic.

**Review caveats:** `STA21MICRO_013` is described by NotebookLM as L3, though the original question itself requests only a statement **directly supported** by presented data and an easily checked 16/40=40% ratio, and its authored metadata is `basic`. Treat the cognitive L3 label as *reviewer proposal requiring a challenge/quality check*, not proof of a genuine transfer item. Replacing it with another classified L3 candidate would require source-composition review. The reviewer also says future CĐ20 needs stronger L2/L3 geometric applications, a separate academic authoring job, not permission to create arbitrary one-off questions. In limited topic subsets, a 4:4:2 ratio is not guaranteed and must be advertised only for the **full six-topic ten-item cohort**.

## Hard protections / next action
- No merge or student live release solely on this NotebookLM receipt.
- Enforce all 10 proposed fixed IDs and cognitive profile in a **Draft PR** with new source-lock tests; CI + mobile/browser QA.
- Draft a full Grade9 independently phrased **batch** of candidate Readiness items for NotebookLM; do not add Grade9 to Grade6–8 Readiness, do not retroactively rescore history.
- Preserve 74 canonical Written, 237 existing Readiness and all Practice/Core/Skill/Mastery/Readiness progress.
