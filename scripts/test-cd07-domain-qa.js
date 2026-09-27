"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const json=p=>JSON.parse(read(p));
const blob=s=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(s)+"\0").update(s).digest("hex");
const base="docs/assets/data/practice/07-phan-thuc-dai-so-v1-";
const files=[1,2,3,4].map(n=>base+String(n).padStart(2,"0")+".json");
const overlay=json("docs/assets/data/curriculum/primary-skill-overlay-draft-07-phan-thuc-dai-so-v1.json");
const queue=json("docs/assets/data/curriculum/primary-skill-review-queue-06-07-v1.json");
const source=files.flatMap(file=>{
 const j=json(file);
 assert.equal(j.questions.length,30,"source count "+file);
 const key=path.basename(file);
 assert.equal(overlay.source_files[key].github_blob_sha,blob(read(file)),"stale SHA "+key);
 return j.questions.map(q=>({...q,source_file:key}));
});
const byId=new Map(source.map(q=>[q.id,q]));
assert.equal(source.length,120);
assert.equal(byId.size,120,"duplicate source IDs");
assert.equal(overlay.items.length,120);
const byOverlay=new Map(overlay.items.map(x=>[x.id,x]));
assert.equal(byOverlay.size,120);
for(const q of source){
 assert.equal(q.options.length,4,q.id);
 assert.equal(new Set(q.options).size,4,q.id+" duplicate literal option");
 assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4,q.id+" invalid key");
 const row=byOverlay.get(q.id);assert.ok(row,"missing overlay "+q.id);
 assert.equal(row.source_file,q.source_file,"stale source file "+q.id);
 assert.deepEqual(row.original_skill_tags,q.tags.skill,"source skill drift "+q.id);
 if(row.proposed_assessed_skill)assert.ok(q.tags.skill.includes(row.proposed_assessed_skill),"foreign primary "+q.id);
}
const fullText=queue.items.filter(x=>x.topic==="07-phan-thuc-dai-so");
assert.equal(fullText.length,8);
for(const row of fullText){
 const q=byId.get(row.question_id);assert.ok(q);
 assert.equal(row.source_file,q.source_file);
 assert.equal(row.question,q.question,"queue prompt drift "+q.id);
 assert.deepEqual(row.options,q.options,"queue options drift "+q.id);
 assert.equal(row.answer_index,q.answer,"queue key drift "+q.id);
 assert.equal(row.correct_option,q.options[q.answer],"queue correct-option drift "+q.id);
 assert.equal(row.explanation,q.explanation,"queue explanation drift "+q.id);
 assert.deepEqual(row.original_skill_tags,q.tags.skill,"queue tags drift "+q.id);
}
for(let a=1;a<=6;a++){
 const id="RAT07V1_"+String(108+a).padStart(3,"0");
 const q=byId.get(id),row=byOverlay.get(id);
 assert.ok(q.question.includes("\\(x\\ne0,\\;x\\ne\\pm "+a+"\\)"),id+" missing excluded values in prompt");
 assert.ok(q.explanation.includes("\\(x\\ne0,\\;x\\ne\\pm "+a+"\\)"),id+" missing excluded values in explanation");
 assert.ok(q.explanation.includes("\\frac{2x}{x^2-"+a*a+"}"),id+" missing common-denominator step");
 assert.ok(q.explanation.includes("\\(A=1\\)"),id+" missing simplification");
 assert.equal(q.answer,0);assert.equal(q.options[0],"\\(1\\)");
 assert.equal(row.proposed_assessed_skill,null,id+" composite item must not produce one inferred primary");
 assert.ok(row.flags.includes("composite_item_needs_step_rubric"));
 let checked=0;
 for(let x=-12;x<=12;x++){
  if(x===0||x===a||x===-a)continue;
  const actual=(1/(x-a)+1/(x+a))*((x*x-a*a)/(2*x));
  assert.ok(Math.abs(actual-1)<1e-12,id+" wrong result at x="+x);
  ++checked;
 }
 assert.equal(checked,22,"unexpected allowed sample count");
}
for(const [id,numeratorShift,denominatorShift,expected] of [
 ["RAT07V1_119",1,2,[-1,1,3,5]],
 ["RAT07V1_120",2,3,[-2,2,4,8]]
]){
 const q=byId.get(id),row=byOverlay.get(id);
 const observed=[];
 for(let x=-100;x<=100;x++){
  if(x===denominatorShift)continue;
  if(Number.isInteger((x+numeratorShift)/(x-denominatorShift)))observed.push(x);
 }
 assert.deepEqual(observed,expected,id+" wrong integral solution set");
 assert.equal(q.answer,0);
 assert.equal(q.options[0],"\\(x\\in\\{"+expected.join(",")+"\\}\\)");
 assert.equal(row.proposed_assessed_skill,null,id+" extension case must remain review-only");
 assert.ok(row.flags.includes("check_curriculum_layer_not_core_by_default"));
}
assert.equal(overlay.items.filter(x=>x.proposed_assessed_skill===null).length,8);
assert.equal(overlay.items.filter(x=>x.review_state!=="pattern_candidate_only").length,8);
for(const file of ["mkdocs.yml","docs/assets/javascripts/practice-engine-v2.js","docs/assets/javascripts/skill-assessment-pilot-v2.js"]){
 assert.ok(!read(file).includes("primary-skill-overlay-draft-07-"),"review overlay is accidentally live: "+file);
}
console.log("PASS: 120 distinct CĐ07 source questions, four locked 30-question chunks.");
console.log("PASS: 120 source/overlay tags, 8 queued cases, answer keys and explanations synchronized.");
console.log("PASS: six composite rational expressions simplify to 1 only with x != 0, +/-a.");
console.log("PASS: two integer-value answer sets; eight composite/extension items retain null primary.");
console.log("No browser QA, no changes to learner state, no activation of tentative mastery.");
