"use strict";
const assert=require("node:assert/strict"),{chromium}=require("playwright");
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  const base="http://127.0.0.1:8765/thpt-preview/sgk/chuong-i/luyen-tap/";
  for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
   const page=await browser.newPage({viewport});
   try{
    for(const item of ["THPT-G10-B01-C01","THPT-G10-B01-P01"]){
     const response=await page.goto(base+"?item="+item,{waitUntil:"domcontentloaded"});
     assert(response?.ok(),"Scored release modal route absent");
     const modal=page.locator("dialog.thpt-r4-practice-dialog");
     await modal.waitFor({state:"visible",timeout:15000});
     const card=modal.locator(".thpt-r4-reviewed-formative-card");
     assert.equal(await card.getAttribute("data-thpt-canonical-item"),item);
     assert.equal(await card.locator("h3").count(),1,"Question must remain visible");
     assert.equal(await card.locator(".thpt-r4-formative-actions").count(),1);
     const actions=card.locator(".thpt-r4-formative-actions");
     assert.equal(await card.locator(".thpt-r4-modal-progress").count(),0,
      "Repeated Bài n / role metadata must be absent inside each question card");
     assert.equal(await actions.locator("details").count(),2);
     assert.equal(await actions.locator(".thpt-r4-remediation-link").count(),1);
     assert.equal(await actions.locator("details[open]").count(),0,"Hint & solution must start closed");
     assert.equal(await card.getByText("Tự luyện và đối chiếu lời giải · Không ghi điểm thành thạo.").count(),0);
     const peers=await actions.locator("summary,.thpt-r4-remediation-link").evaluateAll(nodes=>
      nodes.map(el=>{const rect=el.getBoundingClientRect(),css=getComputedStyle(el);
       return {height:rect.height,align:css.alignItems,justify:css.justifyContent,display:css.display}}));
     assert.equal(peers.length,3,"Three auxiliary actions must remain present");
     assert(peers.every(x=>Math.abs(x.height-peers[0].height)<=1),
      "All three action buttons must share the same height");
     assert(peers.every(x=>x.align==="center"&&x.justify==="center"&&x.display==="inline-flex"),
      "Icon/text must be centered vertically and horizontally in each button");
     const prompt=card.locator("h3"),summary=actions.locator("summary").first();
     const positions=await Promise.all([prompt.boundingBox(),actions.boundingBox()]);
     assert(positions.every(Boolean)&&positions[1].y>=positions[0].y+positions[0].height-2,"Actions must follow the prompt");
     const style=await summary.evaluate(el=>({weight:parseInt(getComputedStyle(el).fontWeight,10),size:parseFloat(getComputedStyle(el).fontSize)}));
     assert(style.weight<=400,"Disclosure label must be normal-weight");
     const promptSize=await prompt.evaluate(el=>parseFloat(getComputedStyle(el).fontSize));
     assert(promptSize>style.size,"Question must visually lead auxiliary actions");
     if(viewport.width===1440){
      const bounds=await actions.locator("summary,.thpt-r4-remediation-link").evaluateAll(nodes=>nodes.map(x=>({y:x.getBoundingClientRect().top,w:x.getBoundingClientRect().width})));
      assert(bounds.every(x=>Math.abs(x.y-bounds[0].y)<=2),"Three controls must share one row on desktop");
     }
     await summary.click();
     assert.equal(await actions.locator("details[open]").count(),1);
     assert(await actions.locator(".thpt-r4-formative-reveal").first().isVisible(),"Hint should reveal on click");
     assert.equal(await actions.locator("details").nth(1).getAttribute("open"),null,"Opening hint must not leak answer");
     await actions.locator("details").nth(1).locator("summary").click();
     assert(await actions.locator("details").nth(1).locator(".thpt-r4-formative-reveal").isVisible(),"Answer must reveal deliberately");
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
     assert(overflow<=20,"No horizontal overflow at "+viewport.width);
    }
   }finally{await page.close()}
  }
  console.log("PASS THPT UI-only compact disclosures: question-first, three peer actions, normal font, deliberate reveal, G10 Core+Practice and responsive desktop/tablet/phone");
 }finally{await browser.close()}
})().catch(error=>{console.error(error.stack||error);process.exit(1)});
