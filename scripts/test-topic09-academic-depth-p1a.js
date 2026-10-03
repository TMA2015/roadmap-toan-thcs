"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const page = fs.readFileSync(path.join(ROOT, "docs/kien-thuc/09-he-phuong-trinh/index.md"), "utf8");

// Learner-facing parameter framing must be simple, while preserving the academic boundary.
assert.ok(page.includes("Tham số nhẹ / hệ số chưa biết (Củng cố nền tảng)"));
assert.ok(page.includes("Biện luận hệ theo tham số (Ôn thi vào 10)"));
assert.ok(page.includes("Không bắt buộc nếu em đang học phần nền tảng"));

// Deep self-study examples.
assert.ok(page.includes("Ví dụ sâu – nhìn nghiệm hệ trên đồ thị rồi kiểm tra lại bằng đại số"));
assert.ok(page.includes("Ví dụ sâu – từ dữ kiện thực tế đến hai phương trình"));
assert.ok(page.includes("16 quyển sổ và 12 bút chì"));
assert.ok(page.includes("Máy tính cầm tay – mở khi cần"));\nassert.ok(page.includes("nên hạn chế khi đang học phương pháp"));

// The P1-A examples must use valid display-math delimiters.
const graph = page.slice(
  page.indexOf("Ví dụ sâu – nhìn nghiệm hệ trên đồ thị rồi kiểm tra lại bằng đại số"),
  page.indexOf("### 3.3A.")
);
const model = page.slice(
  page.indexOf("Ví dụ sâu – từ dữ kiện thực tế đến hai phương trình"),
  page.indexOf("\n---\n\n## 🚀 6.")
);
assert.ok(graph.includes("$$\n\\begin{cases}"));
assert.ok(model.includes("$$\nx+y=28."));
assert.ok(model.includes("$$\n\\begin{cases}"));
assert.ok(!graph.includes("\n$\n"));
assert.ok(!model.includes("\n$\n"));

// Exam guidance should help the learner study, while source-count detail remains background metadata.
const exam = page.slice(page.indexOf("## 🚀 6."), page.indexOf("## ⚠️ 7."));
assert.ok(exam.includes("Dạng rất đáng luyện: bài toán thực tế lập hệ hai ẩn"));
assert.ok(exam.includes("Dạng mở rộng: biến đổi rồi đưa về hệ tuyến tính"));
for (const internal of ["n=2", "2/2", "2025–2026", "2023–2024", "Core-Support", "Entrance10"]) {
  assert.ok(!exam.includes(internal), "learner exam section leaks internal/source-management wording: " + internal);
}
for (const oldStar of ["### Giải hệ trực tiếp – ⭐","### Hệ có tham số – ⭐","### Lập hệ từ bài toán thực tế – ⭐","### Kết hợp hệ phương trình với hàm số – ⭐"]) {
  assert.ok(!page.includes(oldStar));
}

// Product-management language should stay in the system layer, not the CT09 learner lesson.
for (const internal of ["Practice Engine", "formative evidence", "Soft Mastery", "Core Readiness Check", "assessed skill"]) {
  assert.ok(!page.includes(internal), "learner page leaks internal wording: " + internal);
}

assert.ok(page.includes('??? info "🧮 Máy tính cầm tay – mở khi cần"'));\nconsole.log("PASS CT09 P1-A learner-focused copy, math rendering, calculator disclosure and academic-boundary checks.");
