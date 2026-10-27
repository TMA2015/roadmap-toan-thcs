"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const {chromium}=require("playwright");
const base="http://127.0.0.1:8765/thpt-preview/";
async function ready(page,path){
 const response=await page.goto(base+path,{waitUntil:"networkidle"});
 assert(response&&response.ok(),"Page failed: "+path+" "+response?.status());
 await page.locator(".md-header").waitFor({state:"visible"});
 const label=page.locator("[data-thpt-r4-launcher]");
 await label.waitFor({state:"visible"});
 assert((await label.textContent()).includes("5 + 1"),"THPT 5+1 mẫu absent");
 assert(await page.locator("[data-roadmap-topic-launcher]").isHidden(),"THCS 7+25 visible on THPT");
}
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  fs.mkdirSync("thpt-r4-visual-qa",{recursive:true});
  for(const [name,viewport,path] of [
   ["desktop",{width:1440,height:900},"home/"],
   ["iphone",{width:390,height:844},"sgk/chuong-vi/bai-16/"],
   ["ipad",{width:820,height:1180},"chuyen-de/ham-so/kien-thuc/"]
  ]){
   const page=await browser.newPage({viewport,deviceScaleFactor:1});
   await ready(page,path);
   if(name==="iphone"){
    assert((await page.locator("[data-thpt-quadratic-plot] svg path").count())>0,"Derived parabola not drawn");
    assert((await page.locator("[data-thpt-quadratic-plot] svg circle").count())===4,"Vertex, two Ox crossings and Oy crossing missing");
    assert((await page.locator("[data-thpt-symmetry-axis=\"x=2\"][stroke-dasharray]").count())===1,"Dashed axis x=2 missing");
    const plotText=await page.locator("[data-thpt-quadratic-plot] svg").textContent();
    assert(plotText.includes("I(2;−1)")&&plotText.includes("(0;3)")&&plotText.includes("x = 2"),"Key graph annotations missing");
    const lessonText=await page.locator("article").textContent();
    assert(lessonText.includes("Bốn bước vẽ đồ thị parabol"),"Four plotting steps missing");
    assert(lessonText.includes("Bảng biến thiên và tập giá trị tổng quát"),"General range table missing");
   }
   const width=await page.evaluate(()=>({page:document.documentElement.scrollWidth,window:window.innerWidth}));
   assert(width.page<=width.window+20,name+" unexpected horizontal overflow "+JSON.stringify(width));
   await page.screenshot({path:"thpt-r4-visual-qa/"+name+".png",fullPage:true});
   await page.close();
  }
  const page=await browser.newPage({viewport:{width:390,height:844}});
  await ready(page,"chuyen-de/ham-so/core/");
  await page.locator('[data-thpt-core] input[value="-3"]').check();
  await page.locator('[data-thpt-core] button[type="submit"]').click();
  assert((await page.locator('[data-thpt-core] [data-thpt-feedback]').textContent()).startsWith("Đúng."),"Core did not grade after Check");
  await ready(page,"chuyen-de/ham-so/luyen-tap/");
  await page.locator('[data-thpt-practice] input[value="1,3"]').check();
  await page.locator('[data-thpt-practice] button[type="submit"]').click();
  assert((await page.locator('[data-thpt-practice] [data-thpt-feedback]').textContent()).startsWith("Đúng."),"Practice did not grade after Check");
  await ready(page,"chuyen-de/ham-so/tu-kiem-tra/");
  assert((await page.locator("[data-thpt-readiness]").getAttribute("data-demo-scope"))==="TECHNICAL_DEMO_ONLY","Explicit readiness demo-scope missing");
  assert((await page.locator("[data-thpt-readiness]").getAttribute("data-mastery-credit"))==="false","Readiness could grant mastery credit");
  assert(await page.locator('[data-thpt-readiness] [data-thpt-solution]').isHidden(),"Readiness leaked answers before submission");
  await page.locator('[data-thpt-readiness] input[value="1"]').check();
  await page.locator('[data-thpt-next]').click();
  await page.locator('[data-thpt-readiness] input[value="2"]').check();
  assert(await page.locator('[data-thpt-readiness] [data-thpt-solution]').isHidden(),"Readiness leaked after Next");
  await page.locator('[data-thpt-previous]').click();
  await page.locator('[data-thpt-readiness] input[value="0"]').check();
  assert(!(await page.locator('[data-thpt-readiness] [data-thpt-feedback]').textContent()).includes("Đúng"),"Readiness leaked after correction");
  await page.locator('[data-thpt-final]').click();
  assert((await page.locator('[data-thpt-readiness] [data-thpt-feedback]').textContent()).includes("1 / 2"),"Readiness final grade incorrect");
  assert(await page.locator('[data-thpt-readiness] [data-thpt-solution]').isVisible(),"Readiness did not reveal after submit");
  await ready(page,"thu-vien/tu-luan/");
  await page.locator('#thpt-written-search').fill("diện tích");
  assert(await page.locator("#bai-mo-neo-demo").isVisible(),"Written anchor filter missing");
  assert(await page.locator("#tu-luan-thuong-demo").isHidden(),"Written filter not applied");
  await page.close();
  console.log("PASS THPT R4 Chromium viewport + Core/Practice/Readiness/Written smoke test (synthetic demo; not academic review or physical-device approval)");
 }finally{await browser.close();}
})().catch(e=>{console.error("FAIL THPT R4 browser smoke",e);process.exit(1)});
