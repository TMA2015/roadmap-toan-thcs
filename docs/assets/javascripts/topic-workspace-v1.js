(() => {
"use strict";
const PATH="/kien-thuc/07-phan-thuc-dai-so/";
const STORAGE="toan-thcs-practice-v1";
const CARD_DATA="assets/data/curriculum/topic07-learning-workspace.json";
const KG_DATA="assets/data/curriculum/knowledge-graph-v1.json";
const siteRoot=()=>{const marker="/kien-thuc/";const p=window.location.pathname;return p.includes(marker)?(p.split(marker)[0]||""):""};
const siteAsset=rel=>`${siteRoot()}/${String(rel||"").replace(/^\/+/,"")}`;
const SKILL_LABELS={
 "nhan-tu-chung":"nhân tử chung",
 "hieu-hai-binh-phuong":"hiệu hai bình phương",
 "phan-tich-tu-mau":"phân tích tử/mẫu",
 "quy-dong-mau-thuc":"quy đồng mẫu",
 "bo-ngoac-dau":"bỏ ngoặc",
 "cong-tru-da-thuc":"cộng/trừ đa thức",
 "rut-gon-phan-thuc":"rút gọn phân thức"
};
const skillLabel=id=>SKILL_LABELS[id]||String(id||"").replaceAll("-"," ");
const sections=[
 ["map","🗺️ Bản đồ","1. Bản đồ kiến thức"],["goals","🎯 Mục tiêu","2. Mục tiêu cần đạt"],["core","📖 Cốt lõi","3. Kiến thức cốt lõi"],["links","🔗 Liên quan","4. Kiến thức liên quan"],["types","🧩 Dạng bài","5. Các dạng bài cần nắm vững"],["exam","🚀 Thi vào 10","6. Dạng bài thi vào lớp 10"],["errors","⚠️ Lỗi sai","7. Lỗi sai thường gặp"],["practice","📝 Luyện tập","8. Luyện tập"],["check","✅ Tự kiểm tra","9. Tự kiểm tra"],["roadmap","🔄 Roadmap","10. Liên kết Roadmap"],["finish","🏁 Hoàn thành","11. Điều kiện hoàn thành"]
];
const normalize=s=>(s||"").replace(/\s+/g," ").trim();
const findHeading=label=>[...document.querySelectorAll(".md-content h2")].find(h=>normalize(h.textContent).includes(label));
const typeset=el=>window.MathJax?.typesetPromise?.([el]).catch(()=>{});
const loadStats=()=>window.RoadmapLearnerEvidence?.load?.()||(()=>{try{return JSON.parse(localStorage.getItem(STORAGE))||{tags:{}}}catch(_){return{tags:{}}}})();
const progress=()=>{
 const d=loadStats();
 const skills=["nhan-biet-phan-thuc","dieu-kien-xac-dinh","rut-gon-phan-thuc","quy-dong-mau-thuc","cong-tru-phan-thuc","nhan-phan-thuc","chia-phan-thuc"];
 return Math.round(skills.reduce((sum,s)=>{const r=d.tags?.[s];return sum+(r?.attempted?(r.correct/r.attempted):0)},0)/skills.length*100);
};
const wrapSection=(heading,id,index)=>{
 const details=document.createElement("details");details.className="topic-learning-card";details.id=id;if(index<3)details.open=true;
 const summary=document.createElement("summary");summary.innerHTML=`${heading.textContent}<span class="topic-section-badge">${index<3?"mở sẵn":"chạm để mở"}</span>`;
 const body=document.createElement("div");body.className="topic-learning-card-body";heading.parentNode.insertBefore(details,heading);details.append(summary,body);
 let node=heading.nextSibling;heading.remove();while(node&&!(node.nodeType===1&&node.tagName==="H2")){const next=node.nextSibling;body.appendChild(node);node=next}
};
const renderTutor=async(panel,question,selectedText,graph)=>{
 panel.hidden=false;panel.innerHTML="<strong>🤖 Gia sư đang xem evidence…</strong>";
 try{
  const skill=(question.tags?.skill||[])[0];const stats=loadStats();
  const context=window.RoadmapTutor.buildContext({projectContextVersion:"1.0.17",layer:"KNTT-Core",gradeOverlay:8,skill,question,learnerAnswer:selectedText,hintLevel:0,stats,graph,recovery:{events:[]}});
  const response=await window.RoadmapTutor.run({provider:"mock",context});
  panel.innerHTML=`<strong>🤖 Gia sư · QA local</strong><div>${response.message}</div><div class="topic-micro-note">${response.confidence==="evidenced"?"Dựa trên learner evidence đủ ngưỡng.":"Observed signal chỉ là gợi ý, không phải chẩn đoán điểm yếu."}</div>`;
  if(response.action_type==="REMEDIATE"&&response.target_skill){const topic=graph?.nodes?.[response.target_skill]?.topic;if(topic){const a=document.createElement("a");a.className="md-button";a.textContent=`Ôn ngay: ${response.target_skill.replaceAll("-"," ")}`;a.href=`${siteRoot()}/kien-thuc/${topic}/bai-tap/?focus=${encodeURIComponent(response.target_skill)}&mode=remediation`;panel.appendChild(a)}}
 }catch(_){panel.innerHTML="<strong>🤖 Gia sư</strong><div>Chưa thể mở trợ giúp lúc này.</div>"}
};
const mountMicro=(host,card,questions,graph)=>{
 host.innerHTML="";host.className="topic-micro-panel";let index=0,score=0,hintsUsed=0;
 const render=()=>{
  host.innerHTML="";if(index>=questions.length){host.innerHTML=`<div class="topic-micro-summary"><strong>Hoàn thành 3 câu: ${score}/3</strong><div>Kết quả đã được ghi vào cùng learner evidence với Practice Engine. Đây không phải hard gate.</div></div>`;return}
  const q=questions[index];hintsUsed=0;
  const meta=document.createElement("div");meta.className="topic-micro-meta";meta.textContent=`Câu ${index+1}/3 · ${q.micro_role==="base"?"Nền tảng":q.micro_role==="trap"?"Bẫy sai điển hình":"Vận dụng Core"}`;
  const prompt=document.createElement("div");prompt.className="topic-micro-question";prompt.textContent=q.question;
  const opts=document.createElement("div");opts.className="topic-micro-options";
  const feedback=document.createElement("div");feedback.className="topic-micro-feedback";feedback.hidden=true;
  const tutor=document.createElement("div");tutor.className="topic-micro-tutor";tutor.hidden=true;
  q.options.forEach((text,idx)=>{const b=document.createElement("button");b.type="button";b.className="practice-btn topic-micro-option";b.textContent=text;b.onclick=()=>{
    if(opts.dataset.answered)return;opts.dataset.answered="1";const correct=idx===q.answer;if(correct)score++;
    const result=window.RoadmapLearnerEvidence?.recordAnswer?.({question:q,correct,selectedIndex:idx,hintsUsed})||{signal:null};
    [...opts.children].forEach((x,i)=>{x.disabled=true;if(i===q.answer)x.classList.add("is-correct");if(i===idx&&!correct)x.classList.add("is-wrong")});
    feedback.hidden=false;feedback.classList.add(correct?"is-correct":"is-wrong");
    feedback.innerHTML=`<strong>${correct?"✓ Chính xác":"✗ Chưa đúng"}</strong><div>${q.explanation}</div>${result.signal?.feedback_hint?`<div class="topic-micro-signal">🔎 Tín hiệu quan sát: ${result.signal.feedback_hint}</div>`:""}`;
    const actions=document.createElement("div");actions.className="topic-micro-actions";
    if(!correct&&window.RoadmapTutor){const t=document.createElement("button");t.type="button";t.className="practice-btn";t.textContent="🤖 Hỏi gia sư";t.onclick=()=>renderTutor(tutor,q,text,graph);actions.appendChild(t)}
    const next=document.createElement("button");next.type="button";next.className="practice-btn practice-btn-primary";next.textContent=index===2?"Xem kết quả":"Câu tiếp theo";next.onclick=()=>{index++;render()};actions.appendChild(next);feedback.appendChild(actions);typeset(host);
  };opts.appendChild(b)});
  const hint=document.createElement("button");hint.type="button";hint.className="practice-btn topic-micro-hint";hint.textContent="💡 Gợi ý";hint.onclick=()=>{if(hintsUsed>=q.hints.length)return;const d=document.createElement("div");d.className="practice-hint";d.textContent=q.hints[hintsUsed++];host.insertBefore(d,feedback);if(hintsUsed>=q.hints.length)hint.disabled=true;typeset(host)};
  host.append(meta,prompt,opts,hint,feedback,tutor);typeset(host);
 };render();
};
const renderCoreCards=async hero=>{
 try{
  const cardRes=await fetch(siteAsset(CARD_DATA));if(!cardRes.ok)return;const data=await cardRes.json();
  const [microRes,graphRes]=await Promise.all([fetch(siteAsset(data.micro_practice_bank)),fetch(siteAsset(KG_DATA))]);
  const micro=microRes.ok?await microRes.json():{questions:[]};const graph=graphRes.ok?await graphRes.json():null;const byId=new Map((micro.questions||[]).map(q=>[q.id,q]));
  const host=document.createElement("section");host.className="topic-core-journey";host.id="core-journey";
  host.innerHTML='<div class="topic-core-journey-head"><div><span class="topic-workspace-kicker">KNTT Core · 5 chặng học</span><h2>Học theo chặng, kiểm tra ngay</h2></div><span class="topic-chip">15 câu kiểm tra nhanh</span></div>';
  const grid=document.createElement("div");grid.className="topic-core-card-grid";
  data.cards.forEach((card,i)=>{const el=document.createElement("article");el.className="topic-core-card";el.dataset.cardId=card.id;
    const prereqNames=card.prerequisites.map(skillLabel);
    const pre=prereqNames.length?`<div class="topic-core-prereq topic-core-prereq-full">Nền tảng: ${prereqNames.join(" · ")}</div><div class="topic-core-prereq topic-core-prereq-compact" title="Nền tảng: ${prereqNames.join(" · ")}">Nền tảng: ${prereqNames.length} kỹ năng</div>`:"<div class=\"topic-core-prereq topic-core-prereq-empty\">Nền tảng: —</div>";
    el.innerHTML=`<div class="topic-core-card-main"><div class="topic-core-card-top"><span class="topic-core-card-number">${i+1}</span><span class="topic-core-card-lesson">${card.kntt_lessons.join(" · ")}</span></div><h3>${card.title}</h3>${pre}<div class="topic-core-card-meta"><span>${card.skills.length} kỹ năng</span><span>3 câu nhanh</span></div><button type="button" class="practice-btn topic-micro-start">✏️ Thử 3 câu</button></div><div class="topic-micro-mount"></div>`;
    const btn=el.querySelector(".topic-micro-start");const mount=el.querySelector(".topic-micro-mount");btn.onclick=()=>{const open=el.classList.toggle("is-active");btn.textContent=open?"Đóng":"✏️ Thử 3 câu";if(open&&!mount.dataset.loaded){const qs=card.micro_practice.map(id=>byId.get(id)).filter(Boolean);mount.dataset.loaded="1";mountMicro(mount,card,qs,graph)}};
    grid.appendChild(el)});
  host.appendChild(grid);const ext=document.createElement("details");ext.className="topic-extension-zone";ext.innerHTML='<summary>🚀 Entrance10 / Challenge <span>không tính vào hoàn thành KNTT Core</span></summary><div class="topic-extension-list">'+data.extensions.map(x=>`<span class="topic-chip">${x.layer}: ${x.title}</span>`).join("")+"</div>";host.appendChild(ext);hero.after(host);
 }catch(_){}
};
const init=()=>{
 if(!location.pathname.includes(PATH)||/\/bai-tap\/?$|\/tu-kiem-tra\/?$/.test(location.pathname))return;
 const content=document.querySelector(".md-content__inner");if(!content)return;const h1=content.querySelector("h1");if(!h1)return;const pct=progress();
 const hero=document.createElement("section");hero.className="topic-workspace-hero";hero.innerHTML=`<div class="topic-workspace-kicker">Roadmap 25 · Chuyên đề 07</div><h1>Phân thức đại số</h1><div>Cầu nối từ phân tích đa thức đến phương trình chứa ẩn ở mẫu.</div><div class="topic-workspace-meta"><span class="topic-chip">KNTT Core</span><span class="topic-chip">Lớp 8</span><span class="topic-chip">Đại số</span><span class="topic-chip">⭐⭐⭐⭐⭐</span></div><div class="topic-progress-wrap"><span>Tiến độ evidence hiện có</span><strong>${pct}%</strong><progress max="100" value="${pct}"></progress></div><div class="topic-workspace-actions"><a href="#core-journey">🧩 5 chặng Core</a><a href="bai-tap/">🎯 Luyện tập lớn</a><a href="#map">🗺️ Bản đồ</a><a href="#errors">⚠️ Lỗi thường gặp</a></div>`;h1.replaceWith(hero);
 const nav=document.createElement("nav");nav.className="topic-workspace-nav";nav.innerHTML='<div class="topic-workspace-nav-title">Đi nhanh trong chuyên đề</div><div class="topic-workspace-nav-list">'+sections.map(([id,label])=>`<a href="#${id}">${label}</a>`).join("")+"</div>";hero.after(nav);renderCoreCards(hero);
 sections.forEach(([id,,label],i)=>{const h=findHeading(label);if(h)wrapSection(h,id,i)});
 const links=[...nav.querySelectorAll("a")];const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("is-active",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-25% 0px -65% 0px"});sections.forEach(([id])=>{const el=document.getElementById(id);if(el)obs.observe(el)});
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();