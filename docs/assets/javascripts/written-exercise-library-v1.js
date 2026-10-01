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
  const init=async()=>{
    const root=document.querySelector("[data-written-exercise-library]");
    if(!root||root.dataset.ready==="1"||root.dataset.ready==="loading")return;
    root.dataset.ready="loading";
    let data;
    try{
      const res=await fetch(base()+"assets/data/written-exercises/written-exercise-library-v1.json",{cache:"no-cache"});
      if(!res.ok)throw Error("HTTP "+res.status);
      data=await res.json();
      if(!Array.isArray(data.exercises)||data.exercises.length!==6)throw Error("pilot catalog invalid");
    }catch(err){
      root.dataset.ready="failed";
      root.replaceChildren(el("p","written-library-error","Không tải được thư viện bài tập. Hãy thử tải lại trang."));
      return;
    }

    let topic="all",level="all",term="";
    const shell=el("div","written-library-shell");
    const intro=el("div","written-library-note");
    intro.innerHTML="<strong>Làm trên giấy trước.</strong> Chỉ mở hướng dẫn khi em đã tự thử. Rubric dùng để tự đối chiếu, không tạo điểm Readiness.";
    const controls=el("div","written-library-controls");
    const search=el("input","written-library-search");
    search.type="search";search.placeholder="Tìm theo dạng bài, kỹ năng hoặc ID…";search.setAttribute("aria-label","Tìm bài tự luận");
    const topicSelect=document.createElement("select");topicSelect.className="written-library-select";topicSelect.setAttribute("aria-label","Lọc theo chuyên đề");
    [["all","Tất cả chuyên đề"],["CT07","CĐ07 · Phân thức đại số"],["CT14","CĐ14 · Tam giác"],["CT24","CĐ24 · Bài toán thực tế"]].forEach(([v,t])=>{const o=el("option","",t);o.value=v;topicSelect.appendChild(o);});
    const levelSelect=document.createElement("select");levelSelect.className="written-library-select";levelSelect.setAttribute("aria-label","Lọc theo mức");
    [["all","Tất cả mức"],["CORE_BASE","Core Base"],["CORE_APPLY","Core Apply"]].forEach(([v,t])=>{const o=el("option","",t);o.value=v;levelSelect.appendChild(o);});
    controls.append(search,topicSelect,levelSelect);
    const count=el("p","written-library-count");
    const results=el("div","written-library-results");

    const makeDetails=(label,cls)=>{
      const d=document.createElement("details");d.className=cls;
      const s=document.createElement("summary");s.textContent=label;d.appendChild(s);return d;
    };

    const render=()=>{
      results.replaceChildren();
      const q=term.toLowerCase();
      const list=data.exercises.filter(x=>
        (topic==="all"||x.topic_id===topic)&&
        (level==="all"||x.level===level)&&
        [x.exercise_id,x.title,x.problem_type_title,...x.skills].join(" ").toLowerCase().includes(q)
      );
      count.textContent=`${list.length} bài đang hiển thị · Pilot hiện có ${data.exercises.length} bài.`;
      if(!list.length){results.appendChild(el("p","","Không có bài phù hợp với bộ lọc hiện tại."));return;}
      for(const x of list){
        const card=el("article","written-exercise-card");card.id=x.exercise_id.toLowerCase();
        const top=el("div","written-exercise-head");
        const meta=el("div","written-exercise-meta");
        [x.exercise_id,x.topic_id,x.learning_layer,x.level,`${x.estimated_minutes} phút`].forEach(t=>meta.appendChild(el("span","written-chip",t)));
        const h=el("h2","",x.title);
        const type=el("p","written-exercise-type",x.problem_type_title);
        top.append(meta,h,type);

        const prompt=el("div","written-exercise-problem");
        prompt.appendChild(el("div","written-exercise-kicker","ĐỀ BÀI"));
        const rich=el("div","written-rich");renderRich(rich,x.problem_markdown);prompt.appendChild(rich);

        if(x.figure_uri){
          const fig=document.createElement("figure");fig.className="written-exercise-figure";
          const img=document.createElement("img");img.src=base()+x.figure_uri.replace(/^\.\.\//,"");img.alt=x.figure_alt||"";img.loading="lazy";
          const cap=el("figcaption","","Hình minh họa theo giả thiết; không dùng hình để suy thêm dữ kiện.");
          fig.append(img,cap);prompt.appendChild(fig);
        }

        const reminder=el("p","written-paper-reminder","✍️ Tự giải trên giấy trước khi mở hướng dẫn.");

        const solution=makeDetails("Hướng dẫn giải từng bước","written-disclosure written-solution");
        const solBody=el("div","written-disclosure-body");
        x.solution_steps.forEach((s,i)=>{
          const step=el("section","written-solution-step");
          step.appendChild(el("h3","",`Bước ${i+1} · ${s.title}`));
          const body=el("div","written-rich");renderRich(body,s.content_markdown);step.appendChild(body);solBody.appendChild(step);
        });
        solution.appendChild(solBody);

        const rubric=makeDetails(`Rubric tự chấm · ${x.rubric_total} điểm`,"written-disclosure written-rubric");
        const rubBody=el("div","written-disclosure-body");
        const table=document.createElement("table");table.className="written-rubric-table";
        const thead=document.createElement("thead");const hr=document.createElement("tr");["Tiêu chí","Điểm"].forEach(t=>hr.appendChild(el("th","",t)));thead.appendChild(hr);
        const tbody=document.createElement("tbody");
        x.rubric.forEach(r=>{const tr=document.createElement("tr");const td=document.createElement("td");renderRich(td,r.criterion);tr.append(td,el("td","",String(r.points)));tbody.appendChild(tr);});
        table.append(thead,tbody);rubBody.appendChild(table);rubric.appendChild(rubBody);

        const mistakes=makeDetails("Lỗi thường gặp","written-disclosure written-mistakes");
        const ul=document.createElement("ul");x.common_mistakes.forEach(m=>{const li=document.createElement("li");renderRich(li,m);ul.appendChild(li);});mistakes.appendChild(ul);

        const links=el("div","written-exercise-links");
        x.remediation_links.forEach(l=>{const a=el("a","",l.label+" →");a.href=base()+l.href.replace(/^\.\.\//,"");links.appendChild(a);});

        card.append(top,prompt,reminder,solution,rubric,mistakes,links);results.appendChild(card);
      }
      typeset(results);
    };

    search.addEventListener("input",()=>{term=search.value.trim();render();});
    topicSelect.addEventListener("change",()=>{topic=topicSelect.value;render();});
    levelSelect.addEventListener("change",()=>{level=levelSelect.value;render();});
    shell.append(intro,controls,count,results);
    root.replaceChildren(shell);root.dataset.ready="1";render();
  };
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
  if(typeof document$!=="undefined")document$.subscribe(init);
})();