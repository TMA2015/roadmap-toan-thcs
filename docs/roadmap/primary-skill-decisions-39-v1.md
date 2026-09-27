# Quyết định theo từng câu — 39 trường hợp đánh giá kỹ năng CĐ04–07

**27/09/2026** · Trạng thái: hoàn tất phân luồng/định nghĩa bằng chứng theo câu; **chưa triển khai chấm mastery**. Đây là hồ sơ bổ sung cho [QA CĐ04](cd04-academic-qa-v1.md), [CĐ05](cd05-academic-qa-v1.md), [CĐ06](cd06-academic-qa-v1.md) và [CĐ07](cd07-academic-qa-v1.md), không thay thế kết luận toán học hay nguồn câu hiện hành.

## Kết quả kiểm tra 39 câu

| Chuyên đề | Câu đã xét | Ứng viên một đích đo có giới hạn | Chỉ luyện tập và phản hồi | Chờ kiểm định nhánh mở rộng |
|---|---:|---:|---:|---:|
| CĐ04 | 2 | 2 | 0 | 0 |
| CĐ05 | 5 | 1 | 4 | 0 |
| CĐ06 | 24 | 16 | 8 | 0 |
| CĐ07 | 8 | 0 | 6 | 2 |
| **Tổng** | **39** | **19** | **18** | **2** |

[Danh sách 39 ID, nguồn đã khóa SHA, giới hạn đo và hành động ôn bù](../assets/data/curriculum/primary-skill-decision-register-39-v1.json).

**19 ứng viên chỉ thích hợp cho vòng thử nghiệm hình thức thấp (formative).** Đây không phải phê duyệt mastery, không chấm Core Readiness và không chứng minh học sinh thực hiện được mọi bước nếu câu hỏi chỉ có một đáp án cuối cùng. 20 trường hợp còn lại vẫn dùng được trong luyện tập thông thường nhưng chưa sinh điểm kỹ năng mới.

## Những quyết định dễ gây hiểu nhầm

- `ALG04V2_009` hỏi hạng tử tự do: có thể dùng như bằng chứng *cụ thể* về nhận biết cấu trúc đa thức dưới mã có sẵn `nhan-biet-da-thuc`; không suy diễn đã nhận biết hết mọi cấu trúc.
- `ALG04V2_010` hỏi phần biến: chỉ thử `nhan-biet-don-thuc`; **không** tăng `he-so-bac` chỉ vì tag đó nằm trong lịch sử.
- `ID05V1_116–119`: nhận dạng đẳng thức/chọn bước giải, **không** đại diện cho năng lực *tự trình bày chứng minh*. Giữ formative; muốn đo chứng minh cần bài viết từng bước với rubric.
- `ID05V1_120`: đo việc nhận dạng bước đầu của hiệu hai bình phương, không suy ra đã phân tích hoàn toàn `x^4-16`.
- `FAC06V1_077–092`: tất cả đề yêu cầu chọn **kết quả phân tích hoàn toàn**. Đề xuất **một mã mới duy nhất** `phan-tich-da-thuc-hoan-toan` cho đầu ra này, có nhãn hiển thị “Nhận diện kết quả phân tích đa thức hoàn toàn”. Giữ nguyên legacy `phoi-hop-phuong-phap` dưới vai trò bối cảnh/phương pháp. Trắc nghiệm chưa đo đường đi, khả năng tự làm từng bước hay chứng minh đẳng thức.
- `FAC06V1_113–116`: chọn lập luận chia hết đúng, chưa tự viết chứng minh. `117–120`: chọn đáp số, không biết chắc học sinh đã dùng hiệu hai bình phương.
- `RAT07V1_109–114`: sáu câu cùng cấu trúc, cùng đáp số **1**. Không coi sáu lần đúng là sáu bằng chứng độc lập mạnh về cả cộng, nhân và bảo toàn miền xác định. Cần đa dạng hóa đầu ra/điều kiện, có câu hỏi riêng về miền gốc trước khi dùng làm thước đo.
- `RAT07V1_119–120`: tìm giá trị nguyên bằng xét ước. Giữ ở bài luyện tập tự chọn và chờ kiểm định tầng yêu cầu học, không mặc định cộng Core.

**Không nảy sinh 39 skill mới.** Chỉ có một *đề xuất mã năng lực mới* do đầu ra “phân tích hoàn toàn” đủ khác với một phương pháp cụ thể. Mã này chưa đăng ký vào manifest, Knowledge Graph hay giao diện chấm điểm.

## Giai đoạn triển khai tiếp, tránh ảnh hưởng học sinh

1. Thử một nhóm nhỏ trên **trang Beta opt-in riêng**, phân biệt rõ “nhận diện đáp án đúng” với “tự giải”; các câu đã xem đáp án không trở thành bằng chứng độc lập khi luyện lại.
2. Không dùng kết quả nhóm câu có phương án đúng giống nhau để kết luận mastery; trước khi đưa CĐ07 composite vào thì phải thay cấu trúc/đáp án và tạo bài điều kiện miền riêng.
3. Bất kỳ hệ thống ghi nhận mới nào phải dùng namespace tách biệt, lưu ID + phiên bản nguồn câu, có cờ assisted và không sửa `toan-thcs-practice-v1`/`toan-thcs-assessment-v2`.
4. QA bằng Chrome desktop/mobile, kiểm tra sai → giải thích → luyện lại, khóa nguồn JSON và không mất dữ liệu hiện có. Không tích hợp ồ ạt vào các trang luyện tập chính.
5. Không tự đưa đề xuất một mã mới vào danh sách kỹ năng chính toàn website; cần đánh giá chất lượng phân biệt câu, phân tầng KNTT và phản hồi người học.

[Quy tắc tinh gọn](skill-taxonomy-minimal-policy-v1.md) vẫn áp dụng. Kết luận này dựa trên câu hỏi thật đã đối soát và là phân tích nội bộ, không gọi là phản biện độc lập từ Gemini/giáo viên.
