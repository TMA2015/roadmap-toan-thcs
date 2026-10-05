#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),cp=require("child_process"),r=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(r,p),"utf8");
const home=read("docs/index.md"),library=read("docs/kien-thuc/index.md"),css=read("docs/assets/stylesheets/site-design-system.css"),nav=read("docs/assets/javascripts/sticky-nav-v1.js"),slider=read("docs/assets/javascripts/home-orientation-slider-v1.js"),yaml=read("mkdocs.yml");
const ok=(v,m)=>{if(!v)throw Error(m)}; 
// The learning-guide gallery is homepage-only and must not alter learner evidence or route semantics.
// Mobile gallery image loading is browser-gated in capture-ui-previews.py.
ok((home.match(/<article class="home-slide [^"]+" data-home-slide/g)||[]).length===4,"four homepage orientation slides");
ok((home.match(/class="home-quick-path /g)||[]).length===4,"four compact homepage entry points");
ok(!home.includes("home-reveal-card"),"legacy large collapsible home cards removed");
ok(home.includes("Hai đường đi · Một hệ kiến thức")&&home.includes("Core → Luyện tập → Tự kiểm tra"),"learner-facing orientation copy");
ok(slider.includes("data-home-slider-prev")&&slider.includes("touchstart")&&slider.includes("ArrowRight"),"manual slider arrows, swipe and keyboard support");
ok(home.includes('id="hieu-cach-hoc"'),"learning-guide section is present below homepage orientation");
ok((home.match(/data-home-guide-open/g)||[]).length===4,"four approved learning-guide infographics");
const guideAssets=[
  "docs/assets/images/learning-guide/01-tree-math-roadmap.webp",
  "docs/assets/images/learning-guide/02-kite-skill-example.webp",
  "docs/assets/images/learning-guide/03-how-to-learn-system.webp",
  "docs/assets/images/learning-guide/04-fraction-lesson-connection.webp"
];
guideAssets.forEach(p=>ok(fs.existsSync(path.join(r,p))&&fs.statSync(path.join(r,p)).size>10000,`learning-guide asset present: ${p}`));
ok(slider.includes("setupGuideGallery")&&slider.includes("data-home-guide-dialog")&&slider.includes('event.key === "Escape"'),"learning-guide modal open/close keyboard behavior");
ok(css.includes(".home-guide-grid")&&css.includes(".home-guide-dialog-panel"),"learning-guide gallery styles");
cp.execFileSync(process.execPath,["--check",path.join(r,"docs/assets/javascripts/home-orientation-slider-v1.js")],{stdio:"pipe"});
ok((library.match(/class="library-cluster"/g)||[]).length===4,"four library clusters");
ok((library.match(/class="library-topic-tile"/g)||[]).length===25,"all 25 topics kept");
ok(!/class="library-topic-tile" href="[^"]+\\.md"/.test(library),"HTML tile links point to built routes, never source Markdown");
ok(library.includes('href="22-dai-luong-dac-trung/"')&&library.includes('href="25-tong-hop-on-thi-10/"'),"original destinations intact");
ok(nav.includes("window.addEventListener(\"scroll\"")&&nav.includes("md-tabs__list")&&nav.includes("aria-label"),"sticky nav and semantics");
ok(nav.includes("addTopicLauncher")&&nav.includes('header.querySelector("[data-roadmap-topic-launcher]")'),"one header launcher, idempotent on navigation");
ok(nav.includes('title.insertAdjacentElement("afterend", button)'),"launcher sits in header, not drawer");
ok(!nav.includes("addMobileShortcuts")&&!nav.includes("wrap.insertBefore")&&!nav.includes("md-nav__list"),"never mutate native mobile navigation tree");
ok((nav.match(/\["\d{2}-[a-z0-9-]+","[0-9]{2}\. /g)||[]).length===25,"25 canonical topic routes");
for(const slug of ["01-ban-do-chuong-trinh","05-7-hang-dang-thuc","23-xac-suat","25-tong-hop-on-thi-10"])
  ok(nav.includes('["'+slug+'"')&&yaml.includes("kien-thuc/"+slug+"/index.md"),"canonical topic route: "+slug);
ok(nav.includes("dialog.showModal()")&&nav.includes("scrollTop = 0"),"accessible chooser starts at top");
ok(nav.includes("main.className=\"roadmap-main-quick\"")&&nav.includes("mainDestinations"),"seven destinations in the independent topic chooser");
ok(nav.includes('["Thư viện bài tập", "luyen-tap/", "✎"]')&&yaml.includes("Thư viện bài tập: luyen-tap/index.md"),"written exercise library is available in quick shortcuts");
ok(nav.includes('dialog.append(heading,main,hint,list)')&&nav.includes('count.textContent = "7 + 25"'),"main groups and topics share one compact header launcher");
ok(css.includes(".roadmap-topic-launcher")&&css.includes(".roadmap-topic-dialog__list"),"independent launcher/modal styles");
ok(css.includes(".roadmap-main-quick__links"),"responsive seven-group grid in the modal");
ok(!css.includes(".roadmap-mobile-shortcuts")&&!css.includes(".md-sidebar--primary > .md-sidebar__scrollwrap"),"remove all injected/sticky drawer styles");
ok(css.includes("overflow:hidden")&&css.includes("flex:1 1 auto"),"modal header does not disappear while topic list scrolls");
ok(css.includes(".roadmap-nav-dock.is-visible")&&css.includes(".library-topic-grid"),"style definitions");
ok(yaml.includes("sticky-nav-v1.js"),"sticky navigation loaded on site");
ok(yaml.includes("home-orientation-slider-v1.js"),"homepage orientation slider loaded on site");
console.log("PASS: persistent desktop nav, four orientation slides, four compact entry points, four library clusters, all 25 links.");
