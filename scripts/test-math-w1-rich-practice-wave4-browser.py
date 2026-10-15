#!/usr/bin/env python3
"""W1 wave4 CĐ21 real browser QA: semantic frequency table, exact grading, mobile, persistence."""
import json,shutil
from playwright.sync_api import sync_playwright
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME,"Chromium/Chrome required"
BASE="http://127.0.0.1:8765/kien-thuc/21-thong-ke/bai-tap/"
Q1="STA21-RICH-W1-01-V1"
Q2="STA21-RICH-W1-02-V1"
with sync_playwright() as pw:
 browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
 for width,height in [(1365,900),(390,844)]:
  ctx=browser.new_context(viewport={"width":width,"height":height})
  ctx.route("https://generativelanguage.googleapis.com/**",lambda route:route.abort())
  page=ctx.new_page()
  page_errors=[]
  page.on("pageerror",lambda error:page_errors.append(str(error)))
  res=page.goto(BASE,wait_until="domcontentloaded")
  assert res.status==200
  page.evaluate("""() => {
    localStorage.setItem("toan-thcs-practice-v1", JSON.stringify({
     questions:{"HISTORICAL-QUESTION":{attempted:2,correct:1}},tags:{},observed_signals:[]}));
    localStorage.setItem("toan-thcs-assessment-v1","DO_NOT_TOUCH_ASSESSMENT");
  }""")
  btn=page.locator(".practice-rich-focus-btn")
  btn.wait_for(state="visible",timeout=25000)
  btn.click()
  ids=page.locator("[data-practice-bank-v2]").get_attribute("data-session-question-ids") or ""
  assert Q1 in ids and Q2 in ids,ids
  first=page.locator('[data-rich-practice-question="'+Q1+'"]')
  first.wait_for(state="visible",timeout=10000)
  table=first.locator("table.practice-rich-frequency-table")
  assert table.count()==1
  assert table.locator("thead th").all_text_contents()==["Giá trị","Tần số"]
  assert table.locator("tbody th").all_text_contents()==["6","7","8","9"]
  inputs=table.locator("input.practice-rich-input")
  assert inputs.count()==4
  for i,n in enumerate(["1","2","3","1"]):inputs.nth(i).fill(n)
  first.locator('button[type="submit"]').click()
  assert "Chính xác" in page.locator(".practice-feedback").inner_text()
  page.locator(".practice-actions").get_by_text("Câu tiếp theo").click()
  second=page.locator('[data-rich-practice-question="'+Q2+'"]')
  second.wait_for(state="visible",timeout=10000)
  table=second.locator("table.practice-rich-frequency-table")
  assert table.locator("tbody th").all_text_contents()==["6","7","8","9","10","Tổng"]
  inputs=table.locator("input.practice-rich-input")
  assert inputs.count()==6
  for i,n in enumerate(["1","2","4","2","1",""]):inputs.nth(i).fill(n)
  second.locator('button[type="submit"]').click()
  assert "chưa được tính" in second.locator(".practice-rich-input-message").inner_text().lower()
  inputs.nth(5).fill("10")
  second.locator('button[type="submit"]').click()
  assert "Chính xác" in page.locator(".practice-feedback").inner_text()
  assert inputs.nth(5).is_disabled()
  record=json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-v1')"))
  assert record["questions"]["HISTORICAL-QUESTION"]=={"attempted":2,"correct":1}
  assert record["questions"][Q1]["attempted"]==1 and record["questions"][Q1]["correct"]==1
  assert record["questions"][Q2]["attempted"]==1 and record["questions"][Q2]["correct"]==1
  attempts=json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-rich-attempts-v1')"))["attempts"]
  assert [r["item_id"] for r in attempts if r["item_id"] in (Q1,Q2)]==[Q1,Q2]
  assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')")=="DO_NOT_TOUCH_ASSESSMENT"
  page.reload(wait_until="domcontentloaded")
  saved=json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-rich-attempts-v1')"))["attempts"]
  assert {x["item_id"] for x in saved}.issuperset({Q1,Q2})
  page.locator(".practice-option").first.wait_for(state="visible",timeout=20000)
  normal_ids=page.locator("[data-practice-bank-v2]").get_attribute("data-session-question-ids") or ""
  assert Q1 not in normal_ids and Q2 not in normal_ids
  assert not page_errors,page_errors
  print("PASS W1 wave4 browser",width,"px: real frequency tables, incomplete guard, exact submissions, legacy & readiness protected")
  ctx.close()
 browser.close()
