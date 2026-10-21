# TEMP — Grade 6 Mixed Core: independent L3 cognitive challenge (five exact source items)

**PACKET_ID:** `MATH-G6-MIXED-L3-5SOURCE-RECHECK-R1-20261021`  
**Scope:** ONE targeted second opinion on five **unchanged** Grade-6 KNTT-Core Micro questions, not a new bank, not a full re-review of 21 items.  
**Release state:** `ACADEMIC_QA_ONLY|NO_LIVE_RELEASE`. No owner approval to merge/publish #559 (Grade6), #561 (Grade9), or #562 (integration-only).  
**Current academic receipt:** `MATH_20261021_NOTEBOOKLM_CT23_G9_G6_DEPTH_VERDICT_RECEIPT.md` in review-only Draft PR #560. Independent reviewer called all 21/21 Grade6 source candidates MATH PASS, selected 10 IDs with reported **4 L1 / 4 L2 / 2 L3**. This recheck does **not** automatically overturn that prior verdict.

## NotebookLM source selection
Select exactly these three sources in a new narrow review:
1. Permanent **NotebookLM Math Review Rules v1.2**.
2. Permanent **Self-Learning Math Master Plan v1.2.1** (not an older version).
3. **This temporary R1 packet**.

Do not keep unrelated or superseded batch packets selected. When quoting this packet, distinguish immutable original MCQ source from preliminary cognitive judgments. If independent primary KNTT Grade6 S1 evidence is unavailable, explicitly mark curriculum-placement re-verification `INSUFFICIENT_SOURCE`, rather than asserting new textbook facts.

## Background: fixed eight L1/L2 questions in Grade6 ten-item formative Draft #559

The first eight items below are **context only**, not re-review targets and not authorized to be re-authored:

- Current L1: `NUM02MICRO_004` (CĐ02); `RAT03MICRO_001` (CĐ03); `GEO20MICRO_003` (CĐ20); `PRO23MICRO_001` (CĐ23).
- Current L2: `NUM02MICRO_015` (CĐ02); `GEO13MICRO_019` (CĐ13); `STA21MICRO_001` (CĐ21); `PRO23MICRO_002` (CĐ23).
- Current two *reviewer-labeled* L3: `NUM02MICRO_006` (CĐ02); `STA21MICRO_013` (CĐ21).

Six topics remain represented even if the CĐ21 L3 is swapped out, because `STA21MICRO_001` remains. **Do not claim every learner-chosen subset has 4/4/2**: the student selects only Core lesson groups actually studied, possibly fewer than 10 questions. These scores are formative, not norm-referenced, independently assessed Mastery, or a Grade6 achievement certification.

## Exact five challenged source items (zero-based option indices)

### 1. NUM02MICRO_006 — currently selected L3

- Source: `docs/assets/data/practice/02-so-va-phep-tinh-micro-v1.json`; pinned Git blob `61c1e4ef1e2f0d44476c6f34f48fd7bbcce24622`.
- `card_id=num02-g6-core-2`; `grade=6`; `layer=KNTT-Core`; authored `difficulty=intermediate`; `micro_role=apply`; skill `ucln`. Draft selection group: Grade6 Core divisibility / primes / GCD / LCM (Bài 8–12) — group scope, not an original lesson field.

**Original question:** Có 24 bút và 36 quyển vở. Chia được nhiều nhất bao nhiêu phần quà giống nhau, dùng hết cả hai loại?

**Original choices:** `(0) 12 | (1) 6 | (2) 24 | (3) 60`  
**Original correct answer:** `0`  
**Original explanation:** ƯCLN(24,36)=12; mỗi phần quà có 2 bút và 3 vở.

**Challenge:** Does independently identifying GCD from a word problem count as low application L3, or straightforward recognized L2 in this context?

### 2. STA21MICRO_013 — currently selected L3; principal concern

- Source: `docs/assets/data/practice/21-thong-ke-micro-v1.json`; pinned Git blob `96b5bb27b4aec62ed69a1f591681032d5b74e507`.
- `card_id=sta21-core-5`; `grade=6`; `layer=KNTT-Core`; `lesson=Bài 41`; authored `difficulty=basic`; `micro_role=base`; skill `nhan-xet-du-lieu`.

**Original question:** Lớp 6B có 40 học sinh, mỗi em đăng ký đúng một môn: cầu lông 16, bóng rổ 12, bơi 8, cờ vua 4. Kết luận nào rút ra được trực tiếp từ dữ liệu?

**Original choices:**
- (0) Cầu lông được đăng ký nhiều nhất, chiếm 40% cả lớp.
- (1) Các bạn lớp 6B chơi cầu lông giỏi hơn cờ vua.
- (2) Tất cả các bạn lớp 6B đều biết bơi.
- (3) Số em đăng ký cờ vua chắc chắn sẽ tăng gấp đôi tháng sau.

**Original correct answer:** `0`  
**Original explanation:** Cầu lông có 16 em, nhiều nhất trong bốn môn; 16 : 40 = 40%. Ba nhận xét còn lại không được dữ liệu cho biết.

**Challenge:** Is choosing one directly data-supported statement + easy fraction calculation sufficiently L3? Or L2 interpretation? A valid answer and important data-literacy distractors do not automatically establish L3 cognition. Explain what *new choice of method or transfer* is needed, if any.

### 3. NUM02MICRO_032 — candidate substitute (reviewer-labeled L3, NOT selected)

- Source: `docs/assets/data/practice/02-so-va-phep-tinh-micro-v1.json`; pinned Git blob `61c1e4ef1e2f0d44476c6f34f48fd7bbcce24622`.
- `card_id=num02-g6-core-4`; `grade=6`; `layer=KNTT-Core`; `lesson=Bài 27`; authored `difficulty=intermediate`; `micro_role=coverage`; skill list empty (do not invent one).

**Original question:** Một đội đã trồng 18 cây, bằng 3/4 số cây theo kế hoạch. Theo kế hoạch đội phải trồng bao nhiêu cây?

**Original choices:** `(0) 24 cây | (1) 13,5 cây | (2) 21 cây | (3) 72 cây`  
**Original correct answer:** `0`  
**Original explanation:** 18 cây là 3/4 của số cây theo kế hoạch, nên số cây theo kế hoạch là 18 ÷ 3/4 = 18 × 4/3 = 24 cây.

**Challenge:** Does selecting the inverse-fraction operation from context reliably qualify as L3, and is its distinct Grade6 Core lesson group worth trading for the current Bài 41 item?

### 4. NUM02MICRO_037 — candidate substitute (reviewer-labeled L3, NOT selected)

- Source: `docs/assets/data/practice/02-so-va-phep-tinh-micro-v1.json`; pinned Git blob `61c1e4ef1e2f0d44476c6f34f48fd7bbcce24622`.
- `card_id=num02-g6-core-2`; `grade=6`; `layer=KNTT-Core`; `lesson=Bài 11-12`; authored `difficulty=intermediate`; `micro_role=coverage`; skill list empty.

**Original question:** Hai xe buýt cùng rời bến lúc 7 giờ. Xe A cứ 12 phút rời một chuyến, xe B cứ 18 phút rời một chuyến. Sau bao nhiêu phút hai xe lại cùng rời bến?

**Original choices:** `(0) 36 phút | (1) 30 phút | (2) 6 phút | (3) 216 phút`  
**Original correct answer:** `0`  
**Original explanation:** Thời gian cần tìm là bội chung nhỏ nhất của 12 và 18, nên bằng BCNN(12,18)=36 phút.

**Challenge:** Is the repeating-cycle BCNN context credible L3, and would combining it with selected `NUM02MICRO_006` be too concentrated in the same Bài 8–12 Core group / related divisor-multiple family?

### 5. PRO23MICRO_003 — candidate substitute (reviewer-labeled L3, NOT selected)

- Source: `docs/assets/data/practice/23-xac-suat-micro-v1.json`; pinned Git blob `d1c0d3dfc71418688811ab54e593707cef716162`.
- `card_id=prob23-core-1`; `grade=6`; `layer=KNTT-Core`; `lesson=Bài 42–43`; authored `difficulty=advanced`; `micro_role=apply`; skill `xac-suat-thuc-nghiem`.

**Original question:** Một hộp có một số viên bi. Mai lấy ngẫu nhiên một viên bi ra xem màu rồi trả lại vào hộp. Sau 50 lần thực hiện, Mai ghi nhận được 15 lần lấy được bi xanh, 20 lần bi đỏ và 15 lần bi vàng. Xác suất thực nghiệm của sự kiện "Mai không lấy được bi xanh" là bao nhiêu?

**Original choices:** `(0) 3/10 | (1) 2/5 | (2) 7/10 | (3) 1/3`  
**Original correct answer:** `2`  
**Original explanation:** Số lần Mai không lấy được bi xanh bằng tổng số lần lấy được bi đỏ và bi vàng: 20 + 15 = 35 lần (hoặc 50 - 15 = 35). Xác suất thực nghiệm là 35 / 50 = 7/10.

**Challenge:** Can complement-of-observed-event reasoning count as L3, or is it only L2? If substituted, does it create a structurally repetitive third probability question next to selected `PRO23MICRO_001` / `PRO23MICRO_002`?

## Independent decision requested

1. For **each exactly five IDs above**, independently give `MATH:PASS/REVISE`, `G6_CORE:VERIFIED/INSUFFICIENT_SOURCE`, `COGNITIVE:L1/L2/L3/INSUFFICIENT_EVIDENCE`, and a one-sentence **observable reasoning demand**. Do not mechanically convert authored `basic/intermediate/advanced` to L1/L2/L3 or accept a prior NotebookLM level without reasoning.
2. Compare candidates for **structural independence** relative to the eight unchanged L1/L2 questions; penalize near-clones, disproportionate concentration in one topic, and moving into a lesson the student may not yet have learned. Distinguish a valid question from a strong L3 question.
3. Determine which of the following is academically defensible: `KEEP_CURRENT_10`; `SWAP_STA21MICRO_013_FOR_NUM02MICRO_032`; `SWAP_STA21MICRO_013_FOR_NUM02MICRO_037`; `SWAP_STA21MICRO_013_FOR_PRO23MICRO_003`; or `NO_CREDIBLE_4_4_2_WITH_CURRENT_POOL`. A swap is **not** preapproved; no silent changes to question, key, historical attempts or selection group.
4. If there are not **two credible L3** within the resulting full ten, state exact defensible counts (e.g. 4/5/1) and recommend non-misleading UI wording. Do **not** fabricate 4/4/2 by renaming difficulty levels.
5. Check that all 10 source IDs remain distinct and six topical families stay present; specify **lesson-group selection/UI implications** of any proposed swap. If source grade metadata is not independently corroborated by S1, report the evidence limit, not a new curriculum ruling.

## Strict release boundary and requested machine receipt

- No new exercise authored. No edit to original 21 source items or reviewed 10-set. No migration, grading, score/Readiness/Mastery semantics or historical learner evidence change.
- Only the academic disposition is being requested; **Owner must subsequently approve any source-composition change**, then exact-head CI and real-iPad owner QA still apply.
- Existing independent NotebookLM PASS remains archived; this packet asks for a *narrow adjudication*, not retroactive erasure.

```text
PACKET_ID|MATH-G6-MIXED-L3-5SOURCE-RECHECK-R1-20261021
EXPECTED_IDS|NUM02MICRO_006,STA21MICRO_013,NUM02MICRO_032,NUM02MICRO_037,PRO23MICRO_003
REVIEWED_IDS|... (exactly 5)
NUM02MICRO_006|MATH:...|G6_CORE:...|COGNITIVE:...|REASON:...
STA21MICRO_013|MATH:...|G6_CORE:...|COGNITIVE:...|REASON:...
NUM02MICRO_032|MATH:...|G6_CORE:...|COGNITIVE:...|REASON:...
NUM02MICRO_037|MATH:...|G6_CORE:...|COGNITIVE:...|REASON:...
PRO23MICRO_003|MATH:...|G6_CORE:...|COGNITIVE:...|REASON:...
COMPOSITION_DECISION|KEEP_CURRENT_10 / SWAP_STA21MICRO_013_FOR_... / NO_CREDIBLE_4_4_2_WITH_CURRENT_POOL
EXACT_FULL_TEN_IDS|...
DEFENSIBLE_L1_L2_L3|.../.../...
STRUCTURAL_AND_LESSON_SCOPE_RISK|...
MISSING_IDS|none / ...
DUPLICATE_IDS|none / ...
UNEXPECTED_IDS|none / ...
OVERALL|PASS / REVISE_COMPOSITION / INSUFFICIENT_EVIDENCE
AUTHORIZATION|NO_LIVE_RELEASE
```
