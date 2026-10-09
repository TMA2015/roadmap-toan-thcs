#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const j=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const packet="MATH-PRACTICE-IMPLEMENTATION-W1-R1-20261009";
const scope=j("docs/assets/data/curriculum/practice-implementation-wave1-r1.json");
const a02=j("docs/assets/data/assessment/02-so-va-phep-tinh-core-v1.json");
const a03=j("docs/assets/data/assessment/03-ti-le-ti-le-thuc-core-v1.json");
const a21=j("docs/assets/data/assessment/21-thong-ke-core-v1.json");
const p02=j("docs/assets/data/practice/02-so-va-phep-tinh-v1-07.json");
const p03=j("docs/assets/data/practice/03-ti-le-ti-le-thuc-v1-05.json");
const p12=j("docs/assets/data/practice/12-phuong-trinh-bac-hai-viete-v1-05.json");
const m02=j("docs/assets/data/practice/02-so-va-phep-tinh-v1.manifest.json");
const m03=j("docs/assets/data/practice/03-ti-le-ti-le-thuc-v1.manifest.json");
const m12=j("docs/assets/data/practice/12-phuong-trinh-bac-hai-viete-v1.manifest.json");
const anchors=j("docs/assets/data/anchors/anchor-catalog-v1.json");

assert.equal(scope.packet_id,packet);
assert.equal(scope.status,"CANDIDATE_AWAITING_ACADEMIC_REVIEW");
assert.deepEqual(scope.counts,{readiness_new_items:15,readiness_new_assessments:1,practice_new_items:10,anchor_crosswalk_updates:11,new_canonical_families:0});

const r02=a02.items.filter(x=>x.authoring_review?.packet_id===packet);
const r21=a21.items.filter(x=>x.authoring_review?.packet_id===packet);
assert.equal(r02.length,3);
assert.equal(a03.items.length,10);
assert.equal(r21.length,2);
for(const q of [...r02,...a03.items,...r21]) assert.equal(q.authoring_review?.status,"PENDING");

assert.equal(p02.questions.length,3);
assert.equal(p03.questions.length,4);
assert.equal(p12.questions.length,3);
for(const q of [...p02.questions,...p03.questions,...p12.questions]){
 assert.equal(q.authoring_review?.status,"PENDING");
 assert.equal(q.authoring_review?.packet_id,packet);
 assert.equal(q.options.length,4);
 assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4);
 assert.ok(q.explanation.length>=20);
}
assert.equal(m02.question_count,147);
assert.equal(m03.question_count,124);
assert.equal(m12.question_count,123);
assert.ok(m02.sources.includes("02-so-va-phep-tinh-v1-07.json"));
assert.ok(m03.sources.includes("03-ti-le-ti-le-thuc-v1-05.json"));
assert.ok(m12.sources.includes("12-phuong-trinh-bac-hai-viete-v1-05.json"));

const crossed=anchors.anchors.filter(a=>a.taxonomy_crosswalk_review?.clearance==="PRACTICE_COVERAGE_PRIORITY_R1_REVIEW_COMPLETE");
assert.equal(crossed.length,11);
for(const a of crossed) assert.ok(a.canonical_family_ids?.length>=1);
console.log("PASS: Practice Implementation Wave 1 candidate is bounded to 15 Readiness + 10 Practice + 11 Anchor crosswalks.");
console.log("PASS: all 25 new learner-facing items remain PENDING independent academic review.");
