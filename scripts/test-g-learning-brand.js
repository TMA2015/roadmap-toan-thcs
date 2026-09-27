"use strict";
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");const read=p=>fs.readFileSync(path.join(root,p),"utf8");
for(const file of ["docs/assets/branding/g-learning-mark.svg","docs/assets/branding/g-learning-lockup.svg","docs/assets/branding/math-app-icon.svg"]){
 const v=read(file);assert.match(v,/<svg[\s>]/);assert.match(v,/<path\s/);assert.ok(!/<script\b|<image\b|https?:\/\//i.test(v.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/,"")),file+" unsafe SVG");
}
const cfg=read("mkdocs.yml");assert.match(cfg,/^site_name: Self-Learning Math$/m);assert.ok(cfg.includes("logo: assets/branding/math-app-icon.svg"));assert.ok(cfg.includes("favicon: assets/branding/math-app-icon.svg"));assert.ok(cfg.includes("copyright:")&&cfg.includes("by G Learning · Learn · Grow · Go"));
assert.ok(!cfg.includes("logo: material/school"));
console.log("PASS G Learning Math icon, favicon, footer credit and unchanged product name.");
