# Toán 10 KNTT — RD0 CHIV R01 review candidate (Vectơ)

**PACKET:** `THPT-G10-CHIV-SGK-CHAPTER-READINESS-RD0-R01-20261030`. **SCOPE:** `SGK_CHAPTER_READINESS`; `AUDIT_ONLY` `NOT_ACTIVE` `NO_SCORE/NO_MASTERY`. R00 Git blob `c0386bc35a455a4b2d5eb95e542b1c328688d5c6` remains unchanged.

**SOURCE S1:** SGK Toán 10 KNTT tập 1 B07 tr.46–50, B08 tr.51–54, B09 tr.55–59, B10 tr.60–65, B11 tr.66–70, ôn ChIV tr.71–72; SBT B07 tr.45–47, B08 tr.48–50, B09 tr.51–54, B10 tr.55–58, B11 tr.59–65, ôn ChIV tr.66–71.
**PREVIOUSLY_REVIEWED_PUBLIC_SOURCE:** prototypes/thpt/content-drafts/THPT_G10_CHIV_B07_B08_D1D6_AUTHORING_R01_SNAPSHOT.md + prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_B11_D1D6_AUTHORING_R01_SNAPSHOT.md; Git blob(s) `42b206e31421b33860a1bf697d2d04b7aba992cf + a9f6fab820559a8da98a5a42cd9902dbf9891f34`; authoring Draft PR #634 và #637. Các verdict D1–D6 của luyện tập công khai **không cấp Academic PASS cho bài kiểm tra**.

**24 existing outcome IDs** from SGK B07–B11; not 24 real test questions. S1 source page citations are subject to review.

## Evidence-depth matrix

| # | Canonical outcome ID | Evidence intent (R00) | Misconception (R00) | Core/Support/Optional reviewer class |
|---:|---|---|---|---|
| 1 | `G10-B07-DEFINITION` | Nhận diện vectơ có điểm đầu/cuối, vectơ-không và phân biệt với độ dài | Đọc vectơ AB thành vectơ BA | `S1_CLASS_PENDING` |
| 2 | `G10-B07-DIRECTION` | Đọc cùng phương, cùng hướng, ngược hướng theo quy ước SGK/SBT | Áp kết luận khác không cho vectơ-không mà không xét quy ước | `S1_CLASS_PENDING` |
| 3 | `G10-B07-EQUALITY` | Chứng minh/nhận biết hai vectơ bằng nhau | Nhầm cùng độ dài với bằng vectơ | `S1_CLASS_PENDING` |
| 4 | `G10-B07-LENGTH` | Tính/so sánh độ dài vectơ trong hình hình học cơ bản | Dùng độ dài có dấu âm | `S1_CLASS_PENDING` |
| 5 | `G10-B07-ZERO` | Xác định và xử lý vectơ-không theo quy ước SBT KNTT | Phủ nhận quy ước zero cùng phương/cùng hướng với mọi vectơ | `S1_CLASS_PENDING` |
| 6 | `G10-B08-TRIANGLE` | Sử dụng quy tắc tam giác cộng vectơ và đường gấp khúc | Đổi sai điểm đầu/cuối nối tiếp | `S1_CLASS_PENDING` |
| 7 | `G10-B08-PARALLELOGRAM` | Dùng quy tắc hình bình hành của hai vectơ cùng gốc | Lấy sai đường chéo tổng | `S1_CLASS_PENDING` |
| 8 | `G10-B08-OPPOSITE` | Chuyển hiệu thành tổng vectơ đối và dùng đúng chiều | Nhầm AB−AC với BC | `S1_CLASS_PENDING` |
| 9 | `G10-B08-MIDPOINT` | Vận dụng vectơ ở trung điểm đoạn thẳng | Lấy vectơ AM=−MB | `S1_CLASS_PENDING` |
| 10 | `G10-B08-CENTROID` | Hệ thức vectơ trọng tâm tam giác | Nhầm điểm trọng tâm với trung điểm | `S1_CLASS_PENDING` |
| 11 | `G10-B09-SCALAR_DEFINITION` | Đọc tích k·u, trường hợp k=0 hoặc u=0 | Suy hướng khi một vectơ là zero | `S1_CLASS_PENDING` |
| 12 | `G10-B09-LENGTH_DIRECTION` | Dấu k quyết định hướng, độ dài \|k\|\|u\| | Coi độ dài âm khi k<0 | `S1_CLASS_PENDING` |
| 13 | `G10-B09-DISTRIBUTION` | Dùng tính phân phối và kết hợp của phép nhân vô hướng | Sai phân phối k(u+v) | `S1_CLASS_PENDING` |
| 14 | `G10-B09-COLLINEAR` | Nhận biết vectơ cùng phương bằng bội k với điều kiện zero | Áp hệ số k≠0 sai cho vectơ-không | `S1_CLASS_PENDING` |
| 15 | `G10-B09-MIDPOINT_CENTROID` | Biểu thị hệ thức trung điểm/trọng tâm bằng tổ hợp vectơ | Sai tỉ số AG:AM=2:3 | `S1_CLASS_PENDING` |
| 16 | `G10-B10-VECTOR_COORDS` | Tọa độ AB=(xB−xA;yB−yA) | Lấy tọa độ điểm B làm tọa độ AB | `S1_CLASS_PENDING` |
| 17 | `G10-B10-OPERATIONS` | Cộng/trừ/nhân số vectơ theo từng thành phần | Nhân số với một tọa độ duy nhất | `S1_CLASS_PENDING` |
| 18 | `G10-B10-NORM_DISTANCE` | Tính chuẩn vectơ và khoảng cách giữa hai điểm | Bỏ căn hoặc lấy tổng bình phương thành khoảng cách | `S1_CLASS_PENDING` |
| 19 | `G10-B10-COLLINEAR_COORDS` | Kiểm cùng phương qua định thức tọa độ, nêu điều kiện | Dùng phép chia tọa độ với mẫu bằng 0 | `S1_CLASS_PENDING` |
| 20 | `G10-B10-MIDPOINT_CENTROID` | Tọa độ trung điểm/trọng tâm tam giác | Nhầm trung bình 2 và trung bình 3 tọa độ | `S1_CLASS_PENDING` |
| 21 | `G10-B11-GEOMETRIC_DOT` | Tính tích vô hướng qua cos góc giữa hai vectơ khác không | Không kiểm góc hoặc sai cos góc tù | `S1_CLASS_PENDING` |
| 22 | `G10-B11-COORDINATE_DOT` | Tính tích vô hướng qua cặp tọa độ | Nhầm tổng tọa độ với tổng tích theo thành phần | `S1_CLASS_PENDING` |
| 23 | `G10-B11-PERPENDICULAR` | Suy vuông góc khi tích vô hướng 0 và hai vectơ khác không | Kết luận vuông góc với vectơ-không | `S1_CLASS_PENDING` |
| 24 | `G10-B11-APPLICATION` | Giải bài toán góc/độ dài/lực bằng tích vô hướng | Sai đơn vị hoặc bỏ điều kiện mô hình | `S1_CLASS_PENDING` |

## Specific S1 reviewer checks

1. Vectơ-không: G10-B07-ZERO, DIRECTION và G10-B09-COLLINEAR; khóa quy ước SGK và điều kiện góc/hướng.
2. Đo độ sâu trung điểm/trọng tâm qua B08/B09, xem mục nào gộp evidence mà giữ nguyên ID.
3. Cùng phương B10 tránh chia tọa độ bằng 0; tích vô hướng B11 kiểm hai vectơ khác 0 khi xét góc/vuông góc.
4. Vận dụng lực B11: phân tầng đúng SGK/SBT, không đưa vật lí chuyên sâu vào Core.

Require 1:1 ID receipt and per-outcome `CORE_KEEP|SUPPORT_ONLY|OPTIONAL|MERGE|ADD|HOLD` with source, common mistakes and sufficient depth; P0/P1/P2, MINIMAL_DELTA, academic verdict, source receipt and page ranges. `ASSESSMENT_ITEM_BANK=NOT_REVIEWED` and `RELEASE_AUTHORIZATION=NO`. No held-out items or keys, no answer engine, backend or account changes; no Mastery scores, Topic Readiness inference or PR merge/deploy. Public formative reviewer PASS for referenced D1–D6 content cannot be transferred to RD0.
