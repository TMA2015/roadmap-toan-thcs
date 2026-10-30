"use strict";
const assert=require("node:assert/strict"),{chromium}=require("playwright");
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
   const page=await browser.newPage({viewport});
   try{
    for(const [url,id,keyed] of [
     ["/thpt-preview/sgk/chuong-ii/luyen-tap/?item=THPT-G10-B03-C01","THPT-G10-B03-C01",true],
     ["/thpt-preview/sgk/chuong-i/luyen-tap/?item=THPT-G10-B01-P01","THPT-G10-B01-P01",false]
    ]){
     const response=await page.goto("http://127.0.0.1:8765"+url,{waitUntil:"domcontentloaded"});
     assert(response?.ok(),"Page did not load "+url);
     const dlg=page.locator("dialog.thpt-r4-practice-dialog");await dlg.waitFor({state:"visible",timeout:15000});
     const card=dlg.locator(".thpt-r4-reviewed-formative-card");
     assert.equal(await card.getAttribute("data-thpt-canonical-item"),id);
     const form=card.locator("form.thpt-r4-formative-answer");
     const prompt=card.locator("h3");
     assert.equal(await prompt.count(),1,"The original canonical stem should stay prominent");
     assert.equal(await form.count(),1,"Interactive input must appear after prompt");
     const actions=card.locator(".thpt-r4-formative-actions");
     assert.equal(await actions.count(),1);
     assert.equal(await actions.locator("details").count(),2);
     assert.equal(await actions.locator(".thpt-r4-remediation-link").count(),1);
     assert.equal(await actions.locator("details[open]").count(),0,"Answer/hint leakage");
     const boxes=await Promise.all([prompt.boundingBox(),form.boundingBox(),actions.boundingBox()]);
     assert(boxes.every(Boolean));
     assert(boxes[0].y<boxes[1].y&&boxes[1].y<boxes[2].y,"Visual hierarchy should be question → response → small aids");
     assert.equal(await dlg.getByText("Tự luyện và đối chiếu lời giải · Không ghi điểm thành thạo.").count(),0);
     const weight=await actions.locator("summary").first().evaluate(el=>parseInt(getComputedStyle(el).fontWeight,10));
     assert(weight<=400,"Auxiliary labels must be regular, not bold");
     const feedback=card.locator(".thpt-r4-formative-feedback");
     assert.equal(await feedback.innerText(),"","Feedback before submit is forbidden");
     if(keyed){
      const radios=form.locator('input[type="radio"]');
      assert.equal(await radios.count(),4);
      const bank=await page.evaluate(id=>{const arr=window.THPT_CHII_REVIEWED_FORMATIVE.records;return arr.find(x=>x.item_id===id)?.answerKey},id);
      assert(/^[ABCD]$/.test(bank),"Source-reviewed answer key required");
      const wrong=[..."ABCD"].find(x=>x!==bank);
      await radios.filter({has:page.locator('input[value="'+wrong+'"]')}).count().catch(()=>{});
      await form.locator('input[value="'+wrong+'"]').check();
      assert.equal(await feedback.innerText(),"");
      await form.locator("button[type=submit]").click();
      assert((await feedback.innerText()).includes("Chưa đúng"),"Wrong answer message missing");
      await form.locator('input[value="'+bank+'"]').check();
      assert.equal(await feedback.innerText(),"","Changed choice must clear prior feedback");
      await form.locator("button[type=submit]").click();
      assert((await feedback.innerText()).includes("Đúng!"),"Correct answer must be based on reviewed bank");
      assert.equal(await actions.locator("details[open]").count(),0,"Submit must not open answer solution");
     }else{
      assert.equal(await form.locator("textarea").count(),1);
      await form.locator("textarea").fill("Bài giải do học sinh nhập (QA)");
      assert.equal(await feedback.innerText(),"");
      await form.locator("button[type=submit]").click();
      assert((await feedback.innerText()).includes("chưa chấm tự động"),"Open response cannot claim machine grade");
      assert.equal(await actions.locator("details").nth(1).getAttribute("open"),"","Submit should reveal comparison solution");
      await form.locator("textarea").fill("Sửa câu trả lời");
      assert.equal(await feedback.innerText(),"","Edit resets pending feedback");
      assert.equal(await form.locator("textarea").inputValue(),"Sửa câu trả lời");
      assert(!(await dlg.innerText()).includes("Điểm thành thạo"));
     }
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
     assert(overflow<=20,"Page overflows viewport "+viewport.width);
    }
   }finally{await page.close()}
  }
  console.log("PASS integrated PR651+652: original canonical A–D correct/wrong submit, typed comparison without auto-grade, compact regular actions, no answer leak / overflow at 390/820/1440");
 }finally{await browser.close()}
})().catch(err=>{console.error(err.stack||err);process.exit(1)});
