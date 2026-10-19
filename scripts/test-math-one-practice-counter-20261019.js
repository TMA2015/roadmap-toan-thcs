"use strict";
// Cutover regression: exactly one live formative writer and one learner Skill
// projection, with Family gaps never deleting Practice activity.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const read = p => fs.readFileSync(path.join(root, p), "utf8");
const registry = JSON.parse(read("docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json"));
const logic = require("../docs/assets/javascripts/skill-map-v2-preview.js");
const practice = read("docs/assets/javascripts/practice-engine-v2.js");
const mapSource = read("docs/assets/javascripts/skill-map-v2-preview.js");
const dashboard = read("docs/assets/javascripts/math-progress-dashboard-v1.js");
const learnerPage = read("docs/ban-do-ky-nang/index.md");

assert.ok(practice.includes("RoadmapLearnerEvidence.recordAnswer"), "Practice must retain the one writer");
assert.ok(!practice.includes("RoadmapCanonicalEvidenceObserver?.captureAttempt"), "G2 parallel Practice write forbidden");
assert.ok(!practice.includes("RoadmapTaxonomyV2Observer?.captureAttempt"), "Taxonomy V2 parallel Practice write forbidden");
assert.ok(mapSource.includes('this.mode === "learner"\n        ? summarizePracticeOnly(registry, this.legacy)'), "learner must project the Practice store");
assert.ok(mapSource.includes('if (!learnerMode) this.renderLegacy()'), "no separate historical counter card in learner Skill Map");
assert.ok(!dashboard.includes('parse(storage,"toan-thcs-taxonomy-v2-evidence-v1")'), "dashboard must not load second Practice counter");
assert.ok(learnerPage.includes("cùng một nguồn Practice"), "student-facing documentation must say one source");

// The source still holds all actual question attempts, even if mapping to a
// Family is ambiguous, missing or academically disputed.
const sample = {
  questions: {
    "NUM02V1_121": {attempted: 2, correct: 1},
    "NUM02V1_142": {attempted: 1, correct: 1},
    "RAT03V1_121": {attempted: 2, correct: 2},
    "ALG04V2_133": {attempted: 1, correct: 0}
  },
  tags: {
    "lam-tron-so": {attempted: 2, correct: 1},
    "can-bac-hai": {attempted: 1, correct: 1},
    "mo-hinh-ti-le": {attempted: 2, correct: 2},
    "chia-da-thuc-mot-bien": {attempted: 1, correct: 0}
  }
};
const s = logic.summarizePracticeOnly(registry, sample);
assert.equal(s.totals.practice_attempted, 6, "global count is by original questions, not sum of tags");
assert.equal(s.totals.practice_correct, 4);
assert.equal(s.totals.practiced_questions, 4);
assert.equal(s.totals.matched_skill_tags, 1);
assert.equal(s.totals.unmatched_skill_tags, 3);
assert.deepEqual(s.summaries.get("NUM-SETS").practice_subskills.map(r=>r.tag), ["lam-tron-so"]);
assert.equal(s.summaries.get("RATIO-MODEL").practice_subskills.length, 0, "Grade-7 core ratio must not leak into Entrance10 display");
assert.equal(s.summaries.get("ALG-DIV-MONOMIAL").practice_subskills.length, 0, "polynomial by binomial remains disputed");
assert.equal(s.summaries.get("RAD-BASIC").practice_subskills.length, 0, "Grade-7 square roots must not map into Grade-9 radicals");
assert.equal(s.totals.practice_attempted,
  Object.values(sample.questions).reduce((n,q)=>n+q.attempted,0));
assert.ok(read("docs/assets/javascripts/assessment-engine-v1.js").includes('const STORAGE_KEY = "toan-thcs-assessment-v1"'),
  "Readiness remains a separate evidence lane, not blended mastery");
console.log("PASS Math one Practice source and readable Skill Map: 6 attempts, 3 guarded legacy tags, no duplicate shadow writes.");
