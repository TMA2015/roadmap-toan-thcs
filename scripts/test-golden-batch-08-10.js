#!/usr/bin/env node
const fs = require("fs");

const topics = [
  {
    slug: "08-phuong-trinh-bat-phuong-trinh",
    workspace: "docs/assets/data/curriculum/topic08-learning-workspace.json",
    micro: "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-micro-v1.json",
    assessment: "docs/assets/data/assessment/08-phuong-trinh-bat-phuong-trinh-core-v1.json",
    practice: "docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/bai-tap.md",
    lesson: "docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/index.md",
    selfcheck: "docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/tu-kiem-tra.md",
    excluded: new Set(["tham-so-co-ban","giao-tap-nghiem","lap-bat-phuong-trinh"])
  },
  {
    slug: "09-he-phuong-trinh",
    workspace: "docs/assets/data/curriculum/topic09-learning-workspace.json",
    micro: "docs/assets/data/practice/09-he-phuong-trinh-micro-v1.json",
    assessment: "docs/assets/data/assessment/09-he-phuong-trinh-core-v1.json",
    practice: "docs/kien-thuc/09-he-phuong-trinh/bai-tap.md",
    lesson: "docs/kien-thuc/09-he-phuong-trinh/index.md",
    selfcheck: "docs/kien-thuc/09-he-phuong-trinh/tu-kiem-tra.md",
    excluded: new Set(["tham-so-he"])
  },
  {
    slug: "10-ham-so-do-thi",
    workspace: "docs/assets/data/curriculum/topic10-learning-workspace.json",
    micro: "docs/assets/data/practice/10-ham-so-do-thi-micro-v1.json",
    assessment: "docs/assets/data/assessment/10-ham-so-do-thi-core-v1.json",
    practice: "docs/kien-thuc/10-ham-so-do-thi/bai-tap.md",
    lesson: "docs/kien-thuc/10-ham-so-do-thi/index.md",
    selfcheck: "docs/kien-thuc/10-ham-so-do-thi/tu-kiem-tra.md",
    excluded: new Set(["vi-tri-hai-duong-thang","giao-diem-do-thi","lien-he-he-phuong-trinh"])
  }
];

const errors = [];

const rejectMarkdownMath = (text, path) => {
  for (let i = 0; i < text.length; i += 1) {
    const code = text.charCodeAt(i);
    if (code < 32 && ![9,10,13].includes(code)) {
      errors.push(`${path}: unexpected control character U+${code.toString(16).padStart(4,"0")}`);
    }
  }
  const suspicious = /(^|[^\\A-Za-z])(Rightarrow|cdot|qquad|text\{|frac(?=[{0-9A-Za-z(])|begin\{cases\}|end\{cases\})/g;
  let match;
  while ((match = suspicious.exec(text))) {
    errors.push(`${path}: suspicious unescaped TeX token '${match[2]}' near offset ${match.index}`);
  }
};

const rejectControlChars = (value, path = "root") => {
  if (typeof value === "string") {
    for (const ch of value) {
      const code = ch.charCodeAt(0);
      if (code < 32 && ![9,10,13].includes(code)) {
        errors.push(`${path}: unexpected control character U+${code.toString(16).padStart(4,"0")}`);
      }
    }
    return;
  }
  if (Array.isArray(value)) return value.forEach((item, i) => rejectControlChars(item, `${path}[${i}]`));
  if (value && typeof value === "object") {
    Object.entries(value).forEach(([k,v]) => rejectControlChars(v, `${path}.${k}`));
  }
};

for (const topic of topics) {
  const workspace = JSON.parse(fs.readFileSync(topic.workspace,"utf8"));
  const micro = JSON.parse(fs.readFileSync(topic.micro,"utf8"));
  const assessment = JSON.parse(fs.readFileSync(topic.assessment,"utf8"));
  const practice = fs.readFileSync(topic.practice,"utf8");
  const lesson = fs.readFileSync(topic.lesson,"utf8");
  const selfcheck = fs.readFileSync(topic.selfcheck,"utf8");

  rejectControlChars(workspace, `${topic.slug}.workspace`);
  rejectControlChars(micro, `${topic.slug}.micro`);
  rejectControlChars(assessment, `${topic.slug}.assessment`);
  rejectMarkdownMath(practice, `${topic.slug}.practice-markdown`);

  if (workspace.topic !== topic.slug) errors.push(`${topic.slug}: workspace topic mismatch`);
  if (!Array.isArray(workspace.cards) || workspace.cards.length !== 5) errors.push(`${topic.slug}: expected 5 Core cards`);
  if (micro.question_count !== 15 || micro.questions?.length !== 15) errors.push(`${topic.slug}: expected 15 micro questions`);

  const byId = new Map((micro.questions || []).map(q => [q.id,q]));
  for (const card of workspace.cards || []) {
    const qs = (card.micro_practice || []).map(id => byId.get(id)).filter(Boolean);
    if (qs.length !== 3) errors.push(`${topic.slug}/${card.id}: expected 3 micro questions`);
    if (qs.map(q => q.micro_role).join(",") !== "base,trap,apply") errors.push(`${topic.slug}/${card.id}: expected base,trap,apply`);
    for (const skill of card.skills || []) {
      if (topic.excluded.has(skill)) errors.push(`${topic.slug}/${card.id}: excluded Core skill ${skill}`);
    }
  }

  for (const q of micro.questions || []) {
    const skills = q.tags?.skill;
    if (!Array.isArray(skills) || skills.length !== 1) errors.push(`${topic.slug}/${q.id}: exactly one assessed skill required`);
    if (skills?.some(s => topic.excluded.has(s))) errors.push(`${topic.slug}/${q.id}: excluded Core assessed skill ${skills[0]}`);
    if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`${topic.slug}/${q.id}: expected 4 options`);
    if (Array.isArray(q.options) && new Set(q.options).size !== q.options.length) errors.push(`${topic.slug}/${q.id}: duplicate option text`);
    if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= (q.options?.length || 0)) errors.push(`${topic.slug}/${q.id}: invalid answer index`);
    if (!Array.isArray(q.hints) || q.hints.length < 2) errors.push(`${topic.slug}/${q.id}: expected at least 2 hints`);
    if (!q.explanation) errors.push(`${topic.slug}/${q.id}: missing explanation`);
    for (const [idx, ev] of Object.entries(q.option_evidence || {})) {
      if (Number(idx) === q.answer) errors.push(`${topic.slug}/${q.id}: observed signal attached to correct option`);
      if (![1,2].includes(Number(ev.signal_weight || 1))) errors.push(`${topic.slug}/${q.id}: invalid signal_weight`);
    }
  }

  if (assessment.schema !== "roadmap-readiness-assessment-v1") errors.push(`${topic.slug}: assessment schema mismatch`);
  if (assessment.topic?.id !== topic.slug) errors.push(`${topic.slug}: assessment topic id mismatch`);
  if (assessment.layer !== "KNTT-Core") errors.push(`${topic.slug}: assessment must be KNTT-Core`);
  if (assessment.policy?.feedback !== "after_submit" || assessment.policy?.hints !== false || assessment.policy?.tutor !== false || assessment.policy?.hard_gate !== false) errors.push(`${topic.slug}: invalid assessment policy`);
  if (assessment.readiness?.hard_gate !== false) errors.push(`${topic.slug}: readiness hard_gate must be false`);
  if (!Array.isArray(assessment.items) || assessment.items.length < 10 || assessment.items.length > 12) errors.push(`${topic.slug}: expected 10-12 readiness items`);
  for (const q of assessment.items || []) {
    if (q.type !== "mcq") errors.push(`${topic.slug}/${q.id}: readiness v1 must be MCQ`);
    if (topic.excluded.has(q.skill)) errors.push(`${topic.slug}/${q.id}: excluded readiness skill ${q.skill}`);
    if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`${topic.slug}/${q.id}: readiness expected 4 options`);
    if (Array.isArray(q.options) && new Set(q.options).size !== q.options.length) errors.push(`${topic.slug}/${q.id}: duplicate readiness option text`);
    if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= (q.options?.length || 0)) errors.push(`${topic.slug}/${q.id}: invalid readiness answer`);
  }

  const coreWritten = (practice.match(/^####\s+\d{2}-WR-\d+/gm) || []).length;
  if (coreWritten < 8) errors.push(`${topic.slug}: expected at least 8 Core written exercises`);
  if (!/Entrance10/.test(practice)) errors.push(`${topic.slug}: missing Entrance10 section`);
  if (!/Challenge/.test(practice)) errors.push(`${topic.slug}: missing Challenge section`);
  if (!/\?\?\?\s+example\s+"Xem lời giải"/.test(practice)) errors.push(`${topic.slug}: missing collapsed solutions`);
  if (!lesson.includes("(bai-tap.md)") || !lesson.includes("(tu-kiem-tra.md)")) errors.push(`${topic.slug}: lesson gateways missing`);
  if (!selfcheck.includes("data-readiness-check-v1")) errors.push(`${topic.slug}: readiness marker missing`);
  if (/^#+\s+.*(?:Đáp án|Hướng dẫn chấm)/mi.test(selfcheck)) errors.push(`${topic.slug}: static answer key exposed in Readiness shell`);
}

// CĐ08 must have real interactive coverage for new Grade 9 Core order skills.
const manifestPath = "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1.manifest.json";
const manifest = JSON.parse(fs.readFileSync(manifestPath,"utf8"));
for (const skill of ["bat-dang-thuc","tinh-chat-thu-tu-phep-cong","tinh-chat-thu-tu-phep-nhan"]) {
  if (!manifest.skill_labels?.[skill]) errors.push(`CĐ08 manifest missing Core skill ${skill}`);
}
if (manifest.question_count !== 132) errors.push(`CĐ08 manifest question_count expected 132, got ${manifest.question_count}`);
if (!(manifest.sources || []).includes("08-phuong-trinh-bat-phuong-trinh-v1-05.json")) errors.push("CĐ08 manifest missing new Core coverage source");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("PASS: Golden Template batch CĐ08-CĐ10 · 45 micro · 30 readiness · 30+ Core written · CĐ08 order-property coverage present");
