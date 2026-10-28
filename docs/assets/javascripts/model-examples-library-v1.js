(() => {
  "use strict";
  // Read-only catalog references: one original problem source, no clone, no learner record.
  const rootPath=()=>{const m=location.pathname.match(/^\/(roadmap-toan-thcs|self-learning-math)\//);return m?"/"+m[1]+"/":"/";};
  const el=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
  const init=async()=>{
    const root=document.querySelector("[data-model-examples-library]");
    if(!root||root.dataset.ready==="1"||root.dataset.ready==="loading")return;
    root.dataset.ready="loading";
    let written,classic;
    try{
      const base=rootPath();
      const res=await Promise.all([
        fetch(base+"assets/data/written-exercises/written-exercise-library-v1.json"),
        fetch(base+"assets/data/anchors/anchor-catalog-v1.json")
      ]);
      if(res.some(x=>!x.ok))throw Error("Không tải được dữ liệu");
      [written,classic]=await Promise.all(res.map(x=>x.json()));
      if(!Array.isArray(written.exercises)||!Array.isArray(classic.anchors))throw Error("Danh sách không hợp lệ");
    }catch(_){
      root.replaceChildren(el("p","model-library-empty","Tạm thời không tải được danh sách. Em có thể mở Thư viện bài tập tự luận hoặc Chuyên đề 25."));
      root.dataset.ready="failed";return;
    }

    const wx=written.exercises.filter(x=>x.exercise_kind==="anchor" && x.academic_review?.status==="APPROVED").map(x=>({
      id:x.exercise_id,title:x.title,grades:x.grade_overlay||[],topicIds:[x.topic_id],
      kind:"wx",description:x.problem_type_title||"Bài học phương pháp",
      href:rootPath()+"luyen-tap/tu-luan/?kind=anchor#"+encodeURIComponent(x.exercise_id.toLowerCase())
    }));
    const a25=classic.anchors.filter(x=>x.publication_status==="published"&&(x.deep_dive_uri||x.source_uri)).map(x=>({
      id:x.id,title:x.title,grades:[9],topicIds:x.topic_ids||[],kind:"a25",
      description:x.content_depth==="full_solution_with_variants"?"Có lời giải theo bước và bài luyện thêm":"Có bài mẫu trong tuyển tập",
      href:rootPath()+"kien-thuc/25-tong-hop-on-thi-10/"+(x.deep_dive_uri||x.source_uri)
    }));
    const entries=[...wx,...a25];
    let grade="all",group="all",search="";
    const shell=el("div","model-library-shell");
    const filters=el("div","model-library-filters");
    const gradeSelect=el("select","model-library-control");
    gradeSelect.setAttribute("aria-label","Lọc bài mẫu theo lớp");
    [["all","Tất cả lớp"],["6","Lớp 6"],["7","Lớp 7"],["8","Lớp 8"],["9","Lớp 9 · Ôn thi"]].forEach(([v,t])=>{const opt=el("option","",t);opt.value=v;gradeSelect.append(opt);});
    const groupSelect=el("select","model-library-control");
    groupSelect.setAttribute("aria-label","Lọc nhóm bài mẫu");
    [["all","Tất cả bài mẫu"],["wx","Bài mẫu giải sâu theo lớp"],["a25","Bài mẫu ôn thi vào 10"]].forEach(([v,t])=>{const opt=el("option","",t);opt.value=v;groupSelect.append(opt);});
    const input=el("input","model-library-control");
    input.type="search";input.maxLength=90;input.placeholder="Tìm bài hoặc chuyên đề…";input.setAttribute("aria-label","Tìm bài mẫu");
    const summary=el("p","model-library-count");
    const grid=el("div","model-library-results");
    const render=()=>{
      grid.replaceChildren();
      const found=entries.filter(x=>(grade==="all"||x.grades.includes(Number(grade)))&&(group==="all"||x.kind===group)&&[x.id,x.title,x.description,...x.topicIds].join(" ").toLowerCase().includes(search));
      summary.textContent=found.length+" bài đang hiển thị · "+wx.length+" bài mẫu giải sâu trong Thư viện tự luận · "+a25.length+" bài ôn thi vào lớp 10.";
      if(!found.length){
        grid.append(el("p","model-library-empty",grade==="7"||grade==="8"?"Chưa có bài mẫu giải sâu được xếp riêng cho lớp này. Những bài đã học vẫn có trong mục Bài tập tự luận; thư viện sẽ được bổ sung sau khi kiểm định.":"Chưa tìm thấy bài phù hợp. Hãy thử đổi lớp hoặc từ khóa."));
        return;
      }
      for(const x of found){
        const card=el("article","model-library-card");
        card.append(el("p","model-library-kicker",x.kind==="wx"?"Bài mẫu theo kiến thức":"Bài mẫu ôn thi vào lớp 10"));
        card.append(el("h3","",x.title));
        const tags=el("p","model-library-tags","Lớp tham khảo: "+x.grades.join(", ")+" · "+x.topicIds.map(y=>y.replace("CT","CĐ")).join(" · "));
        card.append(tags,el("p","model-library-detail",x.description));
        const link=el("a","model-library-link",x.kind==="wx"?"Mở bài tự luận và hướng dẫn →":"Xem bài mẫu và cách giải →");
        link.href=x.href;card.append(link);grid.append(card);
      }
    };
    gradeSelect.addEventListener("change",()=>{grade=gradeSelect.value;render();});
    groupSelect.addEventListener("change",()=>{group=groupSelect.value;render();});
    input.addEventListener("input",()=>{search=input.value.toLowerCase().trim();render();});
    filters.append(gradeSelect,groupSelect,input);
    shell.append(filters,summary,grid);root.replaceChildren(shell);
    root.dataset.ready="1";
    render();
  };
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
  if(typeof document$!=="undefined")document$.subscribe(init);
})();
