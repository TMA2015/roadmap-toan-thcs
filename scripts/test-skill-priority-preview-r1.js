"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const json=p=>JSON.parse(read(p));
const logic=require("../docs/assets/javascripts/skill-priority-preview-r1.js");
const registry=json("docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json");
const matrix=json("docs/assets/data/curriculum/skill-priority-matrix-r1.json");
const spine=json("docs/assets/data/curriculum/vertical-spine.json");
const catalog=logic.validateAndBuild(matrix,spine);
const registryById=new Map(registry.families.map(r=>[r.family_id,r]));
assert.equal(registryById.size,131);
for(const row of catalog.rows){
  const src=registryById.get(row.family_id);
  assert.ok(src,"unknown reviewed family");
  assert.equal(row.layer,src.layer);
  assert.deepEqual(row.topics,src.topics);
}

assert.equal(catalog.rows.length,131);
assert.equal(new Set(catalog.rows.map(r=>r.family_id)).size,131);
assert.deepEqual(
  ["P0_FOUNDATION_CRITICAL","P1_HIGH_VALUE_CORE","P2_STANDARD_CORE"].map(k=>catalog.counts[k]),
  [11,37,52]
);
assert.equal(logic.filterRows(catalog.rows,{scope:"core"}).length,100);
assert.equal(logic.filterRows(catalog.rows,{scope:"support"}).length,5);
assert.equal(logic.filterRows(catalog.rows,{scope:"entrance"}).length,19);
assert.equal(logic.filterRows(catalog.rows,{scope:"optional"}).length,7);
assert.equal(logic.filterRows(catalog.rows,{scope:"all"}).length,131);
assert.equal(logic.filterRows(catalog.rows,{scope:"all",level:"P0_FOUNDATION_CRITICAL"}).length,11);
assert.equal(logic.filterRows(catalog.rows,{scope:"core",query:"so nguyen"}).some(r=>r.family_id==="NUM-INTEGER-OPS"),true);
assert.equal(logic.filterRows(catalog.rows,{scope:"core",topic:"CT02"}).every(r=>r.topics.includes("CT02")),true);
assert.equal(catalog.topicSlugs.CT25,"25-tong-hop-on-thi-10");
for(const r of catalog.rows){
  assert.ok(logic.PRIORITIES[r.priority_code]);
  assert.equal(typeof r.label_vi,"string");
}
const page=read("docs/collaboration/skill-priority-preview-r1.md");
const owner=read("docs/collaboration/skill-map-v2-preview.md");
const js=read("docs/assets/javascripts/skill-priority-preview-r1.js");
assert.ok(page.includes("data-skill-priority-preview-r1"));
assert.ok(page.includes("skill-priority-preview-r1.js"));
assert.ok(owner.includes("skill-priority-preview-r1/"));
assert.ok(!js.includes("localStorage"));
assert.ok(!js.includes("setItem("));
assert.ok(!js.includes("mastery_threshold"));
assert.ok(!js.includes("regrade"));
console.log("PASS: 131 canonical Skill Priority R1 families and all layer/priority counts match.");
console.log("PASS: priority/topic/search filters do not derive new grading or question quotas.");
console.log("PASS: only isolated owner preview page reads approved metadata.");
