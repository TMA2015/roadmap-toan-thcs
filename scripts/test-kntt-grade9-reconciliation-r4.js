#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const json=p=>JSON.parse(read(p));
const blob=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text,"utf8")+"\0"+text).digest("hex");

const r=json("docs/assets/data/curriculum/kntt-grade9-reconciliation-r4.json");
assert.equal(r.schema,"kntt-grade9-reconciliation-r4");
assert.equal(r.version,1);
assert.equal(r.status,"DRAFT_RECONCILIATION_REVIEW_PENDING_NO_RUNTIME_CHANGE");
assert.equal(r.summary.exact_id_unresolved_input_count,4);
assert.equal(r.entries.length,4);

for(const lock of [r.source_locks.coverage_matrix,r.source_locks.grade9_map,r.source_locks.taxonomy_v2,r.source_locks.knowledge_graph,r.source_locks.learning_workspace]){
  assert.equal(blob(read(lock.path)),lock.blob_sha,"source drift: "+lock.path);
}
const m=json(r.source_locks.coverage_matrix.path);
const g9=m.grades.find(g=>g.grade===9);
const unresolved=[...new Set(g9.rows.flatMap(x=>x.unresolved_skill_refs||[]))].sort();
assert.deepEqual(r.entries.map(e=>e.historical_ref).sort(),unresolved);
assert.deepEqual(unresolved,["bang-tan-so-ghep-nhom","bang-tan-so-tuong-doi","bieu-do-tan-so","bieu-do-tan-so-tuong-doi"].sort());

const tax=json(r.source_locks.taxonomy_v2.path);
const families=new Map(tax.families.map(f=>[f.family_id,f]));
assert.equal(families.get("STAT-FREQUENCY").layer,"Core-Support");
assert.ok(families.get("STAT-FREQUENCY").diagnostic_subskills.includes("tan-suat"));
assert.equal(families.get("STAT-ADVANCED-DATA").layer,"Entrance10");
assert.ok(families.get("STAT-ADVANCED-DATA").diagnostic_subskills.includes("du-lieu-ghep-nhom"));

for(const e of r.entries){
  assert.equal(e.resolution,"NEEDS_REVIEW");
  assert.deepEqual(e.canonical_skill_ids,[]);
  assert.deepEqual(e.canonical_family_ids,[]);
}
assert.equal(r.summary.layer_audit_required,true);
assert.equal(r.summary.layer_conflicts_to_review.length,2);
for(const [k,v] of Object.entries(r.protected_boundaries)) assert.equal(v,false,"protected boundary changed: "+k);

console.log("PASS: Grade-9 R4 isolates exactly the final 4 exact-ID mismatches.");
console.log("PASS: mandatory layer audit covers STAT-FREQUENCY and STAT-ADVANCED-DATA; no pre-review change authorized.");
