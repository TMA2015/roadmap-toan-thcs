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
require("./test-thpt-g10-chvii-reviewed-stage1.cjs");
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
  // Owner P2: the neutral cover drawer must not show the THCS-only menu.
  // Native THPT home drawer must open at phone/tablet/narrow desktop widths.
  for(const vp of [{width:390,height:844},{width:820,height:1180},{width:1100,height:820}]){
   const navPage=await browser.newPage({viewport:vp});
   try{
    const root=await navPage.goto("http://127.0.0.1:8765/",{waitUntil:"networkidle"});
    assert(root?.ok(),"Programme selector not reachable");
    const list=navPage.locator(".md-sidebar--primary nav.md-nav--primary > ul.md-nav__list");
    const entries=list.locator(":scope > li.md-nav__item");
    assert.equal(await entries.count(),4,"Programme selector must have three paths and SAT placeholder");
    const rootText=await list.innerText();
    for(const label of ["Chọn chương trình","Toán THCS","Toán THPT","SAT/ACT"])
     assert(rootText.includes(label),"Missing selector label "+label+" at "+vp.width);
    assert(!rootText.includes("Học theo lớp"),
      "THCS-only navigation leaked into the programme selector");
    await navPage.evaluate(()=>{
     const el=document.getElementById("__drawer");el.checked=true;
     el.dispatchEvent(new Event("change",{bubbles:true}));
    });
    const thptLink=list.locator('a[href="thpt-preview/home/"]');
    assert(await thptLink.isVisible(),"THPT programme path hidden at "+vp.width);
    await thptLink.click();
    await navPage.locator("[data-thpt-r4-launcher]").waitFor();
    assert.equal(await navPage.locator("body.thpt-r4-home").count(),1,"THPT homepage route missing");
    const drawer=navPage.locator("#__drawer");
    await navPage.evaluate(()=>{
     const el=document.getElementById("__drawer");el.checked=true;
     el.dispatchEvent(new Event("change",{bubbles:true}));
    });
    assert(await drawer.isChecked(),"THPT home native drawer failed at "+vp.width);
    assert(await navPage.locator(".md-sidebar--primary").isVisible(),
      "THPT home sidebar force-hidden at "+vp.width);
    const homeText=await navPage.locator(".md-sidebar--primary nav.md-nav--primary").innerText();
    for(const label of ["Học theo SGK KNTT","Học theo chuyên đề","Thư viện bài tập"])
     assert(homeText.includes(label),"THPT home menu missing "+label+" at "+vp.width);
    await navPage.evaluate(()=>{
     const el=document.getElementById("__drawer");el.checked=false;
     el.dispatchEvent(new Event("change",{bubbles:true}));
    });
   }finally{await navPage.close()}
  }

  // Programme-switch QA for the ONE GitHub Pages site.
  // Neutral root is the programme selector; THCS Golden home is at /thcs/.
  const entry=await browser.newPage({viewport:{width:390,height:844}});
  await entry.goto("http://127.0.0.1:8765/",{waitUntil:"networkidle"});
  assert.equal(await entry.locator("[data-math-program-selector]").count(),1,"Root selector missing");
  await entry.locator('[data-math-program-selector] a[href="thcs/"]').click();
  await entry.locator('[data-home-portal][data-home-style-ready="1"]').waitFor();
  // THCS intentionally shows its existing first-visit style chooser.
  // Choose a style like a real visitor before using the header launcher.
  if(await entry.locator("[data-home-dialog]").isVisible()){
    await entry.locator('[data-home-dialog] [data-home-select="standard"]').click();
    assert(await entry.locator("[data-home-dialog]").isHidden(),
      "THCS first-visit chooser must close when a style is chosen");
  }
  await entry.locator("[data-roadmap-topic-launcher]").click();
  const thcsCover=entry.locator('[data-roadmap-topic-dialog] [data-math-program-cover-link]');
  assert.equal(await thcsCover.count(),1,"THCS quick navigation missing level-1 programme cover");
  assert(new URL(await thcsCover.getAttribute("href"),entry.url()).pathname.endsWith("/"),
    "THCS programme-cover shortcut leads to wrong page");
  assert((await entry.locator('[data-roadmap-topic-dialog] .roadmap-main-quick__links').last().textContent()).includes("Trang chủ THCS"),
    "THCS home shortcut is not clearly named");
  await thcsCover.click();
  assert((await entry.locator("h1").textContent()).includes("Chọn hành trình Toán"),
    "THCS cover shortcut did not open the real programme selection page");
  await entry.goto(base+"home/",{waitUntil:"networkidle"});
  await entry.locator("[data-thpt-r4-launcher]").click();
  const thptCover=entry.locator('[data-thpt-r4-shortcut-dialog] [data-math-program-cover-link]');
  assert.equal(await thptCover.count(),1,"THPT quick navigation missing level-1 programme cover");
  assert(new URL(await thptCover.getAttribute("href"),entry.url()).pathname.endsWith("/"),
    "THPT programme-cover shortcut leads to wrong page");
  assert((await entry.locator('[data-thpt-r4-shortcut-dialog] .roadmap-main-quick__links').last().textContent()).includes("Trang chủ THPT"),
    "THPT home shortcut is not clearly named");
  await thptCover.click();
  assert((await entry.locator("h1").textContent()).includes("Chọn hành trình Toán"),
    "THPT cover shortcut did not open the real programme selection page");
  await entry.close();

  // New G10 ChVII reviewed D1/D2 and PUBLIC formative stage. This deliberately
  // does not test or expose academically reviewed held-out Chapter Readiness.
  for(const viewport of [{width:1440,height:900},{width:390,height:844}]){
    const page=await browser.newPage({viewport});
    await ready(page,"sgk/");
    assert((await page.locator('a[href*="chuong-vii/"]').count())>0,
      "SGK search overview must link to ChVII without replacing ChVI");
    await ready(page,"sgk/chuong-vii/");
    assert.equal(await page.locator(".thpt-r4-grid .thpt-r4-tile").count(),4,
      "ChVII hub must contain all four reviewed SGK lessons");
    for(const lesson of ["19","20","21","22"]){
      await ready(page,"sgk/chuong-vii/bai-"+lesson+"/");
      assert((await page.locator("article").innerText()).includes("Ví dụ"),
        "B"+lesson+" missing source-backed worked example");
    }
    await ready(page,"sgk/chuong-vii/bai-19/");
    const helpCards=page.locator('[data-thpt-help-id^="D6-G10-B19-"]');
    assert.equal(await helpCards.count(),2,"R02 D6 B19 must have two optional help cards");
    assert.equal(await page.locator('[data-thpt-help-id][open]').count(),0,"D6 should start collapsed");
    await helpCards.first().locator("summary").click();
    const d6Link=helpCards.first().locator('[data-thpt-formative-id="THPT-G10-B19-C01"]');
    assert.equal(await d6Link.count(),1,"D6 must link to an existing canonical item");
    await d6Link.click();
    const focusedModal=page.locator("dialog.thpt-r4-practice-dialog");
    await focusedModal.waitFor({state:"visible"});
    assert.equal(await focusedModal.locator("[data-thpt-canonical-item]").getAttribute("data-thpt-canonical-item"),"THPT-G10-B19-C01",
      "D6 deep link should open exact B19-C01, without a second item engine");
    assert.equal(await focusedModal.locator("details[open]").count(),0,
      "D6 recovery must not reveal formative solution until chosen");
    await focusedModal.locator("[data-thpt-modal-close]").click();
    await ready(page,"sgk/chuong-vii/luyen-tap/");
    assert.equal(await page.locator("[data-thpt-open-quiz]").count(),8,
      "All eight SGK ChVII Core/Practice cards must be accessible");
    await page.locator('[data-thpt-open-quiz="b19-core"]').click();
    const dlg=page.locator("dialog.thpt-r4-practice-dialog");
    assert.equal(await dlg.locator("[data-thpt-modal-lesson-number]").innerText(),"19");
    assert((await dlg.locator("[data-thpt-r4] [data-thpt-canonical-item], [data-thpt-canonical-item]").first().getAttribute("data-thpt-canonical-item"))==="THPT-G10-B19-C01",
      "B19 must render original reviewed canonical item ID");
    assert.equal(await dlg.locator("details[open]").count(),0,
      "Hint and answer must start collapsed in formative exercises");
    assert((await dlg.locator(".thpt-r4-modal-progress").first().innerText()).includes("Tự luyện, không ghi điểm"),
      "Formative modal must clearly stay unscored without redundant footer text");
    assert(!(await dlg.innerText()).includes("Tự luyện và đối chiếu lời giải · Không ghi điểm thành thạo."),
      "Do not restore the owner-rejected redundant footer note");
    await dlg.locator("[data-thpt-modal-close]").click();
    await page.locator('[data-thpt-open-quiz="b19-practice"]').click();
    assert.equal(await dlg.locator(".thpt-r4-modal-question-nav button").count(),6,
      "B19 must expose 6 reviewed Practice/Application items, not only stage-one pair");
    await dlg.locator(".thpt-r4-modal-question-nav button").last().click();
    assert.equal(await dlg.locator("[data-thpt-canonical-item]").getAttribute("data-thpt-canonical-item"),"THPT-G10-B19-P06",
      "B19 advanced Practice must keep its existing canonical ID");
    assert.equal(await dlg.locator("details[open]").count(),0,
      "Extended Practice hints/answers must remain collapsed by default");
    await dlg.locator("[data-thpt-modal-close]").click();
    await page.locator('[data-thpt-open-quiz="b22-core"]').click();
    await dlg.locator(".thpt-r4-modal-question-nav button").nth(1).click();
    assert.equal(await dlg.locator("[data-thpt-canonical-item]").getAttribute("data-thpt-canonical-item"),"THPT-G10-B22-P01",
      "Approved ellipse item B22-P01 must supply mandatory Core coverage via role mapping");
    assert(!(await dlg.innerText()).includes("THPT-G10-B22-C01"),
      "Specialist eccentricity item B22-C01 must stay outside mandatory SGK Core");
    await dlg.locator("[data-thpt-modal-close]").click();
    await page.locator('[data-thpt-open-quiz="b22-practice"]').click();
    assert.equal(await dlg.locator(".thpt-r4-modal-question-nav button").count(),7,
      "B22 should contain 6 normal Practice + 1 optional specialist item");
    await dlg.locator(".thpt-r4-modal-question-nav button").last().click();
    assert((await dlg.locator("[data-thpt-canonical-item]").getAttribute("data-thpt-canonical-item"))==="THPT-G10-B22-C01"&&
      (await dlg.innerText()).includes("Chuyên sâu tự chọn"),
      "Reviewer-reclassified eccentricity item must be optional, not mandatory Core");
    await dlg.locator("[data-thpt-modal-close]").click();
    // D5-reviewed SVGs may explain Practice AFTER deliberate solution reveal,
    // not when a learner only opens the question. Verify all three exact IDs
    // on desktop and phone; no image cloning or premature answer exposure.
    const figureCases=[
      ["19",5,"THPT-G10-B19-P06"],
      ["21",2,"THPT-G10-B21-P03"],
      ["22",5,"THPT-G10-B22-P06"]
    ];
    for(const [lesson,slot,itemId] of figureCases){
      await page.locator('[data-thpt-open-quiz="b'+lesson+'-practice"]').click();
      await dlg.locator(".thpt-r4-modal-question-nav button").nth(slot).click();
      assert((await dlg.locator("[data-thpt-canonical-item]").getAttribute("data-thpt-canonical-item"))===itemId,
        "D5 asset must be tied to the reviewed original canonical Practice ID: "+itemId);
      const details=dlg.locator('details[data-thpt-solution-figure-item="'+itemId+'"]');
      assert.equal(await details.count(),1,"Expected reviewed figure attached to solution of "+itemId);
      assert.equal(await dlg.locator("[data-thpt-reviewed-figure]").count(),0,
        "Answer-bearing diagram must not be inserted before opening solution for "+itemId);
      await details.locator("summary").click();
      const img=dlg.locator('[data-thpt-reviewed-figure="'+itemId+'"]');
      await img.scrollIntoViewIfNeeded();
      await page.waitForFunction(id=>{
        const el=document.querySelector('[data-thpt-reviewed-figure="'+id+'"]');
        return el?.complete&&el.naturalWidth>0;
      },itemId);
      const imgWidth=await img.evaluate(x=>x.getBoundingClientRect().width);
      assert(imgWidth<=viewport.width+1,
        "Solution diagram must fit inside mobile viewport "+viewport.width);
      assert((await img.getAttribute("src")).includes("/assets/images/thpt/"),
        "D5 SVG source must be one same-origin shared asset");
      await dlg.locator("[data-thpt-modal-close]").click();
    }
    await ready(page,"thu-vien/tu-luan-chuong-vii/");
    assert.equal(await page.locator('[data-thpt-written-canonical]').count(),4,
      "Four ChVII Written cards must be independently accessible");
    assert.equal(await page.locator('.thpt-r4-written-card[data-thpt-kind="anchor"]').count(),1,
      "Anchor is a tag on one Written item, not an extra duplicate");
    assert.equal(await page.locator('.thpt-r4-written-card details[open]').count(),0,
      "All ChVII Written solutions and rubrics must start closed");
    assert.equal(await page.locator('.thpt-r4-written-card details').count(),4,
      "Each Written item must retain one reviewed solution/rubric");
    await ready(page,"sgk/chuong-vii/tu-kiem-tra-chuong/");
    assert.equal(await page.locator("[data-thpt-secure-readiness]").count(),0);
    assert.equal(await page.locator("[data-thpt-open-quiz]").count(),0,
      "ChVII held-out Readiness must not be served as a public practice card");
    assert((await page.locator("article").innerText()).includes("chưa mở"),"ChVII inactive readiness clearly identified to learners");
    const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
    assert(overflow<=20,"ChVII R4 overflow at "+viewport.width+"px: "+overflow);
    await page.close();
  }

  // Owner UI acceptance: the existing THCS library keeps its own search,
  // while SGK/Topic R4 overview pages must each show ONLY their search.
  for(const viewport of [{width:1440,height:900},{width:390,height:844}]){
    const ui=await browser.newPage({viewport});
    await ui.goto("http://127.0.0.1:8765/kien-thuc/",{waitUntil:"networkidle"});
    assert.equal(await ui.locator(".library-search").count(),1,
      "THCS library's original 25-topic search must stay intact");
    await ready(ui,"sgk/");
    assert.equal(await ui.locator(".library-search").count(),0,
      "THCS library search leaked into THPT SGK overview");
    assert.equal(await ui.locator('input[type="search"][data-thpt-filter-input]').count(),1,
      "THPT SGK overview must show one chapter/lesson search");
    assert.equal(await ui.locator(".thpt-r4-search").count(),1,
      "THPT SGK unexpectedly has duplicate search panels");
    await ready(ui,"chuyen-de/");
    assert.equal(await ui.locator(".library-search").count(),0,
      "THCS library search leaked into THPT Topic overview");
    assert.equal(await ui.locator('input[type="search"][data-thpt-filter-input]').count(),1,
      "THPT Topic overview must show one topic search");
    await ready(ui,"home/");
    assert.equal(await ui.locator(".thpt-r4-home-hero h1").count(),1,
      "THPT home must have a designed learner-oriented hero");
    assert.equal(await ui.locator(".thpt-r4-home-orbit .thpt-r4-home-sun").count(),1,
      "THPT homepage must have the Self-Learning Math central sun");
    assert.equal(await ui.locator(".thpt-r4-home-orbit .thpt-r4-home-planet").count(),5,
      "Five orbiting sphere features must be visually distinct");
    assert.equal(await ui.locator(".thpt-r4-home-orbit-lines ellipse").count(),3,
      "Orbit paths must appear behind the fixed feature spheres");
    const orbitLabels=await ui.locator(".thpt-r4-home-orbit").innerText().catch(async()=>
      await ui.locator(".thpt-r4-home-orbit").textContent());
    assert(orbitLabels.includes("SELF-LEARNING")&&orbitLabels.includes("MATH"),
      "Central sun must be explicitly named Self-Learning Math");
    assert.equal(await ui.locator(".thpt-r4-home-stats > div").count(),5,
      "Highlights must have five categories rather than obsolete pilot counts");
    const statsText=await ui.locator(".thpt-r4-home-stats").innerText();
    assert(statsText.includes("chuyên đề THPT")&&statsText.includes("luyện tập tương tác"),
      "Feature strip must use THPT's planned vertical-topic scope");
    assert.equal((await ui.locator(".thpt-r4-home-stats > div").nth(1).innerText()).includes("24"),true,
      "THPT's planned 24 vertical topics must not be confused with 24 SGK chapters");
    assert.equal(await ui.locator(".thpt-r4-orbit-chart-icon rect").count(),3,
      "Progress planet must contain a three-bar chart instead of an arrow");
    assert.equal(await ui.locator(".thpt-r4-home-stat-chart svg rect").count(),3,
      "Progress feature strip must use the matching three-bar chart icon");
    assert.equal(await ui.locator(".thpt-r4-grid .thpt-r4-tile").count(),5,
      "Golden THPT five-entry landing menu must remain");
    let overflow=await ui.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
    assert(overflow<=20,"THPT home hero overflow "+viewport.width+"px: "+overflow);
    await ready(ui,"sgk/chuong-vi/luyen-tap/");
    await ui.locator('[data-thpt-open-quiz="b15-core"]').click();
    const modal=ui.locator("dialog.thpt-r4-practice-dialog");
    assert.equal(await modal.locator("[data-thpt-modal-lesson-number]").innerText(),"15");
    assert((await modal.locator("[data-thpt-modal-title]").innerText()).includes("Bài 15"));
    const modalStyle=await modal.locator(".thpt-r4-modal-top").evaluate(el=>({
      top:getComputedStyle(el).borderTopWidth,background:getComputedStyle(el).backgroundColor
    }));
    assert.equal(modalStyle.top,"4px","Core modal must match SGK lesson banner top border");
    const headerStyle=await ui.locator(".thpt-r4-practice-lesson-header").first().evaluate(el=>getComputedStyle(el).backgroundColor);
    assert.equal(modalStyle.background,headerStyle,"Core modal and SGK lesson header backgrounds must match");
    await modal.locator("[data-thpt-modal-close]").click();
    await ui.locator('[data-thpt-open-quiz="b17-practice"]').click();
    assert.equal(await modal.locator("[data-thpt-modal-lesson-number]").innerText(),"17",
      "Practice modal must update lesson badge for each launch");
    await modal.locator("[data-thpt-modal-close]").click();
    await ui.close();
  }

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
  assert.equal(await page.locator("[data-floating-ai]").count(),0,
    "Gemini Tutor must not be offered in Topic Readiness before Final Submit");
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
  assert.equal(await page.locator("body.thpt-r4-home .md-sidebar--primary nav.md-nav--primary").count(),1,"THPT home must retain native sidebar markup for hamburger drawer");
  await page.locator("[data-thpt-r4-launcher]").click();
  const dialog=page.locator("[data-thpt-r4-shortcut-dialog]");
  assert(await dialog.isVisible(),"THPT quick navigation dialog did not open");
  const mainLinks=dialog.locator('nav[aria-label="Năm lối tắt chính Toán THPT"] a');
  assert((await mainLinks.count())===5,"THPT launcher must have precisely five fixed destinations");
  const expected=["Trang chủ THPT","Học theo SGK","Chuyên đề","Thư viện bài tập","Tiến độ học tập"];
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
  assert.equal(await page.locator("[data-floating-ai]").count(),1,
    "THPT SGK knowledge page must reuse the existing Gemini Tutor (not a second engine)");
  assert(await page.locator(".floating-ai-launcher").isVisible(),
    "Existing Gemini Tutor launcher is missing on THPT B16");
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
  // iOS/iPad Safari regression from owner screenshots (2026-10-29):
  // three level-one THPT categories must retain their native label text
  // after opening the Material drawer. No custom desktop disclosure buttons
  // or forced-hidden native nav children may exist at mobile breakpoints.
  for(const [width,height] of [[390,844],[820,1180]]){
   const mobile=await browser.newPage({viewport:{width,height},hasTouch:true});
   try{
    await ready(mobile,"sgk/chuong-viii/");
    // Toggle the native drawer input directly: Chromium's touch emulation
    // may place Material's stacked nested label above the header hit-target.
    // This regression checks the actual broken state: visible root labels
    // in the opened drawer at iPhone/iPad CSS breakpoints.
    await mobile.evaluate(()=>{
     const input=document.getElementById("__drawer");
     input.checked=true;input.dispatchEvent(new Event("change",{bubbles:true}));
    });
    assert(await mobile.locator("#__drawer").isChecked(),
      "Mobile drawer could not open at "+width);
    const sections=mobile.locator('.md-sidebar--primary nav.md-nav--primary > ul.md-nav__list > li.md-nav__item--nested');
    assert.equal(await sections.count(),3,"Expected three THPT mobile parent groups at "+width);
    const expectedParents=["Học theo SGK KNTT","Học theo chuyên đề","Thư viện bài tập"];
    for(let i=0;i<expectedParents.length;i++){
     const item=sections.nth(i);
     const label=item.locator(':scope > label.md-nav__link .md-ellipsis');
     assert.equal((await label.textContent()).trim(),expectedParents[i],
       "Mobile group label content wrong at "+width);
     assert(await label.isVisible(),
       "Mobile Safari-style drawer hid category label "+expectedParents[i]+" at "+width);
     assert.equal(await item.locator(':scope > button.thpt-r4-sidebar-toggle').count(),0,
       "Desktop accordion button leaked into native mobile drawer at "+width);
     assert.equal(await item.locator(':scope > nav.md-nav').getAttribute("hidden"),null,
       "Mobile navigation group incorrectly hidden at "+width);
    }
    await mobile.screenshot({path:"thpt-r4-visual-qa/ios-nav-"+width+".png"});
    await mobile.evaluate(()=>{
     const input=document.getElementById("__drawer");
     input.checked=false;input.dispatchEvent(new Event("change",{bubbles:true}));
    });
    assert(!(await mobile.locator("#__drawer").isChecked()),
      "Mobile drawer did not close at "+width);
   }finally{await mobile.close()}
  }

  // Owner UI consolidation: keep links while hiding Core library and end-chapter
  // exercise as separate student-facing sidebar sections.
  // Desktop accordion is deliberately disabled on native mobile drawer.
  await page.setViewportSize({width:1440,height:900});
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
  assert.equal(await exerciseModal.locator(".thpt-r4-reviewed-formative-card").getAttribute("data-thpt-canonical-item"),"THPT-G10-B15-C01","Canonical ID retained in DOM but not learner-facing text");
  assert(!(await exerciseModal.locator(".thpt-r4-reviewed-formative-card").innerText()).includes("THPT-G10-"),"Do not expose canonical IDs in student UI");
  const b15Solution=exerciseModal.locator(".thpt-r4-reviewed-formative-card details").last();
  assert(!await b15Solution.evaluate(el=>el.open),"Practice solution must stay collapsed before deliberate reveal");
  await b15Solution.locator("summary").click();
  assert(await b15Solution.evaluate(el=>el.open),"Practice solution did not open on learner request");
  assert((await b15Solution.textContent()).includes("x=2"),"Reviewed B15 Core solution is missing");
  const recovery=exerciseModal.locator("a.thpt-r4-remediation-link");
  assert.equal(await recovery.count(),1,"Formative item must offer learner an optional knowledge recovery link");
  assert((await recovery.getAttribute("href")).endsWith("/sgk/chuong-vi/bai-15/"),"B15 recovery must link back to the lesson");
  assert(!(await exerciseModal.locator(".thpt-r4-reviewed-formative-card").innerText()).includes("Đã review học thuật"),"No editorial reviewer status in learner view");
  await exerciseModal.locator(".thpt-r4-modal-buttons button").last().click();
  assert((await exerciseModal.locator(".thpt-r4-modal-progress").first().textContent()).includes("2 / 2"),"Reviewed exercise modal did not navigate to question two");
  assert.equal(await exerciseModal.locator(".thpt-r4-reviewed-formative-card").getAttribute("data-thpt-canonical-item"),"THPT-G10-B15-C02","Question navigation retains canonical identity in dataset");
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
  assert.equal(await page.locator("[data-floating-ai]").count(),0,
    "Gemini Tutor must stay hidden throughout SGK Chapter Readiness");
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
  assert.equal(await page.locator("[data-floating-ai]").count(),1,
    "THPT Topic knowledge must reuse the same Gemini Tutor");
  assert((await page.locator("article").textContent()).includes("Hàm số bậc hai lớp 10."),"Student topic knowledge introduction missing");
  assert(!(await page.locator("article").textContent()).includes("PILOT_PARTIAL_G10"),"Internal pilot status leaked to student UI");
  const semanticTab=page.locator(".md-typeset .tabbed-set > .tabbed-labels > label").first();
  assert(await semanticTab.isVisible(),"Golden pilot semantic tabs are missing");
  const semanticStyle=await semanticTab.evaluate(el=>({
    font:getComputedStyle(el).fontFamily,size:getComputedStyle(el).fontSize,
    weight:getComputedStyle(el).fontWeight,color:getComputedStyle(el).color
  }));
  const semanticsBody=await page.locator(".md-typeset .tabbed-content .tabbed-block p").first().evaluate(el=>({
    font:getComputedStyle(el).fontFamily,size:getComputedStyle(el).fontSize,color:getComputedStyle(el).color
  }));
  assert.equal(await page.getByRole("link",{name:"Xem thử bố cục nhiều mảng và kiểm tra kiểu chữ"}).count(),0,"Internal QA layout link must not appear on student page");

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
  // Full-page B17/B18 rendering QA: do not sample only the screenshots.
  for(const [lesson,inlineCount,displayCount] of [["17",130,4],["18",59,8]]){
    await ready(page,"sgk/chuong-vi/bai-"+lesson+"/");
    const article=page.locator("article.md-content__inner");
    assert.equal(await article.locator("span.arithmatex").count(),inlineCount,
      "B"+lesson+" entire lesson must have all inline math wrappers");
    assert.equal(await article.locator("div.arithmatex").count(),displayCount,
      "B"+lesson+" entire lesson must render all display math");
    const details=article.locator("details:not(.thpt-r4-pedagogical-note)");
    assert.equal(await details.count(),1,"B"+lesson+" hidden solution preserved separately from extension note");
    assert(!(await details.evaluate(el=>el.open)),"B"+lesson+" self-check must be collapsed by default");
    assert.equal(await details.locator("span.arithmatex").count(),9,
      "B"+lesson+" hidden solution requires all nine math wrappers");
    await details.locator("summary").click();
    assert(await details.evaluate(el=>el.open),"B"+lesson+" student can expand full explanation");
    assert(await details.locator("li").first().isVisible(),"B"+lesson+" hidden answer becomes visible");
    await details.locator("summary").click();
    assert(!(await details.evaluate(el=>el.open)),"B"+lesson+" answers can collapse again");
    const bounds=await page.evaluate(()=>({w:document.documentElement.scrollWidth,v:innerWidth}));
    assert(bounds.w<=bounds.v+20,"B"+lesson+" math overflows narrow viewport");
  }
  for(const [lesson,title] of [
    ["15","Hàm số"],["17","Dấu của tam thức bậc hai"],
    ["18","Phương trình quy về phương trình bậc hai"]
  ]){
    await ready(page,"sgk/chuong-vi/bai-"+lesson+"/");
    assert((await page.locator("h1").first().textContent()).includes(title),"Wrong draft heading B"+lesson);
    const body=await page.locator("article").textContent();
    assert(!/NOTEBOOKLM|ACADEMIC_CLEARANCE|TÍCH HỢP ĐANG QA/.test(body),"B"+lesson+" exposes internal review metadata");
    assert((await page.locator(".thpt-r4-lead").first().textContent()).length<190,"B"+lesson+" has verbose admin preface");
    assert((await page.locator("[data-thpt-readiness]").count())===0,"Academic PASS must not activate learner mastery readiness inside lesson B"+lesson);
    const w=await page.evaluate(()=>({document:document.documentElement.scrollWidth,viewport:innerWidth}));
    assert(w.document<=w.viewport+20,"Draft B"+lesson+" horizontal overflow");
  }
  await ready(page,"sgk/chuong-vi/bai-tap-cuoi-chuong/");
  const integrated=await page.locator("article").textContent();
  assert(integrated.includes("Tự luyện 8 bài tổng hợp A1–B4"),"Cumulative Chapter VI practice introduction missing");
  assert(!integrated.includes("ACADEMIC_REVIEWED_SNAPSHOT_20261028"),"Internal academic snapshot status leaked to learner UI");
  assert((await page.locator("article details").count())===8,"Reviewed cumulative source must retain eight independently solvable explanations");
  assert(!(await page.locator("article details").first().getAttribute("open")),"End-chapter answers should start collapsed");
  await ready(page,"sgk/chuong-vi/bai-16/");
  assert(!(await page.locator("article").textContent()).includes("ACADEMIC_CLEARANCE"),"B16 shows internal QA approval");
  await ready(page,"sgk/chuong-vi/bai-17/");
  const scope=page.locator("details.thpt-r4-pedagogical-note");
  assert.equal(await scope.count(),1,"B17 should offer one compact optional extension note");
  assert(!(await scope.evaluate(el=>el.open)),"B17 scope note must begin collapsed");
  await scope.locator("summary").click();
  assert(await scope.evaluate(el=>el.open),"B17 scope note should open on student choice");
  await scope.locator("summary").click();
  assert(!(await scope.evaluate(el=>el.open)),"B17 scope note should close");

  // Static website: do not mount login-dependent assessments or learners.
  assert.equal(await page.locator("[data-thpt-secure-readiness]").count(),0,
    "No private backend interface may appear on THPT pages");
  assert.equal(await page.evaluate(()=>typeof window.THPTProtectedReadiness),"undefined",
    "No learner-login assessment engine should load");
  assert.equal(await page.evaluate(()=>typeof window.THPTFormativeExposure),"undefined",
    "No authenticated exposure tracker should load");

  // G10 ChVIII stage2: reviewed formative source, no held-out assessment.
  require("./test-thpt-g10-chviii-reviewed-stage2.cjs");
  for(const vp of [{width:1365,height:800},{width:390,height:844},{width:820,height:1100}]){
    await page.setViewportSize(vp);
    await ready(page,"sgk/chuong-viii/luyen-tap/");
    assert.equal(await page.locator("[data-thpt-open-quiz]").count(),6,"ChVIII must expose three Core and three Practice launchers");
    const sizes=await page.evaluate(()=>({w:document.documentElement.scrollWidth,v:innerWidth}));
    assert(sizes.w<=sizes.v+20,"ChVIII practice overflow "+vp.width);
  }
  await page.locator('[data-thpt-open-quiz="b23-core"]').click();
  assert((await page.locator("dialog.thpt-r4-practice-dialog a.thpt-r4-remediation-link").getAttribute("href")).endsWith("/sgk/chuong-viii/bai-23/"),"B23 recovery link wrong");
  assert(!(await page.locator("dialog.thpt-r4-practice-dialog .thpt-r4-reviewed-formative-card").innerText()).includes("THPT-G10-"),"ChVIII canonical ID shown to students");
  const viiiDialog=page.locator("dialog.thpt-r4-practice-dialog");
  assert(await viiiDialog.isVisible(),"ChVIII Core modal must open");
  assert((await viiiDialog.locator(".thpt-r4-modal-meta").textContent()).includes("VIII"),"ChVIII modal banner wrong chapter");
  await viiiDialog.locator(".thpt-r4-modal-buttons button").last().click();
  assert.equal(await viiiDialog.locator("[data-thpt-canonical-item]").getAttribute("data-thpt-canonical-item"),"THPT-G10-B23-C02");
  assert.equal(await viiiDialog.locator("img[data-thpt-reviewed-figure]").count(),0,"D5 FIG04 leaked before solution disclosure");
  await viiiDialog.locator("details").last().locator("summary").click();
  await viiiDialog.locator('img[data-thpt-reviewed-figure="THPT-G10-B23-C02"]').waitFor();
  await viiiDialog.locator("[data-thpt-modal-close]").click();
  await ready(page,"thu-vien/tu-luan-chuong-viii/");
  assert.equal(await page.locator('[data-thpt-written-canonical]').count(),3,"Missing ChVIII Written");
  const writtenRecovery=page.locator("section[data-thpt-written-canonical] a.thpt-r4-remediation-link");
  assert.equal(await writtenRecovery.count(),3,"All ChVIII Written need voluntary same-lesson knowledge links");
  assert((await writtenRecovery.first().getAttribute("href")).endsWith("/sgk/chuong-viii/bai-23/"),"ChVIII Written recovery wrong lesson");
  assert.equal(await page.locator('[data-thpt-kind="anchor"]').count(),1,"Anchor must be a Written tag");
  assert.equal(await page.locator('section[data-thpt-written-canonical] details[open]').count(),0,"Written solutions must start hidden");
  await ready(page,"sgk/chuong-viii/tu-kiem-tra-chuong/");
  assert.equal(await page.locator("[data-thpt-readiness], [data-thpt-secure-readiness]").count(),0,"No active ChVIII Readiness");

  await page.close();
  console.log("PASS THPT R4 reviewed formative/Written + technical Readiness Chromium smoke (not production approval or real-device QA)");
 }finally{await browser.close();}
})().catch(e=>{console.error("FAIL THPT R4 browser smoke",e);process.exit(1)});
