"""PC/mobile browser QA: local-only dashboard, backup file transfer and guarded restore."""
from pathlib import Path
import json
import shutil
from playwright.sync_api import sync_playwright

BASE="http://127.0.0.1:8765"
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium/Google Chrome required")
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"previews"
OUT.mkdir(exist_ok=True)
practice={"questions":{"P1":{"attempted":2,"correct":1},"P2":{"attempted":1,"correct":1}},
          "tags":{"NUM-ORDER":{"attempted":3,"correct":2}}}
readiness={"assessments":{"R-01":{"attempts":[{"submitted_at":"2026-10-11T10:00:00Z","correct":3,"total":5}]}}}
taxonomy={"schema":"taxonomy-v2-evidence-store-v1","recent_events":[],"seen_questions":{},
          "independent_units":{"u1":{"family_id":"NUM-ORDER","correct":True}}}
entries={"toan-thcs-practice-v1":json.dumps(practice,separators=(",",":")),
         "toan-thcs-assessment-v1":json.dumps(readiness,separators=(",",":")),
         "toan-thcs-taxonomy-v2-evidence-v1":json.dumps(taxonomy,separators=(",",":"))}
page_url=BASE+"/tien-do-hoc-tap/"
def seed(page,data):
    page.evaluate("(e)=>Object.entries(e).forEach(([k,v])=>localStorage.setItem(k,v))",data)
def start(browser,width,height):
    ctx=browser.new_context(viewport={"width":width,"height":height},accept_downloads=True)
    page=ctx.new_page()
    page.goto(page_url,wait_until="domcontentloaded")
    page.locator('[data-math-progress-dashboard][data-progress-ready="true"]').wait_for(timeout=30000)
    page.locator('[data-math-progress-backup][data-backup-ready="true"]').wait_for(timeout=30000)
    return ctx,page
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    # R2-A: an empty browser is not a storage failure; show honest zeroes.
    empty_ctx,empty=start(browser,390,844)
    assert empty.locator(".mpd-stat-value").all_inner_texts()==["Học và thử","0","0"]
    empty_display=empty.locator("[data-math-progress-dashboard]").inner_text()
    assert "Chưa có kết quả học tập" in empty_display
    assert "Không đọc được dữ liệu" not in empty_display
    assert empty.evaluate("localStorage.getItem('toan-thcs-practice-v1')") is None
    assert empty.evaluate("localStorage.getItem('toan-thcs-assessment-v1')") is None
    empty_ctx.close()

    # R2-A: corrupted JSON is a real read error; never convert it to zero
    # or overwrite opaque historical learner data while rendering the page.
    bad_ctx,bad=start(browser,390,844)
    seed(bad,{"toan-thcs-practice-v1":"{broken",
              "toan-thcs-assessment-v1":"{broken-readiness"})
    bad.reload(wait_until="domcontentloaded")
    bad.locator('[data-math-progress-dashboard][data-progress-ready="true"]').wait_for(timeout=30000)
    assert bad.locator(".mpd-stat-value").all_inner_texts()==["Học và thử","—","—"]
    assert "Không đọc được dữ liệu" in bad.locator("[data-math-progress-dashboard]").inner_text()
    assert bad.evaluate("localStorage.getItem('toan-thcs-practice-v1')")=="{broken"
    assert bad.evaluate("localStorage.getItem('toan-thcs-assessment-v1')")=="{broken-readiness"
    bad_ctx.close()

    ctx_a,a=start(browser,1365,900)
    errors=[]
    a.on("pageerror",lambda e:errors.append(str(e)))
    seed(a,entries)
    a.reload(wait_until="domcontentloaded")
    a.locator('[data-math-progress-dashboard][data-progress-ready="true"]').wait_for(timeout=30000)
    values=a.locator(".mpd-stat-value").all_inner_texts()
    assert values==["Học và thử","3","1"],values
    assert a.locator(".mpd-stat").count()==3
    assert a.locator('.mpd-stat[data-lane="core"]').count()==1
    assert "những câu hỏi ngắn" in a.locator('.mpd-stat[data-lane="core"]').inner_text()
    assert "Tổng số lượt trả lời câu hỏi" in a.locator('.mpd-stat[data-lane="practice"]').inner_text()
    assert "bộ đếm cũ" not in a.locator("[data-math-progress-dashboard]").inner_text()
    assert "Taxonomy v2" not in a.locator("[data-math-progress-dashboard]").inner_text()
    # Both summary panels must have an identical top/bottom on wide screens.
    panels=a.locator(".mpd-columns > .mpd-panel")
    assert panels.count()==2
    boxes=[panels.nth(i).bounding_box() for i in range(2)]
    assert all(boxes),boxes
    assert abs(boxes[0]["y"]-boxes[1]["y"])<=2,boxes
    assert abs(boxes[0]["height"]-boxes[1]["height"])<=2,boxes
    assert abs(boxes[0]["width"]-boxes[1]["width"])<=2,boxes
    assert a.locator(".mpd-activity-list").count()==1
    assert "Taxonomy" not in a.locator("[data-math-progress-dashboard]").inner_text()
    # Raw Markdown must not leak from mixed HTML/Markdown containers.
    assert a.get_by_role("heading",name="Tiếp tục học",exact=True).count()==1
    assert a.get_by_role("heading",name="Sao lưu và khôi phục tiến độ",exact=True).count()==1
    links={
        "Học theo lớp 6–9":"/hoc-theo-lop/",
        "Luyện tập tương tác":"/luyen-tap/",
        "Bản đồ kỹ năng":"/ban-do-ky-nang/"
    }
    for label,suffix in links.items():
        link=a.get_by_role("link",name=label,exact=True)
        assert link.count()==1,(label,link.count())
        assert link.get_attribute("href").endswith(suffix),(label,link.get_attribute("href"))
    rendered=a.locator(".math-progress-page").inner_text()
    assert "## Tiếp tục học" not in rendered
    assert "## Sao lưu và khôi phục tiến độ" not in rendered
    assert "[**Học theo lớp" not in rendered
    with a.expect_download() as download_event:
        a.get_by_role("button",name="Tải tệp sao lưu",exact=True).click()
    download=download_event.value
    backup=json.loads(Path(download.path()).read_text(encoding="utf-8"))
    assert backup["schema"]=="self-learning-math-local-backup-v1"
    assert backup["entries"]==entries
    a.screenshot(path=str(OUT/"math-progress-dashboard-r1-desktop.png"),full_page=False)
    assert not errors,errors
    ctx_a.close()

    # The receiving phone/browser already contains independent learning history.
    ctx_b,b=start(browser,390,844)
    errors=[]
    b.on("pageerror",lambda e:errors.append(str(e)))
    existing=json.dumps({"questions":{"OLD":{"attempted":7,"correct":7}},"tags":{}},separators=(",",":"))
    seed(b,{"toan-thcs-practice-v1":existing})
    b.reload(wait_until="domcontentloaded")
    file_input=b.locator("[data-math-progress-backup] input[type=file]")
    file_input.set_input_files({"name":"progress.json","mimeType":"application/json","buffer":json.dumps(backup).encode("utf-8")})
    b.locator(".mpd-status").get_by_text("Tệp hợp lệ",exact=False).wait_for(timeout=10000)
    assert "Thêm mới: 2" in b.locator(".mpd-restore-preview").inner_text()
    assert "Bỏ qua vì dữ liệu đang có khác tệp: 1" in b.locator(".mpd-restore-preview").inner_text()
    assert "sẽ KHÔNG được chuyển" in b.locator(".mpd-restore-preview").inner_text()
    b.once("dialog",lambda dialog:dialog.accept())
    b.get_by_role("button",name="Khôi phục dữ liệu",exact=True).click()
    assert b.evaluate("localStorage.getItem('toan-thcs-practice-v1')")==existing
    assert "Đã bỏ qua 1 vùng" in b.locator(".mpd-status").inner_text()
    assert b.evaluate("localStorage.getItem('toan-thcs-assessment-v1')")==entries["toan-thcs-assessment-v1"]
    assert b.evaluate("localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1')")==entries["toan-thcs-taxonomy-v2-evidence-v1"]

    # Replacement requires the browser user to request a fresh pre-replace download and confirm.
    file_input.set_input_files({"name":"progress.json","mimeType":"application/json","buffer":json.dumps(backup).encode("utf-8")})
    b.locator("[data-math-progress-backup] select").select_option("replace")
    assert "Thay thế: 1" in b.locator(".mpd-restore-preview").inner_text()
    restore=b.get_by_role("button",name="Khôi phục dữ liệu",exact=True)
    assert restore.is_disabled()
    with b.expect_download() as pre_download:
        b.get_by_role("button",name="1. Tải bản dự phòng dữ liệu hiện tại").click()
    assert pre_download.value.suggested_filename.startswith("math-progress-before-replace")
    assert restore.is_disabled()
    b.locator(".mpd-checkbox input").check()
    assert restore.is_enabled()
    # A second tab changed data after the destination safety snapshot: refuse stale replace.
    b.evaluate("localStorage.setItem('roadmap.ui.focus.v1','1')")
    restore.click()
    assert "Dữ liệu trên máy đã thay đổi" in b.locator(".mpd-status").inner_text()
    assert restore.is_disabled()
    assert b.evaluate("localStorage.getItem('toan-thcs-practice-v1')")==existing
    with b.expect_download() as fresh_backup:
        b.get_by_role("button",name="1. Tải bản dự phòng dữ liệu hiện tại").click()
    assert fresh_backup.value.suggested_filename.startswith("math-progress-before-replace")
    b.locator(".mpd-checkbox input").check()
    assert restore.is_enabled()
    b.once("dialog",lambda dialog:dialog.accept())
    restore.click()
    assert b.evaluate("localStorage.getItem('toan-thcs-practice-v1')")==entries["toan-thcs-practice-v1"]

    # A changed file must be rejected with no write.
    broken=json.loads(json.dumps(backup))
    broken["entries"]["toan-thcs-practice-v1"]=json.dumps({"questions":{},"tags":{}})
    file_input.set_input_files({"name":"tampered.json","mimeType":"application/json","buffer":json.dumps(broken).encode("utf-8")})
    b.locator(".mpd-status").get_by_text("SHA-256 không khớp",exact=False).wait_for(timeout=10000)
    assert restore.is_disabled()
    assert b.evaluate("localStorage.getItem('toan-thcs-practice-v1')")==entries["toan-thcs-practice-v1"]
    b.reload(wait_until="domcontentloaded")
    b.locator('[data-math-progress-dashboard][data-progress-ready="true"]').wait_for(timeout=30000)
    panels=b.locator(".mpd-columns > .mpd-panel")
    assert panels.count()==2
    first,second=[panels.nth(i).bounding_box() for i in range(2)]
    assert first and second and second["y"]>=first["y"]+first["height"]+2,(first,second)
    b.screenshot(path=str(OUT/"math-progress-dashboard-r1-mobile.png"),full_page=False)
    assert b.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2")
    assert not errors,errors
    ctx_b.close()
    browser.close()
print("PASS: Math dashboard R2-A clearly distinguishes Core, shared Core/Practice answers and submitted Readiness; no Taxonomy jargon.")
print("PASS: hashed JSON backup exports from PC and restores to independent mobile browser without overwriting prior history by default.")
print("PASS: replace gated on an explicit pre-download and consent; tampered JSON blocked; mobile no overflow.")
