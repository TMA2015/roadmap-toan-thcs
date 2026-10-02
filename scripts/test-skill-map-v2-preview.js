"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const json = (p) => JSON.parse(read(p));
const logic = require("../docs/assets/javascripts/skill-map-v2-preview.js");

const registry = json("docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json");
const spine = json("docs/assets/data/curriculum/vertical-spine.json");

assert.equal(registry.families.length, 131);
assert.equal(logic.BUILD, "skill-map-v2-preview-i4-r1-20261003");
assert.equal(logic.STORE_KEY, "toan-thcs-taxonomy-v2-evidence-v1");
assert.equal(logic.LEGACY_KEY, "toan-thcs-practice-v1");

const family = registry.families.find((f) => f.family_id === "TRI-PERPBISECTOR");
assert.ok(family, "TRI-PERPBISECTOR family missing");
assert.deepEqual(new Set(family.topics), new Set(["CT14", "CT15"]));

const store = {
  schema: "taxonomy-v2-evidence-store-v1",
  recent_events: [
    {
      family_id: "TRI-PERPBISECTOR",
      topic_id: "CT14",
      attempted_at: "2026-10-03T00:00:00Z",
      assisted: false
    },
    {
      family_id: "TRI-PERPBISECTOR",
      topic_id: "CT15",
      attempted_at: "2026-10-03T00:05:00Z",
      assisted: true
    },
    {
      family_id: "TRI-PERPBISECTOR",
      topic_id: "CT15",
      attempted_at: "2026-10-03T00:06:00Z",
      assisted: false,
      independent_evidence: false,
      independent_reason: "clone_family_repeat"
    }
  ],
  seen_questions: {
    "CT14|q:A": {},
    "CT15|q:B": {},
    "CT15|q:C": {}
  },
  independent_units: {
    "TRI-PERPBISECTOR|CT14|q:A": {
      family_id: "TRI-PERPBISECTOR",
      topic_id: "CT14",
      correct: true
    },
    "TRI-PERPBISECTOR|CT15|clone:X": {
      family_id: "TRI-PERPBISECTOR",
      topic_id: "CT15",
      correct: false
    }
  }
};

const summary = logic.summarizeEvidence(registry, store);
const perp = summary.summaries.get("TRI-PERPBISECTOR");
assert.equal(perp.independent_units, 2, "cross-topic family must aggregate into one family summary");
assert.equal(perp.independent_correct, 1);
assert.equal(perp.evidence_accuracy, 0.5);
assert.equal(perp.recent_events, 3);
assert.equal(perp.assisted_recent_events, 1);
assert.deepEqual(perp.observed_topics, ["CT14", "CT15"]);
assert.equal(summary.totals.independent_units, 2);
assert.equal(summary.totals.independent_correct, 1);
assert.equal(summary.totals.seen_questions, 3);

// Clone-repeat events never inflate evidence because the preview counts the durable independent_units map.
assert.equal(perp.independent_units, Object.values(store.independent_units).filter((u) =>
  u.family_id === "TRI-PERPBISECTOR").length);

const topicMeta = logic.topicMetaFromSpine(spine);
assert.equal(topicMeta.CT14.slug, "14-tam-giac");
assert.equal(topicMeta.CT15.slug, "15-duong-dong-quy");
assert.equal(topicMeta.CT25.slug, "25-tong-hop-on-thi-10");
assert.equal(topicMeta.CT14.strand_label, "Hình học và Đo lường");

const evidenceMap = summary.summaries;
const byTopic = logic.filterFamilies(registry.families, {
  layer: "ALL",
  topic: "CT15",
  evidenceOnly: false,
  evidence: evidenceMap
});
assert.ok(byTopic.some((f) => f.family_id === "TRI-PERPBISECTOR"),
  "cross-topic family must remain discoverable from CT15 filter");

const coreOnly = logic.filterFamilies(registry.families, {
  layer: "KNTT-Core",
  topic: "ALL",
  evidenceOnly: false,
  evidence: evidenceMap
});
assert.ok(coreOnly.length > 0);
assert.ok(coreOnly.every((f) => f.layer === "KNTT-Core"));

const evidenceOnly = logic.filterFamilies(registry.families, {
  layer: "ALL",
  topic: "ALL",
  evidenceOnly: true,
  evidence: evidenceMap
});
assert.deepEqual(evidenceOnly.map((f) => f.family_id), ["TRI-PERPBISECTOR"]);

const legacy = logic.legacyRows({
  tags: {
    alpha: { attempted: 4, correct: 3 },
    beta: { attempted: 7, correct: 5, hinted_attempts: 2 }
  }
});
assert.deepEqual(legacy.map((r) => r.tag), ["beta", "alpha"]);
assert.equal(legacy[0].attempted, 7);
assert.equal(legacy[0].correct, 5);
assert.equal(legacy[0].hinted_attempts, 2);

const source = read("docs/assets/javascripts/skill-map-v2-preview.js");
assert.ok(!source.includes("localStorage.setItem"), "I4 preview must remain read-only");
assert.ok(!source.includes("Mastered"), "I4 preview must not introduce mastery labels");
assert.ok(!source.includes("Weak"), "I4 preview must not introduce weak-skill labels");
assert.ok(source.includes("Evidence accuracy"));
assert.ok(source.includes("Practice cũ"));

const page = read("docs/collaboration/skill-map-v2-preview.md");
assert.ok(page.includes("Owner/opt-in preview"));
assert.ok(page.includes("không"));
assert.ok(page.includes("Readiness"));
assert.ok(page.includes("data-skill-map-v2-preview"));

const mkdocs = read("mkdocs.yml");
assert.ok(mkdocs.includes("Skill Map v2 Owner Preview: collaboration/skill-map-v2-preview.md"));
assert.ok(mkdocs.includes("assets/stylesheets/skill-map-v2-preview.css"));
assert.ok(mkdocs.includes("assets/javascripts/skill-map-v2-preview.js"));

console.log("PASS I4 Skill Map v2 preview aggregation and read-only boundary.");
console.log("PASS cross-topic family aggregation and clone-safe independent-unit counts.");
console.log("PASS layer/topic/evidence filters and separate legacy Practice statistics.");
console.log("PASS no mastery/readiness activation or learner-data writes.");
