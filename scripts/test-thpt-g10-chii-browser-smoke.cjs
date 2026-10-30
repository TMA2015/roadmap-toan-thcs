"use strict";
const assert=require("node:assert/strict"),{chromium}=require("playwright");
(async()=>{const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});try{for(const [width,height] of [[390,844],[820,1180],[1440,900]]){const page=await browser.newPage({viewport:{width,height}});try{for(const n of [3,4]){
 const response=await page.goto("http://127.0.0.1:8765/thpt-preview/sgk/chuong-ii/bai-"+n+"/",{waitUntil:"networkidle"});assert(response?.ok());
 assert.equal(await page.locator("[data-thpt-help-id]").count(),2);
 const image=page.locator(".thpt-r4-probability-figure img");assert.equal(await image.count(),1);
 const i=await image.evaluate(el=>({loaded:el.complete&&el.naturalWidth>0,w:el.getBoundingClientRect().width,parent:el.parentElement.getBoundingClientRect().width}));assert(i.loaded&&i.w<=i.parent+1,"D5 SVG failed responsive check");
 await page.locator("[data-thpt-help-id] summary").first().click();assert(await page.locator("[data-thpt-help-id]").first().getAttribute("open")!==null);
 const id="THPT-G10-B0"+n+"-C01";const res=await page.goto("http://127.0.0.1:8765/thpt-preview/sgk/chuong-ii/luyen-tap/?item="+id,{waitUntil:"networkidle"});assert(res?.ok());
 const dlg=page.locator("dialog.thpt-r4-practice-dialog");await dlg.waitFor({state:"visible"});
 assert.equal(await dlg.locator("[data-thpt-canonical-item]").first().getAttribute("data-thpt-canonical-item"),id);
 const options=dlg.locator(".thpt-r4-formative-choice-group label");assert.equal(await options.count(),4,"MCQ must offer four selectable A–D radio options");
 const optionText=await options.allInnerTexts();for(let i=0;i<4;i++)assert(optionText[i].startsWith("ABCD"[i]+"."));
 assert.equal(await dlg.locator(".thpt-r4-formative-choice-group input[type=radio]").count(),4,"Four real answer inputs required");
 assert.equal(await dlg.locator("details[open]").count(),0,"Answer/hint must not open automatically");
 const bankContext={window:{}};require("node:vm").runInNewContext(
  require("node:fs").readFileSync("docs/assets/javascripts/thpt-chii-reviewed-formative-v1.js","utf8"),bankContext);
 const bank=bankContext.window.THPT_CHII_REVIEWED_FORMATIVE;
 const correct=bank.records.find(x=>x.item_id===id).answerKey;
 const wrong="ABCD".split("").find(x=>x!==correct);
 await dlg.locator('.thpt-r4-formative-choice-group input[value="'+wrong+'"]').check();
 assert.equal(await dlg.locator(".thpt-r4-formative-feedback").innerText(),"","Choosing an option alone must not grade");
 await dlg.locator(".thpt-r4-formative-submit").click();
 assert((await dlg.locator(".thpt-r4-formative-feedback").innerText()).includes("Chưa đúng"),"Wrong MCQ gets feedback after explicit submit");
 await dlg.locator('.thpt-r4-formative-choice-group input[value="'+correct+'"]').check();
 assert.equal(await dlg.locator(".thpt-r4-formative-feedback").innerText(),"","Changing an answer must clear previous feedback");
 await dlg.locator(".thpt-r4-formative-submit").click();
 assert((await dlg.locator(".thpt-r4-formative-feedback").innerText()).includes("Đúng!"),"Correct MCQ gets feedback on submit");
 assert.equal(await dlg.locator("details[open]").count(),0,"Auto-check must not reveal solution without voluntary disclosure");
 await dlg.locator("[data-thpt-modal-close]").click();
}
 const ready=await page.goto("http://127.0.0.1:8765/thpt-preview/sgk/chuong-ii/tu-kiem-tra-chuong/",{waitUntil:"networkidle"});assert(ready?.ok()&&await page.getByText("chưa mở",{exact:false}).count()>0);
}finally{await page.close()}}console.log("PASS G10 ChII mobile/tablet/desktop: responsive SVG, 4 D6, original A-D MCQ choices, hidden answers, canonical deep links, inactive readiness");}finally{await browser.close()}})().catch(e=>{console.error(e.stack||e);process.exit(1)});
