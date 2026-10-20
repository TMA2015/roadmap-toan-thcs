#!/usr/bin/env python3
"""CT07 P1 one-question release: verify real 121 manifest, option C and data isolation."""
import json
import pathlib
import shutil
from copy import deepcopy
from playwright.sync_api import sync_playwright

BASE="http://127.0.0.1:8765"
PAGE="/kien-thuc/07-phan-thuc-dai-so/bai-tap/"
ROOT=pathlib.Path(__file__).resolve().parents[1]
BANK=ROOT/"docs/assets/data/practice"
manifest=json.loads((BANK/"07-phan-thuc-dai-so-v1.manifest.json").read_text(encoding="utf-8"))
shard=json.loads((BANK/"07-phan-thuc-dai-so-v1-05.json").read_text(encoding="utf-8"))
assert manifest["question_count"]==121 and len(manifest["sources"])==5
assert len(shard["questions"])==1 and shard["questions"][0]["id"]=="RAT07V1_121"
chrome=shutil.which("google-chrome") or shutil.which("chromium")
assert chrome,"Chromium required"

def isolate(route):
    name=route.request.url.split("?")[0].split("/")[-1]
    if name=="07-phan-thuc-dai-so-v1.manifest.json":
        payload=deepcopy(manifest)
        payload["sources"]=["07-phan-thuc-dai-so-v1-05.json"]
        payload["question_count"]=1
        payload["session_size"]=1
        return route.fulfill(status=200,content_type="application/json",body=json.dumps(payload,ensure_ascii=False))
    if name=="07-phan-thuc-dai-so-v1-05.json":
        return route.fulfill(status=200,content_type="application/json",body=json.dumps(shard,ensure_ascii=False))
    return route.continue_()

with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=chrome,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for width,height in ((1365,900),(390,844)):
        # First check the actual full bank loads all 121 prompts, not only the fixture.
        ctx=browser.new_context(viewport={"width":width,"height":height})
        page=ctx.new_page()
        errors=[]
        page.on("pageerror",lambda e:errors.append(str(e)))
        response=page.goto(BASE+PAGE,wait_until="domcontentloaded")
        assert response and response.status==200
        page.wait_for_function("document.querySelector('[data-practice-bank-v2]')?.dataset.practiceQuestionCount==='121'",timeout=30000)
        assert "Bộ đề 121 câu" in page.locator(".practice-subtitle").inner_text()
        assert not errors,(width,errors)
        ctx.close()

        # Isolate the *real* reviewed question via network fixtures; no data files changed.
        ctx=browser.new_context(viewport={"width":width,"height":height})
        ctx.route("**/assets/data/practice/*.json",isolate)
        page=ctx.new_page()
        errors=[]
        page.on("pageerror",lambda e:errors.append(str(e)))
        page.goto(BASE+"/",wait_until="domcontentloaded")
        page.evaluate("""() => {
          localStorage.setItem('ct07-p1-sentinel','keep');
          localStorage.setItem('toan-thcs-assessment-v1','{"assessments":{"EXISTING":{"attempts":[]}}}');
        }""")
        page.goto(BASE+PAGE,wait_until="domcontentloaded")
        root=page.locator("[data-practice-bank-v2]")
        page.wait_for_function("document.querySelector('[data-practice-bank-v2]')?.dataset.practiceQuestionCount==='1'",timeout=30000)
        assert root.get_attribute("data-session-question-ids")=="RAT07V1_121"
        opts=page.locator(".practice-option")
        opts.first.wait_for(timeout=15000)
        assert opts.count()==4
        page.locator('.practice-option[data-original-index="2"]').click()
        page.wait_for_function("""() => {
           const s=JSON.parse(localStorage.getItem('toan-thcs-practice-v1')||'{}');
           return s.questions?.RAT07V1_121?.attempted===1;
        }""",timeout=10000)
        row=page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-practice-v1')).questions.RAT07V1_121""")
        assert row["attempted"]==1 and row["correct"]==1,(width,row)
        assert page.locator(".practice-feedback").count()==1
        assert page.evaluate("localStorage.getItem('ct07-p1-sentinel')")=="keep"
        assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')")=='{"assessments":{"EXISTING":{"attempts":[]}}}'
        assert not errors,(width,errors)
        ctx.close()
        print("PASS CT07 P1 browser: 121 real questions, C graded correctly, unchanged readiness",width)
    browser.close()
