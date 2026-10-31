# Toán 10 KNTT — Chương III (Hệ thức lượng trong tam giác) · SGK Chapter Readiness Blueprint R00

**STATE:** `ASSESSMENT_OUTCOME_BLUEPRINT_ONLY` · `NOT_NOTEBOOKLM_REVIEWED_AS_READINESS` · `NOT_ACTIVE / NO_SCORE / NO_MASTERY`.
**SCOPE:** `SGK_CHAPTER_READINESS:G10:CHIII`; **B05–B06**, khác phạm vi `TOPIC_READINESS`.
**SOURCE S1:** SGK Toán 10 KNTT tập 1 B05 tr.33–37, B06 tr.38–43, ôn ChIII tr.44–45; SBT B05 tr.29–33, B06 tr.34–39, ôn ChIII tr.40–44.
**PREVIOUSLY_REVIEWED_PUBLIC_SOURCE:** prototypes/thpt/content-drafts/THPT_G10_CHIII_B05_B06_D1D6_AUTHORING_R01_SNAPSHOT.md; Git blob(s) `6320aeaa89bd51c514b07461e01fad5e3aca833f`; authoring Draft PR #633. Các verdict D1–D6 của luyện tập công khai **không cấp Academic PASS cho bài kiểm tra**.

## Outcome coverage đề xuất (chỉ metadata, không chứa câu hỏi)

| Outcome đã có trong gói SGK Core/Practice | Cần kiểm tra độc lập ở cuối chương | Lỗi/hổng thường gặp cần phát hiện |
|---|---|---|
| `G10-B05-SIGN_DOMAIN` | Xác định dấu sin/cos/tan cho góc 0°–180°; ghi điều kiện tan | Áp quy tắc góc nhọn lên góc tù hoặc dùng tan khi cos=0 |
| `G10-B05-SPECIAL_ANGLES` | Đọc và tính các giá trị lượng giác của góc đặc biệt | Nhầm sin60° với cos60° và dấu cos120° |
| `G10-B05-SUPPLEMENTARY` | Sử dụng hệ thức hai góc bù 180°−α theo đúng dấu | Đảo sai dấu sin và cos của góc bù |
| `G10-B05-IDENTITIES` | Vận dụng sin²α+cos²α=1 và các biến đổi hợp lệ | Suy giá trị căn mà không xét dấu góc |
| `G10-B05-UNIT_SEMICIRCLE` | Liên hệ hình học nửa đường tròn đơn vị với sin/cos | Dùng công thức từ đồ thị không phù hợp góc cho trước |
| `G10-B06-COSINE_RULE` | Áp dụng định lí cosin tìm cạnh/góc và kiểm đầu vào tam giác | Bỏ dấu trừ trong a²=b²+c²−2bc cosA |
| `G10-B06-SINE_RULE` | Áp dụng định lí sin, bán kính R, tránh trường hợp góc thiếu dữ kiện | Nhầm tỉ số a/sinA với a·sinA |
| `G10-B06-AREA_SIN` | Dùng S=1/2 bc·sinA với hai cạnh kề góc xen giữa | Dùng góc không xen giữa hai cạnh đã chọn |
| `G10-B06-HERON` | Tính nửa chu vi và diện tích Heron, kiểm bất đẳng thức tam giác | Dùng chu vi thay nửa chu vi p |
| `G10-B06-APPLICATION` | Mô hình hóa đo đạc, giải tam giác và kiểm đơn vị/khả thi | Trả số không thực tế hoặc bỏ đơn vị |

**Đếm coverage:** 10 outcome ID trong nguồn học liệu công khai đã review, không phải 10 câu kiểm tra mới. `item_id` của private Chapter Readiness **chưa tạo**, số lượng câu, blueprint độ khó/phân tầng và kiểm soát tiếp xúc phải được reviewer xác nhận trên S1 (bao gồm bài tập cuối chương).

## Assessment contract độc lập, không trộn với luyện tập

1. Không đưa thân câu, đáp án, lời giải, rubric, thông số chấm của bài held-out lên GitHub Pages/MkDocs/JS; **không tạo backend hay tài khoản mới** khi chưa có quyết định chủ dự án.
2. Câu đánh giá chính thức phải là chứng cứ độc lập; kiểm `item_id`, `content_version`, độ tiếp xúc và không lấy nguyên câu Core/Practice đã xem để chứng minh Readiness.
3. Phạm vi `SGK_CHAPTER_READINESS` chỉ thuộc Chương III; Chuyên đề có `TOPIC_READINESS` và coverage riêng; không lấy một verdict thay verdict kia.
4. Trước **Final Submit** không có D6, hint, AI Tutor, đáp án, thông báo đúng/sai; cho phép chuyển câu và sửa lựa chọn. Demo chỉ hiển thị `NO_SCORE/NO_MASTERY`.
5. Trước khi phát hành, NotebookLM phải review riêng outcome coverage và các câu held-out thực tế theo S1; QA engine, an toàn đề, browser/device, THCS hồi quy; sau đó cần chủ dự án phê duyệt rõ ràng.
6. Một câu một canonical ID, placement đánh giá riêng; Written/Anchor chung thư viện, không nhân bản answer/rubric.

## Các cổng còn HOLD
- [ ] Outcome/độ khó/độ sâu **riêng cho Readiness** được NotebookLM duyệt.
- [ ] Bảo vệ câu hỏi/khóa chấm khỏi gói public, duyệt từng item mới.
- [ ] Kiểm exposure câu hỏi và ranh giới hai nhánh.
- [ ] Engine đánh giá Final Submit, bảo mật, score/Mastery được kiểm chứng và chủ dự án bật.
- [ ] QA Golden R4/THCS/mobile + release exact commit và quyền merge/deploy.

**Kết luận:** Hoàn thành **blueprint độ phủ SGK Chương III** (không phải bài kiểm tra). Toàn chương vẫn `NOT_COMPLETE` về hành trình tự học đánh giá độc lập cho đến khi có Readiness và QA thật.
