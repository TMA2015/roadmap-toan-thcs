#!/usr/bin/env python3
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def change(path, old, new, guard=None):
    p = ROOT / path
    text = p.read_text(encoding="utf-8")
    if guard and guard in text:
        return
    if old not in text:
        raise RuntimeError(f"Marker not found in {path}: {old[:120]!r}")
    p.write_text(text.replace(old, new, 1), encoding="utf-8")

p21 = "docs/kien-thuc/21-thong-ke/index.md"
change(
    p21,
    """| Dạng biểu diễn | Phù hợp khi nào? | Điểm mạnh |
|---|---|---|
| Bảng tần số | Cần thống kê dữ liệu gốc | Gọn, dễ tính toán |
| Biểu đồ cột | Cần so sánh các nhóm | Dễ nhìn, trực quan |
| Biểu đồ đoạn thẳng | Cần theo dõi sự thay đổi theo thời gian | Thể hiện xu hướng rõ |
""",
    """| Dạng biểu diễn | Phù hợp khi nào? | Điểm mạnh |
|---|---|---|
| Bảng tần số | Cần thống kê dữ liệu gốc | Gọn, dễ tính toán |
| Biểu đồ cột | Cần so sánh các nhóm | Dễ nhìn, trực quan |
| Biểu đồ cột kép | Cần so sánh hai dãy số liệu theo cùng các nhóm | Thấy chênh lệch giữa hai đối tượng |
| Biểu đồ đoạn thẳng | Cần theo dõi sự thay đổi theo thời gian | Thể hiện xu hướng rõ |
| Biểu đồ hình quạt tròn | Cần mô tả cơ cấu các phần trong một tổng thể | Thấy nhanh tỉ trọng của từng phần |
| Bảng/biểu đồ ghép nhóm | Có nhiều số liệu số cần gom theo khoảng | Gọn và dễ nhìn phân bố theo nhóm |
""",
    guard="| Bảng/biểu đồ ghép nhóm |",
)

change(
    p21,
    """| Mục tiêu | Cách biểu diễn phù hợp |
|---|---|
| Đếm số lần xuất hiện | Bảng tần số |
| So sánh các nhóm | Biểu đồ cột |
| Theo dõi theo thời gian | Biểu đồ đoạn thẳng |
| So sánh theo tỉ lệ | Bảng tần suất / phần trăm |
""",
    """| Mục tiêu | Cách biểu diễn phù hợp |
|---|---|
| Đếm số lần xuất hiện | Bảng tần số |
| So sánh các nhóm | Biểu đồ cột |
| So sánh hai dãy trên cùng nhóm | Biểu đồ cột kép |
| Theo dõi theo thời gian | Biểu đồ đoạn thẳng |
| Mô tả cơ cấu trong một tổng thể | Biểu đồ hình quạt tròn |
| Nhiều số liệu số cần gom theo khoảng | Bảng/biểu đồ tần số ghép nhóm |
| So sánh theo tỉ lệ | Bảng tần suất / tần số tương đối / phần trăm |
""",
    guard="| Nhiều số liệu số cần gom theo khoảng |",
)

p25 = "docs/kien-thuc/25-tong-hop-on-thi-10/index.md"
change(
    p25,
    """- **Thống kê**: bảng số liệu, biểu đồ, số trung bình, trung vị, mốt;
- **Xác suất và bài toán thực tế**: không gian mẫu, biến cố, mô hình hóa.
""",
    """- **Thống kê**: bảng tần số/tần số tương đối, biểu đồ, dữ liệu ghép nhóm, số trung bình, trung vị, mốt;
- **Xác suất và bài toán thực tế**: xác suất thực nghiệm, không gian mẫu, biến cố, xác suất theo mô hình và mô hình hóa.
""",
    guard="- **Thống kê**: bảng tần số/tần số tương đối",
)

print("Coherence fixes applied.")
