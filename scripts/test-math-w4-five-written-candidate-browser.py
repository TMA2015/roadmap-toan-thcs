#!/usr/bin/env python3
"""W4 candidate only: five reviewed append-only Written cards, mobile + desktop.
This CI test does NOT authorize release or update learner assessment progress."""
import json
import shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME, "Chromium required"
BASE="http://127.0.0.1:8765/luyen-tap/tu-luan/"
with open("docs/assets/data/written-exercises/written-exercise-library-v1.json",encoding="utf-8") as fh:
    bank=json.load(fh)
assert len(bank["exercises"])==87 and bank["published_scope"]["exercise_count"]==87
new=bank["exercises"][69:74]  # preserve five reviewed W4 records; W9 additional candidate is separate
expected=[
    ("CT08","WX08-EQI-003","CORE_BASE"),
    ("CT09","WX09-SYS-009","CORE_APPLY"),
    ("CT10","WX10-FUN-003","ENTRANCE10"),
    ("CT11","WX11-RAD-004","ENTRANCE10"),
    ("CT12","WX12-QUA-003","ENTRANCE10"),
]
assert [(x["topic_id"],x["exercise_id"],x["level"]) for x in new]==expected
assert all(x["academic_review"]["publication_gate"]=="OWNER_RELEASE_APPROVED_20261021" for x in new)

with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for device,width,height in (("desktop",1440,900),("mobile",390,844)):
        ctx=browser.new_context(viewport={"width":width,"height":height})
        page=ctx.new_page()
        failures=[]
        page.on("pageerror",lambda e:failures.append(str(e)))
        page.goto(BASE,wait_until="networkidle")
        root=page.locator("[data-written-exercise-library]")
        root.wait_for(state="visible",timeout=15000)
        page.wait_for_function("document.querySelector('[data-written-exercise-library]')?.dataset.ready==='1'",timeout=15000)
        cards=page.locator(".written-exercise-card")
        assert cards.count()==87,(device,"all 75 previously released and nine newly owner-approved GAP9 cards")
        assert page.locator(".written-exercise-card#wx07-ent-001").count()==1,(device,"historical W3 card preserved")
        page.evaluate("localStorage.setItem('w4-qa-sentinel','DO_NOT_TOUCH')")
        topic=page.locator('select[aria-label="Lọc theo chuyên đề"]')
        level=page.locator('select[aria-label="Lọc theo mức"]')
        for t,ident,lvl in expected:
            topic.select_option(t)
            level.select_option(lvl)
            card=page.locator(".written-exercise-card#"+ident.lower())
            assert card.count()==1 and card.is_visible(),(device,ident,"filter visibility")
            assert card.locator('[data-help-panel="solution"]').is_hidden(),(device,ident,"solution hidden initially")
            if t!="CT08":
                hints=card.locator('[data-help-target="hints"]')
                assert hints.count()==1,(device,ident,"three-step help available")
                hints.click()
                assert card.locator(".written-hint-step").count()==1,(device,ident,"first hint")
                hints.click()
                hints.click()
                assert card.locator(".written-hint-step").count()==3,(device,ident,"three progressive hints")
            card.locator('[data-help-target="solution"]').click()
            assert card.locator('[data-help-panel="solution"]').is_visible(),(device,ident,"show worked solution")
            card.locator('[data-help-target="rubric"]').click()
            assert card.locator('[data-help-panel="rubric"]').is_visible(),(device,ident,"self-mark rubric")
            assert page.evaluate("localStorage.getItem('w4-qa-sentinel')")=="DO_NOT_TOUCH"
        assert not failures,(device,failures)
        ctx.close()
        print(f"PASS W4 candidate browser {device}: five cards visible; progressive hints; solution; rubric; no unwanted storage write")
    browser.close()
