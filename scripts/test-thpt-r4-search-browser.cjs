"use strict";
const assert=require("node:assert/strict");
const {chromium}=require("playwright");
const base="http://127.0.0.1:8765/thpt-preview/";
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
   const page=await browser.newPage({viewport});
   const open=async path=>{
    const resp=await page.goto(base+path,{waitUntil:"networkidle"});
    assert(resp?.ok(),"THPT route failed "+path);
    await page.locator("[data-thpt-filter-input]").waitFor();
   };
   const query=async(str,expected)=>{
    await page.locator("[data-thpt-filter-input]").fill(str);
    const visible=page.locator("[data-thpt-filter-item]:visible");
    assert.equal(await visible.count(),expected,
      "Unexpected matching count for "+JSON.stringify(str)+" at "+viewport.width);
    return visible;
   };
   await open("sgk/");
   const field=page.locator("[data-thpt-filter-input]");
   assert.equal(await field.count(),1,"SGK search must be unique");
   assert((await field.getAttribute("placeholder")).includes("bài 1"),
    "Placeholder must provide an actually supported lesson query");
   assert.equal(await page.locator("[data-thpt-search-only]:visible").count(),0,
    "Direct lesson results must not clutter default chapter index");
   await query("lớp 10",9); // 8 available chapter cards + one clearly marked unpublished ChV
   let result=await query("chương I",1);
   assert((await result.first().getAttribute("href")).endsWith("chuong-i/"));
   result=await query("chương II",1);
   assert((await result.first().getAttribute("href")).endsWith("chuong-ii/"));
   result=await query("lớp 10, chương I",1);
   assert((await result.first().getAttribute("href")).endsWith("chuong-i/"));
   result=await query("bài 1",1);
   assert((await result.first().getAttribute("href")).endsWith("chuong-i/bai-1/"));
   result=await query("lớp 10, chương I, bài 2",1);
   assert((await result.first().getAttribute("href")).endsWith("chuong-i/bai-2/"));
   result=await query("bài 7",1);
   assert((await result.first().getAttribute("href")).endsWith("chuong-iv/bai-7/"));
   result=await query("tọa độ",2);
   const paths=await result.evaluateAll(nodes=>nodes.map(node=>node.getAttribute("href")));
   assert(paths.some(path=>path.endsWith("chuong-vii/")),"Coordinate chapter remains discoverable");
   assert(paths.some(path=>path.endsWith("chuong-iv/bai-10/")),"New coordinate lesson must be discoverable");
   await query("toa do",2);
   result=await query("chương IV, bài 9",1);
   assert((await result.first().getAttribute("href")).endsWith("chuong-iv/bai-9/"));
   result=await query("bài 10",1);
   assert((await result.first().getAttribute("href")).endsWith("chuong-iv/bai-10/"));
   result=await query("bài 11",1);
   assert((await result.first().getAttribute("href")).endsWith("chuong-iv/bai-11/"));
   await query("chương V, bài 12",0); // ChV B12 is not yet published
   result=await query("lớp 11",1);
   assert((await result.first().innerText()).includes("Chưa phát hành"));
   await query("xyz-khong-co",0);
   await field.fill("");
   assert.equal(await page.locator("[data-thpt-search-only]:visible").count(),0);
   await open("chuyen-de/");
   const topic=await query("chuyên đề 1",1);
   assert((await topic.first().getAttribute("href")).endsWith("ham-so/kien-thuc/"));
   await query("chuyen de 01",1);
   await query("hàm số",1);
   await query("ham so",1);
   await query("đại số",1);
   await query("chuyên đề 2",0);
   await query("đạo hàm",0); // Not published: placeholder must not imply otherwise
   assert.equal(await page.locator("[data-thpt-filter-input]").count(),1);
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
   assert(overflow<=20,"Search UI overflow at "+viewport.width);
   await page.close();
  }
  const thcs=await browser.newPage({viewport:{width:390,height:844}});
  await thcs.goto("http://127.0.0.1:8765/kien-thuc/",{waitUntil:"networkidle"});
  assert.equal(await thcs.locator(".library-search").count(),1,
   "THCS Golden search must remain unchanged");
  assert.equal(await thcs.locator("[data-thpt-filter-input]").count(),0,
   "THPT search must not leak into THCS");
  await thcs.close();
  console.log("PASS G10 SGK class/chapter/lesson + Topic search desktop/iPad/phone, published-only links and THCS isolation");
 }finally{await browser.close()}
})().catch(error=>{console.error("FAIL THPT search browser",error);process.exit(1)});
