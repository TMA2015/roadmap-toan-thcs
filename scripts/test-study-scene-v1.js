#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),vm=require("vm"),R=path.resolve(__dirname,"..");
const home=fs.readFileSync(path.join(R,"docs/index.md"),"utf8");
const css=fs.readFileSync(path.join(R,"docs/assets/stylesheets/site-design-system.css"),"utf8");
const js=fs.readFileSync(path.join(R,"docs/assets/javascripts/study-scene-v1.js"),"utf8");
const yml=fs.readFileSync(path.join(R,"mkdocs.yml"),"utf8");
const assert=(x,s)=>{if(!x)throw Error(s)};
assert(home.includes('data-study-scene')&&home.includes('data-study-wake')&&home.includes('data-study-gateway hidden'),"scene and dormant gateway");
assert(home.includes('href="kien-thuc/"')&&home.includes('href="roadmap/"')&&home.includes('href="kien-thuc/23-xac-suat/bai-tap/"'),"three learning gateways");
assert(home.includes('aria-label="Đánh thức bạn nhỏ')&&home.includes('role="status" aria-live="polite"'),"accessibility");
assert(home.includes("Khám phá 25 chuyên đề")&&home.includes('class="home-hero-actions"'),"quick-access fallback");
assert(js.includes('button.addEventListener("click"')&&js.includes('gateway.hidden = false')&&js.includes('scene.dataset.studyReady = "1"'),"click-to-wake and no duplicate handlers");
assert(css.includes("prefers-reduced-motion:reduce")&&css.includes(".study-scene.is-awake")&&css.includes(".study-scene-gateway[hidden]"),"reduced motion and hidden gateway");
assert(yml.includes("assets/javascripts/study-scene-v1.js"),"script config");
const classes=new Set(),events={},attributes={};
const gateway={hidden:true},title={textContent:"Bạn nhỏ đang ngủ gật"};
const button={
  setAttribute:(key,value)=>attributes[key]=value,
  addEventListener:(type,fn)=>events[type]=fn
};
const scene={
  dataset:{},
  classList:{contains:name=>classes.has(name),add:name=>classes.add(name)},
  querySelector:selector=>selector==="[data-study-wake]"?button:selector==="[data-study-gateway]"?gateway:selector==="#study-art-title"?title:null
};
const fakeDocument={readyState:"complete",querySelectorAll:selector=>selector==="[data-study-scene]"?[scene]:[]};
vm.runInNewContext(js,{document:fakeDocument});
assert(scene.dataset.studyReady==="1"&&typeof events.click==="function","handler installed");
events.click();
assert(classes.has("is-awake")&&!gateway.hidden,"click reveals classroom choices");
assert(attributes["aria-label"].includes("sẵn sàng")||attributes["aria-label"].includes("đã tỉnh"),"spoken state updated");
assert(title.textContent.includes("sẵn sàng học"),"illustration title updated");
gateway.hidden=true;events.click();assert(gateway.hidden,"repeated click is idempotent");
console.log("PASS: study wake interaction, simulated click, gateway visibility, accessible label, reduced-motion and no learner-data mutation.");
