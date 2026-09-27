"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const json=p=>JSON.parse(read(p));
const sha=body=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(body)+"\0").update(body).digest("hex");
const base="docs/assets/data/curriculum/";
const data=json(base+"primary-skill-decision-register-39-v1.json");
assert.equal(data.status,"question_level_triage_completed_not_consumed_by_runtime");
const queue=data.review_packets.flatMap(p=>{
 assert.equal(sha(read(p.path)),p.blob_sha,"review queue changed; re-review needed: "+p.path);
 return json(p.path).items;
});
const byId=new Map(queue.map(q=>[q.question_id,q]));
assert.equal(queue.length,39);
assert.equal(byId.size,39,"duplicate flagged ID in source queues");
assert.equal(data.items.length,39);
const overlays={};
for(const [topic,o]of Object.entries(data.source_overlays)){
 assert.equal(sha(read(o.path)),o.blob_sha,"overlay changed; re-review needed: "+topic);
 overlays[topic]=json(o.path);
}
const counts={};
const seen=new Set();
const originalQuestionCache=new Map();
for(const d of data.items){
 assert.ok(!seen.has(d.question_id),"duplicate decision: "+d.question_id);seen.add(d.question_id);
 const q=byId.get(d.question_id);assert.ok(q,"decision not backed by flagged source: "+d.question_id);
 assert.equal(d.question_source,q.source_file);
 assert.equal(d.topic,q.topic);
 assert.equal(d.queue_source,data.review_packets.some(x=>x.path===base+d.queue_source)?d.queue_source:"INVALID_QUEUE","bad queue ref");
 assert.deepEqual(d.legacy_skill_tags,q.original_skill_tags);
 assert.equal(d.previous_draft_primary,q.proposed_assessed_skill);
 assert.deepEqual(d.original_flags,q.flags);
 assert.ok(d.observable_answer_evidence.length>20);
 assert.ok(d.does_not_establish.length>0);
 assert.ok(d.review_next_action.length>35);
 assert.ok(d.learner_remediation.length>25);
 assert.equal(d.runtime_enabled,false);
 assert.equal(d.core_readiness_credit,false);
 const ov=overlays[d.topic];
 const row=ov.items.find(x=>x.id===d.question_id);
 assert.ok(row);
 assert.equal(d.question_source_blob_sha,ov.source_files[d.question_source].github_blob_sha);
 const source="docs/assets/data/practice/"+d.question_source;
 const raw=read(source);
 assert.equal(sha(raw),d.question_source_blob_sha,"raw question source drift");
 if(!originalQuestionCache.has(source))originalQuestionCache.set(source,new Map(JSON.parse(raw).questions.map(x=>[x.id,x])));
 const item=originalQuestionCache.get(source).get(d.question_id);assert.ok(item);
 assert.equal(q.question,item.question);
 assert.deepEqual(q.options,item.options);
 assert.equal(q.answer_index,item.answer);
 assert.equal(q.correct_option,item.options[item.answer]);
 assert.equal(q.explanation,item.explanation);
 counts[d.decision_status]=(counts[d.decision_status]||0)+1;
 if(d.decision_status==="scoped_primary_candidate"){
  assert.ok(d.selected_assessed_skill_candidate);
  if(d.topic==="06-phan-tich-da-thuc"){
   assert.equal(d.selected_assessed_skill_candidate,"phan-tich-da-thuc-hoan-toan");
   assert.deepEqual(d.legacy_skill_tags,["phoi-hop-phuong-phap"]);
   assert.ok(d.observable_answer_evidence.includes("phân tích hoàn toàn"));
   assert.ok(d.does_not_establish.some(x=>x.includes("phương pháp trung gian")));
  }else assert.ok(item.tags.skill.includes(d.selected_assessed_skill_candidate),"unregistered cross-label primary");
 }else{
  assert.equal(d.selected_assessed_skill_candidate,null,"unapproved item must not emit primary");
 }
}
assert.deepEqual(counts,{scoped_primary_candidate:19,formative_only_requires_new_evidence:18,extension_only_pending_layer_check:2});
assert.deepEqual(data.summary,{total:39,...counts,selected_candidate:19,runtime_enabled:0,core_readiness_credit:0});
assert.equal(seen.size,39);
const topicIds=(topic)=>data.items.filter(x=>x.topic===topic).map(x=>x.question_id);
assert.equal(topicIds("04-bieu-thuc-dai-so").length,2);
assert.equal(topicIds("05-7-hang-dang-thuc").length,5);
assert.equal(topicIds("06-phan-tich-da-thuc").length,24);
assert.equal(topicIds("07-phan-thuc-dai-so").length,8);
for(let n=116;n<=119;n++)assert.equal(data.items.find(x=>x.question_id==="ID05V1_"+n).selected_assessed_skill_candidate,null,"identity recognition cannot count as written proof");
assert.equal(data.items.find(x=>x.question_id==="ID05V1_120").selected_assessed_skill_candidate,"hieu-hai-binh-phuong");
for(let n=109;n<=114;n++)assert.equal(data.items.find(x=>x.question_id==="RAT07V1_"+n).selected_assessed_skill_candidate,null,"repeated answer 1 is weak independent evidence");
for(let n=119;n<=120;n++)assert.equal(data.items.find(x=>x.question_id==="RAT07V1_"+n).decision_status,"extension_only_pending_layer_check");
const files=["mkdocs.yml","docs/assets/javascripts/practice-engine-v2.js","docs/assets/javascripts/learner-evidence-v1.js","docs/assets/javascripts/skill-assessment-pilot-v2.js"];
for(const f of files)assert.ok(!read(f).includes("primary-skill-decision-register-39-v1"),f+" unexpectedly consumes review-only asset");
assert.equal(data.single_new_canonical_candidate.registry_status,"proposal_not_registered_or_live");
console.log("PASS 39/39 decision rows match complete current source questions, queues and four overlay SHA locks");
console.log("PASS statuses 19 scoped pilot candidates / 18 formative-only / 2 extension-tier pending");
console.log("PASS 16 CĐ06 entries propose one outcome skill, never independent methods or historical tag migration");
console.log("PASS old engine, Beta v2, student stores and Core Readiness cannot consume draft decision register");
console.log("PASSED skill-decision QA.");
