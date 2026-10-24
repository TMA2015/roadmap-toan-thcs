#!/usr/bin/env python3
"""R17→R19: source-safe semantic QA for the two formerly protected pilots.
R17 original SVG positions are intentionally superseded by R16 independently
reviewed editorial content; check math & genuine diagrams, not old text posters.
"""
import shutil
from playwright.sync_api import sync_playwright
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:raise RuntimeError("Chromium required")
BASE="http://127.0.0.1:8765/kien-thuc/"
CASES={
"05-7-hang-dang-thuc":{
  "section":"links","head":"4.2. Hằng đẳng thức dùng theo hai chiều",
  "visual":"05-05-mo-hinh-dien-tich-binh-phuong-r2.svg",
  "phrases":["Chiều khai triển","Chiều nhận dạng","thành thạo cả hai chiều"]},
"14-tam-giac":{
  "section":"core","head":"3.5. Quan hệ giữa cạnh và góc đối diện",
  "visual":"14-tam-giac-can-v1.svg",
  "phrases":["Góc lớn hơn đối diện cạnh lớn hơn",
             "Cạnh lớn hơn đối diện góc lớn hơn","PA=PB"]}
}
with sync_playwright() as pw:
 browser=pw.chromium.launch(executable_path=CHROME,headless=True,
   args=["--no-sandbox","--disable-dev-shm-usage"])
 for device,(width,height) in {"desktop":(1365,900),"tablet-sim":(820,1180),"phone":(390,844)}.items():
  ctx=browser.new_context(viewport={"width":width,"height":height})
  for slug,cfg in CASES.items():
   page=ctx.new_page();errors=[]
   page.on("pageerror",lambda e:errors.append(str(e)))
   response=page.goto(BASE+slug+"/",wait_until="domcontentloaded",timeout=30000)
   assert response and response.status==200,(slug,"official source route unavailable")
   root=page.locator(".md-content__inner.math-knowledge-r19")
   root.wait_for(state="visible",timeout=18000)
   assert root.locator("details.topic-learning-card").count()==11,(slug,"lost a source section")
   section=root.locator("details.topic-learning-card#"+cfg["section"])
   section.locator("summary").wait_for(state="visible")
   section.evaluate("(node)=>node.open=true")
   heading=section.locator("h3").filter(has_text=cfg["head"]).first
   assert heading.count()==1,(slug,"missing reviewed teaching heading")
   block=heading.locator("xpath=ancestor::*[contains(concat(' ',normalize-space(@class),' '),' tabbed-block ')]")
   if block.count():
    idx=block.evaluate("(node)=>Array.from(node.parentNode.children).indexOf(node)")
    section.locator(".tabbed-set .tabbed-labels label").nth(idx).click()
   for phrase in cfg["phrases"]:
    assert phrase in section.text_content(),(slug,"lost approved explanation",phrase)
   visual=root.locator('img[src*="'+cfg["visual"]+'"]')
   assert visual.count()==1,(slug,"real conceptual/geometric diagram not retained")
   # One teaching figure remains legible; a removed text-only summary poster is not a failure.
   parent=visual.locator("xpath=ancestor::*[contains(concat(' ',normalize-space(@class),' '),' tabbed-block ')]")
   if parent.count():
    tab_idx=parent.evaluate("(node)=>Array.from(node.parentNode.children).indexOf(node)")
    root.locator("#core .tabbed-labels label").nth(tab_idx).click()
   box=visual.locator("xpath=ancestor::details[contains(@class,'topic-learning-card')]")
   if box.count():box.evaluate("(node)=>node.open=true")
   visual.scroll_into_view_if_needed(timeout=15000)
   visual.evaluate("(img)=>img.decode()",timeout=20000)
   assert visual.evaluate("(img)=>img.complete && img.naturalWidth>100"),(slug,"actual SVG broken")
   assert page.evaluate("document.documentElement.scrollWidth<=document.documentElement.clientWidth+2"),(slug,device,"horizontal overflow")
   assert not errors,(slug,device,"JS page exception",errors[:2])
   if device=="desktop":
    page.emulate_media(media="print")
    assert visual.is_visible(),(slug,"print hides reviewed diagram")
    page.emulate_media(media="screen")
    page.evaluate("document.documentElement.setAttribute('data-md-color-scheme','slate')")
    assert visual.is_visible(),(slug,"dark mode hides reviewed diagram")
   print("PASS R19 protected-equivalent",slug,device,flush=True)
   page.close()
  for neg in ("21-thong-ke","23-xac-suat"):
   page=ctx.new_page();page.goto(BASE+neg+"/",wait_until="domcontentloaded")
   assert page.locator(".mk-r17-compare,.mk-r17-logic-pairs").count()==0,(neg,"other topic received CT05/14-specific R17 layout")
   page.close()
  ctx.close()
 browser.close()
