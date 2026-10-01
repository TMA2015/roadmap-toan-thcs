# SOURCE PACKET — Written Exercise Library Expansion B7 R1

Packet ID: `MATH-WRITTEN-LIBRARY-EXPANSION-B7-R1-20261001`

## Source lock

Review **only** the material in this packet.

- Base production checkpoint after B6 owner-QA closure: `0bb3ee85e6bb57a7ab86dce88bf25eeee16a677d`
- Review branch: `review/written-library-expansion-b7-r1-20261001`
- Candidate JSON: `review-packets/written-exercise-library/44_WRITTEN_EXPANSION_B7_CANDIDATE.json`
  - blob: `9b27714fdb9f96c5f4512759c6e9766629838dc9`
- Design contract inherited unchanged from the locked B6 source packet
  - B6 packet blob: `6c1cc0d4516382aedf52759ab6827baf24f493f7`
- Production catalog blob: `ba73ae9fd0d28a60acbafa788ac5142e2cb68439`
- CĐ21 Learning Workspace blob: `2812085ab0dd0800196eee7d44562f2ced4294e1`
- CĐ21 Core Readiness blob: `e20c5d8bddb10c16db26cdfd48e6915044df4b00`
- CĐ21 written-practice source blob: `a07a4ec39f959aab974e6fd6528f91cf0874f2cd`

The owner-QA closure branch inherited by this review branch changes collaboration documentation only. It does not change the production exercise catalog or CĐ21 academic sources above.

## Scope

Exactly 2 **review-only** candidate exercises for **CT21**:

1. `WX21-STA-001` — `CORE_BASE`
2. `WX21-STA-002` — `CORE_APPLY`

Selection rationale is pedagogical, not an exam-frequency claim:
- `WX21-STA-001` checks whether a learner can convert a table into a correctly labelled/scaled bar chart and then write a conclusion limited to the supplied data;
- `WX21-STA-002` checks comparison of two data series, percentage increase, and the crucial distinction between a descriptive observation and an unsupported causal explanation.

**Important:** production remains **42 items / 21 topics**. This packet does not authorize publication, deployment, Readiness/mastery credit, canonical-evidence expansion, or G3.

CĐ22 remains **THPT-Bridge** and CĐ25 remains **Entrance10/tổng hợp**; neither is forced into this normal Core append.

## CT21 boundary

The locked CĐ21 Learning Workspace defines five KNTT-Core cards with these skill IDs:
- `du-lieu-phan-loai`
- `thu-thap-du-lieu`
- `doc-bieu-do-cot`
- `doc-bieu-do-cot-kep`
- `doc-bieu-do-doan-thang`
- `bieu-do-quat-tron`
- `chon-bieu-do`
- `chuyen-bang-bieu-do`
- `nhan-xet-du-lieu`

The same workspace explicitly keeps **bảng tần số / tần suất / chất lượng dữ liệu** as a Core-Support extension and **thống kê nhiều bước / dữ liệu ghép nhóm** as Entrance10. Those extension concepts must not be promoted into these B7 Core items merely because the broad CĐ21 lesson page mentions them.

CĐ22 concepts such as mean/median/other characteristic measures are outside this B7 scope.

## Review boundary

For EACH item review:
- mathematical/statistical correctness;
- wording, units, denominator choice and exact numerical results;
- exact skill IDs and KNTT-Core boundary against the locked CĐ21 Learning Workspace and Readiness source;
- step-by-step solution logic and final conclusion;
- rubric alignment and totals;
- common mistakes/remediation;
- duplicate/near-duplicate risk against the locked production catalog and CĐ21 written-practice source;
- CORE_BASE vs CORE_APPLY classification;
- paper-first self-study suitability.

Special checks:
- `WX21-STA-001`: bar chart must be appropriate for comparing categories; axes/unit/scale and bar values must be internally consistent. The conclusion must stay descriptive and must not invent preference/causality.
- `WX21-STA-002`: changes must be +6, +5, +8, 0; the largest absolute increase is CT/Khối 8; percentage increase must use the **initial value 16** as denominator, giving 50%. The data do not establish why participation changed.
- Do not add frequency tables, relative-frequency curriculum, grouped data, averages/medians, Entrance10, or THPT-Bridge content to make the items appear more advanced.

## Architecture checks

ARCH_1 — exactly 2 candidates, both CT21.  
ARCH_2 — CT21 has exactly one CORE_BASE and one CORE_APPLY candidate.  
ARCH_3 — both remain review-only and do not alter the production catalog (42 items / 21 topics).  
ARCH_4 — self-marking only; no automatic Readiness/mastery credit.  
ARCH_5 — stable unique exercise IDs; no collision with the current production catalog.  
ARCH_6 — every candidate skill ID/layer is supported by the locked CĐ21 Learning Workspace/Readiness sources.  
ARCH_7 — every item contains problem, stepwise solution, rubric, common mistakes, remediation, and source refs.  
ARCH_8 — no unsupported exam-frequency claim is used to justify inclusion.  
ARCH_9 — B7 stays inside the five-card CT21 KNTT-Core boundary; Core-Support frequency/tần suất, Entrance10 grouped data, CT22 characteristic measures and CT25 exam lanes are not promoted into the items.  
ARCH_10 — written conclusions distinguish observed data from unsupported causes; percentage comparisons use the correct base value.

## Design contract

# Written Exercise Library v1 — design contract

Date: 2026-10-01

## Purpose

Create a **paper-first written exercise library** that closes the gap between:
- the theoretical "Các dạng bài" sections in each topic;
- skill-oriented interactive Practice;
- and the need to write complete mathematical solutions.

The library is not an online written-answer grader. A learner solves on paper, then deliberately opens the step-by-step solution and rubric to self-check.

## Product role

Target learning loop:

`Dạng bài → đọc đề → tự giải trên giấy → mở hướng dẫn từng bước → đối chiếu rubric → nhận diện lỗi → quay lại Core/Practice nếu cần`

This library complements, rather than replaces:
- Core micro-practice;
- Practice Room;
- Core Readiness;
- Topic 25 anchor problems.

It must not contribute automatic Readiness/mastery credit in v1.

## Coverage rule

For each published problem type, start small:

- **1 Core Base problem** when one problem is enough to demonstrate the full method;
- add **1 Core Apply problem** only when a second level is pedagogically useful;
- optional `Extension/Entrance10` items are separate and never required to complete Core.

Do not create large banks merely to increase counts. Expansion is append-only and can happen gradually.

## Item contract

Every published written exercise must have:

- immutable `exercise_id`;
- `topic_id`;
- stable `problem_type_id` / "dạng bài";
- `title`;
- learning layer: `KNTT-Core`, `Core-Support`, `Entrance10`, `Specialized-Challenge`, or `THPT-Bridge`;
- level: `CORE_BASE`, `CORE_APPLY`, or an explicit extension level;
- assessed/related skill tags;
- prerequisites when relevant;
- complete problem statement;
- estimated time;
- optional exact diagram reference;
- step-by-step solution;
- scoring rubric by step;
- common mistakes;
- remediation links back to the relevant topic/card/skill;
- academic review/provenance metadata.

A problem may use several skills, but must have one primary problem type so that the library does not become another ambiguous tag bank.

## UI contract

A library item is shown as:

1. **Đề bài** — fully visible.
2. **Tự làm trên giấy trước** reminder.
3. Collapsible **Hướng dẫn giải từng bước**.
4. Collapsible **Rubric tự chấm**.
5. **Lỗi thường gặp**.
6. Links: **Ôn lại kiến thức / Luyện skill liên quan / Bài cùng dạng**.

Opening or closing solution/rubric panels is presentation-only. No automatic score is generated from self-marking.

## Library navigation

The future central page should support filtering by:
- topic;
- problem type;
- learning layer;
- level;
- optionally skill.

Each topic's current "Các dạng bài" section can later deep-link to the matching filtered library/type rather than trying to embed every worked problem inside the theory page.

## Relationship to Topic 25 anchor library

The existing Topic 25 anchor catalog is valuable prior art and must not be duplicated or renumbered.

General written-library v1 should support:
- `exercise_kind: standard | anchor`;
- optional `legacy_anchor_ref` such as `A25-004`;
- direct links to existing deep anchor pages.

Existing A25 IDs remain immutable. If an anchor is surfaced in the general library, the catalog points to it rather than copying the mathematical content into a second source of truth.

## Academic QA

Before publication, each item must be checked for:
- mathematical correctness;
- sufficient hypotheses/conditions;
- exact final conclusion;
- solution-step logic;
- rubric alignment with the solution;
- level/layer boundary;
- duplicate/near-duplicate structure against existing items.

Geometry items additionally require a verifiable diagram when a figure materially supports the problem. The diagram does not create extra hypotheses.

## Non-goals for v1

Not required:
- typing long solutions into the website;
- handwriting/photo upload;
- AI grading of written work;
- automatic self-score persistence;
- mastery/readiness credit from rubric self-marking;
- a large library on day one.

## Recommended pilot

Validate the system with three different mathematical modes before mass expansion:

- **CĐ07 — Phân thức đại số:** 2 written items;
- **CĐ14 — Tam giác:** 2 written/proof items;
- **CĐ24 — Bài toán thực tế:** 2 modelling items.

Six high-quality items are enough to test the schema, UI, rubric clarity and learner workflow.

After the pilot, expand topic by topic, prioritizing the problem types already listed in "Các dạng bài" and the gaps that interactive MCQ cannot observe well.

## Definition of pilot success

A learner can:
1. find a problem from a topic/problem type;
2. understand what must be produced on paper;
3. attempt it without seeing the solution;
4. reveal the solution progressively;
5. use the rubric to identify which step is missing/wrong;
6. navigate back to the relevant learning/practice material.

No account/profile/cloud dependency is required.

## Current production catalog — duplicate/ID reference

```json
{
  "schema_version": "1.0.0",
  "catalog_id": "MATH-WRITTEN-EXERCISE-LIBRARY-V1",
  "snapshot_date": "2026-10-01",
  "status": "ACTIVE_APPEND_ONLY",
  "auto_readiness_credit": false,
  "self_marking_only": true,
  "pilot_scope": {
    "topics": [
      "CT07",
      "CT14",
      "CT24"
    ],
    "exercise_count": 6,
    "rule": "2 items per pilot topic: one CORE_BASE and one CORE_APPLY"
  },
  "exercises": [
    {
      "exercise_id": "WX07-RAT-001",
      "exercise_kind": "standard",
      "topic_id": "CT07",
      "topic_slug": "07-phan-thuc-dai-so",
      "topic_title": "Phân thức đại số",
      "problem_type_id": "rat-simplify-domain",
      "problem_type_title": "Rút gọn phân thức và giữ điều kiện xác định",
      "title": "Rút gọn nhưng không làm mất điều kiện ban đầu",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        8
      ],
      "skills": [
        "dieu-kien-xac-dinh",
        "phan-tich-da-thuc",
        "rut-gon-phan-thuc"
      ],
      "prerequisites": [
        "hang-dang-thuc",
        "phan-tich-da-thuc"
      ],
      "estimated_minutes": 8,
      "problem_markdown": "Cho\n\n$$A=\\frac{x^2-9}{x^2-3x}.$$\n\n1. Tìm điều kiện xác định của $A$.\n2. Rút gọn $A$.\n3. Viết kết quả cuối cùng kèm điều kiện của $x$.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Điều kiện xác định",
          "content_markdown": "Mẫu số là $x^2-3x=x(x-3)$. Vì mẫu phải khác $0$ nên\n\n$$x\\ne0,\\qquad x\\ne3.$$"
        },
        {
          "step_id": "S2",
          "title": "Phân tích tử và mẫu",
          "content_markdown": "Dùng hiệu hai bình phương:\n\n$$x^2-9=(x-3)(x+3),$$\n\nvà\n\n$$x^2-3x=x(x-3).$$"
        },
        {
          "step_id": "S3",
          "title": "Rút gọn",
          "content_markdown": "Trên miền xác định đã nêu,\n\n$$A=\\frac{(x-3)(x+3)}{x(x-3)}=\\frac{x+3}{x}.$$"
        },
        {
          "step_id": "S4",
          "title": "Kết luận",
          "content_markdown": "Vậy\n\n$$A=\\frac{x+3}{x},\\qquad x\\ne0,3.$$\n\nĐiều kiện $x\\ne3$ vẫn phải giữ dù nhân tử $x-3$ đã được rút gọn."
        }
      ],
      "rubric": [
        {
          "criterion": "Xác định đúng mẫu và điều kiện $x\\ne0,3$.",
          "points": 1
        },
        {
          "criterion": "Phân tích đúng $x^2-9$ và $x^2-3x$ thành nhân tử.",
          "points": 1
        },
        {
          "criterion": "Rút gọn đúng về $\\frac{x+3}{x}$.",
          "points": 1
        },
        {
          "criterion": "Kết luận giữ đủ điều kiện ban đầu $x\\ne0,3$.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Chỉ ghi $x\\ne0$ sau khi rút gọn và quên mất $x\\ne3$.",
        "Triệt tiêu $x-3$ trước khi nêu điều kiện xác định.",
        "Phân tích sai $x^2-3x$ thành $x(x+3)$."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ07 – Core theo chặng",
          "href": "../kien-thuc/07-phan-thuc-dai-so/core/"
        },
        {
          "label": "Luyện thêm CĐ07",
          "href": "../kien-thuc/07-phan-thuc-dai-so/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md#07-WR-07",
        "docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md#07-WR-11"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-PILOT-R1-20261001",
        "receipt": "review-packets/written-exercise-library/04_NOTEBOOKLM_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX07-RAT-002",
      "exercise_kind": "standard",
      "topic_id": "CT07",
      "topic_slug": "07-phan-thuc-dai-so",
      "topic_title": "Phân thức đại số",
      "problem_type_id": "rat-multi-operation",
      "problem_type_title": "Biểu thức phân thức nhiều phép tính",
      "title": "Quy đồng hợp lý và giữ điều kiện xuyên suốt",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        8
      ],
      "skills": [
        "dieu-kien-xac-dinh",
        "quy-dong-mau-thuc",
        "cong-tru-phan-thuc",
        "rut-gon-phan-thuc"
      ],
      "prerequisites": [
        "hang-dang-thuc",
        "phan-tich-da-thuc"
      ],
      "estimated_minutes": 12,
      "problem_markdown": "Rút gọn biểu thức\n\n$$A=\\frac{x}{x-1}-\\frac1{x+1}-\\frac2{x^2-1}.$$\n\nYêu cầu: ghi điều kiện xác định trước khi biến đổi và nêu kết quả cuối cùng.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Điều kiện xác định",
          "content_markdown": "Vì $x^2-1=(x-1)(x+1)$ nên các mẫu khác $0$ khi\n\n$$x\\ne1,\\qquad x\\ne-1.$$"
        },
        {
          "step_id": "S2",
          "title": "Chọn mẫu thức chung",
          "content_markdown": "Mẫu thức chung thuận tiện là $(x-1)(x+1)=x^2-1$."
        },
        {
          "step_id": "S3",
          "title": "Quy đồng",
          "content_markdown": "Ta có\n\n$$A=\\frac{x(x+1)}{(x-1)(x+1)}-\\frac{x-1}{(x-1)(x+1)}-\\frac2{(x-1)(x+1)}.$$"
        },
        {
          "step_id": "S4",
          "title": "Thu gọn tử",
          "content_markdown": "Tử số là\n\n$$x(x+1)-(x-1)-2=x^2+x-x+1-2=x^2-1.$$"
        },
        {
          "step_id": "S5",
          "title": "Kết luận",
          "content_markdown": "Do đó\n\n$$A=\\frac{x^2-1}{x^2-1}=1,\\qquad x\\ne\\pm1.$$"
        }
      ],
      "rubric": [
        {
          "criterion": "Ghi đúng điều kiện $x\\ne\\pm1$.",
          "points": 1
        },
        {
          "criterion": "Chọn đúng mẫu thức chung $(x-1)(x+1)$.",
          "points": 1
        },
        {
          "criterion": "Quy đồng đúng ba phân thức.",
          "points": 1
        },
        {
          "criterion": "Thu gọn tử số đúng về $x^2-1$.",
          "points": 1
        },
        {
          "criterion": "Kết luận $A=1$ và giữ điều kiện $x\\ne\\pm1$.",
          "points": 1
        }
      ],
      "rubric_total": 5,
      "common_mistakes": [
        "Quy đồng sai dấu ở phân thức thứ hai vì đang có dấu trừ phía trước.",
        "Quên phân tích $x^2-1=(x-1)(x+1)$ trước khi chọn mẫu thức chung.",
        "Kết luận $A=1$ cho mọi $x$ và bỏ mất $x=\\pm1$."
      ],
      "remediation_links": [
        {
          "label": "Ôn quy đồng và phép tính phân thức",
          "href": "../kien-thuc/07-phan-thuc-dai-so/core/"
        },
        {
          "label": "Practice Room CĐ07",
          "href": "../kien-thuc/07-phan-thuc-dai-so/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md#07-WR-10"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-PILOT-R1-20261001",
        "receipt": "review-packets/written-exercise-library/04_NOTEBOOKLM_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX14-TRI-001",
      "exercise_kind": "standard",
      "topic_id": "CT14",
      "topic_slug": "14-tam-giac",
      "topic_title": "Tam giác",
      "problem_type_id": "tri-congruence-midpoint-altitude",
      "problem_type_title": "Dùng tam giác bằng nhau để chứng minh đường cao",
      "title": "Từ trung điểm đến đường cao trong tam giác cân",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        7
      ],
      "skills": [
        "tam-giac-can",
        "tam-giac-bang-nhau-ccc",
        "trung-diem",
        "vuong-goc"
      ],
      "prerequisites": [
        "tong-goc-tam-giac",
        "hai-tam-giac-bang-nhau"
      ],
      "estimated_minutes": 12,
      "problem_markdown": "Cho tam giác $ABC$ cân tại $A$ ($AB=AC$). Gọi $M$ là trung điểm của $BC$.\n\n1. Chứng minh $\\triangle ABM=\\triangle ACM$.\n2. Suy ra $AM\\perp BC$.",
      "figure_uri": "../assets/geometry/written-library/wx14-tri-001.svg",
      "figure_alt": "Tam giác ABC cân tại A, M là trung điểm của BC và đoạn AM được nối.",
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Xét hai tam giác phù hợp",
          "content_markdown": "Xét $\\triangle ABM$ và $\\triangle ACM$."
        },
        {
          "step_id": "S2",
          "title": "Chỉ ra ba cặp cạnh bằng nhau",
          "content_markdown": "Ta có $AB=AC$ (giả thiết), $BM=CM$ (vì $M$ là trung điểm của $BC$), và $AM$ là cạnh chung."
        },
        {
          "step_id": "S3",
          "title": "Kết luận hai tam giác bằng nhau",
          "content_markdown": "Suy ra\n\n$$\\triangle ABM=\\triangle ACM$$\n\ntheo trường hợp c.c.c."
        },
        {
          "step_id": "S4",
          "title": "Suy ra hai góc tại M bằng nhau",
          "content_markdown": "Từ hai tam giác bằng nhau,\n\n$$\\angle BMA=\\angle AMC.$$"
        },
        {
          "step_id": "S5",
          "title": "Dùng tính thẳng hàng để kết luận vuông góc",
          "content_markdown": "Vì $B,M,C$ thẳng hàng nên $\\angle BMA+\\angle AMC=180^\\circ$. Hai góc này lại bằng nhau, do đó mỗi góc bằng $90^\\circ$. Vậy $AM\\perp BC$."
        }
      ],
      "rubric": [
        {
          "criterion": "Chọn đúng hai tam giác $ABM$ và $ACM$.",
          "points": 1
        },
        {
          "criterion": "Nêu đủ $AB=AC$, $BM=CM$, $AM$ chung.",
          "points": 1
        },
        {
          "criterion": "Kết luận hai tam giác bằng nhau theo c.c.c.",
          "points": 1
        },
        {
          "criterion": "Suy ra đúng $\\angle BMA=\\angle AMC$.",
          "points": 1
        },
        {
          "criterion": "Dùng $B,M,C$ thẳng hàng để kết luận mỗi góc $90^\\circ$ và $AM\\perp BC$.",
          "points": 1
        }
      ],
      "rubric_total": 5,
      "common_mistakes": [
        "Kết luận ngay $AM\\perp BC$ chỉ vì hình vẽ trông đối xứng.",
        "Quên nêu $AM$ là cạnh chung khi dùng c.c.c.",
        "Có hai góc bằng nhau nhưng không giải thích vì sao tổng của chúng bằng $180^\\circ$."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ14 – Core theo chặng",
          "href": "../kien-thuc/14-tam-giac/core/"
        },
        {
          "label": "Luyện tam giác bằng nhau",
          "href": "../kien-thuc/14-tam-giac/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/14-tam-giac/bai-tap.md#14-WR-08",
        "docs/kien-thuc/14-tam-giac/bai-tap.md#14-WR-09"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-PILOT-R1-20261001",
        "receipt": "review-packets/written-exercise-library/04_NOTEBOOKLM_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX14-TRI-002",
      "exercise_kind": "standard",
      "topic_id": "CT14",
      "topic_slug": "14-tam-giac",
      "topic_title": "Tam giác",
      "problem_type_id": "tri-congruence-corresponding-segment",
      "problem_type_title": "Chứng minh hai đoạn bằng nhau bằng c.g.c",
      "title": "Chọn đúng cặp tam giác để tạo đoạn cần chứng minh",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        7
      ],
      "skills": [
        "tam-giac-can",
        "tam-giac-bang-nhau-cgc",
        "tuong-ung-tam-giac"
      ],
      "prerequisites": [
        "hai-tam-giac-bang-nhau",
        "goc-xen-giua"
      ],
      "estimated_minutes": 15,
      "problem_markdown": "Cho tam giác $ABC$ cân tại $A$ ($AB=AC$). Điểm $D$ thuộc đoạn $AB$, điểm $E$ thuộc đoạn $AC$ và $AD=AE$. Chứng minh\n\n$$BE=CD.$$",
      "figure_uri": "../assets/geometry/written-library/wx14-tri-002.svg",
      "figure_alt": "Tam giác ABC cân tại A, D nằm trên AB, E nằm trên AC, có các đoạn BE và CD.",
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Nhìn từ mục tiêu",
          "content_markdown": "Muốn chứng minh $BE=CD$, ta tìm hai tam giác chứa lần lượt hai đoạn này. Chọn $\\triangle ABE$ và $\\triangle ACD$."
        },
        {
          "step_id": "S2",
          "title": "Ghép hai cặp cạnh",
          "content_markdown": "Theo giả thiết, $AB=AC$ và $AE=AD$."
        },
        {
          "step_id": "S3",
          "title": "Ghép góc xen giữa",
          "content_markdown": "Vì $E$ nằm trên $AC$ và $D$ nằm trên $AB$ nên\n\n$$\\angle BAE=\\angle CAD=\\angle BAC.$$"
        },
        {
          "step_id": "S4",
          "title": "Kết luận hai tam giác bằng nhau",
          "content_markdown": "Suy ra\n\n$$\\triangle ABE=\\triangle ACD$$\n\ntheo trường hợp c.g.c., với sự tương ứng $B\\leftrightarrow C$ và $E\\leftrightarrow D$."
        },
        {
          "step_id": "S5",
          "title": "Suy ra đoạn tương ứng",
          "content_markdown": "Hai cạnh tương ứng $BE$ và $CD$ bằng nhau. Vậy $BE=CD$."
        }
      ],
      "rubric": [
        {
          "criterion": "Chọn được hai tam giác $ABE$ và $ACD$.",
          "points": 1
        },
        {
          "criterion": "Nêu đúng hai cặp cạnh $AB=AC$ và $AE=AD$.",
          "points": 1
        },
        {
          "criterion": "Giải thích đúng $\\angle BAE=\\angle CAD$.",
          "points": 1
        },
        {
          "criterion": "Kết luận hai tam giác bằng nhau theo c.g.c. với đúng thứ tự tương ứng.",
          "points": 1
        },
        {
          "criterion": "Suy ra đúng $BE=CD$.",
          "points": 1
        }
      ],
      "rubric_total": 5,
      "common_mistakes": [
        "Chọn hai tam giác không chứa đồng thời hai đoạn $BE$ và $CD$.",
        "Dùng c.g.c. nhưng không kiểm tra góc đã dùng có nằm xen giữa hai cặp cạnh đã biết hay không.",
        "Viết sai thứ tự tương ứng của hai tam giác nên suy ra sai cặp cạnh."
      ],
      "remediation_links": [
        {
          "label": "Ôn trường hợp c.g.c.",
          "href": "../kien-thuc/14-tam-giac/core/"
        },
        {
          "label": "Practice Room CĐ14",
          "href": "../kien-thuc/14-tam-giac/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/14-tam-giac/bai-tap.md#14-WR-09",
        "docs/kien-thuc/14-tam-giac/bai-tap.md#14-ENT-01"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-PILOT-R1-20261001",
        "receipt": "review-packets/written-exercise-library/04_NOTEBOOKLM_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX24-MOD-001",
      "exercise_kind": "standard",
      "topic_id": "CT24",
      "topic_slug": "24-bai-toan-thuc-te",
      "topic_title": "Bài toán thực tế",
      "problem_type_id": "modelling-motion-one-variable",
      "problem_type_title": "Mô hình hóa chuyển động bằng một ẩn",
      "title": "Đến sớm hơn 36 phút – từ lời văn đến phương trình",
      "learning_layer": "Core-Support",
      "level": "CORE_BASE",
      "grade_overlay": [
        8,
        9
      ],
      "skills": [
        "dat-an-dieu-kien",
        "chuyen-dong",
        "lap-phuong-trinh",
        "kiem-tra-nghiem",
        "ket-luan-thuc-te"
      ],
      "prerequisites": [
        "phuong-trinh",
        "doi-don-vi-thoi-gian"
      ],
      "estimated_minutes": 15,
      "problem_markdown": "Một người dự định đi quãng đường $120\\,\\text{km}$ với vận tốc không đổi. Thực tế người đó tăng vận tốc thêm $10\\,\\text{km/h}$ nên đến sớm hơn $36$ phút.\n\nTìm vận tốc dự định ban đầu.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Đặt ẩn và điều kiện",
          "content_markdown": "Gọi vận tốc dự định là $x\\,(\\text{km/h})$, điều kiện $x>0$. Khi đó vận tốc thực tế là $x+10$."
        },
        {
          "step_id": "S2",
          "title": "Đổi đơn vị",
          "content_markdown": "Ta có $36$ phút $=0{,}6$ giờ."
        },
        {
          "step_id": "S3",
          "title": "Biểu diễn thời gian",
          "content_markdown": "Thời gian dự định là $\\frac{120}{x}$ giờ; thời gian thực tế là $\\frac{120}{x+10}$ giờ."
        },
        {
          "step_id": "S4",
          "title": "Lập phương trình",
          "content_markdown": "Vì thực tế đến sớm $0{,}6$ giờ,\n\n$$\\frac{120}{x}-\\frac{120}{x+10}=0{,}6.$$"
        },
        {
          "step_id": "S5",
          "title": "Giải phương trình",
          "content_markdown": "Nhân với $x(x+10)$:\n\n$$120(x+10)-120x=0{,}6x(x+10).$$\n\nSuy ra\n\n$$x^2+10x-2000=0,$$\n\nnên $x=40$ hoặc $x=-50$."
        },
        {
          "step_id": "S6",
          "title": "Đối chiếu điều kiện và kiểm tra",
          "content_markdown": "Loại $x=-50$ vì $x>0$. Với $x=40$, thời gian dự định là $3$ giờ, thực tế là $2{,}4$ giờ; chênh lệch đúng $0{,}6$ giờ."
        },
        {
          "step_id": "S7",
          "title": "Kết luận",
          "content_markdown": "Vận tốc dự định ban đầu là\n\n$$40\\,\\text{km/h}.$$"
        }
      ],
      "rubric": [
        {
          "criterion": "Đặt ẩn đúng và ghi điều kiện $x>0$.",
          "points": 1
        },
        {
          "criterion": "Đổi đúng $36$ phút thành $0{,}6$ giờ.",
          "points": 1
        },
        {
          "criterion": "Biểu diễn đúng hai thời gian.",
          "points": 1
        },
        {
          "criterion": "Lập đúng phương trình chênh lệch thời gian.",
          "points": 1
        },
        {
          "criterion": "Giải phương trình đúng và tìm được hai nghiệm đại số.",
          "points": 1
        },
        {
          "criterion": "Loại nghiệm âm, kiểm tra và kết luận $40\\,\\text{km/h}$.",
          "points": 1
        }
      ],
      "rubric_total": 6,
      "common_mistakes": [
        "Dùng $36$ trực tiếp trong phương trình có đơn vị giờ.",
        "Viết sai chiều chênh lệch thời gian: thực tế phải ít hơn dự định.",
        "Nhận cả nghiệm âm mà không đối chiếu ý nghĩa vận tốc."
      ],
      "remediation_links": [
        {
          "label": "Ôn quy trình mô hình hóa CĐ24",
          "href": "../kien-thuc/24-bai-toan-thuc-te/core/"
        },
        {
          "label": "Luyện thêm bài toán chuyển động",
          "href": "../kien-thuc/24-bai-toan-thuc-te/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/24-bai-toan-thuc-te/bai-tap.md#24-M3-02"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-PILOT-R1-20261001",
        "receipt": "review-packets/written-exercise-library/04_NOTEBOOKLM_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX24-MOD-002",
      "exercise_kind": "standard",
      "topic_id": "CT24",
      "topic_slug": "24-bai-toan-thuc-te",
      "topic_title": "Bài toán thực tế",
      "problem_type_id": "modelling-ticket-system",
      "problem_type_title": "Mô hình hóa bài toán vé bằng hệ phương trình",
      "title": "Hai loại vé – lập hệ, giải và kiểm tra ngược",
      "learning_layer": "Core-Support",
      "level": "CORE_APPLY",
      "grade_overlay": [
        9
      ],
      "skills": [
        "dat-an-dieu-kien",
        "lap-he-phuong-trinh",
        "giai-he",
        "kiem-tra-nghiem",
        "ket-luan-thuc-te"
      ],
      "prerequisites": [
        "he-phuong-trinh",
        "mo-hinh-hoa"
      ],
      "estimated_minutes": 15,
      "problem_markdown": "Một rạp bán $120$ vé gồm vé người lớn giá $80\\,000$ đồng và vé trẻ em giá $50\\,000$ đồng. Tổng số tiền thu được là $8\\,100\\,000$ đồng.\n\nTìm số vé mỗi loại.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Đặt ẩn",
          "content_markdown": "Gọi $x$ là số vé người lớn, $y$ là số vé trẻ em. Điều kiện $x,y$ là các số nguyên không âm."
        },
        {
          "step_id": "S2",
          "title": "Lập phương trình theo tổng số vé",
          "content_markdown": "Tổng cộng có $120$ vé nên\n\n$$x+y=120.$$"
        },
        {
          "step_id": "S3",
          "title": "Lập phương trình theo doanh thu",
          "content_markdown": "Đơn vị nghìn đồng giúp biểu thức gọn hơn:\n\n$$80x+50y=8100.$$"
        },
        {
          "step_id": "S4",
          "title": "Giải hệ",
          "content_markdown": "Từ $y=120-x$, thay vào phương trình doanh thu:\n\n$$80x+50(120-x)=8100.$$\n\nSuy ra $30x=2100$, nên $x=70$ và $y=50$."
        },
        {
          "step_id": "S5",
          "title": "Kiểm tra ngược",
          "content_markdown": "Tổng vé: $70+50=120$. Doanh thu:\n\n$$70\\cdot80\\,000+50\\cdot50\\,000=8\\,100\\,000.$$"
        },
        {
          "step_id": "S6",
          "title": "Kết luận",
          "content_markdown": "Rạp đã bán $70$ vé người lớn và $50$ vé trẻ em."
        }
      ],
      "rubric": [
        {
          "criterion": "Đặt đúng hai ẩn và nêu điều kiện phù hợp.",
          "points": 1
        },
        {
          "criterion": "Lập đúng phương trình $x+y=120$.",
          "points": 1
        },
        {
          "criterion": "Lập đúng phương trình doanh thu.",
          "points": 1
        },
        {
          "criterion": "Giải hệ đúng được $x=70$, $y=50$.",
          "points": 1
        },
        {
          "criterion": "Kiểm tra lại cả tổng số vé và tổng doanh thu.",
          "points": 1
        },
        {
          "criterion": "Kết luận đúng theo đơn vị và ý nghĩa của hai ẩn.",
          "points": 1
        }
      ],
      "rubric_total": 6,
      "common_mistakes": [
        "Đổi vai trò hai ẩn ở giữa bài khiến kết luận bị đảo.",
        "Trộn đơn vị đồng và nghìn đồng trong cùng phương trình.",
        "Tìm được nghiệm nhưng không kiểm tra lại tổng số vé và doanh thu."
      ],
      "remediation_links": [
        {
          "label": "Ôn mô hình hóa CĐ24",
          "href": "../kien-thuc/24-bai-toan-thuc-te/core/"
        },
        {
          "label": "Ôn hệ phương trình CĐ09",
          "href": "../kien-thuc/09-he-phuong-trinh/core/"
        },
        {
          "label": "Practice Room CĐ24",
          "href": "../kien-thuc/24-bai-toan-thuc-te/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/24-bai-toan-thuc-te/bai-tap.md#24-M3-06"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-PILOT-R1-20261001",
        "receipt": "review-packets/written-exercise-library/04_NOTEBOOKLM_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX08-EQI-001",
      "exercise_kind": "standard",
      "topic_id": "CT08",
      "topic_slug": "08-phuong-trinh-bat-phuong-trinh",
      "topic_title": "Phương trình và bất phương trình",
      "problem_type_id": "equation-rational-domain-check",
      "problem_type_title": "Phương trình chứa ẩn ở mẫu và đối chiếu điều kiện",
      "title": "Nghiệm tìm được bị loại bởi điều kiện xác định",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        8
      ],
      "skills": [
        "dkxd-phuong-trinh-mau",
        "khu-mau-phuong-trinh",
        "doi-chieu-nghiem"
      ],
      "prerequisites": [
        "pt-bac-nhat",
        "phan-thuc-dai-so"
      ],
      "estimated_minutes": 8,
      "problem_markdown": "Giải phương trình\n\n$$\\frac{2x-2}{x-1}=3.$$\n\nYêu cầu: ghi điều kiện xác định trước khi biến đổi và nêu tập nghiệm cuối cùng.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Điều kiện xác định",
          "content_markdown": "Mẫu số phải khác $0$, nên\n\n$$x-1\\ne0\\Rightarrow x\\ne1.$$"
        },
        {
          "step_id": "S2",
          "title": "Khử mẫu trên miền xác định",
          "content_markdown": "Với $x\\ne1$, nhân hai vế với $x-1$:\n\n$$2x-2=3(x-1).$$"
        },
        {
          "step_id": "S3",
          "title": "Giải phương trình thu được",
          "content_markdown": "Ta có\n\n$$2x-2=3x-3\\Rightarrow x=1.$$"
        },
        {
          "step_id": "S4",
          "title": "Đối chiếu và kết luận",
          "content_markdown": "Giá trị $x=1$ không thỏa điều kiện xác định. Vì vậy phương trình **vô nghiệm**:\n\n$$S=\\varnothing.$$"
        }
      ],
      "rubric": [
        {
          "criterion": "Ghi đúng điều kiện $x\\ne1$.",
          "points": 1
        },
        {
          "criterion": "Khử mẫu đúng để được $2x-2=3(x-1)$.",
          "points": 1
        },
        {
          "criterion": "Giải đúng phương trình thu được và tìm $x=1$.",
          "points": 1
        },
        {
          "criterion": "Đối chiếu điều kiện, loại $x=1$ và kết luận $S=\\varnothing$.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Bỏ qua điều kiện $x\\ne1$ rồi kết luận $x=1$ là nghiệm.",
        "Rút gọn $(2x-2)/(x-1)$ trước khi nêu miền xác định rồi quên mất giá trị bị loại.",
        "Khử mẫu nhưng không đối chiếu nghiệm với điều kiện ban đầu."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ08 – Phương trình tích & chứa mẫu",
          "href": "../kien-thuc/08-phuong-trinh-bat-phuong-trinh/core/"
        },
        {
          "label": "Practice Room CĐ08",
          "href": "../kien-thuc/08-phuong-trinh-bat-phuong-trinh/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/bai-tap.md#08-WR-05",
        "docs/assets/data/curriculum/topic08-learning-workspace.json#eq08-core-2"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B1-R1-20261001",
        "receipt": "review-packets/written-exercise-library/11_NOTEBOOKLM_EXPANSION_B1_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX08-EQI-002",
      "exercise_kind": "standard",
      "topic_id": "CT08",
      "topic_slug": "08-phuong-trinh-bat-phuong-trinh",
      "topic_title": "Phương trình và bất phương trình",
      "problem_type_id": "inequality-multistep-number-line",
      "problem_type_title": "Bất phương trình nhiều bước và biểu diễn tập nghiệm",
      "title": "Thu gọn, đổi chiều đúng lúc và biểu diễn nghiệm",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        9
      ],
      "skills": [
        "tinh-chat-thu-tu-phep-nhan",
        "bpt-bac-nhat",
        "doi-chieu-bpt",
        "bieu-dien-tap-nghiem"
      ],
      "prerequisites": [
        "phep-tinh-so-huu-ti"
      ],
      "estimated_minutes": 10,
      "problem_markdown": "Giải bất phương trình\n\n$$5-2(3x-1)\\ge4x+9$$\n\nrồi mô tả cách biểu diễn tập nghiệm trên trục số.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Bỏ ngoặc và thu gọn",
          "content_markdown": "Ta có\n\n$$5-2(3x-1)=5-6x+2=7-6x.$$\n\nDo đó\n\n$$7-6x\\ge4x+9.$$"
        },
        {
          "step_id": "S2",
          "title": "Chuyển vế",
          "content_markdown": "Chuyển các hạng chứa $x$ sang một vế và hằng số sang vế kia:\n\n$$-10x\\ge2.$$"
        },
        {
          "step_id": "S3",
          "title": "Chia cho số âm",
          "content_markdown": "Chia hai vế cho $-10$ nên phải **đổi chiều** bất phương trình:\n\n$$x\\le-\\frac15.$$"
        },
        {
          "step_id": "S4",
          "title": "Biểu diễn trên trục số",
          "content_markdown": "Đặt **điểm đặc** tại $-\\frac15$ vì có lấy mốc, rồi tô phần trục số về **bên trái**. Tập nghiệm là $(-\\infty,-\\frac15]$."
        }
      ],
      "rubric": [
        {
          "criterion": "Bỏ ngoặc và thu gọn đúng về $7-6x\\ge4x+9$.",
          "points": 1
        },
        {
          "criterion": "Chuyển vế đúng để được $-10x\\ge2$.",
          "points": 1
        },
        {
          "criterion": "Đổi chiều khi chia cho $-10$ và kết luận $x\\le-\\frac15$.",
          "points": 1
        },
        {
          "criterion": "Mô tả đúng điểm đặc tại $-\\frac15$ và tô về bên trái.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Bỏ ngoặc sai dấu ở $-2(3x-1)$.",
        "Chia cho $-10$ nhưng giữ nguyên chiều bất phương trình.",
        "Dùng điểm rỗng tại $-1/5$ hoặc tô sai phía trên trục số."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ08 – Bất phương trình & tập nghiệm",
          "href": "../kien-thuc/08-phuong-trinh-bat-phuong-trinh/core/"
        },
        {
          "label": "Practice Room CĐ08",
          "href": "../kien-thuc/08-phuong-trinh-bat-phuong-trinh/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/bai-tap.md#08-WR-07",
        "docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/bai-tap.md#08-WR-09",
        "docs/assets/data/curriculum/topic08-learning-workspace.json#eq08-core-4"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B1-R1-20261001",
        "receipt": "review-packets/written-exercise-library/11_NOTEBOOKLM_EXPANSION_B1_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX17-SIM-001",
      "exercise_kind": "standard",
      "topic_id": "CT17",
      "topic_slug": "17-thales-dong-dang",
      "topic_title": "Thales và tam giác đồng dạng",
      "problem_type_id": "thales-converse-parallel-proof",
      "problem_type_title": "Chứng minh song song bằng định lí Thales đảo",
      "title": "Từ hai tỉ số đúng đến kết luận song song",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        8
      ],
      "skills": [
        "thales-dao",
        "ti-le-doan-thang"
      ],
      "prerequisites": [
        "tinh-chat-song-song"
      ],
      "estimated_minutes": 10,
      "problem_markdown": "Cho tam giác $ABC$. Điểm $D$ thuộc đoạn $AB$, điểm $E$ thuộc đoạn $AC$. Biết\n\n$$AD=4\\text{ cm},\\quad DB=2\\text{ cm},\\quad AE=6\\text{ cm},\\quad EC=3\\text{ cm}.$$\n\nChứng minh $DE\\parallel BC$.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Xác định cấu hình",
          "content_markdown": "Theo giả thiết, $D$ nằm trên đoạn $AB$ và $E$ nằm trên đoạn $AC$, đúng vị trí để xét định lí Thales đảo trong tam giác $ABC$."
        },
        {
          "step_id": "S2",
          "title": "Tính hai tỉ số tương ứng",
          "content_markdown": "Ta có\n\n$$\\frac{AD}{DB}=\\frac42=2,\\qquad \\frac{AE}{EC}=\\frac63=2.$$"
        },
        {
          "step_id": "S3",
          "title": "So sánh",
          "content_markdown": "Suy ra\n\n$$\\frac{AD}{DB}=\\frac{AE}{EC}.$$"
        },
        {
          "step_id": "S4",
          "title": "Kết luận bằng Thales đảo",
          "content_markdown": "Vì $D\\in AB$, $E\\in AC$ và hai tỉ số tương ứng bằng nhau, theo định lí Thales đảo:\n\n$$DE\\parallel BC.$$"
        }
      ],
      "rubric": [
        {
          "criterion": "Nêu đúng vị trí $D\\in AB$, $E\\in AC$ trong tam giác $ABC$.",
          "points": 1
        },
        {
          "criterion": "Tính đúng $AD/DB=2$ và $AE/EC=2$.",
          "points": 1
        },
        {
          "criterion": "So sánh đúng hai tỉ số tương ứng.",
          "points": 1
        },
        {
          "criterion": "Dùng đúng định lí Thales đảo để kết luận $DE\\parallel BC$.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Dùng Thales thuận để chứng minh song song khi song song chưa phải giả thiết.",
        "Ghép sai các đoạn, chẳng hạn so $AD/DB$ với $EC/AE$.",
        "Bỏ qua điều kiện $D,E$ phải nằm trên hai cạnh tương ứng của tam giác."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ17 – Thales thuận và đảo",
          "href": "../kien-thuc/17-thales-dong-dang/core/"
        },
        {
          "label": "Practice Room CĐ17",
          "href": "../kien-thuc/17-thales-dong-dang/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/17-thales-dong-dang/bai-tap.md#17-WR-02",
        "docs/assets/data/curriculum/topic17-learning-workspace.json#geo17-core-1"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B1-R1-20261001",
        "receipt": "review-packets/written-exercise-library/11_NOTEBOOKLM_EXPANSION_B1_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX17-SIM-002",
      "exercise_kind": "standard",
      "topic_id": "CT17",
      "topic_slug": "17-thales-dong-dang",
      "topic_title": "Thales và tam giác đồng dạng",
      "problem_type_id": "similarity-parallel-length-chain",
      "problem_type_title": "Chứng minh đồng dạng rồi tính nhiều độ dài",
      "title": "Từ song song đến đồng dạng và hai kết quả độ dài",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        8
      ],
      "skills": [
        "dong-dang-gg",
        "thu-tu-tuong-ung",
        "tinh-do-dai-dong-dang"
      ],
      "prerequisites": [
        "thales-thuan"
      ],
      "estimated_minutes": 15,
      "problem_markdown": "Cho tam giác $ABC$. Điểm $D$ thuộc đoạn $AB$, điểm $E$ thuộc đoạn $AC$ và $DE\\parallel BC$. Biết\n\n$$AD=6\\text{ cm},\\quad DB=3\\text{ cm},\\quad AE=8\\text{ cm},\\quad BC=12\\text{ cm}.$$\n\n1. Chứng minh $\\triangle ADE\\sim\\triangle ABC$.\n2. Tính $EC$ và $DE$.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Tính cạnh toàn phần",
          "content_markdown": "Vì $D$ nằm trên đoạn $AB$ nên\n\n$$AB=AD+DB=6+3=9\\text{ cm}.$$"
        },
        {
          "step_id": "S2",
          "title": "Chứng minh hai tam giác đồng dạng",
          "content_markdown": "Do $DE\\parallel BC$, ta có $\\angle ADE=\\angle ABC$ và $\\angle AED=\\angle ACB$. Vì vậy\n\n$$\\triangle ADE\\sim\\triangle ABC$$\n\ntheo trường hợp g-g, với sự tương ứng $A\\leftrightarrow A$, $D\\leftrightarrow B$, $E\\leftrightarrow C$."
        },
        {
          "step_id": "S3",
          "title": "Lập tỉ số đúng thứ tự",
          "content_markdown": "Từ đồng dạng:\n\n$$\\frac{AD}{AB}=\\frac{AE}{AC}=\\frac{DE}{BC}=\\frac69=\\frac23.$$"
        },
        {
          "step_id": "S4",
          "title": "Tính AC và EC",
          "content_markdown": "Từ $AE/AC=2/3$:\n\n$$\\frac8{AC}=\\frac23\\Rightarrow AC=12\\text{ cm}.$$\n\nDo đó\n\n$$EC=AC-AE=12-8=4\\text{ cm}.$$"
        },
        {
          "step_id": "S5",
          "title": "Tính DE",
          "content_markdown": "Từ $DE/BC=2/3$:\n\n$$\\frac{DE}{12}=\\frac23\\Rightarrow DE=8\\text{ cm}.$$"
        }
      ],
      "rubric": [
        {
          "criterion": "Tính đúng $AB=9$ cm.",
          "points": 1
        },
        {
          "criterion": "Chứng minh đúng $\\triangle ADE\\sim\\triangle ABC$ theo g-g.",
          "points": 1
        },
        {
          "criterion": "Viết đúng thứ tự tương ứng và tỉ số $AD/AB=AE/AC=DE/BC$.",
          "points": 1
        },
        {
          "criterion": "Tính đúng $AC=12$ cm và $EC=4$ cm.",
          "points": 1
        },
        {
          "criterion": "Tính đúng $DE=8$ cm.",
          "points": 1
        }
      ],
      "rubric_total": 5,
      "common_mistakes": [
        "Viết sai thứ tự tương ứng rồi ghép $AE$ với $BC$.",
        "Dùng $AD/DB$ thay cho tỉ số giữa hai tam giác đồng dạng.",
        "Tìm được $AC$ nhưng quên trừ $AE$ để trả lời đúng đại lượng $EC$."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ17 – Đồng dạng và thứ tự tương ứng",
          "href": "../kien-thuc/17-thales-dong-dang/core/"
        },
        {
          "label": "Practice Room CĐ17",
          "href": "../kien-thuc/17-thales-dong-dang/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/17-thales-dong-dang/bai-tap.md#17-WR-06",
        "docs/kien-thuc/17-thales-dong-dang/bai-tap.md#17-WR-09",
        "docs/assets/data/curriculum/topic17-learning-workspace.json#geo17-core-4"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B1-R1-20261001",
        "receipt": "review-packets/written-exercise-library/11_NOTEBOOKLM_EXPANSION_B1_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX19-CIR-001",
      "exercise_kind": "standard",
      "topic_id": "CT19",
      "topic_slug": "19-duong-tron",
      "topic_title": "Đường tròn",
      "problem_type_id": "circle-arc-sector-measure",
      "problem_type_title": "Độ dài cung và diện tích quạt tròn",
      "title": "Cùng một cung, hai đại lượng khác đơn vị",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        9
      ],
      "skills": [
        "do-dai-cung",
        "dien-tich-quat-tron"
      ],
      "prerequisites": [
        "do-dai-duong-tron"
      ],
      "estimated_minutes": 8,
      "problem_markdown": "Một đường tròn có bán kính $R=12\\text{ cm}$. Xét cung có số đo $150^\\circ$.\n\n1. Tính độ dài cung đó.\n2. Tính diện tích hình quạt tròn tương ứng.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Xác định phần của đường tròn",
          "content_markdown": "Cung $150^\\circ$ chiếm\n\n$$\\frac{150}{360}=\\frac5{12}$$\n\nmột vòng tròn."
        },
        {
          "step_id": "S2",
          "title": "Tính độ dài cung",
          "content_markdown": "Độ dài cung là\n\n$$l=\\frac{150}{360}\\cdot2\\pi\\cdot12=10\\pi\\text{ cm}.$$"
        },
        {
          "step_id": "S3",
          "title": "Tính diện tích quạt",
          "content_markdown": "Diện tích hình quạt là\n\n$$S=\\frac{150}{360}\\cdot\\pi\\cdot12^2=60\\pi\\text{ cm}^2.$$"
        },
        {
          "step_id": "S4",
          "title": "Kiểm tra đơn vị",
          "content_markdown": "Độ dài cung dùng đơn vị cm; diện tích quạt dùng cm$^2$. Hai kết quả đều ứng với cùng tỉ lệ $5/12$ của đường tròn."
        }
      ],
      "rubric": [
        {
          "criterion": "Xác định đúng tỉ lệ $150/360=5/12$.",
          "points": 1
        },
        {
          "criterion": "Tính đúng độ dài cung $10\\pi$ cm.",
          "points": 1
        },
        {
          "criterion": "Tính đúng diện tích quạt $60\\pi$ cm$^2$.",
          "points": 1
        },
        {
          "criterion": "Ghi đúng và phân biệt đơn vị độ dài với diện tích.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Dùng $\\pi R$ thay cho chu vi $2\\pi R$ khi tính độ dài cung.",
        "Dùng công thức độ dài cung cho diện tích quạt hoặc ngược lại.",
        "Ghi cùng một đơn vị cho cả độ dài và diện tích."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ19 – Cung và đo lường đường tròn",
          "href": "../kien-thuc/19-duong-tron/core/"
        },
        {
          "label": "Practice Room CĐ19",
          "href": "../kien-thuc/19-duong-tron/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/19-duong-tron/bai-tap.md#19-WR-02",
        "docs/kien-thuc/19-duong-tron/bai-tap.md#19-WR-03",
        "docs/assets/data/curriculum/topic19-learning-workspace.json#geo19-core-5"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B1-R1-20261001",
        "receipt": "review-packets/written-exercise-library/11_NOTEBOOKLM_EXPANSION_B1_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX19-CIR-002",
      "exercise_kind": "standard",
      "topic_id": "CT19",
      "topic_slug": "19-duong-tron",
      "topic_title": "Đường tròn",
      "problem_type_id": "circle-cyclic-quadrilateral-angle",
      "problem_type_title": "Dấu hiệu tứ giác nội tiếp và góc đối",
      "title": "Nhận ra nội tiếp rồi khai thác cặp góc đối",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        9
      ],
      "skills": [
        "tu-giac-noi-tiep",
        "dau-hieu-noi-tiep"
      ],
      "prerequisites": [
        "do-goc"
      ],
      "estimated_minutes": 10,
      "problem_markdown": "Cho tứ giác **lồi** $ABCD$ có\n\n$$\\angle BAD=72^\\circ,\\qquad \\angle BCD=108^\\circ.$$\n\n1. Chứng minh $ABCD$ nội tiếp được một đường tròn.\n2. Biết thêm $\\angle ABC=118^\\circ$. Tính $\\angle ADC$.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Kiểm tra một cặp góc đối",
          "content_markdown": "Hai góc $\\angle BAD$ và $\\angle BCD$ là hai góc đối của tứ giác lồi $ABCD$ và\n\n$$72^\\circ+108^\\circ=180^\\circ.$$"
        },
        {
          "step_id": "S2",
          "title": "Kết luận nội tiếp",
          "content_markdown": "Vì một cặp góc đối của tứ giác lồi bù nhau, theo dấu hiệu đảo, bốn điểm $A,B,C,D$ cùng thuộc một đường tròn. Do đó $ABCD$ là tứ giác nội tiếp."
        },
        {
          "step_id": "S3",
          "title": "Dùng tính chất của tứ giác nội tiếp",
          "content_markdown": "Trong tứ giác nội tiếp, hai góc đối bù nhau:\n\n$$\\angle ABC+\\angle ADC=180^\\circ.$$"
        },
        {
          "step_id": "S4",
          "title": "Tính góc còn lại",
          "content_markdown": "Suy ra\n\n$$\\angle ADC=180^\\circ-118^\\circ=62^\\circ.$$"
        }
      ],
      "rubric": [
        {
          "criterion": "Nhận ra đúng $\\angle BAD$ và $\\angle BCD$ là hai góc đối và có tổng $180^\\circ$.",
          "points": 1
        },
        {
          "criterion": "Dùng đúng dấu hiệu đảo để chứng minh tứ giác nội tiếp.",
          "points": 1
        },
        {
          "criterion": "Viết đúng tính chất $\\angle ABC+\\angle ADC=180^\\circ$.",
          "points": 1
        },
        {
          "criterion": "Tính đúng $\\angle ADC=62^\\circ$.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Kết luận nội tiếp chỉ vì hình vẽ trông giống tứ giác nội tiếp.",
        "Dùng hai góc kề thay vì một cặp góc đối để kiểm tra tổng $180^\\circ$.",
        "Sau khi đã chứng minh nội tiếp, trừ sai và cho $\\angle ADC=118^\\circ$."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ19 – Tứ giác nội tiếp",
          "href": "../kien-thuc/19-duong-tron/core/"
        },
        {
          "label": "Practice Room CĐ19",
          "href": "../kien-thuc/19-duong-tron/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/19-duong-tron/bai-tap.md#19-WR-08",
        "docs/assets/data/curriculum/topic19-learning-workspace.json#geo19-core-4"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B1-R1-20261001",
        "receipt": "review-packets/written-exercise-library/11_NOTEBOOKLM_EXPANSION_B1_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX09-SYS-001",
      "exercise_kind": "standard",
      "topic_id": "CT09",
      "topic_slug": "09-he-phuong-trinh",
      "topic_title": "Hệ phương trình bậc nhất hai ẩn",
      "problem_type_id": "system-elimination-check",
      "problem_type_title": "Giải hệ bằng cộng đại số và kiểm tra nghiệm",
      "title": "Khử ẩn thuận tiện và kiểm tra trên cả hai phương trình",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        9
      ],
      "skills": [
        "giai-he-cong",
        "chon-phuong-phap",
        "kiem-tra-nghiem-he"
      ],
      "prerequisites": [
        "pt-bac-nhat"
      ],
      "estimated_minutes": 10,
      "problem_markdown": "Giải hệ phương trình sau bằng phương pháp thuận tiện, rồi kiểm tra nghiệm trong **cả hai** phương trình:\n\n$$\\begin{cases}2x+3y=13\\\\x-3y=2\\end{cases}$$",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Chọn phương pháp",
          "content_markdown": "Hai hệ số của $y$ là $3$ và $-3$, nên cộng hai phương trình sẽ khử $y$ ngay. Chọn phương pháp cộng đại số."
        },
        {
          "step_id": "S2",
          "title": "Khử một ẩn",
          "content_markdown": "Cộng hai phương trình:\n\n$$3x=15\\Rightarrow x=5.$$"
        },
        {
          "step_id": "S3",
          "title": "Tìm ẩn còn lại",
          "content_markdown": "Thay $x=5$ vào $x-3y=2$:\n\n$$5-3y=2\\Rightarrow -3y=-3\\Rightarrow y=1.$$"
        },
        {
          "step_id": "S4",
          "title": "Kiểm tra và kết luận",
          "content_markdown": "Kiểm tra:\n\n$$2\\cdot5+3\\cdot1=13,$$\n\n$$5-3\\cdot1=2.$$\n\nCả hai phương trình đều đúng, nên nghiệm của hệ là\n\n$$(x;y)=(5;1).$$"
        }
      ],
      "rubric": [
        {
          "criterion": "Chọn hợp lý phương pháp cộng đại số vì hệ số của $y$ đối nhau.",
          "points": 1
        },
        {
          "criterion": "Cộng đúng hai phương trình và tìm được $x=5$.",
          "points": 1
        },
        {
          "criterion": "Thế đúng để tìm được $y=1$.",
          "points": 1
        },
        {
          "criterion": "Kiểm tra trong cả hai phương trình và kết luận $(5;1)$.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Cộng vế trái nhưng quên cộng vế phải.",
        "Khử được một ẩn nhưng dừng lại, chưa tìm ẩn còn lại.",
        "Chỉ kiểm tra nghiệm trong một phương trình."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ09 – Giải hệ bằng cộng đại số",
          "href": "../kien-thuc/09-he-phuong-trinh/core/"
        },
        {
          "label": "Practice Room CĐ09",
          "href": "../kien-thuc/09-he-phuong-trinh/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/09-he-phuong-trinh/bai-tap.md#09-WR-04",
        "docs/kien-thuc/09-he-phuong-trinh/bai-tap.md#09-WR-06",
        "docs/kien-thuc/09-he-phuong-trinh/bai-tap.md#09-WR-07",
        "docs/assets/data/curriculum/topic09-learning-workspace.json#sys09-core-3",
        "docs/assets/data/curriculum/topic09-learning-workspace.json#sys09-core-4"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B2-R1-20261001",
        "receipt": "review-packets/written-exercise-library/17_NOTEBOOKLM_EXPANSION_B2_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX09-SYS-002",
      "exercise_kind": "standard",
      "topic_id": "CT09",
      "topic_slug": "09-he-phuong-trinh",
      "topic_title": "Hệ phương trình bậc nhất hai ẩn",
      "problem_type_id": "system-modelling-two-prices",
      "problem_type_title": "Lập hệ từ hai dữ kiện giá tiền",
      "title": "Từ hai hóa đơn đến hệ phương trình",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        9
      ],
      "skills": [
        "lap-he-bai-toan",
        "giai-he-cong",
        "kiem-tra-nghiem-he"
      ],
      "prerequisites": [
        "giai-he-cong"
      ],
      "estimated_minutes": 14,
      "problem_markdown": "Tại một cửa hàng, giá mỗi quyển vở và mỗi cây bút là cố định.\n\n- 3 quyển vở và 2 cây bút có giá 44 nghìn đồng.\n- 2 quyển vở và 5 cây bút có giá 66 nghìn đồng.\n\nTìm giá một quyển vở và một cây bút.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Đặt ẩn và điều kiện",
          "content_markdown": "Gọi $x$ là giá một quyển vở và $y$ là giá một cây bút, đơn vị nghìn đồng. Vì là giá tiền nên $x>0$, $y>0$."
        },
        {
          "step_id": "S2",
          "title": "Lập hệ",
          "content_markdown": "Từ hai hóa đơn:\n\n$$\\begin{cases}3x+2y=44\\\\2x+5y=66\\end{cases}.$$"
        },
        {
          "step_id": "S3",
          "title": "Khử một ẩn",
          "content_markdown": "Nhân phương trình đầu với $2$ và phương trình hai với $3$:\n\n$$\\begin{cases}6x+4y=88\\\\6x+15y=198\\end{cases}.$$\n\nLấy phương trình hai trừ phương trình một:\n\n$$11y=110\\Rightarrow y=10.$$"
        },
        {
          "step_id": "S4",
          "title": "Tìm ẩn còn lại",
          "content_markdown": "Thay $y=10$ vào $3x+2y=44$:\n\n$$3x+20=44\\Rightarrow x=8.$$"
        },
        {
          "step_id": "S5",
          "title": "Đối chiếu và kết luận",
          "content_markdown": "Ta có $3\\cdot8+2\\cdot10=44$ và $2\\cdot8+5\\cdot10=66$, đồng thời $x,y>0$. Vậy một quyển vở giá **8 nghìn đồng**, một cây bút giá **10 nghìn đồng**."
        }
      ],
      "rubric": [
        {
          "criterion": "Đặt hai ẩn, ghi đúng đơn vị và điều kiện dương.",
          "points": 1
        },
        {
          "criterion": "Lập đúng hệ $3x+2y=44$, $2x+5y=66$.",
          "points": 1
        },
        {
          "criterion": "Giải đúng hệ và tìm được $y=10$.",
          "points": 1
        },
        {
          "criterion": "Tìm đúng $x=8$.",
          "points": 1
        },
        {
          "criterion": "Kiểm tra hai dữ kiện và kết luận kèm đơn vị.",
          "points": 1
        }
      ],
      "rubric_total": 5,
      "common_mistakes": [
        "Đặt ẩn nhưng không ghi đơn vị hoặc điều kiện.",
        "Ghép sai số lượng vở/bút vào hai phương trình.",
        "Giải được $x,y$ nhưng không đối chiếu lại hai hóa đơn hoặc không trả lời bằng đơn vị tiền."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ09 – Lập hệ từ bài toán",
          "href": "../kien-thuc/09-he-phuong-trinh/core/"
        },
        {
          "label": "Practice Room CĐ09",
          "href": "../kien-thuc/09-he-phuong-trinh/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/09-he-phuong-trinh/bai-tap.md#09-WR-08",
        "docs/kien-thuc/09-he-phuong-trinh/bai-tap.md#09-WR-10",
        "docs/assets/data/curriculum/topic09-learning-workspace.json#sys09-core-5"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B2-R1-20261001",
        "receipt": "review-packets/written-exercise-library/17_NOTEBOOKLM_EXPANSION_B2_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX16-QUAD-001",
      "exercise_kind": "standard",
      "topic_id": "CT16",
      "topic_slug": "16-tu-giac",
      "topic_title": "Tứ giác và các hình đặc biệt",
      "problem_type_id": "quadrilateral-upgrade-parallelogram-rectangle",
      "problem_type_title": "Chứng minh hình bình hành rồi nâng cấp thành hình chữ nhật",
      "title": "Hai dấu hiệu nối tiếp: hình bình hành → hình chữ nhật",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        8
      ],
      "skills": [
        "hbh-dau-hieu",
        "hcn-dau-hieu"
      ],
      "prerequisites": [
        "tinh-chat-song-song"
      ],
      "estimated_minutes": 10,
      "problem_markdown": "Cho tứ giác lồi $ABCD$ có\n\n$$AB\\parallel CD,\\qquad AB=CD,\\qquad \\angle ABC=90^\\circ.$$\n\nChứng minh $ABCD$ là hình chữ nhật.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Nhận ra dấu hiệu hình bình hành",
          "content_markdown": "Trong tứ giác $ABCD$, $AB$ và $CD$ là một cặp cạnh đối. Theo giả thiết, cặp cạnh đối này vừa song song vừa bằng nhau."
        },
        {
          "step_id": "S2",
          "title": "Kết luận hình bình hành",
          "content_markdown": "Tứ giác có một cặp cạnh đối vừa song song vừa bằng nhau là hình bình hành. Do đó $ABCD$ là hình bình hành."
        },
        {
          "step_id": "S3",
          "title": "Dùng thêm góc vuông",
          "content_markdown": "Hình bình hành $ABCD$ có $\\angle ABC=90^\\circ$."
        },
        {
          "step_id": "S4",
          "title": "Nâng cấp kết luận",
          "content_markdown": "Hình bình hành có một góc vuông là hình chữ nhật. Vậy $ABCD$ là hình chữ nhật."
        }
      ],
      "rubric": [
        {
          "criterion": "Xác định $AB$ và $CD$ là hai cạnh đối, vừa song song vừa bằng nhau.",
          "points": 1
        },
        {
          "criterion": "Dùng đúng dấu hiệu để kết luận $ABCD$ là hình bình hành.",
          "points": 1
        },
        {
          "criterion": "Sử dụng đúng giả thiết $\\angle ABC=90^\\circ$ sau khi đã có hình bình hành.",
          "points": 1
        },
        {
          "criterion": "Kết luận đúng $ABCD$ là hình chữ nhật.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Kết luận hình chữ nhật ngay từ $AB\\parallel CD$ và $AB=CD$ mà không qua bước hình bình hành.",
        "Dùng một góc vuông để kết luận tứ giác bất kỳ là hình chữ nhật.",
        "Nhầm $AB$ và $CD$ là hai cạnh kề."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ16 – Dấu hiệu hình bình hành và hình chữ nhật",
          "href": "../kien-thuc/16-tu-giac/core/"
        },
        {
          "label": "Practice Room CĐ16",
          "href": "../kien-thuc/16-tu-giac/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/16-tu-giac/bai-tap.md#16-WR-04",
        "docs/kien-thuc/16-tu-giac/bai-tap.md#16-WR-05",
        "docs/assets/data/curriculum/topic16-learning-workspace.json#geo16-core-2",
        "docs/assets/data/curriculum/topic16-learning-workspace.json#geo16-core-3"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B2-R1-20261001",
        "receipt": "review-packets/written-exercise-library/17_NOTEBOOKLM_EXPANSION_B2_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX16-QUAD-002",
      "exercise_kind": "standard",
      "topic_id": "CT16",
      "topic_slug": "16-tu-giac",
      "topic_title": "Tứ giác và các hình đặc biệt",
      "problem_type_id": "quadrilateral-diagonals-square-proof",
      "problem_type_title": "Chuỗi dấu hiệu từ đường chéo đến hình vuông",
      "title": "Không suy từ hình: chứng minh từng tầng đến hình vuông",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        8
      ],
      "skills": [
        "hbh-dau-hieu",
        "hcn-dau-hieu",
        "hvuong-dau-hieu",
        "duong-cheo-suy-luan"
      ],
      "prerequisites": [
        "trung-diem",
        "duong-vuong-goc"
      ],
      "estimated_minutes": 15,
      "problem_markdown": "Cho tứ giác lồi $ABCD$. Hai đường chéo $AC$ và $BD$ cắt nhau tại $O$. Biết\n\n$$OA=OC,\\qquad OB=OD,\\qquad AC=BD,\\qquad AC\\perp BD.$$\n\nChứng minh $ABCD$ là hình vuông.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Chứng minh hình bình hành",
          "content_markdown": "Từ $OA=OC$, $O$ là trung điểm của $AC$; từ $OB=OD$, $O$ là trung điểm của $BD$. Vậy hai đường chéo của $ABCD$ cắt nhau tại trung điểm mỗi đường, nên $ABCD$ là hình bình hành."
        },
        {
          "step_id": "S2",
          "title": "Nâng cấp thành hình chữ nhật",
          "content_markdown": "Ta đã có $ABCD$ là hình bình hành và $AC=BD$. Hình bình hành có hai đường chéo bằng nhau là hình chữ nhật, nên $ABCD$ là hình chữ nhật."
        },
        {
          "step_id": "S3",
          "title": "Dùng điều kiện vuông góc",
          "content_markdown": "Theo giả thiết, hai đường chéo $AC$ và $BD$ vuông góc nhau."
        },
        {
          "step_id": "S4",
          "title": "Nâng cấp thành hình vuông",
          "content_markdown": "Hình chữ nhật có hai đường chéo vuông góc là hình vuông. Vậy $ABCD$ là hình vuông."
        },
        {
          "step_id": "S5",
          "title": "Kiểm tra chuỗi suy luận",
          "content_markdown": "Mỗi lần nâng cấp đều có đủ tiền đề: tứ giác → hình bình hành → hình chữ nhật → hình vuông; không có kết luận nào chỉ dựa vào hình minh họa."
        }
      ],
      "rubric": [
        {
          "criterion": "Từ $OA=OC$ và $OB=OD$, kết luận đúng hai đường chéo chia đôi nhau.",
          "points": 1
        },
        {
          "criterion": "Dùng đúng dấu hiệu để suy ra hình bình hành.",
          "points": 1
        },
        {
          "criterion": "Dùng $AC=BD$ để nâng cấp hình bình hành thành hình chữ nhật.",
          "points": 1
        },
        {
          "criterion": "Dùng $AC\\perp BD$ để nâng cấp hình chữ nhật thành hình vuông.",
          "points": 1
        },
        {
          "criterion": "Trình bày đúng thứ tự và kết luận cuối cùng rõ ràng.",
          "points": 1
        }
      ],
      "rubric_total": 5,
      "common_mistakes": [
        "Chỉ thấy hai đường chéo vuông góc rồi kết luận ngay hình vuông.",
        "Dùng $AC=BD$ cho một tứ giác bất kỳ để kết luận hình chữ nhật khi chưa có tiền đề hình bình hành.",
        "Bỏ qua bước chứng minh $O$ là trung điểm của cả hai đường chéo."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ16 – Chuỗi dấu hiệu tứ giác đặc biệt",
          "href": "../kien-thuc/16-tu-giac/core/"
        },
        {
          "label": "Practice Room CĐ16",
          "href": "../kien-thuc/16-tu-giac/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/16-tu-giac/bai-tap.md#16-WR-03",
        "docs/kien-thuc/16-tu-giac/bai-tap.md#16-WR-05",
        "docs/kien-thuc/16-tu-giac/bai-tap.md#16-WR-09",
        "docs/assets/data/curriculum/topic16-learning-workspace.json#geo16-core-2",
        "docs/assets/data/curriculum/topic16-learning-workspace.json#geo16-core-3",
        "docs/assets/data/curriculum/topic16-learning-workspace.json#geo16-core-5"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B2-R1-20261001",
        "receipt": "review-packets/written-exercise-library/17_NOTEBOOKLM_EXPANSION_B2_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX18-TRI-001",
      "exercise_kind": "standard",
      "topic_id": "CT18",
      "topic_slug": "18-he-thuc-luong",
      "topic_title": "Hệ thức lượng trong tam giác vuông",
      "problem_type_id": "right-triangle-find-sides-trig",
      "problem_type_title": "Tìm cạnh bằng sin và cos",
      "title": "Chọn đúng cạnh đối – kề – huyền trước khi tính",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        9
      ],
      "skills": [
        "sin",
        "cos",
        "tim-canh-luong-giac"
      ],
      "prerequisites": [
        "ti-le-doan-thang"
      ],
      "estimated_minutes": 9,
      "problem_markdown": "Cho tam giác $ABC$ vuông tại $A$, có\n\n$$BC=20\\text{ cm},\\qquad \\angle B=30^\\circ.$$\n\nTính chính xác $AC$ và $AB$.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Xác định vai trò các cạnh",
          "content_markdown": "Vì tam giác vuông tại $A$, $BC$ là cạnh huyền. Với góc $B$, $AC$ là cạnh đối và $AB$ là cạnh kề."
        },
        {
          "step_id": "S2",
          "title": "Tính cạnh đối bằng sin",
          "content_markdown": "Ta có\n\n$$\\sin B=\\frac{AC}{BC}.$$\n\nDo $\\sin30^\\circ=\\frac12$:\n\n$$AC=20\\cdot\\frac12=10\\text{ cm}.$$"
        },
        {
          "step_id": "S3",
          "title": "Tính cạnh kề bằng cos",
          "content_markdown": "Ta có\n\n$$\\cos B=\\frac{AB}{BC}.$$\n\nDo $\\cos30^\\circ=\\frac{\\sqrt3}{2}$:\n\n$$AB=20\\cdot\\frac{\\sqrt3}{2}=10\\sqrt3\\text{ cm}.$$"
        },
        {
          "step_id": "S4",
          "title": "Kết luận",
          "content_markdown": "Vậy\n\n$$AC=10\\text{ cm},\\qquad AB=10\\sqrt3\\text{ cm}.$$"
        }
      ],
      "rubric": [
        {
          "criterion": "Xác định đúng $BC$ là huyền, $AC$ đối và $AB$ kề với góc $B$.",
          "points": 1
        },
        {
          "criterion": "Dùng đúng sin để tính $AC=10$ cm.",
          "points": 1
        },
        {
          "criterion": "Dùng đúng cos để tính $AB=10\\sqrt3$ cm.",
          "points": 1
        },
        {
          "criterion": "Kết luận đủ hai độ dài với đơn vị.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Nhầm $AB$ là cạnh đối góc $B$.",
        "Dùng cos để tính cạnh đối hoặc sin để tính cạnh kề mà không đổi tỉ số đúng.",
        "Đổi $10\\sqrt3$ thành số gần đúng dù đề yêu cầu kết quả chính xác."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ18 – Sin, cos và tìm cạnh",
          "href": "../kien-thuc/18-he-thuc-luong/core/"
        },
        {
          "label": "Practice Room CĐ18",
          "href": "../kien-thuc/18-he-thuc-luong/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/18-he-thuc-luong/bai-tap.md#18-WR-04",
        "docs/kien-thuc/18-he-thuc-luong/bai-tap.md#18-WR-06",
        "docs/assets/data/curriculum/topic18-learning-workspace.json#geo18-core-2",
        "docs/assets/data/curriculum/topic18-learning-workspace.json#geo18-core-4"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B2-R1-20261001",
        "receipt": "review-packets/written-exercise-library/17_NOTEBOOKLM_EXPANSION_B2_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX18-TRI-002",
      "exercise_kind": "standard",
      "topic_id": "CT18",
      "topic_slug": "18-he-thuc-luong",
      "topic_title": "Hệ thức lượng trong tam giác vuông",
      "problem_type_id": "right-triangle-angle-elevation-height",
      "problem_type_title": "Góc nâng và chiều cao có tầm mắt",
      "title": "Tách chênh cao khỏi chiều cao toàn vật",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        9
      ],
      "skills": [
        "goc-nang-ha",
        "chieu-cao-khoang-cach",
        "tan",
        "tim-canh-luong-giac"
      ],
      "prerequisites": [
        "tan"
      ],
      "estimated_minutes": 12,
      "problem_markdown": "Một người đứng trên mặt đất phẳng, cách chân một tháp theo phương ngang $24$ m. Mắt người đó cao $1{,}5$ m so với mặt đất. Góc nâng từ tầm mắt đến đỉnh tháp là $30^\\circ$. Giả sử chân tháp và chân người cùng cao độ, tháp thẳng đứng.\n\nTính chiều cao tháp. Viết kết quả chính xác rồi làm tròn đến $0{,}1$ m.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Xác định tam giác vuông mô hình",
          "content_markdown": "Khoảng cách ngang từ người đến chân tháp là cạnh kề của góc nâng $30^\\circ$. Cạnh đối là **độ chênh cao từ tầm mắt đến đỉnh tháp**, không phải toàn bộ chiều cao tháp."
        },
        {
          "step_id": "S2",
          "title": "Dùng tan để tính chênh cao",
          "content_markdown": "Gọi $h$ là độ chênh cao từ tầm mắt đến đỉnh tháp. Khi đó\n\n$$\\tan30^\\circ=\\frac{h}{24}.$$\n\nSuy ra\n\n$$h=24\\tan30^\\circ=24\\cdot\\frac1{\\sqrt3}=8\\sqrt3\\text{ m}.$$"
        },
        {
          "step_id": "S3",
          "title": "Cộng chiều cao tầm mắt",
          "content_markdown": "Chiều cao tháp là\n\n$$H=1{,}5+8\\sqrt3\\text{ m}.$$"
        },
        {
          "step_id": "S4",
          "title": "Làm tròn",
          "content_markdown": "Vì $8\\sqrt3\\approx13{,}856$, nên\n\n$$H\\approx15{,}356\\text{ m}\\approx15{,}4\\text{ m}.$$"
        },
        {
          "step_id": "S5",
          "title": "Kết luận",
          "content_markdown": "Chiều cao tháp là\n\n$$\\boxed{1{,}5+8\\sqrt3\\text{ m}\\approx15{,}4\\text{ m}}.$$"
        }
      ],
      "rubric": [
        {
          "criterion": "Mô hình đúng: 24 m là khoảng cách ngang/cạnh kề; cạnh đối là chênh cao từ mắt tới đỉnh.",
          "points": 1
        },
        {
          "criterion": "Lập đúng $\\tan30^\\circ=h/24$.",
          "points": 1
        },
        {
          "criterion": "Tính đúng $h=8\\sqrt3$ m.",
          "points": 1
        },
        {
          "criterion": "Cộng đúng chiều cao mắt để được $H=1{,}5+8\\sqrt3$ m.",
          "points": 1
        },
        {
          "criterion": "Làm tròn đúng $H\\approx15{,}4$ m và kết luận kèm đơn vị.",
          "points": 1
        }
      ],
      "rubric_total": 5,
      "common_mistakes": [
        "Dùng 24 m như cạnh huyền thay vì khoảng cách ngang.",
        "Tính được $8\\sqrt3$ m rồi coi đó là toàn bộ chiều cao tháp, quên cộng $1{,}5$ m.",
        "Đo góc nâng với phương thẳng đứng hoặc làm tròn quá sớm."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ18 – Góc nâng và đo chiều cao",
          "href": "../kien-thuc/18-he-thuc-luong/core/"
        },
        {
          "label": "Practice Room CĐ18",
          "href": "../kien-thuc/18-he-thuc-luong/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/18-he-thuc-luong/bai-tap.md#18-WR-08",
        "docs/kien-thuc/18-he-thuc-luong/bai-tap.md#18-WR-09",
        "docs/kien-thuc/18-he-thuc-luong/bai-tap.md#18-WR-10",
        "docs/assets/data/curriculum/topic18-learning-workspace.json#geo18-core-5"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B2-R1-20261001",
        "receipt": "review-packets/written-exercise-library/17_NOTEBOOKLM_EXPANSION_B2_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX10-FUN-001",
      "exercise_kind": "standard",
      "topic_id": "CT10",
      "topic_slug": "10-ham-so-do-thi",
      "topic_title": "Hàm số và đồ thị",
      "problem_type_id": "linear-function-intercepts-variation",
      "problem_type_title": "Đường thẳng: hệ số, giao trục và biến thiên",
      "title": "Từ công thức đến hai điểm vẽ đường thẳng",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        8
      ],
      "skills": [
        "he-so-goc",
        "tung-do-goc",
        "dong-nghich-bien",
        "ve-do-thi-ham-bac-nhat"
      ],
      "prerequisites": [
        "toa-do-diem"
      ],
      "estimated_minutes": 10,
      "problem_markdown": "Cho hàm số\n\n$$y=-2x+4.$$\n\n1. Xác định hệ số góc và tung độ gốc.\n2. Tìm giao điểm của đồ thị với hai trục tọa độ.\n3. Cho biết hàm số đồng biến hay nghịch biến.\n4. Nêu hai điểm có thể dùng để vẽ đồ thị.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Đọc hệ số từ dạng chuẩn",
          "content_markdown": "So với $y=ax+b$, ta có\n\n$$a=-2,\\qquad b=4.$$\n\nVì vậy hệ số góc là $-2$ và tung độ gốc là $4$."
        },
        {
          "step_id": "S2",
          "title": "Tìm giao điểm với Oy",
          "content_markdown": "Trên trục $Oy$ thì $x=0$. Khi đó\n\n$$y=-2\\cdot0+4=4.$$\n\nĐồ thị cắt $Oy$ tại $A(0;4)$."
        },
        {
          "step_id": "S3",
          "title": "Tìm giao điểm với Ox",
          "content_markdown": "Trên trục $Ox$ thì $y=0$. Do đó\n\n$$-2x+4=0\\Rightarrow x=2.$$\n\nĐồ thị cắt $Ox$ tại $B(2;0)$."
        },
        {
          "step_id": "S4",
          "title": "Xét biến thiên",
          "content_markdown": "Vì hệ số góc $a=-2<0$, hàm số **nghịch biến**."
        },
        {
          "step_id": "S5",
          "title": "Chọn hai điểm để vẽ",
          "content_markdown": "Hai điểm $A(0;4)$ và $B(2;0)$ là hai điểm phân biệt thuộc đồ thị. Nối $A$ và $B$ ta được đường thẳng biểu diễn hàm số."
        }
      ],
      "rubric": [
        {
          "criterion": "Xác định đúng $a=-2$, $b=4$.",
          "points": 1
        },
        {
          "criterion": "Tìm đúng giao điểm $A(0;4)$ với $Oy$.",
          "points": 1
        },
        {
          "criterion": "Tìm đúng giao điểm $B(2;0)$ với $Ox$.",
          "points": 1
        },
        {
          "criterion": "Kết luận đúng hàm số nghịch biến vì $a<0$.",
          "points": 1
        },
        {
          "criterion": "Nêu đúng hai điểm phân biệt $A,B$ để vẽ đường thẳng.",
          "points": 1
        }
      ],
      "rubric_total": 5,
      "common_mistakes": [
        "Đổi nhầm giao $Oy$ thành $(4;0)$.",
        "Xét dấu của $b$ thay vì $a$ để kết luận đồng/nghịch biến.",
        "Cho $x=0$ và $y=0$ nhưng ghi sai thứ tự tọa độ."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ10 – Hàm số bậc nhất và đồ thị",
          "href": "../kien-thuc/10-ham-so-do-thi/core/"
        },
        {
          "label": "Practice Room CĐ10",
          "href": "../kien-thuc/10-ham-so-do-thi/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/10-ham-so-do-thi/bai-tap.md#10-WR-05",
        "docs/kien-thuc/10-ham-so-do-thi/bai-tap.md#10-WR-06",
        "docs/kien-thuc/10-ham-so-do-thi/bai-tap.md#10-WR-07",
        "docs/assets/data/curriculum/topic10-learning-workspace.json#fun10-core-3",
        "docs/assets/data/curriculum/topic10-learning-workspace.json#fun10-core-4"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B3-R1-20261001",
        "receipt": "review-packets/written-exercise-library/24_NOTEBOOKLM_EXPANSION_B3_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX10-FUN-002",
      "exercise_kind": "standard",
      "topic_id": "CT10",
      "topic_slug": "10-ham-so-do-thi",
      "topic_title": "Hàm số và đồ thị",
      "problem_type_id": "parabola-table-symmetry-membership",
      "problem_type_title": "Parabol y=ax²: bảng giá trị, đối xứng và điểm thuộc đồ thị",
      "title": "Nhìn cấu trúc parabol từ bảng giá trị đối xứng",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        9
      ],
      "skills": [
        "bang-gia-tri",
        "ham-y-ax2",
        "doi-xung-parabol",
        "diem-thuoc-parabol"
      ],
      "prerequisites": [
        "toa-do-diem"
      ],
      "estimated_minutes": 12,
      "problem_markdown": "Cho parabol\n\n$$y=\\frac12x^2.$$\n\n1. Lập bảng giá trị khi $x=-4,-2,0,2,4$.\n2. Từ bảng, nêu đỉnh, trục đối xứng và hướng mở của parabol.\n3. Kiểm tra điểm $P(6;18)$ có thuộc parabol hay không.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Tính các giá trị y",
          "content_markdown": "Thay lần lượt các giá trị $x$ vào $y=\\frac12x^2$:\n\n$$8,\\ 2,\\ 0,\\ 2,\\ 8.$$\n\nCác cặp tương ứng là $(-4;8),(-2;2),(0;0),(2;2),(4;8)$."
        },
        {
          "step_id": "S2",
          "title": "Nhận ra tính đối xứng",
          "content_markdown": "Các giá trị tại $x$ và $-x$ bằng nhau, nên đồ thị đối xứng qua trục $Oy$."
        },
        {
          "step_id": "S3",
          "title": "Nêu đỉnh và hướng mở",
          "content_markdown": "Đây là dạng đặc biệt $y=ax^2$ với $a=\\frac12>0$, nên parabol có đỉnh $O(0;0)$ và mở lên."
        },
        {
          "step_id": "S4",
          "title": "Kiểm tra điểm P",
          "content_markdown": "Với $x=6$:\n\n$$y=\\frac12\\cdot6^2=18.$$\n\nTung độ tính được đúng bằng tung độ của $P$, nên $P(6;18)$ thuộc parabol."
        }
      ],
      "rubric": [
        {
          "criterion": "Lập đúng bảng $y=8,2,0,2,8$ theo thứ tự đã cho.",
          "points": 1
        },
        {
          "criterion": "Nêu đúng đối xứng qua $Oy$ từ các cặp $x,-x$.",
          "points": 1
        },
        {
          "criterion": "Nêu đúng đỉnh $O(0;0)$ và hướng mở lên vì $a>0$.",
          "points": 1
        },
        {
          "criterion": "Thay $x=6$, tính được $y=18$ và kết luận $P$ thuộc parabol.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Tính $(-4)^2=-16$ thay vì $16$.",
        "Áp dụng tính chất đỉnh $O$ cho mọi hàm bậc hai thay vì đúng dạng $y=ax^2$.",
        "Chỉ nhìn hình/ước lượng thay vì thay hoành độ để kiểm tra điểm thuộc đồ thị."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ10 – Parabol y=ax²",
          "href": "../kien-thuc/10-ham-so-do-thi/core/"
        },
        {
          "label": "Practice Room CĐ10",
          "href": "../kien-thuc/10-ham-so-do-thi/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/10-ham-so-do-thi/bai-tap.md#10-WR-08",
        "docs/kien-thuc/10-ham-so-do-thi/bai-tap.md#10-WR-09",
        "docs/kien-thuc/10-ham-so-do-thi/bai-tap.md#10-WR-10",
        "docs/assets/data/curriculum/topic10-learning-workspace.json#fun10-core-5"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B3-R1-20261001",
        "receipt": "review-packets/written-exercise-library/24_NOTEBOOKLM_EXPANSION_B3_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX11-RAD-001",
      "exercise_kind": "standard",
      "topic_id": "CT11",
      "topic_slug": "11-can-thuc",
      "topic_title": "Căn thức và biến đổi căn thức",
      "problem_type_id": "radical-domain-absolute-value",
      "problem_type_title": "Điều kiện căn và căn của bình phương",
      "title": "Xét điều kiện trước, giữ giá trị tuyệt đối đúng chỗ",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        9
      ],
      "skills": [
        "dkxd-can",
        "can-binh-phuong"
      ],
      "prerequisites": [
        "phep-tinh-so-thuc"
      ],
      "estimated_minutes": 9,
      "problem_markdown": "Cho biểu thức\n\n$$A=\\sqrt{(x-3)^2}+\\sqrt{2x-4}.$$\n\n1. Tìm điều kiện xác định của $A$.\n2. Rút gọn căn thức thứ nhất.\n3. Tính $A$ tại $x=2$.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Tìm điều kiện xác định",
          "content_markdown": "Căn $\\sqrt{(x-3)^2}$ luôn có nghĩa với mọi $x$ thực. Căn thứ hai cần\n\n$$2x-4\\ge0\\Rightarrow x\\ge2.$$\n\nVậy điều kiện xác định của $A$ là $x\\ge2$."
        },
        {
          "step_id": "S2",
          "title": "Rút gọn căn của bình phương",
          "content_markdown": "Với mọi $x$ thực,\n\n$$\\sqrt{(x-3)^2}=|x-3|.$$\n\nDo đó trên miền xác định,\n\n$$A=|x-3|+\\sqrt{2x-4}.$$"
        },
        {
          "step_id": "S3",
          "title": "Thay x=2",
          "content_markdown": "Giá trị $x=2$ thỏa điều kiện. Khi đó\n\n$$A=|2-3|+\\sqrt{4-4}=1+0=1.$$"
        }
      ],
      "rubric": [
        {
          "criterion": "Xác định đúng điều kiện $x\\ge2$.",
          "points": 1
        },
        {
          "criterion": "Rút gọn đúng $\\sqrt{(x-3)^2}=|x-3|$.",
          "points": 1
        },
        {
          "criterion": "Kiểm tra $x=2$ thuộc miền xác định và tính đúng $A=1$.",
          "points": 1
        },
        {
          "criterion": "Không tự bỏ dấu giá trị tuyệt đối khi chưa biết dấu $x-3$.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Bắt $(x-3)^2\\ge0$ rồi tạo thêm điều kiện không cần thiết.",
        "Viết $\\sqrt{(x-3)^2}=x-3$ với mọi $x$.",
        "Thay số trước khi xác định miền của biểu thức."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ11 – Điều kiện và căn của bình phương",
          "href": "../kien-thuc/11-can-thuc/core/"
        },
        {
          "label": "Practice Room CĐ11",
          "href": "../kien-thuc/11-can-thuc/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/11-can-thuc/bai-tap.md#11-WR-01",
        "docs/kien-thuc/11-can-thuc/bai-tap.md#11-WR-02",
        "docs/assets/data/curriculum/topic11-learning-workspace.json#rad11-core-1"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B3-R1-20261001",
        "receipt": "review-packets/written-exercise-library/24_NOTEBOOKLM_EXPANSION_B3_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX11-RAD-002",
      "exercise_kind": "standard",
      "topic_id": "CT11",
      "topic_slug": "11-can-thuc",
      "topic_title": "Căn thức và biến đổi căn thức",
      "problem_type_id": "radical-rationalize-conjugates",
      "problem_type_title": "Trục căn bằng liên hợp và cộng biểu thức",
      "title": "Hai mẫu liên hợp, một kết quả gọn",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        9
      ],
      "skills": [
        "truc-can-lien-hop",
        "can-dong-dang",
        "nhan-chia-can"
      ],
      "prerequisites": [
        "hieu-hai-binh-phuong"
      ],
      "estimated_minutes": 12,
      "problem_markdown": "Rút gọn biểu thức\n\n$$E=\\frac1{\\sqrt5+1}+\\frac1{\\sqrt5-1}.$$\n\nYêu cầu: trục căn thức ở từng mẫu trước khi cộng.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Trục căn ở phân thức thứ nhất",
          "content_markdown": "Nhân cả tử và mẫu với liên hợp $\\sqrt5-1$:\n\n$$\\frac1{\\sqrt5+1}=\\frac{\\sqrt5-1}{(\\sqrt5+1)(\\sqrt5-1)}=\\frac{\\sqrt5-1}{4}.$$"
        },
        {
          "step_id": "S2",
          "title": "Trục căn ở phân thức thứ hai",
          "content_markdown": "Nhân cả tử và mẫu với liên hợp $\\sqrt5+1$:\n\n$$\\frac1{\\sqrt5-1}=\\frac{\\sqrt5+1}{(\\sqrt5-1)(\\sqrt5+1)}=\\frac{\\sqrt5+1}{4}.$$"
        },
        {
          "step_id": "S3",
          "title": "Cộng hai kết quả",
          "content_markdown": "Hai phân thức có cùng mẫu:\n\n$$E=\\frac{\\sqrt5-1+\\sqrt5+1}{4}=\\frac{2\\sqrt5}{4}=\\frac{\\sqrt5}{2}.$$"
        },
        {
          "step_id": "S4",
          "title": "Kiểm tra mẫu",
          "content_markdown": "Vì $\\sqrt5\\ne1$, cả hai mẫu ban đầu đều khác $0$, nên các phép biến đổi hợp lệ."
        }
      ],
      "rubric": [
        {
          "criterion": "Chọn đúng liên hợp $\\sqrt5-1$ cho mẫu $\\sqrt5+1$.",
          "points": 1
        },
        {
          "criterion": "Chọn đúng liên hợp $\\sqrt5+1$ cho mẫu $\\sqrt5-1$.",
          "points": 1
        },
        {
          "criterion": "Tính đúng mỗi mẫu sau nhân liên hợp bằng $4$.",
          "points": 1
        },
        {
          "criterion": "Cộng và rút gọn đúng $E=\\sqrt5/2$.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Chỉ nhân tử mà không nhân mẫu với liên hợp.",
        "Tính $(\\sqrt5+1)(\\sqrt5-1)=5+1$ thay vì $5-1$.",
        "Cộng tử nhưng làm mất một trong hai dấu $\\pm1$."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ11 – Trục căn thức ở mẫu",
          "href": "../kien-thuc/11-can-thuc/core/"
        },
        {
          "label": "Practice Room CĐ11",
          "href": "../kien-thuc/11-can-thuc/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/11-can-thuc/bai-tap.md#11-WR-09",
        "docs/assets/data/curriculum/topic11-learning-workspace.json#rad11-core-4"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B3-R1-20261001",
        "receipt": "review-packets/written-exercise-library/24_NOTEBOOKLM_EXPANSION_B3_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX12-QUA-001",
      "exercise_kind": "standard",
      "topic_id": "CT12",
      "topic_slug": "12-phuong-trinh-bac-hai-viete",
      "topic_title": "Phương trình bậc hai & Viète",
      "problem_type_id": "quadratic-formula-check",
      "problem_type_title": "Giải phương trình bậc hai bằng biệt thức và kiểm tra nghiệm",
      "title": "Đọc đúng hệ số, tính Δ rồi kiểm tra đủ hai nghiệm",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        9
      ],
      "skills": [
        "he-so-abc",
        "tinh-delta",
        "cong-thuc-nghiem",
        "giai-pt-bac-hai"
      ],
      "prerequisites": [
        "can-bac-hai-so-hoc"
      ],
      "estimated_minutes": 11,
      "problem_markdown": "Giải phương trình\n\n$$3x^2+x-2=0$$\n\nbằng công thức nghiệm, rồi kiểm tra cả hai nghiệm tìm được.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Xác định hệ số",
          "content_markdown": "Phương trình đã ở dạng $ax^2+bx+c=0$ với\n\n$$a=3,\\qquad b=1,\\qquad c=-2.$$"
        },
        {
          "step_id": "S2",
          "title": "Tính biệt thức",
          "content_markdown": "Ta có\n\n$$\\Delta=b^2-4ac=1^2-4\\cdot3\\cdot(-2)=25>0.$$"
        },
        {
          "step_id": "S3",
          "title": "Dùng công thức nghiệm",
          "content_markdown": "Vì $\\Delta>0$, phương trình có hai nghiệm phân biệt:\n\n$$x=\\frac{-1\\pm\\sqrt{25}}{2\\cdot3}=\\frac{-1\\pm5}{6}.$$\n\nSuy ra\n\n$$x_1=\\frac23,\\qquad x_2=-1.$$"
        },
        {
          "step_id": "S4",
          "title": "Kiểm tra hai nghiệm",
          "content_markdown": "Với $x=\\frac23$:\n\n$$3\\cdot\\frac49+\\frac23-2=0.$$\n\nVới $x=-1$:\n\n$$3-1-2=0.$$\n\nCả hai đều thỏa phương trình."
        }
      ],
      "rubric": [
        {
          "criterion": "Xác định đúng $a=3,b=1,c=-2$.",
          "points": 1
        },
        {
          "criterion": "Tính đúng $\\Delta=25>0$.",
          "points": 1
        },
        {
          "criterion": "Dùng đúng công thức và tìm được $x=2/3,-1$.",
          "points": 1
        },
        {
          "criterion": "Kiểm tra đúng cả hai nghiệm.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Đọc $c=2$ thay vì $-2$.",
        "Quên mẫu $2a$ trong công thức nghiệm.",
        "Tìm đủ hai giá trị nhưng không kiểm tra hoặc kiểm tra chỉ một nghiệm."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ12 – Δ và công thức nghiệm",
          "href": "../kien-thuc/12-phuong-trinh-bac-hai-viete/core/"
        },
        {
          "label": "Practice Room CĐ12",
          "href": "../kien-thuc/12-phuong-trinh-bac-hai-viete/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/12-phuong-trinh-bac-hai-viete/bai-tap.md#12-WR-03",
        "docs/kien-thuc/12-phuong-trinh-bac-hai-viete/bai-tap.md#12-WR-05",
        "docs/assets/data/curriculum/topic12-learning-workspace.json#qua12-core-2",
        "docs/assets/data/curriculum/topic12-learning-workspace.json#qua12-core-3"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B3-R1-20261001",
        "receipt": "review-packets/written-exercise-library/24_NOTEBOOKLM_EXPANSION_B3_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX12-QUA-002",
      "exercise_kind": "standard",
      "topic_id": "CT12",
      "topic_slug": "12-phuong-trinh-bac-hai-viete",
      "topic_title": "Phương trình bậc hai & Viète",
      "problem_type_id": "quadratic-viete-build-and-solve",
      "problem_type_title": "Lập phương trình từ tổng–tích rồi giải nhanh",
      "title": "Đi ngược Viète rồi kiểm tra bằng nghiệm",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        9
      ],
      "skills": [
        "tong-tich-nghiem",
        "lap-pt-tu-nghiem",
        "nham-nghiem"
      ],
      "prerequisites": [
        "giai-pt-bac-hai"
      ],
      "estimated_minutes": 10,
      "problem_markdown": "Biết hai số $x_1,x_2$ có\n\n$$x_1+x_2=7,\\qquad x_1x_2=10.$$\n\n1. Lập phương trình bậc hai hệ số đầu bằng $1$ nhận $x_1,x_2$ làm hai nghiệm.\n2. Giải nhanh phương trình đó.\n3. Dùng tổng và tích để kiểm tra hai nghiệm tìm được.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Lập phương trình từ S và P",
          "content_markdown": "Với $S=x_1+x_2=7$ và $P=x_1x_2=10$, phương trình hệ số đầu bằng $1$ là\n\n$$x^2-Sx+P=0,$$\n\nnên\n\n$$x^2-7x+10=0.$$"
        },
        {
          "step_id": "S2",
          "title": "Giải nhanh bằng phân tích nhân tử",
          "content_markdown": "Ta có\n\n$$x^2-7x+10=(x-2)(x-5).$$\n\nVì vậy\n\n$$x=2\\quad\\text{hoặc}\\quad x=5.$$"
        },
        {
          "step_id": "S3",
          "title": "Kiểm tra bằng Viète",
          "content_markdown": "Hai nghiệm tìm được có\n\n$$2+5=7,\\qquad 2\\cdot5=10,$$\n\nđúng với tổng và tích đã cho."
        },
        {
          "step_id": "S4",
          "title": "Kết luận",
          "content_markdown": "Phương trình cần lập là $x^2-7x+10=0$ và hai nghiệm là $2$ và $5$."
        }
      ],
      "rubric": [
        {
          "criterion": "Dùng đúng dạng $x^2-Sx+P=0$.",
          "points": 1
        },
        {
          "criterion": "Lập đúng phương trình $x^2-7x+10=0$.",
          "points": 1
        },
        {
          "criterion": "Giải đúng để được hai nghiệm $2$ và $5$.",
          "points": 1
        },
        {
          "criterion": "Kiểm tra đúng tổng $7$ và tích $10$.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Viết $x^2+Sx+P=0$ và sai dấu hệ số của $x$.",
        "Nhầm tích $P$ thành $-P$.",
        "Tìm được hai nghiệm nhưng không kiểm tra lại tổng và tích đã cho."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ12 – Viète và lập phương trình từ nghiệm",
          "href": "../kien-thuc/12-phuong-trinh-bac-hai-viete/core/"
        },
        {
          "label": "Practice Room CĐ12",
          "href": "../kien-thuc/12-phuong-trinh-bac-hai-viete/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/12-phuong-trinh-bac-hai-viete/bai-tap.md#12-WR-07",
        "docs/kien-thuc/12-phuong-trinh-bac-hai-viete/bai-tap.md#12-WR-10",
        "docs/assets/data/curriculum/topic12-learning-workspace.json#qua12-core-4",
        "docs/assets/data/curriculum/topic12-learning-workspace.json#qua12-core-5"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B3-R1-20261001",
        "receipt": "review-packets/written-exercise-library/24_NOTEBOOKLM_EXPANSION_B3_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX13-LIN-001",
      "exercise_kind": "standard",
      "topic_id": "CT13",
      "topic_slug": "13-goc-va-duong-thang",
      "topic_title": "Góc và quan hệ giữa các đường thẳng",
      "problem_type_id": "parallel-converse-alt-interior",
      "problem_type_title": "Dùng góc so le trong để chứng minh song song",
      "title": "Nhận đúng vị trí góc rồi mới kết luận song song",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        7
      ],
      "skills": [
        "goc-so-le-trong",
        "dau-hieu-song-song",
        "lap-luan-chung-minh-ngan"
      ],
      "prerequisites": [
        "nhan-dang-goc-dac-biet"
      ],
      "estimated_minutes": 8,
      "problem_markdown": "Đường thẳng $c$ cắt hai đường thẳng phân biệt $a$ và $b$. Một cặp góc **so le trong** tạo bởi $c$ với $a,b$ đều có số đo $68^\\circ$.\n\nChứng minh $a\\parallel b$ và nêu rõ căn cứ dùng ở bước kết luận.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Xác định đúng quan hệ vị trí",
          "content_markdown": "Theo đề bài, hai góc đã cho là một cặp **so le trong** do đường thẳng $c$ cắt $a$ và $b$."
        },
        {
          "step_id": "S2",
          "title": "So sánh số đo",
          "content_markdown": "Hai góc đều bằng $68^\\circ$, nên chúng bằng nhau."
        },
        {
          "step_id": "S3",
          "title": "Áp dụng dấu hiệu song song",
          "content_markdown": "Nếu một đường thẳng cắt hai đường thẳng và tạo ra một cặp góc so le trong bằng nhau thì hai đường thẳng đó song song."
        },
        {
          "step_id": "S4",
          "title": "Kết luận",
          "content_markdown": "Vì vậy\n\n$$a\\parallel b.$$"
        }
      ],
      "rubric": [
        {
          "criterion": "Nhận đúng hai góc là so le trong.",
          "points": 1
        },
        {
          "criterion": "Nêu được hai góc bằng nhau vì cùng bằng $68^\\circ$.",
          "points": 1
        },
        {
          "criterion": "Dùng đúng dấu hiệu nhận biết hai đường thẳng song song.",
          "points": 1
        },
        {
          "criterion": "Kết luận đúng $a\\parallel b$.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Chỉ thấy hai góc bằng nhau rồi kết luận song song mà không xác định chúng là so le trong/đồng vị.",
        "Dùng tính chất 'hai đường song song thì góc bằng nhau' theo chiều ngược mà không gọi đúng đó là dấu hiệu.",
        "Suy ra song song chỉ từ hình vẽ."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ13 – Góc tạo bởi một đường cắt và dấu hiệu song song",
          "href": "../kien-thuc/13-goc-va-duong-thang/core/"
        },
        {
          "label": "Practice Room CĐ13",
          "href": "../kien-thuc/13-goc-va-duong-thang/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/13-goc-va-duong-thang/bai-tap.md#13-WR-08",
        "docs/assets/data/curriculum/topic13-learning-workspace.json#geo13-core-3",
        "docs/assets/data/curriculum/topic13-learning-workspace.json#geo13-core-4"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B4-R1-20261001",
        "receipt": "review-packets/written-exercise-library/30_NOTEBOOKLM_EXPANSION_B4_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX13-LIN-002",
      "exercise_kind": "standard",
      "topic_id": "CT13",
      "topic_slug": "13-goc-va-duong-thang",
      "topic_title": "Góc và quan hệ giữa các đường thẳng",
      "problem_type_id": "parallel-perpendicular-proof-chain",
      "problem_type_title": "GT/KL và chuỗi suy luận vuông góc–song song",
      "title": "Mỗi bước có căn cứ: từ song song đến vuông góc",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        7
      ],
      "skills": [
        "tinh-chat-song-song",
        "gia-thiet-ket-luan",
        "lap-luan-chung-minh-ngan"
      ],
      "prerequisites": [
        "goc-dong-vi"
      ],
      "estimated_minutes": 10,
      "problem_markdown": "Trong cùng một mặt phẳng, cho\n\n$$a\\parallel b,\\qquad c\\perp a.$$\n\n1. Viết giả thiết (GT) và kết luận (KL) của mệnh đề cần chứng minh.\n2. Chứng minh $c\\perp b$ bằng một chuỗi lập luận ngắn, trong đó mỗi bước đều nêu căn cứ.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Viết GT/KL",
          "content_markdown": "**GT:** $a\\parallel b$, $c\\perp a$.\n\n**KL:** $c\\perp b$."
        },
        {
          "step_id": "S2",
          "title": "Đổi vuông góc thành số đo góc",
          "content_markdown": "Vì $c\\perp a$, góc tạo bởi $c$ và $a$ bằng $90^\\circ$."
        },
        {
          "step_id": "S3",
          "title": "Dùng tính chất hai đường song song",
          "content_markdown": "Do $a\\parallel b$, góc đồng vị tương ứng tạo bởi đường cắt $c$ với $b$ bằng góc tạo bởi $c$ với $a$, nên cũng bằng $90^\\circ$."
        },
        {
          "step_id": "S4",
          "title": "Kết luận vuông góc",
          "content_markdown": "Vì góc tạo bởi $c$ và $b$ bằng $90^\\circ$, suy ra\n\n$$c\\perp b.$$"
        }
      ],
      "rubric": [
        {
          "criterion": "Viết đúng GT và KL.",
          "points": 1
        },
        {
          "criterion": "Từ $c\\perp a$ suy ra đúng góc $90^\\circ$.",
          "points": 1
        },
        {
          "criterion": "Dùng đúng tính chất góc đồng vị khi $a\\parallel b$.",
          "points": 1
        },
        {
          "criterion": "Kết luận đúng $c\\perp b$ và không dựa vào hình vẽ.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Đưa $c\\perp b$ vào giả thiết thay vì kết luận.",
        "Nói 'nhìn hình thấy vuông góc' mà không viện dẫn tính chất song song.",
        "Dùng dấu hiệu song song khi ở đây giả thiết song song đã có sẵn."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ13 – Tính chất song song và GT/KL",
          "href": "../kien-thuc/13-goc-va-duong-thang/core/"
        },
        {
          "label": "Practice Room CĐ13",
          "href": "../kien-thuc/13-goc-va-duong-thang/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/13-goc-va-duong-thang/bai-tap.md#13-WR-10",
        "docs/assets/data/curriculum/topic13-learning-workspace.json#geo13-core-4",
        "docs/assets/data/curriculum/topic13-learning-workspace.json#geo13-core-5"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B4-R1-20261001",
        "receipt": "review-packets/written-exercise-library/30_NOTEBOOKLM_EXPANSION_B4_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX15-CEN-001",
      "exercise_kind": "standard",
      "topic_id": "CT15",
      "topic_slug": "15-duong-dong-quy",
      "topic_title": "Các đường đồng quy trong tam giác",
      "problem_type_id": "centroid-median-ratio",
      "problem_type_title": "Trung tuyến và tỉ số trọng tâm",
      "title": "Đọc đúng chiều tỉ số 2:1 trên trung tuyến",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        7
      ],
      "skills": [
        "nhan-biet-trung-tuyen",
        "trong-tam",
        "ti-so-trong-tam"
      ],
      "prerequisites": [
        "trung-diem"
      ],
      "estimated_minutes": 8,
      "problem_markdown": "Trong tam giác $ABC$, $M$ là trung điểm của $BC$. Trọng tâm $G$ nằm trên trung tuyến $AM$ và\n\n$$AM=18\\text{ cm}.$$\n\n1. Giải thích vì sao $AM$ là trung tuyến.\n2. Tính $AG$ và $GM$.\n3. Kiểm tra lại kết quả bằng hai quan hệ $AG=2GM$ và $AG+GM=AM$.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Nhận diện trung tuyến",
          "content_markdown": "Vì $M$ là trung điểm của cạnh $BC$, đoạn nối đỉnh $A$ với $M$ là trung tuyến. Do đó $AM$ là trung tuyến của tam giác $ABC$."
        },
        {
          "step_id": "S2",
          "title": "Dùng tỉ số trọng tâm",
          "content_markdown": "Trọng tâm chia trung tuyến theo tỉ số tính từ đỉnh:\n\n$$AG:GM=2:1,$$\n\nhay\n\n$$AG=\\frac23AM,\\qquad GM=\\frac13AM.$$"
        },
        {
          "step_id": "S3",
          "title": "Tính độ dài",
          "content_markdown": "Với $AM=18$ cm:\n\n$$AG=\\frac23\\cdot18=12\\text{ cm},$$\n\n$$GM=\\frac13\\cdot18=6\\text{ cm}.$$"
        },
        {
          "step_id": "S4",
          "title": "Kiểm tra",
          "content_markdown": "Ta có $12=2\\cdot6$ và $12+6=18$, nên cả $AG=2GM$ và $AG+GM=AM$ đều đúng."
        }
      ],
      "rubric": [
        {
          "criterion": "Giải thích đúng $AM$ là trung tuyến vì $M$ là trung điểm $BC$.",
          "points": 1
        },
        {
          "criterion": "Dùng đúng tỉ số $AG:GM=2:1$ theo chiều từ đỉnh.",
          "points": 1
        },
        {
          "criterion": "Tính đúng $AG=12$ cm và $GM=6$ cm.",
          "points": 1
        },
        {
          "criterion": "Kiểm tra đúng cả hai quan hệ yêu cầu.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Viết ngược $AG:GM=1:2$.",
        "Áp dụng tỉ số trọng tâm trên một đoạn không phải trung tuyến.",
        "Tính đúng hai số nhưng không kiểm tra tổng bằng $AM$."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ15 – Trung tuyến và trọng tâm",
          "href": "../kien-thuc/15-duong-dong-quy/core/"
        },
        {
          "label": "Practice Room CĐ15",
          "href": "../kien-thuc/15-duong-dong-quy/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/15-duong-dong-quy/bai-tap.md#15-WR-01",
        "docs/kien-thuc/15-duong-dong-quy/bai-tap.md#15-WR-02",
        "docs/assets/data/curriculum/topic15-learning-workspace.json#geo15-core-1"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B4-R1-20261001",
        "receipt": "review-packets/written-exercise-library/30_NOTEBOOKLM_EXPANSION_B4_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX15-CEN-002",
      "exercise_kind": "standard",
      "topic_id": "CT15",
      "topic_slug": "15-duong-dong-quy",
      "topic_title": "Các đường đồng quy trong tam giác",
      "problem_type_id": "incenter-circumcenter-distinguish",
      "problem_type_title": "Phân biệt tâm nội tiếp và tâm ngoại tiếp từ họ đường",
      "title": "Không nhầm khoảng cách tới cạnh với khoảng cách tới đỉnh",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        7
      ],
      "skills": [
        "nhan-biet-phan-giac",
        "tam-noi-tiep",
        "nhan-biet-trung-truc",
        "tam-ngoai-tiep",
        "phan-biet-bon-tam"
      ],
      "prerequisites": [
        "tia-phan-giac",
        "tinh-chat-duong-trung-truc"
      ],
      "estimated_minutes": 12,
      "problem_markdown": "Trong tam giác $ABC$:\n\n- Hai tia phân giác **trong** của góc $A$ và góc $B$ cắt nhau tại $I$.\n- Hai đường trung trực của $AB$ và $AC$ cắt nhau tại $O$.\n\n1. Xác định vai trò của $I$ và $O$.\n2. Nêu quan hệ khoảng cách đặc trưng của $I$ đối với ba **đường thẳng chứa cạnh**.\n3. Nêu quan hệ khoảng cách đặc trưng của $O$ đối với ba **đỉnh**.\n4. Giải thích vì sao mệnh đề $IA=IB=IC$ không phải là căn cứ đúng để nhận dạng $I$ là tâm nội tiếp.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Nhận dạng I",
          "content_markdown": "Hai phân giác trong của tam giác cắt nhau tại tâm nội tiếp. Vì vậy $I$ là tâm nội tiếp của tam giác $ABC$; phân giác trong thứ ba cũng đi qua $I$."
        },
        {
          "step_id": "S2",
          "title": "Khoảng cách đặc trưng của I",
          "content_markdown": "Tâm nội tiếp cách đều ba đường thẳng chứa các cạnh:\n\n$$d(I,AB)=d(I,BC)=d(I,CA).$$"
        },
        {
          "step_id": "S3",
          "title": "Nhận dạng O",
          "content_markdown": "Hai đường trung trực của các cạnh cắt nhau tại tâm ngoại tiếp. Vì vậy $O$ là tâm ngoại tiếp của tam giác $ABC$; trung trực cạnh $BC$ cũng đi qua $O$."
        },
        {
          "step_id": "S4",
          "title": "Khoảng cách đặc trưng của O",
          "content_markdown": "Tâm ngoại tiếp cách đều ba đỉnh:\n\n$$OA=OB=OC.$$"
        },
        {
          "step_id": "S5",
          "title": "Phân biệt hai tính chất",
          "content_markdown": "Quan hệ $IA=IB=IC$ là dạng 'cách đều ba đỉnh', gắn với tâm ngoại tiếp chứ không phải tính chất nhận dạng tâm nội tiếp. Với tâm nội tiếp, đại lượng cần so sánh là khoảng cách từ $I$ tới ba đường thẳng chứa cạnh."
        }
      ],
      "rubric": [
        {
          "criterion": "Xác định đúng $I$ là tâm nội tiếp.",
          "points": 1
        },
        {
          "criterion": "Nêu đúng $d(I,AB)=d(I,BC)=d(I,CA)$.",
          "points": 1
        },
        {
          "criterion": "Xác định đúng $O$ là tâm ngoại tiếp và $OA=OB=OC$.",
          "points": 1
        },
        {
          "criterion": "Giải thích đúng vì sao $IA=IB=IC$ không nhận dạng tâm nội tiếp.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Dùng khoảng cách tới đỉnh để mô tả tâm nội tiếp.",
        "Nhầm giao của phân giác trong với giao của trung trực.",
        "Cho rằng tâm nội tiếp và tâm ngoại tiếp luôn trùng nhau."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ15 – Tâm nội tiếp và tâm ngoại tiếp",
          "href": "../kien-thuc/15-duong-dong-quy/core/"
        },
        {
          "label": "Practice Room CĐ15",
          "href": "../kien-thuc/15-duong-dong-quy/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/15-duong-dong-quy/bai-tap.md#15-WR-05",
        "docs/kien-thuc/15-duong-dong-quy/bai-tap.md#15-WR-06",
        "docs/kien-thuc/15-duong-dong-quy/bai-tap.md#15-WR-07",
        "docs/assets/data/curriculum/topic15-learning-workspace.json#geo15-core-3",
        "docs/assets/data/curriculum/topic15-learning-workspace.json#geo15-core-4",
        "docs/assets/data/curriculum/topic15-learning-workspace.json#geo15-core-5"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B4-R1-20261001",
        "receipt": "review-packets/written-exercise-library/30_NOTEBOOKLM_EXPANSION_B4_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX23-PRO-001",
      "exercise_kind": "standard",
      "topic_id": "CT23",
      "topic_slug": "23-xac-suat",
      "topic_title": "Xác suất",
      "problem_type_id": "experimental-probability-interpret",
      "problem_type_title": "Xác suất thực nghiệm và cách diễn giải",
      "title": "Tính từ dữ liệu quan sát, không biến thành lời tiên đoán chắc chắn",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        6,
        7,
        8
      ],
      "skills": [
        "xac-suat-thuc-nghiem",
        "kiem-tra-xac-suat"
      ],
      "prerequisites": [],
      "estimated_minutes": 8,
      "problem_markdown": "Một đồng xu được tung $40$ lần, trong đó xuất hiện mặt ngửa $23$ lần.\n\n1. Tính xác suất thực nghiệm của biến cố $A$: “xuất hiện mặt ngửa”.\n2. Kiểm tra kết quả có nằm trong khoảng hợp lệ của xác suất hay không.\n3. Giải thích vì sao kết quả trên **không** có nghĩa rằng lần tung tiếp theo chắc chắn sẽ ra ngửa.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Xác định số lần biến cố xảy ra",
          "content_markdown": "Biến cố $A$ xảy ra $23$ lần trong tổng số $40$ lần thử."
        },
        {
          "step_id": "S2",
          "title": "Tính xác suất thực nghiệm",
          "content_markdown": "Xác suất thực nghiệm là\n\n$$P_{\\text{tn}}(A)=\\frac{23}{40}=0{,}575.$$"
        },
        {
          "step_id": "S3",
          "title": "Kiểm tra khoảng giá trị",
          "content_markdown": "Ta có\n\n$$0\\le0{,}575\\le1,$$\n\nnên giá trị nhận được nằm trong khoảng hợp lệ của xác suất."
        },
        {
          "step_id": "S4",
          "title": "Diễn giải đúng",
          "content_markdown": "Giá trị $23/40$ chỉ là tần số tương đối quan sát được trong **40 lần thử đã thực hiện**. Nó không khẳng định chắc chắn kết quả của lần tung tiếp theo."
        }
      ],
      "rubric": [
        {
          "criterion": "Xác định đúng 23 lần thuận lợi trên 40 lần thử.",
          "points": 1
        },
        {
          "criterion": "Tính đúng $23/40=0{,}575$.",
          "points": 1
        },
        {
          "criterion": "Kiểm tra đúng kết quả thuộc $[0,1]$.",
          "points": 1
        },
        {
          "criterion": "Giải thích đúng rằng xác suất thực nghiệm không dự đoán chắc chắn lần tiếp theo.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Lấy $17/40$ là xác suất thực nghiệm của mặt ngửa.",
        "Chia 23 cho số lần mặt sấp thay vì tổng số lần thử.",
        "Hiểu 0,575 là lời khẳng định chắc chắn về lần tung tiếp theo."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ23 – Xác suất thực nghiệm",
          "href": "../kien-thuc/23-xac-suat/core/"
        },
        {
          "label": "Practice Room CĐ23",
          "href": "../kien-thuc/23-xac-suat/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/23-xac-suat/bai-tap.md#b-luyen-tu-luan--trinh-bay",
        "docs/assets/data/curriculum/topic23-learning-workspace.json#prob23-core-1",
        "docs/assets/data/curriculum/topic23-learning-workspace.json#prob23-core-5"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B4-R1-20261001",
        "receipt": "review-packets/written-exercise-library/30_NOTEBOOKLM_EXPANSION_B4_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX23-PRO-002",
      "exercise_kind": "standard",
      "topic_id": "CT23",
      "topic_slug": "23-xac-suat",
      "topic_title": "Xác suất",
      "problem_type_id": "classical-vs-experimental",
      "problem_type_title": "Xác suất cổ điển và đối chiếu thực nghiệm",
      "title": "Đếm kết quả thuận lợi trước, rồi mới so với dữ liệu thử",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        7,
        8
      ],
      "skills": [
        "xac-suat-co-dien",
        "kiem-tra-xac-suat",
        "xac-suat-thuc-nghiem"
      ],
      "prerequisites": [],
      "estimated_minutes": 12,
      "problem_markdown": "Có $12$ thẻ giống nhau, đánh số từ $1$ đến $12$. Rút ngẫu nhiên một thẻ. Gọi $A$ là biến cố: “số trên thẻ chia hết cho $2$ **hoặc** chia hết cho $3$”.\n\n1. Giải thích vì sao có thể dùng công thức xác suất cổ điển.\n2. Liệt kê các kết quả thuận lợi của $A$ và tính $P(A)$.\n3. Trong một thí nghiệm lặp lại $60$ lần với **hoàn lại thẻ sau mỗi lần rút**, $A$ xảy ra $38$ lần. Tính xác suất thực nghiệm của $A$.\n4. So sánh hai giá trị và giải thích vì sao chúng không bắt buộc phải bằng nhau trong một mẫu hữu hạn.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Kiểm tra điều kiện dùng xác suất cổ điển",
          "content_markdown": "Các thẻ giống nhau và được rút ngẫu nhiên, nên $12$ kết quả $1,2,\\ldots,12$ được coi là đồng khả năng. Vì vậy có thể dùng tỉ số số kết quả thuận lợi trên tổng số kết quả."
        },
        {
          "step_id": "S2",
          "title": "Liệt kê kết quả thuận lợi",
          "content_markdown": "Các số từ $1$ đến $12$ chia hết cho $2$ hoặc $3$ là\n\n$$\\{2,3,4,6,8,9,10,12\\}.$$\n\nCó $8$ kết quả thuận lợi."
        },
        {
          "step_id": "S3",
          "title": "Tính xác suất theo mô hình",
          "content_markdown": "Do đó\n\n$$P(A)=\\frac8{12}=\\frac23.$$"
        },
        {
          "step_id": "S4",
          "title": "Tính xác suất thực nghiệm",
          "content_markdown": "Trong $60$ lần thử có hoàn lại, $A$ xảy ra $38$ lần, nên\n\n$$P_{\\text{tn}}(A)=\\frac{38}{60}=\\frac{19}{30}.$$"
        },
        {
          "step_id": "S5",
          "title": "So sánh và diễn giải",
          "content_markdown": "Ta có $\\frac{19}{30}\\ne\\frac23$. Hai giá trị khá gần nhau nhưng không bắt buộc bằng nhau vì xác suất thực nghiệm được tính từ một mẫu hữu hạn; nó có thể dao động quanh xác suất theo mô hình."
        }
      ],
      "rubric": [
        {
          "criterion": "Nêu đúng điều kiện đồng khả năng của 12 thẻ.",
          "points": 1
        },
        {
          "criterion": "Liệt kê đúng 8 kết quả thuận lợi, không đếm 6 và 12 hai lần.",
          "points": 1
        },
        {
          "criterion": "Tính đúng $P(A)=2/3$.",
          "points": 1
        },
        {
          "criterion": "Tính đúng xác suất thực nghiệm $19/30$.",
          "points": 1
        },
        {
          "criterion": "Giải thích đúng vì sao hai giá trị không bắt buộc bằng nhau ở mẫu hữu hạn.",
          "points": 1
        }
      ],
      "rubric_total": 5,
      "common_mistakes": [
        "Đếm các số chia hết cho cả 2 và 3 hai lần.",
        "Dùng công thức cổ điển mà không kiểm tra điều kiện đồng khả năng.",
        "Cho rằng xác suất thực nghiệm phải bằng chính xác xác suất lý thuyết sau 60 lần thử."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ23 – Xác suất cổ điển và thực nghiệm",
          "href": "../kien-thuc/23-xac-suat/core/"
        },
        {
          "label": "Practice Room CĐ23",
          "href": "../kien-thuc/23-xac-suat/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/23-xac-suat/bai-tap.md#23-M2-05",
        "docs/kien-thuc/23-xac-suat/bai-tap.md#23-M3-10",
        "docs/assets/data/curriculum/topic23-learning-workspace.json#prob23-core-3",
        "docs/assets/data/curriculum/topic23-learning-workspace.json#prob23-core-5"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B4-R1-20261001",
        "receipt": "review-packets/written-exercise-library/30_NOTEBOOKLM_EXPANSION_B4_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX04-ALG-001",
      "exercise_kind": "standard",
      "topic_id": "CT04",
      "topic_slug": "04-bieu-thuc-dai-so",
      "topic_title": "Biểu thức và biến đổi đại số",
      "problem_type_id": "polynomial-subtraction-signs",
      "problem_type_title": "Trừ đa thức và bỏ ngoặc đúng dấu",
      "title": "Đổi dấu toàn bộ đa thức bị trừ rồi mới thu gọn",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        7,
        8
      ],
      "skills": [
        "cong-tru-da-thuc",
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "prerequisites": [
        "hang-tu-dong-dang"
      ],
      "estimated_minutes": 9,
      "problem_markdown": "Cho\n\n$$A=3x^2-2x+4,\\qquad B=x^2+x-5.$$\n\nTính và thu gọn $A-B$. Hãy viết riêng bước bỏ ngoặc để thể hiện rõ việc đổi dấu.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Viết phép trừ có ngoặc",
          "content_markdown": "Ta có\n\n$$A-B=3x^2-2x+4-(x^2+x-5).$$"
        },
        {
          "step_id": "S2",
          "title": "Bỏ ngoặc và đổi đủ dấu",
          "content_markdown": "Dấu trừ trước ngoặc làm đổi dấu **tất cả** hạng tử của $B$:\n\n$$A-B=3x^2-2x+4-x^2-x+5.$$"
        },
        {
          "step_id": "S3",
          "title": "Gộp hạng tử đồng dạng",
          "content_markdown": "Gộp theo từng bậc:\n\n$$A-B=(3x^2-x^2)+(-2x-x)+(4+5).$$"
        },
        {
          "step_id": "S4",
          "title": "Kết luận",
          "content_markdown": "Do đó\n\n$$\\boxed{A-B=2x^2-3x+9}.$$"
        }
      ],
      "rubric": [
        {
          "criterion": "Viết đúng $A-B$ với toàn bộ $B$ trong ngoặc.",
          "points": 1
        },
        {
          "criterion": "Bỏ ngoặc đúng thành $-x^2-x+5$.",
          "points": 1
        },
        {
          "criterion": "Gộp đúng các hạng tử đồng dạng.",
          "points": 1
        },
        {
          "criterion": "Kết luận đúng $2x^2-3x+9$.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Chỉ đổi dấu hạng tử đầu của $B$.",
        "Giữ $-5$ thành $-5$ sau khi bỏ ngoặc thay vì đổi thành $+5$.",
        "Gộp các hạng tử khác bậc."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ04 – Cộng, trừ và bỏ ngoặc",
          "href": "../kien-thuc/04-bieu-thuc-dai-so/core/"
        },
        {
          "label": "Practice Room CĐ04",
          "href": "../kien-thuc/04-bieu-thuc-dai-so/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md#04-WR-03",
        "docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md#04-WR-04",
        "docs/assets/data/curriculum/topic04-learning-workspace.json#alg04-core-3"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B5-R1-20261001",
        "receipt": "review-packets/written-exercise-library/36_NOTEBOOKLM_EXPANSION_B5_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX04-ALG-002",
      "exercise_kind": "standard",
      "topic_id": "CT04",
      "topic_slug": "04-bieu-thuc-dai-so",
      "topic_title": "Biểu thức và biến đổi đại số",
      "problem_type_id": "polynomial-divide-monomial-evaluate",
      "problem_type_title": "Chia đa thức cho đơn thức rồi tính giá trị",
      "title": "Giữ điều kiện gốc sau khi rút gọn",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        8
      ],
      "skills": [
        "chia-da-thuc-cho-don-thuc",
        "tinh-gia-tri-bieu-thuc"
      ],
      "prerequisites": [
        "nhan-biet-da-thuc",
        "tinh-phan-phoi"
      ],
      "estimated_minutes": 11,
      "problem_markdown": "Cho\n\n$$T=(9x^3-6x^2+3x):(3x),\\qquad x\\ne0.$$\n\n1. Thu gọn $T$ bằng cách chia từng hạng tử.\n2. Tính $T$ tại $x=2$.\n3. Giải thích vì sao điều kiện $x\\ne0$ vẫn cần được ghi nhớ dù biểu thức sau khi thu gọn không còn mẫu.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Giữ điều kiện",
          "content_markdown": "Số chia là $3x$, nên điều kiện ban đầu là\n\n$$3x\\ne0\\Longleftrightarrow x\\ne0.$$"
        },
        {
          "step_id": "S2",
          "title": "Chia từng hạng tử",
          "content_markdown": "Ta có\n\n$$T=\\frac{9x^3}{3x}-\\frac{6x^2}{3x}+\\frac{3x}{3x}=3x^2-2x+1,$$\n\ntrên miền $x\\ne0$."
        },
        {
          "step_id": "S3",
          "title": "Thay giá trị hợp lệ",
          "content_markdown": "Giá trị $x=2$ thỏa điều kiện, nên\n\n$$T(2)=3\\cdot2^2-2\\cdot2+1=12-4+1=9.$$"
        },
        {
          "step_id": "S4",
          "title": "Giải thích điều kiện gốc",
          "content_markdown": "Rút gọn không làm phép chia ban đầu trở nên xác định tại $x=0$. Vì vậy miền xác định gốc $x\\ne0$ phải được giữ."
        }
      ],
      "rubric": [
        {
          "criterion": "Ghi đúng điều kiện $x\\ne0$.",
          "points": 1
        },
        {
          "criterion": "Chia đúng từng hạng tử để được $3x^2-2x+1$.",
          "points": 1
        },
        {
          "criterion": "Thay $x=2$ và tính đúng $T=9$.",
          "points": 1
        },
        {
          "criterion": "Giải thích đúng vì sao không được lấy lại $x=0$ sau rút gọn.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Chỉ chia hạng tử đầu cho $3x$.",
        "Bỏ mất điều kiện $x\\ne0$ sau khi rút gọn.",
        "Thay $x=2$ trước khi hoàn tất phép chia và thu gọn."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ04 – Chia cho đơn thức và tính giá trị",
          "href": "../kien-thuc/04-bieu-thuc-dai-so/core/"
        },
        {
          "label": "Practice Room CĐ04",
          "href": "../kien-thuc/04-bieu-thuc-dai-so/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md#04-WR-07",
        "docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md#04-WR-08",
        "docs/assets/data/curriculum/topic04-learning-workspace.json#alg04-core-5"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B5-R1-20261001",
        "receipt": "review-packets/written-exercise-library/36_NOTEBOOKLM_EXPANSION_B5_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX05-IDN-001",
      "exercise_kind": "standard",
      "topic_id": "CT05",
      "topic_slug": "05-7-hang-dang-thuc",
      "topic_title": "7 Hằng đẳng thức đáng nhớ",
      "problem_type_id": "perfect-square-reverse-identification",
      "problem_type_title": "Nhận dạng bình phương hoàn chỉnh",
      "title": "Kiểm tra đủ hai bình phương và hạng tử giữa",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        8
      ],
      "skills": [
        "binh-phuong-hieu",
        "binh-phuong-hoan-chinh",
        "nhan-dang-hdt"
      ],
      "prerequisites": [
        "nhan-bieu-thuc"
      ],
      "estimated_minutes": 8,
      "problem_markdown": "Viết đa thức\n\n$$x^2-10x+25$$\n\ndưới dạng bình phương của một hiệu. Hãy chỉ rõ ba thành phần dùng để nhận dạng và khai triển ngược để kiểm tra.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Nhận hai bình phương",
          "content_markdown": "Ta có\n\n$$x^2=(x)^2,\\qquad 25=5^2.$$"
        },
        {
          "step_id": "S2",
          "title": "Kiểm tra hạng tử giữa",
          "content_markdown": "Hạng tử giữa là\n\n$$-10x=-2\\cdot x\\cdot5,$$\n\nđúng với mẫu $A^2-2AB+B^2$."
        },
        {
          "step_id": "S3",
          "title": "Viết bình phương hoàn chỉnh",
          "content_markdown": "Vì vậy\n\n$$x^2-10x+25=(x-5)^2.$$"
        },
        {
          "step_id": "S4",
          "title": "Khai triển ngược để kiểm tra",
          "content_markdown": "Ta có\n\n$$(x-5)^2=x^2-10x+25,$$\n\ntrùng với đa thức ban đầu."
        }
      ],
      "rubric": [
        {
          "criterion": "Nhận đúng $x^2$ và $25$ là hai bình phương.",
          "points": 1
        },
        {
          "criterion": "Kiểm tra đúng $-10x=-2\\cdot x\\cdot5$.",
          "points": 1
        },
        {
          "criterion": "Viết đúng $(x-5)^2$.",
          "points": 1
        },
        {
          "criterion": "Khai triển ngược đúng để kiểm tra.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Chỉ nhìn hạng tử đầu và cuối rồi kết luận mà không kiểm tra hạng tử giữa.",
        "Viết $(x+5)^2$ dù hạng tử giữa mang dấu âm.",
        "Viết $(x-5)^2=x^2-25$."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ05 – Bình phương tổng và hiệu",
          "href": "../kien-thuc/05-7-hang-dang-thuc/core/"
        },
        {
          "label": "Practice Room CĐ05",
          "href": "../kien-thuc/05-7-hang-dang-thuc/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md#05-WR-02",
        "docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md#05-WR-03",
        "docs/assets/data/curriculum/topic05-learning-workspace.json#id05-core-1",
        "docs/assets/data/curriculum/topic05-learning-workspace.json#id05-core-5"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B5-R1-20261001",
        "receipt": "review-packets/written-exercise-library/36_NOTEBOOKLM_EXPANSION_B5_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX05-IDN-002",
      "exercise_kind": "standard",
      "topic_id": "CT05",
      "topic_slug": "05-7-hang-dang-thuc",
      "topic_title": "7 Hằng đẳng thức đáng nhớ",
      "problem_type_id": "difference-of-squares-structured-simplify",
      "problem_type_title": "Rút gọn bằng hiệu hai bình phương",
      "title": "Nhìn hai bình phương như A²−B² trước khi khai triển dài",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        8
      ],
      "skills": [
        "hieu-hai-binh-phuong",
        "nhan-dang-hdt",
        "rut-gon-hdt"
      ],
      "prerequisites": [
        "binh-phuong-tong",
        "binh-phuong-hieu"
      ],
      "estimated_minutes": 10,
      "problem_markdown": "Rút gọn\n\n$$E=(2x+5)^2-(2x-5)^2$$\n\nbằng cách nhận dạng cấu trúc hằng đẳng thức trước, không khai triển riêng từng bình phương.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Đặt cấu trúc A và B",
          "content_markdown": "Đặt\n\n$$A=2x+5,\\qquad B=2x-5.$$\n\nKhi đó $E=A^2-B^2$."
        },
        {
          "step_id": "S2",
          "title": "Dùng hiệu hai bình phương",
          "content_markdown": "Áp dụng\n\n$$A^2-B^2=(A-B)(A+B).$$\n\nSuy ra\n\n$$E=[(2x+5)-(2x-5)]\\,[(2x+5)+(2x-5)].$$"
        },
        {
          "step_id": "S3",
          "title": "Rút gọn hai nhân tử",
          "content_markdown": "Ta có\n\n$$(2x+5)-(2x-5)=10,$$\n\n$$(2x+5)+(2x-5)=4x.$$"
        },
        {
          "step_id": "S4",
          "title": "Kết luận",
          "content_markdown": "Do đó\n\n$$\\boxed{E=10\\cdot4x=40x}.$$"
        }
      ],
      "rubric": [
        {
          "criterion": "Nhận đúng cấu trúc $A^2-B^2$.",
          "points": 1
        },
        {
          "criterion": "Áp dụng đúng $(A-B)(A+B)$.",
          "points": 1
        },
        {
          "criterion": "Rút gọn đúng hai nhân tử thành $10$ và $4x$.",
          "points": 1
        },
        {
          "criterion": "Kết luận đúng $E=40x$.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Áp dụng sai thành $(A-B)^2$.",
        "Bỏ ngoặc sai khi tính $(2x+5)-(2x-5)$.",
        "Khai triển dài rồi dễ sai dấu thay vì dùng cấu trúc đã yêu cầu."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ05 – Hiệu hai bình phương và nhận dạng HĐT",
          "href": "../kien-thuc/05-7-hang-dang-thuc/core/"
        },
        {
          "label": "Practice Room CĐ05",
          "href": "../kien-thuc/05-7-hang-dang-thuc/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md#05-WR-04",
        "docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md#05-WR-10",
        "docs/assets/data/curriculum/topic05-learning-workspace.json#id05-core-2",
        "docs/assets/data/curriculum/topic05-learning-workspace.json#id05-core-5"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B5-R1-20261001",
        "receipt": "review-packets/written-exercise-library/36_NOTEBOOKLM_EXPANSION_B5_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX06-FAC-001",
      "exercise_kind": "standard",
      "topic_id": "CT06",
      "topic_slug": "06-phan-tich-da-thuc",
      "topic_title": "Phân tích đa thức thành nhân tử",
      "problem_type_id": "factor-common-sign-flip",
      "problem_type_title": "Đổi dấu để tạo nhân tử chung",
      "title": "Nhìn hai ngoặc đối nhau trước khi đặt nhân tử",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        8
      ],
      "skills": [
        "nhan-tu-chung",
        "doi-dau-nhan-tu-chung"
      ],
      "prerequisites": [
        "thu-gon-da-thuc"
      ],
      "estimated_minutes": 9,
      "problem_markdown": "Phân tích hoàn toàn thành nhân tử:\n\n$$P=2x(x-y)+4(y-x).$$\n\nHãy chỉ rõ bước đổi dấu của ngoặc trước khi đặt nhân tử chung.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Nhận hai ngoặc đối nhau",
          "content_markdown": "Ta có\n\n$$y-x=-(x-y).$$"
        },
        {
          "step_id": "S2",
          "title": "Đổi về cùng một ngoặc",
          "content_markdown": "Do đó\n\n$$P=2x(x-y)-4(x-y).$$"
        },
        {
          "step_id": "S3",
          "title": "Đặt nhân tử chung",
          "content_markdown": "Đặt $2(x-y)$ làm nhân tử chung:\n\n$$P=2(x-y)(x-2).$$"
        },
        {
          "step_id": "S4",
          "title": "Kiểm tra nhanh",
          "content_markdown": "Nhân ngược:\n\n$$2(x-y)(x-2)=2x(x-y)-4(x-y)=2x(x-y)+4(y-x),$$\n\nđúng với biểu thức ban đầu."
        }
      ],
      "rubric": [
        {
          "criterion": "Dùng đúng $y-x=-(x-y)$.",
          "points": 1
        },
        {
          "criterion": "Đổi biểu thức về $2x(x-y)-4(x-y)$.",
          "points": 1
        },
        {
          "criterion": "Đặt đúng nhân tử chung để được $2(x-y)(x-2)$.",
          "points": 1
        },
        {
          "criterion": "Kiểm tra ngược hợp lệ.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Xem $y-x$ và $x-y$ là cùng một ngoặc.",
        "Đổi dấu ngoặc nhưng quên đổi dấu hệ số đi kèm.",
        "Chỉ đặt $(x-y)$ chung và không rút tiếp nhân tử số $2$."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ06 – Nhân tử chung và đổi dấu",
          "href": "../kien-thuc/06-phan-tich-da-thuc/core/"
        },
        {
          "label": "Practice Room CĐ06",
          "href": "../kien-thuc/06-phan-tich-da-thuc/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-01",
        "docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-02",
        "docs/assets/data/curriculum/topic06-learning-workspace.json#fac06-core-1"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B5-R1-20261001",
        "receipt": "review-packets/written-exercise-library/36_NOTEBOOKLM_EXPANSION_B5_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX06-FAC-002",
      "exercise_kind": "standard",
      "topic_id": "CT06",
      "topic_slug": "06-phan-tich-da-thuc",
      "topic_title": "Phân tích đa thức thành nhân tử",
      "problem_type_id": "factor-grouping-then-identity",
      "problem_type_title": "Nhóm hạng tử rồi tiếp tục bằng hằng đẳng thức",
      "title": "Không dừng khi nhân tử vẫn còn phân tích được",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        8
      ],
      "skills": [
        "nhom-hang-tu",
        "phoi-hop-phuong-phap",
        "hieu-hai-binh-phuong",
        "kiem-tra-phan-tich"
      ],
      "prerequisites": [
        "nhan-tu-chung",
        "hieu-hai-binh-phuong"
      ],
      "estimated_minutes": 13,
      "problem_markdown": "Phân tích **hoàn toàn** thành nhân tử:\n\n$$Q=x^3+2x^2-9x-18.$$\n\nSau khi phân tích, hãy nhân ngược hoặc kiểm tra cấu trúc để xác nhận kết quả.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Nhóm có mục đích",
          "content_markdown": "Nhóm hai hạng tử đầu và hai hạng tử sau:\n\n$$Q=(x^3+2x^2)+(-9x-18).$$"
        },
        {
          "step_id": "S2",
          "title": "Đặt nhân tử từng nhóm",
          "content_markdown": "Ta được\n\n$$Q=x^2(x+2)-9(x+2)=(x+2)(x^2-9).$$"
        },
        {
          "step_id": "S3",
          "title": "Tiếp tục phân tích",
          "content_markdown": "Vì\n\n$$x^2-9=x^2-3^2=(x-3)(x+3),$$\n\nnên\n\n$$Q=(x+2)(x-3)(x+3).$$"
        },
        {
          "step_id": "S4",
          "title": "Kiểm tra đã phân tích hoàn toàn",
          "content_markdown": "Ba nhân tử bậc nhất không còn phân tích tiếp bằng các phương pháp Core đã học. Nhân $(x-3)(x+3)=x^2-9$ rồi nhân với $(x+2)$ sẽ thu lại $x^3+2x^2-9x-18$."
        }
      ],
      "rubric": [
        {
          "criterion": "Nhóm đúng để xuất hiện chung $(x+2)$.",
          "points": 1
        },
        {
          "criterion": "Đặt nhân tử đúng và được $(x+2)(x^2-9)$.",
          "points": 1
        },
        {
          "criterion": "Tiếp tục dùng hiệu hai bình phương để được $(x+2)(x-3)(x+3)$.",
          "points": 1
        },
        {
          "criterion": "Kiểm tra được kết quả và không dừng sớm.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Nhóm tùy ý khiến hai nhóm không tạo cùng một ngoặc.",
        "Dừng ở $(x+2)(x^2-9)$ dù $x^2-9$ còn phân tích được.",
        "Dùng kỹ thuật tách hạng tử giữa hoặc giải phương trình tích dù bài chỉ yêu cầu phân tích theo Core."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ06 – Phối hợp nhiều phương pháp",
          "href": "../kien-thuc/06-phan-tich-da-thuc/core/"
        },
        {
          "label": "Practice Room CĐ06",
          "href": "../kien-thuc/06-phan-tich-da-thuc/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-06",
        "docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-08",
        "docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-10",
        "docs/assets/data/curriculum/topic06-learning-workspace.json#fac06-core-3",
        "docs/assets/data/curriculum/topic06-learning-workspace.json#fac06-core-4",
        "docs/assets/data/curriculum/topic06-learning-workspace.json#fac06-core-5"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B5-R1-20261001",
        "receipt": "review-packets/written-exercise-library/36_NOTEBOOKLM_EXPANSION_B5_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX02-NUM-001",
      "exercise_kind": "standard",
      "topic_id": "CT02",
      "topic_slug": "02-so-va-phep-tinh",
      "topic_title": "Số và phép tính",
      "problem_type_id": "gcd-max-equal-groups",
      "problem_type_title": "Chọn ƯCLN cho bài toán chia nhiều nhóm nhất",
      "title": "Nhiều phần quà giống nhau nhất: vì sao phải dùng ƯCLN?",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        6
      ],
      "skills": [
        "ucln",
        "phan-tich-thua-so-nguyen-to"
      ],
      "prerequisites": [
        "thu-tu-phep-tinh"
      ],
      "estimated_minutes": 10,
      "problem_markdown": "Có $36$ bút và $48$ quyển vở. Muốn chia thành **nhiều phần quà giống nhau nhất**, dùng hết cả hai loại.\n\n1. Giải thích vì sao số phần quà phải là ước chung của $36$ và $48$.\n2. Tìm số phần quà nhiều nhất.\n3. Tính số bút và số vở trong mỗi phần quà.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Chuyển điều kiện thực tế thành điều kiện chia hết",
          "content_markdown": "Nếu chia thành $n$ phần quà giống nhau và dùng hết, thì $36$ và $48$ đều phải chia hết cho $n$. Vì vậy $n$ là một **ước chung** của $36$ và $48$."
        },
        {
          "step_id": "S2",
          "title": "Chọn công cụ phù hợp",
          "content_markdown": "Đề yêu cầu **nhiều phần quà nhất**, nên ta cần ước chung lớn nhất:\n\n$$n=\\operatorname{ƯCLN}(36,48).$$"
        },
        {
          "step_id": "S3",
          "title": "Tính ƯCLN",
          "content_markdown": "Phân tích:\n\n$$36=2^2\\cdot3^2,\\qquad48=2^4\\cdot3.$$\n\nSuy ra\n\n$$\\operatorname{ƯCLN}(36,48)=2^2\\cdot3=12.$$"
        },
        {
          "step_id": "S4",
          "title": "Tính mỗi phần quà",
          "content_markdown": "Có $12$ phần quà. Mỗi phần có\n\n$$36:12=3\\text{ bút},\\qquad48:12=4\\text{ vở}.$$"
        }
      ],
      "rubric": [
        {
          "criterion": "Giải thích được số phần quà phải là ước chung.",
          "points": 1
        },
        {
          "criterion": "Chọn đúng ƯCLN vì cần số nhóm lớn nhất.",
          "points": 1
        },
        {
          "criterion": "Tính đúng $\\operatorname{ƯCLN}(36,48)=12$.",
          "points": 1
        },
        {
          "criterion": "Kết luận đúng mỗi phần có 3 bút và 4 vở.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Dùng BCNN thay vì ƯCLN.",
        "Tìm được 12 nhưng không giải thích vì sao đó là số nhóm lớn nhất.",
        "Chia ngược số nhóm cho số đồ vật."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ02 – ƯCLN và BCNN",
          "href": "../kien-thuc/02-so-va-phep-tinh/core/"
        },
        {
          "label": "Practice Room CĐ02",
          "href": "../kien-thuc/02-so-va-phep-tinh/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/02-so-va-phep-tinh/bai-tap.md#02-G6-WR-02",
        "docs/assets/data/curriculum/topic02-learning-workspace.json#num02-g6-core-2"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B6-R1-20261001",
        "receipt": "review-packets/written-exercise-library/42_NOTEBOOKLM_EXPANSION_B6_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX02-NUM-002",
      "exercise_kind": "standard",
      "topic_id": "CT02",
      "topic_slug": "02-so-va-phep-tinh",
      "topic_title": "Số và phép tính",
      "problem_type_id": "percentage-discount-two-step",
      "problem_type_title": "Phần trăm: phân biệt số tiền giảm và giá phải trả",
      "title": "Giảm 15%: tính đúng đại lượng ở từng bước",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        6
      ],
      "skills": [
        "phan-tram",
        "so-huu-ti-thap-phan"
      ],
      "prerequisites": [
        "phep-tinh-phan-so"
      ],
      "estimated_minutes": 9,
      "problem_markdown": "Một món hàng có giá niêm yết $800\\,000$ đồng và được giảm $15\\%$ giá ban đầu.\n\n1. Tính số tiền được giảm.\n2. Tính số tiền phải trả.\n3. Kiểm tra kết quả bằng cách tính trực tiếp $85\\%$ của giá ban đầu.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Tính số tiền giảm",
          "content_markdown": "Ta có\n\n$$15\\%=\\frac{15}{100}=0{,}15.$$\n\nSố tiền giảm là\n\n$$800\\,000\\cdot0{,}15=120\\,000\\text{ đồng}.$$"
        },
        {
          "step_id": "S2",
          "title": "Tính giá phải trả",
          "content_markdown": "Giá phải trả là\n\n$$800\\,000-120\\,000=680\\,000\\text{ đồng}.$$"
        },
        {
          "step_id": "S3",
          "title": "Kiểm tra bằng phần còn lại",
          "content_markdown": "Sau khi giảm $15\\%$, giá còn $85\\%$ giá ban đầu:\n\n$$800\\,000\\cdot0{,}85=680\\,000\\text{ đồng}.$$"
        },
        {
          "step_id": "S4",
          "title": "Kết luận",
          "content_markdown": "Vậy số tiền giảm là $120\\,000$ đồng và số tiền phải trả là $680\\,000$ đồng."
        }
      ],
      "rubric": [
        {
          "criterion": "Đổi đúng $15\\%$ về $0{,}15$ hoặc $15/100$.",
          "points": 1
        },
        {
          "criterion": "Tính đúng số tiền giảm $120\\,000$ đồng.",
          "points": 1
        },
        {
          "criterion": "Tính đúng giá phải trả $680\\,000$ đồng.",
          "points": 1
        },
        {
          "criterion": "Kiểm tra đúng bằng $85\\%$ của giá ban đầu.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Coi $120\\,000$ đồng là giá phải trả.",
        "Lấy 15% của một giá khác thay vì giá ban đầu.",
        "Trừ 15 trực tiếp khỏi 800 000 thay vì dùng tỉ lệ phần trăm."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ02 – Phần trăm",
          "href": "../kien-thuc/02-so-va-phep-tinh/core/"
        },
        {
          "label": "Practice Room CĐ02",
          "href": "../kien-thuc/02-so-va-phep-tinh/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/02-so-va-phep-tinh/bai-tap.md#02-G6-WR-04",
        "docs/assets/data/curriculum/topic02-learning-workspace.json#num02-g6-core-5"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B6-R1-20261001",
        "receipt": "review-packets/written-exercise-library/42_NOTEBOOKLM_EXPANSION_B6_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX03-RAT-001",
      "exercise_kind": "standard",
      "topic_id": "CT03",
      "topic_slug": "03-ti-le-ti-le-thuc",
      "topic_title": "Tỉ lệ – Tỉ lệ thức – Đại lượng tỉ lệ",
      "problem_type_id": "divide-total-by-ratio",
      "problem_type_title": "Chia một tổng theo tỉ lệ",
      "title": "Từ tổng số phần đến giá trị từng phần",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        7
      ],
      "skills": [
        "day-ti-so-bang-nhau",
        "chia-theo-ti-le"
      ],
      "prerequisites": [],
      "estimated_minutes": 9,
      "problem_markdown": "Chia số $84$ thành hai phần $x$ và $y$ theo tỉ lệ\n\n$$x:y=2:5.$$\n\nTính $x,y$ và kiểm tra cả tổng lẫn tỉ lệ.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Biểu diễn theo cùng một đơn vị phần",
          "content_markdown": "Vì $x:y=2:5$, đặt\n\n$$x=2k,\\qquad y=5k.$$"
        },
        {
          "step_id": "S2",
          "title": "Dùng tổng",
          "content_markdown": "Ta có\n\n$$x+y=84\\Rightarrow2k+5k=84\\Rightarrow7k=84,$$\n\nnên $k=12$."
        },
        {
          "step_id": "S3",
          "title": "Tính hai phần",
          "content_markdown": "Suy ra\n\n$$x=2\\cdot12=24,\\qquad y=5\\cdot12=60.$$"
        },
        {
          "step_id": "S4",
          "title": "Kiểm tra",
          "content_markdown": "Ta có $24+60=84$ và\n\n$$24:60=2:5.$$\n\nVậy kết quả thỏa cả tổng và tỉ lệ đã cho."
        }
      ],
      "rubric": [
        {
          "criterion": "Biểu diễn đúng $x=2k,y=5k$ hoặc cách tương đương.",
          "points": 1
        },
        {
          "criterion": "Dùng đúng $x+y=84$ để tìm $k=12$.",
          "points": 1
        },
        {
          "criterion": "Tính đúng $x=24,y=60$.",
          "points": 1
        },
        {
          "criterion": "Kiểm tra đúng tổng và tỉ lệ.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Chia 84 trực tiếp cho 2 và 5 riêng rẽ.",
        "Dùng hiệu $5-2$ thay vì tổng số phần $2+5$.",
        "Tìm được hai số nhưng không kiểm tra lại tỉ lệ."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ03 – Dãy tỉ số bằng nhau và chia theo tỉ lệ",
          "href": "../kien-thuc/03-ti-le-ti-le-thuc/core/"
        },
        {
          "label": "Practice Room CĐ03",
          "href": "../kien-thuc/03-ti-le-ti-le-thuc/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/03-ti-le-ti-le-thuc/bai-tap.md#03-M2-01",
        "docs/assets/data/curriculum/topic03-learning-workspace.json#rat03-core-g7-3"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B6-R1-20261001",
        "receipt": "review-packets/written-exercise-library/42_NOTEBOOKLM_EXPANSION_B6_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX03-RAT-002",
      "exercise_kind": "standard",
      "topic_id": "CT03",
      "topic_slug": "03-ti-le-ti-le-thuc",
      "topic_title": "Tỉ lệ – Tỉ lệ thức – Đại lượng tỉ lệ",
      "problem_type_id": "inverse-proportion-workers-days",
      "problem_type_title": "Nhận dạng và giải bài toán tỉ lệ nghịch",
      "title": "Nhiều người hơn thì số ngày phải giảm",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        7
      ],
      "skills": [
        "ti-le-nghich",
        "he-so-ti-le-nghich",
        "phan-biet-thuan-nghich"
      ],
      "prerequisites": [],
      "estimated_minutes": 10,
      "problem_markdown": "Bốn người làm xong một công việc trong $15$ ngày. Giả sử mọi người có năng suất như nhau và khối lượng công việc không đổi.\n\n1. Giải thích vì sao số người và số ngày là hai đại lượng tỉ lệ nghịch.\n2. Nếu có $6$ người thì cần bao nhiêu ngày?\n3. Kiểm tra kết quả bằng tích “số người × số ngày”.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Nhận dạng tỉ lệ nghịch",
          "content_markdown": "Khối lượng công việc không đổi và năng suất mỗi người như nhau. Khi số người tăng thì số ngày cần thiết giảm sao cho tích **số người × số ngày** không đổi. Vì vậy hai đại lượng tỉ lệ nghịch."
        },
        {
          "step_id": "S2",
          "title": "Lập quan hệ tích không đổi",
          "content_markdown": "Ta có\n\n$$4\\cdot15=6\\cdot t,$$\n\nvới $t$ là số ngày cần khi có 6 người."
        },
        {
          "step_id": "S3",
          "title": "Giải",
          "content_markdown": "Suy ra\n\n$$t=\\frac{4\\cdot15}{6}=10.$$"
        },
        {
          "step_id": "S4",
          "title": "Kiểm tra",
          "content_markdown": "Ta có\n\n$$4\\cdot15=60,\\qquad6\\cdot10=60.$$\n\nHai tích bằng nhau, nên kết quả phù hợp với quan hệ tỉ lệ nghịch."
        }
      ],
      "rubric": [
        {
          "criterion": "Giải thích đúng vì sao đây là tỉ lệ nghịch.",
          "points": 1
        },
        {
          "criterion": "Lập đúng $4\\cdot15=6t$.",
          "points": 1
        },
        {
          "criterion": "Tính đúng $t=10$ ngày.",
          "points": 1
        },
        {
          "criterion": "Kiểm tra đúng bằng tích không đổi.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Cho rằng nhiều người hơn thì số ngày cũng tăng theo tỉ lệ thuận.",
        "Lập tỉ lệ sai chiều và nhận kết quả 22,5 ngày.",
        "Không nêu giả thiết năng suất như nhau/khối lượng công việc không đổi."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ03 – Đại lượng tỉ lệ nghịch",
          "href": "../kien-thuc/03-ti-le-ti-le-thuc/core/"
        },
        {
          "label": "Practice Room CĐ03",
          "href": "../kien-thuc/03-ti-le-ti-le-thuc/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/03-ti-le-ti-le-thuc/bai-tap.md#03-M2-03",
        "docs/assets/data/curriculum/topic03-learning-workspace.json#rat03-core-g7-5"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B6-R1-20261001",
        "receipt": "review-packets/written-exercise-library/42_NOTEBOOKLM_EXPANSION_B6_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX20-GEO-001",
      "exercise_kind": "standard",
      "topic_id": "CT20",
      "topic_slug": "20-hinh-hoc-tong-hop",
      "topic_title": "Hình học tổng hợp, đo lường và hình khối",
      "problem_type_id": "rectangular-prism-lateral-area-volume",
      "problem_type_title": "Hình hộp chữ nhật: diện tích xung quanh và thể tích",
      "title": "Phân biệt chu vi đáy, diện tích đáy và chiều cao",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        6,
        7
      ],
      "skills": [
        "dien-tich-xung-quanh-hop-chu-nhat",
        "the-tich-hop-chu-nhat",
        "dien-tich-day"
      ],
      "prerequisites": [
        "dien-tich-tu-giac"
      ],
      "estimated_minutes": 10,
      "problem_markdown": "Một hình hộp chữ nhật có đáy là hình chữ nhật kích thước $3$ cm và $4$ cm, chiều cao $5$ cm.\n\n1. Tính chu vi đáy và diện tích đáy.\n2. Tính diện tích xung quanh.\n3. Tính thể tích.\n4. Ghi đúng đơn vị cho từng đại lượng.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Tính dữ liệu của đáy",
          "content_markdown": "Chu vi đáy là\n\n$$P_{\\text{đáy}}=2(3+4)=14\\text{ cm}.$$\n\nDiện tích đáy là\n\n$$S_{\\text{đáy}}=3\\cdot4=12\\text{ cm}^2.$$"
        },
        {
          "step_id": "S2",
          "title": "Tính diện tích xung quanh",
          "content_markdown": "Với hình hộp chữ nhật,\n\n$$S_{xq}=P_{\\text{đáy}}\\cdot h=14\\cdot5=70\\text{ cm}^2.$$"
        },
        {
          "step_id": "S3",
          "title": "Tính thể tích",
          "content_markdown": "Ta có\n\n$$V=S_{\\text{đáy}}\\cdot h=12\\cdot5=60\\text{ cm}^3.$$"
        },
        {
          "step_id": "S4",
          "title": "Đối chiếu đơn vị",
          "content_markdown": "Chu vi dùng cm, diện tích dùng cm², thể tích dùng cm³. Vì vậy các đơn vị trên phù hợp với từng đại lượng."
        }
      ],
      "rubric": [
        {
          "criterion": "Tính đúng $P_{đáy}=14$ cm và $S_{đáy}=12$ cm².",
          "points": 1
        },
        {
          "criterion": "Tính đúng $S_{xq}=70$ cm².",
          "points": 1
        },
        {
          "criterion": "Tính đúng $V=60$ cm³.",
          "points": 1
        },
        {
          "criterion": "Ghi đúng đơn vị độ dài/diện tích/thể tích.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Dùng diện tích đáy thay cho chu vi đáy khi tính $S_{xq}$.",
        "Ghi cm² cho thể tích.",
        "Nhầm chiều cao với một cạnh đáy."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ20 – Hình hộp chữ nhật",
          "href": "../kien-thuc/20-hinh-hoc-tong-hop/core/"
        },
        {
          "label": "Practice Room CĐ20",
          "href": "../kien-thuc/20-hinh-hoc-tong-hop/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/20-hinh-hoc-tong-hop/bai-tap.md#20-WR-04",
        "docs/assets/data/curriculum/topic20-learning-workspace.json#geo20-core-2"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B6-R1-20261001",
        "receipt": "review-packets/written-exercise-library/42_NOTEBOOKLM_EXPANSION_B6_R1_PASS_RECEIPT.md"
      }
    },
    {
      "exercise_id": "WX20-GEO-002",
      "exercise_kind": "standard",
      "topic_id": "CT20",
      "topic_slug": "20-hinh-hoc-tong-hop",
      "topic_title": "Hình học tổng hợp, đo lường và hình khối",
      "problem_type_id": "cone-lateral-area-volume-distinguish-heights",
      "problem_type_title": "Hình nón: phân biệt chiều cao và đường sinh",
      "title": "Cùng một hình nón, hai công thức dùng hai độ dài khác nhau",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        9
      ],
      "skills": [
        "nhan-biet-hinh-non",
        "dien-tich-xung-quanh-hinh-non",
        "the-tich-hinh-non"
      ],
      "prerequisites": [
        "do-dai-duong-tron"
      ],
      "estimated_minutes": 11,
      "problem_markdown": "Một hình nón có bán kính đáy $r=3$ cm, chiều cao $h=4$ cm và đường sinh $l=5$ cm.\n\n1. Tính diện tích xung quanh.\n2. Tính thể tích.\n3. Giải thích vì sao công thức diện tích xung quanh dùng $l$ còn công thức thể tích dùng $h$.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Chọn đúng công thức diện tích xung quanh",
          "content_markdown": "Diện tích xung quanh hình nón là\n\n$$S_{xq}=\\pi rl.$$\n\nThay $r=3$, $l=5$:\n\n$$S_{xq}=\\pi\\cdot3\\cdot5=15\\pi\\text{ cm}^2.$$"
        },
        {
          "step_id": "S2",
          "title": "Chọn đúng công thức thể tích",
          "content_markdown": "Thể tích hình nón là\n\n$$V=\\frac13\\pi r^2h.$$\n\nThay $r=3$, $h=4$:\n\n$$V=\\frac13\\pi\\cdot9\\cdot4=12\\pi\\text{ cm}^3.$$"
        },
        {
          "step_id": "S3",
          "title": "Phân biệt l và h",
          "content_markdown": "$l$ là **đường sinh**, nằm trên mặt bên nên xuất hiện trong công thức diện tích xung quanh. $h$ là **chiều cao vuông góc** từ đỉnh xuống mặt phẳng đáy nên xuất hiện trong công thức thể tích."
        },
        {
          "step_id": "S4",
          "title": "Kết luận",
          "content_markdown": "Vậy\n\n$$S_{xq}=15\\pi\\text{ cm}^2,\\qquad V=12\\pi\\text{ cm}^3.$$"
        }
      ],
      "rubric": [
        {
          "criterion": "Dùng đúng $S_{xq}=\\pi rl$ và tính được $15\\pi$ cm².",
          "points": 1
        },
        {
          "criterion": "Dùng đúng $V=\\frac13\\pi r^2h$ và tính được $12\\pi$ cm³.",
          "points": 1
        },
        {
          "criterion": "Phân biệt đúng đường sinh $l$ và chiều cao $h$.",
          "points": 1
        },
        {
          "criterion": "Ghi đúng đơn vị diện tích và thể tích.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Dùng $h$ thay cho $l$ trong $S_{xq}$.",
        "Dùng $l$ thay cho $h$ trong thể tích.",
        "Quên hệ số $1/3$ trong công thức thể tích hình nón."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ20 – Hình nón",
          "href": "../kien-thuc/20-hinh-hoc-tong-hop/core/"
        },
        {
          "label": "Practice Room CĐ20",
          "href": "../kien-thuc/20-hinh-hoc-tong-hop/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/kien-thuc/20-hinh-hoc-tong-hop/bai-tap.md#20-WR-08",
        "docs/assets/data/curriculum/topic20-learning-workspace.json#geo20-core-4"
      ],
      "academic_review": {
        "status": "APPROVED",
        "method": "NOTEBOOKLM_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B6-R1-20261001",
        "receipt": "review-packets/written-exercise-library/42_NOTEBOOKLM_EXPANSION_B6_R1_PASS_RECEIPT.md"
      }
    }
  ],
  "extension_policy": [
    "Append new exercises; never reuse an existing exercise_id.",
    "Prefer one CORE_BASE item per problem type; add CORE_APPLY only when it adds a distinct reasoning demand.",
    "Written-library self-marking never grants automatic Readiness/mastery credit in v1.",
    "Geometry figures support orientation only and never create unstated hypotheses.",
    "Existing Topic 25 A25 anchors keep their IDs and source of truth; future general-library surfacing must reference rather than duplicate them."
  ],
  "published_scope": {
    "topics": [
      "CT02",
      "CT03",
      "CT04",
      "CT05",
      "CT06",
      "CT07",
      "CT08",
      "CT09",
      "CT10",
      "CT11",
      "CT12",
      "CT13",
      "CT14",
      "CT15",
      "CT16",
      "CT17",
      "CT18",
      "CT19",
      "CT20",
      "CT23",
      "CT24"
    ],
    "exercise_count": 42,
    "batches": [
      {
        "batch_id": "PILOT_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-PILOT-R1-20261001",
        "count": 6,
        "status": "PUBLISHED"
      },
      {
        "batch_id": "EXPANSION_B1_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B1-R1-20261001",
        "count": 6,
        "status": "PUBLISHED"
      },
      {
        "batch_id": "EXPANSION_B2_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B2-R1-20261001",
        "count": 6,
        "status": "PUBLISHED"
      },
      {
        "batch_id": "EXPANSION_B3_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B3-R1-20261001",
        "count": 6,
        "status": "PUBLISHED"
      },
      {
        "batch_id": "EXPANSION_B4_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B4-R1-20261001",
        "count": 6,
        "status": "PUBLISHED"
      },
      {
        "batch_id": "EXPANSION_B5_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B5-R1-20261001",
        "count": 6,
        "status": "PUBLISHED"
      },
      {
        "batch_id": "EXPANSION_B6_R1",
        "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B6-R1-20261001",
        "count": 6,
        "status": "PUBLISHED"
      }
    ],
    "rule": "Append-only publication of academically reviewed written exercises; self-marking only."
  }
}

```

## Locked CĐ21 Learning Workspace

```json
{
  "schema": "roadmap-topic-learning-workspace-v1",
  "topic": "21-thong-ke",
  "title": "Thống kê và thu thập dữ liệu",
  "core_progress_policy": {
    "layer": "KNTT-Core",
    "rule": "Five grade-mapped Core cards only; Core-Support, Entrance10 and Challenge never gate Core."
  },
  "cards": [
    {
      "id": "sta21-core-1",
      "order": 1,
      "title": "Dữ liệu và phương pháp thu thập",
      "kntt_lessons": [
        "Lớp 6: Bài 38–41",
        "Lớp 7: Bài 17"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "du-lieu-phan-loai",
        "thu-thap-du-lieu"
      ],
      "prerequisites": [],
      "micro_practice": [
        "STA21MICRO_001",
        "STA21MICRO_002",
        "STA21MICRO_003"
      ],
      "teaching_copy": {
        "key_idea": "Dữ liệu thống kê được chia thành hai loại chính: dữ liệu số (đo đạc, đếm số lượng có giá trị số tính toán được) và dữ liệu không là số / dữ liệu phân loại (tên nhóm, nhãn, màu sắc, trình độ). Phương pháp thu thập dữ liệu gồm thu thập trực tiếp (quan sát, đo đạc, lập phiếu hỏi/phỏng vấn) và thu thập gián tiếp (trích xuất từ sách báo, tài liệu, cơ sở dữ liệu có sẵn).",
        "worked_example": {
          "problem": "Cho các dãy dữ liệu thu được từ một lớp học: (A) Điểm trung bình môn Toán; (B) Tên các môn học tự chọn; (C) Biển số xe máy của phụ huynh. Hãy phân loại các dãy dữ liệu này.",
          "solution": "(A) Điểm trung bình môn Toán là dữ liệu số vì là các con số định lượng có thể so sánh và tính toán trung bình.\n(B) Tên các môn học tự chọn là dữ liệu phân loại vì là tên các nhóm/danh mục chữ.\n(C) Biển số xe máy là dữ liệu phân loại vì mặc dù có chứa con số nhưng đóng vai trò là mã định danh, không thể cộng trừ hay tính trung bình."
        },
        "misconception": "Cho rằng mọi dãy thông tin chứa con số (như mã số học sinh, số nhà, biển số xe, số tuyến xe buýt) đều là dữ liệu số.",
        "summary": "Phân biệt dữ liệu số vs phân loại dựa vào khả năng thực hiện phép tính định lượng; chọn phương pháp thu thập phù hợp với đối tượng cần quan sát."
      }
    },
    {
      "id": "sta21-core-2",
      "order": 2,
      "title": "Đọc bảng dữ liệu, biểu đồ cột và cột kép",
      "kntt_lessons": [
        "Lớp 6: Bài 38–41",
        "Lớp 8: Bài 18–20"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "doc-bieu-do-cot",
        "doc-bieu-do-cot-kep"
      ],
      "prerequisites": [],
      "micro_practice": [
        "STA21MICRO_004",
        "STA21MICRO_005",
        "STA21MICRO_006"
      ],
      "teaching_copy": {
        "key_idea": "Bảng dữ liệu, biểu đồ cột và cột kép giúp trình bày và so sánh số liệu trực quan giữa các đối tượng. Biểu đồ cột kép sử dụng hai cột đặt cạnh nhau (có chú giải phân biệt) để so sánh hai dãy dữ liệu tương ứng của cùng các đối tượng trên cùng một thang đo.",
        "worked_example": {
          "problem": "Biểu đồ cột kép thống kê số học sinh giỏi Học kỳ 1 và Học kỳ 2 của Lớp 6A: Học kỳ 1 = 12 em, Học kỳ 2 = 18 em. Hỏi số học sinh giỏi Học kỳ 2 tăng bao nhiêu phần trăm so với Học kỳ 1?",
          "solution": "Mức tăng số lượng học sinh giỏi là: 18 - 12 = 6 (học sinh).\nTỉ lệ phần trăm tăng so với Học kỳ 1 là: (6 / 12) x 100% = 50%."
        },
        "misconception": "Đọc nhầm màu/ký hiệu chú giải trong biểu đồ cột kép dẫn đến so sánh nhầm hai dãy số liệu hoặc nhầm lẫn giữa giá trị cột với chênh lệch giữa hai cột.",
        "summary": "Luôn đọc kỹ tiêu đề, trục tọa độ, đơn vị và chú giải màu sắc trước khi thực hiện các phép tính cộng, trừ, chênh lệch hay tỉ lệ."
      }
    },
    {
      "id": "sta21-core-3",
      "order": 3,
      "title": "Đọc biểu đồ đoạn thẳng và hình quạt tròn",
      "kntt_lessons": [
        "Lớp 7: Bài 18–19",
        "Lớp 8: Bài 18–20"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "doc-bieu-do-doan-thang",
        "bieu-do-quat-tron"
      ],
      "prerequisites": [],
      "micro_practice": [
        "STA21MICRO_007",
        "STA21MICRO_008",
        "STA21MICRO_009"
      ],
      "teaching_copy": {
        "key_idea": "Biểu đồ đoạn thẳng dùng để biểu diễn xu hướng thay đổi của dữ liệu theo thời gian (chuỗi thời gian). Biểu đồ hình quạt tròn dùng để biểu diễn tỉ lệ phần trăm của các thành phần so với toàn bộ tổng thể (100% tương ứng với 360°).",
        "worked_example": {
          "problem": "Trên biểu đồ hình quạt tròn biểu diễn cơ cấu các loại cây trồng trong một trang trại, phần diện tích trồng Cây ăn quả chiếm 35%. Tính số đo góc ở tâm tương ứng với phần Cây ăn quả.",
          "solution": "Số đo góc ở tâm tương ứng với 35% là: 35% x 360° = 0,35 x 360° = 126°."
        },
        "misconception": "Nhầm lẫn giữa giá trị phần trăm (%), số đo góc ở tâm (°) và số lượng thực tế của đối tượng.",
        "summary": "Đoạn thẳng dùng cho xu hướng thời gian; quạt tròn dùng cho tỉ lệ phần thể hiện trên tổng thể (100% <-> 360°)."
      }
    },
    {
      "id": "sta21-core-4",
      "order": 4,
      "title": "Chọn và chuyển dạng biểu diễn dữ liệu",
      "kntt_lessons": [
        "Lớp 7: Bài 18–19",
        "Lớp 8: Bài 18–20"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "chon-bieu-do",
        "chuyen-bang-bieu-do"
      ],
      "prerequisites": [],
      "micro_practice": [
        "STA21MICRO_010",
        "STA21MICRO_011",
        "STA21MICRO_012"
      ],
      "teaching_copy": {
        "key_idea": "Lựa chọn dạng biểu đồ phù hợp phụ thuộc vào mục tiêu biểu diễn: So sánh các nhóm (Biểu đồ cột), So sánh 2 tập dữ liệu song song (Biểu đồ cột kép), Theo dõi xu hướng qua thời gian (Biểu đồ đoạn thẳng), Thể hiện cơ cấu/tỉ lệ phần trăm trong tổng thể (Biểu đồ hình quạt tròn). Khi chuyển bảng dữ liệu sang biểu đồ, cần chọn thang đo hợp lý và giữ đúng tỉ lệ.",
        "worked_example": {
          "problem": "Một nhóm nghiên cứu muốn theo dõi diễn biến nhiệt độ trung bình hàng tháng trong năm 2025. Nên chọn dạng biểu đồ nào và giải thích lý do?",
          "solution": "Nên chọn biểu đồ đoạn thẳng vì dữ liệu thể hiện sự biến đổi của nhiệt độ theo các mốc thời gian liên tiếp (các tháng trong năm), giúp dễ dàng quan sát xu hướng tăng/giảm."
        },
        "misconception": "Lựa chọn biểu đồ hình quạt tròn cho chuỗi thời gian hoặc chọn biểu đồ đoạn thẳng cho các danh mục phân loại độc lập không có thứ tự thời gian.",
        "summary": "Xác định rõ mục tiêu: So sánh -> Cột; Xu hướng thời gian -> Đoạn thẳng; Cơ cấu tổng thể -> Quạt tròn."
      }
    },
    {
      "id": "sta21-core-5",
      "order": 5,
      "title": "Đọc số liệu và kết luận có căn cứ",
      "kntt_lessons": [
        "Lớp 6: Bài 38–41",
        "Lớp 7: Bài 18–19",
        "Lớp 8: Bài 18–20"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "nhan-xet-du-lieu"
      ],
      "prerequisites": [],
      "micro_practice": [
        "STA21MICRO_013",
        "STA21MICRO_014",
        "STA21MICRO_015"
      ],
      "teaching_copy": {
        "key_idea": "Khi đọc số liệu từ bảng hoặc biểu đồ, mọi nhận xét và kết luận phải dựa trực tiếp vào dữ kiện đã cho trong phạm vi mẫu khảo sát. Không tự ý suy diễn nguyên nhân nhân quả, không nhầm lẫn giữa chênh lệch tuyệt đối và tỉ số tương đối, không quy chụp kết quả của mẫu hẹp cho toàn bộ quần thể lớn khi chưa đủ bằng chứng.",
        "worked_example": {
          "problem": "Thống kê số lượng máy tính bán ra của một cửa hàng trong hai quý: Quý 1 = 100 chiếc, Quý 2 = 150 chiếc. Một nhân viên kết luận: 'Chất lượng máy tính ở Quý 2 tốt hơn Quý 1 nên bán được nhiều hơn'. Nhận xét này có căn cứ không?",
          "solution": "Nhận xét này KHÔNG CÓ CĂN CỨ từ số liệu. Số liệu chỉ phản ánh số lượng máy bán ra tăng 50 chiếc (50%), không cung cấp thông tin về nguyên nhân (chất lượng, khuyến mãi hay nhu cầu thị trường)."
        },
        "misconception": "Suy diễn cảm tính về nguyên nhân nhân quả hoặc đưa ra nhận xét vượt ngoài phạm vi số liệu thực tế được cung cấp.",
        "summary": "Chỉ kết luận những gì số liệu trực tiếp thể hiện; tuyệt đối không đưa giả định hay cảm tính ngoài phạm vi dữ liệu."
      }
    }
  ],
  "extensions": [
    {
      "id": "sta21-ext-1",
      "layer": "Core-Support",
      "title": "Bảng tần số, tần suất và chất lượng dữ liệu: học theo bài/lớp phù hợp",
      "gates_core": false
    },
    {
      "id": "sta21-ext-2",
      "layer": "Entrance10",
      "title": "Thống kê nhiều bước và dữ liệu ghép nhóm",
      "gates_core": false
    },
    {
      "id": "sta21-ext-3",
      "layer": "Specialized-Challenge",
      "title": "Diễn giải đa nguồn và các bẫy về thang đo",
      "gates_core": false
    }
  ],
  "micro_practice_bank": "assets/data/practice/21-thong-ke-micro-v1.json"
}

```

## Locked CĐ21 Core Readiness

```json
{
  "version": 1,
  "schema": "roadmap-readiness-assessment-v1",
  "assessment_id": "STA21-CORE-READY-V1",
  "title": "Core Readiness Check – Chuyên đề 21 – Thống kê",
  "topic": {
    "id": "21-thong-ke",
    "title": "Chuyên đề 21 – Thống kê và thu thập dữ liệu"
  },
  "layer": "KNTT-Core",
  "skill_labels": {
    "du-lieu-phan-loai": "Dữ liệu và phân loại dữ liệu",
    "thu-thap-du-lieu": "Thu thập dữ liệu",
    "doc-bieu-do-cot": "Đọc biểu đồ cột",
    "doc-bieu-do-cot-kep": "Đọc và so sánh biểu đồ cột kép",
    "doc-bieu-do-doan-thang": "Đọc biểu đồ đoạn thẳng",
    "bieu-do-quat-tron": "Biểu đồ hình quạt tròn",
    "chon-bieu-do": "Chọn dạng biểu diễn",
    "chuyen-bang-bieu-do": "Chuyển đổi bảng – biểu đồ",
    "nhan-xet-du-lieu": "Nhận xét và kết luận từ dữ liệu"
  },
  "policy": {
    "feedback": "after_submit",
    "hints": false,
    "tutor": false,
    "hard_gate": false,
    "target_minutes": 20,
    "allow_partial_submit": true
  },
  "readiness": {
    "ready_threshold": 0.8,
    "minimum_answered_ratio": 0.8,
    "hard_gate": false,
    "states": [
      "READY",
      "REVIEW_RECOMMENDED",
      "MORE_EVIDENCE_NEEDED"
    ]
  },
  "items": [
    {
      "id": "STA21READY_001",
      "type": "mcq",
      "skill": "du-lieu-phan-loai",
      "points": 1,
      "question": "Khảo sát giả định ghi cân nặng của ba người lần lượt là 42 kg, 51 kg và 63 kg. Dãy giá trị cân nặng thuộc loại dữ liệu nào?",
      "options": [
        "Dữ liệu số",
        "Dữ liệu phân loại",
        "Mã định danh",
        "Dữ liệu không thể đo"
      ],
      "answer": 0,
      "explanation": "Cân nặng là đại lượng đo được bằng số, có đơn vị kg. Vì vậy dãy 42, 51, 63 là dữ liệu số.",
      "curriculum": {
        "book": "KNTT",
        "grades": [
          6
        ],
        "level": "core"
      }
    },
    {
      "id": "STA21READY_002",
      "type": "mcq",
      "skill": "du-lieu-phan-loai",
      "points": 1,
      "question": "Bảng ghi mã phòng học 601, 602, 701 để nhận diện từng phòng. Dãy mã phòng thuộc loại dữ liệu nào?",
      "options": [
        "Dữ liệu số vì viết bằng chữ số",
        "Dữ liệu đếm số lượng phòng",
        "Dữ liệu phân loại vì các số là mã định danh",
        "Dữ liệu đo đạc liên tục"
      ],
      "answer": 2,
      "explanation": "Mã phòng là nhãn nhận diện; phép cộng hoặc tính trung bình các mã không có ý nghĩa về phòng học. Vì vậy đây là dữ liệu phân loại.",
      "curriculum": {
        "book": "KNTT",
        "grades": [
          7
        ],
        "level": "core"
      }
    },
    {
      "id": "STA21READY_003",
      "type": "mcq",
      "skill": "thu-thap-du-lieu",
      "points": 1,
      "question": "Thư viện muốn biết số lượt mượn sách mỗi ngày trong tuần. Cách thu thập dữ liệu nào phù hợp nhất?",
      "options": [
        "Đếm số sách đang có trên giá vào cuối tuần",
        "Dùng sổ mượn trả, ghi số lượt theo ngày",
        "Hỏi vài học sinh dự đoán lượt mượn",
        "Dùng số lượt mượn của năm trước"
      ],
      "answer": 1,
      "explanation": "Sổ mượn trả ghi từng lượt cùng ngày mượn, nên có thể đếm số lượt trong mỗi ngày. Các cách khác không cho dữ liệu thực tế theo ngày trong tuần đang xét.",
      "curriculum": {
        "book": "KNTT",
        "grades": [
          6
        ],
        "level": "core"
      }
    },
    {
      "id": "STA21READY_004",
      "type": "mcq",
      "skill": "doc-bieu-do-cot",
      "points": 1,
      "question": "Trong ví dụ giả định, số sách từ biểu đồ cột được chép lại: khối 6: 148 cuốn; khối 7: 126; khối 8: 154; khối 9: 92. Khối 8 nhiều hơn khối 7 bao nhiêu cuốn?",
      "options": [
        "62 cuốn",
        "18 cuốn",
        "34 cuốn",
        "28 cuốn"
      ],
      "answer": 3,
      "explanation": "Khối 8 có 154 cuốn, khối 7 có 126 cuốn. Chênh lệch là 154 − 126 = 28 cuốn.",
      "curriculum": {
        "book": "KNTT",
        "grades": [
          6
        ],
        "level": "core"
      }
    },
    {
      "id": "STA21READY_005",
      "type": "mcq",
      "skill": "doc-bieu-do-cot",
      "points": 1,
      "question": "Dữ liệu giả định từ biểu đồ cột ghi doanh thu: chi nhánh A là 500 triệu đồng, B là 400 triệu đồng. Doanh thu A bằng bao nhiêu phần trăm doanh thu B?",
      "options": [
        "80%",
        "125%",
        "150%",
        "25%"
      ],
      "answer": 1,
      "explanation": "Lấy doanh thu A chia B rồi nhân 100%: 500 : 400 × 100% = 125%.",
      "curriculum": {
        "book": "KNTT",
        "grades": [
          8
        ],
        "level": "core"
      }
    },
    {
      "id": "STA21READY_006",
      "type": "mcq",
      "skill": "doc-bieu-do-cot-kep",
      "points": 1,
      "question": "Dữ liệu giả định từ biểu đồ cột kép: chú giải cột xanh là nam, cột vàng là nữ. Ở câu lạc bộ Cờ vua, cột xanh ghi 18 học sinh, cột vàng ghi 12 học sinh. Nhận xét nào đúng?",
      "options": [
        "Có 18 học sinh nữ",
        "Tổng số học sinh là 12",
        "Số học sinh nam nhiều hơn nữ 6 em",
        "Số học sinh nam ít hơn nữ"
      ],
      "answer": 2,
      "explanation": "Theo chú giải, nam 18 em và nữ 12 em. Nam nhiều hơn nữ 18 − 12 = 6 em.",
      "curriculum": {
        "book": "KNTT",
        "grades": [
          6
        ],
        "level": "core"
      }
    },
    {
      "id": "STA21READY_007",
      "type": "mcq",
      "skill": "doc-bieu-do-doan-thang",
      "points": 1,
      "question": "Dữ liệu giả định từ biểu đồ đoạn thẳng ghi nhiệt độ lúc 12 giờ: thứ Tư 34°C, thứ Năm 29°C. Nhiệt độ thay đổi thế nào từ thứ Tư sang thứ Năm?",
      "options": [
        "Tăng 5°C",
        "Giảm 3°C",
        "Tăng 3°C",
        "Giảm 5°C"
      ],
      "answer": 3,
      "explanation": "Nhiệt độ giảm từ 34°C xuống 29°C, tức giảm 34 − 29 = 5°C.",
      "curriculum": {
        "book": "KNTT",
        "grades": [
          7
        ],
        "level": "core"
      }
    },
    {
      "id": "STA21READY_008",
      "type": "mcq",
      "skill": "bieu-do-quat-tron",
      "points": 1,
      "question": "Trong biểu đồ quạt tròn giả định, ăn uống chiếm 45% tổng chi tiêu, đi lại chiếm 25%. Góc ở tâm của phần ăn uống lớn hơn góc của phần đi lại bao nhiêu độ?",
      "options": [
        "162°",
        "72°",
        "90°",
        "20°"
      ],
      "answer": 1,
      "explanation": "Chênh lệch là 45% − 25% = 20% toàn hình tròn. Góc chênh lệch bằng 20% × 360° = 72°.",
      "curriculum": {
        "book": "KNTT",
        "grades": [
          7
        ],
        "level": "core"
      }
    },
    {
      "id": "STA21READY_009",
      "type": "mcq",
      "skill": "chon-bieu-do",
      "points": 1,
      "question": "Muốn biểu diễn tỉ lệ khối lượng rác nhựa, giấy, hữu cơ và kim loại trong tổng lượng rác thu gom, nên chọn loại biểu đồ nào?",
      "options": [
        "Biểu đồ cột",
        "Biểu đồ quạt tròn",
        "Biểu đồ đoạn thẳng",
        "Biểu đồ cột kép"
      ],
      "answer": 1,
      "explanation": "Biểu đồ quạt tròn thể hiện mỗi nhóm chiếm bao nhiêu phần của tổng 100%.",
      "curriculum": {
        "book": "KNTT",
        "grades": [
          7
        ],
        "level": "core"
      }
    },
    {
      "id": "STA21READY_010",
      "type": "mcq",
      "skill": "chuyen-bang-bieu-do",
      "points": 1,
      "question": "Bảng ghi lượng mưa theo từng tháng, đơn vị mm. Khi chuyển thành biểu đồ cột đứng, hai trục cần ghi gì?",
      "options": [
        "Trục ngang: lượng mưa (mm); trục đứng: tháng",
        "Trục ngang: tháng; trục đứng: số ngày mưa",
        "Trục ngang: tháng; trục đứng: lượng mưa (mm)",
        "Cả hai trục đều ghi lượng mưa (mm)"
      ],
      "answer": 2,
      "explanation": "Ở biểu đồ cột đứng, trục ngang ghi các tháng; trục đứng ghi giá trị lượng mưa và đơn vị mm.",
      "curriculum": {
        "book": "KNTT",
        "grades": [
          8
        ],
        "level": "core"
      }
    },
    {
      "id": "STA21READY_011",
      "type": "mcq",
      "skill": "nhan-xet-du-lieu",
      "points": 1,
      "question": "Cửa hàng bán 40 xe đạp trong tháng 1 và 60 xe trong tháng 2. Kết luận nào được số liệu trực tiếp hỗ trợ?",
      "options": [
        "Tháng 2 bán nhiều hơn tháng 1 là 20 chiếc",
        "Tháng 2 bán nhiều hơn do thời tiết đẹp",
        "Xe tháng 2 có chất lượng tốt hơn",
        "Số bán tăng do cửa hàng giảm giá"
      ],
      "answer": 0,
      "explanation": "Số xe tăng 60 − 40 = 20 chiếc. Số liệu không cho biết thời tiết, chất lượng hay chương trình giảm giá.",
      "curriculum": {
        "book": "KNTT",
        "grades": [
          6
        ],
        "level": "core"
      }
    },
    {
      "id": "STA21READY_012",
      "type": "mcq",
      "skill": "nhan-xet-du-lieu",
      "points": 1,
      "question": "Trong ví dụ giả định, lớp 8A có 40 học sinh, trong đó 10 em đạt loại Giỏi; lớp 8B có 60 học sinh, trong đó 12 em đạt loại Giỏi. Nhận xét nào đúng về tỉ lệ đạt Giỏi?",
      "options": [
        "8B có tỉ lệ cao hơn vì có 12 em đạt Giỏi",
        "Hai lớp có tỉ lệ đạt Giỏi bằng nhau",
        "Tỉ lệ đạt Giỏi của 8A là 20%",
        "8A đạt 25%, 8B đạt 20%; tỉ lệ của 8A cao hơn 5 điểm phần trăm"
      ],
      "answer": 3,
      "explanation": "Lớp 8A: 10 : 40 = 25%. Lớp 8B: 12 : 60 = 20%. Tỉ lệ Giỏi của 8A cao hơn 5 điểm phần trăm. Chỉ số này không đủ để đánh giá toàn diện chất lượng học tập của hai lớp.",
      "curriculum": {
        "book": "KNTT",
        "grades": [
          8
        ],
        "level": "core"
      }
    }
  ],
  "next_topic": {
    "id": "22-dai-luong-dac-trung",
    "title": "Chuyên đề 22 – Các đại lượng đặc trưng"
  }
}

```

## Locked CĐ21 written-practice source

```markdown
# Bài tập – Chuyên đề 21: Thống kê và thu thập dữ liệu

> **Phân tầng:** luyện Core trước; Core-Support / Entrance10 / Challenge nằm ở kho bổ sung bên dưới.
>
> **Quy ước mã bài:** `21-Mx-yy`.

## B. ✍️ Luyện tự luận & trình bày – KNTT Core

### 21-WR-01 · Dữ liệu và phân loại

Mã lớp 6A, 6B là dữ liệu gì? Số sách mượn 2, 4, 3 là dữ liệu gì?

??? example "Xem lời giải"
    Mã lớp là dữ liệu phân loại; số sách mượn là dữ liệu số.

### 21-WR-02 · Đọc dữ liệu

Dữ liệu giả định từ biểu đồ cột: tổ A 14 cuốn, tổ B 20 cuốn. Chênh lệch là bao nhiêu?

??? example "Xem lời giải"
    20 − 14 = 6 cuốn.

## C. Kho bổ sung: Core-Support / Entrance10 / Challenge

Các bài M1–M4 cũ có cả nội dung bổ trợ và ôn thi. Học đúng bài/lớp tương ứng; không tính vào Core Readiness.

### Mức 1 – Nhận biết

### 21-M1-01
Tần số của một giá trị là gì?

### 21-M1-02
Tần suất được tính như thế nào?

### 21-M1-03
Tổng các tần số phải bằng đại lượng nào?

### 21-M1-04
Biểu đồ cột phù hợp nhất khi muốn làm gì?

### 21-M1-05
Biểu đồ đoạn thẳng phù hợp nhất với loại dữ liệu nào?

### 21-M1-06
Tần suất phần trăm được tính theo công thức nào?

### 21-M1-07
Khi đọc biểu đồ cần kiểm tra ít nhất ba thành phần nào?

### 21-M1-08
Một bộ dữ liệu có thể là dữ liệu số hoặc dữ liệu gì khác?

# Mức 2 – Thông hiểu

### 21-M2-01
Dữ liệu \(6,7,8,8,9,8,7\). Lập bảng tần số.

### 21-M2-02
Trong 20 học sinh có 6 học sinh chọn phương án A. Tính tần suất phần trăm.

### 21-M2-03
Các giá trị trên biểu đồ cột là \(12,18,15,20\). Xác định lớn nhất, nhỏ nhất và chênh lệch.

### 21-M2-04
Một bảng tần số có các tần số \(3,5,7,5\). Tổng số quan sát là bao nhiêu?

### 21-M2-05
Một giá trị xuất hiện 8 lần trong 40 quan sát. Tính tần suất.

### 21-M2-06
Dữ liệu nhiệt độ theo 7 ngày nên ưu tiên biểu diễn bằng dạng nào? Giải thích.

### 21-M2-07
Một khảo sát về thói quen đọc sách chỉ hỏi học sinh trong câu lạc bộ đọc sách. Nêu nguy cơ về chất lượng dữ liệu.

### 21-M2-08
Một bảng ghi chiều cao dùng lẫn cm và m. Nêu lỗi và cách sửa.

# Mức 3 – Vận dụng

### 21-M3-01
Dữ liệu điểm: \(6,7,7,8,8,8,9,9,10,8\). Lập bảng tần số và kiểm tra tổng.

### 21-M3-02
Từ dữ liệu câu trên, tính tần suất của điểm 8 theo phần trăm.

### 21-M3-03
Một lớp có 30 học sinh: 12 chọn bóng đá, 9 chọn cầu lông, 6 chọn bơi, 3 chọn môn khác. Tính tần suất phần trăm của từng nhóm.

### 21-M3-04
Với dữ liệu câu trên, chọn dạng biểu đồ phù hợp nhất để so sánh các nhóm và giải thích.

### 21-M3-05
Doanh số 5 tháng lần lượt là \(20,24,23,30,35\). Mô tả xu hướng.

### 21-M3-06
Một biểu đồ cột có trục dọc bắt đầu từ 90 thay vì 0, khiến chênh lệch trông rất lớn. Nêu rủi ro khi diễn giải.

### 21-M3-07
Một khảo sát chỉ thu được 8 phản hồi trong nhóm 500 người. Nêu vì sao cần thận trọng khi khái quát kết luận.

### 21-M3-08
Một bảng tần số có tổng tần số 48 nhưng dữ liệu gốc có 50 quan sát. Nêu quy trình kiểm tra lỗi.

### 21-M3-09
Hãy chuyển bảng: A: 5, B: 8, C: 7 thành mô tả để vẽ biểu đồ cột.

### 21-M3-10
Một biểu đồ đoạn thẳng cho dữ liệu \(15,18,22,19,25\). Xác định giai đoạn tăng, giảm và giá trị cao nhất.

# Mức 4 – Tổng hợp / ôn thi

### 21-M4-01
Cho dữ liệu \(5,6,6,7,7,7,8,8,8,8,9,9\). Lập bảng tần số và tần suất phần trăm.

### 21-M4-02
Từ bảng câu trên, nêu hai nhận xét có căn cứ.

### 21-M4-03
Một khảo sát về phương tiện đi học gồm: đi bộ 8, xe đạp 12, xe buýt 6, phương tiện khác 4. Tính tần suất phần trăm và chọn biểu đồ phù hợp.

### 21-M4-04
Một nhóm muốn khảo sát thời gian dùng điện thoại của toàn trường nhưng chỉ hỏi một lớp chuyên Tin. Hãy đánh giá tính đại diện và đề xuất cách chọn mẫu hợp lý hơn.

### 21-M4-05
Một bảng số liệu có tổng tần số đúng nhưng một giá trị bị ghi sai đơn vị. Giải thích vì sao kiểm tra tổng tần số vẫn chưa đủ để đảm bảo chất lượng dữ liệu.

### 21-M4-06
Hãy thiết kế ngắn một quy trình từ dữ liệu thô đến kết luận: làm sạch dữ liệu → bảng tần số/tần suất → biểu đồ → nhận xét.

# Đáp án nhanh

| Mã | Đáp án |
|---|---|
| 21-M1-01 | Số lần giá trị xuất hiện |
| 21-M1-02 | Tần số / tổng số quan sát |
| 21-M1-03 | Tổng số quan sát |
| 21-M1-04 | So sánh các nhóm |
| 21-M1-05 | Dữ liệu thay đổi theo thời gian |
| 21-M1-06 | tần số / tổng số quan sát \(\times100\%\) |
| 21-M1-07 | Tên biểu đồ, trục ngang, trục dọc, đơn vị/thang chia |
| 21-M1-08 | Dữ liệu phân loại |
| 21-M2-01 | 6:1; 7:2; 8:3; 9:1 |
| 21-M2-02 | \(30\%\) |
| 21-M2-03 | lớn nhất 20, nhỏ nhất 12, chênh 8 |
| 21-M2-04 | 20 |
| 21-M2-05 | \(0,2=20\%\) |
| 21-M2-06 | Biểu đồ đoạn thẳng |
| 21-M2-07 | Mẫu thiên lệch, khó đại diện toàn bộ học sinh |
| 21-M2-08 | Không thống nhất đơn vị; đổi về cùng một đơn vị |
| 21-M3-01 | 6:1; 7:2; 8:4; 9:2; 10:1; tổng 10 |
| 21-M3-02 | \(40\%\) |
| 21-M3-03 | \(40\%,30\%,20\%,10\%\) |
| 21-M3-04 | Biểu đồ cột để so sánh các nhóm |
| 21-M3-05 | tăng 20→24, giảm nhẹ 24→23, rồi tăng mạnh đến 35 |
| 21-M3-06 | Có thể phóng đại cảm giác chênh lệch; phải đọc thang trục |
| 21-M3-07 | Mẫu quá nhỏ so với mục tiêu khái quát, dễ không đại diện |
| 21-M3-08 | Đối chiếu từng giá trị, đếm lại, kiểm tra bỏ sót/đếm trùng |
| 21-M3-09 | Ba cột A,B,C có chiều cao tương ứng 5,8,7 |
| 21-M3-10 | tăng 15→18→22; giảm 22→19; tăng 19→25; cao nhất 25 |
| 21-M4-01 | 5:1; 6:2; 7:3; 8:4; 9:2; tần suất lần lượt \(8,3\%,16,7\%,25\%,33,3\%,16,7\%\) |
| 21-M4-02 | 8 xuất hiện nhiều nhất; 5 ít nhất; hoặc nhận xét tương đương có căn cứ |
| 21-M4-03 | \(26,7\%,40\%,20\%,13,3\%\); biểu đồ cột |
| 21-M4-04 | Mẫu thiên lệch; nên chọn nhiều lớp/khối theo cách phù hợp hơn |
| 21-M4-05 | Tổng đúng không phát hiện lỗi đơn vị/nội dung; cần kiểm tra tính nhất quán |
| 21-M4-06 | Quy trình hợp lý và có bước kiểm tra |

# Hướng dẫn chọn lọc

## 21-M3-01
Đếm từng giá trị:
- 6 xuất hiện 1 lần;
- 7 xuất hiện 2 lần;
- 8 xuất hiện 4 lần;
- 9 xuất hiện 2 lần;
- 10 xuất hiện 1 lần.

Tổng \(1+2+4+2+1=10\), đúng bằng số quan sát.

## 21-M4-01
Tổng số quan sát là 12. Tần suất:

$$
\frac1{12}\approx8,3\%,\quad
\frac2{12}\approx16,7\%,\quad
\frac3{12}=25\%,\quad
\frac4{12}\approx33,3\%,\quad
\frac2{12}\approx16,7\%.
$$

Tổng phần trăm có thể lệch rất nhỏ so với \(100\%\) do làm tròn.

# Theo dõi tiến độ

- [ ] M1 đạt ít nhất 6/8.
- [ ] M2 đạt ít nhất 6/8.
- [ ] M3 đạt ít nhất 7/10.
- [ ] M4 đã thử ít nhất 3/6.
- [ ] Tôi kiểm tra tổng tần số và chất lượng dữ liệu trước khi kết luận.

## Liên kết Roadmap

- **← Chuyên đề trước:** [20 – Hình học tổng hợp](../20-hinh-hoc-tong-hop/index.md)
- **← Học kiến thức:** [Chuyên đề 21 – Thống kê](index.md)
- **→ Tự kiểm tra:** [Tự kiểm tra Chuyên đề 21](tu-kiem-tra.md)
- **→ Chuyên đề tiếp theo:** [22 – Đại lượng đặc trưng](../22-dai-luong-dac-trung/index.md)

```

## Candidate exercises under review

```json
{
  "schema_version": "1.0.0",
  "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B7-R1-20261001",
  "snapshot_date": "2026-10-01",
  "status": "REVIEW_ONLY_PENDING_NOTEBOOKLM_R1",
  "production_catalog_unchanged": true,
  "auto_readiness_credit": false,
  "self_marking_only": true,
  "scope": {
    "topics": [
      "CT21"
    ],
    "exercise_count": 2,
    "rule": "CT21 only: one CORE_BASE and one CORE_APPLY; do not force CT22 THPT-Bridge or CT25 Entrance10 into the normal Core append"
  },
  "exercises": [
    {
      "exercise_id": "WX21-STA-001",
      "exercise_kind": "standard",
      "topic_id": "CT21",
      "topic_slug": "21-thong-ke",
      "topic_title": "Thống kê và thu thập dữ liệu",
      "problem_type_id": "statistics-table-to-bar-chart",
      "problem_type_title": "Chuyển bảng số liệu thành biểu đồ cột và nhận xét",
      "title": "Từ bảng số liệu đến biểu đồ cột có thang đo rõ ràng",
      "learning_layer": "KNTT-Core",
      "level": "CORE_BASE",
      "grade_overlay": [
        8
      ],
      "skills": [
        "doc-bieu-do-cot",
        "chon-bieu-do",
        "chuyen-bang-bieu-do",
        "nhan-xet-du-lieu"
      ],
      "prerequisites": [],
      "estimated_minutes": 12,
      "problem_markdown": "Một thư viện ghi lại số lượt mượn sách theo thể loại trong một tuần:\n\n| Thể loại | Truyện | Khoa học | Lịch sử | Kỹ năng |\n|---|---:|---:|---:|---:|\n| Số lượt mượn | 24 | 18 | 12 | 16 |\n\n1. Chọn dạng biểu đồ phù hợp để so sánh bốn thể loại và giải thích ngắn gọn.\n2. Trên giấy, vẽ biểu đồ với tên biểu đồ, trục, đơn vị và thang chia hợp lý.\n3. Xác định thể loại có số lượt mượn lớn nhất, nhỏ nhất và tính chênh lệch giữa hai giá trị đó.\n4. Viết một nhận xét chỉ dựa trên số liệu đã cho.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Chọn dạng biểu diễn",
          "content_markdown": "Dữ liệu gồm bốn nhóm thể loại cần so sánh số lượt mượn, nên **biểu đồ cột** là phù hợp. Biểu đồ đoạn thẳng không phù hợp vì bốn thể loại không phải một chuỗi thời gian."
        },
        {
          "step_id": "S2",
          "title": "Thiết lập biểu đồ",
          "content_markdown": "Trục ngang ghi bốn thể loại: Truyện, Khoa học, Lịch sử, Kỹ năng. Trục dọc ghi **Số lượt mượn (lượt)**, bắt đầu từ $0$ và dùng thang chia đều đủ để biểu diễn đến $24$. Bốn cột có chiều cao lần lượt $24,18,12,16$."
        },
        {
          "step_id": "S3",
          "title": "So sánh các giá trị",
          "content_markdown": "Truyện có số lượt mượn lớn nhất: $24$ lượt. Lịch sử nhỏ nhất: $12$ lượt. Chênh lệch là\n\n$$24-12=12\\text{ lượt}.$$"
        },
        {
          "step_id": "S4",
          "title": "Kết luận trong phạm vi dữ liệu",
          "content_markdown": "Một nhận xét có căn cứ là: **Trong tuần được ghi nhận, sách Truyện có số lượt mượn lớn nhất và nhiều hơn sách Lịch sử 12 lượt.** Dữ liệu này không tự cho biết nguyên nhân vì sao các thể loại có số lượt mượn khác nhau."
        }
      ],
      "rubric": [
        {
          "criterion": "Chọn đúng biểu đồ cột và nêu được mục tiêu là so sánh các nhóm.",
          "points": 1
        },
        {
          "criterion": "Vẽ/thiết lập đúng trục, đơn vị, thang chia và bốn cột 24, 18, 12, 16.",
          "points": 1
        },
        {
          "criterion": "Xác định đúng lớn nhất 24, nhỏ nhất 12 và chênh lệch 12 lượt.",
          "points": 1
        },
        {
          "criterion": "Viết nhận xét đúng phạm vi dữ liệu, không tự suy diễn nguyên nhân.",
          "points": 1
        }
      ],
      "rubric_total": 4,
      "common_mistakes": [
        "Chọn biểu đồ đoạn thẳng dù các thể loại không tạo thành chuỗi thời gian.",
        "Vẽ cột đúng số nhưng thiếu đơn vị hoặc dùng thang chia không đều.",
        "Nhầm giá trị nhỏ nhất 12 với chênh lệch 12 mà không nêu rõ đại lượng.",
        "Từ số lượt mượn suy ra nguyên nhân hoặc khẳng định mức độ yêu thích mà dữ liệu không cung cấp."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ21 – Đọc bảng và biểu đồ cột",
          "href": "../kien-thuc/21-thong-ke/core/"
        },
        {
          "label": "Practice Room CĐ21",
          "href": "../kien-thuc/21-thong-ke/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/assets/data/curriculum/topic21-learning-workspace.json#sta21-core-2",
        "docs/assets/data/curriculum/topic21-learning-workspace.json#sta21-core-4",
        "docs/assets/data/curriculum/topic21-learning-workspace.json#sta21-core-5",
        "docs/kien-thuc/21-thong-ke/bai-tap.md#21-M3-09"
      ],
      "academic_review": {
        "status": "PENDING_NOTEBOOKLM_R1"
      }
    },
    {
      "exercise_id": "WX21-STA-002",
      "exercise_kind": "standard",
      "topic_id": "CT21",
      "topic_slug": "21-thong-ke",
      "topic_title": "Thống kê và thu thập dữ liệu",
      "problem_type_id": "statistics-double-bar-percent-claim",
      "problem_type_title": "So sánh hai dãy số liệu, tính mức tăng và giới hạn kết luận",
      "title": "Cột kép: tăng bao nhiêu và dữ liệu cho phép kết luận đến đâu?",
      "learning_layer": "KNTT-Core",
      "level": "CORE_APPLY",
      "grade_overlay": [
        8
      ],
      "skills": [
        "doc-bieu-do-cot-kep",
        "nhan-xet-du-lieu"
      ],
      "prerequisites": [
        "phan-tram"
      ],
      "estimated_minutes": 12,
      "problem_markdown": "Dữ liệu từ một biểu đồ cột kép về số học sinh tham gia thử thách đọc sách được chép lại như sau. Hai dãy tương ứng với **đầu học kỳ** và **cuối học kỳ**:\n\n| Khối | Đầu học kỳ | Cuối học kỳ |\n|---|---:|---:|\n| 6 | 18 | 24 |\n| 7 | 20 | 25 |\n| 8 | 16 | 24 |\n| 9 | 22 | 22 |\n\n1. Tính mức thay đổi số học sinh của từng khối từ đầu đến cuối học kỳ.\n2. Khối nào tăng nhiều nhất về **số học sinh**?\n3. Tính tỉ lệ phần trăm tăng của khối 8 so với đầu học kỳ.\n4. Một bạn nói: “Khối 8 tăng mạnh nhất vì giáo viên khối 8 tổ chức hoạt động tốt hơn.” Hãy chỉ ra phần nào của câu nói được dữ liệu hỗ trợ và phần nào không.\n5. Viết một kết luận ngắn chỉ dựa trên số liệu.",
      "figure_uri": null,
      "figure_alt": null,
      "solution_steps": [
        {
          "step_id": "S1",
          "title": "Tính mức thay đổi",
          "content_markdown": "Lấy số cuối học kỳ trừ số đầu học kỳ:\n\n- Khối 6: $24-18=6$ học sinh;\n- Khối 7: $25-20=5$ học sinh;\n- Khối 8: $24-16=8$ học sinh;\n- Khối 9: $22-22=0$ học sinh."
        },
        {
          "step_id": "S2",
          "title": "So sánh mức tăng tuyệt đối",
          "content_markdown": "Mức tăng lớn nhất về số học sinh là $8$, thuộc **khối 8**."
        },
        {
          "step_id": "S3",
          "title": "Tính tỉ lệ tăng của khối 8",
          "content_markdown": "Mốc so sánh là số đầu học kỳ $16$ học sinh:\n\n$$\\frac{24-16}{16}\\times100\\%=\\frac8{16}\\times100\\%=50\\%.$$"
        },
        {
          "step_id": "S4",
          "title": "Giới hạn kết luận",
          "content_markdown": "Dữ liệu hỗ trợ phần: **khối 8 tăng 8 học sinh, tương đương 50% so với đầu học kỳ, và đây là mức tăng tuyệt đối lớn nhất trong bốn khối**. Dữ liệu **không** cho biết nguyên nhân; vì vậy không thể từ bảng này kết luận việc tăng là do giáo viên tổ chức hoạt động tốt hơn."
        },
        {
          "step_id": "S5",
          "title": "Kết luận có căn cứ",
          "content_markdown": "Ví dụ kết luận hợp lệ: **Từ đầu đến cuối học kỳ, số học sinh tham gia tăng ở khối 6, 7, 8; khối 9 không đổi. Khối 8 tăng nhiều nhất về số học sinh, từ 16 lên 24, tức tăng 8 học sinh hay 50%.**"
        }
      ],
      "rubric": [
        {
          "criterion": "Tính đúng mức thay đổi của bốn khối: +6, +5, +8, 0.",
          "points": 1
        },
        {
          "criterion": "Xác định đúng khối 8 tăng nhiều nhất về số học sinh.",
          "points": 1
        },
        {
          "criterion": "Tính đúng tỉ lệ tăng của khối 8 là 50% với mẫu số là 16.",
          "points": 1
        },
        {
          "criterion": "Phân biệt đúng dữ liệu quan sát được với nguyên nhân không được dữ liệu cung cấp.",
          "points": 1
        },
        {
          "criterion": "Viết kết luận đúng số liệu và đúng phạm vi.",
          "points": 1
        }
      ],
      "rubric_total": 5,
      "common_mistakes": [
        "Nhìn giá trị cuối học kỳ lớn nhất rồi nhầm với mức tăng lớn nhất.",
        "Tính tỉ lệ tăng bằng cách chia 8 cho 24 thay vì chia cho giá trị đầu kỳ 16.",
        "Bỏ qua khối 9 không thay đổi.",
        "Biến mối liên hệ trong dữ liệu thành kết luận nguyên nhân mà không có bằng chứng."
      ],
      "remediation_links": [
        {
          "label": "Ôn CĐ21 – Cột kép và kết luận từ dữ liệu",
          "href": "../kien-thuc/21-thong-ke/core/"
        },
        {
          "label": "Practice Room CĐ21",
          "href": "../kien-thuc/21-thong-ke/bai-tap/"
        }
      ],
      "source_refs": [
        "docs/assets/data/curriculum/topic21-learning-workspace.json#sta21-core-2",
        "docs/assets/data/curriculum/topic21-learning-workspace.json#sta21-core-5",
        "docs/assets/data/assessment/21-thong-ke-core-v1.json#STA21READY_012"
      ],
      "academic_review": {
        "status": "PENDING_NOTEBOOKLM_R1"
      }
    }
  ]
}

```
