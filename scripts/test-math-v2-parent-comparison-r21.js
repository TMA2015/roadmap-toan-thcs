#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const api=require("../docs/qa/math-v2-parent-comparison-r21.js");
const source=fs.readFileSync("docs/qa/math-v2-parent-comparison-r21.js","utf8");
const html=fs.readFileSync("docs/qa/math-v2-parent-comparison-r21.html","utf8");
const site=fs.readFileSync("mkdocs.yml","utf8");
const practice=fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8");
const scope="QA_R16_R19_R20_TEST";
const id1="R20_"+"a".repeat(32),id2="R20_"+"b".repeat(32);
const item1="QA_R21_ITEM_A",item2="QA_R21_ITEM_B";
const fixture="QA_PAIRED_TEST";
const baseEvents=[
 {schema:"math-evidence-event-v2",event_id:id1,learner_scope:scope,
  item_id:item1,correct:true,kind:"answer_attempt",evidence_class:"FORMATIVE",
  skill_ids:["SKILL_ONE","SKILL_TWO"]},
 {schema:"math-evidence-event-v2",event_id:id2,learner_scope:scope,
  item_id:item2,correct:false,kind:"answer_attempt",evidence_class:"FORMATIVE",
  skill_ids:["SKILL_ONE"]}
];
const legacy=(mode="UNLINKED_AGGREGATE")=>({
 schema:"math-v1-aggregate-synthetic-r21",learner_scope:scope,
 provenance:mode,fixture_id:mode==="PAIRED_FIXTURE"?fixture:null,
 readiness_submissions:2,
 questions:{
  [item1]:{attempted:1,correct:1},
  [item2]:{attempted:1,correct:0}
 }
});
const v2=(mode="UNLINKED_JOURNAL")=>({
 schema:"math-v2-events-synthetic-r21",learner_scope:scope,
 provenance:mode,fixture_id:mode==="PAIRED_FIXTURE"?fixture:null,
 events:JSON.parse(JSON.stringify(baseEvents))
});
const proof=()=>({
 schema:"math-r21-synthetic-common-lineage-v1",
 synthetic_only:true,learner_scope:scope,fixture_id:fixture,
 attempts:[
  {event_id:id1,item_id:item1,correct:true},
  {event_id:id2,item_id:item2,correct:false}
 ]
});
let r=api.compare({legacy:legacy(),v2:v2()});
assert.equal(r.status,"NOT_COMPARABLE","equal numeric totals without lineage cannot prove parity");
assert.equal(r.legacy.attempted,2);
assert.equal(r.current.attempted,2);
assert.equal(r.current.correct,1);
assert.equal(r.current.per_skill.SKILL_ONE.attempted,2);
assert.equal(r.current.per_skill.SKILL_TWO.attempted,1);
assert.equal(r.current.untagged,0);
assert.equal(r.readiness,"NOT_COMPARABLE");
assert.equal(r.written,"NOT_COMPARABLE");
assert.equal(r.skill_mastery,"NOT_INFERRED");
assert.equal(r.learner_cutover_allowed,false);
assert.equal(r.historical_merge_allowed,false);
assert.equal(r.writes,0);
r=api.compare({legacy:legacy("PAIRED_FIXTURE"),v2:v2("PAIRED_FIXTURE"),proof:proof()});
assert.equal(r.status,"QA_MATCH");
assert.equal(r.reason,"FULL_SYNTHETIC_EVENT_RECONCILIATION");
const badLegacy=legacy("PAIRED_FIXTURE");
badLegacy.questions[item2].correct=1;
r=api.compare({legacy:badLegacy,v2:v2("PAIRED_FIXTURE"),proof:proof()});
assert.equal(r.status,"QA_MISMATCH");
assert.equal(r.reason,"LEGACY_TOTALS_MISMATCH");
const otherAnswer=proof(); otherAnswer.attempts[1].correct=true;
r=api.compare({legacy:legacy("PAIRED_FIXTURE"),v2:v2("PAIRED_FIXTURE"),proof:otherAnswer});
assert.equal(r.status,"QA_MISMATCH");
assert.equal(r.reason,"EVENT_OR_ANSWER_MISMATCH");
const missing=proof(); missing.attempts.pop();
r=api.compare({legacy:legacy("PAIRED_FIXTURE"),v2:v2("PAIRED_FIXTURE"),proof:missing});
assert.equal(r.reason,"MISSING_EVENT_COVERAGE");
const duplicate=v2();duplicate.events.push({...duplicate.events[0]});
assert.equal(api.compare({legacy:legacy(),v2:duplicate}).status,"INSUFFICIENT_EVIDENCE");
const mutatedScope=v2();mutatedScope.learner_scope="QA_R16_R19_R20_OTHER";
assert.equal(api.compare({legacy:legacy(),v2:mutatedScope}).reason,"R21_V2_EVENT_INVALID");
const corrupt=legacy();corrupt.questions[item1].attempted=-1;
assert.equal(api.compare({legacy:corrupt,v2:v2()}).status,"INSUFFICIENT_EVIDENCE");
const noSkills=v2(); noSkills.events[0].skill_ids=[];
r=api.compare({legacy:legacy(),v2:noSkills});
assert.equal(r.status,"NOT_COMPARABLE");
assert.equal(r.current.untagged,1);
assert(!/\blocalStorage\b|\bindexedDB\b|\bsessionStorage\b|\bfetch\s*\(|\bXMLHttpRequest\b|\bsendBeacon\b/.test(source),
 "Comparison engine must never touch persistent storage/network");
assert(!/\blocalStorage\b|\bindexedDB\b|\bsessionStorage\b|\bfetch\s*\(|\bXMLHttpRequest\b|\bsendBeacon\b/.test(html),
 "QA comparison page must be strictly synthetic and storage-independent");
assert(!/type=["']file["']|<form\b/i.test(html),"No real backup imports");
assert(!site.includes("math-v2-parent-comparison-r21"));
assert(!practice.includes("MathV2ParentComparisonR21"));
assert(html.includes('meta name="robots" content="noindex,nofollow"'));
console.log("PASS R21 synthetic linked/unlinked discrepancy; skill overlap; evidence lanes; no real learner writes/reads");
