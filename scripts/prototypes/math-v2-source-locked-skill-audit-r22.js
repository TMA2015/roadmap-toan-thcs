/* Math Phase 4 R22 — source-locked Skill mapping PRE-FLIGHT (QA only).
 * Reads repository files. No browser registration, scoring, history or data writes.
 * A reviewed family association is NOT permission for mastery/Readiness credit.
 */
"use strict";
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");
const CROOT="docs/assets/data/curriculum/";
const INDEX=CROOT+"taxonomy-v2-runtime/index-r1.json";
const FAMILY=CROOT+"skill-taxonomy-v2-registry-r1.json";
const BANK="docs/assets/data/practice/";
const STATUSES=Object.freeze([
 "SOURCE_LOCKED_FAMILY_QA_ONLY",
 "SOURCE_LOCKED_NO_FAMILY_QA_ONLY",
 "SOURCE_CHANGED_HOLD",
 "QUESTION_MISSING_HOLD",
 "QUESTION_ID_OR_SOURCE_CONFLICT_HOLD",
 "SKILL_TAG_MISMATCH_HOLD",
 "ANSWER_CONTRACT_HOLD",
 "POLICY_ROW_HOLD"
]);
const isObject=x=>x!==null&&typeof x==="object"&&!Array.isArray(x);
const stable=x=>JSON.stringify(x);
const validId=x=>typeof x==="string"&&/^[A-Za-z0-9_.:-]{2,160}$/.test(x);
function gitBlob(bytes){
 return crypto.createHash("sha1")
   .update("blob "+bytes.length+"\0").update(bytes).digest("hex");
}
function audit({root=process.cwd(),readBytes=(rel)=>fs.readFileSync(path.join(root,rel)),
  topics=null}={}){
 const json=rel=>JSON.parse(readBytes(rel).toString("utf8"));
 const idx=json(INDEX),reg=json(FAMILY);
 if(idx.schema!=="skill-taxonomy-v2-runtime-index-r1" ||
    reg.schema!=="skill-taxonomy-v2-registry-r1" ||
    idx.runtime_enabled!==false||idx.learner_data_write_enabled!==false||
    idx.independent_credit_authorized!==false||
    reg.runtime_enabled!==false||reg.learner_data_write_enabled!==false)
   throw Error("R22_REVIEW_ONLY_GATES_REQUIRED");
 const knownFamilies=new Map(reg.families.map(f=>[f.family_id,f]));
 if(knownFamilies.size!==reg.families.length)throw Error("R22_DUPLICATE_FAMILY_REGISTRY");
 const wanted=topics?new Set(topics):null;
 const policies=idx.topics.filter(t=>!wanted||wanted.has(t.topic_id));
 if(wanted&&policies.length!==wanted.size)throw Error("R22_UNKNOWN_TOPIC");
 const overview={schema:"math-r22-source-locked-audit-v1",mode:"READ_ONLY_QA",
   source_index:INDEX,topics_checked:0,policy_questions_checked:0,
   family_candidate_rows:0,no_family_rows:0,held_rows:0,
   mapping_authorized_for_learners:false,mastery_authorized:false,
   written_readiness_credit_authorized:false,automatic_v1_migration:false,
   skills_from_unreviewed_tags_allowed:false,
   status_counts:Object.fromEntries(STATUSES.map(s=>[s,0])),
   topic_reports:[],examples:[]};
 const foundRows=new Set();
 for(const entry of policies){
   if(!/^CT(?:0[2-9]|1[0-9]|2[0-5])$/.test(entry.topic_id) ||
      typeof entry.policy_path!=="string"||
      !entry.policy_path.startsWith(CROOT+"taxonomy-v2-runtime/")||
      !/\.json$/.test(entry.policy_path))
     throw Error("R22_BAD_POLICY_PATH");
   const pol=json(entry.policy_path);
   if(pol.topic_id!==entry.topic_id||pol.runtime_enabled!==false||
      pol.learner_data_write_enabled!==false||pol.independent_credit_authorized!==false||
      pol.status!=="I1_COMPILED_RUNTIME_DISABLED" ||
      !Array.isArray(pol.rows)||pol.counts?.questions!==entry.questions ||
      pol.rows.length!==entry.questions)
     throw Error("R22_POLICY_INVARIANT_FAILED_"+entry.topic_id);
   const banks=new Map();
   for(const [filename,descriptor] of Object.entries(pol.source_files||{})){
     if(!/^[A-Za-z0-9_-]+\.json$/.test(filename)||
        descriptor.path!==BANK+filename ||
        !/^[a-f0-9]{40}$/.test(descriptor.blob_sha))
       throw Error("R22_BAD_SOURCE_DECLARATION_"+entry.topic_id);
     const raw=readBytes(descriptor.path);
     const actualBlob=gitBlob(raw);
     const parsed=JSON.parse(raw.toString("utf8"));
     if(!Array.isArray(parsed.questions)||parsed.questions.length!==descriptor.question_count)
       throw Error("R22_BAD_QUESTION_CHUNK_"+filename);
     const questions=new Map();
     for(const q of parsed.questions){
       if(!validId(q.id)||questions.has(q.id))throw Error("R22_DUPLICATE_SOURCE_ITEM_"+filename);
       questions.set(q.id,q);
     }
     banks.set(filename,{questions,blob:actualBlob,approved:descriptor.blob_sha});
   }
   let family=0,noFamily=0,held=0;
   const seen=new Set();
   for(const row of pol.rows){
     let status=null;
     if(!validId(row.question_id)||row.topic_id!==entry.topic_id||
        typeof row.source_file!=="string"||!banks.has(row.source_file))
       status="QUESTION_ID_OR_SOURCE_CONFLICT_HOLD";
     if(seen.has(row.question_id))status="QUESTION_ID_OR_SOURCE_CONFLICT_HOLD";
     seen.add(row.question_id);
     if(foundRows.has(row.question_id))status="QUESTION_ID_OR_SOURCE_CONFLICT_HOLD";
     foundRows.add(row.question_id);
     const bank=banks.get(row.source_file);
     const question=bank?.questions.get(row.question_id);
     if(!status && (bank.blob!==bank.approved||row.source_blob!==bank.approved))
       status="SOURCE_CHANGED_HOLD";
     if(!status&&!question)status="QUESTION_MISSING_HOLD";
     if(!status && (stable(question.tags?.skill||[])!==stable(row.legacy_skill_tags||[])))
       status="SKILL_TAG_MISMATCH_HOLD";
     if(!status && (!Array.isArray(question.options)||question.options.length<2||
         !Number.isInteger(question.answer)||question.answer<0||
         question.answer>=question.options.length))
       status="ANSWER_CONTRACT_HOLD";
     if(!status){
       if(row.policy_disposition==="FAMILY_LINK_REVIEWED" &&
          typeof row.family_id==="string" &&
          knownFamilies.has(row.family_id) &&
          row.runtime_enabled===false&&row.independent_credit_authorized===false){
         status="SOURCE_LOCKED_FAMILY_QA_ONLY";
       }else if(row.policy_disposition==="FORMATIVE_ONLY_NO_FAMILY" &&
          row.family_id===null && row.runtime_enabled===false &&
          row.independent_credit_authorized===false){
         status="SOURCE_LOCKED_NO_FAMILY_QA_ONLY";
       }else status="POLICY_ROW_HOLD";
     }
     overview.status_counts[status]++;
     overview.policy_questions_checked++;
     if(status==="SOURCE_LOCKED_FAMILY_QA_ONLY"){family++;overview.family_candidate_rows++;}
     else if(status==="SOURCE_LOCKED_NO_FAMILY_QA_ONLY"){noFamily++;overview.no_family_rows++;}
     else {held++;overview.held_rows++;}
     if(overview.examples.length<16 && (
        status.endsWith("_HOLD") ||
        ["FAC06V1_001","FAC06V1_120","NUM02V1_001","NUM02V1_120"].includes(row.question_id))){
       overview.examples.push({topic_id:entry.topic_id,question_id:row.question_id,
          status,source_file:row.source_file,
          candidate_family_id:status==="SOURCE_LOCKED_FAMILY_QA_ONLY"?row.family_id:null,
          observed_legacy_skill_tags:question?.tags?.skill||null,
          independent_credit_authorized:false});
     }
   }
   if(seen.size!==entry.questions||family+noFamily+held!==entry.questions)
     throw Error("R22_POLICY_COVERAGE_INVALID_"+entry.topic_id);
   overview.topic_reports.push({topic_id:entry.topic_id,questions:entry.questions,
     family_candidates:family,formative_no_family:noFamily,held,
     source_files:banks.size});
   overview.topics_checked++;
 }
 if(!wanted && (overview.topics_checked!==idx.totals.topics ||
    overview.policy_questions_checked!==idx.totals.questions))
   throw Error("R22_GLOBAL_INDEX_COUNT_MISMATCH");
 // Option arrays contain positional indices, not reviewed stable option IDs.
 // Never forge R19 canonical option IDs or claim a production answer contract.
 overview.canonical_option_ids_verified=false;
 overview.source_answer_indices_structurally_checked=true;
 return overview;
}
module.exports={audit,gitBlob,INDEX,FAMILY};
if(require.main===module){
 const result=audit();
 const out={topics_checked:result.topics_checked,
   policy_questions_checked:result.policy_questions_checked,
   family_candidate_rows:result.family_candidate_rows,
   no_family_rows:result.no_family_rows,
   held_rows:result.held_rows,
   status_counts:result.status_counts,
   note:"QA ONLY; NOT learner Skill/mastery credit; newer Practice extensions not covered"};
 process.stdout.write(JSON.stringify(out,null,2)+"\n");
}
