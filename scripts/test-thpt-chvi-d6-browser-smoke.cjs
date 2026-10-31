"use strict";
const assert=require("node:assert/strict");
const {chromium}=require("playwright");
const url="http://127.0.0.1:8765/thpt-preview/sgk/chuong-vi/luyen-tap/";
async function run(){
 const browser=await chromium.launch({headless:true});
 try{
  for(const width of [1280,390,768]){
   const context=await browser.newContext({viewport:{width,height:820},isMobile:width<500,hasTouch:width<500});
   const page=await context.newPage();
   const errors=[];
   page.on("pageerror",e=>errors.push(e.message));
   const response=await page.goto(url,{waitUntil:"domcontentloaded"});
   assert(response?.ok(),"Chapter VI SGK practice not served");
   await page.locator('[data-thpt-open-quiz="b15-core"]').click();
   const dlg=page.locator("dialog.thpt-r4-practice-dialog");
   await dlg.waitFor({state:"visible"});
   assert.equal(await dlg.locator("[data-thpt-chvi-d6]").count(),1,"D6 panel absent");
   assert.equal(await dlg.locator("[data-help-id]").count(),2);
   await dlg.locator(".thpt-chvi-d6-main > summary").click();
   await dlg.locator('[data-help-id="HELP-G10-B15-01"] > summary').click();
   assert.equal(await dlg.locator('[data-help-id="HELP-G10-B15-01"] li').count(),5);
   assert.equal(await dlg.locator("[data-thpt-canonical-item]").first().getAttribute("data-thpt-canonical-item"),
     "THPT-G10-B15-C01");
   assert.equal(await dlg.locator("[data-thpt-reviewed-formative] details[open]").count(),0,
     "Solution must never reveal because learner opened D6");
   await dlg.locator('[data-help-id="HELP-G10-B15-02"] > summary').click();
   await dlg.locator('[data-thpt-chvi-d6-target="THPT-G10-B15-P03"]').click();
   await dlg.locator('[data-thpt-canonical-item="THPT-G10-B15-P03"]').waitFor({state:"visible"});
   assert.equal(await dlg.locator("[data-thpt-chvi-d6]").count(),1,"D6 panel lost on Core→Practice switch");
   const overflow=await dlg.evaluate(el=>Math.max(0,el.scrollWidth-el.clientWidth));
   assert(overflow<=4,"D6 practice modal overflow "+width+"px: "+overflow);
   await dlg.locator("[data-thpt-modal-close]").click();
   // All four lessons expose exactly the two academic D6 cards.
   for(const lesson of ["16","17","18"]){
    await page.locator('[data-thpt-open-quiz="b'+lesson+'-core"]').click();
    await dlg.waitFor({state:"visible"});
    // B16 imports its original R4 form asynchronously from its canonical route.
    await dlg.locator("[data-thpt-chvi-d6]").waitFor({state:"attached",timeout:15000});
    assert.equal(await dlg.locator('[data-thpt-chvi-d6] [data-help-id]').count(),2,
      "Missing source-locked D6 for B"+lesson);
    if(lesson==="16"){
     const first=dlg.locator('[data-thpt-core] input[name="answer"]').first();
     await first.check();
     await dlg.locator(".thpt-chvi-d6-main > summary").click();
     await dlg.locator('[data-help-id="HELP-G10-B16-01"] > summary').click();
     assert(await first.isChecked(),"Opening B16 D6 must not reset original R4 answer selection");
    }
    await dlg.locator("[data-thpt-modal-close]").click();
   }
   await page.goto("http://127.0.0.1:8765/thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong/",{waitUntil:"domcontentloaded"});
   assert.equal(await page.locator("[data-thpt-chvi-d6]").count(),0,
     "D6 may never appear in pre-Final Submit Chapter Readiness");
   assert.equal(errors.length,0,"JS runtime errors: "+errors.join("|"));
   await context.close();
   console.log("PASS ChVI D6 modal scope/navigation/visual bounds",width);
  }
 }finally{await browser.close()}
}
if(require.main===module)run().catch(e=>{console.error(e);process.exitCode=1});
module.exports={run};
