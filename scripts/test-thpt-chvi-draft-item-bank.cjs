"use strict";
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const md=fs.readFileSync(path.join(root,"prototypes/thpt/shared-items/THPT_G10_CHVI_B17_B18_CANONICAL_CANDIDATES_v0.1.md"),"utf8");
const register=md.split("## B. Bài 17")[0];
const ids=[...register.matchAll(/^\| (THPT-G10-B(?:17|18)-[CPR]\d\d) \|/gm)].map(m=>m[1]);
assert.equal(ids.length,16,"Expected 16 candidate item rows in B17/B18 academic register");
assert.equal(new Set(ids).size,16,"Duplicate canonical candidate IDs");
for(const n of ["17","18"]){
 const lessonIds=ids.filter(id=>id.includes("-B"+n+"-"));
 assert.equal(lessonIds.length,8,"Expected eight candidates per lesson");
 assert.equal(lessonIds.filter(id=>/-C\d\d$/.test(id)).length,2,"Expected two Core candidates");
 assert.equal(lessonIds.filter(id=>/-P\d\d$/.test(id)).length,4,"Expected four Practice candidates");
 assert.equal(lessonIds.filter(id=>/-R\d\d$/.test(id)).length,2,"Expected two held-out Readiness candidates");
}
for(const id of ids){
 assert(md.includes("### "+id)||/-R\d\d$/.test(id),
  "Missing candidate item body: "+id);
}
for(const page of [
 "docs/thpt-preview/sgk/chuong-vi/bai-17.md",
 "docs/thpt-preview/sgk/chuong-vi/bai-18.md",
 "docs/assets/javascripts/thpt-r4-preview.js",
 "docs/thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong.md"
]){
 const body=fs.readFileSync(path.join(root,page),"utf8");
 for(const id of ids.filter(x=>/-R\d\d$/.test(x))){
  assert(!body.includes(id),"Held-out candidate ID leaked into user-facing preview: "+id+" in "+page);
 }
}
assert(md.includes("NO_CREDIT")&&md.includes("DRAFT_NOT_ACADEMICALLY_REVIEWED"),
 "Draft item catalog missing academic/release guards");
console.log("PASS THPT B17/B18 16 unique proposed canonical items; 4 held-out Readiness IDs not leaked into preview.");
