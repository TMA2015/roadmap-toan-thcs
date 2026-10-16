#!/usr/bin/env python3
"""W2A wave1: real desktop/mobile browser regression, old variants preserved."""
import json,shutil
from playwright.sync_api import sync_playwright
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME,"Chrome/Chromium required"
BASE="http://127.0.0.1:8765/kien-thuc/04-bieu-thuc-dai-so/bai-tap/"
IDS=["ALG04-RICH-W1-01-V1","ALG04-RICH-W1-02-V1","ALG04-RICH-W2A-01-V1"]
DATA=[["3","4","7"],["1","-5","4"],["2","-5","-3"]]
with sync_playwright() as pw:
 browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
 for width,height in [(1365,900),(390,844)]:
  ctx=browser.new_context(viewport={"width":width,"height":height})
  ctx.route("https://generativelanguage.googleapis.com/**",lambda route:route.abort())
  page=ctx.new_page()
  errors=[]
  page.on("pageerror",lambda ex:errors.append(str(ex)))
  res=page.goto(BASE,wait_until="domcontentloaded")
  assert res.status==200
  page.evaluate("""() => {
    localStorage.setItem("toan-thcs-practice-v1",JSON.stringify({
      questions:{"HISTORICAL-ITEM":{attempted:5,correct:3}},tags:{},observed_signals:[]}));
    localStorage.setItem("toan-thcs-assessment-v1","PROTECTED_ASSESSMENT");
  }""")
  page.locator(".practice-rich-focus-btn").click(timeout=30000)
  all_ids=page.locator("[data-practice-bank-v2]").get_attribute("data-session-question-ids") or ""
  assert all(x in all_ids for x in IDS),all_ids
  for ix,(qid,values) in enumerate(zip(IDS,DATA)):
   form=page.locator('[data-rich-practice-question="'+qid+'"]')
   form.wait_for(state="visible",timeout=12000)
   inputs=form.locator(".practice-rich-input")
   assert inputs.count()==3
   if ix==2:
    for j,value in enumerate(values[:2]):inputs.nth(j).fill(value)
    form.locator('button[type="submit"]').click()
    assert "chưa được tính" in form.locator(".practice-rich-input-message").inner_text().lower()
   for j,value in enumerate(values):inputs.nth(j).fill(value)
   form.locator('button[type="submit"]').click()
   assert "Chính xác" in page.locator("[data-practice-bank-v2] .practice-feedback").inner_text()
   if ix<len(IDS)-1:page.locator(".practice-actions").get_by_text("Câu tiếp theo").click()
  stats=json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-v1')"))
  assert stats["questions"]["HISTORICAL-ITEM"]=={"attempted":5,"correct":3}
  for qid in IDS:
   assert stats["questions"][qid]["attempted"]==1
   assert stats["questions"][qid]["correct"]==1
  attempts=json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-rich-attempts-v1')"))["attempts"]
  assert [a["item_id"] for a in attempts if a["item_id"] in IDS]==IDS
  assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')")=="PROTECTED_ASSESSMENT"
  page.reload(wait_until="domcontentloaded")
  old=json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-rich-attempts-v1')"))["attempts"]
  assert any(a["item_id"]==IDS[-1] for a in old)
  page.locator(".practice-option").first.wait_for(state="visible",timeout=20000)
  normal=page.locator("[data-practice-bank-v2]").get_attribute("data-session-question-ids") or ""
  assert all(qid not in normal for qid in IDS)
  assert not errors,errors
  print("PASS W2A wave1 browser",width,"px: old attempts, 3rd polynomial fields, incomplete guard, persistence, MCQ/readiness isolation")
  ctx.close()
 browser.close()
