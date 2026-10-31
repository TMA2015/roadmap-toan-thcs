/* Issue #662 — Self-Learning Math THPT self-check technical QA engine.
 * NOT an active SGK_CHAPTER_READINESS or TOPIC_READINESS release.
 * No persistence, network calls, independent Mastery, hidden bank or official scores.
 * Fixtures MUST be QA-SC-* and root must declare data-thpt-self-check-demo="true".
 */
(() => {
 "use strict";
 const kinds={SGK_CHAPTER:"Tự kiểm tra cuối chương",TOPIC:"Tự kiểm tra chuyên đề"};
 const el=(name,cls,text)=>{
  const node=document.createElement(name);
  if(cls)node.className=cls;
  if(text!==undefined)node.textContent=String(text);
  return node;
 };
 const appendLine=(parent,tag,label,value)=>{
  const line=el(tag,"thpt-selfcheck-line");
  line.append(el("strong","",label),document.createTextNode(" "+value));
  parent.append(line);
  return line;
 };
 const normalize=value=>String(value||"").trim().replace(/\s+/g," ");
 const safePath=href=>{
  if(typeof href!=="string"||!href.trim())return null;
  const s=href.trim();
  if(/^(?:\.{0,2}\/|\/(?!\/))/.test(s)&&!/[<>"']/.test(s))return s;
  return null;
 };
 const supported=["MCQ","TF","SHORT","WRITTEN"];
 function validate(cfg,root){
  if(!root || root.dataset.thptSelfCheckDemo!=="true" ||
   cfg?.releaseMode!=="TECHNICAL_DEMO_ONLY" ||
   cfg?.masteryCredit!==false || cfg?.persistResults!==false)
   throw Error("Issue #662 QA engine is not an activated release or Mastery service");
  if(!Object.prototype.hasOwnProperty.call(kinds,cfg.scope?.kind) ||
   !cfg.scope?.scope_id || !Array.isArray(cfg.items) || cfg.items.length===0)
   throw Error("Invalid self-check scope/items");
  const ids=new Set();
  for(const q of cfg.items){
   if(!q || typeof q.item_id!=="string"||!q.item_id.startsWith("QA-SC-") ||
    ids.has(q.item_id)||typeof q.prompt!=="string"||!q.prompt.trim()||
    typeof q.outcome_id!=="string"||!q.outcome_id.trim()||!supported.includes(q.type))
    throw Error("Unreviewed/duplicate/non-QA item in self-check fixture");
   ids.add(q.item_id);
   if(q.type==="MCQ"&&(!Array.isArray(q.options)||q.options.length!==4||
    !q.options.every(x=>typeof x==="string")||!/^[ABCD]$/.test(q.answerKey||"")))
    throw Error("MCQ requires four choices and a reviewed A–D key");
   if(q.type==="TF"&&(!Array.isArray(q.statements)||q.statements.length===0||
    !q.statements.every(s=>typeof s==="string")||
    !Array.isArray(q.answerKey)||q.answerKey.length!==q.statements.length||
    !q.answerKey.every(x=>typeof x==="boolean")))
    throw Error("T/F group requires complete reviewed truth values");
   if(q.type==="SHORT"&&q.acceptedAnswers!==undefined&&
    (!Array.isArray(q.acceptedAnswers)||!q.acceptedAnswers.length||
    !q.acceptedAnswers.every(x=>typeof x==="string"&&x.trim())||
    q.gradingMode!=="EXACT_TEXT_REVIEWED"))
    throw Error("No unreviewed free-form mathematical auto grading");
   if(q.type==="WRITTEN"&&(!q.rubric||typeof q.rubric!=="string"))
    throw Error("Written item needs a comparison rubric");
  }
 }
 function mount(root,cfg){
  validate(cfg,root);
  // State is held only in this closure. No score callback or storage.
  const responses=cfg.items.map(q=>q.type==="TF"?q.statements.map(()=>null):"");
  let index=0,submitted=false;
  root.replaceChildren();
  root.dataset.thptSelfCheckBound="qa-only";
  const heading=el("h2","",kinds[cfg.scope.kind]+" · QA kỹ thuật");
  const notice=el("p","thpt-selfcheck-notice",
   "Bản thử nghiệm kỹ thuật, KHÔNG phải đề kiểm tra chính thức; không ghi điểm, tiến độ hay Mastery.");
  const progress=el("p","thpt-selfcheck-progress");
  const navigator=el("div","thpt-selfcheck-navigation");
  const content=el("section","thpt-selfcheck-question");
  const actions=el("div","thpt-selfcheck-actions");
  const previous=el("button","","← Câu trước");
  const next=el("button","","Câu tiếp →");
  const final=el("button","","Final Submit");
  const outcome=el("div","thpt-selfcheck-outcome");
  previous.type=next.type=final.type="button";
  previous.dataset.thptScPrev="";next.dataset.thptScNext="";
  final.dataset.thptScFinal="";
  outcome.setAttribute("aria-live","polite");
  actions.append(previous,next,final);
  root.append(heading,notice,progress,navigator,content,actions,outcome);
  const complete=q=>q.type==="TF"?responses[index].every(x=>x!==null):
   Boolean(normalize(responses[index]));
  const describe=q=>q.type==="MCQ"?"Chọn một phương án A–D":
   q.type==="TF"?"Chọn Đúng hoặc Sai cho mỗi nhận định":
   q.type==="SHORT"?"Nhập câu trả lời ngắn":"Viết phác thảo cách giải (bài tự luận vẫn cần tự đối chiếu rubric)";
  function render(){
   const q=cfg.items[index];
   progress.textContent="Câu "+(index+1)+" / "+cfg.items.length+
    (submitted?" · Đã nộp bài":" · Chưa nộp bài");
   navigator.replaceChildren();
   cfg.items.forEach((_,i)=>{
    const b=el("button","thpt-selfcheck-jump"+(i===index?" is-active":""),"Câu "+(i+1));
    b.type="button";b.dataset.thptScJump=String(i);
    b.setAttribute("aria-current",i===index?"step":"false");
    b.addEventListener("click",()=>{index=i;render()});
    navigator.append(b);
   });
   content.replaceChildren();
   content.append(el("p","thpt-selfcheck-instruction",describe(q)),
    el("h3","thpt-selfcheck-stem",q.prompt));
   const field=el("div","thpt-selfcheck-answer");
   if(q.type==="MCQ"){
    const group=el("fieldset","");group.append(el("legend","","Phương án"));
    q.options.forEach((option,k)=>{
     const value="ABCD"[k],line=el("label","thpt-selfcheck-choice");
     const input=el("input");input.type="radio";input.name="thpt-selfcheck-option";
     input.value=value;input.checked=responses[index]===value;input.disabled=submitted;
     input.addEventListener("change",()=>{if(!submitted)responses[index]=value});
     line.append(input,document.createTextNode(value+". "+option));group.append(line);
    });
    field.append(group);
   }else if(q.type==="TF"){
    q.statements.forEach((statement,k)=>{
     const box=el("fieldset","thpt-selfcheck-tf");
     box.append(el("legend","",String(k+1)+". "+statement));
     for(const [value,label] of [["true","Đúng"],["false","Sai"]]){
      const line=el("label","thpt-selfcheck-choice"),radio=el("input");
      radio.type="radio";radio.name="thpt-selfcheck-tf-"+k;radio.value=value;
      radio.checked=responses[index][k]=== (value==="true");radio.disabled=submitted;
      radio.addEventListener("change",()=>{
       if(!submitted)responses[index][k]=value==="true";
      });
      line.append(radio,document.createTextNode(label));box.append(line);
     }
     field.append(box);
    });
   }else{
    const box=el("textarea","thpt-selfcheck-textarea");
    box.rows=q.type==="WRITTEN"?5:2;
    box.placeholder=q.type==="WRITTEN"?"Các bước giải của em":"Câu trả lời của em";
    box.value=responses[index];box.disabled=submitted;
    box.addEventListener("input",()=>{if(!submitted)responses[index]=box.value});
    field.append(box);
   }
   content.append(field);
   previous.disabled=index===0;next.disabled=index===cfg.items.length-1;
   final.hidden=submitted;
   if(submitted){
    const detail=el("section","thpt-selfcheck-review");
    const grade=gradeOne(q,responses[index]);
    appendLine(detail,"p","Câu này:",grade===null?
     "Tự đối chiếu; không chấm máy.":grade?"Đúng theo khóa tự đánh giá.":"Chưa khớp khóa tự đánh giá.");
    if(q.type==="MCQ")appendLine(detail,"p","Đáp án:",q.answerKey);
    if(q.type==="TF")appendLine(detail,"p","Đáp án:",q.answerKey.map(x=>x?"Đúng":"Sai").join(" · "));
    if(q.type==="SHORT"&&q.acceptedAnswers)appendLine(detail,"p","Đáp án được duyệt:",q.acceptedAnswers.join(" hoặc "));
    if(q.solution)appendLine(detail,"p","Lời giải:",q.solution);
    if(q.rubric)appendLine(detail,"p","Rubric tự đối chiếu:",q.rubric);
    const target=safePath(q.reviewUrl);
    if(target){
     const link=el("a","","Ôn lại kiến thức");link.href=target;
     detail.append(link);
    }
    content.append(detail);
   }
  }
  function gradeOne(q,response){
   if(q.type==="MCQ")return response===q.answerKey;
   if(q.type==="TF")return response.every((x,i)=>x===q.answerKey[i]);
   if(q.type==="SHORT"&&q.gradingMode==="EXACT_TEXT_REVIEWED"&&
    Array.isArray(q.acceptedAnswers))
    return q.acceptedAnswers.some(a=>normalize(a)===normalize(response));
   return null; // No fabricated free-form short-answer or Written grade.
  }
  function finalize(){
   if(submitted)return;
   submitted=true; // One final submit; no further edits or submissions.
   let correct=0,scored=0,manual=0,unanswered=0;
   const revisit=new Map();
   cfg.items.forEach((q,i)=>{
    const v=responses[i],score=gradeOne(q,v);
    if(score===null)manual++;else{scored++;if(score)correct++}
    if(q.type==="TF"?v.some(x=>x===null):!normalize(v))unanswered++;
    if(score===false||score===null){
     if(!revisit.has(q.outcome_id))revisit.set(q.outcome_id,safePath(q.reviewUrl));
    }
   });
   outcome.replaceChildren();
   outcome.append(el("h3","","Kết quả tự đánh giá — không phải điểm khảo thí"));
   appendLine(outcome,"p","Phần có khóa chấm được duyệt:",correct+" / "+scored+" câu");
   appendLine(outcome,"p","Cần tự đối chiếu:",manual+" câu (không chấm máy)");
   appendLine(outcome,"p","Câu chưa hoàn thành:",unanswered+" câu");
   appendLine(outcome,"p","Lưu ý:","Kết quả chỉ hiển thị trong lượt này, không ghi Mastery hay tiến độ.");
   const heading=el("h4","","Gợi ý ôn lại theo outcome");outcome.append(heading);
   if(!revisit.size)outcome.append(el("p","","Không có outcome cần đối chiếu thêm theo khóa chấm."));
   for(const [id,target] of revisit){
    const p=el("p","");p.append(document.createTextNode(id+" — "));
    if(target){const link=el("a","","Xem kiến thức liên quan");link.href=target;p.append(link)}
    else p.append(document.createTextNode("Đối chiếu phần kiến thức tương ứng"));
    outcome.append(p);
   }
   render();
  }
  previous.addEventListener("click",()=>{if(index>0){index--;render()}});
  next.addEventListener("click",()=>{if(index<cfg.items.length-1){index++;render()}});
  final.addEventListener("click",finalize);
  render();
  return Object.freeze({get submitted(){return submitted},get scope(){return cfg.scope.kind}});
 }
 window.THPTSelfCheckQAV1=Object.freeze({mount});
})();
