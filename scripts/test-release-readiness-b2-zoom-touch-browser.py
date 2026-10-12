"""B2 R2 diagnostic: narrow-layout, geometric SVG/MathJax and touch targets.

Synthetic isolated Chromium pages only. Logs measured CSS-pixel hit rectangles,
not a claim about native 200% browser zoom, iOS Safari, text legibility or
WCAG certification. No learner profile/history is imported or deleted.
"""
import json
import shutil
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8765"
CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium/Chrome required")

MEASURE = """(selectors) => {
  const out = {};
  for (const [label, selector] of Object.entries(selectors)) {
    const nodes = [...document.querySelectorAll(selector)]
      .filter(e => { const r=e.getBoundingClientRect(); return r.width>0 && r.height>0; });
    out[label] = nodes.slice(0,12).map(e => {
      const r=e.getBoundingClientRect();
      const parent=e.closest('.md-content, .topic-core-dialog, .practice-engine, .readiness-engine');
      const p=parent?.getBoundingClientRect();
      return {
        width: Math.round(r.width*10)/10, height: Math.round(r.height*10)/10,
        left: Math.round(r.left), right: Math.round(r.right),
        withinParent: !p || (r.left >= p.left-2 && r.right <= p.right+2),
        tag: e.tagName
      };
    });
  }
  const root=document.documentElement;
  return {cssViewport:root.clientWidth,
    documentOverflow:Math.round(root.scrollWidth - root.clientWidth),
    targets:out};
}"""

def visit(page, route, marker):
    r=page.goto(BASE+route,wait_until="domcontentloaded")
    assert r and r.status==200, (route, r.status if r else None)
    page.locator(marker).first.wait_for(timeout=30000)

def metric(page, label, selectors):
    out=page.evaluate(MEASURE, selectors)
    print("B2_R2_DIAG " + json.dumps({"case":label,**out},ensure_ascii=False))
    return out

def check(browser, width, height):
    context=browser.new_context(viewport={"width":width,"height":height},has_touch=True,is_mobile=True,
                               device_scale_factor=2)
    page=context.new_page()
    errors=[]
    page.on("pageerror",lambda e:errors.append(str(e)))
    try:
        visit(page,"/kien-thuc/14-tam-giac/",
              "article.md-content__inner")
        geometry=page.locator("article.md-content__inner img[src*='geometry/14/']")
        assert geometry.count() >= 2, "Triangle article missing representative geometric SVG figures"
        for n in range(2):
            img=geometry.nth(n)
            img.scroll_into_view_if_needed(timeout=20000)
            img.evaluate("(el)=>el.decode().catch(()=>null)")
            val=img.evaluate("""el => {
                const r=el.getBoundingClientRect(), p=el.parentElement.getBoundingClientRect();
                return {alt:el.getAttribute('alt'),naturalWidth:el.naturalWidth,naturalHeight:el.naturalHeight,
                    width:r.width, containerWidth:p.width,
                    withinParent:r.left>=p.left-2 && r.right<=p.right+2 };
            }""")
            print("B2_R2_GEOMETRY " + json.dumps({"cssWidth":width,**val},ensure_ascii=False))
            assert val["alt"] and val["naturalWidth"]>0 and val["naturalHeight"]>0, "Geometry image missing/without accessible alt"
            assert val["withinParent"], "Geometry image extends beyond its containing element"

        math_count=page.locator("article.md-content__inner mjx-container").count()
        print("B2_R2_MATH " + json.dumps({"cssWidth":width,"mathjaxNodesObserved":math_count},ensure_ascii=False))

        visit(page,"/kien-thuc/14-tam-giac/core/",
              ".topic-core-card .topic-core-teach-start")
        core=metric(page,"core_cards_"+str(width),{
          "start":".topic-core-card .topic-core-teach-start",
          "microStart":".topic-core-card .topic-micro-start"})
        page.locator(".topic-core-card .topic-core-teach-start").first.tap()
        dlg=page.locator("dialog.topic-core-dialog[open]")
        dlg.wait_for(timeout=15000)
        bounds=dlg.evaluate("""el => {const r=el.getBoundingClientRect();
            return {width:r.width,height:r.height,left:r.left,top:r.top,right:r.right,bottom:r.bottom};
        }""")
        print("B2_R2_DIALOG " + json.dumps({"cssWidth":width,**bounds},ensure_ascii=False))
        assert bounds["width"]<=width+2 and bounds["left"]>=-2 and bounds["right"]<=width+2, "Teaching dialog clipped sideways"
        dlg.locator(".topic-core-dialog__close").tap()

        visit(page,"/kien-thuc/02-so-va-phep-tinh/bai-tap/",
              "[data-practice-bank-v2] .practice-option")
        practice=metric(page,"practice_"+str(width),{
          "options":".practice-option",
          "toolbar":".practice-toolbar-actions button",
          "actions":".practice-actions button"})
        assert practice["targets"]["options"], "Missing Practice options"
        page.locator(".practice-option").first.tap()
        page.locator(".practice-feedback").first.wait_for(state="visible",timeout=10000)
        metric(page,"practice_feedback_"+str(width),{"actions":".practice-actions button"})

        visit(page,"/kien-thuc/02-so-va-phep-tinh/tu-kiem-tra/",
              ".readiness-option")
        ready=metric(page,"readiness_"+str(width),{
          "options":".readiness-option",
          "nav":".readiness-nav button"})
        assert ready["targets"]["options"], "Missing Readiness choice targets"
        page.locator(".readiness-option").first.tap()
        assert page.locator(".readiness-option input:checked").count()==1
        assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')") is None, "Choice alone recorded an assessment"

        visit(page,"/tien-do-hoc-tap/",
              "[data-math-progress-backup][data-backup-ready=true]")
        metric(page,"dashboard_"+str(width),{"actions":".mpd-action","restore":".mpd-restore-list details summary"})

        assert not errors, errors
        print("PASS B2 R2 diagnostic complete:",width,"CSS px; all operations used disposable mobile touch context")
    finally:
        context.close()

with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    try:
        for width,height in [(640,900),(390,844),(320,720)]:
            check(browser,width,height)
    finally:
        browser.close()
print("BOUNDARY: 640/320 CSS-px layouts are reflow stress proxies; this is NOT native 200% browser-zoom or real-device WCAG/gesture certification.")
