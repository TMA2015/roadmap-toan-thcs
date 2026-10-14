# Exercise Presentation & Placement Standard v1.0 — Toán THCS

**Owner decision:** 2026-10-14 · **Policy status:** `ADOPTED_DESIGN / AUDIT_IN_PROGRESS` · **Scope:** all 25 topic pages, KNTT Grade 6–9, shared Written Library, later THPT/SAT/ACT overlays.  
**Precedence:** Master Plan v1.2.1 → Academic Source & Depth Audit Rules → Golden Learning Architecture → Shared Written Library Contract v1 → this presentation/placement standard. This document authorizes **classification and UX design**, **not** conversion of assessed questions or changes to academic content without review.

## 1. Exactly two learner response modes

**A. INTERACTIVE** — learner answers inside the web page; app validates, logs a versioned attempt, and produces appropriate feedback. This is **not synonymous with 4-option MCQ**. Candidate formats include:

| `response_type` | Input | Grading contract | Ship gate |
| --- | --- | --- | --- |
| `single_choice` | 2+ choices | correct option by immutable ID; not by displayed order | Existing MCQ engine, regression |
| `multiple_choice` | selection set | explicit all-or-nothing or reviewed partial rubric; no hidden guess penalty | new grader + academic tests |
| `numeric` | signed integer/decimal | strict parser, exact integer or reviewed absolute/relative tolerance per item; locale comma or dot normalization | deterministic test matrix |
| `rational` | whole, fraction or accepted decimal | exact normalized numerator/denominator using integer arithmetic, denominator ≠0, reduction/sign; optional decimal accepted **only** if mathematically exact in the item policy | deterministic equivalence tests |
| `fill_blank` | one/multiple fields | typed token/number/unit contract with declared aliases and blank-by-blank rubric | controlled inputs + tests |
| `match_pairs` | relation matching | complete key/map, unique/duplicate policies, reviewed partial credit | keyboard/mobile QA |
| `order_steps` | sequence | compare IDs; handle alternative valid orders **only if authored**; partial credit only reviewed | keyboard/mobile QA |
| `graph_select`/`plot_point` | graph or coordinate | declared coordinate space, granularity, rounding and tolerances; accessible non-drag alternative | visual + academic QA |
| `worked_steps` (later) | structured sequential fields | each step objectively gradable with independently reviewed key/rubric; **not an AI-based proof score** | restricted pilot |

**B. PAPER_WRITTEN** — notebook/paper solving with authored worked solution and stepwise rubric; optional learner self-rating is **not** system-verified mastery. Reserve for proofs, model selection with justification, multi-step reasoning, open explanations, diagrams, or tasks where a single final answer does not demonstrate required understanding.

Neither form implies a different bank of mathematical concepts. An exercise may have derived variants **only with new immutable version/item ID, parent ID, proven academic equivalence or reviewed adaptation**; do not replace old question stems in place or rewrite learner attempts.

## 2. Activities are NOT response modes

| Learner activity | Primary home | Response / feedback | Records |
| --- | --- | --- | --- |
| Learn **Core Card** | KNTT Grade → Chapter → Lesson → Core | brief independent micro-practice + optional teaching/hints | formative, by `card_id` |
| **Topic Practice** | Vertical Topic → Luyện tập | interactive, adjustable class/skill/difficulty where verified; immediate feedback and help | formative, by topic/skill |
| **Core Readiness** | KNTT/Topic → Tự kiểm tra (reviewed KNTT slice) | interactive, **NO** hint/tutor/answer until submit; coverage of already learned scope | separate readiness evidence |
| **Topic quick check** | Topic → Tự kiểm tra | post-submit independent check from reviewed eligible items | separate check evidence, not silently Core Readiness |
| **Kiểm tra tổng hợp** | Grade → mixed skills; or Topic → mixed difficulty | no AI/help while working, submitted then graded; blueprint/version/multiple topics | **new** assessment namespace, not Core mastery |
| **Bài tập tự luận** | one shared Written Library | PAPER_WRITTEN, solution + rubric after attempting | optional self-review only |
| **Bài mẫu tiêu biểu** | one shared examples view referring to canonical problem | worked example/learning material; optional linked task | no test evidence merely for opening |
| Entrance10 / Extension / Challenge / THPT-Bridge | placement overlay within relevant activity, not extra task type | both modes possible, grade-aware | no inherited Core Readiness credit |

**One Knowledge Graph — Two Learning Paths.** `learning_layer` (KNTT-Core, Core-Support, Entrance10, Challenge, THPT-Bridge), `cognitive_level` (M1–M4), `grade_placement`, `prerequisite_skills` and `response_type` are **orthogonal fields**. In particular, a Grade-9 entrance problem using Grade-7 prerequisites does **not** acquire Grade-7 KNTT placement. Never use `Core KNTT` as the visible heading of a separate practice mode.

## 3. Canonical per-topic learner presentation

**Bài học / Core theo chặng** (KNTT placement) stays in the class path and can be reached from topics through canonical Core cards.

**Luyện tập (chuyên đề):** one main interactive Practice Room. Explain exactly: “Chọn lớp và kỹ năng, trả lời trực tiếp. Em có thể mở gợi ý khi luyện.” Optional four cognitive-level selectors only for items with reliable level/grade tags. Offer **one unobtrusive link** “Bài cần trình bày trên giấy → Thư viện bài tập tự luận” filtered to validated skills/topic. No second `Core KNTT` curriculum or extra 30–40 question wall below Practice. Do not hide historical contents without an accessible legacy link.

**Tự kiểm tra:** single independent interactive start page with two modes *only where academically eligible*: (1) quick check for the learned slice; (2) composite multi-skill check with reviewed blueprint. Hide answers/hints/tutor until submit; clearly separate results from formative practice. Keep existing static paper exams accessible in **Written Library/Đề tự luyện** until each item is reviewed and safely migrated.

**Shared Written Library:** one canonical source for genuinely written proof/multi-step tasks; keep separate learner views “Bài tập tự luận” vs “Bài mẫu tiêu biểu”. All references use IDs, do not clone problems, answers, rubrics or provenance. Legacy topic paper sections must receive **reviewed classification**, not be silently deleted; representative Grade-6 arithmetic or Grade-7 recognition may become interactive, whereas geometric proofs and modeling justifications stay PAPER_WRITTEN.

**Learner labels:** “Bài học”, “Core theo chặng”, “Luyện tập”, “Tự kiểm tra”, “Bài tập tự luận”, “Bài mẫu tiêu biểu”; only show deeper editorial taxonomy behind optional “Giới thiệu” and in author/review reports. Keep contextual note “Ôn thi vào lớp 10 · tự chọn” for entrance items (not Grade-6 Core).

## 4. Response item schema — candidate, NOT automatically activated

```text
item_id (immutable), version, parent_item_id? (on conversion)
canonical_skill_ids[], curriculum_placements[] {framework, grade, chapter, lesson, verified_source}
prerequisite_skills[], topic_placements[], learning_layer, cognitive_level
activity_roles[] ("core_micro"|"practice"|"readiness"|"mixed_quiz"|"worked_example"|"written")
response_mode: "INTERACTIVE"|"PAPER_WRITTEN"
response_type (INTERACTIVE only), prompt/version/provenance
answer_contract {parser, normalization, correct_value, accepted_forms, rounding/tolerance, units, credit_policy}
feedback {wrong_reason, worked_explanation, hints (if allowed), remediation}
academic_review {status, packet, receipt, scoped_version}, eligibility {status, reason_codes}
attempt {attempt_id, item_id, item_version, activity_id, submitted_raw, parsed_value, feedback_outcome, response_type, started_at, submitted_at, grading_version}
```

**Safety and correctness of answer checking:** reject ambiguous parses rather than silently counting them wrong; detect zero denominator, overflow, NaN/Infinity, locale decimal ambiguity, units and significant figures when relevant; simplify fractions exactly; prohibit floating-point equality for rational math; never use regex/string replacement as proof of algebraic equivalence. Advanced symbolic equivalence needs deterministic validated algebra tooling and defined domain restrictions, NOT arbitrary LLM marking. For intermediate steps, return a reviewed “cần tự đối chiếu” result if no deterministic rubric exists. Do not credit a right guess as verified reasoning when reasoning itself is the learning objective.

**Record boundary:** existing `toan-thcs-practice-v1` and `toan-thcs-assessment-v1` retain semantics and histories. New response modes use **new versioned adapter/schema**, tested fixture snapshots, isolated localStorage namespace when needed; migration only by owner-approved plan. No learner identifier/answer key leaks into pre-submit page state.

## 5. Conversion gate (item by item, never batch guess)

`INVENTORIED → ELIGIBILITY_TRIAGE → ACADEMIC_REVIEW → PREVIEW_ONLY → REGRESSION_QA → OWNER_ACCEPTED → PUBLISHED`.

For each historical topic item: keep `source_path`, exact legacy anchor/item ID, current learner URL, topic/grade candidate, skill and learning layer (with evidence vs unknown distinguished), answer depth, desired response mode/type, destination, evidence provenance, prior attempts if applicable. Triage options:

- `REUSE_INTERACTIVE`: equivalent approved existing question already in bank; **reference**, do not add clone.
- `ADAPT_INTERACTIVE_REVIEW`: construct new item with accessible input and deterministic scoring; require independent academic review.
- `KEEP_WRITTEN_CANONICAL`: requires written reasoning; reuse source in Shared Written Library or stage a reviewed new item.
- `MOVE_TO_CHECK_REVIEW`: belongs in independent test; needs a scoped answer key and assessment blueprint.
- `KEEP_AS_ARCHIVE`: keep legacy route/source for traceability; hide from primary learner flow **only after** successful new path verification.

Owner must approve four representative topics **CĐ02, CĐ03, CĐ04, CĐ21** before broad rollout. CĐ22 stays THPT-Bridge (opt-in), CĐ24 modeling retains paper-worthy tasks, CĐ25 source exams and anchors keep distinct learning value. Academic NotebookLM review stays required for actual math/item changes; UX NotebookLM consultation remains **optional**. Human learner A2 observation remains required for learning-experience acceptance.

## 6. Acceptance criteria and rollout boundaries

1. Real topic pages still show an interactive Practice Room (including auto-injected loader, not merely Markdown markers); grade filters cannot misrepresent cross-grade banks.
2. No duplicate Core curriculum in Topic Practice; a link to the same `card_id` is acceptable.
3. No paper wall below practice in finalized UX **after** item-level disposition/legacy crosswalk is approved; no loss or unreachable old items during transition.
4. Readiness and mixed tests do not reveal answers before submit and do not merge histories/mastery.
5. Same source problem can appear on two paths by reference but not duplicated in multiple canonical stores.
6. Browser/keyboard/mobile checks, MathJax continuity, deep-link preservation and persistence regression gates PASS for exact tested versions.
7. Accurate counts, grade placement, exam provenance and human-friendly names, no unsupported “trending exam” claims.
8. Each phase has explicit `PASS`, `REVIEW_REQUIRED`, `BLOCKED`, `NOT_TESTED`; no global PASS from a partial audit.
