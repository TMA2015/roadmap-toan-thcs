#!/usr/bin/env node
"use strict";
const fs=require("fs");const path=require("path");
const ROOT=path.resolve(__dirname,"..");const data=JSON.parse(fs.readFileSync(path.join(ROOT,"docs/assets/geometry/18/pilot-coordinates-v1.json"),"utf8"));const errors=[];
const near=(a,b)=>Math.abs(a-b)<1e-9, dot=(u,v)=>u[0]*v[0]+u[1]*v[1],vec=(p,q)=>[q[0]-p[0],q[1]-p[1]],dist2=(p,q)=>dot(vec(p,q),vec(p,q));
const assert=(x,msg)=>{if(!x)errors.push(msg)};
assert(data.figures.length===4,"expected exactly four pilot figures");
for(const f of data.figures){const P=f.points;const svg=fs.readFileSync(path.join(ROOT,"docs/assets/geometry/18/"+f.id+".svg"),"utf8");
 for(const str of ['viewBox="0 0 640 420"','role="img"','<title id="title">','<desc id="desc">'])assert(svg.includes(str),f.id+": missing SVG accessibility/responsive contract");
 assert(!/<image\b|<script\b|\bhref\s*=|\bonload\s*=/i.test(svg),f.id+": external image/script/reference");
 assert(!/width="100%"|height="100%"/.test(svg),f.id+": intrinsic full-size dimensions");
 if(P.H){assert(near(dot(vec(P.A,P.B),vec(P.A,P.C)),0),f.id+": not right at A");assert(near(dot(vec(P.H,P.A),vec(P.B,P.C)),0),f.id+": altitude not perpendicular");
 assert(near(P.H[1],P.B[1])&&P.H[0]>P.B[0]&&P.H[0]<P.C[0],f.id+": H not between B and C");
 assert(near(dist2(P.A,P.H),Math.sqrt(dist2(P.B,P.H))*Math.sqrt(dist2(P.H,P.C))),f.id+": h² != pq");
 assert(svg.includes('M235 120 L247 129 L256 117')&&svg.includes('M244 282 H262 V300'),f.id+": missing geometric right-angle marks");
 }else if(P.O){assert(near(P.O[1],P.F[1])&&near(P.F[0],P.T[0]),f.id+": elevation baseline/vertical invalid");assert(svg.includes("tan α = h / d"),f.id+": formula label missing")}else{assert(near(dot(vec(P.A,P.B),vec(P.A,P.C)),0),f.id+": not right at A");assert(dist2(P.B,P.C)>dist2(P.A,P.C)&&dist2(P.B,P.C)>dist2(P.A,P.B),f.id+": BC not hypotenuse");assert(svg.includes("đối")&&svg.includes("kề")&&svg.includes("huyền"),f.id+": ratio labels missing")}
}
const lesson=fs.readFileSync(path.join(ROOT,"docs/kien-thuc/18-he-thuc-luong/index.md"),"utf8");
for(const f of data.figures)assert(lesson.includes(f.id+".svg"),f.id+": not linked in lesson");
for(const name of ["18-goc-nang-goc-ha-v1.svg","18-goc-ha-v1.svg"])assert(lesson.includes(name),name+": missing lesson reference");
assert(!lesson.includes('18-goc-nang-goc-ha.svg'),"legacy combined graphic still referenced");
for(const name of ["18-goc-nang-goc-ha-v1.svg","18-goc-ha-v1.svg"]){
 const s=fs.readFileSync(path.join(ROOT,"docs/assets/geometry/18",name),"utf8");
 for(const required of ['viewBox="0 0 640 420"','role="img"','<title id="title">','<desc id="desc">','Phương ngang'])assert(s.includes(required),name+": missing SVG contract");
 assert(!/<image\\b|<script\\b|\\bhref\\s*=|\\bonload\\s*=/i.test(s),name+": external reference or script");
 assert(!/height="100%"|width="100%"/.test(s),name+": forced dimensions");
 assert(s.includes("arc-down"),name+": missing depression arc");
}
const geoDep={O:[110,122],P:[492,304],H:[492,122]};
assert(near(geoDep.O[1],geoDep.H[1])&&near(geoDep.H[0],geoDep.P[0])&&geoDep.P[1]>geoDep.O[1],"depression baseline or below-horizontal invariant failed");
const geoBoth={O:[108,210],A:[475,80],B:[475,345]};
assert(geoBoth.A[1]<geoBoth.O[1]&&geoBoth.B[1]>geoBoth.O[1],"combined elevation/depression invariant failed");
if(errors.length){console.error(errors.join("\\n"));process.exit(1)}console.log("PASS: CĐ18 four pilot SVG coordinate/semantic and source-link checks.");
