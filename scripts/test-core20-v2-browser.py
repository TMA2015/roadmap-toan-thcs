#!/usr/bin/env python3
"""Verify CĐ20 overlay and actual geometry SVG on desktop/mobile."""
import shutil
from pathlib import Path
from playwright.sync_api import sync_playwright
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME: raise RuntimeError("Chromium required")
BASE="http://127.0.0.1:8765/kien-thuc/20-hinh-hoc-tong-hop/"
Path("previews").mkdir(exist_ok=True)
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for device,width,height in [("desktop",1440,900),("mobile",390,844)]:
        context=browser.new_context(viewport={"width":width,"height":height})
        page=context.new_page()
        page.goto(BASE,wait_until="networkidle")
        assert page.locator("#core-journey.topic-core-gateway a[href='core/']").count()==1
        page.goto(BASE+"core/",wait_until="networkidle")
        cards=page.locator(".topic-core-card")
        cards.first.wait_for(state="visible",timeout=20000)
        assert cards.count()==10 and page.locator(".lesson-switcher-steps--four a").count()==4
        assert page.locator(".topic-core-card-gap").count()==0
        assert page.locator(".topic-core-card-header").count()==10
        assert "29 câu thực hành" in page.locator(".topic-core-journey-head").inner_text()
        page.screenshot(path="previews/core20-"+device+".png",animations="disabled")
        card=page.locator('[data-card-id="geo20-core-1a"].topic-core-card')
        card.locator(".topic-core-teach-start").click()
        dialog=page.locator("dialog.topic-core-dialog")
        assert dialog.is_visible() and dialog.locator(".topic-core-teaching-row").count()==5
        dialog.locator('.topic-core-modal-mode[data-mode="practice"]').click()
        assert dialog.locator(".topic-micro-pager button").count()==3
        assert dialog.locator(".topic-micro-assessed-skill").get_attribute("data-primary-skill")=="nhan-biet-hinh-vuong"
        assert dialog.locator(".topic-micro-option").nth(1).inner_text()=="Hình vuông"
        dialog.locator(".topic-core-dialog__close").click()
        page.locator('[data-card-id="geo20-core-2b"].topic-core-card .topic-core-practice-start').click()
        assert dialog.locator(".topic-micro-pager button").count()==2
        dialog.locator(".topic-core-dialog__close").click()
        page.locator('[data-card-id="geo20-core-4"].topic-core-card .topic-core-practice-start').click()
        dialog.locator(".topic-micro-pager button").nth(1).click()
        assert dialog.locator(".topic-micro-assessed-skill").get_attribute("data-primary-skill")=="dien-tich-xung-quanh-hinh-non"
        dialog.locator(".topic-core-dialog__close").click()
        page.goto(BASE,wait_until="networkidle")
        figures=page.locator("img[src*='assets/geometry/20/']")
        assert figures.count()>=3
        for i in range(figures.count()):
            figure=figures.nth(i)
            figure.scroll_into_view_if_needed()
            assert figure.evaluate("(el)=>el.complete && el.naturalWidth>0 && el.naturalHeight>0")
            assert figure.evaluate("(el)=>el.getBoundingClientRect().width<=window.innerWidth+1")
        page.screenshot(path="previews/core20-lesson-"+device+".png",animations="disabled")
        context.close()
    browser.close()
    print("PASS: CĐ20 10-card overlay, desktop/mobile modal, 2-item prism, unchanged legacy mapping and rendered SVG.")
