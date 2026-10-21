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
# W5/W6 independently reviewed source text corrections only; this is a restricted reversible SHA allowlist.
# For these two historical sources, editing any other byte must fail by original Git-blob reconstruction.
W5_W5_W6_SOURCE_REPAIRS = {
    "17-thales-dong-dang": ("a4a136e5377a919e990191eff2887d43ed4ebad1", "#### 17-WR-02 · Thales đảo\nAD=3,AB=5,AE=6,AC=10. Chứng minh DE∥BC.\n\n??? example \"Xem lời giải\"\n    Hai tỉ số đều 3/5 nên theo Thales đảo DE∥BC.\n\n", "#### 17-WR-02 · Thales đảo\nCho tam giác \\(ABC\\), điểm \\(D\\) thuộc cạnh \\(AB\\) và điểm \\(E\\) thuộc cạnh \\(AC\\) sao cho \\(AD=3\\), \\(AB=5\\), \\(AE=6\\), \\(AC=10\\). Chứng minh \\(DE\\parallel BC\\).\n\n??? example \"Xem lời giải\"\n    Vì \\(D\\) thuộc cạnh \\(AB\\), \\(E\\) thuộc cạnh \\(AC\\) và\n    \\[\n    \\frac{AD}{AB}=\\frac35=\\frac6{10}=\\frac{AE}{AC},\n    \\]\n    theo định lí Thales đảo, \\(DE\\parallel BC\\).\n\n"),
    "19-duong-tron": ("19a4f67af37cef18dcdc7bb2b2f1e3f514780992", "#### 19-WR-06 · Hai đường tròn\nNêu điều kiện tiếp xúc ngoài và tiếp xúc trong theo R,r,d.\n\n??? example \"Xem lời giải\"\n    Tiếp xúc ngoài: \\(d=R+r\\). Tiếp xúc trong: \\(d=|R-r|\\).\n\n", "#### 19-WR-06 · Hai đường tròn\nCho hai đường tròn có bán kính \\(R,r>0\\), khoảng cách giữa hai tâm là \\(d\\). Nêu điều kiện để tiếp xúc ngoài và tiếp xúc trong (hai đường tròn phân biệt).\n\n??? example \"Xem lời giải\"\n    Tiếp xúc ngoài khi \\(d=R+r\\). Tiếp xúc trong khi \\(d=|R-r|>0\\) (tức \\(R\\ne r\\)). Nếu \\(R=r\\) và \\(d=0\\) thì hai đường tròn trùng nhau, không phải tiếp xúc.\n\n"),
    "20-hinh-hoc-tong-hop": ("a3a17073239b6dfe82db99e972e7e22e5d973df3", "#### 20-WR-06 · Hình chóp đều\nChóp có p=12 cm,trung đoạn d=5 cm,Sđáy=36 cm²,h=8 cm. Tính Sxq,V.\n\n??? example \"Xem lời giải\"\n    \\(S_{xq}=p\\cdot d=60\\) cm²; \\(V=\\frac13\\cdot36\\cdot8=96\\) cm³.\n\n", "#### 20-WR-06 · Hình chóp đều\nCho hình chóp tứ giác đều có nửa chu vi đáy \\(p=12\\) cm, diện tích đáy \\(S_{\\text{đáy}}=36\\) cm², trung đoạn \\(d=5\\) cm và chiều cao \\(h=4\\) cm. Tính diện tích xung quanh \\(S_{xq}\\) và thể tích \\(V\\).\n\n??? example \"Xem lời giải\"\n    Đáy là hình vuông cạnh \\(6\\) cm, từ tâm đáy đến trung điểm một cạnh bằng \\(3\\) cm. Vì \\(5^2=4^2+3^2\\) nên trung đoạn và chiều cao nhất quán.\n    \\(S_{xq}=p\\cdot d=12\\cdot5=60\\) cm²; \\(V=\\frac13 S_{\\text{đáy}}\\cdot h=\\frac13\\cdot36\\cdot4=48\\) cm³.\n\n"),
}

total_old = total_questions = 0
root = Path("docs/assets/data/practice")
for slug, (blob_sha, manifest_file, paper_count, question_count) in SOURCE.items():
    path = f"kien-thuc/{slug}/bai-tap.md"
    original = (Path("docs") / path).read_bytes()
    actual = hashlib.sha1(b"blob " + str(len(original)).encode() + b"\0" + original).hexdigest()
    if slug in W5_W6_SOURCE_REPAIRS:
        repaired_blob, historical_span, corrected_span = W5_W6_SOURCE_REPAIRS[slug]
        assert actual == repaired_blob, f"Unapproved W5/W6 source SHA: {slug}: {actual}"
        current_text = original.decode("utf-8")
        assert current_text.count(corrected_span) == 1
        assert historical_span not in current_text
        restored = current_text.replace(corrected_span, historical_span, 1).encode("utf-8")
        restored_sha = hashlib.sha1(b"blob " + str(len(restored)).encode() + b"\0" + restored).hexdigest()
        assert restored_sha == blob_sha, f"Historical W5/W6 {slug} source not recoverable: {restored_sha}"
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
