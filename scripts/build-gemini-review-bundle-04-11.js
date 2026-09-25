#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUTPUT = path.resolve(process.argv[2] || path.join(ROOT, "gemini-review-04-11.json"));

const topics = [
  ["04","04-bieu-thuc-dai-so"],
  ["05","05-7-hang-dang-thuc"],
  ["06","06-phan-tich-da-thuc"],
  ["07","07-phan-thuc-dai-so"],
  ["08","08-phuong-trinh-bat-phuong-trinh"],
  ["09","09-he-phuong-trinh"],
  ["10","10-ham-so-do-thi"],
  ["11","11-can-thuc"]
];

const read = rel => {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) return { path: rel, status: "MISSING" };
  return { path: rel, status: "PRESENT", content: fs.readFileSync(abs, "utf8") };
};

const bundle = {
  schema: "roadmap-external-review-bundle-v1",
  packet_id: "ALG-REVIEW-04-11-GEMINI-001",
  generated_on: new Date().toISOString(),
  purpose: "Single-file pedagogical/math/web-structure review bundle for CĐ04–CĐ11.",
  source_policy: {
    authority: "Repository files embedded in this bundle are authoritative for this review.",
    no_invented_ids: true,
    exact_quote_required: true,
    rule: "Do not report a correction unless the referenced item ID exists in the embedded source and prompt_quote is copied exactly from that current item. For lesson prose without item IDs, cite source_path + heading + exact quote.",
    boundaries: "KNTT Core / Entrance10 / Specialized-Challenge layering and frozen Golden Template are not open for redesign. Optional suggestions outside scope must be labeled OPTIONAL."
  },
  review_focus: [
    "mathematical correctness and domain conditions",
    "solution logic and extraneous-root checks",
    "distractor uniqueness/plausibility and equivalent-answer ambiguity",
    "age-appropriate pedagogy and misconception coverage",
    "LaTeX/Markdown safety for MkDocs Material",
    "consistency between Learning Cards, micro-practice, written practice and Core Readiness"
  ],
  required_result_format: {
    packet_id: "ALG-REVIEW-04-11-GEMINI-001-RESULT",
    verdict: "PASS | REVISIONS_REQUIRED",
    corrections: [{
      source_path: "exact embedded path",
      item_id: "exact current ID, or null for prose",
      heading: "required for prose issues",
      prompt_quote: "exact current text",
      type: "MATH_ERROR | SOLUTION_LOGIC | DISTRACTOR_AMBIGUITY | PEDAGOGY | LATEX_WEB",
      issue: "specific verified problem",
      correction: "minimal corrected content"
    }],
    optional_suggestions: []
  },
  topics: topics.map(([num,slug]) => ({
    number: num,
    slug,
    sources: [
      read(`docs/assets/data/curriculum/topic${num}-learning-workspace.json`),
      read(`docs/assets/data/practice/${slug}-micro-v1.json`),
      read(`docs/assets/data/assessment/${slug}-core-v1.json`),
      read(`docs/kien-thuc/${slug}/bai-tap.md`),
      read(`docs/kien-thuc/${slug}/index.md`),
      read(`docs/assets/data/practice/${slug}-v1.manifest.json`)
    ]
  }))
};

const missing = bundle.topics.flatMap(t => t.sources.filter(s => s.status !== "PRESENT").map(s => s.path));
if (missing.length) {
  console.error("Cannot build complete review bundle. Missing:");
  missing.forEach(x => console.error(" - " + x));
  process.exit(1);
}

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, JSON.stringify(bundle, null, 2) + "\n", "utf8");
console.log(`Wrote ${OUTPUT}`);
console.log(`Topics: ${bundle.topics.length}; embedded sources: ${bundle.topics.reduce((n,t)=>n+t.sources.length,0)}`);
console.log("Upload this single JSON file to Gemini and ask it to follow required_result_format exactly.");
