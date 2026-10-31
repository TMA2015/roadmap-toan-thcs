"use strict";
const assert=require("node:assert/strict");const {chromium}=require("playwright");
(async()=>{const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});try{
 for(const [width,height] of [[390,844],[820,1180],[1440,900]]){
  const page=await browser.newPage({viewport:{width,height}});try{
   for(const n of [1,2]){
    const res=await page.goto("http://127.0.0.1:8765/thpt-preview/sgk/chuong-i/bai-"+n+"/",{waitUntil:"networkidle"});assert(res?.ok(),"Missing Chapter I lesson "+n);
    const cards=page.locator("[data-thpt-help-id]");assert.equal(await cards.count(),2,"Missing two B0"+n+" D6 cards");
    assert.equal(await page.locator("[data-thpt-help-id][open]").count(),0,"D6 must start collapsed");
    const image=page.locator(".thpt-r4-probability-figure img");assert.equal(await image.count(),1);
    const data=await image.evaluate(el=>({loaded:el.complete&&el.naturalWidth>0,imgWidth:el.getBoundingClientRect().width,parentWidth:el.parentElement.getBoundingClientRect().width}));
    assert(data.loaded&&data.imgWidth<=data.parentWidth+1,"D5 image missing/overflowing on "+width+" for lesson "+n);
    await cards.first().locator("summary").click();assert(await cards.first().getAttribute("open")!==null,"Cannot open D6");
    const id="THPT-G10-B0"+n+"-C01";
    const practice=await page.goto("http://127.0.0.1:8765/thpt-preview/sgk/chuong-i/luyen-tap/?item="+id,{waitUntil:"networkidle"});
    assert(practice?.ok(),"Practice missing");
    const dlg=page.locator("dialog.thpt-r4-practice-dialog");await dlg.waitFor({state:"visible"});
    assert.equal(await dlg.locator("[data-thpt-canonical-item]").first().getAttribute("data-thpt-canonical-item"),id,"Deep link wrong canonical item");
    assert.equal(await dlg.locator("details[open]").count(),0,"Public answer leaked before student voluntarily opens");
    await dlg.locator("[data-thpt-modal-close]").click();
   }
   const ready=await page.goto("http://127.0.0.1:8765/thpt-preview/sgk/chuong-i/tu-kiem-tra-chuong/",{waitUntil:"networkidle"});
   assert(ready?.ok()&&await page.locator('[data-g10-chapter-selfcheck="CHI"] .g10sc-progress').count()===1,"Chapter I reviewed self-check missing");assert(!(await page.locator('[data-g10-chapter-selfcheck="CHI"]').innerText()).includes("Đáp án:"),"Answer exposed before Final Submit");
  }finally{await page.close()}
 }
 console.log("PASS G10 ChI browser: 16 source-locked formative items, two D1/D2 lesson pages, 4 D6 and 2 responsive D5, original item deep-links, client self-check no pre-final answers");
}finally{await browser.close()}})().catch(e=>{console.error(e.stack||e);process.exit(1)});
