#!/usr/bin/env node
"use strict";
/* W9 source-evidence audit: 22 topic Micro banks -> exact published Core cards.
   Scope is implementation coverage, NOT verified KNTT textbook completeness. */
const fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto"),assert=require("node:assert/strict");
const read=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const gitBlob=p=>{const b=fs.readFileSync(p);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex")};
const slugs=[
"02-so-va-phep-tinh","03-ti-le-ti-le-thuc","04-bieu-thuc-dai-so","05-7-hang-dang-thuc",
"06-phan-tich-da-thuc","07-phan-thuc-dai-so","08-phuong-trinh-bat-phuong-trinh",
"09-he-phuong-trinh","10-ham-so-do-thi","11-can-thuc","12-phuong-trinh-bac-hai-viete",
"13-goc-va-duong-thang","14-tam-giac","15-duong-dong-quy","16-tu-giac",
"17-thales-dong-dang","18-he-thuc-luong","19-duong-tron","20-hinh-hoc-tong-hop",
"21-thong-ke","23-xac-suat","24-bai-toan-thuc-te"];
const result={packet_id:"MATH-W9-ACTIVE-CORE-MICRO-SOURCE-EVIDENCE-R1-20261021",
  as_of:"current checked-out commit",source_scope:"22 active topic workspace + Micro banks",
  coverage_kind:"IMPLEMENTATION_SOURCE_ALIGNMENT_NOT_KNTT_S1_COMPLETENESS",
  topics:[],anomalies:[],totals:{topics:slugs.length,banks:0,items:0,core_items:0,support_items:0,
    grade6:0,grade7:0,grade8:0,grade9:0,grade_unknown:0,
    core_cards:0,support_cards:0,core_cards_base_trap_apply:0,core_cards_missing_triad:0,
    grade_unspecified_core_cards:0,lesson_generic_core_cards:0,orphan_source_items:0,
    declaration_item_mismatches:0,missing_declared_items:0,duplicate_ids:0}};
const allIds=new Map();
const flags=[];
for(const slug of slugs){
 const n=slug.slice(0,2),bankPath="docs/assets/data/practice/"+slug+"-micro-v1.json";
 const wsPath="docs/assets/data/curriculum/topic"+n+"-learning-workspace.json";
 const bank=read(bankPath),ws=read(wsPath),q=bank.questions||[],cards=ws.cards||[],byCard=new Map();
 assert(Array.isArray(bank.questions)&&Array.isArray(ws.cards),"bad files "+slug);
 result.totals.banks++;result.totals.items+=q.length;
 const t={slug,source_blobs:{micro:gitBlob(bankPath),workspace:gitBlob(wsPath)},
  micro_items:q.length,question_count_field:bank.question_count,role_totals:{},layer_totals:{},
  grade_totals:{"6":0,"7":0,"8":0,"9":0,unknown:0},cards:[],source_orphans:[]};
 for(const item of q){
  const id=item.id,layer=item.tags?.layer??item.layer??"unknown";
  const g=item.tags?.grade??item.grade??"unknown";
  if(allIds.has(id)){result.totals.duplicate_ids++;flags.push("DUPLICATE:"+id+":also "+allIds.get(id))}
  allIds.set(id,slug);
  if(!byCard.has(item.card_id))byCard.set(item.card_id,[]);
  byCard.get(item.card_id).push(item);
  t.role_totals[item.micro_role||"unknown"]=(t.role_totals[item.micro_role||"unknown"]||0)+1;
  t.layer_totals[layer]=(t.layer_totals[layer]||0)+1;
  if(g===6||g===7||g===8||g===9){result.totals["grade"+g]++;t.grade_totals[String(g)]++;}
  else {result.totals.grade_unknown++;t.grade_totals.unknown++;}
  if(layer==="KNTT-Core")result.totals.core_items++;
  else if(layer==="Core-Support")result.totals.support_items++;
 }
 for(const card of cards){
  const actual=byCard.get(card.id)||[],declared=card.micro_practice||[];
  const missing=declared.filter(id=>!actual.some(q=>q.id===id));
  const extra=actual.filter(q=>!declared.includes(q.id)).map(q=>q.id);
  const roles=Object.fromEntries(["base","trap","apply","coverage"].map(k=>[k,actual.filter(q=>q.micro_role===k).length]));
  const hasTriad=roles.base>0&&roles.trap>0&&roles.apply>0;
  const isCore=card.layer==="KNTT-Core";
  const lessons=card.kntt_lessons||[];
  const broad=lessons.length===0||lessons.some(x=>/^(Core|Nền tảng|Lớp \d+\s*→\s*\d+)$/i.test(String(x).trim()));
  if(isCore){
   result.totals.core_cards++;
   if(hasTriad)result.totals.core_cards_base_trap_apply++;
   else {result.totals.core_cards_missing_triad++;flags.push("TRIAD_MISSING:"+slug+":"+card.id)}
   if(!card.grades?.length)result.totals.grade_unspecified_core_cards++;
   if(broad)result.totals.lesson_generic_core_cards++;
  }else if(card.layer==="Core-Support") result.totals.support_cards++;
  const invalidGrade=actual.filter(x=>card.grades?.length&&x.tags?.grade!==undefined&&!card.grades.includes(x.tags.grade)).map(x=>x.id);
  if(missing.length||extra.length){result.totals.declaration_item_mismatches+=missing.length+extra.length;result.totals.missing_declared_items+=missing.length;
    flags.push("DECLARATION_MISMATCH:"+slug+":"+card.id+":"+missing.join(",")+":"+extra.join(","))}
  if(invalidGrade.length)flags.push("GRADE_CARD_MISMATCH:"+slug+":"+card.id+":"+invalidGrade.join(","));
  t.cards.push({id:card.id,layer:card.layer,grades:card.grades||[],kntt_lessons:lessons,
   card_skill_count:card.skills?.length||0,source_items:actual.length,roles,
   has_base_trap_apply:hasTriad,lesson_reference_broad:broad,
   declaration_exact:!missing.length&&!extra.length,missing_from_bank:missing,extra_in_bank:extra,source_grade_mismatch:invalidGrade});
 }
 t.source_orphans=[...byCard.keys()].filter(id=>!cards.some(c=>c.id===id));
 result.totals.orphan_source_items+=t.source_orphans.reduce((k,id)=>k+(byCard.get(id)||[]).length,0);
 if(t.source_orphans.length)flags.push("ORPHAN_CARDS:"+slug+":"+t.source_orphans.join(","));
 if(t.question_count_field!==q.length)flags.push("BANK_COUNT_MISMATCH:"+slug+":"+t.question_count_field+"/"+q.length);
 result.topics.push(t);
}
result.anomalies=flags;
assert.equal(result.totals.banks,22);
assert.equal(result.totals.core_items+result.totals.support_items,
 result.totals.items,"unexpected unclassified Micro layer");
if(process.argv.includes("--json"))process.stdout.write(JSON.stringify(result,null,2)+"\n");
else{
 console.log("W9 IMPLEMENTATION-SOURCE AUDIT (NOT independently verified curriculum depth):");
 console.log(JSON.stringify(result.totals));
 for(const t of result.topics){
   console.log("TOPIC|"+t.slug+"|ITEMS:"+t.micro_items+"|GRADES:"+JSON.stringify(t.grade_totals)+
     "|CORE_CARDS:"+t.cards.filter(c=>c.layer==="KNTT-Core").length+
     "|TRIADS:"+t.cards.filter(c=>c.layer==="KNTT-Core"&&c.has_base_trap_apply).length+
     "|GENERIC_LESSON:"+t.cards.filter(c=>c.layer==="KNTT-Core"&&c.lesson_reference_broad).length+
     "|DECL_MISMATCH:"+t.cards.filter(c=>!c.declaration_exact).length);
 }
 flags.forEach(f=>console.log("REVIEW_SIGNAL|"+f));
 console.log("AUDIT_STATUS|EVIDENCE_INVENTORY_ONLY_NOT_NOTEBOOKLM_PASS");
}
