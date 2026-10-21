(() => {
  "use strict";
  const KEY = "toan-thcs-class-mixed-quiz-v1"; // independent namespace; never Practice/Readiness/Mastery
  const resource = path => new URL("../../assets/" + path, window.location.href).toString();
  const make = (tag, text, parent, className) => {
    const el = document.createElement(tag);
    if (text !== undefined && text !== null) el.textContent = String(text);
    if (className) el.className = className;
    if (parent) parent.appendChild(el);
    return el;
  };
  const loadJSON = async path => {
    const response = await fetch(resource(path), {cache:"no-cache"});
    if (!response.ok) throw new Error("Không đọc được nguồn " + path);
    return response.json();
  };
  const writeHistory = entry => {
    try {
      const raw = localStorage.getItem(KEY);
      let current = {schema:"math-class-mixed-history-v1",version:1,attempts:[]};
      if (raw !== null) {
        try { current = JSON.parse(raw); }
        catch (_) { return {ok:false,why:"Dữ liệu cũ lỗi định dạng; chưa ghi đè."}; }
        if (!current || current.schema !== "math-class-mixed-history-v1" || !Array.isArray(current.attempts))
          return {ok:false,why:"Định dạng lịch sử hiện có không phù hợp; chưa ghi đè."};
      }
      const next = {schema:"math-class-mixed-history-v1",version:1,
        attempts:[...current.attempts,entry]};
      localStorage.setItem(KEY,JSON.stringify(next));
      return {ok:true};
    } catch (_) {return {ok:false,why:"Thiết bị không cho phép lưu lịch sử."};}
  };
  const init = async () => {
    const root = document.querySelector("[data-class-mixed-g6-qa]");
    if (!root || root.dataset.initialized === "1") return;
    root.dataset.initialized = "1";
    root.classList.add("cmg6");
    const info = make("p","Đang kiểm tra ngân hàng nguồn...",root);
    let manifest;
    try {
      manifest = await loadJSON("data/class-mixed/g6-pilot-v1.json");
      if (manifest.status!=="QA_ONLY_DO_NOT_RELEASE" || manifest.grade!==6
        || manifest.topic_sources.reduce((sum,x)=>sum+x.ids.length,0)!==10)
        throw new Error("Hợp đồng dữ liệu thí điểm không hợp lệ.");
    } catch (error) {
      info.textContent="Không thể mở bài thí điểm: "+error.message;
      return;
    }
    root.innerHTML="";
    make("p","Thử nghiệm giao diện • Lớp 6 • Tối đa 10 câu đã kiểm toán • Không phải điểm thi, Readiness hay Mastery.",root,"cmg6-note");
    const chooser=make("div",null,root,"cmg6-chooser");
    const title=make("h2","Chọn nội dung đã học",chooser);
    title.tabIndex=-1;
    const checks=[];
    manifest.topic_sources.forEach(t=>{
      const label=make("label",null,chooser,"cmg6-choice");
      const c=make("input",null,label);
      c.type="checkbox";c.value=t.slug;
      checks.push(c);
      make("span",t.label+" · "+t.ids.length+" câu mẫu",label);
    });
    const buttons=make("div",null,root,"cmg6-buttons");
    const note=make("p","",root,"cmg6-status");
    note.setAttribute("role","status");
    const start=make("button","Bắt đầu ôn tập",buttons,"cmg6-primary");
    start.type="button";
    const help=make("p","Chọn ít nhất hai nhóm kiến thức đã học. Khi chọn đủ sáu nhóm, bộ 10 câu có tỉ lệ 4 Nhận biết – 4 Thông hiểu – 2 Vận dụng thấp theo kiểm toán NotebookLM. Chọn ít nhóm hơn sẽ nhận bộ ngắn hơn, không giữ tỉ lệ 4–4–2 và không tự thêm kiến thức chưa học.",root,"cmg6-hint");
    const quiz=make("section",null,root,"cmg6-quiz");
    quiz.hidden=true;
    const state={items:[],selected:[],position:0,submitted:false,startedAt:null};
    const picked=()=>manifest.topic_sources.filter((t,i)=>checks[i].checked);
    const update=()=>{
      const topics=picked();
      const count=topics.reduce((n,x)=>n+x.ids.length,0);
      const enough=topics.length>=2;
      start.disabled=!enough;
      note.textContent=enough
        ? "Đã chọn "+topics.length+" nhóm đã học · bộ ôn tập "+count+" câu (tối đa 10 câu)."
        : "Chọn ít nhất 2 nhóm đã học để ôn tổng hợp; không ép học hết cả 6 nhóm.";
    };
    checks.forEach(x=>x.addEventListener("change",update));
    update();
    const showQuestion=()=>{
      quiz.innerHTML="";
      if(!state.items.length)return;
      const q=state.items[state.position],number=state.position+1;
      make("p","Câu "+number+"/"+state.items.length+" • "+q.sourceLabel,quiz,"cmg6-progress");
      make("h3",q.question,quiz,"cmg6-question");
      const field=make("fieldset",null,quiz,"cmg6-options");
      make("legend","Chọn một đáp án (có thể sửa trước khi nộp)",field);
      q.options.forEach((option,index)=>{
        const label=make("label",null,field,"cmg6-answer");
        const radio=make("input",null,label);radio.type="radio";radio.name="cmg6-response";radio.value=String(index);
        radio.checked=state.selected[state.position]===index;
        radio.disabled=state.submitted;
        radio.addEventListener("change",()=>{state.selected[state.position]=index;showQuestion();});
        make("span",option,label);
      });
      const nav=make("nav",null,quiz,"cmg6-nav");
      const prev=make("button","Câu trước",nav);prev.type="button";prev.disabled=state.position===0;
      prev.addEventListener("click",()=>{state.position--;showQuestion();});
      const next=make("button","Câu sau",nav);next.type="button";next.disabled=state.position===state.items.length-1;
      next.addEventListener("click",()=>{state.position++;showQuestion();});
      const bar=make("div",null,quiz,"cmg6-jump");
      state.items.forEach((_,i)=>{
        const b=make("button",String(i+1),bar);b.type="button";
        b.className+=(i===state.position?" is-current":"")+(Number.isInteger(state.selected[i])?" is-answered":"");
        b.setAttribute("aria-label","Đến câu "+(i+1)+(Number.isInteger(state.selected[i])?" đã chọn":" chưa chọn"));
        b.addEventListener("click",()=>{state.position=i;showQuestion();});
      });
      const submit=make("button","Nộp bài và xem kết quả",quiz,"cmg6-primary");
      submit.type="button";
      if(state.submitted){submit.remove();return;}
      submit.addEventListener("click",()=>{
        const unanswered=state.selected.filter(x=>!Number.isInteger(x)).length;
        if(unanswered){note.textContent="Còn "+unanswered+" câu chưa chọn. Hãy hoàn thành trước khi nộp.";return;}
        state.submitted=true;
        const score=state.items.reduce((n,item,i)=>n+(state.selected[i]===item.answer?1:0),0);
        const entry={attempt_id:"G6-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),
          form_version:manifest.version,grade:6,source_ids:state.items.map(item=>item.id),
          answer_indices:state.selected.slice(),correct:score,total:state.items.length,
          started_at:state.startedAt,submitted_at:new Date().toISOString(),
          role:"formative_class_mixed_not_readiness"};
        const persisted=writeHistory(entry);
        quiz.innerHTML="";
        make("h3","Kết quả ôn tập: "+score+"/"+state.items.length,quiz);
        make("p","Đây là điểm tự luyện, không tự động cộng vào Core Readiness hoặc Mastery.",quiz);
        if(!persisted.ok)make("p","Lưu lịch sử chưa thành công: "+persisted.why,quiz,"cmg6-warning");
        state.items.forEach((item,i)=>{
          const row=make("details",null,quiz,"cmg6-review");
          make("summary","Câu "+(i+1)+" · "+(state.selected[i]===item.answer?"Đúng":"Cần ôn thêm")+" · "+item.sourceLabel,row);
          make("p",item.question,row);
          make("p","Đáp án: "+item.options[item.answer],row);
          make("p",item.explanation,row);
          const link=make("a","Ôn thẻ Core liên quan",row);
          link.href=new URL("../../kien-thuc/"+item.topic+"/core/",window.location.href).toString();
        });
        chooser.hidden=true;buttons.hidden=true;help.hidden=true;note.textContent="";
        const restart=make("button","Chọn lại nội dung",quiz,"cmg6-primary");
        restart.type="button";restart.addEventListener("click",()=>window.location.reload());
      });
    };
    start.addEventListener("click",async()=>{
      start.disabled=true;note.textContent="Đang kiểm tra câu hỏi, thẻ Core và khối lớp...";
      const selectedTopics=picked();
      try{
        const loaded=await Promise.all(selectedTopics.map(async t=>{
          const [micro,core]=await Promise.all([
            loadJSON("data/practice/"+t.slug+"-micro-v1.json"),
            loadJSON("data/curriculum/topic"+t.slug.slice(0,2)+"-learning-workspace.json")
          ]);
          const cards=new Set((core.cards||[]).filter(c=>c.layer==="KNTT-Core").map(c=>c.id));
          return t.ids.map(id=>{
            const q=(micro.questions||[]).find(x=>x.id===id);
            if(!q||q.tags?.layer!=="KNTT-Core"||q.tags?.grade!==6
              ||q.curriculum?.book!=="KNTT"||!q.curriculum?.grades?.includes(6)
              ||!cards.has(q.card_id)||!Array.isArray(q.options)
              ||q.options.length<2||!Number.isInteger(q.answer)
              ||q.answer<0||q.answer>=q.options.length||!q.explanation)
              throw new Error("Câu "+id+" không đạt điều kiện học thuật/nguồn.");
            return {...q,topic:t.slug,sourceLabel:t.label};
          });
        }));
        const items=loaded.flat();
        const expectedCount=selectedTopics.reduce((sum,t)=>sum+t.ids.length,0);
        if(selectedTopics.length<2 || items.length!==expectedCount || items.length>10
          ||new Set(items.map(x=>x.id)).size!==items.length)
          throw new Error("Thiếu hoặc trùng câu trong bộ đề.");
        state.items=items;state.selected=Array(items.length).fill(null);
        state.startedAt=new Date().toISOString();
        state.position=0;
        chooser.hidden=true;buttons.hidden=true;help.hidden=true;
        note.textContent="Không hiện đáp án trước khi nộp. Có thể quay lại và đổi lựa chọn.";
        quiz.hidden=false;
        showQuestion();
      }catch(error){note.textContent="Chưa thể mở bài: "+error.message;start.disabled=false;}
    });
  };
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
  else init();
  if(typeof document$!=="undefined")document$.subscribe(init);
})();
