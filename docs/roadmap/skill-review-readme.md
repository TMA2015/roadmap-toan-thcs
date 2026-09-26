# Chuẩn hóa kỹ năng THCS — hồ sơ phản biện

> **Phạm vi hiện hành (cập nhật 26/09/2026):** Không đặt mục tiêu định danh/chuẩn hóa đủ 346 tag thành 346 skill. Danh mục lịch sử là nguồn kiểm kê. Nhiệm vụ mới: xây bộ năng lực nền và ứng dụng **gọn, đủ chẩn đoán** theo [quy tắc tinh gọn](skill-taxonomy-minimal-policy-v1.md); thí điểm [10 cặp](../assets/data/curriculum/skill-role-pilot-04-11-v1.json). Các tag dạng bài, phương pháp, bối cảnh và kỹ thuật tự chọn không mặc định thành mastery/node. [Brief Gemini hiện hành](gemini-next-review-10-pairs-v1.md). Mọi yêu cầu 346/346 ở tài liệu cũ chỉ là mục tiêu kiểm kê, không phải mục tiêu sản phẩm.

**Trạng thái 26/09/2026:** Beta v2 đánh giá một kỹ năng chính đã được người dùng thử và chấp nhận. Đợt tiếp theo là [bản ánh xạ CĐ04–07 theo từng câu](primary-skill-overlay-review-04-07-v1.md): 492 câu đã khóa ID/nguồn; 456 ứng viên primary và 39 ca chờ kiểm định, trong đó 36 ca chưa chọn primary. Đây vẫn là **dữ liệu review chưa được engine đọc**. Không đổi tag luyện tập, Knowledge Graph hay dữ liệu học sinh.

## Dữ liệu đã kiểm tra

- 22 manifest đang được bộ tải luyện tập tham chiếu, 99 tệp câu hỏi nguồn.
- 2.874 câu thực tế khớp với số khai báo trong manifest.
- 3.414 lượt gắn tag; 354 lượt tag trong danh mục theo từng chuyên đề, 346 mã phân biệt.
- 346/346 mã đều được sử dụng; 0 câu thiếu skill tag, 0 tag ngoài manifest, 0 ID câu hỏi trùng trong cùng chuyên đề.
- Knowledge Graph hiện là bản chọn lọc 41 node thuộc 13 chuyên đề; không phản ánh toàn bộ 346 tag.
- 8 mã xuất hiện trong hơn một chuyên đề: `dieu-kien-xac-dinh`, `hieu-hai-binh-phuong`, `binh-phuong-hoan-chinh`, `lap-phuong-trinh`, `pythagore`, `pythagore-dao`, `nhan-biet-trung-truc`, `cach-deu-dinh`. Chúng **không đương nhiên** là 8 lỗi.

## Điều cần phản biện đầu tiên

`cach-deu-dinh` có nghĩa khác nhau giữa chuyên đề 14 và 15; câu TRI14V1_132 cũng chạm ngữ cảnh ba đỉnh, vì vậy không được tự động đổi mã theo riêng chuyên đề. Nhóm điều kiện xác định/giữ điều kiện/đối chiếu nghiệm có thể là các năng lực đo riêng. Hai nhãn giống nhưng ID khác là `chuyen-dong-he` / `chuyen-dong` và `chung-minh-tiep-tuyen` / `tiep-tuyen-chung-minh`; cần xem câu hỏi trước khi quyết định gộp.

## Tài liệu giao cho Gemini

1. [Prompt hai vòng phản biện](gemini-skill-review-packet-v1.md)
2. [Bản kiểm kê và danh sách nghi vấn](../assets/data/curriculum/skill-taxonomy-audit-v1.json)
3. Manifest snapshots: [04–11](../assets/data/curriculum/review-snapshot-04-11.json), [12–18](../assets/data/curriculum/review-snapshot-12-18.json), [19–25](../assets/data/curriculum/review-snapshot-19-25.json)
4. 12 kết quả theo câu hỏi nằm tại `../assets/data/curriculum/review-question-audit-*.json`. Mỗi tệp có số câu thực tế, số lần gắn tag, mã lạ, tag chưa dùng, mã câu ví dụ.
5. [Mẫu JSON trả lời](../assets/data/curriculum/gemini-skill-review-response-v1.example.json)

Gemini đã hoàn thành phản biện 10 cặp theo mẫu; ý kiến được điều chỉnh ở trường hợp ID05V1_021 và đưa vào [pilot JSON](../assets/data/curriculum/skill-role-pilot-04-11-v1.json). Bước tiếp là QA học thuật nhóm CĐ04–07 và 39 ca chờ xét trong hai gói toàn văn câu hỏi [04–05](../assets/data/curriculum/primary-skill-review-queue-04-05-v1.json) và [06–07](../assets/data/curriculum/primary-skill-review-queue-06-07-v1.json); đánh giá theo từng câu, không mở rộng danh mục chỉ vì có nhiều tag. Tần suất thi chưa kiểm chứng thì để `unverified`.

## Quy tắc tích hợp

Mỗi quyết định MERGE/SPLIT phải đi kèm bằng chứng câu hỏi và bản đồ `legacy ID -> canonical ID`; chỉ cập nhật code khi có phương án bảo toàn số liệu `toan-thcs-practice-v1` và kiểm thử hồi quy. Không đếm tag ôn tập tổng hợp ở chuyên đề 25 như các kỹ năng tiên quyết riêng. Không khóa lộ trình học.
