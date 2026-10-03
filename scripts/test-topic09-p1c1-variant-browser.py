#!/usr/bin/env python3
"""CT09 P1-C1 browser regression: mixed sessions prefer structural diversity."""
import json
import shutil
from playwright.sync_api import sync_playwright

CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium required")

BASE = "http://127.0.0.1:8765/kien-thuc/09-he-phuong-trinh/bai-tap/"
SENTINEL = "ct09-p1c1-selector-sentinel"

def session_meta(root):
    ids = [x for x in (root.get_attribute("data-session-question-ids") or "").split(",") if x]
    groups = [x for x in (root.get_attribute("data-session-variant-groups") or "").split(",") if x]
    return ids, groups

with sync_playwright() as p:
    browser = p.chromium.launch(
        executable_path=CHROME,
        headless=True,
        args=["--no-sandbox", "--disable-dev-shm-usage"],
    )
    context = browser.new_context(viewport={"width": 1440, "height": 900})
    page = context.new_page()
    page.goto(BASE, wait_until="networkidle")

    root = page.locator("[data-practice-bank-v2]")
    root.wait_for(state="attached", timeout=15000)
    page.wait_for_function(
        """document.querySelector('[data-practice-bank-v2]')?.dataset.practiceReadyV2 === '1'""",
        timeout=15000,
    )

    page.evaluate("([k,v]) => localStorage.setItem(k,v)", [SENTINEL, json.dumps({"stable": True})])
    before = page.evaluate("(k) => localStorage.getItem(k)", SENTINEL)

    # Initial mixed session: CT09 has 18 available groups, so all 10 picks should be distinct.
    ids, groups = session_meta(root)
    assert len(ids) == 10, ("initial", ids)
    assert len(groups) == 10 and len(set(groups)) == 10, ("initial variant diversity", groups)

    new_set = page.get_by_role("button", name="Bộ 10 câu mới")
    for run in range(4):
        new_set.click()
        ids, groups = session_meta(root)
        assert len(ids) == 10 and len(set(ids)) == 10, (run, "unique question IDs", ids)
        assert len(groups) == 10 and len(set(groups)) == 10, (run, "unique variant groups", groups)

    # With no learner history, weak-practice fallback is still a mixed diverse session.
    weak = page.get_by_role("button", name="Luyện điểm yếu")
    weak.click()
    ids, groups = session_meta(root)
    assert len(ids) == 10, ("weak fallback", ids)
    assert len(groups) == 10 and len(set(groups)) == 10, ("weak fallback diversity", groups)

    # Variant-group metadata is operational only; never show internal group IDs to learners.
    assert "SYS09-" not in root.inner_text(), "internal variant_group leaked into learner UI"

    after = page.evaluate("(k) => localStorage.getItem(k)", SENTINEL)
    assert after == before, "starting/rebuilding sessions must not write learner evidence"

    context.close()
    browser.close()

print("PASS: CT09 normal sessions choose 10 distinct structural groups when enough groups exist.")
print("PASS: weak fallback also preserves diversity and variant_group stays nonvisual.")
print("PASS: session selection alone does not write learner evidence.")
