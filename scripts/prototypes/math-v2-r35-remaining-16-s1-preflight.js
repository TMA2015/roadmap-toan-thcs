/* R35 independent-review preflight — exact 16 historical R27 items; QA-only. */
"use strict";
const fs=require("node:fs"),path=require("node:path");
const {gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const {inspect}=require("./math-v2-r27-mcq-source-review.js");
const SOURCE="review-packets/math-phase4-r35-remaining-16/TEMP_R35_EXACT_16_ITEM_S1_REVIEW_SOURCE_20261018.md";
const SOURCE_BLOB="0099681bc28c412a5a10454cf9d76036fcf7306f";
const C21="review-packets/math-phase4-r27-mcq-40/TEMP_R33_OWNER_APPROVED_21_CORE_ITEM_ACADEMIC_SIGNOFF_20261018.json";
const C3="review-packets/math-phase4-r27-mcq-40/TEMP_R33_OWNER_APPROVED_CT12_CONCEPT_BASE_ENTRANCE10_20261018.json";
const C21_BLOB="56135833a3d8764169719dded28be6b9c0b29eed";
const C3_BLOB="35204f5baa654850c4b424dffb659bd89056b1be";
const EXPECTED=[
 ...Array.from({length:12},(_,i)=>"NUM02V1_"+(133+i)),
 ...Array.from({length:4},(_,i)=>"RAT03V1_"+(121+i))];
const fail=(c,m)=>{if(!c)throw Error("R35_"+m);};
function audit({root=process.cwd(),readBytes=rel=>fs.readFileSync(path.join(root,rel)),packetOverride}={}){
 const original=inspect({root,readBytes});
 fail(original.total===40&&original.rows.length===40,"R27_ORIGINAL_40_CHANGED");
 const raw21=readBytes(C21),raw3=readBytes(C3);
 fail(gitBlob(raw21)===C21_BLOB&&gitBlob(raw3)===C3_BLOB,"PREVIOUS_SIGNOFF_CHANGED");
 const acceptedIds=[
 ...JSON.parse(raw21).approved_items.map(q=>q.item_id),
 ...JSON.parse(raw3).approved_items.map(q=>q.id)];
 fail(acceptedIds.length===24&&new Set(acceptedIds).size===24,"PREVIOUS_APPROVAL_SCOPE_CHANGED");
 const bytes=readBytes(SOURCE);
 fail(gitBlob(bytes)===SOURCE_BLOB,"REVIEW_PACKET_BLOB_CHANGED");
 const text=packetOverride??bytes.toString("utf8");
 fail(text.includes("S1_REVIEW_PENDING")&&
  text.includes("NOT YET OWNER APPROVED")&&
  text.includes("unverified citation claim")&&
  text.includes("No bank edits")&&
  text.includes("original Toán 7 PDF is **not yet independently accessed"),
  "ACADEMIC_BOUNDARY_MISSING");
 const parts=text.split(/^### ([A-Z0-9_]+) — (CT\d+)\s*$/gm);
 fail(parts.length===49,"NOT_EXACTLY_16_SOURCE_BLOCKS");
 const historicalMap=new Map(original.rows.map(x=>[x.id,x]));
 const rows=[];
 for(let i=0;i<16;i++){
  const id=parts[1+3*i],ct=parts[2+3*i],chunk=parts[3+3*i];
  fail(id===EXPECTED[i]&&!acceptedIds.includes(id),"ORDER_OR_APPROVAL_OVERLAP");
  const match=chunk.match(/Historical R27 bank: \x60([^\x60]+)\x60 · Git blob \x60([0-9a-f]{40})\x60\.\s*\nR29 \*\*unverified citation claim\*\*: ([^\n]+)/);
  fail(!!match,"MISSING_ITEM_SOURCE_METADATA_"+id);
  const fence=String.fromCharCode(96).repeat(3);
  const start=chunk.indexOf(fence+"json");
  const end=chunk.indexOf(fence,start+fence.length+4);
  fail(start>=0&&end>start,"MISSING_JSON_BLOCK_"+id);
  let q;try{q=JSON.parse(chunk.slice(start+fence.length+4,end).trim())}
   catch(e){throw Error("R35_JSON_INVALID_"+id)}
  const historical=historicalMap.get(id),file=match[1],sha=match[2],citation=match[3].trim();
  fail(historical&&q.id===id&&ct===historical.topic_id&&
   file===historical.source_file&&
   sha===historical.source_git_blob_sha&&
   JSON.stringify(q)===JSON.stringify(historical.question)&&
   Array.isArray(q.options)&&q.options.length===4&&
   Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4,
   "R27_ITEM_CONTENT_CHANGED_"+id);
  fail(citation.startsWith("SGK Toán 7")&&citation.length>=38,
   "REVIEWER_CITATION_MISSING_"+id);
  rows.push({id,ct,source_file:file,source_sha:sha,
   reported_S1_claim_only:citation,original_answer:q.answer});
 }
 fail(new Set(rows.map(x=>x.id)).size===16&&
  new Set([...acceptedIds,...rows.map(x=>x.id)]).size===40,"ID_PARTITION_CHANGED");
 return Object.freeze({schema:"math-r35-remaining-16-source-review-preflight-v1",
  packet_source_sha:SOURCE_BLOB,unapproved_ids:rows.map(x=>x.id),
  exact_historical_R27_source_rows:16,prior_owner_approved_excluded:24,
  original_sources_unchanged:true,academic_pass_newly_authorized:0,
  primary_layer_newly_authorized:0,runtime_credit_authorized:false,
  student_history_or_backfill_authorized:false,production_change_authorized:false,
  grade7_original_pages_independently_viewed_in_R35:false,rows});
}
module.exports={audit,SOURCE,SOURCE_BLOB,EXPECTED};
if(require.main===module)console.log(JSON.stringify(audit(),null,2));
