# Toán 10 KNTT · RD0 Chương VI R01 review candidate — Hàm số, đồ thị và ứng dụng

**PACKET_ID:** `THPT-G10-CHVI-SGK-CHAPTER-READINESS-RD0-R01-20261030`. **AUTHORING_LANE:** `AUDIT_ONLY`; **SCOPE:** `SGK_CHAPTER_READINESS:G10:CHVI` (distinct from `TOPIC_READINESS`); `RD0_ACADEMIC_PENDING`, `NOT_ACTIVE`, `NO_SCORE/NO_MASTERY`, `ASSESSMENT_ITEM_BANK=NOT_REVIEWED`, `NO_MERGE_DEPLOY`.

## 1. Original source and citation limits

- **R00 immutable Git blob:** `df7fef60a668f9c3ef74cf19f377e4805383b2ff` — `prototypes/thpt/audits/G10_CHVI_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R00_NO_ITEMS.md` (not edited); 19 original outcome/skill IDs, no changes/duplicates, **no held-out item bodies**.
- **Existing SGK/SBT candidate receipt:**  SGK Toán 10 KNTT tập 2 B15 tr.4–10, B16 tr.11–18, B17 tr.19–24, B18 tr.25–27, cuối ChVI tr.28–29; SBT tập 2 B15 tr.3–9, B16 tr.10–15, B17 tr.16–18, B18 tr.19–21, cuối ChVI tr.22–27.
- **Existing public teaching source (not independent RD0 PASS):**  prototypes/thpt/THPT_G10_CHVI_NOTEBOOKLM_ACADEMIC_VERDICT_RECEIPT_20261028.md; D6 new R01 Git blob 396585c59f902f6b4078b4b494adf53d1793f252 / Draft #642
- **SGK lessons:** B15–B18; do not infer pass of whole chapter from public D1–D6 or previously reviewed private candidate content. 

## 2. Outcome evidence/depth table

| # | Canonical OUTCOME_ID | Target evidence preserved from R00 | Common misconception preserved from R00 | Risk to check against S1 | Reviewer disposition |
|---:|---|---|---|---|---|
| 1 | `B15_OUT_01` | Khái niệm hàm số: mỗi đầu vào có đúng một đầu ra | Nhầm tập xác định và khoảng xét biến thiên; đọc đồ thị sai x/y | `VERIFY_S1_DEPTH` | `PENDING_REVIEW` |
| 2 | `B15_OUT_02` | Tập xác định, điều kiện dưới căn/mẫu | Nhầm tập xác định và khoảng xét biến thiên; đọc đồ thị sai x/y | `VERIFY_S1_DEPTH` | `PENDING_REVIEW` |
| 3 | `B15_OUT_03` | Đồ thị hàm số và quan hệ điểm (x;f(x)) | Nhầm tập xác định và khoảng xét biến thiên; đọc đồ thị sai x/y | `VERIFY_S1_DEPTH` | `PENDING_REVIEW` |
| 4 | `B15_OUT_04` | Đồng biến, nghịch biến trên khoảng thuộc tập xác định | Nhầm tập xác định và khoảng xét biến thiên; đọc đồ thị sai x/y | `VERIFY_S1_DEPTH` | `PENDING_REVIEW` |
| 5 | `B15_OUT_05` | Mô hình thực tế và miền biến hợp lí | Nhầm tập xác định và khoảng xét biến thiên; đọc đồ thị sai x/y | `CORE_VS_SUPPORT_SCOPE` | `PENDING_REVIEW` |
| 6 | `B16_OUT_01` | Hàm số bậc hai, dạng và hệ số a≠0 | Nhầm dấu hệ số a, trục đối xứng và đỉnh | `VERIFY_S1_DEPTH` | `PENDING_REVIEW` |
| 7 | `B16_OUT_02` | Tọa độ đỉnh, trục đối xứng | Nhầm dấu hệ số a, trục đối xứng và đỉnh | `VERIFY_S1_DEPTH` | `PENDING_REVIEW` |
| 8 | `B16_OUT_03` | Phác họa parabol từ đỉnh và các điểm đối xứng | Nhầm dấu hệ số a, trục đối xứng và đỉnh | `VERIFY_S1_DEPTH` | `PENDING_REVIEW` |
| 9 | `B16_OUT_04` | Tính tăng/giảm và giá trị lớn nhất/nhỏ nhất phụ thuộc dấu a | Nhầm dấu hệ số a, trục đối xứng và đỉnh | `VERIFY_S1_DEPTH` | `PENDING_REVIEW` |
| 10 | `B16_OUT_05` | Mô hình bậc hai với điều kiện thực tế | Nhầm dấu hệ số a, trục đối xứng và đỉnh | `CORE_VS_SUPPORT_SCOPE` | `PENDING_REVIEW` |
| 11 | `B17_OUT_01` | Dạng tam thức bậc hai và hệ số đầu | Bỏ nghiệm kép/biên dấu nghiêm ngặt hoặc điều kiện ∆ | `VERIFY_S1_DEPTH` | `PENDING_REVIEW` |
| 12 | `B17_OUT_02` | Bảng dấu theo Δ, kể cả nghiệm kép | Bỏ nghiệm kép/biên dấu nghiêm ngặt hoặc điều kiện ∆ | `VERIFY_S1_DEPTH` | `PENDING_REVIEW` |
| 13 | `B17_OUT_03` | Giải bất phương trình bậc hai với biên đúng | Bỏ nghiệm kép/biên dấu nghiêm ngặt hoặc điều kiện ∆ | `VERIFY_S1_DEPTH` | `PENDING_REVIEW` |
| 14 | `B17_OUT_04` | Tham số và điều kiện dấu với mọi x | Bỏ nghiệm kép/biên dấu nghiêm ngặt hoặc điều kiện ∆ | `CORE_VS_SUPPORT_SCOPE` | `PENDING_REVIEW` |
| 15 | `B17_OUT_05` | Miền giá trị thực tiễn của mô hình tam thức | Bỏ nghiệm kép/biên dấu nghiêm ngặt hoặc điều kiện ∆ | `CORE_VS_SUPPORT_SCOPE` | `PENDING_REVIEW` |
| 16 | `B18_OUT_01` | Phương trình chứa căn và điều kiện xác định | Bình phương làm phát sinh nghiệm ngoại lai; không thử lại phương trình ban đầu | `EXTRANEOUS_ROOT_DOMAIN` | `PENDING_REVIEW` |
| 17 | `B18_OUT_02` | Dạng căn bằng biểu thức, điều kiện vế không âm | Bình phương làm phát sinh nghiệm ngoại lai; không thử lại phương trình ban đầu | `EXTRANEOUS_ROOT_DOMAIN` | `PENDING_REVIEW` |
| 18 | `B18_OUT_03` | Bình phương tương đương có điều kiện và nghiệm ngoại lai | Bình phương làm phát sinh nghiệm ngoại lai; không thử lại phương trình ban đầu | `EXTRANEOUS_ROOT_DOMAIN` | `PENDING_REVIEW` |
| 19 | `B18_OUT_04` | Lọc nghiệm hợp lí trong bài toán thực tiễn | Bình phương làm phát sinh nghiệm ngoại lai; không thử lại phương trình ban đầu | `CORE_VS_SUPPORT_SCOPE` | `PENDING_REVIEW` |

## 3. Reviewer-focused S1 checkpoints

1. Xác minh đúng S1 phạm vi `B15_OUT_01..05`: quan hệ hàm số, tập xác định căn/mẫu, đồ thị, đồng/ nghịch biến, mô hình thực tế. `B15_OUT_05` ứng dụng có phải Core độc lập hay Support?
2. `B16_OUT_01..05`: với hàm số bậc hai a≠0, xác minh trục x=-b/(2a), tọa độ đỉnh, parabol, khoảng tăng/giảm, cực trị theo dấu a. `B16_OUT_05` vận dụng mô hình có thể Support; không mở rộng quá S1.
3. `B17_OUT_01..05`: bảng dấu theo Δ<0, Δ=0, Δ>0; biên bất phương trình có dấu nghiêm/nghiệm kép. Đặc biệt `B17_OUT_04` mệnh đề về tham số và mọi x: reviewer xác minh Core/Optional, điều kiện hệ số a và mức độ.
4. `B18_OUT_01..04`: phương trình có căn và các điều kiện xác định, kiểm nghiệm ngoại lai sau bình phương. `B18_OUT_04` vận dụng thực tế xác minh Core/Support.
5. Phân biệt Readiness RD0 chỉ là ma trận outcome với 18 candidate Readiness lịch sử đã reviewed một số nội dung nhưng 0 active; không gộp PASS của ứng dụng D6/#643 hay item cũ vào verdict RD0.

Check all 19 original IDs exactly; reviewers may recommend `CORE_KEEP`, `SUPPORT_ONLY`, `OPTIONAL`, `MERGE_COVERAGE`, `ADD`, `HOLD` per ID, but must not rename existing IDs or use one ID per distinct placement. Explain if an ID can share assessment evidence with another ID without collapsing skill coverage. Require source-page receipt, D1–D6 coverage reasoning, true variation of understanding/application, misconceptions and mathematical conditions. Return counts, any P0/P1/P2, MINIMAL_DELTA, final `ACADEMIC_RD0_R01_OVERALL`, `ACADEMIC_CLEARANCE_FOR_RD0_SCOPE`, `ASSESSMENT_ITEM_BANK=NOT_REVIEWED`, `RELEASE_AUTHORIZATION=NO`.

## 4. Safety and independent gates

- This file is `NO_ITEMS`: no protected question stems, distractors, answers, scoring rubric, or private exposed keys; the historic candidates are **0 active**. Do not copy one public Core/Practice item as independent readiness evidence.
- No hint/AI Tutor/correctness/keys before Final Submit in future independent testing. A demo never grants official points or Skill Mastery. Actual assessment items, exposure protection and scoring need separate content-version review/QA and explicit owner release permission; no backend/account or Firebase change approved.
- Golden THPT R4, THCS Golden UI, deep links and browser learner progress unchanged. No PR merge/deploy is authorized from reviewer RD0 clearance alone.
