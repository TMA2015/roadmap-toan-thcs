#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const {inspect,renderPacket,EXPECTED_GROUPS}=require("./prototypes/math-v2-r27-mcq-source-review.js");
const PACKET="review-packets/math-phase4-r27-mcq-40/01_NOTEBOOKLM_40_MCQ_EXACT_SOURCE_20261018.md";
const r=inspect();
assert.equal(r.schema,"math-r27-exact-40-mcq-review-candidate-v1");
assert.equal(r.status,"PREPARED_FOR_INDEPENDENT_REVIEW_NOT_APPROVED");
assert.equal(r.total,40);
assert.equal(r.topics,4);
assert.equal(r.source_files,6);
assert.deepEqual(Object.fromEntries(Object.entries(r.source_tag_groups).sort()),EXPECTED_GROUPS);
assert.equal(r.rows.length,40);
assert.equal(new Set(r.rows.map(x=>x.id)).size,40);
assert.equal(r.rows.filter(x=>x.topic_id==="CT02").length,27);
assert.equal(r.rows.filter(x=>x.topic_id==="CT03").length,4);
assert.equal(r.rows.filter(x=>x.topic_id==="CT04").length,6);
assert.equal(r.rows.filter(x=>x.topic_id==="CT12").length,3);
assert(r.rows.every(x=>x.academic_verdict==="NOT_LINKED_BY_R26"));
assert(r.rows.every(x=>x.reviewed_family_id===null&&
 x.independent_credit_authorized===false&&
 x.live_route_verified===false&&
 x.stable_option_identity_verified===false));
assert(r.rows.every(x=>/^[a-f0-9]{40}$/.test(x.source_git_blob_sha)&&
 /^[a-f0-9]{64}$/.test(x.record_sha256)));
for(const [k,v] of Object.entries(r.protections))assert.equal(v,false,k);
const packet=fs.readFileSync(PACKET,"utf8");
assert.equal(packet,renderPacket(r),
 "NotebookLM packet MUST match all 40 source records and file pins byte-for-byte");
assert.equal((packet.match(/^### \w.+ — CT\d\d$/gm)||[]).length,40);
assert(!/PASS\s+40\/40|NOTEBOOKLM_APPROVED|auto.*mastery/i.test(packet));
const sourcePath="docs/assets/data/practice/02-so-va-phep-tinh-v1-05.json";
const old=fs.readFileSync(sourcePath);
assert.throws(()=>inspect({readBytes:rel=>rel===sourcePath?
 Buffer.concat([old,Buffer.from(" ")]):fs.readFileSync(rel)}),
 /R27_CHANGED_BANK/);
const bad=JSON.parse(old.toString("utf8"));
bad.questions[0].answer=99;
assert.throws(()=>inspect({readBytes:rel=>rel===sourcePath?
 Buffer.from(JSON.stringify(bad)):fs.readFileSync(rel)}),
 /R27_CHANGED_BANK/);
const site=fs.readFileSync("mkdocs.yml","utf8");
const engine=fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8");
const source=fs.readFileSync("scripts/prototypes/math-v2-r27-mcq-source-review.js","utf8");
assert(!site.includes("math-v2-r27-mcq-source-review"));
assert(!engine.includes("math-v2-r27-mcq-source-review"));
assert(!/localStorage|indexedDB|sessionStorage|sendBeacon|fetch\s*\(/.test(source));
assert(!/writeFile|appendFile|renameSync|unlinkSync|rmSync/.test(source));
console.log("PASS R27 exact 40-item packet, SHA-locked 6 sources / 8 unreviewed legacy tag groups, no academic or learner credits");
console.log(JSON.stringify({items:r.rows.length,groups:r.source_tag_groups,
 source_files:r.source_files,all_protections_disabled:true}));
