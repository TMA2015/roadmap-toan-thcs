/* Phase 4 R23: read-only source drift + newer Practice manifest review queue.
 * No masteries, readiness, runtime loader, personal progress reads or writes.
 * Latest version manifest is a CANDIDATE, not automatically the live player.
 */
"use strict";
const fs=require("node:fs"),path=require("node:path");
const {audit,gitBlob,INDEX}=require("./math-v2-source-locked-skill-audit-r22.js");
const CUR="docs/assets/data/curriculum/";
const BANK="docs/assets/data/practice/";
const ROOT="docs/kien-thuc/";
const safe=x=>typeof x==="string"&&/^[a-z0-9-]+$/.test(x);
const json=(root,rel)=>JSON.parse(fs.readFileSync(path.join(root,rel),"utf8"));
const valid=x=>Number.isSafeInteger(x)&&x>=0;
const countFields=["candidate_questions","shared_policy_ids","new_unreviewed_ids",
 "missing_policy_ids","moved_source_ids","source_drift_rows","live_page_referenced_topics",
 "candidate_manifest_only_topics","rich_new_items","mcq_new_items",
 "unrecognized_new_items","duplicate_manifest_ids","invalid_candidate_items"];
const n0=()=>Object.fromEntries(countFields.map(k=>[k,0]));
const normalize=arr=>arr.filter(Boolean).sort();
function auditManifests({root=process.cwd(),auditR22=audit}={}){
 const historical=auditR22({root});
 const idx=json(root,INDEX);
 const total=n0(),topics=[];
 const filesDir=path.join(root,BANK);
 const manifests=fs.readdirSync(filesDir).filter(x=>x.endsWith(".manifest.json"));
 for(const topic of idx.topics){
  const policy=json(root,topic.policy_path);
  const slug=policy.topic_slug;
  if(!safe(slug)||topic.topic_id!==policy.topic_id)throw Error("R23_INVALID_TOPIC_SLUG");
  const names=manifests.map(file=>{
   const m=file.match(new RegExp("^"+slug+"-v([0-9]+)\\.manifest\\.json$"));
   return m?{file,version:Number(m[1])}:null;
  }).filter(Boolean).sort((a,b)=>b.version-a.version||a.file.localeCompare(b.file));
  if(!names.length)throw Error("R23_MANIFEST_NOT_FOUND_"+topic.topic_id);
  const activeCandidate=BANK+names[0].file;
  const m=json(root,activeCandidate);
  if(!Array.isArray(m.sources)||!valid(m.question_count))
   throw Error("R23_MANIFEST_CONTRACT_"+topic.topic_id);
  const page=ROOT+slug+"/bai-tap.md";
  const pageText=fs.existsSync(path.join(root,page))
   ?fs.readFileSync(path.join(root,page),"utf8"):"";
  const links=[...pageText.matchAll(/data-practice-bank-v2="[^"]*\/([^/"]+\.manifest\.json)"/g)]
    .map(x=>x[1]);
  const linked=links.includes(names[0].file);
  const policyMap=new Map();
  for(const row of policy.rows){
   if(policyMap.has(row.question_id))throw Error("R23_POLICY_DUPLICATE_ID");
   policyMap.set(row.question_id,row);
  }
  const current=new Map(),changedChunks=[],uniqueNames=new Set();
  for(const file of m.sources){
    if(!safe(file.replace(/\.json$/,""))||!file.endsWith(".json")||uniqueNames.has(file))
      throw Error("R23_INVALID_MANIFEST_SOURCE_"+topic.topic_id);
    uniqueNames.add(file);
    const rel=BANK+file;
    const bytes=fs.readFileSync(path.join(root,rel));
    const data=JSON.parse(bytes.toString("utf8"));
    if(!Array.isArray(data.questions))throw Error("R23_BAD_BANK_CHUNK_"+file);
    const original=policy.source_files[file];
    const drift=!!original&&gitBlob(bytes)!==original.blob_sha;
    if(drift)changedChunks.push({file,original_policy_questions:original.question_count});
    for(const q of data.questions){
      if(!q||typeof q.id!=="string"||current.has(q.id)){
        total.duplicate_manifest_ids++;
        throw Error("R23_DUPLICATE_MANIFEST_QUESTION_"+file);
      }
      current.set(q.id,{q,file,drift});
    }
  }
  const counters=n0(), examples={new_ids:[],missing_ids:[],drift_ids:[],
   moved_ids:[],new_rich_ids:[],new_invalid_ids:[]};
  counters.candidate_questions=current.size;
  if(current.size!==m.question_count){
    // Fail closed: this candidate may be incomplete or inconsistent.
    throw Error("R23_MANIFEST_SIZE_MISMATCH_"+topic.topic_id);
  }
  for(const [id,entry] of current){
    const p=policyMap.get(id);
    if(p){
      counters.shared_policy_ids++;
      if(p.source_file!==entry.file){
        counters.moved_source_ids++;
        if(examples.moved_ids.length<6)examples.moved_ids.push(id);
      }
      if(entry.drift){
        counters.source_drift_rows++;
        if(examples.drift_ids.length<6)examples.drift_ids.push(id);
      }
    }else{
      counters.new_unreviewed_ids++;
      if(examples.new_ids.length<10)examples.new_ids.push(id);
      const q=entry.q;
      if(q.response_type&&q.answer_contract){
        counters.rich_new_items++;
        if(examples.new_rich_ids.length<6)examples.new_rich_ids.push(id);
      }else if(Array.isArray(q.options)&&Number.isInteger(q.answer)&&
              q.answer>=0&&q.answer<q.options.length) {
        counters.mcq_new_items++;
      }else {
        counters.unrecognized_new_items++;
        if(examples.new_invalid_ids.length<6)examples.new_invalid_ids.push(id);
      }
    }
  }
  for(const id of policyMap.keys())if(!current.has(id)){
    counters.missing_policy_ids++;
    if(examples.missing_ids.length<8)examples.missing_ids.push(id);
  }
  if(counters.shared_policy_ids+counters.new_unreviewed_ids!==counters.candidate_questions ||
     counters.shared_policy_ids+counters.missing_policy_ids!==policyMap.size)
    throw Error("R23_PARTITION_FAILED_"+topic.topic_id);
  if(linked)counters.live_page_referenced_topics=1;
  else counters.candidate_manifest_only_topics=1;
  for(const k of countFields)total[k]+=counters[k];
  topics.push({topic_id:topic.topic_id,policy_rows:policyMap.size,
    candidate_manifest:activeCandidate,candidate_only:!linked,
    other_page_references:normalize(links),
    current_counts:counters,
    changed_policy_source_chunks:changedChunks,
    examples});
 }
 if(topics.length!==idx.totals.topics ||
    topics.reduce((n,t)=>n+t.policy_rows,0)!==idx.totals.questions)
  throw Error("R23_TOTAL_POLICY_COUNT_MISMATCH");
 return {
  schema:"math-r23-current-manifest-and-drift-preflight-v1",
  source_policy:INDEX,status:"QA_ONLY_HOLD_ALL_NEW_AND_DRIFT",
  summary:{
   historic_policy_rows:historical.policy_questions_checked,
   historic_source_locked_family:historical.family_candidate_rows,
   historic_formative_no_family:historical.no_family_rows,
   historic_source_holds:historical.held_rows,
   ...total},
  topics,
  protections:{real_learner_data_used:false,history_migrated:false,
   written_or_readiness_credited:false,mastery_credited:false,
   canonical_option_id_proven:false,changed_blob_cleared:false,
   new_items_academically_approved:false,
   manifest_latest_is_live_proven:false}
 };
}
module.exports={auditManifests};
if(require.main===module){
  const r=auditManifests();
  process.stdout.write(JSON.stringify({schema:r.schema,summary:r.summary,
    changed_source_topics:r.topics.filter(t=>t.changed_policy_source_chunks.length)
      .map(t=>({topic_id:t.topic_id,chunks:t.changed_policy_source_chunks})),
    largest_new_banks:r.topics.filter(t=>t.current_counts.new_unreviewed_ids)
      .map(t=>({topic_id:t.topic_id,
        new_questions:t.current_counts.new_unreviewed_ids,
        candidate_manifest:t.candidate_manifest,
        candidate_only:t.candidate_only})),
    protections:r.protections},null,2)+"\n");
}