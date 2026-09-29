#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const ok=(condition,message)=>{if(!condition)throw Error(message)};
const slug="07-phan-thuc-dai-so",rootPath="docs/kien-thuc/"+slug+"/";
const yaml=read("mkdocs.yml"),lesson=read(rootPath+"index.md"),core=read(rootPath+"core/index.md");
const workspace=JSON.parse(read("docs/assets/data/curriculum/topic07-learning-workspace.json"));
const bank=JSON.parse(read("docs/assets/data/practice/07-phan-thuc-dai-so-micro-v1.json"));
const js=read("docs/assets/javascripts/topic-workspace-v1.js");
const shell=read("docs/assets/javascripts/knowledge-ui-v1.js"),css=read("docs/assets/stylesheets/topic-workspace.css");
ok(yaml.includes("Core theo chặng: kien-thuc/"+slug+"/core/index.md"),"stable Core route in navigation");
ok(core.includes('data-topic-core-entry="'+slug+'"')&&core.includes("không phải"),"Core page has teaching marker and formative scope");
ok(js.includes('const hasStandaloneCore=')&&js.includes('"07-phan-thuc-dai-so"')&&js.includes("mountCoreGateway(hero,config)"),"pilot root retains old #core-journey entry");
ok(js.includes('link.href="core/"')&&js.includes('location.pathname.includes("/core/")'),"dedicated URL and safe knowledge fallback");
ok(js.includes('const sessions=new Map()')&&js.includes("recordAnswer?.(")&&!js.includes("el.classList.toggle(\"is-active\")"),"existing modal and evidence path retained");
ok(shell.includes('id:"core"')&&shell.includes('lesson-switcher-steps--four'),"four-stage pilot navigation");
ok(css.includes(".topic-core-teaching-modal")&&css.includes(".topic-core-gateway"),"teaching modal and gateway styles");
ok(js.includes("topic-core-teach-start")&&js.includes("topic-core-practice-start"),"two Core card actions");
ok(!js.includes("topic-core-teaching-item"),"no duplicate standalone lecture list");
ok(workspace.topic===slug&&workspace.cards.length===5&&bank.questions.length===17,"original topic scope unchanged");
const ids=new Set(bank.questions.map(q=>q.id));
for(const c of workspace.cards){
 ok(c.layer==="KNTT-Core","card layer "+c.id);
 ok(c.micro_practice.length >= 3 && c.micro_practice.every(id=>ids.has(id)),"Core micro item links "+c.id);
 ok(c.micro_practice.slice(0,3).map(id=>bank.questions.find(q=>q.id===id)?.micro_role).join(",")==="base,trap,apply","baseline three learning roles preserved "+c.id);
}
ok(lesson.includes("## 📖 3. Kiến thức cốt lõi"),"full lesson content retained");
console.log("PASS: topic07 independent Core pilot, stable URLs/IDs, lesson gateway, modal and formative boundaries.");
