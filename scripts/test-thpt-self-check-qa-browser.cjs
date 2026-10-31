#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const path=require("node:path");
const {chromium}=require("playwright");
const root=path.resolve(__dirname,"..");
const css=path.join(root,"docs/assets/stylesheets/thpt-self-check-qa-v1.css");
const js=path.join(root,"docs/assets/javascripts/thpt-self-check-qa-v1.js");

function fixture(kind){
 return {
  releaseMode:"TECHNICAL_DEMO_ONLY",masteryCredit:false,persistResults:false,
  scope:{kind,scope_id:kind==="TOPIC"?"QA-TOPIC-X":"QA-G10-CH-I"},
  items:[
   {item_id:"QA-SC-01",outcome_id:"QA-O1",type:"MCQ",prompt:"QA: 3 + 4 = ?",
    options:["5","6","7","8"],answerKey:"C",solution:"QA explanation: 7.",
    reviewUrl:"./kien-thuc/"},
   {item_id:"QA-SC-02",outcome_id:"QA-O2",type:"TF",prompt:"QA: Đúng / Sai",
    statements:["5 > 2","1 > 3"],answerKey:[true,false],
    solution:"QA explanation: first true, second false."},
   {item_id:"QA-SC-03",outcome_id:"QA-O3",type:"SHORT",prompt:"QA: 1 + 1 = ?",
    gradingMode:"EXACT_TEXT_REVIEWED",acceptedAnswers:["2","2.0"],
    solution:"QA explanation: sum = 2."},
   {item_id:"QA-SC-04",outcome_id:"QA-O4",type:"WRITTEN",
    prompt:"QA: Viết lời giải về một đường thẳng.",
    rubric:"QA rubric: lập luận, điều kiện, kết luận.",solution:"QA sample written solution."},
   {item_id:"QA-SC-05",outcome_id:"QA-O5",type:"SHORT",
    prompt:"QA: Câu mở chưa có khóa chấm được duyệt.",
    solution:"QA comparison solution: trình bày từng bước.",
    reviewUrl:"../on-tap/"}
  ]
 };
}
async function build(browser,width,kind){
 const page=await browser.newPage({viewport:{width,height:900}});
 await page.setContent('<!DOCTYPE html><html lang="vi"><head><meta name="viewport" content="width=device-width, initial-scale=1"></head><body><main><div id="qa" data-thpt-self-check-demo="true"></div></main></body></html>');
 await page.addStyleTag({path:css});
 await page.evaluate(()=>{
  window.__qaWrites=[];
  const previous=Storage.prototype.setItem;
  Storage.prototype.setItem=function(k,v){window.__qaWrites.push([k,v]);return previous.call(this,k,v)};
  window.__qaFetches=[];
  const originalFetch=window.fetch;
  window.fetch=(...args)=>{window.__qaFetches.push(args);return originalFetch(...args)};
 });
 await page.addScriptTag({path:js});
 await page.evaluate(cfg=>window.THPTSelfCheckQAV1.mount(document.getElementById("qa"),cfg),fixture(kind));
 return page;
}
async function run(){
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const kind of ["SGK_CHAPTER","TOPIC"]){
   for(const width of [390,820,1440]){
    const page=await build(browser,width,kind);
    try{
     const area=page.locator("#qa");
     assert((await area.locator("h2").innerText()).includes(kind==="TOPIC"?"chuyên đề":"cuối chương"),"Separate chapter/topic scope label");
     assert((await area.innerText()).includes("KHÔNG phải đề kiểm tra chính thức"),"QA notice missing");
     assert.equal(await area.locator(".thpt-selfcheck-jump").count(),5);
     assert.equal(await area.locator("[data-thpt-sc-final]").isVisible(),true);
     assert.equal((await area.locator(".thpt-selfcheck-outcome").innerText()).trim(),"","No provisional result");
     const before=await area.innerText();
     for(const forbidden of ["QA explanation:","QA rubric:","Đáp án:","Kết quả tự đánh giá","Chưa khớp khóa","Đúng theo khóa"])
      assert(!before.includes(forbidden),"Pre Final Submit leak: "+forbidden);
     // Move among questions, correct an answer, and ensure no grading appears.
     await area.locator('.thpt-selfcheck-choice input[value="A"]').check();
     await area.locator('.thpt-selfcheck-choice input[value="C"]').check();
     await area.locator('[data-thpt-sc-next]').click();
     assert((await area.locator(".thpt-selfcheck-outcome").innerText())==="","Next must not grade");
     await area.locator(".thpt-selfcheck-tf").nth(0).locator('input[value="true"]').check();
     await area.locator(".thpt-selfcheck-tf").nth(1).locator('input[value="false"]').check();
     await area.locator('[data-thpt-sc-jump="2"]').click();
     await area.locator("textarea").fill("2");
     await area.locator('[data-thpt-sc-jump="3"]').click();
     await area.locator("textarea").fill("Em tự giải bằng giấy.");
     await area.locator('[data-thpt-sc-jump="4"]').click();
     await area.locator("textarea").fill("Cần tự đối chiếu.");
     await area.locator('[data-thpt-sc-prev]').click();
     await area.locator('[data-thpt-sc-jump="0"]').click();
     const preFinal=await area.innerText();
     for(const forbidden of ["QA explanation:","QA rubric:","Đáp án:","Kết quả tự đánh giá","Đúng theo khóa"])
      assert(!preFinal.includes(forbidden),"Pre-submit leak after revisit: "+forbidden);
     assert.equal(await area.locator('input[value="C"]').isChecked(),true,"Answer not preserved when navigating");
     assert.equal(await area.locator("[data-thpt-sc-final]").isVisible(),true);
     // Final Submit exactly once; no feedback before it.
     await area.locator("[data-thpt-sc-final]").click();
     assert.equal(await area.locator("[data-thpt-sc-final]").isVisible(),false);
     const summary=await area.locator(".thpt-selfcheck-outcome").innerText();
     assert(summary.includes("Kết quả tự đánh giá — không phải điểm khảo thí"),"Wrong evidence label");
     assert(summary.includes("3 / 3 câu"),"MCQ, TF group and keyed SHORT must be correctly self-checked");
     assert(summary.includes("2 câu (không chấm máy)"),"Written and unkeyed SHORT must be manual");
     assert(summary.includes("0 câu"),"All questions supplied");
     assert(summary.includes("QA-O4")&&summary.includes("QA-O5"),"Manual outcome recommendations missing");
     assert(!summary.includes("Skill Mastery"),"Mastery must not be part of summary");
     const reviewed=await area.innerText();
     assert(reviewed.includes("Đáp án: C")&&reviewed.includes("QA explanation: 7."),"MCQ answer/solution only post-submit");
     await area.locator('[data-thpt-sc-jump="3"]').click();
     assert((await area.innerText()).includes("QA rubric: lập luận"),"Written rubric only after submit");
     assert((await area.innerText()).includes("không chấm máy"),"Written must not claim auto grading");
     assert.equal(await area.locator("textarea").isDisabled(),true,"Responses locked after Final Submit");
     await area.locator('[data-thpt-sc-jump="4"]').click();
     assert((await area.innerText()).includes("QA comparison solution"),"Open response comparison only after submit");
     const facts=await page.evaluate(()=>({
      scroll:document.documentElement.scrollWidth-window.innerWidth,
      writes:window.__qaWrites,requests:window.__qaFetches
     }));
     assert(facts.scroll<=12,"Horizontal overflow at "+width+": "+facts.scroll);
     assert.deepEqual(facts.writes,[],"Engine must not write local/session storage");
     assert.deepEqual(facts.requests,[],"Engine must not use network");
    }finally{await page.close()}
   }
  }
  // Invalid production-like payloads MUST be rejected before any UI is rendered.
  const page=await browser.newPage();
  try{
   await page.setContent('<div id="qa" data-thpt-self-check-demo="true"></div><div id="nonqa"></div>');
   await page.addScriptTag({path:js});
   const tests=await page.evaluate(({base})=>{
    const root=document.getElementById("qa"),engine=window.THPTSelfCheckQAV1;
    const rejects=fn=>{try{fn();return false}catch{return true}};
    return {
     missingFlag:rejects(()=>engine.mount(document.getElementById("nonqa"),base)),
     officialMode:rejects(()=>engine.mount(root,{...base,releaseMode:"PUBLIC_READINESS"})),
     mastery:rejects(()=>engine.mount(root,{...base,masteryCredit:true})),
     storage:rejects(()=>engine.mount(root,{...base,persistResults:true})),
     nonQaId:rejects(()=>engine.mount(root,{...base,items:[{...base.items[0],item_id:"THPT-G10-RD1-001"}]})),
     duplicate:rejects(()=>engine.mount(root,{...base,items:[base.items[0],base.items[0]]})),
     unreviewedKey:rejects(()=>engine.mount(root,{...base,items:[{...base.items[0],answerKey:"E"}]})),
     unreviewedShort:rejects(()=>engine.mount(root,{...base,items:[{...base.items[2],gradingMode:"AUTO_MATH"}]}))
    };
   },{base:fixture("SGK_CHAPTER")});
   assert(Object.values(tests).every(Boolean),"Safety validation must reject invalid config: "+JSON.stringify(tests));
  }finally{await page.close()}
  console.log("PASS #662 technical self-check: 2 separate scopes × 390/820/1440; MCQ, T/F, reviewed short, ungraded short, Written rubric; no pre-submit leak, one Final Submit, no storage/network/Mastery.");
 }finally{await browser.close()}
}
run().catch(e=>{console.error(e.stack||e);process.exitCode=1});
