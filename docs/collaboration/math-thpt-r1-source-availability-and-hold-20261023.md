# Self-Learning Math — THPT R1: SGK source intake FOUND, TOC verified

**Packet:** MATH-THPT-SOURCE-INTAKE-R1-20261023  
**Date:** 2026-10-23  
**State:** RESEARCH_ONLY / SGK_6_OF_6_ACQUIRED / TOC_24_CHAPTER_79_LESSON_VERIFIED / OUTCOME_MAPPING_NOT_REVIEWED / NO_DEPLOY  
**Baseline:** THCS `main@680e248d4d2cff59fa69b4cbd1fe2be1083f8d1f` after PR #572.

> **Correction of the initial R1 intake:** The earlier draft marked six high-school SGK volumes NOT_ACQUIRED after searching the wrong Drive path. Owner pointed to `App Toán` → shortcut `FULL BỘ SGK TOAN KNTT LOP 6 ĐẾN 12 - HOT 26-27`. The linked root contains all Grade 6–12 volumes; all **six** Grade 10–12 scanned PDFs were acquired directly and their contents pages visually inspected. Older `SGK_HOLD` / `NOT_ACQUIRED` statements are **superseded**. Acquisition is resolved; **full per-lesson learning-outcome verification is still pending**.

## 1. S1 SGK receipts: six PDFs fetched from owner-provided Drive

These SHA-256 hashes are of the **exact PDF bytes inspected**, not of any external website. No private Google Drive IDs, links, owner identity or copyrighted textbook pages are committed here.

| Source | PDF bytes | PDF pages | SHA-256 | TOC PDF page (1-based) |
| --- | ---: | ---: | --- | ---: |
| S1-KNTT-G10-V1 | 22956643 | 106 | `3cbb335780dc0f2f4a034a55eb542e3bbe67693412b10a90ca1dffe9ea50eac2` | 5 |
| S1-KNTT-G10-V2 | 21979142 | 102 | `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6` | 4 |
| S1-KNTT-G11-V1 | 21327856 | 134 | `4492122eb2c9df626582d37b5c3d0e6513d66ca68d80d8a1e69577aa8b706828` | 5 |
| S1-KNTT-G11-V2 | 18642213 | 114 | `14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491` | 4 |
| S1-KNTT-G12-V1 | 15988398 | 104 | `faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd` | 6 |
| S1-KNTT-G12-V2 | 15891463 | 99 | `3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb` | 5 |

**Document characteristics:** all six are scanned/image-backed PDF; `pdftotext` yielded no extractable text in initial pages. Direct rendered PDF images were used to inspect the TOC. TOC observations: G10 nine chapters, 27 lesson numbers (1–27); G11 nine chapters, 33 lessons (1–33); G12 six chapters, 19 lessons (1–19). **24 chapters / 79 lessons total**, excluding end-of-chapter reviews, experiences and supplementary books. This is **TOC verified**, not a full-page accuracy/curriculum audit or claim of every content sheet being human checked.

**Related owner-provided sources:** connected folder inventory shows Grade 10 and 11 SBT volumes 1 and 2. Grade 9/12 SBT not observed in the same direct folders; no negative assertion about other storage. Original formal `Chuyên đề học tập` textbooks for Grade 10–12 are **not yet independently identified**, and are not silently conflated with the product's cross-grade topic spine.

## 2. Exact SGK chapters (read from the original six TOCs)

| Grade | Chapters |
| --- | --- |
| 10 | I Mệnh đề và tập hợp; II Bất phương trình và hệ bất phương trình bậc nhất hai ẩn; III Hệ thức lượng trong tam giác; IV Vectơ; V Các số đặc trưng của mẫu số liệu không ghép nhóm; VI Hàm số, đồ thị và ứng dụng; VII Phương pháp tọa độ trong mặt phẳng; VIII Đại số tổ hợp; IX Tính xác suất theo định nghĩa cổ điển |
| 11 | I Hàm số lượng giác và phương trình lượng giác; II Dãy số, cấp số cộng và cấp số nhân; III Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm; IV Quan hệ song song trong không gian; V Giới hạn, hàm số liên tục; VI Hàm số mũ và hàm số lôgarit; VII Quan hệ vuông góc trong không gian; VIII Các quy tắc tính xác suất; IX Đạo hàm |
| 12 | I Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số; II Vectơ và hệ trục tọa độ trong không gian; III Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm; IV Nguyên hàm và tích phân; V Phương pháp tọa độ trong không gian; VI Xác suất có điều kiện |

This TOC receipt supports a **provisional curriculum placement framework**, `docs/collaboration/math-thpt-provisional-31-topic-spine-r1-20261023.md`, NOT an academically approved 31-topic taxonomy.

## 3. Other authority / protection

- **S1 programme:** the *subject-specific* `Chương trình GDPT môn Toán` promulgated with TT 32/2018/TT-BGDĐT is **not** the same as the general `Chương trình tổng thể`. Precise outcome references for each lesson/year remain **NOT_REVIEWED**; do not manufacture them.
- **S2:** external sites were used for background navigation during early scoping. The final 24 chapter titles in this document come from **the owner's SGK PDF TOC**, not third-party listings.
- **S3:** exam format 2025+ officially announces MCQ, four-substatement True/False, short answer; Math time 90 min. The published demonstration-question count may change; never encode it as permanent. Official source: https://vqa.moet.gov.vn/vi/news/thong-bao/cau-truc-dinh-dang-de-thi-tot-nghiep-thpt-tu-nam-2025-74.html
- THCS protected: 87 approved Written, no historical re-grade, no student writes, no automatic Mastery/Readiness from practice or paper. THPT canonical IDs and learner evidence remain isolated.
- Do not publish or redistribute original SGK PDF or substantial copied pages. No new site, hosting, auth or paid API for this research.

## 4. Next academic gate after SGK acquisition

1. Construct a **79-row** `grade → SGK volume/chapter/lesson → concept/skill candidate` table with exact textbook printed pages from each lesson, then map specific `GDPT môn Toán` learning outcomes. Do not infer full scope from chapter title alone.
2. Resolve grade 9 → grade 10 prerequisite links as links, not duplicate tested credit.
3. Run independent NotebookLM source-locked review on this table and provisional topic spine, reconcile coverage and duplicates. **Academic PASS is not publication authority**.
4. Owner compares the independent Gemini topic set with our proposed 31-topic draft: KEEP/MERGE/SPLIT/OPTIONAL/HOLD.
5. After owner accepts a durable THPT Master Plan, design the first small Grade 10 lesson pilot with source-locked content, full D1–D6 review and PC/iPad QA.

**Current authorization:** `SGK_FOUND`, `TOC_VERIFIED`, `PROVISIONAL_SPINE_FOR_COMPARISON`; **NOT** `THPT_CORE_COVERAGE_PASS`, `CONTENT_AUTHORING_CLEARANCE` or `LIVE_RELEASE`.
