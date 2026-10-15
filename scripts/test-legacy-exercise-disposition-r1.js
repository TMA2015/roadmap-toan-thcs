#!/usr/bin/env node
"use strict";
/* Non-publishing migration guard; protects legacy questions and pre-reviewed learner history. */
const fs=require("node:fs"),assert=require("node:assert/strict");
const read=p=>fs.readFileSync(p,"utf8");
const doc=JSON.parse(read("docs/collaboration/math-legacy-exercise-disposition-r1.json"));
assert.equal(doc.schema,"math-legacy-exercise-disposition-r1");
assert.equal(doc.entries.length,19,"W1 representative corpus changed without audit");
const ids=new Set(),sources=new Map();
const expectedTopics=new Set(["CT02","CT03","CT04","CT21"]);
for(const item of doc.entries){
  assert(/^[A-Za-z0-9-]+$/.test(item.source_id),"unexpected unsafe legacy ID");
  assert(!ids.has(item.source_id),"duplicate legacy id "+item.source_id);
  ids.add(item.source_id);
  assert(expectedTopics.has(item.topic_id),"unexpected topic "+item.topic_id);
  if(!sources.has(item.source_path))sources.set(item.source_path,read(item.source_path));
  const content=sources.get(item.source_path);
  const heading=new RegExp("^#{2,5}\\s+[^\\n]*"+item.source_id+"\\b","m");
  assert(heading.test(content),"missing source heading "+item.source_id);
  if(item.existing_micro_candidate){
    const slug=item.source_path.match(/\/(\d\d-[^/]+)\/bai-tap\.md$/)?.[1];
    assert(slug,"bad topic source path");
    const bank=JSON.parse(read("docs/assets/data/practice/"+slug+"-micro-v1.json"));
    assert(bank.questions.some(q=>q.id===item.existing_micro_candidate),"missing existing Micro candidate "+item.existing_micro_candidate);
  }
  if(item.retirement_approved){
    assert(item.math_review_receipt&&item.target_canonical_id&&item.source_preservation==="REQUIRED","block retiring unreviewed source "+item.source_id);
    assert(item.learner_legacy_visibility==="RETIRED_AFTER_VERIFIED_REPLACEMENT","legacy visibility state must match approved retirement");
  }else{
    assert(item.learner_legacy_visibility==="KEEP_UNTIL_REVIEWED_MIGRATION","old source cannot disappear while unreviewed");
  }
}
console.log("PASS legacy migration source-lock: "+ids.size+" original headings in "+sources.size+" topic pages; Micro candidates present; unreviewed questions stay accessible.");
