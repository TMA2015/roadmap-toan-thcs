# Toán 10 KNTT — Chương IV (Vectơ) · SGK Chapter Readiness Blueprint R00

**STATE:** `ASSESSMENT_OUTCOME_BLUEPRINT_ONLY` · `NOT_NOTEBOOKLM_REVIEWED_AS_READINESS` · `NOT_ACTIVE / NO_SCORE / NO_MASTERY`.
**SCOPE:** `SGK_CHAPTER_READINESS:G10:CHIV`; **B07–B11**, khác phạm vi `TOPIC_READINESS`.
**SOURCE S1:** SGK Toán 10 KNTT tập 1 B07 tr.46–50, B08 tr.51–54, B09 tr.55–59, B10 tr.60–65, B11 tr.66–70, ôn ChIV tr.71–72; SBT B07 tr.45–47, B08 tr.48–50, B09 tr.51–54, B10 tr.55–58, B11 tr.59–65, ôn ChIV tr.66–71.
**PREVIOUSLY_REVIEWED_PUBLIC_SOURCE:** prototypes/thpt/content-drafts/THPT_G10_CHIV_B07_B08_D1D6_AUTHORING_R01_SNAPSHOT.md + prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_B11_D1D6_AUTHORING_R01_SNAPSHOT.md; Git blob(s) `42b206e31421b33860a1bf697d2d04b7aba992cf + a9f6fab820559a8da98a5a42cd9902dbf9891f34`; authoring Draft PR #634 và #637. Các verdict D1–D6 của luyện tập công khai **không cấp Academic PASS cho bài kiểm tra**.

## Outcome coverage đề xuất (chỉ metadata, không chứa câu hỏi)

| Outcome đã có trong gói SGK Core/Practice | Cần kiểm tra độc lập ở cuối chương | Lỗi/hổng thường gặp cần phát hiện |
|---|---|---|
| `G10-B07-DEFINITION` | Nhận diện vectơ có điểm đầu/cuối, vectơ-không và phân biệt với độ dài | Đọc vectơ AB thành vectơ BA |
| `G10-B07-DIRECTION` | Đọc cùng phương, cùng hướng, ngược hướng theo quy ước SGK/SBT | Áp kết luận khác không cho vectơ-không mà không xét quy ước |
| `G10-B07-EQUALITY` | Chứng minh/nhận biết hai vectơ bằng nhau | Nhầm cùng độ dài với bằng vectơ |
| `G10-B07-LENGTH` | Tính/so sánh độ dài vectơ trong hình hình học cơ bản | Dùng độ dài có dấu âm |
| `G10-B07-ZERO` | Xác định và xử lý vectơ-không theo quy ước SBT KNTT | Phủ nhận quy ước zero cùng phương/cùng hướng với mọi vectơ |
| `G10-B08-TRIANGLE` | Sử dụng quy tắc tam giác cộng vectơ và đường gấp khúc | Đổi sai điểm đầu/cuối nối tiếp |
| `G10-B08-PARALLELOGRAM` | Dùng quy tắc hình bình hành của hai vectơ cùng gốc | Lấy sai đường chéo tổng |
| `G10-B08-OPPOSITE` | Chuyển hiệu thành tổng vectơ đối và dùng đúng chiều | Nhầm AB−AC với BC |
| `G10-B08-MIDPOINT` | Vận dụng vectơ ở trung điểm đoạn thẳng | Lấy vectơ AM=−MB |
| `G10-B08-CENTROID` | Hệ thức vectơ trọng tâm tam giác | Nhầm điểm trọng tâm với trung điểm |
| `G10-B09-SCALAR_DEFINITION` | Đọc tích k·u, trường hợp k=0 hoặc u=0 | Suy hướng khi một vectơ là zero |
| `G10-B09-LENGTH_DIRECTION` | Dấu k quyết định hướng, độ dài |k||u| | Coi độ dài âm khi k<0 |
| `G10-B09-DISTRIBUTION` | Dùng tính phân phối và kết hợp của phép nhân vô hướng | Sai phân phối k(u+v) |
| `G10-B09-COLLINEAR` | Nhận biết vectơ cùng phương bằng bội k với điều kiện zero | Áp hệ số k≠0 sai cho vectơ-không |
| `G10-B09-MIDPOINT_CENTROID` | Biểu thị hệ thức trung điểm/trọng tâm bằng tổ hợp vectơ | Sai tỉ số AG:AM=2:3 |
| `G10-B10-VECTOR_COORDS` | Tọa độ AB=(xB−xA;yB−yA) | Lấy tọa độ điểm B làm tọa độ AB |
| `G10-B10-OPERATIONS` | Cộng/trừ/nhân số vectơ theo từng thành phần | Nhân số với một tọa độ duy nhất |
| `G10-B10-NORM_DISTANCE` | Tính chuẩn vectơ và khoảng cách giữa hai điểm | Bỏ căn hoặc lấy tổng bình phương thành khoảng cách |
| `G10-B10-COLLINEAR_COORDS` | Kiểm cùng phương qua định thức tọa độ, nêu điều kiện | Dùng phép chia tọa độ với mẫu bằng 0 |
| `G10-B10-MIDPOINT_CENTROID` | Tọa độ trung điểm/trọng tâm tam giác | Nhầm trung bình 2 và trung bình 3 tọa độ |
| `G10-B11-GEOMETRIC_DOT` | Tính tích vô hướng qua cos góc giữa hai vectơ khác không | Không kiểm góc hoặc sai cos góc tù |
| `G10-B11-COORDINATE_DOT` | Tính tích vô hướng qua cặp tọa độ | Nhầm tổng tọa độ với tổng tích theo thành phần |
| `G10-B11-PERPENDICULAR` | Suy vuông góc khi tích vô hướng 0 và hai vectơ khác không | Kết luận vuông góc với vectơ-không |
| `G10-B11-APPLICATION` | Giải bài toán góc/độ dài/lực bằng tích vô hướng | Sai đơn vị hoặc bỏ điều kiện mô hình |

**Đếm coverage:** 24 outcome ID trong nguồn học liệu công khai đã review, không phải 24 câu kiểm tra mới. `item_id` của private Chapter Readiness **chưa tạo**, số lượng câu, blueprint độ khó/phân tầng và kiểm soát tiếp xúc phải được reviewer xác nhận trên S1 (bao gồm bài tập cuối chương).

## Assessment contract độc lập, không trộn với luyện tập

1. Không đưa thân câu, đáp án, lời giải, rubric, thông số chấm của bài held-out lên GitHub Pages/MkDocs/JS; **không tạo backend hay tài khoản mới** khi chưa có quyết định chủ dự án.
2. Câu đánh giá chính thức phải là chứng cứ độc lập; kiểm `item_id`, `content_version`, độ tiếp xúc và không lấy nguyên câu Core/Practice đã xem để chứng minh Readiness.
3. Phạm vi `SGK_CHAPTER_READINESS` chỉ thuộc Chương IV; Chuyên đề có `TOPIC_READINESS` và coverage riêng; không lấy một verdict thay verdict kia.
4. Trước **Final Submit** không có D6, hint, AI Tutor, đáp án, thông báo đúng/sai; cho phép chuyển câu và sửa lựa chọn. Demo chỉ hiển thị `NO_SCORE/NO_MASTERY`.
5. Trước khi phát hành, NotebookLM phải review riêng outcome coverage và các câu held-out thực tế theo S1; QA engine, an toàn đề, browser/device, THCS hồi quy; sau đó cần chủ dự án phê duyệt rõ ràng.
6. Một câu một canonical ID, placement đánh giá riêng; Written/Anchor chung thư viện, không nhân bản answer/rubric.

## Các cổng còn HOLD
- [ ] Outcome/độ khó/độ sâu **riêng cho Readiness** được NotebookLM duyệt.
- [ ] Bảo vệ câu hỏi/khóa chấm khỏi gói public, duyệt từng item mới.
- [ ] Kiểm exposure câu hỏi và ranh giới hai nhánh.
- [ ] Engine đánh giá Final Submit, bảo mật, score/Mastery được kiểm chứng và chủ dự án bật.
- [ ] QA Golden R4/THCS/mobile + release exact commit và quyền merge/deploy.

**Kết luận:** Hoàn thành **blueprint độ phủ SGK Chương IV** (không phải bài kiểm tra). Toàn chương vẫn `NOT_COMPLETE` về hành trình tự học đánh giá độc lập cho đến khi có Readiness và QA thật.
