#!/usr/bin/env node
"use strict";

// Pure mirror of the browser recommender policy for regression QA.
const MIN = 3, WEAK = 0.75;
const acc = r => r && r.attempted ? r.correct / r.attempted : null;
const ev = (stats, skill) => {
  const r=stats.tags[skill];
  return {skill, attempted:r?.attempted||0, accuracy:acc(r), sufficient:(r?.attempted||0)>=MIN};
};
const diagnose=(stats,target,recommend)=>{
  const t=ev(stats,target);
  if(!t.sufficient||t.accuracy>=WEAK)return null;
  const candidates=recommend.map(s=>ev(stats,s));
  const weak=candidates.filter(x=>x.sufficient&&x.accuracy<WEAK).sort((a,b)=>a.accuracy-b.accuracy);
  const missing=candidates.filter(x=>!x.sufficient);
  return weak.length?{kind:"evidenced",skill:weak[0].skill}:missing.length?{kind:"needs-evidence"}:{kind:"target-only"};
};
const s=tags=>({tags});
const cases=[
 ["one wrong is not diagnosis",s({target:{attempted:1,correct:0},pre:{attempted:8,correct:2}}),"target",["pre"],null],
 ["weak target + weak prereq",s({target:{attempted:5,correct:2},pre:{attempted:6,correct:2}}),"target",["pre"],"evidenced:pre"],
 ["weak target + healthy prereq",s({target:{attempted:5,correct:2},pre:{attempted:8,correct:7}}),"target",["pre"],"target-only"],
 ["weak target + prereq insufficient",s({target:{attempted:5,correct:2},pre:{attempted:2,correct:0}}),"target",["pre"],"needs-evidence"],
 ["choose weakest evidenced prereq",s({target:{attempted:9,correct:3},a:{attempted:8,correct:5},b:{attempted:8,correct:2}}),"target",["a","b"],"evidenced:b"],
 ["target at threshold is not weak",s({target:{attempted:4,correct:3},pre:{attempted:8,correct:1}}),"target",["pre"],null]
];
let failed=0;
for(const [name,stats,target,recs,expected] of cases){
 const d=diagnose(stats,target,recs); const got=d?(d.kind+(d.skill?":"+d.skill:"")):null;
 if(got!==expected){failed++;console.error("FAIL",name,{expected,got});}else console.log("PASS",name);
}
if(failed)process.exit(1);
console.log("All remediation policy QA cases passed.");
