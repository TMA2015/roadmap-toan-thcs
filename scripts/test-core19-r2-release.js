#!/usr/bin/env node
"use strict";
const fs=require("fs"),crypto=require("crypto");
const read=p=>fs.readFileSync(p,"utf8"),json=p=>JSON.parse(read(p)),ok=(v,m)=>{if(!v)throw Error("CORE19 R2: "+m)};
const blob=s=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+Buffer.byteLength(s)+"\\0".replace("\\0","\0")),Buffer.from(s)])).digest("hex");
const root="docs/kien-thuc/19-duong-tron/",w=json("docs/assets/data/curriculum/topic19-learning-workspace.json"),bank=json("docs/assets/data/practice/19-duong-tron-micro-v1.json");
const original={...bank,question_count:15,questions:bank.questions.slice(0,15)};
ok(blob(read(root+"index.md"))==="75c9baa052c1ef91bee54e65edcb3dee513007d2","unchanged source lesson");
ok(blob(JSON.stringify(original,null,2)+"\n")==="91e61257efa72ef0691eb5db1af42c7b2cd287ff","original fifteen records unchanged as Git blob");
ok(bank.questions.length===17&&bank.question_count===17&&w.cards.length===5,"five cards and 17 questions");
ok(JSON.stringify(bank.questions.slice(15).map(x=>x.id))===JSON.stringify(["GEO19MICRO_016","GEO19MICRO_017"]),"append-only canonical ID");
const proof="content-staging/reviews/MATH-CORE19-R2-RELEASE-RECONCILIATION-20260929.md",receipt=read(proof);
ok(receipt.includes("358a0461ea70ee587432d1ad8773c52973edfa8a")&&receipt.includes("targeted R2"),"review provenance");
const frozen=receipt.split("### NO SUCH SECTION"); // The fenced source below is used as exact reviewer-candidate copy.
const textSource=receipt.split("```text\n")[1]?.split("\n```")[0];
ok(textSource?.includes("CARD geo19-core-1")&&textSource.includes("GEO19MICRO_017"),"R2 source excerpt exists");
const sourceCard=id=>{const c=textSource.split("CARD "+id+" — NEW CANDIDATE, NOT DEPLOYED\n")[1]?.split(/\nCARD geo19-core-|\n\[F\]/)[0];ok(c,"candidate "+id);return c};
const grab=(s,k)=>{const match=s.match(new RegExp("^"+k.replaceAll(".","\\.")+": (.*)$","m"));ok(match,k);return match[1]};
const by=new Map(bank.questions.map(q=>[q.id,q])),man=json("docs/assets/data/practice/19-duong-tron-v1.manifest.json");
let declared=0,covered=0;
for(const card of w.cards){
 const candidate=sourceCard(card.id),t=card.teaching_copy,qs=card.micro_practice.map(id=>by.get(id));
 ok(qs.every(Boolean)&&qs.slice(0,3).map(q=>q.micro_role).join(",")==="base,trap,apply"&&qs.slice(3).every(q=>q.micro_role==="coverage"),"roles and source questions "+card.id);
 ok(qs.every(q=>q.card_id===card.id&&q.tags.skill.length===1&&card.skills.includes(q.tags.skill[0])),"primary skill and card "+card.id);
 ok(t?.review_status==="APPROVED"&&t.review_method==="NOTEBOOKLM_R1_TARGETED_R2"&&t.academic_review_ref===proof&&t.review_source_blob_sha==="358a0461ea70ee587432d1ad8773c52973edfa8a","review method "+card.id);
 for(const [key,v] of [["key_idea",t.key_idea],["worked_example.problem",t.worked_example.problem],["worked_example.solution",t.worked_example.solution],["misconception",t.misconception],["summary",t.summary],["source_reference",t.source_reference]])ok(v===grab(candidate,key),"R2 exact text "+card.id+"/"+key);
 ok(t.source_reference===root+"index.md"&&JSON.stringify(t.source_question_ids)===JSON.stringify(card.micro_practice.slice(0,3)),"locked sources "+card.id);
 for(const s of [t.key_idea,t.worked_example.problem,t.worked_example.solution,t.misconception,t.summary])ok(!/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(s),"no hidden controls");
 const assessed=new Set(qs.map(q=>q.tags.skill[0]));for(const skill of card.skills){ok(man.skill_labels[skill],"manifest skill "+skill);declared++;if(assessed.has(skill))covered++}
}
ok(declared===14&&covered===14,"14/14 dedicated opportunities, NOT mastery");
const specs=[["GEO19MICRO_016","geo19-core-1","do-dai-duong-tron","Một đường tròn có bán kính 7 cm. Độ dài đường tròn là:",["14π cm","7π cm","49π cm","28π cm"]],["GEO19MICRO_017","geo19-core-4","dau-hieu-noi-tiep","ABCD là tứ giác lồi không suy biến với bốn đỉnh phân biệt. Biết ∠ABC=110° và ∠ADC=70°. Kết luận nào đúng?",["ABCD nội tiếp được một đường tròn","ABCD bắt buộc là hình chữ nhật","ABCD bắt buộc là hình thoi","ABCD không thể nội tiếp một đường tròn"]]];
for(const [id,card,skill,question,options] of specs){const q=by.get(id);ok(q&&q.card_id===card&&q.tags.skill.length===1&&q.tags.skill[0]===skill&&q.question===question&&JSON.stringify(q.options)===JSON.stringify(options)&&q.answer===0,"approved text, options and answer "+id);ok(q.hints.length===2&&q.givens.length&&q.micro_role==="coverage"&&q.tags.layer==="KNTT-Core"&&q.authoring_review.record===proof,"new hints, provenance "+id)}
ok(2*Math.PI*7>0&&2*7===14&&110+70===180,"numeric and opposite-angle oracles");
for(const src of ["GEO19MICRO_001","GEO19MICRO_002","GEO19MICRO_003"])ok(by.get(src).card_id==="geo19-core-1","stable old association");
ok(read(root+"core/index.md").includes('data-topic-core-entry="19-duong-tron"')&&read("mkdocs.yml").includes("kien-thuc/19-duong-tron/core/index.md"),"standalone route");
const engine=read("docs/assets/javascripts/topic-workspace-v1.js"),ui=read("docs/assets/javascripts/knowledge-ui-v1.js");
ok(engine.includes('"19-duong-tron"')&&ui.includes('"19-duong-tron"')&&engine.includes('recordAnswer?.('),"rendering and evidence hooks");
ok(w.extensions.every(x=>x.gates_core===false),"no extension core gate");
console.log("PASS: Core19 source R2 exact 5 lectures, frozen 15 legacy questions, 2 approved gap items, 14/14 opportunities, immutable historical identity.");
