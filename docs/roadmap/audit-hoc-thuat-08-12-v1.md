# Audit học thuật thủ công – Chuyên đề 08–12 (V1)

> Phạm vi: đọc thủ công phần kiến thức cốt lõi, dạng bài, lỗi sai và các cầu nối giữa chuyên đề. Vòng này không thay đổi Practice Engine và không viết lại các phần đã đúng/đủ.

## Kết luận nhanh

| Chuyên đề | Đánh giá sau audit | Điều chỉnh chính |
|---:|---|---|
| 08 | PASS sau bổ sung | Ba trường hợp của `Ax+B=0` khi có tham số; khử mẫu trên miền xác định; cảnh báo khi nhân/chia bất phương trình với biểu thức chưa biết dấu |
| 09 | PASS sau bổ sung | Giải thích phép biến đổi tương đương của hệ; thêm tiêu chuẩn kiểm tra số nghiệm bằng tích chéo, tránh chia cho hệ số bằng 0 |
| 10 | PASS sau bổ sung | Làm rõ `y=ax²` chỉ là parabol đặc biệt; bổ sung cầu nối giao điểm đường thẳng–parabol với phương trình bậc hai |
| 11 | PASS sau bổ sung | Chuẩn hóa điều kiện khi bình phương hai vế và dạng `√A=B`, `√A=√B` để tránh nghiệm ngoại lai |
| 12 | PASS sau bổ sung | Chuẩn hóa điều kiện hai nghiệm dương/âm/trái dấu, yêu cầu nghiệm phân biệt và trường hợp `P=0` |

## Nguyên tắc sử dụng

- Các phần bổ sung mang tính **làm chặt điều kiện toán học** và **lấp cầu nối nội dung**, không tăng khối lượng bài tập cơ học.
- Dạng mở rộng được gắn nhãn rõ để học sinh không nhầm với yêu cầu cốt lõi.
- Với tham số, luôn kiểm tra điều kiện để phương trình/hệ còn đúng loại trước khi dùng công thức.
- Với phép biến đổi có thể làm thay đổi tập nghiệm (khử mẫu, bình phương), phải giữ điều kiện và đối chiếu nghiệm.

## QA bắt buộc trước merge

- `python audit_content_structure.py --write`
- `python validate_practice_bank.py`
- `python check_roadmap_dependencies.py`
- `python audit_practice_quality.py`
- `mkdocs build --strict`
