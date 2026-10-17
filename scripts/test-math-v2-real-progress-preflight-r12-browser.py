#!/usr/bin/env python3
"""Phase4 R12: read-only real-progress backup preflight on disposable browser profiles.
No actual learner history files are ever used; synthetic localStorage fixtures only.
"""
import json, shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME,"Chromium required"
BASE="http://127.0.0.1:8765"
PAGE=BASE+"/qa/math-v2-cutover-preflight.html"
PROGRESS=BASE+"/tien-do-hoc-tap/"
KEY_P="toan-thcs-practice-v1"
KEY_R="toan-thcs-assessment-v1"
FIXTURE={
 KEY_P:json.dumps({"questions":{"QA_Q01":{"attempted":6,"correct":4}},
                    "tags":{"QA_SKILL":{"attempted":6,"correct":4}}}),
 KEY_R:json.dumps({"assessments":{"QA_ASSESSMENT":{"attempts":[
     {"submitted_at":"2026-10-17T10:00:00+07:00"},
     {"submitted_at":"2026-10-17T10:30:00+07:00"}
 ]}}})
}
GET_STORE="""() => Object.fromEntries(
  Object.keys(localStorage).sort().map(k=>[k,localStorage.getItem(k)])
)"""
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,
      args=["--no-sandbox","--disable-dev-shm-usage"])
    for width in (1365,390):
        ctx=browser.new_context(viewport={"width":width,"height":900 if width==1365 else 844},accept_downloads=True)
        page=ctx.new_page()
        page.goto(BASE+"/luyen-tap/",wait_until="domcontentloaded")
        page.evaluate("fixtures => {for(const [k,v] of Object.entries(fixtures))localStorage.setItem(k,v)}",FIXTURE)
        original=page.evaluate(GET_STORE)
        page.goto(PAGE,wait_until="domcontentloaded")
        assert page.get_by_role("heading",name="Kiểm tra trước khi chuyển bộ đếm v2").count()==1
        assert page.locator("meta[name=robots]").get_attribute("content")=="noindex,nofollow"
        assert page.locator("#export").is_disabled(),(width,"export must require verified snapshot")
        page.locator("#inspect").click()
        page.wait_for_function("() => document.querySelector('#integrity').textContent==='Hợp lệ'",timeout=20000)
        assert page.locator("#practice").inner_text()=="6"
        assert page.locator("#readiness").inner_text()=="2"
        assert page.locator("#zones").inner_text()=="2"
        assert page.locator("#status").get_attribute("data-kind")=="success"
        assert page.evaluate(GET_STORE)==original,(width,"preflight may not write to student localStorage")
        assert page.locator("#export").is_enabled()
        with page.expect_download() as dl:
            page.locator("#export").click()
        download=dl.value
        assert download.suggested_filename.startswith("math-progress-before-v2-")
        with open(download.path(),encoding="utf8") as f:
            backup=json.load(f)
        assert backup["schema"]=="self-learning-math-local-backup-v1"
        assert backup["entries"]==original and len(backup["sha256"])==64
        assert page.evaluate(GET_STORE)==original
        assert page.evaluate("document.documentElement.scrollWidth<=innerWidth+2"),(width,"no mobile horizontal overflow")

        # A new real attempt in another tab invalidates the in-memory snapshot.
        changed=json.loads(FIXTURE[KEY_P])
        changed["questions"]["QA_Q01"]["attempted"]=7
        page.evaluate("({key,value}) => localStorage.setItem(key,value)",
                      {"key":KEY_P,"value":json.dumps(changed)})
        changed_baseline=page.evaluate(GET_STORE)
        page.locator("#export").click()
        page.wait_for_function(
           "() => document.querySelector('#status').textContent.includes('Tiến độ đã thay đổi')",
           timeout=10000)
        assert page.locator("#export").is_disabled()
        assert page.evaluate(GET_STORE)==changed_baseline,(width,"guard after stale snapshot")
        page.locator("#inspect").click()
        page.wait_for_function("() => document.querySelector('#practice').textContent==='7'",timeout=20000)
        assert page.locator("#export").is_enabled()

        # Corrupt legacy Practice prevents a false green readiness claim.
        page.evaluate("key => localStorage.setItem(key,'{broken-json')",KEY_P)
        corrupt_baseline=page.evaluate(GET_STORE)
        page.locator("#inspect").click()
        page.wait_for_function(
          "() => document.querySelector('#status').getAttribute('data-kind')==='error'",
          timeout=20000)
        assert page.locator("#export").is_disabled()
        assert page.locator("#practice").inner_text()=="Chưa xác minh"
        assert page.evaluate(GET_STORE)==corrupt_baseline,(width,"must not repair/rewrite corrupt history")
        ctx.close()
        print("PASS Math R12 preflight",width,
              "real-only backup, SHA self-check, file export, stale guard, corrupt-store safety, no writes")
    browser.close()
