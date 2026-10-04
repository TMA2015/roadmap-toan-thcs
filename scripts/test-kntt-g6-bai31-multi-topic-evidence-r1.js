#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const json=p=>JSON.parse(fs.readFileSync(p,"utf8"));

const audit=json("docs/assets/data/curriculum/kntt-dimension-coverage-g6-v1.json");
const ws2=json("docs/assets/data/curriculum/topic02-learning-workspace.json");
const ws3=json("docs/assets/data/curriculum/topic03-learning-workspace.json");
const m2=json("docs/assets/data/practice/02-so-va-phep-tinh-micro-v1.json");
const m3=json("docs/assets/data/practice/03-ti-le-ti-le-thuc-micro-v1.json");
const p2=json("docs/assets/data/practice/02-so-va-phep-tinh-v1.manifest.json");
const p3=json("docs/assets/data/practice/03-ti-le-ti-le-thuc-v1.manifest.json");
const recon=json("docs/assets/data/curriculum/kntt-grade6-reconciliation-r1.json");

const row=audit.rows.find(r=>r.lesson_ref==="Bài 31");
assert.ok(row);
assert.deepEqual(row.semantic_targets.direct_skills,["ti-so","ti-so-phan-tram","phan-tram"]);
assert.ok(row.secondary_topics.includes("02-so-va-phep-tinh"));

const c3=ws3.cards.find(c=>c.id==="rat03-core-g6-1");
const c2=ws2.cards.find(c=>c.id==="num02-g6-core-5");
assert.ok(c3&&c2);
assert.ok(c3.skills.includes("ti-so")&&c3.skills.includes("ti-so-phan-tram"));
assert.ok(c2.skills.includes("phan-tram"));
assert.ok(c2.kntt_lessons.includes("Lớp 6 · Bài 28–31"));

const q3=Object.fromEntries(m3.questions.map(q=>[q.id,q]));
const q2=Object.fromEntries(m2.questions.map(q=>[q.id,q]));
assert.deepEqual(q3.RAT03MICRO_001.tags.skill,["ti-so"]);
assert.deepEqual(q3.RAT03MICRO_003.tags.skill,["ti-so-phan-tram"]);
assert.deepEqual(q2.NUM02MICRO_014.tags.skill,["phan-tram"]);
assert.deepEqual(q2.NUM02MICRO_015.tags.skill,["phan-tram"]);

assert.ok(p3.skill_labels["ti-so"]);
assert.ok(p3.skill_labels["ti-so-phan-tram"]);
assert.ok(p2.skill_labels["phan-tram"]);

const rec=recon.entries.find(e=>e.lesson_ref==="Bài 31"&&e.historical_ref==="bai-toan-phan-tram");
assert.ok(rec);
assert.equal(rec.resolution,"CANONICAL_SKILL");
assert.deepEqual(rec.canonical_skill_ids,["phan-tram"]);
assert.ok(rec.canonical_family_ids.includes("NUM-PERCENT"));

assert.equal(row.dimensions.LEARN_CONTENT.status,"VERIFIED_DIRECT");
assert.equal(row.dimensions.MICRO_PRACTICE.status,"VERIFIED_DIRECT");
assert.equal(row.dimensions.PRACTICE_BANK.status,"TOPIC_SKILL_EVIDENCE");
assert.equal(row.repair_evidence.status,"RECONCILED_EXISTING_MULTI_TOPIC_EVIDENCE_R1");
assert.equal(row.dimensions.WRITTEN_LIBRARY.status,"CANDIDATE_ONLY_NO_KNTT_PLACEMENT");
assert.equal(row.dimensions.READINESS.status,"NOT_VERIFIED_STRUCTURED");

console.log("PASS: Bài 31 direct evidence is already complete when reviewed Topic03 + Topic02 sources are reconciled together.");
console.log("PASS: no new percent content, canonical skill, Practice item, Readiness claim, runtime write or learner-history migration is required.");
