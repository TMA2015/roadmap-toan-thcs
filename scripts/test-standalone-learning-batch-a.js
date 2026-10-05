#!/usr/bin/env node
"use strict";
const fs=require("fs"),crypto=require("crypto"),vm=require("vm"),path=require("path");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8"),json=p=>JSON.parse(read(p));
const ok=(x,m)=>{if(!x)throw Error("Core Batch A: "+m)};
const blob=s=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+Buffer.byteLength(s)+"\\0".replace("\\0","\0")),Buffer.from(s)])).digest("hex");
const specs=[
  [
    "02",
    "02-so-va-phep-tinh",
    "KNTT-Core",
    "2878bddfd625d20b78bea1bc60233924e0e321e4",
    "82b7c25588d674649586edee0ef2e7b50507c37c",
    "Core theo chặng",
    41
  ],
  [
    "21",
    "21-thong-ke",
    "KNTT-Core",
    "2e1a0dc26890ae06e4046d633637e5409af2cc3b",
    "7ca07feda16ea97bb25eb85f62030e0cee4d286f",
    "Core theo chặng",
    20
  ],
  [
    "23",
    "23-xac-suat",
    "KNTT-Core",
    "443169587e0ba663bc694122ee4a37e456793c70",
    "10f6dfcc41040da16b351a8c607c10fe82e6e4b3",
    "Core theo chặng",
    20
  ],
  [
    "24",
    "24-bai-toan-thuc-te",
    "Core-Support",
    "9da0d85fe15dfb20ad4edd434404407fa949742a",
    "0c11446a01aec62e32b2320f0f537dd52133906a",
    "Ứng dụng theo chặng",
    15
  ],
  [
    "25",
    "25-tong-hop-on-thi-10",
    "Entrance10",
    "b8eaf7793a4f7b71e5976bdf93e6e45bdb04825a",
    "214f3d2df9bd11d8a66e19da33d7737303e24fb2",
    "Ôn thi theo chặng",
    15
  ]
];
const nav=read("mkdocs.yml"),engine=read("docs/assets/javascripts/topic-workspace-v1.js"),ui=read("docs/assets/javascripts/knowledge-ui-v1.js"),routesSrc=read("docs/assets/javascripts/topic-learning-routes-v1.js");
const context={window:{}};vm.runInNewContext(routesSrc,context);
const routes=context.window.RoadmapTopicRoutes;
ok(routes&&routes.slugs.length===23&&new Set(routes.slugs).size===23,"canonical route size/unique");
ok(nav.indexOf("topic-learning-routes-v1.js")<nav.indexOf("topic-workspace-v1.js")&&nav.indexOf("topic-learning-routes-v1.js")<nav.indexOf("knowledge-ui-v1.js"),"shared route must load before both consumers");
ok(ui.includes("RoadmapTopicRoutes?.get(m[1])")&&engine.includes("RoadmapTopicRoutes?.get(config.slug)"),"both consumers use same routing source");
ok(routes.get("03-ti-le-ti-le-thuc")&&!routes.get("22-dai-luong-dac-trung")&&!routes.get("01-ban-do-chuong-trinh"),"reviewed CĐ03 route added; optional/overview routes still absent");
ok(fs.existsSync(path.join(root,"docs/kien-thuc/03-ti-le-ti-le-thuc/core/index.md")),"CĐ03 reviewed standalone page exists");
let count=0;
for(const [num,slug,layer,wsSha,bankSha,label,expectedCount] of specs){
 const dir="docs/kien-thuc/"+slug+"/",wp="docs/assets/data/curriculum/topic"+num+"-learning-workspace.json",bp="docs/assets/data/practice/"+slug+"-micro-v1.json";
 const w=json(wp),b=json(bp),page=read(dir+"core/index.md"),lesson=read(dir+"index.md");
 ok(blob(read(wp))===wsSha&&blob(read(bp))===bankSha,"frozen workspace/micro bank unchanged "+slug);
 ok(w.topic===slug&&w.core_progress_policy.layer===layer&&w.cards.length===5&&b.question_count===expectedCount&&b.questions.length===expectedCount,"source content/layer "+slug);
 ok(routes.get(slug)?.stepLabel===label&&routes.get(slug)?.path==="core/","semantic label "+slug);
 ok(nav.includes(" - "+label+": kien-thuc/"+slug+"/core/index.md"),"MkDocs sidebar route "+slug);
 ok(page.includes('data-topic-core-entry="'+slug+'"')&&page.includes("không phải")&&page.includes("../index.md"),"formative standalone page and full lesson link "+slug);
 ok(lesson.includes("(core/index.md)"),"legacy lesson points to standalone learning "+slug);
 const ids=new Set(),bank=new Map(b.questions.map(q=>[q.id,q]));
 for(const card of w.cards){
   ok(card.layer===layer&&card.teaching_copy?.key_idea&&card.teaching_copy?.worked_example?.solution&&card.teaching_copy?.misconception,"teaching and tier "+card.id);
   for(const id of card.micro_practice){
     const q=bank.get(id);
     const lessonLocal=q?.evidence_role==="LESSON_LOCAL_CORE_FORMATIVE";
     const localDeclared=new Set([...(card.lesson_local_concepts||[]),...(card.lesson_local_problem_types||[]),...(card.lesson_local_representations||[])].map(x=>x.id));
     ok(q&&!ids.has(id)&&q.card_id===card.id&&q.tags?.layer===layer&&(lessonLocal?(q.tags.skill.length===0&&q.gates_core===false&&q.lesson_local_targets?.every(t=>localDeclared.has(t))):(q.tags.skill.length===1&&card.skills.includes(q.tags.skill[0]))),"stable question/skill or lesson-local association "+id);
     ids.add(id);
   }
 }
 ok(ids.size===expectedCount&&ids.size===bank.size,"no missing/duplicate micro items "+slug);
 count+=ids.size;
}
ok(routes.get("04-bieu-thuc-dai-so")&&routes.get("20-hinh-hoc-tong-hop"),"old independent routes remain");
ok(engine.includes('recordAnswer?.(')&&engine.includes("topic-core-modal-modes")&&engine.includes('if(hasStandaloneCore)mountCoreGateway(hero,config)'),"old modal and answer evidence path retained");
ok(read("docs/hoc-theo-lop/index.md").includes("../kien-thuc/02-so-va-phep-tinh/core/")&&!read("docs/hoc-theo-lop/index.md").includes("../kien-thuc/02-so-va-phep-tinh/#core-journey"),"class map direct links to standalone learning");
console.log("PASS: "+specs.length+" independent topic routes, "+count+" reviewed/frozen micro IDs, scope-safe labels, one canonical route source, CĐ03/22 boundaries.");
