#!/usr/bin/env node
const fs = require("fs");

const assessmentPath = process.argv[2] || "docs/assets/data/assessment/07-phan-thuc-dai-so-core-v1.json";
const lessonPath = process.argv[3] || "docs/kien-thuc/07-phan-thuc-dai-so/index.md";
const practicePath = process.argv[4] || "docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md";
const checkPath = process.argv[5] || "docs/kien-thuc/07-phan-thuc-dai-so/tu-kiem-tra.md";

const data = JSON.parse(fs.readFileSync(assessmentPath, "utf8"));
const lesson = fs.readFileSync(lessonPath, "utf8");
const practice = fs.readFileSync(practicePath, "utf8");
const check = fs.readFileSync(checkPath, "utf8");
const errors = [];

if (data.schema !== "roadmap-readiness-assessment-v1") errors.push("assessment schema mismatch");
if (data.layer !== "KNTT-Core") errors.push("CĐ07 readiness must be KNTT-Core");
if (data.policy?.feedback !== "after_submit") errors.push("assessment feedback must be after_submit");
if (data.policy?.hints !== false || data.policy?.tutor !== false) errors.push("assessment must disable hints/Tutor");
if (data.policy?.hard_gate !== false || data.readiness?.hard_gate !== false) errors.push("readiness must be soft, never hard gate");
if (!Array.isArray(data.items) || data.items.length !== 10) errors.push("CĐ07 v1 readiness must contain 10 Core items");

const ids = new Set();
for (const item of data.items || []) {
  if (!item.id || ids.has(item.id)) errors.push(`duplicate/missing item id: ${item.id}`);
  ids.add(item.id);
  if (item.type !== "mcq") errors.push(`${item.id}: v1 supports mcq only`);
  if (!item.skill) errors.push(`${item.id}: missing assessed skill`);
  if (!Array.isArray(item.options) || item.options.length !== 4) errors.push(`${item.id}: expected 4 options`);
  if (!Number.isInteger(item.answer) || item.answer < 0 || item.answer >= (item.options || []).length) errors.push(`${item.id}: invalid answer index`);
  if (!data.skill_labels?.[item.skill]) errors.push(`${item.id}: missing skill label for ${item.skill}`);
  if ((item.supporting_skills || []).includes(item.skill)) errors.push(`${item.id}: assessed skill duplicated in supporting_skills`);
}
if (lesson.includes("### Mini quiz")) errors.push("lesson still contains duplicate static mini quiz");
if (!lesson.includes("Mở Practice Room")) errors.push("lesson missing Practice Room gateway");
if (!lesson.includes("Core Readiness Check")) errors.push("lesson missing Readiness gateway");
if (!practice.includes("Luyện tự luận & trình bày")) errors.push("Practice Room missing written-practice mode");
if (!practice.includes('??? example "Xem lời giải"')) errors.push("Practice Room missing collapsed solutions");
if (!practice.includes("Entrance10 / Extension")) errors.push("Practice Room missing Core/Extension boundary");
if (!check.includes("data-readiness-check-v1")) errors.push("self-check page missing readiness marker");
if (check.includes("# Đáp án và hướng dẫn chấm")) errors.push("self-check still exposes static answer key before submit");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`PASS: Golden Template CĐ07 · ${data.items.length} Core readiness items · Learn/Practice/Assess boundaries valid`);
