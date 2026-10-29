#!/usr/bin/env node
"use strict";
// Academic-reviewed G10 ChIX D1-D4 public formative, no assessment release.
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),vm=require("node:vm");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const js=read("docs/assets/javascripts/thpt-chix-reviewed-formative-v1.js");
const sandbox={window:{}};vm.runInNewContext(js,sandbox,{timeout:5000});
const bank=sandbox.window.THPT_CHIX_REVIEWED_FORMATIVE;
assert(bank?.validate().valid,"ChIX public canonical bank invalid");
const ids=bank.records.map(x=>x.item_id);
assert.equal(ids.length,14);assert.equal(new Set(ids).size,14);
for(const n of [26,27]){
 const subset=bank.records.filter(x=>x.lesson===String(n));
 assert.equal(subset.length,7,"Expected 7 C/P/Application in B"+n);
 assert.equal(bank.forLesson(n,"core").length,2);
 assert.equal(bank.forLesson(n,"practice").length,5);
 assert.equal(subset.filter(x=>x.role==="APPLICATION").length,1);
 assert.equal(subset.filter(x=>x.role==="CORE").length,2);
 const knowledge=read("docs/thpt-preview/sgk/chuong-ix/bai-"+n+".md");
 assert(knowledge.includes("## 1.")&&knowledge.includes("## 2.")&&knowledge.includes("EX-G10-B"+n+"-"),"Knowledge/explanation source not integrated B"+n);
 assert(knowledge.includes("SBT")&&knowledge.includes("../luyen-tap/"));
}
assert.equal(bank.records.filter(x=>/B26-P04|B26-P05/.test(x.item_id)&&x.stem.includes("xác suất")).length,2,"Small probability/equiprobability distinctions must remain");
assert(bank.records.find(x=>x.item_id==="THPT-G10-B27-P05").solution.includes("1/18"),
  "Non-equiprobable unordered dice correction must be retained");
const written=read("docs/thpt-preview/thu-vien/tu-luan-chuong-ix.md");
const wIds=[...written.matchAll(/data-thpt-written-canonical="([^"]+)"/g)].map(x=>x[1]);
assert.deepEqual(wIds,["THPT-G10-CHIX-W26-01","THPT-G10-CHIX-W27-ANCHOR-01"]);
assert.equal(new Set([...ids,...wIds]).size,16,"16 canonical ChIX ID contract");
assert.equal((written.match(/data-thpt-kind="anchor"/g)||[]).length,1);
assert.equal((written.match(/<details>/g)||[]).length,2,"Two Written solutions must start hidden");
const hub=read("docs/thpt-preview/sgk/chuong-ix/luyen-tap.md");
for(const n of [26,27])for(const k of ["core","practice"])
 assert(hub.includes('data-thpt-open-quiz="b'+n+'-'+k+'"'),"Missing B"+n+" "+k+" launcher");
const rd=read("docs/thpt-preview/sgk/chuong-ix/tu-kiem-tra-chuong.md");
assert(!/<button|<input|data-thpt-readiness|data-mastery-credit/.test(rd),"Readiness route must remain informational");
for(const s of [js,written,hub,rd,...[26,27].map(n=>read("docs/thpt-preview/sgk/chuong-ix/bai-"+n+".md"))])
 assert(!/THPT-G10-CHIX-RD\d\d|data-mastery-credit=["']true|THPTProtectedReadiness|CHIX-READ-\d\d/.test(s),
 "No private candidate IDs, keys or protected assessment on public route");
const config=read("mkdocs.thpt-preview.yml"),engine=read("docs/assets/javascripts/thpt-r4-preview.js");
for(const file of ["chuong-ix.md","bai-26.md","bai-27.md","chuong-ix/luyen-tap.md","chuong-ix/tu-kiem-tra-chuong.md","tu-luan-chuong-ix.md","thpt-chix-reviewed-formative-v1.js"])
 assert(config.includes(file),"Missing MkDocs route/asset: "+file);
assert(engine.includes("THPT_CHIX_REVIEWED_FORMATIVE")&&engine.includes("2[67]"),"R4 launcher must mount ChIX bank");
// Root selector was separately approved/merged in PR #617 on 29/10.
 // Accept either pre-migration THCS root or approved selector+THCS archive,
 // but never allow the existing THCS home to disappear.
const main=read("docs/index.md");
if(main.includes("data-math-program-selector")){
 assert(main.includes('href="thcs/"')&&main.includes('href="thpt-preview/home/"'),
   "Approved programme selector must preserve both learning routes");
 const legacy=read("docs/thcs/index.md");
 assert(legacy.includes("data-home-portal")&&legacy.includes("TOÁN THCS"),
   "Original THCS home must remain at /thcs/");
}else{
 assert(main.includes("data-home-portal")&&main.includes("TOÁN THCS"),
   "Pre-selector THCS home must remain unchanged");
}
console.log("PASS G10 ChIX B26/B27 public 14 C/P + 2 Written (1 Anchor), source-locked scope, 0 protected Readiness/Mastery; root THCS remains unchanged");
