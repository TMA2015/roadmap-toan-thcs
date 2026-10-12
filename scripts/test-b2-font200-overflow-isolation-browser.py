"""Isolate B2-R2-TEXT-01 horizontal scroll contributor without mutating Math UI.

Only Math public repo's disposable Chromium QA. Diagnostic toggles are temporary
and applied to ephemeral browser DOM; the website's shipped CSS is unchanged.
This is root font-size enlargement, not native browser zoom certification.
"""
import json
import shutil
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8765"
CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chrome/Chromium not available")

PROBE = r"""() => {
  const de=document.documentElement;
  const dim=(el) => {
    if (!el) return null;
    const s=getComputedStyle(el), b=el.getBoundingClientRect();
    return {class: typeof el.className==='string'?el.className.slice(0,130):'',
      left:Math.round(b.left),right:Math.round(b.right),
      rectWidth:Math.round(b.width), clientWidth:el.clientWidth,
      scrollWidth:el.scrollWidth,position:s.position,display:s.display,
      overflowX:s.overflowX,minWidth:s.minWidth,maxWidth:s.maxWidth,
      flexShrink:s.flexShrink,whiteSpace:s.whiteSpace};
  };
  const selectorMap=[
    'html','body','.md-container','.md-header','.md-header__inner',
    '.md-header__button','.md-header__title','.md-header__topic',
    '.md-search','.md-search__inner','.md-tabs','.md-tabs__inner',
    '.md-main','.md-main__inner','.md-grid','.md-sidebar--primary',
    '.md-sidebar--secondary','.md-content','.md-content__inner',
    'article','.md-typeset','.md-footer'
  ];
  const hierarchy={};
  for(const s of selectorMap) hierarchy[s]=dim(document.querySelector(s));
  const near=[...document.querySelectorAll('body *')]
     .map(el=>({el,b:el.getBoundingClientRect(),s:getComputedStyle(el)}))
     .filter(({b,s})=>b.height>0 && b.width>0 && b.right>de.clientWidth+2
          && b.right<de.clientWidth+150
          && !['none','hidden'].includes(s.visibility)
          && s.position!=='absolute' && s.position!=='fixed')
     .sort((a,b)=>a.b.right-b.b.right).slice(0,32)
     .map(({el,b,s})=>({tag:el.tagName,id:el.id,cls:String(el.className?.baseVal||el.className||'').slice(0,85),
       left:Math.round(b.left),right:Math.round(b.right),width:Math.round(b.width),
       minWidth:s.minWidth,overflowX:s.overflowX,position:s.position}));
  function size() {return {document:de.scrollWidth,body:document.body.scrollWidth,viewport:de.clientWidth,overflow:de.scrollWidth-de.clientWidth};}
  const initial=size();
  const variants=[
    {key:'hide-header',selector:'.md-header',css:'display:none!important'},
    {key:'hide-tabs',selector:'.md-tabs',css:'display:none!important'},
    {key:'hide-main',selector:'.md-main',css:'display:none!important'},
    {key:'hide-content',selector:'.md-content',css:'display:none!important'},
    {key:'hide-sidebar-primary',selector:'.md-sidebar--primary',css:'display:none!important'},
    {key:'hide-sidebar-secondary',selector:'.md-sidebar--secondary',css:'display:none!important'},
    {key:'hide-footer',selector:'.md-footer',css:'display:none!important'},
    {key:'hide-search',selector:'.md-search',css:'display:none!important'},
    {key:'header-title-shrink',selector:'.md-header__title',css:'min-width:0!important;width:0!important;flex:0 1 0!important'},
    {key:'grid-shrink',selector:'.md-grid',css:'min-width:0!important;max-width:100%!important'},
    {key:'content-shrink',selector:'.md-content',css:'min-width:0!important;max-width:100%!important'},
    {key:'main-inner-shrink',selector:'.md-main__inner',css:'min-width:0!important;max-width:100%!important'},
    {key:'header-inner-shrink',selector:'.md-header__inner',css:'min-width:0!important;max-width:100%!important'},
    {key:'hide-toc',selector:'.md-sidebar--secondary .md-nav',css:'display:none!important'}
  ];
  const toggles=[];
  for(const v of variants){
    const style=document.createElement('style');
    style.textContent=v.selector+'{'+v.css+'}';
    document.head.append(style);
    toggles.push({key:v.key,selector:v.selector,matched:document.querySelectorAll(v.selector).length,...size()});
    style.remove();
  }
  return {initial,hierarchy,near,toggles};
}"""

def inspect(browser, route):
    context=browser.new_context(viewport={"width":390,"height":844},has_touch=True,
                                is_mobile=True,device_scale_factor=2)
    page=context.new_page()
    errors=[]
    page.on("pageerror",lambda e: errors.append(str(e)))
    try:
        response=page.goto(BASE+route,wait_until="domcontentloaded")
        assert response and response.status==200,route
        page.locator("article.md-content__inner").wait_for(timeout=30000)
        page.evaluate("document.documentElement.style.fontSize='200%'")
        result=page.evaluate(PROBE)
        print("B2_FONT200_ISOLATION "+json.dumps({"route":route,**result},ensure_ascii=False))
        assert result["initial"]["viewport"]==390
        assert result["initial"]["overflow"]>0, "Previously reproduced 200%-font overflow no longer present; update diagnostic baselines"
        assert not errors,errors
        return result
    finally:
        context.close()

with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,
       args=["--no-sandbox","--disable-dev-shm-usage"])
    try:
        results=[inspect(browser, "/kien-thuc/14-tam-giac/"),
                 inspect(browser, "/tien-do-hoc-tap/")]
        print("B2_FONT200_SUMMARY "+json.dumps([
            {"route":["geometry","dashboard"][i],
             "initialOverflow":r["initial"]["overflow"],
             "toggles":[{"key":v["key"],"overflow":v["overflow"]}
                        for v in r["toggles"]]}
            for i,r in enumerate(results)],ensure_ascii=False))
    finally:
        browser.close()
print("PASS diagnostic: source-neutral isolation of 200%-font overflow; no CSS fix or browser-zoom certification.")
