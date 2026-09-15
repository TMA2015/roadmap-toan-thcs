#!/usr/bin/env python3
from pathlib import Path

p = Path('docs/kien-thuc/21-thong-ke/index.md')
text = p.read_text(encoding='utf-8')

replacements = [
(
"""Khi đọc biểu đồ cột phải kiểm tra:\n- tên biểu đồ;\n- trục ngang;\n- trục dọc;\n- đơn vị;\n- thang chia.\n\n### 3.6. Biểu đồ đoạn thẳng""",
"""Khi đọc biểu đồ cột phải kiểm tra:\n- tên biểu đồ;\n- trục ngang;\n- trục dọc;\n- đơn vị;\n- thang chia.\n\n<p align=\"center\">\n  <img src=\"../../assets/statistics/21/21-bieu-do-cot-cau-truc.svg\"\n       alt=\"Cấu trúc biểu đồ cột với trục ngang, trục dọc, thang chia và chiều cao cột\"\n       width=\"650\">\n</p>\n\n> Khi đọc một cột, hãy dóng chiều cao của cột sang **thang chia trên trục dọc** thay vì ước lượng bằng mắt.\n\n### 3.6. Biểu đồ đoạn thẳng"""
),
(
"""Cần quan sát:\n- xu hướng tăng;\n- xu hướng giảm;\n- điểm cao nhất, thấp nhất;\n- đoạn thay đổi mạnh.\n\n\n### 3.6A. Biểu đồ cột kép và biểu đồ hình quạt tròn""",
"""Cần quan sát:\n- xu hướng tăng;\n- xu hướng giảm;\n- điểm cao nhất, thấp nhất;\n- đoạn thay đổi mạnh.\n\n<p align=\"center\">\n  <img src=\"../../assets/statistics/21/21-bieu-do-doan-thang-xu-huong.svg\"\n       alt=\"Biểu đồ đoạn thẳng minh họa đoạn tăng, đoạn giảm và điểm cao nhất\"\n       width=\"650\">\n</p>\n\n> Không chỉ đọc từng điểm riêng lẻ; mục tiêu chính của biểu đồ đoạn thẳng là nhìn được **xu hướng thay đổi theo thời gian**.\n\n### 3.6A. Biểu đồ cột kép và biểu đồ hình quạt tròn"""
),
(
"""**Biểu đồ cột kép** phù hợp khi cần so sánh **hai dãy số liệu theo cùng các nhóm**. Khi đọc phải đối chiếu đúng chú giải, vì hai cột đứng cạnh nhau nhưng biểu diễn hai đối tượng khác nhau.\n\n**Biểu đồ hình quạt tròn**""",
"""**Biểu đồ cột kép** phù hợp khi cần so sánh **hai dãy số liệu theo cùng các nhóm**. Khi đọc phải đối chiếu đúng chú giải, vì hai cột đứng cạnh nhau nhưng biểu diễn hai đối tượng khác nhau.\n\n<p align=\"center\">\n  <img src=\"../../assets/statistics/21/21-bieu-do-cot-kep.svg\"\n       alt=\"Biểu đồ cột kép so sánh hai dãy số liệu theo cùng các nhóm và có chú giải\"\n       width=\"650\">\n</p>\n\n> Với mỗi nhóm, hãy so sánh **hai cột cùng vị trí** và luôn đọc chú giải trước khi kết luận.\n\n**Biểu đồ hình quạt tròn**"""
),
(
"""`góc = p/100 × 360° = 3,6p°`\n\n> Chỉ dùng biểu đồ quạt tròn khi các phần thuộc cùng một tổng thể. Tổng các tỉ lệ phải bằng `100%` (sai khác rất nhỏ có thể xuất hiện do làm tròn).""",
"""`góc = p/100 × 360° = 3,6p°`\n\n<p align=\"center\">\n  <img src=\"../../assets/statistics/21/21-bieu-do-quat-tron.svg\"\n       alt=\"Biểu đồ quạt tròn minh họa các tỉ lệ phần trăm và góc ở tâm tương ứng\"\n       width=\"650\">\n</p>\n\n> Chỉ dùng biểu đồ quạt tròn khi các phần thuộc cùng một tổng thể. Tổng các tỉ lệ phải bằng `100%` (sai khác rất nhỏ có thể xuất hiện do làm tròn)."""
),
(
"""`xᵢ = (aᵢ + aᵢ₊₁)/2`\n\n> Các nhóm phải bao phủ toàn bộ dữ liệu và quy ước đầu mút phải nhất quán; nếu nhóm bị chồng lấn, một giá trị ở biên có thể bị đếm hai lần.\n\n### 3.7. Chất lượng dữ liệu""",
"""`xᵢ = (aᵢ + aᵢ₊₁)/2`\n\n<p align=\"center\">\n  <img src=\"../../assets/statistics/21/21-du-lieu-ghep-nhom.svg\"\n       alt=\"Dữ liệu chiều cao được chia thành các khoảng không chồng lấn với bảng tần số ghép nhóm\"\n       width=\"690\">\n</p>\n\n> Các nhóm phải bao phủ toàn bộ dữ liệu và quy ước đầu mút phải nhất quán; nếu nhóm bị chồng lấn, một giá trị ở biên có thể bị đếm hai lần.\n\n### 3.7. Chất lượng dữ liệu"""
),
]

for old, new in replacements:
    if new in text:
        continue
    if old not in text:
        raise SystemExit(f'Không tìm thấy đoạn cần thay: {old[:80]!r}')
    text = text.replace(old, new, 1)

p.write_text(text, encoding='utf-8')
print('Đã gắn 5 hình minh họa vào Chuyên đề 21.')
