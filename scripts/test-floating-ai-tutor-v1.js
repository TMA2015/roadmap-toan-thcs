#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const ui=read("docs/assets/javascripts/floating-ai-tutor-v1.js");
const prompt=read("docs/assets/javascripts/firebase-gemini-v1.js");
const mk=read("mkdocs.yml");
const ok=(v,m)=>{if(!v)throw Error(m)};
ok(ui.includes("isLessonPage")&&ui.includes('/roadmap-toan-thcs\\/kien-thuc'),"lesson-only route gate");
ok(ui.includes('activity: "learning"')&&ui.includes('helpMode: "TEACH_FROM_START"'),"learning context, not assessment/practice");
ok(ui.includes("selectedText(root)")&&ui.includes("sectionText(root, heading)"),"selection or active section context");
ok(ui.includes("Giải thích dễ hơn")&&ui.includes("Cho ví dụ khác")&&ui.includes("Vì sao lại đúng?")&&ui.includes("Em cần nhớ gì?"),"four reading quick actions");
ok(ui.includes('provider: "gemini"')&&ui.includes("RoadmapRichMath"),"real Gemini through existing validated tutor and math renderer");
ok(ui.includes("maxLength = 500")&&ui.includes("Không nhập thông tin cá nhân"),"bounded free question and privacy cue");
ok(prompt.includes('activity === "learning"')&&prompt.includes("NGỮ CẢNH ĐỌC BÀI HỌC"),"provider distinguishes learning from exercise");
ok(mk.includes("floating-ai-tutor-v1.js"),"global script registered");
ok(!ui.includes("innerHTML = response")&&!ui.includes("insertAdjacentHTML"),"AI response not injected as HTML");
console.log("PASS: floating lesson AI uses active/selected context, Gemini Tutor contract, safe rich math and excludes assessment routes.");
