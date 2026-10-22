#!/usr/bin/env node
"use strict";
/* W9 per-SKILL coverage census, not an academic judgment or question quota.
   Check active cards including CT20 display v2, never frozen CT20 v1 alone. */
const fs=require("node:fs"),crypto=require("node:crypto"),assert=require("node:assert/strict");
const read=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const blob=p=>{const b=fs.readFileSync(p);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");};
const slugs=[
"02-so-va-phep-tinh","03-ti-le-ti-le-thuc","04-bieu-thuc-dai-so","05-7-hang-dang-thuc",
"06-phan-tich-da-thuc","07-phan-thuc-dai-so","08-phuong-trinh-bat-phuong-trinh",
"09-he-phuong-trinh","10-ham-so-do-thi","11-can-thuc","12-phuong-trinh-bac-hai-viete",
"13-goc-va-duong-thang","14-tam-giac","15-duong-dong-quy","16-tu-giac",
"17-thales-dong-dang","18-he-thuc-luong","19-duong-tron","20-hinh-hoc-tong-hop",
"21-thong-ke","23-xac-suat","24-bai-toan-thuc-te"
];
const census={packet_id:"MATH-W9-PER-CORE-SKILL-DIRECT-MICRO-EVIDENCE-R1-20261022",
 state:"SOURCE_TAG_CENSUS_NOT_KNTT_S1_VERDICT",topics:[],skill_evidence:[],
 totals:{banks:0,core_cards:0,declared_skill_occurrences:0,no_direct_skill_tag:0,
 one_direct_skill_tag:0,two_plus_direct_skill_tags:0,distinct_problem_type_zero:0,
 total_unlisted_skill_tag_occurrences:0,source_question_ids:0}};
for(const slug of slugs){
 const bankPath="docs/assets/data/practice/"+slug+"-micro-v1.json";
 const wsPath="docs/assets/data/curriculum/topic"+slug.slice(0,2)+"-learning-workspace.json";
 const bank=read(bankPath),ws=read(wsPath),q=new Map(bank.questions.map(x=>[x.id,x]));
 let cards=ws.cards,overlay=null;
 if(slug==="20-hinh-hoc-tong-hop"){
  overlay="docs/assets/data/curriculum/topic20-core-display-v2.json";
  const view=read(overlay);
  assert.equal(view.schema,"roadmap-topic-core-display-overlay-v2");
  assert.equal(view.history_policy.migration,"none");
  assert.deepEqual(view.legacy_cards_read_only.map(x=>x.id),ws.cards.map(x=>x.id));
  view.legacy_cards_read_only.forEach((x,i)=>assert.deepEqual(x.original_micro_practice,ws.cards[i].micro_practice));
  cards=view.cards;
 }
 const topic={slug,source_blobs:{bank:blob(bankPath),workspace:blob(wsPath),...(overlay?{runtime_overlay:blob(overlay)}:{})},
   active_core_cards:0,declared_skills:0,no_direct:0,one_direct:0,two_plus:0,unlisted_micro_skill_tags:[]};
 census.totals.banks++;census.totals.source_question_ids+=q.size;
 for(const card of cards.filter(c=>c.layer==="KNTT-Core")){
  topic.active_core_cards++;census.totals.core_cards++;
  const ids=card.micro_practice||[];
  assert.equal(new Set(ids).size,ids.length,"duplicate card refs "+card.id);
  const items=ids.map(id=>{const question=q.get(id);assert(question,"missing source id "+id);return question});
  const declared=card.skills||[];
  assert(declared.length>0,"missing declared skills "+card.id);
  assert.equal(new Set(declared).size,declared.length,"duplicate declared card skill "+card.id);
  const itemGrades=[...new Set(items.map(x=>x.tags?.grade).filter(x=>Number.isInteger(x)))].sort();
  for(const item of items){
   for(const sk of item.tags?.skill||[]){
    if(!declared.includes(sk))topic.unlisted_micro_skill_tags.push({card_id:card.id,question_id:item.id,skill:sk});
   }
  }
  for(const skill of declared){
   const matched=items.filter(item=>(item.tags?.skill||[]).includes(skill));
   const types=[...new Set(matched.map(item=>item.tags?.type||"UNKNOWN_TYPE"))].sort();
   const roles=[...new Set(matched.map(item=>item.micro_role||"UNKNOWN_ROLE"))].sort();
   const r={slug,card_id:card.id,skill,grade_tags:itemGrades,lesson_labels:card.kntt_lessons||[],
     direct_tagged_micro_count:matched.length,question_ids:matched.map(x=>x.id),
     roles,tagged_problem_types:types,supplemental_v2:!!(overlay&&!ws.cards.some(x=>x.id===card.id))};
   census.skill_evidence.push(r);census.totals.declared_skill_occurrences++;topic.declared_skills++;
   if(!matched.length){census.totals.no_direct_skill_tag++;census.totals.distinct_problem_type_zero++;topic.no_direct++}
   else if(matched.length===1){census.totals.one_direct_skill_tag++;topic.one_direct++}
   else {census.totals.two_plus_direct_skill_tags++;topic.two_plus++}
  }
 }
 census.totals.total_unlisted_skill_tag_occurrences+=topic.unlisted_micro_skill_tags.length;
 census.topics.push(topic);
}
assert.equal(census.totals.banks,22);
assert.equal(census.totals.source_question_ids,455,"pinned W9 source set changed; re-audit before updating");
assert.equal(census.totals.core_cards,120,"115 primary cards plus 5 CT20 v2 cards expected");
assert.equal(census.totals.declared_skill_occurrences,
 census.totals.no_direct_skill_tag+census.totals.one_direct_skill_tag+census.totals.two_plus_direct_skill_tags);
const gaps=census.skill_evidence.filter(x=>x.direct_tagged_micro_count===0);
const singles=census.skill_evidence.filter(x=>x.direct_tagged_micro_count===1);
if(process.argv.includes("--json"))process.stdout.write(JSON.stringify(census,null,2)+"\n");
else{
 console.log("W9 PER SKILL SOURCE CENSUS — NOT independent depth verdict");
 console.log("SKILL_SUMMARY|"+JSON.stringify(census.totals));
 for(const t of census.topics)console.log("TOPIC_SKILLS|"+t.slug+"|CARDS:"+t.active_core_cards+
   "|DECLARED:"+t.declared_skills+"|NO_DIRECT:"+t.no_direct+"|ONE_DIRECT:"+t.one_direct+
   "|TWO_PLUS:"+t.two_plus+"|UNLISTED:"+t.unlisted_micro_skill_tags.length);
 for(const v of gaps)console.log("SKILL_NO_DIRECT|"+v.slug+"|"+v.card_id+"|"+v.skill+
   "|GRADE_TAGS:"+v.grade_tags.join(",")+"|LESSONS:"+v.lesson_labels.join(";"));
 for(const v of singles)console.log("SKILL_ONE_DIRECT|"+v.slug+"|"+v.card_id+"|"+v.skill+
   "|SOURCE:"+v.question_ids.join(",")+"|LESSONS:"+v.lesson_labels.join(";"));
 for(const t of census.topics)for(const i of t.unlisted_micro_skill_tags)
   console.log("SKILL_UNLISTED|"+t.slug+"|"+i.card_id+"|"+i.question_id+"|"+i.skill);
 console.log("AUDIT_STATUS|CANDIDATE_TRIAGE_ONLY_REQUIRES_SOURCE_STEM_AND_S1_REVIEW");
}
