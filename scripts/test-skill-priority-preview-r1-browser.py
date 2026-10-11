"""Browser QA for read-only Skill Priority R1 owner preview."""
import pathlib
import shutil
from playwright.sync_api import sync_playwright

ROOT=pathlib.Path(__file__).resolve().parents[1]
BASE="http://127.0.0.1:8765"
PREVIEWS=ROOT/"previews"
PREVIEWS.mkdir(exist_ok=True)
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium/Chrome required")

KEY="toan-thcs-taxonomy-v2-evidence-v1"
OLD='{"sentinel":"unchanged"}'

def validate(page):
    page.goto(BASE+"/collaboration/skill-priority-preview-r1/",wait_until="domcontentloaded")
    root=page.locator('[data-skill-priority-preview-r1][data-priority-preview-ready="true"]')
    root.wait_for(timeout=30000)
    assert root.get_attribute("data-priority-preview-build")=="skill-priority-owner-preview-r1-20261011"
    assert root.locator(".spp-card").count()==100
    assert root.locator('[data-priority="P0_FOUNDATION_CRITICAL"]').count()==11
    assert root.locator('[data-priority="P1_HIGH_VALUE_CORE"]').count()==37
    assert root.locator('[data-priority="P2_STANDARD_CORE"]').count()==52
    assert "Không phải xếp hạng năng lực học sinh" in root.locator(".spp-count").inner_text()

    # Both lesson links resolve to existing site-root routes.
    c=root.locator('[data-family-id="NUM-INTEGER-OPS"]')
    assert c.count()==1
    assert c.locator("a",has_text="Xem bài học").get_attribute("href").endswith("/kien-thuc/02-so-va-phep-tinh/")
    assert c.locator("a",has_text="Luyện tập").get_attribute("href").endswith("/kien-thuc/02-so-va-phep-tinh/bai-tap/")

    controls=root.locator(".spp-controls select")
    controls.nth(0).select_option("entrance")
    assert root.locator(".spp-card").count()==19
    controls.nth(1).select_option("E1_HIGH_TRANSFER")
    assert root.locator(".spp-card").count()==10

    controls.nth(0).select_option("optional")
    assert controls.nth(1).input_value()=="all"
    assert root.locator(".spp-card").count()==7
    assert root.locator('[data-priority="OPTIONAL_SPECIALIST"]').count()==4
    assert root.locator('[data-priority="OPTIONAL_BRIDGE"]').count()==3

    controls.nth(0).select_option("all")
    assert root.locator(".spp-card").count()==131
    controls.nth(2).select_option("CT25")
    assert root.locator(".spp-card").count()>0
    for i in range(root.locator(".spp-card").count()):
        assert "25 · Tổng hợp & ôn thi vào 10" in root.locator(".spp-card").nth(i).inner_text()

    controls.nth(2).select_option("all")
    controls.nth(0).select_option("core")
    root.locator("input[type=search]").fill("so nguyen")
    assert root.locator('[data-family-id="NUM-INTEGER-OPS"]').count()==1

    # Read-only: no learner history or assessment side effects.
    assert page.evaluate("localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1')")==OLD
    assert root.locator("[data-mastery-action], [data-readiness-gate]").count()==0

with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for device,width,height,name in [("desktop",1365,900,"desktop"),("mobile",390,844,"mobile")]:
        context=browser.new_context(viewport={"width":width,"height":height})
        context.add_init_script("localStorage.setItem("+repr(KEY)+","+repr(OLD)+");")
        page=context.new_page()
        errors=[]
        page.on("pageerror",lambda error: errors.append(str(error)))
        validate(page)
        # Capture an easy-to-review first screen, not a 131-card mega-screenshot.
        page.locator("input[type=search]").fill("")
        page.screenshot(path=str(PREVIEWS/("skill-priority-r1-"+name+".png")),full_page=False)
        assert page.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2"),device
        assert not errors,errors
        context.close()
    browser.close()
print("PASS: owner priority preview renders reviewed 131-family counts on desktop and mobile.")
print("PASS: filters, topic links and read-only learner history boundaries.")
