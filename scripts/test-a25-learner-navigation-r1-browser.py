#!/usr/bin/env python3
"""A25 learner navigation regression: source links, Grade 6–9 boundaries and labels.

Uses only local MkDocs build in fresh Chromium contexts. Test does not answer
questions, write learner progress or use an AI provider.
"""
import json
import shutil
from playwright.sync_api import sync_playwright

BASE="http://127.0.0.1:8765/"
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chrome/Chromium required")

CASES=[
    ("03-ti-le-ti-le-thuc","CT03",["A25-010"]),
    ("11-can-thuc","CT11",["A25-001","A25-006"]),
    ("17-thales-dong-dang","CT17",["A25-004","A25-008"]),
    ("02-so-va-phep-tinh","CT02",[]),
]

with open("docs/assets/data/anchors/anchor-catalog-v1.json",encoding="utf-8") as f:
    ANCHORS={x["id"]:x for x in json.load(f)["anchors"]}

with sync_playwright() as p:
    browser=p.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for viewport in ({"width":1365,"height":900},{"width":390,"height":844}):
        context=browser.new_context(viewport=viewport)
        page=context.new_page()
        errors=[]
        page.on("pageerror",lambda err:errors.append(str(err)))
        page.goto(BASE,wait_until="domcontentloaded")
        page.evaluate("localStorage.setItem('a25-navigation-sentinel', 'do-not-change')")
        for slug,topic,expected in CASES:
            response=page.goto(BASE+"kien-thuc/"+slug+"/",wait_until="domcontentloaded")
            assert response and response.status==200,slug
            related=page.locator("[data-a25-topic-related]")
            if expected:
                related.wait_for(timeout=15000)
                assert related.get_attribute("data-a25-topic-related")==topic,(slug,"wrong topic")
                heading=related.locator("h2").inner_text()
                assert "Ôn thi vào lớp 10" in heading,slug
                note=related.locator("p").inner_text()
                assert "không phải bài bắt buộc" in note,slug
                links=related.locator("ul li a")
                assert links.count()==len(expected),(slug,links.count(),expected)
                for i,aid in enumerate(expected):
                    entry=ANCHORS[aid]
                    expected_dest="kien-thuc/25-tong-hop-on-thi-10/"+(entry.get("deep_dive_uri") or entry.get("source_uri"))
                    assert expected_dest in links.nth(i).get_attribute("href"),(slug,aid)
                assert "?topic="+topic in related.locator("a").last.get_attribute("href")
            else:
                # The catalog has no published link from CT02 into A25, so do not invent one.
                page.wait_for_timeout(800)
                assert related.count()==0,(slug,"invented A25 relation")
            assert page.evaluate("localStorage.getItem('a25-navigation-sentinel')")=="do-not-change"
        response=page.goto(BASE+"kien-thuc/25-tong-hop-on-thi-10/kho-bai-mo-neo/?topic=CT03",wait_until="domcontentloaded")
        assert response and response.status==200
        root=page.locator("[data-anchor-browser]")
        page.wait_for_function("document.querySelector('[data-anchor-browser]')?.dataset.ready === '1'",timeout=15000)
        cards=root.locator(".anchor-result")
        assert cards.count()==1,(viewport,"CT03 A25 filtered count")
        assert "A25-010" in cards.first.inner_text()
        assert "Ôn thi vào lớp 10" in cards.first.inner_text()
        assert "rate" not in cards.first.locator(".anchor-tags").inner_text().lower(), "raw editorial skill tag is visible"
        assert cards.first.locator(".anchor-link").get_attribute("href").endswith("/anchor-25-010/")
        assert "**Đọc hiểu" not in page.locator("article.md-content__inner").inner_text()
        assert page.evaluate("localStorage.getItem('a25-navigation-sentinel')")=="do-not-change"
        assert not errors,(viewport,errors)
        print("PASS A25 topic links and friendly anchor catalog:",viewport["width"],"px")
        context.close()
    browser.close()

print("BOUNDARY: no human learner observation, no inferred grade-placement certification, no score state changes.")
