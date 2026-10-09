#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const json=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const a=json("docs/assets/data/curriculum/kntt-g9-post-repair-closure-r1.json");
const inv=json("docs/assets/data/curriculum/kntt-dimension-coverage-g9-v1.json");
const w1=json("docs/assets/data/curriculum/kntt-g9-repair-wave1-r1.json");
const w2=json("docs/assets/data/curriculum/kntt-g9-repair-wave2-r1.json");

assert.equal(a.audit_id,"MATH-KNTT-G9-POST-REPAIR-CLOSURE-R1-20261009");
assert.equal(a.status,"POST_REPAIR_CLOSURE_AUDIT_COMPLETE");
assert.equal(a.grade,9);
assert.equal(a.chapters.length,10);
assert.equal(inv.rows.length,10);
assert.equal(w1.independent_review.clearance,"G9_REPAIR_W1_R1_CONTENT_REVIEW_COMPLETE");
assert.equal(w2.independent_review.clearance,"G9_REPAIR_W2_R1_CONTENT_REVIEW_COMPLETE");
assert.equal(a.summary.remaining_p0,0);
assert.equal(a.summary.remaining_p1,0);
assert.equal(a.summary.remaining_p2,0);
assert.equal(a.summary.new_learn_cards_from_repairs,w1.counts.learn_cards+w2.counts.learn_cards);
assert.equal(a.summary.new_micro_items_from_repairs,w1.counts.micro_items+w2.counts.micro_items);
assert.equal(a.summary.new_practice_items,0);
assert.equal(a.summary.new_written_items,0);
assert.equal(a.summary.new_readiness_items,0);
assert.equal(a.summary.new_canonical_skills,0);

const by=new Map(a.chapters.map(x=>[x.chapter,x]));
for(const n of [1,2,3,4,5,9]) assert.equal(by.get(n).post_repair_status,"CLOSED_NO_GAP");
assert.equal(by.get(6).post_repair_status,"CLOSED_AFTER_WAVE2");
assert.equal(by.get(7).post_repair_status,"CLOSED_AFTER_WAVE1");
assert.equal(by.get(8).post_repair_status,"CLOSED_AFTER_WAVE1");
assert.equal(by.get(10).post_repair_status,"CLOSED_WITH_NONBLOCKING_SHARED_GAP");
assert.equal(a.decision.grade9_core_learn_micro_closure,"PASS");
assert.deepEqual(a.decision.open_p0_p1_queue,[]);
assert.equal(a.notebooklm.additional_review_required,false);

for(const [k,v] of Object.entries(a.protected_boundaries)) assert.equal(v,false,"protected boundary expanded: "+k);
console.log("PASS: Grade-9 post-repair closure covers all 10 KNTT chapters with 0 remaining P0/P1/P2 Core Learn/Micro gaps.");
console.log("PASS: repairs total 5 Learn + 20 Micro; Practice/Written/Readiness/taxonomy/mastery/history remain protected.");
