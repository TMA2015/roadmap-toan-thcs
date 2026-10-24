#!/usr/bin/env python3
"""R11 native MkDocs responsive QA; safe, isolated, no artifact uploading."""
import shutil
from playwright.sync_api import sync_playwright

BASE="http://127.0.0.1:8765/kien-thuc/"
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium required for R11 QA")
TOPICS={
    "12-phuong-trinh-bac-hai-viete":("Biệt thức Δ",["12-05-delta-va-giao-ox.svg"]),
    "13-goc-va-duong-thang":("Dấu hiệu nhận biết hai đường thẳng song song",[
        "13-goc-doi-dinh-v1.svg","13-hai-duong-song-song-duong-cat-v1.svg","13-goc-so-le-trong-v1.svg"]),
    "15-duong-dong-quy":("Cách chọn đúng tính chất",[
        "15-trong-tam-v1.svg","15-truc-tam-v1.svg","15-tam-noi-tiep-v1.svg","15-tam-ngoai-tiep-v1.svg"]),
    "16-tu-giac":("Hình vuông",[
        "16-hinh-thang-v1.svg","16-hinh-binh-hanh-v1.svg","16-hinh-chu-nhat-v1.svg",
        "16-hinh-thoi-v1.svg","16-hinh-vuong-v1.svg"]),
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
            response=page.goto(BASE+topic+"/preview-composition-r11/",wait_until="domcontentloaded",timeout=30000)
            assert response and response.status==200, f"{topic}: missing R11 preview"
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
            print("PASS R11",topic,device,"content links CSS real diagrams responsive",flush=True)
            page.close()
        context.close()
    browser.close()
