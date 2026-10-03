#!/usr/bin/env python3
"""CT08 Academic Depth P1-A browser regression."""
import shutil
from playwright.sync_api import sync_playwright

CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium required")

BASE = "http://127.0.0.1:8765/kien-thuc/08-phuong-trinh-bat-phuong-trinh/"
PRACTICE = BASE + "bai-tap/"

with sync_playwright() as p:
    browser = p.chromium.launch(
        executable_path=CHROME,
        headless=True,
        args=["--no-sandbox", "--disable-dev-shm-usage"],
    )
    context = browser.new_context(viewport={"width": 1440, "height": 1000})
    page = context.new_page()

    page.goto(BASE, wait_until="networkidle")
    body = page.locator("body").text_content() or ""

    assert "Mức ưu tiên: ⭐⭐⭐⭐⭐" in body
    assert "Ôn tập và chuyển giao thi vào lớp 10" in body
    assert "Biến đổi rồi mới dùng tính chất tích bằng 0" in body
    assert "Thu gọn rồi mới giải bất phương trình" in body
    assert "Mô hình hóa bằng một ẩn" in body
    assert "Ứng dụng – lập bất phương trình từ bài toán" in body
    assert "Phương trình cơ bản ⭐⭐⭐⭐⭐" not in body
    assert "mức độ ưu tiên ôn tập của Roadmap" not in body

    page.goto(BASE + "core/", wait_until="networkidle")
    ext = page.locator(".topic-extension-zone")
    ext.wait_for(state="attached", timeout=15000)
    summary = ext.locator("summary").inner_text()
    assert "Ứng dụng / Củng cố / Mở rộng" in summary
    assert "không tự động thay đổi Core Readiness" in summary
    ext.locator("summary").click()
    chips = ext.locator(".topic-extension-list").inner_text()
    assert "Ứng dụng: Lập bất phương trình từ bài toán" in chips
    assert "Củng cố: Giao nhiều tập nghiệm" in chips
    assert "Thử thách: Tham số trong phương trình/bất phương trình" in chips

    page.goto(PRACTICE, wait_until="networkidle")
    practice_text = page.locator("body").text_content() or ""
    assert "Ứng dụng" in practice_text
    assert "08-APP-01 · Lập bất phương trình" in practice_text
    assert "Củng cố" in practice_text
    assert "08-SUP-01 · Giao tập nghiệm" in practice_text
    assert "Entrance10 / Extension" not in practice_text

    payload = page.evaluate(
        """async () => {
          const r = await fetch('/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json', {cache:'no-store'});
          if (!r.ok) throw new Error('bank_http_' + r.status);
          const b = await r.json();
          return b.questions.filter(q => ['EQ08V1_047','EQ08V1_048','EQ08V1_049','EQ08V1_050'].includes(q.id));
        }"""
    )
    assert len(payload) == 4
    for q in payload:
        assert "x--" not in (q["question"] + " " + q.get("explanation", ""))
        assert q["answer"] == 0

    context.close()
    browser.close()

print("PASS: CT08 P1-A learner framing and reviewed layers render correctly.")
print("PASS: CT08 notation cleanup is live in the loaded Practice source without x--n strings.")
