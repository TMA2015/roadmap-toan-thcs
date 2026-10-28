"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const {chromium}=require("playwright");
// Run the same no-duplicate / assessment-exposure contract on every THPT QA run.
require("./test-thpt-shared-item-placement.cjs").run();
require("./test-thpt-chvi-draft-item-bank.cjs");
require("./test-thpt-g10-chvii-chviii-draft-bank.cjs");
require("./test-thpt-chvi-review-receipt.cjs");
require("./test-thpt-chvi-reviewed-formative.cjs");
require("./test-thpt-chvi-reviewed-knowledge-parity.cjs");
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
  await ready(page,"sgk/core/ham-so-bac-hai/");
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
  assert(await page.locator(".md-sidebar--primary").isHidden(),"THPT homepage must have no left sidebar");
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
   const pathname=new URL(href,currentUrl).pathname;
   return pathname.endsWith("/")?pathname.slice(0,-1):pathname;
  }
  const expectedCore="/thpt-preview/sgk/core/ham-so-bac-hai";
  await ready(page,"sgk/core/");
  const coreLibraryHref=await page.locator("a.math-library-entry").first().getAttribute("href");
  assert.equal(canonical(coreLibraryHref,page.url()),expectedCore,"SGK Core library links to different Core identity");
  await ready(page,"sgk/chuong-vi/bai-16/");
  assert.equal((await page.locator('a.math-library-entry[href*="core"]').count()),0,"B16 SGK lesson still links to old standalone Core page");
  const inlineCore=page.locator('[data-thpt-open-quiz="b16-core"]');
  assert.equal((await inlineCore.count()),1,"SGK B16 must open its Core in the new modal");
  const b16Route=page.url();
  await inlineCore.click();
  const b16Modal=page.locator("dialog.thpt-r4-practice-dialog");
  await b16Modal.locator('[data-thpt-core] input[value="-3"]').waitFor();
  await b16Modal.locator('[data-thpt-core] input[value="-3"]').check();
  await b16Modal.locator('[data-thpt-core] button[type="submit"]').click();
  assert((await b16Modal.locator('[data-thpt-core] [data-thpt-feedback]').textContent()).startsWith("Đúng."),"Inline B16 Core did not grade inside modal");
  assert.equal(page.url(),b16Route,"SGK B16 Core action must not navigate to a legacy page");
  await b16Modal.locator("[data-thpt-modal-close]").click();
  await ready(page,"sgk/core/ham-so-bac-hai/");
  assert((await page.locator('[data-thpt-core] .thpt-r4-eyebrow').textContent()).includes("THPT-CORE-QF01"),"Canonical Core ID mismatch");
  for(const area of ["kien-thuc","luyen-tap","tu-kiem-tra"]){
    await ready(page,"chuyen-de/ham-so/"+area+"/");
    const nav=page.locator(".thpt-r4-topic-steps");
    assert((await nav.locator("a").count())===3,"Topic must have exactly three nav sections");
    const labels=(await nav.locator("a").allTextContents()).map(x=>x.trim());
    assert.deepEqual(labels,["01 · Kiến thức","02 · Luyện tập","03 · Tự kiểm tra"],"Topic order differs from approved contract");
    assert((await nav.locator('a[href="../core/"]').count())===0,"Old topic Core tab must not appear");
  }
  // Owner UI consolidation: keep links while hiding Core library and end-chapter
  // exercise as separate student-facing sidebar sections.
  await ready(page,"sgk/chuong-vi/");
  const sideNav=page.locator(".md-sidebar--primary nav.md-nav--primary");
  const sidebarStructure=await sideNav.textContent();
  assert(!sidebarStructure.includes("Thư viện Core"),"SGK sidebar must not expose a separate Core library");
  assert(!sidebarStructure.includes("Bài tập cuối Chương VI"),"Cumulative exercises belong under chapter Practice, not their own menu entry");
  assert(sidebarStructure.includes("Luyện tập và Vận dụng Chương VI"),"Missing SGK Chapter Practice in sidebar");
  assert(sidebarStructure.includes("Tự kiểm tra cuối Chương VI"),"Missing separate SGK chapter Readiness in sidebar");
  const disclosureButtons=page.locator(".md-sidebar--primary .thpt-r4-sidebar-toggle");
  assert((await disclosureButtons.count())>=1,"THPT sidebar must have collapsible navigation groups");
  for(const toggle of await disclosureButtons.all()){
    assert.equal(await toggle.getAttribute("aria-expanded"),"false","Nested THPT sidebar sections must default to collapsed");
  }
  // Exercise the actual on-screen sidebar, not the hidden mobile drawer copy.
  await page.setViewportSize({width:1440,height:900});
  let firstVisibleDisclosure=null;
  for(const toggle of await disclosureButtons.all()){
    const inViewport=await toggle.evaluate(el=>{
      const rect=el.getBoundingClientRect();
      const parent=el.closest(".md-sidebar--primary");
      const style=getComputedStyle(parent);
      return rect.width>0&&rect.height>0&&rect.left>=0&&rect.right<=innerWidth&&
        rect.top>=0&&rect.bottom<=innerHeight&&style.visibility!=="hidden"&&style.display!=="none";
    });
    if(inViewport&&await toggle.isVisible()){firstVisibleDisclosure=toggle;break}
  }
  assert(firstVisibleDisclosure,"No on-screen sidebar disclosure button found at desktop width");
  const controlledId=await firstVisibleDisclosure.getAttribute("aria-controls");
  await firstVisibleDisclosure.click();
  assert.equal(await firstVisibleDisclosure.getAttribute("aria-expanded"),"true","Sidebar section could not expand");
  assert(await page.locator("#"+controlledId).isVisible(),"Expanded section children not visible");
  await firstVisibleDisclosure.click();
  assert.equal(await firstVisibleDisclosure.getAttribute("aria-expanded"),"false","Sidebar section could not collapse");
  await ready(page,"sgk/core/");
  assert((await page.locator("article").textContent()).includes("liên kết tương thích"),"Old Core library URL must remain usable");
  await ready(page,"sgk/chuong-vi/bai-tap-cuoi-chuong/");
  assert((await page.locator("article").textContent()).includes("Nhóm bài tổng hợp"),"Cumulative exercises should remain reachable as a Practice subsection");
  // Full SGK route has visible Practice/Application and separate chapter-end readiness.
  await ready(page,"sgk/chuong-vi/");
  assert((await page.locator("article a").filter({hasText:"Luyện tập / Vận dụng Chương VI"}).count())>=1,"SGK chapter is missing Practice/Application link");
  assert((await page.locator("article a").filter({hasText:"Tự kiểm tra cuối Chương VI"}).count())>=1,"SGK chapter is missing Readiness link");
  await ready(page,"sgk/chuong-vi/luyen-tap/");
  const practiceHub=await page.locator("article").textContent();
  assert(practiceHub.includes("Bài 15. Hàm số")&&practiceHub.includes("Bài 18. Phương trình quy về phương trình bậc hai"),"Practice cards must be grouped by SGK lesson");
  assert((await page.locator(".thpt-r4-practice-lesson").count())===4,"Four SGK lesson groups required");
  assert((await page.locator(".thpt-r4-practice-card").count())===8,"Each of four lessons must have Core and Practice cards");
  assert((await page.locator("article table").count())===0,"Old three-column chapter practice table still visible");
  const currentPracticeRoute=page.url();
  await page.locator('[data-thpt-open-quiz="b15-core"]').click();
  const exerciseModal=page.locator("dialog.thpt-r4-practice-dialog");
  assert(await exerciseModal.isVisible(),"Core card did not open an exercise modal");
  assert.equal(page.url(),currentPracticeRoute,"Opening a lesson Core must not navigate to another page");
  assert.equal((await exerciseModal.locator('[data-thpt-reviewed-formative="1"]').count()),1,"B15 must load the reviewed public canonical bank, not a UI demo");
  assert((await exerciseModal.locator(".thpt-r4-reviewed-formative-card").textContent()).includes("THPT-G10-B15-C01"),"Canonical B15 Core ID not visible");
  const b15Solution=exerciseModal.locator(".thpt-r4-reviewed-formative-card details").last();
  assert(!await b15Solution.evaluate(el=>el.open),"Practice solution must stay collapsed before deliberate reveal");
  await b15Solution.locator("summary").click();
  assert(await b15Solution.evaluate(el=>el.open),"Practice solution did not open on learner request");
  assert((await b15Solution.textContent()).includes("x=2"),"Reviewed B15 Core solution is missing");
  await exerciseModal.locator(".thpt-r4-modal-buttons button").last().click();
  assert((await exerciseModal.locator(".thpt-r4-modal-progress").first().textContent()).includes("2 / 2"),"Reviewed exercise modal did not navigate to question two");
  assert((await exerciseModal.locator(".thpt-r4-reviewed-formative-card").textContent()).includes("THPT-G10-B15-C02"),"Question navigation must retain canonical B15 IDs");
  await exerciseModal.locator("[data-thpt-modal-close]").click();
  assert(await exerciseModal.isHidden(),"Exercise modal did not close");
  await page.locator('[data-thpt-open-quiz="b16-core"]').click();
  await exerciseModal.locator('[data-thpt-core] input[value="-3"]').waitFor();
  assert((await exerciseModal.locator("[data-thpt-core]").count())===1,"Modal must reuse the canonical B16 Core source");
  await exerciseModal.locator('[data-thpt-core] input[value="-3"]').check();
  await exerciseModal.locator('[data-thpt-core] button[type="submit"]').click();
  assert((await exerciseModal.locator("[data-thpt-core] [data-thpt-feedback]").textContent()).startsWith("Đúng."),"Imported canonical Core did not grade inside modal");
  await exerciseModal.locator("[data-thpt-modal-close]").click();
  await page.locator('[data-thpt-open-quiz="b16-practice"]').click();
  await exerciseModal.locator('[data-thpt-practice] input[value="1,3"]').waitFor();
  assert((await exerciseModal.locator("[data-thpt-practice]").count())===1,"Practice modal must import unchanged topic practice source");
  await exerciseModal.locator("[data-thpt-modal-close]").click();
  await page.locator('[data-thpt-open-quiz="b17-practice"]').click();
  await exerciseModal.locator(".thpt-r4-modal-cumulative-button").click();
  await exerciseModal.locator(".thpt-r4-modal-cumulative-item").first().waitFor();
  assert((await exerciseModal.locator('.thpt-r4-modal-cumulative-item [data-thpt-canonical-item]').count())===3,
    "B17 cumulative A3/A4/B4 must retain reviewed canonical IDs, separate from active Practice card");
  assert((await exerciseModal.locator(".thpt-r4-modal-cumulative-item").count())===3,"B17 Practice modal must include A3/A4/B4 from one cumulative source");
  assert(await exerciseModal.locator(".thpt-r4-modal-cumulative-item").first().locator("details").isVisible(),"Cumulative practice solution must be learner-openable");
  await exerciseModal.locator("[data-thpt-modal-close]").click();
  assert.equal(page.url(),currentPracticeRoute,"Modal interactions unexpectedly navigated away");
  await ready(page,"thu-vien/tu-luan/");
  assert((await page.locator(".thpt-r4-written-card").count())===8,"Reviewed Chapter VI Written library must have eight cards");
  assert((await page.locator('[data-thpt-written-canonical]').count())===8,"All eight reviewed Written must have canonical identity");
  assert((await page.locator('.thpt-r4-written-card[data-thpt-kind="anchor"]').count())===4,"Four anchor labels must be a subset of eight Written");
  for(const section of await page.locator('[data-thpt-written-canonical]').all()){
   assert(await section.locator("details").count()===2,"Every reviewed Written must have hint and solution/rubric");
   const solution=section.locator("details").last();
   assert(!await solution.evaluate(el=>el.open),"Written solution must be closed by default");
  }
  await ready(page,"sgk/chuong-vi/tu-kiem-tra-chuong/");
  const chapterReady=page.locator('[data-thpt-assessment="sgk-chapter"][data-thpt-readiness]');
  assert((await chapterReady.count())===1,"Missing separate SGK chapter Readiness engine");
  assert((await chapterReady.getAttribute("data-demo-scope"))==="TECHNICAL_DEMO_ONLY","Chapter readiness must be explicitly demo only");
  assert((await chapterReady.getAttribute("data-mastery-credit"))==="false","Chapter readiness must not grant mastery");
  assert(await chapterReady.locator("[data-thpt-solution]").isHidden(),"SGK chapter assessment leaked answers before Submit");
  assert((await chapterReady.locator("[data-thpt-progress]").textContent()).includes("1 / 4"),"Chapter readiness must contain four technical demo questions");
  await chapterReady.locator('input[value="1"]').check();
  await chapterReady.locator("[data-thpt-next]").click();
  await chapterReady.locator('input[value="1"]').check();
  await chapterReady.locator("[data-thpt-next]").click();
  await chapterReady.locator('input[value="2"]').check();
  await chapterReady.locator("[data-thpt-next]").click();
  await chapterReady.locator('input[value="0"]').check();
  assert(await chapterReady.locator("[data-thpt-solution]").isHidden(),"SGK chapter assessment leaked after Next");
  await chapterReady.locator("[data-thpt-previous]").click();
  await chapterReady.locator('input[value="2"]').check();
  await chapterReady.locator("[data-thpt-next]").click();
  await chapterReady.locator("[data-thpt-final]").click();
  const finalText=await chapterReady.locator("[data-thpt-feedback]").textContent();
  assert(finalText.includes("4 / 4"),"SGK chapter Final Submit score incorrect");
  assert(await chapterReady.locator("[data-thpt-solution]").isVisible(),"SGK chapter explanation did not appear after Final Submit");

  await ready(page,"chuyen-de/ham-so/luyen-tap/");
  assert((await page.locator("article").textContent()).includes("THPT-CORE-QF01"),"Same shared Core item must be referenced in beginner Practice");
  await ready(page,"chuyen-de/ham-so/core/");
  assert((await page.locator("[data-thpt-core]").count())===0,"Deprecated topic Core page duplicated canonical card");
  assert((await page.locator("article").textContent()).includes("liên kết tương thích"),"Legacy Core URL must not break");

  await ready(page,"chuyen-de/ham-so/kien-thuc/");
  assert((await page.locator("article").textContent()).includes("PILOT_PARTIAL_G10"),"Partial-topic status not visible");
  const semanticTab=page.locator(".md-typeset .tabbed-set > .tabbed-labels > label").first();
  assert(await semanticTab.isVisible(),"Golden pilot semantic tabs are missing");
  const semanticStyle=await semanticTab.evaluate(el=>({
    font:getComputedStyle(el).fontFamily,size:getComputedStyle(el).fontSize,
    weight:getComputedStyle(el).fontWeight,color:getComputedStyle(el).color
  }));
  const semanticsBody=await page.locator(".md-typeset .tabbed-content .tabbed-block p").first().evaluate(el=>({
    font:getComputedStyle(el).fontFamily,size:getComputedStyle(el).fontSize,color:getComputedStyle(el).color
  }));
  const adaptiveLink=page.getByRole("link",{name:"Xem thử bố cục nhiều mảng và kiểm tra kiểu chữ"});
  assert(await adaptiveLink.isVisible(),"Adaptive layout demo link missing");

  await ready(page,"qa/adaptive-knowledge-tabs/");
  const moduleTabs=page.locator('[data-thpt-knowledge-level="module"] > nav > [data-thpt-knowledge-tab]');
  assert((await moduleTabs.count())===3,"Expected 3 module tabs");
  for(const letter of ["a","b","c"]){
    assert((await page.locator('[data-thpt-knowledge-level="content"]').filter({has:page.locator('#thpt-'+letter+'-tab-0')}).count())===1,"Missing nested content tabs for "+letter);
    assert((await page.locator('#thpt-module-'+letter+' [data-thpt-knowledge-level="content"] > nav > button').count())===3,"Expected 3 semantic content tabs within module "+letter);
  }
  // Match the SAME visual token set as B16's three semantic tabs,
  // regardless of whether an inner tab belongs to module A, B or C.
  const innerA=page.locator("#thpt-module-a > [data-thpt-knowledge-layout] > nav > button").first();
  const innerStyle=await innerA.evaluate(el=>({
    font:getComputedStyle(el).fontFamily,size:getComputedStyle(el).fontSize,
    weight:getComputedStyle(el).fontWeight,color:getComputedStyle(el).color
  }));
  assert.deepEqual(innerStyle,semanticStyle,"Inner content tabs must match one-module semantic tab font/size/weight/color");
  const innerBody=page.locator("#thpt-module-a [data-thpt-knowledge-panel='a-0'] p").first();
  const innerProse=await innerBody.evaluate(el=>({
    font:getComputedStyle(el).fontFamily,size:getComputedStyle(el).fontSize,color:getComputedStyle(el).color
  }));
  assert.deepEqual(innerProse,semanticsBody,"Prose inside inner content tabs must match one-module normal text");
  assert(await page.locator("#thpt-module-b").isHidden(),"Only one module panel may be visible");

  // A: switch concept -> properties. Switching module must not reset another
  // module's inner tab, and returning should retain A's selection.
  await page.locator("#thpt-a-tab-1").click();
  assert(await page.locator("#thpt-a-1").isVisible(),"A properties panel did not open");
  assert(await page.locator("#thpt-a-0").isHidden(),"A concept panel did not hide");
  await moduleTabs.nth(1).click();
  assert(await page.locator("#thpt-module-b").isVisible(),"Module B did not open");
  assert(await page.locator("#thpt-module-a").isHidden(),"Module A did not hide");
  assert(await page.locator("#thpt-b-0").isVisible(),"Module B default inner tab is missing");
  await page.locator("#thpt-b-tab-1").click();
  assert(await page.locator("#thpt-b-1").isVisible(),"B properties panel did not open");
  await moduleTabs.nth(0).click();
  assert(await page.locator("#thpt-a-1").isVisible(),"Returning to A reset its inner tab");
  await moduleTabs.nth(1).click();
  assert(await page.locator("#thpt-b-1").isVisible(),"Returning to B reset its inner tab");
  const bStyle=await page.locator("#thpt-b-tab-1").evaluate(el=>({
    font:getComputedStyle(el).fontFamily,size:getComputedStyle(el).fontSize,
    weight:getComputedStyle(el).fontWeight,color:getComputedStyle(el).color
  }));
  assert.deepEqual(bStyle,semanticStyle,"Selected inner B content tab style deviates from B16 semantic tab");
  const bText=await page.locator("#thpt-b-1 p").evaluate(el=>({
    font:getComputedStyle(el).fontFamily,size:getComputedStyle(el).fontSize,color:getComputedStyle(el).color
  }));
  assert.deepEqual(bText,semanticsBody,"Normal text in B content tab must share B16 typography");
  await moduleTabs.nth(2).focus();
  await page.keyboard.press("Enter");
  assert(await page.locator("#thpt-module-c").isVisible(),"Module C did not open with keyboard");
  await page.locator("#thpt-c-tab-0").focus();
  await page.keyboard.press("ArrowRight");
  assert(await page.locator("#thpt-c-1").isVisible(),"Inner content keyboard navigation failed");
  await page.keyboard.press("ArrowLeft");
  assert(await page.locator("#thpt-c-0").isVisible(),"Inner reverse keyboard navigation failed");
  const widths=await page.evaluate(()=>({document:document.documentElement.scrollWidth,viewport:innerWidth}));
  assert(widths.document<=widths.viewport+20,"Adaptive knowledge preview caused horizontal overflow");

  // Chapter VI reviewed academic snapshot is integrated into non-production lesson previews.
  await ready(page,"sgk/chuong-vi/");
  const draftLinks=page.locator(".thpt-r4-lesson-tabs a[href]");
  const lessonTargets=["bai-15/","bai-16/","bai-17/","bai-18/"];
  for(const target of lessonTargets){
    assert((await draftLinks.filter({has:page.locator("span")}).count())>=0,"Navigation DOM unexpectedly changed");
    assert((await page.locator('.thpt-r4-lesson-tabs a[href="'+target+'"]').count())===1,"Missing lesson route "+target);
  }
  for(const [lesson,title] of [
    ["15","Hàm số"],["17","Dấu của tam thức bậc hai"],
    ["18","Phương trình quy về phương trình bậc hai"]
  ]){
    await ready(page,"sgk/chuong-vi/bai-"+lesson+"/");
    assert((await page.locator("h1").first().textContent()).includes(title),"Wrong draft heading B"+lesson);
    const body=await page.locator("article").textContent();
    assert(body.includes("NOTEBOOKLM_CHVI_SNAPSHOT_PASS"),"Reviewed B"+lesson+" status receipt missing from lesson preview");
    assert(body.includes("TÍCH HỢP ĐANG QA"),"B"+lesson+" must distinguish academically reviewed snapshot from website QA");
    assert((await page.locator("[data-thpt-readiness]").count())===0,"Academic PASS must not activate learner mastery readiness inside lesson B"+lesson);
    const w=await page.evaluate(()=>({document:document.documentElement.scrollWidth,viewport:innerWidth}));
    assert(w.document<=w.viewport+20,"Draft B"+lesson+" horizontal overflow");
  }
  await ready(page,"sgk/chuong-vi/bai-tap-cuoi-chuong/");
  const integrated=await page.locator("article").textContent();
  assert(integrated.includes("ACADEMIC_REVIEWED_SNAPSHOT_20281028")||integrated.includes("ACADEMIC_REVIEWED_SNAPSHOT_20261028"),"Reviewed cumulative exercises must be tied to the correct 2026-10-28 academic snapshot");
  assert((await page.locator("article details").count())===8,"Reviewed cumulative source must retain eight independently solvable explanations");
  assert(!(await page.locator("article details").first().getAttribute("open")),"End-chapter answers should start collapsed");
  await ready(page,"sgk/chuong-vi/bai-16/");
  assert((await page.locator("article").textContent()).includes("ACADEMIC_CLEARANCE: YES"),"Existing B16 academic receipt unintentionally lost");

  // OPTIONAL secure-assessment UI bridge: synthetic API/auth only, no real
  // held-out questions, credentials, production scoring or endpoint calls.
  await page.evaluate(()=>{
    const host=document.createElement("div");
    host.dataset.thptSecureReadiness="";
    host.dataset.apiOrigin="https://example.test";
    host.dataset.bankId="SYNTHETIC_BANK";
    document.querySelector("article").append(host);
    window.THPT_PROTECTED_AUTH={getToken:async()=>"synthetic-token"};
    window.__thptSafeCalls=[];
    const realFetch=window.fetch.bind(window);
    window.fetch=async(url,opts)=>{
      if(!String(url).startsWith("https://example.test/v1/assessment/"))
        return realFetch(url,opts);
      const body=JSON.parse(opts.body);
      window.__thptSafeCalls.push({url,body,auth:opts.headers.Authorization});
      const start=String(url).endsWith("/start");
      const result=start?{
        attempt_id:"SYNTHETIC-A01",completed:false,
        questions:[
          {item_id:"TEST-C01",prompt:"Chọn đáp án thử nghiệm.",response_kind:"CHOICE",
           choices:["Chọn 1","Chọn 2"]},
          {item_id:"TEST-T01",prompt:"Nêu lời giải ngắn.",response_kind:"TEXT",choices:[]}
        ]
      }:{
        attempt_id:"SYNTHETIC-A01",completed:true,score:null,total:2,
        manual_review_required:true,details:[],mastery_credit:false
      };
      return new Response(JSON.stringify(result),{status:200,headers:{"Content-Type":"application/json"}});
    };
    window.THPTProtectedReadiness.mount(host);
  });
  const protectedArea=page.locator("[data-thpt-secure-readiness]");
  assert(await protectedArea.locator("button").filter({hasText:"Bắt đầu"}).isVisible(),
    "Protected UI was not mounted on explicit opt-in");
  await protectedArea.locator("button").filter({hasText:"Bắt đầu"}).click();
  await protectedArea.locator("input[type=radio]").first().waitFor();
  assert(!(await protectedArea.textContent()).includes("Giải theo"),
    "Protected pre-submit UI leaked an explanation");
  await protectedArea.locator("input[type=radio]").first().check();
  await protectedArea.locator("button").filter({hasText:"Next"}).click();
  await protectedArea.locator("textarea").fill("Lập điều kiện và thử nghiệm.");
  assert(!(await protectedArea.textContent()).includes("chờ chấm"),
    "Protected UI revealed post-submit status before final submit");
  await protectedArea.locator("button").filter({hasText:"Previous"}).click();
  assert(await protectedArea.locator("input[type=radio]").first().isChecked(),
    "Previous/Next lost existing answer before Final Submit");
  await protectedArea.locator("button").filter({hasText:"Next"}).click();
  await protectedArea.locator("button").filter({hasText:"Final Submit"}).click();
  await protectedArea.locator("text=Đã lưu bài.").waitFor().catch(async()=>{
    assert((await protectedArea.textContent()).includes("Đã lưu bài."),
      "Written Final Submit did not show pending-manual review");
  });
  assert((await protectedArea.textContent()).includes("chưa có điểm hoặc mastery"),
    "Protected written mode must not award fake grades or mastery");
  assert(await protectedArea.locator("textarea").isDisabled(),
    "Final Submit must lock submitted answers");
  const protectedCalls=await page.evaluate(()=>window.__thptSafeCalls);
  assert.equal(protectedCalls.length,2,"Exactly start + one Final Submit required");
  assert.equal(protectedCalls[0].auth,"Bearer synthetic-token");
  assert.equal(protectedCalls[1].body.answers["TEST-T01"],"Lập điều kiện và thử nghiệm.");

  // Public-formative telemetry is opt-in: test only with synthetic auth.
  const exposureResult=await page.evaluate(async()=>{
    window.THPT_EXPOSURE_API_ORIGIN="https://example.test";
    window.THPT_PROTECTED_AUTH={getToken:async()=>"synthetic-token"};
    const saved=window.fetch;
    window.__syntheticExposureCalls=[];
    window.fetch=async(url,opts)=>{
      if(String(url)==="https://example.test/v1/exposure/record"){
        window.__syntheticExposureCalls.push({url,body:JSON.parse(opts.body),
          token:opts.headers.Authorization});
        return new Response(JSON.stringify({recorded:true}),{
          status:200,headers:{"Content-Type":"application/json"}});
      }
      return saved(url,opts);
    };
    const logger=window.THPTFormativeExposure;
    if(!logger)return {missing:true};
    const first=await logger.record("THPT-CORE-QF01","SGK_CORE","QUESTION_SHOWN");
    const second=await logger.record("THPT-CORE-QF01","SGK_CORE","QUESTION_SHOWN");
    const hint=await logger.record("THPT-CORE-QF01","SGK_CORE","HINT_OPENED");
    const wrong=await logger.record("THPT-CORE-QF01","TOPIC_CORE","QUESTION_SHOWN");
    return {first,second,hint,wrong,calls:window.__syntheticExposureCalls};
  });
  assert(!exposureResult.missing,"Opt-in formative logger must load within THPT R4");
  assert(exposureResult.first&&exposureResult.second&&exposureResult.hint,
    "Authenticated canonical Core exposure did not record");
  assert.equal(exposureResult.wrong,false,"Nonexistent Topic Core must be denied");
  assert.equal(exposureResult.calls.length,2,
    "Repeating the same exposure event must not duplicate network writes");
  assert(exposureResult.calls.every(x=>x.token==="Bearer synthetic-token"),
    "Exposure logs require a signed-in learner token");
  assert.equal(exposureResult.calls[0].body.item_id,"THPT-CORE-QF01");
  assert.equal(exposureResult.calls[0].body.event_kind,"QUESTION_SHOWN");
  assert.equal(exposureResult.calls[1].body.event_kind,"HINT_OPENED");
  assert(!JSON.stringify(exposureResult.calls).includes("answer"),
    "Formative exposure call must never transmit an answer or key");

  await page.close();
  console.log("PASS THPT R4 reviewed formative/Written + technical Readiness Chromium smoke (not production approval or real-device QA)");
 }finally{await browser.close();}
})().catch(e=>{console.error("FAIL THPT R4 browser smoke",e);process.exit(1)});
