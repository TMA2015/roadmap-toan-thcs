"use strict";
const assert=require("node:assert/strict"),{chromium}=require("playwright");
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const [width,height] of [[390,844],[820,1180],[1440,900]]){
   const page=await browser.newPage({viewport:{width,height}});
   try{
    const base="http://127.0.0.1:8765/thpt-preview/sgk/chuong-v/";
    const root=await page.goto(base,{waitUntil:"domcontentloaded"});assert(root?.ok());
    const cards=page.locator(".thpt-r4-grid a.thpt-r4-tile");
    assert.equal(await cards.count(),3,"Golden ChVII 3 lesson cards");
    assert.equal(await cards.first().getAttribute("href"),"bai-12/");
    const html=await page.goto(base+"bai-12/",{waitUntil:"domcontentloaded"});assert(html?.ok());
    assert.equal(await page.locator("h3").filter({hasText:/Ví dụ [123]/}).count(),3);
    assert.equal(await page.locator("[data-thpt-help-id]").count(),2);
    const image=page.locator('[data-thpt-fig-id="FIG-G10-B12-01"] img');
    assert.equal(await image.count(),1);
    await image.scrollIntoViewIfNeeded();
    await page.waitForFunction(()=>[...document.querySelectorAll('[data-thpt-fig-id="FIG-G10-B12-01"] img')].every(x=>x.complete&&x.naturalWidth>0),null,{timeout:15000});
    const bounds=await image.evaluate(x=>({w:x.getBoundingClientRect().width,p:x.parentElement.getBoundingClientRect().width}));
    assert(bounds.w<=bounds.p+2,"R02 SVG overflows at "+width);
    await page.locator('[data-thpt-help-id="HELP-G10-B12-01"] summary').click();
    assert(await page.locator('[data-thpt-help-id="HELP-G10-B12-01"]').getAttribute("open")!==null);
    for(const id of ["THPT-G10-B12-C01","THPT-G10-B12-P06"]){
     assert((await page.goto(base+"luyen-tap/?item="+id,{waitUntil:"domcontentloaded"}))?.ok());
     const modal=page.locator("dialog.thpt-r4-practice-dialog");await modal.waitFor({state:"visible",timeout:14000});
     assert.equal(await modal.locator("[data-thpt-canonical-item]").first().getAttribute("data-thpt-canonical-item"),id);
     assert.equal(await modal.locator('.thpt-r4-formative-choice-group input[type="radio"]').count(),id.endsWith("C01")?4:0,"Must preserve original response type");
     assert.equal(await modal.locator("details[open]").count(),0,"Do not expose solution automatically");
     await page.locator("[data-thpt-modal-close]").click();
     assert(!await modal.isVisible());
    }
    assert((await page.goto(base+"tu-kiem-tra-chuong/",{waitUntil:"domcontentloaded"}))?.ok());
    assert(await page.getByText("chưa kích hoạt",{exact:false}).count()>0,"Readiness remains disabled");
    const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
    assert(overflow<=20,"Mobile overflow "+overflow+" at "+width);
   }finally{await page.close()}
  }
  console.log("PASS G10 ChV B12 R02: 390/820/1440 Golden VII, FIG01 SVG, 2 HELP, canonical C01/P06, no Readiness");
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exit(1)});
