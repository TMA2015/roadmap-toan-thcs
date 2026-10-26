#!/usr/bin/env python3
"""R10 source-backed built-MkDocs responsive QA; no uploads, writes or live learner changes."""
import shutil
from playwright.sync_api import sync_playwright

BASE="http://127.0.0.1:8765/kien-thuc/"
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium required for R10 QA")
TOPICS={
  "04-bieu-thuc-dai-so":("Cộng – trừ đa thức",[]),
  "07-phan-thuc-dai-so":("Tính chất cơ bản của phân thức",[]),
  "08-phuong-trinh-bat-phuong-trinh":("Bất đẳng thức và tính chất thứ tự",[
     "08-05-truc-so-bat-phuong-trinh.svg","08-06-giao-tap-nghiem.svg"]),
  "11-can-thuc":("Điều kiện xác định",[])
}
SIZES={"desktop":(1365,900),"tablet-sim":(820,1180),"phone":(390,844)}
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for label,(width,height) in SIZES.items():
        ctx=browser.new_context(viewport={"width":width,"height":height})
        for topic,(marker,svglist) in TOPICS.items():
            page=ctx.new_page()
            errors=[]
            page.on("pageerror",lambda error:errors.append(str(error)))
            response=page.goto(BASE+topic+"/preview-composition-r10/",wait_until="domcontentloaded",timeout=30000)
            assert response and response.status==200, f"{topic}: missing preview"
            body=page.locator(".md-content")
            body.wait_for(state="visible",timeout=15000)
            assert marker.casefold() in body.inner_text().casefold(),f"{topic}: missing lesson section"
            nav=body.locator(".math-related-practice")
            assert nav.count()==1, f"{topic}: expected one precise study-to-practice navigation"
            assert nav.evaluate("(x)=>getComputedStyle(x).display")=="flex",f"{topic}: CSS not applied"
            links=nav.locator("a")
            assert links.count()==2,f"{topic}: expected a real Practice + approved Written link"
            assert links.nth(0).inner_text().strip().startswith("Luyện ngay")
            assert links.nth(1).inner_text().strip().startswith("Làm tự luận")
            for i in range(2):
                href=links.nth(i).get_attribute("href")
                assert href and not href.startswith("#") and "undefined" not in href
            for svg in svglist:
                img=body.locator('img[src*="'+svg+'"]')
                assert img.count()==1,f"{topic}: missing retained infographic {svg}"
                img.scroll_into_view_if_needed()
                img.evaluate("(el)=>el.decode()",timeout=20000)
                assert img.evaluate("(el)=>el.complete && el.naturalWidth>100"),f"{topic}: broken SVG {svg}"
            if topic == "08-phuong-trinh-bat-phuong-trinh":
                # CĐ08 §5 screenshot regression: built markup must provide 12
                # typeset display equations, not paragraphs with raw brackets.
                math_report = page.evaluate("""() => {
                  const heading = document.getElementById('vi-du-mau');
                  if (!heading) return { missing: true };
                  const nodes = [];
                  for (let n=heading.nextElementSibling; n && n.tagName !== 'HR'; n=n.nextElementSibling) nodes.push(n);
                  const displays = nodes.reduce((s,n)=>s+(n.matches('.arithmatex') ? 1 : n.querySelectorAll('.arithmatex').length),0);
                  const bare = nodes.filter(n=>n.matches('p') && /^\s*\[[\s\S]*\]\s*$/.test(n.textContent)).length;
                  const headings = nodes.filter(n=>n.tagName==='H4').length;
                  return {displays,bare,headings};
                }""")
                assert math_report.get("displays", 0) >= 12, f"CT08 {label}: missing MathJax displays: {math_report}"
                assert math_report["bare"] == 0 and math_report["headings"] == 4, f"CT08 {label}: raw equations or missing examples: {math_report}"
            assert page.evaluate("() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2"),f"{topic}: {label} document overflow"
            assert not errors,f"{topic}: {label} javascript errors: {errors[:3]}"
            print("PASS R10",topic,label,"links CSS math content SVG layout",flush=True)
            page.close()
        ctx.close()
    browser.close()
