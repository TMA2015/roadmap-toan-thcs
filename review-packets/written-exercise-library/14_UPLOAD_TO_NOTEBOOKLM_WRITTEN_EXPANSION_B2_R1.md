# SOURCE PACKET — Written Exercise Library Expansion B2 R1

Packet ID: `MATH-WRITTEN-LIBRARY-EXPANSION-B2-R1-20261001`

## Source lock

Review **only** the material in this packet.

- Base production checkpoint: `d66f004339043f2f7a2cbd034639ba12d3f0276c`
- Branch: `review/written-library-expansion-b2-r1-20261001`
- Candidate JSON: `review-packets/written-exercise-library/13_WRITTEN_EXPANSION_B2_CANDIDATE.json`
  - blob: `334f2c31e43a219bb4917fc8ef0dcf52fdc2de1b`
- Design contract blob: `ab4ab40044baa0ddc7b2da344f2205fcdb7032ee`
- Production catalog blob: `a008add67a7bcf6ada847f5f586000fedff63d67`
- CĐ09 Learning Workspace blob: `600755de390f4e6baaff642d3d0bd63f0510616e`
- CĐ16 Learning Workspace blob: `3107abd3c947663f7677de4f4a65fe99f29a7b97`
- CĐ18 Learning Workspace blob: `ca453a6808cbd8b0e62509f9951d9ddb70afc3a1`
- CĐ09 written-practice source blob: `0236497368fdb5dec9a53526065be468627405df`
- CĐ16 written-practice source blob: `558496d99fec87d6dee623ae0ca6da023f06ddda`
- CĐ18 written-practice source blob: `91ed070cca1312663048df86fc68c04050e157cb`

## Scope

Exactly 6 **review-only** candidate exercises:

1. `WX09-SYS-001`
2. `WX09-SYS-002`
3. `WX16-QUAD-001`
4. `WX16-QUAD-002`
5. `WX18-TRI-001`
6. `WX18-TRI-002`

Two candidates per topic: one `CORE_BASE` and one `CORE_APPLY`.

Selection rationale is pedagogical, not an exam-frequency claim:
- CT09 observes method selection, algebraic steps, modelling and full-system checking;
- CT16 observes theorem preconditions and chained proof;
- CT18 observes trigonometric ratio choice and modelling of height/angle elevation.

**Important:** production catalog is unchanged. This packet does not authorize publication, deployment, Readiness/mastery credit, canonical-evidence expansion, or G3.

## Review boundary

For EACH item review:
- mathematical correctness;
- hypotheses/domain/units;
- exact skill IDs and KNTT-Core boundary against the locked Learning Workspace;
- solution-step logic and final conclusion;
- rubric alignment and totals;
- common mistakes/remediation;
- duplicate/near-duplicate risk against the locked production catalog and topic written-practice source;
- CORE_BASE vs CORE_APPLY classification;
- paper-first self-study suitability.

For geometry/modelling:
- do not infer any fact from an absent or illustrative diagram;
- verify theorem conditions, correspondence and units;
- a figure is not required when the written hypotheses fully determine the needed structure;
- verify that the angle-elevation model uses horizontal distance and handles eye height explicitly.

## Architecture checks

ARCH_1 — exactly 6 candidates, two each for CT09/CT16/CT18.  
ARCH_2 — each topic has one CORE_BASE and one CORE_APPLY.  
ARCH_3 — all six remain review-only and do not alter the production catalog.  
ARCH_4 — self-marking only; no automatic Readiness/mastery credit.  
ARCH_5 — stable unique exercise IDs; no collision with the current production catalog.  
ARCH_6 — all skill IDs/layers are supported by the locked Learning Workspaces.  
ARCH_7 — every item contains problem, stepwise solution, rubric, common mistakes, remediation, and source refs.  
ARCH_8 — no unsupported exam-frequency claim is used to justify inclusion.  
ARCH_9 — CT16 proof conclusions use explicit theorem preconditions rather than diagram appearance.  
ARCH_10 — CT18 modelling states sufficient geometric assumptions, units and rounding requirements.

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
      "CT07",
      "CT08",
      "CT14",
      "CT17",
      "CT19",
      "CT24"
    ],
    "exercise_count": 12,
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
        "status": "TECHNICAL_IMPLEMENTATION_CANDIDATE"
      }
    ],
    "rule": "Append-only publication of academically reviewed written exercises; self-marking only."
  }
}

```

## Locked CĐ09 Learning Workspace

```json
{
  "schema": "roadmap-topic-learning-workspace-v1",
  "topic": "09-he-phuong-trinh",
  "title": "Hệ phương trình bậc nhất hai ẩn",
  "core_progress_policy": {
    "layer": "KNTT-Core",
    "rule": "Only Core cards contribute to readiness. Entrance10 and Challenge never gate Core completion."
  },
  "cards": [
    {
      "id": "sys09-core-1",
      "order": 1,
      "title": "Phương trình hai ẩn & nghiệm hệ",
      "kntt_lessons": [
        "Lớp 9"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "nghiem-pt-hai-an",
        "nghiem-he",
        "so-nghiem-he",
        "y-nghia-hinh-hoc"
      ],
      "prerequisites": [
        "pt-bac-nhat"
      ],
      "micro_practice": [
        "SYS09MICRO_001",
        "SYS09MICRO_002",
        "SYS09MICRO_003",
        "SYS09MICRO_016"
      ],
      "teaching_copy": {
        "key_idea": "Một phương trình bậc nhất hai ẩn \\(ax+by=c\\), \\(a,b\\) không đồng thời \\(0\\), có vô số cặp nghiệm thực. Nghiệm của **hệ** phải thỏa cả hai phương trình. Hai đường thẳng cắt nhau, song song phân biệt, hoặc trùng nhau lần lượt cho một nghiệm, vô nghiệm, hoặc vô số nghiệm.",
        "worked_example": {
          "problem": "Xét hệ \\(\\begin{cases}x+y=4\\\\2x-y=5\\end{cases}\\). Kiểm tra \\((3;1)\\) và kết luận số nghiệm.",
          "solution": "Bước 1: Với \\((3;1)\\): \\(3+1=4\\) và \\(2\\cdot3-1=5\\), nên cặp này thỏa cả hai phương trình.\nBước 2: Cộng hai phương trình được \\(3x=9\\Rightarrow x=3\\), rồi \\(y=1\\).\nBước 3: Hai đường thẳng cắt nhau tại \\((3;1)\\), hệ có đúng một nghiệm."
        },
        "misconception": "Chỉ thử cặp số vào một phương trình, hoặc nhầm số nghiệm của một phương trình đơn với số nghiệm của hệ.",
        "summary": "Một nghiệm của hệ là một cặp thỏa đồng thời cả hai phương trình.",
        "source_reference": "docs/kien-thuc/09-he-phuong-trinh/index.md",
        "source_sections": [
          "3.1",
          "3.2",
          "3.3",
          "3.5"
        ],
        "source_question_ids": [
          "SYS09MICRO_001",
          "SYS09MICRO_002",
          "SYS09MICRO_003"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "sys09-core-2",
      "order": 2,
      "title": "Giải hệ bằng phương pháp thế",
      "kntt_lessons": [
        "Core"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "giai-he-the"
      ],
      "prerequisites": [
        "pt-bac-nhat"
      ],
      "micro_practice": [
        "SYS09MICRO_004",
        "SYS09MICRO_005",
        "SYS09MICRO_006"
      ],
      "teaching_copy": {
        "key_idea": "Phương pháp thế: từ một phương trình, rút ẩn thuận tiện (ưu tiên hệ số \\(1\\) hoặc \\(-1\\)), thay vào phương trình kia, giải một ẩn rồi tìm ẩn còn lại. Thử lại trong cả hai phương trình.",
        "worked_example": {
          "problem": "Giải hệ \\(\\begin{cases}x+y=7\\\\2x-y=2\\end{cases}\\) bằng phương pháp thế.",
          "solution": "Bước 1: \\(y=7-x\\).\nBước 2: Thế vào phương trình hai: \\(2x-(7-x)=2\\Rightarrow3x=9\\Rightarrow x=3\\).\nBước 3: \\(y=7-3=4\\).\nBước 4: \\(3+4=7\\) và \\(2\\cdot3-4=2\\), nên nghiệm là \\((3;4)\\)."
        },
        "misconception": "Thế vào chính phương trình đã rút ẩn thay vì phương trình còn lại; bỏ ngoặc sai dấu.",
        "summary": "Rút ẩn → thế vào phương trình còn lại → giải → tìm ẩn kia → thử lại.",
        "source_reference": "docs/kien-thuc/09-he-phuong-trinh/index.md",
        "source_sections": [
          "3.4",
          "Dạng 2"
        ],
        "source_question_ids": [
          "SYS09MICRO_004",
          "SYS09MICRO_005",
          "SYS09MICRO_006"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "sys09-core-3",
      "order": 3,
      "title": "Cộng đại số & biến đổi trước giải",
      "kntt_lessons": [
        "Core"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "giai-he-cong",
        "bien-doi-truoc-giai"
      ],
      "prerequisites": [
        "pt-bac-nhat"
      ],
      "micro_practice": [
        "SYS09MICRO_007",
        "SYS09MICRO_008",
        "SYS09MICRO_009"
      ],
      "teaching_copy": {
        "key_idea": "Phương pháp cộng đại số tạo hệ số đối nhau để cộng và khử một ẩn; có thể nhân **toàn bộ hai vế** của một phương trình với số khác \\(0\\) trước đó. Nếu phương trình có hệ số phân số, nhân hai vế với mẫu chung là số khác \\(0\\) trước khi giải.",
        "worked_example": {
          "problem": "Giải \\(\\begin{cases}2x+3y=12\\\\4x-3y=6\\end{cases}\\) bằng cộng đại số.",
          "solution": "Bước 1: Cộng hai phương trình để khử \\(y\\): \\(6x=18\\Rightarrow x=3\\).\nBước 2: Thay vào phương trình đầu: \\(6+3y=12\\Rightarrow y=2\\).\nBước 3: Kiểm tra \\(4\\cdot3-3\\cdot2=6\\), nghiệm \\((3;2)\\)."
        },
        "misconception": "Cộng vế trái nhưng quên cộng vế phải hoặc nhân hệ số mà không nhân toàn bộ phương trình.",
        "summary": "Làm hệ số một ẩn đối nhau, cộng đủ hai vế, giải và kiểm tra.",
        "source_reference": "docs/kien-thuc/09-he-phuong-trinh/index.md",
        "source_sections": [
          "3.3A",
          "3.4",
          "Dạng 3",
          "Dạng 5"
        ],
        "source_question_ids": [
          "SYS09MICRO_007",
          "SYS09MICRO_008",
          "SYS09MICRO_009"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "sys09-core-4",
      "order": 4,
      "title": "Chọn phương pháp & kiểm tra nghiệm",
      "kntt_lessons": [
        "Core"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "chon-phuong-phap",
        "kiem-tra-nghiem-he",
        "so-nghiem-he"
      ],
      "prerequisites": [
        "giai-he-the",
        "giai-he-cong"
      ],
      "micro_practice": [
        "SYS09MICRO_010",
        "SYS09MICRO_011",
        "SYS09MICRO_012"
      ],
      "teaching_copy": {
        "key_idea": "Có hệ số \\(1\\) dễ rút ẩn thì cân nhắc thế; có hai hệ số đối nhau/bằng nhau hoặc bội nhỏ thì dùng cộng đại số. Nghiệm tìm được phải được thay vào **cả hai** phương trình. Khi hai đường thẳng song song/trùng, cần kết luận số nghiệm đúng.",
        "worked_example": {
          "problem": "Chọn phương pháp và giải \\(\\begin{cases}y=3x-1\\\\x+y=7\\end{cases}\\).",
          "solution": "Bước 1: Chọn thế vì \\(y\\) đã biểu diễn theo \\(x\\).\nBước 2: \\(x+3x-1=7\\Rightarrow4x=8\\Rightarrow x=2\\).\nBước 3: \\(y=3\\cdot2-1=5\\); kiểm tra \\(2+5=7\\). Vậy hệ có nghiệm \\((2;5)\\)."
        },
        "misconception": "Chọn cách giải dài không cần thiết hoặc chỉ kiểm tra một trong hai phương trình.",
        "summary": "Chọn cách ngắn, nhưng vẫn kiểm tra nghiệm trong toàn bộ hệ.",
        "source_reference": "docs/kien-thuc/09-he-phuong-trinh/index.md",
        "source_sections": [
          "3.3",
          "3.4",
          "3.5"
        ],
        "source_question_ids": [
          "SYS09MICRO_010",
          "SYS09MICRO_011",
          "SYS09MICRO_012"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "sys09-core-5",
      "order": 5,
      "title": "Lập hệ từ bài toán",
      "kntt_lessons": [
        "Ứng dụng Core"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "lap-he-bai-toan",
        "bai-toan-so",
        "chuyen-dong-he",
        "nang-suat-he"
      ],
      "prerequisites": [
        "giai-he-the",
        "giai-he-cong"
      ],
      "micro_practice": [
        "SYS09MICRO_013",
        "SYS09MICRO_014",
        "SYS09MICRO_015",
        "SYS09MICRO_017"
      ],
      "teaching_copy": {
        "key_idea": "Lập hệ từ bài toán: đặt hai ẩn với đơn vị và điều kiện, lập hai phương trình độc lập từ hai dữ kiện, giải và đối chiếu điều kiện. Với bài năng suất không đổi, sản lượng bằng năng suất nhân thời gian; với chuyển động đều, quãng đường bằng vận tốc nhân thời gian.",
        "worked_example": {
          "problem": "Đội A và B mỗi giờ làm lần lượt \\(x,y\\) sản phẩm. Cùng làm 1 giờ được 50 sản phẩm; A làm 3 giờ và B làm 1 giờ được 90 sản phẩm. Tìm năng suất từng đội.",
          "solution": "Bước 1: Đặt \\(x,y>0\\) (sản phẩm/giờ), giả sử năng suất mỗi đội không đổi.\nBước 2: Lập hệ \\(\\begin{cases}x+y=50\\\\3x+y=90\\end{cases}\\).\nBước 3: Lấy phương trình hai trừ phương trình một: \\(2x=40\\Rightarrow x=20\\), \\(y=30\\).\nBước 4: Thử \\(20+30=50\\), \\(3\\cdot20+30=90\\). Vậy A 20, B 30 sản phẩm/giờ."
        },
        "misconception": "Nhầm năng suất với sản lượng, quên nhân theo thời gian hoặc lập hai phương trình diễn đạt cùng một dữ kiện.",
        "summary": "Sản lượng = năng suất × thời gian; hai dữ kiện → hai phương trình → giải và đối chiếu.",
        "source_reference": "docs/kien-thuc/09-he-phuong-trinh/index.md",
        "source_sections": [
          "Dạng 8"
        ],
        "source_question_ids": [
          "SYS09MICRO_013",
          "SYS09MICRO_014",
          "SYS09MICRO_015"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    }
  ],
  "extensions": [
    {
      "id": "sys09-ent10-1",
      "layer": "Entrance10",
      "title": "Hệ có tham số",
      "gates_core": false
    },
    {
      "id": "sys09-ent10-2",
      "layer": "Entrance10",
      "title": "Bài toán thực tế nhiều bước",
      "gates_core": false
    },
    {
      "id": "sys09-challenge-1",
      "layer": "Specialized-Challenge",
      "title": "Hệ biến đổi cấu trúc nâng cao",
      "gates_core": false
    }
  ],
  "micro_practice_bank": "assets/data/practice/09-he-phuong-trinh-micro-v1.json",
  "observed_signal_policy": {
    "rule": "Signals are observations only; they never create causal remediation without sufficient learner evidence and a reviewed rule."
  },
  "qa_notes": [
    "tham-so-he is excluded from Core readiness.",
    "Geometric interpretation of a system is kept as Core Grade 9 knowledge.",
    "Card 4 now declares the original SYS09MICRO_012 primary assessed skill so-nghiem-he. This is metadata reconciliation only: original question ID, card ID, key, attempts, and three source-locked lecture question IDs remain unchanged.",
    "Dedicated coverage items are appended after the three original base/trap/apply items without changing R2/previously reviewed teaching content or learner-evidence semantics; each item assesses exactly one declared primary skill."
  ]
}

```

## Locked CĐ16 Learning Workspace

```json
{
  "schema": "roadmap-topic-learning-workspace-v1",
  "topic": "16-tu-giac",
  "title": "Tứ giác và các hình đặc biệt",
  "core_progress_policy": {
    "layer": "KNTT-Core",
    "rule": "Only mapped Core cards contribute to readiness; support/extension content never gates Core."
  },
  "cards": [
    {
      "id": "geo16-core-1",
      "order": 1,
      "title": "Tứ giác, hình thang và hình thang cân",
      "kntt_lessons": [
        "Lớp 8"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "tong-goc-tu-giac",
        "hinh-thang",
        "hinh-thang-can"
      ],
      "prerequisites": [
        "tinh-chat-song-song"
      ],
      "micro_practice": [
        "GEO16MICRO_001",
        "GEO16MICRO_002",
        "GEO16MICRO_003"
      ],
      "teaching_copy": {
        "key_idea": "Tổng bốn góc trong một tứ giác là \\(360^\\circ\\). Theo định nghĩa đang dùng trong bài học, hình thang có ít nhất một cặp cạnh đối song song; hình bình hành cũng thỏa định nghĩa rộng này. Hình thang cân có hai góc kề một đáy bằng nhau, hai cạnh bên và hai đường chéo bằng nhau. Đường trung bình nối trung điểm hai cạnh bên, song song hai đáy và dài bằng nửa tổng hai đáy.",
        "worked_example": {
          "problem": "Cho hình thang ABCD với \\(AB\\parallel CD\\), \\(AB=6\\) cm, \\(CD=10\\) cm. M, N lần lượt là trung điểm AD và BC. Tính MN.",
          "solution": "Bước 1: Vì M, N là trung điểm hai cạnh bên, MN là đường trung bình hình thang.\nBước 2: \\(MN=\\dfrac{AB+CD}{2}=\\dfrac{6+10}{2}=8\\) cm.\nBước 3: \\(MN\\parallel AB\\parallel CD\\). Không dùng công thức nửa một đáy của đường trung bình tam giác."
        },
        "misconception": "Dùng (MN=CD/2) như trong tam giác, hoặc suy ra hai cạnh bên bằng nhau chỉ từ giả thiết hình thang chưa cân.",
        "summary": "Hình thang: một cặp cạnh đối song song; đường trung bình bằng nửa tổng hai đáy.",
        "source_reference": "docs/kien-thuc/16-tu-giac/index.md",
        "source_sections": [
          "3.1",
          "3.2",
          "3.2A"
        ],
        "source_question_ids": [
          "GEO16MICRO_001",
          "GEO16MICRO_002",
          "GEO16MICRO_003"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE16-18-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo16-core-2",
      "order": 2,
      "title": "Hình bình hành",
      "kntt_lessons": [
        "Lớp 8"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "hbh-tinh-chat",
        "hbh-dau-hieu"
      ],
      "prerequisites": [
        "trung-diem"
      ],
      "micro_practice": [
        "GEO16MICRO_004",
        "GEO16MICRO_005",
        "GEO16MICRO_006"
      ],
      "teaching_copy": {
        "key_idea": "Hình bình hành có hai cặp cạnh đối song song; cạnh đối/góc đối bằng nhau, hai góc kề bù nhau, hai đường chéo cắt nhau tại trung điểm của mỗi đường. Các dấu hiệu đủ thường dùng: hai cặp cạnh đối song song, hai cặp cạnh đối bằng nhau, một cặp cạnh đối vừa song song vừa bằng nhau, hoặc hai đường chéo cắt nhau tại trung điểm mỗi đường.",
        "worked_example": {
          "problem": "Tứ giác ABCD có hai đường chéo AC, BD cắt tại O và \\(OA=OC=4\\) cm, \\(OB=OD=3\\) cm. Kết luận hình gì?",
          "solution": "Bước 1: Từ \\(OA=OC\\) suy ra O là trung điểm AC; từ \\(OB=OD\\) suy ra O là trung điểm BD (O nằm trên mỗi đường chéo).\nBước 2: Hai đường chéo cắt nhau tại trung điểm mỗi đường nên ABCD là hình bình hành.\nBước 3: Không có giả thiết AC=BD hay AC vuông góc BD để suy ra hình chữ nhật hoặc hình thoi."
        },
        "misconception": "Thấy hai đường chéo cắt nhau rồi kết luận hình bình hành mà chưa chứng minh chúng chia đôi nhau.",
        "summary": "Hai đường chéo cùng bị chia đôi tại giao điểm là dấu hiệu đủ của hình bình hành.",
        "source_reference": "docs/kien-thuc/16-tu-giac/index.md",
        "source_sections": [
          "3.3"
        ],
        "source_question_ids": [
          "GEO16MICRO_004",
          "GEO16MICRO_005",
          "GEO16MICRO_006"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE16-18-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo16-core-3",
      "order": 3,
      "title": "Hình chữ nhật",
      "kntt_lessons": [
        "Lớp 8"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "hcn-tinh-chat",
        "hcn-dau-hieu"
      ],
      "prerequisites": [
        "hbh-dau-hieu",
        "duong-vuong-goc"
      ],
      "micro_practice": [
        "GEO16MICRO_007",
        "GEO16MICRO_008",
        "GEO16MICRO_009"
      ],
      "teaching_copy": {
        "key_idea": "Hình chữ nhật là hình bình hành có một góc vuông, tương đương tứ giác có ba góc vuông. Hai đường chéo hình chữ nhật bằng nhau và chia đôi nhau. Chiều ngược cần tiền đề: **hình bình hành** có hai đường chéo bằng nhau là hình chữ nhật; một tứ giác bất kỳ có hai đường chéo bằng nhau chưa đủ.",
        "worked_example": {
          "problem": "Cho ABCD là hình bình hành có \\(AC=BD=10\\) cm. Chứng minh ABCD là hình chữ nhật và tính \\(OA\\) nếu O là giao điểm hai đường chéo.",
          "solution": "Bước 1: ABCD là hình bình hành, đồng thời có hai đường chéo bằng nhau, nên theo dấu hiệu nhận biết ABCD là hình chữ nhật.\nBước 2: Đường chéo hình bình hành bị giao điểm chia đôi, nên \\(OA=\\frac12 AC=5\\) cm.\nBước 3: Không chỉ dùng giả thiết \\(AC=BD\\) khi chưa biết ABCD là hình bình hành."
        },
        "misconception": "Áp dụng dấu hiệu hình chữ nhật cho tứ giác tùy ý chỉ vì hai đường chéo bằng nhau.",
        "summary": "Hình bình hành + hai đường chéo bằng nhau → hình chữ nhật.",
        "source_reference": "docs/kien-thuc/16-tu-giac/index.md",
        "source_sections": [
          "3.4"
        ],
        "source_question_ids": [
          "GEO16MICRO_007",
          "GEO16MICRO_008",
          "GEO16MICRO_009"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE16-18-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo16-core-4",
      "order": 4,
      "title": "Hình thoi",
      "kntt_lessons": [
        "Lớp 8"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "hthoi-tinh-chat",
        "hthoi-dau-hieu"
      ],
      "prerequisites": [
        "hbh-dau-hieu",
        "tia-phan-giac"
      ],
      "micro_practice": [
        "GEO16MICRO_010",
        "GEO16MICRO_011",
        "GEO16MICRO_012"
      ],
      "teaching_copy": {
        "key_idea": "Hình thoi là hình bình hành có bốn cạnh bằng nhau. Hai đường chéo vuông góc, chia đôi nhau và phân giác các góc ở đỉnh. Dấu hiệu đủ: tứ giác có bốn cạnh bằng nhau; hoặc hình bình hành có hai cạnh kề bằng nhau, hai đường chéo vuông góc, hay một đường chéo phân giác một góc.",
        "worked_example": {
          "problem": "ABCD là hình bình hành có \\(AC\\perp BD\\). Chứng minh ABCD là hình thoi.",
          "solution": "Bước 1: Đã có giả thiết ABCD là hình bình hành.\nBước 2: Theo dấu hiệu nhận biết, hình bình hành có hai đường chéo vuông góc là hình thoi.\nBước 3: Suy ra \\(AB=BC=CD=DA\\). Không cần giả định trước bốn cạnh bằng nhau."
        },
        "misconception": "Dùng hai đường chéo vuông góc để kết luận hình thoi khi chỉ biết tứ giác bất kỳ (có thể là hình diều).",
        "summary": "Đường chéo vuông góc là dấu hiệu hình thoi khi đi kèm điều kiện hình bình hành.",
        "source_reference": "docs/kien-thuc/16-tu-giac/index.md",
        "source_sections": [
          "3.5"
        ],
        "source_question_ids": [
          "GEO16MICRO_010",
          "GEO16MICRO_011",
          "GEO16MICRO_012"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE16-18-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo16-core-5",
      "order": 5,
      "title": "Hình vuông và quan hệ bao hàm",
      "kntt_lessons": [
        "Lớp 8"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "hvuong-tinh-chat",
        "hvuong-dau-hieu",
        "quan-he-bao-ham",
        "duong-cheo-suy-luan"
      ],
      "prerequisites": [
        "hcn-tinh-chat",
        "hthoi-tinh-chat"
      ],
      "micro_practice": [
        "GEO16MICRO_013",
        "GEO16MICRO_014",
        "GEO16MICRO_015",
        "GEO16MICRO_016"
      ],
      "teaching_copy": {
        "key_idea": "Hình vuông đồng thời là hình chữ nhật và hình thoi. Dấu hiệu đủ: hình chữ nhật có hai cạnh kề bằng nhau hoặc hai đường chéo vuông góc; hình thoi có một góc vuông hoặc hai đường chéo bằng nhau. Cần kiểm tra tiền đề loại hình trước khi nâng cấp. Quan hệ bao hàm: mọi hình vuông đều là hình chữ nhật và hình thoi, chiều đảo không đúng nói chung.",
        "worked_example": {
          "problem": "Cho ABCD là hình thoi và hai đường chéo \\(AC=BD\\). Kết luận loại tứ giác và nêu căn cứ.",
          "solution": "Bước 1: Theo giả thiết, ABCD là hình thoi.\nBước 2: Hình thoi có hai đường chéo bằng nhau là hình vuông.\nBước 3: ABCD vừa có bốn cạnh bằng nhau vừa có bốn góc vuông; không phải chỉ là hình chữ nhật tùy ý."
        },
        "misconception": "Chỉ dựa vào hai đường chéo bằng nhau để kết luận hình vuông, hoặc dùng sai chiều 'mọi hình thoi đều là hình vuông'.",
        "summary": "Hình thoi + hai đường chéo bằng nhau → hình vuông; nêu rõ tiền đề.",
        "source_reference": "docs/kien-thuc/16-tu-giac/index.md",
        "source_sections": [
          "3.6",
          "3.7"
        ],
        "source_question_ids": [
          "GEO16MICRO_013",
          "GEO16MICRO_014",
          "GEO16MICRO_015"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE16-18-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    }
  ],
  "extensions": [
    {
      "id": "geo16-ext-1",
      "layer": "Entrance10",
      "title": "Chuỗi chứng minh nâng cấp tứ giác đặc biệt",
      "gates_core": false
    },
    {
      "id": "geo16-ext-2",
      "layer": "Challenge",
      "title": "Bài hình tổng hợp khai thác đường chéo",
      "gates_core": false
    }
  ],
  "micro_practice_bank": "assets/data/practice/16-tu-giac-micro-v1.json",
  "geometry_contract": "assets/data/curriculum/geometry-architecture-v1.json",
  "qa_notes": [
    "Original GEO16MICRO_001…015 remain unchanged. GEO16MICRO_016 is appended to Core5 with a singleton assessed hvuong-dau-hieu skill; teaching source IDs remain original three; coverage is not mastery."
  ]
}

```

## Locked CĐ18 Learning Workspace

```json
{
  "schema": "roadmap-topic-learning-workspace-v1",
  "topic": "18-he-thuc-luong",
  "title": "Hệ thức lượng trong tam giác vuông",
  "core_progress_policy": {
    "layer": "KNTT-Core",
    "rule": "Only mapped Core cards contribute to readiness; support/extension content never gates Core."
  },
  "cards": [
    {
      "id": "geo18-core-1",
      "order": 1,
      "title": "Pythagore và nhận biết tam giác vuông",
      "kntt_lessons": [
        "Lớp 8–9"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "pythagore",
        "pythagore-dao",
        "canh-huyen"
      ],
      "prerequisites": [
        "can-bac-hai-so-hoc"
      ],
      "micro_practice": [
        "GEO18MICRO_001",
        "GEO18MICRO_002",
        "GEO18MICRO_003"
      ],
      "teaching_copy": {
        "key_idea": "Định lý Pythagore chỉ áp dụng trực tiếp cho tam giác **đã biết vuông**: \\(a^2+b^2=c^2\\), c là cạnh huyền, đối diện góc vuông. Chiều đảo: nếu bình phương cạnh dài nhất bằng tổng bình phương hai cạnh còn lại thì tam giác vuông. Khi tìm cạnh góc vuông phải lấy căn bậc hai số học, không cộng hai cạnh.",
        "worked_example": {
          "problem": "Tam giác có ba cạnh 8, 15 và 17 cm. Kiểm tra có vuông không và xác định cạnh huyền.",
          "solution": "Bước 1: Cạnh dài nhất là 17 cm, có \\(8^2+15^2=64+225=289\\).\nBước 2: \\(17^2=289\\), bằng tổng hai bình phương còn lại.\nBước 3: Theo Pythagore đảo, đây là tam giác vuông; cạnh huyền dài 17 cm."
        },
        "misconception": "Áp dụng Pythagore cho tam giác chưa chứng minh vuông, hoặc lấy cạnh không dài nhất làm cạnh huyền.",
        "summary": "Cạnh huyền đối diện góc vuông; đảo Pythagore so với bình phương cạnh dài nhất.",
        "source_reference": "docs/kien-thuc/18-he-thuc-luong/index.md",
        "source_sections": [
          "3.1"
        ],
        "source_question_ids": [
          "GEO18MICRO_001",
          "GEO18MICRO_002",
          "GEO18MICRO_003"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE16-18-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo18-core-2",
      "order": 2,
      "title": "Sin và cos",
      "kntt_lessons": [
        "Lớp 9"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "sin",
        "cos"
      ],
      "prerequisites": [
        "ti-le-doan-thang"
      ],
      "micro_practice": [
        "GEO18MICRO_004",
        "GEO18MICRO_005",
        "GEO18MICRO_006"
      ],
      "teaching_copy": {
        "key_idea": "Trong tam giác vuông, với góc nhọn \\(\\alpha\\), cạnh đối/kề phụ thuộc vào góc đang xét; cạnh huyền luôn đối diện góc vuông. \\(\\sin\\alpha=\\frac{\\text{đối}}{\\text{huyền}}\\), \\(\\cos\\alpha=\\frac{\\text{kề}}{\\text{huyền}}\\). Hai cạnh góc vuông đổi vai trò nếu đổi từ góc nhọn này sang góc nhọn kia.",
        "worked_example": {
          "problem": "Tam giác ABC vuông tại A có \\(AB=5\\), \\(AC=12\\), \\(BC=13\\). Tính \\(\\sin B\\) và \\(\\cos B\\).",
          "solution": "Bước 1: Với góc B, BC là cạnh huyền, AC là cạnh đối và AB là cạnh kề.\nBước 2: \\(\\sin B=AC/BC=12/13\\).\nBước 3: \\(\\cos B=AB/BC=5/13\\)."
        },
        "misconception": "Lấy AB làm cạnh đối góc B hoặc quên rằng BC mới là cạnh huyền.",
        "summary": "Chọn đúng góc rồi gắn đối – kề – huyền trước khi lập tỉ số.",
        "source_reference": "docs/kien-thuc/18-he-thuc-luong/index.md",
        "source_sections": [
          "3.3",
          "3.4"
        ],
        "source_question_ids": [
          "GEO18MICRO_004",
          "GEO18MICRO_005",
          "GEO18MICRO_006"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE16-18-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo18-core-3",
      "order": 3,
      "title": "Tan và cot",
      "kntt_lessons": [
        "Lớp 9"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "tan",
        "cot"
      ],
      "prerequisites": [
        "sin",
        "cos"
      ],
      "micro_practice": [
        "GEO18MICRO_007",
        "GEO18MICRO_008",
        "GEO18MICRO_009"
      ],
      "teaching_copy": {
        "key_idea": "Với góc nhọn \\(\\alpha\\), \\(\\tan\\alpha=\\frac{\\text{đối}}{\\text{kề}}\\) và \\(\\cot\\alpha=\\frac{\\text{kề}}{\\text{đối}}=\\frac1{\\tan\\alpha}\\); các mẫu dương trong tam giác vuông không suy biến. Không lấy cạnh huyền làm mẫu của tan/cot.",
        "worked_example": {
          "problem": "Tam giác vuông tại A có \\(AB=9,AC=12\\). Tính \\(\\tan B\\) và \\(\\cot B\\).",
          "solution": "Bước 1: Với B, AC=12 là cạnh đối, AB=9 là cạnh kề.\nBước 2: \\(\\tan B=AC/AB=12/9=4/3\\).\nBước 3: \\(\\cot B=AB/AC=9/12=3/4\\), kiểm tra \\(\\tan B\\cdot\\cot B=1\\)."
        },
        "misconception": "Đổi góc nhưng giữ nguyên tên cạnh đối/kề hoặc viết cot bằng tan.",
        "summary": "tan = đối/kề, cot = kề/đối; hai tỉ số nghịch đảo.",
        "source_reference": "docs/kien-thuc/18-he-thuc-luong/index.md",
        "source_sections": [
          "3.3",
          "3.4"
        ],
        "source_question_ids": [
          "GEO18MICRO_007",
          "GEO18MICRO_008",
          "GEO18MICRO_009"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE16-18-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo18-core-4",
      "order": 4,
      "title": "Tìm cạnh và tìm góc",
      "kntt_lessons": [
        "Lớp 9"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "tim-canh-luong-giac",
        "tim-goc-luong-giac"
      ],
      "prerequisites": [
        "sin",
        "cos",
        "tan",
        "cot"
      ],
      "micro_practice": [
        "GEO18MICRO_010",
        "GEO18MICRO_011",
        "GEO18MICRO_012"
      ],
      "teaching_copy": {
        "key_idea": "Biết góc và một cạnh, chọn sin/cos/tan theo cặp cạnh đề cho và cần tìm. Biết hai cạnh, lập tỉ số hợp lệ rồi dùng chức năng lượng giác nghịch đảo ở **chế độ độ** để tìm góc nhọn. Góc 30°/45°/60° nên dùng các giá trị chính xác trước khi làm tròn.",
        "worked_example": {
          "problem": "Tam giác ABC vuông tại A, cạnh huyền BC=20 cm, \\(\\angle B=30^\\circ\\). Tính cạnh AC đối diện góc B.",
          "solution": "Bước 1: AC là cạnh đối B, BC là cạnh huyền nên \\(\\sin B=AC/BC\\).\nBước 2: \\(AC=BC\\sin30^\\circ=20\\cdot\\frac12=10\\) cm.\nBước 3: Đối chiếu AC nhỏ hơn cạnh huyền 20 cm, hợp lý."
        },
        "misconception": "Dùng cos để tính cạnh đối từ cạnh huyền; nhầm chế độ radian và degree khi tính góc.",
        "summary": "Đối/huyền dùng sin; kề/huyền dùng cos; đối/kề dùng tan.",
        "source_reference": "docs/kien-thuc/18-he-thuc-luong/index.md",
        "source_sections": [
          "3.3",
          "3.4A",
          "3.6"
        ],
        "source_question_ids": [
          "GEO18MICRO_010",
          "GEO18MICRO_011",
          "GEO18MICRO_012"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE16-18-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo18-core-5",
      "order": 5,
      "title": "Góc nâng, góc hạ và đo khoảng cách",
      "kntt_lessons": [
        "Lớp 9"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "goc-nang-ha",
        "chieu-cao-khoang-cach"
      ],
      "prerequisites": [
        "tim-canh-luong-giac"
      ],
      "micro_practice": [
        "GEO18MICRO_013",
        "GEO18MICRO_014",
        "GEO18MICRO_015"
      ],
      "teaching_copy": {
        "key_idea": "Góc nâng/hạ đo so với phương ngang ở **vị trí người quan sát**. Khi biết khoảng cách ngang d và góc nâng \\(\\alpha\\), độ chênh cao từ mắt tới vật bằng \\(d\\tan\\alpha\\). Nếu mắt cao h₀ so với đất, chiều cao vật bằng \\(h_0+d\\tan\\alpha\\) khi đỉnh vật ở trên tầm mắt.",
        "worked_example": {
          "problem": "Một người đứng cách chân tháp theo phương ngang 20 m. Mắt cao 1,5 m, góc nâng đến đỉnh tháp \\(45^\\circ\\). Giả sử chân tháp cùng cao độ với chân người, tìm chiều cao tháp.",
          "solution": "Bước 1: Chênh cao đỉnh tháp so với tầm mắt là \\(20\\tan45^\\circ=20\\) m.\nBước 2: Cộng độ cao mắt: \\(H=20+1{,}5=21{,}5\\) m.\nBước 3: Nêu kết quả là chiều cao từ mặt đất; không bỏ sót chiều cao mắt."
        },
        "misconception": "Đo góc từ phương thẳng đứng hoặc quên cộng chiều cao mắt nếu đề cho.",
        "summary": "Độ chênh cao = khoảng cách ngang × tan góc nâng; xét thêm tầm mắt.",
        "source_reference": "docs/kien-thuc/18-he-thuc-luong/index.md",
        "source_sections": [
          "3.5",
          "3.6"
        ],
        "source_question_ids": [
          "GEO18MICRO_013",
          "GEO18MICRO_014",
          "GEO18MICRO_015"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE16-18-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    }
  ],
  "extensions": [
    {
      "id": "geo18-ext-1",
      "layer": "Core-Support",
      "title": "Cạnh đối – kề – huyền như kỹ năng hỗ trợ",
      "gates_core": false
    },
    {
      "id": "geo18-ext-2",
      "layer": "Entrance10",
      "title": "Hệ thức đường cao xuống cạnh huyền",
      "gates_core": false
    },
    {
      "id": "geo18-ext-3",
      "layer": "Challenge",
      "title": "Bài thực tế nhiều bước và mô hình hóa",
      "gates_core": false
    }
  ],
  "micro_practice_bank": "assets/data/practice/18-he-thuc-luong-micro-v1.json",
  "geometry_contract": "assets/data/curriculum/geometry-architecture-v1.json"
}

```

## CĐ09 existing written-practice source

# Practice Room – Chuyên đề 09: Hệ phương trình bậc nhất hai ẩn

> **Mục tiêu:** hiểu nghiệm hệ, chọn phương pháp giải phù hợp và mô hình hóa bài toán thực tế bằng hệ hai phương trình.
>
> **Core mặc định:** hệ có tham số nằm ở Entrance10 / Extension.

## B. ✍️ Luyện tự luận & trình bày

### Core KNTT

#### 09-WR-01 · Kiểm tra nghiệm hệ
Kiểm tra \((2;1)\) có là nghiệm của hệ \(x+y=3,\ 2x-y=3\) không.

??? tip "Gợi ý"
    Thay cặp số vào cả hai phương trình.

??? example "Xem lời giải"
    \(2+1=3\) và \(2\cdot2-1=3\), nên \((2;1)\) là nghiệm hệ.

#### 09-WR-02 · Ý nghĩa hình học
Một hệ biểu diễn hai đường thẳng song song phân biệt. Hệ có bao nhiêu nghiệm?

??? tip "Gợi ý"
    Nghiệm hệ là giao điểm chung.

??? example "Xem lời giải"
    Hai đường song song phân biệt không có giao điểm, nên hệ vô nghiệm.

#### 09-WR-03 · Phương pháp thế
Giải hệ \(y=x+2,\ x+y=8\).

??? tip "Gợi ý"
    Thế \(y=x+2\) vào phương trình hai.

??? example "Xem lời giải"
    \[
    2x+2=8\Rightarrow x=3,\qquad y=5.
    \]

#### 09-WR-04 · Cộng đại số
Giải hệ \(x+y=9,\ x-y=1\).

??? tip "Gợi ý"
    Cộng hai phương trình để khử \(y\).

??? example "Xem lời giải"
    \[
    2x=10\Rightarrow x=5,\qquad y=4.
    \]

#### 09-WR-05 · Biến đổi trước khi giải
Giải hệ \(\frac{x}{2}+\frac{y}{3}=2,\ x-y=1\).

??? tip "Gợi ý"
    Nhân phương trình đầu với 6.

??? example "Xem lời giải"
    \[
    3x+2y=12,\qquad x-y=1.
    \]
    Từ \(x=y+1\):
    \[
    3(y+1)+2y=12\Rightarrow5y=9\Rightarrow y=\frac95,\qquad x=\frac{14}{5}.
    \]

#### 09-WR-06 · Chọn phương pháp
Với hệ \(y=3x-1,\ 2x+y=9\), giải bằng phương pháp thuận tiện nhất.

??? tip "Gợi ý"
    \(y\) đã được biểu diễn theo \(x\).

??? example "Xem lời giải"
    Thế:
    \[
    2x+3x-1=9\Rightarrow x=2,\qquad y=5.
    \]

#### 09-WR-07 · Kiểm tra nghiệm
Sau khi giải được \((x;y)=(4;3)\), nêu cách kiểm tra kết quả cho một hệ hai phương trình.

??? tip "Gợi ý"
    Không chỉ kiểm tra một phương trình.

??? example "Xem lời giải"
    Thay \(x=4,y=3\) vào **cả hai** phương trình ban đầu; chỉ khi cả hai đẳng thức đều đúng mới xác nhận nghiệm.

#### 09-WR-08 · Bài toán về số
Tổng hai số là 46, hiệu số lớn trừ số bé là 12. Tìm hai số.

??? tip "Gợi ý"
    Gọi số lớn \(x\), số bé \(y\).

??? example "Xem lời giải"
    \[
    \begin{cases}
    x+y=46\\
    x-y=12
    \end{cases}
    \Rightarrow x=29,\qquad y=17.
    \]

#### 09-WR-09 · Chuyển động
Hai xe đi ngược chiều trong 2 giờ được tổng quãng đường 240 km. Xe thứ nhất nhanh hơn xe thứ hai 20 km/h. Tìm vận tốc mỗi xe.

??? tip "Gợi ý"
    Gọi vận tốc là \(x,y\): \(2x+2y=240,\ x-y=20\).

??? example "Xem lời giải"
    \[
    x+y=120,\qquad x-y=20
    \Rightarrow x=70,\qquad y=50.
    \]

#### 09-WR-10 · Năng suất
Hai máy cùng làm được 30 sản phẩm/giờ. Máy A nhiều hơn máy B 6 sản phẩm/giờ. Tìm năng suất mỗi máy.

??? tip "Gợi ý"
    Gọi năng suất \(x,y\).

??? example "Xem lời giải"
    \[
    x+y=30,\qquad x-y=6
    \Rightarrow x=18,\qquad y=12.
    \]

### Entrance10 / Extension

#### 09-ENT-01 · Hệ có tham số
Cho hệ \(x+y=5,\ mx-y=1\). Biết \((2;3)\) là nghiệm, tìm \(m\).

??? tip "Gợi ý"
    Thay cặp nghiệm vào phương trình chứa \(m\).

??? example "Xem lời giải"
    \[
    2m-3=1\Rightarrow m=2.
    \]

#### 09-ENT-02 · Mô hình nhiều bước
Một số có hai chữ số, tổng hai chữ số bằng 11. Đổi chỗ hai chữ số thì số mới nhỏ hơn số cũ 27. Tìm số ban đầu.

??? tip "Gợi ý"
    Gọi hàng chục \(x\), hàng đơn vị \(y\): số là \(10x+y\).

??? example "Xem lời giải"
    \[
    x+y=11,\qquad (10x+y)-(10y+x)=27
    \]
    nên \(x-y=3\). Suy ra \(x=7,y=4\), số là \(74\).

### Challenge

#### 09-CH-01 · Hệ phân thức đơn giản
Giải hệ \(\frac{x+y}{2}=3,\ \frac{x-y}{3}=1\).

??? tip "Gợi ý"
    Khử mẫu từng phương trình trước.

??? example "Xem lời giải"
    \[
    x+y=6,\qquad x-y=3
    \Rightarrow x=\frac92,\qquad y=\frac32.
    \]

---

## Theo dõi sau khi luyện
- [ ] Tôi phân biệt được nghiệm của một phương trình hai ẩn và nghiệm của hệ.
- [ ] Tôi biết khi nào nên dùng thế hoặc cộng đại số.
- [ ] Tôi kiểm tra nghiệm trên cả hai phương trình.
- [ ] Tôi đã tự giải ít nhất 3 bài Core trước khi mở lời giải.
- [ ] Khi tương đối chắc, tôi chuyển sang [✅ Core Readiness Check](tu-kiem-tra.md).

## Liên kết Roadmap

- **← Chuyên đề trước:** [08 – Phương trình và bất phương trình](../08-phuong-trinh-bat-phuong-trinh/index.md)
- **← Học kiến thức:** [Chuyên đề 09 – Hệ phương trình](index.md)
- **→ Tự kiểm tra:** [Core Readiness Check](tu-kiem-tra.md)
- **→ Chuyên đề tiếp theo:** [10 – Hàm số và đồ thị](../10-ham-so-do-thi/index.md)


## CĐ16 existing written-practice source

# Practice Room – Chuyên đề 16: Tứ giác và các hình đặc biệt

> **Mục tiêu:** luyện đúng **KNTT Core** trước; Core-Support / Entrance10 / Challenge không tính vào Core Readiness.
>
> **Geometry rule:** hình vẽ chỉ minh họa; kết luận phải dựa trên giả thiết hoặc định lí đã chứng minh.

## B. ✍️ Luyện tự luận & trình bày

### Core KNTT

#### 16-WR-01 · Tổng góc
Ba góc tứ giác là 78°,92°,105°. Tính góc còn lại.

??? example "Xem lời giải"
    85°.

#### 16-WR-02 · Hình thang cân
Nêu tính chất góc kề đáy và đường chéo của hình thang cân.

??? example "Xem lời giải"
    Góc kề mỗi đáy bằng nhau; hai đường chéo bằng nhau.

#### 16-WR-03 · Hình bình hành
AC,BD cắt tại O, OA=OC, OB=OD. Chứng minh ABCD là hình bình hành.

??? example "Xem lời giải"
    Hai đường chéo cắt tại trung điểm mỗi đường → hình bình hành.

#### 16-WR-04 · Dấu hiệu hình bình hành
AB∥CD và AB=CD. Kết luận và nêu dấu hiệu.

??? example "Xem lời giải"
    Một cặp cạnh đối vừa song song vừa bằng nhau → hình bình hành.

#### 16-WR-05 · Hình chữ nhật
ABCD là hình bình hành, AC=BD. Chứng minh là hình chữ nhật.

??? example "Xem lời giải"
    Hình bình hành có chéo bằng nhau → hình chữ nhật.

#### 16-WR-06 · Hình thoi
ABCD là hình bình hành, AC⊥BD. Chứng minh là hình thoi.

??? example "Xem lời giải"
    Hình bình hành có chéo vuông góc → hình thoi.

#### 16-WR-07 · Hình vuông
ABCD là hình chữ nhật, AB=BC. Chứng minh là hình vuông.

??? example "Xem lời giải"
    Hình chữ nhật có hai cạnh kề bằng nhau → hình vuông.

#### 16-WR-08 · Bao hàm
Giải thích vì sao mọi hình vuông vừa là hình chữ nhật vừa là hình thoi.

??? example "Xem lời giải"
    Bốn góc vuông → chữ nhật; bốn cạnh bằng nhau → thoi.

#### 16-WR-09 · Đường chéo
Hình bình hành có chéo bằng nhau và vuông góc. Chứng minh là hình vuông.

??? example "Xem lời giải"
    Chéo bằng nhau → chữ nhật; chéo vuông góc → thoi; kết hợp → vuông.

#### 16-WR-10 · Phản ví dụ
Có thể kết luận hình bình hành là hình chữ nhật chỉ vì hai chéo cắt tại trung điểm không?

??? example "Xem lời giải"
    Không; đó là tính chất chung của hình bình hành, cần thêm điều kiện đặc trưng.

### Core-Support / kết nối

Không có skill Core bổ sung ngoài 13 skill đã map.

### Entrance10 / Extension

#### 16-ENT-01 · Chuỗi nâng cấp
Ưu tiên chứng minh hình bình hành trước rồi nâng cấp bằng điều kiện đặc trưng.

### Challenge

#### 16-CH-01 · Không suy từ hình
Hình trông vuông không tạo giả thiết góc vuông.

## Theo dõi sau khi luyện
- [ ] Tôi chỉ dùng dữ kiện đã cho hoặc đã chứng minh.
- [ ] Tôi ghi đúng định lí/dấu hiệu trước khi kết luận.
- [ ] Tôi đã chữa lại các câu sai mà không nhìn lời giải.

## Liên kết Roadmap

- **← Chuyên đề trước:** [15 – Các đường đồng quy](../15-duong-dong-quy/index.md)
- **← Học kiến thức:** [Chuyên đề 16 – Tứ giác](index.md)
- **→ Tự kiểm tra:** [Core Readiness Check](tu-kiem-tra.md)
- **→ Chuyên đề tiếp theo:** [17 – Thales và tam giác đồng dạng](../17-thales-dong-dang/index.md)


## CĐ18 existing written-practice source

# Practice Room – Chuyên đề 18: Hệ thức lượng trong tam giác vuông

> **Mục tiêu:** luyện đúng **KNTT Core** trước; Core-Support / Entrance10 / Challenge không tính vào Core Readiness.
>
> **Geometry rule:** hình vẽ chỉ minh họa; kết luận phải dựa trên giả thiết hoặc định lí đã chứng minh.

## B. ✍️ Luyện tự luận & trình bày

### Core KNTT

#### 18-WR-01 · Pythagore
Hai cạnh góc vuông 9 và 12. Tính huyền.

??? example "Xem lời giải"
    15.

#### 18-WR-02 · Pythagore đảo
Kiểm tra 8,15,17 có tạo tam giác vuông không.

??? example "Xem lời giải"
    8²+15²=17² nên vuông.

#### 18-WR-03 · Cạnh huyền
ΔABC vuông tại A. Xác định cạnh huyền.

??? example "Xem lời giải"
    BC.

#### 18-WR-04 · Sin–cos
Đối α=5, kề α=12. Tính sin α, cos α.

??? example "Xem lời giải"
    Huyền 13; sin=5/13, cos=12/13.

#### 18-WR-05 · Tan–cot
Với dữ kiện trên, tính tan α, cot α.

??? example "Xem lời giải"
    tan=5/12, cot=12/5.

#### 18-WR-06 · Tìm cạnh
Huyền 20, α=30°. Tính cạnh đối.

??? example "Xem lời giải"
    10.

#### 18-WR-07 · Tìm góc
tan α=1, α nhọn. Tìm α.

??? example "Xem lời giải"
    45°.

#### 18-WR-08 · Góc nâng
Cách chân cột 25 m, góc nâng 45°, bỏ qua mắt. Tính chiều cao.

??? example "Xem lời giải"
    25 m.

#### 18-WR-09 · Chiều cao có mắt
Cách 30 m, góc nâng 45°, mắt cao 1,6 m. Tính chiều cao vật.

??? example "Xem lời giải"
    31,6 m.

#### 18-WR-10 · Mô hình
Vì sao không dùng khoảng cách nghiêng làm d trong tan α=h/d?

??? example "Xem lời giải"
    Tan dùng cạnh đối/kề; d phải là khoảng cách ngang.

### Core-Support / kết nối

Hệ thức đường cao xuống cạnh huyền là Core-Support/Entrance10 trong rollout này.

### Entrance10 / Extension

#### 18-ENT-01 · Hệ thức đường cao
Có thể luyện thêm \(AH^2=BH\cdot CH\) và các hệ thức liên quan.

### Challenge

#### 18-CH-01 · Mô hình hóa
Xác định đường ngang, chiều cao mắt và đơn vị trước khi tính.

## Theo dõi sau khi luyện
- [ ] Tôi chỉ dùng dữ kiện đã cho hoặc đã chứng minh.
- [ ] Tôi ghi đúng định lí/dấu hiệu trước khi kết luận.
- [ ] Tôi đã chữa lại các câu sai mà không nhìn lời giải.

## Liên kết Roadmap

- **← Chuyên đề trước:** [17 – Thales và tam giác đồng dạng](../17-thales-dong-dang/index.md)
- **← Học kiến thức:** [Chuyên đề 18 – Hệ thức lượng trong tam giác vuông](index.md)
- **→ Tự kiểm tra:** [Core Readiness Check](tu-kiem-tra.md)
- **→ Chuyên đề tiếp theo:** [19 – Đường tròn](../19-duong-tron/index.md)


## Exact candidate JSON

```json
{
  "schema_version": "1.0.0",
  "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B2-R1-20261001",
  "snapshot_date": "2026-10-01",
  "status": "REVIEW_ONLY_PENDING_NOTEBOOKLM_R1",
  "production_catalog_unchanged": true,
  "auto_readiness_credit": false,
  "self_marking_only": true,
  "scope": {
    "topics": [
      "CT09",
      "CT16",
      "CT18"
    ],
    "exercise_count": 6,
    "rule": "2 candidate items per topic: one CORE_BASE and one CORE_APPLY"
  },
  "exercises": [
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
      }
    }
  ]
}

```
