#!/usr/bin/env python3
"""R13 native MkDocs browser checks: map, data, modeling, Entrance10, CT10 tabs.
No artifact upload, cache, learner writes or production mutation.
"""
import shutil
from playwright.sync_api import sync_playwright

BASE="http://127.0.0.1:8765/kien-thuc/"
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium required for R13 QA")
TOPICS={
    "01-ban-do-chuong-trinh": {"version":"preview-composition-r13","phrase":"Ba trạng thái học","actions":0,"imgs":["01-overview.svg"]},
    "22-dai-luong-dac-trung": {"version":"preview-composition-r13","phrase":"Giá trị ngoại lai","actions":1,"imgs":["22-trung-binh.svg","22-trung-vi-mot.svg","22-ngoai-lai.svg"]},
    "24-bai-toan-thuc-te": {"version":"preview-composition-r13","phrase":"Mô hình hóa toán học","actions":2,"imgs":["24-03-chon-mo-hinh.svg","24-quang-duong-van-toc-thoi-gian.svg","24-phan-tram-giam-gia.svg","24-chieu-cao-luong-giac.svg"]},
    "25-tong-hop-on-thi-10": {"version":"preview-composition-r13","phrase":"Ba giai đoạn ôn tập","actions":1,"imgs":["25-03-luyen-de-so-loi.svg","25-ban-do-tong-hop.svg","25-ma-tran-uu-tien.svg","25-lo-trinh-3-giai-doan.svg"]},
    "10-ham-so-do-thi": {"version":"preview-tabs-r6","phrase":"Hàm số và đồ thị","actions":None,"imgs":["10-10-tu-cong-thuc-den-do-thi-r3.svg"],"tabbed":True}
}
SIZES={"desktop":(1365,900),"tablet-sim":(820,1180),"phone":(390,844)}
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for name,(width,height) in SIZES.items():
        ctx=browser.new_context(viewport={"width":width,"height":height})
        for topic,cfg in TOPICS.items():
            page=ctx.new_page()
            errors=[]
            page.on("pageerror",lambda error:errors.append(str(error)))
            response=page.goto(BASE+topic+"/"+cfg["version"]+"/",wait_until="domcontentloaded",timeout=30000)
            assert response and response.status==200,f"{topic}: preview not found"
            body=page.locator(".md-content")
            body.wait_for(state="visible",timeout=15000)
            assert cfg["phrase"].casefold() in body.inner_text().casefold(),f"{topic}: core heading missing"
            if cfg.get("tabbed"):
                tabsets=body.locator(".tabbed-set")
                assert tabsets.count()>=2,f"{topic}: both tab groups missing"
                labels=body.locator(".tabbed-labels label")
                assert labels.count()>=10,f"{topic}: 5+5 tab labels missing"
                labels.nth(1).click(timeout=10000)
                assert body.get_by_text("2x-4=0",exact=False).count()>=1,f"{topic}: worked step missing"
                assert body.get_by_text("Luyện ngay",exact=False).count()>=6,f"{topic}: CT10 exam actions missing"
            else:
                nav=body.locator(".math-related-practice")
                assert nav.count()==(1 if cfg["actions"] else 0),f"{topic}: practice panel count"
                if cfg["actions"]:
                    assert nav.evaluate("(el)=>getComputedStyle(el).display")=="flex",f"{topic}: CSS not applied"
                    links=nav.locator("a")
                    assert links.count()==cfg["actions"],f"{topic}: incorrect action count"
                    assert links.nth(0).inner_text().strip().startswith("Luyện ngay")
                    if cfg["actions"]==2:
                        assert links.nth(1).inner_text().strip().startswith("Làm tự luận")
                    for k in range(cfg["actions"]):
                        href=links.nth(k).get_attribute("href")
                        assert href and "undefined" not in href and not href.startswith("#")
            for imgfile in cfg["imgs"]:
                img=body.locator('img[src*="'+imgfile+'"]')
                assert img.count()==1,f"{topic}: required image missing: {imgfile}"
                img.scroll_into_view_if_needed()
                img.evaluate("(n)=>n.decode()",timeout=20000)
                assert img.evaluate("(n)=>n.complete && n.naturalWidth>100"),f"{topic}: image failed to render {imgfile}"
            assert page.evaluate("()=>document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2"),f"{topic}: {name} horizontal document overflow"
            assert not errors,f"{topic}: {name} javascript exception(s): {errors[:3]}"
            print("PASS R13",topic,name,"built page + real graphics + actions + tabs + no overflow",flush=True)
            page.close()
        ctx.close()
    browser.close()
