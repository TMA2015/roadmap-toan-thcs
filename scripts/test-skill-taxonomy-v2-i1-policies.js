"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.resolve(__dirname, "..");
const indexPath = path.join(ROOT, "docs/assets/data/curriculum/taxonomy-v2-runtime/index-r1.json");
const registryPath = path.join(ROOT, "docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json");
const g2Path = path.join(ROOT, "docs/assets/data/curriculum/canonical-evidence-runtime-policy-04-07-v1.json");
const jsRoot = path.join(ROOT, "docs/assets/javascripts");

const readJson = (p) => JSON.parse(fs.readFileSync(p, "utf8"));
const gitBlobSha = (p) => {
  const body = fs.readFileSync(p);
  return crypto.createHash("sha1")
    .update(Buffer.from(`blob ${body.length}\0`))
    .update(body)
    .digest("hex");
};
const fail = (m) => { throw new Error("Taxonomy v2 I1 QA: " + m); };
const assert = (c,m) => { if(!c) fail(m); };
const sorted = (a) => [...a].sort();

const index = readJson(indexPath);
const registry = readJson(registryPath);
const g2 = readJson(g2Path);
const familyById = new Map(registry.families.map((f) => [f.family_id, f]));
const allowedRoles = new Set(registry.legacy_mappings.map((m) => m.role).filter(Boolean));

assert(index.schema === "skill-taxonomy-v2-runtime-index-r1", "wrong index schema");
assert(index.version === 1, "wrong index version");
assert(index.status === "I1_COMPILED_RUNTIME_DISABLED", "wrong index status");
assert(index.runtime_enabled === false, "index runtime must remain disabled");
assert(index.learner_data_write_enabled === false, "I1 learner-data writes must remain disabled");
assert(index.independent_credit_authorized === false, "I1 independent credit must remain unauthorized");
assert(index.history_backfill_enabled === false, "I1 history backfill must remain disabled");
assert(index.mastery_thresholds_enabled === false, "I1 mastery thresholds must remain disabled");
assert(index.readiness_enabled === false, "I1 Readiness must remain disabled");
assert(index.registry_blob_sha === gitBlobSha(registryPath), "registry blob lock drift");
assert(index.totals.topics === 24, "expected 24 topic policies");
assert(index.totals.questions === 3114, "expected 3114 reviewed questions");
assert(index.totals.family_link_rows === 2900, "expected 2900 family-linked rows");
assert(index.totals.no_family_rows === 214, "expected 214 NO_FAMILY/formative rows");
assert(Array.isArray(index.topics) && index.topics.length === 24, "index topic list must contain CT02–CT25");

const expectedTopics = Array.from({length:24}, (_,i) => "CT" + String(i + 2).padStart(2,"0"));
assert(JSON.stringify(index.topics.map((x) => x.topic_id)) === JSON.stringify(expectedTopics), "topic order/scope drift");

const allQuestionIds = new Set();
let totalQuestions = 0;
let totalFamily = 0;
let totalNoFamily = 0;
let maxRows = 0;

for (const entry of index.topics) {
  const policyPath = path.join(ROOT, entry.policy_path);
  assert(fs.existsSync(policyPath), `missing policy ${entry.policy_path}`);
  const policy = readJson(policyPath);

  assert(policy.schema === "skill-taxonomy-v2-topic-policy-r1", `${entry.topic_id} wrong schema`);
  assert(policy.version === 1, `${entry.topic_id} wrong version`);
  assert(policy.status === "I1_COMPILED_RUNTIME_DISABLED", `${entry.topic_id} wrong status`);
  assert(policy.topic_id === entry.topic_id, `${entry.topic_id} topic mismatch`);
  assert(policy.runtime_enabled === false, `${entry.topic_id} runtime must be false`);
  assert(policy.learner_data_write_enabled === false, `${entry.topic_id} learner writes must be false`);
  assert(policy.independent_credit_authorized === false, `${entry.topic_id} independent credit must be false`);
  assert(/^[0-9a-f]{40}$/.test(policy.source_overlay?.blob_sha || ""), `${entry.topic_id} overlay blob lock missing`);
  assert(policy.counts.questions === entry.questions, `${entry.topic_id} question count mismatch`);
  assert(policy.counts.family_link_rows === entry.family_link_rows, `${entry.topic_id} family count mismatch`);
  assert(policy.counts.no_family_rows === entry.no_family_rows, `${entry.topic_id} no-family count mismatch`);
  assert(policy.rows.length === entry.questions, `${entry.topic_id} row count mismatch`);

  const idsByFile = new Map();
  for (const [name, meta] of Object.entries(policy.source_files)) {
    const sourcePath = path.join(ROOT, meta.path);
    assert(fs.existsSync(sourcePath), `${entry.topic_id} missing bank file ${meta.path}`);
    assert(gitBlobSha(sourcePath) === meta.blob_sha, `${entry.topic_id} source blob drift ${name}`);
    const bank = readJson(sourcePath);
    const questions = bank.questions || [];
    assert(questions.length === meta.question_count, `${entry.topic_id} source question count drift ${name}`);
    idsByFile.set(name, new Map(questions.map((q) => [q.id || q.question_id, q])));
  }

  let fam = 0;
  let noFam = 0;
  for (const row of policy.rows) {
    assert(!allQuestionIds.has(row.question_id), `duplicate global question ID ${row.question_id}`);
    allQuestionIds.add(row.question_id);
    assert(row.topic_id === entry.topic_id, `${entry.topic_id} row topic mismatch ${row.question_id}`);
    assert(row.runtime_enabled === false, `${row.question_id} runtime must be false`);
    assert(row.independent_credit_authorized === false, `${row.question_id} independent credit must be false`);
    assert(row.source_blob === policy.source_files[row.source_file]?.blob_sha, `${row.question_id} source blob mismatch`);
    assert(row.evidence_class, `${row.question_id} missing evidence class`);

    const bankQuestion = idsByFile.get(row.source_file)?.get(row.question_id);
    assert(bankQuestion, `${row.question_id} not found in declared source file`);
    const sourceTags = Array.isArray(bankQuestion?.tags?.skill) ? bankQuestion.tags.skill : [];
    assert(JSON.stringify(row.legacy_skill_tags) === JSON.stringify(sourceTags), `${row.question_id} legacy skill tags drift`);

    if (row.mapping_role !== null) {
      assert(allowedRoles.has(row.mapping_role), `${row.question_id} unknown mapping role ${row.mapping_role}`);
    }

    if (row.family_id) {
      fam += 1;
      const family = familyById.get(row.family_id);
      assert(family, `${row.question_id} unknown family ${row.family_id}`);
      assert(row.family_layer === family.layer, `${row.question_id} family layer mismatch`);
      assert(row.policy_disposition === "FAMILY_LINK_REVIEWED", `${row.question_id} wrong family disposition`);
      assert(row.diagnostic_skill_id, `${row.question_id} family row missing diagnostic skill`);
      assert(row.mapping_role, `${row.question_id} family row missing mapping role`);
    } else {
      noFam += 1;
      assert(row.policy_disposition === "FORMATIVE_ONLY_NO_FAMILY", `${row.question_id} wrong no-family disposition`);
      assert(row.diagnostic_skill_id === null, `${row.question_id} NO_FAMILY must not expose diagnostic mastery ID`);
    }
  }

  for (const [name, bankMap] of idsByFile.entries()) {
    const policyIds = policy.rows.filter((r) => r.source_file === name).map((r) => r.question_id);
    assert(JSON.stringify(sorted(policyIds)) === JSON.stringify(sorted(bankMap.keys())), `${entry.topic_id} exact ID coverage mismatch for ${name}`);
  }

  assert(fam === entry.family_link_rows, `${entry.topic_id} family rows recount mismatch`);
  assert(noFam === entry.no_family_rows, `${entry.topic_id} no-family rows recount mismatch`);
  totalQuestions += policy.rows.length;
  totalFamily += fam;
  totalNoFamily += noFam;
  maxRows = Math.max(maxRows, policy.rows.length);
}

assert(allQuestionIds.size === 3114, "global unique question IDs must equal 3114");
assert(totalQuestions === 3114, "compiled row total must equal 3114");
assert(totalFamily === 2900, "compiled family-link total must equal 2900");
assert(totalNoFamily === 214, "compiled no-family total must equal 214");
assert(maxRows <= 195, "topic sharding invariant violated by oversized policy");

// Preserve existing production boundaries.
assert(registry.runtime_enabled === false, "I0 registry runtime unexpectedly enabled");
assert(g2?.production_store?.key === "toan-thcs-canonical-evidence-v2", "G2 store key changed");
assert(g2?.scope?.rows === 101, "G2 101-row boundary changed");
assert(g2?.scope?.canonical_skills === 7, "G2 seven-skill boundary changed");
assert(g2?.runtime_rules?.mastery_threshold === null, "G2 mastery threshold must remain off");
assert(g2?.runtime_rules?.core_readiness_credit === false, "G2 Readiness credit must remain off");

const proposedStore = "toan-thcs-taxonomy-v2-evidence-v1";
const authorizedI2Observer = "taxonomy-v2-evidence-observer-v1.js";
for (const file of fs.readdirSync(jsRoot).filter((name) => name.endsWith(".js"))) {
  const content = fs.readFileSync(path.join(jsRoot, file), "utf8");
  if (file === authorizedI2Observer) {
    assert(content.includes(proposedStore), "authorized I2 observer must use the isolated Taxonomy v2 store");
    assert(content.includes("taxonomy-v2-runtime/i3b-ct02-03-r1.json"),
      "authorized Taxonomy v2 observer must load only the bounded I3B CT02-CT03 shadow policy");
    assert(!content.includes("taxonomy-v2-runtime/index-r1.json"),
      "Taxonomy v2 observer must not load the full I1 index");
    assert(!content.includes('new URL("../data/curriculum/taxonomy-v2-runtime/ct02-r1.json"'),
      "Taxonomy v2 observer must not load the full CT02 I1 policy directly");
  } else {
    assert(!content.includes(proposedStore), `only the authorized I2 observer may access the Taxonomy v2 store: ${file}`);
    assert(!content.includes("taxonomy-v2-runtime/"), `only the authorized I2 observer may load a Taxonomy v2 runtime path: ${file}`);
  }
}

console.log("PASS Taxonomy v2 I1 topic policies", JSON.stringify({
  topics: index.topics.length,
  questions: totalQuestions,
  unique_questions: allQuestionIds.size,
  family_link_rows: totalFamily,
  no_family_rows: totalNoFamily,
  max_topic_rows: maxRows,
  runtime_enabled: index.runtime_enabled
}));
