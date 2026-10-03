#!/usr/bin/env python3
"""CT09 P1-C2 browser regression: 129-item bank and Taxonomy v2 extension."""
import shutil
from playwright.sync_api import sync_playwright

CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium required")

BASE = "http://127.0.0.1:8765/kien-thuc/09-he-phuong-trinh/bai-tap/"
STORE_KEY = "toan-thcs-taxonomy-v2-evidence-v1"
EXT_BLOB = "1b351a1a7532e669e662a073c202acd12aaed284"

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
        """document.querySelector('[data-practice-bank-v2]')?.dataset.practiceQuestionCount === '129'""",
        timeout=15000,
    )
    assert root.get_attribute("data-practice-ready-v2") == "true"
    assert root.get_attribute("data-practice-question-count") == "129"

    page.evaluate("(k) => localStorage.removeItem(k)", STORE_KEY)
    result = page.evaluate(
        """async () => {
          const response = await fetch('/assets/data/practice/09-he-phuong-trinh-v1-05.json', {cache:'no-store'});
          if (!response.ok) throw new Error('chunk_http_' + response.status);
          const chunk = await response.json();
          await window.RoadmapTaxonomyV2Observer.ready;
          const q = chunk.questions[0];
          const first = await window.RoadmapTaxonomyV2Observer.captureAttempt({
            question:q, correct:true, hintsUsed:0, fullSolutionViewed:false,
            selectedIndex:0, practiceMode:'qa-p1c2'
          });
          const second = await window.RoadmapTaxonomyV2Observer.captureAttempt({
            question:q, correct:true, hintsUsed:0, fullSolutionViewed:false,
            selectedIndex:0, practiceMode:'qa-p1c2'
          });
          return {
            ids: chunk.questions.map(x => x.id),
            hints: chunk.questions.map(x => (x.hints || []).length),
            first, second,
            debug: window.RoadmapTaxonomyV2Observer.debugSnapshot()
          };
        }"""
    )

    assert result["ids"] == [f"SYS09V1_{i:03d}" for i in range(121,130)]
    assert result["hints"] == [2] * 9
    assert result["first"]["captured"] is True
    assert result["first"]["family_id"] == "SYS-CONCEPT"
    assert result["first"]["independent_evidence"] is True
    assert result["second"]["captured"] is True
    assert result["second"]["independent_evidence"] is False
    assert result["second"]["independent_reason"] == "repeat_question"
    assert result["debug"]["policy_error"] is None
    assert result["debug"]["ct09_p1c2_extension_error"] is None
    assert result["debug"]["ct09_p1c2_extension"]["rows"] == 9
    assert result["debug"]["store"]["recent_events"][-1]["source_topic_policy_blob"] == EXT_BLOB
    assert result["debug"]["store"]["recent_events"][-1]["question_id"] == "SYS09V1_121"

    visible = root.inner_text()
    assert "SYS09-P1C2-" not in visible, "internal clone family leaked into learner UI"
    assert "CLEARED_FOR_CT09_P1C2" not in visible, "review authorization leaked into learner UI"

    context.close()
    browser.close()

print("PASS: CT09 learner Practice loads 129 questions including reviewed P1-C2 chunk.")
print("PASS: P1-C2 Taxonomy v2 shadow extension captures new items with repeat de-duplication.")
print("PASS: internal taxonomy/review metadata remains nonvisual.")
