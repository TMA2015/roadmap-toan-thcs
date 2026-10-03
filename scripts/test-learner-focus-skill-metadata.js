"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const js = fs.readFileSync(path.join(ROOT, "docs/assets/javascripts/topic-workspace-v1.js"), "utf8");
const css = fs.readFileSync(path.join(ROOT, "docs/assets/stylesheets/topic-workspace.css"), "utf8");

// Skill evidence remains wired, but learner-facing metadata is optional/collapsed by default.
assert.ok(js.includes('const wrap=document.createElement("details");wrap.className="topic-core-skill-overview"'));
assert.ok(js.includes('summary.textContent=asTeaching?"Xem kỹ năng của bài":"Xem kỹ năng đang luyện"'));
assert.ok(js.includes('const skill=document.createElement("details");skill.className="topic-micro-skill-details"'));
assert.ok(js.includes('skillSummary.textContent="Xem kỹ năng đang luyện"'));
assert.ok(js.includes('skillText.dataset.primarySkill=assessed||"unmapped"'));
assert.ok(js.includes("recordAnswer?.("));

// The old always-visible labels must no longer be emitted.
assert.ok(!js.includes('heading.textContent=asTeaching?"Kỹ năng cần học":"Kỹ năng của chặng · phạm vi thực hành"'));
assert.ok(!js.includes('skill.textContent="Kỹ năng chính của câu: "'));

assert.ok(css.includes(".topic-core-skill-overview>summary"));
assert.ok(css.includes(".topic-micro-skill-details>summary"));
assert.ok(css.includes(".topic-core-skill-overview[open]"));
assert.ok(css.includes(".topic-micro-skill-details[open]"));

console.log("PASS learner practice keeps skill evidence in the background and exposes it only through collapsed optional details.");
