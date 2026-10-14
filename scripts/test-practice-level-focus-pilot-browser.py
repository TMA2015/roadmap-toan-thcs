#!/usr/bin/env python3
"""Opt-in CT03/CT22 authored exercise level switch; independent user history untouched."""
import shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME
BASE="http://127.0.0.1:8765/"
for_test=[("03-ti-le-ti-le-thuc","03-M3-01"),("22-dai-luong-dac-trung","22-M3-01")]
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for width,height in [(1365,900),(390,844)]:
        ctx=browser.new_context(viewport={"width":width,"height":height})
        page=ctx.new_page()
        errors=[]
        page.on("pageerror",lambda err:errors.append(str(err)))
        for slug,item in for_test:
            response=page.goto(BASE+"kien-thuc/"+slug+"/bai-tap/",wait_until="domcontentloaded")
            assert response and response.status==200,slug
            root=page.locator("[data-practice-level-focus]")
            root.wait_for(state="visible",timeout=15000)
            assert page.locator(".practice-level-button").count()==4,(slug,width)
            assert "không phải bài kiểm tra" in root.locator(".practice-level-intro").inner_text().lower()
            panels=root.locator(".practice-level-panel")
            assert panels.count()==4,(slug,"four levels")
            assert panels.nth(0).is_visible() and panels.nth(1).is_hidden()
            page.locator(".practice-level-button").nth(2).click()
            assert panels.nth(2).is_visible() and panels.nth(0).is_hidden()
            assert item in panels.nth(2).inner_text(),(slug,"original M3 question preserved")
            assert page.locator(".practice-focus-disclosure").count()>=2,(slug,"closed answer/guide")
            assert all(not x for x in page.locator(".practice-focus-disclosure").evaluate_all("(nodes)=>nodes.map(n=>n.open)"))
            page.locator(".practice-focus-disclosure").first.locator("summary").click()
            assert page.locator(".practice-focus-disclosure").first.evaluate("(x)=>x.open")
            page.locator(".practice-level-button").nth(3).click()
            assert panels.nth(3).is_visible() and panels.nth(2).is_hidden()
            assert page.locator(".practice-level-button").nth(3).get_attribute("aria-pressed")=="true"
            assert page.locator(".practice-level-button").nth(0).get_attribute("aria-pressed")=="false"
            # DOM-only view must never start a learner-history store.
            assert page.evaluate("Object.keys(localStorage).filter(k=>k.startsWith('toan-thcs-')).length")==0,(slug,"unexpected storage")
        assert not errors,(width,errors)
        print("PASS CT03+CT22 four-level focused written exercise UI",width)
        ctx.close()
    browser.close()
