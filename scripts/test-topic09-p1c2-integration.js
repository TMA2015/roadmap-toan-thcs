#!/usr/bin/env node
"use strict";

const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");

const read = (p) => fs.readFileSync(p);
const json = (p) => JSON.parse(read(p).toString("utf8"));
const gitBlobSha = (buffer) => crypto.createHash("sha1")
  .update(Buffer.concat([Buffer.from("blob " + buffer.length + "\0"), buffer]))
  .digest("hex");

const manifestPath = "docs/assets/data/practice/09-he-phuong-trinh-v1.manifest.json";
const chunkPath = "docs/assets/data/practice/09-he-phuong-trinh-v1-05.json";
const extensionPath = "docs/assets/data/curriculum/taxonomy-v2-runtime/ct09-p1c2-extension-r1.json";
const receiptPath = "review-packets/academic-depth/ct09-p1c2/02_NOTEBOOKLM_CT09_P1C2_INTERACTIVE_R1_PASS_RECEIPT.md";

const manifest = json(manifestPath);
const chunk = json(chunkPath);
const extension = json(extensionPath);
const obs = require("../docs/assets/javascripts/taxonomy-v2-evidence-observer-v1.js");

assert.equal(manifest.question_count, 129);
assert.equal(manifest.sources.at(-1), "09-he-phuong-trinh-v1-05.json");
assert.equal(manifest.variant_group_policy?.group_count, 27);
assert.equal(manifest.variant_group_policy?.affects_evidence, false);

assert.equal(chunk.questions.length, 9);
assert.deepEqual(
  chunk.questions.map((q) => q.id),
  Array.from({ length: 9 }, (_, i) => "SYS09V1_" + String(i + 121).padStart(3, "0"))
);
assert.equal(chunk.academic_review?.status, "APPROVED");
assert.equal(chunk.academic_review?.receipt, receiptPath);
assert.ok(fs.existsSync(receiptPath));

const expected = {
  SYS09V1_121: { skills:["nghiem-pt-hai-an"], type:"nhan-biet-pt-bac-nhat-hai-an", difficulty:"basic", group:"SYS09-CONCEPT-EQ-RECOGNITION" },
  SYS09V1_122: { skills:["y-nghia-hinh-hoc"], type:"duong-thang-nghiem-hai-diem", difficulty:"intermediate", group:"SYS09-GRAPH-TWO-POINTS" },
  SYS09V1_123: { skills:["giai-he-cong"], type:"giai-he-cong", difficulty:"intermediate", group:"SYS09-ELIM-SCALE-ONE" },
  SYS09V1_124: { skills:["giai-he-cong"], type:"giai-he-cong", difficulty:"intermediate", group:"SYS09-ELIM-EQUAL-X" },
  SYS09V1_125: { skills:["bien-doi-truoc-giai"], type:"bien-doi-truoc-giai", difficulty:"intermediate", group:"SYS09-COEFF-DECIMAL-SCALE" },
  SYS09V1_126: { skills:["bien-doi-truoc-giai"], type:"bien-doi-truoc-giai", difficulty:"intermediate", group:"SYS09-COEFF-IRRATIONAL-CANCEL" },
  SYS09V1_127: { skills:["lap-he-bai-toan"], type:"gia-chiet-khau", difficulty:"intermediate", group:"SYS09-MODEL-DISCOUNT" },
  SYS09V1_128: { skills:["lap-he-bai-toan"], type:"pha-tron-nong-do", difficulty:"intermediate", group:"SYS09-MODEL-MIXTURE" },
  SYS09V1_129: { skills:["lap-he-bai-toan"], type:"nang-suat-thoi-gian", difficulty:"intermediate", group:"SYS09-MODEL-WORKRATE" }
};

for (const q of chunk.questions) {
  const e = expected[q.id];
  assert.ok(e, "unexpected P1-C2 id " + q.id);
  assert.equal(q.answer, 0, q.id + " reviewed correct option");
  assert.equal(q.options.length, 4, q.id + " four options");
  assert.equal(q.hints?.length, 2, q.id + " two reviewed hints");
  assert.ok(String(q.explanation || "").trim(), q.id + " explanation");
  assert.deepEqual(q.tags?.skill, e.skills, q.id + " legacy skill compatibility");
  assert.equal(q.tags?.type, e.type, q.id + " precise problem type");
  assert.equal(q.difficulty, e.difficulty, q.id + " difficulty");
  assert.equal(q.variant_group, e.group, q.id + " variant group");
}
assert.equal(new Set(chunk.questions.map(q => q.variant_group)).size, 9);
assert.equal(chunk.questions.some(q => q.tags?.type === "bai-toan-thuc-te" && q.variant_group === "SYS09-COUNT-VALUE"), false, "P1-C2 must not add PT12 count/value");

const chunkBlob = gitBlobSha(read(chunkPath));
assert.equal(chunkBlob, extension.source_file?.blob_sha);
assert.equal(extension.schema, obs.CT09_P1C2_EXTENSION_SCHEMA);
assert.equal(extension.source_review?.verdict, "PASS");
assert.equal(extension.source_review?.authorization, "CLEARED_FOR_CT09_P1C2_INTEGRATION_ONLY");
assert.equal(extension.mastery_readiness_credit, false);
assert.equal(extension.backfill_existing_attempts, false);
assert.equal(extension.learner_mastery_write_enabled, false);
assert.equal(extension.rows.length, 9);
assert.equal(extension.counts?.distinct_clone_families, 9);

const familyExpected = {
  SYS09V1_121:["SYS-CONCEPT","MCQ_RECOGNITION_ONLY"],
  SYS09V1_122:["SYS-CONCEPT","MCQ_RECOGNITION_ONLY"],
  SYS09V1_123:["SYS-SOLVE","MCQ_METHOD_SELECTION_ONLY"],
  SYS09V1_124:["SYS-SOLVE","MCQ_FINAL_ANSWER_ONLY"],
  SYS09V1_125:["SYS-SOLVE","MCQ_METHOD_SELECTION_ONLY"],
  SYS09V1_126:["SYS-SOLVE","MCQ_FINAL_ANSWER_ONLY"],
  SYS09V1_127:["SYS-MODEL","MCQ_MODELING_PARTIAL_SYSTEM_SELECTION"],
  SYS09V1_128:["SYS-MODEL","MCQ_MODELING_PARTIAL_SYSTEM_SELECTION"],
  SYS09V1_129:["SYS-MODEL","MCQ_MODELING_PARTIAL_SYSTEM_SELECTION"]
};
for (const row of extension.rows) {
  const [family,evidence] = familyExpected[row.question_id];
  assert.equal(row.family_id, family, row.question_id + " family");
  assert.equal(row.evidence_class, evidence, row.question_id + " evidence class");
  assert.equal(row.independent_credit_authorized, false, row.question_id + " no authorized mastery/readiness credit");
  assert.equal(row.capture_status, obs.I3G_ACTIVE_STATUS, row.question_id + " shadow capture status");
}
assert.equal(new Set(extension.rows.map(r => r.clone_family)).size, 9, "nine distinct reviewed clone families");

const extensionBlob = gitBlobSha(read(extensionPath));
assert.equal(extensionBlob, obs.EXPECTED_CT09_P1C2_EXTENSION_BLOB, "observer extension provenance blob");
assert.equal(chunkBlob, obs.EXPECTED_CT09_P1C2_SOURCE_BLOB, "observer P1-C2 source blob");

const fakePolicy = {
  capture_version:"taxonomy-v2-i3g-ct02-25-v1",
  source_registry:{blob_sha:"registry-test"},
  source_topic_policies:[]
};
const baseState = { policy:fakePolicy, rows:new Map(), profile:Object.freeze({schema:"qa"}) };
const state = obs.extendWithCt09P1c2(baseState, extension, extensionBlob);
assert.equal(state.rows.size, 9);
const first = state.rows.get("SYS09V1_121");
let rec = obs.recordAttemptToStore(obs.emptyStore(), first, {
  correct:true, hintsUsed:0, fullSolutionViewed:false, selectedIndex:0, practiceMode:"qa"
}, fakePolicy, "2026-10-03T15:00:00+07:00", "p1c2-first");
assert.equal(rec.event.independent_evidence, true);
assert.equal(rec.event.family_id, "SYS-CONCEPT");
assert.equal(rec.event.source_blob, chunkBlob);
assert.equal(rec.event.source_topic_policy_blob, extensionBlob);

rec = obs.recordAttemptToStore(rec.store, first, {
  correct:true, hintsUsed:0, fullSolutionViewed:false, selectedIndex:0, practiceMode:"qa"
}, fakePolicy, "2026-10-03T15:01:00+07:00", "p1c2-repeat");
assert.equal(rec.event.independent_evidence, false);
assert.equal(rec.event.independent_reason, "repeat_question");

console.log("PASS: CT09 P1-C2 appends exactly SYS09V1_121..129 with reviewed content and 27 total delivery groups.");
console.log("PASS: 9 reviewed taxonomy extension rows preserve family/evidence/clone boundaries.");
console.log("PASS: P1-C2 shadow evidence captures descriptively while Mastery/Readiness and backfill remain off.");
