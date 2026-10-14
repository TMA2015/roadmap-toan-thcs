#!/usr/bin/env python3
"""Two library paths: desktop/390px, controlled grade tabs, canonical WX/A25 links, no learner history writes."""
import shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME, "Chromium required"
BASE="http://127.0.0.1:8765/"

with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for width,height in [(1365,900),(390,844)]:
        context=browser.new_context(viewport={"width":width,"height":height})
        page=context.new_page()
        errors=[]
        page.on("pageerror",lambda e:errors.append(str(e)))
        page.goto(BASE+"luyen-tap/",wait_until="domcontentloaded")
        page.evaluate("localStorage.setItem('library-two-paths-sentinel','preserve')")
        assert page.locator(".math-library-entry").count()==2
        assert page.locator("[data-written-exercise-library]").count()==1
        page.locator('.math-library-entry[href="bai-mau-tieu-bieu/"]').click()
        page.wait_for_url("**/luyen-tap/bai-mau-tieu-bieu/")
        root=page.locator("[data-model-examples-library]")
        page.wait_for_function("document.querySelector('[data-model-examples-library]')?.dataset.ready==='1'",timeout=18000)
        cards=root.locator(".model-library-card")
        assert cards.count()==21,(width,"10WX+11A25")
        grade=root.get_by_label("Lọc bài mẫu theo lớp")
        group=root.get_by_label("Lọc nhóm bài mẫu")
        grade.select_option("6")
        assert cards.count()==4,(width,"G6 WX deep examples")
        assert all("Bài mẫu theo kiến thức" in x for x in cards.all_inner_texts())
        group.select_option("a25")
        assert cards.count()==0,(width,"A25 not promoted into G6 Core")
        grade.select_option("9")
        assert cards.count()==11,(width,"A25 entrance set")
        target=cards.first.locator(".model-library-link")
        assert "/kien-thuc/25-tong-hop-on-thi-10/" in target.get_attribute("href")
        group.select_option("wx")
        assert cards.count()==6,(width,"G9 deep WX count")
        target=cards.first.locator(".model-library-link")
        assert "luyen-tap/?kind=anchor#wx09-" in target.get_attribute("href")
        target.click()
        page.wait_for_url("**/luyen-tap/?kind=anchor#wx09-*")
        original=page.locator(".written-exercise-card#wx09-sys-003")
        original.wait_for(state="visible")
        assert original.locator(".written-help-action").count()==5
        assert page.evaluate("localStorage.getItem('library-two-paths-sentinel')")=="preserve"
        assert not errors,(width,errors)
        print("PASS two-path Written / Model page and grade links",width)
        context.close()
    browser.close()
