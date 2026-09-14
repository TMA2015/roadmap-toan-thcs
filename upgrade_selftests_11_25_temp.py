#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent
BASE = ROOT / "docs" / "kien-thuc"

RATING = """# Thang tự đánh giá

| Điểm | Mức | Hành động đề xuất |
|---:|---|---|
| 9,0–10 | Hoàn thành tốt | Có thể tiếp tục lộ trình; vẫn chữa mọi câu chưa chắc |
| 7,0–8,75 | Đạt | Chữa toàn bộ câu sai rồi chuyển tiếp |
| 5,0–6,75 | Chưa chắc | Quay lại đúng dạng bài còn yếu và luyện thêm M2–M3 |
| Dưới 5,0 | Cần củng cố | Học lại kiến thức cốt lõi và làm lại M1–M2 |

> Điểm số chỉ là một tín hiệu. Quan trọng hơn là xác định **loại lỗi** và sửa đúng phần kiến thức gốc.

---

# Checklist sau khi chấm

- [ ] Tôi đã ghi lại điểm số.
- [ ] Tôi đã đối chiếu từng câu sai với **Bảng truy nguyên lỗi**.
- [ ] Tôi đã xác định lỗi thuộc nhóm kiến thức / biến đổi / dấu / điều kiện / mô hình hóa / kết luận / trình bày.
- [ ] Tôi đã làm lại từng câu sai mà không nhìn đáp án.
- [ ] Tôi đã luyện lại kỹ năng yếu trong Practice Bank nếu cần.
- [ ] Nếu đạt từ 7 điểm trở lên, tôi đã chữa xong các câu sai trước khi chuyển tiếp.

"""

changed = []
for folder in sorted(BASE.glob("[0-9][0-9]-*")):
    try:
        num = int(folder.name[:2])
    except ValueError:
        continue
    if not 11 <= num <= 25:
        continue
    path = folder / "tu-kiem-tra.md"
    if not path.exists():
        continue
    text = path.read_text(encoding="utf-8")
    if "# Liên kết Roadmap" not in text:
        raise SystemExit(f"Thiếu heading Liên kết Roadmap: {path}")

    # Các chuyên đề 11–25 đã có mục Tự đánh giá ngắn. Thay bằng chuẩn đầy đủ
    # nhưng giữ nguyên đề, đáp án, bảng truy nguyên lỗi và liên kết Roadmap.
    pattern = re.compile(
        r"# (?:Thang )?Tự đánh giá\s*\n.*?(?=^# Liên kết Roadmap\s*$)",
        re.M | re.S | re.I,
    )
    if pattern.search(text):
        new_text = pattern.sub(RATING, text)
    elif "# Thang tự đánh giá" in text and "# Checklist sau khi chấm" in text:
        continue
    else:
        # Nếu không có mục tự đánh giá cũ, chèn trước Liên kết Roadmap.
        new_text = text.replace("# Liên kết Roadmap", RATING + "# Liên kết Roadmap", 1)

    if new_text != text:
        path.write_text(new_text, encoding="utf-8")
        changed.append(str(path.relative_to(ROOT)))

print(f"Updated {len(changed)} self-tests")
for item in changed:
    print(item)
