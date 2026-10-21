/* Self-Learning Math — local-only backup/restore core, no network or grading. */
(() => {
  "use strict";
  const SCHEMA="self-learning-math-local-backup-v1";
  const APP="self-learning-math";
  const MAX_BYTES=12*1024*1024;
  const STATIC_KEYS=[
    "toan-thcs-practice-v1","toan-thcs-class-mixed-quiz-v1","toan-thcs-remediation-v1",
    "toan-thcs-assessment-v1","toan-thcs-assessment-v2",
    "toan-thcs-taxonomy-v2-evidence-v1",
    "toan-thcs-canonical-evidence-v1","toan-thcs-canonical-evidence-v2",
    "roadmap:exam-history-v1","roadmap.ui.focus.v1","roadmap.home.style.v1"
  ];
  const EXAM_KEYS=["01","02","03"].map(n=>"roadmap:exam-v1:EXAM25-"+n);
  const KEYS=Object.freeze([...STATIC_KEYS,...EXAM_KEYS]);
  const ALLOWED=new Set(KEYS);
  const object=x=>x!==null&&typeof x==="object"&&!Array.isArray(x);
  const noSurprises=(key,raw)=>{
    if(typeof raw!=="string"||raw.length>MAX_BYTES)throw Error("Nội dung không hợp lệ: "+key);
    if(key==="roadmap.ui.focus.v1"){if(!["0","1"].includes(raw))throw Error("Giá trị tùy chọn không hợp lệ");return;}
    if(key==="roadmap.home.style.v1"){if(!["standard","playful"].includes(raw))throw Error("Giá trị giao diện không hợp lệ");return;}
    let v;
    try{v=JSON.parse(raw);}catch(_){throw Error("Không đọc được dữ liệu JSON của "+key);}
    if(key==="roadmap:exam-history-v1"){if(!Array.isArray(v))throw Error("Lịch sử đề thi không hợp lệ");return;}
    if(!object(v))throw Error("Dữ liệu "+key+" không phải đối tượng");
    if(key==="toan-thcs-practice-v1"&&(!object(v.questions)||!object(v.tags)))throw Error("Dữ liệu Practice thiếu questions/tags");
    if(key==="toan-thcs-class-mixed-quiz-v1"){
      if(v.schema!=="math-class-mixed-history-v1"||v.version!==1||!Array.isArray(v.attempts))
        throw Error("Lịch sử Ôn tập tổng hợp lớp 6 sai phiên bản");
      for(const a of v.attempts){
        if(!object(a)||typeof a.attempt_id!=="string"||!a.attempt_id
          ||a.grade!==6||a.role!=="formative_class_mixed_not_readiness"
          ||typeof a.form_version!=="string"
          ||!Array.isArray(a.source_ids)||!Array.isArray(a.answer_indices)
          ||a.source_ids.length!==a.answer_indices.length
          ||!Number.isInteger(a.total)||a.total!==a.source_ids.length
          ||!Number.isInteger(a.correct)||a.correct<0||a.correct>a.total
          ||typeof a.submitted_at!=="string")
          throw Error("Lịch sử Ôn tập tổng hợp lớp 6 có lượt làm không hợp lệ");
      }
    }
    if(key==="toan-thcs-assessment-v1"&&!object(v.assessments))throw Error("Readiness thiếu assessments");
    if(key==="toan-thcs-remediation-v1"&&!Array.isArray(v.events))throw Error("Remediation thiếu events");
    const schemas={
      "toan-thcs-assessment-v2":"one-skill-assessment-events-v2",
      "toan-thcs-canonical-evidence-v1":"canonical-skill-evidence-store-v1",
      "toan-thcs-canonical-evidence-v2":"canonical-skill-evidence-store-v2",
      "toan-thcs-taxonomy-v2-evidence-v1":"taxonomy-v2-evidence-store-v1"
    };
    if(schemas[key]&&v.schema!==schemas[key])throw Error("Sai phiên bản định dạng dữ liệu "+key);
    if(key==="toan-thcs-assessment-v2"&&!Array.isArray(v.events))throw Error("Pilot thiếu events");
    if(key==="toan-thcs-canonical-evidence-v1"&&!Array.isArray(v.events))throw Error("Canonical beta thiếu events");
    if(key==="toan-thcs-canonical-evidence-v2"&&(!Array.isArray(v.recent_events)||!object(v.seen_questions)||!object(v.independent_units)))throw Error("Canonical v2 thiếu cấu trúc");
    if(key==="toan-thcs-taxonomy-v2-evidence-v1"&&(!Array.isArray(v.recent_events)||!object(v.seen_questions)||!object(v.independent_units)))throw Error("Taxonomy v2 thiếu cấu trúc");
    if(key.startsWith("roadmap:exam-v1:")&&(![1].includes(v.version)||!["idle","running","submitted","finalized"].includes(v.status)))throw Error("Đề thi thử sai phiên bản");
  };
  const bytes=s=>new TextEncoder().encode(s).length;
  const sha256=async(s)=>{
    let cryptoImpl=typeof crypto!=="undefined"&&crypto.subtle?crypto:null;
    if(!cryptoImpl&&typeof require==="function")cryptoImpl=require("node:crypto").webcrypto;
    if(!cryptoImpl?.subtle)throw Error("Thiết bị không hỗ trợ kiểm tra toàn vẹn SHA-256");
    const buf=await cryptoImpl.subtle.digest("SHA-256",new TextEncoder().encode(s));
    return Array.from(new Uint8Array(buf),b=>b.toString(16).padStart(2,"0")).join("");
  };
  const payloadOf=doc=>JSON.stringify({
    schema:doc.schema,app:doc.app,version:doc.version,
    created_at:doc.created_at,entries:doc.entries
  });
  const collect=(storage)=>{
    const entries=Object.create(null);
    for(const key of KEYS){
      const raw=storage.getItem(key);
      if(raw!==null){
        noSurprises(key,raw);
        entries[key]=raw;
      }
    }
    return entries;
  };
  const buildBackup=async(storage,clock=()=>new Date().toISOString())=>{
    const entries=collect(storage);
    if(!Object.keys(entries).length)throw Error("Chưa có dữ liệu học tập trên trình duyệt này để sao lưu");
    const doc={schema:SCHEMA,app:APP,version:1,created_at:clock(),entries};
    const digest=await sha256(payloadOf(doc));
    const result={...doc,sha256:digest};
    if(bytes(JSON.stringify(result))>MAX_BYTES)throw Error("Bản sao lưu vượt giới hạn 12 MB");
    return result;
  };
  const validateBackup=async(candidate)=>{
    if(!object(candidate)||candidate.schema!==SCHEMA||candidate.app!==APP||candidate.version!==1
      ||typeof candidate.created_at!=="string"||!Number.isFinite(Date.parse(candidate.created_at))
      ||!object(candidate.entries)||typeof candidate.sha256!=="string"
      ||!/^[0-9a-f]{64}$/.test(candidate.sha256))throw Error("Không phải tệp sao lưu Self-Learning Math v1 hợp lệ");
    const keys=Object.keys(candidate.entries);
    if(!keys.length||keys.length>KEYS.length||keys.some(k=>!ALLOWED.has(k)))throw Error("Tệp chứa khóa dữ liệu không được hỗ trợ");
    if(bytes(JSON.stringify(candidate))>MAX_BYTES)throw Error("Tệp sao lưu vượt giới hạn 12 MB");
    for(const key of keys)noSurprises(key,candidate.entries[key]);
    if(await sha256(payloadOf(candidate))!==candidate.sha256)throw Error("Tệp sao lưu đã thay đổi hoặc hỏng: SHA-256 không khớp");
    return candidate;
  };
  const planRestore=(backup,storage,mode="missing")=>{
    if(!["missing","replace"].includes(mode))throw Error("Chế độ khôi phục không hợp lệ");
    const entries=backup.entries,add=[],replace=[],skip=[],conflicts=[],identical=[];
    for(const key of Object.keys(entries)){
      const old=storage.getItem(key);
      if(old===null)add.push(key);
      else if(old===entries[key]){skip.push(key);identical.push(key);}
      else if(mode==="missing"){skip.push(key);conflicts.push(key);}
      else replace.push(key);
    }
    // Distinguish true matches from skipped conflicting history; never merge automatically.
    return {add,replace,skip,conflicts,identical,mode};
  };
  const applyRestore=(validated,storage,mode="missing",backupAcknowledged=false)=>{
    const plan=planRestore(validated,storage,mode);
    if(plan.replace.length&&!backupAcknowledged)throw Error("Phải sao lưu dữ liệu hiện tại trước khi thay thế");
    const targets=[...plan.add,...plan.replace], snapshot=Object.create(null);
    for(const key of targets)snapshot[key]=storage.getItem(key);
    const changed=[];
    try{
      for(const key of targets){
        storage.setItem(key,validated.entries[key]);
        changed.push(key);
      }
    }catch(error){
      const rollbackFailures=[];
      for(const key of changed.reverse()){
        try{
          if(snapshot[key]===null)storage.removeItem(key);
          else storage.setItem(key,snapshot[key]);
        }catch(_){rollbackFailures.push(key);}
      }
      throw Error("Không thể lưu dữ liệu. "+(rollbackFailures.length?"Khôi phục tự động chưa hoàn tất, dừng thao tác và kiểm tra các khóa: "+rollbackFailures.join(", "):"Đã hoàn nguyên các thay đổi tạm thời.")+" ("+String(error?.message||"storage error")+")");
    }
    return {...plan,written:targets.length};
  };
  const api=Object.freeze({SCHEMA,APP,KEYS,MAX_BYTES,collect,buildBackup,validateBackup,planRestore,applyRestore});
  if(typeof module!=="undefined"&&module.exports)module.exports=api;
  if(typeof window!=="undefined")window.MathLocalProgressBackup=api;
})();
