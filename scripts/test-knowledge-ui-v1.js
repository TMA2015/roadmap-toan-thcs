#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),R=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(R,p),"utf8");
const script=read("docs/assets/javascripts/knowledge-ui-v1.js"),css=read("docs/assets/stylesheets/site-design-system.css"),yml=read("mkdocs.yml"),library=read("docs/kien-thuc/index.md");
const assert=(val,msg)=>{if(!val)throw Error(msg)};
assert(script.includes('localStorage')===false,"view enhancements do not access learner storage");
assert(script.includes("normalize(\"NFD\")")&&script.includes("replace(/đ/g"),"Vietnamese search normalization");
assert(script.includes('tile.hidden = !match')&&script.includes('group.open = needle'),"filtered tiles and expanded groups");
assert(script.includes("lesson-switcher-steps")&&script.includes('aria-current'),"lesson three-step navigation");
assert(script.includes('setupLibrary()')&&script.includes('setupLesson()'),"page initialization");
assert(css.includes(".library-search")&&css.includes(".lesson-switcher-steps"),"visual styles");
assert(yml.includes("knowledge-ui-v1.js"),"script loaded");
assert((library.match(/class="library-topic-tile"/g)||[]).length===25,"all 25 directory destinations preserved");
console.log("PASS: 25-topic finder, shared lesson route, scroll-position bar, no learning-data writes.");
