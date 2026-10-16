#!/usr/bin/env python3
"""CT05–07 published Practice only; all 40 historic paper-source IDs kept byte-identical."""
from pathlib import Path
from types import SimpleNamespace
import hashlib
import json
import re
import sys
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from hooks.topic_markdown_fixes import on_page_markdown

SOURCE = {
    "05-7-hang-dang-thuc": ("ff4a8019b0f43e4eea0660bed0926abd89fa4c14", "05-7-hang-dang-thuc-v1.manifest.json", 13),
    "06-phan-tich-da-thuc": ("00e983516ba2025b2bec54d506462553e4ca9647", "06-phan-tich-da-thuc-v1.manifest.json", 13),
    "07-phan-thuc-dai-so": ("80b8620ada44de09ddf34e8c60c57a42adf44b6d", "07-phan-thuc-dai-so-v1.manifest.json", 14),
}
total_old_ids = 0
for slug, (locked_blob, manifest_name, old_items) in SOURCE.items():
    source_path = "kien-thuc/" + slug + "/bai-tap.md"
    raw = (Path("docs") / source_path).read_bytes()
    git_blob = hashlib.sha1(b"blob " + str(len(raw)).encode() + b"\0" + raw).hexdigest()
    assert git_blob == locked_blob, f"Audited paper-source change: {slug} got {git_blob}"
    md = raw.decode("utf-8")
    prefix = slug[:2]
    item_ids = re.findall(r"^####\s+(" + prefix + r"-(?:WR|ENT|CH)-\d+)\b", md, flags=re.M)
    assert len(item_ids) == old_items and len(set(item_ids)) == old_items, (slug, item_ids)
    total_old_ids += len(item_ids)

    manifest = json.loads((Path("docs/assets/data/practice") / manifest_name).read_text(encoding="utf-8"))
    assert manifest["topic"]["id"] == slug
    ids = []
    for part in manifest["sources"]:
        data = json.loads((Path("docs/assets/data/practice") / part).read_text(encoding="utf-8"))
        ids.extend(q["id"] for q in data["questions"])
    assert len(ids) == manifest["question_count"] == 120 and len(set(ids)) == 120, slug
    page = SimpleNamespace(file=SimpleNamespace(src_path=source_path))
    visible = on_page_markdown(md, page, None, None)
    topic = "CT" + prefix
    assert visible.startswith("# Luyện tập"), slug
    assert f'data-practice-ui-v2="{topic}"' in visible
    assert visible.count('data-practice-bank-v2=') == 1
    assert manifest_name in visible and 'data-session-size="10"' in visible
    assert '<div id="luyen-tap-tuong-tac" aria-hidden="true"></div>' in visible
    assert visible.count('<h2>') == 1 and "<h2>Luyện tập trực tiếp</h2>" in visible
    assert visible.count('<nav class="practice-ui-v2-actions"') == 1
    assert f'../../../luyen-tap/tu-luan/?topic={topic}' in visible
    assert 'href="../tu-kiem-tra/"' in visible
    assert '???' not in visible and "Luyện tự luận & trình bày" not in visible
    assert "Theo dõi sau khi luyện" not in visible and "Liên kết Roadmap" not in visible
    assert not any(item in visible for item in item_ids), slug
    print(f"PASS {topic}: 120 unique interactive IDs, {len(item_ids)} preserved old IDs, one clean Practice entry")
assert total_old_ids == 40, total_old_ids
other = "kien-thuc/14-tam-giac/bai-tap.md"
assert on_page_markdown("# No pilot\n", SimpleNamespace(file=SimpleNamespace(src_path=other)), None, None) == "# No pilot\n"
print("PASS Wave 2: 40 paper sources locked and hidden in published views; no ID, scoring or storage changes")
