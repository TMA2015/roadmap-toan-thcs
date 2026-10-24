/* R17: opt-in Knowledge presentation enhancement. Original Markdown and math data are unchanged.
 * Reparent only a verified sequence of existing nodes; text/math/figure count stays identical.
 * Failure to match source leaves the ordinary vertical reading experience intact.
 */
(() => {
  "use strict";
  const route = () => {
    const pathname = window.location.pathname;
    if (/(?:^|\/)kien-thuc\/05-7-hang-dang-thuc\/(?:index\.html)?$/.test(pathname)) return "CT05";
    if (/(?:^|\/)kien-thuc\/14-tam-giac\/(?:index\.html)?$/.test(pathname)) return "CT14";
    return null;
  };
  const headingWith = (root, prefix) =>
    [...root.querySelectorAll("h3")].find(h => h.textContent.trim().startsWith(prefix));
  const isCodeBlock = node =>
    !!node && (node.matches("pre, .highlight") || !!node.querySelector("pre"));

  function enhanceTwoDirectionalExamples(article) {
    const heading = headingWith(article, "4.2. Hằng đẳng thức dùng theo hai chiều");
    if (!heading || heading.dataset.mathR17) return;
    const p1 = heading.nextElementSibling;
    const code1 = p1?.nextElementSibling;
    const p2 = code1?.nextElementSibling;
    const code2 = p2?.nextElementSibling;
    if (!p1?.matches("p") || !p2?.matches("p") || !isCodeBlock(code1) || !isCodeBlock(code2) ||
        !p1.textContent.includes("Chiều khai triển") || !p2.textContent.includes("Chiều nhận dạng")) return;
    const compare = document.createElement("div");
    compare.className = "mk-r17-compare";
    compare.dataset.mathR17 = "original-nodes-only";
    const left = document.createElement("div");
    left.className = "mk-r17-compare-item";
    const right = document.createElement("div");
    right.className = "mk-r17-compare-item";
    heading.insertAdjacentElement("afterend", compare);
    compare.append(left, right);
    left.append(p1, code1);
    right.append(p2, code2);
    heading.dataset.mathR17 = "1";
  }

  function styleTwoRules(heading, label, snippets) {
    if (!heading || heading.dataset.mathR17) return;
    let lead;
    let rules;
    for (let node=heading.nextElementSibling; node && !node.matches("h2,h3"); node=node.nextElementSibling) {
      if (!lead && node.matches("p") && node.textContent.includes(label)) {
        lead = node;
        rules = node.nextElementSibling;
        break;
      }
    }
    if (!rules?.matches("ul") || rules.children.length !== 2) return;
    const items = [...rules.children];
    if (!items.every((li,i) => li.matches("li") && li.textContent.includes(snippets[i]))) return;
    rules.classList.add("mk-r17-logic-pairs");
    rules.dataset.mathR17 = "original-list-only";
    heading.dataset.mathR17 = "1";
  }

  // R18: one learner-facing route, five actual horizontal content tabs.
  // Never replace academic Markdown, SVGs, assessment state or source-locked IDs.
  function mountUnifiedTabs(article) {
    if (article.dataset.mkUnifiedTabs === "1") return;
    if (!/(?:^|\/)kien-thuc\/(?:0[2-9]|1\d|2[0-5])-[^/]+\/(?:index\.html)?$/.test(location.pathname)) return;
    const cards = [...article.querySelectorAll(":scope > details.topic-learning-card")];
    const groupDefs = [
      { label:"Bản đồ", ids:["map","goals"] },
      { label:"Kiến thức", ids:["core","links"] },
      { label:"Dạng bài", ids:["types","exam","errors"] },
      { label:"Thực hành", ids:["practice","check"] },
      { label:"Tổng kết", ids:["roadmap","finish"] }
    ];
    const byId = new Map(cards.map(card=>[card.id,card]));
    const expected = groupDefs.flatMap(g=>g.ids);
    // Fail open: unknown or missing section layout keeps the canonical old reading.
    if (cards.length!==expected.length || !expected.every(id=>byId.has(id))) return;
    if (!cards.every(card=>card.parentElement===article)) return;
    const shell=document.createElement("section");
    shell.className="mk-unified-tabs";
    shell.setAttribute("aria-label","Nội dung chuyên đề");
    cards[0].before(shell);
    const labels=document.createElement("div");
    labels.className="mk-unified-tablist";
    labels.setAttribute("role","tablist");
    labels.setAttribute("aria-label","Chọn phần học");
    const panes=document.createElement("div");
    panes.className="mk-unified-panes";
    const btns=[], panels=[];
    const idBase="mk-knowledge-"+(location.pathname.match(/\/(\d\d)-/)?.[1]||"topic");
    groupDefs.forEach((g,i)=>{
      const btn=document.createElement("button");
      btn.type="button";btn.className="mk-unified-tab";
      btn.id=idBase+"-tab-"+i;btn.textContent=g.label;
      btn.setAttribute("role","tab");btn.setAttribute("aria-controls",idBase+"-panel-"+i);
      const panel=document.createElement("div");
      panel.id=idBase+"-panel-"+i;panel.className="mk-unified-panel";
      panel.setAttribute("role","tabpanel");panel.setAttribute("aria-labelledby",btn.id);
      panel.tabIndex=0;
      g.ids.forEach(id=>panel.appendChild(byId.get(id)));
      labels.appendChild(btn);panes.appendChild(panel);
      btns.push(btn);panels.push(panel);
    });
    let selected=0;
    function select(i,focus=false){
      selected=i;
      const first=panels[i].querySelector("details.topic-learning-card");
      if(first)first.open=true;
      btns.forEach((b,n)=>{
        b.setAttribute("aria-selected",String(n===i));
        b.tabIndex=n===i?0:-1;
        panels[n].hidden=n!==i;
      });
      if(focus)btns[i].focus();
      const math=window.MathJax;
      if (math?.typesetPromise) math.typesetPromise([panels[i]]).catch(()=>{});
    }
    btns.forEach((btn,i)=>{
      btn.addEventListener("click",()=>select(i));
      btn.addEventListener("keydown",event=>{
        const keys={ArrowRight:(i+1)%btns.length,ArrowLeft:(i+btns.length-1)%btns.length,Home:0,End:btns.length-1};
        if(!(event.key in keys))return;
        event.preventDefault();select(keys[event.key],true);
      });
    });
    function revealHash(){
      const hash=decodeURIComponent(location.hash.slice(1));
      if(!hash)return;
      const el=document.getElementById(hash);
      const panel=el?.closest(".mk-unified-panel");
      const i=panels.indexOf(panel);
      if(i>=0){select(i);const card=el.closest("details.topic-learning-card");if(card)card.open=true;}
    }
    // Existing navigation and MathJax are preserved; hash links open hidden panels.
    article.addEventListener("click",event=>{
      const a=event.target.closest?.('a[href^="#"]');
      if(!a)return;
      const id=decodeURIComponent(a.getAttribute("href").slice(1));
      const target=document.getElementById(id);
      const panel=target?.closest(".mk-unified-panel");
      const i=panels.indexOf(panel);
      if(i>=0)select(i);
    },true);
    window.addEventListener("hashchange",revealHash);
    shell.append(labels,panes);
    article.dataset.mkUnifiedTabs="1";
    article.classList.add("mk-unified-tabs-ready");
    const nav=article.querySelector(".topic-workspace-nav");
    if(nav)nav.setAttribute("aria-hidden","true");
    select(0);revealHash();
    window.addEventListener("beforeprint",()=>panels.forEach(p=>{
      p.hidden=false;
      p.querySelectorAll("details.topic-learning-card").forEach(card=>{
        card.dataset.mkPrintOpen=String(card.open);card.open=true;
      });
    }));
    window.addEventListener("afterprint",()=>{
      panels.forEach(p=>p.querySelectorAll("details.topic-learning-card").forEach(card=>{
        if(card.dataset.mkPrintOpen!==undefined){
          card.open=card.dataset.mkPrintOpen==="true";
          delete card.dataset.mkPrintOpen;
        }
      }));
      select(selected);
    });
  }

  function run() {
    const topic = route();
    const article = document.querySelector("article.md-content__inner.md-typeset") ||
      document.querySelector(".md-content__inner.md-typeset");
    if (!article) return;
    if (topic === "CT05") enhanceTwoDirectionalExamples(article);
    if (topic === "CT14") {
      styleTwoRules(headingWith(article,"3.5. Quan hệ giữa cạnh và góc đối diện"),
        "Trong một tam giác", ["Góc lớn hơn", "Cạnh lớn hơn"]);
      styleTwoRules(headingWith(article,"3.6A. Đường vuông góc, đường xiên và đường trung trực"),
        "Tính chất hai chiều", ["nằm trên trung trực", "PA=PB"]);
    }
    mountUnifiedTabs(article);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded",run,{once:true});
  else run();
  if (window.document$ && typeof window.document$.subscribe === "function") window.document$.subscribe(run);
})();
