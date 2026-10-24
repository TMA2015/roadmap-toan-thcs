#!/usr/bin/env python3
"""R12 native MkDocs responsive QA; safe, isolated, no artifact uploading."""
import shutil
from playwright.sync_api import sync_playwright

BASE="http://127.0.0.1:8765/kien-thuc/"
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium required for R12 QA")
TOPICS={
    "17-thales-dong-dang":("Ba trường hợp đồng dạng",[
        "17-thales-v1.svg","17-duong-trung-binh-v1.svg","17-tam-giac-dong-dang-v1.svg"]),
    "18-he-thuc-luong":("Tỉ số lượng giác của góc nhọn",[
        "18-02-he-thuc-duong-cao.svg","18-03-ti-so-luong-giac.svg",
        "18-ti-so-sin-cos-v1.svg","18-ti-so-tan-cot-v1.svg"]),
    "19-duong-tron":("Tứ giác nội tiếp",[
        "19-goc-noi-tiep-goc-o-tam-v1.svg","19-tiep-tuyen-v1.svg",
        "19-hai-day-cat-nhau-v1.svg","19-tiep-tuyen-cat-tuyen-v1.svg"]),
    "20-hinh-hoc-tong-hop":("Các “cầu nối” thường gặp",[
        "20-02-chon-chien-luoc.svg","20-03-chuoi-suy-luan.svg",
        "20-tu-giac-noi-tiep-v1.svg","20-hinh-non.svg","20-hinh-cau.svg"]),
}
VIEWPORTS={"desktop":(1365,900),"ipad-size":(820,1180),"phone":(390,844)}
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for device,(width,height) in VIEWPORTS.items():
        context=browser.new_context(viewport={"width":width,"height":height})
        for topic,(expected,svgs) in TOPICS.items():
            page=context.new_page()
            errors=[]
            page.on("pageerror",lambda error: errors.append(str(error)))
            response=page.goto(BASE+topic+"/preview-composition-r12/",wait_until="domcontentloaded",timeout=30000)
            assert response and response.status==200, f"{topic}: missing R12 preview"
            body=page.locator(".md-content")
            body.wait_for(state="visible",timeout=15000)
            assert expected.casefold() in body.inner_text().casefold(), f"{topic}: missing source topic content"
            nav=body.locator(".math-related-practice")
            assert nav.count()==1, f"{topic}: expected one linked teaching unit"
            assert nav.evaluate("(n)=>getComputedStyle(n).display")=="flex", f"{topic}: CSS not applied"
            actions=nav.locator("a")
            assert actions.count()==2, f"{topic}: expected practice + verified Written"
            assert actions.nth(0).inner_text().strip().startswith("Luyện ngay")
            assert actions.nth(1).inner_text().strip().startswith("Làm tự luận")
            for i in (0,1):
                url=actions.nth(i).get_attribute("href")
                assert url and "undefined" not in url and not url.startswith("#"), f"{topic}: broken action"
            for svg in svgs:
                img=body.locator('img[src*="'+svg+'"]')
                assert img.count()==1, f"{topic}: missing SVG {svg}"
                img.scroll_into_view_if_needed()
                img.evaluate("(n)=>n.decode()",timeout=20000)
                assert img.evaluate("(n)=>n.complete && n.naturalWidth>100"),f"{topic}: unloaded image {svg}"
            assert page.evaluate("()=>document.documentElement.scrollWidth <= document.documentElement.clientWidth+2"), f"{topic} {device}: horizontal page overflow"
            assert not errors, f"{topic} {device}: JS errors {errors[:3]}"
            print("PASS R12",topic,device,"content links CSS real diagrams responsive",flush=True)
            page.close()
        context.close()
    browser.close()
