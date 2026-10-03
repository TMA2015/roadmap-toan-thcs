# Supplemental Exam/Study Corpus Ingest Plan — CT08 R0

Date: 2026-10-03  
State: **WAITING FOR OWNER ZIP / NO LEARNER-FACING EDIT**

The owner may provide one ZIP containing:
- Grade 6, 7, 8, 9 school tests/exams;
- Grade-10 entrance exams;
- study/reference materials.

Purpose:
use the corpus to strengthen source-grounded Academic Depth audits, beginning with CT08, without treating every file as equal authority.

## 1. Intake rules

On receipt:
1. inventory every file without modifying originals;
2. record filename, format, apparent grade, exam type, year, locality/school, official/unofficial status, answer-key presence and provenance confidence;
3. hash/deduplicate exact duplicates where practical;
4. keep unknown-provenance material but mark it `PROVENANCE_UNCERTAIN`;
5. do not infer frequency from items whose provenance cannot be established.

## 2. Source classes

### S1 — curriculum authority
Only curriculum/textbook/workbook material that can be tied to KNTT/program requirements.

Use for:
- Core boundaries;
- required concepts/skills;
- layer decisions.

### S2 — pedagogical/reference
Study guides, specialist materials, worksheets, books and curated references.

Use for:
- problem-type discovery;
- pedagogical progression;
- challenge/transfer ideas.

Do **not** use S2 to redefine Core.

### S3 — authentic assessment
Official or provenance-verifiable:
- school semester/final exams;
- district/provincial exams;
- grade-10 entrance papers.

Use for:
- observed problem structures;
- grade/exam transfer evidence;
- frequency statements only within a declared corpus.

### S4 — challenge/reference extension
Optional specialist/competition material.

Never gate Core unless curriculum authority separately supports it.

## 3. Frequency discipline

Frequency tables must declare:
- corpus name;
- exam type;
- grades/locality;
- years;
- number of papers `n`;
- inclusion/exclusion rules.

Do not combine:
- school semester exams with entrance exams;
- old-program and current-program samples without labeling;
- official and unknown-provenance papers into one denominator.

Allowed:
“Trong tập 18 đề cuối kỳ lớp 9 đã xác minh, dạng X xuất hiện 7/18.”

Not allowed:
“Dạng X rất hay thi” without a declared verified sample.

## 4. CT08 first-pass extraction

Map each relevant problem to the current provisional CT08 catalogue:
- PT08-01..PT08-21.

Also allow:
- `NEW_CANDIDATE_TYPE` when a problem does not fit without distortion;
- `CROSS_TOPIC` when CT08 is only a supporting step;
- `OUT_OF_SCOPE` when unrelated.

For each CT08 hit record:
- source file;
- exam metadata;
- question number;
- problem-type ID;
- layer signal;
- reasoning structure;
- whether it is structurally new vs numerical variant;
- answer-key availability;
- confidence.

## 5. Expected benefit

The corpus can materially improve:
- D3: real structural diversity vs clone-like practice;
- D4: authentic written anchor selection;
- D5: school-exam and entrance-transfer coverage;
- skill priority calibration by grade/exam type.

It may resolve the current CT08:
`SCHOOL_SEMESTER_FREQUENCY_GAP|INSUFFICIENT_SOURCE`

only if enough school papers have usable provenance.

## 6. No-edit boundary

Receiving the ZIP does not authorize learner-facing edits.

Sequence remains:
ZIP inventory → provenance filter → CT08 extraction → revise R0 packet to R1 if evidence changes → NotebookLM independent review → implementation only after review authorization.
