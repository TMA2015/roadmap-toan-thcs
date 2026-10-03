#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const read = (p) => fs.readFileSync(p, "utf8");
const json = (p) => JSON.parse(read(p));
const ok = (value, message) => { if (!value) throw new Error(message); };

const base = "docs/assets/data/practice";
const manifest = json(path.join(base, "09-he-phuong-trinh-v1.manifest.json"));
const sourceQuestions = Object.fromEntries(
  manifest.sources.map((source) => [source, json(path.join(base, source)).questions || []])
);
const questions = manifest.sources.flatMap((source) => sourceQuestions[source]);
const historicalSources = manifest.sources.slice(0, 4);
const historicalQuestions = historicalSources.flatMap((source) => sourceQuestions[source]);

ok(manifest.question_count === 129, "CT09 manifest count must be 129 after reviewed P1-C2 append");
ok(questions.length === 129, "CT09 loaded question count must be 129");
ok(historicalQuestions.length === 120, "CT09 historical four chunks must stay 120");

const expectedIds = Array.from({length:120}, (_,i) => `SYS09V1_${String(i+1).padStart(3,"0")}`);
ok(JSON.stringify(historicalQuestions.map(q=>q.id)) === JSON.stringify(expectedIds), "CT09 historical question IDs/order changed");
ok(JSON.stringify(questions.slice(120).map(q=>q.id)) === JSON.stringify(
  Array.from({length:9},(_,i)=>`SYS09V1_${String(i+121).padStart(3,"0")}`)
), "CT09 P1-C2 append IDs/order changed");

const difficulty = historicalQuestions.reduce((acc,q)=>{acc[q.difficulty]=(acc[q.difficulty]||0)+1;return acc;},{});
ok(difficulty.basic===36 && difficulty.intermediate===78 && difficulty.advanced===6, "CT09 historical difficulty distribution changed");

const typeCounts = historicalQuestions.reduce((acc,q)=>{const t=q.tags?.type||"";acc[t]=(acc[t]||0)+1;return acc;},{});
const expectedTypes = {
  "kiem-tra-nghiem-pt-hai-an":12,
  "giai-he-the":12,
  "giai-he-cong":4,
  "so-nghiem-he":12,
  "chon-phuong-phap":12,
  "bien-doi-truoc-giai":12,
  "kiem-tra-nghiem-he":12,
  "tham-so-he":12,
  "lap-he-bai-toan":12,
  "chuyen-dong-he":10,
  "bai-toan-thuc-te":10
};
ok(JSON.stringify(typeCounts)===JSON.stringify(expectedTypes), "CT09 question-type inventory changed");

ok(questions.every(q=>typeof q.variant_group==="string" && q.variant_group.trim()), "every CT09 question needs variant_group");
const groups = new Map();
for(const q of questions){
  if(!groups.has(q.variant_group)) groups.set(q.variant_group,[]);
  groups.get(q.variant_group).push(q.id);
}
ok(groups.size===27, "CT09 must have 18 historical + 9 reviewed P1-C2 structural variant groups");
ok(manifest.variant_group_policy?.group_count===27, "manifest variant group count");
ok(manifest.variant_group_policy?.status==="ACTIVE_CT09_P1C2","manifest variant-group policy status");
ok(manifest.variant_group_policy?.preserves_question_ids===true, "manifest must preserve question IDs");
ok(manifest.variant_group_policy?.affects_evidence===false, "variant grouping must not affect evidence semantics");

const expectedMembership = {
  "SYS09-CHECK-EQ-SOLUTION":["SYS09V1_001","SYS09V1_012"],
  "SYS09-SOLVE-ELIM-READY":["SYS09V1_016","SYS09V1_028"],
  "SYS09-SOLUTION-COUNT-ONE":["SYS09V1_029","SYS09V1_038"],
  "SYS09-SOLUTION-COUNT-NONE":["SYS09V1_030","SYS09V1_039"],
  "SYS09-SOLUTION-COUNT-INFINITE":["SYS09V1_031","SYS09V1_040"],
  "SYS09-METHOD-SUB-X":["SYS09V1_041","SYS09V1_049"],
  "SYS09-METHOD-ELIM-Y":["SYS09V1_042","SYS09V1_050"],
  "SYS09-TRANSFORM-PRE-SOLVE":["SYS09V1_053","SYS09V1_064"],
  "SYS09-CHECK-SYSTEM-PAIR":["SYS09V1_065","SYS09V1_076"],
  "SYS09-PARAM-GIVEN-PAIR":["SYS09V1_077","SYS09V1_088"],
  "SYS09-NUM-SUMDIFF":["SYS09V1_089","SYS09V1_100"],
  "SYS09-MOTION-OPPOSITE":["SYS09V1_101","SYS09V1_110"],
  "SYS09-COUNT-VALUE":["SYS09V1_111","SYS09V1_120"]
};
for(const [group, ids] of Object.entries(expectedMembership)){
  const actual = new Set(groups.get(group)||[]);
  ids.forEach(id=>ok(actual.has(id), group+" missing "+id));
}

const engine = read("docs/assets/javascripts/practice-engine-v2.js");
ok(engine.includes("questionVariantGroup"), "engine must read variant_group");
ok(engine.includes("buildDiverseSession"), "engine must build diverse sessions");
ok(engine.includes("usedVariantGroups"), "engine must track used variant groups");
ok(engine.includes("dataset.sessionVariantGroups"), "engine must expose nonvisual session groups for QA");
ok(!engine.includes("pool.slice(0, Math.min(this.sessionSize, pool.length))"), "normal/skill selector must not bypass diversity helper");
ok(!engine.includes("pool.slice(0, Math.min(REMEDIATION_SESSION_SIZE, pool.length))"), "remediation selector must not bypass diversity helper");

console.log("PASS: CT09 keeps the original 120 IDs/difficulty/type inventory and appends 9 reviewed P1-C2 IDs.");
console.log("PASS: all 129 items are assigned to 27 structural variant groups.");
console.log("PASS: shared Practice Engine prefers unseen variant groups without changing evidence semantics.");
