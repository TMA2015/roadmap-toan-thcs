/* Dashboard v1: descriptive learner counts only, never regrade or derive mastery. */
(() => {
  "use strict";
  const safeNum=x=>typeof x==="number"&&Number.isFinite(x)&&x>=0?x:0;
  const safeObj=x=>x&&typeof x==="object"&&!Array.isArray(x)?x:{};
  const parse=(storage,key)=>{
    let raw;
    try{raw=storage.getItem(key);}catch(_){return {state:"unavailable"};}
    if(raw===null)return {state:"empty"};
    try{return {state:"ok",value:JSON.parse(raw)};}catch(_){return {state:"invalid"};}
  };
  const summarize=(storage)=>{
    const practice=parse(storage,"toan-thcs-practice-v1");
    const readiness=parse(storage,"toan-thcs-assessment-v1");
    const taxonomy=parse(storage,"toan-thcs-taxonomy-v2-evidence-v1");
    const p=safeObj(practice.value);
    const questionRows=Object.entries(safeObj(p.questions)).map(([id,v])=>({id,attempted:safeNum(v?.attempted),correct:safeNum(v?.correct)}));
    const attempted=questionRows.reduce((n,q)=>n+q.attempted,0);
    const correct=questionRows.reduce((n,q)=>n+q.correct,0);
    const tags=Object.entries(safeObj(p.tags)).map(([id,v])=>({
      id,attempted:safeNum(v?.attempted),correct:safeNum(v?.correct),
      assisted:safeNum(v?.hinted_attempts)
    })).filter(r=>r.attempted>0).sort((a,b)=>b.attempted-a.attempted||a.id.localeCompare(b.id));
    const assessments=Object.entries(safeObj(readiness.value?.assessments)).flatMap(([id,v])=>
      Array.isArray(v?.attempts)?v.attempts.filter(a=>a&&typeof a.submitted_at==="string").map(a=>({
        id,at:a.submitted_at,correct:safeNum(a.correct),total:safeNum(a.total),
        readiness_state:a.readiness_state||""
      })):[]
    ).sort((a,b)=>Date.parse(b.at||"")-Date.parse(a.at||""));
    const t=safeObj(taxonomy.value);
    const validUnits=Object.values(safeObj(t.independent_units)).filter(v=>v&&typeof v==="object");
    const familyIds=new Set(validUnits.map(v=>v.family_id).filter(Boolean));
    return {
      source_states:{practice:practice.state,readiness:readiness.state,taxonomy:taxonomy.state},
      practice:{attempted,correct,unique_questions:questionRows.filter(x=>x.attempted>0).length,skills:tags},
      readiness:{submitted:assessments.length,distinct_assessments:new Set(assessments.map(a=>a.id)).size,recent:assessments.slice(0,5)},
      independent:{units:validUnits.length,correct:validUnits.filter(v=>v.correct===true).length,families:familyIds.size}
    };
  };
  const api=Object.freeze({summarize});
  if(typeof module!=="undefined"&&module.exports)module.exports=api;
  if(typeof document==="undefined")return;
  const el=(tag,className="",value=null)=>{
    const n=document.createElement(tag);
    if(className)n.className=className;
    if(value!==null)n.textContent=String(value);
    return n;
  };
  const fmt=(v)=>new Intl.NumberFormat("vi-VN").format(v);
  const safeDate=s=>{
    const d=new Date(s);
    return Number.isNaN(d.getTime())?"Không rõ thời điểm":new Intl.DateTimeFormat("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric"}).format(d);
  };
  const show=(root,result)=>{
    root.replaceChildren();
    const bad=Object.entries(result.source_states).filter(([_,state])=>["invalid","unavailable"].includes(state));
    if(bad.length){
      const p=el("p","mpd-warning","Một số vùng lưu trữ chưa đọc được ("+bad.map(([k])=>k).join(", ")+"). Không tự xóa dữ liệu. Hãy xem phần Sao lưu/Khôi phục hoặc kiểm tra trình duyệt.");
      root.append(p);
    }
    const grid=el("div","mpd-grid");
    const cards=[
      ["Lượt làm Practice",result.source_states.practice==="ok"?fmt(result.practice.attempted):"—",
       "Tổng số lượt trả lời, kể cả làm lại; không phải số câu khác nhau."],
      ["Câu Practice đã thử",result.source_states.practice==="ok"?fmt(result.practice.unique_questions):"—",
       "Số câu hỏi khác nhau đã có lượt trả lời."],
      ["Bài tự kiểm tra đã nộp",result.source_states.readiness==="ok"?fmt(result.readiness.submitted):"—",
       "Chỉ đếm bài Readiness được nộp, không lấy Practice thay thế."],
      ["Đơn vị luyện độc lập",result.source_states.taxonomy==="ok"?fmt(result.independent.units):"—",
       "Bằng chứng độc lập ghi nhận bởi Taxonomy v2; không phải điểm thành thạo."]
    ];
    for(const [label,value,detail] of cards){
      const box=el("section","mpd-stat");
      box.append(el("span","mpd-stat-label",label),el("strong","mpd-stat-value",value),el("p","",detail));
      grid.append(box);
    }
    root.append(grid);
    const cols=el("div","mpd-columns");
    const practices=el("section","mpd-panel");
    practices.append(el("h2","","Kỹ năng đã luyện"));
    const tags=result.practice.skills.slice(0,8);
    if(result.source_states.practice!=="ok")practices.append(el("p","","Chưa đọc được dữ liệu luyện tập."));
    else if(!tags.length)practices.append(el("p","","Em chưa có lượt Practice được ghi nhận trên trình duyệt này."));
    else {
      practices.append(el("p","mpd-hint","Mức độ hoạt động theo tag cũ; không phải xếp hạng thành thạo."));
      const ul=el("ul","mpd-activity-list");
      for(const t of tags){
        const li=el("li");
        li.append(el("span","",t.id),el("strong","",fmt(t.correct)+"/"+fmt(t.attempted)));
        ul.append(li);
      }
      practices.append(ul);
    }
    const checks=el("section","mpd-panel");checks.append(el("h2","","Các lần tự kiểm tra gần đây"));
    if(result.source_states.readiness!=="ok")checks.append(el("p","","Chưa đọc được dữ liệu tự kiểm tra."));
    else if(!result.readiness.recent.length)checks.append(el("p","","Chưa có bài Readiness đã nộp trên trình duyệt này."));
    else{
      const ul=el("ul","mpd-activity-list");
      for(const r of result.readiness.recent){
        const li=el("li");
        li.append(el("span","",r.id+" · "+safeDate(r.at)),el("strong","",fmt(r.correct)+"/"+fmt(r.total)));
        ul.append(li);
      }checks.append(ul);
    }
    cols.append(practices,checks);root.append(cols);
    root.append(el("p","mpd-footnote","Các số liệu chỉ mô tả hoạt động trên trình duyệt hiện tại. Không cộng các lượt Practice với bằng chứng độc lập; không kết luận em yếu hay thành thạo từ vài lượt làm."));
  };
  const boot=()=>{
    document.querySelectorAll("[data-math-progress-dashboard]").forEach(root=>{
      try{
        show(root,summarize(localStorage));
        root.dataset.progressReady="true";
      }catch(err){root.replaceChildren(el("p","mpd-warning","Chưa mở được thống kê trên trình duyệt này: "+err.message));root.dataset.progressReady="error";}
    });
  };
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);
  else boot();
  document.addEventListener("visibilitychange",()=>{if(!document.hidden)boot();});
  document.addEventListener("math-progress-restored",boot);
})();
