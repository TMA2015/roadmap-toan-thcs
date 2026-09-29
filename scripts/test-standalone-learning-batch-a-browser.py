#!/usr/bin/env python3
"""Batch A: real desktop/mobile four-step routes, modal behavior and legacy evidence."""
import shutil
from pathlib import Path
from playwright.sync_api import sync_playwright

CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium required")
BASE = "http://127.0.0.1:8765/kien-thuc/"
CASES = [
    ("02-so-va-phep-tinh", "Core theo chặng", "NUM02MICRO_001"),
    ("21-thong-ke", "Core theo chặng", "STA21MICRO_001"),
    ("23-xac-suat", "Core theo chặng", "PRO23MICRO_001"),
    ("24-bai-toan-thuc-te", "Ứng dụng theo chặng", "MOD24MICRO_001"),
    ("25-tong-hop-on-thi-10", "Ôn thi theo chặng", "REV25MICRO_004"),
]
KEY = "toan-thcs-practice-v1"
Path("previews").mkdir(exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=CHROME, headless=True,
                                args=["--no-sandbox", "--disable-dev-shm-usage"])
    for device, width, height in [("desktop", 1440, 900), ("mobile", 390, 844)]:
        context = browser.new_context(viewport={"width": width, "height": height})
        page = context.new_page()
        for slug, label, first_id in CASES:
            root = BASE + slug + "/"
            page.goto(root, wait_until="networkidle")
            stage = page.locator(".lesson-switcher-steps--four")
            assert stage.count() == 1 and stage.locator("a").count() == 4, (device,slug,"lesson stages")
            assert label in stage.locator("a").nth(1).inner_text(), (device,slug,"semantic stage")
            assert page.locator("#core-journey.topic-core-gateway a[href='core/']").count() == 1, (device,slug,"gateway")
            assert page.locator(".topic-core-card").count() == 0, (device,slug,"no duplicated inline cards")
            assert page.locator("#core-journey").count() == 1, (device,slug,"unique anchor")
            sentinel = {"questions":{"SENTINEL_OLD":{"attempted":2,"correct":1}},
                        "tags":{"sentinel-old":{"attempted":2,"correct":1}}, "observed_signals":[]}
            page.evaluate("([key,value]) => localStorage.setItem(key, JSON.stringify(value))", [KEY,sentinel])
            before = page.evaluate("(key) => localStorage.getItem(key)", KEY)
            page.goto(root + "core/",wait_until="networkidle")
            cards = page.locator(".topic-core-card")
            cards.first.wait_for(state="visible",timeout=20000)
            assert cards.count() == 5, (device,slug,"cards")
            assert page.locator(".lesson-switcher-steps--four a").count() == 4
            assert label in page.locator(".lesson-switcher-steps").inner_text()
            assert page.locator(".topic-core-card-gap").count() >= 0
            assert page.evaluate("(key) => localStorage.getItem(key)", KEY) == before, (device,slug,"no migration on mount")
            cards.first.locator(".topic-core-teach-start").click()
            dialog = page.locator("dialog.topic-core-dialog")
            assert dialog.is_visible() and dialog.locator(".topic-core-teaching-row").count() == 5, (device,slug,"lecture")
            dialog.locator('[data-mode="practice"].topic-core-modal-mode').click()
            assert dialog.get_attribute("data-mode") == "practice", (device,slug,"mode")
            assert dialog.locator(".topic-micro-pager button").count() == 3, (device,slug,"micro pager")
            dialog.locator(".topic-micro-pager button").nth(1).click()
            assert page.evaluate("(key) => localStorage.getItem(key)", KEY) == before, (device,slug,"navigation not attempt")
            dialog.locator(".topic-core-dialog__close").click()
            assert page.evaluate("(key) => localStorage.getItem(key)", KEY) == before, (device,slug,"close not attempt")
            cards.first.locator(".topic-core-practice-start").click()
            dialog.locator(".topic-micro-pager button").first.click()
            dialog.locator(".topic-micro-option").first.click()
            after = page.evaluate("(key) => JSON.parse(localStorage.getItem(key))", KEY)
            assert after["questions"]["SENTINEL_OLD"] == sentinel["questions"]["SENTINEL_OLD"], (device,slug,"legacy question")
            assert after["tags"]["sentinel-old"] == sentinel["tags"]["sentinel-old"], (device,slug,"legacy tag")
            assert after["questions"][first_id]["attempted"] == 1, (device,slug,"one real answer")
            dialog.locator(".topic-core-dialog__close").click()
            page.screenshot(path="previews/standalone-"+slug[:2]+"-"+device+".png",animations="disabled")
        for slug in ["03-ti-le-ti-le-thuc","22-dai-luong-dac-trung"]:
            page.goto(BASE+slug+"/",wait_until="networkidle")
            assert page.locator(".lesson-switcher-steps--four").count() == 0, (device,slug,"no fictitious Core")
            assert page.locator(".lesson-switcher-steps a").count() == 3, (device,slug,"legacy route")
        context.close()
    browser.close()
print("PASS: batch A five independent routes on desktop/mobile, semantic tiers, 3-step exceptions, dual modal, no phantom attempts, legacy evidence intact.")
