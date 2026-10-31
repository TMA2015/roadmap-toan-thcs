/* G Learning · SGK Toán 10 · self-check after Final Submit only.
 * Client-side self-assessment: never writes local learner history or Skill Mastery.
 * Canonical source: 9 NotebookLM-reviewed G10 RD1 snapshots, checked separately.
 */
(() => {
  "use strict";
  const expected = Object.freeze({CHI:14,CHII:14,CHIII:14,CHIV:21,CHV:18,CHVI:18,CHVII:22,CHVIII:14,CHIX:6});
  const scriptUrl = document.currentScript && document.currentScript.src;
  const create = (tag,cls,txt) => {
    const x=document.createElement(tag);
    if(cls)x.className=cls;
    if(txt!==undefined)x.textContent=String(txt);
    return x;
  };
  const rich=(parent,value)=>{
    const html=String(value||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
      .replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>")
      .replace(/`([^`]+)`/g,"<code>$1</code>")
      .replace(/\n/g,"<br>");
    const x=create("div","g10sc-rich");x.innerHTML=html;parent.append(x);
  };
  const typeset=root=>{
    if(window.MathJax && typeof window.MathJax.typesetPromise==="function"){
      window.MathJax.typesetClear && window.MathJax.typesetClear([root]);
      window.MathJax.typesetPromise([root]).catch(()=>{});
    }
  };
  const mcqKey=q=>{
    if(q.type!=="MCQ_SINGLE"||q.optional)return null;
    const m=String(q.answer||"").trim().match(/^\(?([ABCD])\)?(?=$|[.,;:\s(])/);
    return m?m[1]:null;
  };
  const tfKey=q=>{
    if(q.type!=="TRUE_FALSE_GROUP"||q.optional)return null;
    const raw=String(q.answer||"").trim();
    const compact=raw.replace(/^\(/,"").replace(/\)\s*\.?$/,"").trim();
    const tokens=compact.split(/\s*[,;]\s*/).map(x=>x.trim());
    if(tokens.length>=2&&tokens.length<=8&&tokens.every(x=>x==="Đ"||x==="S"))return tokens;
    // The reviewed sources also record grouped keys as "(a) Đ; (b) Sai; ...".
    const rex=/\(([a-h])\)\s*(Đúng|Sai|Đ|S)(?=\s*(?:;|,|\.|$))/gu;
    const segments=[...raw.matchAll(rex)];
    if(segments.length<2||segments.length>8)return null;
    if(segments.some((m,i)=>m[1]!==String.fromCharCode(97+i)))return null;
    if(raw.replace(rex,"").replace(/[;,\s.]/g,"")!=="")return null;
    return segments.map(m=>m[2]==="Đ"||m[2]==="Đúng"?"Đ":"S");
  };
  const gradingKey=q=>mcqKey(q)||tfKey(q);
  function mount(root,book){
    const items=book.items;
    let cursor=0,submitted=false;
    const answers=items.map(q=>q.type==="TRUE_FALSE_GROUP"&&tfKey(q)?tfKey(q).map(()=>null):"");
    root.dataset.g10scBound="true";
    root.replaceChildren();
    const heading=create("h2","g10sc-heading","Tự kiểm tra cuối chương "+book.chapter_label);
    const notice=create("p","g10sc-notice","Bài tự đánh giá. Chỉ xem đáp án và lời giải sau Final Submit; kết quả không ghi tiến độ hay Skill Mastery.");
    const progress=create("p","g10sc-progress");
    const nav=create("div","g10sc-jump");
    const body=create("section","g10sc-body");
    const controls=create("div","g10sc-controls");
    const prev=create("button","g10sc-button","Câu trước");
    const next=create("button","g10sc-button","Câu tiếp");
    const final=create("button","g10sc-button g10sc-final","Final Submit");
    prev.type=next.type=final.type="button";
    prev.dataset.g10scPrev="";next.dataset.g10scNext="";final.dataset.g10scFinal="";
    const report=create("section","g10sc-report");
    controls.append(prev,next,final);
    root.append(heading,notice,progress,nav,body,controls,report);
    const render=()=>{
      const q=items[cursor], answer=answers[cursor];
      progress.textContent="Câu "+(cursor+1)+" / "+items.length+(submitted?" · Đã nộp":" · Chưa nộp");
      nav.replaceChildren();
      items.forEach((_,j)=>{
        const b=create("button","g10sc-jump-button"+(cursor===j?" is-current":""),String(j+1));
        b.type="button";b.dataset.g10scJump=String(j);b.setAttribute("aria-label","Đến câu "+(j+1));
        b.addEventListener("click",()=>{cursor=j;render()});nav.append(b);
      });
      body.replaceChildren();
      body.append(create("h3","","Câu "+(cursor+1)+(q.optional?" · Tự chọn":"")));
      rich(body,q.stem);
      const field=create("div","g10sc-answer");
      const key=gradingKey(q);
      if(q.type==="MCQ_SINGLE"&&typeof key==="string"){
        field.append(create("p","","Chọn một phương án:"));
        for(const option of ["A","B","C","D"]){
          const label=create("label","g10sc-choice"),input=create("input");
          input.type="radio";input.name="g10sc-mcq";input.value=option;
          input.checked=answer===option;input.disabled=submitted;
          input.addEventListener("change",()=>{if(!submitted)answers[cursor]=option});
          label.append(input,document.createTextNode(" "+option));field.append(label);
        }
      }else if(q.type==="TRUE_FALSE_GROUP"&&Array.isArray(key)){
        field.append(create("p","","Ghi Đ/S lần lượt theo các nhận định trong đề:"));
        key.forEach((_,j)=>{
          const group=create("fieldset","g10sc-tf");group.append(create("legend","","Ý "+String.fromCharCode(97+j)));
          for(const val of ["Đ","S"]){
            const label=create("label","g10sc-choice"),input=create("input");
            input.type="radio";input.name="g10sc-tf-"+j;input.value=val;
            input.checked=Array.isArray(answer)&&answer[j]===val;input.disabled=submitted;
            input.addEventListener("change",()=>{if(!submitted)answers[cursor][j]=val});
            label.append(input,document.createTextNode(" "+(val==="Đ"?"Đúng":"Sai")));group.append(label);
          }field.append(group);
        });
      }else{
        field.append(create("p","g10sc-manual","Bài giải tự đối chiếu (không chấm máy):"));
        const input=create("textarea","g10sc-textarea");
        input.rows=5;input.placeholder="Em ghi câu trả lời hoặc cách giải vào đây…";
        input.value=typeof answer==="string"?answer:"";input.disabled=submitted;
        input.addEventListener("input",()=>{if(!submitted)answers[cursor]=input.value});
        field.append(input);
      }
      body.append(field);
      if(submitted){
        const result=create("section","g10sc-review");
        const expectedKey=gradingKey(q);
        if(!expectedKey)result.append(create("p","","Tự đối chiếu — không chấm tự động."));
        else{
          const ok=Array.isArray(expectedKey)?
            expectedKey.every((k,j)=>Array.isArray(answer)&&answer[j]===k):
            expectedKey===answer;
          result.append(create("p","g10sc-verdict",ok?"Đúng theo đáp án đã review.":"Chưa khớp đáp án — xem cách giải bên dưới."));
        }
        const label=(t,v)=>{if(v){result.append(create("strong","",t));rich(result,v)}};
        label("Đáp án:",q.answer);label("Lời giải:",q.solution);
        if(q.rubric)label("Hướng dẫn tự đối chiếu:",q.rubric);
        body.append(result);
      }
      prev.disabled=cursor===0;next.disabled=cursor===items.length-1;final.hidden=submitted;
      typeset(body);
    };
    const submit=()=>{
      if(submitted)return;
      submitted=true;
      let correct=0,gradable=0,manual=0,unanswered=0;
      items.forEach((q,i)=>{
        const k=gradingKey(q),a=answers[i];
        if(!k){manual++;if(!String(a||"").trim())unanswered++;return}
        gradable++;
        const filled=Array.isArray(a)?a.every(x=>x!==null):Boolean(a);
        if(!filled)unanswered++;
        if(Array.isArray(k)?k.every((x,j)=>Array.isArray(a)&&a[j]===x):k===a)correct++;
      });
      report.replaceChildren(create("h3","","Kết quả tự đánh giá — không phải điểm khảo thí"),
        create("p","","Phần có khóa chấm máy: "+correct+" / "+gradable+" câu."),
        create("p","","Cần tự đối chiếu lời giải/rubric: "+manual+" câu."),
        create("p","","Chưa trả lời: "+unanswered+" câu."),
        create("p","","Không ghi Skill Mastery hoặc tiến độ; em có thể ôn lại các câu chưa đúng."));
      render();report.scrollIntoView({block:"nearest",behavior:"smooth"});
    };
    prev.addEventListener("click",()=>{if(cursor>0){cursor--;render()}});
    next.addEventListener("click",()=>{if(cursor<items.length-1){cursor++;render()}});
    final.addEventListener("click",submit);
    render();
  }
  async function start(){
    for(const root of document.querySelectorAll("[data-g10-chapter-selfcheck]")){
      if(root.dataset.g10scBound)return;
      const chapter=root.getAttribute("data-g10-chapter-selfcheck");
      if(!Object.prototype.hasOwnProperty.call(expected,chapter))continue;
      root.replaceChildren(create("p","","Đang tải bộ Tự kiểm tra đã review…"));
      try{
        if(!scriptUrl)throw Error("missing script path");
        const url=new URL("../data/thpt-g10-readiness/"+chapter+".json",scriptUrl);
        const response=await fetch(url);
        if(!response.ok)throw Error("HTTP "+response.status);
        const book=await response.json();
        if(book.schema!=="thpt-g10-reviewed-selfcheck-v1"||
           book.scope!=="SGK_CHAPTER_READINESS"||book.chapter!==chapter||
           !Array.isArray(book.items)||book.items.length!==expected[chapter]||
           new Set(book.items.map(x=>x.item_id)).size!==book.items.length||
           book.mastery_credit!==false||book.persist_results!==false||
           !book.items.every(x=>x.item_id&&x.stem&&x.answer&&x.solution))
          throw Error("source/structure mismatch");
        mount(root,book);
      }catch(err){
        root.dataset.g10scBound="error";
        root.replaceChildren(create("p","g10sc-error","Bài tự kiểm tra chưa thể tải đúng nguồn. Chưa có kết quả nào được ghi. Có thể quay lại phần Luyện tập."));
        console.error("G10 self-check source blocked:",chapter,err);
      }
    }
  }
  if(window.document$&&typeof window.document$.subscribe==="function")window.document$.subscribe(start);
  else if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);
  else start();
})();
