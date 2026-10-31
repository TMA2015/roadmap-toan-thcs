#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const counts={CHI:14,CHII:14,CHIII:14,CHIV:21,CHV:18,CHVI:18,CHVII:22,CHVIII:14,CHIX:6};
const slugs={CHI:"i",CHII:"ii",CHIII:"iii",CHIV:"iv",CHV:"v",CHVI:"vi",CHVII:"vii",CHVIII:"viii",CHIX:"ix"};
const ids=new Set();let all=0,manual=0;
const settings=fs.readFileSync(path.join(root,"mkdocs.yml"),"utf8");
assert(settings.includes("assets/javascripts/thpt-g10-reviewed-selfcheck-v1.js"));
assert(settings.includes("assets/stylesheets/thpt-g10-reviewed-selfcheck-v1.css"));
for(const [chapter,n] of Object.entries(counts)){
 const f=path.join(root,"docs/assets/data/thpt-g10-readiness",chapter+".json");
 const book=JSON.parse(fs.readFileSync(f,"utf8"));
 assert.equal(book.schema,"thpt-g10-reviewed-selfcheck-v1",chapter+" schema");
 assert.equal(book.scope,"SGK_CHAPTER_READINESS",chapter+" scope");
 assert.equal(book.chapter,chapter);
 assert.equal(book.items.length,n);
 assert.equal(book.mastery_credit,false);
 assert.equal(book.persist_results,false);
 assert.match(book.source_sha256,/^[0-9a-f]{64}$/);
 for(const q of book.items){
  assert(q.item_id&&q.stem&&q.answer&&q.solution,chapter+" missing academic field");
  assert(!ids.has(q.item_id),"Duplicate canonical "+q.item_id);
  ids.add(q.item_id);all++;
  assert(["MCQ_SINGLE","TRUE_FALSE_GROUP","SHORT_EXPLANATION","WRITTEN_RUBRIC","OPEN_REVIEW"].includes(q.type),"Bad type "+q.item_id);
  if(q.type==="OPEN_REVIEW"||q.type==="SHORT_EXPLANATION"||q.type==="WRITTEN_RUBRIC")manual++;
 }
 const page=fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-"+slugs[chapter]+"/tu-kiem-tra-chuong.md"),"utf8");
 assert(page.includes('data-g10-chapter-selfcheck="'+chapter+'"'),"Missing live route "+chapter);
 assert(page.includes("Final Submit"),"Missing submit contract "+chapter);
 assert(!page.includes("mastery_credit: true"),"Incorrect Mastery flag "+chapter);
}
assert.equal(all,141);
assert.equal(ids.size,141);
assert(manual>30,"Expected open responses not invented machine scores");
const client=fs.readFileSync(path.join(root,"docs/assets/javascripts/thpt-g10-reviewed-selfcheck-v1.js"),"utf8");
assert(!/localStorage\.setItem|sessionStorage\.setItem|firebase\.database|masteryCredit\s*:\s*true/.test(client),"No result writes or Mastery");
console.log("PASS G10 RD1 release data: 9/9 chapter routes, 141/141 distinct source-locked items, Final Submit UI, no score persistence/Mastery.");
