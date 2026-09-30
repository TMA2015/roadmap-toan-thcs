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
    "22b2a74908191f1e8be85bf90019c17a3fe1a6a2",
    "60235e77c56fd75a65b1dc5df562baea5150984b",
    "Core theo chặng",
    20
  ],
  [
    "21",
    "21-thong-ke",
    "KNTT-Core",
    "2812085ab0dd0800196eee7d44562f2ced4294e1",
    "f8309442663408f5d75b57c6d62f9887ab7df4a9",
    "Core theo chặng",
    15
  ],
  [
    "23",
    "23-xac-suat",
    "KNTT-Core",
    "7b2659c78e298017d16ec52f2a45cd57d3d88191",
    "ef8e6f27456591ddc42e606575abeb8d5fd28437",
    "Core theo chặng",
    17
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
     ok(q&&!ids.has(id)&&q.card_id===card.id&&q.tags?.layer===layer&&q.tags.skill.length===1&&card.skills.includes(q.tags.skill[0]),"stable question/skill association "+id);
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
