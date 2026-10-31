"use strict";
const assert=require("node:assert/strict"),{chromium}=require("playwright");
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const [width,height] of [[390,844],[820,1180],[1440,900]]){
   const page=await browser.newPage({viewport:{width,height}});
   try{
    const base="http://127.0.0.1:8765/thpt-preview/sgk/chuong-v/";
    assert((await page.goto(base,{waitUntil:"domcontentloaded"}))?.ok());
    for(const n of [13,14]){
     assert((await page.goto(base+"bai-"+n+"/",{waitUntil:"domcontentloaded"}))?.ok(),"Lesson "+n);
     assert.equal(await page.locator("[data-thpt-help-id]").count(),2);
     assert.equal(await page.locator("h3").filter({hasText:/Ví dụ [123]/}).count(),3);
     const img=page.locator(".thpt-r4-probability-figure img");
     assert.equal(await img.count(),1);
     await img.scrollIntoViewIfNeeded();
     await page.waitForFunction(()=>[...document.querySelectorAll(".thpt-r4-probability-figure img")].every(x=>x.complete&&x.naturalWidth>0),{timeout:15000});
     const d=await img.evaluate(el=>({w:el.getBoundingClientRect().width,p:el.parentElement.getBoundingClientRect().width}));
     assert(d.w<=d.p+2,"SVG overflow B"+n);
     await page.locator("[data-thpt-help-id] summary").first().click();
     assert(await page.locator("[data-thpt-help-id]").first().getAttribute("open")!==null);
     const id="THPT-G10-B"+n+"-C01";
     const response=await page.goto(base+"luyen-tap/?item="+id,{waitUntil:"domcontentloaded"});
     assert(response?.ok(),"Practice "+id);
     const dlg=page.locator("dialog.thpt-r4-practice-dialog");
     await dlg.waitFor({state:"visible",timeout:12000});
     assert.equal(await dlg.locator("[data-thpt-canonical-item]").first().getAttribute("data-thpt-canonical-item"),id);
     assert.equal(await dlg.locator('.thpt-r4-formative-choice-group input[type="radio"]').count(),4,"Original A-D options");
     assert.equal(await dlg.locator("details[open]").count(),0,"Do not reveal solution prematurely");
     await page.locator("[data-thpt-modal-close]").click();
     assert(!await dlg.isVisible(),"Dialog closed");
    }
    const short=await page.goto(base+"luyen-tap/?item=THPT-G10-B13-P01",{waitUntil:"domcontentloaded"});
    assert(short?.ok());
    const dialog=page.locator("dialog.thpt-r4-practice-dialog");
    await dialog.waitFor({state:"visible",timeout:12000});
    assert.equal(await dialog.locator("[data-thpt-canonical-item]").first().getAttribute("data-thpt-canonical-item"),"THPT-G10-B13-P01");
    assert.equal(await dialog.locator('.thpt-r4-formative-choice-group input[type="radio"]').count(),0,"Short-form not forced into guessed MCQ");
    assert((await page.goto(base+"tu-kiem-tra-chuong/",{waitUntil:"domcontentloaded"}))?.ok());
    assert(await page.getByText("chưa kích hoạt",{exact:false}).count()>0);
    assert((await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth))<=20,"Chapter V demo overflow");
   }finally{await page.close()}
  }
  console.log("PASS G10 ChV B13-B14 390/820/1440: Golden R4, 2 SVG, 4 D6, canonical deep links, MCQ+short, inactive Readiness");
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exit(1)});
