"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const json=p=>JSON.parse(read(p));
const blob=body=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(body)+"\0").update(body).digest("hex");
const cfg=json("docs/assets/data/curriculum/complete-factorization-preview-v2.json");
const source="docs/assets/data/practice/"+cfg.source_file;
const banks=Object.fromEntries(Object.entries(cfg.source_files).map(([file,digest])=>{
 const sourcePath="docs/assets/data/practice/"+file;
 assert.equal(blob(read(sourcePath)),digest,"source version drift: "+file);
 return [file,json(sourcePath).questions];
}));
const logic=require("../docs/assets/javascripts/complete-factorization-preview-v2.js");
assert.equal(logic.BUILD,"complete-factor-preview-v2-20260927");
assert.equal(blob(read(source)),cfg.source_file_blob_sha,"source SHA drift");
assert.ok(logic.validConfig(cfg));
assert.deepEqual(cfg.initial_question_ids,Array.from({length:8},(_,i)=>"FAC06V1_"+String(77+i).padStart(3,"0")));
const sets=logic.prepareSets(cfg,banks);
assert.equal(sets.initial.length,8);
assert.equal(Object.keys(sets.similar).length,8);
const initial=new Set(sets.initial.map(q=>q.id));
const sibling=new Set(Object.values(sets.similar).map(q=>q.id));
assert.equal(sibling.size,8);
assert.ok([...sibling].every(id=>!initial.has(id)),"similar questions must have different source ID");
for(let i=0;i<8;i++){
  const original=sets.initial[i],related=sets.similar[original.id];
  assert.equal(related.id,"FAC06V1_"+String(85+i).padStart(3,"0"));
  assert.notEqual(related.question,original.question);
  for(const q of [original,related]){
    assert.equal(q.assessed_skill,"phan-tich-da-thuc-hoan-toan");
    assert.equal(q.source_blob_sha,cfg.source_files[q.source_file]);
    assert.deepEqual(q.tags.skill,["phoi-hop-phuong-phap"]);
    assert.equal(q.options.length,4);
    assert.ok(q.explanation.includes("="),"must show worked answer");
  }
}
const register=json("docs/assets/data/curriculum/primary-skill-decision-register-39-v1.json");
for(const q of sets.initial){
 const row=register.items.find(x=>x.question_id===q.id);
 assert.ok(row);
 assert.equal(row.selected_assessed_skill_candidate,q.assessed_skill);
 assert.equal(row.runtime_enabled,false);
}
assert.equal(logic.evidenceKind("initial"),"first_exposure_in_this_page_only");
assert.equal(logic.evidenceKind("retry_old"),"review_of_seen_answer_no_new_evidence");
assert.equal(logic.evidenceKind("similar_after_feedback"),"new_question_after_feedback_assisted_transfer");
assert.notEqual(logic.evidenceKind("similar_after_feedback"),logic.evidenceKind("initial"));
assert.deepEqual(logic.summarize([{question:sets.initial[0],correct:true},{question:sets.initial[1],correct:false}]),
 {attempted:2,correct:1,wrong:[sets.initial[1].id]});
assert.deepEqual(logic.shuffle([0,1,2,3],()=>0).sort(),[0,1,2,3]);
assert.equal(logic.validConfig({...cfg,similar_question_by_initial_id:{...cfg.similar_question_by_initial_id,[cfg.initial_question_ids[0]]:cfg.initial_question_ids[0]}}),false);
assert.equal(logic.validConfig({...cfg,similar_question_by_initial_id:{...cfg.similar_question_by_initial_id,[cfg.initial_question_ids[0]]:cfg.similar_question_by_initial_id[cfg.initial_question_ids[1]]}}),false);
assert.throws(()=>logic.prepareSets(cfg,{...banks,[cfg.source_file]:banks[cfg.source_file].filter(q=>q.id!==cfg.initial_question_ids[0])}));
const js=read("docs/assets/javascripts/complete-factorization-preview-v2.js");
assert.ok(!/\blocalStorage\b|\bsessionStorage\b|indexedDB|document\.cookie/.test(js),"preview must never read or write learner storage");
assert.ok(!js.includes("appendEvidence")&&!js.includes("recordAnswer"));
assert.ok(js.includes("this.answers[this.index]"),"immutable submitted answers required");
assert.ok(js.includes("this.orders[this.index]"),"option order must survive navigation");
assert.ok(read("mkdocs.yml").includes("skill-assessment-pilot-v2.js"),"old Beta must be present");
assert.ok(read("mkdocs.yml").includes("complete-factorization-preview-v2.js"));
assert.ok(read("docs/huong-dan/thu-nghiem-phan-tich-hoan-toan.md").includes("thu-nghiem-phan-tich-hoan-toan-v2.md"),"old URL links to new");
console.log("PASS 8 original + 8 different-ID QA-backed sibling questions, fixed source SHA");
console.log("PASS no new mastery, no storage access, stable review navigation and graded evidence labels");
console.log("PASS immutable legacy URL / Beta v2 retained; session score and post-feedback labels separated");
console.log("PASSED CĐ06 preview v2 checks.");
