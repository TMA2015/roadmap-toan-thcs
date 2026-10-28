#!/usr/bin/env node
"use strict";
/* Browser smoke against the SAME assembled site under both old/new
 * GitHub Pages project paths. Never connects to real Gemini; not live UAT.
 */
const assert=require("node:assert/strict");
const {chromium}=require("playwright");
const host="http://127.0.0.1:8766";
const paths=["/roadmap-toan-thcs/","/self-learning-math/"];
const open=async(page,url)=>{
 const response=await page.goto(url,{waitUntil:"networkidle"});
 assert(response&&response.ok(),"Unreachable route: "+url+" (HTTP "+response?.status()+")");
};
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const prefix of paths){
   for(const viewport of [{width:1440,height:900},{width:390,height:844}]){
    const page=await browser.newPage({viewport});
    const errors=[];
    page.on("response",r=>{
      if(r.url().startsWith(host+prefix)&&r.status()>=400)errors.push(r.status()+" "+r.url());
    });
    await open(page,host+prefix);
    await page.locator("[data-roadmap-topic-launcher]").waitFor({state:"visible"});
    // First-visit THCS style choice is an intended overlay, not a regression.
    if(await page.locator("[data-home-dialog]").isVisible()){
      await page.locator('[data-home-dialog] [data-home-select="standard"]').click();
      assert(await page.locator("[data-home-dialog]").isHidden());
    }
    assert.equal(await page.locator("[data-home-portal][data-home-style-ready='1']").count(),1,
      "THCS homepage scripts failed under "+prefix);
    await page.locator("[data-roadmap-topic-launcher]").click();
    const dlg=page.locator("[data-roadmap-topic-dialog]");
    assert.equal(await dlg.locator(".roadmap-topic-dialog__list a").count(),25);
    assert.equal(await dlg.locator(".roadmap-main-quick .roadmap-main-quick__links a").count(),7);
    assert((await dlg.locator(".roadmap-main-quick .roadmap-main-quick__links").innerText()).includes("Trang chủ THCS"));
    const cover=dlg.locator("[data-math-program-cover-link]");
    assert.equal(await cover.count(),1);
    assert.equal(new URL(await cover.getAttribute("href"),page.url()).pathname,prefix+"thpt-preview/");
    await cover.click();
    assert((await page.locator("h1").first().innerText()).includes("Chọn hành trình Toán"),
      "Programme selector not reachable from THCS under "+prefix);
    await open(page,host+prefix+"thpt-preview/home/");
    await page.locator("[data-thpt-r4-launcher]").waitFor({state:"visible"});
    await page.locator("[data-thpt-r4-launcher]").click();
    const topicDlg=page.locator("[data-thpt-r4-shortcut-dialog]");
    assert.equal(await topicDlg.locator('nav[aria-label="Năm lối tắt chính Toán THPT"] a').count(),5);
    assert((await topicDlg.locator('nav[aria-label="Năm lối tắt chính Toán THPT"]').innerText()).includes("Trang chủ THPT"));
    const coverAgain=topicDlg.locator("[data-math-program-cover-link]");
    assert.equal(new URL(await coverAgain.getAttribute("href"),page.url()).pathname,prefix+"thpt-preview/");
    await coverAgain.click();
    assert((await page.locator("h1").first().innerText()).includes("Chọn hành trình Toán"),
      "Programme selector not reachable from THPT under "+prefix);
    await open(page,host+prefix+"kien-thuc/04-bieu-thuc-dai-so/");
    await page.locator(".md-content").waitFor({state:"visible"});
    assert.equal(await page.locator("[data-floating-ai]").count(),1,
      "Shared Gemini Tutor launcher did not mount on THCS knowledge "+prefix);
    assert(await page.locator(".floating-ai-face").evaluate(el=>el.complete&&el.naturalWidth>0),
      "Shared Gemini avatar failed due to renamed asset prefix "+prefix);
    await open(page,host+prefix+"thpt-preview/sgk/chuong-vi/bai-16/");
    assert.equal(await page.locator("[data-floating-ai]").count(),1,
      "Same Gemini Tutor did not mount on THPT knowledge "+prefix);
    assert(await page.locator(".floating-ai-face").evaluate(el=>el.complete&&el.naturalWidth>0),
      "THPT Gemini avatar failed due to renamed asset prefix "+prefix);
    await open(page,host+prefix+"thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong/");
    assert.equal(await page.locator("[data-floating-ai]").count(),0,
      "Tutor must never reveal hints or answers in chapter Readiness before Final Submit");
    assert.equal((await page.locator('[data-thpt-readiness]').getAttribute("data-mastery-credit")),"false");
    assert.deepEqual(errors,[],"Static asset/request failure on "+prefix+": "+errors.join("; "));
    await page.close();
    console.log("PASS candidate path "+prefix+" on "+viewport.width+"px, THCS/THPT, AI, cover, no-answer-leak");
   }
  }
  // Both project paths share one tma2015.github.io origin; verify a stored
  // value survives path migration without changing any real student keys.
  const migrationPage=await browser.newPage();
  await open(migrationPage,host+"/roadmap-toan-thcs/");
  await migrationPage.evaluate(()=>localStorage.setItem("__math_repo_rename_test__","origin-retained"));
  await open(migrationPage,host+"/self-learning-math/");
  assert.equal(await migrationPage.evaluate(()=>localStorage.getItem("__math_repo_rename_test__")),
    "origin-retained","A renamed Pages project path must not destroy same-origin localStorage");
  await migrationPage.evaluate(()=>localStorage.removeItem("__math_repo_rename_test__"));
  await migrationPage.close();
  console.log("PASS same-origin localStorage persists from legacy Pages path to new Pages path");

  // IndexedDB was tested separately in Phase4 canaries. Protect the origin
  // property too, without enabling experimental storage in production.
  const idbPage=await browser.newPage();
  await open(idbPage,host+"/roadmap-toan-thcs/");
  const testDb="__math_rename_origin_qa_v1__";
  try{
    await idbPage.evaluate(name=>new Promise((resolve,reject)=>{
      const req=indexedDB.open(name,1);
      req.onupgradeneeded=()=>req.result.createObjectStore("probe");
      req.onerror=()=>reject(req.error);
      req.onsuccess=()=>{
        const db=req.result,tx=db.transaction("probe","readwrite");
        tx.objectStore("probe").put("preserved-across-repo-rename","marker");
        tx.oncomplete=()=>{db.close();resolve();};
        tx.onerror=()=>{db.close();reject(tx.error);};
      };
    }),testDb);
    await open(idbPage,host+"/self-learning-math/");
    const retained=await idbPage.evaluate(name=>new Promise((resolve,reject)=>{
      const req=indexedDB.open(name);
      req.onerror=()=>reject(req.error);
      req.onsuccess=()=>{
        const db=req.result,tx=db.transaction("probe","readonly");
        const get=tx.objectStore("probe").get("marker");
        get.onsuccess=()=>{const value=get.result;db.close();resolve(value);};
        get.onerror=()=>{db.close();reject(get.error);};
      };
    }),testDb);
    assert.equal(retained,"preserved-across-repo-rename",
      "IndexedDB must remain same-origin across old/new GitHub Pages repo paths");
    console.log("PASS same-origin IndexedDB survives old/new repo path switch (QA database only)");
  }finally{
    await idbPage.evaluate(name=>new Promise(resolve=>{
      const req=indexedDB.deleteDatabase(name);
      req.onsuccess=req.onerror=req.onblocked=()=>resolve();
    }),testDb);
    await idbPage.close();
  }
 }finally{await browser.close();}
})().catch(e=>{console.error("FAIL dual GitHub Pages prefix smoke:",e);process.exit(1);});
