#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),vm=require("vm"),root=path.resolve(__dirname,"..");
const load=p=>fs.readFileSync(path.join(root,p),"utf8");
const html=load("docs/index.md"),css=load("docs/assets/stylesheets/site-design-system.css"),js=load("docs/assets/javascripts/study-scene-v1.js"),config=load("mkdocs.yml");
const ok=(x,msg)=>{if(!x)throw Error(msg)};
for(const mark of ['data-home-mode="standard"','data-home-mode="playful"','data-home-dialog hidden','data-home-select="standard"','data-home-select="playful"','data-study-wake','data-study-gateway hidden'])ok(html.includes(mark),mark);
ok(html.includes('class="home-hero-art"')&&html.includes('class="study-art-image"'),"both illustrations");
ok(html.includes('href="kien-thuc/"')&&html.includes('href="roadmap/"'),"links");
ok(css.includes("prefers-reduced-motion:reduce")&&css.includes(".home-style-card-playful"),"accessibility and style");
ok(config.includes("study-scene-v1.js"),"loaded script");
ok(js.includes("roadmap.home.style.v1")&&js.includes("localStorage.setItem")&&js.includes('gateway.hidden = false'),"preference and wake interaction");
for(const name of ["study-kid-sleeping.webp","study-kid-awake.webp","tutor-girl-awake.webp"]){
  const image=path.join(root,"docs/assets/images",name),data=fs.readFileSync(image);
  ok(data.length>5000&&data.toString("ascii",0,4)==="RIFF"&&data.toString("ascii",8,12)==="WEBP",name+" is an optimized bundled WebP");
}
ok(html.includes('data-awake-src="assets/images/study-kid-awake.webp"'),"explicit awake artwork source");
ok(html.includes('class="study-art-room"')&&html.includes('study-room-pastel.svg'),"room illustration behind both mascot states");
ok(css.includes(".study-art-room")&&css.includes(".study-art-wakeup{position:absolute;z-index:3;left:8%"),"room and left-side greeting CSS");
const room=load("docs/assets/images/study-room-pastel.svg");
ok(room.includes("<svg")&&room.includes("viewBox=\"0 0 1040 552\"")&&room.includes("<title")&&room.includes("<desc"),"accessible self-contained room SVG");
const classes=new Set(),events={},attrs={};const gateway={hidden:true};
const wake={addEventListener:(t,fn)=>events.wake=fn,setAttribute:(k,v)=>attrs[k]=v};
const illustration={src:"assets/images/study-kid-sleeping.webp",dataset:{awakeSrc:"assets/images/study-kid-awake.webp"},alt:"sleeping"};
const scene={hidden:true,classList:{contains:v=>classes.has(v),add:v=>classes.add(v)},querySelector:s=>s==="[data-study-wake]"?wake:s==="[data-study-gateway]"?gateway:s===".study-art-image"?illustration:null};
const standard={hidden:false};
const choices={standard:{dataset:{homeSelect:"standard"},setAttribute:(k,v)=>attrs.standard=v,addEventListener:(t,fn)=>events.standard=fn},playful:{dataset:{homeSelect:"playful"},setAttribute:(k,v)=>attrs.playful=v,addEventListener:(t,fn)=>events.playful=fn}};
const panel={focus:()=>{}}, dialog={hidden:true,querySelector:s=>s===".home-style-panel"?panel:null,addEventListener:(t,fn)=>events[t]=fn,querySelectorAll:()=>[]};
const bar={appendChild:()=>{}}, doc={readyState:"complete",querySelectorAll:()=>[portal],createElement:()=>({addEventListener:()=>{}})};
const portal={dataset:{},querySelector:s=>s==="[data-home-dialog]"?dialog:s==="[data-study-scene]"?scene:s==='[data-home-mode="standard"]'?standard:null,querySelectorAll:s=>s==="[data-home-select]"?[choices.standard,choices.playful]:s==="[data-home-dismiss]"?[]:s==="[data-home-style-bar]"?[bar]:[],};
vm.runInNewContext(js,{document:doc,localStorage:{getItem:()=>null,setItem:(k,v)=>attrs.saved=v}});
ok(!dialog.hidden&&standard.hidden===false&&scene.hidden===true,"first visit chooser and stable default");
events.playful();ok(dialog.hidden&&scene.hidden===false&&standard.hidden&&attrs.saved==="playful","switch and save");
events.wake();ok(!gateway.hidden&&classes.has("is-awake"),"wake reveals navigation");
ok(illustration.src==="assets/images/study-kid-awake.webp"&&illustration.alt.includes("mở mắt"),"waking swaps to eyes-open happy illustration");
events.standard();ok(scene.hidden&& !standard.hidden&&attrs.saved==="standard","switch back preserves standard portal");
console.log("PASS: two styles, first visit chooser, state persistence, visual asset, wake links, safe fallback.");
