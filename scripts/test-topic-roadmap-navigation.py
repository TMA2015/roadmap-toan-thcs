#!/usr/bin/env python3
from pathlib import Path
import re
import runpy
import sys

ROOT = Path("docs/kien-thuc")
MKDOCS = Path("mkdocs.yml").read_text(encoding="utf-8")

# Rendering contract: keep source-locked lesson files unchanged, repair only at build time.
if "  - attr_list" not in MKDOCS:
    raise SystemExit("Missing attr_list required for Material-style Markdown buttons")
if "md_in_html" in MKDOCS:
    raise SystemExit("Do not enable md_in_html globally; it changes unrelated homepage DOM")
if "hooks/topic_markdown_fixes.py" not in MKDOCS:
    raise SystemExit("Missing narrow topic Markdown build hook")

unwrap = runpy.run_path("hooks/topic_markdown_fixes.py")["_unwrap_topic_actions"]
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
    path = ROOT / slug / "index.md"
    source = path.read_text(encoding="utf-8")
    transformed = unwrap(source)
    if '<div class="topic-workspace-actions" markdown>' in transformed:
        raise SystemExit(f"Build hook failed to unwrap continuation block: {path}")
    if "](bai-tap.md)" not in transformed or "](tu-kiem-tra.md)" not in transformed:
        raise SystemExit(f"Build hook lost continuation destinations: {path}")

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

print("PASS: source-locked topic lessons are repaired by a narrow build hook.")
print("PASS: Practice roadmap links follow previous -> same-topic -> next across CĐ02–25.")

if "--built" in sys.argv:
    site = Path("site")
    for slug in affected:
        path = site / "kien-thuc" / slug / "index.html"
        if not path.exists():
            raise SystemExit(f"Built topic page missing: {path}")
        html = path.read_text(encoding="utf-8")
        if "[🎯 Sang Phòng Luyện Tập]" in html or "{ .md-button" in html:
            raise SystemExit(f"Raw Markdown leaked into built continuation block: {path}")
        if "/bai-tap/" not in html or "/tu-kiem-tra/" not in html:
            raise SystemExit(f"Built continuation destinations missing: {path}")
        if 'class="md-button' not in html:
            raise SystemExit(f"Continuation button attributes were not rendered: {path}")
    print("PASS: built continuation links render as HTML buttons without raw Markdown leakage.")
