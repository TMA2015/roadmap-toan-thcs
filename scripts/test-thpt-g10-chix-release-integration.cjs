"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
require("./test-thpt-g10-chix-reviewed-stage3.cjs");
const base="docs/thpt-preview/sgk/chuong-ix/";
const bank=fs.readFileSync("docs/assets/javascripts/thpt-chix-reviewed-formative-v1.js","utf8");
const ids=[...bank.matchAll(/"item_id":\s*"(THPT-G10-B(?:26|27)-[CP]\d\d)"/g)].map(x=>x[1]);
assert.equal(new Set(ids).size,14,"Exactly 14 reviewed public ChIX C/P items");
const expected={
 "D6-G10-B26-01":"2ac6713d","D6-G10-B26-02":"9c9e40f7",
 "D6-G10-B27-01":"dba05b33","D6-G10-B27-02":"875f98fc"
};
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619)>>>0;return h.toString(16).padStart(8,"0")};
let linked=0,writtenLinks=0;
const written=fs.readFileSync("docs/thpt-preview/thu-vien/tu-luan-chuong-ix.md","utf8");
for(const n of [26,27]){
 const src=fs.readFileSync(base+"bai-"+n+".md","utf8");
 for(const seq of ["01","02"]){
  const id="D6-G10-B"+n+"-"+seq;
  const start=src.indexOf('<details class="thpt-r4-pedagogical-note" data-thpt-help-id="'+id+'">');
  const end=src.indexOf("</details>",start);
  assert(start>=0&&end>start,"Missing D6 R01 learner card "+id);
  assert.equal(fnv(src.slice(start,end+10)),expected[id],"Reviewed D6 R01 text/link drift "+id);
 }
 for(const m of src.matchAll(/data-thpt-formative-id="(THPT-G10-B\d{2}-[CP]\d\d)" href="\.\.\/luyen-tap\/\?item=([^"]+)"/g)){
  assert.equal(m[1],m[2],"Formative link points to other ID");
  assert(ids.includes(m[1]),"Missing linked canonical formative "+m[1]);linked++;
 }
 for(const m of src.matchAll(/data-thpt-formative-id="(THPT-G10-CHIX-W[\w-]+)" href="[^"]+#([^"]+)"/g)){
  assert.equal(m[2],m[1].toLowerCase());
  assert(written.includes('id="'+m[2]+'"'),"Missing Written anchor "+m[1]);writtenLinks++;
 }
 const fig=n===26?"THPT_G10_B26_COIN_DIE_SAMPLE_SPACE.svg":"THPT_G10_B27_WITHOUT_REPLACEMENT_TREE.svg";
 const svg=fs.readFileSync("docs/assets/images/thpt/"+fig,"utf8");
 assert(svg.startsWith("<svg")&&svg.includes('role="img"')&&svg.includes("viewBox="),"Reviewed D5 SVG missing accessibility or viewBox");
 assert(src.includes('src="../../../../assets/images/thpt/'+fig+'"'),"Source SVG not linked in B"+n);
 assert(src.includes("SBT Bài "+n+" phần bài tập tr."+(n===26?"61–63":"64–66")),"SBT receipt correction not applied");
 assert(!/(NotebookLM|REVIEWED D3|Reviewer kiểm tra|DRAFT|chưa hoàn tất)/.test(src),"Reviewer metadata leaked to learner B"+n);
}
assert(linked>=14&&writtenLinks>=2,"D6 links not fully connected");
assert(!/THPT-G10-CHIX-RD\d\d|THPTProtectedReadiness|CHIX-READ-\d\d/.test(bank+written),"Protected readiness exposed in public sources");
const nav=fs.readFileSync("mkdocs.thpt-preview.yml","utf8");
assert(nav.includes("Bài 26 · Biến cố")&&nav.includes("Bài 27 · Thực hành")&&nav.includes("thpt-chix-reviewed-formative-v1.js"),"Missing R4 ChIX route or JS");
const css=fs.readFileSync("docs/assets/stylesheets/thpt-r4-preview.css","utf8");
assert(css.includes(".thpt-r4-probability-figure img"),"Mobile figure overflow guard absent");
// Student-facing labels must not show academic/reviewer or internal item-ID status.
for(const page of [
 "docs/thpt-preview/sgk/chuong-ix.md",
 "docs/thpt-preview/sgk/chuong-ix/luyen-tap.md",
 "docs/thpt-preview/thu-vien/tu-luan-chuong-ix.md"
]){
 const student=fs.readFileSync(page,"utf8");
 assert(!/(NotebookLM|REVIEWED D\d|review học thuật|ID canonical review|snapshot|đang tích hợp để QA)/i.test(student),
  "Reviewer-only text leaked to student page: "+page);
}
console.log("PASS G10 ChIX R1 preview static: 16 public items, D6 R01 4/4 locked, SVG 2/2, "+linked+" formative links, "+writtenLinks+" Written links; no protected Readiness or Mastery.");
