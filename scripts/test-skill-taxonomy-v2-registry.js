"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const registryPath = path.join(ROOT, "docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json");
const g2PolicyPath = path.join(ROOT, "docs/assets/data/curriculum/canonical-evidence-runtime-policy-04-07-v1.json");
const learnerEvidencePath = path.join(ROOT, "docs/assets/javascripts/learner-evidence-v1.js");
const jsRoot = path.join(ROOT, "docs/assets/javascripts");

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const g2 = JSON.parse(fs.readFileSync(g2PolicyPath, "utf8"));

const fail = (message) => {
  throw new Error("Taxonomy v2 I0 registry QA: " + message);
};
const assert = (condition, message) => {
  if (!condition) fail(message);
};

assert(registry.schema === "skill-taxonomy-v2-registry-r1", "wrong schema");
assert(registry.version === 1, "wrong version");
assert(registry.status === "I0_DURABLE_REGISTRY_RUNTIME_DISABLED", "wrong I0 status");
assert(registry.academic_authorization === "CLEARED_FOR_TAXONOMY_V2_IMPLEMENTATION_PLANNING", "wrong academic authorization");
assert(registry.runtime_enabled === false, "runtime must remain disabled");
assert(registry.learner_data_write_enabled === false, "learner-data writes must remain disabled");
assert(registry.history_backfill_enabled === false, "history backfill must remain disabled");
assert(registry.mastery_thresholds_enabled === false, "mastery thresholds must remain disabled");
assert(registry.readiness_enabled === false, "Readiness must remain disabled");

const expectedCounts = {
  families: 131,
  unique_family_ids: 131,
  legacy_mappings: 386,
  intentional_no_family_mappings: 20,
  cross_topic_reuse_mappings_total: 14,
  ct24_explicit_reuse_mappings: 5,
  reviewed_practice_questions: 3114
};
for (const [key, value] of Object.entries(expectedCounts)) {
  assert(registry.counts?.[key] === value, `count ${key} expected ${value}, got ${registry.counts?.[key]}`);
}

assert(Array.isArray(registry.families) && registry.families.length === 131, "family array must contain 131 rows");
assert(Array.isArray(registry.legacy_mappings) && registry.legacy_mappings.length === 386, "mapping array must contain 386 rows");

const allowedLayers = new Set(["KNTT-Core", "Core-Support", "THPT-Bridge", "Entrance10", "Specialized-Challenge"]);
const allowedRoles = new Set([
  "ASSESSED_SKILL", "REVIEW_REQUIRED", "SUPPORTING_SKILL", "CONTEXT", "METHOD",
  "COMPOSITE_TASK", "CATEGORY", "EXTENSION_SKILL", "REPRESENTATION",
  "CROSS_TOPIC_LINK", "CROSS_TOPIC_REUSE", "EXAM_SKILL"
]);
const expectedBatchCounts = {
  S1: { families: 39, mappings: 87 },
  S2: { families: 29, mappings: 75 },
  S3: { families: 44, mappings: 162 },
  S4: { families: 19, mappings: 62 }
};
const batchCounts = Object.fromEntries(Object.keys(expectedBatchCounts).map((key) => [key, { families: 0, mappings: 0 }]));

const familyIds = new Set();
const subskills = new Map();
for (const family of registry.families) {
  assert(family?.family_id && !familyIds.has(family.family_id), `duplicate/missing family_id ${family?.family_id}`);
  familyIds.add(family.family_id);
  assert(allowedLayers.has(family.layer), `invalid family layer ${family.family_id}: ${family.layer}`);
  assert(family.runtime_enabled === false, `family runtime must be false: ${family.family_id}`);
  assert(batchCounts[family.source_batch], `invalid family source_batch: ${family.source_batch}`);
  batchCounts[family.source_batch].families += 1;
  for (const sub of family.diagnostic_subskills || []) {
    if (!subskills.has(sub)) subskills.set(sub, []);
    subskills.get(sub).push(family.family_id);
  }
}
assert(familyIds.size === 131, "family IDs must be unique");

const mappingKeys = new Set();
let noFamilyCount = 0;
let crossTopicReuseCount = 0;
const ct24Reuse = new Map();
const roleCounts = {};
for (const mapping of registry.legacy_mappings) {
  const key = `${mapping.topic_id}|${mapping.legacy_id}`;
  assert(!mappingKeys.has(key), `duplicate mapping key ${key}`);
  mappingKeys.add(key);
  assert(allowedRoles.has(mapping.role), `invalid mapping role ${key}: ${mapping.role}`);
  if (mapping.layer !== undefined && mapping.layer !== null) assert(allowedLayers.has(mapping.layer), `invalid mapping layer ${key}: ${mapping.layer}`);
  assert(batchCounts[mapping.source_batch], `invalid mapping source_batch: ${mapping.source_batch}`);
  batchCounts[mapping.source_batch].mappings += 1;
  roleCounts[mapping.role] = (roleCounts[mapping.role] || 0) + 1;
  if (!mapping.family_id) noFamilyCount += 1;
  else assert(familyIds.has(mapping.family_id), `unknown family reference ${key} -> ${mapping.family_id}`);
  if (mapping.role === "CROSS_TOPIC_REUSE") {
    crossTopicReuseCount += 1;
    if (mapping.topic_id === "CT24") ct24Reuse.set(mapping.legacy_id, mapping.family_id);
  }
}

assert(mappingKeys.size === 386, "mapping keys must be unique");
assert(noFamilyCount === 20, `expected 20 NO_FAMILY mappings, got ${noFamilyCount}`);
assert(crossTopicReuseCount === 14, `expected 14 total CROSS_TOPIC_REUSE mappings, got ${crossTopicReuseCount}`);

for (const [batch, expected] of Object.entries(expectedBatchCounts)) {
  assert(batchCounts[batch].families === expected.families, `${batch} family count mismatch`);
  assert(batchCounts[batch].mappings === expected.mappings, `${batch} mapping count mismatch`);
}

const expectedCt24Reuse = {
  "phan-tram": "NUM-PERCENT",
  "lap-phuong-trinh": "EQ-MODEL",
  "lap-he": "SYS-MODEL",
  "luong-giac-thuc-te": "RIGHT-APPLICATION",
  "xac-suat-thuc-te": "PROB-EXPERIMENTAL"
};
assert(ct24Reuse.size === 5, `expected five CT24 reuse mappings, got ${ct24Reuse.size}`);
for (const [legacy, family] of Object.entries(expectedCt24Reuse)) {
  assert(ct24Reuse.get(legacy) === family, `wrong CT24 reuse ${legacy} -> ${ct24Reuse.get(legacy)}`);
}

const overlaps = [...subskills.entries()]
  .map(([sub, ids]) => [sub, [...new Set(ids)]])
  .filter(([, ids]) => ids.length > 1)
  .sort((a, b) => a[0].localeCompare(b[0]));
const expectedOverlaps = [
  ["binh-phuong-hoan-chinh", ["ID-STRUCTURE", "FAC-IDENTITY"]],
  ["hieu-hai-binh-phuong", ["ID-STRUCTURE", "FAC-IDENTITY"]]
].map(([sub, ids]) => [sub, [...ids].sort()])
 .sort((a, b) => a[0].localeCompare(b[0]));
assert(JSON.stringify(overlaps.map(([s,ids]) => [s,[...ids].sort()])) === JSON.stringify(expectedOverlaps),
  "diagnostic-subskill overlap set changed");

const expectedSourceBlobs = {
  S1: "71904e9767e7f25f7e0162b916f763d68fab2031",
  S2: "2f2f862c5e571dd4dcf1a095cc799ab5a24139f5",
  S3: "ab6d45fe385a56387336556ba146c4b7c500626e",
  S4: "fedac0a5c1598ea2f18f62e892f80fe77439c143"
};
assert(Array.isArray(registry.source_registries) && registry.source_registries.length === 4, "must lock four source registries");
for (const source of registry.source_registries) {
  assert(expectedSourceBlobs[source.batch] === source.blob_sha, `source blob drift for ${source.batch}`);
}

assert(g2?.production_store?.key === "toan-thcs-canonical-evidence-v2", "G2 store key changed");
assert(g2?.production_store?.migrate_beta_v1 === false, "G2 migration must remain false");
assert(g2?.production_store?.backfill_beta_v1 === false, "G2 backfill must remain false");
assert(g2?.scope?.rows === 101, "G2 101-row boundary changed");
assert(g2?.scope?.canonical_skills === 7, "G2 seven-skill boundary changed");
assert(Array.isArray(g2?.scope?.topics) && g2.scope.topics.length === 4, "G2 topic boundary changed");
assert(g2?.runtime_rules?.mastery_threshold === null, "G2 mastery threshold must remain off");
assert(g2?.runtime_rules?.core_readiness_credit === false, "G2 Readiness credit must remain off");

const learnerEvidence = fs.readFileSync(learnerEvidencePath, "utf8");
assert(learnerEvidence.includes('const STORAGE_KEY = "toan-thcs-practice-v1"'), "legacy Practice store key changed");

const proposedStore = "toan-thcs-taxonomy-v2-evidence-v1";
const registryName = "skill-taxonomy-v2-registry-r1.json";
const authorizedObserver = "taxonomy-v2-evidence-observer-v1.js";
const authorizedI4Preview = "skill-map-v2-preview.js";
for (const file of fs.readdirSync(jsRoot).filter((name) => name.endsWith(".js"))) {
  const content = fs.readFileSync(path.join(jsRoot, file), "utf8");
  if (file === authorizedObserver) {
    assert(content.includes(proposedStore), "authorized Taxonomy v2 observer must use the isolated store");
    assert(!content.includes(registryName), "observer must stay on compiled runtime policy rather than the full registry");
  } else if (file === authorizedI4Preview) {
    assert(content.includes(proposedStore), "authorized I4 preview must read the isolated Taxonomy v2 store");
    assert(content.includes(registryName), "authorized I4 preview must read the durable 131-family registry");
    assert(!content.includes("localStorage.setItem"), "I4 preview must remain read-only");
  } else {
    assert(!content.includes(proposedStore), `unauthorized JS must not access the Taxonomy v2 store: ${file}`);
    assert(!content.includes(registryName), `unauthorized runtime JS must not load the I0 registry directly: ${file}`);
  }
}

console.log("PASS Taxonomy v2 I0 registry", JSON.stringify({
  families: registry.families.length,
  mappings: registry.legacy_mappings.length,
  no_family: noFamilyCount,
  cross_topic_reuse_total: crossTopicReuseCount,
  ct24_reuse: ct24Reuse.size,
  overlap_candidates: overlaps.length,
  runtime_enabled: registry.runtime_enabled
}));
