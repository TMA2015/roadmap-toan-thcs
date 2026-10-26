#!/usr/bin/env python3
"""R29: regression inventory of EVERY legacy infographic embed in all 25 THCS
Knowledge topics, plus 25 canonical phone/dark/print browser smoke cases.

This verifies image-retention decisions and readable rendering, NOT independent
academic proof that every omitted poster's propositions survive in native text.
Source index.md, exercise banks, student state and authentication stay untouched.
"""
from pathlib import Path
import re
import shutil
from xml.etree import ElementTree as ET
from playwright.sync_api import sync_playwright

# slug, canonical reviewed candidate, source infographic count, omitted poster IDs,
# newly authored useful educational diagrams (outside original source embeds).
# CT01 archive filename 01-overview.svg uses "overview.svg" as its second segment.
TOPICS = [
    ("01-ban-do-chuong-trinh", "r13", 1, "overview.svg", ("01-overview-r2.svg",)),
    ("02-so-va-phep-tinh", "r9", 4, "01 02 03", ()),
    ("03-ti-le-ti-le-thuc", "r9", 4, "01 02 03", ()),
    ("04-bieu-thuc-dai-so", "r10", 3, "01 02 03", ()),
    ("05-7-hang-dang-thuc", "r3", 4, "01 02 03 04", ("05-05-mo-hinh-dien-tich-binh-phuong-r2.svg",)),
    ("06-phan-tich-da-thuc", "r9", 3, "01 03", ()),
    ("07-phan-thuc-dai-so", "r10", 4, "01 02 03 04", ()),
    ("08-phuong-trinh-bat-phuong-trinh", "r10", 6, "01 02 03 04", ()),
    ("09-he-phuong-trinh", "r9", 4, "01 02 03", ()),
    ("10-ham-so-do-thi", "tabs-r6", 9, "01 02 03 04", ("10-10-tu-cong-thuc-den-do-thi-r3.svg",)),
    ("11-can-thuc", "r10", 4, "01 02 03 04", ()),
    ("12-phuong-trinh-bac-hai-viete", "r11", 5, "01 02 03 04", ()),
    ("13-goc-va-duong-thang", "r11", 3, "01 02 03", ()),
    ("14-tam-giac", "r3", 4, "01 02 03 04", ()),
    ("15-duong-dong-quy", "r11", 4, "01 02 03 04", ()),
    ("16-tu-giac", "r11", 4, "01 02 03 04", ()),
    ("17-thales-dong-dang", "r12", 4, "01 02 03 04", ()),
    ("18-he-thuc-luong", "r12", 4, "01 02 03 04", ()),
    ("19-duong-tron", "r12", 4, "01 02 03 04", ()),
    ("20-hinh-hoc-tong-hop", "r12", 4, "01 02 03 04", ()),
    ("21-thong-ke", "r3", 3, "01 02 03", ()),
    ("22-dai-luong-dac-trung", "r13", 3, "01 02 03", ()),
    ("23-xac-suat", "r3", 3, "01 02 03", ()),
    ("24-bai-toan-thuc-te", "r13", 4, "01 02 03 04", ()),
    ("25-tong-hop-on-thi-10", "r13", 4, "01 02 03 04", ()),
]
assert len(TOPICS) == 25 and len({x[0] for x in TOPICS}) == 25
IMAGE = re.compile(r'!\[[^\]]*\]\([^)]*assets/infographics/(\d\d)/([^)]*?\.svg)\)')
def image_names(text, number):
    matches = IMAGE.findall(text)
    assert all(n == number for n, _ in matches), (number, "cross-topic infographic embed")
    names = [name for _, name in matches]
    assert len(names) == len(set(names)), (number, "duplicate image embed")
    return set(names)

counts = {"source": 0, "omitted": 0, "retained": 0, "added": 0}
for slug, version, original_count, omitted_ids, added in TOPICS:
    number = slug[:2]
    folder = Path("docs/kien-thuc") / slug
    candidate_file = ("preview-tabs-r6.md" if version == "tabs-r6"
                      else "preview-composition-" + version + ".md")
    source = (folder / "index.md").read_text(encoding="utf-8")
    candidate = (folder / candidate_file).read_text(encoding="utf-8")
    old = image_names(source, number)
    now = image_names(candidate, number)
    assert len(old) == original_count, (slug, "original image inventory changed", sorted(old))
    omitted = {name for name in old if name.split("-")[1] in omitted_ids.split()}
    expected = (old - omitted) | set(added)
    assert now == expected, (slug, "unreviewed infographic change",
                             "missing", sorted(expected - now),
                             "unexpected", sorted(now - expected))
    for name in old | now:
        path = Path("docs/assets/infographics") / number / name
        assert path.is_file(), (slug, "SVG original/diagram deleted", name)
        data = path.read_text(encoding="utf-8")
        assert "<svg" in data and "</svg>" in data, (slug, "malformed SVG shell", name)
    counts["source"] += len(old)
    counts["omitted"] += len(omitted)
    counts["retained"] += len(old - omitted)
    counts["added"] += len(set(added))
    print("PASS R29 image decision inventory", number, len(old), len(omitted),
          len(old - omitted), len(added), flush=True)
print("R29 IMAGE EMBED INVENTORY (NOT ACADEMIC SIGN-OFF):", counts, flush=True)

# R36: The historical CT01 graphic remains on disk for rollback. Its new
# student-facing copy removes only the obsolete universal 80% gate, since
# actual topic criteria are not a single fixed Readiness threshold.
source01 = Path("docs/assets/infographics/01/01-overview.svg").read_text(encoding="utf-8")
visual01 = Path("docs/assets/infographics/01/01-overview-r2.svg").read_text(encoding="utf-8")
ct01 = Path("docs/kien-thuc/01-ban-do-chuong-trinh/preview-composition-r13.md").read_text(encoding="utf-8")
assert source01.count("Đạt ≥ 80% → đi tiếp") == 1, "CT01 archived source changed"
assert visual01 == source01.replace("Đạt ≥ 80% → đi tiếp", "Đạt tiêu chí → đi tiếp"), (
    "CT01 threshold-neutral artwork differs in more than approved label")
assert "01-overview-r2.svg" in ct01 and "01-overview.svg)" not in ct01
assert "Sơ đồ bốn mạch Toán THCS và quan hệ học trước-sau" in ct01
ct06 = Path("docs/kien-thuc/06-phan-tich-da-thuc/preview-composition-r9.md").read_text(encoding="utf-8")
assert "xét nhân tử chung, hằng đẳng thức, nhóm hạng tử, phối hợp phương pháp, rồi nhân ngược để kiểm tra" in ct06
assert "06-02-so-do-chon-phuong-phap.svg" in ct06
print("PASS R36 CT01 neutral image criterion and CT06 decision-sequence alt", flush=True)
# R38: retained CT06 five-step decision diagram must expose a meaningful
# accessible name and description without losing any instructional step.
ct06_svg = ET.fromstring(Path("docs/assets/infographics/06/06-02-so-do-chon-phuong-phap.svg").read_text(encoding="utf-8"))
ns06 = {"svg": "http://www.w3.org/2000/svg"}
assert ct06_svg.get("role") == "img"
assert ct06_svg.get("aria-labelledby") == "ct06-method-title ct06-method-desc"
title06 = ct06_svg.find("svg:title", ns06)
desc06 = ct06_svg.find("svg:desc", ns06)
assert title06 is not None and title06.get("id") == "ct06-method-title"
assert title06.text == "Sơ đồ chọn phương pháp phân tích đa thức thành nhân tử"
assert desc06 is not None and desc06.get("id") == "ct06-method-desc"
assert "nhân ngược" in (desc06.text or "") and "phối hợp" in (desc06.text or "")
text06 = "\\n".join("".join(el.itertext()) for el in ct06_svg.findall(".//svg:text", ns06))
for step in ("BƯỚC 1 · Có nhân tử chung?", "BƯỚC 2 · Có dạng hằng đẳng thức?",
             "BƯỚC 3 · Có thể nhóm hạng tử?", "BƯỚC 4 · Phối hợp nhiều phương pháp",
             "BƯỚC 5 · Kiểm tra đã phân tích hết chưa?"):
    assert step in text06, ("CT06 decision-diagram step lost", step)
print("PASS R38 CT06 SVG title/description/role and five-step parity", flush=True)



# R39/R41: CĐ20 source SVGs remain available but duplicated posters are no longer displayed; SVGs keep accessible names,
# descriptions and all original teaching cues without changing artwork.
ct20_native = Path("docs/kien-thuc/20-hinh-hoc-tong-hop/preview-composition-r12.md").read_text(encoding="utf-8")
for filename, prefix, required in (
    ("20-02-chon-chien-luoc.svg", "ct20-strategy",
     ("1 · XÁC ĐỊNH MỤC TIÊU", "NỘI TIẾP", "ĐỒNG DẠNG", "TIẾP TUYẾN",
      "SONG SONG / VUÔNG GÓC", "TÍNH ĐỘ DÀI", "2 · KIỂM TRA TRƯỚC KHI VIẾT")),
    ("20-03-chuoi-suy-luan.svg", "ct20-chains",
     ("CHUỖI A · NỘI TIẾP", "CHUỖI B · SONG SONG",
      "CHUỖI C · ĐỒNG DẠNG", "CHUỖI D · TAM GIÁC VUÔNG")),
):
    assert filename not in ct20_native, ("CT20 duplicate poster still displayed", filename)
    svg = ET.fromstring((Path("docs/assets/infographics/20") / filename).read_text(encoding="utf-8"))
    ns = {"svg": "http://www.w3.org/2000/svg"}
    assert svg.get("role") == "img"
    assert svg.get("aria-labelledby") == f"{prefix}-title {prefix}-desc"
    title = svg.find("svg:title", ns)
    desc = svg.find("svg:desc", ns)
    assert title is not None and title.get("id") == f"{prefix}-title" and title.text
    assert desc is not None and desc.get("id") == f"{prefix}-desc" and len(desc.text or "") > 60
    labels = "\\n".join("".join(el.itertext()) for el in svg.findall(".//svg:text", ns))
    for cue in required:
        assert cue in labels, ("CT20 teaching cue lost", filename, cue)
print("PASS R39 CT20 archived SVG metadata and original teaching cues", flush=True)



# R40: retained CĐ21 statistics diagrams expose precise accessible names and
# text alternatives; data, chart geometry and original visual labels are kept.
ct21_native = Path("docs/kien-thuc/21-thong-ke/preview-composition-r3.md").read_text(encoding="utf-8")
for filename, prefix, title, desc_cues, alt_cues, visible_cues in (
    ("21-bang-tan-so.svg", "ct21-frequency", "Bảng tần số và tần suất điểm kiểm tra Toán",
     ("14 học sinh", "14,3%", "28,6%", "35,7%", "21,4%"),
     ("14 học sinh", "2, 4, 5, 3", "35,7%"),
     ("Điểm", "Tần số", "Tần suất", "6", "7", "8", "9", "2", "4", "5", "3", "14,3%", "28,6%", "35,7%", "21,4%", "14 học sinh")),
    ("21-bieu-do-cot.svg", "ct21-bars", "Biểu đồ cột tần số điểm kiểm tra Toán",
     ("2, 4, 5, 3", "0 đến 5"),
     ("2 học sinh", "4", "5", "3", "cao nhất"),
     ("6 điểm", "7 điểm", "8 điểm", "9 điểm", "2", "4", "5", "3")),
    ("21-bieu-do-doan-thang.svg", "ct21-line", "Biểu đồ đoạn thẳng nhiệt độ trung bình năm ngày",
     ("27, 28, 29, 28, 30", "ngày 5"),
     ("27, 28, 29, 28, 30", "tăng, giảm rồi tăng"),
     ("Ngày 1", "Ngày 2", "Ngày 3", "Ngày 4", "Ngày 5", "26", "27", "28", "29", "30")),
):
    assert filename in ct21_native, ("CT21 retained diagram missing", filename)
    svg = ET.fromstring((Path("docs/assets/statistics/21") / filename).read_text(encoding="utf-8"))
    ns = {"svg": "http://www.w3.org/2000/svg"}
    assert svg.get("role") == "img"
    assert svg.get("aria-labelledby") == f"{prefix}-title {prefix}-desc"
    title_el = svg.find("svg:title", ns)
    desc_el = svg.find("svg:desc", ns)
    assert title_el is not None and title_el.get("id") == f"{prefix}-title" and title_el.text == title
    assert desc_el is not None and desc_el.get("id") == f"{prefix}-desc"
    for cue in desc_cues:
        assert cue in (desc_el.text or ""), ("CT21 description cue lost", filename, cue)
    img = re.search(r'<img[^>]+src="[^"]*' + re.escape(filename) + r'"[^>]*>', ct21_native, re.S)
    assert img, ("CT21 native image missing", filename)
    alt_match = re.search(r'alt="([^"]+)"', img.group(0))
    assert alt_match, ("CT21 image alt missing", filename)
    for cue in alt_cues:
        assert cue in alt_match.group(1), ("CT21 alt cue lost", filename, cue)
    labels = "\\n".join("".join(el.itertext()) for el in svg.findall(".//svg:text", ns))
    for cue in visible_cues:
        assert cue in labels, ("CT21 source data label lost", filename, cue)
# Pin the existing bar heights and line points to catch silent data changes.
ct21_bar = ET.fromstring(Path("docs/assets/statistics/21/21-bieu-do-cot.svg").read_text(encoding="utf-8"))
bar_rects = {(el.get("x"), el.get("y"), el.get("width"), el.get("height"))
             for el in ct21_bar.findall(".//{http://www.w3.org/2000/svg}rect")}
for bar in (("160", "260", "80", "100"), ("290", "160", "80", "200"),
            ("420", "110", "80", "250"), ("550", "210", "80", "150")):
    assert bar in bar_rects, ("CT21 bar geometry changed", bar)
ct21_line = ET.fromstring(Path("docs/assets/statistics/21/21-bieu-do-doan-thang.svg").read_text(encoding="utf-8"))
line_points = [el.get("points") for el in ct21_line.findall(".//{http://www.w3.org/2000/svg}polyline")]
assert line_points == ["160,270 270,220 380,170 490,220 600,120"], "CT21 line chart data changed"
print("PASS R40 CT21 accessible diagrams, precise alt and original data", flush=True)

# R41: six text-heavy posters must not reappear on the canonical
# Knowledge route; their unique teaching facts are preserved in native text.
# This is source-text regression, NOT final image-level academic certification.
r41_paths = {
    "18": ("18-he-thuc-luong", "preview-composition-r12.md",
           ("18-02-he-thuc-duong-cao.svg", "18-03-ti-so-luong-giac.svg"),
           ("BH + CH = BC", "hình chiếu **của chính cạnh đó**",
            "AB² = BH × BC", "AC² = CH × BC", "AH² = BH × CH",
            "đối–huyền", "kề–huyền", "đối–kề", "chế độ **DEG**")),
    "20": ("20-hinh-hoc-tong-hop", "preview-composition-r12.md",
           ("20-02-chon-chien-luoc.svg", "20-03-chuoi-suy-luan.svg"),
           ("Bốn chuỗi suy luận thường gặp", "Nội tiếp → góc nội tiếp",
            "đồng dạng hoặc Thales", "bán kính tại điểm thuộc đường tròn",
            "AB² = BH × BC", "ghép đúng các đỉnh/cạnh tương ứng")),
    "24": ("24-bai-toan-thuc-te", "preview-composition-r13.md",
           ("24-03-chon-mo-hinh.svg",),
           ("Chọn mô hình theo quan hệ thực tế", "đơn vị và điều kiện",
            "không máy móc theo số ẩn", "S = vt", "A = nt")),
    "25": ("25-tong-hop-on-thi-10", "preview-composition-r13.md",
           ("25-03-luyen-de-so-loi.svg",),
           ("Sổ lỗi cá nhân nên ghi đủ bốn trường", "chuyên đề gốc",
            "nguyên nhân sai", "cách sửa", "tự làm lại không nhìn lời giải",
            "sau vài ngày")),
}
for number, (slug, filename, posters, required_cues) in r41_paths.items():
    folder = Path("docs/kien-thuc") / slug
    source = (folder / "index.md").read_text(encoding="utf-8")
    native = (folder / filename).read_text(encoding="utf-8")
    for svg_name in posters:
        assert svg_name in source, ("R41 historical source embed missing", svg_name)
        assert svg_name not in native, ("R41 text-heavy duplicate still shown", svg_name)
        assert (Path("docs/assets/infographics") / number / svg_name).is_file(), (
            "R41 source SVG deleted", svg_name)
    for cue in required_cues:
        assert cue in native, ("R41 native teaching cue missing", slug, cue)
print("PASS R41 six redundant posters omitted; native teaching cues retained", flush=True)

# Focused factual parity assertions for specific omitted text posters.
# Other posters require their own proposition-level audit before academic sign-off.
ct04 = Path("docs/kien-thuc/04-bieu-thuc-dai-so/preview-composition-r10.md").read_text(encoding="utf-8")
source04_02 = Path("docs/assets/infographics/04/04-02-kien-thuc-cot-loi.svg").read_text(encoding="utf-8")
source04_03 = Path("docs/assets/infographics/04/04-03-dang-bai-trong-tam.svg").read_text(encoding="utf-8")
assert "Dùng ngoặc khi thay số âm" in source04_02
assert "Số âm nên đặt trong ngoặc" in source04_03
for cue in ("Thay số âm phải đặt trong ngoặc", "P(-2) = (-2)² - 3·(-2) + 2 = 4 + 6 + 2 = 12", "(-2)² = 4", "-2² = -(2²) = -4"):
    assert cue in ct04, ("CT04 04-02/03 negative substitution caution lost", cue)
print("PASS R31 focused CT04 old-poster negative-substitution guard", flush=True)
# R32: the old CT17 17-04 poster contains a concrete product-to-ratio
# conversion, not just a generic instruction to use similarity.
source17_04 = Path("docs/assets/infographics/17/17-04-dang-bai-he-thuc-loi-sai.svg").read_text(encoding="utf-8")
ct17 = Path("docs/kien-thuc/17-thales-dong-dang/preview-composition-r12.md").read_text(encoding="utf-8")
assert "AB·CD = EF·GH" in source17_04 and "AB/EF = GH/CD" in source17_04
for cue in ("AB·CD = EF·GH", "AB/EF = GH/CD", "EF` và `CD` khác `0"):
    assert cue in ct17, ("CT17 17-04 product-to-ratio worked cue lost", cue)
print("PASS R32 focused CT17 17-04 old-poster product-ratio guard", flush=True)
# R37: CT18 retained text-heavy posters teach formula-selection and DEG
# calculator guards; preserve those cues in native text before deduplication.
source18_02 = Path("docs/assets/infographics/18/18-02-he-thuc-duong-cao.svg").read_text(encoding="utf-8")
source18_03 = Path("docs/assets/infographics/18/18-03-ti-so-luong-giac.svg").read_text(encoding="utf-8")
ct18 = Path("docs/kien-thuc/18-he-thuc-luong/preview-composition-r12.md").read_text(encoding="utf-8")
assert "hình chiếu của chính cạnh đó" in source18_02
assert "Máy tính phải ở chế độ DEG" in source18_03
for cue in ("hình chiếu **của chính cạnh đó**", "AB² = BH × BC", "AC² = CH × BC",
            "AH² = BH × CH", "AB × AC = AH × BC",
            "Không ghép nhầm `AB` với `CH`", "đặt máy ở chế độ **DEG**"):
    assert cue in ct18, ("CT18 retained poster formula-choice/DEG cue lost", cue)
assert "### 3.2. Hệ thức" in ct18 and "### 3.6. Bảng chọn công cụ" in ct18
print("PASS R37 CT18 retained poster formula-choice and DEG guards", flush=True)
ct19 = Path("docs/kien-thuc/19-duong-tron/preview-composition-r12.md").read_text(encoding="utf-8")
for cue in ("PT² = PA × PB", "đoạn ngoài", "giao điểm xa",
            "không lấy riêng đoạn `AB` thay cho `PB`"):
    assert cue in ct19, ("CT19 19-04 tangent-secant guard lost", cue)
# R33: the CĐ19 native tangent-secant explanation and original 19-04
# poster use P–A–B (A near P). The rendered geometry must label the
# near intersection A and far intersection B, not silently reverse them.
source19_04 = Path("docs/assets/infographics/19/19-04-he-thuc-do-dai-loi-sai.svg").read_text(encoding="utf-8")
assert "PA là đoạn ngoài" in source19_04 and "PB là toàn bộ cát tuyến" in source19_04
assert "P – A – B" in ct19
geom19 = Path("docs/assets/geometry/19/19-tiep-tuyen-cat-tuyen-v1.svg").read_text(encoding="utf-8")
root19 = ET.fromstring(geom19)
ns19 = {"svg": "http://www.w3.org/2000/svg"}
near19 = root19.find(".//svg:text[@x='470']", ns19)
far19 = root19.find(".//svg:text[@x='150']", ns19)
desc19 = root19.find("svg:desc", ns19)
assert near19 is not None and near19.text == "A", "CT19 near secant intersection must be A"
assert far19 is not None and far19.text == "B", "CT19 far secant intersection must be B"
assert desc19 is not None and "A nằm giữa P và B" in (desc19.text or "")
assert "PT² = PA × PB" in geom19
assert "19-tiep-tuyen-cat-tuyen-v1.svg" in ct19
print("PASS R33 CT19 tangent-secant SVG/alt/native near-far label parity", flush=True)
ct20 = Path("docs/kien-thuc/20-hinh-hoc-tong-hop/preview-composition-r12.md").read_text(encoding="utf-8")
for cue in ("đổi về cùng một đơn vị", "chỉ làm tròn **ở bước cuối**",
            "độ dài, diện tích hoặc thể tích"):
    assert cue in ct20, ("CT20 20-04 measurement guard lost", cue)
print("PASS R29 focused CT19/CT20 old-poster native guards", flush=True)

# R35: CT08 word-problem inequality must be valid MathJax, not bare
# parentheses and Markdown bracket lines that display raw on the lesson.
ct08 = Path("docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/preview-composition-r10.md").read_text(encoding="utf-8")
for cue in (r"\(18\)", r"\(6\)", r"\(1{,}5\)", r"\(x\in\mathbb N\)",
            "\\[\n6+1{,}5x\\le18\n\\]", r"\(x\le8\)"):
    assert cue in ct08, ("CT08 word-problem MathJax delimiter regression", cue)
assert "\n[\n6+1{,}5x\\le18\n]\n" not in ct08
print("PASS R35 CT08 word-problem MathJax delimiters", flush=True)
# R42 user-reported CĐ08 §5 issue: bare Markdown [ ... ] and (x) displayed
# raw rather than typesetting. Guard all 12 worked display equations and
# related inline expressions; no mathematical content or answers changed.
ct08_examples = ct08.split("### Ví dụ mẫu\n", 1)[1].split("\n---\n", 1)[0]
assert ct08_examples.count("\n\\[\n") == 12, "CT08 §5 display MathJax starts"
assert ct08_examples.count("\n\\]\n") == 12, "CT08 §5 display MathJax ends"
assert not re.search(r"(?m)^\s*[\[\]]\s*$", ct08_examples), "CT08 §5 raw bracket delimiter"
for cue in (r"3x=15\Rightarrow x=5", r"x=2\quad\text{hoặc}\quad x=3",
            r"-2x\le10", r"x\ge-5", r"10x+18=238\Rightarrow",
            r"\(x\in\mathbb N^*\)", r"\(10(x+3)=238\)"):
    assert cue in ct08_examples, ("CT08 §5 math teaching step lost", cue)
print("PASS R42 CT08 §5 12 MathJax display equations and inline examples", flush=True)

# R34: retained CT10 graph strokes must stay inside their actual plot frames.
# This catches visual overshoot into titles/footers without changing the math.
ct10 = Path("docs/kien-thuc/10-ham-so-do-thi/preview-tabs-r6.md").read_text(encoding="utf-8")
ct10_plot_frames = {
    "10-06-he-so-a-b.svg": ((60, 560, 145, 475), (640, 1140, 145, 475)),
    "10-07-giao-diem-hai-duong-thang.svg": ((110, 870, 110, 580),),
    "10-09-duong-thang-parabol.svg": ((110, 870, 110, 580),),
}
for name, frames in ct10_plot_frames.items():
    assert name in ct10, ("CT10 retained visual removed", name)
    graphic = Path("docs/assets/infographics/10") / name
    svg = ET.fromstring(graphic.read_text(encoding="utf-8"))
    chart_marks = 0
    for el in svg.iter():
        kind = el.tag.rsplit("}", 1)[-1]
        if kind not in ("line", "polyline") or el.get("stroke") not in (
                "#2563eb", "#059669", "#dc2626"):
            continue
        if kind == "line":
            points = [(float(el.get("x1")), float(el.get("y1"))),
                      (float(el.get("x2")), float(el.get("y2")))]
        else:
            points = [tuple(map(float, item.split(",")))
                      for item in el.get("points", "").split()]
        assert points, (name, "empty chart mark")
        assert any(all(xmin - 0.01 <= x <= xmax + 0.01
                           and ymin - 0.01 <= y <= ymax + 0.01
                           for x, y in points)
                   for xmin, xmax, ymin, ymax in frames), (
                       name, "graph stroke outside plot frame", points[:2], points[-2:])
        chart_marks += 1
    assert chart_marks >= 2, (name, "expected chart lines absent")
    print("PASS R34 CT10 retained SVG graph plot-frame bounds", name, flush=True)

# R42: CT12 retained delta plot's middle parabola extends above its own
# panel in raw sampled coordinates (y=112.4 vs panel top y=140).
# Clip only that curve to its original plot frame, not labels/axes/math.
ct12_svg = ET.fromstring(Path("docs/assets/infographics/12/12-05-delta-va-giao-ox.svg").read_text(encoding="utf-8"))
ns12 = {"svg": "http://www.w3.org/2000/svg"}
clip12 = ct12_svg.find(".//svg:clipPath[@id='ct12-middle-plot-clip']", ns12)
assert clip12 is not None, "CT12 middle plot clipping absent"
frame12 = clip12.find("svg:rect", ns12)
assert frame12 is not None and tuple(frame12.get(key) for key in ("x", "y", "width", "height")) == (
    "430", "140", "330", "290"), "CT12 clip frame altered"
middle12 = ct12_svg.find(".//svg:g[@clip-path='url(#ct12-middle-plot-clip)']/svg:polyline", ns12)
assert middle12 is not None and middle12.get("stroke") == "#7c3aed", "CT12 middle parabola lost"
coords12 = [tuple(map(float, p.split(","))) for p in middle12.get("points", "").split()]
assert len(coords12) >= 50 and min(y for _, y in coords12) < 140, (
    "CT12 plot regression no longer covers original overshoot")
assert all(430 <= x <= 760 for x, _ in coords12), "CT12 parabola x-range changed"
assert len(ct12_svg.findall(".//svg:polyline", ns12)) == 3, "CT12 three delta cases changed"
labels12 = " ".join("".join(e.itertext()) for e in ct12_svg.findall(".//svg:text", ns12))
for label in ("Δ > 0", "Δ = 0", "Δ < 0", "x₁=-1", "x₂=1", "x₁=x₂=0", "Không cắt Ox"):
    assert label in labels12, ("CT12 delta teaching label missing", label)
assert ct12_svg.find(".//svg:circle[@cx='595'][@cy='357.5']", ns12) is not None, (
    "CT12 double root marker moved")
print("PASS R42 CT12 delta plot frame and all three mathematical cases", flush=True)

CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium required for 25-topic phone browser QA")
BASE = "http://127.0.0.1:8765/kien-thuc/"
with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=CHROME, headless=True,
                                 args=["--no-sandbox", "--disable-dev-shm-usage"])
    context = browser.new_context(viewport={"width": 390, "height": 844},
                                  device_scale_factor=2, is_mobile=True, has_touch=True)
    for slug, _, _, _, _ in TOPICS:
        page = context.new_page()
        errors = []
        page.on("pageerror", lambda err: errors.append(str(err)))
        response = page.goto(BASE + slug + "/", wait_until="domcontentloaded",
                             timeout=30000)
        assert response and response.status == 200, (slug, "canonical route missing")
        root = page.locator(".md-content__inner")
        root.wait_for(state="visible", timeout=15000)
        if slug != "01-ban-do-chuong-trinh":
            root = page.locator(".md-content__inner.math-knowledge-r19")
            root.wait_for(state="visible", timeout=15000)
            assert root.locator("details.topic-learning-card").count() == 11, (
                slug, "11 source sections changed")
            assert root.get_attribute("data-math-knowledge-r30") == "1", (
                slug, "released R30 UX controls missing")
            # R30: orientation begins compact, while §3/§5 teach-through tabs
            # begin expanded; all four native disclosures remain reversible.
            for landmark in ("map", "goals", "core", "types"):
                card = root.locator("details.topic-learning-card#" + landmark)
                assert card.count() == 1, (slug, landmark, "missing section")
                expected_open = landmark in ("core", "types")
                assert card.evaluate("(e) => e.open") == expected_open, (
                    slug, landmark, "R30 initial disclosure state changed")
            knowledge = root.locator("#core .tabbed-labels label")
            methods = root.locator("#types .tabbed-labels label")
            if slug == "04-bieu-thuc-dai-so":
                assert knowledge.count() == 3 and methods.count() == 4, (
                    slug, "CT04 semantic method tabs altered")
                assert root.locator("#types .tabbed-block table").count() >= 4
            else:
                assert knowledge.count() >= 3 and methods.count() >= 3, (
                    slug, "semantic tab groups lost")
            if slug == "10-ham-so-do-thi":
                assert (knowledge.count(), methods.count()) == (5, 5)
            if slug == "06-phan-tich-da-thuc":
                factor_graphic = root.locator('img[src*="06-02-so-do-chon-phuong-phap.svg"]')
                assert factor_graphic.count() == 1 and "nhân ngược để kiểm tra" in (
                    factor_graphic.get_attribute("alt") or ""), (
                    slug, "CT06 method decision sequence missing from image alt")
            if methods.count() > 1:
                methods.nth(1).click()
                assert methods.nth(1).get_attribute("aria-selected") == "true", (
                    slug, "touch tab activation")
                methods.first.focus()
                page.keyboard.press("Enter")
                assert methods.first.get_attribute("aria-selected") == "true", (
                    slug, "keyboard activation")
            assert root.locator('a[href*="preview-composition"],a[href*="preview-tabs"]').count() == 0, (
                slug, "duplicate student-facing preview")
            font = root.evaluate("(e) => parseFloat(getComputedStyle(e).fontSize)")
            assert font >= 15.8, (slug, "R3 body typography too small", font)
        else:
            graphic = root.locator('img[src*="01-overview-r2.svg"]')
            assert graphic.count() == 1, (slug, "CT01 corrected map graphic missing")
            assert "bốn mạch Toán THCS" in (graphic.get_attribute("alt") or ""), (
                slug, "CT01 accessible visual label missing")
        assert page.evaluate(
            "document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2"
        ), (slug, "mobile horizontal overflow")
        assert not errors, (slug, "JavaScript errors", errors[:2])
        # A true visual should remain readable in dark mode and in print.
        page.evaluate("""() => document.documentElement.setAttribute(
            'data-md-color-scheme', 'slate')""")
        assert root.is_visible(), (slug, "dark-mode content hidden")
        if slug != "01-ban-do-chuong-trinh":
            page.emulate_media(media="print")
            assert page.evaluate("""() => [...document.querySelectorAll(
              '.math-knowledge-r19 #core .tabbed-block, .math-knowledge-r19 #types .tabbed-block'
            )].every(el => getComputedStyle(el).display !== 'none')"""), (
                slug, "print hid semantic tab content")
            page.emulate_media(media="screen")
        print("PASS R29 canonical phone/dark/print", slug, flush=True)
        page.close()
    context.close()
    browser.close()
