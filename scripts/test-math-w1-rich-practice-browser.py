#!/usr/bin/env python3
"""W1 rich Practice pilot: 3 topics, two viewport sizes, shared learner evidence, no Readiness leakage."""
import shutil, json
from playwright.sync_api import sync_playwright
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME,"Chromium not installed"
BASE="http://127.0.0.1:8765/"
CASES=[
  ("02-so-va-phep-tinh","NUM02-RICH-W1-01-V1",["abc"],["18"],"18"),
  ("03-ti-le-ti-le-thuc","RAT03-RICH-W1-01-V1",["1/0"],["30/4"],"15/2"),
  ("04-bieu-thuc-dai-so","ALG04-RICH-W1-01-V1",["3","4",""],["3","4","+7"],"7")
]
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for width,height in [(1365,900),(390,844)]:
        context=browser.new_context(viewport={"width":width,"height":height})
        context.route("https://generativelanguage.googleapis.com/**",lambda r:r.abort())
        page=context.new_page()
        errors=[]
        page.on("pageerror",lambda x:errors.append(str(x)))
        page.goto(BASE,wait_until="domcontentloaded")
        page.evaluate("""() => {
          localStorage.setItem("toan-thcs-practice-v1",JSON.stringify({
            questions:{"HISTORICAL-QUESTION":{attempted:2,correct:1}},
            tags:{"historic-skill":{attempted:2,correct:1}},observed_signals:[]}));
          localStorage.setItem("toan-thcs-assessment-v1","DO_NOT_TOUCH_ASSESSMENT");
        }""")
        for slug,question_id,bad,good,expected in CASES:
            response=page.goto(BASE+"kien-thuc/"+slug+"/bai-tap/",wait_until="domcontentloaded")
            assert response.status==200,slug
            focus=page.locator(".practice-rich-focus-btn")
            focus.wait_for(state="visible",timeout=25000)
            focus.click()
            form=page.locator('[data-rich-practice-question="'+question_id+'"]')
            form.wait_for(state="visible",timeout=10000)
            inputs=form.locator("input.practice-rich-input")
            assert inputs.count()==len(good)
            for i,value in enumerate(bad):inputs.nth(i).fill(value)
            form.locator('button[type="submit"]').click()
            assert "chưa được tính" in form.locator(".practice-rich-input-message").inner_text().lower()
            assert page.evaluate("localStorage.getItem('toan-thcs-practice-rich-attempts-v1')") is None or not any(
                row.get("item_id")==question_id for row in json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-rich-attempts-v1')") or '{"attempts":[]}')["attempts"])
            for i,value in enumerate(good):inputs.nth(i).fill(value)
            form.locator('button[type="submit"]').click()
            feedback=page.locator("[data-practice-bank-v2] .practice-feedback")
            assert "Chính xác" in feedback.inner_text(),(slug,feedback.inner_text())
            stats=json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-v1')"))
            assert stats["questions"]["HISTORICAL-QUESTION"]=={"attempted":2,"correct":1},"original historical record changed"
            assert stats["questions"][question_id]["attempted"]==1
            assert stats["questions"][question_id]["correct"]==1
            rich=json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-rich-attempts-v1')"))
            entry=[r for r in rich["attempts"] if r["item_id"]==question_id][-1]
            assert entry["correct"] and entry["normalized"][-1]==expected
            assert entry["source_item_id"] in ["02-G6-WR-01","03-M1-02","04-WR-01"]
            assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')")=="DO_NOT_TOUCH_ASSESSMENT"
            page.locator("[data-practice-bank-v2] .practice-toolbar-actions").get_by_text("Bộ 10 câu mới").click()
            page.locator("[data-practice-bank-v2] .practice-option").first.wait_for(state="visible",timeout=15000)
            ids=page.locator("[data-practice-bank-v2]").get_attribute("data-session-question-ids") or ""
            assert "RICH-W1" not in ids, "old ten-choice session must not silently mix typed pilot items"
            # MCQ route stays available, with unchanged normal 10-question session.
            assert page.locator(".practice-rich-focus-btn").count()==1
        assert not errors,(width,errors)
        print("PASS W1 rich Practice browser",width,"px: typed answer, invalid input, legacy stats, typed provenance and independent assessment unchanged")
        context.close()
    browser.close()
