#!/usr/bin/env python3
"""Two library paths: desktop/390px, controlled grade tabs, canonical WX/A25 links, no learner history writes."""
import shutil
import json
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME, "Chromium required"
BASE="http://127.0.0.1:8765/"
with open("docs/assets/data/written-exercises/written-exercise-library-v1.json",encoding="utf-8") as file:
    wx=json.load(file)["exercises"]
w4_anchor_ids={"WX09-SYS-009","WX10-FUN-003","WX11-RAD-004","WX12-QUA-003"}
assert {x["exercise_id"] for x in wx if x["exercise_id"] in w4_anchor_ids}==w4_anchor_ids
assert all(x["exercise_kind"]=="anchor" and x["academic_review"]["status"]=="APPROVED" for x in wx if x["exercise_id"] in w4_anchor_ids)

with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for width,height in [(1365,900),(390,844)]:
        context=browser.new_context(viewport={"width":width,"height":height})
        page=context.new_page()
        errors=[]
        page.on("pageerror",lambda e:errors.append(str(e)))
        page.goto(BASE+"luyen-tap/",wait_until="domcontentloaded")
        page.evaluate("localStorage.setItem('library-two-paths-sentinel','preserve')")
        assert page.locator(".math-library-entry").count()==4
        assert page.locator("[data-written-exercise-library]").count()==0
        assert page.locator('.math-library-entry[href="tu-luan/"]').count()==2
        page.locator('.math-library-entry[href="bai-mau-tieu-bieu/"]').first.click()
        page.wait_for_url("**/luyen-tap/bai-mau-tieu-bieu/")
        root=page.locator("[data-model-examples-library]")
        page.wait_for_function("document.querySelector('[data-model-examples-library]')?.dataset.ready==='1'",timeout=18000)
        cards=root.locator(".model-library-card")
        assert cards.count()==28+len(w4_anchor_ids)+9,(width,"historic deep WX + 4 W4 anchors + 11 A25 + 1 S1-reviewed W9 Grade6 candidate")
        grade=root.get_by_label("Lọc bài mẫu theo lớp")
        group=root.get_by_label("Lọc nhóm bài mẫu")
        grade.select_option("6")
        assert cards.count()==7,(width,"five historical G6 deep examples plus two reviewed GAP9 new anchors")
        assert all("Bài mẫu theo kiến thức" in x for x in cards.all_inner_texts())
        group.select_option("a25")
        assert cards.count()==0,(width,"A25 not promoted into G6 Core")
        grade.select_option("8")
        assert cards.count()==0,(width,"A25 not promoted into G8 Core")
        group.select_option("wx")
        assert cards.count()==8,(width,"six historical Grade8 anchors plus two reviewed GAP9 new anchors")
        links=cards.locator(".model-library-link").evaluate_all("(nodes)=>nodes.map(n=>n.getAttribute('href'))")
        assert {h.split("#")[-1] for h in links}=={"wx05-ent-001","wx06-ch-001","wx05-ent-002","wx05-ch-001","wx07-ent-001","wx07-ch-001"},(width,"G8 reviewed W3A/W3B anchors linked")
        group.select_option("a25")
        grade.select_option("9")
        assert cards.count()==11,(width,"A25 entrance set")
        target=cards.first.locator(".model-library-link")
        assert "/kien-thuc/25-tong-hop-on-thi-10/" in target.get_attribute("href")
        group.select_option("wx")
        assert cards.count()==6+len(w4_anchor_ids)+3,(width,"G9 old ten deep WX plus three new GAP9 anchors")
        w4_links=cards.locator(".model-library-link").evaluate_all("(nodes)=>nodes.map(n=>n.getAttribute('href'))")
        assert all(any(("#"+item_id.lower()) in href for href in w4_links) for item_id in w4_anchor_ids),(width,"four reviewed W4 Grade9 deep model links")
        target=cards.first.locator(".model-library-link")
        assert "luyen-tap/tu-luan/?kind=anchor#wx09-" in target.get_attribute("href")
        target.click()
        page.wait_for_url("**/luyen-tap/tu-luan/?kind=anchor#wx09-*")
        original=page.locator(".written-exercise-card#wx09-sys-003")
        original.wait_for(state="visible")
        assert original.locator(".written-help-action").count()==5
        assert page.evaluate("localStorage.getItem('library-two-paths-sentinel')")=="preserve"
        assert not errors,(width,errors)
        print("PASS two-path Written / Model page and grade links",width)
        context.close()
    browser.close()
