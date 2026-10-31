
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
    // R30: All four sections are genuine native <details> disclosures.
    // Map and Goals start closed to keep orientation concise; §3/§5 start
    // open so the two approved horizontal teaching-tab groups are visible.
    // Never intercept the summary click: learner must be able to collapse
    // and reopen any of these sections, including with keyboard or touch.
    for(const id of ["map","goals","core","types"]){
      const card=root.querySelector("details.topic-learning-card#"+id);
      if(card)card.open=(id==="core"||id==="types");
      if(card)card.querySelector(":scope > summary .topic-section-badge")?.remove();
    }
    const nav=root.querySelector(".topic-workspace-nav-list");
    if(nav){
      nav.innerHTML='<a href="#map">Bản đồ</a><a href="#goals">Mục tiêu</a><a href="#core">Kiến thức</a><a href="#types">Dạng bài</a><a href="#practice">Luyện tập</a><a href="#check">Readiness</a>';
    }
    let revealingSourceHash=false;
    // A source heading is an anchor, not a new tab-history entry. Its native
    // navigation must create exactly one Back step (and direct hashes none).
    function openSourceTab(label){
      revealingSourceHash=true;
      try{
        // Programmatic source-heading reveal must not synthesize a label click:
        // MkDocs/native label listeners may add their own history entries.
        // Use the semantic tab controller directly once initialized.
        if(typeof label.__mathKnowledgeR19Reveal==="function")label.__mathKnowledgeR19Reveal();
        else label.click(); // CT10 owns its separate, already-approved controller.
      }finally{revealingSourceHash=false}
    }
    // Legacy source H3 anchors must remain usable from the Material right TOC.
    // Reveal their content-family tab before the browser tries to scroll.
    // Capture at window BEFORE Material's document-level click/hash handlers.
    // Otherwise Material can replace the hash before our source-anchor handler.
    window.addEventListener("click",event=>{
      const a=event.target.closest?.('a[href^="#"]');
      // Material may preemptively mark same-page links defaultPrevented.
      // We still need to reveal the source heading and own its one Back step.
      if(!a||event.button!==0||event.ctrlKey||event.metaKey||event.altKey||event.shiftKey)return;
      const id=decodeURIComponent(a.getAttribute("href").slice(1));
      const node=document.getElementById(id);
      if(!node)return;
      const outer=node.closest("details.topic-learning-card");
      if(outer)outer.open=true;
      const block=node.closest(".tabbed-block");
      if(block){
        const content=block.parentElement;
        const idx=[...content.children].indexOf(block);
        const labels=content.closest(".tabbed-set")?.querySelectorAll(".tabbed-labels label");
        if(labels && idx>=0 && labels[idx]){
          const previousHash=location.hash;
          // The URL can refer to the OTHER independent tab group. Save the
          // actual selected tab here so Back restores the learner's reading
          // position, not just the previous hash.
          const priorIndex=[...labels].findIndex(l=>document.getElementById(l.htmlFor)?.checked);
          const priorTab=priorIndex>=0?{zone:outer?.id,index:priorIndex}:null;
          event.preventDefault();
          event.stopPropagation(); // source heading navigation is ours, not Material's
          openSourceTab(labels[idx]);
          const sourceHash="#"+encodeURIComponent(id);
          // Preserve the previous entry's URL and selected tab even if
          // Material synchronously replaced the native #__tabbed_* hash.
          if(previousHash!==sourceHash){
            const oldState=history.state;
            const state=oldState&&typeof oldState==="object"?{...oldState}:{};
            if(priorTab)state.mkPriorTab=priorTab;
            history.replaceState(state,"",previousHash);
            history.pushState({mkSource:id},"",sourceHash);
          }
          requestAnimationFrame(()=>node.scrollIntoView({block:"start"}));
        }
      }
    },true);
    // Also support direct #source-heading URLs and Back/Forward history.
    function revealSourceHash(){
      const hash=decodeURIComponent(location.hash.slice(1));
      if(!hash || /^mk-\d\d-/.test(hash))return;
      const target=document.getElementById(hash);
      const outer=target?.closest("details.topic-learning-card");
      if(outer)outer.open=true;
      const block=target?.closest(".tabbed-block");
      if(block){
        const idx=[...block.parentElement.children].indexOf(block);
        const label=block.closest(".tabbed-set")?.querySelectorAll(".tabbed-labels label")[idx];
        if(label)openSourceTab(label);
      }
    }
    window.addEventListener("hashchange",revealSourceHash);
    window.addEventListener("popstate",revealSourceHash);
    // Initial source hash is resolved AFTER R19 tab controllers are installed.
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
    const ct10Pilot=root.querySelector("#ct10-pilot-r4");
    if(!ct10Pilot){
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
          // An already-active tab is a no-op for navigation history, even if
          // Material's native label/radio handler changes the URL hash.
          // Otherwise tapping the active label can create a phantom Back step.
          const wasSelected=inp.checked;
          inp.checked=true;inp.dispatchEvent(new Event("change",{bubbles:true}));
          labels.forEach((l,n)=>{l.setAttribute("aria-selected",String(i===n));l.tabIndex=n===i?0:-1});
          pages.forEach((p,n)=>{p.hidden=n!==i;p.setAttribute("aria-hidden",String(n!==i))});
          footers.forEach((f,n)=>{f.hidden=n!==i});
          if(focus)labels[i].focus();
          // Re-selecting the active deep link must not add phantom Back entries.
          if(updateUrl && !wasSelected && location.hash!=="#"+key+"-"+(i+1))history.pushState({mkTab:key}, "", "#"+key+"-"+(i+1));
          if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([panels[i]]).catch(()=>{});
        }
        const pages=panels,footers=[];
        labels.forEach((l,i)=>{
          l.__mathKnowledgeR19Reveal=()=>choose(i,false,false);
          l.setAttribute("role","tab");
          l.id=key+"-tab-"+(i+1);
          l.setAttribute("aria-controls",key+"-panel-"+(i+1));
          panels[i].id=key+"-panel-"+(i+1);
          panels[i].setAttribute("role","tabpanel");
          panels[i].setAttribute("aria-labelledby",l.id);
          panels[i].tabIndex=0;
          l.addEventListener("click",()=>choose(i,!revealingSourceHash));
          l.addEventListener("keydown",e=>{
            // Native <label> elements do not reliably activate with Enter/Space
            // when exposed as ARIA tabs (notably with external keyboards on iPad).
            if(e.key==="Enter"||e.key===" "||e.key==="Spacebar"){
              e.preventDefault();choose(i,true,true);return;
            }
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
        function restore(){
          const hash=location.hash.match(new RegExp("^#"+key+"-(\\d+)$"));
          const nativeIndex=inputs.findIndex(input=>location.hash==="#"+input.id);
          const currentIndex=inputs.findIndex(input=>input.checked);
          const prior=history.state?.mkPriorTab;
          const saved=prior?.zone===zone&&Number.isInteger(prior.index)?prior.index:null;
          const index=saved!==null?Math.max(0,Math.min(labels.length-1,saved)):
            hash?Math.max(0,Math.min(labels.length-1,+hash[1]-1)):
            nativeIndex>=0?nativeIndex:Math.max(0,currentIndex);
          choose(index);
        }
        window.addEventListener("popstate",restore);window.addEventListener("hashchange",restore);
        restore();
      }
    }
    if(ct10Pilot){
      // CT10 owns its controller. Wait for its deferred initialization before
      // revealing direct legacy heading hashes; never synthesize a label click.
      window.addEventListener("math-ct10-tabs-ready",revealSourceHash,{once:true});
      if(core.querySelector(".tabbed-labels label")?.__mathKnowledgeR19Reveal)revealSourceHash();
    }else revealSourceHash();
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