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
TOPICS = [
    ("01-ban-do-chuong-trinh", "r13", 1, "", ()),
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
    ("18-he-thuc-luong", "r12", 4, "01 04", ()),
    ("19-duong-tron", "r12", 4, "01 02 03 04", ()),
    ("20-hinh-hoc-tong-hop", "r12", 4, "01 04", ()),
    ("21-thong-ke", "r3", 3, "01 02 03", ()),
    ("22-dai-luong-dac-trung", "r13", 3, "01 02 03", ()),
    ("23-xac-suat", "r3", 3, "01 02 03", ()),
    ("24-bai-toan-thuc-te", "r13", 4, "01 02 04", ()),
    ("25-tong-hop-on-thi-10", "r13", 4, "01 02 04", ()),
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
            assert root.locator('img[src*="01-overview.svg"]').count() >= 1, (
                slug, "CT01 map graphic missing")
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
