(() => {
  "use strict";
  // DOM-only, opt-in pilot on two existing long written-practice pages.
  // Moves original authored Markdown blocks without editing, cloning or grading items.
  const page=location.pathname.replace(/\/index\.html$/,"/");
  if(!/\/kien-thuc\/(?:03-ti-le-ti-le-thuc|22-dai-luong-dac-trung)\/bai-tap\/$/.test(page))return;
  const root=document.querySelector(".md-content__inner");
  if(!root||root.querySelector("[data-practice-level-focus]"))return;
  const children=[...root.children];
  const isHeading=n=>/^H[1-6]$/.test(n.tagName);
  const levels=children.filter(n=>isHeading(n)&&/^Mức\s+[1-4]\s*[–—-]/i.test((n.textContent||"").trim()));
  const positions=levels.map(n=>children.indexOf(n));
  if(levels.length!==4||new Set(positions).size!==4||positions.some((n,i)=>i>0&&n<=positions[i-1]))return;
  const answer=children.find(n=>isHeading(n)&&/^Đáp án nhanh/i.test(n.textContent.trim()));
  const answerAt=answer?children.indexOf(answer):-1;
  if(answerAt<positions[3])return;

  const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
  const shell=el("section","practice-level-focus");
  shell.dataset.practiceLevelFocus="1";
  const intro=el("p","practice-level-intro","Bài tự luyện để em tự xem mình đã hiểu kiến thức đến đâu. Chọn một mức và giải trên giấy trước khi mở đáp án. Đây không phải bài kiểm tra tự chấm điểm hay Core Readiness.");
  const nav=el("div","practice-level-switch");
  nav.setAttribute("role","group");nav.setAttribute("aria-label","Chọn mức độ bài tự luyện");
  const panels=el("div","practice-level-panels");
  const labels=["Nhận biết","Thông hiểu","Vận dụng","Tổng hợp"];
  const buttons=[];
  const selected=[];
  levels.forEach((heading,i)=>{
    const panel=el("section","practice-level-panel");
    panel.id="practice-focus-m"+(i+1);panel.dataset.focusLevel=String(i+1);
    const until=i<3?positions[i+1]:answerAt;
    children.slice(positions[i],until).forEach(n=>panel.append(n));
    panels.append(panel);selected.push(panel);
    const button=el("button","practice-level-button","Mức "+(i+1)+" · "+labels[i]);
    button.type="button";button.setAttribute("aria-controls",panel.id);
    button.setAttribute("aria-pressed",String(i===0));
    button.addEventListener("click",()=>{
      buttons.forEach((b,k)=>b.setAttribute("aria-pressed",String(k===i)));
      selected.forEach((p,k)=>{p.hidden=k!==i;});
      if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([panel]).catch(()=>{});
    });
    nav.append(button);buttons.push(button);
    panel.hidden=i!==0;
  });
  shell.append(intro,nav,panels);
  // The authored answer table and walkthrough remain intact, but closed by default.
  const wrapSection=(pattern,nextPatterns,label)=>{
    const current=[...root.children];
    const start=current.findIndex(n=>isHeading(n)&&pattern.test((n.textContent||"").trim()));
    if(start<0)return;
    let stop=current.length;
    for(let i=start+1;i<current.length;i++)if(isHeading(current[i])&&nextPatterns.some(r=>r.test(current[i].textContent.trim()))){stop=i;break;}
    const details=el("details","practice-focus-disclosure");
    details.dataset.practiceFocusDisclosure=label;
    const summary=el("summary","",label);details.append(summary);
    current[start].before(details);
    current.slice(start,stop).forEach(n=>details.append(n));
  };
  // Move the levels block into its former original position.
  const locationNode=children[positions[0]];
  if(locationNode.isConnected)locationNode.before(shell);
  else {
    // First level heading was moved above, so use the first block after the introductory section.
    const originalSibling=children.slice(0,positions[0]).filter(n=>n.isConnected).at(-1);
    if(originalSibling)originalSibling.after(shell);else root.prepend(shell);
  }
  wrapSection(/^Đáp án nhanh/i,[/^Hướng dẫn chọn lọc/i,/^Theo dõi tiến độ/i,/^Liên kết Roadmap/i],"Đáp án nhanh · mở sau khi tự làm");
  wrapSection(/^Hướng dẫn chọn lọc/i,[/^Theo dõi tiến độ/i,/^Liên kết Roadmap/i],"Hướng dẫn giải chọn lọc");
  document.body.classList.add("practice-focus-active");
  if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([shell]).catch(()=>{});
})();
