(() => {
"use strict";
// Academic QA preview ONLY: deliberately no local/session storage or scoring APIs.
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
  const items=bank.items,selected=Array(items.length).fill(null);
  let position=0,submitted=false;
  status.textContent="Bản kiểm thử riêng của lớp 9. Không cập nhật điểm Readiness, Skill, Mastery hoặc lịch sử học tập.";
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
    quiz.replaceChildren();status.textContent="";
    text(quiz,"h3","Kết quả kiểm thử: "+score+"/10");
    text(quiz,"p","Không lưu điểm hoặc cấp trạng thái READY, Skill hay Mastery. Đây không phải lịch sử Tự kiểm tra của học sinh.");
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
  render();
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);
else start();
if(typeof document$!=="undefined")document$.subscribe(start);
})();