/* THPT R0 offline/standalone rendering proof: no network or student data. */
(()=>{
"use strict";
const source=window.THPTTemplateR0;
if(!source||source.academic_status!=="DEMO_ONLY_NOT_SOURCE_APPROVED")throw Error("Only demo fixture allowed");
const allowed=new Set(source.allowed_components);
const NS="http://www.w3.org/2000/svg";
function el(tag,cls,value,parent){
  const e=document.createElement(tag);
  if(cls)e.className=cls;if(value!==undefined&&value!==null)e.textContent=value;
  if(parent)parent.appendChild(e);return e;
}
function svg(tag,attrs,parent,value){
  const e=document.createElementNS(NS,tag);
  Object.entries(attrs||{}).forEach(([k,v])=>e.setAttribute(k,String(v)));
  if(value!==undefined)e.textContent=value;
  if(parent)parent.appendChild(e);
  return e;
}
function line(s,x1,y1,x2,y2,cls="geo-line"){svg("line",{x1,y1,x2,y2,class:cls},s)}
function txt(s,x,y,value,cls="geo-label"){svg("text",{x,y,class:cls},s,value)}
function dot(s,x,y){svg("circle",{cx:x,cy:y,r:4.5,class:"geo-point"},s)}
function draw(kind,s){
  if(kind==="right-triangle"){
    line(s,110,335,110,95);line(s,110,335,430,335);line(s,110,95,430,335);
    svg("path",{d:"M110 313 H132 V335",class:"geo-mark"},s);
    [[110,335],[110,95],[430,335]].forEach(p=>dot(s,p[0],p[1]));
    txt(s,74,355,"A");txt(s,75,87,"B");txt(s,444,356,"C");
    txt(s,61,223,"3");txt(s,260,374,"4");txt(s,300,207,"5");
    txt(s,460,140,"AB ⟂ AC","geo-caption");
  }else if(kind==="function-graph"){
    const X=x=>240+60*x,Y=y=>280-23*y;
    for(let x=-2;x<=4;x++)line(s,X(x),55,X(x),375,"gridline");
    for(let y=-4;y<=8;y+=2)line(s,90,Y(y),545,Y(y),"gridline");
    line(s,90,Y(0),555,Y(0),"axis");line(s,X(0),375,X(0),48,"axis");
    svg("path",{d:"M547 274 L557 280 L547 286",class:"axis"},s);
    svg("path",{d:"M234 57 L240 47 L246 57",class:"axis"},s);
    txt(s,561,298,"x");txt(s,224,42,"y");txt(s,223,299,"0","geo-caption");
    for(let x=-2;x<=4;x++)txt(s,X(x)-7,303,String(x),"geo-caption");
    for(let y=-4;y<=8;y+=2){if(y!==0)txt(s,204,Y(y)+7,String(y),"geo-caption")}
    line(s,X(1),70,X(1),375,"geo-helper");
    const parts=[];
    for(let x=-2;x<=4.01;x+=.1){
      const y=(x-1)*(x-1)-4;
      parts.push((parts.length?"L":"M")+X(x).toFixed(1)+","+Y(y).toFixed(1));
    }
    svg("path",{d:parts.join(" "),class:"geo-accent"},s);
    [-1,0,1,2,3].forEach(x=>dot(s,X(x),Y((x-1)**2-4)));
    txt(s,310,368,"I(1; −4)","geo-caption");
  }else if(kind==="frequency-bars"){
    const base=335,unit=105;
    line(s,95,base,555,base,"axis");line(s,95,base,95,75,"axis");
    [1,2].forEach(k=>{line(s,95,base-k*unit,545,base-k*unit,"gridline");txt(s,67,base-k*unit+7,String(k),"geo-caption")});
    [["2",1,155],["3",2,280],["4",1,405]].forEach(item=>{
      const [value,count,x]=item;
      svg("rect",{x,y:base-count*unit,width:78,height:count*unit,rx:5,class:"data-fill"},s);
      txt(s,x+27,base+33,value);txt(s,x+27,base-count*unit-12,String(count),"geo-caption");
    });
    txt(s,452,385,"Giá trị","geo-caption");txt(s,25,63,"Tần số","geo-caption");
  }else throw Error("Missing approved SVG diagram "+kind);
}
function block(b){
  if(!allowed.has(b.type))throw Error("Unknown block type "+b.type);
  let n,heading;
  switch(b.type){
    case "definition":case "theorem":case "condition":case "insight":case "warning":
      n=el("section","thpt-part thpt-"+b.type);
      heading={definition:"Khái niệm",theorem:"Định lý",condition:"Điều kiện",insight:"Điểm cốt lõi",warning:"Lưu ý"}[b.type];
      el("h4","",b.title||heading,n);el("p","",b.body,n);break;
    case "formula":
      n=el("section","thpt-part thpt-formula");el("h4","",b.title||"Công thức",n);
      el("span","math",b.expr,n);break;
    case "worked-example":
      n=el("section","thpt-part thpt-example");
      el("h4","",b.title||"Ví dụ mẫu",n);el("p","",b.prompt,n);
      const ordered=el("ol","",null,n);
      b.steps.forEach(s=>el("li","",s,ordered));
      el("div","thpt-outcome",b.conclusion,n);break;
    case "step-flow":
      n=el("section","thpt-part");el("h4","",b.title||"Quy trình",n);
      const flow=el("div","thpt-process",null,n);
      b.steps.forEach((s,i)=>{
        if(i)el("span","arrow","→",flow).setAttribute("aria-hidden","true");
        const cell=el("div","thpt-step",null,flow);
        el("strong","","Bước "+(i+1),cell);el("p","",s,cell);
      });break;
    case "compare":
      n=el("section","thpt-part");el("h4","",b.title||"So sánh",n);
      const compare=el("div","thpt-compare",null,n);
      b.items.forEach(([k,v])=>{const a=el("article","",null,compare);el("b","",k,a);el("p","",v,a)});break;
    case "data-table":
      n=el("section","thpt-part");el("h4","",b.title||"Bảng dữ liệu",n);
      const table=el("table","thpt-table",null,el("div","thpt-tablewrap",null,n));
      const head=el("tr","",null,el("thead","",null,table));
      b.columns.forEach(c=>el("th","",c,head));
      const body=el("tbody","",null,table);
      b.rows.forEach(row=>{const tr=el("tr","",null,body);row.forEach(c=>el("td","",c,tr))});break;
    case "diagram":
      n=el("section","thpt-part");el("h4","",b.title||"Hình toán học",n);
      const pair=el("div","thpt-figure-pair",null,n);
      el("div","thpt-figure-note",b.aside,pair);
      const figure=el("figure","thpt-figure-frame",null,pair);
      const drawing=svg("svg",{viewBox:"0 0 640 400",role:"img","aria-label":b.title+" — "+b.caption},figure);
      draw(b.diagram,drawing);el("figcaption","",b.caption,figure);break;
    case "practice-links":
      n=el("div","thpt-part thpt-practice-placeholder","Luyện ngay / Tự luận: chưa liên kết — cần ngân hàng THPT đúng kỹ năng đã phê duyệt.");
      n.dataset.linkStatus=b.status;break;
    default:throw Error("Renderer missing type "+b.type);
  }
  return n;
}
function tabs(lesson,title,entries,prefix){
  el("h2","",title,lesson);
  const group=el("section","thpt-tabset",null,lesson);
  group.setAttribute("aria-label",title);
  const nav=el("div","thpt-tablist",null,group);nav.setAttribute("role","tablist");
  const buttons=[],panels=[];
  entries.forEach((entry,i)=>{
    const b=el("button","",entry.name,nav);
    b.type="button";b.id=prefix+"-tab-"+i;
    b.setAttribute("role","tab");b.setAttribute("aria-controls",prefix+"-panel-"+i);
    const panel=el("section","thpt-tabpanel",null,group);
    panel.id=prefix+"-panel-"+i;panel.dataset.tabTitle=entry.name;
    panel.setAttribute("role","tabpanel");panel.setAttribute("aria-labelledby",b.id);
    panel.tabIndex=0;entry.blocks.forEach(item=>panel.appendChild(block(item)));
    buttons.push(b);panels.push(panel);
  });
  function select(i,focus=false){
    buttons.forEach((b,n)=>{
      b.setAttribute("aria-selected",String(i===n));
      b.tabIndex=i===n?0:-1;
      panels[n].hidden=i!==n;
    });
    if(focus)buttons[i].focus();
  }
  buttons.forEach((button,i)=>{
    button.addEventListener("click",()=>select(i));
    button.addEventListener("keydown",ev=>{
      const next=ev.key==="ArrowRight"?(i+1)%buttons.length:
        ev.key==="ArrowLeft"?(i+buttons.length-1)%buttons.length:
        ev.key==="Home"?0:ev.key==="End"?buttons.length-1:null;
      if(next===null)return;
      ev.preventDefault();select(next,true);
    });
  });
  select(0);
}
const selector=document.getElementById("thpt-profile-select");
const host=document.getElementById("thpt-template-host");
if(!selector||!host)throw Error("Missing R0 template preview host");
function render(code){
  const obj=source.profiles[code];
  if(!obj)throw Error("Unknown profile");
  host.replaceChildren();
  const lesson=el("article","thpt-lesson",null,host);lesson.dataset.profile=code;
  const header=el("header","thpt-orientation",null,lesson);
  el("div","thpt-profile",obj.name,header);
  el("h1","",obj.topic,header);el("p","",obj.grade+" · "+obj.subject,header);
  const cards=el("div","thpt-intro-grid",null,header);
  const goals=el("section","thpt-meta-card",null,cards);
  el("b","","Mục tiêu quan sát",goals);
  const ul=el("ul","",null,goals);
  obj.goals.forEach(g=>el("li","",g,ul));
  const pre=el("section","thpt-meta-card",null,cards);
  el("b","","Kiến thức tiên quyết",pre);el("p","",obj.prerequisite,pre);
  const map=el("nav","thpt-map",null,header);
  map.setAttribute("aria-label","Bản đồ kiến thức");
  obj.map.forEach((s,i)=>{
    if(i)el("span","arrow","→",map);
    el("span","node",s,map);
  });
  tabs(lesson,"3. Kiến thức cốt lõi",obj.concepts,code+"-knowledge");
  tabs(lesson,"5. Các dạng bài và phương pháp",obj.methods,code+"-methods");
  const foot=el("footer","thpt-lesson-footer",null,lesson);
  el("h2","","Luyện tập · Tự luận · Readiness",foot);
  el("p","","Mẫu để kiểm tra định dạng: không tạo bài tập, không chấm điểm và không thu thập dữ liệu học.",foot);
  el("div","pending","Chỉ thêm đường liên kết thực sau khi nguồn S1 và bài tập/Skill THPT được phê duyệt.",foot);
  selector.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.profile===code)));
  document.title=obj.name+" — THPT Template R0";
}
Object.keys(source.profiles).forEach(code=>{
  const b=el("button","",source.profiles[code].name,selector);
  b.type="button";b.dataset.profile=code;
  b.addEventListener("click",()=>render(code));
});
render("A");
})();
