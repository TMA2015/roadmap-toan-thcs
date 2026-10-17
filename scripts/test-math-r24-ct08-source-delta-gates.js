#!/usr/bin/env node
"use strict";
/* R24: source-contract regression for four changed CT08 items.
 * NOT an independent NotebookLM verdict or learner Skill authorization.
 */
const assert=require("node:assert/strict"),fs=require("node:fs");
const bank=JSON.parse(fs.readFileSync(
 "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json","utf8"));
const practice=fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8");
const site=fs.readFileSync("mkdocs.yml","utf8");
const bslash=String.fromCharCode(92);
const expected=new Map([[47,4],[48,3],[49,2],[50,1]]);
const originals=bank.questions.filter(q=>expected.has(Number(String(q.id).split("_")[1])));
assert.equal(originals.length,4,"exactly four scoped CT08 items must exist");
for(const q of originals){
 const idx=Number(q.id.split("_")[1]),n=expected.get(idx);
 assert.equal(q.id,"EQ08V1_"+String(idx).padStart(3,"0"));
 assert.ok(q.question.includes(bslash+"frac{x+1}{x+"+n+"}=2"),
  q.id+": edited denominator must render a single plus and positive n");
 assert.ok(!q.question.includes("x--"),q.id+": old double-minus notation forbidden");
 assert.ok(q.explanation.includes("x+"+n),q.id+": explanation must agree");
 assert.ok(q.explanation.includes("x"+bslash+"ne -"+n),
  q.id+": explanation domain must match denominator");
 assert.equal(q.answer,0,q.id+": answer index must remain 0");
 assert.equal(q.options.length,4);
 assert.equal(q.options[0],bslash+"(x"+bslash+"ne -"+n+bslash+")",
  q.id+": must retain single correct domain choice");
 assert.equal(new Set(q.options).size,q.options.length,
  q.id+": answer options must be distinct");
 assert.deepEqual(q.tags?.skill,["dkxd-phuong-trinh-mau"]);
 assert.equal(q.tags?.type,"dkxd-pt-mau");
 assert.ok(["basic","intermediate","advanced"].includes(q.difficulty));
}
const manifest=JSON.parse(fs.readFileSync(
 "docs/assets/data/practice/09-he-phuong-trinh-v1.manifest.json","utf8"));
const chunks=manifest.sources.map(x=>JSON.parse(fs.readFileSync(
 "docs/assets/data/practice/"+x,"utf8")).questions);
const all=chunks.flat(),history=chunks.slice(0,4).flat();
assert.equal(history.length,120);
assert.equal(manifest.question_count,129);
assert.equal(manifest.variant_group_policy?.group_count,27);
assert.equal(manifest.variant_group_policy?.affects_evidence,false);
assert.equal(new Set(all.map(q=>q.variant_group)).size,27);
assert.ok(history.every(q=>String(q.variant_group||"").startsWith("SYS09-")));
assert.ok(practice.includes("if (variantGroup && usedVariantGroups.has(variantGroup))"));
assert.ok(practice.includes("deferred.push(question)"),
 "session diversity must defer already-seen variant groups");
assert.ok(practice.includes("for (const question of deferred)"),
 "selector must refill when distinct variants are insufficient");
assert.ok(!site.includes("math-r24-ct08-source-delta-gates"));
console.log("PASS R24 QA: 4 CT08 denominator/domain/options; CT09 120 historical groups, 27-group delivery, no evidence authorization");
console.log("NotebookLM independent review of the four current CT08 items remains pending.");
