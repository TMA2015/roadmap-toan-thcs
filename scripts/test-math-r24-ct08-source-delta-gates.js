#!/usr/bin/env node
"use strict";
/* R24 exact 150-record differential contract — approved historical locks.
 * No question-bank edits, no learner data access and no Skill cutover.
 * Existing CT08 notation-only review is NOT blanket Taxonomy v2 authorization.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");

const j=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const bank="docs/assets/data/practice/";
const policies="docs/assets/data/curriculum/taxonomy-v2-runtime/";
const lock08=j("review-packets/academic-depth/ct08-p1a/01_CT08_P1A_NOTATION_ACADEMIC_LOCK_R1.json");
const lock09=j("review-packets/academic-depth/ct09-p1c1/01_CT09_PRACTICE_ACADEMIC_LOCK_R1.json");
const policy08=j(policies+"ct08-r1.json");
const policy09=j(policies+"ct09-r1.json");
const manifest09=j(bank+"09-he-phuong-trinh-v1.manifest.json");
const engine=fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8");
const site=fs.readFileSync("mkdocs.yml","utf8");

function blobSha(raw){
  return crypto.createHash("sha1")
    .update("blob "+raw.length+"\0").update(raw).digest("hex");
}
function loadChunk(filename){return j(bank+filename);}
function byId(rows){return new Map(rows.map(q=>[q.id,q]));}
function changedKeys(a,b){
  return [...new Set([...Object.keys(a),...Object.keys(b)])]
    .filter(k=>!require("node:util").isDeepStrictEqual(a[k],b[k])).sort();
}

assert.equal(lock08.schema,"ct08-p1a-notation-academic-lock-r1");
assert.equal(lock08.status,"NOTEBOOKLM_R1_APPROVED_NOTATION_ONLY_EXCEPTION");
assert.equal(lock08.authorization,"CLEARED_FOR_CT08_P1_IMPLEMENTATION_ONLY");
assert.equal(lock08.topic_id,"CT08");
assert.equal(lock08.audited_blob_sha,
  policy08.source_files[lock08.source_file].blob_sha);
assert.deepEqual([...lock08.allowed_changed_fields].sort(),["explanation","question"]);
assert.deepEqual(lock08.allowed_question_ids,
  ["EQ08V1_047","EQ08V1_048","EQ08V1_049","EQ08V1_050"]);
const current08=loadChunk(lock08.source_file).questions;
assert.equal(current08.length,30);
assert.equal(lock08.audited_questions.length,30);
assert.equal(lock08.audited_questions.length,policy08.source_files[lock08.source_file].question_count);
const previous08=byId(lock08.audited_questions);
const revisions=new Set(lock08.allowed_question_ids);
const answers={47:4,48:3,49:2,50:1};
let unchanged=0,notated=0;
for(const cur of current08){
  const old=previous08.get(cur.id);
  assert.ok(old,cur.id+": missing reviewed historical source");
  if(revisions.has(cur.id)){
    const replacement=lock08.reviewed_replacements[cur.id];
    assert.deepEqual(changedKeys(old,cur),["explanation","question"],
      cur.id+": ONLY reviewed fields may change");
    assert.deepEqual(cur,{...old,...replacement},
      cur.id+": current item must match EXACT reviewed CT08 correction");
    const n=answers[Number(cur.id.split("_")[1])];
    assert.ok(Number.isInteger(n));
    const slash=String.fromCharCode(92);
    assert.ok(cur.question.includes(slash+"frac{x+1}{x+"+n+"}=2"));
    assert.ok(!cur.question.includes("x--"));
    assert.equal(cur.options[cur.answer],slash+"(x"+slash+"ne -"+n+slash+")");
    assert.deepEqual(cur.tags.skill,["dkxd-phuong-trinh-mau"]);
    notated++;
  }else{
    assert.deepEqual(cur,old,cur.id+": original untouched CT08 item drift");
    unchanged++;
  }
}
assert.equal(unchanged,26);
assert.equal(notated,4);
assert.equal(revisions.size,4);

assert.equal(lock09.schema,"ct09-p1c1-academic-payload-lock-r1");
assert.deepEqual(lock09.allowed_additive_question_fields,["variant_group"]);
assert.equal(lock09.question_count,120);
const historicalFiles=manifest09.sources.slice(0,4);
assert.equal(historicalFiles.length,4);
assert.deepEqual(historicalFiles.sort(),
  Object.keys(lock09.sources).sort());
let changedMetadata=0;
for(const filename of historicalFiles){
  const original=lock09.sources[filename];
  assert.equal(original.audited_blob_sha,
    policy09.source_files[filename].blob_sha);
  const current=loadChunk(filename).questions;
  assert.equal(original.questions.length,30);
  assert.equal(current.length,30);
  const before=byId(original.questions);
  for(const q of current){
    const prior=before.get(q.id);
    assert.ok(prior,q.id+": historical CT09 id missing");
    assert.deepEqual(changedKeys(prior,q),["variant_group"],
      q.id+": only additive variant_group is permitted");
    assert.deepEqual({...q,variant_group:undefined},
      {...prior,variant_group:undefined},
      q.id+": historical math and answer payload must remain unchanged");
    assert.equal(typeof q.variant_group,"string");
    assert.ok(q.variant_group.startsWith("SYS09-"));
    changedMetadata++;
  }
}
assert.equal(changedMetadata,120);

const all09=manifest09.sources.flatMap(x=>loadChunk(x).questions);
assert.equal(all09.length,129);
assert.equal(manifest09.question_count,129);
assert.equal(manifest09.variant_group_policy?.status,"ACTIVE_CT09_P1C2");
assert.equal(manifest09.variant_group_policy?.group_count,27);
assert.equal(manifest09.variant_group_policy?.affects_evidence,false);
assert.equal(new Set(all09.map(q=>q.variant_group)).size,27);
assert.ok(engine.includes("if (variantGroup && usedVariantGroups.has(variantGroup))"));
assert.ok(engine.includes("deferred.push(question)"));
assert.ok(engine.includes("for (const question of deferred)"));

assert.equal(unchanged+notated+changedMetadata,150);
assert.ok(!site.includes("math-r24-ct08-source-delta-gates"),
 "test must never register as learner source");
console.log(JSON.stringify({
 result:"PASS R24 exact source-lock differential (QA only)",
 historical_questions:150,unchanged,reviewed_notation_only:notated,
 approved_additive_variant_metadata:changedMetadata,
 ct09_groups:27,ct09_total_questions:129,
 original_taxonomy_source_hashes_changed:false,
 new_student_authorization:false
}));
