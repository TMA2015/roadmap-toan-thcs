#!/usr/bin/env node
"use strict";
/* Source/role/release gate: reviewed public SGK ChVII FORMATIVE only.
 * No owner Academic PASS, no secure readiness, no automatic mastery.
 */
const fs=require("node:fs"),vm=require("node:vm"),path=require("node:path");
const assert=require("node:assert/strict"),root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const js=read("docs/assets/javascripts/thpt-chvii-reviewed-formative-v1.js");
const sandbox={window:{}};
vm.runInNewContext(js,sandbox,{timeout:5000,filename:"chvii-reviewed-formative-v1.js"});
const bank=sandbox.window.THPT_CHVII_REVIEWED_FORMATIVE;
assert(bank&&bank.validate().valid,"public ChVII bank not self-consistent");
const ids=bank.records.map(x=>x.item_id);
assert.equal(ids.length,32);assert.equal(new Set(ids).size,32);
const required=Array.from({length:4},(_,i)=>String(i+19));
for(const lesson of required){
 const items=bank.records.filter(x=>x.lesson===lesson);
 assert.equal(items.length,8,"must preserve eight original canonical C/P source records B"+lesson);
 assert(items.every(x=>x.solution.length>15&&x.hint.length>5&&x.stem.length>15));
 assert.equal(bank.forLesson(lesson,"core").length,2,"Two SGK Core placements required B"+lesson);
 assert.equal(bank.forLesson(lesson,"practice").length,lesson==="22"?7:6,"SGK Practice/Application/specialist placement missing B"+lesson);
 const lessonText=read("docs/thpt-preview/sgk/chuong-vii/bai-"+lesson+".md");
 assert(lessonText.includes("## 1.")&&lessonText.includes("## 3."),"SGK knowledge not stand-alone B"+lesson);
 assert(lessonText.includes("SGK")&&lessonText.includes("SBT"),"S1 lesson page provenance missing B"+lesson);
 assert(!/NotebookLM|ACADEMIC_CLEARANCE|đang QA/i.test(lessonText),"Student-facing ChVII lesson leaked project notes");
 assert(lessonText.includes("luyen-tap/"),"SGK lesson missing practice link B"+lesson);
}
assert(ids.includes("THPT-G10-B22-C01"),"specialist eccentricity candidate is part of 32 reviewed source records");
assert(!bank.forLesson("22","core").some(x=>x.item_id==="THPT-G10-B22-C01"),
 "B22-C01 specialist eccentricity item must not be mandatory SGK Core");
assert(bank.forLesson("22","practice").some(x=>x.item_id==="THPT-G10-B22-C01"&&x.role==="OPTIONAL_SPECIALIZED"),
 "B22-C01 must remain optional specialist Practice with original canonical ID");
assert.equal(bank.forLesson("22","practice").at(-1).item_id,"THPT-G10-B22-C01",
 "Specialist item must appear last, clearly separated from normal practice");
assert(bank.forLesson("22","core").some(x=>x.item_id==="THPT-G10-B22-P01"),
 "approved ellipse Core coverage must reuse ONE B22-P01 canonical ID");
assert.equal(bank.records.filter(x=>x.item_id==="THPT-G10-B22-P01").length,1,
 "B22-P01 must not be cloned when placed in Core and Practice");
for(const p of [
 "docs/assets/javascripts/thpt-chvii-reviewed-formative-v1.js",
 "docs/thpt-preview/sgk/chuong-vii.md",
 "docs/thpt-preview/sgk/chuong-vii/luyen-tap.md",
 "docs/thpt-preview/sgk/chuong-vii/tu-kiem-tra-chuong.md",
 "docs/thpt-preview/thu-vien/tu-luan-chuong-vii.md",
 ...required.map(x=>"docs/thpt-preview/sgk/chuong-vii/bai-"+x+".md")
]){
 const source=read(p);
 assert(!/THPT-G10-(?:CHVII|CHVIII)-RD\d{2}/.test(source),
  "never expose held-out assessment stems/IDs in learner routes: "+p);
 assert(!/data-mastery-credit=["']true|THPTProtectedReadiness|THPTSecureReadiness/.test(source),
  "new SGK formative pages cannot activate scoring");
}
const written=read("docs/thpt-preview/thu-vien/tu-luan-chuong-vii.md");
const writtenIds=[...written.matchAll(/data-thpt-written-canonical="([^"]+)"/g)].map(x=>x[1]);
const expectedWritten=["THPT-G10-CHVII-W19-01","THPT-G10-CHVII-W20-01",
 "THPT-G10-CHVII-W21-ANCHOR-01","THPT-G10-CHVII-W22-01"];
assert.deepEqual(writtenIds,expectedWritten,"Four reviewed Written/Anchor items in one canonical register");
assert.equal(new Set([...ids,...writtenIds]).size,36,"32 C/P + 4 Written must stay unique");
assert.equal((written.match(/data-thpt-kind="anchor"/g)||[]).length,1,
 "Anchor is a single tag on one Written item");
assert.equal((written.match(/<details>/g)||[]).length,4,"All solutions and rubrics must be collapsed initially");
const hub=read("docs/thpt-preview/sgk/chuong-vii/luyen-tap.md");
for(const lesson of required)for(const role of ["core","practice"])
 assert(hub.includes('data-thpt-open-quiz="b'+lesson+'-'+role+'"'),
  "missing R4 Core/Practice launcher B"+lesson+" "+role);
assert.equal((hub.match(/data-thpt-practice-hub/g)||[]).length,1,
 "one shared hub should wire all lesson card buttons");
const mkdocs=read("mkdocs.thpt-preview.yml");
for(const name of ["chuong-vii.md","bai-19.md","bai-20.md","bai-21.md","bai-22.md","chuong-vii/luyen-tap.md","chuong-vii/tu-kiem-tra-chuong.md",
 "thpt-chvii-reviewed-formative-v1.js","tu-luan-chuong-vii.md"])
 assert(mkdocs.includes(name),"THPT nav/script missing "+name);
const crypto=require("node:crypto");
const reviewedD5=[
 ["THPT-G10-B19-P06","THPT_G10_B19_LINE_INTERSECTION_DRAFT.svg","8964b708aac7cf56d1848db9d469f2573ce40873"],
 ["THPT-G10-B21-P03","THPT_G10_B21_CIRCLE_TANGENT_DRAFT.svg","08e22fbc8ed90db7ccc48d782eb270404f057226"],
 ["THPT-G10-B22-P06","THPT_G10_B22_PARABOLA_FOCUS_DIRECTRIX_DRAFT.svg","e28c6500b486ee755fad0fc164d48969fd891c55"]
];
for(const [itemId,asset,sha] of reviewedD5){
 const rel="docs/assets/images/thpt/"+asset;
 const content=fs.readFileSync(path.join(root,rel));
 const hash=crypto.createHash("sha1").update("blob "+content.length+"\0").update(content).digest("hex");
 const xml=content.toString("utf8");
 const reviewerFooter={
  "THPT_G10_B19_LINE_INTERSECTION_DRAFT.svg":'<text x="65" y="426" font-size="15" fill="#64748b">DRAFT — hình tự dựng, chưa qua Academic review</text>\n',
  "THPT_G10_B21_CIRCLE_TANGENT_DRAFT.svg":'<text x="70" y="430" font-size="15" fill="#64748b">DRAFT — hình tự dựng, chưa qua Academic review</text>\n',
  "THPT_G10_B22_PARABOLA_FOCUS_DIRECTRIX_DRAFT.svg":'<text x="80" y="440" font-size="15" fill="#64748b">DRAFT — hình tự dựng, chưa qua Academic review</text>\n'
 }[asset];
 assert(reviewerFooter&&xml.trimEnd().endsWith("</svg>"),"D5 footer equivalence rule missing");
 const reviewed=Buffer.from(xml.replace("</svg>",reviewerFooter+"</svg>"),"utf8");
 const reviewerHash=crypto.createHash("sha1").update("blob "+reviewed.length+"\0").update(reviewed).digest("hex");
 assert.equal(reviewerHash,sha,"D5 illustration math/geometry must match reviewed Git blob after restoring ONLY old admin footer: "+asset);
 assert(!xml.includes("DRAFT — hình tự dựng")&&!xml.includes("chưa qua Academic review"),"Outdated unreviewed watermark not allowed in student-facing D5 illustration");
 assert(xml.includes("<title")&&xml.includes("<desc")&&xml.includes('viewBox='),
  "Accessible SVG requires title, description and scalable viewBox: "+asset);
 assert(!/<script\b|onload\s*=|<foreignObject\b|<image\b|(?:xlink:)?href=["']https?:/i.test(xml),
  "D5 assets must be local, inert, and safe to embed");
 assert(bank.records.some(x=>x.item_id===itemId&&x.role!=="CORE"),
  "Answer-bearing D5 asset must attach only to a reviewed Practice record: "+itemId);
}
const engine=read("docs/assets/javascripts/thpt-r4-preview.js");
assert(reviewedD5.every(x=>engine.includes(x[0])&&engine.includes(x[1])),
 "All three D5 figures must use exact original canonical Practice ID in the disclosure-only mapping");
assert(engine.includes('solution.addEventListener("toggle"')&&engine.includes('if(!solution.open'),
 "No answer-bearing SVG may render before the learner opens the solution details");
assert(engine.includes("THPT_CHVII_REVIEWED_FORMATIVE")&&engine.includes("2[0-5]"),
 "R4 exercise UI must load the reviewed ChVII canonical bank");
console.log("PASS G10 ChVII D1/D2 knowledge, all 32 unique reviewed public C/P including specialist role, 4 Written (1 Anchor), R4 navigation, no held-out Readiness or mastery");
