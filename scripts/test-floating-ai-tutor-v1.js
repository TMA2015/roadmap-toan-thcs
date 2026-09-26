#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const ui=read("docs/assets/javascripts/floating-ai-tutor-v1.js");
const prompt=read("docs/assets/javascripts/firebase-gemini-v1.js");
const mk=read("mkdocs.yml");
const ok=(v,m)=>{if(!v)throw Error(m)};
ok(ui.includes("isReadingPage")&&ui.includes("(?:roadmap-toan-thcs\\/)?kien-thuc"),"explicit teaching-route gate");
const routeSource=ui.match(/const isReadingPage = \(\) => \{[\s\S]*?\n  \};/)?.[0];
ok(routeSource,"route function remains independently testable");
const mayMount = pathname => require("vm").runInNewContext(routeSource+"\nisReadingPage();",{location:{pathname}});
for(const pathname of [
  "/roadmap-toan-thcs/kien-thuc/04-bieu-thuc-dai-so/",
  "/roadmap-toan-thcs/kien-thuc/25-tong-hop-on-thi-10/",
  "/roadmap-toan-thcs/kien-thuc/25-tong-hop-on-thi-10/bai-toan-kinh-dien/",
  "/roadmap-toan-thcs/kien-thuc/25-tong-hop-on-thi-10/kho-bai-mo-neo/",
  "/roadmap-toan-thcs/kien-thuc/25-tong-hop-on-thi-10/anchor-25-004/",
  "/kien-thuc/25-tong-hop-on-thi-10/anchor-25-011/index.html"
])ok(mayMount(pathname),"reading route needs contextual Tutor: "+pathname);
for(const pathname of [
  "/roadmap-toan-thcs/kien-thuc/04-bieu-thuc-dai-so/bai-tap/",
  "/roadmap-toan-thcs/kien-thuc/04-bieu-thuc-dai-so/tu-kiem-tra/",
  "/roadmap-toan-thcs/kien-thuc/25-tong-hop-on-thi-10/tu-kiem-tra-dap-an/",
  "/roadmap-toan-thcs/kien-thuc/25-tong-hop-on-thi-10/de-luyen-01/",
  "/roadmap-toan-thcs/kien-thuc/25-tong-hop-on-thi-10/de-luyen-01-dap-an/",
  "/roadmap-toan-thcs/kien-thuc/25-tong-hop-on-thi-10/tu-danh-gia-ky-nang-thi/",
  "/roadmap-toan-thcs/kien-thuc/25-tong-hop-on-thi-10/bai-tap/",
  "/roadmap-toan-thcs/ai/ai-tutor-core-contract/"
])ok(!mayMount(pathname),"assessed/nonreading route must not mount Tutor: "+pathname);
ok(ui.includes('activity: "learning"')&&ui.includes('helpMode: "TEACH_FROM_START"'),"learning context, not assessment/practice");
ok(ui.includes("selectedText(root)")&&ui.includes("sectionText(root, heading)"),"selection or active section context");
ok(ui.includes("tutor-girl-awake.webp")&&ui.includes("floating-ai-head-face"),"approved avatar in launcher and panel");
ok(ui.includes("Giải thích dễ hơn")&&ui.includes("Cho ví dụ khác")&&ui.includes("Vì sao lại đúng?")&&ui.includes("Em cần nhớ gì?"),"four reading quick actions");
ok(ui.includes('provider: "gemini"')&&ui.includes("RoadmapRichMath"),"real Gemini through existing validated tutor and math renderer");
ok(ui.includes("maxLength = 500")&&ui.includes("Không nhập thông tin cá nhân"),"bounded free question and privacy cue");
ok(prompt.includes('activity === "learning"')&&prompt.includes("NGỮ CẢNH ĐỌC BÀI HỌC"),"provider distinguishes learning from exercise");
ok(mk.includes("floating-ai-tutor-v1.js"),"global script registered");
ok(!ui.includes("innerHTML = response")&&!ui.includes("insertAdjacentHTML"),"AI response not injected as HTML");
console.log("PASS: floating lesson/anchor AI respects route matrix, active/selected context, Gemini Tutor contract, safe rich math and excludes assessments.");
