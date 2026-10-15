#!/usr/bin/env python3
"""W1 wave3 independent desktop/mobile UX regression for two CĐ04 rich attempts."""
import json,shutil
from playwright.sync_api import sync_playwright
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME,"Chromium not installed"
BASE="http://127.0.0.1:8765/kien-thuc/04-bieu-thuc-dai-so/bai-tap/"
OLD="ALG04-RICH-W1-01-V1"
NEW="ALG04-RICH-W1-02-V1"
with sync_playwright() as pw:
 browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
 for width,height in [(1365,900),(390,844)]:
  context=browser.new_context(viewport={"width":width,"height":height})
  context.route("https://generativelanguage.googleapis.com/**",lambda r:r.abort())
  page=context.new_page()
  errors=[]
  page.on("pageerror",lambda exc:errors.append(str(exc)))
  page.goto(BASE,wait_until="domcontentloaded")
  page.evaluate("""() => {
   localStorage.setItem("toan-thcs-practice-v1", JSON.stringify({
    questions:{"HISTORICAL-QUESTION":{attempted:2,correct:1}},tags:{},observed_signals:[]}));
   localStorage.setItem("toan-thcs-assessment-v1","DO_NOT_TOUCH_ASSESSMENT");
  }""")
  focus=page.locator(".practice-rich-focus-btn")
  focus.wait_for(state="visible",timeout=30000)
  focus.click()
  ids=page.locator("[data-practice-bank-v2]").get_attribute("data-session-question-ids") or ""
  assert OLD in ids and NEW in ids,ids
  first=page.locator('[data-rich-practice-question="'+OLD+'"]')
  first.wait_for(state="visible",timeout=10000)
  for field,answer in zip(first.locator(".practice-rich-input").all(),["3","4","+7"]):
   field.fill(answer)
  first.locator('button[type="submit"]').click()
  assert "Chính xác" in page.locator("[data-practice-bank-v2] .practice-feedback").inner_text()
  page.locator(".practice-actions").get_by_text("Câu tiếp theo").click()
  second=page.locator('[data-rich-practice-question="'+NEW+'"]')
  second.wait_for(state="visible",timeout=10000)
  fields=second.locator(".practice-rich-input")
  assert fields.count()==3
  for i,answer in enumerate(["1","-5",""]):fields.nth(i).fill(answer)
  second.locator('button[type="submit"]').click()
  assert "chưa được tính" in second.locator(".practice-rich-input-message").inner_text().lower()
  for i,answer in enumerate(["1","-5","4"]):fields.nth(i).fill(answer)
  second.locator('button[type="submit"]').click()
  assert "Chính xác" in page.locator("[data-practice-bank-v2] .practice-feedback").inner_text()
  stats=json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-v1')"))
  assert stats["questions"]["HISTORICAL-QUESTION"]=={"attempted":2,"correct":1}
  assert stats["questions"][NEW]["attempted"]==1
  assert stats["questions"][NEW]["correct"]==1
  records=json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-rich-attempts-v1')"))["attempts"]
  n=[a for a in records if a["item_id"]==NEW]
  assert len(n)==1 and n[0]["correct"] and n[0]["normalized"]==["1","-5","4"]
  assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')")=="DO_NOT_TOUCH_ASSESSMENT"
  page.reload(wait_until="domcontentloaded")
  persisted=json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-rich-attempts-v1')"))["attempts"]
  assert any(a["item_id"]==NEW for a in persisted)
  page.locator(".practice-option").first.wait_for(state="visible",timeout=30000)
  normal=page.locator("[data-practice-bank-v2]").get_attribute("data-session-question-ids") or ""
  assert "RICH-W1" not in normal
  assert not errors,errors
  print("PASS W1 wave3 browser",width,"px: typed coefficients, incomplete guard, persistence, MCQ isolation")
  context.close()
 browser.close()
