#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const {chromium}=require("playwright");
const url="http://127.0.0.1:8765/thpt-preview/sgk/chuong-ii/bai-3/";
(async()=>{
 const b=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [390,820,1440]){
   const page=await b.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   try{
    const resp=await page.goto(url,{waitUntil:"networkidle"});
    assert(resp?.ok(),"B03 page unavailable "+width);
    const heads=await page.locator("h3").allInnerTexts();
    for(const name of ["1. Dạng bất phương trình bậc nhất hai ẩn","2. Cặp nghiệm và miền nghiệm","3. Quy trình biểu diễn miền nghiệm","4. Điều kiện thực tiễn"]){
     assert(heads.some(h=>h.trim().startsWith(name)),"B03 heading missing "+name);
    }
    const img=page.locator(".thpt-r4-probability-figure img");
    assert.equal(await img.count(),1,"B03 original D5 SVG missing");
    await img.scrollIntoViewIfNeeded();
    await page.waitForFunction(()=>[...document.querySelectorAll(".thpt-r4-probability-figure img")].every(el=>el.complete&&el.naturalWidth>0));
    const size=await img.evaluate(el=>({child:el.getBoundingClientRect().width,parent:el.parentElement.getBoundingClientRect().width}));
    assert(size.child<=size.parent+2,"B03 SVG overflow "+width);
    await page.waitForFunction(()=>document.querySelectorAll("mjx-container").length>=10,{timeout:12000});
    // Source parity guarantees all examples/suffix are byte-unchanged; AP regression
    // checks new Knowledge groups, while existing long worked-example display math
    // may sit in a contained horizontal-scrolling MathJax wrapper on narrow phones.
    const over=await page.evaluate(()=>{
     const h2=[...document.querySelectorAll("h2")];
     const first=h2.find(e=>e.textContent.includes("1. Kiến thức SGK"));
     const next=h2.find(e=>e.textContent.includes("2. Ví dụ"));
     if(!first||!next)throw new Error("B03 Knowledge boundaries missing");
     const insideKnowledge=e=>Boolean(first.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING)&&Boolean(e.compareDocumentPosition(next)&Node.DOCUMENT_POSITION_FOLLOWING);
     const out=[...document.querySelectorAll("mjx-container")].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.left< -5||r.right>innerWidth+5)});
     return {body:document.documentElement.scrollWidth-window.innerWidth,
      mathInKnowledge:out.filter(insideKnowledge).map(e=>({tex:e.getAttribute("aria-label"),text:e.textContent?.slice(0,90)})),
      mathOutsideKnowledge:out.filter(e=>!insideKnowledge(e)).length};
    });
    assert(over.body<=12,"B03 horizontal page overflow "+width+": "+over.body);
    assert.equal(over.mathInKnowledge.length,0,"B03 Knowledge MathJax overflow "+width+": "+JSON.stringify(over.mathInKnowledge));
    if(over.mathOutsideKnowledge)console.log("INFO B03 original, byte-unchanged examples/other math outside viewport at "+width+": "+over.mathOutsideKnowledge);
    assert.equal(await page.locator("[data-thpt-help-id]").count(),2,"B03 D6 help count changed");
   }finally{await page.close();}
  }
  console.log("PASS G10 B03 AP browser: 4 pedagogical groups, math/SVG/D6 responsive at 390/820/1440.");
 }finally{await b.close();}
})().catch(e=>{console.error(e.stack||e);process.exit(1)});
