# B04 — Biên bản hợp nhất kết quả 41 ID (28/09/2026)

**Packet:** `MATH-SKILL-TAXONOMY-B04-20260928`. **Main source SHA:** `88143e6b2690edfe721f8d74d2dbcb251bc55ab3`. **Review status:** `CONTENT_REVIEWED_WITH_REPORT_EXCEPTIONS`, `PROPOSAL_ONLY`. Chỉ ghi nhận phản biện, không triển khai vào website.

## Coverage có thể xác nhận từ nội dung người dùng gửi

- Bảng kết quả phần đầu chứa 32 dòng nguyên vẹn: `ALG04V2_089–098` (10), `RAT07MICRO_002` (1), `RAT07V1_009–029` (21).
- Bảng nối tiếp chứa đúng 9 ID còn lại: `RAT07V1_030` và `RAT07V1_063–070`; báo cáo theo ID có trạng thái PASS 9/9.
- Hợp nhất 32+9 = **41 unique IDs**, đúng danh sách gói B04 (10 CĐ04 + 31 CĐ07). Đây là kết luận từ hai bản báo cáo ghép, **không** phải JSON 41 item liên tục có thể parse. Không công bố `machine_readable_report=PASS` hay diễn giải là QA đã sửa runtime.
- Nguồn gốc có hai staging blob `e95236235af6290bf8990efa3cbd9bc31e911849` (CĐ04) và `33bc12b02000046974ea8cf22f53b2e6b7b32ba8` (CĐ07), đã khóa đường dẫn/file blob SHA cho từng câu.

## Kết luận học thuật sử dụng được

- CĐ04/CĐ07 chia sẻ nguyên lý `mẫu ≠ 0`. Không tạo skill riêng chỉ vì xuất hiện ở hai chuyên đề; task demand chia theo mẫu bậc nhất, mẫu tích/bậc hai và yêu cầu tự viết.
- Giữ miền xác định ban đầu sau phép rút gọn là một **task demand cần quan sát riêng**; MCQ nhận diện câu đúng không chứng minh khả năng học sinh tự thiết lập và bảo toàn điều kiện trên giấy.
- 5 cụm gần trùng đề: `ALG04_LIN` (10), `RAT07_LIN` (8), `RAT07_QUAD` (8), `RAT07_EQ` (6), `RAT07_SIMP_KEEP` (8); và micro `RAT07MICRO_002` (1) = 41. Các nhóm dùng phục vụ luyện tập; không xem 41 kết quả đúng là 41 năng lực độc lập.
- `RAT07V1_030` và `RAT07V1_065` dùng cùng `(x²−1)/(x−1)=x+1, x≠1`. Câu thứ nhất hỏi hai biểu thức bằng nhau trên miền chung, câu thứ hai hỏi duy trì điều kiện khi rút gọn. Đây là hai khía cạnh lời hỏi, **nhưng cả hai chỉ đang nhận diện phương án MCQ có sẵn điều kiện**, chưa đo việc học sinh tự tạo lời giải/viết điều kiện.
- Micro-test đề xuất: tự tìm `x²−5x+6≠0 ⇒ x≠2 và x≠3`; rút gọn `(x²−4)/(x−2)=x+2` với `x≠2`, biểu thức ban đầu **không xác định** tại `x=2`. Các ví dụ mới cần QA trước khi xuất bản.

## Quyết định/không quyết định

- Ghi `PROPOSAL_ONLY`, `runtime_enabled=false`, `core_readiness_credit=false`. Không đổi ID/tag nguồn, không gộp/ước tính lại counter localStorage, không tự triển khai read-only mapping hay mastery.
- B05 phải tiếp tục CĐ08/CĐ11 dựa theo nguồn gốc, gồm điều kiện phương trình chứa mẫu, căn thức trong tử/mẫu, đối chiếu nghiệm và lỗi trình bày ký hiệu; không suy ra B05 đã PASS.
