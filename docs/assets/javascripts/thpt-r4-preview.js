/* R4 learning-pilot-only helpers: all selectors scoped under data-thpt-r4, no storage/network. */
(() => {
 "use strict";

 // THPT-only launcher. The accepted THCS 7+25 launcher code remains unchanged.
 function initTHPTLauncher(){
  const match=location.pathname.match(/^(.*?\/)(thpt-preview|thpt)\//);
  if(!match){
   document.body.classList.remove("thpt-r4-route");
   document.querySelectorAll("[data-roadmap-topic-launcher]").forEach(el=>{
    el.hidden=false;el.removeAttribute("aria-hidden");
   });
   document.querySelector("[data-thpt-r4-launcher]")?.remove();
   document.querySelector("[data-thpt-r4-shortcut-dialog]")?.remove();
   return;
  }
  const base=match[1]+match[2]+"/";
  document.body.classList.add("thpt-r4-route");
  // Scope hiding to THPT paths; never remove or rewrite THCS launcher code/data.
  document.querySelectorAll("[data-roadmap-topic-launcher]").forEach(el=>{
   el.hidden=true;el.setAttribute("aria-hidden","true");
  });
  if(document.querySelector("[data-thpt-r4-launcher]"))return;
  const header=document.querySelector(".md-header__inner");
  if(!header)return;
  const topics=[["Hàm số và đồ thị · MẪU","chuyen-de/ham-so/kien-thuc/"]];
  const groups=[
   ["Trang chủ","home/"],["Học theo SGK","sgk/"],
   ["Chuyên đề","chuyen-de/"],["Thư viện bài tập","thu-vien/"],
   ["Tiến độ học tập","tien-do/"]
  ];
  const btn=document.createElement("button");
  btn.type="button";btn.className="roadmap-topic-launcher thpt-r4-launcher";
  btn.dataset.thptR4Launcher="1";
  btn.setAttribute("aria-haspopup","dialog");
  btn.setAttribute("aria-label","Mở 5 nhóm THPT và "+topics.length+" chuyên đề mẫu, chưa phát hành");
  const mark=document.createElement("span");mark.className="roadmap-topic-launcher__mark";mark.textContent="▤";
  const count=document.createElement("span");count.className="roadmap-topic-launcher__count";count.textContent="5 + "+topics.length;
  const name=document.createElement("span");name.className="roadmap-topic-launcher__name";name.textContent="mẫu";
  btn.append(mark,count,name);
  btn.addEventListener("click",()=>{
   let dlg=document.querySelector("[data-thpt-r4-shortcut-dialog]");
   if(!dlg){
    dlg=document.createElement("dialog");
    dlg.className="roadmap-topic-dialog";dlg.dataset.thptR4ShortcutDialog="1";
    dlg.setAttribute("aria-label","Điều hướng nhanh Toán THPT · Bản mẫu");
    const heading=document.createElement("div");heading.className="roadmap-topic-dialog__heading";
    const title=document.createElement("h2");title.textContent="Toán THPT · 5 nhóm + "+topics.length+" chuyên đề mẫu";
    const close=document.createElement("button");close.type="button";close.className="roadmap-topic-dialog__close";close.textContent="Đóng ✕";
    close.addEventListener("click",()=>dlg.close());heading.append(title,close);
    const hint=document.createElement("p");hint.className="roadmap-topic-dialog__hint";
    hint.textContent="Đây là các trang minh họa chưa phát hành, không phải danh mục chuyên đề đã nghiệm thu.";
    const section=document.createElement("details");section.className="roadmap-main-quick";section.open=true;
    const summary=document.createElement("summary");summary.textContent="5 nhóm THPT · mở/thu gọn";
    const nav=document.createElement("nav");nav.className="roadmap-main-quick__links";
    nav.setAttribute("aria-label","Năm lối tắt chính Toán THPT");
    for(const [label,url]of groups){
     const a=document.createElement("a");a.href=base+url;a.textContent=label;nav.append(a);
    }
    section.append(summary,nav);
    const topicNav=document.createElement("nav");topicNav.className="roadmap-topic-dialog__list";
    topicNav.setAttribute("aria-label","Các chuyên đề mẫu THPT");
    for(const [label,url]of topics){
     const a=document.createElement("a");a.href=base+url;a.textContent=label;topicNav.append(a);
    }
    dlg.append(heading,section,hint,topicNav);
    dlg.addEventListener("click",event=>{if(event.target===dlg)dlg.close()});
    document.body.append(dlg);
   }
   if(!dlg.open)dlg.showModal();
  });
  const title=header.querySelector(".md-header__title");
  if(title)title.insertAdjacentElement("afterend",btn);else header.append(btn);
 }
 function initQuadraticPlot(){
  document.querySelectorAll("[data-thpt-quadratic-plot] svg").forEach(svg=>{
   if(svg.dataset.r4Plotted==="1")return;
   svg.dataset.r4Plotted="1";
   const ns="http://www.w3.org/2000/svg";
   const xmin=-0.3,xmax=4.3,ymin=-1.5,ymax=5.2;
   const sx=x=>55+(x-xmin)/(xmax-xmin)*535;
   const sy=y=>315-(y-ymin)/(ymax-ymin)*270;
   function elt(tag,attrs,text){
    const node=document.createElementNS(ns,tag);
    Object.entries(attrs).forEach(([k,v])=>node.setAttribute(k,String(v)));
    if(text!==undefined)node.textContent=text;
    svg.append(node);return node;
   }
   for(let x=0;x<=4;x++){
    elt("line",{x1:sx(x),y1:45,x2:sx(x),y2:315,stroke:"#d1d9e8","stroke-width":.8});
    elt("text",{x:sx(x),y:332,"text-anchor":"middle",fill:"#5a6a81","font-size":13},String(x));
   }
   for(let y=-1;y<=5;y++){
    elt("line",{x1:55,y1:sy(y),x2:590,y2:sy(y),stroke:"#d1d9e8","stroke-width":.8});
    elt("text",{x:47,y:sy(y)+4,"text-anchor":"end",fill:"#5a6a81","font-size":12},String(y));
   }
   elt("line",{x1:55,y1:sy(0),x2:596,y2:sy(0),stroke:"#50627d","stroke-width":1.6});
   elt("line",{x1:sx(0),y1:43,x2:sx(0),y2:317,stroke:"#50627d","stroke-width":1.6});
   elt("line",{x1:sx(2),y1:45,x2:sx(2),y2:315,stroke:"#8e9ab0","stroke-dasharray":"5 5","data-thpt-symmetry-axis":"x=2"});
   elt("text",{x:sx(2)+8,y:58,fill:"#465576","font-size":13},"x = 2");
   let d="";
   for(let i=0;i<=180;i++){
    const x=xmin+(xmax-xmin)*i/180,y=x*x-4*x+3;
    d+=(i?"L":"M")+sx(x).toFixed(2)+" "+sy(y).toFixed(2)+" ";
   }
   elt("path",{d,fill:"none",stroke:"#354fc6","stroke-width":3,"stroke-linecap":"round"});
   for(const [x,y,name]of [[1,0,"(1;0)"],[3,0,"(3;0)"],[2,-1,"I(2;−1)"],[0,3,"(0;3)"]]){
    elt("circle",{cx:sx(x),cy:sy(y),r:5,fill:"#22796f",stroke:"#ffffff","stroke-width":1.5});
    const dx=x===1?-48:12;
    const dy=y===0?-12:4;
    elt("text",{x:sx(x)+dx,y:sy(y)+dy,fill:"#164c45","font-size":13,"font-weight":"bold"},name);
   }
  });
 }

 function init() {
  initTHPTLauncher();
  initQuadraticPlot();
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
    document.querySelectorAll(selector).forEach(area=>{
     if(area.dataset.thptR4Bound==="1")return;
     area.dataset.thptR4Bound="1";
     const form=area.querySelector("form"),feedback=area.querySelector("[data-thpt-feedback]");
     if(!form||!feedback)return;
     form.addEventListener("submit",ev=>{
      ev.preventDefault();
      const val=form.querySelector('input[name="answer"]:checked')?.value;
      feedback.textContent=!val?"Chọn một đáp án trước khi kiểm tra.":val===correct?good:bad;
     });
    });
   }
   document.querySelectorAll("[data-thpt-readiness]").forEach(area=>{
    if(area.dataset.thptR4Bound==="1")return;
    // Require explicit non-credit QA scope before binding the two-question demonstration.
    if(area.dataset.demoScope!=="TECHNICAL_DEMO_ONLY"||area.dataset.masteryCredit!=="false")return;
    area.dataset.thptR4Bound="1";
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
     result.textContent="Kết quả Demo kỹ thuật (không tính tiến độ): "+score+" / "+queries.length+". Lời giải chỉ hiện sau lần nộp này.";
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