#!/usr/bin/env python3
"""W1 wave2 browser regression: new item reachable after old pilot, saved separately."""
import json,shutil
from playwright.sync_api import sync_playwright
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME
BASE="http://127.0.0.1:8765/"
CASES=[("02-so-va-phep-tinh","NUM02-RICH-W1-02-V1","22/60"),("03-ti-le-ti-le-thuc","RAT03-RICH-W1-02-V1","3,6")]
with sync_playwright() as pw:
 browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
 for width,height in [(1365,900),(390,844)]:
  ctx=browser.new_context(viewport={"width":width,"height":height})
  ctx.route("https://generativelanguage.googleapis.com/**",lambda r:r.abort())
  page=ctx.new_page()
  for slug,qid,answer in CASES:
   response=page.goto(BASE+"kien-thuc/"+slug+"/bai-tap/",wait_until="domcontentloaded",timeout=60000)
   assert response.status==200
   page.locator(".practice-rich-focus-btn").click(timeout=25000)
   ids=page.locator("[data-practice-bank-v2]").get_attribute("data-session-question-ids")
   assert qid in ids,ids
   # Earlier immutable pilot is always the first rich question in the v4 append-only list.
   first=page.locator(".practice-rich-answer-form")
   first.wait_for(state="visible")
   oldid=first.get_attribute("data-rich-practice-question")
   assert oldid!=qid,(slug,oldid)
   first.locator(".practice-rich-input").first.fill("18" if slug.startswith("02") else "15/2")
   first.locator('button[type="submit"]').click()
   page.locator(".practice-actions").get_by_text("Câu tiếp theo").click()
   form=page.locator('[data-rich-practice-question="'+qid+'"]')
   form.wait_for(state="visible")
   form.locator(".practice-rich-input").fill(answer)
   form.locator('button[type="submit"]').click()
   assert "Chính xác" in page.locator("[data-practice-bank-v2] .practice-feedback").inner_text()
   stats=json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-v1')"))
   assert stats["questions"][qid]["correct"]>=1
   raw=json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-rich-attempts-v1')"))
   assert any(row["item_id"]==qid and row["correct"] for row in raw["attempts"])
   page.reload(wait_until="domcontentloaded")
   raw2=json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-rich-attempts-v1')"))
   assert any(row["item_id"]==qid for row in raw2["attempts"])
  ctx.close()
  print("PASS W1 wave2 browser",width)
 browser.close()
