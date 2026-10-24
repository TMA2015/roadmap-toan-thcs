#!/usr/bin/env python3
"""Verify R19 semantic tabs on canonical, source-locked Knowledge routes."""
import shutil
from playwright.sync_api import sync_playwright
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:raise RuntimeError("Chromium required")
BASE="http://127.0.0.1:8765/kien-thuc/"
SLUGS=[
"02-so-va-phep-tinh","03-ti-le-ti-le-thuc","04-bieu-thuc-dai-so","05-7-hang-dang-thuc",
"06-phan-tich-da-thuc","07-phan-thuc-dai-so","08-phuong-trinh-bat-phuong-trinh",
"09-he-phuong-trinh","10-ham-so-do-thi","11-can-thuc","12-phuong-trinh-bac-hai-viete",
"13-goc-va-duong-thang","14-tam-giac","15-duong-dong-quy","16-tu-giac",
"17-thales-dong-dang","18-he-thuc-luong","19-duong-tron","20-hinh-hoc-tong-hop",
"21-thong-ke","22-dai-luong-dac-trung","23-xac-suat","24-bai-toan-thuc-te",
"25-tong-hop-on-thi-10"]
COUNTS={"10-ham-so-do-thi":(5,5),"04-bieu-thuc-dai-so":(3,0),"08-phuong-trinh-bat-phuong-trinh":(4,4)}
with sync_playwright() as pw:
 browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
 for device,width,items in [
  ("desktop",1365,SLUGS),("tablet",820,SLUGS),
  ("phone",390,["04-bieu-thuc-dai-so","05-7-hang-dang-thuc",
  "08-phuong-trinh-bat-phuong-trinh","10-ham-so-do-thi",
  "14-tam-giac","21-thong-ke","23-xac-suat"])]:
  ctx=browser.new_context(viewport={"width":width,"height":900})
  for slug in items:
   page=ctx.new_page();errors=[]
   page.on("pageerror",lambda e:errors.append(str(e)))
   response=page.goto(BASE+slug+"/",wait_until="domcontentloaded",timeout=30000)
   assert response and response.status==200,(slug,device,"route missing")
   root=page.locator(".md-content__inner.math-knowledge-r19")
   root.wait_for(state="visible",timeout=15000)
   assert root.locator("details.topic-learning-card").count()==11,(slug,device,"source section missing")
   core=root.locator("details.topic-learning-card#core")
   types=root.locator("details.topic-learning-card#types")
   assert core.is_visible() and types.is_visible(),(slug,device,"semantic sections hidden")
   kt=core.locator(".tabbed-set .tabbed-labels label")
   db=types.locator(".tabbed-set .tabbed-labels label")
   if slug in COUNTS:
    assert (kt.count(),db.count())==COUNTS[slug],(slug,device,"specific tab plan",kt.count(),db.count())
   else:
    assert kt.count()>=3 and db.count()>=3,(slug,device,"content-based tabs missing",kt.count(),db.count())
   assert root.locator('a[href*="preview-composition"],a[href*="preview-tabs"]').count()==0,(slug,"no two-version choices")
   assert root.locator("details#map").count()==1 and root.locator("details#goals").count()==1
   if device=="desktop":
    # Both orientation sections must remain readable even if a summary is tapped.
    for landmark in ("map","goals"):
     card=root.locator("details#"+landmark)
     assert card.evaluate("(el) => el.open"),(slug,landmark,"orientation collapsed")
     card.locator(":scope > summary").click()
     assert card.evaluate("(el) => el.open"),(slug,landmark,"orientation was closable")
   assert core.locator(".tabbed-block h3").count()>=3,(slug,"knowledge examples lost")
   assert types.locator('a[href*="bai-tap/"]').count()>=1 or slug=="04-bieu-thuc-dai-so",(slug,"practice link missing")
   assert page.evaluate("document.documentElement.scrollWidth<=document.documentElement.clientWidth+2"),(slug,device,"overflow")
   assert not errors,(slug,device,"runtime errors",errors[:2])
   if slug in ("05-7-hang-dang-thuc","10-ham-so-do-thi","14-tam-giac","21-thong-ke","23-xac-suat"):
    assert core.locator("img").count()+types.locator("img").count()+root.locator("#map img").count()>=1,(slug,"visual missing")
   if db.count()>1:
    db.nth(1).click()
    assert db.nth(1).get_attribute("aria-selected")=="true",(slug,"switch failed")
    if slug!="10-ham-so-do-thi":
     # Clicking an already selected deep link must not add a phantom Back entry.
     before=page.evaluate("history.length")
     db.nth(1).click()
     assert page.evaluate("history.length")==before,(slug,device,"duplicate tab history")
    if slug!="10-ham-so-do-thi":
     # ARIA tabs are labels, so keyboard Enter/Space must activate them explicitly.
     db.first.focus()
     page.keyboard.press("Enter")
     assert db.first.get_attribute("aria-selected")=="true",(slug,device,"Enter did not select tab")
     db.nth(1).focus()
     page.keyboard.press("Space")
     assert db.nth(1).get_attribute("aria-selected")=="true",(slug,device,"Space did not select tab")
     page.keyboard.press("Home")
     assert db.first.get_attribute("aria-selected")=="true",(slug,device,"Home did not select tab")
     page.keyboard.press("End")
     assert db.last.get_attribute("aria-selected")=="true",(slug,device,"End did not select tab")
     page.go_back(wait_until="domcontentloaded")
     assert db.first.get_attribute("aria-selected")=="true",(slug,device,"Back did not restore tab")
    db.first.click()
   # A legacy source-heading anchor is one browser-history step, not two:
   # the tab reveal must not silently push a separate #mk-* entry.
   if device=="desktop" and slug in ("05-7-hang-dang-thuc","14-tam-giac"):
    for zone in ("core","types"):
     group=root.locator("details.topic-learning-card#"+zone)
     tabs=group.locator(".tabbed-set .tabbed-labels label")
     if tabs.count()<2:continue
     heading=group.locator(".tabbed-set .tabbed-content > .tabbed-block").nth(1).locator("h3[id],h4[id]").first
     assert heading.count()==1,(slug,zone,"source-heading anchor missing")
     target=heading.get_attribute("id")
     tabs.first.click()
     previous_hash=page.evaluate("location.hash")
     before=page.evaluate("history.length")
     page.evaluate("""id => {
       const link=document.createElement('a');
       link.href='#'+encodeURIComponent(id);
       document.body.appendChild(link);link.click();link.remove();
     }""",target)
     assert page.evaluate("decodeURIComponent(location.hash.slice(1))")==target,(slug,zone,"source hash lost")
     assert tabs.nth(1).get_attribute("aria-selected")=="true",(slug,zone,"source tab not revealed")
     after=page.evaluate("history.length")
     current_hash=page.evaluate("location.hash")
     assert after==before+1,(slug,zone,"source-anchor history delta",before,after,previous_hash,current_hash)
     page.go_back(wait_until="domcontentloaded")
     assert page.evaluate("location.hash")==previous_hash,(slug,zone,"Back hash")
     assert tabs.first.get_attribute("aria-selected")=="true",(slug,zone,"Back tab")
     page.goto(BASE+slug+"/#"+target,wait_until="domcontentloaded")
     root=page.locator(".md-content__inner.math-knowledge-r19")
     root.wait_for(state="visible",timeout=15000)
     assert root.locator("details#"+zone+" .tabbed-labels label").nth(1).get_attribute("aria-selected")=="true",(slug,zone,"direct source hash")
   if device=="desktop" and slug in ("05-7-hang-dang-thuc","14-tam-giac","21-thong-ke","23-xac-suat"):
    # Printing must reveal every semantic tab, including panels hidden on screen.
    page.emulate_media(media="print")
    assert page.evaluate("""() => [...document.querySelectorAll('.math-knowledge-r19 #core .tabbed-block, .math-knowledge-r19 #types .tabbed-block')].every(el => getComputedStyle(el).display !== 'none' && getComputedStyle(el).visibility === 'visible')"""),(slug,"print hid a tab")
    page.emulate_media(media="screen")
   page.close()
  ctx.close()
  print("PASS R19 Knowledge semantic tabs",device,len(items),flush=True)
 browser.close()
