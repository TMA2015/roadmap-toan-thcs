#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const {reconcile}=require("./prototypes/math-v2-reviewed-source-exception-shadow-r25.js");
const source=fs.readFileSync("scripts/prototypes/math-v2-reviewed-source-exception-shadow-r25.js","utf8");
const site=fs.readFileSync("mkdocs.yml","utf8");
const practice=fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8");
const r=reconcile();
assert.equal(r.schema,"math-r25-approved-source-delta-shadow-qa-v1");
assert.equal(r.status,"REVIEWED_EXCEPTION_READ_ONLY_NO_CUTOVER");
assert.equal(r.original_r22.source_locked_family,2750);
assert.equal(r.original_r22.formative_no_family,214);
assert.equal(r.original_r22.source_hold,150);
assert.equal(r.source_verified_reviewed_exception.unchanged,26);
assert.equal(r.source_verified_reviewed_exception.reviewed_notation,4);
assert.equal(r.source_verified_reviewed_exception.reviewed_additive_group_metadata,120);
assert.equal(r.shadow_family_candidate_count,2900);
assert.equal(r.hold_for_policy_pin_regeneration,150);
assert.equal(r.new_catalog_items_excluded,60);
assert.equal(r.source_files.length,5);
assert.equal(r.source_files.reduce((n,x)=>n+x.item_count,0),150);
assert.equal(r.source_files.reduce((n,x)=>n+x.notation_only,0),4);
assert.equal(r.source_files.reduce((n,x)=>n+x.variant_metadata_only,0),120);
assert(r.source_files.every(x=>x.learner_authorized===false));
for(const [label,val] of Object.entries(r.guards))assert.equal(val,false,label);
function replaceFile(rel,content){
 return ({readBytes:p=>{
  if(p===rel)return Buffer.from(content);
  return fs.readFileSync(p);
 }});
}
const src08="docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json";
const raw08=fs.readFileSync(src08);
assert.throws(()=>reconcile(replaceFile(src08,Buffer.concat([raw08,Buffer.from(" ")]))),
 /R25_CHANGED_SOURCE_NOT_PINNED/);
const lock08="review-packets/academic-depth/ct08-p1a/01_CT08_P1A_NOTATION_ACADEMIC_LOCK_R1.json";
const tamperedLock=JSON.parse(fs.readFileSync(lock08,"utf8"));
tamperedLock.status="PENDING_UNREVIEWED";
assert.throws(()=>reconcile(replaceFile(lock08,JSON.stringify(tamperedLock))),
 /R25_CT08_ACADEMIC_NOTATION_LOCK_ABSENT/);
const source09="docs/assets/data/practice/09-he-phuong-trinh-v1-01.json";
const damaged09=JSON.parse(fs.readFileSync(source09,"utf8"));
damaged09.questions[0].variant_group="MALICIOUS_REASSIGNED";
assert.throws(()=>reconcile(replaceFile(source09,JSON.stringify(damaged09))),
 /R25_CHANGED_SOURCE_NOT_PINNED/);
assert(!site.includes("math-v2-reviewed-source-exception-shadow-r25"));
assert(!practice.includes("math-v2-reviewed-source-exception-shadow-r25"));
assert(!/localStorage|indexedDB|sessionStorage|fetch\s*\(|sendBeacon/.test(source));
assert(!/writeFile|appendFile|renameSync|unlinkSync|rmSync/.test(source));
console.log("PASS R25 150 records verified by preexisting reviewed locks; still hold policy source pins; no learner Skill cutover");
console.log(JSON.stringify({old_r22:r.original_r22,
 reviewed_exceptions:r.source_verified_reviewed_exception,
 qa_only_family_candidates:r.shadow_family_candidate_count,
 policy_pin_refresh_holds:r.hold_for_policy_pin_regeneration}));
