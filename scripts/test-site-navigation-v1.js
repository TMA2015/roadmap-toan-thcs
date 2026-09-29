#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),r=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(r,p),"utf8");
const home=read("docs/index.md"),library=read("docs/kien-thuc/index.md"),css=read("docs/assets/stylesheets/site-design-system.css"),nav=read("docs/assets/javascripts/sticky-nav-v1.js"),yaml=read("mkdocs.yml");
const ok=(v,m)=>{if(!v)throw Error(m)};
ok((home.match(/class="home-path-card [^"]+ home-reveal-card"/g)||[]).length===4,"four collapsible home cards");
ok((library.match(/class="library-cluster"/g)||[]).length===4,"four library clusters");
ok((library.match(/class="library-topic-tile"/g)||[]).length===25,"all 25 topics kept");
ok(!/class="library-topic-tile" href="[^"]+\\.md"/.test(library),"HTML tile links point to built routes, never source Markdown");
ok(library.includes('href="22-dai-luong-dac-trung/"')&&library.includes('href="25-tong-hop-on-thi-10/"'),"original destinations intact");
ok(nav.includes("window.addEventListener(\"scroll\"")&&nav.includes("md-tabs__list")&&nav.includes("aria-label"),"sticky nav and semantics");
ok(nav.includes("addMobileShortcuts")&&nav.includes("wrap.insertBefore(host, wrap.firstChild)"),"one drawer launcher outside nested Material lists");
ok(!nav.includes("list.insertBefore(item, list.firstChild)"),"never mutate Material nested nav");
ok((nav.match(/\["\d{2}-[a-z0-9-]+","[0-9]{2}\. /g)||[]).length===25,"25 canonical topic routes");
for(const name of ["Trang chủ","Học theo lớp","Roadmap","AI Tutor","Hướng dẫn","Kiến thức"])
  ok(nav.includes('["'+name+'"'),"missing compact destination: "+name);
ok(nav.includes("source?.href || sitePrefix() + fallback"),"reuse built menu URLs with fallback");
for(const slug of ["01-ban-do-chuong-trinh","05-7-hang-dang-thuc","23-xac-suat","25-tong-hop-on-thi-10"])
  ok(nav.includes('["'+slug+'"')&&yaml.includes("kien-thuc/"+slug+"/index.md"),"topic route matches MkDocs nav: "+slug);
ok(css.includes("overscroll-behavior-y:contain")&&css.includes(".roadmap-topic-dialog__list"),"iOS scroll containment and topic chooser");
ok(nav.includes("dialog.showModal()")&&nav.includes('aria-current", "page"'),"accessible active topic selector");
ok(css.includes("@media(max-width:76.24rem)")&&css.includes(".roadmap-mobile-shortcuts__jump"),"mobile-only styles");
ok(css.includes(".roadmap-nav-dock.is-visible")&&css.includes(".library-topic-grid"),"style definitions");
ok(yaml.includes("sticky-nav-v1.js"),"loaded on site");
console.log("PASS: persistent desktop nav, four home cards, four library clusters, all 25 links.");
