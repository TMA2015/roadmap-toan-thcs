"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const root = path.resolve(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(root,p), "utf8");
const json = (p) => JSON.parse(read(p));
const blobSha = (body) => crypto.createHash("sha1").update("blob " + Buffer.byteLength(body) + "\0").update(body).digest("hex");
const snapshot = json("docs/assets/data/curriculum/review-snapshot-04-11.json");
const topics = snapshot.topics.slice(0,4);
const base = "docs/assets/data/curriculum/";
const seen = new Set();
let totals = { questions:0, proposed_primary:0, needs_review:0, no_primary:0 };
let checks=0;
const check=(name,fn)=>{fn();checks++;console.log("PASS "+name);};
let compiled=[];
for (const topic of topics) {
  const overlay=json(base+"primary-skill-overlay-draft-"+topic.topic+"-v1.json");
  check(topic.topic+": source locks, exact question coverage, tag partition and primary mapping",()=>{
    assert.equal(overlay.schema,"primary-skill-overlay-draft-v1");
    assert.equal(overlay.status,"review_only_not_consumed_by_runtime");
    assert.equal(overlay.source_manifest,topic.manifest);
    assert.equal(overlay.source_manifest_blob_sha,blobSha(read(topic.manifest)));
    assert.equal(overlay.source_inventory_snapshot_sha,blobSha(read(base+"review-snapshot-04-11.json")));
    assert.deepEqual(Object.keys(overlay.source_files).sort(),topic.sources.slice().sort());
    const bankQuestions=new Map();
    for (const source of topic.sources) {
      const file="docs/assets/data/practice/"+source;
      const raw=read(file);
      const content=JSON.parse(raw);
      assert.equal(overlay.source_files[source].github_blob_sha,blobSha(raw));
      assert.equal(overlay.source_files[source].question_count,content.questions.length);
      for (const q of content.questions) {
        assert.ok(!bankQuestions.has(q.id),"source duplicate ID "+q.id);
        bankQuestions.set(q.id,{...q,source_file:source});
      }
    }
    assert.equal(bankQuestions.size,topic.declared_questions);
    assert.equal(overlay.items.length,topic.declared_questions);
    const records=new Set();
    for (const item of overlay.items) {
      assert.ok(!records.has(item.id),item.id+" duplicate overlay");
      records.add(item.id);
      const q=bankQuestions.get(item.id);
      assert.ok(q,"overlay ID missing in bank: "+item.id);
      assert.equal(item.source_file,q.source_file);
      assert.deepEqual(item.original_skill_tags,q.tags.skill);
      const primary=item.proposed_assessed_skill;
      if(primary){
        assert.ok(q.tags.skill.includes(primary),item.id+": primary not from raw tags");
        assert.ok(Object.hasOwn(topic.skill_labels,primary),item.id+": unknown primary");
      } else {
        assert.ok(item.flags.includes("no_production_primary_selected"),item.id+" null primary without review flag");
        assert.equal(item.review_state,"needs_item_or_layer_review");
      }
      const roles=Object.values(item.roles).flat();
      assert.equal(new Set(roles).size,roles.length,item.id+" overlapping role tags");
      assert.deepEqual([...roles, ...(primary?[primary]:[])].sort(),q.tags.skill.slice().sort(),item.id+" lost/duplicated tag");
      assert.ok(!seen.has(item.id),"duplicate ID across CĐ04–07");
      seen.add(item.id);
    }
    assert.equal(records.size,bankQuestions.size);
    const actual={
      questions:overlay.items.length,
      proposed_primary:overlay.items.filter(x=>x.proposed_assessed_skill).length,
      needs_review:overlay.items.filter(x=>x.review_state!=="pattern_candidate_only").length,
      no_primary:overlay.items.filter(x=>!x.proposed_assessed_skill).length,
      original_tags_preserved:true
    };
    assert.deepEqual(overlay.summary,actual);
    for(const field of Object.keys(totals))totals[field]+=actual[field];
    compiled.push(...overlay.items);
  });
}
check("the entire four-topic mapping is complete but NOT academic approval",()=>{
  assert.deepEqual(totals,{questions:492,proposed_primary:456,needs_review:39,no_primary:36});
  assert.equal(seen.size,492);
});
check("known semantic mismatches remain flagged, not auto-approved",()=>{
  const byId=new Map(compiled.map(q=>[q.id,q]));
  assert.equal(byId.get("ALG04V2_010").proposed_assessed_skill,"nhan-biet-don-thuc");
  assert.ok(byId.get("ALG04V2_010").flags.includes("tag_he_so_bac_not_actual_target"));
  assert.equal(byId.get("ID05V1_021").proposed_assessed_skill,"hieu-hai-binh-phuong");
  for(const id of ["ID05V1_116","ID05V1_117","ID05V1_118","ID05V1_119"])assert.equal(byId.get(id).proposed_assessed_skill,null);
  assert.equal(byId.get("RAT07V1_063").proposed_assessed_skill,"giu-dieu-kien-ban-dau");
  assert.equal(byId.get("RAT07V1_119").proposed_assessed_skill,null);
  assert.equal(byId.get("FAC06V1_077").proposed_assessed_skill,null);
  assert.equal(byId.get("RAT07V1_109").proposed_assessed_skill,null);
});
check("pilot cannot silently write or load tentative overlay",()=>{
  const files=["mkdocs.yml","docs/assets/javascripts/practice-engine-v2.js","docs/assets/javascripts/skill-assessment-pilot-v2.js","docs/assets/javascripts/learner-evidence-v1.js"];
  for (const file of files) assert.equal(read(file).includes("primary-skill-overlay-draft-"),false,file+" unexpectedly imports draft");
});
console.log("PASSED "+checks+" overlay checks. "+JSON.stringify(totals));
