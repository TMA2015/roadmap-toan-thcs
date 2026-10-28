(() => {
  "use strict";
  const originPrefix=()=>{const m=location.pathname.match(/^\/(roadmap-toan-thcs|self-learning-math)\//);return m?"/"+m[1]+"/":"/";};
  const create=(tag,cls,text)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(text!==undefined)x.textContent=text;return x;};
  const app=()=>document.querySelector("[data-anchor-browser]");
  const init=async()=>{
    const root=app();if(!root||root.dataset.ready==="1")return;
    root.dataset.ready="loading";
    const base=originPrefix();
    let library;
    try {
      const res=await fetch(base+"assets/data/anchors/anchor-catalog-v1.json",{cache:"no-cache"});
      if(!res.ok)throw Error("HTTP "+res.status);
      library=await res.json();
      if(!Array.isArray(library.anchors)||library.representative_ids.length!==10)throw Error("Danh mục không hợp lệ");
    }catch(err){
      root.dataset.ready="failed";
      root.replaceChildren(create("p","","Không tải được danh mục tương tác; danh sách liên kết đầy đủ bên dưới vẫn dùng được."));
      return;
    }
    const fallback=document.querySelector("[data-anchor-fallback]");
    if(fallback)fallback.hidden=true;
    const relatedTopic=new URLSearchParams(location.search).get("topic")||"";
    let term="",mode=relatedTopic?"all":"representative",strand="all";
    const relatedTopics={
      CT03:["03-ti-le-ti-le-thuc","Tỉ lệ"],
      CT04:["04-bieu-thuc-dai-so","Biểu thức đại số"],
      CT09:["09-he-phuong-trinh","Hệ phương trình"],
      CT10:["10-ham-so-do-thi","Hàm số và đồ thị"],
      CT11:["11-can-thuc","Căn thức"],
      CT12:["12-phuong-trinh-bac-hai-viete","Phương trình bậc hai – Viète"],
      CT15:["15-duong-dong-quy","Các đường đặc biệt của tam giác"],
      CT17:["17-thales-dong-dang","Đồng dạng"],
      CT18:["18-he-thuc-luong","Hệ thức lượng"],
      CT19:["19-duong-tron","Đường tròn"],
      CT24:["24-bai-toan-thuc-te","Bài toán thực tế"]
    };
    const controls=create("div","anchor-filters");
    const modes=create("div","anchor-mode");
    const count=create("p","anchor-count");
    const results=create("div","anchor-results");
    const search=create("input","anchor-search");
    search.type="search";search.maxLength=80;search.placeholder="Tìm theo dạng bài, ID hoặc kiến thức…";search.setAttribute("aria-label","Tìm bài toán kinh điển");
    const group=document.createElement("select");
    group.className="anchor-strand";group.setAttribute("aria-label","Lọc theo mạch kiến thức");
    [["all","Tất cả mạch"],["algebra","Đại số & hàm số"],["geometry","Hình học"],["application","Bài toán thực tế"]].forEach(([value,label])=>{const el=create("option","",label);el.value=value;group.appendChild(el);});
    const render=()=>{
      results.replaceChildren();
      modes.replaceChildren();
      [["representative","10 bài tiêu biểu"],["all","Toàn bộ thư viện ("+library.anchors.length+")"]].forEach(([id,name])=>{
        const btn=create("button","anchor-tab",name);btn.type="button";btn.setAttribute("aria-pressed",String(id===mode));
        btn.addEventListener("click",()=>{mode=id;render();});modes.appendChild(btn);
      });
      const list=library.anchors.filter(a=>(mode==="all"||library.representative_ids.includes(a.id))&&(!relatedTopic||a.topic_ids.includes(relatedTopic))&&(strand==="all"||a.strand===strand)&&[a.id,a.title,...a.skill_tags,...a.topic_ids].join(" ").toLowerCase().includes(term));
      count.textContent=list.length+" bài đang hiển thị"+(relatedTopic?" · Liên hệ với "+relatedTopic.replace("CT","CĐ"):"")+" · Kho có "+library.anchors.length+" bài, gồm 10 bài tiêu biểu.";
      if(!list.length){results.appendChild(create("p","","Không tìm thấy bài phù hợp. Hãy đổi bộ lọc."));return;}
      list.forEach(a=>{
        const card=create("article","anchor-result");
        const row=create("div","anchor-result-heading");
        row.append(create("strong","",a.id),create("span","",a.representative?"Bài tiêu biểu":"Bài bổ sung"));
        const title=create("h3","",a.title);
        const tag=create("div","anchor-tags");
        const context=create("p","","Luyện vận dụng · Ôn thi vào lớp 10");tag.appendChild(context);
        const related=create("p","");related.appendChild(document.createTextNode("Ôn kiến thức: "));
        a.topic_ids.forEach((id,i)=>{const spec=relatedTopics[id];if(!spec)return;
          if(i)related.appendChild(document.createTextNode(" · "));
          const link=create("a","",id.replace("CT","CĐ")+" "+spec[1]);link.href=base+"kien-thuc/"+spec[0]+"/";related.appendChild(link);
        });
        tag.appendChild(related);
        const status=create("p","anchor-depth",a.content_depth==="full_solution_with_variants"?"Có lời giải từng bước và bài luyện thêm"+(a.figure_uris.length?" · có hình minh họa":""):"Có lời giải mẫu trong tuyển tập");
        const link=create("a","anchor-link",a.deep_dive_uri?"Xem bài và hướng dẫn chi tiết →":"Xem bài này trong tuyển tập →");
        link.href=base+"kien-thuc/25-tong-hop-on-thi-10/"+(a.deep_dive_uri||a.source_uri);
        row.appendChild(title);card.append(row,tag,status,link);results.appendChild(card);
      });
    };
    search.addEventListener("input",()=>{term=search.value.toLowerCase().trim();render();});
    group.addEventListener("change",()=>{strand=group.value;render();});
    controls.append(search,group);
    root.replaceChildren(modes,controls,count,results);
    root.dataset.ready="1";render();
  };
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
  if(typeof document$!=="undefined")document$.subscribe(init);
})();
