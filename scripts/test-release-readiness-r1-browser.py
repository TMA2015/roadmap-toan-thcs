"""Release Readiness R1: representative Grade 6–9 browser journeys, audit only.

No answers are submitted and no scoring state is modified. These are smoke tests,
not a substitute for human learner comprehension or backup/restore QA.
"""
from pathlib import Path
import shutil
from playwright.sync_api import sync_playwright

BASE="http://127.0.0.1:8765"
ROOT=Path(__file__).resolve().parents[1]
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium or Google Chrome required")
SAMPLES=[
    (6,"02-so-va-phep-tinh"),
    (7,"14-tam-giac"),
    (8,"07-phan-thuc-dai-so"),
    (9,"09-he-phuong-trinh"),
]
SENTINEL="release-readiness-r1-do-not-change"

def check(page,grade,slug):
    root=BASE+"/"
    page.goto(root+"hoc-theo-lop/?lop="+str(grade),wait_until="domcontentloaded")
    select=page.locator('[data-grade-select="'+str(grade)+'"]')
    select.wait_for(timeout=30000)
    select.click()
    panel=page.locator('[data-grade-panel="'+str(grade)+'"]')
    assert panel.is_visible(),f"Grade {grade} chapter list missing"
    assert select.get_attribute("aria-pressed")=="true"
    jump=panel.locator('a[href$="/kien-thuc/'+slug+'/core/"]').first
    assert jump.count()==1, f"Grade {grade} has no Core entry for {slug}"
    jump.click()
    page.wait_for_url("**/kien-thuc/"+slug+"/core/")
    first=page.locator(".topic-core-card .topic-core-teach-start").first
    first.wait_for(timeout=30000)
    assert page.locator(".topic-core-card").count()>=1
    first.click()
    modal=page.locator("dialog.topic-core-dialog[open]")
    modal.wait_for(timeout=15000)
    assert "Bài giảng" in modal.locator("h2").inner_text()
    modal.locator('button.topic-core-modal-mode[data-mode="practice"]').click()
    assert modal.get_attribute("data-mode")=="practice"
    modal.locator(".topic-core-dialog__close").click()
    assert not modal.is_visible()
    assert page.evaluate("localStorage.getItem('math-release-audit-sentinel')")==SENTINEL

    # Three canonical learner spaces are reachable without calling AI.
    for suffix,marker in [
        ("bai-tap/","body"),
        ("tu-kiem-tra/","[data-readiness-check-v1]")
    ]:
        response=page.goto(root+"kien-thuc/"+slug+"/"+suffix,wait_until="domcontentloaded")
        assert response and response.status==200, f"Grade {grade}: {suffix} unavailable"
        assert page.locator(marker).count()>0, f"Grade {grade}: {suffix} content missing"
    readiness=page.locator('[data-readiness-check-v1]')
    readiness.locator(".readiness-card").wait_for(timeout=30000)
    assert not readiness.locator(".readiness-result").is_visible(), "Readiness leaked a result before submit"
    assert page.evaluate("localStorage.getItem('math-release-audit-sentinel')")==SENTINEL

with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for viewport in [{"width":1365,"height":900},{"width":390,"height":844}]:
        context=browser.new_context(viewport=viewport)
        context.add_init_script("localStorage.setItem('math-release-audit-sentinel', '"+SENTINEL+"');")
        page=context.new_page()
        errors=[]
        page.on("pageerror",lambda e:errors.append(str(e)))
        for grade,slug in SAMPLES:
            check(page,grade,slug)
        assert page.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2"),"Horizontal overflow"
        assert not errors,errors
        context.close()
    browser.close()
print("PASS: Grade 6–9 representative routes, Core teaching/practice switch, Practice and unsubmitted Readiness on desktop/mobile.")
print("OPEN: real-child task comprehension, attempted-answer feedback, offline AI failure handling, backup/restore and cross-device use are outside this smoke gate.")
