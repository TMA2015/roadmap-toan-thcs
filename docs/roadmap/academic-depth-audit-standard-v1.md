# Academic Depth Audit Standard v1 — Self-Learning Math

Date: 2026-10-03  
Status: **VALIDATED BY CT09 PILOT / READY FOR CONTROLLED TOPIC-BY-TOPIC ROLLOUT**  
Applies to: CT09 is closed at `SELF_LEARNING_READY_V1`; later rollout must remain topic-by-topic or batch-controlled, with source review and no automatic mass-copy.

## 1. Product test

A topic is not considered self-learning ready merely because:
- the page has enough sections;
- Practice has many questions;
- CI passes;
- Skill Map has data;
- the learner can recognize the formula.

The core product test is:

> **If Skill Map, Mastery and Readiness were turned off, could a learner still go from “I do not know this yet” to “I can solve representative written problems independently”?**

If the answer is no, the topic still has an academic depth gap.

## 2. Audit statuses

Each audited dimension receives exactly one status:

- **PASS** — source-supported and sufficiently implemented;
- **REVISE** — implemented but materially incomplete, unclear, shallow, outdated or poorly sequenced;
- **MISSING** — necessary component is absent;
- **INSUFFICIENT_SOURCE** — available corpus is not enough to make the requested academic claim;
- **NOT_REVIEWED** — not yet examined.

Do not silently treat an unmentioned area as PASS.

## 3. Gap priority

### P0 — blocks self-learning
Examples:
- missing prerequisite;
- missing Core concept;
- wrong condition / theorem use;
- Practice requires a method never taught;
- no viable help path when the learner is stuck.

### P1 — materially limits mastery or exam transfer
Examples:
- too few representative worked examples;
- important written problem type missing;
- recent exam pattern not represented;
- solution shows steps but not method choice;
- geometry proof path too shallow.

### P2 — valuable improvement
Examples:
- extra canonical example;
- better diagram;
- additional transfer variant;
- UX/copy polish that does not block learning.

P0/P1/P2 is a repair priority, not a learner score.

## 4. Six audit dimensions

Every topic is audited across six dimensions.

---

## D1 — Theory Depth

### Required questions

1. Are all Core concepts present?
2. Are definitions and conditions mathematically correct?
3. Does the text explain **what / why / when / conditions / next use**?
4. Are prerequisites visible?
5. Are common misconceptions or boundary cases explained?
6. Are Core, Support, Entrance10, Challenge and Bridge separated correctly?
7. Does any exercise require an untaught method?

### PASS standard

A learner should be able to:
- state the concept in their own words;
- identify when the method applies;
- identify at least one non-example / invalid use when relevant;
- follow the connection from prerequisite to current concept;
- know what to learn next.

Theory must not be only a formula sheet.

---

## D2 — Worked Examples

### Required example roles

Not every problem type requires every role, but the topic as a whole should provide the needed progression:

- **BASE** — direct first example;
- **METHOD** — example that explains why this method is chosen;
- **TRAP / CONTRAST** — example or counterexample that exposes a common mistake;
- **CANONICAL** — a memorable classical example when pedagogically valuable;
- **TRANSFER** — same concept in a changed structure/context;
- **SYNTHESIS** — combines multiple ideas when the topic naturally requires it.

### PASS standard

Worked examples must:
- show reasoning, not just transformations;
- explain method selection where selection matters;
- keep domain/conditions visible;
- check the final result where needed;
- reduce guidance gradually across the sequence.

For geometry, the figure is support only; it cannot replace the proof.

---

## D3 — Interactive Practice

### Purpose

Interactive Practice is for:
- immediate feedback;
- concept recognition;
- routine fluency;
- error discrimination;
- short application;
- spaced and varied repetition.

It is not expected to replace complete written solutions.

### Coverage questions

For every important problem type:
- Is there at least one item that directly checks the intended idea?
- Are near-duplicate items being mistaken for variety?
- Is there a trap/common-error item where useful?
- Are there enough structurally distinct variants for practice?
- Does the learner receive an explanation or useful hint after an error?
- Can the learner return to the prerequisite concept?

### PASS standard

Practice should support the learning path:

**Base → Trap/Contrast → Apply → Transfer where appropriate**

No fixed question quota automatically creates PASS.

---

## D4 — Written Problem Solving

Written work is a first-class component of Self-Learning Math.

### Problem roles

Use as appropriate:

- **CORE_BASE** — complete standard solution;
- **CORE_APPLY** — slight variation requiring method application;
- **METHOD_CHOICE** — learner must choose between methods;
- **CONDITION/TRAP** — domain, extraneous root, sign, degenerate case;
- **MULTISTEP** — several linked steps;
- **SYNTHESIS** — combines topics/skills;
- **EXAM_STYLE** — representative school / entrance-10 structure;
- **CANONICAL_METHOD** — classical problem that teaches a reusable idea;
- **PROOF / MODELING / CONSTRUCTION** where relevant;
- **CHALLENGE** — optional and clearly separated.

### Every published written item should have

- clear problem statement;
- source/provenance or original-authoring note;
- problem type;
- learning layer;
- expected time;
- prerequisites;
- progressive hints where useful;
- complete solution;
- explanation of method choice;
- common mistakes;
- rubric or step-check structure;
- remediation path.

### PASS standard

A learner must be able to move from:
**seeing a worked example → attempting alone → checking a complete solution → understanding the missing step → trying a related problem**.

A large list of answers without teaching support does not PASS.

---

## D5 — Exam & Authentic Assessment Coverage

### Source basis

Claims must be tied to the selected corpus:
- school semester tests;
- official/traceable surveys;
- recent Hanoi grade-10 entrance exams;
- selected other localities when relevant.

### Required outputs

For each important problem type, record:
- observed exam/test sources;
- years;
- count within the current corpus;
- whether the item is direct, multistep or synthesis;
- layer: Core / Entrance10 / Challenge.

### PASS standard

The topic should contain:
- the Core methods required by curriculum;
- representative exam-style tasks for forms repeatedly observed in the selected corpus;
- no claim that a form is “common” without corpus evidence;
- no inflation of Core because of a difficult exam item.

Exam coverage is not simply “add old exam questions”.

---

## D6 — Help / Remediation Path

A self-learning platform must support the learner at the moment of being stuck.

### Required help layers

Depending on task:
1. **Small hint** — next observation only;
2. **Method hint** — name/point to the method;
3. **Worked step** — reveal one step;
4. **Full explanation** — when learner explicitly asks;
5. **Prerequisite remediation** — return to the missing foundation;
6. **Similar easier example** — when useful.

### AI Tutor expectations

AI should be able to:
- explain from the beginning;
- answer questions from the knowledge page;
- give a small hint without revealing the whole solution;
- explain why a step is valid;
- generate a nearby practice variant when appropriate.

AI must not be the only place where essential curriculum knowledge exists.

### Selective static-hint policy

Static hint coverage is **selective, not quota-driven**.

- Do not retrofit hints to every legacy interactive item merely for visual consistency.
- Add static hints where a new item, a high-error Core family, modeling task, proof/construction task, or genuine reasoning bottleneck benefits from them.
- Important written/modeling anchors must retain a reliable non-AI path such as progressive hints, prerequisite remediation, a worked step, or an easier sibling.
- AI Tutor may add explanation and nearby practice, but it must not become the only route to essential curriculum knowledge or recovery from a key task.

### PASS standard

A learner stuck on an important task has at least one reliable path forward without needing an external teacher.

---

## 5. Cross-cutting source requirements

A topic cannot receive final PASS for depth until:
- S1 coverage has been checked for Core;
- representative S2 has been checked for pedagogy/problem types;
- relevant S3 has been checked for authentic assessment when exam claims are made.

S4 is optional unless auditing Challenge.

If S2/S3 corpus is not yet sufficient, use INSUFFICIENT_SOURCE rather than guessing.

## 6. Problem-Type Coverage Record

For each normalized problem type, record:

| Field | Meaning |
|---|---|
| Problem type | Canonical name / ID |
| Layer | Core / Support / Entrance10 / Bridge / Challenge |
| Prerequisite | What must already be known |
| Method | Main method(s) |
| Recognition cue | How learner recognizes the form |
| S1 evidence | Curriculum/textbook support |
| S2 evidence | Pedagogical/reference-book support |
| S3 evidence | Exam/test observation |
| Theory | Current website coverage |
| Worked | Worked-example coverage |
| Interactive | Practice coverage |
| Written | Written-library coverage |
| Help | Hint/remediation coverage |
| Gap | Exact missing component |
| Priority | P0/P1/P2 |

## 7. Do not carry forward old PASS automatically

Existing audits are useful prior evidence but were produced under earlier standards and with different source coverage.

Therefore:
- previous structural PASS ≠ Academic Depth PASS;
- previous manual academic PASS ≠ source-corpus PASS;
- existing question count ≠ problem-type coverage;
- current Written Library count ≠ written-depth sufficiency.

The new audit may confirm an old PASS, but must re-evaluate it against this standard.

## 8. Topic audit workflow

For one topic:

### Step A — Inventory current website
Read:
- theory/cards;
- worked examples;
- micro-practice;
- Practice Bank;
- Written Exercise Library;
- self-check/readiness materials;
- help/hint paths;
- prerequisite links.

### Step B — Read source corpus
Use selected S1/S2/S3 sources and register provenance.

### Step C — Normalize problem types
Merge near-duplicates and separate structurally different forms.

### Step D — Build coverage matrix
Compare source-supported problem types against current website.

### Step E — Assign gaps
Every gap must say:
- what is missing;
- why it matters;
- source support;
- exact target component;
- priority.

### Step F — Produce Content Delta Plan
Specify:
- theory edits;
- new worked examples;
- interactive additions/removals;
- written additions;
- exam-style additions;
- help/remediation additions.

### Step G — Academic review
Use deterministic checks plus independent review/NotebookLM when appropriate.

### Step H — Integrate and QA
Only after approval:
- edit source-of-truth files;
- run academic tests;
- run site tests;
- owner QA when learner-facing behavior changes.

## 9. Topic closure criteria

A topic can be marked **SELF_LEARNING_READY_V1** only when:

- D1 Theory Depth = PASS;
- D2 Worked Examples = PASS;
- D3 Interactive Practice = PASS;
- D4 Written Problem Solving = PASS;
- D5 Exam Coverage = PASS or NOT_APPLICABLE with justification;
- D6 Help/Remediation = PASS;
- no unresolved P0 gap;
- no unreviewed required Core problem type;
- source provenance is recorded.

This status means “ready under current reviewed corpus”, not permanently complete.

## 10. CT01 special rule

CT01 is the program/roadmap overview and is not audited like a normal mathematical topic.

Audit CT01 for:
- curriculum orientation;
- how to choose class/topic;
- prerequisite explanation;
- layer explanation;
- learner navigation;
- study strategy.

Do not require the same Practice/Written quotas as CT02–CT25.

## 11. Recommended batching

Reuse natural existing boundaries for manageable review:

- Batch A: CT02–CT07;
- Batch B: CT08–CT12;
- Batch C: CT13–CT20;
- Batch D: CT21–CT25;
- CT01: separate overview audit.

Within a batch, audit one topic deeply before mass-editing the rest. This prevents a flawed standard from being copied across many topics.

## 12. Phase success criterion

This phase succeeds when we know, with source support:

- what each topic must teach;
- which problem types matter and why;
- what the current site already covers well;
- exactly what is missing;
- which additions have the highest direct learning value.

The output is a **repair and enrichment plan**, not an inflated content count.
