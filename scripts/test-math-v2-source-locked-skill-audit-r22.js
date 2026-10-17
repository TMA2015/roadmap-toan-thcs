#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const {audit,gitBlob}=require("./prototypes/math-v2-source-locked-skill-audit-r22.js");
const moduleSource=fs.readFileSync("scripts/prototypes/math-v2-source-locked-skill-audit-r22.js","utf8");
const site=fs.readFileSync("mkdocs.yml","utf8");
const practice=fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8");
const fixture="docs/assets/data/practice/02-so-va-phep-tinh-v1-01.json";
assert.equal(gitBlob(Buffer.from("hello")),"b6fc4c620b67d95f953a5c1c1230aaab5db5a1b0");
const baseline=audit();
assert.equal(baseline.schema,"math-r22-source-locked-audit-v1");
assert.equal(baseline.topics_checked,24);
assert.equal(baseline.policy_questions_checked,3114);
assert.equal(Object.values(baseline.status_counts).reduce((s,x)=>s+x,0),3114);
assert.equal(baseline.family_candidate_rows+baseline.no_family_rows+baseline.held_rows,3114);
assert.equal(baseline.mapping_authorized_for_learners,false);
assert.equal(baseline.mastery_authorized,false);
assert.equal(baseline.written_readiness_credit_authorized,false);
assert.equal(baseline.automatic_v1_migration,false);
assert.equal(baseline.canonical_option_ids_verified,false);
assert(baseline.topic_reports.find(x=>x.topic_id==="CT06")?.questions===120);
assert(baseline.topic_reports.find(x=>x.topic_id==="CT02")?.questions===120);
const subset=audit({topics:["CT02"]});
assert.equal(subset.topics_checked,1);
assert.equal(subset.policy_questions_checked,120);
assert(subset.family_candidate_rows>0, "Known reviewed CT02 families must be identifiable");
assert(subset.no_family_rows>0, "Unmapped CT02 items must not be silently credited");
// Changing the canonical bank's bytes (even a single whitespace byte)
// causes source-pinned rows to fail closed rather than receiving new Skill credit.
const changed=audit({topics:["CT02"],readBytes:rel=>{
 const b=fs.readFileSync(rel);
 return rel===fixture?Buffer.concat([b,Buffer.from(" ")]):b;
}});
assert(changed.status_counts.SOURCE_CHANGED_HOLD>0);
assert(changed.family_candidate_rows<subset.family_candidate_rows);
assert.equal(changed.mapping_authorized_for_learners,false);
// Change a compiled reviewed Skill tag without changing the question bank.
// It must fail instead of reassigning the target Skill from convenient guesses.
const policy="docs/assets/data/curriculum/taxonomy-v2-runtime/ct02-r1.json";
const altered=audit({topics:["CT02"],readBytes:rel=>{
 const b=fs.readFileSync(rel);
 if(rel!==policy)return b;
 const data=JSON.parse(b.toString("utf8"));
 data.rows[0].legacy_skill_tags=["unreviewed-skill-tag"];
 return Buffer.from(JSON.stringify(data));
}});
assert(altered.status_counts.SKILL_TAG_MISMATCH_HOLD>=1);
// Any attempt to run Skill credit must stay in the separate approved workflow.
assert(!site.includes("math-v2-source-locked-skill-audit-r22"));
assert(!practice.includes("math-v2-source-locked-skill-audit-r22"));
assert(!/localStorage|indexedDB|fetch\s*\(|sendBeacon|sessionStorage/.test(moduleSource));
console.log("PASS R22 source-pinned 24 topics/3114 historical policy rows; QA-only family candidates, no-family, changed blob, changed tag fail-closed");
console.log(JSON.stringify({verified_candidates:baseline.family_candidate_rows,
  formative_no_family:baseline.no_family_rows,holds:baseline.held_rows,
  statuses:baseline.status_counts}));
