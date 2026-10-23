#!/usr/bin/env python3
"""W9 candidate browser QA — class/chapter/lesson filters, original item reuse, iPad/phone."""
from playwright.sync_api import sync_playwright
import shutil, json
from urllib.parse import quote

BROWSER = shutil.which("google-chrome") or shutil.which("chromium")
assert BROWSER, "Chromium required"
BASE="http://127.0.0.1:8765/luyen-tap/tu-luan/"
with open("docs/assets/data/written-exercises/written-exercise-library-v1.json",encoding="utf-8") as fh:
    lib=json.load(fh)
assert len(lib["exercises"])==84
by_id={e["exercise_id"]:e for e in lib["exercises"]}
grade_counts={g:sum(any(p["grade"]==g for p in e.get("kntt_placements",[])) for e in lib["exercises"]) for g in (6,7,8,9)}
assert grade_counts=={6:11,7:8,8:8,9:8},grade_counts

with sync_playwright() as p:
    browser=p.chromium.launch(executable_path=BROWSER,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for label,w,h in [("desktop",1365,860),("phone",390,844),("ipad",820,1180)]:
        context=browser.new_context(viewport={"width":w,"height":h},has_touch=label!="desktop",is_mobile=label=="phone")
        page=context.new_page()
        page.goto(BASE,wait_until="networkidle")
        page.wait_for_function("document.querySelector('[data-written-exercise-library]')?.dataset.ready === '1'",timeout=15000)
        cards=page.locator(".written-exercise-card")
        assert cards.count()==84,(label,"75 unchanged historical + 9 reviewed new items accessible")
        grade=page.locator('select[aria-label="Lọc bài tự luận theo lớp đã xác minh SGK"]')
        chapter=page.locator('select[aria-label="Lọc bài tự luận theo chương KNTT"]')
        lesson=page.locator('select[aria-label="Lọc bài tự luận theo bài học KNTT"]')
        assert grade.count()==chapter.count()==lesson.count()==1
        assert chapter.is_disabled() and lesson.is_disabled()
        page.evaluate("localStorage.setItem('w9-sentinel','unmodified')")
        for g,n in grade_counts.items():
            grade.select_option(str(g))
            assert cards.count()==n,(label,g,cards.count(),n)
            assert chapter.is_enabled() and lesson.is_disabled()
            assert all(("KNTT lớp "+str(g)) in x for x in page.locator(".written-exercise-meta").all_inner_texts())
        grade.select_option("7")
        chapter.select_option("6")
        assert cards.count()==3,(label,"two W9 G7 ratio plus one GAP9 three-team item")
        lesson.select_option("Bài 23 — Đại lượng tỉ lệ nghịch")
        assert cards.count()==1 and page.locator("#wx03-rat-002").count()==1,(label,"exact G7 lesson")
        grade.select_option("8")
        chapter.select_option("2")
        assert cards.count()==2,(label,"two G8 ch2 written")
        grade.select_option("9")
        chapter.select_option("6")
        assert cards.count()==2,(label,"two G9 ch6 written")
        grade.select_option("6")
        chapter.select_option("3")
        assert cards.count()==1 and page.locator("#wx02-num-004").count()==1,(label,"G6 new absolute-value Written")
        new=page.locator("#wx02-num-004")
        assert new.locator(".written-help-action").count()==5,(label,"five controls on deep Written")
        hint=new.locator('[data-help-target="hints"]')
        hint.click()
        assert new.locator(".written-hint-step").count()==1,(label,"progressive hint")
        hint.click()
        assert new.locator(".written-hint-step").count()==2,(label,"second hint")
        new.locator('[data-help-target="solution"]').click()
        assert new.locator('[data-help-panel="solution"]').is_visible(),(label,"worked solution")
        assert page.evaluate("localStorage.getItem('w9-sentinel')")=="unmodified",(label,"no history writes")
        grade.select_option("all")
        assert chapter.is_disabled() and lesson.is_disabled() and cards.count()==84,(label,"restore all")
        topic=page.locator('select[aria-label="Lọc theo chuyên đề"]')
        topic.select_option("CT02")
        assert page.locator("#wx02-num-004").count()==1,(label,"same canonical item via topic route")
        page.goto(BASE+"?grade=9&chapter=6",wait_until="networkidle")
        page.wait_for_function("document.querySelector('[data-written-exercise-library]')?.dataset.ready === '1'",timeout=15000)
        assert page.locator('select[aria-label="Lọc bài tự luận theo lớp đã xác minh SGK"]').input_value()=="9"
        assert page.locator('select[aria-label="Lọc bài tự luận theo chương KNTT"]').input_value()=="6"
        assert page.locator(".written-exercise-card").count()==2,(label,"grade deep link")
        if w<=390:
            assert page.evaluate("document.documentElement.scrollWidth <= window.innerWidth+2"),(label,"horizontal scroll")
        context.close()
        print("PASS W9 grade/chapter/lesson Written selection",label,grade_counts)
    browser.close()
