#!/usr/bin/env python3
"""R30: real rendered CĐ02–25 Knowledge UX, exam rows, controls and responsive QA.

No writes to learner storage. Must run after strict MkDocs build on :8765.
"""
import re
import shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME: raise RuntimeError("R30 needs Chromium")
BASE="http://127.0.0.1:8765/kien-thuc/"
SLUGS=[
"02-so-va-phep-tinh","03-ti-le-ti-le-thuc","04-bieu-thuc-dai-so",
"05-7-hang-dang-thuc","06-phan-tich-da-thuc","07-phan-thuc-dai-so",
"08-phuong-trinh-bat-phuong-trinh","09-he-phuong-trinh",
"10-ham-so-do-thi","11-can-thuc","12-phuong-trinh-bac-hai-viete",
"13-goc-va-duong-thang","14-tam-giac","15-duong-dong-quy",
"16-tu-giac","17-thales-dong-dang","18-he-thuc-luong",
"19-duong-tron","20-hinh-hoc-tong-hop","21-thong-ke",
"22-dai-luong-dac-trung","23-xac-suat","24-bai-toan-thuc-te",
"25-tong-hop-on-thi-10"]
EXAM_ROWS=[4,4,3,7,7,9,6,5,10,8,8,6,8,5,4,5,5,6,6,5,6,7,6,5]
EXPECTED=dict(zip(SLUGS,EXAM_ROWS))
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,
                               args=["--no-sandbox","--disable-dev-shm-usage"])
    for device,width in [("desktop",1365),("phone",390)]:
        ctx=browser.new_context(viewport={"width":width,"height":870})
        for slug in SLUGS:
            page=ctx.new_page()
            errors=[]
            page.on("pageerror",lambda error:errors.append(str(error)))
            response=page.goto(BASE+slug+"/",wait_until="domcontentloaded",timeout=30000)
            assert response and response.status==200,(device,slug,"route")
            root=page.locator(".md-content__inner.math-knowledge-r19")
            root.wait_for(state="visible",timeout=15000)
            assert root.get_attribute("data-math-knowledge-r30")=="1",(device,slug,"R30 missing")
            assert root.locator("details.topic-learning-card").count()==11,(device,slug,"source sections")
            for id in ("map","goals","core","types"):
                card=root.locator("details#"+id)
                before=card.evaluate("(x)=>x.open")
                card.locator(":scope > summary").click()
                assert card.evaluate("(x)=>x.open")!=before,(device,slug,id,"toggle")
                card.locator(":scope > summary").click()
                assert card.evaluate("(x)=>x.open")==before,(device,slug,id,"restore")
            border=root.locator("#core").evaluate("(x)=>getComputedStyle(x).borderTopWidth")
            assert border!="0px",(device,slug,"lost §3 frame")
            nav=root.locator(".topic-workspace-nav")
            if nav.count():
                h=nav.evaluate("(x)=>x.getBoundingClientRect().height")
                assert 42<=h<=68,(device,slug,"oversized quick-nav",h)
                assert not nav.locator(".topic-workspace-nav-title").is_visible(),(device,slug,"old title")
            exam=root.locator("details#exam")
            if not exam.evaluate("(x)=>x.open"):exam.locator(":scope > summary").click()
            tables=exam.locator("table.mk-exam-table")
            if slug in ("02-so-va-phep-tinh","03-ti-le-ti-le-thuc",
                        "04-bieu-thuc-dai-so","09-he-phuong-trinh"):
                assert tables.count()==1,(device,slug,"H3 source not in exam table",
                    "direct H3",exam.locator(":scope > .topic-learning-card-body > h3").count(),
                    "all H3",exam.locator("h3").count(),
                    "verified CTAs",exam.locator(".math-knowledge-exam-actions").count())
            # All authored topic §6 families must be rows of a table, not
            # numbered prose with CT15-style inline buttons glued into it.
            top_table=tables.first if tables.count() else exam.locator("table").first
            assert top_table.count()==1,(device,slug,"no exam table")
            rows=top_table.locator(":scope > tbody > tr").count()
            assert rows==EXPECTED[slug],(device,slug,"exam row parity",rows,EXPECTED[slug])
            assert top_table.locator(":scope > thead > tr > th").count()>=4,(device,slug,"exam headers")
            if slug!="10-ham-so-do-thi":
                assert exam.locator("a.math-topic-exam-link").count()>=1,(device,slug,"verified CTA lost")
            if slug=="04-bieu-thuc-dai-so":
                types=root.locator("details#types")
                tabs=types.locator(".tabbed-set .tabbed-labels label")
                assert tabs.count()==4,(device,"CT04 four semantic method families")
                # Table content preserves all eleven original methods once.
                assert types.locator(".tabbed-block tbody tr").count()==11,(device,"CT04 row coverage")
            if slug=="08-phuong-trinh-bat-phuong-trinh":
                content=root.locator("details#core").inner_text()
                assert "(x\\in\\mathbb N)" not in content,(device,"CT08 raw TeX leak")
                assert "8 hộp" in content,(device,"CT08 worked example missing")
            if slug=="15-duong-dong-quy":
                assert root.locator('#map img[src*="geometry/15"]').count()>=4,(
                    device,"CT15 illustrations detached from §1")
            assert page.evaluate("document.documentElement.scrollWidth<=document.documentElement.clientWidth+2"),(
                device,slug,"document overflow")
            assert not errors,(device,slug,"JS errors",errors[:3])
            page.close()
        ctx.close()
        print("PASS R30 complete topic UX",device,len(SLUGS),flush=True)
    browser.close()
