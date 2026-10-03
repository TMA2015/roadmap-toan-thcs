"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const logic = require("../docs/assets/javascripts/skill-map-v2-preview.js");

assert.equal(logic.CONTROLLED_BUILD, "skill-map-v2-i6-controlled-r1-20261003");

const none = logic.evidenceDisplay({ independent_units: 0, independent_correct: 0 });
assert.equal(none.state, "NO_EVIDENCE");
assert.equal(none.show_percent, false);

const oneCorrect = logic.evidenceDisplay({ independent_units: 1, independent_correct: 1 });
assert.equal(oneCorrect.state, "SPARSE_DATA");
assert.equal(oneCorrect.show_percent, false);
assert.equal(oneCorrect.evidence_accuracy, 1);

const twoMixed = logic.evidenceDisplay({ independent_units: 2, independent_correct: 1 });
assert.equal(twoMixed.state, "SPARSE_DATA");
assert.equal(twoMixed.show_percent, false);
assert.equal(twoMixed.evidence_accuracy, 0.5);

const threeMixed = logic.evidenceDisplay({ independent_units: 3, independent_correct: 2 });
assert.equal(threeMixed.state, "PRACTICE_TREND_REVIEWABLE");
assert.equal(threeMixed.show_percent, true);
assert.equal(Math.round(threeMixed.evidence_accuracy * 100), 67);

const page = read("docs/collaboration/skill-map-v2-i6-controlled.md");
assert.ok(page.includes("Controlled learner-facing release"));
assert.ok(page.includes("Dữ liệu còn ít"));
assert.ok(page.includes("không phải kết luận thành thạo"));
assert.ok(page.includes("data-skill-map-v2-controlled"));
assert.ok(page.includes('data-skill-map-v2-mode="learner"'));

const source = read("docs/assets/javascripts/skill-map-v2-preview.js");
assert.ok(!source.includes("localStorage.setItem"), "I6 Skill Map must remain read-only");
assert.ok(source.includes("Tỷ lệ đúng quan sát"));
assert.ok(source.includes("Dữ liệu còn ít"));
assert.ok(source.includes("Chưa có bằng chứng"));
assert.ok(!source.includes("data-readiness-gate"));
assert.ok(!source.includes("data-mastery-action"));

console.log("PASS I6 sparse-evidence presentation policy.");
console.log("PASS N<=2 hides percentage while N>=3 may show descriptive percentage.");
console.log("PASS controlled learner page stays read-only with Mastery/Readiness off.");
