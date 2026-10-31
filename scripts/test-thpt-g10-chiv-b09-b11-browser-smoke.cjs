"use strict";
const assert=require("node:assert/strict"),{chromium}=require("playwright");
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const [width,height] of [[390,844],[820,1180],[1440,900]]){
   const page=await browser.newPage({viewport:{width,height}});
   try{
    const base="http://127.0.0.1:8765/thpt-preview/sgk/chuong-iv/";
    for(const n of [9,10,11]){
     const response=await page.goto(base+"bai-"+n+"/",{waitUntil:"domcontentloaded"});
     assert(response?.ok(),"B"+n+" route");
     assert.equal(await page.locator("[data-thpt-help-id]").count(),2);
     const image=page.locator(".thpt-r4-probability-figure img");
     assert.equal(await image.count(),1);
     await image.scrollIntoViewIfNeeded();
     await page.waitForFunction(()=>[...document.querySelectorAll(".thpt-r4-probability-figure img")].every(x=>x.complete&&x.naturalWidth>0),{timeout:15000});
     const dim=await image.evaluate(el=>({w:el.getBoundingClientRect().width,p:el.parentElement.getBoundingClientRect().width}));
     assert(dim.w<=dim.p+2,"SVG overflow B"+n);
     await page.locator("[data-thpt-help-id] summary").first().click();
     assert(await page.locator("[data-thpt-help-id]").first().getAttribute("open")!==null);
     const id="THPT-G10-B"+String(n).padStart(2,"0")+(n===11?"-C02":"-C01");
     const quiz=await page.goto(base+"luyen-tap/?item="+id,{waitUntil:"domcontentloaded"});
     assert(quiz?.ok());
     const dlg=page.locator("dialog.thpt-r4-practice-dialog");
     await dlg.waitFor({state:"visible",timeout:12000});
     assert.equal(await dlg.locator("[data-thpt-canonical-item]").first().getAttribute("data-thpt-canonical-item"),id);
     assert.equal(await dlg.locator('.thpt-r4-formative-choice-group input[type="radio"]').count(),4,"MCQ A-D");
     assert.equal(await dlg.locator("details[open]").count(),0,"No answer leak");
     await page.locator("[data-thpt-modal-close]").click();
    }
    await page.goto(base+"luyen-tap/?item=THPT-G10-B09-P01",{waitUntil:"domcontentloaded"});
    const short=page.locator("dialog.thpt-r4-practice-dialog");
    await short.waitFor({state:"visible"});
    assert.equal(await short.locator("[data-thpt-canonical-item]").first().getAttribute("data-thpt-canonical-item"),"THPT-G10-B09-P01");
    assert.equal(await short.locator('.thpt-r4-formative-choice-group input[type="radio"]').count(),0);
    const lock=await page.goto(base+"tu-kiem-tra-chuong/",{waitUntil:"domcontentloaded"});
    assert(lock?.ok());await page.locator('[data-g10-chapter-selfcheck="CHIV"] .g10sc-progress').waitFor();assert(!(await page.locator('[data-g10-chapter-selfcheck="CHIV"]').innerText()).includes("Đáp án:"),"ChIV pre-submit answer leak");
    const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
    assert(overflow<=20,"Layout overflow at "+width);
   }finally{await page.close()}
  }
  console.log("PASS G10 ChIV B09/B10/B11 browser mobile/tablet/desktop: 3 responsive original SVGs, 6 D6, MCQ+short R01, inactive Readiness");
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exit(1)});
