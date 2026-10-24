#!/usr/bin/env python3
"""R15 final-route browser QA: only reads real MkDocs output. No learner attempts or storage uploads."""
from urllib.parse import urljoin, urlparse, parse_qs
import shutil
from playwright.sync_api import sync_playwright

ROOT="http://127.0.0.1:8765"
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME: raise RuntimeError("Chrome/Chromium unavailable")

TOPICS={
 "05-7-hang-dang-thuc":{"diagram":"05-05-mo-hinh-dien-tich-binh-phuong-r2.svg","written":"wx05-idn-001","skill":"nhan-dang-hdt"},
 "14-tam-giac":{"diagram":"14-pythagore-v1.svg","written":"wx14-tri-003","skill":"so-sanh-canh-goc"}
}
SIZES={"desktop":(1365,900),"tablet-sim":(820,1180),"mobile":(390,844)}
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for profile,(width,height) in SIZES.items():
        context=browser.new_context(viewport={"width":width,"height":height})
        for topic,exp in TOPICS.items():
            page=context.new_page()
            errors=[]
            page.on("pageerror",lambda e:errors.append(str(e)))
            url=f"{ROOT}/kien-thuc/{topic}/"
            response=page.goto(url,wait_until="domcontentloaded",timeout=30000)
            assert response and response.status==200,(topic,"final page not found")
            body=page.locator(".md-content")
            body.wait_for(state="visible",timeout=12000)
            actions=body.locator(".math-related-practice")
            assert actions.count()==1,(topic,"one inline learning panel required")
            assert actions.evaluate("(n)=>getComputedStyle(n).display")=="flex",(topic,"styling missing")
            paper=exp["written"]
            assert actions.locator("a").count()==(2 if paper else 1),(topic,"correct number of actions")
            practice=actions.locator("a").first
            assert practice.inner_text().strip().startswith("Luyện ngay")
            practice_url=urljoin(page.url,practice.get_attribute("href"))
            parsed=urlparse(practice_url)
            assert parsed.path==f"/kien-thuc/{topic}/bai-tap/",(topic,"bad Practice target",practice_url)
            assert parse_qs(parsed.query).get("focus")==[exp["skill"]],(topic,"incorrect skill target",practice_url)
            practice_result=context.request.get(practice_url,timeout=18000)
            assert practice_result.status==200,(topic,"Practice destination did not load",practice_result.status)
            if paper:
                w=actions.locator("a").nth(1)
                assert w.inner_text().strip().startswith("Làm tự luận")
                written_url=urljoin(page.url,w.get_attribute("href"))
                wp=urlparse(written_url)
                assert wp.path=="/luyen-tap/tu-luan/",(topic,"incorrect Written route",written_url)
                assert wp.fragment==paper,(topic,"incorrect Written item",written_url)
                assert parse_qs(wp.query).get("topic")==["CT"+topic[:2]]
                assert context.request.get(written_url,timeout=18000).status==200,(topic,"Written route unreachable")
            else:
                assert "Làm tự luận" not in actions.inner_text(),(topic,"fabricated Written link")
            svg=body.locator('img[src*="'+exp["diagram"]+'"]')
            assert svg.count()==1,(topic,"essential diagram absent")
            svg.scroll_into_view_if_needed()
            svg.evaluate("(img)=>img.decode()",timeout=15000)
            assert svg.evaluate("(img)=>img.naturalWidth>100"),(topic,"SVG not loaded")
            assert page.evaluate("()=>document.documentElement.scrollWidth <= document.documentElement.clientWidth+2"),(topic,profile,"horizontal overflow")
            assert not errors,(topic,profile,"JS exceptions",errors[:3])
            print("PASS R15 final route",topic,profile,"SVG CSS Practice Written no overflow",flush=True)
            page.close()
        context.close()
    browser.close()
