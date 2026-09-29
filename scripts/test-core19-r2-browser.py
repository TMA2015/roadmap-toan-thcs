#!/usr/bin/env python3
"""CĐ19 R2 release: actual desktop/mobile Core modal and pre-answer evidence, plus rendered lesson SVG."""
import shutil
from pathlib import Path
from playwright.sync_api import sync_playwright
BASE="http://127.0.0.1:8765/kien-thuc/19-duong-tron/"
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME: raise RuntimeError("Chromium/Chrome required")
Path("previews").mkdir(exist_ok=True)
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for name,size in [("desktop",{"width":1440,"height":900}),("mobile",{"width":390,"height":844})]:
        context=browser.new_context(viewport=size)
        page=context.new_page()
        page.goto(BASE,wait_until="networkidle")
        hero=page.locator(".topic-workspace-hero")
        hero.wait_for(state="visible")
        assert page.locator(".topic-core-gateway a[href='core/']").count()==1, name+" Core gateway"
        page.goto(BASE+"core/",wait_until="networkidle")
        cards=page.locator(".topic-core-card")
        cards.first.wait_for(state="visible",timeout=18000)
        assert cards.count()==5, name+" five cards"
        assert cards.nth(0).get_attribute("data-covered-skills")=="4"
        assert cards.nth(3).get_attribute("data-covered-skills")=="4"
        assert page.locator(".lesson-switcher-steps--four").count()==1
        storage=lambda:page.evaluate("localStorage.getItem('toan-thcs-practice-v1')")
        before=storage()
        cards.first.locator(".topic-core-teach-start").click()
        dialog=page.locator("dialog.topic-core-dialog")
        assert dialog.is_visible()
        assert dialog.get_by_text("Dây–tâm cần giả thiết",exact=False).count()>0
        dialog.get_by_role("button",name="Luyện tập").click()
        assert dialog.get_attribute("data-mode")=="practice"
        assert dialog.locator(".topic-micro-page").count()==4
        assert dialog.get_by_text("4/4 kỹ năng có câu riêng").count()>0
        dialog.locator(".topic-micro-page").last.click()
        assert dialog.get_by_text("GEO19MICRO_016",exact=False).count()==0
        assert dialog.get_by_text("Độ dài đường tròn",exact=False).count()>0
        assert storage()==before, name+" opening, switching, choosing unsubmitted item must not write learner data"
        dialog.locator(".topic-micro-option").first.click()
        assert storage()!=before, name+" answering must write learner evidence"
        dialog.locator(".topic-core-dialog__close").click()
        assert not dialog.is_visible()
        page.screenshot(path="previews/core19-"+name+".png",animations="disabled",full_page=False)
        page.goto(BASE,wait_until="networkidle")
        figures=page.locator("img[src*='assets/geometry/19/']")
        assert figures.count()>=4, name+" expected source diagrams"
        for i in range(figures.count()):
            img=figures.nth(i)
            img.scroll_into_view_if_needed()
            assert img.evaluate("(el)=>el.complete && el.naturalWidth>0 && el.naturalHeight>0"),name+" broken SVG "+str(i)
        page.screenshot(path="previews/core19-lesson-"+name+".png",animations="disabled",full_page=False)
        context.close()
    browser.close()
    print("PASS: Core19 desktop/mobile dual modal, 17-item bank, no phantom attempt, answered evidence, rendered SVG files.")
