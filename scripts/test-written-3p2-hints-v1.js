#!/usr/bin/env node
"use strict";
// Candidate-only behavioral QA: staged standard-item hints must not replace solutions.
const fs=require("fs"),vm=require("vm"),crypto=require("crypto");
const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
const raw=fs.readFileSync("docs/assets/data/written-exercises/written-exercise-library-v1.json","utf8");
const sha=crypto.createHash("sha1").update("blob "+Buffer.byteLength(raw)+"\0").update(raw).digest("hex");
const canonical=JSON.parse(raw);
const overlay=JSON.parse(fs.readFileSync("docs/assets/data/written-exercises/written-p2-hints-overlay-v1.json","utf8"));
assert(sha==="5141a40bf1b8f8763257857d3b805d681a0956fa","immutable catalog blob SHA mismatch");
assert(overlay.source_catalog_blob_sha===sha,"overlay references wrong catalog source SHA");
assert(overlay.release_state==="CANDIDATE_NOT_PUBLISHED","overlay cannot claim published status");
assert(overlay.changes?.length===3,"must have exactly three overlay entries");
const candidates=["WX16-QUAD-001","WX07-RAT-001","WX19-CIR-002"];
const expected=[
  ["Trong tứ giác ABCD, AB và CD là hai cạnh ở vị trí nào? Có dấu hiệu nào dùng một cặp cạnh đối vừa song song vừa bằng nhau?","Sau khi xác định được ABCD thuộc họ hình bình hành, hãy dùng giả thiết về góc 90° để nhận biết trường hợp đặc biệt hơn."],
  ["Trước khi rút gọn, phân thức ban đầu có nghĩa với những giá trị x nào? Hãy xem các nhân tử của mẫu ban đầu.","Tử số gợi nhớ hằng đẳng thức nào? Sau khi khử nhân tử chung, những điều kiện nào của biểu thức ban đầu vẫn phải giữ?"],
  ["Hai góc BAD và BCD ở vị trí nào trong tứ giác lồi? Tính tổng số đo của chúng rồi tìm dấu hiệu nhận biết phù hợp.","Chỉ sau khi chứng minh được tứ giác nội tiếp, em mới được dùng quan hệ gì giữa hai góc ABC và ADC?"]
];
// Tiny DOM stub validates actual button behavior with Node built-ins (no browser dependencies).
class FakeNode{
  constructor(tag){this.tagName=tag;this.children=[];this.attributes={};this.dataset={};this.textContent="";this.hidden=false;
    this.listeners={};this.classes=new Set();this.classList={add:s=>this.classes.add(s),remove:s=>this.classes.delete(s),toggle:s=>this.classes.has(s)?this.classes.delete(s):this.classes.add(s)};}
  setAttribute(k,v){this.attributes[k]=String(v);}
  appendChild(x){this.children.push(x);return x;}
  append(...xs){xs.forEach(x=>this.appendChild(x));}
  addEventListener(k,fn){this.listeners[k]=fn;}
  click(){assert(typeof this.listeners.click==="function","button click listener missing");this.listeners.click();}
}
const document={readyState:"loading",createElement:tag=>new FakeNode(tag),addEventListener(){}};
const window={RoadmapRichMath:{render:(t,root)=>{root.textContent=String(t||"");}}};
const context={document,window,location:{pathname:"/roadmap-toan-thcs/luyen-tap/tu-luan/"}};
let js=fs.readFileSync("docs/assets/javascripts/written-exercise-library-v1.js","utf8");
const anchor="  const initLibrary=async()=>{";
assert(js.includes(anchor),"renderer test instrumentation anchor missing");
js=js.replace(anchor,"  globalThis.__testMakeHelpPanel=makeHelpPanel;\n  globalThis.__testApplyReviewedHints=applyReviewedHints;\n"+anchor);
vm.runInNewContext(js,context,{filename:"written-exercise-library-v1.js"});
const make=context.__testMakeHelpPanel,apply=context.__testApplyReviewedHints;
assert(typeof make==="function"&&typeof apply==="function","failed to capture renderer and overlay functions");
assert(js.includes("try{data=await loadLibraryData();}"),"library does not fetch optional overlay");
const data=apply(canonical,overlay);
assert(data!==canonical,"valid optional P2 overlay was not applied");
assert(data.exercises.length===canonical.exercises.length,"overlay changed number of exercises");
assert(!canonical.exercises.some(x=>candidates.includes(x.exercise_id)&&x.hint_steps?.length),"canonical historical records were mutated");
const byId=new Map(data.exercises.map(x=>[x.exercise_id,x]));
const badOverlay=JSON.parse(JSON.stringify(overlay));
badOverlay.source_catalog_blob_sha="INVALID";
assert(apply(canonical,badOverlay)===canonical,"wrong source SHA must fall back");
badOverlay.source_catalog_blob_sha=sha;badOverlay.changes[0].hint_steps=["tiny"];
assert(apply(canonical,badOverlay)===canonical,"invalid hints must fall back");
const missingOverlay=JSON.parse(JSON.stringify(overlay));missingOverlay.changes[1].exercise_id="WX_DOES_NOT_EXIST";
assert(apply(canonical,missingOverlay)===canonical,"unknown exercise ID must fall back");
assert(apply({...canonical,snapshot_date:"2001-01-01"},overlay).snapshot_date==="2001-01-01","stale catalog must fail closed");
assert(data.exercises.length===75,"candidate keeps exactly 75 canonical exercises");
assert(new Set(data.exercises.map(x=>x.exercise_id)).size===75,"no duplicate exercise IDs");
for(let i=0;i<candidates.length;i++){
  const x=byId.get(candidates[i]);
  assert(x&&x.exercise_kind==="standard","must preserve standard type "+candidates[i]);
  assert(JSON.stringify(x.hint_steps)===JSON.stringify(expected[i]),"reviewed hint text mismatch "+candidates[i]);
  assert(x.solution_steps?.length===4,"existing 4-step solution preserved "+candidates[i]);
  assert(!x.full_solution_markdown,"do not duplicate full solution for standard "+candidates[i]);
}
const allHintItems=data.exercises.filter(x=>Array.isArray(x.hint_steps)&&x.hint_steps.length);
assert(allHintItems.length===25,"existing 22 hint items + 3 P2 candidates expected");

const visit=(n,f)=>{f(n);for(const c of n.children)visit(c,f);};
const find=(n,p)=>{let found;visit(n,x=>{if(!found&&p(x))found=x;});return found;};
const button=(n,key)=>find(n,x=>x.tagName==="button"&&x.dataset.helpTarget===key);
const panel=(n,key)=>find(n,x=>x.tagName==="section"&&x.dataset.helpPanel===key);
for(const id of candidates){
  const x=byId.get(id),n=make(null,x);
  const h=button(n,"hints"),s=button(n,"solution"),r=button(n,"rubric");
  assert(h&&s&&r,"standard item must expose hints, original solution and rubric "+id);
  assert(h.textContent==="Gợi ý 1/2","initial hint label "+id);
  assert(s.textContent==="Hướng dẫn","standard should retain stepwise solution "+id);
  assert(panel(n,"hints").hidden===true,"hints initially closed");
  h.click();
  assert(panel(n,"hints").hidden===false,"first hint opens");
  assert(find(panel(n,"hints"),v=>v.tagName==="div"&&v.textContent===x.hint_steps[0]),"hint 1 mismatch");
  assert(!find(panel(n,"hints"),v=>v.tagName==="div"&&v.textContent===x.hint_steps[1]),"hint 2 leaked before reveal");
  h.click();
  assert(find(panel(n,"hints"),v=>v.tagName==="div"&&v.textContent===x.hint_steps[1]),"hint 2 not revealed");
  s.click();
  assert(panel(n,"solution").hidden===false,"solution does not open "+id);
  const sections=[];visit(panel(n,"solution"),v=>{if(v.tagName==="section"&&v.children.some(c=>c.tagName==="h3"))sections.push(v);});
  assert(sections.length===x.solution_steps.length,"lost standard solution steps "+id);
  for(const step of x.solution_steps)assert(find(panel(n,"solution"),v=>v.tagName==="div"&&v.textContent===step.content_markdown),"missing step "+step.step_id+" "+id);
  assert(panel(n,"rubric")&&panel(n,"mistakes"),"rubric or mistakes missing "+id);
}
// Old anchor behavior remains deep and includes its own why-method text.
const anchorItem=byId.get("WX09-SYS-003"),anchorNode=make(null,anchorItem);
assert(button(anchorNode,"hints")&&button(anchorNode,"solution")?.textContent==="Lời giải","anchor behavior regressed");
assert(find(panel(anchorNode,"solution"),v=>v.tagName==="div"&&v.textContent===anchorItem.full_solution_markdown),"anchor full solution missing");
// Existing standard that *already* had both solution modes retains its historical full-solution view.
const oldMixed=byId.get("WX08-EQI-003"),oldNode=make(null,oldMixed);
assert(oldMixed.hint_steps.length&&oldMixed.full_solution_markdown,"legacy mixed item assumption invalid");
assert(button(oldNode,"solution")?.textContent==="Lời giải","legacy mixed item switched view");
assert(find(panel(oldNode,"solution"),v=>v.tagName==="div"&&v.textContent===oldMixed.full_solution_markdown),"legacy mixed full solution missing");
// Unchanged no-hint standard continues to show Hướng dẫn only.
const plain=make(null,byId.get("WX02-NUM-001"));
assert(!button(plain,"hints")&&button(plain,"solution")?.textContent==="Hướng dẫn","plain standard changed");
console.log("PASS: 3 staged standard hints, 4 preserved solutions each, legacy anchor/mixed/plain modes, unchanged catalog count");
