#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),assert=require("assert");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const anchors=JSON.parse(read("docs/assets/data/anchors/anchor-catalog-v1.json"));
const js=read("docs/assets/javascripts/anchor-library-v1.js");
const related=read("docs/assets/javascripts/anchor-topic-related-v1.js");
const loader=read("docs/assets/javascripts/route-module-loader-v1.js");
const intro=read("docs/kien-thuc/25-tong-hop-on-thi-10/kho-bai-mo-neo.md");
const standard=read("docs/collaboration/math-learner-ux-evidence-standard-r1-20261014.md");
const canonical=read("docs/kien-thuc/25-tong-hop-on-thi-10/bai-toan-kinh-dien.md");

assert(anchors.anchors.length===11 && anchors.representative_ids.length===10);
assert(anchors.anchors.every(a=>Array.isArray(a.topic_ids)&&a.topic_ids.length), "A25 source relations");
assert(anchors.anchors.every(a=>a.grade_overlay?.includes(9)), "A25 exam overlay (not earlier-grade placement)");
assert(anchors.anchors.some(a=>a.topic_ids.includes("CT03")),"CT03 prerequisite connection");
assert(anchors.anchors.some(a=>a.topic_ids.includes("CT17")),"CT17 knowledge connection");
assert(js.includes("relatedTopic")&&js.includes("relatedTopics")&&js.includes("Ôn thi vào lớp 10"),"anchor catalog friendly discoverability");
assert(js.includes("a.deep_dive_uri||a.source_uri"),"stable direct anchor source link");
assert(related.includes("Array.isArray(item.topic_ids)")&&related.includes("item.topic_ids.includes(topicId)"),"topic links must derive from canonical review data");
assert(related.includes("không phải bài bắt buộc") && related.includes("data-a25-topic-related"),"not conflated with Core and idempotent");
assert(related.includes("publication_status === \"published\""),"do not surface unpublished content");
assert(loader.includes('load("anchor-topic-related-v1.js")'),"lazy load on topic lesson routes");
assert(intro.includes("Dành cho người biên soạn (mở khi cần)")&&!intro.includes('<div class="anchor-library-intro"'),"no literal Markdown asterisks; admin text hidden");
assert(canonical.includes('id="anchor-25-001"')&&canonical.includes('id="anchor-25-010"'),"classic selection uses stable deep link IDs");
assert(standard.includes("UX_OPTIONAL_FEEDBACK") && standard.includes("Only T (technical simulation) and H (real learner observation)"),"NotebookLM UX suggestions not required");
for (const a of anchors.anchors) {
  assert(a.publication_status==="published","catalog publication policy: "+a.id);
  assert(a.source_uri||a.deep_dive_uri,"canonical A25 target missing "+a.id);
}
console.log("PASS A25 discovery: canonical 11/10 selection, student labels, reciprocal topic pointers, safe optional UX advice.");
console.log("BOUNDARY: learning-grade prerequisite mapping is not inferred; genuine student comprehension remains OPEN.");
