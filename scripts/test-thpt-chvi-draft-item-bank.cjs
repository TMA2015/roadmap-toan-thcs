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

const b15=fs.readFileSync(path.join(root,"prototypes/thpt/shared-items/THPT_G10_CHVI_B15_CANONICAL_CANDIDATES_v0.1.md"),"utf8");
const b15Register=b15.split("## 2. Core")[0];
const b15Ids=[...b15Register.matchAll(/^\| (THPT-G10-B15-[CPR]\d\d) \|/gm)].map(m=>m[1]);
assert.equal(b15Ids.length,9,"Expected 9 B15 candidates");
assert.equal(new Set([...ids,...b15Ids]).size,25,"Duplicate candidate IDs between B15 and B17/B18");
assert.equal(b15Ids.filter(id=>/-C\d\d$/.test(id)).length,2,"B15 must have two Core candidates");
assert.equal(b15Ids.filter(id=>/-P\d\d$/.test(id)).length,4,"B15 must have four Practice candidates");
assert.equal(b15Ids.filter(id=>/-R\d\d$/.test(id)).length,3,"B15 must have three held-out Readiness candidates");
for(const id of b15Ids){
 assert(b15.includes("### "+id)||/-R\d\d$/.test(id),"Missing B15 candidate body: "+id);
}
for(const page of [
 "docs/thpt-preview/sgk/chuong-vi/bai-15.md",
 "docs/assets/javascripts/thpt-r4-preview.js",
 "docs/thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong.md"
]){
 const body=fs.readFileSync(path.join(root,page),"utf8");
 for(const id of b15Ids.filter(id=>/-R\d\d$/.test(id)))
   assert(!body.includes(id),"B15 held-out Readiness candidate leaked into student preview: "+id);
}

console.log("PASS THPT Chapter VI draft bank: 25 candidate IDs total across B15/B17/B18, held-out Readiness IDs are not displayed in preview.");
