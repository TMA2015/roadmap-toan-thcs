#!/usr/bin/env node
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");

const read = (p) => fs.readFileSync(p, "utf8");
const json = (p) => JSON.parse(read(p));

const indexPath = "docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/index.md";
const practiceRoomPath = "docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/bai-tap.md";
const workspacePath = "docs/assets/data/curriculum/topic08-learning-workspace.json";
const bankPath = "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json";
const lockPath = "review-packets/academic-depth/ct08-p1a/01_CT08_P1A_NOTATION_ACADEMIC_LOCK_R1.json";
const layerPath = "review-packets/academic-depth/ct08-p1a/02_CT08_ACADEMIC_LAYER_RECONCILIATION_R1.json";
const registryPath = "docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json";

const index = read(indexPath);
const room = read(practiceRoomPath);
const workspace = json(workspacePath);
const bank = json(bankPath);
const lock = json(lockPath);
const layer = json(layerPath);
const registry = json(registryPath);

// Learner-facing minimalism / source discipline.
assert.match(index, /> \*\*Mức ưu tiên:\*\* ⭐⭐⭐⭐⭐/, "generic topic priority badge must remain");
assert.doesNotMatch(index, /\| Phương trình cơ bản \| ⭐/, "row-level star ranking must be removed");
assert.doesNotMatch(index, /⭐ là \*\*mức độ ưu tiên ôn tập/, "old row-star disclaimer must be removed");
assert.match(index, /## 🚀 6\. Ôn tập và chuyển giao thi vào lớp 10/);
assert.match(index, /mẫu nhỏ \\(n=2\\\).*không phải dự đoán tần suất đề thi/s);

// P1-A theory depth.
for (const phrase of [
  "### 3.4. Bất đẳng thức và tính chất thứ tự",
  "### 3.6. Ứng dụng Core – lập bất phương trình từ bài toán",
  "### 3.7. Củng cố – nhiều điều kiện đồng thời",
  "#### Ví dụ 2 — Biến đổi rồi mới dùng tính chất tích bằng",
  "#### Ví dụ 3 — Thu gọn rồi mới giải bất phương trình",
  "#### Ví dụ 4 — Mô hình hóa bằng một ẩn"
]) assert.ok(index.includes(phrase), "missing CT08 P1-A content: " + phrase);

assert.match(index, /\(x-2\)\(x-3\)=0/);
assert.match(index, /-2x\\le10/);
assert.match(index, /4x\+6\(x\+3\)=238/);
assert.match(index, /6\+1\{,\}5x\\le18/);

// Practice Room learner layers.
assert.match(room, /Ứng dụng KNTT-Core/);
assert.match(room, /08-APP-01 · Lập bất phương trình/);
assert.match(room, /Củng cố \/ Core-Support/);
assert.match(room, /08-SUP-01 · Giao tập nghiệm/);
assert.doesNotMatch(room, /### Entrance10 \/ Extension/);
assert.match(room, /### Thử thách/);

// Workspace layer correction remains non-gating.
const byExt = new Map(workspace.extensions.map((x) => [x.id, x]));
assert.equal(byExt.get("eq08-ent10-1").layer, "KNTT-Core");
assert.equal(byExt.get("eq08-ent10-1").learner_label, "Ứng dụng Core");
assert.equal(byExt.get("eq08-ent10-1").gates_core, false);
assert.equal(byExt.get("eq08-ent10-2").layer, "Core-Support");
assert.equal(byExt.get("eq08-ent10-2").learner_label, "Củng cố");
assert.equal(byExt.get("eq08-ent10-2").gates_core, false);
assert.equal(byExt.get("eq08-challenge-1").layer, "Specialized-Challenge");
assert.equal(byExt.get("eq08-challenge-1").gates_core, false);
assert.match(workspace.core_progress_policy.rule, /remain non-gating/);

// Reviewed notation-only cleanup.
assert.equal(lock.schema, "ct08-p1a-notation-academic-lock-r1");
assert.deepEqual(lock.allowed_question_ids, ["EQ08V1_047","EQ08V1_048","EQ08V1_049","EQ08V1_050"]);
const current = new Map(bank.questions.map((q) => [q.id, q]));
const audited = new Map(lock.audited_questions.map((q) => [q.id, q]));
for (const id of lock.allowed_question_ids) {
  const now = current.get(id), prior = audited.get(id), expected = lock.reviewed_replacements[id];
  assert.ok(now && prior && expected, "missing notation-lock item " + id);
  assert.equal(now.question, expected.question);
  assert.equal(now.explanation, expected.explanation);
  for (const key of lock.invariant_fields) assert.deepEqual(now[key], prior[key], id + " invariant " + key);
}
for (const q of bank.questions) {
  if (lock.allowed_question_ids.includes(q.id)) continue;
  assert.deepEqual(q, audited.get(q.id), "non-target Practice drift " + q.id);
}
assert.equal(bank.questions.some((q) => /x--[1-4]/.test(q.question + " " + (q.explanation || ""))), false);

// Academic layer source of truth is explicit; Taxonomy v2 remains protected/frozen.
assert.equal(layer.authorization, "CLEARED_FOR_CT08_P1_IMPLEMENTATION_ONLY");
assert.equal(layer.protected_boundaries.mastery_readiness_change, false);
assert.equal(layer.protected_boundaries.taxonomy_v2_runtime_mutation, false);
const ineqModel = registry.families.find((f) => f.family_id === "INEQ-MODEL");
assert.equal(ineqModel.layer, "Entrance10", "P1-A must not silently mutate protected Taxonomy v2 registry");

console.log("PASS: CT08 P1-A learner layers, theory examples and source-grounded exam framing.");
console.log("PASS: EQ08V1_047..050 notation cleanup preserves IDs/options/answers/skills/history semantics.");
console.log("PASS: Core Readiness and protected Taxonomy v2 remain unchanged.");
