#!/usr/bin/env node
"use strict";
const fs=require("node:fs");
const assert=require("node:assert/strict");
const read=p=>JSON.parse(fs.readFileSync(p,"utf8"));

const manifest=read("docs/assets/data/curriculum/readiness-implementation-wave1-r1.json");
const cand=read("docs/assets/data/assessment/readiness-implementation-wave1-r1-candidates.json");
const decision=read("docs/assets/data/curriculum/readiness-coverage-priority-r1.json");
const reg=read("docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json");
const packet=fs.readFileSync("review-packets/readiness-implementation-wave1-r1/00_NOTEBOOKLM_PACKET_R1.md","utf8");

assert.equal(manifest.implementation_id,"MATH-READINESS-IMPLEMENTATION-W1-R1-20261010");
assert.equal(manifest.status,"CANDIDATE_AWAITING_ACADEMIC_CONTENT_REVIEW");
assert.equal(manifest.base_clearance,"READINESS_COVERAGE_PRIORITY_R1_REVIEW_COMPLETE");
assert.equal(cand.packet_id,manifest.implementation_id);
assert.equal(cand.candidate_count,18);
assert.equal(cand.candidates.length,18);
assert.equal(decision.add_readiness.length,18);

const ids=cand.candidates.map(x=>x.item.id);
const families=cand.candidates.map(x=>x.family_id);
assert.equal(new Set(ids).size,18);
assert.equal(new Set(families).size,18);
assert.deepEqual(new Set(families),new Set(decision.add_readiness));

const mapByLegacy=new Map();
for(const m of reg.legacy_mappings||[]){
  const key=m.topic_id+":"+m.legacy_id;
  if(!mapByLegacy.has(key))mapByLegacy.set(key,new Set());
  if(m.family_id)mapByLegacy.get(key).add(m.family_id);
}

for(const x of cand.candidates){
  assert.equal(x.item.type,"mcq");
  assert.equal(x.item.points,1);
  assert.equal(x.item.options.length,4);
  assert.ok(Number.isInteger(x.item.answer)&&x.item.answer>=0&&x.item.answer<4);
  assert.ok(String(x.item.question||"").trim());
  assert.ok(String(x.item.explanation||"").trim());
  assert.equal(x.item.authoring_review.status,"PENDING");
  assert.equal(x.item.authoring_review.packet_id,"MATH-READINESS-IMPLEMENTATION-W1-R1-20261010");
  assert.equal(x.item.authoring_review.base_priority_clearance,"READINESS_COVERAGE_PRIORITY_R1_REVIEW_COMPLETE");
  assert.equal(x.approved_scope,decision.add_scope[x.family_id]);

  const topicId="CT"+x.target_file.match(/assessment\/(\d\d)-/)[1];
  const exact=mapByLegacy.get(topicId+":"+x.item.skill);
  assert.ok(exact&&exact.size===1,"candidate primary skill must map exactly: "+x.item.id);
  assert.equal([...exact][0],x.family_id,"candidate family mismatch: "+x.item.id);

  const live=read(x.target_file);
  assert.ok(!live.items.some(i=>i.id===x.item.id),"candidate ID already published: "+x.item.id);
  assert.equal(live.policy.hints,false);
  assert.equal(live.policy.tutor,false);
  assert.equal(live.policy.hard_gate,false);
  assert.equal(live.readiness.hard_gate,false);
}

const allLiveAssessmentFiles=fs.readdirSync("docs/assets/data/assessment")
  .filter(n=>/^\d\d-.*-core-v1\.json$/.test(n));
let liveCount=0;
for(const name of allLiveAssessmentFiles)liveCount+=read("docs/assets/data/assessment/"+name).items.length;
assert.equal(liveCount,219,"candidate wave must not publish before content review");

assert.equal(manifest.counts.new_items,18);
assert.equal(manifest.counts.existing_items_modified,0);
assert.equal(manifest.counts.threshold_changes,0);
assert.equal(manifest.counts.hard_gate_changes,0);
assert.equal(manifest.counts.mastery_history_changes,0);
for(const v of Object.values(manifest.protected_boundaries))assert.equal(v,true);

assert.equal((packet.match(/^### .* — /gm)||[]).length,18);
assert.ok(packet.includes("CANDIDATE ONLY — NOT PUBLISHED"));
assert.ok(packet.includes("READINESS_IMPLEMENTATION_W1_R1_CONTENT_REVIEW_COMPLETE"));

console.log("PASS: Readiness Implementation Wave 1 stages exactly 18 candidate MCQs for the 18 independently approved ADD_READINESS families.");
console.log("PASS: all primary skills map exactly to their canonical families; live Readiness remains 219 items until content review passes.");
