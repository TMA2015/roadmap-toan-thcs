#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const json=p=>JSON.parse(read(p));
const blob=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text,"utf8")+"\0"+text).digest("hex");

const placement=json("docs/assets/data/curriculum/kntt-g6-topic20-placement-r1.json");
const display=json("docs/assets/data/curriculum/topic20-core-display-v2.json");
const legacyPath="docs/assets/data/curriculum/topic20-learning-workspace.json";
const microPath="docs/assets/data/practice/20-hinh-hoc-tong-hop-micro-v1.json";
const audit=json("docs/assets/data/curriculum/kntt-dimension-coverage-g6-v1.json");

assert.equal(placement.schema,"kntt-grade6-topic20-placement-overlay-r1");
assert.equal(placement.grade,6);
assert.equal(placement.topic,"20-hinh-hoc-tong-hop");
assert.equal(placement.placements.length,5);
for(const lock of Object.values(placement.source_locks)) assert.equal(blob(read(lock.path)),lock.sha,"source drift: "+lock.path);
assert.equal(blob(read(legacyPath)),"774997cd9ac4d2efc1c53c17c0de48e6fcdba497");
assert.equal(blob(read(microPath)),"efaa4bff821023700381edee0168b294c2d3ea05");
assert.equal(blob(read("docs/assets/data/curriculum/topic20-core-display-v2.json")),"ebd5e3e2a7d58d0a75a4cfafd7c026bbd693bd32");

const cards=Object.fromEntries(display.cards.map(c=>[c.id,c]));
const byLesson=Object.fromEntries(audit.rows.map(r=>[r.lesson_ref,r]));
for(const p of placement.placements){
  assert.ok(byLesson[p.lesson_ref],p.lesson_ref);
  const union=[];
  for(const ce of p.card_evidence){
    const card=cards[ce.card_id];
    assert.ok(card,"missing display card "+ce.card_id);
    assert.ok(card.kntt_lessons.includes("Lớp 6")||card.kntt_lessons.includes("Lớp 6–9"),"card excludes Grade 6: "+ce.card_id);
    for(const skill of ce.skills){
      assert.ok(card.skills.includes(skill),`mapped skill ${skill} missing from ${ce.card_id}`);
      union.push(skill);
    }
  }
  assert.deepEqual([...new Set(union)].sort(),[...p.direct_skills].sort(),"placement union mismatch "+p.lesson_ref);
  assert.deepEqual([...byLesson[p.lesson_ref].semantic_targets.direct_skills].sort(),[...p.direct_skills].sort(),"audit semantic target mismatch "+p.lesson_ref);
  assert.equal(byLesson[p.lesson_ref].dimensions.LEARN_CONTENT.status,"VERIFIED_DIRECT");
  assert.equal(byLesson[p.lesson_ref].dimensions.LEARN_CONTENT.placement_strength,"KNTT_G6_EXACT_PLACEMENT_OVERLAY");
  assert.equal(byLesson[p.lesson_ref].dimensions.MICRO_PRACTICE.status,"VERIFIED_DIRECT");
  assert.equal(byLesson[p.lesson_ref].dimensions.PRACTICE_BANK.status,"TOPIC_SKILL_EVIDENCE");
  assert.equal(byLesson[p.lesson_ref].dimensions.WRITTEN_LIBRARY.status,"NONE");
  assert.equal(byLesson[p.lesson_ref].dimensions.READINESS.status,"NOT_VERIFIED_STRUCTURED");
  assert.equal(byLesson[p.lesson_ref].repair_evidence.status,"RECONCILED_EXISTING_PLACEMENT_R1");
}
assert.equal(audit.summary.dimension_status_counts.LEARN_CONTENT.PARTIAL_PLACEMENT,0);
assert.equal(audit.summary.dimension_status_counts.LEARN_CONTENT.VERIFIED_DIRECT,23);
assert.equal(audit.summary.topic20_placement_r1.status,"RECONCILED_EXISTING_PLACEMENT_R1");
for(const [k,v] of Object.entries(placement.protected_boundaries)) assert.equal(v,false,"protected boundary changed: "+k);
for(const [k,v] of Object.entries(audit.protected_boundaries)) assert.equal(v,false,"audit protected boundary changed: "+k);

console.log("PASS: Bài 18–22 exact KNTT placement maps to existing source-locked Topic20 display cards with exact direct-skill unions.");
console.log("PASS: legacy workspace, Micro bank and learner-data boundaries remain immutable; no new academic content or canonical skill.");
