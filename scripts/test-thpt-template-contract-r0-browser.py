#!/usr/bin/env python3
"""R0 visual proof only: four template profiles and token-matched text/graphics."""
from pathlib import Path
import shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:raise RuntimeError("Chromium required for THPT R0 preview QA")
URL="http://127.0.0.1:8765/qa/thpt-design-system-r0/"
Path("previews").mkdir(exist_ok=True)
with sync_playwright() as pw:
 browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
 for device,width in [("desktop",1365),("ipad-sim",820),("phone",390)]:
  ctx=browser.new_context(viewport={"width":width,"height":900})
  for name in ("A","B","C","D"):
   page=ctx.new_page()
   errors=[]
   page.on("pageerror",lambda error: errors.append(str(error)))
   res=page.goto(URL,wait_until="domcontentloaded",timeout=30000)
   assert res is not None and res.status==200,(name,device,"preview route")
   button=page.locator("#thpt-profile-select button[data-profile="+name+"]")
   button.click()
   root=page.locator(".thpt-lesson")
   assert root.get_attribute("data-profile")==name,(name,device,"wrong template")
   assert button.get_attribute("aria-pressed")=="true",(name,device,"profile not selected")
   assert root.locator("h1").count()==1 and root.locator(".thpt-meta-card").count()==2,(name,device,"orientation missing")
   navs=root.locator(".thpt-tablist")
   assert navs.count()==2,(name,device,"independent knowledge/method tabs missing")
   assert root.locator(".thpt-tablist button[aria-selected=true]").count()==2,(name,device,"tab state")
   assert navs.nth(0).locator("button").count()>=2,(name,device,"hard-coded missing groups")
   first=navs.nth(0).locator("button").first
   nxt=navs.nth(0).locator("button").nth(1)
   first.focus()
   first.press("ArrowRight")
   assert nxt.get_attribute("aria-selected")=="true",(name,device,"keyboard tabs broken")
   assert root.locator(".thpt-tabpanel:not([hidden])").count()==2,(name,device,"hidden-pane logic")
   selected=nxt.evaluate("(n)=>getComputedStyle(n).color")
   previous=first.evaluate("(n)=>getComputedStyle(n).color")
   assert selected!=previous,(name,device,"active tab not visually distinct",selected,previous)
   font=root.evaluate("(n)=>parseFloat(getComputedStyle(n).fontSize)")
   expect=16 if width<571 else 17
   assert abs(font-expect)<.2,(name,device,"wrong body px",font)
   label=first.evaluate("(n)=>parseFloat(getComputedStyle(n).minHeight)")
   assert label>=44,(name,device,"touch target too small")
   assert page.evaluate("document.documentElement.scrollWidth<=document.documentElement.clientWidth+2"),(name,device,"overflow")
   assert not errors,(name,device,"runtime errors",errors)
   if name=="D":
    navs.nth(0).locator("button").first.click()
    t=root.locator(".thpt-table td").first
    assert t.count()==1,(name,device,"data table hidden")
    size=t.evaluate("(n)=>parseFloat(getComputedStyle(n).fontSize)")
    assert abs(size-expect)<.2,(name,device,"table/body font mismatch",size,expect)
   if name in ("B","C","D"):
    target={"B":1,"C":0,"D":1}[name]
    navs.nth(0).locator("button").nth(target).click()
    figure=root.locator(".thpt-tabpanel:not([hidden]) svg[viewBox='0 0 640 400']")
    assert figure.count()==1,(name,device,"diagram missing/invalid scaling")
    svg_label=figure.locator(".geo-label").first
    assert svg_label.count()==1,(name,device,"diagram labels missing")
    labelpx=svg_label.evaluate("(n)=>parseFloat(getComputedStyle(n).fontSize)")
    assert labelpx>=20,(name,device,"SVG label too small",labelpx)
    caption=root.locator(".thpt-tabpanel:not([hidden]) figcaption")
    assert caption.count()==1 and len(caption.inner_text())>20,(name,device,"diagram caption")
   if device=="desktop":
    page.screenshot(path="previews/math-thpt-r0-"+name+".png",animations="disabled")
    page.emulate_media(media="print")
    assert root.locator(".thpt-tabpanel").count()==root.locator(".thpt-tabpanel:visible").count(),(name,"print hides knowledge")
   page.close()
  ctx.close()
  print("PASS THPT R0 four template profiles",device,flush=True)
 browser.close()
