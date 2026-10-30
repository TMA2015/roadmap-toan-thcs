# Toán 10 KNTT — Chương V (Các số đặc trưng của mẫu số liệu không ghép nhóm) · SGK Chapter Readiness Blueprint R00

**STATE:** `ASSESSMENT_OUTCOME_BLUEPRINT_ONLY` · `NOT_NOTEBOOKLM_REVIEWED_AS_READINESS` · `NOT_ACTIVE / NO_SCORE / NO_MASTERY`.
**SCOPE:** `SGK_CHAPTER_READINESS:G10:CHV`; **B12–B14**, khác phạm vi `TOPIC_READINESS`.
**SOURCE S1:** SGK Toán 10 KNTT tập 1 B12 tr.73–77, B13 tr.78–83, B14 tr.84–88, ôn ChV tr.89–90; SBT B12 tr.72–73, B13 tr.74–77, B14 tr.78–80, ôn ChV tr.81–84.
**PREVIOUSLY_REVIEWED_PUBLIC_SOURCE:** prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B14_D1D6_AUTHORING_R01_SNAPSHOT.md; Git blob(s) `49502fe39cf0a67f6a3e973a77f94164150637a7`; authoring Draft PR #639. Các verdict D1–D6 của luyện tập công khai **không cấp Academic PASS cho bài kiểm tra**.

## Outcome coverage đề xuất (chỉ metadata, không chứa câu hỏi)

| Outcome đã có trong gói SGK Core/Practice | Cần kiểm tra độc lập ở cuối chương | Lỗi/hổng thường gặp cần phát hiện |
|---|---|---|
| `G10-B12-APPROX_CONCEPT` | Phân biệt số đúng, số gần đúng, số quy tròn, đơn vị đo | Dùng số đúng khi chỉ có đo ước lượng |
| `G10-B12-ABS_ERROR` | Sai số tuyệt đối và d là giới hạn sai số | Khẳng định sai số thực bằng d khi chỉ biết ≤d |
| `G10-B12-REL_ERROR` | Tính sai số tương đối theo ký hiệu KNTT khi số gần đúng a khác 0 | Lấy sai mẫu số hoặc quên chuyển sang % |
| `G10-B12-ROUNDING` | Quy tròn đúng hàng và nêu sai số/độ chính xác phù hợp | Đổi hàng làm tròn mà không xét độ chính xác |
| `G10-B13-MEAN` | Tính trung bình có/không có bảng tần số | Quên trọng số tần số |
| `G10-B13-MEDIAN` | Tìm trung vị của mẫu chẵn/lẻ đã sắp | Không sắp tăng trước khi tìm vị trí giữa |
| `G10-B13-QUARTILES` | Xác định Q1/Q2/Q3 theo quy ước chia nửa mẫu KNTT | Sai cách chia hai nửa khi mẫu n lẻ |
| `G10-B13-MODE` | Xác định mốt và tình huống nhiều mốt/không có mốt | Đồng nhất mốt với trung bình |
| `G10-B13-INTERPRETATION` | So sánh trung bình/trung vị khi có giá trị bất thường | Dùng trung bình làm đại diện duy nhất |
| `G10-B14-RANGE_IQR` | Tính khoảng biến thiên và IQR=Q3−Q1 | Nhầm IQR với max−min |
| `G10-B14-VARIANCE` | Tính phương sai mẫu mô tả theo mẫu số n | Chia n−1 thay cho n của SGK |
| `G10-B14-STDDEV` | Độ lệch chuẩn và đơn vị dữ liệu | Nhầm đơn vị phương sai với độ lệch chuẩn |
| `G10-B14-OUTLIERS` | Xét ngưỡng Q1−1,5·IQR và Q3+1,5·IQR theo bất đẳng thức chặt | Coi giá trị đúng ngưỡng là ngoại lệ |
| `G10-B14-COMPARISON` | So sánh mức phân tán, các mẫu có cùng mean | Chỉ dùng mean để xếp độ ổn định |

**Đếm coverage:** 14 outcome ID trong nguồn học liệu công khai đã review, không phải 14 câu kiểm tra mới. `item_id` của private Chapter Readiness **chưa tạo**, số lượng câu, blueprint độ khó/phân tầng và kiểm soát tiếp xúc phải được reviewer xác nhận trên S1 (bao gồm bài tập cuối chương).

## Assessment contract độc lập, không trộn với luyện tập

1. Không đưa thân câu, đáp án, lời giải, rubric, thông số chấm của bài held-out lên GitHub Pages/MkDocs/JS; **không tạo backend hay tài khoản mới** khi chưa có quyết định chủ dự án.
2. Câu đánh giá chính thức phải là chứng cứ độc lập; kiểm `item_id`, `content_version`, độ tiếp xúc và không lấy nguyên câu Core/Practice đã xem để chứng minh Readiness.
3. Phạm vi `SGK_CHAPTER_READINESS` chỉ thuộc Chương V; Chuyên đề có `TOPIC_READINESS` và coverage riêng; không lấy một verdict thay verdict kia.
4. Trước **Final Submit** không có D6, hint, AI Tutor, đáp án, thông báo đúng/sai; cho phép chuyển câu và sửa lựa chọn. Demo chỉ hiển thị `NO_SCORE/NO_MASTERY`.
5. Trước khi phát hành, NotebookLM phải review riêng outcome coverage và các câu held-out thực tế theo S1; QA engine, an toàn đề, browser/device, THCS hồi quy; sau đó cần chủ dự án phê duyệt rõ ràng.
6. Một câu một canonical ID, placement đánh giá riêng; Written/Anchor chung thư viện, không nhân bản answer/rubric.

## Các cổng còn HOLD
- [ ] Outcome/độ khó/độ sâu **riêng cho Readiness** được NotebookLM duyệt.
- [ ] Bảo vệ câu hỏi/khóa chấm khỏi gói public, duyệt từng item mới.
- [ ] Kiểm exposure câu hỏi và ranh giới hai nhánh.
- [ ] Engine đánh giá Final Submit, bảo mật, score/Mastery được kiểm chứng và chủ dự án bật.
- [ ] QA Golden R4/THCS/mobile + release exact commit và quyền merge/deploy.

**Kết luận:** Hoàn thành **blueprint độ phủ SGK Chương V** (không phải bài kiểm tra). Toàn chương vẫn `NOT_COMPLETE` về hành trình tự học đánh giá độc lập cho đến khi có Readiness và QA thật.
