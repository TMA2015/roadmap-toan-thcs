#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const {chromium}=require("playwright");

const pages=[
  {
    path:"sgk/lop-11/chuong-i/bai-1/",
    expected:["1. Góc lượng giác và số đo","2. Radian và độ dài cung",
      "3. Đường tròn lượng giác","4. Tang, côtang và điều kiện xác định",
      "5. Các góc liên quan đặc biệt"],
    minMath:27
  },
  {
    path:"sgk/lop-11/chuong-i/bai-2/",
    expected:["1. Công thức cộng và trừ","2. Công thức nhân đôi",
      "3. Tích thành tổng","4. Tổng thành tích"],
    minMath:12
  },
  {
    path:"sgk/chuong-iv/bai-9/",
    expected:["1. Định nghĩa và trường hợp đặc biệt","2. Tính chất",
      "3. Trung điểm và trọng tâm","4. Ứng dụng"],
    minMath:20
  }
];
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
   const page=await browser.newPage({viewport});
   try{
    for(const sample of pages){
     const url="http://127.0.0.1:8765/thpt-preview/"+sample.path;
     const response=await page.goto(url,{waitUntil:"networkidle"});
     assert(response?.ok(),"AP page missing "+sample.path);
     const headings=await page.locator("h3").allInnerTexts();
     for(const expected of sample.expected){
      assert(headings.some(x=>x.trim().startsWith(expected)),
       "Missing learner-facing heading "+expected+" on "+sample.path);
     }
     await page.waitForFunction(()=>document.querySelectorAll("mjx-container").length>0,{timeout:12000});
     await page.evaluate(async()=>{if(window.MathJax?.startup?.promise)await window.MathJax.startup.promise});
     const evidence=await page.evaluate(()=>{
      const containers=[...document.querySelectorAll("mjx-container")];
      const mathOverflow=containers.filter(el=>{
       const r=el.getBoundingClientRect();
       return r.width>0&&(r.right>window.innerWidth+5||r.left< -5);
      }).map(el=>{
       const r=el.getBoundingClientRect();
       return {left:Math.round(r.left),right:Math.round(r.right),text:el.textContent?.slice(0,100)};
      });
      return {
       mathCount:containers.length,
       docOverflow:document.documentElement.scrollWidth-window.innerWidth,
       mathOverflow
      };
     });
     assert(evidence.mathCount>=sample.minMath,
      "MathJax missing rendered formulas on "+sample.path+" at "+viewport.width);
     assert(evidence.docOverflow<=12,
      "Whole page overflows horizontally at "+viewport.width+" on "+sample.path+
      " by "+evidence.docOverflow+"px");
     assert.equal(evidence.mathOverflow.length,0,
      "MathJax formula outside viewport at "+viewport.width+" on "+sample.path+
      ": "+JSON.stringify(evidence.mathOverflow));
    }
   }finally{await page.close()}
  }
  console.log("PASS AP pilot responsive: source-matched headings, rendered MathJax, no horizontal formula overflow at 390/820/1440.");
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exit(1)});
