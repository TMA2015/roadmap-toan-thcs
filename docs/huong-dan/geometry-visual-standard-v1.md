# Quy chuẩn hình minh họa hình học nội bộ v1

**Phạm vi:** hình minh họa trong bài học và bài tập; infographic A4 là một loại tài sản riêng, không ép theo tỉ lệ minh họa. **Pilot:** CĐ18. **Kiến trúc gốc:** `docs/assets/data/curriculum/geometry-architecture-v1.json` (FROZEN-V1).

## Quy tắc bắt buộc
1. Ưu tiên SVG có `viewBox`, `role="img"`, `<title>`, `<desc>`, nền trong suốt; thêm alt có nghĩa ở nơi nhúng. Không dùng ảnh tải từ Internet làm nguồn cho hình mới.
2. Tách **dữ kiện toán học** (điểm/quan hệ/điều kiện) khỏi **trình bày** (màu/nhãn/khung). Không suy ra giả thiết từ hình; marker chỉ thể hiện quan hệ đã cho hoặc đã dựng/chứng minh.
3. Cùng một cấu hình hình học, sử dụng JSON/spec hoặc tọa độ đã được xác minh; kiểm tra điểm nằm đúng đường, thứ tự điểm, vuông góc và dạng không suy biến trước khi xuất SVG.
4. Dùng vector để co giãn: `max-width: 100%; height: auto`; kích cỡ trình bày do container quyết định, không để file áp đặt chiều cao 100% gây tràn.
5. Chuẩn thiết kế gợi ý: khung S 480×320, M 640×420, L 800×520; lề an toàn 8–12%; nét chính 1.8–2.2 CSS px, nét phụ 1.2–1.5 px hoặc nét đứt; font sans-serif tương thích website; nhãn điểm 16–20 px tùy khung. Không dùng kích cỡ font cố định bất chấp mật độ hình.
6. Nét chính `#1f2937`, nhãn `#111827`; màu nhấn cho đối tượng cần học (đỏ `#c62828`, xanh `#1565c0`) khi cần, không truyền tải thông tin chỉ bằng màu. Đường phụ mảnh hơn; góc vuông/cung góc dễ phân biệt khi in đen trắng.
7. Đặt nhãn ngoài vùng giao nét khi có thể; label padding theo kích thước thật của hình, không dùng offset tuyệt đối cho mọi tỉ lệ. Tránh chữ cắt biên và khoảng trống thừa.
8. Dùng nhãn/ghi chú tiếng Việt, ký hiệu toán học nhất quán. Công thức dài đặt ở văn bản hoặc chú thích dưới hình, không để font công thức quá lớn che đối tượng.
9. Hình minh họa không đúng tỉ lệ ghi rõ khi cần. Không thay đổi kết quả bài tập vì vị trí điểm trong hình.
10. Không overwrite hình cũ trước khi QA: thêm file mới, kiểm tra toán học + SVG + desktop/điện thoại/iPad + in đen trắng, sau đó đổi tham chiếu trong bài và kiểm tra rollback.

## Vị trí và định danh
- Thư viện đang dùng: `docs/assets/geometry/<topic-number>/`. Pilot đặt ngay trong `docs/assets/geometry/18/`, tránh tạo thư mục song song rồi làm gãy đường dẫn.
- Tên mẫu: `18-<mo-ta>-v1.svg`; asset mới có `<title>` và `<desc>` tiếng Việt.
- JSON spec (đặc biệt với hình thiết yếu) tham chiếu `docs/assets/data/curriculum/geometry-diagram-spec-v1.schema.json`. Renderer tự động là nhánh `GEO-LIB-001`, chưa được coi là hoàn thành.
- Infographic `docs/assets/infographics/18/` tiếp tục là tài sản riêng cho web/in, không đổi hàng loạt.

## Release gate
Kiểm tra `check_svg_integrity.py`, `scripts/test-geometry-architecture-v1.js`, `mkdocs build --strict` cùng kiểm tra trực quan mobile/iPad. Hình tự vẽ lại phải so với lời văn và giả thiết trước khi merge.
