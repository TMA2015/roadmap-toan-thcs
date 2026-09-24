(() => {
"use strict";
const PATH="/kien-thuc/07-phan-thuc-dai-so/";
const STORAGE="toan-thcs-practice-v1";
const sections=[
 ["map","🗺️ Bản đồ","1. Bản đồ kiến thức"],
 ["goals","🎯 Mục tiêu","2. Mục tiêu cần đạt"],
 ["core","📖 Cốt lõi","3. Kiến thức cốt lõi"],
 ["links","🔗 Liên quan","4. Kiến thức liên quan"],
 ["types","🧩 Dạng bài","5. Các dạng bài cần nắm vững"],
 ["exam","🚀 Thi vào 10","6. Dạng bài thi vào lớp 10"],
 ["errors","⚠️ Lỗi sai","7. Lỗi sai thường gặp"],
 ["practice","📝 Luyện tập","8. Luyện tập"],
 ["check","✅ Tự kiểm tra","9. Tự kiểm tra"],
 ["roadmap","🔄 Roadmap","10. Liên kết Roadmap"],
 ["finish","🏁 Hoàn thành","11. Điều kiện hoàn thành"]
];
const normalize=s=>(s||"").replace(/\s+/g," ").trim();
const findHeading=(label)=>[...document.querySelectorAll(".md-content h2")].find(h=>normalize(h.textContent).includes(label));
const progress=()=>{
 try{
  const d=JSON.parse(localStorage.getItem(STORAGE))||{tags:{}};
  const skills=["khai-niem-phan-thuc","dieu-kien-xac-dinh","rut-gon-phan-thuc","quy-dong-mau-thuc","cong-tru-phan-thuc","nhan-chia-phan-thuc"];
  const seen=skills.map(s=>d.tags?.[s]).filter(r=>r?.attempted);
  if(!seen.length)return 0;
  return Math.round(seen.reduce((sum,r)=>sum+(r.correct/r.attempted),0)/skills.length*100);
 }catch(_){return 0}
};
const wrapSection=(heading,id,index)=>{
 const details=document.createElement("details");details.className="topic-learning-card";details.id=id;
 if(index<3)details.open=true;
 const summary=document.createElement("summary");summary.innerHTML=`${heading.textContent}<span class="topic-section-badge">${index<3?"mở sẵn":"chạm để mở"}</span>`;
 const body=document.createElement("div");body.className="topic-learning-card-body";
 heading.parentNode.insertBefore(details,heading);
 details.append(summary,body);
 let node=heading.nextSibling;heading.remove();
 while(node && !(node.nodeType===1 && node.tagName==="H2")){
   const next=node.nextSibling;body.appendChild(node);node=next;
 }
};
const init=()=>{
 if(!location.pathname.includes(PATH))return;
 const content=document.querySelector(".md-content__inner");if(!content)return;
 const h1=content.querySelector("h1");if(!h1)return;
 const pct=progress();
 const hero=document.createElement("section");hero.className="topic-workspace-hero";
 hero.innerHTML=`<div class="topic-workspace-kicker">Roadmap 25 · Chuyên đề 07</div><h1>Phân thức đại số</h1><div>Cầu nối từ phân tích đa thức đến phương trình chứa ẩn ở mẫu.</div><div class="topic-workspace-meta"><span class="topic-chip">KNTT Core</span><span class="topic-chip">Lớp 8</span><span class="topic-chip">Đại số</span><span class="topic-chip">⭐⭐⭐⭐⭐</span></div><div class="topic-progress-wrap"><span>Tiến độ evidence hiện có</span><strong>${pct}%</strong><progress max="100" value="${pct}"></progress></div><div class="topic-workspace-actions"><a href="#core">📖 Học cốt lõi</a><a href="bai-tap/">🎯 Luyện tập</a><a href="#map">🗺️ Bản đồ</a><a href="#errors">⚠️ Lỗi thường gặp</a></div>`;
 h1.replaceWith(hero);
 const nav=document.createElement("nav");nav.className="topic-workspace-nav";nav.innerHTML='<div class="topic-workspace-nav-title">Đi nhanh trong chuyên đề</div><div class="topic-workspace-nav-list">'+sections.map(([id,label])=>`<a href="#${id}">${label}</a>`).join("")+"</div>";
 hero.after(nav);
 sections.forEach(([id,,label],i)=>{const h=findHeading(label);if(h)wrapSection(h,id,i)});
 const links=[...nav.querySelectorAll("a")];
 const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle("is-active",a.getAttribute("href")==="#"+e.target.id))}}),{rootMargin:"-25% 0px -65% 0px"});
 sections.forEach(([id])=>{const el=document.getElementById(id);if(el)obs.observe(el)});
 const fab=document.createElement("button");fab.className="topic-workspace-fab";fab.type="button";fab.textContent="🤖 Hỏi gia sư";
 const panel=document.createElement("div");panel.className="topic-workspace-fab-panel";panel.hidden=true;panel.innerHTML="<strong>🤖 Gia sư theo context</strong><p>Ở pilot này, gia sư tương tác đầy đủ nằm trong phần luyện tập. Khi đọc kiến thức, nút này giúp bạn đi thẳng tới nơi có Tutor + learner evidence.</p><a class='md-button md-button--primary' href='bai-tap/'>Mở luyện tập với gia sư</a>";
 fab.onclick=()=>{panel.hidden=!panel.hidden};document.body.append(panel,fab);
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();