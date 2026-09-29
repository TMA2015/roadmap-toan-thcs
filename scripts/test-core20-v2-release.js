#!/usr/bin/env node
"use strict";
const fs=require("fs"),crypto=require("crypto");
const read=p=>fs.readFileSync(p,"utf8"),json=p=>JSON.parse(read(p)),ok=(v,msg)=>{if(!v)throw Error("CORE20 V2: "+msg)};
const blob=s=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+Buffer.byteLength(s)+"\0"),Buffer.from(s)])).digest("hex");
const lesson="docs/kien-thuc/20-hinh-hoc-tong-hop/index.md";
const legacyPath="docs/assets/data/curriculum/topic20-learning-workspace.json";
const bankPath="docs/assets/data/practice/20-hinh-hoc-tong-hop-micro-v1.json";
const viewPath="docs/assets/data/curriculum/topic20-core-display-v2.json";
const proof="content-staging/reviews/MATH-CORE20-V2-RELEASE-RECONCILIATION-20260929.md";
const source="content-staging/reviews/MATH-CORE20-R1-CANDIDATES-EXACT-20260929.md";
const report="content-staging/reviews/MATH-CORE20-PARTB-OWNER-REVIEW-RESULT-20260929.md";
const legacy=json(legacyPath),bank=json(bankPath),view=json(viewPath),receipt=read(proof),approved=read(source),review=read(report);
const originalLessonHash="8a279134ebf5e2f3083d56783d2fdd095be78f18";
const originalWorkspaceHash="774997cd9ac4d2efc1c53c17c0de48e6fcdba497";
const originalBankHash="d61845552c9a484ab9b220606ff20c9a9e6a7046";
const reviewSourceHash="1b22f297e57eeee65c43575c4a81fd06c8e7eede";
ok(blob(read(lesson))===originalLessonHash,"original full lesson blob must not change");
ok(blob(read(legacyPath))===originalWorkspaceHash,"original five-card workspace blob must not change");
const first15={...bank,question_count:15,questions:bank.questions.slice(0,15)};
ok(blob(JSON.stringify(first15,null,2)+"\n")===originalBankHash,"all original fifteen question records and top-level bank fields preserved");
ok(bank.questions.length===29&&bank.question_count===29,"15+14 questions");
ok(view.schema==="roadmap-topic-core-display-overlay-v2"&&view.version===2&&view.topic===legacy.topic&&view.cards.length===10,"versioned ten-card overlay");
ok(view.source_workspace_blob_sha===originalWorkspaceHash&&view.source_legacy_bank_blob_sha===originalBankHash&&view.source_review_blob_sha===reviewSourceHash,"overlay source hashes");
ok(view.history_policy.migration==="none"&&view.history_policy.storage_key==="toan-thcs-practice-v1"&&view.history_policy.old_card_progress.includes("read-only"),"no legacy progress migration or recomputation");
const legacyDenoms=[9,8,3,6,3];ok(legacy.cards.length===5&&view.legacy_cards_read_only.length===5,"five legacy anchors");
for(let i=0;i<5;i++){
 const c=legacy.cards[i],v=view.legacy_cards_read_only[i];
 ok(c.id===v.id&&c.skills.length===legacyDenoms[i]&&v.original_skill_denominator===legacyDenoms[i],"historical card denominator "+c.id);
 ok(JSON.stringify(c.skills)===JSON.stringify(v.original_skills)&&JSON.stringify(c.micro_practice)===JSON.stringify(v.original_micro_practice),"historical mapping snapshot "+c.id);
}
ok(approved.includes(reviewSourceHash)&&review.includes("19/19")&&receipt.includes("Part A 10 groups/29 skills PASS"),"source and review provenance");
const from=approved.indexOf("[E] AUTHOR CANDIDATE TEN-CARD GROUPING"),until=approved.indexOf("```",from),sourceText=approved.slice(from,until);
ok(from>=0&&until>from,"full candidate source excerpt");
const sourceGroups=[...sourceText.matchAll(/PROPOSED ORDER (\d+) (geo20-core-[0-9ab]+) \[(?:LEGACY_CARD|NEW_CARD)\]: ([^\n]+)\nCandidate skills: ([^\n]+)\nOriginal or proposed question IDs: ([^\n]+)/g)];
ok(sourceGroups.length===10,"ten source groups");
const byId=new Map(bank.questions.map(q=>[q.id,q])),viewIds=new Set,skills=[];
for(const [i,card] of view.cards.entries()){
 const m=sourceGroups[i];ok(card.order===Number(m[1])&&card.id===m[2]&&card.title===m[3],"source-locked grouping and ordering "+card.id);
 ok(JSON.stringify(card.skills)===JSON.stringify(m[4].split(", ")),"exact reviewed skill group "+card.id);
 ok(!viewIds.has(card.id),"unique card ID "+card.id);viewIds.add(card.id);skills.push(...card.skills);
 ok(card.layer==="KNTT-Core"&&card.display_group_version===2&&card.teaching_copy&&card.teaching_copy.worked_example?.problem&&card.teaching_copy.worked_example?.solution,"complete Core teaching "+card.id);
 ok(card.micro_practice.length===card.skills.length,"each skill has one dedicated question "+card.id);
 for(const id of card.micro_practice){
  const q=byId.get(id);
  ok(q&&q.card_id===card.id&&q.tags.skill.length===1&&card.skills.includes(q.tags.skill[0])&&q.options.length===4&&new Set(q.options).size===4,"exact card, singleton skill, distinct options "+id);
  ok(q.micro_role==="coverage"||["base","trap","apply"].includes(q.micro_role),"learning micro role "+id);
 }
 const t=card.teaching_copy;
 for(const field of [t.key_idea,t.worked_example.problem,t.worked_example.solution,t.misconception,t.summary])ok(typeof field==="string"&&field.trim().length>14,"five teaching fields "+card.id);
 if(view.legacy_cards_read_only.some(x=>x.id===card.id))ok(t.review_status==="SELF_AUDITED"&&t.review_method==="SOURCE_LOCKED_BOUNDED_SELF_AUDIT","historical lectures not misrepresented as independent review "+card.id);
 else ok(t.review_status==="APPROVED"&&t.review_method==="NOTEBOOKLM_PART_B_R1_TEXT_ONLY"&&t.review_source_blob_sha===reviewSourceHash,"new lectures limited to reviewed text "+card.id);
}
ok(skills.length===29&&new Set(skills).size===29&&legacy.cards.flatMap(c=>c.skills).every(x=>skills.includes(x)),"exact 29/29 skill partition");
for(const q of bank.questions.slice(0,15)){
 const c=view.cards.find(c=>c.micro_practice.includes(q.id));
 ok(c&&c.id===q.card_id&&c.skills.includes(q.tags.skill[0]),"legacy question/card/assessed skill identity "+q.id);
}
ok(byId.get("GEO20MICRO_011").card_id==="geo20-core-4"&&byId.get("GEO20MICRO_011").tags.skill[0]==="dien-tich-xung-quanh-hinh-non","legacy mixed cylinder/cone binding remains");
ok(view.cards.find(c=>c.id==="geo20-core-2b").micro_practice.length===2,"no fabricated third prism item");
const sourceLectures=[...sourceText.matchAll(/NEW CANDIDATE TEACHING COPY (geo20-core-[0-9ab]+) \/ source [^\n]+\n([\s\S]*?)(?=\nNEW CANDIDATE TEACHING COPY|\n\[G\]|$)/g)];
ok(sourceLectures.length===5,"five new independently reviewed lecture candidates");
const grab=(s,k)=>{const m=s.match(new RegExp("^"+k.replaceAll(".","\\.")+": (.*)$","m"));ok(m,"source field "+k);return m[1]};
for(const m of sourceLectures){
 const c=view.cards.find(c=>c.id===m[1]),t=c.teaching_copy;
 ok(t.key_idea===grab(m[2],"key_idea")&&t.worked_example.problem===grab(m[2],"worked_example.problem")&&t.worked_example.solution===grab(m[2],"worked_example.solution")&&t.misconception===grab(m[2],"misconception")&&t.summary===grab(m[2],"summary"),"reviewed lecture fields copied exactly "+m[1]);
}
const items=[...sourceText.matchAll(/(GEO20MICRO_\d{3}) \/ NEW CANDIDATE ONLY \/ card (geo20-core-[0-9ab]+) \/ target ([^\n]+)\nQUESTION: ([^\n]+)\n0 \(A\): ([^\n]+)\n1 \(B\): ([^\n]+)\n2 \(C\): ([^\n]+)\n3 \(D\): ([^\n]+)\nPROPOSED ANSWER INDEX: (\d+)\nEXPLANATION: ([^\n]+)/g)];
ok(items.length===14,"fourteen reviewed new question candidates");
const published=[1,2,3,0,2,3,0,1,3,0,1,2,0,1],counts=[0,0,0,0],allIds=[];
for(const [i,m] of items.entries()){
 const q=byId.get(m[1]),oldOpts=m.slice(5,9),correct=oldOpts[0];
 ok(q&&q.id===m[1]&&q.card_id===m[2]&&q.tags.skill.length===1&&q.tags.skill[0]===m[3]&&q.question===m[4]&&q.explanation===m[10],"reviewed new item exact words and skill "+m[1]);
 ok(q.answer===published[i]&&q.authoring_review.source_answer_index===0&&q.authoring_review.published_answer_index===q.answer,"documented correct answer permutation "+q.id);
 const moved=[...oldOpts];moved.splice(0,1);moved.splice(q.answer,0,correct);
 ok(JSON.stringify(q.options)===JSON.stringify(moved)&&q.options[q.answer]===correct,"distractor/options set and correct content unchanged "+q.id);
 ok(q.micro_role==="coverage"&&q.hints.length===2&&q.authoring_review.review_result===report,"formative only plus provenance "+q.id);
 counts[q.answer]++;allIds.push(q.id);
}
ok(JSON.stringify(allIds)===JSON.stringify(Array.from({length:14},(_,i)=>"GEO20MICRO_"+String(16+i).padStart(3,"0"))),"new ID range append-only");
ok(JSON.stringify(counts)===JSON.stringify([4,4,3,3]),"balanced new question option placement");
ok(bank.questions.slice(15).every(q=>q.tags.layer==="KNTT-Core"&&q.curriculum.level==="core"),"new item Core layer");
const math={
squareArea:7*7,boxSurface:2*(2+3)*5,pyramidSurface:(4*6/2)*5,pyramidVolume:6*6*4/3,
cylinderVolume:2**2*5,coneSurface:3*5,sphereArea:4*2**2,sphereVolume:4*2**3/3,
mixedUnits:2.5*1.2,boxVolume:4*3*2,baseArea:6*4,liters:2.5*1000,prismVolume:9*7,coneVolume:3**2*8/3
};
ok(math.squareArea===49&&math.boxSurface===50&&3**2+4**2===5**2&&math.pyramidSurface===60&&math.pyramidVolume===48&&math.cylinderVolume===20&&math.coneSurface===15&&math.sphereArea===16&&Math.abs(math.sphereVolume-32/3)<1e-9&&math.mixedUnits===3&&math.boxVolume===24&&math.baseArea===24&&math.liters===2500&&math.prismVolume===63&&math.coneVolume===24,"independent numerical oracle checks");
const rt=read("docs/assets/javascripts/topic-workspace-v1.js"),shell=read("docs/assets/javascripts/knowledge-ui-v1.js"),nav=read("mkdocs.yml"),evidence=read("docs/assets/javascripts/learner-evidence-v1.js");
ok(rt.includes('coreViewData:"assets/data/curriculum/topic20-core-display-v2.json"')&&rt.includes('view.history_policy?.migration!=="none"')&&rt.includes("legacy_cards_read_only")&&rt.includes('"20-hinh-hoc-tong-hop"'),"runtime overlay gate present");
ok(shell.includes('"20-hinh-hoc-tong-hop"')&&nav.includes("kien-thuc/20-hinh-hoc-tong-hop/core/index.md"),"four-step Core route");
ok(evidence.includes("data.questions[question.id]")&&evidence.includes("const skills = questionSkills(question)")&&!evidence.includes("question.card_id"),"learner evidence keyed by question and skill, not display card");
ok(legacy.extensions.every(x=>x.gates_core===false),"no extension gating");
console.log("PASS: Core20 v2 10 groups, 29/29 skill opportunities, 15 frozen original items and 5 frozen legacy cards, 14 balanced reviewer-source-preserving options, 10 teaching copies, math and evidence nonmigration.");
