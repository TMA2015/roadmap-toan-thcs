#!/usr/bin/env python3
"""R20 real-user browser smoke: §6 exam links in both table and bullet Knowledge."""
import shutil
from urllib.parse import urlparse, parse_qs
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME: raise RuntimeError("Chrome/Chromium required")
BASE="http://127.0.0.1:8765/kien-thuc/"
TOPICS=[
  "05-7-hang-dang-thuc",    # seven-row Markdown exam table
  "10-ham-so-do-thi",       # preserve R4 six active/four pending exam table
  "14-tam-giac",           # eight-row geometry exam table
  "21-thong-ke",           # five annotated numbered exam competencies
  "23-xac-suat",           # seven annotated numbered exam competencies
  "25-tong-hop-on-thi-10"  # cross-strand entrance exam planning
]
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for device,width in [("desktop",1365),("phone",390)]:
        context=browser.new_context(viewport={"width":width,"height":900})
        for slug in TOPICS:
            page=context.new_page()
            response=page.goto(BASE+slug+"/",wait_until="domcontentloaded",timeout=30000)
            assert response and response.status==200,(slug,device,"lesson route")
            exam=page.locator("details.topic-learning-card#exam")
            assert exam.count()==1,(slug,device,"missing §6 learning section")
            exam.locator(":scope > summary").click()
            assert exam.is_visible() and exam.get_attribute("open") is not None,(slug,device,"exam not open")
            active=exam.locator("a.math-topic-exam-link.practice")
            assert active.count()>=1,(slug,device,"no exam CTA")
            if slug=="10-ham-so-do-thi":
                assert active.count()==6,(slug,device,"R4 original six exam practice CTAs changed")
                assert exam.locator(".math-topic-exam-pending").count()==4,(slug,device,"R4 pending CTAs changed")
            assert page.evaluate("document.documentElement.scrollWidth<=document.documentElement.clientWidth+2"),(slug,device,"horizontal document overflow")
            first=active.first
            href=first.get_attribute("href")
            assert "mode=remediation" in href and "focus=" in href,(slug,device,href)
            first.click()
            page.wait_for_url("**/bai-tap/**",timeout=15000)
            current=urlparse(page.url)
            assert parse_qs(current.query).get("mode")==["remediation"],(slug,device,page.url)
            assert parse_qs(current.query).get("focus"),(slug,device,"missing skill filter")
            page.close()
        # A canonical approved Written link opens the actual paper library, not a fabricated topic page.
        page=context.new_page()
        page.goto(BASE+"14-tam-giac/",wait_until="domcontentloaded")
        exam=page.locator("details.topic-learning-card#exam")
        exam.locator(":scope > summary").click()
        written=exam.locator("a.math-topic-exam-link.written")
        assert written.count()>=1,(device,"no canonical Written exam link")
        written.first.click()
        page.wait_for_url("**/luyen-tap/tu-luan/**",timeout=15000)
        url=urlparse(page.url)
        assert parse_qs(url.query).get("topic")==["CT14"],(device,url)
        assert url.fragment.startswith("wx14-tri-"),(device,url)
        page.close()
        context.close()
        print("PASS R20 learner §6 Practice/Written navigation",device,len(TOPICS),flush=True)
    browser.close()
