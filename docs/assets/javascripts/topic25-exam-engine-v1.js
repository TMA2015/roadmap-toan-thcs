(() => {
  "use strict";

  const route = location.pathname.match(/(?:^|\/)kien-thuc\/25-tong-hop-on-thi-10\/de-luyen-(0[1-3])\/(?:index\.html)?$/);
  if (!route) return;
  const no = route[1];
  const prefix = location.pathname.startsWith("/roadmap-toan-thcs/") ? "/roadmap-toan-thcs/" : "/";
  const storageKey = "roadmap:exam-v1:EXAM25-" + no;
  const historyKey = "roadmap:exam-history-v1";
  const create = (tag, className, label) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (label !== undefined) el.textContent = label;
    return el;
  };
  const safeRead = (key) => {
    try { return JSON.parse(localStorage.getItem(key) || "null"); }
    catch (_) { return null; }
  };
  const safeWrite = (key, data) => {
    try { localStorage.setItem(key, JSON.stringify(data)); return true; }
    catch (_) { return false; }
  };
  const formatPoints = value => Number(value).toFixed(2).replace(".", ",");
  const now = () => Date.now();
  const newAttempt = () => ({
    version: 1, status: "idle", started_at: null, deadline_at: null, submitted_at: null,
    answers: {}, rubric: {}, answer_opened: false, self_attested: false,
    finalized_at: null, self_score: null, timed_out: false
  });
  const validAttempt = a => a && a.version === 1 && ["idle","running","submitted","finalized"].includes(a.status);
  const attempt = validAttempt(safeRead(storageKey)) ? safeRead(storageKey) : newAttempt();
  let blueprint = null, host = null, timerEl = null, ticker = null;
  const persist = () => safeWrite(storageKey, attempt);
  const allItems = () => blueprint?.items || [];
  const remaining = () => Math.max(0, (attempt.deadline_at || 0) - now());
  const pointFor = item => item.criteria.reduce((sum, step, n) => sum +
    (attempt.rubric[item.id]?.[n] === true ? step.points : 0), 0);
  const score = () => allItems().reduce((n, item) => n + pointFor(item), 0);
  const submitted = () => ["submitted","finalized"].includes(attempt.status);
  const setAnswerLinks = () => {
    for (const a of document.querySelectorAll('a[href*="de-luyen-'+no+'-dap-an/"]')) {
      // Client-side teaching convention, NOT a security boundary on static hosting.
      a.hidden = !submitted();
      a.setAttribute("aria-hidden", String(!submitted()));
      a.tabIndex = submitted() ? 0 : -1;
    }
  };
  const checkpoint = () => {
    if (attempt.status === "running" && remaining() <= 0) {
      submit(true);
    }
  };
  const progress = () => allItems().filter(item => String(attempt.answers[item.id] || "").trim()).length;
  const elapsedText = () => {
    const sec = Math.ceil(remaining() / 1000), min = Math.floor(sec / 60);
    return String(min).padStart(2,"0")+":"+String(sec % 60).padStart(2,"0");
  };

  function submit(expired = false) {
    if (attempt.status !== "running") return;
    attempt.status = "submitted";
    attempt.submitted_at = now();
    attempt.timed_out = expired;
    persist();
    render();
  }

  const button = (label, cls, action) => {
    const b = create("button", "exam-btn " + (cls || ""), label);
    b.type = "button";
    b.addEventListener("click", action);
    return b;
  };

  function showIdle(box) {
    box.appendChild(create("p", "", "Đề vẫn hiển thị bên dưới để em đọc và làm trên giấy. Bấm bắt đầu để mở đồng hồ 120 phút và ô ghi nháp theo từng ý."));
    box.appendChild(create("p", "exam-caution", "Đáp án và rubric chỉ hiện trong giao diện khi nộp bài hoặc hết giờ. Đây là cơ chế tự học trên GitHub Pages, không phải khóa đề thi an toàn trước người có thể mở URL đáp án trực tiếp."));
    box.appendChild(button("▶ Bắt đầu làm đề 120 phút", "exam-primary", () => {
      attempt.status = "running";
      attempt.started_at = now();
      attempt.deadline_at = attempt.started_at + blueprint.duration_minutes * 60 * 1000;
      attempt.answers = {}; attempt.rubric = {}; attempt.answer_opened = false;
      attempt.self_attested = false; attempt.self_score = null; attempt.finalized_at = null; attempt.timed_out = false;
      persist(); render();
    }));
  }

  function showRunning(box) {
    const top = create("div", "exam-status-bar");
    timerEl = create("strong", "exam-timer", elapsedText());
    timerEl.setAttribute("role", "timer");
    top.append(create("span", "", "Thời gian còn lại"), timerEl,
      create("span", "exam-progress", progress() + "/" + allItems().length + " ý đã ghi nháp"));
    box.appendChild(top);
    box.appendChild(create("p","exam-caution","Thời gian tiếp tục chạy nếu tải lại hoặc đóng tab. Ghi bài giải chính trên giấy; ô dưới đây chỉ để giữ kết quả và ý tưởng."));
    const fields = create("div","exam-answers");
    allItems().forEach(item => {
      const wrap = create("label","exam-answer-item");
      const heading = create("strong","", "Bài "+item.id+" · tối đa "+formatPoints(item.points)+" điểm");
      const input = document.createElement("textarea");
      input.rows = 2; input.maxLength = 2500; input.value = attempt.answers[item.id] || "";
      input.placeholder = "Ghi kết quả cuối và các ý đã chứng minh; làm bài chi tiết trên giấy.";
      input.setAttribute("aria-label","Nháp bài "+item.id);
      input.addEventListener("input",() => {
        attempt.answers[item.id] = input.value; persist();
        const p = box.querySelector(".exam-progress");
        if (p) p.textContent=progress()+"/"+allItems().length+" ý đã ghi nháp";
      });
      wrap.append(heading,input);fields.appendChild(wrap);
    });
    box.appendChild(fields);
    const footer = create("div","exam-footer");
    footer.append(button("Nộp bài", "exam-primary", () => {
      if (confirm("Em đã làm xong và muốn nộp bài? Sau khi nộp không thể sửa nháp trong lượt này.")) submit(false);
    }));
    box.appendChild(footer);
  }

  function openSolution(box) {
    const a = create("a","exam-solution-link","📖 Mở đáp án chi tiết và thang điểm ở tab mới");
    a.href=prefix+blueprint.answer_uri; a.target="_blank"; a.rel="noopener";
    a.addEventListener("click",() => {
      attempt.answer_opened = true;
      persist();
      render();
    });
    box.appendChild(a);
    const confirmViewed = button("Tôi đã đối chiếu lời giải trên giấy", "exam-secondary", () => {
      attempt.answer_opened=true;persist();render();
    });
    box.appendChild(confirmViewed);
  }

  function showScoring(box) {
    box.appendChild(create("p","exam-message", attempt.timed_out ?
      "Đã hết 120 phút. Bài được nộp tự động; em hãy mở đáp án và đối chiếu từng bước." :
      "Bài đã nộp. Em hãy mở đáp án, so bài trên giấy và chỉ tích những bước bản thân thực sự làm đúng."));
    box.appendChild(create("p","exam-caution","Không phải điểm AI chấm. Điểm là do em tự đối chiếu rubric; nếu chỉ có đáp số nhưng thiếu lập luận thì không chọn bước lập luận."));
    openSolution(box);
    if (!attempt.answer_opened) {
      box.appendChild(create("p","","Các ô tự chấm sẽ xuất hiện sau khi em xác nhận đã đối chiếu lời giải."));
      return;
    }
    const summary=create("strong","exam-score","Điểm tự đối chiếu: "+formatPoints(score())+" / 10,00");
    box.appendChild(summary);
    allItems().forEach(item => {
      const block=create("fieldset","exam-rubric-item");
      const legend=create("legend","", "Bài "+item.id+" · "+formatPoints(pointFor(item))+" / "+formatPoints(item.points)+" điểm");
      block.appendChild(legend);
      item.criteria.forEach((step,n) => {
        const label=create("label","exam-criterion");
        const cb=document.createElement("input");cb.type="checkbox";cb.checked=attempt.rubric[item.id]?.[n] === true;
        cb.disabled=attempt.status==="finalized";
        cb.addEventListener("change",() => {
          if (!attempt.rubric[item.id]) attempt.rubric[item.id]={};
          attempt.rubric[item.id][n]=cb.checked;
          attempt.self_attested=false;persist();render();
        });
        label.append(cb,create("span","",step.text),create("strong","",formatPoints(step.points)+" đ"));
        block.appendChild(label);
      });box.appendChild(block);
    });
    if (attempt.status !== "finalized") {
      const attest=create("label","exam-attest");
      const cb=document.createElement("input");cb.type="checkbox";cb.checked=attempt.self_attested;
      cb.addEventListener("change",()=>{attempt.self_attested=cb.checked;persist();render();});
      attest.append(cb,create("span","","Tôi đã so từng bước với bài trên giấy và hiểu rằng đây là điểm tự chấm."));
      box.appendChild(attest);
      const done=button("Chốt điểm tự chấm", "exam-primary", () => {
        if (!attempt.self_attested) return;
        attempt.status="finalized"; attempt.finalized_at=now();
        attempt.self_score=Math.round(score()*100)/100;
        persist();render();
      });
      done.disabled=!attempt.self_attested;
      box.appendChild(done);
    } else showGaps(box);
  }

  const anchorHref = (id, library) => {
    const a = library?.anchors?.find(x=>x.id===id);
    const source = a?.deep_dive_uri || a?.source_uri || "kho-bai-mo-neo/";
    return prefix + "kien-thuc/25-tong-hop-on-thi-10/" + source;
  };

  function showGaps(box) {
    box.appendChild(create("p","exam-message","Đã lưu: "+formatPoints(attempt.self_score)+" / 10,00 điểm tự chấm. Đây không phải điểm được giáo viên hay AI xác nhận."));
    const gaps=allItems().map(item=>({item,miss:Math.round((item.points-pointFor(item))*100)/100}))
      .filter(x=>x.miss>0).sort((a,b)=>b.miss-a.miss);
    const section=create("section","exam-gap-list");
    section.appendChild(create("h3","","Gợi ý vá lỗ hổng theo từng ý"));
    if (!gaps.length) section.appendChild(create("p","","Không có bước nào bị bỏ trống theo rubric em đã tự chấm. Hãy làm một đề hoặc biến thể mới để kiểm tra độ vững."));
    gaps.forEach(({item,miss})=>{
      const p=create("div","exam-gap");
      p.appendChild(create("strong","","Bài "+item.id+" · còn thiếu "+formatPoints(miss)+" điểm"));
      const linkWrap=create("div","exam-gap-links");
      item.anchor_ids.forEach(id=>{
        const a=create("a","","Bài mỏ neo "+id+" →");a.href=anchorHref(id,blueprint.library);linkWrap.appendChild(a);
      });
      item.topic_uris.forEach(uri=>{
        const a=create("a","","Ôn chuyên đề "+uri.match(/(\d\d)-/)?.[1]+" →");a.href=prefix+uri;linkWrap.appendChild(a);
      });
      p.appendChild(linkWrap);section.appendChild(p);
    });
    box.appendChild(section);
    box.appendChild(button("Làm lại đề (lưu lượt cũ vào lịch sử)", "exam-secondary", () => {
      if (!confirm("Bắt đầu lượt mới? Điểm và trạng thái lượt này sẽ được lưu trong lịch sử cục bộ."))return;
      const history=safeRead(historyKey)||[];
      history.unshift({exam_id:blueprint.id,submitted_at:attempt.submitted_at,
        self_score:attempt.self_score,timed_out:attempt.timed_out});
      safeWrite(historyKey,history.slice(0,30));
      Object.assign(attempt,newAttempt());persist();render();
    }));
  }

  function render() {
    if (!host || !blueprint) return;
    setAnswerLinks();
    host.replaceChildren();
    const top=create("div","exam-engine-heading");
    top.appendChild(create("h2","","⏱️ Phòng luyện đề – "+blueprint.title));
    top.appendChild(create("small","","Bài tự luận · "+blueprint.duration_minutes+" phút · "+formatPoints(blueprint.total_points)+" điểm · lưu cục bộ trên trình duyệt"));
    host.appendChild(top);
    const box=create("div","exam-engine-body");
    if (attempt.status==="idle") showIdle(box);
    else if (attempt.status==="running") showRunning(box);
    else showScoring(box);
    host.appendChild(box);
    if (ticker) clearInterval(ticker);
    if (attempt.status==="running") {
      ticker=setInterval(()=>{
        checkpoint();
        if (attempt.status!=="running")return;
        if (timerEl)timerEl.textContent=elapsedText();
      },1000);
    }
  }

  const init=async()=>{
    if (document.querySelector("[data-exam-engine]"))return;
    const content=document.querySelector(".md-content__inner .md-typeset");
    if (!content)return;
    const first=[...content.querySelectorAll("h2,h3")].find(el=>
      /^Đề bài$/.test(el.textContent.trim()) || /^Bài I\b/.test(el.textContent.trim()));
    if (!first)return;
    host=create("section","exam-engine");host.dataset.examEngine="1";
    host.setAttribute("aria-label","Phòng luyện đề tự luận");
    first.parentNode.insertBefore(host,first);
    host.appendChild(create("p","","Đang tải rubric và đồng hồ luyện đề…"));
    try {
      const [examsRes,anchorsRes]=await Promise.all([
        fetch(prefix+"assets/data/exams/topic25-exams-v1.json"),
        fetch(prefix+"assets/data/anchors/anchor-catalog-v1.json")
      ]);
      if (!examsRes.ok||!anchorsRes.ok)throw Error("Không tải được dữ liệu đề");
      const [data,library]=await Promise.all([examsRes.json(),anchorsRes.json()]);
      blueprint=data.exams.find(x=>x.no===no);
      if (!blueprint || !Array.isArray(blueprint.items)) throw Error("Chưa có cấu hình đề số "+no);
      blueprint.library=library;
      checkpoint();render();
    } catch (e) {
      host.replaceChildren(create("p","exam-caution","Chưa mở được phòng thi tương tác ("+e.message+"). Đề văn bản và đáp án riêng vẫn sử dụng bình thường."));
    }
  };
  if (document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
  if(typeof document$!=="undefined")document$.subscribe(init);
})();