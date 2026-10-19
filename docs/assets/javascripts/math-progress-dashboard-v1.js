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
    return {
      source_states:{practice:practice.state,readiness:readiness.state},
      practice:{attempted,correct,unique_questions:questionRows.filter(x=>x.attempted>0).length,skills:tags},
      readiness:{submitted:assessments.length,distinct_assessments:new Set(assessments.map(a=>a.id)).size,recent:assessments.slice(0,5)}
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
  /* R2-A: display what an actual student can use; never rewrite learner history. */
  const show=(root,result)=>{
    root.replaceChildren();
    const state=result.source_states;
    const problems=[["practice","Core / Luyện tập"],["readiness","Tự kiểm tra"]]
      .filter(([key])=>["invalid","unavailable"].includes(state[key]))
      .map(([,label])=>label);
    const p=(className,copy)=>{
      const node=el("p",className,copy);
      return node;
    };
    const sectionTitle=el("h2","mpd-section-title","Em đã học những gì?");
    root.append(sectionTitle,p("mpd-intro","Ba cách học khác nhau. Em có thể học bài, luyện câu hỏi và tự kiểm tra sau khi đã học."));
    if(problems.length){
      const warning=p("mpd-warning","Không đọc được dữ liệu "+problems.join(" và ")+" trên thiết bị này. Kết quả cũ không bị xóa hay ghi đè. Em có thể nhờ người lớn kiểm tra phần Sao lưu và khôi phục bên dưới.");
      warning.setAttribute("role","alert");
      root.append(warning);
    }
    const count=(key,value)=>state[key]==="ok"?fmt(value):state[key]==="empty"?"0":"—";
    const grid=el("div","mpd-grid");
    const card=(lane,title,value,description,actionLabel,href)=>{
      const box=el("section","mpd-stat");
      box.dataset.lane=lane;
      const label=el("h3","mpd-stat-label",title);
      const number=el("strong","mpd-stat-value",value);
      if(lane==="core")number.classList.add("mpd-stat-value--text");
      box.append(label,number,p("",description));
      if(actionLabel&&href){
        const link=el("a","mpd-stat-link",actionLabel);
        link.href=href;
        box.append(link);
      }
      grid.append(box);
    };
    card("core","1 · Core theo chặng","Học và thực hành",
      "Học qua bài giảng, ví dụ và thực hành những câu hỏi ngắn theo từng chặng.",
      "Vào bài học","../hoc-theo-lop/");
    card("practice","2 · Luyện tập theo chuyên đề",
      count("practice",result.practice.attempted),
      "Tổng số lượt trả lời câu hỏi Core theo chặng và khi luyện tập theo chuyên đề; có tính lượt làm lại.",
      "Chọn chuyên đề","../luyen-tap/");
    card("readiness","3 · Tự kiểm tra",
      count("readiness",result.readiness.submitted),
      "Số bài tự kiểm tra đã nộp. Đây là số bài, không phải số lượt trả lời câu hỏi.",
      "Chọn bài để học","../hoc-theo-lop/");
    root.append(grid);
    const anyActivity=result.practice.attempted>0||result.readiness.submitted>0;
    if(!anyActivity&&!problems.length){
      root.append(p("mpd-empty","Chưa có kết quả học tập được ghi nhận trên thiết bị này. Em có thể chọn một bài học hoặc thử luyện tập để bắt đầu."));
    }
    const cols=el("div","mpd-columns");
    const practices=el("section","mpd-panel");
    practices.append(el("h2","","Những kỹ năng em đã thực hành"));
    if(["invalid","unavailable"].includes(state.practice)){
      practices.append(p("","Chưa thể xem hoạt động luyện tập. Dữ liệu cũ được giữ nguyên."));
    }else if(!result.practice.skills.length){
      practices.append(p("","Chưa có kỹ năng nào được ghi nhận. Em có thể bắt đầu từ Học theo lớp."));
    }else{
      practices.append(p("","Đã ghi nhận hoạt động với "+fmt(result.practice.skills.length)+" nhóm kỹ năng trong các lượt trả lời câu hỏi."));
      practices.append(p("mpd-hint","Đây là số nhóm đã luyện, không phải đánh giá em giỏi hay yếu. Để xem kỹ năng cụ thể và ôn thêm, mở Bản đồ kỹ năng."));
      const link=el("a","mpd-stat-link","Xem Bản đồ kỹ năng");
      link.href="../ban-do-ky-nang/";
      practices.append(link);
    }
    const checks=el("section","mpd-panel");
    checks.append(el("h2","","Các lần tự kiểm tra gần đây"));
    if(["invalid","unavailable"].includes(state.readiness)){
      checks.append(p("","Chưa thể xem các lần tự kiểm tra. Dữ liệu cũ được giữ nguyên."));
    }else if(!result.readiness.recent.length){
      checks.append(p("","Chưa có bài tự kiểm tra đã nộp trên thiết bị này."));
    }else{
      const ul=el("ul","mpd-activity-list");
      for(const [i,r] of result.readiness.recent.entries()){
        const li=el("li");
        li.append(el("span","","Lần "+(i+1)+" · "+safeDate(r.at)),el("strong","",fmt(r.correct)+"/"+fmt(r.total)+" câu đúng"));
        ul.append(li);
      }
      checks.append(ul);
    }
    cols.append(practices,checks);
    root.append(cols);
    root.append(p("mpd-footnote","Số lượt trả lời câu hỏi là một chỉ số chung cho Core theo chặng và Luyện tập theo chuyên đề. Bài tự kiểm tra đã nộp được thống kê riêng, không cộng chung hai loại. Chỉ hiển thị hoạt động trên thiết bị này, không phải điểm thành thạo. Số liệu 7/30 ngày sẽ được bổ sung khi có đủ thời gian từng lượt."));
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
