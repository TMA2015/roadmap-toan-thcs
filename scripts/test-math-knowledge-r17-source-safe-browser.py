#!/usr/bin/env python3
"""R17 source-preserving progressive display: real MkDocs browser QA, no student-data writes."""
import shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium required for R17 source-safe QA")
BASE="http://127.0.0.1:8765/kien-thuc/"
SIZES={"desktop":(1365,900),"tablet-sim":(820,1180),"phone":(390,844)}
TOPICS={
    "05-7-hang-dang-thuc":{
        "kind":"compare","figure":"05-02-nhom-binh-phuong.svg",
        "visible":["Chiều khai triển","Chiều nhận dạng / phân tích","Học sinh cần thành thạo cả hai chiều"]
    },
    "14-tam-giac":{
        "kind":"rules","figure":"14-03-tam-giac-dac-biet-pythagore.svg",
        "visible":["Quan hệ giữa cạnh và góc đối diện","Góc lớn hơn đối diện cạnh lớn hơn","Cạnh lớn hơn đối diện góc lớn hơn"]
    }
}
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,
        args=["--no-sandbox","--disable-dev-shm-usage"])
    for device,(width,height) in SIZES.items():
        ctx=browser.new_context(viewport={"width":width,"height":height})
        for topic,cfg in TOPICS.items():
            page=ctx.new_page()
            errors=[]
            page.on("pageerror",lambda error:errors.append(str(error)))
            response=page.goto(BASE+topic+"/",wait_until="domcontentloaded",timeout=30000)
            assert response and response.status==200,(topic,"original route unavailable")
            content=page.locator(".md-content__inner.md-typeset")
            content.wait_for(state="visible",timeout=12000)
            selector=".mk-r17-compare" if cfg["kind"]=="compare" else ".mk-r17-logic-pairs"
            card=page.locator(selector)
            card.wait_for(state="visible",timeout=12000)
            expected=2 if width>=672 else 1
            cols=card.evaluate("(n)=>getComputedStyle(n).gridTemplateColumns.split(' ').length")
            assert cols==expected,(topic,device,"expected responsive columns",cols,expected)
            for passage in cfg["visible"]:
                assert passage in content.inner_text(),(topic,device,"original text lost",passage)
            if cfg["kind"]=="compare":
                assert card.locator(".mk-r17-compare-item").count()==2,(topic,"two directions missing")
                assert card.locator("pre").count()==2,(topic,"original worked expressions missing")
                assert card.locator(".mk-r17-compare-item").nth(0).inner_text().find("khai triển")>=0
                assert card.locator(".mk-r17-compare-item").nth(1).inner_text().find("nhận dạng")>=0
            else:
                assert card.locator("li").count()==2,(topic,"source list items lost")
                assert content.locator("img").count()>=2,(topic,"geometric diagrams missing")
            image=content.locator('img[src*="'+cfg["figure"]+'"]')
            assert image.count()==1,(topic,"original official infographic unexpectedly hidden")
            image.scroll_into_view_if_needed()
            image.evaluate("(img)=>img.decode()",timeout=16000)
            assert image.evaluate("(img)=>img.complete && img.naturalWidth>100"),(topic,"original visual broken")
            assert page.evaluate("()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth+2"),(topic,device,"page overflow")
            assert not errors,(topic,device,"Javascript page errors",errors[:3])
            if device=="desktop":
                page.emulate_media(media="print")
                assert card.is_visible(),(topic,"print must preserve two directions/rules")
                page.emulate_media(media="screen")
                page.evaluate("()=>document.documentElement.setAttribute('data-md-color-scheme','slate')")
                assert card.is_visible(),(topic,"dark theme hides content")
            print("PASS R17",topic,device,"source text + real figure + responsive pair + print/dark",flush=True)
            page.close()
        # R17 does not change the Grade-9 official Knowledge routes.
        other=ctx.new_page()
        other.goto(BASE+"21-thong-ke/",wait_until="domcontentloaded",timeout=30000)
        assert other.locator(".mk-r17-compare,.mk-r17-logic-pairs").count()==0,"R17 changed control topic CT21"
        other.close()
        ctx.close()
    browser.close()
