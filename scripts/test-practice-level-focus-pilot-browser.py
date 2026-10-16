#!/usr/bin/env python3
"""CT22 four-level paper source is archived intact; learner Practice is interactive-only."""
import re
import shutil
from pathlib import Path
from playwright.sync_api import sync_playwright

raw=Path("docs/kien-thuc/22-dai-luong-dac-trung/bai-tap.md").read_text(encoding="utf-8")
for level,count in ((1,8),(2,8),(3,10),(4,6)):
    ids=re.findall(r"^###\s+(22-M"+str(level)+r"-\d+)\b",raw,re.M)
    assert len(ids)==len(set(ids))==count,(level,ids)
assert "22-M3-01" in raw
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME
BASE="http://127.0.0.1:8765/"
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for width,height in ((1365,900),(390,844)):
        ctx=browser.new_context(viewport={"width":width,"height":height})
        page=ctx.new_page()
        errors=[]
        page.on("pageerror",lambda err:errors.append(str(err)))
        res=page.goto(BASE+"kien-thuc/22-dai-luong-dac-trung/bai-tap/",wait_until="domcontentloaded")
        assert res and res.status==200
        page.locator('[data-practice-bank-v2] .practice-option').first.wait_for(state="visible",timeout=18000)
        assert page.locator("[data-practice-level-focus]").count()==0
        assert page.locator(".practice-level-button").count()==0
        assert page.locator(".practice-subtitle").inner_text().strip()=="Bộ đề 120 câu"
        assert "22-M3-01" not in page.locator(".md-content__inner").inner_text()
        assert not errors,(width,errors)
        print("PASS CT22 source-locked four-level paper → interactive-only public Practice",width)
        ctx.close()
    browser.close()
