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
  const headerControls=[...document.querySelectorAll('.md-header__inner > *')].map(el=>{
    const b=el.getBoundingClientRect(),s=getComputedStyle(el);
    return {tag:el.tagName,cls:String(el.className?.baseVal||el.className||'').slice(0,100),
      role:el.getAttribute('aria-label')||el.getAttribute('title')||'',
      left:Math.round(b.left),right:Math.round(b.right),
      width:Math.round(b.width),minWidth:s.minWidth,margin:s.margin,padding:s.padding};
  });
  const variations=[
    {key:'compact-header-buttons', css:'.md-header__button{box-sizing:border-box!important;min-width:44px!important;min-height:44px!important;margin:0!important;padding:4px!important;}'},
    {key:'compact-header-icon-only', css:'.md-header__button.md-icon{box-sizing:border-box!important;min-width:44px!important;min-height:44px!important;margin:0!important;padding:4px!important;}'},
    {key:'compact-buttons-and-title', css:'.md-header__button{box-sizing:border-box!important;min-width:44px!important;min-height:44px!important;margin:0!important;padding:4px!important;}.md-header__title{min-width:0!important;}'},
    {key:'compact-header-32px', css:'.md-header__button{box-sizing:border-box!important;min-width:44px!important;min-height:44px!important;margin:0!important;padding:2px!important;}'},
    {key:'logo-only-hide', css:'.md-header__button.md-logo{display:none!important;}'},
    {key:'hide-search-button', css:'.md-header__button[for*="search"]{display:none!important;}'},
    {key:'shrink-header-title-and-flex', css:'.md-header__title{flex:1 1 0!important;min-width:0!important;margin-left:0!important;}'},
    {key:'math-inline-local-scroll', css:'.md-typeset mjx-container[jax="CHTML"]{max-width:100%!important;overflow-x:auto!important;overflow-y:hidden!important;}'},
    {key:'math-display-local-scroll', css:'.md-typeset mjx-container[display="true"]{max-width:100%!important;overflow-x:auto!important;overflow-y:hidden!important;}'},
    {key:'table-scrollwrap', css:'.md-typeset__scrollwrap{max-width:100%!important;overflow-x:auto!important;}'},
    {key:'math-in-arithmatex-scroll', css:'.md-typeset .arithmatex{display:block!important;max-width:100%!important;overflow-x:auto!important;overflow-y:hidden!important;}'},
    {key:'all-mjx-clip-locally', css:'.md-typeset mjx-container{box-sizing:border-box!important;max-width:100%!important;overflow-x:auto!important;overflow-y:hidden!important;}'},
    {key:'display-math-parent-scroll', css:'.md-typeset p:has(>mjx-container){max-width:100%!important;overflow-x:auto!important;}'},
    {key:'table-local-viewport', css:'.md-typeset table:not([class]){max-width:100%!important;overflow-x:auto!important;}'}
  ];
  const trials=[];
  for(const t of variations){
    const el=document.createElement('style');
    el.textContent=t.css;
    document.head.append(el);
    const buttons=[...document.querySelectorAll('.md-header__button')].filter(e=>{
      const r=e.getBoundingClientRect();return r.height>0&&r.width>0;});
    trials.push({key:t.key,...size(),headerButtons:buttons.map(e=>{
      const r=e.getBoundingClientRect();return {w:Math.round(r.width),h:Math.round(r.height),right:Math.round(r.right)};})});
    el.remove();
  }
  const mathBlocks=[...document.querySelectorAll('article.md-content__inner div.arithmatex')].map(el=>{
    const s=getComputedStyle(el);
    return {tag:el.tagName,overflowX:s.overflowX,overflowY:s.overflowY,
      width:el.clientWidth,scrollWidth:el.scrollWidth};
  });
  return {initial,hierarchy,near,toggles,headerControls,trials,mathBlocks};
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
        assert result["initial"]["overflow"] <= 2, (
            "Unexpected horizontal page overflow with 200% root text: " + str(result["initial"]))
        header = result["hierarchy"][".md-header"]
        assert header and header["scrollWidth"] <= header["clientWidth"] + 2, (
            "Shared Material header still overflows after focused CSS fix")
        for item in result["trials"][0]["headerButtons"]:
            assert item["w"] >= 44 and item["h"] >= 44, (
                "Header icon buttons must retain a 44 CSS-pixel touch target")
            assert item["right"] <= 392, (
                "Header control pushed off-screen despite local scroll rules")
        if "14-tam-giac" in route:
            assert result["mathBlocks"], "Geometry page must include display-math containers"
            assert all(block["overflowX"] == "auto" for block in result["mathBlocks"]), (
                "Display math must scroll locally instead of widening the entire page")
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
print("PASS B2 text enlargement: Dashboard + Geometry pages within viewport at root text 200%; 44px header icons and local display math scrolling. Native device zoom not certified.")
