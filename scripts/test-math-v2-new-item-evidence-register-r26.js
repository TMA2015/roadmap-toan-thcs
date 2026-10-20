#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const {auditNewItems,classify,richSources}=require("./prototypes/math-v2-new-item-evidence-register-r26.js");
const a=auditNewItems();
assert.equal(a.schema,"math-phase4-r26-practice-new-item-register-qa-v1");
assert.equal(a.total,60);
assert.equal(a.mcq,50);
assert.equal(a.rich,10);
assert.equal(a.known_ct09_exact_reviewed,9);
assert.equal(a.rich_prior_review_or_release_linked,10);
assert.equal(a.mcq_without_item_specific_receipt_link,40);
assert.equal(Object.keys(richSources).length,10);
assert.equal(a.items.length,60);
assert.equal(new Set(a.items.map(x=>x.question_id)).size,59);
const topicCounts={CT02:29,CT03:6,CT04:10,CT07:1,CT09:9,CT12:3,CT21:2};
assert.deepEqual(Object.fromEntries(
 Object.entries(a.topic_groups).map(([k,v])=>[k,v.total]).sort()),topicCounts);
assert.deepEqual(Object.fromEntries(
 Object.entries(a.topic_groups).map(([k,v])=>[k,[v.mcq,v.rich]]).sort()),
 {CT02:[27,2],CT03:[4,2],CT04:[6,4],CT07:[1,0],CT09:[9,0],CT12:[3,0],CT21:[0,2]});
assert(a.items.every(x=>/^[a-f0-9]{40}$/.test(x.source_git_blob_sha)));
assert(a.items.every(x=>x.learner_currently_served_independently_verified===false));
assert(a.items.every(x=>x.stable_option_identity_approved===false));
const ct07=a.items.filter(x=>x.topic_id==="CT07");
assert.equal(ct07.length,1);
assert.equal(ct07[0].question_id,"RAT07V1_121");
assert.equal(ct07[0].prior_review_status,"CT07_P1_AUTHORING_PASS_NO_CREDIT");
assert(ct07[0].receipt.endsWith("MATH-CT05-07-W3-P1-MCQ-R1-RESULT.md"));
assert.equal(ct07[0].mastery_or_readiness_approved,false);
assert.equal(ct07[0].exact_taxonomy_mapping_approved,false);
assert(a.items.every(x=>x.mastery_or_readiness_approved===false));
assert(a.items.every(x=>x.exact_taxonomy_mapping_approved===false||
    (x.topic_id==="CT09"&&x.question_id.startsWith("SYS09V1_"))));
assert(a.items.filter(x=>x.kind==="RICH_TYPED").every(x=>
 typeof x.receipt==="string"&&x.source_item_id));
assert(a.items.filter(x=>x.kind==="MCQ"&&!["CT09","CT07"].includes(x.topic_id)).every(x=>
 x.receipt===null));
for(const [key,v] of Object.entries(a.safeguards))assert.equal(v,false,key);
const fakeItem={topic_id:"CT02",source_file:"unknown.json",
 q:{id:"UNKNOWN_RICH",response_type:"numeric",answer_contract:{required:true},
 source_item_id:"NO_SOURCE_LINK"}};
assert.throws(()=>classify(fakeItem,{receiptText:()=>""}),
 /R26_RICH_WITHOUT_EXACT_SOURCE_PROVENANCE/);
assert.throws(()=>classify({topic_id:"CT12",q:{id:"BAD_MCQ",options:["a"],answer:0}},
 {receiptText:()=>""}),/R26_MCQ_CONTRACT_INVALID/);
const s=fs.readFileSync("scripts/prototypes/math-v2-new-item-evidence-register-r26.js","utf8");
const config=fs.readFileSync("mkdocs.yml","utf8");
const practice=fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8");
assert(!config.includes("math-v2-new-item-evidence-register-r26"));
assert(!practice.includes("math-v2-new-item-evidence-register-r26"));
assert(!/localStorage|indexedDB|sessionStorage|fetch\s*\(|sendBeacon/.test(s));
assert(!/writeFile|appendFile|renameSync|unlinkSync|rmSync/.test(s));
console.log("PASS R26: 60 exact candidates, one CT07 authoring PASS receipt, 9 CT09 reviewed, 10 rich, 40 other MCQ; no Skill credit");
console.log(JSON.stringify({topics:a.topic_groups, safeguards:a.safeguards}));
