"use strict";
// Technical integrity only: no Academic PASS or deployment authorization.
const assert=require("node:assert/strict");
const fs=require("node:fs");
const bankFiles=["docs/assets/javascripts/thpt-chvii-reviewed-formative-v1.js","docs/assets/javascripts/thpt-chviii-reviewed-formative-v1.js"];
const combined=bankFiles.map(f=>fs.readFileSync(f,"utf8")).join("\n");
const canonical=[...combined.matchAll(/"item_id"\s*:\s*"(THPT-G10-B\d{2}-[CP]\d{2})"/g)].map(x=>x[1]);
assert.equal(canonical.length,57,"Exactly 57 reviewed formative records");
assert.equal(new Set(canonical).size,57,"Canonical IDs must be unique");
// Reviewer-approved R02 source blob: 03755fb8e4a192df833820b2b01617de74035076.
// These FNV-1a32 fingerprints were recomputed against all 14 exact source-to-HTML
// card transforms and verified byte-for-byte on the release HEAD before lock.
// They detect accidental edit/drift but do not independently grade mathematics.
const approvedHelpHashes={
 "D6-G10-B19-01":"1b4ed08f","D6-G10-B19-02":"b3745011",
 "D6-G10-B20-01":"4faec0e6","D6-G10-B20-02":"53eac2bc",
 "D6-G10-B21-01":"eb1b1712","D6-G10-B21-02":"15ce4f06",
 "D6-G10-B22-01":"7dc1c80e","D6-G10-B22-02":"fa46a4fd",
 "D6-G10-B23-01":"f334b3b3","D6-G10-B23-02":"ea80df6c",
 "D6-G10-B24-01":"be4692db","D6-G10-B24-02":"11bde5b9",
 "D6-G10-B25-01":"21427505","D6-G10-B25-02":"eed8e228"
};
const hash32=text=>{
 let h=2166136261;
 for(let i=0;i<text.length;i++)h=Math.imul(h^text.charCodeAt(i),16777619)>>>0;
 return h.toString(16).padStart(8,"0");
};
assert.equal(Object.keys(approvedHelpHashes).length,14);
let helpCount=0,linked=0,writtenLinked=0;
for(let lesson=19;lesson<=25;lesson++){
 const ch=lesson<=22?"vii":"viii";
 const f="docs/thpt-preview/sgk/chuong-"+ch+"/bai-"+lesson+".md";
 const md=fs.readFileSync(f,"utf8");
 const ids=[...md.matchAll(/data-thpt-help-id="(D6-G10-B\d{2}-\d{2})"/g)].map(x=>x[1]);
 assert.deepEqual(ids,["D6-G10-B"+lesson+"-01","D6-G10-B"+lesson+"-02"],"Exactly two reviewed R02 cards per lesson in "+f);
 for(const id of ids){
  const open='<details class="thpt-r4-pedagogical-note" data-thpt-help-id="'+id+'">';
  const start=md.indexOf(open), stop=md.indexOf("</details>",start);
  assert(start>=0&&stop>start,"R02 help card cannot be missing/unterminated: "+id);
  const actual=md.slice(start,stop+"</details>".length);
  assert.equal(hash32(actual),approvedHelpHashes[id],"R02 approved source text/links changed for "+id);
 }
 helpCount+=ids.length;
 for(const s of ["Dấu hiệu:","Bản chất toán:","Tự sửa:","Kiến thức cần ôn:"]){
  assert(md.includes(s),"Missing help field "+s+" in "+f);
 }
 assert(!/(NotebookLM|Academic PASS|DRAFT — chưa review)/i.test(md),"Internal academic metadata reached learner page: "+f);
 for(const m of md.matchAll(/data-thpt-formative-id="(THPT-G10-B\d{2}-[CP]\d{2})" href="\.\.\/luyen-tap\/\?item=([^"]+)"/g)){
  assert.equal(m[1],m[2],"Deep link must target the exact canonical ID");
  assert(canonical.includes(m[1]),"Unresolvable formative link "+m[1]);linked++;
 }
 for(const m of md.matchAll(/data-thpt-formative-id="(THPT-G10-CH(?:VII|VIII)-W[A-Z0-9-]+)" href="[^"]+#([^"]+)"/g)){
  assert.equal(m[2],m[1].toLowerCase(),"Written anchor mismatch");
  const target=m[1].includes("-CHVII-")?"vii":"viii";
  const written=fs.readFileSync("docs/thpt-preview/thu-vien/tu-luan-chuong-"+target+".md","utf8");
  assert(written.includes('id="'+m[2]+'"'),"Unresolvable Written anchor "+m[1]);writtenLinked++;
 }
}
assert.equal(helpCount,14);
assert(linked>=20,"Not enough linked canonical remedial exercises");
assert(writtenLinked>=5,"Written recovery links missing");
const router=fs.readFileSync("docs/assets/javascripts/thpt-r4-preview.js","utf8");
assert(router.includes('const requestedItem=new URLSearchParams(location.search).get("item")'),"Deep-link support missing");
assert(router.includes("trigger?.click()"),"Deep-link action missing");
assert(router.includes("if(index<0)index=0"),"Focused canonical question selection missing");
assert(!combined.includes("THPT-G10-CHVII-RD")&&!combined.includes("THPT-G10-CHVIII-RD"),"Private readiness ID in public formative bank");
console.log("PASS 14 R02 help cards, "+linked+" canonical formative links, "+writtenLinked+" Written links, 57 unique formative IDs; no protected assessment code enabled.");
