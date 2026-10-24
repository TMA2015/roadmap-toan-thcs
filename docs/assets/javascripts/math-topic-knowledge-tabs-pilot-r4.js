/* CT10 topic-knowledge pilot only. Native pymdownx tabs plus accessible prev/next,
   hash/back navigation, deep links. No user data reads or writes. */
(()=>{"use strict";
  const START=()=>{
    const marker=document.getElementById("ct10-pilot-r4");
    if(!marker)return;
    document.body.classList.add("math-topic-pilot-r4");
    const containers=[...document.querySelectorAll(".md-content .tabbed-set")];
    if(containers.length!==2){console.warn("CT10 pilot expected 2 tab groups, got",containers.length);return;}
    const groups=[{key:"kt",el:containers[0],anchor:"ct10-section-knowledge"},{key:"db",el:containers[1],anchor:"ct10-section-types"}];
    let replay=false;
    function locate(g){
      const labels=[...g.el.querySelectorAll(".tabbed-labels label[for]")];
      const blocks=[...g.el.querySelectorAll(".tabbed-content > .tabbed-block")];
      const radios=labels.map(x=>document.getElementById(x.htmlFor));
      return {labels,blocks,radios};
    }
    function select(g,n,hash=false,scroll=false,focus=false){
      const {labels,blocks,radios}=locate(g);if(n<0||n>=labels.length||labels.length!==blocks.length||radios.some(x=>!x))return;
      const wasSelected=radios[n].checked;
      if(!wasSelected){radios[n].checked=true;radios[n].dispatchEvent(new Event("change",{bubbles:true}));}
      labels.forEach((lab,i)=>{const active=i===n;lab.setAttribute("aria-selected",String(active));lab.tabIndex=active?0:-1;blocks[i].hidden=!active});
      labels[n].scrollIntoView({block:"nearest",inline:"nearest",behavior:"instant"});
      if(focus)labels[n].focus({preventScroll:true});
      // Re-activating an already-selected tab must not create a phantom Back step.
      if(hash&&!replay&&!wasSelected&&location.hash!=="#ct10-"+g.key+"-"+(n+1))history.pushState(null,"","#ct10-"+g.key+"-"+(n+1));
      if(scroll){const y=document.getElementById(g.anchor);if(y)y.scrollIntoView({block:"start",behavior:"smooth"});}
    }
    groups.forEach(g=>{
      const {labels,blocks}=locate(g);
      if(labels.length!==5||blocks.length!==5){console.warn("CT10 pilot tab count mismatch",g.key,labels.length,blocks.length);return;}
      g.el.dataset.mathKnowledgeGroup=g.key;
      labels.forEach((label,n)=>{
        // R19 source-heading navigation reveals the correct tab without a second history entry.
        label.__mathKnowledgeR19Reveal=()=>select(g,n,false,false,false);
        label.setAttribute("role","tab");label.setAttribute("aria-controls","ct10-"+g.key+"-panel-"+(n+1));
        label.tabIndex=n===0?0:-1;
        label.addEventListener("click",()=>select(g,n,true,false,false));
        label.addEventListener("keydown",ev=>{
          const count=labels.length;let to=n;
          if(ev.key==="ArrowRight")to=(n+1)%count;
          else if(ev.key==="ArrowLeft")to=(n+count-1)%count;
          else if(ev.key==="Home")to=0;
          else if(ev.key==="End")to=count-1;
          else if(ev.key==="Enter"||ev.key===" "){ev.preventDefault();select(g,n,true,false,true);return;}
          else return;
          ev.preventDefault();select(g,to,true,false,true);
        });
        blocks[n].id="ct10-"+g.key+"-panel-"+(n+1);
        blocks[n].setAttribute("role","tabpanel");
        blocks[n].setAttribute("aria-labelledby",label.id||(label.id="ct10-"+g.key+"-tab-"+(n+1)));
        const footer=document.createElement("nav");footer.className="math-topic-tab-footer";
        footer.setAttribute("aria-label","Điều hướng các phần của "+(g.key==="kt"?"Kiến thức cốt lõi":"Các dạng bài"));
        const button=(txt,delta)=>{
          const b=document.createElement("button");b.type="button";b.textContent=txt;b.disabled=n+delta<0||n+delta>=blocks.length;
          b.addEventListener("click",()=>select(g,n+delta,true,true,false));return b;
        };
        const count=document.createElement("span");count.textContent=(n+1)+" / "+blocks.length;
        footer.append(button("← Phần trước",-1),count,button("Phần tiếp →",1));
        blocks[n].appendChild(footer);
      });
      select(g,0,false,false,false);
    });
    const route=()=>{
      const hash=location.hash.match(/^#ct10-(kt|db)-(\d+)$/);
      const prior=history.state?.mkPriorTab;
      // A source-heading Back may return to a hash belonging to the other
      // independent group; restore the group's actual prior selection too.
      if(prior && (prior.zone==="core"||prior.zone==="types") && Number.isInteger(prior.index)){
        const saved=groups.find(g=>g.key===(prior.zone==="core"?"kt":"db"));
        if(saved){replay=true;select(saved,prior.index,false,false,false);replay=false;}
      }
      if(!hash)return;
      const group=groups.find(g=>g.key===hash[1]),n=Number(hash[2])-1;
      if(!group)return;
      replay=true;select(group,n,false,false,false);replay=false;
      const anchor=document.getElementById(group.anchor);if(anchor)anchor.scrollIntoView({block:"start",behavior:"auto"});
    };
    window.addEventListener("popstate",route);
    window.addEventListener("hashchange",route);
    route();
    window.CT10KnowledgePilotQA=Object.freeze({groups:2,tabs:[5,5],writesLearnerEvidence:false});
    // A direct legacy #source-heading may arrive before this deferred controller.
    window.dispatchEvent(new Event("math-ct10-tabs-ready"));
  };
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",START,{once:true});else START();
})();