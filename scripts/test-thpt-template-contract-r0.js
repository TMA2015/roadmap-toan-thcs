/* R0 THPT design governance: contract before authoring, no live learner data. */
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const vm=require("node:vm");
const root="docs/qa/thpt-design-system-r0/";
const dataSource=fs.readFileSync(root+"template-data.js","utf8");
const css=fs.readFileSync(root+"template.css","utf8");
const renderer=fs.readFileSync(root+"template.js","utf8");
const html=fs.readFileSync(root+"index.html","utf8");
const doc=fs.readFileSync("docs/collaboration/math-thpt-design-system-and-four-templates-r0-20261024.md","utf8");
const sandbox={window:{}};
vm.runInNewContext(dataSource,sandbox,{timeout:1000});
const data=sandbox.window.THPTTemplateR0;
assert.equal(data.schema,"math-thpt-template-r0");
assert.equal(data.academic_status,"DEMO_ONLY_NOT_SOURCE_APPROVED");
assert.equal(data.design_version,"0.1.0");
assert.deepEqual(Object.keys(data.profiles).sort(),["A","B","C","D"]);
const allowed=new Set(data.allowed_components);
assert.equal(allowed.size,data.allowed_components.length,"duplicate component schema");
for(const type of ["definition","theorem","condition","formula","diagram","data-table",
"worked-example","step-flow","compare","insight","warning","practice-links"]){
 assert(allowed.has(type),"missing required component "+type);
}
const actualTypes=new Set(),observedDiagrams=new Set(),observedGroups=[];
for(const [profile,lesson] of Object.entries(data.profiles)){
 assert(lesson.name&&lesson.grade&&lesson.topic&&lesson.prerequisite,profile+" missing orientation");
 assert(lesson.goals.length>=2&&lesson.map.length>=2,profile+" empty meaningful goals/map");
 assert(lesson.concepts.length>=2&&lesson.methods.length>=2,profile+" insufficient grouping");
 observedGroups.push(lesson.concepts.length);
 for(const set of [lesson.concepts,lesson.methods]){
  const names=new Set();
  for(const tab of set){
   assert(tab.name&&tab.blocks.length,profile+" empty tab");
   assert(!names.has(tab.name),profile+" duplicate tab");names.add(tab.name);
   for(const component of tab.blocks){
    assert(allowed.has(component.type),profile+" unknown custom CSS/component: "+component.type);
    actualTypes.add(component.type);
    if(["definition","condition","theorem","insight","warning"].includes(component.type))
      assert(typeof component.body==="string"&&component.body.length>=15,"missing teachable "+component.type);
    if(component.type==="formula")assert(component.expr&&component.expr.length>=5);
    if(component.type==="diagram"){
      assert(["function-graph","right-triangle","frequency-bars"].includes(component.diagram));
      assert(component.caption&&component.aside,"diagram must have caption + real educational relation");
      observedDiagrams.add(component.diagram);
    }
    if(component.type==="worked-example")assert(component.prompt&&component.steps.length>=2&&component.conclusion);
    if(component.type==="step-flow")assert(component.steps.length>=2);
    if(component.type==="data-table"){
      assert(component.columns.length>=2&&component.rows.length>=1);
      component.rows.forEach(row=>assert.equal(row.length,component.columns.length,"table column mismatch"));
    }
    if(component.type==="compare")assert(component.items.length>=2);
    if(component.type==="practice-links")assert.equal(component.status,"NOT_PUBLISHED");
   }
  }
 }
}
assert(new Set(observedGroups).size>=2,"universal fixed knowledge-tab count not allowed");
assert.deepEqual([...observedDiagrams].sort(),["frequency-bars","function-graph","right-triangle"]);
assert(actualTypes.size>=11,"components have not been exercised across prototypes");
assert(!/href=["']#["']|location\.href.*bai-tap|fetch\(|localStorage|sessionStorage|indexedDB|XMLHttpRequest/i.test(renderer),"demonstrator must not invent links or persist data");
assert(!/https?:\/\//i.test(html),"no remote font/script/API");
assert(html.includes('noindex,nofollow')&&html.includes('template-data.js')&&html.includes('template.css'));
for(const token of ["--thpt-body:17px","--thpt-title:32px","--thpt-section:24px",
 "--thpt-concept:21px","--thpt-subheading:18px","--thpt-formula:21px",
 "--thpt-caption:15px","--thpt-label:15px","--thpt-blue:#3452cc",
 "--thpt-soft:#f0f4fb","--thpt-border:#dae4f4","--thpt-amber:#b77821"]){
 assert(css.includes(token),"missing agreed design token: "+token);
}
assert(css.includes("--thpt-body:16px")&&css.includes("--thpt-concept:19px"));
assert(css.includes(".thpt-table :is(th,td)")&&css.includes("font-size:var(--thpt-body)"),"table/body typography mismatch");
assert(css.includes(".geo-label")&&css.includes("font-size:22px"),"SVG label scale missing");
assert(css.includes("@media print")&&css.includes(".thpt-tabpanel[hidden]"),"print must include hidden tab content");
assert(css.includes("prefers-color-scheme:dark"),"dark support missing");
assert(/update.*component schema|New need procedure/i.test(doc),"authoring may not bypass template registry");
for(const blocked of ["docs/kien-thuc/","docs/assets/data/written-exercises/"]){
 assert(!html.includes(blocked),"R0 prototype must not use learner libraries");
}
console.log("PASS THPT R0 four profile fixtures / variable tab structure / 12 semantic types / consistent 17px body-table and SVG design / no unsafe links or learner writes");
