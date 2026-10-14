# MATH EXERCISE RECLASSIFICATION — R1 triage packet

**Source lock:** current public Math `main` on 2026-10-14. **Authority:** `math-exercise-presentation-placement-standard-v1-20261014.md`, Master Plan v1.2.1, Written Library Contract.  
**Status:** `SOURCE_TRIAGE_CANDIDATES_ONLY` — no new answers, answer options, grading, item placement or live routes approved.

## 1. Inventory scope and surprises

Run `node scripts/audit-exercise-placement-v1.js --json` from repository root to produce the reproducible 25-topic inventory. Interpret the output against **both** sources:

- The learner-visible Markdown `docs/kien-thuc/{topic}/bai-tap.md`.
- `practice-auto-loader.js`: adds Practice Engine on **22** additional topic slugs despite their Markdown having **no `data-practice-bank-v2` marker**. Some other topics (e.g. CĐ02, CĐ03) instantiate it directly.
- `docs/kien-thuc/{topic}/tu-kiem-tra.md` and referenced `assets/data/assessment/*.json`.
- Shared `written-exercise-library-v1.json` with **63** existing reviewed, independent `WX*` entries.

The learner-facing paper blocks in topic Practice, many labeled “Core KNTT”, “Core-Support”, “Entrance10”, “Challenge”, should **not** be mistaken for four separate user-facing activity types.

## 2. Representative triage matrix (not a mass conversion)

| Existing item or set | What it asks | Candidate destination | Candidate format | Gate / reason |
| --- | --- | --- | --- | --- |
| `02-G6-WR-01` | Evaluate `24-3·2²+18:3` | Topic Practice (G6) or linked Core micro | `numeric` | Review correct key, sign/decimal parsing; reuse equivalent existing source if available |
| `02-G6-WR-02` | Split 36 pens/48 notebooks into greatest identical sets | Topic Practice, worked explanation required | `numeric` (number of sets) plus reasoning help | Numeric success does **not** certify student understood gcd |
| `02-G6-WR-03` | `5/6 - 7/15` | Topic Practice | `rational` exact | Unit-test fraction equivalence; avoid 4-choice answer guessing |
| `02-G6-WR-04` | Percent of value | Topic Practice | `numeric` or `rational` | Grade placement and accepted units need checking |
| `02-M1`–`M4` | Mixed cross-grade old topic sheet | Item-by-item triage: Practice vs Written | mixed, not “bulk MCQ” | Legacy `02-Mx-yy` IDs remain; Grade-6 placement NOT inferred from page heading |
| `03-M1-01` | Build proportion from equal products | Core/Practice depending KNTT mapping | `match_pairs` or typed blanks | Several valid proportions; reject string equality with one canonical formula |
| `03-M1-02` | `x/12=5/8` | Topic Practice | `rational` | Exact answer; approved parsing required |
| `03-M2-03` | Work-rate inverse proportion | Topic Practice | `numeric` (days), reviewed units | Wrong reason distinguishes direct vs inverse proportionality |
| `03-M3-01` | Map scale: 7.2cm, 1:50,000 | Topic Practice | `numeric` with km unit | Decide official accepted equivalent unit policies |
| `03-M4` multi-context | Ratio / efficiency reasoning | Depending required explanation, `PAPER_WRITTEN` or structured-step | `worked_steps` future | No unsafe grading of multi-step reasoning |
| `04-WR-01` | Degree, coefficient and constant term | Core concept or Practice | `fill_blank` (3 keyed fields) | Independent placement and approved field rubric |
| `04-WR-02` | Collect like terms (polynomial) | Topic Practice | `fill_blank` structured coefficients, or PAPER | Symbolic expression equivalence cannot be judged by bare string compare |
| `04-WR-03` | Algebraic subtraction with signs | Topic Practice or PAPER | structured coefficients / handwritten | Preserve authored sign-mistake explanation |
| `04-CH-01` | Prove expression independent of variable | Shared Written Library | PAPER_WRITTEN | Explicit justification is assessed, not only final constant |
| `21-WR-01` | Qualitative vs numeric data examples | Core or Practice | `match_pairs` | Typical fast concept check; no need stand-alone paper section |
| `21-WR-02` | Bar-chart comparison | Topic Practice | `numeric` | Evidence from chart vs arithmetic distinction |
| `21-M1-01` | Definition of frequency | Core or Practice | `single_choice` or `fill_blank` | Reuse reviewed equivalent item rather than create near-clone |
| `21-M2-01` | Frequency table for a data set | Topic Practice or paper | `match_pairs` / structured table or PAPER | More than one cell; validate all data without order assumptions |
| `21-M3`–`M4` | Evaluate bias/misleading visuals | Shared Written Library where explanation required | PAPER_WRITTEN | Distinguish identification vs evidence-based argument |
| `21` static paper check | Mixed-grade ten-item self-test | Review into interactive per-grade check + genuinely written subset | mixed | Current CĐ21 readiness has 16 items Grades 6–9; no Grade-6 mastery inferred |
| `22-M1`–`M4` | THPT-Bridge | Leave optional, not THCS Core | later reviewed interactive or paper | No quiet promotion to Grade-9 compulsory Core |
| `24` modelling paper tasks | Select variables/conditions/formulate model/explain | Shared Written Library or composite paper task | PAPER_WRITTEN, possibly staged input later | Final numeric answer alone insufficient |
| `25` entrance capstone | Full written solutions and exam tasks | CĐ25 exam library/Shared Written Library | PAPER_WRITTEN | Self-scored marks never Core Readiness |

## 3. Release blockers found in current source

- Topic CĐ03 learner text describes “10 questions”, assessment JSON has **11**.
- Topic CĐ21 learner text describes “14 questions”, assessment JSON has **16** and mixes **G6=5, G7=4, G8=3, G9=4** in one fixed form. Use class scoping before claiming grade readiness.
- Topic CĐ23 assessment contains **12** items across **G6=4, G7=4, G8=4**. Do not interpret the total as a specific lower-grade skill verdict.
- Current `assessment-engine-v1.js` uses all `data.items` and shuffles **option order only**; there is no validated random test assembly/blueprint. A true mixed quiz needs its own source and grading contract.
- CĐ01/CĐ22/CĐ24/CĐ25 have paper-based `tu-kiem-tra.md`; do not misrepresent them as automatically graded. CĐ22 retains THPT-Bridge.
- CĐ20 cross-grade Core Micro metadata has missing source Core card relationships; see Draft PR #442. Do not silently convert/select unlinked items.
- Some historical practice questions/skills predate KNTT grade placement; independent `Core` heading is **not grade placement evidence**.

## 4. Reviewer action packet

For each proposed item conversion, reviewer must see: legacy `source_path#heading` and text, linked canonical Core/Practice/WX item IDs, official KNTT grade/lesson position, expected reasoning, approved input type, exact answer policy including units and equivalence, worked feedback/misconceptions, and target activity. Return `KEEP`, `REUSE`, `ADAPT_AND_REVIEW`, `RELOCATE_TO_WRITTEN`, `RELOCATE_TO_CHECK` or `INSUFFICIENT_EVIDENCE`. No bulk PASS or “every simple-looking question is MCQ”.

**Stop rule:** no source answer/content import, no replacement of already attempted version, no storage migration, no activation before academic acceptance, CI and owner UX review.

## 5. Proposed UX pilot sequence

1. CĐ02, CĐ03, CĐ04, CĐ21: preserve existing deep links and legacy written sections while presenting **one labeled interactive Practice** up front and one clear reference to Shared Written Library. A temporary disclosure for older blocks is allowed after visual QA; do not remove academic content.
2. Pilot examples of `numeric` and `rational` scoring in **isolated pure code tests first**, not production user flows, then academic review for real item prompts.
3. Unify assessment descriptions and scope only after identifying the correct class-specific reviewed items, not by updating visible counts alone. Mixed quiz source audit PR #442 remains independent.
4. Collect real learner A2 observations; NotebookLM UX ideas optional; NotebookLM math review mandatory for any altered question/grader semantics.
