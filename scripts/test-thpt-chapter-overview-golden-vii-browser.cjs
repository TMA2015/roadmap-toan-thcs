"use strict";
const assert=require("node:assert/strict");
const {chromium}=require("playwright");
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:900}});
   try{
    for(const [route,qty] of [
     ["chuong-i/",2],["chuong-ii/",2],["chuong-vi/",4],["chuong-vii/",4],
     ["lop-11/chuong-i/",2]
    ]){
     const res=await page.goto("http://127.0.0.1:8765/thpt-preview/sgk/"+route,{waitUntil:"domcontentloaded"});
     assert(res?.ok(),route+" returns 200");
     const grid=page.locator(".thpt-r4-screen > .thpt-r4-grid");
     assert.equal(await grid.count(),1,route+" shared ChVII grid");
     assert.equal(await grid.locator("a.thpt-r4-tile").count(),qty,route+" original lesson cards");
     assert.equal(await grid.locator("a.thpt-r4-tile em").count(),qty,route+" learn CTA");
     const cols=await grid.evaluate(el=>getComputedStyle(el).gridTemplateColumns.split(/\s+/).length);
     assert.equal(cols,width<=600?1:2,route+" responsive columns at "+width);
     const nav=page.locator(".thpt-r4-screen > .thpt-r4-lesson-tabs");
     assert.equal(await nav.count(),1,route+" existing chapter action row");
     assert.equal(await nav.locator('a[href="luyen-tap/"]').count(),1);
     assert.equal(await nav.locator('a[href="tu-kiem-tra-chuong/"]').count(),1);
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
     assert(overflow<=20,route+" overflow "+overflow+" at "+width);
    }
   }finally{await page.close()}
  }
  console.log("PASS Golden VII chapter overview browser smoke: G10 I/II/VI/VII and G11 I at 390/820/1440; no layout regressions");
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exit(1)});
