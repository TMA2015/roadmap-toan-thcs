#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const {audit,pageRange,BOUNDS}=require("./prototypes/math-v2-r31-s1-page-boundary-audit.js");
const r=audit();
assert.equal(r.schema,"math-r31-public-secondary-s1-page-interval-audit-v1");
assert.equal(r.academic_status,"ACADEMIC_HOLD_AWAIT_PRIMARY_S1_SOURCE_VERIFICATION");
assert.deepEqual(r.summary,{
 total:24,page_bounds_conflicts:7,
 plausible_broad_ranges_unverified:17,
 exact_educational_S1_page_signoffs:0,
 math_answer_revisions:0,student_score_writes:0
});
assert.deepEqual(Object.fromEntries(Object.entries(r.per_group).map(([k,v])=>
 [k,[v.total,v.conflicts,v.plausible]])),
 {"NUM02V1_121-132":[12,1,11],
  "NUM02V1_145-147":[3,3,0],
  "ALG04V2_133-138":[6,0,6],
  "QUA12V1_121-123":[3,3,0]});
const flagged=r.rows.filter(x=>x.secondary_check_status.includes("CONFLICT"));
assert.deepEqual(flagged.map(x=>x.question_id).sort(),[
 "NUM02V1_132","NUM02V1_145","NUM02V1_146",
 "NUM02V1_147","QUA12V1_121","QUA12V1_122",
 "QUA12V1_123"].sort());
assert.equal(r.rows.length,24);
assert.equal(new Set(r.rows.map(x=>x.question_id)).size,24);
assert(r.rows.every(x=>x.S1_original_textbook_confirmed===false));
assert(r.rows.every(x=>x.academic_pass_authorized===false&&
 x.canonical_skill_credit_authorized===false));
assert(r.rows.every(x=>x.independent_public_crosschecks.length>=2));
assert(Object.values(BOUNDS).every(x=>x.end>=x.start&&x.lessons.length));
assert.deepEqual(pageRange("SGK Toán 7 T1 KNTT, Bài 7 (Trang 36–37)"),
 {first:36,last:37});
assert.deepEqual(pageRange("SGK Toán 6 T2 KNTT, Bài 30 (Trang 37)"),
 {first:37,last:37});
assert.throws(()=>pageRange("SGK missing page"),/R31_MISSING_PAGE_RANGE/);
assert.throws(()=>pageRange("Trang 43–41"),/R31_MISSING_PAGE_RANGE|R31_INVALID_PAGE_RANGE/);
assert.equal(r.protections.primary_S1_signoff_performed,false);
assert.equal(r.protections.student_skill_counter_enabled,false);
assert.equal(r.protections.history_regraded,false);
assert.equal(r.protections.taxonomy_source_pins_rewritten,false);
const source=fs.readFileSync("scripts/prototypes/math-v2-r31-s1-page-boundary-audit.js","utf8");
assert(!/localStorage|indexedDB|sessionStorage|fetch\s*\(|sendBeacon/.test(source));
assert(!/writeFile|appendFile|unlinkSync|renameSync|rmSync/.test(source));
assert(!fs.readFileSync("mkdocs.yml","utf8").includes("math-v2-r31-s1-page-boundary-audit"));
assert(!fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8")
 .includes("math-v2-r31-s1-page-boundary-audit"));
console.log("PASS R31 page intervals: 7 flagged, 17 broad compatible, 24/24 still S1 unverified; no academic or learner cutover");
console.log(JSON.stringify({summary:r.summary,per_group:r.per_group,
 flagged_ids:flagged.map(x=>x.question_id)}));
