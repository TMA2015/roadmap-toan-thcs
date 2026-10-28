/* Opt-in THPT protected assessment UI bridge. No keys/hints/solutions here.
 * Never auto-converts TECHNICAL_DEMO_ONLY into graded student assessment.
 */
(function(){
 "use strict";
 function mount(root){
  if(!root||root.dataset.thptSecureBound==="1"||
    !root.matches("[data-thpt-secure-readiness]"))return;
  root.dataset.thptSecureBound="1";
  const base=root.dataset.apiOrigin||"",bank=root.dataset.bankId||"";
  root.replaceChildren();
  const status=document.createElement("p");status.setAttribute("role","status");
  status.setAttribute("aria-live","polite");status.className="thpt-r4-modal-progress";
  const prompt=document.createElement("div");prompt.className="thpt-r4-reviewed-formative-card";
  const controls=document.createElement("div");controls.className="thpt-r4-buttons";
  const button=(text)=>{const x=document.createElement("button");x.type="button";
    x.className="thpt-r4-action";x.textContent=text;return x;};
  const start=button("Bắt đầu Tự kiểm tra"),prev=button("Previous"),
        next=button("Next"),submit=button("Final Submit");
  controls.append(start,prev,next,submit);root.append(status,prompt,controls);
  const auth=window.THPT_PROTECTED_AUTH;
  if(!base.startsWith("https://")||!bank||typeof auth?.getToken!=="function"){
   status.textContent="Bài kiểm tra chính thức chưa mở. Không ghi điểm hoặc kết quả.";
   start.disabled=true;prev.hidden=next.hidden=submit.hidden=true;return;
  }
  let state=null,at=0,answers=Object.create(null),busy=false,completed=false;
  const questions=()=>state?.questions||[];
  const busySet=x=>{busy=x;start.disabled=x||!!state;
    prev.disabled=x||at===0;next.disabled=x||at===questions().length-1;submit.disabled=x};
  async function post(route,body){
   const token=await auth.getToken();
   if(typeof token!=="string"||!token)throw Error("Cần đăng nhập để làm Tự kiểm tra.");
   const response=await fetch(base+"/v1/assessment/"+route,{
     method:"POST",mode:"cors",cache:"no-store",credentials:"omit",
     headers:{"Content-Type":"application/json","Authorization":"Bearer "+token},
     body:JSON.stringify(body)
   });
   const data=await response.json();
   if(!response.ok)throw Error("Chưa thể mở/nộp bài kiểm tra ("+
       (typeof data.error==="string"?data.error:"SERVER_ERROR")+").");
   return data;
  }
  function render(){
   prompt.replaceChildren();
   if(!state)return;
   const q=questions()[at];
   const heading=document.createElement("p");heading.className="thpt-r4-modal-progress";
   heading.textContent="Câu "+(at+1)+" / "+questions().length;
   const legend=document.createElement("h3");legend.textContent=q.prompt;
   prompt.append(heading,legend);
   if(q.response_kind==="TEXT"){
    const field=document.createElement("textarea");
    field.rows=4;field.setAttribute("aria-label","Trả lời câu "+(at+1));
    field.value=answers[q.item_id]||"";field.disabled=completed;
    field.addEventListener("input",()=>{if(!completed)answers[q.item_id]=field.value;});
    prompt.append(field);
   }else{
    const group=document.createElement("fieldset");
    (q.choices||[]).forEach((label,k)=>{
      const row=document.createElement("label"),radio=document.createElement("input");
      radio.type="radio";radio.name="thpt-protected-"+at;radio.value=String(k);
      radio.checked=answers[q.item_id]===k;radio.disabled=completed;
      radio.addEventListener("change",()=>{if(!completed)answers[q.item_id]=k;});
      row.append(radio,document.createTextNode(label));group.append(row);
    });
    prompt.append(group);
   }
   prev.hidden=next.hidden=submit.hidden=false;start.hidden=true;
   prev.disabled=busy||at===0;
   next.disabled=busy||at===questions().length-1;
   submit.disabled=busy||completed;
  }
  start.addEventListener("click",async()=>{
   if(state||busy)return;
   busySet(true);status.textContent="Đang mở bài kiểm tra...";
   try{
     const data=await post("start",{bank_id:bank});
     if(!data||data.completed||!Array.isArray(data.questions)||!data.questions.length)
       throw Error("Bài kiểm tra chưa sẵn sàng.");
     if(data.questions.some(q=>!q.item_id||!q.prompt||
        !["TEXT","CHOICE"].includes(q.response_kind)))
       throw Error("Định dạng đề chưa được hỗ trợ.");
     state=data;answers=Object.create(null);at=0;status.textContent=
       "Có thể quay lại sửa đáp án. Không có gợi ý hoặc chấm điểm trước Final Submit.";
     render();
   }catch(e){status.textContent=e.message||"Không thể mở bài.";start.disabled=false;}
   finally{busySet(false)}
  });
  prev.addEventListener("click",()=>{if(state&&at>0){at--;render();}});
  next.addEventListener("click",()=>{if(state&&at<questions().length-1){at++;render();}});
  submit.addEventListener("click",async()=>{
   if(!state||busy||completed)return;
   const missing=questions().some(q=>q.response_kind==="TEXT"?
       typeof answers[q.item_id]!=="string"||!answers[q.item_id].trim():
       !Number.isInteger(answers[q.item_id]));
   if(missing){status.textContent="Hãy trả lời đủ các câu trước khi Final Submit.";return;}
   busySet(true);status.textContent="Đang nộp bài...";
   try{
     const result=await post("submit",{attempt_id:state.attempt_id,answers});
     if(!result?.completed)throw Error("Chưa xác nhận lưu bài.");
     completed=true;render();
     if(result.manual_review_required){
       status.textContent="Đã lưu bài. Phần tự luận đang chờ chấm theo rubric; chưa có điểm hoặc mastery.";
     }else{
       status.textContent="Đã nộp bài: "+result.score+" / "+result.total+
         ". Đây chưa phải tín chỉ thành thạo.";
       const details=document.createElement("section");
       details.setAttribute("aria-label","Lời giải sau Final Submit");
       (result.details||[]).forEach((d,k)=>{
         const p=document.createElement("p");
         p.textContent="Câu "+(k+1)+": "+(d.correct?"Đúng. ":"Chưa đúng. ")+
           (d.explanation||"");
         details.append(p);
       });prompt.append(details);
     }
   }catch(e){status.textContent=e.message||"Không thể nộp bài.";}
   finally{busySet(false)}
  });
 }
 function init(){document.querySelectorAll("[data-thpt-secure-readiness]").forEach(mount);}
 window.THPTProtectedReadiness=Object.freeze({mount});
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
 else init();
 if(typeof document$!=="undefined")document$.subscribe(init);
})();
