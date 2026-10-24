(() => {
  "use strict";
  // Safe, read-only legacy content presentation pilot on four owner-approved topics.
  // Never moves a question to another bank or changes an answer, ID, grade or history.
  const rules={
    "02-so-va-phep-tinh":{collapse:true,title:/^B\.\s*.*Luyện tự luận/i,stop:/^(?:Theo dõi tiến độ|Liên kết Roadmap)/i},
    "03-ti-le-ti-le-thuc":{collapse:false}, // retains independently tested M1–M4 focus pilot
    "04-bieu-thuc-dai-so":{collapse:true,title:/^B\.\s*.*Luyện tự luận/i,stop:/^(?:Theo dõi sau khi luyện|Liên kết Roadmap)/i},
    "21-thong-ke":{collapse:true,title:/^B\.\s*.*Luyện tự luận/i,stop:/^(?:Theo dõi tiến độ|Theo dõi sau khi luyện|Liên kết Roadmap)/i}
  };
  const path=location.pathname.replace(/\/index\.html$/,"/");
  const match=path.match(/\/kien-thuc\/(\d\d-[^/]+)\/bai-tap\/$/);
  const slug=match?.[1],config=rules[slug];
  if(!config)return;
  const siteBase=path.split("/kien-thuc/")[0]||"";
  const make=(tag,cls,text)=>{const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node;};
  const init=()=>{
    const root=document.querySelector(".md-content__inner");
    if(!root||root.querySelector("[data-practice-role-pilot]"))return;
    const topicId="CT"+slug.slice(0,2);
    const intro=make("section","practice-role-summary");
    intro.dataset.practiceRolePilot=topicId;
    intro.append(
      make("h2","","Luyện tập trực tiếp"),
      make("p","","Trả lời ngay trên website để nhận phản hồi và luyện lại câu sai. Em có thể mở gợi ý khi luyện; đây không phải bài Tự kiểm tra độc lập.")
    );
    const nav=make("div","practice-role-links");
    const paper=make("a","","Bài cần trình bày trên giấy →");
    paper.href=siteBase+"/luyen-tap/?topic="+encodeURIComponent(topicId);
    const check=make("a","","Tự kiểm tra không gợi ý →");
    check.href=siteBase+"/kien-thuc/"+slug+"/tu-kiem-tra/";
    nav.append(paper,check);intro.append(nav);
    const first=root.querySelector("blockquote");
    if(first)first.after(intro);else {
      const h1=root.querySelector("h1");
      if(h1)h1.after(intro);else root.prepend(intro);
    }
    if(!config.collapse)return;

    const headings=[...root.children].filter(x=>/^H[1-3]$/.test(x.tagName));
    const start=headings.find(h=>config.title.test(h.textContent.trim()));
    if(!start)return;
    const nodes=[...root.children],index=nodes.indexOf(start);
    if(index<0)return;
    let until=nodes.findIndex((node,i)=>i>index && /^H[1-3]$/.test(node.tagName)&&config.stop.test(node.textContent.trim()));
    if(until<0)until=nodes.length;
    const block=nodes.slice(index,until);
    if(block.length<2)return;
    const details=make("details","practice-role-legacy");
    details.dataset.legacyExercises=topicId;
    const summary=make("summary","","Bài làm trên giấy từ kho cũ · mở khi cần");
    const lead=make("p","practice-role-legacy-note","Các bài này đang được rà soát từng câu để chuyển về đúng hình thức học. Em không cần làm hết; chỉ chọn những bài phù hợp với kiến thức đã học. Nội dung, gợi ý và lời giải gốc vẫn được giữ lại.");
    start.before(details);
    details.append(summary,lead);
    block.forEach(node=>details.append(node));
    document.body.classList.add("practice-role-compact");
    const openIfTargeted=()=>{
      const hash=decodeURIComponent(location.hash.slice(1));
      if(hash && details.querySelector('[id="'+CSS.escape(hash)+'"]'))details.open=true;
    };
    openIfTargeted();
    window.addEventListener("hashchange",openIfTargeted);
  };
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
  if(typeof document$!=="undefined")document$.subscribe(init);
})();
