#!/usr/bin/env python3
"""Source-locked Wave 1: original 75 paper IDs preserved; published pages interactive-only."""
import hashlib
import sys
from pathlib import Path
from types import SimpleNamespace
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from hooks.topic_markdown_fixes import on_page_markdown

SOURCE = {
    "02-so-va-phep-tinh": ("64982a74af0618b5c28d6b8ca53370b24093e0ec", "v4", "a-luyen-nhanh-tuong-tac"),
    "03-ti-le-ti-le-thuc": ("c242f30c88adf88f8344bdbf0fd4a6b436e32a99", "v4", "luyen-tap-tuong-tac"),
    "04-bieu-thuc-dai-so": ("44db7e7cf12884542ee98d749cf91e842de5a44d", "v6", "luyen-tap-tuong-tac"),
    "21-thong-ke": ("1064a927d0b2991d177d368229f8b2da2486be53", "v2", "luyen-tap-tuong-tac"),
}
for slug, (expected_blob, version, anchor) in SOURCE.items():
    src = f"kien-thuc/{slug}/bai-tap.md"
    raw = Path("docs", src).read_bytes()
    sha = hashlib.sha1(b"blob " + str(len(raw)).encode() + b"\0" + raw).hexdigest()
    assert sha == expected_blob, f"Authored paper source drift: {src} {sha}"
    md = raw.decode("utf-8")
    page = SimpleNamespace(file=SimpleNamespace(src_path=src))
    visible = on_page_markdown(md, page, None, None)
    topic = f"CT{slug[:2]}"
    assert visible.startswith("# ") and f'data-practice-ui-v2="{topic}"' in visible
    assert visible.count("data-practice-bank-v2=") == 1
    assert f"{slug}-{version}.manifest.json" in visible
    assert f'<div id="{anchor}" aria-hidden="true"></div>' in visible
    assert '<h2 id="' not in visible and "Chọn đáp án hoặc nhập kết quả ngay" not in visible
    assert "Các câu hỏi có thể thuộc nhiều lớp" not in visible
    assert 'href="../../../luyen-tap/?topic=' + topic + '"' in visible
    assert 'href="../tu-kiem-tra/"' in visible
    assert "Đáp án nhanh" not in visible and "Hướng dẫn chọn lọc" not in visible
    assert "## B. ✍️" not in visible and "# Mức 1" not in visible
    assert "??? example" not in visible and "??? tip" not in visible
    assert "localStorage" not in visible
    assert len(visible) < len(md), f"Old paper block leaked to published page: {topic}"
    print(f"PASS {topic}: original authored blob {sha[:12]}, one interactive player, no visible paper bank")
other = "kien-thuc/08-phuong-trinh-bat-phuong-trinh/bai-tap.md"
assert on_page_markdown("# Other topic\n", SimpleNamespace(file=SimpleNamespace(src_path=other)), None, None) == "# Other topic\n"
print("PASS: source protection and four-topic interactive-only publication")
