"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const app = require("../docs/assets/javascripts/skill-assessment-pilot-v1.js");
const fromRoot = (name) => path.join(__dirname, "..", name);
const readJson = (name) => JSON.parse(fs.readFileSync(fromRoot(name), "utf8"));
const config = readJson("docs/assets/data/curriculum/skill-assessment-pilot-config-v1.json");
const micro = readJson("docs/assets/data/curriculum/skill-diagnostic-micro-pilot-v1.json");
const snapshot = readJson("docs/assets/data/curriculum/review-snapshot-04-11.json");
const input = Object.fromEntries([...new Set(config.sample_questions.map(x => x.source_file))]
  .map(file => [file, readJson("docs/assets/data/practice/" + file).questions]));
const manifestSkills = new Map(snapshot.topics.map(topic => [topic.topic, new Set(Object.keys(topic.skill_labels))]));
const tests = [];
const check = (name, fn) => {
  fn();
  tests.push(name);
  console.log("PASS " + name);
};

check("exact ten real questions + four diagnostic micro-items", () => {
  const questions = app.prepareItems(config, input, micro);
  assert.equal(questions.length, 14);
  assert.equal(questions.filter(q => q.question_kind === "bank_sample").length, 10);
  assert.equal(questions.filter(q => q.question_kind === "micro_pilot").length, 4);
  assert.equal(new Set(questions.map(q => q.id)).size, 14);
  for (const q of questions) {
    assert.ok(manifestSkills.get(q.topic)?.has(q.assessed_skill), q.id + ": invalid assessed skill");
    assert.equal(app.isValidQuestion(q), true, q.id);
    assert.equal(new Set(q.options).size, 4, q.id + ": duplicate options");
  }
});

check("primary and supporting tags remain distinct on all ten source items", () => {
  const questions = app.prepareItems(config, input, micro);
  for (const q of questions.filter(x => x.question_kind === "bank_sample")) {
    assert.ok(q.tags.skill.includes(q.assessed_skill), q.id + " primary not from raw skill tags");
    assert.ok(q.tags.skill.includes(q.secondary_tag), q.id + " supporting not from raw skill tags");
    assert.notEqual(q.assessed_skill, q.secondary_tag);
  }
  assert.equal(questions.find(q => q.id === "ID05V1_021").assessed_skill, "hieu-hai-binh-phuong");
});

check("one answer creates exactly one assessed-skill event, never credits helper", () => {
  const before = app.emptyState();
  const after = app.appendEvidence(before, {
    question_id: "ALG04V2_051", assessed_skill: "nhan-bieu-thuc", correct: true,
    independent: true, supporting_tags: ["tinh-phan-phoi"], question_kind: "bank_sample",
    attempted_at: "2026-09-26T00:00:00.000Z"
  });
  assert.equal(before.events.length, 0);
  assert.equal(after.events.length, 1);
  const counts = app.skillSummary(after);
  assert.equal(counts["nhan-bieu-thuc"].attempted, 1);
  assert.equal(counts["nhan-bieu-thuc"].correct, 1);
  assert.equal(counts["nhan-bieu-thuc"].independent_correct, 1);
  assert.equal(counts["tinh-phan-phoi"], undefined);
});

check("wrong answers count once; support/context never become mastery", () => {
  let s = app.appendEvidence(app.emptyState(), { question_id: "SYS09V1_089",
    assessed_skill: "lap-he-bai-toan", correct: false, independent: true,
    supporting_tags: ["bai-toan-so"], context: "bai-toan-so" });
  s = app.appendEvidence(s, { question_id: "SYS09V1_089",
    assessed_skill: "lap-he-bai-toan", correct: true, independent: false,
    supporting_tags: ["bai-toan-so"], context: "bai-toan-so" });
  assert.deepEqual(app.skillSummary(s)["lap-he-bai-toan"], {
    attempted: 2, correct: 1, independent_correct: 0
  });
  assert.equal(app.skillSummary(s)["bai-toan-so"], undefined);
});

check("invalid source mapping fails closed, no inferred primary from tag position", () => {
  const changed = structuredClone(config);
  changed.sample_questions[0].assessed_skill = "invented-skill";
  assert.throws(() => app.prepareItems(changed, input, micro), /ánh xạ tag/);
  const missing = structuredClone(config);
  missing.sample_questions[0].question_id = "NONEXISTENT";
  assert.throws(() => app.prepareItems(missing, input, micro), /Thiếu câu gốc/);
});

check("legacy storage stays out of new pilot module", () => {
  const source = fs.readFileSync(fromRoot("docs/assets/javascripts/skill-assessment-pilot-v1.js"), "utf8");
  assert.equal(app.KEY, "toan-thcs-assessment-v2");
  assert.equal(source.includes('"toan-thcs-practice-v1"'), false);
  assert.equal(source.includes("RoadmapLearnerEvidence.recordAnswer"), false);
  assert.equal(source.includes("toan-thcs-assessment-v2"), true);
});

check("option shuffle preserves answer mapping and input array", () => {
  const options = ["A","B","C","D"];
  const shuffled = app.shuffle(options.map((content,index)=>({content,index})),()=>0);
  assert.equal(shuffled.length, 4);
  assert.deepEqual(new Set(shuffled.map(x=>x.index)), new Set([0,1,2,3]));
  assert.deepEqual(options, ["A","B","C","D"]);
});

check("four math micro-items have exactly one independently assessed skill", () => {
  assert.deepEqual(micro.items.map(q=>q.id),
    ["PILOT04_SIGN_01","PILOT04_SIGN_02","PILOT11_ROOT_01","PILOT11_ROOT_02"]);
  assert.deepEqual(micro.items.map(q=>q.assessed_skill),
    ["bo-ngoac-dau","bo-ngoac-dau","khai-phuong-tich","khai-phuong-tich"]);
  assert.deepEqual(micro.items.map(q=>q.answer_index), [0,0,0,0]);
  for (const item of micro.items) {
    assert.equal(item.options.length, 4);
    assert.equal(new Set(item.options).size, 4);
    assert.ok(manifestSkills.get(item.topic).has(item.assessed_skill));
  }
});

check("event retention is bounded without touching other objects", () => {
  let s=app.emptyState();
  for(let i=0;i<505;i++) s=app.appendEvidence(s,{question_id:"q"+i,assessed_skill:"test",correct:true,independent:true});
  assert.equal(s.events.length, 500);
  assert.equal(s.events[0].question_id, "q5");
});

check("session retries do not inflate distinct-question first-attempt evidence", () => {
  let state = app.emptyState();
  const seen = [
    ["q1", "cong-tru-da-thuc", false],
    ["q2", "lap-bieu-thuc", true],
    ["q1", "cong-tru-da-thuc", true],
    ["q2", "lap-bieu-thuc", true],
    ["q3", "cong-tru-da-thuc", true]
  ];
  for (const [question_id, assessed_skill, correct] of seen) {
    state = app.appendEvidence(state, { question_id, assessed_skill, correct, independent: true });
  }
  const unique = app.firstAttemptSummary(state);
  assert.deepEqual(unique["cong-tru-da-thuc"], { distinct: 2, first_correct: 1, total_attempts: 3 });
  assert.deepEqual(unique["lap-bieu-thuc"], { distinct: 1, first_correct: 1, total_attempts: 2 });
  assert.equal(app.skillSummary(state)["cong-tru-da-thuc"].correct, 2);
  assert.equal(seen.length, state.events.length);
});

console.log("PASSED " + tests.length + " pilot checks.");
