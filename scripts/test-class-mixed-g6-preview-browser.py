#!/usr/bin/env python3
"""QA-only G6 mixed Core formative preview. Disposable contexts: no real learner history."""
import shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME
BASE="http://127.0.0.1:8765/"
URL=BASE+"hoc-theo-lop/on-tap-tong-hop-lop-6/"
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for width,height in ((1365,900),(390,844)):
        context=browser.new_context(viewport={"width":width,"height":height})
        page=context.new_page()
        errors=[]
        page.on("pageerror",lambda error:errors.append(str(error)))
        response=page.goto(URL,wait_until="domcontentloaded")
        assert response and response.status==200
        root=page.locator("[data-class-mixed-g6-qa]")
        root.locator("input[type=checkbox]").first.wait_for(timeout=15000)
        assert root.locator("input[type=checkbox]").count()==6
        assert root.get_by_role("button",name="Bắt đầu ôn tập").is_disabled()
        page.evaluate("""() => {
          localStorage.setItem('toan-thcs-practice-v1','{\u0022QA\u0022:123}');
          localStorage.setItem('toan-thcs-assessment-v1','{\u0022QA\u0022:456}');
        }""")
        # Only studied chapters: two groups give 4 questions, never pad
        # with source material from the other four unselected groups.
        root.locator("input[type=checkbox]").first.check()
        assert root.get_by_role("button",name="Bắt đầu ôn tập").is_disabled()
        root.locator("input[type=checkbox]").nth(1).check()
        assert root.get_by_role("button",name="Bắt đầu ôn tập").is_enabled()
        root.get_by_role("button",name="Bắt đầu ôn tập").click()
        short=root.locator(".cmg6-quiz")
        short.locator(".cmg6-options input").first.wait_for(timeout=15000)
        assert "Câu 1/4" in short.inner_text()
        assert short.locator(".cmg6-jump button").count()==4
        assert "Đáp án:" not in short.inner_text()
        for index in range(4):
            short.locator(".cmg6-jump button").nth(index).click()
            short.locator(".cmg6-options input").first.check()
        short.get_by_role("button",name="Nộp bài và xem kết quả").click()
        assert short.locator(".cmg6-review").count()==4
        short_count=page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-class-mixed-quiz-v1')).attempts.length""")
        assert short_count==1

        # Then open the full six-group cohort on the SAME disposable profile.
        page.goto(URL,wait_until="domcontentloaded")
        root=page.locator("[data-class-mixed-g6-qa]")
        root.locator("input[type=checkbox]").first.wait_for(timeout=15000)
        for checkbox in root.locator("input[type=checkbox]").all():
            checkbox.check()
        root.get_by_role("button",name="Bắt đầu ôn tập").click()
        quiz=root.locator(".cmg6-quiz")
        quiz.locator(".cmg6-options input").first.wait_for(timeout=15000)
        assert "Câu 1/10" in quiz.inner_text()
        assert "Đáp án:" not in quiz.inner_text(),"No revealed answers before submission"
        assert quiz.locator(".cmg6-jump button").count()==10
        for i in range(10):
            quiz.locator(".cmg6-jump button").nth(i).click()
            quiz.locator(".cmg6-options input").first.check()
        quiz.get_by_role("button",name="Nộp bài và xem kết quả").click()
        assert "Kết quả ôn tập:" in quiz.inner_text()
        assert quiz.locator(".cmg6-review").count()==10
        assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')")=='{"QA":123}'
        assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')")=='{"QA":456}'
        count=page.evaluate("""() => {
          const x=JSON.parse(localStorage.getItem('toan-thcs-class-mixed-quiz-v1'));
          return x.schema==='math-class-mixed-history-v1' ? x.attempts.length : -1;
        }""")
        assert count==2
        assert not errors,(width,errors)
        print("PASS G6 mixed Core source/submit/isolated-history/mobile preview",width)
        context.close()
    browser.close()
