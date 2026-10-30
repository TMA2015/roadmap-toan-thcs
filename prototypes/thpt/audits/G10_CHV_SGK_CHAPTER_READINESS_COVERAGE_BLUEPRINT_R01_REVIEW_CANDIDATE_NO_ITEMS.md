# Toán 10 KNTT — RD0 CHV R01 review candidate (Số gần đúng và thống kê)

**PACKET:** `THPT-G10-CHV-SGK-CHAPTER-READINESS-RD0-R01-20261030`. **SCOPE:** `SGK_CHAPTER_READINESS`; `AUDIT_ONLY` `NOT_ACTIVE` `NO_SCORE/NO_MASTERY`. R00 Git blob `9db11d0a83cc23084f732b75488e45df839d3e75` remains unchanged.

**SOURCE S1:** SGK Toán 10 KNTT tập 1 B12 tr.73–77, B13 tr.78–83, B14 tr.84–88, ôn ChV tr.89–90; SBT B12 tr.72–73, B13 tr.74–77, B14 tr.78–80, ôn ChV tr.81–84.
**PREVIOUSLY_REVIEWED_PUBLIC_SOURCE:** prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B14_D1D6_AUTHORING_R01_SNAPSHOT.md; Git blob(s) `49502fe39cf0a67f6a3e973a77f94164150637a7`; authoring Draft PR #639. Các verdict D1–D6 của luyện tập công khai **không cấp Academic PASS cho bài kiểm tra**.

**14 existing outcome IDs** from SGK B12–B14; not 14 real test questions. S1 source page citations are subject to review.

## Evidence-depth matrix

| # | Canonical outcome ID | Evidence intent (R00) | Misconception (R00) | Core/Support/Optional reviewer class |
|---:|---|---|---|---|
| 1 | `G10-B12-APPROX_CONCEPT` | Phân biệt số đúng, số gần đúng, số quy tròn, đơn vị đo | Dùng số đúng khi chỉ có đo ước lượng | `S1_CLASS_PENDING` |
| 2 | `G10-B12-ABS_ERROR` | Sai số tuyệt đối và d là giới hạn sai số | Khẳng định sai số thực bằng d khi chỉ biết ≤d | `S1_CLASS_PENDING` |
| 3 | `G10-B12-REL_ERROR` | Tính sai số tương đối theo ký hiệu KNTT khi số gần đúng a khác 0 | Lấy sai mẫu số hoặc quên chuyển sang % | `S1_CLASS_PENDING` |
| 4 | `G10-B12-ROUNDING` | Quy tròn đúng hàng và nêu sai số/độ chính xác phù hợp | Đổi hàng làm tròn mà không xét độ chính xác | `S1_CLASS_PENDING` |
| 5 | `G10-B13-MEAN` | Tính trung bình có/không có bảng tần số | Quên trọng số tần số | `S1_CLASS_PENDING` |
| 6 | `G10-B13-MEDIAN` | Tìm trung vị của mẫu chẵn/lẻ đã sắp | Không sắp tăng trước khi tìm vị trí giữa | `S1_CLASS_PENDING` |
| 7 | `G10-B13-QUARTILES` | Xác định Q1/Q2/Q3 theo quy ước chia nửa mẫu KNTT | Sai cách chia hai nửa khi mẫu n lẻ | `S1_CLASS_PENDING` |
| 8 | `G10-B13-MODE` | Xác định mốt và tình huống nhiều mốt/không có mốt | Đồng nhất mốt với trung bình | `S1_CLASS_PENDING` |
| 9 | `G10-B13-INTERPRETATION` | So sánh trung bình/trung vị khi có giá trị bất thường | Dùng trung bình làm đại diện duy nhất | `S1_CLASS_PENDING` |
| 10 | `G10-B14-RANGE_IQR` | Tính khoảng biến thiên và IQR=Q3−Q1 | Nhầm IQR với max−min | `S1_CLASS_PENDING` |
| 11 | `G10-B14-VARIANCE` | Tính phương sai mẫu mô tả theo mẫu số n | Chia n−1 thay cho n của SGK | `S1_CLASS_PENDING` |
| 12 | `G10-B14-STDDEV` | Độ lệch chuẩn và đơn vị dữ liệu | Nhầm đơn vị phương sai với độ lệch chuẩn | `S1_CLASS_PENDING` |
| 13 | `G10-B14-OUTLIERS` | Xét ngưỡng Q1−1,5·IQR và Q3+1,5·IQR theo bất đẳng thức chặt | Coi giá trị đúng ngưỡng là ngoại lệ | `S1_CLASS_PENDING` |
| 14 | `G10-B14-COMPARISON` | So sánh mức phân tán, các mẫu có cùng mean | Chỉ dùng mean để xếp độ ổn định | `S1_CLASS_PENDING` |

## Specific S1 reviewer checks

1. B12-ABS_ERROR: cận d khác sai số thật; B12-REL_ERROR đối chiếu mẫu số SGK.
2. B13-QUARTILES: khóa quy ước hai nửa mẫu khi n lẻ, B13-INTERPRETATION phân tầng độ sâu.
3. B14-VARIANCE: mẫu số n theo SGK, không dùng n−1.
4. B14-OUTLIERS: xác minh ngưỡng 1.5 IQR có thuộc Core; B14-COMPARISON đo phân tán đúng mức.

Require 1:1 ID receipt and per-outcome `CORE_KEEP|SUPPORT_ONLY|OPTIONAL|MERGE|ADD|HOLD` with source, common mistakes and sufficient depth; P0/P1/P2, MINIMAL_DELTA, academic verdict, source receipt and page ranges. `ASSESSMENT_ITEM_BANK=NOT_REVIEWED` and `RELEASE_AUTHORIZATION=NO`. No held-out items or keys, no answer engine, backend or account changes; no Mastery scores, Topic Readiness inference or PR merge/deploy. Public formative reviewer PASS for referenced D1–D6 content cannot be transferred to RD0.
