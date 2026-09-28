# B04 — tiếp nhận báo cáo NotebookLM, bản paste bị cắt

**Packet:** MATH-SKILL-TAXONOMY-B04-20260928. **Nguồn main SHA:** `88143e6b2690edfe721f8d74d2dbcb251bc55ab3`. Báo cáo gửi bởi chủ dự án 28/09/2026. **Trạng thái:** PARTIAL_REPORT / PROPOSAL_ONLY.

## Nội dung tiếp nhận

- Phạm vi B04 được khóa 41 ID: 10 câu CĐ04 (`ALG04V2_089–098`) và 31 câu CĐ07 (`RAT07MICRO_002`, `RAT07V1_009–030`, `RAT07V1_063–070`). Nguyên bản source manifest và câu hỏi đã khóa trong packet B04; hai staging blob `e95236235af6290bf8990efa3cbd9bc31e911849` và `33bc12b02000046974ea8cf22f53b2e6b7b32ba8`.
- Văn bản do người dùng dán có phần đầu và phần sau bị cắt/ghép. Bảng thứ hai hoàn chỉnh dòng 1–32 (kết thúc `RAT07V1_029`), dòng 33 `RAT07V1_030` bị đứt. **Chưa có kết quả đầy đủ** cho `RAT07V1_030`, `RAT07V1_063–070`; không khai `PASS 41/41` hoặc JSON đã kiểm tra được dù một số tiêu đề ghi 41.
- Nội dung đã nhận xác nhận hướng phân biệt: cùng quy tắc mẫu khác 0 từ CĐ04 sang CĐ07; nhiệm vụ giữ miền xác định ban đầu khi rút gọn cần quan sát riêng. Câu thay hệ số/số loại là cùng một dạng luyện tập, không phải kỹ năng độc lập.
- Đã đối chiếu bản ghi gốc các ID còn thiếu ở 2 bank `07-phan-thuc-dai-so-v1-01.json` và `07-phan-thuc-dai-so-v1-03.json`. `RAT07V1_030` và `RAT07V1_065` cùng phép rút gọn `(x²−1)/(x−1) = x+1`, vẫn giữ `x≠1`, nhưng hỏi theo lối diễn đạt khác. Cần xem đây là cặp trùng nội dung để không thổi phồng bằng chứng.
- Tất cả kết luận taxonomy/mapping đang PROPOSAL_ONLY. Không đổi question IDs, tags, learner counters, engine, Core Readiness; không phát hành.

## Cách khép B04 với quota thấp

Giữ ba nguồn đang chọn trong NotebookLM, chỉ hỏi tiếp 9 ID còn thiếu, xuất một bảng 9 dòng và coverage JSON **chỉ cho 9 ID**. Gửi kết quả về ChatGPT để gộp/đối chiếu với 32 ID đã có; không cho Notebook tự viết lại 41 dòng hoặc tự nhận 41/41 máy đọc. B05 (phương trình chứa mẫu/căn thức) chỉ khởi chạy sau khi tiếp nhận phần thiếu của B04.
