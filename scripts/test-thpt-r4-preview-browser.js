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

  // R4 golden UI interaction gates: local navigation, launcher, search, shared Core identity.
  await page.locator("#thpt-written-search").fill("");
  await page.locator("#thpt-written-kind").selectOption("anchor");
  assert(await page.locator("#bai-mo-neo-demo").isVisible(),"Written anchor type filter failed");
  assert(await page.locator("#tu-luan-thuong-demo").isHidden(),"Written normal item must be hidden with anchor filter");
  await page.locator("#thpt-written-kind").selectOption("normal");
  assert(await page.locator("#tu-luan-thuong-demo").isVisible(),"Written normal filter failed");
  assert(await page.locator("#bai-mo-neo-demo").isHidden(),"Written anchor must be hidden with normal filter");

  await ready(page,"home/");
  await page.locator("[data-thpt-r4-launcher]").click();
  const dialog=page.locator("[data-thpt-r4-shortcut-dialog]");
  assert(await dialog.isVisible(),"THPT quick navigation dialog did not open");
  const mainLinks=dialog.locator('nav[aria-label="Năm lối tắt chính Toán THPT"] a');
  assert((await mainLinks.count())===5,"THPT launcher must have precisely five fixed destinations");
  const expected=["Trang chủ","Học theo SGK","Chuyên đề","Thư viện bài tập","Tiến độ học tập"];
  assert.deepEqual((await mainLinks.allTextContents()).map(x=>x.trim()),expected,"THPT launcher group order differs from R4 contract");
  assert((await dialog.locator('nav[aria-label="Các chuyên đề mẫu THPT"] a').count())===1,"THPT pilot must have one sample topic");
  for(const a of await mainLinks.all()){
   const href=await a.getAttribute("href");
   assert(href?.startsWith("/thpt-preview/"),"THPT launcher left its own section: "+href);
  }
  await dialog.getByRole("button",{name:"Đóng"}).click();
  assert(!(await dialog.isVisible()),"THPT launcher cannot close");

  await ready(page,"sgk/");
  const sgkSearch=page.locator("#thpt-chapter-search");
  await sgkSearch.fill("hàm số");
  assert(await page.locator('a.library-topic-tile[href="chuong-vi/"]').isVisible(),"SGK search did not retain B16 Chapter VI result");
  await sgkSearch.fill("zzz_chuong_khong_ton_tai");
  assert(await page.locator('a.library-topic-tile[href="chuong-vi/"]').isHidden(),"SGK search did not hide unmatched chapter");
  await sgkSearch.fill("");
  assert(await page.locator('a.library-topic-tile[href="chuong-vi/"]').isVisible(),"SGK search did not restore chapter after reset");

  await ready(page,"chuyen-de/");
  const topicSearch=page.locator("#thpt-topic-search");
  await topicSearch.fill("hàm số");
  assert(await page.locator('a.library-topic-tile[href="ham-so/kien-thuc/"]').isVisible(),"Topic search did not retain sample");
  await topicSearch.fill("zzz_khong_co_chuyen_de");
  assert(await page.locator('a.library-topic-tile[href="ham-so/kien-thuc/"]').isHidden(),"Topic search did not filter sample");
  await topicSearch.fill("");
  assert(await page.locator('a.library-topic-tile[href="ham-so/kien-thuc/"]').isVisible(),"Topic search did not restore sample");

  function canonical(href,currentUrl){
   return new URL(href,currentUrl).pathname.replace(/index\\.html$/,"").replace(/\\/$/,"");
  }
  const expectedCore="/thpt-preview/chuyen-de/ham-so/core";
  await ready(page,"sgk/core/");
  const coreLibraryHref=await page.locator("a.math-library-entry").first().getAttribute("href");
  assert.equal(canonical(coreLibraryHref,page.url()),expectedCore,"SGK Core library links to different Core identity");
  await ready(page,"sgk/chuong-vi/bai-16/");
  const lessonCoreHref=await page.locator("a.math-library-entry").first().getAttribute("href");
  assert.equal(canonical(lessonCoreHref,page.url()),expectedCore,"SGK B16 points to duplicated Core");
  await ready(page,"chuyen-de/ham-so/core/");
  assert((await page.locator('[data-thpt-core] .thpt-r4-eyebrow').textContent()).includes("THPT-CORE-QF01"),"Canonical Core ID mismatch");

  await ready(page,"chuyen-de/ham-so/kien-thuc/");
  assert((await page.locator("article").textContent()).includes("PILOT_PARTIAL_G10"),"Partial-topic status not visible");

  await page.close();
  console.log("PASS THPT R4 Chromium viewport + Core/Practice/Readiness/Written smoke test (synthetic demo; not academic review or physical-device approval)");
 }finally{await browser.close();}
})().catch(e=>{console.error("FAIL THPT R4 browser smoke",e);process.exit(1)});
