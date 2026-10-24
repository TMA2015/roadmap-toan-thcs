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
            # R18: only one official learner route and a real accessible five-tab strip.
            tabs=page.locator(".mk-unified-tablist [role=tab]")
            assert tabs.count()==5,(topic,device,"missing actual 5 horizontal tabs")
            assert page.locator(".mk-unified-panel:not([hidden])").count()==1,(topic,device,"only one pane must be shown")
            page.get_by_role("tab",name="Kiến thức").click()
            assert page.locator(".mk-unified-panel:not([hidden])").count()==1
            assert page.locator(".mk-unified-panel:not([hidden]) #core").count()==1
            # The original native <details> sections remain the source of truth.
            # CT05's two-direction comparison lives in section 4 (initially collapsed).
            lesson_section="links" if cfg["kind"]=="compare" else "core"
            section=page.locator("details.topic-learning-card#"+lesson_section)
            section.locator("summary").wait_for(state="visible",timeout=12000)
            if section.get_attribute("open") is None:
                section.locator("summary").click()
            assert section.get_attribute("open") is not None,(topic,"lesson section failed to open")
            selector=".mk-r17-compare" if cfg["kind"]=="compare" else ".mk-r17-logic-pairs"
            cards=page.locator(selector)
            if cfg["kind"]=="rules":
                # CT14 successfully transforms *both* two-rule blocks, §3.5 and §3.6A.
                assert cards.count()==2,(topic,"both original logical comparisons must remain")
            else:
                assert cards.count()==1,(topic,"exactly one two-direction example")
            card=cards.first
            card.wait_for(state="visible",timeout=12000)
            if cfg["kind"]=="rules":
                assert cards.nth(1).is_visible(),(topic,"second CT14 comparison must remain readable")
            expected=2 if width>=672 else 1
            cols=card.evaluate("(n)=>getComputedStyle(n).gridTemplateColumns.split(' ').length")
            assert cols==expected,(topic,device,"expected responsive columns",cols,expected)
            if cfg["kind"]=="rules":
                # Independently verify BOTH source-backed pairs (§3.5 and §3.6A), not just first.
                for rule_index in (0,1):
                    rule_pair=cards.nth(rule_index)
                    assert rule_pair.is_visible(),(topic,device,"source rule pair hidden",rule_index)
                    assert rule_pair.locator("li").count()==2,(topic,device,"rule omitted",rule_index)
                    pair_cols=rule_pair.evaluate("(n)=>getComputedStyle(n).gridTemplateColumns.split(' ').length")
                    assert pair_cols==expected,(topic,device,"responsive rule pair",rule_index,pair_cols,expected)
            for passage in cfg["visible"]:
                assert passage in content.locator("details.topic-learning-card#core,details.topic-learning-card#links").all_inner_texts().__str__() or passage in content.inner_text(),(topic,device,"original text lost",passage)
            if cfg["kind"]=="compare":
                assert card.locator(".mk-r17-compare-item").count()==2,(topic,"two directions missing")
                assert card.locator("pre").count()==2,(topic,"original worked expressions missing")
                assert card.locator(".mk-r17-compare-item").nth(0).inner_text().find("khai triển")>=0
                assert card.locator(".mk-r17-compare-item").nth(1).inner_text().find("nhận dạng")>=0
            else:
                assert card.locator("li").count()==2,(topic,"source list items lost")
                assert content.locator("img").count()>=2,(topic,"geometric diagrams missing")
            # Show original infographic's tab and parent accordion before visibility/print QA.
            page.get_by_role("tab",name="Bản đồ").click()
            image=content.locator('img[src*="'+cfg["figure"]+'"]')
            assert image.count()==1,(topic,"original official infographic unexpectedly hidden")
            image.evaluate("(img)=>img.decode()",timeout=16000)
            assert image.evaluate("(img)=>img.complete && img.naturalWidth>100"),(topic,"original visual broken")
            assert page.evaluate("()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth+2"),(topic,device,"page overflow")
            assert not errors,(topic,device,"Javascript page errors",errors[:3])
            page.get_by_role("tab",name="Kiến thức").click()
            if device=="desktop":
                page.emulate_media(media="print")
                assert card.is_visible(),(topic,"print must preserve two directions/rules")
                page.emulate_media(media="screen")
                page.evaluate("()=>document.documentElement.setAttribute('data-md-color-scheme','slate')")
                assert card.is_visible(),(topic,"dark theme hides content")
            print("PASS R17",topic,device,"source text + real figure + responsive pair + print/dark",flush=True)
            page.close()
        # Both Grade-9 SHA-locked official Knowledge routes are negative controls.
        for control in ("21-thong-ke","23-xac-suat"):
            other=ctx.new_page()
            response=other.goto(BASE+control+"/",wait_until="domcontentloaded",timeout=30000)
            assert response and response.status==200,(control,"original route unavailable")
            assert other.locator(".mk-r17-compare,.mk-r17-logic-pairs").count()==0,(control,"R17 changed negative-control topic")
            assert other.locator(".mk-unified-tablist [role=tab]").count()==5,(control,"R18 tabs must be on the original topic route")
            other.close()
        ctx.close()
    # R18 full-scope desktop smoke: each of 24 taught topic routes uses ONE tabbed view.
    # CĐ01 is the programme map/launcher, not a lesson with 11 academic sections.
    slugs=[
        "02-so-va-phep-tinh","03-ti-le-ti-le-thuc","04-bieu-thuc-dai-so",
        "05-7-hang-dang-thuc","06-phan-tich-da-thuc","07-phan-thuc-dai-so",
        "08-phuong-trinh-bat-phuong-trinh","09-he-phuong-trinh",
        "10-ham-so-do-thi","11-can-thuc","12-phuong-trinh-bac-hai-viete",
        "13-goc-va-duong-thang","14-tam-giac","15-duong-dong-quy","16-tu-giac",
        "17-thales-dong-dang","18-he-thuc-luong","19-duong-tron",
        "20-hinh-hoc-tong-hop","21-thong-ke","22-dai-luong-dac-trung",
        "23-xac-suat","24-bai-toan-thuc-te","25-tong-hop-on-thi-10"]
    ctx=browser.new_context(viewport={"width":1365,"height":900})
    for topic in slugs:
        page=ctx.new_page()
        response=page.goto(BASE+topic+"/",wait_until="domcontentloaded",timeout=30000)
        assert response and response.status==200,(topic,"canonical route unavailable")
        tabs=page.locator(".mk-unified-tablist [role=tab]")
        assert tabs.count()==5,(topic,"five-zone horizontal tabs not rendered")
        assert page.locator(".mk-unified-panel:not([hidden])").count()==1,(topic,"expected one active pane")
        assert page.locator(".topic-learning-card").count()==11,(topic,"lost or duplicated academic section")
        assert page.locator("a[href*='preview-composition'],a[href*='preview-tabs']").count()==0,(topic,"duplicate preview links still student facing")
        tabs.nth(1).click()
        assert page.locator(".mk-unified-panel:not([hidden]) #core").count()==1,(topic,"Knowledge tab did not open")
        tabs.nth(2).click()
        assert page.locator(".mk-unified-panel:not([hidden]) #types").count()==1,(topic,"Problem-type tab did not open")
        page.close()
    start=ctx.new_page()
    start.goto(BASE+"01-ban-do-chuong-trinh/",wait_until="domcontentloaded")
    assert start.locator(".mk-unified-tablist").count()==0,"Programme-map launcher should not fabricate lesson tabs"
    start.close()
    ctx.close()
    print("PASS R18 unified native tabs 24 taught topics + CT01 map route",flush=True)
    browser.close()
