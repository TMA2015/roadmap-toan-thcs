#!/usr/bin/env node
"use strict";
/**
 * R14 review-only source integrity gate for all 25 candidate knowledge pages.
 * Source: unchanged live index.md. Candidate: preview-composition-rN / CT10 preview-tabs-r6.
 * Checks structural + image-display parity; NOT a mathematical proof or a release decision.
 */
const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");
const plans=[
 ["01-ban-do-chuong-trinh","r13"],["02-so-va-phep-tinh","r9"],
 ["03-ti-le-ti-le-thuc","r9"],["04-bieu-thuc-dai-so","r10"],
 ["05-7-hang-dang-thuc","r3"],["06-phan-tich-da-thuc","r9"],
 ["07-phan-thuc-dai-so","r10"],["08-phuong-trinh-bat-phuong-trinh","r10"],
 ["09-he-phuong-trinh","r9"],["10-ham-so-do-thi","tabs-r6"],
 ["11-can-thuc","r10"],["12-phuong-trinh-bac-hai-viete","r11"],
 ["13-goc-va-duong-thang","r11"],["14-tam-giac","r3"],
 ["15-duong-dong-quy","r11"],["16-tu-giac","r11"],
 ["17-thales-dong-dang","r12"],["18-he-thuc-luong","r12"],
 ["19-duong-tron","r12"],["20-hinh-hoc-tong-hop","r12"],
 ["21-thong-ke","r3"],["22-dai-luong-dac-trung","r13"],
 ["23-xac-suat","r3"],["24-bai-toan-thuc-te","r13"],
 ["25-tong-hop-on-thi-10","r13"]
];
// Fast referential integrity: candidates may link only to real approved Written records.
// Keep this in the existing 25-topic gate; no second academic review is required.
const writtenBank=JSON.parse(fs.readFileSync(
 path.join("docs","assets","data","written-exercises","written-exercise-library-v1.json"),"utf8"));
const writtenById=new Map(writtenBank.exercises.map(x=>[x.exercise_id.toLowerCase(),x]));
assert.equal(writtenById.size,writtenBank.exercises.length,"Duplicate canonical Written ID");
let verifiedWrittenLinks=0;
function checkWrittenLinks(candidate,topic){
 const html=[...candidate.matchAll(/\\bhref\\s*=\\s*["']([^"']+)["']/g)].map(m=>m[1]);
 const md=[...candidate.matchAll(/\\]\(([^)]+)\)/g)].map(m=>m[1]);
 for(const raw of [...html,...md]){
   const href=raw.replaceAll("&amp;","&");
   if(!href.includes("luyen-tap/tu-luan/"))continue;
   const hash=href.match(/#(wx\\d{2}-[a-z0-9-]+)/i);
   if(!hash)continue; // A general Written-library link is legitimate.
   const id=hash[1].toLowerCase();
   const item=writtenById.get(id);
   assert(item,"Preview has noncanonical Written link "+id+" in "+topic);
   const expected="CT"+topic.slice(0,2);
   assert.equal(item.topic_id,expected,"Written link is attached to wrong topic: "+id);
   const filter=href.match(/[?&]topic=(CT\\d{2})/i);
   if(filter)assert.equal(filter[1].toUpperCase(),expected,"Written topic filter mismatch for "+id);
   assert.equal(item.academic_review?.status,"APPROVED","Written destination not academically approved: "+id);
   verifiedWrittenLinks++;
 }
}
function heads(s){
 return [...s.matchAll(/^#{2,5} ([^\n]+)$/gm)].map(x=>x[1]).filter(x=>!x.startsWith("Infographic"));
}
function imgs(s){
 return [...s.matchAll(/!\[[^\]]*\]\(([^)]+)\)|<img\b[^>]*src="([^"]+)"/g)]
   .map(m=>(m[1]||m[2]).split(/[/?#]/).filter(Boolean).at(-1));
}
let sourceImages=0,keptImages=0,hiddenImages=0,newImages=0;
const receipt=[];
for(const [topic,revision] of plans){
 const d=path.join("docs","kien-thuc",topic);
 const source=fs.readFileSync(path.join(d,"index.md"),"utf8");
 const candidateFile=revision==="tabs-r6"?"preview-tabs-r6.md":`preview-composition-${revision}.md`;
 const candidate=fs.readFileSync(path.join(d,candidateFile),"utf8");
 const origHeads=heads(source),candHeads=heads(candidate);
 if(topic==="02-so-va-phep-tinh"){
   const converted=["Cộng hai số cùng dấu","Cộng hai số khác dấu","Nhân và chia"];
   assert.deepEqual(candHeads,origHeads.filter(x=>!converted.includes(x)),
     "CT02 should convert exactly three short H4 labels to table headers, no other heading");
   for(const label of converted)assert(candidate.includes(label),"CT02 missing table label "+label);
   for(const example of ["(-4)+(-7)=-11","8+(-13)=-5","(-18):6=-3"])
      assert(candidate.includes(example),"CT02 math example lost: "+example);
 }else if(revision==="tabs-r6"){
   const normalized=candidate.replace(/^    /gm,"");
   const theory=origHeads.filter(x=>/^3\.[1-8]\. /.test(x));
   const methods=origHeads.filter(x=>/^Dạng (?:[1-9]|10|11)\s*[–-]/.test(x));
   assert.equal(theory.length,8,"CT10 main source theory count drift");
   assert.equal(methods.length,11,"CT10 main source method count drift");
   for(const name of [...theory,...methods]){
     const target=name.replaceAll("`y = ax²`",String.raw`\(y = ax^2\)`);
     assert(normalized.includes(target),"CT10 tabbed content missing "+name);
   }
   assert.equal((candidate.match(/^=== "/gm)||[]).length,10,"CT10 must have five + five tabs");
   assert(candidate.includes("2x-4=0\\Rightarrow x=2"),"CT10 intermediate result x=2 lost");
   assert.equal((candidate.match(/class="math-topic-pending"/g)||[]).length,2,
     "CT10 two unverified methods must not have fake clickable links");
 }else{
   assert.deepEqual(candHeads,origHeads,"Full heading order changed in "+topic);
 }
 checkWrittenLinks(candidate,topic);
 const src=imgs(source),dst=imgs(candidate);
 const kept=src.filter(x=>dst.includes(x)),hidden=src.filter(x=>!dst.includes(x));
 const added=dst.filter(x=>!src.includes(x));
 sourceImages+=src.length;keptImages+=kept.length;hiddenImages+=hidden.length;newImages+=added.length;
 receipt.push({topic,revision,src:src.length,kept:kept.length,hidden:hidden.length,added:added.length});
 if(topic==="01-ban-do-chuong-trinh")assert(!candidate.includes('class="math-related-practice"'),"No invented CT01 practice");
 if(["22-dai-luong-dac-trung","25-tong-hop-on-thi-10"].includes(topic))
   assert(!candidate.includes('href="../../../luyen-tap/tu-luan/'),"Do not invent canonical Written for "+topic);
}
assert.deepEqual([sourceImages,keptImages,hiddenImages,newImages],[159,79,80,2],
  "R14 image-display inventory changed: re-audit infographic source before any release");
console.log("PASS source-checked candidate Written deep links",verifiedWrittenLinks,"approved links");
console.log("PASS R14 25 source candidates / CT02 semantic reflow / CT10 5+5 tabs");
console.log(JSON.stringify({total:plans.length,sourceImages,keptImages,hiddenImages,newImages,receipt}));
