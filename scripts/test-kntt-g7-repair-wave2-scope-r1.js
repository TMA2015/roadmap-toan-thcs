const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const artifact = JSON.parse(fs.readFileSync(path.join(root, "docs/assets/data/curriculum/kntt-g7-repair-wave2-scope-r1.json"), "utf8"));

assert.equal(artifact.packet_id, "MATH-KNTT-G7-REPAIR-WAVE2-SCOPE-R1-20261008");
assert.equal(artifact.status, "ACADEMIC_SCOPE_REVIEW_PENDING");
assert.equal(artifact.notebooklm_source_contract.selected_source_count, 5);
assert.deepEqual(artifact.wave1_status.groups, ["BAI1_3","BAI5_7","BAI26_28"]);
assert.equal(artifact.wave1_status.status, "CLOSED_DEPLOYED");
assert.deepEqual(artifact.proposed_wave2, ["BAI4","BAI18_19","BAI22_23"]);
assert.equal(artifact.max_groups_wave2, 3);
assert.deepEqual(artifact.reviewed_remaining_priorities.BAI4.dimensions, ["LEARN","MICRO"]);
assert.deepEqual(artifact.reviewed_remaining_priorities.BAI18_19.dimensions, ["MICRO"]);
assert.deepEqual(artifact.reviewed_remaining_priorities.BAI22_23.dimensions, ["LEARN","MICRO"]);
assert.equal(artifact.reviewed_remaining_priorities.BAI8.candidate_status, "DEFER_FROM_WAVE2");
assert.deepEqual(artifact.reviewed_remaining_priorities.BAI24_25.dimensions, ["NONE"]);

for (const key of Object.keys(artifact.protected_boundaries)) {
  assert.equal(artifact.protected_boundaries[key], false, "protected boundary changed: " + key);
}

console.log("PASS: Grade-7 Repair Wave 2 scope packet preserves reviewed P1/P2 decisions and Wave 1 closure.");
console.log("PASS: proposed Wave 2 is exactly BAI4 + BAI18_19 + BAI22_23 with no Written/Readiness/new-skill authorization.");
