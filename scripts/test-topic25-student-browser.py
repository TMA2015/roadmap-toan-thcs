#!/usr/bin/env python3
"""Student-journey browser checks for CĐ25: truthful navigation and paper-only self-authored exam UX."""
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
    for selector in ['a[href="#map"]','a[href="#errors"]']:
        target=hero.locator(selector).get_attribute("href")[1:]
        page.locator("#"+target).wait_for(state="attached"), target
    assert hero.locator('a[href="core/"]').count()==1, "CĐ25 new independent academic/strategy learning page"
    assert page.locator('#core-journey.topic-core-gateway a[href="core/"]').count()==1
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
    # All three exam routes are static paper-first: no typing, submit or saved score.
    for number, expected_parts in [("01",12),("02",12),("03",11)]:
        page.goto(BASE+"de-luyen-"+number+"/",wait_until="networkidle")
        assert page.locator(".exam-engine,[data-exam-engine],.exam-answers,.exam-notation-toolbar").count()==0, "no legacy exam UI: "+number
        assert page.locator(".floating-ai-launcher").count()==0, "no AI on exam: "+number
        assert "không cần nhập" in page.locator(".md-content__inner").inner_text(), "paper instructions: "+number
        assert page.get_by_text("Câu 1.",exact=True).count()>0 and page.get_by_text("Câu 2.",exact=True).count()>0, "independent question numbering: "+number
        page.goto(BASE+"de-luyen-"+number+"-dap-an/",wait_until="networkidle")
        assert page.get_by_role("heading",name="Hướng dẫn chấm theo từng ý").count()==1, "step rubric: "+number
        assert page.locator(".md-content__inner table").first.locator("tr").count()>=expected_parts, "rubric rows: "+number
        assert page.locator(".exam-engine,.floating-ai-launcher").count()==0, "no exam engine/AI on answer key: "+number
        page.emulate_media(media="print")
        assert page.locator(".md-content__inner").is_visible(), "paper and rubric must remain printable"
        page.emulate_media(media="screen")
    browser.close()
    print("PASS: CĐ25 real browser: no fake links, A/B paths, sidebar, paper self-check, static exams, answer keys and print mode.")
