# Independent NotebookLM receipt — Grade6 Mixed-Core L3 five-source recheck

**Report received:** 2026-10-21, provided by Project Owner in Math App conversation.  
**Packet:** `MATH-G6-MIXED-L3-5SOURCE-RECHECK-R1-20261021`  
**Temporary source:** `TEMP_G6_MIXED_L3_FIVE_SOURCE_COGNITIVE_RECHECK_R1_20261021.md`  
**Source of verdict:** Owner-supplied independent NotebookLM report, **not independently reconfirmed by this repository receipt against S1 textbook scan**. The reviewer reports KNTT Grade6 as VERIFIED for all five candidates.  
**Release:** `AUTHORIZATION|NO_LIVE_RELEASE`.

## Academic resolution

All five original MCQs are marked mathematically PASS. Review reclassifies `STA21MICRO_013` as **L2**, not L3; `PRO23MICRO_003` as L2; and `NUM02MICRO_006`, `NUM02MICRO_032`, `NUM02MICRO_037` as L3. The proposed learner-facing formative **full ten-ID set** replaces `STA21MICRO_013` with **`NUM02MICRO_032`** (Grade6, Bài 27, `num02-g6-core-4`, 18 ÷ 3/4 = 24), while retaining the other 9 original IDs. This preserves six topic families. Both L3 happen to be CĐ02, but from distinct learning units and operations (ƯCLN Bài 8–12 vs inverse fraction Bài 27), unlike the related BCNN alternative `NUM02MICRO_037`.

**Cognitive mix for the full 10-item QA cohort, according to this NotebookLM judgment only:**
- L1 (4): `NUM02MICRO_004`, `RAT03MICRO_001`, `GEO20MICRO_003`, `PRO23MICRO_001`.
- L2 (4): `NUM02MICRO_015`, `GEO13MICRO_019`, `STA21MICRO_001`, `PRO23MICRO_002`.
- L3 (2): `NUM02MICRO_006`, `NUM02MICRO_032`.

**UI scope caveat:** Students select **only Core lesson groups they have already studied**. The Grade6 Bài 27 fraction group must be independent of CĐ02 Bài 8–12 and Bài 28–31; do not silently insert it if unselected. Shorter subsets have different counts and difficulty distributions; **do not label them 4–4–2 or compare them as standardized achievement**. The ten-item set is a formative exercise, never automatic Core Readiness, Skill, or Mastery.

## Machine-checkable verdict — verbatim Owner-provided review

```text
PACKET_ID|MATH-G6-MIXED-L3-5SOURCE-RECHECK-R1-20261021
EXPECTED_IDS|NUM02MICRO_006,STA21MICRO_013,NUM02MICRO_032,NUM02MICRO_037,PRO23MICRO_003
REVIEWED_IDS|NUM02MICRO_006,STA21MICRO_013,NUM02MICRO_032,NUM02MICRO_037,PRO23MICRO_003
NUM02MICRO_006|MATH:PASS|G6_CORE:VERIFIED|COGNITIVE:L3|REASON:Mô hình hóa bài toán thực tế chia quà về phép tìm ƯCLN(24, 36) = 12.
STA21MICRO_013|MATH:PASS|G6_CORE:VERIFIED|COGNITIVE:L2|REASON:Đọc bảng số liệu, tính tỉ lệ % đơn giản (16/40 = 40%) và loại trừ nhận định không có căn cứ.
NUM02MICRO_032|MATH:PASS|G6_CORE:VERIFIED|COGNITIVE:L3|REASON:Nhận diện bài toán thực tế tìm một số biết giá trị phân số của nó và thực hiện phép chia 18 ÷ 3/4 = 24.
NUM02MICRO_037|MATH:PASS|G6_CORE:VERIFIED|COGNITIVE:L3|REASON:Mô hình hóa bài toán chu kỳ lặp hai xe buýt về BCNN(12, 18) = 36, trùng nhóm bài học Bài 8–12 với NUM02MICRO_006.
PRO23MICRO_003|MATH:PASS|G6_CORE:VERIFIED|COGNITIVE:L2|REASON:Tính xác suất thực nghiệm biến cố bù (50-15)/50 = 7/10 ở mức Thông hiểu, gây trùng lặp với PRO23MICRO_001/002.
COMPOSITION_DECISION|SWAP_STA21MICRO_013_FOR_NUM02MICRO_032
EXACT_FULL_TEN_IDS|NUM02MICRO_004,RAT03MICRO_001,GEO20MICRO_003,PRO23MICRO_001,NUM02MICRO_015,GEO13MICRO_019,STA21MICRO_001,PRO23MICRO_002,NUM02MICRO_006,NUM02MICRO_032
DEFENSIBLE_L1_L2_L3|4/4/2
STRUCTURAL_AND_LESSON_SCOPE_RISK|Duy trì đủ 6 chuyên đề CĐ02,03,13,20,21,23. Hai câu L3 CĐ02 thuộc 2 nhóm bài khác nhau (Tập 1 Bài 8–12 và Tập 2 Bài 27).
MISSING_IDS|none
DUPLICATE_IDS|none
UNEXPECTED_IDS|none
OVERALL|PASS
AUTHORIZATION|NO_LIVE_RELEASE
```

## Protected implementation boundary

- This is **one independent report**, not Owner's separate permission to publish. Archive it in **review-only Draft #560**. A *separate* Grade6 feature Draft #559 may implement the recommended one-ID composition as a **QA candidate**, subject to exact-head CI and manual real-iPad/Safari Owner acceptance.
- Keep source original `item_id`, question, options, key, source Core card and curriculum placement unchanged. In the QA manifest remove only the `STA21MICRO_013` *reference*; add only the `NUM02MICRO_032` *reference* and its separate Bài 27 selection group. The original CĐ21 question remains in its canonical Micro source and existing usage.
- Preserve six topic families, all existing 74 canonical Written, 237 topical Readiness items, Practice banks, stored learner attempts, and the independent Grade9 QA boundary.
- Do not merge review-only Draft #560 nor multi-feature QA union #562; no live deployment by default.
