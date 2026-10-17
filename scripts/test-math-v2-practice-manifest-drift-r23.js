#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const {auditManifests}=require("./prototypes/math-v2-practice-manifest-drift-r23.js");
const source=fs.readFileSync("scripts/prototypes/math-v2-practice-manifest-drift-r23.js","utf8");
const site=fs.readFileSync("mkdocs.yml","utf8");
const practice=fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8");
const r=auditManifests();
assert.equal(r.schema,"math-r23-current-manifest-and-drift-preflight-v1");
assert.equal(r.status,"QA_ONLY_HOLD_ALL_NEW_AND_DRIFT");
assert.equal(r.topics.length,24);
assert.equal(r.summary.historic_policy_rows,3114);
assert.equal(r.summary.historic_source_locked_family,2750);
assert.equal(r.summary.historic_formative_no_family,214);
assert.equal(r.summary.historic_source_holds,150);
assert(r.summary.candidate_questions>=3114);
assert(r.summary.new_unreviewed_ids>0,"New rich and MCQ practice items must not be silently mapped");
assert(r.summary.rich_new_items>0,"Rich written-style items need distinct source/response contract");
assert.equal(r.summary.candidate_questions,
  r.summary.shared_policy_ids+r.summary.new_unreviewed_ids);
assert.equal(r.summary.historic_policy_rows,
  r.summary.shared_policy_ids+r.summary.missing_policy_ids);
assert.equal(r.summary.new_unreviewed_ids,
  r.summary.mcq_new_items+r.summary.rich_new_items+r.summary.unrecognized_new_items);
assert.equal(r.summary.live_page_referenced_topics+
 r.summary.candidate_manifest_only_topics,24);
const c2=r.topics.find(x=>x.topic_id==="CT02");
assert(c2&&c2.candidate_manifest.endsWith("02-so-va-phep-tinh-v4.manifest.json"));
assert.equal(c2.current_counts.candidate_questions,149);
assert.equal(c2.policy_rows,120);
assert.equal(c2.candidate_only,false);
const c4=r.topics.find(x=>x.topic_id==="CT04");
assert(c4&&c4.candidate_manifest.endsWith("04-bieu-thuc-dai-so-v6.manifest.json"));
assert.equal(c4.current_counts.candidate_questions,142);
assert.equal(c4.policy_rows,132);
// CĐ04 v6 is a catalog candidate, not shown linked on the inspected
// topic's bai-tap page; never label it "live" by version alone.
assert.equal(c4.candidate_only,true);
for(const t of r.topics){
 assert.equal(t.current_counts.shared_policy_ids+
  t.current_counts.new_unreviewed_ids,t.current_counts.candidate_questions);
 assert.equal(t.current_counts.shared_policy_ids+
  t.current_counts.missing_policy_ids,t.policy_rows);
 assert(!t.current_counts.invalid_candidate_items);
 assert.equal(t.candidate_only,!t.current_counts.live_page_referenced_topics);
}
for(const [field,value] of Object.entries(r.protections)){
 assert.equal(value,false,field+" must remain a protected false claim");
}
assert(!site.includes("math-v2-practice-manifest-drift-r23"));
assert(!practice.includes("math-v2-practice-manifest-drift-r23"));
assert(!/\blocalStorage\b|\bindexedDB\b|\bsessionStorage\b|\bfetch\s*\(|\bsendBeacon\b/.test(source));
assert(!/\bwriteFile\b|\bappendFile\b|\bmkdir\b|\bunlink\b|\brmSync\b/.test(source));
console.log("PASS R23: exact reviewed-source holds and candidate-only newer Practice manifest reconciliation; no auto Skill accreditation");
console.log(JSON.stringify({summary:r.summary,
 drifted_topics:r.topics.filter(t=>t.changed_policy_source_chunks.length)
 .map(t=>({topic:t.topic_id,files:t.changed_policy_source_chunks})),
 new_item_topics:r.topics.filter(t=>t.current_counts.new_unreviewed_ids>0)
 .map(t=>({topic:t.topic_id,new_items:t.current_counts.new_unreviewed_ids,
  sample:t.examples.new_ids.slice(0,5),rich:t.current_counts.rich_new_items,
  candidate_only:t.candidate_only}))}));
