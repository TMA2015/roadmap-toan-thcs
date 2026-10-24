#!/usr/bin/env python3
"""R21 visual reading QA on real MkDocs pages (no learner writes).

Validate active/inactive tabs, typography, callouts, full-width table,
responsive viewport, print, source-wrapper counts and keyboard-accessible
state; photograph desktop/iPad-sim/phone snapshots for visual review.
"""
from pathlib import Path
import shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chrome/Chromium required")
BASE="http://127.0.0.1:8765/kien-thuc/"
TOPICS=[
    ("05-7-hang-dang-thuc",4),
    ("10-ham-so-do-thi",5),
    ("14-tam-giac",None),
    ("21-thong-ke",None),
    ("23-xac-suat",None),
    ("04-bieu-thuc-dai-so",3),
    ("08-phuong-trinh-bat-phuong-trinh",4),
    ("22-dai-luong-dac-trung",None)
]
Path("previews").mkdir(exist_ok=True)
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,
        args=["--no-sandbox","--disable-dev-shm-usage"])
    for device,width in (("desktop",1365),("ipad-sim",820),("phone",390)):
        ctx=browser.new_context(viewport={"width":width,"height":900})
        for slug,knowledge_tabs in TOPICS:
            page=ctx.new_page()
            errors=[]
            page.on("pageerror",lambda e:errors.append(str(e)))
            response=page.goto(BASE+slug+"/",wait_until="domcontentloaded",timeout=30000)
            assert response is not None and response.status==200,(slug,device,"official topic missing")
            root=page.locator(".md-content__inner.math-knowledge-r19")
            root.wait_for(state="visible",timeout=15000)
            assert page.locator('link[href*="math-knowledge-r21-final-polish.css"]').count()==1,(slug,device,"R21 CSS not loaded")
            assert root.locator("details.topic-learning-card").count()==11,(slug,device,"source sections changed")
            font=root.evaluate("(node)=>parseFloat(getComputedStyle(node).fontSize)")
            assert abs(font-(16 if width<=570 else 17))<.2,(slug,device,"base text px",font)
            core=root.locator("details#core")
            types=root.locator("details#types")
            tabs=core.locator(".tabbed-set .tabbed-labels label")
            if knowledge_tabs is not None:
                assert tabs.count()==knowledge_tabs,(slug,device,"content-owned tabs altered")
            assert tabs.count()>=3,(slug,device,"no knowledge tabs")
            initial=tabs.first
            assert initial.is_visible(),(slug,device,"first tab not visible")
            active=initial.evaluate("(el)=>getComputedStyle(el).color")
            regular=tabs.nth(1).evaluate("(el)=>getComputedStyle(el).color")
            assert active!=regular,(slug,device,"selected tab not visually distinguishable",active,regular)
            assert initial.evaluate("(el)=>parseFloat(getComputedStyle(el).minHeight)")>=44,(slug,device,"tab touch target")
            tabs.nth(1).click()
            # Native tabs have a deliberately subtle 160ms CSS color transition.
            # Assert radio state immediately; read *settled* visual color afterward.
            radio=core.locator(".tabbed-set > input[type=radio]").nth(1)
            assert radio.is_checked(),(slug,device,"new tab was not selected")
            page.wait_for_timeout(250)
            changed=tabs.nth(1).evaluate("(el)=>getComputedStyle(el).color")
            assert changed==active,(slug,device,"selected color did not follow active tab",changed,active)
            h3=core.locator(".tabbed-block h3").first
            size=h3.evaluate("(el)=>parseFloat(getComputedStyle(el).fontSize)")
            assert size>=(18.5 if width<=570 else 20.5),(slug,device,"heading hierarchy",size)
            assert page.evaluate("document.documentElement.scrollWidth<=document.documentElement.clientWidth+2"),(slug,device,"document horizontal overflow")
            assert not errors,(slug,device,"JavaScript regression",errors[:2])
            if slug=="05-7-hang-dang-thuc":
                tabs.last.click()
                table=core.locator(".tabbed-block").last.locator("table").first
                assert table.count()==1,(slug,device,"seven-formula table missing")
                assert table.evaluate("(el)=>getComputedStyle(el).display")=="table",(slug,device,"table squeezed to inline block")
                if width>=800:
                    ratio=table.evaluate("(el)=>el.getBoundingClientRect().width/el.parentElement.getBoundingClientRect().width")
                    assert ratio>=.8,(slug,device,"formula table too narrow",ratio)
                code=table.locator("td code")
                if code.count():
                    cpx=code.first.evaluate("(el)=>parseFloat(getComputedStyle(el).fontSize)")
                    assert cpx>=14.8,(slug,device,"formula code too small",cpx)
            if slug=="10-ham-so-do-thi":
                tabs.first.click()
                quote=core.locator(".tabbed-block blockquote").first
                assert quote.count()==1,(slug,device,"important concept callout lost")
                border=quote.evaluate("(el)=>parseFloat(getComputedStyle(el).borderLeftWidth)")
                assert border>=2.5,(slug,device,"important concept callout not highlighted",border)
            if slug in ("05-7-hang-dang-thuc","10-ham-so-do-thi","14-tam-giac"):
                page.screenshot(path=f"previews/math-r21-{slug[:2]}-{device}.png",animations="disabled")
            if slug=="10-ham-so-do-thi" and device=="desktop":
                page.emulate_media(media="print")
                visible=core.locator(".tabbed-block").first.evaluate("(el)=>getComputedStyle(el).display")
                assert visible!="none",(slug,device,"print loses Knowledge tab content")
            page.close()
        ctx.close()
        print("PASS R21 restrained Knowledge polish",device,len(TOPICS),flush=True)
    browser.close()
