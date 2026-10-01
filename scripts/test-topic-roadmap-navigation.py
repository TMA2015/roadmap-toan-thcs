#!/usr/bin/env python3
from pathlib import Path
import re
import sys

ROOT = Path("docs/kien-thuc")

# Rendering contract: existing lesson sources may use Markdown inside raw HTML.
mkdocs = Path("mkdocs.yml").read_text(encoding="utf-8")
for extension in ("attr_list", "md_in_html"):
    if f"  - {extension}" not in mkdocs:
        raise SystemExit(f"Missing Markdown extension required by topic UI: {extension}")

# Practice footer contract:
# previous topic first -> same-topic navigation in the middle -> next topic last.
practice_pages = sorted(ROOT.glob("[0-9][0-9]-*/bai-tap.md"))
checked = 0
for path in practice_pages:
    m = re.match(r"(\d\d)-", path.parent.name)
    if not m:
        continue
    topic = int(m.group(1))
    if topic == 1:
        continue
    text = path.read_text(encoding="utf-8")

    if topic == 25:
        markers = [
            "**← Chuyên đề trước:**",
            "**← Học kiến thức:**",
            "**→ Tự kiểm tra học thuật:**",
        ]
    else:
        markers = [
            "**← Chuyên đề trước:**",
            "**← Học kiến thức:**",
            "**→ Tự kiểm tra:**",
            "**→ Chuyên đề tiếp theo:**",
        ]

    positions = [text.rfind(marker) for marker in markers]
    if any(pos < 0 for pos in positions):
        raise SystemExit(f"Missing standardized Practice navigation marker in {path}: {markers}")
    if positions != sorted(positions):
        raise SystemExit(f"Practice links violate previous -> same-topic -> next order: {path}")
    checked += 1

if checked != 24:
    raise SystemExit(f"Expected to validate 24 Practice pages CĐ02–25, got {checked}")

print("PASS: Practice roadmap links follow previous -> same-topic -> next across CĐ02–25.")

if "--built" in sys.argv:
    site = Path("site")
    affected = [
        "02-so-va-phep-tinh",
        "04-bieu-thuc-dai-so",
        "05-7-hang-dang-thuc",
        "06-phan-tich-da-thuc",
        "07-phan-thuc-dai-so",
        "08-phuong-trinh-bat-phuong-trinh",
        "09-he-phuong-trinh",
        "10-ham-so-do-thi",
        "11-can-thuc",
        "12-phuong-trinh-bac-hai-viete",
        "13-goc-va-duong-thang",
    ]
    for slug in affected:
        path = site / "kien-thuc" / slug / "index.html"
        if not path.exists():
            raise SystemExit(f"Built topic page missing: {path}")
        html = path.read_text(encoding="utf-8")
        if "[🎯 Sang Phòng Luyện Tập]" in html or "{ .md-button" in html:
            raise SystemExit(f"Raw Markdown leaked into built continuation block: {path}")
        if "Sang Phòng Luyện Tập" not in html or "Kiểm Tra Độ Sẵn Sàng" not in html:
            raise SystemExit(f"Built continuation links missing: {path}")
        if 'class="md-button' not in html:
            raise SystemExit(f"Continuation button attributes were not rendered: {path}")
    print("PASS: built continuation links render as HTML buttons without raw Markdown leakage.")
