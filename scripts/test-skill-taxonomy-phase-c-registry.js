#!/usr/bin/env node
"use strict";
const fs=require("fs");
const read=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const ok=(x,m)=>{if(!x)throw Error("Phase C registry: "+m)};
const reg=read("docs/assets/data/curriculum/canonical-skill-registry-04-07-v1.json");
const compat=read("docs/assets/data/curriculum/skill-taxonomy-compatibility-04-07-v1.json");

ok(reg.status==="REVIEWED_SEMANTICS_RUNTIME_DISABLED","registry status");
ok(reg.summary.legacy_codes_reviewed===52&&reg.summary.canonical_nodes===53,"52 legacy / 53 nodes");
ok(reg.summary.shared_concepts===3&&reg.summary.reviewed_relationships===8,"shared/relations");
ok(JSON.stringify(reg.summary.legacy_counter_status)===JSON.stringify({YES:38,NO:7,PENDING:7}),"legacy counter counts");
ok(JSON.stringify(reg.summary.with_new_output_candidate_counter_status)===JSON.stringify({YES:38,NO:7,PENDING:8}),"node counter counts including new candidate");
ok(reg.nodes.length===53&&new Set(reg.nodes.map(n=>n.canonical_id)).size===53,"unique canonical ids");
ok(reg.nodes.every(n=>n.runtime_enabled===false&&n.mastery_threshold===null&&n.history_backfill===false),"runtime/mastery/backfill off");

const shared=["dieu-kien-xac-dinh","hieu-hai-binh-phuong","binh-phuong-hoan-chinh"];
for(const id of shared){
 const n=reg.nodes.find(x=>x.canonical_id===id);
 ok(n&&n.shared_concept===true&&n.topics.length===2&&n.task_variants,"shared concept "+id);
 const c=compat.shared_concept_policy[id];
 ok(c&&c.merge_decision==="MERGE_ONE_CONCEPT"&&c.aggregate_old_history===false,"compat shared "+id);
}

const newSkill=reg.nodes.find(x=>x.canonical_id==="phan-tich-da-thuc-hoan-toan");
ok(newSkill&&newSkill.learner_counter_status==="PENDING"&&newSkill.evidence_readiness==="MCQ_FINAL_OUTPUT_ONLY_STEPWISE_EVIDENCE_REQUIRED","new output candidate");
ok(compat.legacy_code_mappings.length===52&&new Set(compat.legacy_code_mappings.map(x=>x.legacy_code)).size===52,"52 legacy mappings");
ok(compat.legacy_code_mappings.every(x=>x.runtime_enabled===false),"legacy mappings runtime off");
ok(compat.storage.legacy_storage_key==="toan-thcs-practice-v1"&&compat.storage.canonical_evidence_storage_key==="toan-thcs-assessment-v2","storage keys");
ok(compat.storage.migration_mode==="NO_BACKFILL_NO_REWRITE"&&compat.storage.dual_write_enabled===false,"no migration / no dual write");
ok(compat.mapping_coverage.full_question_primary_mapping==="INCOMPLETE","question mapping explicitly incomplete");
ok(compat.evidence_event_contract.one_assessed_skill_per_event===true&&compat.evidence_event_contract.mastery_threshold===null&&compat.evidence_event_contract.historical_events_generated_from_legacy_counts===false,"event safeguards");
ok(compat.non_counter_nodes.length===7&&compat.pending_counter_nodes.length===8,"NO/PENDING node lists");

const ov=compat.reviewed_item_overlays.find(x=>x.canonical_skill_candidate==="phan-tich-da-thuc-hoan-toan");
ok(ov&&ov.source_items.length===16&&ov.source_items[0]==="FAC06V1_077"&&ov.source_items[15]==="FAC06V1_092","16-item overlay");
ok(ov.credit_mode==="FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED"&&ov.runtime_enabled===false,"overlay credit/runtime");

const yes=reg.nodes.filter(n=>n.learner_counter_status==="YES").map(n=>n.canonical_id);
for(const no of compat.non_counter_nodes)ok(!yes.includes(no),"NO node leaked into YES: "+no);
for(const pending of compat.pending_counter_nodes)ok(!yes.includes(pending),"PENDING node leaked into YES: "+pending);

console.log("PASS: Phase C registry encodes Phase B semantics, 52 legacy mappings, 3 shared concepts, 8 relations, no runtime/backfill/mastery migration.");
