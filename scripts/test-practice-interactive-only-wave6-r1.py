#!/usr/bin/env python3
"""Wave 7: CT22–25 original paper locked; CT01 guidance retained, no invented bank."""
import hashlib
import json
import re
import sys
from pathlib import Path
from types import SimpleNamespace

sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
from hooks.topic_markdown_fixes import on_page_markdown

SOURCE={
    "22-dai-luong-dac-trung":("5db348cd7a85822a4152b32f2692583ea9243f4b",32,120),
    "23-xac-suat":("dff2ec1ef5385b1bcfca83d9ce070544c2ccde6b",34,120),
    "24-bai-toan-thuc-te":("abb4d4b775488ebc883034db2a23920a9f8ca564",34,120),
    "25-tong-hop-on-thi-10":("61eb5fe0349576728b0dacd55fe7069f5627135a",16,120),
}
root=Path("docs/assets/data/practice")
total=0
for slug,(locked,expected,question_count) in SOURCE.items():
    path=f"kien-thuc/{slug}/bai-tap.md"
    raw=(Path("docs") / path).read_bytes()
    blob=hashlib.sha1(b"blob "+str(len(raw)).encode()+b"\0"+raw).hexdigest()
    assert blob == locked, (slug,blob)
    md=raw.decode("utf-8")
    n=slug[:2]
    if n=="25":
        ids=re.findall(r"^####\s+(25-[A-F][1-3])\b",md,re.M)
    else:
        ids=re.findall(r"^#{3,5}\s+("+n+r"-M\d-\d+)\b",md,re.M)
    assert len(ids)==len(set(ids))==expected,(slug,len(ids),ids)
    total+=len(ids)
    manifest_name=f"{slug}-v1.manifest.json"
    manifest=json.loads((root / manifest_name).read_text(encoding="utf-8"))
    assert manifest["topic"]["id"]==slug
    assert manifest["question_count"]==question_count==120
    questions=[]
    for name in manifest["sources"]:
        questions += json.loads((root / name).read_text(encoding="utf-8"))["questions"]
    bank_ids=[q["id"] for q in questions]
    assert len(bank_ids)==len(set(bank_ids))==120,slug

    published=on_page_markdown(md,SimpleNamespace(file=SimpleNamespace(src_path=path)),None,None)
    topic="CT"+n
    assert published.count('data-practice-bank-v2=')==1
    assert published.count('data-practice-ui-v2=')==1
    assert f'data-practice-ui-v2="{topic}"' in published
    assert manifest_name in published
    assert 'data-session-size="10"' in published
    assert f"../../../luyen-tap/tu-luan/?topic={topic}" in published
    assert 'href="../tu-kiem-tra/"' in published
    assert all(item not in published for item in ids)
    if topic=="CT22":
        assert "THPT" in published and "Core Readiness THCS" in published
    if topic=="CT23":
        assert "../tu-kiem-tra-tu-luan/" in published
    if topic=="CT25":
        for href in ["../bai-toan-kinh-dien/","../kho-bai-mo-neo/","../thu-vien-de-luyen/","../tu-danh-gia-ky-nang-thi/"]:
            assert href in published
    print(f"PASS {topic}: {len(ids)} paper sources protected, 120 interactive questions, no legacy HTML")
assert total==116,total

slug="01-ban-do-chuong-trinh"
src=f"kien-thuc/{slug}/bai-tap.md"
raw=(Path("docs")/src).read_bytes()
blob=hashlib.sha1(b"blob "+str(len(raw)).encode()+b"\0"+raw).hexdigest()
assert blob=="1a68b97abe0e5352d268456ff72cb7dbb406f955"
ids=re.findall(r"^###\s+(01-M\d-\d+)\b",raw.decode("utf-8"),re.M)
assert len(ids)==len(set(ids))==12,ids
page=on_page_markdown(raw.decode("utf-8"),SimpleNamespace(file=SimpleNamespace(src_path=src)),None,None)
assert page.startswith("# Chuyên đề 01")
assert all(item not in page for item in ids)
assert 'data-practice-bank-v2' not in page
for target in ["../../../roadmap/","../../../hoc-theo-lop/","../../"]:
    assert target in page
print("PASS CT01: twelve planning tasks retained in original, published as orientation (no invented MCQ bank)")
print("PASS complete Practice cleanup source controls; old academic papers retained for review")
