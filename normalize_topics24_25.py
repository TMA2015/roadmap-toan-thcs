from pathlib import Path

FILES = {
    Path("docs/kien-thuc/24-bai-toan-thuc-te/index.md"): {
        "old_status": "> **Trạng thái:** Cấu trúc Roadmap đã chuẩn hóa; đang kiểm định nội dung học thuật.",
        "new_status": "> **Trạng thái:** Đã kiểm định nội dung học thuật; cấu trúc Roadmap chuẩn 11 mục.",
        "old_criterion": "- [ ] Đạt ít nhất `7/8` câu tự kiểm tra.",
        "new_criterion": "- [ ] Đạt tối thiểu **7/10** ở bài Tự kiểm tra và chữa xong các câu sai trước khi chuyển sang Chuyên đề 25.",
        "anchor": "- **→ Kiến thức nền liên hệ:** các chuyên đề từ [02 – Số và phép tính](../02-so-va-phep-tinh/index.md) đến [22 – Các đại lượng đặc trưng của dữ liệu](../22-dai-luong-dac-trung/index.md)\n",
        "links": "\n- **✏️ Luyện tập:** [Bài tập Chuyên đề 24](bai-tap.md)\n- **✅ Tự kiểm tra:** [Tự kiểm tra Chuyên đề 24](tu-kiem-tra.md)\n",
    },
    Path("docs/kien-thuc/25-tong-hop-on-thi-10/index.md"): {
        "old_status": "> **Trạng thái:** Cấu trúc Roadmap đã chuẩn hóa; đang kiểm định nội dung học thuật và chiến lược ôn tập.",
        "new_status": "> **Trạng thái:** Đã kiểm định nội dung học thuật và chiến lược ôn tập; cấu trúc Roadmap chuẩn 11 mục.",
        "old_criterion": "- [ ] Đạt ít nhất `7/8` câu tự kiểm tra.",
        "new_criterion": "- [ ] Đạt tối thiểu **7/10** ở bài Tự kiểm tra và chữa xong các câu sai.",
        "anchor": "- **🏁 Kết thúc Roadmap:** dùng chuyên đề này như bảng điều khiển ôn tập.\n",
        "links": "\n- **✏️ Luyện tập:** [Bài tập Chuyên đề 25](bai-tap.md)\n- **✅ Tự kiểm tra:** [Tự kiểm tra Chuyên đề 25](tu-kiem-tra.md)\n",
    },
}


def replace_once(text: str, old: str, new: str, label: str) -> str:
    count = text.count(old)
    if count == 0:
        if new in text:
            print(f"  - {label}: đã chuẩn hóa từ trước")
            return text
        raise RuntimeError(f"Không tìm thấy đoạn cần thay ({label})")
    if count != 1:
        raise RuntimeError(f"Đoạn cần thay xuất hiện {count} lần ({label}), dừng để kiểm tra")
    return text.replace(old, new, 1)


for path, cfg in FILES.items():
    if not path.exists():
        raise FileNotFoundError(path)

    text = path.read_text(encoding="utf-8")
    original = text

    text = replace_once(text, cfg["old_status"], cfg["new_status"], "trạng thái")
    text = replace_once(text, cfg["old_criterion"], cfg["new_criterion"], "điều kiện hoàn thành")

    if cfg["links"].strip() not in text:
        anchor = cfg["anchor"]
        if text.count(anchor) != 1:
            raise RuntimeError(f"Không xác định duy nhất vị trí chèn liên kết trong {path}")
        text = text.replace(anchor, anchor + cfg["links"], 1)
    else:
        print("  - liên kết Luyện tập/Tự kiểm tra: đã có")

    if text != original:
        path.write_text(text, encoding="utf-8", newline="\n")
        print(f"Đã chuẩn hóa: {path}")
    else:
        print(f"Không cần thay đổi: {path}")

print("Hoàn tất chuẩn hóa Topic 24–25.")
