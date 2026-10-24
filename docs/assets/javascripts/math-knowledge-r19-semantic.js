
/* R19 official Knowledge reading: semantics are authored in source-backed MkDocs tabs;
   here only accessible controls/reading ergonomics. Never write learner evidence. */
(()=>{"use strict";
  function setup(){
    const m=location.pathname.match(/(?:^|\/)kien-thuc\/(\d\d-[^/]+)\/(?:index\.html)?$/);
    if(!m||m[1].startsWith("01-"))return;
    const root=document.querySelector(".md-content__inner.md-typeset");
    if(!root||root.dataset.mathKnowledgeR19==="1")return;
    const core=root.querySelector("details.topic-learning-card#core");
    const types=root.querySelector("details.topic-learning-card#types");
    if(!core||!types)return;
    root.dataset.mathKnowledgeR19="1";root.classList.add("math-knowledge-r19");
    for(const id of ["map","goals","core","types"]){
      const card=root.querySelector("details.topic-learning-card#"+id);
      if(card)card.open=true;
    }
    for(const card of [core,types]){
      card.addEventListener("click",e=>{if(e.target.closest("summary")===card.querySelector(":scope > summary"))e.preventDefault()},true);
    }
    const nav=root.querySelector(".topic-workspace-nav-list");
    if(nav){
      nav.innerHTML='<a href="#map">Bản đồ</a><a href="#goals">Mục tiêu</a><a href="#core">Kiến thức</a><a href="#types">Dạng bài</a><a href="#practice">Luyện tập</a><a href="#check">Readiness</a>';
    }
    const map=root.querySelector("#map .topic-learning-card-body");
    if(map&&!map.querySelector(".mk-map-source")){
      const code=map.querySelector("pre");
      if(code&&code.textContent.split("\n").length>12){
        const headings=code.textContent.split("\n").filter(line=>/^[├└]──\s+/.test(line.trim())).map(line=>line.trim().replace(/^[├└]──\s*/,"").replace(/^\d+\.\s*/,"")).slice(0,7);
        if(headings.length>2){
          const chips=document.createElement("div");chips.className="mk-map-compact";
          headings.forEach(x=>{const tag=document.createElement("span");tag.textContent=x;chips.append(tag)});
          code.before(chips);
        }
        const disclosure=document.createElement("details");
        disclosure.className="mk-map-source";
        const sum=document.createElement("summary");sum.textContent="Xem bản đồ chi tiết";
        code.before(disclosure);disclosure.append(sum,code);
      }
    }
    // CT10's proven two native 5-tab groups already own their pager/deeplinks.
    if(!root.querySelector("#ct10-pilot-r4")){
      for(const group of [core,types]){
        const set=group.querySelector(".tabbed-set");
        if(!set)continue; // CT04's honest short table need not fabricate methods.
        const labels=[...set.querySelectorAll(".tabbed-labels label[for]")];
        const inputs=labels.map(l=>document.getElementById(l.htmlFor));
        const panels=[...set.querySelectorAll(".tabbed-content > .tabbed-block")];
        if(labels.length<2||labels.length!==panels.length||inputs.some(x=>!x))continue;
        const zone=group.id, key="mk-"+m[1].slice(0,2)+"-"+zone;
        const tabs=set.querySelector(".tabbed-labels");
        tabs.setAttribute("role","tablist");tabs.setAttribute("aria-label",zone==="core"?"Các nhóm kiến thức":"Các nhóm dạng bài");
        function choose(i,updateUrl=false,focus=false){
          const inp=inputs[i];if(!inp)return;
          inp.checked=true;inp.dispatchEvent(new Event("change",{bubbles:true}));
          labels.forEach((l,n)=>{l.setAttribute("aria-selected",String(i===n));l.tabIndex=n===i?0:-1});
          pages.forEach((p,n)=>{p.hidden=n!==i;p.setAttribute("aria-hidden",String(n!==i))});
          footers.forEach((f,n)=>{f.hidden=n!==i});
          if(focus)labels[i].focus();
          if(updateUrl)history.pushState({mkTab:key}, "", "#"+key+"-"+(i+1));
          if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([panels[i]]).catch(()=>{});
        }
        const pages=panels,footers=[];
        labels.forEach((l,i)=>{
          l.setAttribute("role","tab");
          l.id=key+"-tab-"+(i+1);
          l.setAttribute("aria-controls",key+"-panel-"+(i+1));
          panels[i].id=key+"-panel-"+(i+1);
          panels[i].setAttribute("role","tabpanel");
          panels[i].setAttribute("aria-labelledby",l.id);
          panels[i].tabIndex=0;
          l.addEventListener("click",()=>choose(i,true));
          l.addEventListener("keydown",e=>{
            const n=labels.length,idx=({ArrowRight:(i+1)%n,ArrowLeft:(i+n-1)%n,Home:0,End:n-1})[e.key];
            if(idx===undefined)return;e.preventDefault();choose(idx,true,true);
          });
          const footer=document.createElement("nav");footer.className="mk-tab-footer";
          footer.setAttribute("aria-label","Điều hướng trong nhóm");
          const prev=document.createElement("button");prev.type="button";prev.textContent="← Trước";prev.disabled=i===0;
          prev.addEventListener("click",()=>choose(i-1,true,true));
          const counter=document.createElement("span");counter.textContent=(i+1)+" / "+labels.length;
          const next=document.createElement("button");next.type="button";next.textContent="Tiếp →";next.disabled=i===labels.length-1;
          next.addEventListener("click",()=>choose(i+1,true,true));
          footer.append(prev,counter,next);panels[i].appendChild(footer);footers.push(footer);
        });
        function restore(){const hash=location.hash.match(new RegExp("^#"+key+"-(\\d+)$"));choose(hash?Math.max(0,Math.min(labels.length-1,+hash[1]-1)):inputs.findIndex(x=>x.checked)||0)}
        window.addEventListener("popstate",restore);window.addEventListener("hashchange",restore);
        restore();
      }
    }
    const last=root.querySelector("details.topic-learning-card#finish");
    if(last&&!root.querySelector(".mk-next-steps")){
      const box=document.createElement("section");box.className="mk-next-steps";
      box.innerHTML="<h2>Học tiếp và luyện tập</h2><p>Đọc kiến thức xong, em có thể chuyển đến phần luyện hoặc tự kiểm tra độc lập.</p>";
      const add=(href,label)=>{const a=document.createElement("a");a.href=href;a.textContent=label;box.appendChild(a)};
      if(root.querySelector('#core-journey.topic-core-gateway'))add("core/","Học Core →");
      add("bai-tap/","Luyện kỹ năng →");add("tu-kiem-tra/","Readiness →");
      const number=m[1].slice(0,2);
      if(!["22","25"].includes(number))add("../../luyen-tap/tu-luan/?topic=CT"+number,"Bài tự luận →");
      last.after(box);
    }
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",setup);else setup();
  if(window.document$?.subscribe)window.document$.subscribe(setup);
})();