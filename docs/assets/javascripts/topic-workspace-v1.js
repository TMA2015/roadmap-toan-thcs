(() => {
"use strict";
const PATH="/kien-thuc/07-phan-thuc-dai-so/";
const STORAGE="toan-thcs-practice-v1";
const CARD_DATA="assets/data/curriculum/topic07-learning-workspace.json";
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
const renderCoreCards=async(hero)=>{
 try{
  const url=new URL(CARD_DATA,document.baseURI);
  const res=await fetch(url);if(!res.ok)return;
  const data=await res.json();
  const host=document.createElement("section");host.className="topic-core-journey";host.id="core-journey";
  host.innerHTML='<div class="topic-core-journey-head"><div><span class="topic-workspace-kicker">KNTT Core · 5 chặng học</span><h2>Học theo chặng, không theo trang dài</h2></div><span class="topic-chip">Core độc lập Extension</span></div>';
  const grid=document.createElement("div");grid.className="topic-core-card-grid";
  data.cards.forEach((card,i)=>{
    const el=document.createElement("article");el.className="topic-core-card";
    const pre=card.prerequisites.length?`<div class="topic-core-prereq">Nền tảng: ${card.prerequisites.map(x=>x.replaceAll("-"," ")).join(" · ")}</div>`:"";
    el.innerHTML=`<div class="topic-core-card-number">${i+1}</div><div><div class="topic-core-card-lesson">${card.kntt_lessons.join(" · ")}</div><h3>${card.title}</h3>${pre}<div class="topic-core-card-meta">${card.skills.length} skill · 3 micro-practice · ${card.misconceptions.length} bẫy sai</div></div>`;
    grid.appendChild(el);
  });
  host.appendChild(grid);
  const ext=document.createElement("details");ext.className="topic-extension-zone";ext.innerHTML='<summary>🚀 Entrance10 / Challenge <span>không tính vào hoàn thành KNTT Core</span></summary><div class="topic-extension-list">'+data.extensions.map(x=>`<span class="topic-chip">${x.layer}: ${x.title}</span>`).join("")+"</div>";
  host.appendChild(ext);hero.after(host);
 }catch(_){}
};

const init=()=>{
 if(!location.pathname.includes(PATH) || /\/bai-tap\/?$|\/tu-kiem-tra\/?$/.test(location.pathname))return;
 const content=document.querySelector(".md-content__inner");if(!content)return;
 const h1=content.querySelector("h1");if(!h1)return;
 const pct=progress();
 const hero=document.createElement("section");hero.className="topic-workspace-hero";
 hero.innerHTML=`<div class="topic-workspace-kicker">Roadmap 25 · Chuyên đề 07</div><h1>Phân thức đại số</h1><div>Cầu nối từ phân tích đa thức đến phương trình chứa ẩn ở mẫu.</div><div class="topic-workspace-meta"><span class="topic-chip">KNTT Core</span><span class="topic-chip">Lớp 8</span><span class="topic-chip">Đại số</span><span class="topic-chip">⭐⭐⭐⭐⭐</span></div><div class="topic-progress-wrap"><span>Tiến độ evidence hiện có</span><strong>${pct}%</strong><progress max="100" value="${pct}"></progress></div><div class="topic-workspace-actions"><a href="#core">📖 Học cốt lõi</a><a href="bai-tap/">🎯 Luyện tập</a><a href="#map">🗺️ Bản đồ</a><a href="#errors">⚠️ Lỗi thường gặp</a></div>`;
 h1.replaceWith(hero);
 const nav=document.createElement("nav");nav.className="topic-workspace-nav";nav.innerHTML='<div class="topic-workspace-nav-title">Đi nhanh trong chuyên đề</div><div class="topic-workspace-nav-list">'+sections.map(([id,label])=>`<a href="#${id}">${label}</a>`).join("")+"</div>";
 hero.after(nav);
 renderCoreCards(hero);
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