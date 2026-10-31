#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const {chromium}=require("playwright");
const cases=[
 {lesson:7,headings:["1. Vectơ và độ dài","2. Phương và hướng","3. Bằng nhau và ngược hướng","4. Vectơ-không theo SGK/SBT","5. Ứng dụng"]},
 {lesson:8,headings:["1. Quy tắc ba điểm (quy tắc tam giác)","2. Quy tắc hình bình hành","3. Vectơ đối và hiệu","4. Trung điểm và trọng tâm","5. Ứng dụng hợp lực"]},
 {lesson:10,headings:["1. Hệ tọa độ và vectơ","2. Các phép toán tọa độ","3. Tọa độ trung điểm và trọng tâm","4. Ứng dụng"]}
];
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:900}});
   try{
    for(const item of cases){
     const res=await page.goto("http://127.0.0.1:8765/thpt-preview/sgk/chuong-iv/bai-"+item.lesson+"/",{waitUntil:"networkidle"});
     assert(res?.ok(),"Page B"+item.lesson+" not available");
     const headers=await page.locator(".md-content__inner h3").allInnerTexts();
     for(const h of item.headings)assert(headers.some(x=>x.trim().startsWith(h)),"B"+item.lesson+" heading: "+h);
     assert.equal(await page.locator(".md-content__inner h3").filter({hasText:"D1."}).count(),0,
       "Never display D1.x audit labels as lesson headings");
     const figures=page.locator(".thpt-r4-probability-figure img");
     assert(await figures.count()>=1,"Missing original reviewed SVG figure");
     await page.waitForFunction(()=>[...document.querySelectorAll(".thpt-r4-probability-figure img")].every(img=>img.complete&&img.naturalWidth>0));
     const status=await page.evaluate(()=>{
      const d=document.documentElement;
      const images=[...document.querySelectorAll(".thpt-r4-probability-figure img")];
      return {overflow:d.scrollWidth-window.innerWidth,figures:images.map(i=>({img:i.getBoundingClientRect().width,parent:i.parentElement.getBoundingClientRect().width}))};
     });
     assert(status.overflow<=12,"Page horizontal overflow B"+item.lesson+" at "+width+": "+status.overflow);
     assert(status.figures.every(x=>x.img<=x.parent+2),"Figure too wide B"+item.lesson+" at "+width);
    }
   }finally{await page.close()}
  }
  console.log("PASS AP batch G10 B07/B08/B10 browser: headings, original SVG, no viewport overflow on 390/820/1440.");
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exit(1)});
