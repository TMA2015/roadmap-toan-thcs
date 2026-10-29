#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const portal=read("docs/index.md"),thcs=read("docs/thcs/index.md"),legacy=read("docs/thpt-preview/index.md");
assert(portal.includes("data-math-program-selector")&&portal.includes('href="thcs/"')&&portal.includes('href="thpt-preview/home/"'));
assert(!portal.includes("data-home-portal"));
assert(thcs.includes("data-home-portal")&&thcs.includes("Hai đường đi · Một hệ kiến thức"));
assert.equal((thcs.match(/<article class="home-slide [^"]+" data-home-slide/g)||[]).length,4);
assert.equal((thcs.match(/class="home-quick-path /g)||[]).length,4);
assert.equal((thcs.match(/data-home-guide-open/g)||[]).length,4);
const refs=[...thcs.matchAll(/\b(?:src|href|data-awake-src|data-guide-src)=["']([^"']+)["']/g)].map(x=>x[1]);
assert(refs.length>20);
for(const url of refs){
 if(/^(?:https?:|mailto:|#|data:)/.test(url))continue;
 assert(url.startsWith("../"),"THCS relative link not rebased: "+url);
 const target=path.resolve(root,"docs/thcs",url.split("?")[0]);
 assert(target.startsWith(path.resolve(root,"docs")+path.sep)&&(fs.existsSync(target)||fs.existsSync(target.replace(/\/$/,"")+".md")||fs.existsSync(path.join(target,"index.md"))),"Missing THCS target: "+url);
}
assert(read("mkdocs.yml").includes("  - Trang chủ: index.md")&&!read("mkdocs.yml").includes("  - Trang chủ THCS: thcs/index.md"),"Golden six-lane learner menu must be preserved");
assert(legacy.includes('href="../thcs/"'));
assert(read("docs/assets/javascripts/sticky-nav-v1.js").includes('["Trang chủ THCS", "thcs/", "⌂"]'));
assert(read("docs/assets/javascripts/route-module-loader-v2.js").includes("const thcsHome"));
for(const target of ["docs/kien-thuc/index.md","docs/hoc-theo-lop/index.md","docs/tien-do-hoc-tap/index.md"])
 assert(fs.existsSync(path.join(root,target)),"Protected THCS route missing: "+target);
console.log("PASS root gateway, retained original THCS Golden home, relative paths and 25-topic route preservation.");
