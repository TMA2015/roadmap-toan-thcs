#!/usr/bin/env node
const fs = require("fs");

const workspacePath = process.argv[2] || "docs/assets/data/curriculum/topic07-learning-workspace.json";
const bankPath = process.argv[3] || "docs/assets/data/practice/07-phan-thuc-dai-so-micro-v1.json";
const workspace = JSON.parse(fs.readFileSync(workspacePath, "utf8"));
const bank = JSON.parse(fs.readFileSync(bankPath, "utf8"));
const byId = new Map(bank.questions.map(q => [q.id, q]));
const errors = [];
const ids = new Set();

const rejectControlChars = (value, path = "root") => {
  if (typeof value === "string") {
    for (const ch of value) {
      const code = ch.charCodeAt(0);
      if (code < 32 && ![9, 10, 13].includes(code)) errors.push(`${path}: unexpected control character U+${code.toString(16).padStart(4, "0")}`);
    }
    return;
  }
  if (Array.isArray(value)) return value.forEach((item, i) => rejectControlChars(item, `${path}[${i}]`));
  if (value && typeof value === "object") for (const [key, item] of Object.entries(value)) rejectControlChars(item, `${path}.${key}`);
};
rejectControlChars(bank, "bank");

for (const q of bank.questions) {
  if (ids.has(q.id)) errors.push(`duplicate id: ${q.id}`);
  ids.add(q.id);
  if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`${q.id}: expected 4 options`);
  if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) errors.push(`${q.id}: invalid answer`);
  if (!Array.isArray(q.tags?.skill) || q.tags.skill.length !== 1) errors.push(`${q.id}: expected exactly one assessed skill`);
  for (const [idx, ev] of Object.entries(q.option_evidence || {})) {
    if (Number(idx) === q.answer) errors.push(`${q.id}: observed signal attached to correct option`);
    if (![1, 2].includes(Number(ev.signal_weight || 1))) errors.push(`${q.id}: signal_weight must be 1 or 2`);
  }
}

for (const card of workspace.cards || []) {
  const qs = (card.micro_practice || []).map(id => byId.get(id)).filter(Boolean);
  if (qs.length < 3 || qs.length !== (card.micro_practice || []).length) errors.push(`${card.id}: expected at least three valid micro questions`);
  if (qs.slice(0,3).map(q => q.micro_role).join(",") !== "base,trap,apply") errors.push(`${card.id}: first three must preserve base,trap,apply order`);
  if (qs.slice(3).some(q => q.micro_role !== "coverage")) errors.push(`${card.id}: extra questions must be marked coverage`);
  for (const q of qs) {
    if (q.card_id !== card.id) errors.push(`${q.id}: question/card ID mismatch`);
    const skill = q.tags.skill[0];
    const core = (card.skills || []).includes(skill);
    const support = (card.supporting_skills || []).includes(skill);
    if (!core && !support) errors.push(`${q.id}: assessed skill not declared by card`);
    if (support && (q.tags.layer === "KNTT-Core" || q.gates_core !== false)) errors.push(`${q.id}: supporting skill must be non-Core and gates_core=false`);
  }
}

if (workspace.core_progress_policy?.layer !== "KNTT-Core") errors.push("workspace: Core progress layer mismatch");
if ((workspace.extensions || []).some(x => x.gates_core !== false)) errors.push("workspace: an extension gates Core");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`PASS: ${bank.questions.length} micro questions across ${workspace.cards.length} Core cards`);
