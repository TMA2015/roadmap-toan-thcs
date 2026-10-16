#!/usr/bin/env python3
"""Wave 5: CT11–13 source-locked paper inventory, unchanged existing Practice banks."""
import hashlib
import json
import re
import sys
from pathlib import Path
from types import SimpleNamespace

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from hooks.topic_markdown_fixes import on_page_markdown

SOURCE = {
    "11-can-thuc": ("8814674a67c9f576df49284282bd1fa16cfbba7c", "11-can-thuc-v1.manifest.json", 13, 132),
    "12-phuong-trinh-bac-hai-viete": ("8199916e355e8d1a617ef8687c4f442e6c6e48d1", "12-phuong-trinh-bac-hai-viete-v1.manifest.json", 13, 123),
    "13-goc-va-duong-thang": ("88b63b418032be845c535598ece747fbb82cc97f", "13-goc-va-duong-thang-v1.manifest.json", 13, 156),
}
total_old = total_questions = 0
root = Path("docs/assets/data/practice")
for slug, (blob_sha, manifest_file, paper_count, question_count) in SOURCE.items():
    path = f"kien-thuc/{slug}/bai-tap.md"
    original = (Path("docs") / path).read_bytes()
    actual = hashlib.sha1(b"blob " + str(len(original)).encode() + b"\0" + original).hexdigest()
    assert actual == blob_sha, f"Immutable academic paper source changed: {slug}: {actual}"
    paper = original.decode("utf-8")
    paper_ids = re.findall(
        r"^#{3,5}\s+(" + slug[:2] + r"-(?:WR|ENT|CH|SUP)-\d+)\b", paper, re.M
    )
    assert len(paper_ids) == paper_count == len(set(paper_ids)), (slug, paper_ids)
    total_old += len(paper_ids)

    manifest = json.loads((root / manifest_file).read_text(encoding="utf-8"))
    assert manifest["topic"]["id"] == slug
    assert manifest["session_size"] == 10
    questions = []
    for part in manifest["sources"]:
        data = json.loads((root / part).read_text(encoding="utf-8"))
        questions.extend(data["questions"])
    ids = [q["id"] for q in questions]
    assert len(ids) == manifest["question_count"] == question_count, slug
    assert len(set(ids)) == question_count, slug
    assert all(len(q["options"]) >= 2 and isinstance(q["answer"], int) for q in questions), slug
    total_questions += question_count

    page = SimpleNamespace(file=SimpleNamespace(src_path=path))
    published = on_page_markdown(paper, page, None, None)
    topic = "CT" + slug[:2]
    assert published.startswith("# Luyện tập – Chuyên đề"), slug
    assert published.count('data-practice-bank-v2=') == 1, slug
    assert published.count('data-practice-ui-v2=') == 1, slug
    assert f'data-practice-ui-v2="{topic}"' in published
    assert manifest_file in published and 'data-session-size="10"' in published
    assert '<div id="luyen-tap-tuong-tac" aria-hidden="true"></div>' in published
    assert published.count("<h2>") == 1 and "<h2>Luyện tập trực tiếp</h2>" in published
    assert 'href="#luyen-tap-tuong-tac"' in published
    assert f'../../../luyen-tap/tu-luan/?topic={topic}' in published
    assert 'href="../tu-kiem-tra/"' in published
    assert "Luyện tự luận & trình bày" not in published
    assert "Theo dõi sau khi luyện" not in published
    assert "???" not in published
    assert all(legacy not in published for legacy in paper_ids), slug
    print(f"PASS {topic}: {paper_count} original authored source IDs and {question_count} interactive questions preserved")
assert total_old == 39 and total_questions == 411
other = "kien-thuc/99-no-such-topic/bai-tap.md"
assert on_page_markdown("# Outside\n", SimpleNamespace(file=SimpleNamespace(src_path=other)), None, None) == "# Outside\n"
print("PASS Wave 5: three new Practice views only; CT14 source view untouched; no history or scoring changes")
