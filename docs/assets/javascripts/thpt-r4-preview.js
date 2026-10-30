/* R4 learning-pilot-only helpers: all selectors scoped under data-thpt-r4, no storage/network. */
(() => {
 "use strict";

 // Cover-page navigation is not a THCS or THPT lesson sidebar.
 // Only replace the root selector's native drawer list. No change to
 // /thcs/, its 7+25 navigation, storage or existing header controls.
 function initProgramSelectorDrawer(){
  const cover=document.querySelector("[data-math-program-selector]");
  if(!cover)return;
  const primary=document.querySelector(".md-sidebar--primary nav.md-nav--primary");
  const list=primary?.querySelector(":scope > ul.md-nav__list");
  if(!list||list.dataset.mathProgramDrawerReady==="1")return;
  list.dataset.mathProgramDrawerReady="1";
  list.replaceChildren();
  for(const item of [
   ["Chọn chương trình","./"],
   ["Toán THCS · Lớp 6–9","thcs/"],
   ["Toán THPT · Lớp 10–12","thpt-preview/home/"]
  ]){
   const li=document.createElement("li");
   li.className="md-nav__item";
   const a=document.createElement("a");
   a.href=item[1];a.className="md-nav__link";
   if(item[1]==="./"){li.classList.add("md-nav__item--active");a.classList.add("md-nav__link--active")}
   const span=document.createElement("span");
   span.className="md-ellipsis";span.textContent=item[0];
   a.append(span);li.append(a);list.append(li);
  }
  const pending=document.createElement("li");
  pending.className="md-nav__item";
  const label=document.createElement("span");
  label.className="md-nav__link";
  label.setAttribute("aria-disabled","true");
  const title=document.createElement("span");
  title.className="md-ellipsis";title.textContent="SAT/ACT · Chưa phát hành";
  label.append(title);pending.append(label);list.append(pending);
 }
 
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
   ["Trang chủ THPT","home/"],["Học theo SGK","sgk/"],
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
    dlg.setAttribute("aria-label","Điều hướng nhanh Toán THPT");
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
    // The programme cover is above all THPT learning groups.
    // It is not a sixth group and does not change Golden 5+1.
    const coverNav=document.createElement("nav");
    coverNav.className="roadmap-main-quick__links";
    coverNav.setAttribute("aria-label","Cổng chọn chương trình Toán");
    const coverLink=document.createElement("a");
    coverLink.href=match[1];
    coverLink.textContent="⌂ Chọn chương trình";
    coverLink.dataset.mathProgramCoverLink="1";
    coverNav.appendChild(coverLink);
    const topicNav=document.createElement("nav");topicNav.className="roadmap-topic-dialog__list";
    topicNav.setAttribute("aria-label","Các chuyên đề mẫu THPT");
    for(const [label,url]of topics){
     const a=document.createElement("a");a.href=base+url;a.textContent=label;topicNav.append(a);
    }
    dlg.append(heading,coverNav,section,hint,topicNav);
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

 function initAdaptiveKnowledgeTabs(){
  const route=location.pathname;
  document.body.classList.toggle("thpt-r4-topic-knowledge",
    /\/(thpt-preview|thpt)\/(chuyen-de\/ham-so\/kien-thuc|qa\/adaptive-knowledge-tabs)\/?(?:index\.html)?$/.test(route));
  document.querySelectorAll("[data-thpt-knowledge-layout]").forEach(root=>{
    if(root.dataset.knowledgeReady==="1")return;
    root.dataset.knowledgeReady="1";
    // Scope to DIRECT children: module tabs and nested content tabs are independent.
    const nav=root.querySelector(":scope > .thpt-r4-knowledge-tabs");
    const buttons=nav?[...nav.querySelectorAll(":scope > [data-thpt-knowledge-tab]")]:[];
    const panels=[...root.querySelectorAll(":scope > [data-thpt-knowledge-panel]")];
    if(!buttons.length||buttons.length!==panels.length)return;
    const activate=id=>{
      for(const btn of buttons){
        const selected=btn.dataset.thptKnowledgeTab===id;
        btn.classList.toggle("is-active",selected);
        btn.setAttribute("aria-selected",String(selected));
        btn.tabIndex=selected?0:-1;
      }
      for(const panel of panels)panel.hidden=panel.dataset.thptKnowledgePanel!==id;
    };
    buttons.forEach((btn,index)=>{
      btn.addEventListener("click",()=>activate(btn.dataset.thptKnowledgeTab));
      btn.addEventListener("keydown",event=>{
        if(!["ArrowLeft","ArrowRight","Home","End"].includes(event.key))return;
        event.preventDefault();
        const next=event.key==="Home"?0:event.key==="End"?buttons.length-1:
          (index+(event.key==="ArrowRight"?1:-1)+buttons.length)%buttons.length;
        activate(buttons[next].dataset.thptKnowledgeTab);
        buttons[next].focus();
      });
    });
    activate(buttons[0].dataset.thptKnowledgeTab);
  });
 }


 // SGK Chapter Practice: one button/card, one modal, never a cloned canonical ID.
 // B16 uses the ORIGINAL exercise markup from existing SGK Core/Topic Practice URLs.
 // Other cards use TECHNICAL_DEMO_ONLY prompts, not production item records.
 function initChapterPracticeCards(){
  const root=document.querySelector("[data-thpt-practice-hub]");
  if(!root||root.dataset.thptModalReady==="1")return;
  root.dataset.thptModalReady="1";
  const demoSets={
   "b15-core":[
    ["Với f(x)=√(x−1), điều kiện của x là gì?",["x≥1","x≤1","x≠1"],0,"Vì x−1≥0 nên x≥1.","Để căn thức có nghĩa, biểu thức dưới căn không âm."],
    ["Với f(x)=2x+1, f(2) bằng bao nhiêu?",["3","5","4"],1,"f(2)=2·2+1=5.","Thay x=2 vào công thức."]
   ],
   "b15-practice":[
    ["Điểm nào thuộc đồ thị y=2x+1?",["(2;4)","(2;5)","(2;6)"],1,"Khi x=2 thì y=5.","Thử thay hoành độ của từng điểm."],
    ["Hàm số y=−3x+7 trên ℝ là:",["Đồng biến","Nghịch biến","Không xác định"],1,"Hệ số góc −3<0 nên hàm nghịch biến.","Xét f(x₂)−f(x₁) khi x₂>x₁."]
   ],
   "b17-core":[
    ["Tam thức f(x)=2x²+3x+5 có Δ bằng:",["−31","31","49"],0,"Δ=3²−4·2·5=−31.","Δ=b²−4ac."],
    ["Với a>0, Δ<0, tam thức bậc hai có dấu:",["Luôn âm","Luôn dương","Đổi dấu hai lần"],1,"Không có nghiệm thực và a>0 nên f(x)>0 trên ℝ.","Định lý dấu tam thức."]
   ],
   "b17-practice":[
    ["Giải x²−5x+6<0:",["x<2 hoặc x>3","2<x<3","2≤x≤3"],1,"(x−2)(x−3)<0 khi 2<x<3.","Ngoài hai nghiệm cùng dấu a, giữa hai nghiệm trái dấu a."],
    ["Giải −(x−2)²≤0:",["Vô nghiệm","x=2","Mọi x∈ℝ"],2,"Bình phương luôn ≥0 nên số đối luôn ≤0.","Dấu của bình phương."]
   ],
   "b18-core":[
    ["Giải √(x+2)=x, trước khi bình phương cần:",["x≥0","x<0","x≥−2 là đủ"],0,"Vế phải x phải không âm; điều kiện cần x≥0.","Vế căn thức không âm."],
    ["Nghiệm x=−1 sau khi bình phương √(x+2)=x là:",["Được giữ","Bị loại","Luôn đúng"],1,"−1 không thỏa vế phải không âm và phương trình gốc.","Luôn thử lại nghiệm sau bình phương."]
   ],
   "b18-practice":[
    ["Tập nghiệm của √(x+2)=x là:",["{−1;2}","{2}","{−1}"],1,"x²−x−2=0 cho −1 và 2; chỉ 2 thỏa x≥0.","Bình phương rồi thử nghiệm ứng viên."],
    ["Giải √(x+5)=√(2x+1):",["x=4","x=−4","x=1"],0,"Bình phương được x+5=2x+1, x=4; thử lại thỏa.","Hai căn bằng nhau khi hai biểu thức xác định và bằng nhau."]
   ]
  };
  const src={
   "b16-core":["../../core/ham-so-bac-hai/","[data-thpt-core]"],
   "b16-practice":["../../../chuyen-de/ham-so/luyen-tap/","[data-thpt-practice]"]
  };
  const lessonTitle={"1":"Mệnh đề","2":"Tập hợp và các phép toán trên tập hợp","3":"Bất phương trình bậc nhất hai ẩn","4":"Hệ bất phương trình bậc nhất hai ẩn","15":"Hàm số","16":"Hàm số bậc hai","17":"Dấu của tam thức bậc hai","18":"Phương trình quy về phương trình bậc hai","19":"Phương trình đường thẳng","20":"Vị trí, góc và khoảng cách","21":"Đường tròn","22":"Ba đường conic","23":"Quy tắc đếm","24":"Hoán vị, chỉnh hợp và tổ hợp","25":"Nhị thức Newton","26":"Biến cố và xác suất cổ điển","27":"Thực hành tính xác suất cổ điển"};
  const dlg=document.createElement("dialog");
  dlg.className="thpt-r4-practice-dialog";
  dlg.dataset.thptR4="1"; // Eligible root for existing R4 exercise binder when remote card is inserted.
  dlg.setAttribute("aria-label","Luyện tập Toán THPT");
  dlg.innerHTML='<div class="thpt-r4-modal-top"><span class="thpt-r4-modal-lesson-badge" data-thpt-modal-lesson-number aria-hidden="true">15</span><div class="thpt-r4-modal-heading"><p class="thpt-r4-modal-meta">LỚP 10 · CHƯƠNG VI</p><h2 data-thpt-modal-title>Luyện tập</h2></div><button type="button" data-thpt-modal-close aria-label="Đóng cửa sổ">Đóng ×</button></div><div class="thpt-r4-modal-main" data-thpt-modal-body></div>';
  document.body.append(dlg);
  const modalBody=dlg.querySelector("[data-thpt-modal-body]");
  const modalTitle=dlg.querySelector("[data-thpt-modal-title]");
  let returnFocus=null;
  const close=()=>dlg.close();
  dlg.querySelector("[data-thpt-modal-close]").addEventListener("click",close);
  dlg.addEventListener("click",event=>{if(event.target===dlg)close()});
  dlg.addEventListener("close",()=>returnFocus?.focus());
  const showDemo=(items)=>{
   let index=0;const selections=items.map(()=>null),checked=items.map(()=>false);
   modalBody.replaceChildren();
   const hintText=document.createElement("p");
   const progress=document.createElement("p");progress.className="thpt-r4-modal-progress";
   const numbers=document.createElement("div");numbers.className="thpt-r4-modal-question-nav";
   const question=document.createElement("div");
   const footer=document.createElement("div");footer.className="thpt-r4-modal-buttons";
   const prev=document.createElement("button"),next=document.createElement("button");
   prev.textContent="← Câu trước";next.textContent="Câu tiếp →";prev.type=next.type="button";
   const render=()=>{
    progress.textContent="Câu "+(index+1)+" / "+items.length+" · Tự luyện";
    numbers.replaceChildren();items.forEach((_,n)=>{const b=document.createElement("button");b.type="button";b.textContent="Câu "+(n+1);b.className=n===index?"active":"";b.setAttribute("aria-current",String(n===index));b.addEventListener("click",()=>{index=n;render()});numbers.append(b)});
    question.replaceChildren();
    const p=document.createElement("h3");p.textContent=items[index][0];question.append(p);
    const form=document.createElement("form"),group=document.createElement("fieldset");group.className="thpt-r4-modal-options";
    items[index][1].forEach((option,n)=>{const lab=document.createElement("label"),radio=document.createElement("input");radio.type="radio";radio.name="answer";radio.value=String(n);radio.checked=selections[index]===n;radio.addEventListener("change",()=>{selections[index]=n;checked[index]=false});lab.append(radio,document.createTextNode(option));group.append(lab)});
    const hint=document.createElement("details"),summary=document.createElement("summary");summary.textContent="💡 Gợi ý";hint.append(summary,document.createTextNode(items[index][4]));
    const submit=document.createElement("button");submit.type="submit";submit.className="thpt-r4-practice-open";submit.textContent="Kiểm tra câu này";
    const result=document.createElement("p");result.setAttribute("role","status");
    if(checked[index])result.textContent=selections[index]===items[index][2]?"Đúng. "+items[index][3]:"Chưa đúng. "+items[index][3];
    form.append(group,hint,submit,result);form.addEventListener("submit",e=>{e.preventDefault();if(selections[index]===null){result.textContent="Hãy chọn một đáp án.";return}checked[index]=true;result.textContent=selections[index]===items[index][2]?"Đúng. "+items[index][3]:"Chưa đúng. "+items[index][3]});
    question.append(form);
    prev.disabled=index===0;next.disabled=index===items.length-1;
   };
   prev.addEventListener("click",()=>{if(index>0){index--;render()}});
   next.addEventListener("click",()=>{if(index<items.length-1){index++;render()}});
   footer.append(prev,next);modalBody.append(progress,numbers,question,footer);
   render();
  };

  // Reviewed public FORMATIVE items only. These are not chapter Readiness.
  // Each item has one canonical record in thpt-chvi-reviewed-formative-v1.js;
  // the SGK card chooses a role-based placement without cloning content.
  const reviewed=window.THPT_CHVI_REVIEWED_FORMATIVE;
  const showReviewed=(items,requestedItem)=>{
   let index=items.findIndex(item=>item.item_id===requestedItem);
   if(index<0)index=0;
   const root=document.createElement("section");
   root.className="thpt-r4-reviewed-formative";
   root.dataset.thptReviewedFormative="1";
   const head=document.createElement("p");head.className="thpt-r4-modal-progress";
   const tabs=document.createElement("div");tabs.className="thpt-r4-modal-question-nav";
   const card=document.createElement("article");card.className="thpt-r4-reviewed-formative-card";
   const footer=document.createElement("div");footer.className="thpt-r4-modal-buttons";
   const prev=document.createElement("button"),next=document.createElement("button");
   prev.type=next.type="button";prev.textContent="← Câu trước";next.textContent="Câu tiếp →";
   const render=()=>{
    const item=items[index];card.replaceChildren();tabs.replaceChildren();
    card.dataset.thptCanonicalItem=item.item_id;
    const exposureRole=item.role==="CORE"?"SGK_CORE":
      item.role==="APPLICATION"?"SGK_CHAPTER_APPLICATION":"SGK_PRACTICE";
    card.dataset.thptExposureRole=exposureRole;
    // This is only best-effort authenticated exposure telemetry. Missing
    // credentials or an inactive backend is NOT evidence of unseen material.
    void window.THPTFormativeExposure?.record(item.item_id,exposureRole,"QUESTION_SHOWN");
    head.textContent="Câu "+(index+1)+" / "+items.length+
      " · Tự luyện, không ghi điểm";
    for(let i=0;i<items.length;i++){
     const button=document.createElement("button");button.type="button";
     button.textContent="Câu "+(i+1);button.className=i===index?"active":"";
     button.setAttribute("aria-current",String(i===index));
     button.addEventListener("click",()=>{index=i;render()});tabs.append(button);
    }
    const meta=document.createElement("p");meta.className="thpt-r4-modal-progress";
    meta.textContent="Bài "+item.lesson+" · "+
      (item.role==="CORE"?"Kiến thức cơ bản":item.role==="APPLICATION"?"Vận dụng":"Luyện tập")+
      (item.role==="OPTIONAL_SPECIALIZED"?" · Chuyên sâu tự chọn":"")+
      (item.role==="SUPPORT_EXTENSION"?" · Mở rộng tự chọn":"")+
      (item.difficulty==="ADVANCED"?" · Nâng cao":"");
    const prompt=document.createElement("h3");prompt.textContent=item.stem;
    const options=Array.isArray(item.options)&&item.options.length===4?document.createElement("div"):null;
    if(options){options.className="thpt-r4-formative-options";for(const choice of item.options){const p=document.createElement("p");p.textContent=choice;options.append(p)}}
    const hint=document.createElement("details"),hintSummary=document.createElement("summary");
    hintSummary.textContent="💡 Xem gợi ý (tự chọn)";
    hint.append(hintSummary,document.createTextNode(item.hint));
    const solution=document.createElement("details"),solutionSummary=document.createElement("summary");
    solutionSummary.textContent="Xem đáp án và lời giải sau khi tự làm";
    solution.append(solutionSummary,document.createTextNode(item.solution));
    // D5-reviewed figures are *answer-bearing*. Load an exact shared SVG ONLY
    // when the learner deliberately expands the formative solution, never
    // alongside an unanswered Core/Practice prompt or held-out Readiness.
    const reviewedFigures={
     "THPT-G10-B23-C02":["THPT_G10_B23_COUNTING_TREE_DRAFT.svg",
       "Cây quy tắc nhân: ba áo, hai quần, sáu bộ; chỉ xem sau khi tự giải"],
     "THPT-G10-B19-P06":["THPT_G10_B19_LINE_INTERSECTION_DRAFT.svg",
       "Hình giải B19-P06: giao điểm I(2;2), hai đường và đường vuông góc cần tìm"],
     "THPT-G10-B21-P03":["THPT_G10_B21_CIRCLE_TANGENT_DRAFT.svg",
       "Hình giải B21-P03: đường tròn tâm I(1;−1), tiếp tuyến x=3 tại H(3;−1)"],
     "THPT-G10-B22-P06":["THPT_G10_B22_PARABOLA_FOCUS_DIRECTRIX_DRAFT.svg",
       "Hình giải B22-P06: tiêu điểm, đường chuẩn và hai khoảng cách bằng nhau"]
    };
    const figure=reviewedFigures[item.item_id];
    if(figure){
     solution.dataset.thptSolutionFigureItem=item.item_id;
     solution.addEventListener("toggle",()=>{
      if(!solution.open||solution.dataset.figureLoaded==="1")return;
      const match=location.pathname.match(/^(.*?\/)(?:thpt-preview|thpt)\//);
      if(!match)return;
      const img=document.createElement("img");
      img.className="thpt-r4-reviewed-solution-figure";
      img.alt=figure[1];
      img.loading="lazy";img.decoding="async";
      img.src=match[1]+"assets/images/thpt/"+figure[0];
      img.dataset.thptReviewedFigure=item.item_id;
      const caption=document.createElement("p");
      caption.className="thpt-r4-reviewed-solution-caption";
      caption.textContent="Hình minh họa lời giải";
      solution.append(img,caption);
      solution.dataset.figureLoaded="1";
     });
    }
    // D6 learner recovery: link to the existing S1 lesson without adding math.
    const reviewLesson=document.createElement("a");
    reviewLesson.className="thpt-r4-remediation-link";
    reviewLesson.textContent="↶ Ôn lại kiến thức Bài "+item.lesson;
    const matchPath=location.pathname.match(/^(.*?\/)(?:thpt-preview|thpt)\//);
    const chapter=Number(item.lesson)<=2?"i":Number(item.lesson)<=4?"ii":Number(item.lesson)<=18?"vi":Number(item.lesson)<=22?"vii":Number(item.lesson)<=25?"viii":"ix";
    reviewLesson.href=matchPath?
      matchPath[0]+"sgk/chuong-"+chapter+"/bai-"+item.lesson+"/":
      "../bai-"+item.lesson+"/";
    const note=document.createElement("p");note.className="thpt-r4-modal-progress";
    note.textContent="Tự luyện và đối chiếu lời giải · Không ghi điểm thành thạo.";
    card.append(meta,prompt,...(options?[options]:[]),hint,solution,reviewLesson,note);
    // Only public formative text is typeset; never load any held-out readiness
    // prompts or answer keys into the browser.
    if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([card]).catch(()=>{});
    prev.disabled=index===0;next.disabled=index===items.length-1;
   };
   prev.addEventListener("click",()=>{if(index>0){index--;render()}});
   next.addEventListener("click",()=>{if(index<items.length-1){index++;render()}});
   footer.append(prev,next);root.append(head,tabs,card,footer);
   modalBody.replaceChildren(root);
   render();
  };

  // Cumulative exercises remain one backing source, assigned to eligible
  // lesson Practice modals instead of a separate chapter page/menu.
  const cumulativeSections={"15":["A1"],"16":["A2","B3"],"17":["A3","A4","B4"],"18":["B1","B2"]};
  const attachCumulative=lesson=>{
   const footer=document.createElement("div");
   footer.className="thpt-r4-modal-cumulative";
   const button=document.createElement("button");
   button.type="button";button.className="thpt-r4-modal-cumulative-button";
   button.textContent="Bài vận dụng tổng hợp của Bài "+lesson+" (nháp)";
   button.setAttribute("aria-expanded","false");
   const holder=document.createElement("div");holder.hidden=true;
   holder.className="thpt-r4-modal-cumulative-pane";
   button.addEventListener("click",async()=>{
    const visible=button.getAttribute("aria-expanded")==="true";
    if(visible){holder.hidden=true;button.setAttribute("aria-expanded","false");return}
    if(!holder.dataset.loaded){
     holder.textContent="Đang lấy bài tổng hợp từ nguồn học liệu chương…";
     try{
      const response=await fetch(new URL("../bai-tap-cuoi-chuong/",location.href),{credentials:"same-origin"});
      if(!response.ok)throw Error("HTTP "+response.status);
      const doc=new DOMParser().parseFromString(await response.text(),"text/html");
      const heads=[...doc.querySelectorAll("article h3")];
      holder.replaceChildren();
      for(const key of cumulativeSections[lesson]){
       const h=heads.find(x=>x.textContent.trim().startsWith(key+"."));
       if(!h)continue;
       const section=document.createElement("section");
       section.className="thpt-r4-modal-cumulative-item";
       section.append(h.cloneNode(true));
       let next=h.nextElementSibling;
       while(next&&!/^H[23]$/.test(next.tagName)){
        section.append(next.cloneNode(true));
        next=next.nextElementSibling;
       }
       holder.append(section);
      }
      if(!holder.children.length)throw Error("No matching source problems");
      holder.dataset.loaded="1";
      if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([holder]).catch(()=>{});
     }catch(error){holder.textContent="Không tải được bài tổng hợp. Hãy mở lại bài từ trang Chương VI hoặc thử tải lại trang."}
    }
    holder.hidden=false;button.setAttribute("aria-expanded","true");
   });
   footer.append(button,holder);modalBody.append(footer);
  };

  root.querySelectorAll("[data-thpt-open-quiz]").forEach(button=>{
   button.addEventListener("click",async()=>{
    returnFocus=button;
    const id=button.dataset.thptOpenQuiz,parts=id.match(/^b([1-4]|1[5-9]|2[0-7])-(core|practice)$/);
    if(!parts)return;
    const lesson=parts[1],role=parts[2]==="core"?"Core":"Luyện tập";
    dlg.querySelector("[data-thpt-modal-lesson-number]").textContent=lesson;
    dlg.querySelector(".thpt-r4-modal-meta").textContent="LỚP 10 · CHƯƠNG "+(Number(lesson)<=2?"I":Number(lesson)<=4?"II":Number(lesson)>=26?"IX":Number(lesson)>=23?"VIII":Number(lesson)>=19?"VII":"VI");
    modalTitle.textContent=role+" · Bài "+lesson+". "+lessonTitle[lesson];
    modalBody.textContent="Đang mở nội dung…";dlg.showModal();
    const activeBank=Number(lesson)<=2?window.THPT_CHI_REVIEWED_FORMATIVE:Number(lesson)<=4?window.THPT_CHII_REVIEWED_FORMATIVE:Number(lesson)>=26?window.THPT_CHIX_REVIEWED_FORMATIVE:Number(lesson)>=23?window.THPT_CHVIII_REVIEWED_FORMATIVE:Number(lesson)>=19?window.THPT_CHVII_REVIEWED_FORMATIVE:reviewed;
    if(activeBank?.validate().valid){
     const items=activeBank.forLesson(lesson,parts[2]);
     if(items.length){
      showReviewed(items,new URLSearchParams(location.search).get("item"));
      if(parts[2]==="practice")attachCumulative(lesson);
      return;
     }
    }
    // Legacy standalone offline previews did not include the new reviewed bank.
    if(demoSets[id]){showDemo(demoSets[id]);if(parts[2]==="practice")attachCumulative(lesson);return}
    try{
     // Import exact canonical source, not a separately copied answer key.
     if(!src[id])throw Error("Không có nguồn formative đã duyệt cho "+id);
     const [relative,selector]=src[id];
     const url=new URL(relative,location.href);
     const response=await fetch(url,{credentials:"same-origin"});
     if(!response.ok)throw Error("HTTP "+response.status);
     const doc=new DOMParser().parseFromString(await response.text(),"text/html");
     const source=doc.querySelector(selector);
     if(!source)throw Error("Không tìm thấy bài trong trang nguồn");
     modalBody.replaceChildren();
     const meta=document.createElement("p");meta.className="thpt-r4-modal-progress";meta.textContent="Bài 16 · Cùng item canonical · Không ghi điểm học sinh";
     modalBody.append(meta,source.cloneNode(true));
     // The existing exercise binder is scoped to uninitialized data-thpt-r4 roots.
     // Re-arm only this modal root; imported card keeps its original canonical key.
     dlg.dataset.thptR4Ready="0";
     init();
     if(parts[2]==="practice")attachCumulative(lesson);
     if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([modalBody]).catch(()=>{});
    }catch(error){
     modalBody.textContent="Chưa tải được bài. Hãy mở lại từ trang SGK hoặc kiểm tra kết nối.";
    }
   });
  });
  // Public formative navigation from the approved D6 help cards only.
  const requestedItem=new URLSearchParams(location.search).get("item");
  const parsed=/^THPT-G10-B(01|02|03|04|19|20|21|22|23|24|25|26|27)-[CP]\d{2}$/.exec(requestedItem||"");
  if(parsed){
   const lesson=parsed[1], bank=Number(lesson)<=2?window.THPT_CHI_REVIEWED_FORMATIVE:Number(lesson)<=4?window.THPT_CHII_REVIEWED_FORMATIVE:Number(lesson)>=26?window.THPT_CHIX_REVIEWED_FORMATIVE:Number(lesson)>=23?window.THPT_CHVIII_REVIEWED_FORMATIVE:window.THPT_CHVII_REVIEWED_FORMATIVE;
   if(bank?.validate().valid){
    const placement=["core","practice"].find(role=>bank.forLesson(lesson,role).some(item=>item.item_id===requestedItem));
    const trigger=placement?root.querySelector('[data-thpt-open-quiz="b'+Number(lesson)+'-'+placement+'"]'):null;
    trigger?.click();
   }
  }
 }


 // THPT route-only navigation behavior, preserving MkDocs Material's native
 // drawer and link semantics. All nested sidebar sections start collapsed.
 let sidebarBreakpointObserverSet=false;
 function initTHPTPrimarySidebar(){
  const path=location.pathname;
  const isTHPT=/\/(?:thpt-preview|thpt)\//.test(path);
  if(!isTHPT){document.body.classList.remove("thpt-r4-home");return}
  const isHome=/\/(?:thpt-preview|thpt)\/home\/?(?:index\.html)?$/.test(path);
  document.body.classList.toggle("thpt-r4-home",isHome);
  if(isHome)return;
  const sidebar=document.querySelector(".md-sidebar--primary");
  const primary=sidebar?.querySelector("nav.md-nav--primary");
  if(!primary)return;
  const groups=[...primary.querySelectorAll("li.md-nav__item--nested")];
  // Material uses a stacked mobile drawer below this breakpoint. Nested
  // input/label elements are native navigation controls on iPad/iPhone,
  // not accordion rows. Resetting them hides the three top-level names.
  const compactDrawer=window.matchMedia("(max-width: 76.234375em)");
  if(!sidebarBreakpointObserverSet){
   sidebarBreakpointObserverSet=true;
   const reinit=()=>initTHPTPrimarySidebar();
   if(compactDrawer.addEventListener)compactDrawer.addEventListener("change",reinit);
   else compactDrawer.addListener(reinit);
  }
  if(compactDrawer.matches){
   // Start each new mobile route at the three visible group labels,
   // rather than inheriting Material's checked active subsections.
   // Reset just once per route so user disclosure clicks still work.
   const resetForPath=primary.dataset.thptR4MobileResetPath!==path;
   primary.dataset.thptR4MobileResetPath=path;
   groups.forEach(li=>{
    if(!li.classList.contains("thpt-r4-collapsible"))return;
    const nested=li.querySelector(":scope > nav.md-nav");
    const native=li.querySelector(":scope > input.md-nav__toggle");
    li.querySelector(":scope > button.thpt-r4-sidebar-toggle")?.remove();
    li.classList.remove("thpt-r4-collapsible");
    if(nested)nested.hidden=false;
    if(native&&resetForPath)native.checked=false;
    // A stale checked nested nav can sit above the mobile header in the
    // Material stacked drawer. Keep hidden in sync with native toggles,
    // without removing or replacing the visible parent label.
    if(native&&!li.dataset.thptR4MobileBound){
     native.addEventListener("change",()=>{
      if(compactDrawer.matches)nested.hidden=!native.checked;
     });
     li.dataset.thptR4MobileBound="1";
    }
    nested.hidden=native?!native.checked:false;
    delete li.dataset.thptR4SidebarPath;
   });
   return;
  }
  groups.forEach((li,index)=>{
   const nested=li.querySelector(":scope > nav.md-nav");
   if(!nested)return;
   const native=li.querySelector(":scope > input.md-nav__toggle");
   const label=li.querySelector(":scope > label.md-nav__link, :scope > a.md-nav__link");
   let button=li.querySelector(":scope > button.thpt-r4-sidebar-toggle");
   const update=open=>{
    nested.hidden=!open;
    if(native)native.checked=open;
    button?.setAttribute("aria-expanded",String(open));
    if(button)button.textContent=open?"▾":"▸";
   };
   if(!button){
    li.classList.add("thpt-r4-collapsible");
    if(!nested.id)nested.id="thpt-r4-subnav-"+index;
    button=document.createElement("button");
    button.type="button";
    button.className="thpt-r4-sidebar-toggle";
    button.setAttribute("aria-label","Mở hoặc thu gọn "+(label?.textContent?.trim()||"mục điều hướng"));
    button.setAttribute("aria-controls",nested.id);
    li.insertBefore(button,nested);
    button.addEventListener("click",event=>{event.preventDefault();event.stopPropagation();update(nested.hidden)});
    native?.addEventListener("change",()=>{if(!compactDrawer.matches)update(native.checked)});
    if(!native&&label?.tagName==="LABEL"){
     label.addEventListener("click",event=>{event.preventDefault();update(nested.hidden)});
    }
   }
   // On each actual navigation, start collapsed regardless of current/active link.
   // Re-entering the same page does not discard a reader's manual expansion.
   if(li.dataset.thptR4SidebarPath!==path){
    li.dataset.thptR4SidebarPath=path;
    update(false);
   }
  });
 }

 function init() {
  initProgramSelectorDrawer();
  initTHPTPrimarySidebar();
  initAdaptiveKnowledgeTabs();
  initChapterPracticeCards();
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
     if(counter&&!word)counter.textContent=items.length+" mục";
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
    const chapterQuestions=[
      {prompt:"Bài 15 · Hàm f(x) = √(x − 2) xác định với những x nào?",opts:["x ≤ 2","x ≥ 2","mọi x thực"],key:1,reason:"Biểu thức dưới căn không âm khi x − 2 ≥ 0, nên x ≥ 2."},
      {prompt:"Bài 16 · Hàm y = (x − 3)² + 1 có hoành độ đỉnh bằng bao nhiêu?",opts:["−3","3","1"],key:1,reason:"Dạng y = (x − h)² + k cho hoành độ đỉnh h = 3."},
      {prompt:"Bài 17 · Giải bất phương trình (x − 1)(x − 4) < 0.",opts:["x < 1 hoặc x > 4","[1;4]","1 < x < 4"],key:2,reason:"Tam thức có hệ số đầu dương, âm giữa hai nghiệm: (1;4)."},
      {prompt:"Bài 18 · Nghiệm của phương trình √(x + 6) = x là bao nhiêu?",opts:["3","−2 và 3","−2"],key:0,reason:"Cần x ≥ 0. Bình phương cho x² − x − 6 = 0, nghiệm ứng viên 3 và −2; chỉ x = 3 thỏa phương trình gốc."}
    ];
    const topicQuestions=[
      {prompt:"Cho y = (x − 4)² + 2. Tung độ đỉnh là bao nhiêu?",opts:["4","2","−4"],key:1,reason:"Đỉnh I(4;2), tung độ là 2."},
      {prompt:"Cho y = −(x − 1)² + 5. Giá trị lớn nhất bằng bao nhiêu?",opts:["1","−5","5"],key:2,reason:"Hệ số bình phương âm, GTLN bằng 5 tại x = 1."}
    ];
    const isChapter=area.dataset.thptAssessment==="sgk-chapter";
    const queries=isChapter?chapterQuestions:topicQuestions;
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
     if(answers.some(x=>x===null)){result.textContent="Hãy hoàn thành tất cả các câu trước khi Final Submit. Có thể dùng Previous/Next để quay lại sửa.";return}
     finalized=true;
     const score=queries.reduce((n,q,i)=>n+(answers[i]===q.key?1:0),0);
     result.textContent="Kết quả tự luyện (không tính thành thạo): "+score+" / "+queries.length+". Lời giải chỉ hiện sau khi nộp bài.";
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