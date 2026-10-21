#!/usr/bin/env python3
"""Wave 6: CT14-20 original paper/geometry proofs source-locked, Practice interactive-only."""
import hashlib
import json
import re
import sys
from pathlib import Path
from types import SimpleNamespace

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from hooks.topic_markdown_fixes import on_page_markdown

SOURCE = {
    "14-tam-giac": ("4d557cf603a8ca33ce8ac0a7f5ac69834672df3a", "14-tam-giac-v1.manifest.json", 13, 140),
    "15-duong-dong-quy": ("2a80519449440c60b1f0322c2edc79efa9a3c2a2", "15-duong-dong-quy-v1.manifest.json", 11, 124),
    "16-tu-giac": ("558496d99fec87d6dee623ae0ca6da023f06ddda", "16-tu-giac-v1.manifest.json", 12, 120),
    "17-thales-dong-dang": ("d4a37304612feb9838d63063156b639e28160a3c", "17-thales-dong-dang-v1.manifest.json", 12, 132),
    "18-he-thuc-luong": ("91ed070cca1312663048df86fc68c04050e157cb", "18-he-thuc-luong-v1.manifest.json", 12, 132),
    "19-duong-tron": ("8beca6002685639a092eafcd8a65d31b1e37ef1f", "19-duong-tron-v1.manifest.json", 12, 147),
    "20-hinh-hoc-tong-hop": ("003a0aa9d733c8fb44eb2db795600bb60e499f40", "20-hinh-hoc-tong-hop-v1.manifest.json", 12, 195),
}
total_old = total_questions = 0
root = Path("docs/assets/data/practice")
for slug, (blob_sha, manifest_file, paper_count, question_count) in SOURCE.items():
    path = f"kien-thuc/{slug}/bai-tap.md"
    original = (Path("docs") / path).read_bytes()
    actual = hashlib.sha1(b"blob " + str(len(original)).encode() + b"\0" + original).hexdigest()
    if slug == "17-thales-dong-dang":
        # W5 NotebookLM reviewed correction: permit exactly one reversible source repair.
        # Never replace the old lock with a new SHA without recovering original content.
        assert actual == "a4a136e5377a919e990191eff2887d43ed4ebad1", (slug, actual)
        old_span = r"""#### 17-WR-02 · Thales đảo
AD=3,AB=5,AE=6,AC=10. Chứng minh DE∥BC.

??? example "Xem lời giải"
    Hai tỉ số đều 3/5 nên theo Thales đảo DE∥BC."""
        new_span = r"""#### 17-WR-02 · Thales đảo
Cho tam giác \(ABC\), điểm \(D\) thuộc cạnh \(AB\) và điểm \(E\) thuộc cạnh \(AC\) sao cho \(AD=3\), \(AB=5\), \(AE=6\), \(AC=10\). Chứng minh \(DE\parallel BC\).

??? example "Xem lời giải"
    Vì \(D\) thuộc cạnh \(AB\), \(E\) thuộc cạnh \(AC\) và
    \[
    \frac{AD}{AB}=\frac35=\frac6{10}=\frac{AE}{AC},
    \]
    theo định lí Thales đảo, \(DE\parallel BC\)."""
        text = original.decode("utf-8")
        assert text.count(new_span) == 1 and old_span not in text, "Unexpected W5 CT17 edited span"
        recovered = text.replace(new_span, old_span, 1).encode("utf-8")
        recovered_sha = hashlib.sha1(b"blob " + str(len(recovered)).encode() + b"\0" + recovered).hexdigest()
        assert recovered_sha == blob_sha, f"Historical CT17 source not recoverable: {recovered_sha}"
    else:
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
assert total_old == 84 and total_questions == 990
other = "kien-thuc/99-no-such-topic/bai-tap.md"
assert on_page_markdown("# Outside\n", SimpleNamespace(file=SimpleNamespace(src_path=other)), None, None) == "# Outside\n"
print("PASS Wave 5: three new Practice views only; nonpilot synthetic source path untouched; no history or scoring changes")
