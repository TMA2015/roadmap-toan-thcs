(() => {
  "use strict";
  const base=()=>location.pathname.startsWith("/roadmap-toan-thcs/")?"/roadmap-toan-thcs/":"/";
  const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
  const renderRich=(root,text)=>{
    if(window.RoadmapRichMath?.render)window.RoadmapRichMath.render(text,root);
    else root.textContent=String(text||"");
  };
  const typeset=root=>{
    if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([root]).catch(()=>{});
  };

  let catalogPromise=null;
  const loadCatalog=()=>{
    if(catalogPromise)return catalogPromise;
    catalogPromise=fetch(base()+"assets/data/written-exercises/written-exercise-library-v1.json",{cache:"no-cache"})
      .then(res=>{if(!res.ok)throw Error("HTTP "+res.status);return res.json();})
      .then(data=>{if(!Array.isArray(data.exercises)||!data.exercises.length)throw Error("catalog invalid");return data;});
    return catalogPromise;
  };

  const makeHelpPanel=(card,x)=>{
    const deep=Array.isArray(x.hint_steps)&&x.hint_steps.length>0;
    const wrap=el("div",deep?"written-help is-deep-anchor":"written-help");
    const actions=el("div","written-help-actions");
    actions.setAttribute("role","group");
    actions.setAttribute("aria-label","Hỗ trợ cho "+x.exercise_id);
    const panels=el("div","written-help-panels");

    const addDisclosure=(key,label,build)=>{
      const id=`${x.exercise_id.toLowerCase()}-${key}`;
      const button=el("button","written-help-action",label);
      button.type="button";button.dataset.helpTarget=key;
      button.setAttribute("aria-expanded","false");button.setAttribute("aria-controls",id);
      const panel=el("section","written-help-panel");
      panel.id=id;panel.dataset.helpPanel=key;panel.hidden=true;panel.appendChild(build());
      button.addEventListener("click",()=>{
        const opening=panel.hidden;
        panel.hidden=!opening;
        button.setAttribute("aria-expanded",opening?"true":"false");
        button.classList.toggle("is-active",opening);
        if(opening)typeset(panel);
      });
      actions.appendChild(button);panels.appendChild(panel);
      return {button,panel};
    };

    if(deep){
      const id=`${x.exercise_id.toLowerCase()}-hints`;
      const hintButton=el("button","written-help-action","Gợi ý 1/3");
      hintButton.type="button";hintButton.dataset.helpTarget="hints";
      hintButton.setAttribute("aria-expanded","false");hintButton.setAttribute("aria-controls",id);
      const hintPanel=el("section","written-help-panel");
      hintPanel.id=id;hintPanel.dataset.helpPanel="hints";hintPanel.hidden=true;
      const hintBody=el("div","written-disclosure-body written-hints-body");hintPanel.appendChild(hintBody);
      let revealed=0;
      const revealNext=()=>{
        if(revealed<x.hint_steps.length){
          const sec=el("section","written-hint-step");
          sec.appendChild(el("h3","",`Gợi ý ${revealed+1}`));
          const rich=el("div","written-rich");renderRich(rich,x.hint_steps[revealed]);sec.appendChild(rich);hintBody.appendChild(sec);
          revealed+=1;typeset(sec);
        }
        hintButton.textContent=revealed<x.hint_steps.length?`Gợi ý tiếp ${revealed+1}/${x.hint_steps.length}`:`Đã mở ${x.hint_steps.length}/${x.hint_steps.length} gợi ý`;
      };
      hintButton.addEventListener("click",()=>{
        if(hintPanel.hidden){hintPanel.hidden=false;hintButton.setAttribute("aria-expanded","true");hintButton.classList.add("is-active");if(revealed===0)revealNext();return;}
        if(revealed<x.hint_steps.length){revealNext();return;}
        hintPanel.hidden=true;hintButton.setAttribute("aria-expanded","false");hintButton.classList.remove("is-active");
      });
      actions.appendChild(hintButton);panels.appendChild(hintPanel);

      addDisclosure("solution","Lời giải",()=>{
        const body=el("div","written-disclosure-body");
        const rich=el("div","written-rich");renderRich(rich,x.full_solution_markdown||"");body.appendChild(rich);
        if(x.method_rationale_markdown){
          const method=el("section","written-anchor-method");method.appendChild(el("h3","","Vì sao chọn cách này"));
          const methodRich=el("div","written-rich");renderRich(methodRich,x.method_rationale_markdown);method.appendChild(methodRich);body.appendChild(method);
        }
        return body;
      });
      addDisclosure("rubric",`Tự chấm · ${x.rubric_total}đ`,()=>{
        const body=el("div","written-disclosure-body");
        const table=document.createElement("table");table.className="written-rubric-table";
        const thead=document.createElement("thead"),hr=document.createElement("tr");["Tiêu chí","Điểm"].forEach(t=>hr.appendChild(el("th","",t)));thead.appendChild(hr);
        const tbody=document.createElement("tbody");
        x.rubric.forEach(item=>{const tr=document.createElement("tr"),td=document.createElement("td");renderRich(td,item.criterion);tr.append(td,el("td","",String(item.points)));tbody.appendChild(tr);});
        table.append(thead,tbody);body.appendChild(table);return body;
      });
      addDisclosure("mistakes","Lỗi thường gặp",()=>{
        const body=el("div","written-disclosure-body written-mistakes-body"),ul=document.createElement("ul");
        x.common_mistakes.forEach(m=>{const li=document.createElement("li");renderRich(li,m);ul.appendChild(li);});body.appendChild(ul);return body;
      });
      addDisclosure("remediation","Ôn bù kiến thức",()=>{
        const body=el("div","written-disclosure-body"),rich=el("div","written-rich");renderRich(rich,x.remediation_markdown||"");body.appendChild(rich);return body;
      });
    }else{
      addDisclosure("solution","Hướng dẫn",()=>{
        const body=el("div","written-disclosure-body");
        x.solution_steps.forEach((s,i)=>{const step=el("section","written-solution-step");step.appendChild(el("h3","",`Bước ${i+1} · ${s.title}`));const rich=el("div","written-rich");renderRich(rich,s.content_markdown);step.appendChild(rich);body.appendChild(step);});
        return body;
      });
      addDisclosure("rubric",`Rubric · ${x.rubric_total}đ`,()=>{
        const body=el("div","written-disclosure-body");
        const table=document.createElement("table");table.className="written-rubric-table";
        const thead=document.createElement("thead"),hr=document.createElement("tr");["Tiêu chí","Điểm"].forEach(t=>hr.appendChild(el("th","",t)));thead.appendChild(hr);
        const tbody=document.createElement("tbody");
        x.rubric.forEach(item=>{const tr=document.createElement("tr"),td=document.createElement("td");renderRich(td,item.criterion);tr.append(td,el("td","",String(item.points)));tbody.appendChild(tr);});
        table.append(thead,tbody);body.appendChild(table);return body;
      });
      addDisclosure("mistakes","Lỗi thường gặp",()=>{
        const body=el("div","written-disclosure-body written-mistakes-body"),ul=document.createElement("ul");
        x.common_mistakes.forEach(m=>{const li=document.createElement("li");renderRich(li,m);ul.appendChild(li);});body.appendChild(ul);return body;
      });
    }
    wrap.append(actions,panels);return wrap;
  };

  const initLibrary=async()=>{
    const root=document.querySelector("[data-written-exercise-library]");
    if(!root||root.dataset.ready==="1"||root.dataset.ready==="loading")return;
    root.dataset.ready="loading";
    let data;
    try{data=await loadCatalog();}
    catch(err){
      root.dataset.ready="failed";
      root.replaceChildren(el("p","written-library-error","Không tải được thư viện bài tập. Hãy thử tải lại trang."));
      return;
    }

    const params=new URLSearchParams(location.search);
    let topic=params.get("topic")||"all",level=params.get("level")||"all",type=params.get("type")||"all",term="";
    const shell=el("div","written-library-shell");
    const intro=el("div","written-library-note");
    intro.innerHTML="<strong>Làm trên giấy trước.</strong> Chỉ mở hướng dẫn khi em đã tự thử. Rubric dùng để tự đối chiếu, không tạo điểm Readiness.";
    const controls=el("div","written-library-controls");
    const search=el("input","written-library-search");
    search.type="search";search.placeholder="Tìm theo dạng bài, kỹ năng hoặc ID…";search.setAttribute("aria-label","Tìm bài tự luận");

    const topicSelect=document.createElement("select");topicSelect.className="written-library-select";topicSelect.setAttribute("aria-label","Lọc theo chuyên đề");
    const topicMap=new Map(data.exercises.map(x=>[x.topic_id,`${x.topic_id.replace("CT","CĐ")} · ${x.topic_title}`]));
    const topicOptions=[...topicMap.entries()].sort(([a],[b])=>Number(a.replace(/\D/g,""))-Number(b.replace(/\D/g,"")));
    [["all","Tất cả chuyên đề"],...topicOptions].forEach(([v,t])=>{const o=el("option","",t);o.value=v;topicSelect.appendChild(o);});

    const typeSelect=document.createElement("select");typeSelect.className="written-library-select";typeSelect.setAttribute("aria-label","Lọc theo dạng bài");
    const typeMap=new Map(data.exercises.map(x=>[x.problem_type_id,x.problem_type_title]));
    [["all","Tất cả dạng bài"],...[...typeMap.entries()]].forEach(([v,t])=>{const o=el("option","",t);o.value=v;typeSelect.appendChild(o);});

    const levelSelect=document.createElement("select");levelSelect.className="written-library-select";levelSelect.setAttribute("aria-label","Lọc theo mức");
    [["all","Tất cả mức"],["CORE_BASE","Nền tảng"],["CORE_APPLY","Củng cố"],["ENTRANCE10","Ôn thi vào 10"]].forEach(([v,t])=>{const o=el("option","",t);o.value=v;levelSelect.appendChild(o);});

    if([...topicSelect.options].some(o=>o.value===topic))topicSelect.value=topic;else topic="all";
    if([...typeSelect.options].some(o=>o.value===type))typeSelect.value=type;else type="all";
    if([...levelSelect.options].some(o=>o.value===level))levelSelect.value=level;else level="all";
    controls.append(search,topicSelect,typeSelect,levelSelect);
    const count=el("p","written-library-count");
    const results=el("div","written-library-results");

    const render=()=>{
      results.replaceChildren();
      const q=term.toLowerCase();
      const list=data.exercises.filter(x=>
        (topic==="all"||x.topic_id===topic)&&
        (type==="all"||x.problem_type_id===type)&&
        (level==="all"||x.level===level)&&
        [x.exercise_id,x.title,x.problem_type_title,...x.skills].join(" ").toLowerCase().includes(q)
      );
      count.textContent=`${list.length} bài đang hiển thị · Thư viện hiện có ${data.exercises.length} bài.`;
      if(!list.length){results.appendChild(el("p","","Chưa có bài mẫu phù hợp với bộ lọc hiện tại."));return;}

      for(const x of list){
        const card=el("article","written-exercise-card");card.id=x.exercise_id.toLowerCase();
        const top=el("div","written-exercise-head");
        const meta=el("div","written-exercise-meta");
        const metaValues=x.learner_label?[x.exercise_id,x.topic_id,x.learner_label,`${x.estimated_minutes} phút`]:[x.exercise_id,x.topic_id,x.learning_layer,x.level,`${x.estimated_minutes} phút`];\n        metaValues.forEach(t=>meta.appendChild(el("span","written-chip",t)));
        top.append(meta,el("h2","",x.title),el("p","written-exercise-type",x.problem_type_title));

        const prompt=el("div","written-exercise-problem");
        prompt.appendChild(el("div","written-exercise-kicker","ĐỀ BÀI"));
        const rich=el("div","written-rich");renderRich(rich,x.problem_markdown);prompt.appendChild(rich);
        if(x.figure_uri){
          const fig=document.createElement("figure");fig.className="written-exercise-figure";
          const img=document.createElement("img");img.src=base()+x.figure_uri.replace(/^\.\.\//,"");img.alt=x.figure_alt||"";img.loading="lazy";
          fig.append(img,el("figcaption","","Hình minh họa theo giả thiết; không dùng hình để suy thêm dữ kiện."));prompt.appendChild(fig);
        }

        const reminder=el("p","written-paper-reminder","✍️ Tự giải trên giấy trước khi mở hướng dẫn.");
        const help=makeHelpPanel(card,x);
        const links=el("div","written-exercise-links");
        x.remediation_links.forEach(l=>{const a=el("a","",l.label+" →");a.href=base()+l.href.replace(/^\.\.\//,"");links.appendChild(a);});

        card.append(top,prompt,reminder,help,links);results.appendChild(card);
      }
      typeset(results);
    };

    search.addEventListener("input",()=>{term=search.value.trim();render();});
    topicSelect.addEventListener("change",()=>{topic=topicSelect.value;render();});
    typeSelect.addEventListener("change",()=>{type=typeSelect.value;render();});
    levelSelect.addEventListener("change",()=>{level=levelSelect.value;render();});
    shell.append(intro,controls,count,results);
    root.replaceChildren(shell);root.dataset.ready="1";render();
  };

  const initTopicLibraryLink=async()=>{
    const match=location.pathname.match(/\/kien-thuc\/(\d{2})-[^/]+\/$/);
    if(!match)return;
    let data;
    try{data=await loadCatalog();}catch(err){return;}
    const topicId="CT"+match[1];
    const items=data.exercises.filter(x=>x.topic_id===topicId);
    if(!items.length)return;
    // Topic workspace converts the original H2 into <details id="types">.
    // Mount inside that card body when available; fall back to the raw H2 on
    // non-workspace pages. This keeps source-locked lesson Markdown untouched.
    const content=document.querySelector(".md-content__inner");
    if(!content||content.querySelector("[data-written-topic-link]"))return;
    const typesBody=content.querySelector("#types .topic-learning-card-body");
    const heading=[...content.querySelectorAll("h2")].find(h=>/Các dạng bài/i.test(h.textContent||""));
    if(!typesBody&&!heading)return;
    const a=el("a","written-topic-library-link",`📚 Xem ${items.length} bài mẫu tự luận ${topicId.replace("CT","CĐ")} →`);
    a.dataset.writtenTopicLink="1";
    a.href=base()+"luyen-tap/?topic="+encodeURIComponent(topicId);
    if(typesBody)typesBody.prepend(a);
    else heading.insertAdjacentElement("afterend",a);
  };

  const init=()=>{initLibrary();initTopicLibraryLink();};
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
  if(typeof document$!=="undefined")document$.subscribe(init);
})();