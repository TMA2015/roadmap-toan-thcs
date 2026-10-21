#!/usr/bin/env node
"use strict";
/* Audit canonical Written metadata against existing published Core card sources.
   This is source crosswalk evidence only, never independent KNTT S1 placement proof. */
const fs=require("node:fs"),crypto=require("node:crypto"),assert=require("node:assert/strict");
const path="docs/assets/data/written-exercises/written-exercise-library-v1.json";
const lib=JSON.parse(fs.readFileSync(path,"utf8"));
const blob=b=>{const x=fs.readFileSync(b);return crypto.createHash("sha1").update("blob "+x.length+"\0").update(x).digest("hex")};
const totals={items:0,approved:0,standard:0,anchor:0,with_steps_or_full_solution:0,
 with_rubric:0,with_hints_or_hint_steps:0,with_explicit_method_rationale:0,
 with_true_kntt_placements:0,kntt_placement_rows:0,
 grade_overlay_occurrences:{"6":0,"7":0,"8":0,"9":0},
 actual_verified_placement_rows:{"6":0,"7":0,"8":0,"9":0},
 workspace_core_ref_items:0,workspace_core_ref_count:0,
 workspace_refs_missing_or_bad:0,missing_ref_files:0,
 writer_items_no_workspace_ref:0,source_items_with_no_core_ref:0};
const workspaceCache=new Map(),recs=[],flags=[];
const ids=new Set();
for(const x of lib.exercises||[]){
 totals.items++;
 assert(typeof x.exercise_id==="string"&&x.exercise_id.length);
 assert(!ids.has(x.exercise_id),"duplicate canonical Written id: "+x.exercise_id);
 ids.add(x.exercise_id);
 if(x.academic_review?.status==="APPROVED")totals.approved++;
 if(x.exercise_kind==="standard")totals.standard++;
 if(x.exercise_kind==="anchor")totals.anchor++;
 if(x.solution_steps?.length||x.full_solution_markdown)totals.with_steps_or_full_solution++;
 if(x.rubric?.length)totals.with_rubric++;
 if(x.hints?.length||x.hint_steps?.length)totals.with_hints_or_hint_steps++;
 if(x.method_rationale_markdown)totals.with_explicit_method_rationale++;
 const placements=x.kntt_placements||[];
 if(placements.length)totals.with_true_kntt_placements++;
 totals.kntt_placement_rows+=placements.length;
 for(const g of x.grade_overlay||[]){if(g in totals.grade_overlay_occurrences)totals.grade_overlay_occurrences[g]++}
 for(const p of placements){if(p.grade in totals.actual_verified_placement_rows)totals.actual_verified_placement_rows[p.grade]++}
 const refs=(x.source_refs||[]).filter(s=>typeof s==="string");
 const cardRefs=[];
 for(const r of refs){
  const base=r.split("#",1)[0];
  if(base.startsWith("docs/")||base.startsWith("review-packets/")){
   if(!fs.existsSync(base)){totals.missing_ref_files++;flags.push("SOURCE_REF_FILE_NOT_FOUND|"+x.exercise_id+"|"+r)}
  }
  const m=r.match(/^docs\/assets\/data\/curriculum\/topic(\d\d)-learning-workspace\.json#([^#?]+)$/);
  if(!m)continue;
  const file="docs/assets/data/curriculum/topic"+m[1]+"-learning-workspace.json";
  if(!fs.existsSync(file)){totals.workspace_refs_missing_or_bad++;flags.push("WORKSPACE_NOT_FOUND|"+x.exercise_id+"|"+r);continue}
  if(!workspaceCache.has(file))workspaceCache.set(file,JSON.parse(fs.readFileSync(file,"utf8")));
  const card=workspaceCache.get(file).cards.find(c=>c.id===m[2]);
  if(!card){totals.workspace_refs_missing_or_bad++;flags.push("CARD_REF_NOT_FOUND|"+x.exercise_id+"|"+r);continue}
  if(card.layer==="KNTT-Core"){
   totals.workspace_core_ref_count++;cardRefs.push({id:card.id,grades:card.grades||[],lessons:card.kntt_lessons||[]});
   if(card.grades?.length&&x.grade_overlay?.length&&!card.grades.some(g=>x.grade_overlay.includes(g)))
    flags.push("GRADE_OVERLAY_CORE_CARD_MISMATCH|"+x.exercise_id+"|"+card.id);
  }
 }
 if(cardRefs.length)totals.workspace_core_ref_items++;
 else totals.writer_items_no_workspace_ref++;
 recs.push({id:x.exercise_id,topic:x.topic_id,kind:x.exercise_kind,level:x.level,
  grade_overlay:x.grade_overlay||[],verified_placements:placements.length,
  card_refs:cardRefs.map(c=>c.id),has_method_rationale:!!x.method_rationale_markdown,
  has_full_solution:!!x.full_solution_markdown||!!x.solution_steps?.length,has_rubric:!!x.rubric?.length});
}
assert.equal(totals.items,74);
assert.equal(totals.approved,74);
console.log("W9 WRITTEN SOURCE METADATA/CORE CARD CROSSWALK — NOT KNTT S1 PLACEMENT VERDICT");
console.log("WRITTEN_SUMMARY|"+JSON.stringify(totals));
const refsByGrade={};for(const r of recs)for(const g of r.grade_overlay){const q=refsByGrade[g]||(refsByGrade[g]={with_core_ref:0,without_core_ref:0,unplaced:0});if(r.card_refs.length)q.with_core_ref++;else q.without_core_ref++;if(!r.verified_placements)q.unplaced++}
console.log("GRADE_OVERLAY_CROSSWALK|"+JSON.stringify(refsByGrade));
for(const r of recs)if(!r.verified_placements)console.log("PLACEMENT_PENDING|"+r.id+"|"+r.topic+"|"+r.level+"|"+r.grade_overlay.join(",")+"|CORE_REFS:"+r.card_refs.join(","));
for(const f of flags)console.log("REVIEW_SIGNAL|"+f);
console.log("SOURCE_LOCK|"+blob(path));
console.log("AUDIT_STATUS|METADATA_CROSSWALK_ONLY_NEEDS_FULL_TEXT_AND_KNTT_S1");
