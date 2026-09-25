#!/usr/bin/env node
const fs = require("fs");

const configs = [
  {
    num:"04", slug:"04-bieu-thuc-dai-so",
    assessment:"docs/assets/data/assessment/04-bieu-thuc-dai-so-core-v1.json",
    workspace:"docs/assets/data/curriculum/topic04-learning-workspace.json",
    micro:"docs/assets/data/practice/04-bieu-thuc-dai-so-micro-v1.json",
    forbidden:["dieu-kien-xac-dinh","bien-doi-nhieu-buoc","lap-bieu-thuc","bai-toan-thuc-te"]
  },
  {
    num:"05", slug:"05-7-hang-dang-thuc",
    assessment:"docs/assets/data/assessment/05-7-hang-dang-thuc-core-v1.json",
    workspace:"docs/assets/data/curriculum/topic05-learning-workspace.json",
    micro:"docs/assets/data/practice/05-7-hang-dang-thuc-micro-v1.json",
    forbidden:["phan-tich-hdt","chung-minh-hdt","giai-phuong-trinh-hdt"]
  },
  {
    num:"06", slug:"06-phan-tich-da-thuc",
    assessment:"docs/assets/data/assessment/06-phan-tich-da-thuc-core-v1.json",
    workspace:"docs/assets/data/curriculum/topic06-learning-workspace.json",
    micro:"docs/assets/data/practice/06-phan-tich-da-thuc-micro-v1.json",
    forbidden:["tach-hang-tu-giua","giai-pt-bang-nhan-tu","ung-dung-phan-tich"]
  },
  {
    num:"07", slug:"07-phan-thuc-dai-so",
    assessment:"docs/assets/data/assessment/07-phan-thuc-dai-so-core-v1.json",
    workspace:"docs/assets/data/curriculum/topic07-learning-workspace.json",
    micro:"docs/assets/data/practice/07-phan-thuc-dai-so-micro-v1.json",
    forbidden:[]
  },
  {
    num:"08", slug:"08-phuong-trinh-bat-phuong-trinh",
    assessment:"docs/assets/data/assessment/08-phuong-trinh-bat-phuong-trinh-core-v1.json",
    workspace:"docs/assets/data/curriculum/topic08-learning-workspace.json",
    micro:"docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-micro-v1.json",
    forbidden:["tham-so-co-ban","giao-tap-nghiem","lap-bat-phuong-trinh"]
  },
  {
    num:"09", slug:"09-he-phuong-trinh",
    assessment:"docs/assets/data/assessment/09-he-phuong-trinh-core-v1.json",
    workspace:"docs/assets/data/curriculum/topic09-learning-workspace.json",
    micro:"docs/assets/data/practice/09-he-phuong-trinh-micro-v1.json",
    forbidden:["tham-so-he"]
  },
  {
    num:"10", slug:"10-ham-so-do-thi",
    assessment:"docs/assets/data/assessment/10-ham-so-do-thi-core-v1.json",
    workspace:"docs/assets/data/curriculum/topic10-learning-workspace.json",
    micro:"docs/assets/data/practice/10-ham-so-do-thi-micro-v1.json",
    forbidden:["vi-tri-hai-duong-thang","giao-diem-do-thi","lien-he-he-phuong-trinh"]
  }
];

const errors = [];
const read = p => fs.readFileSync(p,"utf8");
const json = p => JSON.parse(read(p));

const rejectControlChars = (value, path = "root") => {
  if (typeof value === "string") {
    for (const ch of value) {
      const code = ch.charCodeAt(0);
      if (code < 32 && ![9,10,13].includes(code)) errors.push(`${path}: unexpected control U+${code.toString(16).padStart(4,"0")}`);
    }
    return;
  }
  if (Array.isArray(value)) return value.forEach((item,i)=>rejectControlChars(item,`${path}[${i}]`));
  if (value && typeof value === "object") for (const [k,v] of Object.entries(value)) rejectControlChars(v,`${path}.${k}`);
};

for (const cfg of configs) {
  const lessonPath=`docs/kien-thuc/${cfg.slug}/index.md`;
  const practicePath=`docs/kien-thuc/${cfg.slug}/bai-tap.md`;
  const checkPath=`docs/kien-thuc/${cfg.slug}/tu-kiem-tra.md`;
  const assessment=json(cfg.assessment);
  const workspace=json(cfg.workspace);
  const micro=json(cfg.micro);
  const lesson=read(lessonPath);
  const practice=read(practicePath);
  const check=read(checkPath);

  rejectControlChars(assessment,`CĐ${cfg.num}.assessment`);
  rejectControlChars(micro,`CĐ${cfg.num}.micro`);

  if (assessment.schema!=="roadmap-readiness-assessment-v1") errors.push(`CĐ${cfg.num}: assessment schema mismatch`);
  if (assessment.topic?.id!==cfg.slug) errors.push(`CĐ${cfg.num}: assessment topic id mismatch`);
  if (assessment.layer!=="KNTT-Core") errors.push(`CĐ${cfg.num}: readiness layer must be KNTT-Core`);
  if (assessment.policy?.feedback!=="after_submit"||assessment.policy?.hints!==false||assessment.policy?.tutor!==false) errors.push(`CĐ${cfg.num}: readiness feedback/hint/tutor policy mismatch`);
  if (assessment.policy?.hard_gate!==false||assessment.readiness?.hard_gate!==false) errors.push(`CĐ${cfg.num}: readiness must never hard gate`);
  if (!Array.isArray(assessment.items)||assessment.items.length!==10) errors.push(`CĐ${cfg.num}: expected exactly 10 readiness items`);

  const aid=new Set();
  for (const item of assessment.items||[]) {
    if (!item.id||aid.has(item.id)) errors.push(`CĐ${cfg.num}: duplicate/missing readiness id ${item.id}`);
    aid.add(item.id);
    if (item.type!=="mcq") errors.push(`CĐ${cfg.num} ${item.id}: assessment v1 is MCQ-only`);
    if (!item.skill) errors.push(`CĐ${cfg.num} ${item.id}: missing assessed skill`);
    if (cfg.forbidden.includes(item.skill)) errors.push(`CĐ${cfg.num} ${item.id}: forbidden Core skill ${item.skill}`);
    if (!Array.isArray(item.options)||item.options.length!==4||new Set(item.options).size!==4) errors.push(`CĐ${cfg.num} ${item.id}: options must be four unique choices`);
    if (!Number.isInteger(item.answer)||item.answer<0||item.answer>=4) errors.push(`CĐ${cfg.num} ${item.id}: invalid answer index`);
    if (!assessment.skill_labels?.[item.skill]) errors.push(`CĐ${cfg.num} ${item.id}: missing skill label`);
    if ((item.supporting_skills||[]).includes(item.skill)) errors.push(`CĐ${cfg.num} ${item.id}: assessed skill duplicated in supporting_skills`);
  }

  if (workspace.topic!==cfg.slug) errors.push(`CĐ${cfg.num}: workspace topic mismatch`);
  if (!Array.isArray(workspace.cards)||workspace.cards.length<4) errors.push(`CĐ${cfg.num}: workspace needs coherent Core cards`);
  const byId=new Map((micro.questions||[]).map(q=>[q.id,q]));
  if ((micro.questions||[]).length!==workspace.cards.length*3) errors.push(`CĐ${cfg.num}: expected exactly 3 micro items per card`);
  for (const card of workspace.cards||[]) {
    for (const skill of card.skills||[]) if (cfg.forbidden.includes(skill)) errors.push(`CĐ${cfg.num} ${card.id}: forbidden Core skill ${skill}`);
    const qs=(card.micro_practice||[]).map(id=>byId.get(id)).filter(Boolean);
    if (qs.length!==3) errors.push(`CĐ${cfg.num} ${card.id}: expected 3 micro items`);
    if (qs.map(q=>q.micro_role).join(",")!=="base,trap,apply") errors.push(`CĐ${cfg.num} ${card.id}: expected base,trap,apply order`);
    for (const q of qs) {
      if (!Array.isArray(q.tags?.skill)||q.tags.skill.length!==1) errors.push(`CĐ${cfg.num} ${q.id}: exactly one assessed skill required`);
      const skill=q.tags?.skill?.[0];
      if (!(card.skills||[]).includes(skill)) errors.push(`CĐ${cfg.num} ${q.id}: assessed skill not declared by card`);
      if (cfg.forbidden.includes(skill)) errors.push(`CĐ${cfg.num} ${q.id}: forbidden Core skill ${skill}`);
      if (!Array.isArray(q.options)||q.options.length!==4||new Set(q.options).size!==4) errors.push(`CĐ${cfg.num} ${q.id}: four unique micro options required`);
      if (!Array.isArray(q.hints)||q.hints.length<2) errors.push(`CĐ${cfg.num} ${q.id}: two-level hint ladder required`);
      if (!q.explanation) errors.push(`CĐ${cfg.num} ${q.id}: explanation required`);
      for (const [idx,ev] of Object.entries(q.option_evidence||{})) {
        if (+idx===q.answer) errors.push(`CĐ${cfg.num} ${q.id}: signal attached to correct option`);
        if (ev.signal && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(ev.signal)) errors.push(`CĐ${cfg.num} ${q.id}: signal must be kebab-case`);
      }
    }
  }

  if (lesson.includes("### Mini quiz")) errors.push(`CĐ${cfg.num}: lesson still contains duplicate static mini quiz`);
  if (!lesson.includes("Mở Practice Room")||!lesson.includes("Core Readiness Check")) errors.push(`CĐ${cfg.num}: lesson gateway missing`);
  if (!lesson.includes("Sang Phòng Luyện Tập")||!lesson.includes("Kiểm Tra Độ Sẵn Sàng")) errors.push(`CĐ${cfg.num}: bottom CTA missing`);
  if (!practice.includes("Luyện tự luận & trình bày")) errors.push(`CĐ${cfg.num}: written Practice mode missing`);
  if (!practice.includes('??? example "Xem lời giải"')) errors.push(`CĐ${cfg.num}: collapsed solutions missing`);
  if (!practice.includes("Entrance10 / Extension")||!practice.includes("Challenge")) errors.push(`CĐ${cfg.num}: Core/Extension boundary missing`);
  const written=(practice.match(new RegExp(`^####\\s+${cfg.num}-WR-`,"gm"))||[]).length;
  if (written<8) errors.push(`CĐ${cfg.num}: need at least 8 actual Core written exercises, found ${written}`);
  if (!check.includes("data-readiness-check-v1")) errors.push(`CĐ${cfg.num}: Readiness marker missing`);
  if (check.includes("# Đáp án và hướng dẫn chấm")) errors.push(`CĐ${cfg.num}: static answer key still exposed`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("PASS: Golden Template CĐ04–CĐ10 · Learn/Practice/Readiness + Core boundaries valid");
