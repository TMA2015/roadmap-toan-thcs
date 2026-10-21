(() => {
"use strict";
// Academic QA preview only: save only under independent Grade9 assessment ID.
// Do not call the shared Readiness bridge or mutate other assessment buckets.
const selector="[data-readiness-g9-qa]";
const text=(parent,tag,value,cls)=>{
  const n=document.createElement(tag);
  if(value!==null&&value!==undefined)n.textContent=String(value);
  if(cls)n.className=cls;
  parent.appendChild(n);return n;
};
const button=(parent,label,click,cls)=>{
  const n=text(parent,"button",label,cls);
  n.type="button";n.addEventListener("click",click);return n;
};
const start=async()=>{
  const root=document.querySelector(selector);
  if(!root||root.dataset.started==="1")return;
  root.dataset.started="1";
  root.classList.add("r9qa");
  const status=text(root,"p","Đang kiểm tra nguồn Readiness lớp 9...","r9qa-status");
  status.setAttribute("role","status");
  let bank;
  try{
    const uri=new URL("../../../assets/data/qa/ct23-g9-readiness-candidate-v1.json",window.location.href);
    const resp=await fetch(uri.href,{cache:"no-cache"});
    if(!resp.ok)throw new Error("HTTP "+resp.status);
    bank=await resp.json();
    if(bank.release_status!=="QA_ONLY_NO_LIVE_RELEASE"||
      bank.academic_review?.authorization!=="NO_LIVE_RELEASE"||
      bank.assessment_id!=="PROB23-G9-CORE-READY-V1"||
      bank.grade_scope?.length!==1||bank.grade_scope[0]!==9||
      !Array.isArray(bank.items)||bank.items.length!==10||
      new Set(bank.items.map(x=>x.id)).size!==10||
      bank.items.some(q=>q.curriculum?.grades?.length!==1||q.curriculum.grades[0]!==9||
        !/^prob23-core-g9-[67]$/.test(q.card_id)||
        !Array.isArray(q.options)||q.options.length!==4||
        !Number.isInteger(q.answer)||q.answer<0||q.answer>=q.options.length))
      throw new Error("Nguồn chưa đủ điều kiện QA chỉ dành lớp 9.");
  }catch(err){status.textContent="Không mở được bài QA: "+err.message;return;}
  const api=window.MathCT23G9EvidenceQA;
  if(!api||api.ID!==bank.assessment_id){
    status.textContent="Chưa khởi tạo được bộ lưu kết quả QA lớp 9.";return;
  }
  const items=bank.items,selected=Array(items.length).fill(null);
  let position=0,submitted=false;
  const startedAt=Date.now();
  status.textContent="Bản QA riêng lớp 9: kết quả chỉ lưu trong bucket Readiness lớp 9, không cấp điểm Core/Skill/Mastery.";
  const quiz=text(root,"section",null,"r9qa-card");
  const submit=()=>{
    if(submitted)return;
    const unfilled=selected.filter(x=>!Number.isInteger(x)).length;
    if(unfilled){
      status.textContent="Còn "+unfilled+" câu chưa chọn. Hãy trả lời đủ 10 câu trước khi nộp.";
      return;
    }
    submitted=true;
    const score=items.reduce((n,q,i)=>n+(selected[i]===q.answer?1:0),0);
    const submittedAt=new Date().toISOString();
    const attempt={
      assessment_id:bank.assessment_id,grade:9,form_version:bank.version,
      source_git_blob:bank.academic_review.source_git_blob,
      attempt_id:"CT23-G9-"+Date.now()+"-"+Math.random().toString(36).slice(2,9),
      started_at:new Date(startedAt).toISOString(),submitted_at:submittedAt,
      duration_seconds:Math.floor((Date.now()-startedAt)/1000),
      total:10,answered:10,correct:score,accuracy:score/10,
      readiness_state:score>=8?"READY":"REVIEW_RECOMMENDED",
      role:"independent_grade9_readiness_qa",
      items:items.map((q,i)=>({id:q.id,selected:selected[i],correct:selected[i]===q.answer,skill:q.skill}))
    };
    const saveResult=api.save(localStorage,attempt);
    quiz.replaceChildren();status.textContent="";
    text(quiz,"h3","Kết quả kiểm thử: "+score+"/10");
    text(quiz,"p","Đây là bản QA lớp 9; không tự cấp điểm Core/Skill/Mastery, không sửa kết quả lớp 6–8.");
    if(saveResult.ok) text(quiz,"p","Đã lưu riêng kết quả Readiness lớp 9 trên thiết bị. Có thể sao lưu qua công cụ Sao lưu tiến độ hiện có.","r9qa-status");
    else text(quiz,"p","Không lưu được lượt QA này ("+saveResult.reason+"). Kết quả trên màn hình chưa có trong lịch sử; dữ liệu cũ không bị ghi đè.","r9qa-status");
    const weak={};
    items.forEach((q,i)=>{
      const correct=selected[i]===q.answer;
      if(!correct)weak[q.skill]=(weak[q.skill]||0)+1;
      const detail=text(quiz,"details",null,"r9qa-review");
      text(detail,"summary","Câu "+(i+1)+": "+(correct?"Đúng":"Cần ôn lại")+" · "+(bank.skill_labels[q.skill]||q.skill));
      text(detail,"p",q.question);
      text(detail,"p","Đáp án đúng: "+q.options[q.answer]);
      text(detail,"p",q.explanation);
    });
    const errs=Object.entries(weak);
    if(errs.length)text(quiz,"p","Gợi ý ôn tập: "+errs.map(e=>(bank.skill_labels[e[0]]||e[0])+" ("+e[1]+" câu)").join("; "));
    else text(quiz,"p","Đã trả lời đúng cả 10 câu trong bản QA.");
    const link=text(quiz,"a","Ôn lại thẻ Core CĐ23 lớp 9");
    link.href=new URL("../core/",window.location.href).href;
    button(quiz,"Làm lại bài 10 câu",()=>window.location.reload(),"r9qa-primary");
  };
  const render=()=>{
    quiz.replaceChildren();
    const q=items[position];
    text(quiz,"p","Câu "+(position+1)+"/10 · "+(bank.skill_labels[q.skill]||q.skill),"r9qa-progress");
    text(quiz,"h3",q.question,"r9qa-question");
    const field=text(quiz,"fieldset",null,"r9qa-options");
    text(field,"legend","Chọn một đáp án, có thể đổi trước khi nộp");
    q.options.forEach((opt,i)=>{
      const label=text(field,"label",null,"r9qa-option");
      const radio=document.createElement("input");
      radio.type="radio";radio.name="r9qa-choice";radio.value=String(i);
      radio.checked=selected[position]===i;radio.disabled=submitted;
      radio.addEventListener("change",()=>{selected[position]=i;render();});
      label.appendChild(radio);text(label,"span",opt);
    });
    const jump=text(quiz,"nav",null,"r9qa-jump");
    jump.setAttribute("aria-label","Chọn câu hỏi");
    items.forEach((_,i)=>{
      const b=button(jump,String(i+1),()=>{position=i;render()},"r9qa-number");
      b.setAttribute("aria-label","Câu "+(i+1)+(Number.isInteger(selected[i])?", đã chọn":", chưa chọn"));
      if(i===position)b.setAttribute("aria-current","step");
      if(Number.isInteger(selected[i]))b.classList.add("is-answered");
    });
    const nav=text(quiz,"div",null,"r9qa-actions");
    const prev=button(nav,"Câu trước",()=>{position=Math.max(0,position-1);render()});
    prev.disabled=position===0;
    const next=button(nav,"Câu sau",()=>{position=Math.min(9,position+1);render()});
    next.disabled=position===9;
    button(nav,"Nộp bài",submit,"r9qa-primary");
  };
  const existing=api.history(localStorage);
  if(existing.ok && existing.latest){
    text(root,"p","Lịch sử QA lớp 9: đã lưu "+existing.attempts.length+
      " lượt; lần gần nhất "+existing.latest.correct+"/"+existing.latest.total+
      " ("+existing.latest.submitted_at.slice(0,10)+").","r9qa-status");
  }else if(!existing.ok){
    text(root,"p","Dữ liệu Readiness cũ đang lỗi định dạng; hệ thống sẽ chặn ghi đè để bảo toàn dữ liệu.","r9qa-status");
  }
  render();
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);
else start();
if(typeof document$!=="undefined")document$.subscribe(start);
})();