#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const a=JSON.parse(fs.readFileSync("docs/assets/data/curriculum/exam-frequency-hanoi-seed-r1.json","utf8"));
assert.equal(a.audit_id,"MATH-EXAM-FREQUENCY-HANOI-SEED-R1-20261009");
assert.equal(a.sources.length,3);
assert.deepEqual(a.sources.map(x=>x.year),[2024,2025,2026]);
assert.equal(a.observed_archetypes.filter(x=>x.observed_count===3).length,6);
assert.equal(a.observed_archetypes.filter(x=>x.observed_count===2).length,2);
assert.equal(a.interpretation_rules.city_specific_not_national,true);
assert.equal(a.interpretation_rules.no_question_quota_from_frequency_alone,true);
console.log("PASS: official Hanoi 2024-2026 entrance-exam seed corpus is source-bounded and non-quota.");
