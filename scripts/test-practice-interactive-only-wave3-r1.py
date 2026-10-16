#!/usr/bin/env python3
"""CT08-10: original old written content locked, published Practice interactive only."""
import hashlib
import json
import re
import sys
from pathlib import Path
from types import SimpleNamespace

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from hooks.topic_markdown_fixes import on_page_markdown

SOURCE = {
    "08-phuong-trinh-bat-phuong-trinh": ("6d29234ccb111329671f432df78c09b3ecda4877", "08-phuong-trinh-bat-phuong-trinh-v1.manifest.json", 11, 132),
    "09-he-phuong-trinh": ("0236497368fdb5dec9a53526065be468627405df", "09-he-phuong-trinh-v1.manifest.json", 13, 129),
    "10-ham-so-do-thi": ("b06ed2766dc9a455f62db0138f7a75f0bb13a58f", "10-ham-so-do-thi-v1.manifest.json", 13, 120),
}
old_total = 0
for slug, (locked_blob, manifest_name, expected_old, expected_questions) in SOURCE.items():
    source_path = f"kien-thuc/{slug}/bai-tap.md"
    raw = (Path("docs") / source_path).read_bytes()
    blob = hashlib.sha1(b"blob " + str(len(raw)).encode() + b"\0" + raw).hexdigest()
    assert blob == locked_blob, f"Paper source unexpectedly changed: {slug} {blob}"
    markdown = raw.decode("utf-8")
    ids = re.findall(
        r"^#{3,5}\s+(" + slug[:2] + r"-(?:WR|ENT|CH)-\d+)\b",
        markdown, re.M
    )
    assert len(ids) == expected_old and len(set(ids)) == expected_old, (slug, ids)
    old_total += len(ids)
    bank_root = Path("docs/assets/data/practice")
    manifest = json.loads((bank_root / manifest_name).read_text(encoding="utf-8"))
    assert manifest["topic"]["id"] == slug
    questions = []
    for src in manifest["sources"]:
        chunk = json.loads((bank_root / src).read_text(encoding="utf-8"))
        questions.extend(chunk["questions"])
    q_ids = [q["id"] for q in questions]
    assert len(q_ids) == manifest["question_count"] == expected_questions, slug
    assert len(set(q_ids)) == expected_questions, slug

    page = SimpleNamespace(file=SimpleNamespace(src_path=source_path))
    published = on_page_markdown(markdown, page, None, None)
    topic = "CT" + slug[:2]
    assert published.startswith("# Luyện tập – Chuyên đề"), slug
    assert published.count('data-practice-bank-v2=') == 1
    assert published.count('data-practice-ui-v2=') == 1
    assert f'data-practice-ui-v2="{topic}"' in published
    assert manifest_name in published
    assert 'data-session-size="10"' in published
    assert 'href="#luyen-tap-tuong-tac"' in published
    assert '<div id="luyen-tap-tuong-tac" aria-hidden="true"></div>' in published
    assert f"../../../luyen-tap/tu-luan/?topic={topic}" in published
    assert 'href="../tu-kiem-tra/"' in published
    assert "Luyện tự luận & trình bày" not in published
    assert "Theo dõi sau khi luyện" not in published
    assert "???" not in published
    assert all(item not in published for item in ids), slug
    print(f"PASS {topic}: preserved {len(ids)} historical IDs; {len(q_ids)} live questions, single student player")
assert old_total == 37
other = "kien-thuc/99-no-such-topic/bai-tap.md"
assert on_page_markdown("# Outside\n", SimpleNamespace(file=SimpleNamespace(src_path=other)), None, None) == "# Outside\n"
print("PASS CT08–10: 37 paper source IDs unchanged; 381 interactive questions preserved; no grader/history mutations")
