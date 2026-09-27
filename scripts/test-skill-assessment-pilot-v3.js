"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const json=file=>JSON.parse(fs.readFileSync(path.join(root,file),"utf8"));
const code=file=>fs.readFileSync(path.join(root,file),"utf8");
const app=require("../docs/assets/javascripts/skill-assessment-pilot-v3.js");
const old=require("../docs/assets/javascripts/skill-assessment-pilot-v2.js");
const cfg=json("docs/assets/data/curriculum/skill-assessment-pilot-config-v1.json");
const micro=json("docs/assets/data/curriculum/skill-diagnostic-micro-pilot-v1.json");
const sources=Object.fromEntries([...new Set(cfg.sample_questions.map(x=>x.source_file))]
 .map(file=>[file,json("docs/assets/data/practice/"+file).questions]));
const items=app.prepareItems(cfg,sources,micro);
assert.equal(app.KEY,old.KEY);
assert.equal(app.BUILD,"learner-review-v3-20260927");
assert.equal(old.BUILD,"learner-review-v2-20260926");
assert.equal(items.length,14);
assert.ok(items.every(x=>x.source_file));
const a=app.classifyAttempt("initial",false);
const b=app.classifyAttempt("initial",true);
const c=app.classifyAttempt("retry_misses",false);
const d=app.classifyAttempt("review_all",false);
assert.deepEqual(a,{independent:true,assisted:false,attempt_kind:"first_unseen"});
assert.deepEqual(b,{independent:false,assisted:true,attempt_kind:"repeat_seen_question"});
assert.deepEqual(c,{independent:false,assisted:true,attempt_kind:"retry_after_feedback"});
assert.deepEqual(d,c);
const legacy={
 schema:"one-skill-assessment-events-v2",
 events:[{
   schema:"one-skill-assessment-event-v2",question_id:items[0].id,
   assessed_skill:items[0].assessed_skill,correct:false,independent:true,
   question_kind:"bank_sample",supporting_tags:[items[0].secondary_tag],
   context:null,attempted_at:"2026-09-26T00:00:00Z"
 }]
};
const copy=JSON.parse(JSON.stringify(legacy));
let state=app.appendEvidence(legacy,{
 question_id:items[0].id,assessed_skill:items[0].assessed_skill,correct:true,
 ...b,attempted_at:"2026-09-27T00:00:00Z",evidence_policy:"formative_v3",
 question_kind:items[0].question_kind,source_file:items[0].source_file,
 supporting_tags:[items[0].secondary_tag]
});
assert.deepEqual(legacy,copy,"legacy object mutated");
assert.deepEqual(state.events[0],copy.events[0],"historical event changed");
assert.equal(state.events[1].independent,false);
assert.equal(state.events[1].assisted,true);
assert.equal(state.events[1].attempt_kind,"repeat_seen_question");
assert.equal(state.events[1].evidence_policy,"formative_v3");
assert.deepEqual(app.verifiedV3Summary(state),{},"old incorrect independent flag cannot be promoted");
const first=app.classifyAttempt("initial",false);
state=app.appendEvidence(state,{
 question_id:items[1].id,assessed_skill:items[1].assessed_skill,correct:true,
 ...first,evidence_policy:"formative_v3",source_file:items[1].source_file
});
state=app.appendEvidence(state,{
 question_id:items[1].id,assessed_skill:items[1].assessed_skill,correct:true,
 ...c,evidence_policy:"formative_v3",source_file:items[1].source_file
});
const verified=app.verifiedV3Summary(state);
assert.deepEqual(verified[items[1].assessed_skill],{distinct_first:1,correct_first:1});
assert.equal(app.firstAttemptSummary(state)[items[1].assessed_skill].distinct,1);
assert.equal(state.events.length,4);
assert.equal(state.events[3].independent,false);
assert.equal(app.skillSummary(state)[items[0].assessed_skill].independent_correct,1,
 "raw legacy counter remains unchanged; only verifiedV3Summary separates new evidence");
assert.ok(!code("docs/assets/javascripts/skill-assessment-pilot-v2.js").includes("learner-review-v3"));
assert.ok(code("docs/assets/javascripts/skill-assessment-pilot-v3.js").includes("this.choiceOrders[this.index]"));
assert.ok(code("docs/assets/javascripts/skill-assessment-pilot-v3.js").includes("this.sessionAnswers[this.index]"));
assert.ok(code("docs/huong-dan/thu-nghiem-danh-gia-ky-nang-v2.md").includes("thu-nghiem-danh-gia-ky-nang-v3.md"));
console.log("PASS legacy v2 evidence kept unchanged, new source/assistance fields only on appended v3 events");
console.log("PASS fresh vs repeated vs after-feedback independent flags and v3-only independent summary");
console.log("PASS immutable navigation, option order and unchanged old Beta v2 route/runtime");
console.log("PASSED skill assessment v3 checks.");
