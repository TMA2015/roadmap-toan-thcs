#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const ARCH = JSON.parse(fs.readFileSync(path.join(ROOT,"docs/assets/data/curriculum/geometry-architecture-v1.json"),"utf8"));
const COVER = JSON.parse(fs.readFileSync(path.join(ROOT,"docs/assets/data/curriculum/geometry-core-coverage-v1.json"),"utf8"));
const BENCH = JSON.parse(fs.readFileSync(path.join(ROOT,"content-staging/benchmarks/geometry-001-rectangle-midpoints.json"),"utf8"));
const errors=[];

const eqSet=(a,b)=>a.length===b.length && a.every(x=>b.includes(x));
const controlChars=(s,p)=>{for(let i=0;i<s.length;i++){const c=s.charCodeAt(i);if(c<32&&![9,10,13].includes(c))errors.push(`${p}: control char U+${c.toString(16).padStart(4,"0")}`)}};

if(ARCH.schema!=="roadmap-geometry-architecture-v1"||ARCH.version!=="1.0") errors.push("geometry architecture metadata");
if(ARCH.status!=="FROZEN-V1"||ARCH.frozen!==true) errors.push("geometry architecture freeze metadata");
const FREEZE=JSON.parse(fs.readFileSync(path.join(ROOT,"content-staging/reviews/GEO-ARCH-V1-FREEZE-AUDIT-001.json"),"utf8"));
if(FREEZE.verdict!=="FROZEN-V1"||FREEZE.blockers?.length||FREEZE.evidence?.length!==5||FREEZE.evidence.some(e=>!["PASS","OWNER_ACCEPTANCE_PASS"].includes(e.status))) errors.push("geometry architecture freeze evidence incomplete");
if(COVER.schema!=="roadmap-geometry-core-coverage-v1"||COVER.topics?.length!==8) errors.push("coverage matrix metadata");

let totalCore=0,totalPresent=0,totalMissing=0;
for(const t of COVER.topics||[]){
 const manifestPath=path.join(ROOT,`docs/assets/data/practice/${t.id}-v1.manifest.json`);
 if(!fs.existsSync(manifestPath)){errors.push(`${t.id}: missing manifest`);continue}
 const man=JSON.parse(fs.readFileSync(manifestPath,"utf8"));
 const bank=Object.keys(man.skill_labels||{});
 const core=[...new Set(t.curriculum_core_skills||[])];
 const expectedPresent=core.filter(x=>bank.includes(x)).sort();
 const expectedMissing=core.filter(x=>!bank.includes(x)).sort();
 const expectedExtra=bank.filter(x=>!core.includes(x)).sort();
 if(!eqSet([...t.bank_exact_id_coverage].sort(),expectedPresent)) errors.push(`${t.id}: exact coverage drift`);
 if(!eqSet([...t.missing_by_exact_skill_id].sort(),expectedMissing)) errors.push(`${t.id}: missing-core drift`);
 if(!eqSet([...t.bank_skills_not_core_by_current_map].sort(),expectedExtra)) errors.push(`${t.id}: bank-extra drift`);
 if((t.explicit_noncore||[]).some(x=>core.includes(x))) errors.push(`${t.id}: explicit noncore promoted to core`);
 const cardSkills=(t.recommended_cards||[]).flatMap(c=>c.skills||[]);
 if((t.recommended_cards||[]).length!==5) errors.push(`${t.id}: expected 5 recommended cards`);
 if(cardSkills.length!==new Set(cardSkills).size) errors.push(`${t.id}: duplicate Core skill across cards`);
 if(!eqSet([...cardSkills].sort(),[...core].sort())) errors.push(`${t.id}: recommended cards do not cover exact Core set`);
 totalCore+=core.length; totalPresent+=expectedPresent.length; totalMissing+=expectedMissing.length;

 for(const src of man.sources||[]){
   const chunkPath=path.join(path.dirname(manifestPath),src);
   if(!fs.existsSync(chunkPath)){errors.push(`${t.id}: missing chunk ${src}`);continue}
   const raw=fs.readFileSync(chunkPath,"utf8"); controlChars(raw,chunkPath);
   const chunk=JSON.parse(raw);
   for(const q of chunk.questions||[]){
     if(q.diagram!==undefined){
       if(!q.diagram?.src||!q.diagram?.alt) errors.push(`${q.id}: diagram missing src/alt`);
       const resolved=path.resolve(path.dirname(chunkPath),q.diagram.src||"");
       if(!fs.existsSync(resolved)) errors.push(`${q.id}: missing diagram file ${resolved}`);
     }
   }
 }
}
const s=COVER.summary||{};
if(s.total_curriculum_core_skills!==totalCore||s.exact_id_covered!==totalPresent||s.exact_id_gaps!==totalMissing) errors.push("coverage summary drift");

const p=(id)=>BENCH.coordinates[id];
const midpoint=(m,a,b)=>Math.abs(m[0]-(a[0]+b[0])/2)<1e-9&&Math.abs(m[1]-(a[1]+b[1])/2)<1e-9;
const collinear=(a,b,c)=>Math.abs((b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]))<1e-9;
const dot=(a,b,c)=> (b[0]-a[0])*(c[0]-a[0])+(b[1]-a[1])*(c[1]-a[1]);
const polygonArea=pts=>Math.abs(pts.reduce((sum,p,i)=>{const q=pts[(i+1)%pts.length];return sum+p[0]*q[1]-q[0]*p[1]},0))/2;
if(!midpoint(p("M"),p("A"),p("B"))) errors.push("BENCH-GEO-001: M not midpoint AB");
if(!midpoint(p("N"),p("B"),p("C"))) errors.push("BENCH-GEO-001: N not midpoint BC");
if(!collinear(p("M"),p("E"),p("C"))||!collinear(p("D"),p("E"),p("N"))) errors.push("BENCH-GEO-001: E intersection geometry wrong");
if(Math.abs(dot(p("A"),p("B"),p("D")))>1e-9) errors.push("BENCH-GEO-001: rectangle right angle wrong");
const area=polygonArea(["B","M","E","N"].map(p));
if(Math.abs(area-BENCH.target.expected)>BENCH.target.tolerance) errors.push(`BENCH-GEO-001: expected area ${BENCH.target.expected}, got ${area}`);

const benchMd=fs.readFileSync(path.join(ROOT,"content-staging/benchmarks/geometry-001-rectangle-midpoints.md"),"utf8");
controlChars(benchMd,"BENCH-GEO-001 markdown");
const benchSvg=path.join(ROOT,BENCH.svg_path||"");
if(!BENCH.svg_path||!fs.existsSync(benchSvg)) errors.push("BENCH-GEO-001: benchmark SVG missing");

const reviewSources=[
 "docs/assets/data/curriculum/geometry-architecture-v1.json",
 "docs/assets/data/curriculum/geometry-core-coverage-v1.json",
 "docs/assets/data/curriculum/geometry-diagram-spec-v1.schema.json",
 "docs/assets/data/curriculum/golden-template-v1.json",
 "docs/assets/data/curriculum/kntt-grade6-map.json",
 "docs/assets/data/curriculum/kntt-grade7-map.json",
 "docs/assets/data/curriculum/kntt-grade8-map.json",
 "docs/assets/data/curriculum/kntt-grade9-map.json",
 "docs/roadmap/audit-hoc-thuat-13-20-v1.md",
 "content-staging/templates/geometry-item.md",
 "content-staging/benchmarks/geometry-001-rectangle-midpoints.md",
 "content-staging/benchmarks/geometry-001-rectangle-midpoints.json",
 "docs/assets/data/collaboration/packets/GEO-ARCH-V1-GEMINI-REVIEW-001.json"
];
for(const rel of reviewSources) if(!fs.existsSync(path.join(ROOT,rel))) errors.push(`review bundle source missing: ${rel}`);

if(errors.length){console.error(errors.join("\n"));process.exit(1)}
console.log(`PASS: Geometry Architecture v1 · 8 topics · ${totalCore} Core skill IDs · ${totalPresent} exact covered · ${totalMissing} exact-ID gaps · BENCH-GEO-001 area=${area}`);
