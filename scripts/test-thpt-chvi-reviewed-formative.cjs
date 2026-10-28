"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const bank=require("../docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js");
const result=bank.validate();
assert.equal(result.valid,true,"Invalid reviewed public bank: "+result.errors.join(", "));
assert.equal(result.count,18,"Expected 18 new reviewed public B15/B17/B18 formative IDs");
assert.equal(bank.academic_scope,"SGK_CHVI_FORMATIVE_ONLY");
assert.equal(bank.credit,false,"Formative preview may not grant mastery credit");
const ids=bank.items.map(item=>item.item_id);
assert.equal(new Set(ids).size,18);
for(const lesson of ["15","17","18"]){
 assert.equal(bank.forLesson(lesson,"core").length,2);
 assert.equal(bank.forLesson(lesson,"practice").length,4);
}
assert.equal(bank.forLesson("16","core").length,0,"B16 MUST stay bound to existing canonical source");
assert.equal(bank.forLesson("16","practice").length,0,"B16 MUST stay bound to existing canonical source");
const required=[
 ...["15","17","18"].flatMap(n=>["C01","C02","P01","P02","P03","P04"].map(code=>"THPT-G10-B"+n+"-"+code))
];
assert.deepEqual(new Set(ids),new Set(required),"Reviewed formative IDs drifted from Temp02 manifest");
for(const item of bank.items){
 assert(item.stem&&item.solution&&item.hint&&item.skill,"Missing content for "+item.item_id);
 assert(!/-R\d\d$/.test(item.item_id),"Held-out Readiness item leaked into public formative bank");
 assert(!/READINESS/.test(item.role),"Readiness role must never be in public bank");
}
const app=fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-vi/bai-tap-cuoi-chuong.md"),"utf8");
const appIds=[...app.matchAll(/data-thpt-canonical-item="([^"]+)"/g)].map(m=>m[1]);
assert.equal(appIds.length,8,"Eight cumulative exercises must have canonical references");
assert.equal(new Set(appIds).size,8,"Cumulative items must not duplicate ID");
for(const id of ["A1","A2","A3","A4","B1","B2","B3","B4"]){
 assert(appIds.includes("THPT-G10-CHVI-APP-"+id),"Missing cumulative mapping "+id);
}
const written=fs.readFileSync(path.join(root,"docs/thpt-preview/thu-vien/tu-luan.md"),"utf8");
const newWritten=[...written.matchAll(/data-thpt-written-canonical="([^"]+)"/g)].map(m=>m[1]);
assert.equal(newWritten.length,8,"Expected eight reviewed Written records with canonical exposure markers");
assert.equal(new Set(newWritten).size,8);
assert.equal(new Set([...ids,...appIds,...newWritten,
  "THPT-CORE-QF01","PRACTICE-THPT-DEMO-01","HPT-WRI-DEMO-01","HPT-WRI-DEMO-ANCHOR-01"]).size,36,
  "Public Core/Practice/Written canonical IDs must reconcile to 36 without cloning");
const sources=[
  "docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js",
  "docs/assets/javascripts/thpt-r4-preview.js",
  "docs/thpt-preview/sgk/chuong-vi/luyen-tap.md",
  "docs/thpt-preview/thu-vien/tu-luan.md"
].map(p=>fs.readFileSync(path.join(root,p),"utf8")).join("\n");
const heldOut=[...["15","16","17","18"].flatMap(n=>
 Array.from({length:n==="15"||n==="16"?5:4},(_,i)=>"THPT-G10-B"+n+"-R"+String(i+1).padStart(2,"0")))];
for(const id of heldOut) assert(!sources.includes(id),"Exposed held-out item in client: "+id);
const manifest=require("../prototypes/thpt/shared-items/thpt-g10-chvi-reviewed-public-placement-v1.cjs");
const qa=manifest.validate();
assert.equal(qa.valid,true,qa.errors.join("; "));
assert.equal(qa.unique_ids,36,"36 published public formative/Written canonical records");
assert.equal(qa.placements,65,"28 conditional Topic practice refs + 36 SGK + B3 Written ref");
for(const row of manifest.canonical){
 assert(fs.existsSync(path.join(root,row.source)),"Missing canonical source "+row.source);
 assert.equal(row.mastery_credit,false,"No automatic production mastery");
}
assert.equal(manifest.canonical.filter(x=>x.is_anchor===true).length,4);
const b3=manifest.placementsFor("THPT-G10-CHVI-APP-B3");
assert.equal(b3.length,3,"Integrated application B3 must reuse one item as optional Written");
assert.equal(new Set(b3.map(p=>p.item_id)).size,1,"B3 source item must not be cloned");
assert(manifest.placements.every(x=>x.role!=="SGK_CHAPTER_READINESS"&&x.role!=="TOPIC_READINESS"),"No held-out assessment placement publicly activated");

console.log("PASS THPT ChVI reviewed public practice: 18 unique formative, 8 cumulative, 8 Written; no held-out keys or assessment IDs; 36 total canonical IDs.");
