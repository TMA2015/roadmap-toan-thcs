"""B1 test-only browser QA — storage persistence, corruption fallback and AI independence.

Uses isolated Playwright contexts, never users' live profiles or stored attempts.
It does not export, import, delete or regrade any real student history.
"""
import json
import pathlib
import shutil
from playwright.sync_api import sync_playwright

BASE="http://127.0.0.1:8765"
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium/Chrome is required")

VALID_STORES={
  "toan-thcs-practice-v1":{
    "questions":{},
    "tags":{"B1_TEST_ONLY":{"attempted":3,"correct":2}},
    "observed_signals":[]
  },
  "toan-thcs-assessment-v1":{"assessments":{"B1-TEST-ONLY":{"attempts":[]}}},
  "toan-thcs-assessment-v2":{"schema":"one-skill-assessment-events-v2","events":[]},
  "toan-thcs-canonical-evidence-v2":{"schema":"canonical-skill-evidence-store-v2","recent_events":[],"seen_questions":{},"independent_units":{}},
  "toan-thcs-taxonomy-v2-evidence-v1":{"schema":"taxonomy-v2-evidence-store-v1","recent_events":[],"seen_questions":{},"independent_units":{}},
  "toan-thcs-remediation-v1":{"events":[]},
  "roadmap:exam-history-v1":{"items":[]}
}

def browse(page):
    for path,marker in (
      ("/kien-thuc/02-so-va-phep-tinh/core/",".topic-core-card .topic-core-teach-start"),
      ("/kien-thuc/02-so-va-phep-tinh/bai-tap/","[data-practice-bank-v2] .practice-title"),
      ("/kien-thuc/02-so-va-phep-tinh/tu-kiem-tra/","[data-readiness-check-v1] .readiness-card"),
      ("/ban-do-ky-nang/","[data-skill-map-v2-controlled][data-skill-map-ready='true']")
    ):
        response=page.goto(BASE+path,wait_until="domcontentloaded")
        assert response and response.status==200,(path,response.status if response else None)
        page.locator(marker).first.wait_for(timeout=30000)
        assert page.locator(".practice-load-error,.readiness-error").count()==0,path

with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])

    # Phase 1: valid synthetic localStorage preserved on ordinary unsubmitted navigation.
    context=browser.new_context(viewport={"width":1280,"height":900})
    page=context.new_page()
    errors=[]
    page.on("pageerror",lambda e: errors.append(str(e)))
    page.goto(BASE+"/hoc-theo-lop/",wait_until="domcontentloaded")
    raw={k:json.dumps(v,ensure_ascii=False,separators=(",",":")) for k,v in VALID_STORES.items()}
    page.evaluate("(raw) => { for(const [k,v] of Object.entries(raw)) localStorage.setItem(k,v); }",raw)
    before=page.evaluate("(keys) => Object.fromEntries(keys.map(k=>[k,localStorage.getItem(k)]))",list(raw.keys()))
    browse(page)
    after=page.evaluate("(keys) => Object.fromEntries(keys.map(k=>[k,localStorage.getItem(k)]))",list(raw.keys()))
    assert before==after,"Synthetic learner stores changed during navigation without submitting any answers"
    assert not errors,errors
    context.close()

    # Phase 2: invalid JSON is isolated to a disposable browser profile.
    context=browser.new_context(viewport={"width":390,"height":844})
    page=context.new_page()
    errors=[]
    page.on("pageerror",lambda e: errors.append(str(e)))
    page.goto(BASE+"/hoc-theo-lop/",wait_until="domcontentloaded")
    bad=["toan-thcs-practice-v1","toan-thcs-assessment-v1",
         "toan-thcs-canonical-evidence-v2","toan-thcs-taxonomy-v2-evidence-v1",
         "toan-thcs-remediation-v1"]
    page.evaluate("(keys) => keys.forEach(k => localStorage.setItem(k,'{B1-invalid-json'))",bad)
    browse(page)
    assert not errors,errors
    # This tests non-crashing fallback only, NOT recovery of the corrupted attempts.
    context.close()

    # Phase 3: inability to reach AI transport must not block locally hosted lesson content.
    context=browser.new_context(viewport={"width":390,"height":844})
    context.route("**/www.gstatic.com/firebasejs/**",lambda route:route.abort())
    context.route("**/generativelanguage.googleapis.com/**",lambda route:route.abort())
    page=context.new_page()
    errors=[]
    page.on("pageerror",lambda e:errors.append(str(e)))
    response=page.goto(BASE+"/kien-thuc/02-so-va-phep-tinh/",wait_until="domcontentloaded")
    assert response and response.status==200
    assert page.locator("article.md-content__inner").count()==1
    assert page.locator("article.md-content__inner").inner_text().strip()
    ai=page.locator(".floating-ai-launcher")
    if ai.count()>0:
        ai.click()
        page.locator(".floating-ai-chip").first.click()
        page.locator(".floating-ai-error").wait_for(timeout=15000)
        assert "Nội dung bài học trên trang vẫn dùng bình thường" in page.locator(".floating-ai-error").inner_text()
        print("PASS: optional AI tutor reports an error without blocking lesson content")
    else:
        print("NOT TESTED: optional AI tutor did not mount locally; live-provider error UX still needs a controlled check")
    assert not errors,errors
    context.close()
    browser.close()

print("PASS: B1 synthetic valid stores preserved on unsubmitted navigation.")
print("PASS: malformed JSON does not crash the tested Practice, Readiness or Skill Map routes.")
print("BOUNDARY: non-crashing fallback is NOT backup/restore, data recovery or cross-device synchronization.")
