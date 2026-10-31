"use strict";
const {chromium}=require("playwright"),assert=require("node:assert/strict");
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const base="http://127.0.0.1:8765/thpt-preview/sgk/lop-11/chuong-i/";
 try{
  for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
   const page=await browser.newPage({viewport});
   try{
    for(const n of [1,2]){
     let resp=await page.goto(base+"bai-"+n+"/",{waitUntil:"networkidle"});
     assert(resp?.ok(),"G11 SGK lesson "+n+" unavailable");
     assert.equal(await page.locator("[data-thpt-help-id]").count(),2);
     const image=page.locator(".thpt-r4-probability-figure img");
     assert.equal(await image.count(),1);
     // The reviewed SVG loads lazily; AP knowledge grouping can move it below the fold.
     // Explicitly simulate learner scrolling rather than treating offscreen loading as missing content.
     await image.scrollIntoViewIfNeeded();
     await page.waitForFunction(()=>[...document.querySelectorAll(".thpt-r4-probability-figure img")].every(x=>x.complete&&x.naturalWidth>0));
     const dims=await image.evaluate(el=>({child:el.getBoundingClientRect().width,parent:el.parentElement.getBoundingClientRect().width}));
     assert(dims.child<=dims.parent+2,"SVG oversized on viewport "+viewport.width);
     resp=await page.goto(base+"luyen-tap/?item=THPT-G11-B0"+n+"-C01",{waitUntil:"networkidle"});
     assert(resp?.ok(),"G11 practice route unavailable");
     const dlg=page.locator("dialog.thpt-r4-practice-dialog");
     await dlg.waitFor({state:"visible",timeout:16000});
     assert((await dlg.locator(".thpt-r4-modal-meta").innerText()).includes("LỚP 11"));
     const first=dlg.locator("[data-thpt-canonical-item]").first();
     assert.equal(await first.getAttribute("data-thpt-canonical-item"),"THPT-G11-B0"+n+"-C01");
     assert.equal(await dlg.locator("details[open]").count(),0,"solution must be closed before self-work");
     const reviewHref=await dlg.locator(".thpt-r4-remediation-link").first().getAttribute("href");
     assert(reviewHref.includes("/sgk/lop-11/chuong-i/bai-"+n+"/"),"must not route a G11 item to G10");
     const typed=dlg.locator(".thpt-r4-formative-answer textarea");
     assert.equal(await typed.count(),1,"G11 canonical open item must allow typed answer");
     assert.equal(await dlg.locator(".thpt-r4-formative-feedback").innerText(),"","No pre-submit verdict");
     await typed.fill("Học sinh tự giải G11 — QA");
     await dlg.locator(".thpt-r4-formative-submit").click();
     assert((await dlg.locator(".thpt-r4-formative-feedback").innerText()).includes("chưa chấm tự động"),
       "G11 open-formative must not invent machine correctness");
     assert(await dlg.locator(".thpt-r4-formative-actions details").nth(1).getAttribute("open")!==null,
       "G11 open answer should reveal voluntary solution for comparison");
     await dlg.locator("[data-thpt-modal-close]").click();
    }
    await page.goto(base+"luyen-tap/?item=THPT-G11-B02-P07",{waitUntil:"networkidle"});
    const modal=page.locator("dialog.thpt-r4-practice-dialog");
    await modal.waitFor({state:"visible",timeout:16000});
    assert.equal(await modal.locator("[data-thpt-canonical-item]").first().getAttribute("data-thpt-canonical-item"),"THPT-G11-B02-P07");
    const r=await page.goto(base+"tu-kiem-tra-chuong/",{waitUntil:"networkidle"});
    assert(r?.ok(),"G11 inactive readiness route missing");
    assert(await page.getByText("CHƯA KÍCH HOẠT",{exact:false}).count()>0);
    assert(await page.locator("[data-thpt-readiness]").count()===0,"No active G11 readiness engine");
    const over=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
    assert(over<=20,"G11 overflow at "+viewport.width);
   }finally{await page.close()}
  }
  console.log("PASS G11 B01/B02 Golden R4: grade-isolated canonical Core/Practice modal, original SVG, D6, blocked Readiness, responsive 390/820/1440");
 }finally{await browser.close()}
})().catch(error=>{console.error(error.stack||error);process.exit(1)});
