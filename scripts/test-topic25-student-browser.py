#!/usr/bin/env python3
"""Student-journey browser checks for CĐ25: truthful navigation and optional paper/exam UX."""
import shutil
from playwright.sync_api import sync_playwright

BASE="http://127.0.0.1:8765/kien-thuc/25-tong-hop-on-thi-10/"
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium/Chrome required for CĐ25 UX QA")

with sync_playwright() as p:
    browser=p.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    page=browser.new_page(viewport={"width":1440,"height":900})
    page.goto(BASE,wait_until="networkidle")
    page.locator(".topic-workspace-hero").wait_for(state="visible")
    assert page.locator(".topic-workspace-nav").count()==0, "redundant sticky quick menu on CĐ25"
    hero=page.locator(".topic-workspace-hero")
    for selector in ['a[href="#map"]','a[href="#errors"]','a[href="#core-journey"]']:
        target=hero.locator(selector).get_attribute("href")[1:]
        page.locator("#"+target).wait_for(state="attached"), target
    hero.locator('a[href="#errors"]').click()
    assert page.locator("#errors").evaluate("(node) => node.open"), "common-error link must expand its section"
    hero.locator('a[href="bai-tap/"]').click()
    page.wait_for_url("**/bai-tap/")
    page.locator(".practice-engine").wait_for(state="visible",timeout=20000)
    article=page.locator(".md-content__inner")
    a=article.get_by_role("heading",name="A. 🎯 Luyện tập tương tác")
    b=article.get_by_role("heading",name="B. Bài tập tự luận bổ sung – tự làm trên giấy")
    assert a.count()==1 and b.count()==1, "duplicate A or paper lane absent"
    assert b.is_visible(), "paper tasks label not visible"
    assert article.get_by_role("heading",name="Nhóm A. Đại số và biểu thức").count()==1
    page.goto(BASE+"tu-kiem-tra/",wait_until="networkidle")
    assert page.get_by_role("heading",name="Sau khi tự làm xong – đối chiếu và tự chấm").count()==1
    assert "chưa nhận bài viết tay" in page.locator(".md-content__inner").inner_text()
    assert "Sau khi nộp bài" not in page.locator(".md-content__inner").inner_text()
    for slug in ["kho-bai-mo-neo","bai-toan-kinh-dien","de-luyen-01","de-luyen-02","de-luyen-03"]:
        assert page.locator('.md-sidebar--primary a[href$="/'+slug+'/"]').count()>0, "missing sidebar route "+slug
    page.goto(BASE+"bai-toan-kinh-dien/",wait_until="networkidle")
    assert page.locator(".topic-workspace-hero,.topic-workspace-nav").count()==0, "nested anchor overview must not receive topic-level fake navigation"
    for slug in ["anchor-25-004","anchor-25-007","kho-bai-mo-neo"]:
        page.goto(BASE+slug+"/",wait_until="networkidle")
        assert page.locator(".topic-workspace-hero,.topic-workspace-nav").count()==0, "nested anchor route contains irrelevant sticky navigation: "+slug
    page.goto(BASE+"de-luyen-01/",wait_until="networkidle")
    box=page.locator("[data-exam-engine]")
    box.wait_for(state="visible")
    guide=box.locator(".exam-input-guide")
    assert guide.count()==1 and guide.locator("summary").count()==1, "sample/notation guide absent before starting"
    guide.locator("summary").click()
    assert "x^2 = 4" in guide.inner_text() and "sqrt(2)" in guide.inner_text(), "plain-text sample missing"
    box.get_by_role("button",name="Bắt đầu làm đề 120 phút").click()
    scratch=box.locator("textarea").first
    scratch.fill("x")
    toolbar=box.locator(".exam-answer-item").first.locator(".exam-notation-toolbar")
    toolbar.get_by_role("button",name="Chèn x² vào bài nháp").click()
    toolbar.get_by_role("button",name="Chèn √ vào bài nháp").click()
    assert "^2" in scratch.input_value() and "sqrt()" in scratch.input_value(), "notation insertion failed"
    saved=scratch.input_value()
    page.reload(wait_until="networkidle")
    scratch=page.locator(".exam-answer-item textarea").first
    assert scratch.input_value()==saved, "typed note must persist over reload"
    page.once("dialog",lambda d:d.accept())
    page.get_by_role("button",name="Kết thúc lượt làm · chuyển sang tự chấm").click()
    assert "Lượt làm đã kết thúc" in page.locator(".exam-engine").inner_text()
    assert "Không phải điểm AI chấm" in page.locator(".exam-engine").inner_text()
    browser.close()
    print("PASS: CĐ25 real browser: no fake links, A/B paths, sidebar, paper self-check, example, notation insertion and persisted draft.")
