"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const logic = require("../docs/assets/javascripts/skill-map-v2-preview.js");

assert.equal(logic.CONTROLLED_BUILD, "skill-map-v2-i6b-learner-r1-20261003");

const page = read("docs/ban-do-ky-nang/index.md");
assert.ok(page.includes("# Bản đồ kỹ năng"));
assert.ok(page.includes('data-skill-map-v2-mode="learner"'));
assert.ok(page.includes('data-assets-base="../assets/"'));
assert.ok(page.includes("Dữ liệu còn ít"));
assert.ok(page.includes("Đã có dữ liệu để xem xu hướng"));
assert.ok(!page.includes("Controlled"));
assert.ok(!page.includes("I6"));
assert.ok(!page.includes("Skill Taxonomy v2"));
assert.ok(!page.includes("QA"));

const source = read("docs/assets/javascripts/skill-map-v2-preview.js");
assert.ok(source.includes('el("strong", "", "Bản đồ kỹ năng")'));
assert.ok(!source.includes("Bản đồ kỹ năng · Thử nghiệm có kiểm soát"));
assert.ok(source.includes('new URL("../kien-thuc/"'));
assert.ok(!source.includes('new URL("../../kien-thuc/"'));

const mkdocs = read("mkdocs.yml");
assert.ok(mkdocs.includes("Bản đồ kỹ năng: ban-do-ky-nang/index.md"));
assert.ok(!mkdocs.includes("Skill Map v2 I6 Controlled QA: collaboration/skill-map-v2-i6-controlled.md"));

console.log("PASS I6B learner-facing page copy and main navigation.");
console.log("PASS learner route has no I6/QA/controlled jargon.");
console.log("PASS topic action links are site-root-safe from both public and internal Skill Map routes.");
