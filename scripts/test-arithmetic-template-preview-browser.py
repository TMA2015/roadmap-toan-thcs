"""Chromium mobile QA for standalone arithmetic template practice. No AI / no storage."""
import json
import pathlib
import re
from playwright.sync_api import sync_playwright

ROOT=pathlib.Path(__file__).resolve().parents[1]
BASE="http://127.0.0.1:8766"
CATALOG=json.loads((ROOT/"docs/assets/data/curriculum/arithmetic-template-catalog-v1.json").read_text(encoding="utf-8"))
ORDER=[0,1,2,0,1,2]
WRONG={0,2,4}
with sync_playwright() as pw:
    browser=pw.chromium.launch(headless=True)
    page=browser.new_page(viewport={"width":390,"height":844})
    errors=[]
    ai_calls=[]
    page.on("pageerror",lambda err:errors.append(str(err)))
    page.on("request",lambda request: ai_calls.append(request.url) if
        "generativelanguage.googleapis.com" in request.url or "openai.com/v1" in request.url else None)
    page.goto(BASE+"/",wait_until="domcontentloaded")
    old='{"questions":{"OLD":{"attempted":7,"correct":5}},"tags":{"legacy":{"attempted":7,"correct":5}}}'
    beta='{"schema":"one-skill-assessment-events-v2","events":[{"question_id":"OLD","correct":true,"assessed_skill":"old"}]}'
    page.evaluate("([a,b])=>{localStorage.setItem('toan-thcs-practice-v1',a);localStorage.setItem('toan-thcs-assessment-v2',b)}",[old,beta])
    before=page.evaluate("JSON.stringify({...localStorage})")
    page.goto(BASE+"/huong-dan/thu-nghiem-sinh-cau-tuong-tu/",wait_until="domcontentloaded")
    page.locator("[data-arithmetic-template-build='arithmetic-template-preview-v1-20260927']").wait_for(timeout=30000)
    assert "Beta sinh câu theo mẫu" in page.locator(".skill-pilot-intro").inner_text()
    assert page.locator(".skill-pilot-nav-back").is_disabled()
    assert page.locator(".skill-pilot-nav-next").is_disabled()
    initial={}
    first_order=[]
    for i,template_index in enumerate(ORDER):
        template=CATALOG["templates"][template_index]
        meta=page.locator(".skill-pilot-meta").inner_text()
        assert template["display_name"] in meta
        seed=int(re.search(r"Mã biến thể\s+(\d+)",meta).group(1))
        q=page.evaluate("([c,id,seed])=>window.SelfLearningArithmeticTemplates.generate(c,id,seed)",
            [CATALOG,template["id"],seed])
        assert q["question"] and q["answer"]==0
        assert len(set(q["options"]))==4
        initial[i]=q
        if i==0:
            first_order=page.locator(".skill-pilot-option").evaluate_all(
                "(xs)=>xs.map(x=>x.dataset.originalIndex)")
        picked=1 if i in WRONG else q["answer"]
        page.locator(f'.skill-pilot-option[data-original-index="{picked}"]').click()
        page.locator(".skill-pilot-feedback.is-wrong" if i in WRONG else
            ".skill-pilot-feedback.is-correct").wait_for()
        assert q["explanation"] in page.locator(".skill-pilot-feedback").inner_text() or (
            page.locator(".skill-pilot-feedback").locator("mjx-container").count()>0)
        if i in WRONG:
            assert "Lỗi có thể gặp" in page.locator(".skill-pilot-diagnostic").inner_text()
        assert page.evaluate("JSON.stringify({...localStorage})")==before
        assert page.locator(".skill-pilot-option:disabled").count()==4
        if i==0:
            page.locator(".skill-pilot-nav-next").click()
            assert page.locator(".skill-pilot-nav-next").is_disabled()
            page.locator(".skill-pilot-nav-back").click()
            assert page.locator(".skill-pilot-option").evaluate_all(
                "(xs)=>xs.map(x=>x.dataset.originalIndex)")==first_order
            assert page.locator(".skill-pilot-option:disabled").count()==4
            page.locator(".skill-pilot-nav-next").click()
        else:
            page.locator(".skill-pilot-nav-next").click()
    assert page.locator(".skill-pilot-heading").inner_text()=="Kết quả lượt đầu"
    assert "Lượt đầu: 3/6" in page.locator(".skill-pilot-summary-lead").inner_text()
    assert page.locator(".skill-pilot-review-item").count()==3
    page.get_by_role("button",name="Ôn lại 3 câu cũ").click()
    assert "không phải bằng chứng mới" in page.locator(".skill-pilot-intro").inner_text()
    for index in sorted(WRONG):
        meta=page.locator(".skill-pilot-meta").inner_text()
        assert str(initial[index]["seed"]) in meta
        page.locator('.skill-pilot-option[data-original-index="0"]').click()
        page.locator(".skill-pilot-nav-next").click()
    assert page.locator(".skill-pilot-heading").inner_text()=="Kết quả luyện lại câu cũ"
    assert "Lượt đầu: 3/6" in page.locator(".skill-pilot-summary-lead").inner_text()
    assert "Lượt này: 3/3" in page.locator(".skill-pilot-summary-lead").inner_text()
    page.get_by_role("button",name="Tạo 3 câu tương tự với số mới").click()
    assert "luyện tập có hỗ trợ" in page.locator(".skill-pilot-intro").inner_text()
    for index in sorted(WRONG):
        old_q=initial[index]
        meta=page.locator(".skill-pilot-meta").inner_text()
        seed=int(re.search(r"Mã biến thể\s+(\d+)",meta).group(1))
        new_q=page.evaluate("([c,id,seed])=>window.SelfLearningArithmeticTemplates.generate(c,id,seed)",
            [CATALOG,old_q["template_id"],seed])
        assert new_q["id"]!=old_q["id"],"variant ID reused"
        assert new_q["signature"]!=old_q["signature"],"same parameter values reused"
        assert new_q["correct_value"]==page.evaluate(
            "([c,id,seed])=>window.SelfLearningArithmeticTemplates.generate(c,id,seed).correct_value",
            [CATALOG,old_q["template_id"],seed])
        page.locator('.skill-pilot-option[data-original-index="0"]').click()
        page.locator(".skill-pilot-feedback.is-correct").wait_for()
        page.locator(".skill-pilot-nav-next").click()
    assert page.locator(".skill-pilot-heading").inner_text()=="Kết quả biến thể mới"
    assert "Lượt đầu: 3/6" in page.locator(".skill-pilot-summary-lead").inner_text()
    assert "Lượt này: 3/3" in page.locator(".skill-pilot-summary-lead").inner_text()
    assert page.evaluate("JSON.stringify({...localStorage})")==before
    assert not ai_calls,ai_calls
    assert not errors,errors
    print("PASS mobile arithmetic beta: 3/6 first, 3/3 old-ID review, 3/3 new-parameter transfer; generated explanations and no AI/storage calls")
    browser.close()
