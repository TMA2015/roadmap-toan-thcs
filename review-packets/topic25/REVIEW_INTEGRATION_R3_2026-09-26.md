# CĐ25 — tiếp nhận phản biện độc lập Targeted R3

**Nguồn:** Phản hồi Gemini được người dùng dán trong Project ngày 26/09/2026. **Packet:** `TOPIC25-GEMINI-TARGETED-R3-20260926`. **Commit kiểm định:** `5f74d7c377bc94f2688a9b5ee431d90c88af0536`. **Kết luận Gemini báo:** `APPROVE`; `critical_corrections=[]`.

**Hồ sơ lưu để truy nguyên:** [bản tóm tắt JSON được chuẩn hóa từ phản hồi người dùng](GEMINI_TARGETED_R3_RESULT_2026-09-26.normalized.json). Đây không phải bản sao nguyên byte của toàn bộ phản hồi; thông điệp gốc ở cuộc trò chuyện dự án. [Gói nguồn R3](GEMINI_REVIEW_PACKET_2026-09-26_TARGETED_R3.txt) chứa toàn bộ văn bản kiểm định cùng blob SHA cố định.

## Kiểm tra tính khớp nguồn

- Đối chiếu R3: **9/9 tệp đích**, từng tệp có `status=PASS` và mô tả kiểm chứng riêng; không có file `NOT_REVIEWED` trong target.
- Gói có **8 tệp ngữ cảnh**, nhưng `context_files_read` của phản hồi ghi **5/8**: `bai-toan-kinh-dien.md`, đề và đáp án 02–03. Không suy ra Gemini đã đọc độc lập ba trang ngữ cảnh `anchor-25-004/008/009.md` trong R3. Các trang sâu này đã nằm trong danh sách R2, và ba hình SVG được kiểm định trực tiếp dưới dạng target của R3.
- Đối chiếu repo: 17/17 blob SHA trong R3 (9 target + 8 context) khớp nguồn chụp; 9/9 target còn nguyên SHA tại thời điểm tiếp nhận. Snapshot R2 (23 nguồn) cũng khớp gói cũ. Ba tệp R2 có thay đổi sau snapshot là catalog (metadata, URI ba bài sâu), thư viện và kho mỏ neo (liên kết/lời chú thích); không phát hiện thay đổi lời giải gốc trong phạm vi đó.
- **Bao phủ kết hợp:** phản hồi R2 liệt kê 17/23 nguồn cũ; R3 liệt kê riêng đủ 6 nguồn bỏ sót và ba trang sâu mới. Không đồng nhất hai snapshot thành một chứng thư nguyên khối; chỉ ghi nhận kết quả theo từng tệp/commit và những thay đổi liên kết, metadata sau đó.

## Kết quả chuyên môn

| Đối tượng | Kết quả phản biện R3 |
|---|---|
| A25-006 – Căn thức và tính nguyên | PASS: điều kiện `n≥0,n≠1`, chia hết, tập nghiệm `{0,2,3}` và cả ba biến thể. |
| A25-007 – Tham số và Viète | PASS: `Δ'=m²+1>0`, `m=-2,1`, ba biến thể và `T_min=3`. |
| A25-010 – Năng suất | PASS: `r_B=1/30`, B làm 30 ngày, 4 ngày chung được `1/3`, ba biến thể. |
| A25-011 – Tương giao | PASS: `(-1,1),(3,9)`, tổng bình phương 10, tiếp xúc `k=-1`. |
| Catalog | PASS: 11 ID, 10 representative, đường dẫn và nhãn trạng thái ở snapshot đã đọc. |
| Exam JSON | PASS: ba đề × 120 phút, 10 điểm; tổng rubric nhất quán, đúng bản chất tự đối chiếu. |
| SVG 004 | PASS: tam giác vuông và tỉ lệ `BH:AH:HC=9:12:16`. |
| SVG 008 | PASS: mô hình tiếp tuyến–cát tuyến và hệ thức `AB²=AD·AE=60000`. |
| SVG 009 | PASS: hai đường cao, chân đường cao, trực tâm và hai đường tròn phụ. |

**QA đối chiếu bổ sung:** Kiểm tra số học độc lập với nguồn cho A25-006, 007, 010, 011 và kiểm tra tích vô hướng, độ dài, chân đường cao, hai tâm đường tròn theo tọa độ SVG. Hình 008 dùng tọa độ B làm tròn ba chữ số thập phân: `AB²=60000.426088` theo tọa độ chấm vẽ, so với quan hệ mô hình giải tích `60000`. Sai lệch tỷ đối khoảng `7.1×10⁻⁶`, không thay đổi nội dung hình học. Hình 009 cũng có sai số nhỏ do làm tròn tọa độ điểm/tâm/bán kính. Vì vậy dùng cách diễn đạt **đúng quan hệ hình học theo mô hình, hình vẽ gần đúng trong độ chính xác tọa độ**, không tuyên bố mọi tọa độ thập phân tuyệt đối chính xác.

**Điều kiện miền:** Câu `x≥0 leads to n≥0` trong tóm tắt Gemini không phải chiều suy luận đúng nếu đứng riêng: `n≥0` là *giả thiết ban đầu*, `x=n²≥0` là hệ quả. Bài học gốc nêu đúng giả thiết và kết luận, không cần sửa đáp án.

## Quyết định tích hợp

1. **Không sửa nội dung toán, hình, đề hoặc đáp án** khi không có lỗi được chứng minh. Bảo toàn ID và lịch sử học sinh.
2. Ghi rõ trạng thái PASS R3 của ba trang sâu, A25-011 và hình 004/008/009 trong catalog; đây chỉ là cập nhật metadata sau snapshot, không nói rằng Gemini đã đọc chính bản metadata mới.
3. Chốt task `TOPIC25-R2-SOURCE-COVERAGE-001` và `TOPIC25-INDEPENDENT-MATH-REVIEW-001` là DONE theo phạm vi review R2 + R3; giữ nguyên ghi chú về 5/8 context của R3 và ranh giới phản biện AI.
4. Chỉ coi các bước build/CI/deploy hoàn tất khi workflow tương ứng báo success. Chứng cứ phản biện toán học độc lập và QA kỹ thuật là hai loại kiểm tra khác nhau.
5. Khi các đề thi chính thức của địa phương thay đổi, đối chiếu mới theo năm/địa phương; ba đề hiện có vẫn là **đề tự biên soạn**.

**Kết luận:** CĐ25 đủ cơ sở để tạm khép vòng phản biện R2/R3 và chuyển trọng tâm sang dự án tiếng Anh. Đây là kiểm định chéo bằng AI và kiểm tra nội bộ, không phải chứng nhận độc lập bởi một tổ chức khảo thí.
