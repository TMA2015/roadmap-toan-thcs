/* R4 learning-pilot-only helpers: all selectors scoped under data-thpt-r4, no storage/network. */
(() => {
 "use strict";
 function init() {
  document.querySelectorAll('[data-thpt-r4]').forEach(root => {
   if(root.dataset.thptR4Ready==="1")return;
   root.dataset.thptR4Ready="1";
   const input=root.querySelector("[data-thpt-filter-input]");
   const list=root.querySelector("[data-thpt-filter-list]");
   if(input&&list){
    const items=[...list.querySelectorAll("[data-thpt-filter-item]")];
    const groups=[...list.querySelectorAll("[data-thpt-filter-group]")];
    const kind=root.querySelector("[data-thpt-kind-filter]");
    const counter=root.querySelector("[data-thpt-filter-count]");
    const run=()=>{
     const word=input.value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("vi").trim();
     const type=kind?.value||"all";
     let visible=0;
     items.forEach(item=>{
      const hay=(item.dataset.thptFilterText||item.textContent).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("vi");
      const match=(!word||hay.includes(word))&&(type==="all"||item.dataset.thptKind===type);
      item.hidden=!match;if(match)visible++;
     });
     groups.forEach(group=>{
      const children=[...group.querySelectorAll("[data-thpt-filter-item]")];
      group.hidden=!children.some(x=>!x.hidden);
      if(word&& !group.hidden)group.open=true;
     });
     if(counter&&word)counter.textContent=visible+" kết quả phù hợp · Chỉ mục đã có nội dung/đang đối chiếu";
     if(counter&&!word)counter.textContent=items.length+" mục trong bản mẫu · chưa phải danh mục đã nghiệm thu";
    };
    input.addEventListener("input",run);kind?.addEventListener("change",run);
   }
   for(const [selector,correct,good,bad] of [
    ["[data-thpt-core]","-3","Đúng. Hoành độ đỉnh h = −3.","Chưa đúng. So sánh với (x − h)² + k: h = −3."],
    ["[data-thpt-practice]","1,3","Đúng. Giải (x − 1)(x − 3) = 0 được 1 và 3.","Chưa đúng. Cho y = 0 rồi phân tích thành nhân tử."]
   ]){
    root.querySelectorAll(selector).forEach(area=>{
     const form=area.querySelector("form"),feedback=area.querySelector("[data-thpt-feedback]");
     if(!form||!feedback)return;
     form.addEventListener("submit",ev=>{
      ev.preventDefault();
      const val=form.querySelector('input[name="answer"]:checked')?.value;
      feedback.textContent=!val?"Chọn một đáp án trước khi kiểm tra.":val===correct?good:bad;
     });
    });
   }
   root.querySelectorAll("[data-thpt-readiness]").forEach(area=>{
    const queries=[
     {prompt:"Cho y = (x − 4)² + 2. Tung độ đỉnh là bao nhiêu?",opts:["4","2","−4"],key:1,reason:"Đỉnh I(4;2), tung độ là 2."},
     {prompt:"Cho y = −(x − 1)² + 5. Giá trị lớn nhất bằng bao nhiêu?",opts:["1","−5","5"],key:2,reason:"Hệ số bình phương âm, GTLN bằng 5 tại x = 1."}
    ];
    let at=0,answers=queries.map(()=>null),finalized=false;
    const form=area.querySelector("form"),holder=area.querySelector("[data-thpt-question]"),info=area.querySelector("[data-thpt-progress]"),result=area.querySelector("[data-thpt-feedback]"),reveal=area.querySelector("[data-thpt-solution]"),prev=area.querySelector("[data-thpt-previous]"),next=area.querySelector("[data-thpt-next]"),submit=area.querySelector("[data-thpt-final]");
    if(!form||!holder||!info||!result||!reveal||!prev||!next||!submit)return;
    const redraw=()=>{
     const q=queries[at];holder.replaceChildren();
     const group=document.createElement("fieldset"),legend=document.createElement("legend");
     legend.textContent=q.prompt;group.append(legend);
     q.opts.forEach((option,k)=>{
      const label=document.createElement("label"),radio=document.createElement("input");
      radio.type="radio";radio.name="ready-question";radio.value=String(k);
      radio.checked=answers[at]===k;radio.disabled=finalized;
      radio.addEventListener("change",()=>{if(!finalized)answers[at]=k});
      label.append(radio,document.createTextNode(option));group.append(label);
     });
     holder.append(group);
     info.textContent="Câu "+(at+1)+" / "+queries.length;
     prev.disabled=at===0;next.disabled=at===queries.length-1;submit.hidden=finalized;
    };
    prev.addEventListener("click",()=>{if(at>0){at--;redraw()}});
    next.addEventListener("click",()=>{if(at<queries.length-1){at++;redraw()}});
    form.addEventListener("submit",event=>{
     event.preventDefault();if(finalized)return;
     if(answers.some(x=>x===null)){result.textContent="Hãy hoàn thành cả hai câu trước khi Final Submit. Có thể dùng Previous/Next để quay lại sửa.";return}
     finalized=true;
     const score=queries.reduce((n,q,i)=>n+(answers[i]===q.key?1:0),0);
     result.textContent="Kết quả Demo: "+score+" / "+queries.length+". Lời giải chỉ hiện sau lần nộp này.";
     reveal.hidden=false;reveal.replaceChildren();
     queries.forEach((q,i)=>{
      const p=document.createElement("p");
      p.textContent="Câu "+(i+1)+": "+(answers[i]===q.key?"Đúng. ":"Chưa đúng. ")+q.reason;
      reveal.append(p);
     });
     redraw();
    });redraw();
   });
  });
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
 else init();
 if(typeof document$!=="undefined")document$.subscribe(init);
})();