#!/usr/bin/env node
"use strict";
const graph={edges:[
 {from:"pre",to:"target",type:"PREREQUISITE",confidence:"high"},
 {from:"seq",to:"target",type:"SEQUENCE",confidence:"high"},
 {from:"low",to:"target",type:"PREREQUISITE",confidence:"medium"}
],remediation_rules:[{when:{skill:"target"},recommend:["pre","rem"]}]};
const stats={tags:{target:{attempted:5,correct:2},pre:{attempted:6,correct:2},rem:{attempted:1,correct:0},unrelated:{attempted:99,correct:0}}};
const recovery={events:[
 {source_skill:"other",remediation_skill:"unrelated"},
 {source_skill:"target",remediation_skill:"pre",status:"completed"}
]};
const prereqs=graph.edges.filter(e=>e.to==="target"&&e.type==="PREREQUISITE"&&e.confidence==="high").map(e=>e.from);
if(JSON.stringify(prereqs)!=='["pre"]')throw Error("Only reviewed high-confidence prerequisite may pass.");
const relevant=[...new Set([...prereqs,...graph.remediation_rules[0].recommend])];
if(relevant.includes("unrelated"))throw Error("Unrelated learner history leaked.");
const events=recovery.events.filter(e=>e.source_skill==="target"||relevant.includes(e.remediation_skill));
if(events.length!==1)throw Error("Recovery history minimization failed.");
const weak=relevant.map(skill=>({skill,...stats.tags[skill]})).filter(x=>(x.attempted||0)>=3&&x.correct/x.attempted<.75);
if(weak.length!==1||weak[0].skill!=="pre")throw Error("Evidence gating failed.");
console.log("PASS reviewed prerequisite filter");
console.log("PASS sequence is non-causal");
console.log("PASS unrelated learner evidence excluded");
console.log("PASS recovery history minimized");
console.log("PASS weak prerequisite requires >=3 attempts");
