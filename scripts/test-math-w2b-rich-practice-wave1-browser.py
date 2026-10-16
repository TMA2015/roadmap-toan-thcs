#!/usr/bin/env python3
"""W2B Wave1: complete old 3 rich tasks and check fourth four-field task."""
import json,shutil
from playwright.sync_api import sync_playwright
chrome=shutil.which("google-chrome") or shutil.which("chromium")
assert chrome,"Chrome is required"
url="http://127.0.0.1:8765/kien-thuc/04-bieu-thuc-dai-so/bai-tap/"
ids=["ALG04-RICH-W1-01-V1","ALG04-RICH-W1-02-V1","ALG04-RICH-W2A-01-V1","ALG04-RICH-W2B-01-V1"]
answers=[["3","4","7"],["1","-5","4"],["2","-5","-3"],["0","0","-2","-2"]]
with sync_playwright() as pw:
 browser=pw.chromium.launch(executable_path=chrome,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
 for width,height in [(1365,900),(390,844)]:
  ctx=browser.new_context(viewport={"width":width,"height":height})
  ctx.route("https://generativelanguage.googleapis.com/**",lambda r:r.abort())
  page=ctx.new_page()
  errors=[]
  page.on("pageerror",lambda e:errors.append(str(e)))
  resp=page.goto(url,wait_until="domcontentloaded")
  assert resp.status==200
  page.evaluate("""() => {
    localStorage.setItem('toan-thcs-practice-v1',JSON.stringify({questions:{'OLD-ID':{attempted:5,correct:4}},tags:{},observed_signals:[]}));
    localStorage.setItem('toan-thcs-assessment-v1','KEEP_READY');
  }""")
  page.locator(".practice-rich-focus-btn").click(timeout=25000)
  session=page.locator("[data-practice-bank-v2]").get_attribute("data-session-question-ids") or ""
  assert all(id in session for id in ids),session
  for i,(qid,values) in enumerate(zip(ids,answers)):
   form=page.locator('[data-rich-practice-question="'+qid+'"]')
   form.wait_for(state="visible",timeout=15000)
   fields=form.locator(".practice-rich-input")
   assert fields.count()==len(values)
   for j,val in enumerate(values):fields.nth(j).fill(val)
   if i==3:
    fields.nth(3).fill("")
    form.locator('button[type="submit"]').click()
    assert "chưa được tính" in form.locator(".practice-rich-input-message").inner_text().lower()
    fields.nth(3).fill("-2")
   form.locator('button[type="submit"]').click()
   assert "Chính xác" in page.locator("[data-practice-bank-v2] .practice-feedback").inner_text()
   if i<3:page.locator(".practice-actions").get_by_text("Câu tiếp theo").click()
  state=json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-v1')"))["questions"]
  assert state["OLD-ID"]=={"attempted":5,"correct":4}
  for qid in ids:assert state[qid]["attempted"]==1 and state[qid]["correct"]==1
  assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')")=="KEEP_READY"
  page.reload(wait_until="domcontentloaded")
  saved=json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-rich-attempts-v1')"))["attempts"]
  assert any(x["item_id"]==ids[-1] for x in saved)
  page.locator(".practice-option").first.wait_for(state="visible",timeout=20000)
  mcqs=page.locator("[data-practice-bank-v2]").get_attribute("data-session-question-ids") or ""
  assert ids[-1] not in mcqs
  assert not errors,errors
  print("PASS W2B Wave1",width,"px: four fields, incomplete guard, old items, data stores, MCQ separation")
  ctx.close()
 browser.close()
