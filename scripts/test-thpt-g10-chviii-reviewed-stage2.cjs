#!/usr/bin/env node
"use strict";
// G10 ChVIII staging guard: 25 public formative IDs + 3 Written; no held-out Readiness.
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict"),
 vm=require("node:vm"),crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const source=read("docs/assets/javascripts/thpt-chviii-reviewed-formative-v1.js");
const sandbox={window:{}};
vm.runInNewContext(source,sandbox,{timeout:5000});
const bank=sandbox.window.THPT_CHVIII_REVIEWED_FORMATIVE;
assert(bank?.validate().valid,"ChVIII formative canonical bank invalid");
const ids=bank.records.map(x=>x.item_id);
assert.equal(ids.length,25);assert.equal(new Set(ids).size,25);
for(let n=23;n<=25;n++){
 const items=bank.records.filter(x=>x.lesson===String(n));
 assert.equal(items.length,n===25?9:8,"ChVIII item count B"+n);
 assert.equal(bank.forLesson(n,"core").length,2,"ChVIII Core B"+n);
 assert.equal(bank.forLesson(n,"practice").length,n===25?7:6,"ChVIII Practice B"+n);
 const lesson=read("docs/thpt-preview/sgk/chuong-viii/bai-"+n+".md");
 assert(lesson.includes("## 1.")&&lesson.includes("## 3."),"Missing self-contained Knowledge/Examples B"+n);
 assert(lesson.includes("SGK")&&lesson.includes("SBT")&&lesson.includes("../luyen-tap/"));
}
assert(bank.records.some(x=>x.item_id==="THPT-G10-B25-P07"&&x.role==="PRACTICE"&&x.solution.includes("-243")),
 "P07 independently reviewed Delta_C constant term not staged correctly");
for(const [id,role] of [["THPT-G10-B25-P02","SUPPORT_EXTENSION"],["THPT-G10-B25-P05","SUPPORT_EXTENSION"],["THPT-G10-B25-P06","OPTIONAL_SPECIALIZED"]])
 assert(bank.records.some(x=>x.item_id===id&&x.role===role),"B25 reviewer scope overlay lost: "+id);
assert(bank.forLesson(25,"core").every(x=>!["SUPPORT_EXTENSION","OPTIONAL_SPECIALIZED"].includes(x.role)),
 "Optional B25 items must not become mandatory Core");
const written=read("docs/thpt-preview/thu-vien/tu-luan-chuong-viii.md");
const wIds=[...written.matchAll(/data-thpt-written-canonical="([^"]+)"/g)].map(x=>x[1]);
assert.deepEqual(wIds,["THPT-G10-CHVIII-W23-01","THPT-G10-CHVIII-W24-ANCHOR-01","THPT-G10-CHVIII-W25-01"]);
assert.equal(new Set([...ids,...wIds]).size,28,"ChVIII must have 28 unique canonical records");
assert.equal((written.match(/data-thpt-kind="anchor"/g)||[]).length,1,"Anchor must be a Written tag");
assert.equal((written.match(/<details>/g)||[]).length,3,"Written solutions start collapsed");
const hub=read("docs/thpt-preview/sgk/chuong-viii/luyen-tap.md");
for(let n=23;n<=25;n++)for(const role of ["core","practice"])
 assert(hub.includes('data-thpt-open-quiz="b'+n+'-'+role+'"'),"Missing Core/Practice launcher "+n+" "+role);
const readiness=read("docs/thpt-preview/sgk/chuong-viii/tu-kiem-tra-chuong.md");
assert(!/<input|<button|data-thpt-secure-readiness|data-mastery-credit/.test(readiness),
 "Readiness remains information-only");
for(const content of [source,hub,written,readiness,...[23,24,25].map(n=>read("docs/thpt-preview/sgk/chuong-viii/bai-"+n+".md"))])
 assert(!/THPT-G10-CHVIII-RD\d\d|THPT-G10-CHVIII-READ-B\d\d-\d\d|THPTProtectedReadiness|data-mastery-credit=["']true/.test(content),
 "No held-out Readiness or mastery data may appear in public ChVIII");
const file="docs/assets/images/thpt/THPT_G10_B23_COUNTING_TREE_DRAFT.svg";
const svg=fs.readFileSync(path.join(root,file));
const blob=crypto.createHash("sha1").update("blob "+svg.length+"\0").update(svg).digest("hex");
const footer='<text x="38" y="525" font-size="15" fill="#64748b">DRAFT — cây tự dựng; các nhánh lựa chọn độc lập, không lặp cùng bộ</text>\n';
const rebuilt=Buffer.from(svg.toString("utf8").replace("</svg>",footer+"</svg>"),"utf8");
const originalBlob=crypto.createHash("sha1").update("blob "+rebuilt.length+"\0").update(rebuilt).digest("hex");
assert.equal(originalBlob,"f24fcdf80d2a4ffc935a415197b30f48a54b4817","D5 FIG04 reviewed original bytes must be reproducible from the UI-only footer removal");
const xml=svg.toString("utf8");
assert(xml.includes("<title")&&xml.includes("<desc")&&xml.includes('viewBox='));
assert(!xml.includes("DRAFT — cây tự dựng"),"Student FIG04 must not show draft watermark");
assert(!/<script\b|onload\s*=|<foreignObject\b|<image\b|(?:xlink:)?href=["']https?:/i.test(xml),"SVG contains unsafe external or executable content");
const engine=read("docs/assets/javascripts/thpt-r4-preview.js");
assert(engine.includes("THPT_CHVIII_REVIEWED_FORMATIVE")&&engine.includes("THPT-G10-B23-C02")&&engine.includes("THPT_G10_B23_COUNTING_TREE_DRAFT.svg"));
assert(engine.includes('solution.addEventListener("toggle"')&&engine.includes("if(!solution.open"),"D5 solution must be opt-in");
const config=read("mkdocs.thpt-preview.yml");
for(const file of ["chuong-viii.md","bai-23.md","bai-24.md","bai-25.md","chuong-viii/luyen-tap.md","chuong-viii/tu-kiem-tra-chuong.md","tu-luan-chuong-viii.md","thpt-chviii-reviewed-formative-v1.js"])
 assert(config.includes(file),"MkDocs missing ChVIII route/asset "+file);
console.log("PASS ChVIII 25 public formative + 3 Written (one Anchor), P07 delta, B25 optional overlays, exact D5 FIG04, 0 Readiness keys/credit");
