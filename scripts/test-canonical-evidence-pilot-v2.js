"use strict";

const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file));
const json = (file) => JSON.parse(read(file).toString("utf8"));
const gitBlobSha = (buffer) => crypto.createHash("sha1")
  .update(Buffer.concat([Buffer.from("blob " + buffer.length + "\0"), buffer])).digest("hex");

const core = require("../docs/assets/javascripts/canonical-evidence-pilot-v1.js");
const v5 = require("../docs/assets/javascripts/canonical-evidence-pilot-v2.js");
const config = json("docs/assets/data/curriculum/canonical-evidence-beta-v5-config-v1.json");
const manifestPath = "docs/assets/data/curriculum/canonical-evidence-phase-f-expansion-r1.json";
const manifest = json(manifestPath);

assert.equal(v5.BUILD, "canonical-evidence-beta-v5-phase-f-r1-20260930");
assert.equal(config.storage_key, core.KEY);
assert.equal(config.reviewed_manifest_blob, gitBlobSha(read(manifestPath)));
assert.equal(config.notebook_review.verdict, "PASS");
assert.equal(config.notebook_review.item_coverage, "15/15");
assert.equal(config.notebook_review.revisions, 0);

const files = [...new Set(manifest.scope.selected_items.map((item) => item.source_file))];
const sources = Object.fromEntries(files.map((file) => {
  const full = "docs/assets/data/practice/" + file;
  const expected = manifest.scope.selected_items.find((item) => item.source_file === file).source_blob;
  assert.equal(gitBlobSha(read(full)), expected, file + " source blob changed");
  return [file, json(full).questions];
}));

const items = v5.prepareItems(config, manifest, sources);
assert.equal(items.length, 15);
assert.equal(new Set(items.map((item) => item.id)).size, 15);
assert.deepEqual(items.map((item) => item.id), config.selected_item_ids);
assert.equal(new Set(items.map((item) => item.canonical_skill_id)).size, 5);
assert.equal(new Set(items.map((item) => item.topic)).size, 4);
assert.equal(new Set(items.map(core.evidenceUnitKey)).size, 9);
assert.equal(new Set(items.filter((item) => item.clone_family).map((item) => item.clone_family)).size, 6);
assert.equal(items.filter((item) => !item.clone_family).length, 3);
assert.equal(items.reduce((sum, item) => sum + item.supporting_skills.length, 0), 0);

const classCounts = Object.fromEntries([...new Set(items.map((item) => item.evidence_class))]
  .map((id) => [id, items.filter((item) => item.evidence_class === id).length]));
assert.deepEqual(classCounts, {
  MCQ_RECOGNITION_ONLY: 3,
  MCQ_FINAL_ANSWER_ONLY: 2,
  MCQ_FINAL_OUTPUT_ONLY: 7,
  MCQ_METHOD_SELECTION_ONLY: 3
});

const id120 = manifest.scope.selected_items.find((item) => item.question_id === "ID05V1_120");
assert.deepEqual(id120.legacy_skill_tags, ["phan-tich-hdt", "hieu-hai-binh-phuong"]);
assert.equal(items.find((item) => item.id === "ID05V1_120").canonical_skill_id, "hieu-hai-binh-phuong");

let state = core.emptyState();
// Seed one accepted Beta v4 prospective event for the shared skill.
const v4Seed = {
  schema: core.EVENT_SCHEMA,
  event_id: "v4-seed",
  pilot_version: "beta-v4-core07-r1-20260930",
  question_id: "RAT07V1_009",
  canonical_skill_id: "dieu-kien-xac-dinh",
  topic: "07-phan-thuc-dai-so",
  evidence_class: "MCQ_FINAL_OUTPUT_ONLY",
  clone_family: "RAT07-DOMAIN-LINEAR-009-016",
  correct: true,
  attempted_at: "2026-09-30T00:00:00Z",
  content_version: "core07-source-locked-20260930",
  source_file: "07-phan-thuc-dai-so-v1-01.json",
  source_blob: "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
  assisted: false,
  attempt_kind: "first_unseen_unit",
  independent_evidence: true,
  independent_reason: "first_unseen_unit",
  supporting_skills: []
};
state = core.appendEvidence(state, v4Seed);

const q089 = items.find((item) => item.id === "ALG04V2_089");
const q090 = items.find((item) => item.id === "ALG04V2_090");
let assessment = core.classifyAttempt(state, q089, "initial");
assert.equal(assessment.independent_evidence, true, "cross-topic same skill must not de-dup without reviewed clone equivalence");
state = core.appendEvidence(state,
  core.makeEvent(q089, false, assessment, config, "2026-09-30T00:01:00Z", "f089"));
assessment = core.classifyAttempt(state, q090, "initial");
assert.equal(assessment.independent_evidence, false);
assert.equal(assessment.independent_reason, "clone_family_repeat");
state = core.appendEvidence(state,
  core.makeEvent(q090, true, assessment, config, "2026-09-30T00:02:00Z", "f090"));

const q021 = items.find((item) => item.id === "ID05V1_021");
const q081 = items.find((item) => item.id === "ID05V1_081");
const q120 = items.find((item) => item.id === "ID05V1_120");
const qf021 = items.find((item) => item.id === "FAC06V1_021");
for (const [idx, q] of [q021, q081, q120, qf021].entries()) {
  const a = core.classifyAttempt(state, q, "initial");
  assert.equal(a.independent_evidence, true);
  state = core.appendEvidence(state,
    core.makeEvent(q, idx !== 1, a, config, "2026-09-30T00:1" + idx + ":00Z", "hb-" + idx));
}

const breakdown = v5.evidenceBreakdown(state);
assert.deepEqual(breakdown["dieu-kien-xac-dinh"].by_topic, {
  "07-phan-thuc-dai-so": 1,
  "CĐ04": 1
});
assert.deepEqual(breakdown["dieu-kien-xac-dinh"].by_class, {
  MCQ_FINAL_OUTPUT_ONLY: 1,
  MCQ_FINAL_ANSWER_ONLY: 1
});
assert.equal(breakdown["dieu-kien-xac-dinh"].independent_units, 2);

assert.equal(breakdown["hieu-hai-binh-phuong"].independent_units, 4);
assert.deepEqual(breakdown["hieu-hai-binh-phuong"].by_topic, {
  "CĐ05": 3,
  "CĐ06": 1
});
assert.deepEqual(breakdown["hieu-hai-binh-phuong"].by_class, {
  MCQ_FINAL_OUTPUT_ONLY: 2,
  MCQ_RECOGNITION_ONLY: 1,
  MCQ_METHOD_SELECTION_ONLY: 1
});
assert.equal(breakdown["phan-tich-hdt"], undefined);
assert.equal(breakdown["nhan-dang-hdt"], undefined);

const drifted = structuredClone(sources);
drifted[q089.source_file] = structuredClone(drifted[q089.source_file]);
drifted[q089.source_file].find((q) => q.id === q089.id).answer = 1;
assert.throws(() => v5.prepareItems(config, manifest, drifted), /Source drift/);

assert.equal(config.policy.mastery_threshold, null);
assert.equal(config.policy.mastery_labels, false);
assert.equal(config.policy.core_readiness_credit, false);
assert.equal(config.policy.historical_backfill, false);
assert.equal(config.policy.migration, false);
assert.equal(config.policy.regrade, false);
assert.equal(config.policy.dual_write, false);
assert.equal(config.policy.practice_engine_integration, false);
assert.equal(config.policy.evidence_class_weighting, false);
assert.equal(config.policy.cross_topic_clone_equivalence, false);

console.log("PASS Phase F Beta v5: 15/15 source-locked items, 5 skills, 4 topics, 9 units.");
console.log("PASS prospective cross-topic aggregation with topic/evidence-class breakdown.");
console.log("PASS legacy tag order boundary and no secondary-tag canonical event.");
console.log("PASSED canonical evidence Beta v5 unit checks.");
