(() => {
  "use strict";
  const base=()=>{const m=location.pathname.match(/^\/(roadmap-toan-thcs|self-learning-math)\//);return m?"/"+m[1]+"/":"/";};
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

  // Keep the canonical catalog immutable: P2 prompts are a separate,
  // source-locked optional teaching overlay, applied in memory on library pages.
  // Bad, missing or mismatched data fails closed to the unchanged catalog.
  const applyReviewedHints=(data,overlay)=>{
    const expectedIds=["WX16-QUAD-001","WX07-RAT-001","WX19-CIR-002"];
    if(!data||data.catalog_id!=="MATH-WRITTEN-EXERCISE-LIBRARY-V1"||
       data.snapshot_date!=="2026-10-23"||!Array.isArray(data.exercises)||data.exercises.length!==87||
       !overlay||overlay.schema_version!=="1.0.0"||
       overlay.source_catalog_blob_sha!=="52da473e93101830ecbdb7ee6bb57c876586130f"||
       overlay.source_catalog_snapshot_date!==data.snapshot_date||
       overlay.source_catalog_exercise_count!==data.exercises.length||
       overlay.source_packet_id!=="MATH-WRITTEN-QUALITY-8PILOT-20261022-R0"||
       !Array.isArray(overlay.changes)||overlay.changes.length!==expectedIds.length)return data;
    const existing=new Map(data.exercises.map(x=>[x.exercise_id,x]));
    const additions=new Map();
    for(const change of overlay.changes){
      if(!change||!expectedIds.includes(change.exercise_id)||additions.has(change.exercise_id)||
         !Array.isArray(change.hint_steps)||change.hint_steps.length!==2||
         !change.hint_steps.every(h=>typeof h==="string"&&h.trim().length>=20))return data;
      const original=existing.get(change.exercise_id);
      if(!original||original.exercise_kind!=="standard"||
         !Array.isArray(original.solution_steps)||original.solution_steps.length<3||
         (Array.isArray(original.hint_steps)&&original.hint_steps.length))return data;
      additions.set(change.exercise_id,change.hint_steps.slice());
    }
    if(expectedIds.some(id=>!additions.has(id)))return data;
    return {...data,exercises:data.exercises.map(x=>
      additions.has(x.exercise_id)?{...x,hint_steps:additions.get(x.exercise_id)}:x)};
  };

  const loadLibraryData=async()=>{
    const canonical=await loadCatalog();
    try{
      const response=await fetch(base()+"assets/data/written-exercises/written-p2-hints-overlay-v1.json",{cache:"no-cache"});
      if(!response.ok)return canonical;
      return applyReviewedHints(canonical,await response.json());
    }catch(_){return canonical;}
  };

  const makeHelpPanel=(card,x)=>{
    // Keep legacy progressive-help behavior for existing reviewed records.
    // New standard items with only solution_steps can show hints without losing their solution.
    const hasHints=Array.isArray(x.hint_steps)&&x.hint_steps.length>0;
    const deep=x.exercise_kind==="anchor"||(hasHints&&Boolean(String(x.full_solution_markdown||"").trim()));
    const wrap=el("div",deep?"written-help is-deep-anchor":hasHints?"written-help has-staged-hints":"written-help");
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

    if(hasHints){
      const id=`${x.exercise_id.toLowerCase()}-hints`;
      const hintButton=el("button","written-help-action",`Gợi ý 1/${x.hint_steps.length}`);
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

    }

    if(deep){
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
    try{data=await loadLibraryData();}
    catch(err){
      root.dataset.ready="failed";
      root.replaceChildren(el("p","written-library-error","Không tải được thư viện bài tập. Hãy thử tải lại trang."));
      return;
    }

    const params=new URLSearchParams(location.search);
    let topic=params.get("topic")||"all",level=params.get("level")||"all",type=params.get("type")||"all",kind=params.get("kind")||"all",term="";
    // Only academically reviewed kntt_placements define school-grade discovery.
    // grade_overlay is advisory and MUST NEVER become a classroom placement.
    let grade=params.get("grade")||"all",chapter=params.get("chapter")||"all",lesson=params.get("lesson")||"all";
    const placements=x=>Array.isArray(x.kntt_placements)?x.kntt_placements.filter(p=>Number.isInteger(p.grade)&&Number.isInteger(p.chapter)&&typeof p.lesson==="string"):[];

    const shell=el("div","written-library-shell");
    const intro=el("div","written-library-note");
    intro.innerHTML="<strong>Làm trên giấy trước.</strong> Chỉ mở hướng dẫn khi em đã tự thử. Rubric dùng để tự đối chiếu, không tạo điểm Readiness.";
    const controls=el("div","written-library-controls");
    const select=(name)=>{const x=document.createElement("select");x.className="written-library-select";x.setAttribute("aria-label",name);return x;};
    const fillOptions=(node,entries,value)=>{
      node.replaceChildren();
      entries.forEach(([v,t])=>{const opt=el("option","",t);opt.value=String(v);node.appendChild(opt)});
      node.value=entries.some(([v])=>String(v)===String(value))?String(value):"all";
      return node.value;
    };
    const gradeSelect=select("Lọc bài tự luận theo lớp đã xác minh SGK");
    const chapterSelect=select("Lọc bài tự luận theo chương KNTT");
    const lessonSelect=select("Lọc bài tự luận theo bài học KNTT");
    const verifiedGrades=[...new Set(data.exercises.flatMap(x=>placements(x).map(p=>p.grade)))].sort();
    grade=fillOptions(gradeSelect,[["all","Tất cả lớp (bao gồm bài chưa xếp lớp)"],...verifiedGrades.map(g=>[g,"Lớp "+g+" · SGK KNTT"])],grade);
    const resetChapters=()=>{
      const chapters=[...new Set(data.exercises.flatMap(x=>placements(x).filter(p=>String(p.grade)===String(grade)).map(p=>p.chapter)))].sort((a,b)=>a-b);
      chapter=fillOptions(chapterSelect,[["all","Tất cả chương"],...chapters.map(c=>[c,"Chương "+c])],chapter);
      chapterSelect.disabled=grade==="all";
    };
    const resetLessons=()=>{
      const lessons=[...new Set(data.exercises.flatMap(x=>placements(x).filter(p=>String(p.grade)===String(grade)&&String(p.chapter)===String(chapter)).map(p=>p.lesson)))].sort((a,b)=>a.localeCompare(b,"vi"));
      lesson=fillOptions(lessonSelect,[["all","Tất cả bài học"],...lessons.map(t=>[t,t])],lesson);
      lessonSelect.disabled=grade==="all"||chapter==="all";
    };
    resetChapters();resetLessons();

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
    [["all","Tất cả mức"],["CORE_BASE","Nền tảng"],["CORE_APPLY","Củng cố"],["ENTRANCE10","Ôn thi vào 10"],["CHALLENGE","Thử thách"]].forEach(([v,t])=>{const o=el("option","",t);o.value=v;levelSelect.appendChild(o);});

    const kindSelect=document.createElement("select");kindSelect.className="written-library-select";kindSelect.setAttribute("aria-label","Lọc theo loại bài");
    const anchorCount=data.exercises.filter(x=>x.exercise_kind==="anchor").length;
    const standardCount=data.exercises.filter(x=>x.exercise_kind==="standard").length;
    [["all","Tất cả bài tự luận"],["anchor","Bài mỏ neo ("+anchorCount+")"],["standard","Bài luyện thông thường ("+standardCount+")"]].forEach(([v,t])=>{const o=el("option","",t);o.value=v;kindSelect.appendChild(o);});

    if([...topicSelect.options].some(o=>o.value===topic))topicSelect.value=topic;else topic="all";
    if([...typeSelect.options].some(o=>o.value===type))typeSelect.value=type;else type="all";
    if([...levelSelect.options].some(o=>o.value===level))levelSelect.value=level;else level="all";
    if([...kindSelect.options].some(o=>o.value===kind))kindSelect.value=kind;else kind="all";
    controls.append(search,gradeSelect,chapterSelect,lessonSelect,topicSelect,typeSelect,levelSelect,kindSelect);
    const curriculumNote=el("p","written-library-verified-note",
      "Lọc theo lớp/chương chỉ sử dụng vị trí SGK đã được kiểm định; những bài chưa xếp lớp vẫn xem được khi chọn “Tất cả lớp” hoặc theo chuyên đề.");

    const count=el("p","written-library-count");
    const results=el("div","written-library-results");

    const render=()=>{
      results.replaceChildren();
      const q=term.toLowerCase();
      const list=data.exercises.filter(x=>
        (topic==="all"||x.topic_id===topic)&&
        (type==="all"||x.problem_type_id===type)&&
        (level==="all"||x.level===level)&&
        (kind==="all"||x.exercise_kind===kind)&&
        (grade==="all"||placements(x).some(p=>String(p.grade)===String(grade)&&
          (chapter==="all"||String(p.chapter)===String(chapter))&&
          (lesson==="all"||p.lesson===lesson)))&&
        [x.exercise_id,x.title,x.problem_type_title,...x.skills].join(" ").toLowerCase().includes(q)
      );
      count.textContent=`${list.length} bài đang hiển thị · Thư viện hiện có ${data.exercises.length} bài.`;
      if(!list.length){results.appendChild(el("p","","Chưa có bài mẫu phù hợp với bộ lọc hiện tại."));return;}

      for(const x of list){
        const card=el("article","written-exercise-card");card.id=x.exercise_id.toLowerCase();
        const top=el("div","written-exercise-head");
        const meta=el("div","written-exercise-meta");
        const metaValues=x.learner_label?[x.exercise_id,x.topic_id,x.learner_label]:[x.exercise_id,x.topic_id,x.learning_layer,x.level];
        metaValues.forEach(t=>meta.appendChild(el("span","written-chip",t)));
        if(x.exercise_kind==="anchor")meta.appendChild(el("span","written-chip","Bài mỏ neo · giải sâu"));
        if(placements(x).length){
          const p=placements(x)[0];meta.appendChild(el("span","written-chip","KNTT lớp "+p.grade+" · Chương "+p.chapter));
        }
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
    gradeSelect.addEventListener("change",()=>{grade=gradeSelect.value;chapter="all";lesson="all";resetChapters();resetLessons();render();});
    chapterSelect.addEventListener("change",()=>{chapter=chapterSelect.value;lesson="all";resetLessons();render();});
    lessonSelect.addEventListener("change",()=>{lesson=lessonSelect.value;render();});
    topicSelect.addEventListener("change",()=>{topic=topicSelect.value;render();});
    typeSelect.addEventListener("change",()=>{type=typeSelect.value;render();});
    levelSelect.addEventListener("change",()=>{level=levelSelect.value;render();});
    kindSelect.addEventListener("change",()=>{kind=kindSelect.value;render();});
    shell.append(intro,controls,curriculumNote,count,results);
    root.replaceChildren(shell);root.dataset.ready="1";render();
    // New library example-page deep links target the existing WX source card.
    // The catalog is asynchronous, so browser-native initial hash scrolling alone is not enough.
    if(location.hash){
      const id=decodeURIComponent(location.hash.slice(1));
      const target=document.getElementById(id);
      if(target)requestAnimationFrame(()=>target.scrollIntoView({block:"start"}));
    }
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
    a.href=base()+"luyen-tap/tu-luan/?topic="+encodeURIComponent(topicId);
    if(typesBody)typesBody.prepend(a);
    else heading.insertAdjacentElement("afterend",a);
  };

  const init=()=>{initLibrary();initTopicLibraryLink();};
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
  if(typeof document$!=="undefined")document$.subscribe(init);
})();