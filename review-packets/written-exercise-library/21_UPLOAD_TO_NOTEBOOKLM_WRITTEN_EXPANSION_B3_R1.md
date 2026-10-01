# SOURCE PACKET — Written Exercise Library Expansion B3 R1

Packet ID: `MATH-WRITTEN-LIBRARY-EXPANSION-B3-R1-20261001`

## Source lock

Review **only** the material in this packet.

- Base production checkpoint: `ea8b09702d4573f9d0c4af50df459b86c0d547f5`
- Branch: `review/written-library-expansion-b3-r1-20261001`
- Candidate JSON: `review-packets/written-exercise-library/20_WRITTEN_EXPANSION_B3_CANDIDATE.json`
  - blob: `4fae4c2535c7ad0ae608935c72030ee924924f5b`
- Design contract blob: `ab4ab40044baa0ddc7b2da344f2205fcdb7032ee`
- Production catalog blob: `6aa99bebea48f7096e59c4e62516b76dde27dc45`
- CĐ10 Learning Workspace blob: `6abcf30c6d714d3742ef79b3df16401d2456101b`
- CĐ11 Learning Workspace blob: `5272bd9adb589de428247baa3b834aeba48c4191`
- CĐ12 Learning Workspace blob: `975091376f5f93e9d90bb1f09642ce93b9ac3d8f`
- CĐ10 written-practice source blob: `b06ed2766dc9a455f62db0138f7a75f0bb13a58f`
- CĐ11 written-practice source blob: `8814674a67c9f576df49284282bd1fa16cfbba7c`
- CĐ12 written-practice source blob: `8199916e355e8d1a617ef8687c4f442e6c6e48d1`

## Scope

Exactly 6 **review-only** candidate exercises:

1. `WX10-FUN-001`
2. `WX10-FUN-002`
3. `WX11-RAD-001`
4. `WX11-RAD-002`
5. `WX12-QUA-001`
6. `WX12-QUA-002`

Two candidates per topic: one `CORE_BASE` and one `CORE_APPLY`.

Selection rationale is pedagogical, not an exam-frequency claim:
- CT10 observes translation between formula, coordinates, variation and graph structure;
- CT11 observes domain/absolute-value discipline and multi-step rationalization;
- CT12 observes ordered quadratic-solving logic and the forward/reverse use of Viète.

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

Special checks:
- CT10 must stay inside reviewed Core: line properties and the special parabola form `y=ax^2`; do not import line-line/line-parabola intersection extensions.
- CT11 must preserve domain conditions and `sqrt(U^2)=|U|`; conjugate rationalization must be algebraically valid.
- CT12 must use the correct direction of Viète and correct signs in `x^2-Sx+P=0`; no parameter/Entrance10 content.

## Architecture checks

ARCH_1 — exactly 6 candidates, two each for CT10/CT11/CT12.  
ARCH_2 — each topic has one CORE_BASE and one CORE_APPLY.  
ARCH_3 — all six remain review-only and do not alter the production catalog.  
ARCH_4 — self-marking only; no automatic Readiness/mastery credit.  
ARCH_5 — stable unique exercise IDs; no collision with the current production catalog.  
ARCH_6 — all skill IDs/layers are supported by the locked Learning Workspaces.  
ARCH_7 — every item contains problem, stepwise solution, rubric, common mistakes, remediation, and source refs.  
ARCH_8 — no unsupported exam-frequency claim is used to justify inclusion.  
ARCH_9 — CT10 stays within Core line / special `y=ax^2` boundaries and does not infer graph facts by appearance.  
ARCH_10 — CT11 domain/absolute-value/conjugate rules and CT12 quadratic/Viète directions are mathematically valid and remain Core.

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
      "CT09",
      "CT14",
      "CT16",
      "CT17",
      "CT18",
      "CT19",
      "CT24"
    ],
    "exercise_count": 18,
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
      }
    ],
    "rule": "Append-only publication of academically reviewed written exercises; self-marking only."
  }
}

```

## Locked CĐ10 Learning Workspace

```json
{
  "schema": "roadmap-topic-learning-workspace-v1",
  "topic": "10-ham-so-do-thi",
  "title": "Hàm số và đồ thị",
  "core_progress_policy": {
    "layer": "KNTT-Core",
    "rule": "Only Core cards contribute to readiness. Entrance10 and Challenge never gate Core completion."
  },
  "cards": [
    {
      "id": "fun10-core-1",
      "order": 1,
      "title": "Hàm số & bảng giá trị",
      "kntt_lessons": [
        "Lớp 8"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "khai-niem-ham-so",
        "tinh-gia-tri-ham",
        "bang-gia-tri"
      ],
      "prerequisites": [
        "bieu-thuc-dai-so"
      ],
      "micro_practice": [
        "FUN10MICRO_001",
        "FUN10MICRO_002",
        "FUN10MICRO_003"
      ],
      "teaching_copy": {
        "key_idea": "Hàm số gán cho mỗi \\(x\\) thuộc tập xác định **đúng một** \\(y\\). Với công thức \\(y=f(x)\\), thay giá trị \\(x\\) để tính \\(y\\); bảng giá trị ghi các cặp \\((x;y)\\) tương ứng và chuẩn bị cho vẽ đồ thị.",
        "worked_example": {
          "problem": "Với \\(f(x)=-x+4\\), lập bảng \\(y\\) ứng với \\(x=-2,0,2\\).",
          "solution": "Bước 1: \\(f(-2)=-(-2)+4=6\\).\nBước 2: \\(f(0)=4\\), \\(f(2)=-2+4=2\\).\nBước 3: Các cặp của bảng là \\((-2;6),(0;4),(2;2)\\)."
        },
        "misconception": "Thay (x=-2) nhưng quên dấu âm trước x, hoặc đảo cột x và y.",
        "summary": "Mỗi x hợp lệ có đúng một y; thay x cẩn thận rồi ghi cặp có thứ tự.",
        "source_reference": "docs/kien-thuc/10-ham-so-do-thi/index.md",
        "source_sections": [
          "3.1",
          "3.2",
          "Dạng 1"
        ],
        "source_question_ids": [
          "FUN10MICRO_001",
          "FUN10MICRO_002",
          "FUN10MICRO_003"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "fun10-core-2",
      "order": 2,
      "title": "Tọa độ & điểm thuộc đồ thị",
      "kntt_lessons": [
        "Lớp 8"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "toa-do-diem",
        "diem-thuoc-do-thi"
      ],
      "prerequisites": [
        "mat-phang-toa-do"
      ],
      "micro_practice": [
        "FUN10MICRO_004",
        "FUN10MICRO_005",
        "FUN10MICRO_006"
      ],
      "teaching_copy": {
        "key_idea": "Điểm \\(M(x_0;y_0)\\) có hoành độ \\(x_0\\), tung độ \\(y_0\\). Điểm thuộc đồ thị \\(y=f(x)\\) khi \\(x_0\\) hợp lệ và \\(f(x_0)=y_0\\); nằm gần đường vẽ không đủ để kết luận.",
        "worked_example": {
          "problem": "Kiểm tra \\(A(-1;5)\\) có thuộc đồ thị \\(y=-2x+3\\) không.",
          "solution": "Bước 1: Hoành độ của \\(A\\) là \\(x=-1\\).\nBước 2: Tính \\(f(-1)=-2(-1)+3=5\\).\nBước 3: Tung độ \\(A\\) cũng bằng 5, nên \\(A\\) thuộc đồ thị."
        },
        "misconception": "Đổi nhầm thứ tự tọa độ hoặc chỉ ước lượng bằng mắt trên hình.",
        "summary": "Muốn kiểm tra điểm thuộc đồ thị, thay hoành độ vào công thức và so sánh tung độ.",
        "source_reference": "docs/kien-thuc/10-ham-so-do-thi/index.md",
        "source_sections": [
          "3.3",
          "3.4",
          "Dạng 2"
        ],
        "source_question_ids": [
          "FUN10MICRO_004",
          "FUN10MICRO_005",
          "FUN10MICRO_006"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "fun10-core-3",
      "order": 3,
      "title": "Hàm số bậc nhất",
      "kntt_lessons": [
        "Lớp 8"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "nhan-biet-ham-bac-nhat",
        "he-so-goc",
        "tung-do-goc"
      ],
      "prerequisites": [
        "khai-niem-ham-so"
      ],
      "micro_practice": [
        "FUN10MICRO_007",
        "FUN10MICRO_008",
        "FUN10MICRO_009"
      ],
      "teaching_copy": {
        "key_idea": "Hàm số bậc nhất có dạng \\(y=ax+b\\), \\(a\\ne0\\); \\(a\\) là hệ số góc và \\(b\\) là tung độ gốc. Đồ thị cắt \\(Oy\\) tại \\((0;b)\\). Nếu cần giao \\(Ox\\), đặt \\(y=0\\) để giải \\(ax+b=0\\).",
        "worked_example": {
          "problem": "Với \\(y=-3x+6\\), xác định hệ số góc và giao điểm hai trục.",
          "solution": "Bước 1: \\(a=-3\\ne0\\), \\(b=6\\), nên hệ số góc bằng \\(-3\\).\nBước 2: Cho \\(x=0\\), được \\(A(0;6)\\) trên trục \\(Oy\\).\nBước 3: Cho \\(y=0\\), \\(-3x+6=0\\Rightarrow x=2\\), được \\(B(2;0)\\) trên trục \\(Ox\\)."
        },
        "misconception": "Nhầm dấu của hệ số góc hoặc viết giao Oy thành ((b;0)).",
        "summary": "Hệ số góc là a; giao Oy ((0;b)), giao Ox cho y=0.",
        "source_reference": "docs/kien-thuc/10-ham-so-do-thi/index.md",
        "source_sections": [
          "3.5",
          "Dạng 5"
        ],
        "source_question_ids": [
          "FUN10MICRO_007",
          "FUN10MICRO_008",
          "FUN10MICRO_009"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "fun10-core-4",
      "order": 4,
      "title": "Đồng/nghịch biến & vẽ đường thẳng",
      "kntt_lessons": [
        "Lớp 8"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "dong-nghich-bien",
        "ve-do-thi-ham-bac-nhat"
      ],
      "prerequisites": [
        "he-so-goc",
        "toa-do-diem"
      ],
      "micro_practice": [
        "FUN10MICRO_010",
        "FUN10MICRO_011",
        "FUN10MICRO_012"
      ],
      "teaching_copy": {
        "key_idea": "Đường thẳng \\(y=ax+b\\) được xác định bởi hai **điểm phân biệt** thuộc đồ thị. Nếu \\(a>0\\), hàm số đồng biến; \\(a<0\\), hàm số nghịch biến. Hai điểm dễ chọn thường là giao với \\(Ox\\) và \\(Oy\\), nhưng cần kiểm tra chúng phân biệt.",
        "worked_example": {
          "problem": "Vẽ \\(y=-x+2\\) bằng hai điểm và cho biết tính biến thiên.",
          "solution": "Bước 1: Cho \\(x=0\\), được \\(A(0;2)\\).\nBước 2: Cho \\(y=0\\), được \\(x=2\\), \\(B(2;0)\\).\nBước 3: Nối A và B để được đồ thị. Vì \\(a=-1<0\\), hàm số nghịch biến."
        },
        "misconception": "Chọn hai điểm trùng nhau, đặt nhầm x/y hoặc suy diễn biến thiên từ b thay vì a.",
        "summary": "Hai điểm khác nhau vẽ được đường thẳng; dấu a quyết định đồng/nghịch biến.",
        "source_reference": "docs/kien-thuc/10-ham-so-do-thi/index.md",
        "source_sections": [
          "3.5",
          "Dạng 4",
          "Dạng 6"
        ],
        "source_question_ids": [
          "FUN10MICRO_010",
          "FUN10MICRO_011",
          "FUN10MICRO_012"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "fun10-core-5",
      "order": 5,
      "title": "Parabol \\(y=ax^2\\)",
      "kntt_lessons": [
        "Lớp 9"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "ham-y-ax2",
        "doi-xung-parabol",
        "diem-thuoc-parabol"
      ],
      "prerequisites": [
        "toa-do-diem",
        "diem-thuoc-do-thi"
      ],
      "micro_practice": [
        "FUN10MICRO_013",
        "FUN10MICRO_014",
        "FUN10MICRO_015"
      ],
      "teaching_copy": {
        "key_idea": "Với dạng **đặc biệt** \\(y=ax^2\\), \\(a\\ne0\\), parabol có đỉnh \\(O(0;0)\\), đối xứng qua \\(Oy\\); \\(a>0\\) mở lên, \\(a<0\\) mở xuống. Giá trị tại \\(x\\) và \\(-x\\) bằng nhau. Không áp dụng máy móc tính chất đỉnh O cho \\(y=ax^2+bx+c\\).",
        "worked_example": {
          "problem": "Cho \\(y=-2x^2\\). Tính \\(y\\) tại \\(x=-2,0,2\\) và nêu đặc điểm đồ thị.",
          "solution": "Bước 1: Khi \\(x=-2\\) và \\(x=2\\), \\(y=-2\\cdot4=-8\\).\nBước 2: Khi \\(x=0\\), \\(y=0\\).\nBước 3: Parabol đi qua \\((-2;-8),(0;0),(2;-8)\\), có đỉnh O, trục đối xứng Oy và mở xuống."
        },
        "misconception": "Tính ((-2)^2=-4) hoặc cho rằng mọi phương trình hàm bậc hai đều có đỉnh tại O.",
        "summary": "Với y=ax²: đỉnh O, đối xứng Oy, hướng mở theo dấu a.",
        "source_reference": "docs/kien-thuc/10-ham-so-do-thi/index.md",
        "source_sections": [
          "3.8"
        ],
        "source_question_ids": [
          "FUN10MICRO_013",
          "FUN10MICRO_014",
          "FUN10MICRO_015"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    }
  ],
  "extensions": [
    {
      "id": "fun10-ent10-1",
      "layer": "Entrance10",
      "title": "Vị trí tương đối hai đường thẳng",
      "gates_core": false
    },
    {
      "id": "fun10-ent10-2",
      "layer": "Entrance10",
      "title": "Giao điểm đồ thị & liên hệ hệ phương trình",
      "gates_core": false
    },
    {
      "id": "fun10-challenge-1",
      "layer": "Specialized-Challenge",
      "title": "Đường thẳng – parabol & tham số",
      "gates_core": false
    }
  ],
  "micro_practice_bank": "assets/data/practice/10-ham-so-do-thi-micro-v1.json",
  "observed_signal_policy": {
    "rule": "Signals are observations only; they never create causal remediation without sufficient learner evidence and a reviewed rule."
  },
  "qa_notes": [
    "vi-tri-hai-duong-thang, giao-diem-do-thi and lien-he-he-phuong-trinh remain outside Core readiness until separately source-verified.",
    "y=ax^2 special-form parabol is Core Grade 9 overlay; do not generalize its vertex/symmetry rules to y=ax^2+bx+c."
  ]
}

```

## Locked CĐ11 Learning Workspace

```json
{
  "schema": "roadmap-topic-learning-workspace-v1",
  "topic": "11-can-thuc",
  "title": "Căn thức và biến đổi căn thức",
  "core_progress_policy": {
    "layer": "KNTT-Core",
    "rule": "Only Core cards contribute to readiness. Entrance10 and Challenge never gate Core completion."
  },
  "cards": [
    {
      "id": "rad11-core-1",
      "order": 1,
      "title": "Căn bậc hai & điều kiện",
      "kntt_lessons": [
        "Lớp 9 · Chương 3"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "can-bac-hai-so-hoc",
        "dkxd-can",
        "can-binh-phuong"
      ],
      "prerequisites": [
        "phep-tinh-so-thuc"
      ],
      "micro_practice": [
        "RAD11MICRO_001",
        "RAD11MICRO_002",
        "RAD11MICRO_003"
      ],
      "teaching_copy": {
        "key_idea": "Căn bậc hai số học \\(\\sqrt A\\) không âm và chỉ có nghĩa khi \\(A\\ge0\\). Nếu căn ở mẫu thì mẫu còn phải khác 0. Với mọi \\(U\\) thực, \\(\\sqrt{U^2}=|U|\\), không được bỏ dấu giá trị tuyệt đối khi chưa biết dấu U.",
        "worked_example": {
          "problem": "Tìm điều kiện và tính \\(E=\\sqrt{(x-5)^2}+\\sqrt{3x-6}\\) tại \\(x=2\\).",
          "solution": "Bước 1: \\(3x-6\\ge0\\Rightarrow x\\ge2\\); căn bình phương luôn có nghĩa.\nBước 2: Viết \\(E=|x-5|+\\sqrt{3x-6}\\).\nBước 3: Với \\(x=2\\): \\(E=|-3|+\\sqrt0=3\\)."
        },
        "misconception": "Viết (sqrt{(x-5)^2}=x-5) mọi lúc, hoặc xét dấu biểu thức ngoài căn thay cho dưới căn.",
        "summary": "Căn bậc hai số học không âm; xét điều kiện và nhớ √(U²)=|U|.",
        "source_reference": "docs/kien-thuc/11-can-thuc/index.md",
        "source_sections": [
          "3.1",
          "3.2",
          "3.3"
        ],
        "source_question_ids": [
          "RAD11MICRO_001",
          "RAD11MICRO_002",
          "RAD11MICRO_003"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "rad11-core-2",
      "order": 2,
      "title": "Khai phương tích & thương",
      "kntt_lessons": [
        "Lớp 9 · Chương 3"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "khai-phuong-tich",
        "khai-phuong-thuong"
      ],
      "prerequisites": [
        "can-bac-hai-so-hoc"
      ],
      "micro_practice": [
        "RAD11MICRO_004",
        "RAD11MICRO_005",
        "RAD11MICRO_006"
      ],
      "teaching_copy": {
        "key_idea": "Với \\(A,B\\ge0\\), \\(\\sqrt{AB}=\\sqrt A\\sqrt B\\); với \\(A\\ge0,B>0\\), \\(\\sqrt{A/B}=\\sqrt A/\\sqrt B\\). Để rút gọn một căn, nhận diện bình phương hoàn chỉnh dưới căn trước.",
        "worked_example": {
          "problem": "Rút gọn \\(\\sqrt{32}\\) và tính \\(\\frac{\\sqrt{98}}{\\sqrt2}\\).",
          "solution": "Bước 1: \\(\\sqrt{32}=\\sqrt{16\\cdot2}=4\\sqrt2\\).\nBước 2: Vì mẫu \\(\\sqrt2>0\\), \\(\\frac{\\sqrt{98}}{\\sqrt2}=\\sqrt{\\frac{98}{2}}=\\sqrt{49}=7\\).\nBước 3: Có thể kiểm tra bằng \\(\\sqrt{98}=7\\sqrt2\\)."
        },
        "misconception": "Dùng công thức chia căn khi mẫu bằng 0, hoặc viết (sqrt{A+B}=sqrt A+sqrt B).",
        "summary": "Tích/thương của căn dùng đúng miền điều kiện; tách bình phương hoàn chỉnh.",
        "source_reference": "docs/kien-thuc/11-can-thuc/index.md",
        "source_sections": [
          "3.4",
          "3.5",
          "Dạng 2",
          "Dạng 4"
        ],
        "source_question_ids": [
          "RAD11MICRO_004",
          "RAD11MICRO_005",
          "RAD11MICRO_006"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "rad11-core-3",
      "order": 3,
      "title": "Đưa thừa số ra / vào căn",
      "kntt_lessons": [
        "Lớp 9 · Chương 3"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "dua-thua-so-ra",
        "dua-thua-so-vao"
      ],
      "prerequisites": [
        "khai-phuong-tich",
        "can-binh-phuong"
      ],
      "micro_practice": [
        "RAD11MICRO_007",
        "RAD11MICRO_008",
        "RAD11MICRO_009"
      ],
      "teaching_copy": {
        "key_idea": "Muốn đưa thừa số ra căn, dùng \\(\\sqrt{A^2B}=|A|\\sqrt B\\) (khi \\(B\\ge0\\)). Muốn đưa \\(c\\sqrt B\\) vào căn, cần \\(c\\ge0\\); nếu \\(c<0\\), giữ dấu âm bên ngoài: \\(-c\\sqrt B=-\\sqrt{c^2B}\\) khi \\(c>0\\).",
        "worked_example": {
          "problem": "Rút gọn \\(\\sqrt{32x^2}\\); riêng với \\(x=-3\\), tính giá trị. Đồng thời đưa \\(-2\\sqrt7\\) vào căn.",
          "solution": "Bước 1: \\(\\sqrt{32x^2}=4|x|\\sqrt2\\).\nBước 2: Với \\(x=-3\\), kết quả \\(4\\cdot3\\sqrt2=12\\sqrt2\\).\nBước 3: \\(-2\\sqrt7=-\\sqrt{4\\cdot7}=-\\sqrt{28}\\); không mất dấu âm."
        },
        "misconception": "Viết (sqrt{x^2}=x) khi x âm, hoặc đưa số âm vào căn rồi làm mất dấu.",
        "summary": "Đưa ra dùng giá trị tuyệt đối; thừa số ngoài căn âm phải giữ dấu âm.",
        "source_reference": "docs/kien-thuc/11-can-thuc/index.md",
        "source_sections": [
          "3.6",
          "3.7"
        ],
        "source_question_ids": [
          "RAD11MICRO_007",
          "RAD11MICRO_008",
          "RAD11MICRO_009"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "rad11-core-4",
      "order": 4,
      "title": "Phép tính & trục căn thức",
      "kntt_lessons": [
        "Lớp 9 · Chương 3"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "can-dong-dang",
        "nhan-chia-can",
        "truc-can-mau-don",
        "truc-can-lien-hop"
      ],
      "prerequisites": [
        "dua-thua-so-ra",
        "hieu-hai-binh-phuong"
      ],
      "micro_practice": [
        "RAD11MICRO_010",
        "RAD11MICRO_011",
        "RAD11MICRO_012",
        "RAD11MICRO_016"
      ],
      "teaching_copy": {
        "key_idea": "Cộng trừ căn đồng dạng sau khi rút gọn về cùng phần căn. Với mẫu \\(\\sqrt a\\) (\\(a>0\\)), nhân cả tử và mẫu với \\(\\sqrt a\\); với mẫu dạng \\(u+\\sqrt v\\), dùng liên hợp nếu hiệu hai bình phương ở mẫu khác 0.",
        "worked_example": {
          "problem": "Rút gọn \\(A=\\sqrt{18}+\\sqrt8\\); trục căn ở mẫu của \\(B=\\frac3{\\sqrt5}\\).",
          "solution": "Bước 1: \\(\\sqrt{18}=3\\sqrt2,\\ \\sqrt8=2\\sqrt2\\), nên \\(A=5\\sqrt2\\).\nBước 2: \\(B=\\frac{3\\sqrt5}{\\sqrt5\\cdot\\sqrt5}=\\frac{3\\sqrt5}{5}\\).\nBước 3: Với mẫu tổng/hiệu chứa căn, có thể dùng biểu thức liên hợp, chẳng hạn \\(\\frac1{\\sqrt3+1}=\\frac{\\sqrt3-1}{2}\\)."
        },
        "misconception": "Cộng các số dưới căn trực tiếp, nhân chỉ tử hoặc làm cho mẫu liên hợp bằng 0.",
        "summary": "Đưa căn về cùng dạng; khi trục mẫu phải nhân cả tử và mẫu đúng biểu thức.",
        "source_reference": "docs/kien-thuc/11-can-thuc/index.md",
        "source_sections": [
          "Dạng 3",
          "Dạng 4",
          "Dạng 5",
          "Dạng 6"
        ],
        "source_question_ids": [
          "RAD11MICRO_010",
          "RAD11MICRO_011",
          "RAD11MICRO_012"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "rad11-core-5",
      "order": 5,
      "title": "Căn bậc ba",
      "kntt_lessons": [
        "Lớp 9 · Chương 3"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "can-bac-ba"
      ],
      "prerequisites": [
        "luy-thua"
      ],
      "micro_practice": [
        "RAD11MICRO_013",
        "RAD11MICRO_014",
        "RAD11MICRO_015"
      ],
      "teaching_copy": {
        "key_idea": "Căn bậc ba của mọi số thực đều tồn tại trong tập số thực; \\(\\sqrt[3]{A^3}=A\\) với mọi số thực A, không cần giá trị tuyệt đối. Khác với \\(\\sqrt{A^2}=|A|\\).",
        "worked_example": {
          "problem": "Tính \\(\\sqrt[3]{-125}\\) và rút gọn \\(\\sqrt[3]{(x-1)^3}\\).",
          "solution": "Bước 1: Vì \\((-5)^3=-125\\) nên \\(\\sqrt[3]{-125}=-5\\).\nBước 2: Với mọi \\(x\\) thực, \\(\\sqrt[3]{(x-1)^3}=x-1\\).\nBước 3: Không thay bằng \\(|x-1|\\), vì đó là quy tắc của căn bậc hai của bình phương."
        },
        "misconception": "Cho rằng căn bậc ba của số âm không có nghĩa hoặc tự đưa giá trị tuyệt đối vào kết quả.",
        "summary": "Căn bậc ba nhận cả số âm; căn của lập phương trả lại chính biểu thức.",
        "source_reference": "docs/kien-thuc/11-can-thuc/index.md",
        "source_sections": [
          "3.8"
        ],
        "source_question_ids": [
          "RAD11MICRO_013",
          "RAD11MICRO_014",
          "RAD11MICRO_015"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    }
  ],
  "extensions": [
    {
      "id": "rad11-ent10-1",
      "layer": "Entrance10",
      "title": "Phương trình chứa căn & kiểm tra nghiệm",
      "gates_core": false
    },
    {
      "id": "rad11-ent10-2",
      "layer": "Entrance10",
      "title": "So sánh biểu thức căn",
      "gates_core": false
    },
    {
      "id": "rad11-challenge-1",
      "layer": "Specialized-Challenge",
      "title": "Giá trị nguyên / tham số với căn thức",
      "gates_core": false
    }
  ],
  "micro_practice_bank": "assets/data/practice/11-can-thuc-micro-v1.json",
  "observed_signal_policy": {
    "rule": "Signals are observations only; they never create causal remediation without sufficient learner evidence and a reviewed rule."
  },
  "qa_notes": [
    "can-bac-ba is explicit Grade 9 Core and receives real Practice Bank coverage in RAD11-V1-05.",
    "tim-x-can and so-sanh-can remain outside Core readiness in this rollout because the reviewed Grade 9 map does not list them among CĐ11 core_existing/proposed skills.",
    "Dedicated coverage items are appended after the three original base/trap/apply items without changing R2/previously reviewed teaching content or learner-evidence semantics; each item assesses exactly one declared primary skill."
  ]
}

```

## Locked CĐ12 Learning Workspace

```json
{
  "schema": "roadmap-topic-learning-workspace-v1",
  "topic": "12-phuong-trinh-bac-hai-viete",
  "title": "Phương trình bậc hai & Viète",
  "core_progress_policy": {
    "layer": "KNTT-Core",
    "rule": "Only Core cards contribute to readiness. Entrance10 and Challenge never gate Core completion."
  },
  "cards": [
    {
      "id": "qua12-core-1",
      "order": 1,
      "title": "Nhận dạng & hệ số",
      "kntt_lessons": [
        "Lớp 9 · Chương 6"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "nhan-dang-pt-bac-hai",
        "he-so-abc"
      ],
      "prerequisites": [
        "thu-gon-da-thuc"
      ],
      "micro_practice": [
        "QUA12MICRO_001",
        "QUA12MICRO_002",
        "QUA12MICRO_003"
      ],
      "teaching_copy": {
        "key_idea": "Phương trình bậc hai một ẩn phải đưa về dạng \\(ax^2+bx+c=0\\), với \\(a\\ne0\\). Chỉ đọc \\(a,b,c\\) **sau khi** đã thu gọn về một vế; chú ý dấu của hệ số. Nếu hệ số \\(a=0\\), phương trình không còn bậc hai.",
        "worked_example": {
          "problem": "Đưa \\(2x(x-1)=5-x\\) về dạng chuẩn và xác định hệ số.",
          "solution": "Bước 1: \\(2x^2-2x=5-x\\).\nBước 2: Chuyển hết sang trái: \\(2x^2-x-5=0\\).\nBước 3: \\(a=2\\ne0,\\ b=-1,\\ c=-5\\), là phương trình bậc hai."
        },
        "misconception": "Đọc hệ số trước khi chuyển vế hoặc quên dấu âm ở c.",
        "summary": "Thu gọn về ax²+bx+c=0 trước, kiểm tra a khác 0.",
        "source_reference": "docs/kien-thuc/12-phuong-trinh-bac-hai-viete/index.md",
        "source_sections": [
          "3.1"
        ],
        "source_question_ids": [
          "QUA12MICRO_001",
          "QUA12MICRO_002",
          "QUA12MICRO_003"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "qua12-core-2",
      "order": 2,
      "title": "Biệt thức & số nghiệm",
      "kntt_lessons": [
        "Lớp 9 · Chương 6"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "tinh-delta",
        "so-nghiem-delta",
        "delta-phay"
      ],
      "prerequisites": [
        "he-so-abc"
      ],
      "micro_practice": [
        "QUA12MICRO_004",
        "QUA12MICRO_005",
        "QUA12MICRO_006"
      ],
      "teaching_copy": {
        "key_idea": "Với \\(a\\ne0\\), biệt thức \\(\\Delta=b^2-4ac\\): \\(\\Delta>0\\) có hai nghiệm thực phân biệt; \\(\\Delta=0\\) nghiệm kép; \\(\\Delta<0\\) không có nghiệm thực. Nếu \\(b=2b'\\), có thể tính \\(\\Delta'=b'^2-ac\\) để giảm phép tính.",
        "worked_example": {
          "problem": "Xét số nghiệm của \\(2x^2-4x+2=0\\) bằng cả \\(\\Delta\\) và \\(\\Delta'\\).",
          "solution": "Bước 1: \\(a=2,b=-4,c=2\\). \\(\\Delta=(-4)^2-4\\cdot2\\cdot2=0\\).\nBước 2: \\(b'=-2\\), \\(\\Delta'=(-2)^2-2\\cdot2=0\\).\nBước 3: Có nghiệm kép \\(x=\\frac4{4}=1\\); hai cách tính thống nhất."
        },
        "misconception": "Nhầm dấu b hoặc quên dấu trừ trong -4ac; kết luận hai nghiệm phân biệt khi Δ=0.",
        "summary": "Tính đúng biệt thức và xét dấu trước khi dùng công thức nghiệm.",
        "source_reference": "docs/kien-thuc/12-phuong-trinh-bac-hai-viete/index.md",
        "source_sections": [
          "3.2",
          "3.4"
        ],
        "source_question_ids": [
          "QUA12MICRO_004",
          "QUA12MICRO_005",
          "QUA12MICRO_006"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "qua12-core-3",
      "order": 3,
      "title": "Công thức nghiệm & giải",
      "kntt_lessons": [
        "Lớp 9 · Chương 6"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "cong-thuc-nghiem",
        "giai-pt-bac-hai"
      ],
      "prerequisites": [
        "tinh-delta",
        "can-bac-hai-so-hoc"
      ],
      "micro_practice": [
        "QUA12MICRO_007",
        "QUA12MICRO_008",
        "QUA12MICRO_009"
      ],
      "teaching_copy": {
        "key_idea": "Khi \\(\\Delta\\ge0\\), công thức nghiệm là \\(x=\\frac{-b\\pm\\sqrt\\Delta}{2a}\\); nếu \\(\\Delta=0\\) hai giá trị trùng nhau. Thay đúng hệ số \\(a,b,c\\), tính \\(\\sqrt\\Delta\\) rồi kiểm tra nghiệm bằng thay lại.",
        "worked_example": {
          "problem": "Giải \\(x^2-4x-5=0\\) bằng công thức nghiệm.",
          "solution": "Bước 1: \\(a=1,b=-4,c=-5\\); \\(\\Delta=16+20=36>0\\).\nBước 2: \\(x_{1,2}=\\frac{4\\pm6}{2}\\), nên \\(x_1=5,\\ x_2=-1\\).\nBước 3: Thay lại: \\(25-20-5=0\\) và \\(1+4-5=0\\)."
        },
        "misconception": "Bỏ dấu âm của b, viết mẫu 2 thay vì 2a, hoặc quên xét Δ trước khi lấy căn.",
        "summary": "Δ → số nghiệm → công thức đúng mẫu 2a → thử lại.",
        "source_reference": "docs/kien-thuc/12-phuong-trinh-bac-hai-viete/index.md",
        "source_sections": [
          "3.3",
          "Dạng 1"
        ],
        "source_question_ids": [
          "QUA12MICRO_007",
          "QUA12MICRO_008",
          "QUA12MICRO_009"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "qua12-core-4",
      "order": 4,
      "title": "Nhẩm nghiệm có cấu trúc",
      "kntt_lessons": [
        "Lớp 9 · Chương 6"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "nham-nghiem"
      ],
      "prerequisites": [
        "phan-tich-da-thuc"
      ],
      "micro_practice": [
        "QUA12MICRO_010",
        "QUA12MICRO_011",
        "QUA12MICRO_012"
      ],
      "teaching_copy": {
        "key_idea": "Có thể nhẩm nghiệm khi nhận ra nhân tử hoặc tổng và tích của hai số. Nếu \\(a+b+c=0\\), nghiệm \\(1\\) và nghiệm còn lại \\(c/a\\); nếu \\(a-b+c=0\\), nghiệm \\(-1\\) và nghiệm còn lại \\(-c/a\\). Khi không nhận nhanh được, dùng công thức nghiệm.",
        "worked_example": {
          "problem": "Nhẩm nghiệm \\(2x^2-7x+3=0\\).",
          "solution": "Bước 1: Nhận thấy \\(2x^2-7x+3=(2x-1)(x-3)\\).\nBước 2: \\((2x-1)(x-3)=0\\Rightarrow x=\\frac12\\) hoặc \\(x=3\\).\nBước 3: Kiểm tra tích hai nghiệm là \\(\\frac32=c/a\\), tổng là \\(\\frac72=-b/a\\)."
        },
        "misconception": "Chỉ nhẩm một nghiệm rồi bỏ quên nghiệm còn lại, hoặc nhầm điều kiện a+b+c=0 và a-b+c=0.",
        "summary": "Nhận dạng nhanh nhưng vẫn lấy đủ nghiệm và kiểm tra lại.",
        "source_reference": "docs/kien-thuc/12-phuong-trinh-bac-hai-viete/index.md",
        "source_sections": [
          "Dạng 2"
        ],
        "source_question_ids": [
          "QUA12MICRO_010",
          "QUA12MICRO_011",
          "QUA12MICRO_012"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "qua12-core-5",
      "order": 5,
      "title": "Viète & lập phương trình",
      "kntt_lessons": [
        "Lớp 9 · Chương 6"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "tong-tich-nghiem",
        "lap-pt-tu-nghiem"
      ],
      "prerequisites": [
        "giai-pt-bac-hai"
      ],
      "micro_practice": [
        "QUA12MICRO_013",
        "QUA12MICRO_014",
        "QUA12MICRO_015"
      ],
      "teaching_copy": {
        "key_idea": "Với phương trình bậc hai thực sự \\(ax^2+bx+c=0\\) có nghiệm thực \\(x_1,x_2\\), Viète cho \\(S=x_1+x_2=-b/a\\), \\(P=x_1x_2=c/a\\). Muốn lập phương trình hệ số đầu 1 từ hai nghiệm cho trước, dùng \\(x^2-Sx+P=0\\).",
        "worked_example": {
          "problem": "Dùng Viète xác định tổng–tích nghiệm của \\(2x^2-5x+2=0\\); sau đó lập phương trình hệ số đầu 1 có nghiệm \\(-2\\) và \\(5\\).",
          "solution": "Bước 1: \\(\\Delta=25-16=9>0\\), nên phương trình thứ nhất có hai nghiệm thực. Theo Viète, \\(S=\\frac52,\\ P=1\\).\nBước 2: Với nghiệm mới \\(-2,5\\), tổng \\(S'=3\\), tích \\(P'=-10\\).\nBước 3: Phương trình cần lập là \\(x^2-3x-10=0\\); có thể kiểm tra \\((x+2)(x-5)=0\\)."
        },
        "misconception": "Quên kiểm tra phương trình có nghiệm thực, đổi nhầm dấu của S khi lập phương trình hoặc nhầm P với -P.",
        "summary": "Viète: S=-b/a, P=c/a; lập phương trình: x²-Sx+P=0.",
        "source_reference": "docs/kien-thuc/12-phuong-trinh-bac-hai-viete/index.md",
        "source_sections": [
          "Dạng 4",
          "Dạng 8"
        ],
        "source_question_ids": [
          "QUA12MICRO_013",
          "QUA12MICRO_014",
          "QUA12MICRO_015"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    }
  ],
  "extensions": [
    {
      "id": "qua12-ent10-1",
      "layer": "Entrance10",
      "title": "Biểu thức đối xứng theo nghiệm",
      "gates_core": false
    },
    {
      "id": "qua12-ent10-2",
      "layer": "Entrance10",
      "title": "Dấu nghiệm & liên hệ đồ thị",
      "gates_core": false
    },
    {
      "id": "qua12-challenge-1",
      "layer": "Specialized-Challenge",
      "title": "Tham số và điều kiện số nghiệm",
      "gates_core": false
    }
  ],
  "micro_practice_bank": "assets/data/practice/12-phuong-trinh-bac-hai-viete-micro-v1.json",
  "observed_signal_policy": {
    "rule": "Signals are observations only; they never create causal remediation without sufficient learner evidence and a reviewed rule."
  },
  "qa_notes": [
    "tham-so-so-nghiem is excluded from Grade 9 Core in the reviewed map.",
    "bieu-thuc-doi-xung, dau-nghiem and lien-he-do-thi stay outside Core readiness pending item-level source review.",
    "lap-pt-tu-nghiem is retained in Core per the reviewed Grade 9 correction."
  ]
}

```

## CĐ10 existing written-practice source

# Practice Room – Chuyên đề 10: Hàm số và đồ thị

> **Mục tiêu:** chuyển đổi chắc chắn giữa công thức, bảng giá trị, tọa độ và đồ thị; nắm Core của đường thẳng và parabol dạng \(y=ax^2\).
>
> **Core mặc định:** vị trí hai đường thẳng, giao điểm đồ thị và liên hệ với hệ phương trình nằm ở Entrance10 / Extension trong batch này.

## B. ✍️ Luyện tự luận & trình bày

### Core KNTT

#### 10-WR-01 · Tính giá trị hàm
Cho \(f(x)=3x-2\). Tính \(f(-2)\).

??? tip "Gợi ý"
    Thay \(-2\) có ngoặc.

??? example "Xem lời giải"
    \[
    f(-2)=3(-2)-2=-8.
    \]

#### 10-WR-02 · Bảng giá trị
Lập bảng giá trị của \(y=2x+1\) tại \(x=-1,0,2\).

??? tip "Gợi ý"
    Thay từng giá trị \(x\) vào công thức.

??? example "Xem lời giải"
    Các cặp \((x;y)\): \((-1;-1),(0;1),(2;5)\).

#### 10-WR-03 · Tọa độ
Điểm \(A(-3;2)\) nằm ở góc phần tư nào?

??? tip "Gợi ý"
    \(x<0,\ y>0\).

??? example "Xem lời giải"
    \(A\) nằm ở góc phần tư II.

#### 10-WR-04 · Điểm thuộc đồ thị
Kiểm tra \(A(2;7)\) có thuộc \(y=3x+1\) không.

??? tip "Gợi ý"
    Tính giá trị vế phải tại \(x=2\).

??? example "Xem lời giải"
    \[
    3\cdot2+1=7,
    \]
    nên \(A\) thuộc đồ thị.

#### 10-WR-05 · Nhận biết hàm bậc nhất
Trong \(y=-4x+3\), xác định hệ số góc và tung độ gốc.

??? tip "Gợi ý"
    So với dạng \(y=ax+b\).

??? example "Xem lời giải"
    \(a=-4,\ b=3\).

#### 10-WR-06 · Đồng biến – nghịch biến
Cho \(y=5x-2\). Hàm đồng biến hay nghịch biến?

??? tip "Gợi ý"
    Xét dấu của hệ số \(a\).

??? example "Xem lời giải"
    \(a=5>0\), nên hàm đồng biến.

#### 10-WR-07 · Vẽ đường thẳng
Chọn hai điểm thuận tiện để vẽ \(y=2x-4\).

??? tip "Gợi ý"
    Dùng hai giao điểm với trục.

??? example "Xem lời giải"
    \(x=0\Rightarrow(0;-4)\).  
    \(y=0\Rightarrow(2;0)\). Nối hai điểm.

#### 10-WR-08 · Hàm \(y=ax^2\)
Lập bảng giá trị của \(y=2x^2\) tại \(x=-2,-1,0,1,2\).

??? tip "Gợi ý"
    Bình phương \(x\) trước rồi nhân 2.

??? example "Xem lời giải"
    Các giá trị \(y\): \(8,2,0,2,8\).

#### 10-WR-09 · Đối xứng parabol
Giải thích vì sao đồ thị \(y=3x^2\) đối xứng qua \(Oy\).

??? tip "Gợi ý"
    So sánh giá trị tại \(x\) và \(-x\).

??? example "Xem lời giải"
    \[
    3(-x)^2=3x^2,
    \]
    nên hai điểm ứng với \(x\) và \(-x\) có cùng tung độ.

#### 10-WR-10 · Điểm thuộc parabol
Kiểm tra \(B(-2;4)\) có thuộc \(y=x^2\) không.

??? tip "Gợi ý"
    Thay \(x=-2\).

??? example "Xem lời giải"
    \[
    (-2)^2=4,
    \]
    nên \(B\) thuộc parabol.

### Entrance10 / Extension

#### 10-ENT-01 · Vị trí hai đường thẳng
Xét vị trí \(y=2x+1\) và \(y=2x-4\).

??? tip "Gợi ý"
    So sánh hệ số góc và tung độ gốc.

??? example "Xem lời giải"
    Cùng hệ số góc 2, tung độ gốc khác nhau nên hai đường song song.

#### 10-ENT-02 · Giao điểm và hệ phương trình
Tìm giao điểm \(y=x+2\) và \(y=-x+4\).

??? tip "Gợi ý"
    Tại giao điểm hai giá trị \(y\) bằng nhau.

??? example "Xem lời giải"
    \[
    x+2=-x+4\Rightarrow x=1,\qquad y=3.
    \]
    Giao điểm là \(I(1;3)\).

### Challenge

#### 10-CH-01 · Đường thẳng – parabol
Tìm giao điểm của \(y=x^2\) và \(y=x+2\).

??? tip "Gợi ý"
    Cho hai biểu thức bằng nhau rồi phân tích nhân tử.

??? example "Xem lời giải"
    \[
    x^2=x+2\Rightarrow x^2-x-2=0
    \Rightarrow(x-2)(x+1)=0.
    \]
    Các giao điểm là \((2;4)\) và \((-1;1)\).

---

## Theo dõi sau khi luyện
- [ ] Tôi tính đúng giá trị hàm và đọc đúng tọa độ.
- [ ] Tôi biết kiểm tra điểm thuộc đồ thị bằng thay số.
- [ ] Tôi vẽ được đường thẳng từ hai điểm phân biệt.
- [ ] Tôi hiểu parabol \(y=ax^2\) đối xứng qua \(Oy\) và hướng mở phụ thuộc dấu \(a\).
- [ ] Khi tương đối chắc, tôi chuyển sang [✅ Core Readiness Check](tu-kiem-tra.md).

## Liên kết Roadmap

- **← Chuyên đề trước:** [09 – Hệ phương trình](../09-he-phuong-trinh/index.md)
- **← Học kiến thức:** [Chuyên đề 10 – Hàm số và đồ thị](index.md)
- **→ Tự kiểm tra:** [Core Readiness Check](tu-kiem-tra.md)
- **→ Chuyên đề tiếp theo:** [11 – Căn thức](../11-can-thuc/index.md)


## CĐ11 existing written-practice source

# Practice Room – Chuyên đề 11: Căn thức và biến đổi căn thức

> **Mục tiêu:** luyện chắc KNTT Core về căn bậc hai, biến đổi căn thức, trục căn thức ở mẫu và căn bậc ba.
>
> **Core mặc định:** phương trình chứa căn, so sánh căn và bài tham số/giá trị nguyên được tách sang Entrance10 / Challenge trong batch này.

## B. ✍️ Luyện tự luận & trình bày

### Core KNTT

#### 11-WR-01 · Điều kiện xác định
Tìm điều kiện xác định của \(\sqrt{3x-6}\).

??? tip "Gợi ý"
    Biểu thức dưới căn bậc hai phải không âm.

??? example "Xem lời giải"
    \[
    3x-6\ge0\Rightarrow x\ge2.
    \]

#### 11-WR-02 · Căn của bình phương
Rút gọn \(\sqrt{(2x-1)^2}\).

??? tip "Gợi ý"
    Dùng \(\sqrt{A^2}=|A|\).

??? example "Xem lời giải"
    \[
    \sqrt{(2x-1)^2}=|2x-1|.
    \]

#### 11-WR-03 · Khai phương tích
Rút gọn \(\sqrt{108}\).

??? tip "Gợi ý"
    Tách một thừa số chính phương lớn.

??? example "Xem lời giải"
    \[
    \sqrt{108}=\sqrt{36\cdot3}=6\sqrt3.
    \]

#### 11-WR-04 · Khai phương thương
Tính \(\dfrac{\sqrt{147}}{\sqrt3}\).

??? tip "Gợi ý"
    Gộp thành căn của thương.

??? example "Xem lời giải"
    \[
    \frac{\sqrt{147}}{\sqrt3}=\sqrt{49}=7.
    \]

#### 11-WR-05 · Đưa thừa số ra ngoài
Với \(x\in\mathbb R\), rút gọn \(\sqrt{32x^2}\).

??? tip "Gợi ý"
    Nhớ \(\sqrt{x^2}=|x|\).

??? example "Xem lời giải"
    \[
    \sqrt{32x^2}=4\sqrt2|x|.
    \]

#### 11-WR-06 · Căn đồng dạng
Rút gọn \(\sqrt{48}+\sqrt{27}-\sqrt3\).

??? tip "Gợi ý"
    Rút gọn từng căn về bội của \(\sqrt3\).

??? example "Xem lời giải"
    \[
    4\sqrt3+3\sqrt3-\sqrt3=6\sqrt3.
    \]

#### 11-WR-07 · Nhân căn
Tính \(\sqrt{10}\cdot\sqrt{40}\).

??? tip "Gợi ý"
    Gộp tích dưới một dấu căn.

??? example "Xem lời giải"
    \[
    \sqrt{10}\sqrt{40}=\sqrt{400}=20.
    \]

#### 11-WR-08 · Trục căn mẫu đơn
Trục căn thức ở mẫu \(\dfrac{5}{\sqrt{10}}\).

??? tip "Gợi ý"
    Nhân tử và mẫu với \(\sqrt{10}\), rồi rút gọn.

??? example "Xem lời giải"
    \[
    \frac5{\sqrt{10}}=\frac{5\sqrt{10}}{10}=\frac{\sqrt{10}}2.
    \]

#### 11-WR-09 · Trục căn bằng liên hợp
Trục căn thức ở mẫu \(\dfrac1{\sqrt5+1}\).

??? tip "Gợi ý"
    Nhân với liên hợp \(\sqrt5-1\).

??? example "Xem lời giải"
    \[
    \frac1{\sqrt5+1}=\frac{\sqrt5-1}{5-1}=\frac{\sqrt5-1}{4}.
    \]

#### 11-WR-10 · Căn bậc ba
Tính \(\sqrt[3]{-216}\) và rút gọn \(\sqrt[3]{8x^3}\) với \(x\in\mathbb R\).

??? tip "Gợi ý"
    Căn bậc ba của số âm vẫn xác định; \(\sqrt[3]{x^3}=x\).

??? example "Xem lời giải"
    \[
    \sqrt[3]{-216}=-6,\qquad \sqrt[3]{8x^3}=2x.
    \]

### Entrance10 / Extension

#### 11-ENT-01 · Phương trình chứa căn
Giải \(\sqrt{x+1}=x-1\).

??? tip "Gợi ý"
    Vế phải phải không âm trước khi bình phương.

??? example "Xem lời giải"
    Điều kiện \(x\ge1\). Bình phương:
    \[
    x+1=(x-1)^2\Rightarrow x(x-3)=0.
    \]
    Chỉ \(x=3\) thỏa.

#### 11-ENT-02 · So sánh căn
So sánh \(3\sqrt5\) và \(2\sqrt{11}\).

??? tip "Gợi ý"
    Hai số đều không âm nên có thể so sánh bình phương.

??? example "Xem lời giải"
    \[
    45>44,
    \]
    nên \(3\sqrt5>2\sqrt{11}\).

### Challenge

#### 11-CH-01 · Giá trị nguyên
Tìm các số nguyên \(x\ge0\), \(x<50\) sao cho \(\sqrt x\) là số nguyên.

??? tip "Gợi ý"
    x phải là số chính phương.

??? example "Xem lời giải"
    \[
    x\in\{0,1,4,9,16,25,36,49\}.
    \]

---

## Theo dõi sau khi luyện
- [ ] Tôi luôn kiểm tra điều kiện căn bậc hai.
- [ ] Tôi không quên giá trị tuyệt đối trong \(\sqrt{A^2}\).
- [ ] Tôi biến đổi và trục căn thức đúng.
- [ ] Tôi phân biệt căn bậc hai với căn bậc ba.
- [ ] Khi tương đối chắc, tôi chuyển sang [✅ Core Readiness Check](tu-kiem-tra.md).

## Liên kết Roadmap

- **← Chuyên đề trước:** [10 – Hàm số và đồ thị](../10-ham-so-do-thi/index.md)
- **← Học kiến thức:** [Chuyên đề 11 – Căn thức](index.md)
- **→ Tự kiểm tra:** [Core Readiness Check](tu-kiem-tra.md)
- **→ Chuyên đề tiếp theo:** [12 – Phương trình bậc hai & Viète](../12-phuong-trinh-bac-hai-viete/index.md)


## CĐ12 existing written-practice source

# Practice Room – Chuyên đề 12: Phương trình bậc hai & Viète

> **Mục tiêu:** luyện chắc KNTT Core về phương trình bậc hai, biệt thức, công thức nghiệm, nhẩm nghiệm và hệ thức Viète.
>
> **Core mặc định:** tham số số nghiệm được tách khỏi Core; biểu thức đối xứng, dấu nghiệm và liên hệ đồ thị nằm ở Entrance10 / Extension chờ item-level review.

## B. ✍️ Luyện tự luận & trình bày

### Core KNTT

#### 12-WR-01 · Nhận dạng
Xác định \(a,b,c\) của \(3x^2-7x-2=0\).

??? tip "Gợi ý"
    So với \(ax^2+bx+c=0\).

??? example "Xem lời giải"
    \[
    a=3,\quad b=-7,\quad c=-2.
    \]

#### 12-WR-02 · Điều kiện bậc hai
Tìm m để \((m-1)x^2+2x-3=0\) là phương trình bậc hai.

??? tip "Gợi ý"
    Hệ số của \(x^2\) phải khác 0.

??? example "Xem lời giải"
    \[
    m-1\ne0\Rightarrow m\ne1.
    \]

#### 12-WR-03 · Biệt thức
Tính \(\Delta\) và cho biết số nghiệm của \(2x^2-3x+5=0\).

??? tip "Gợi ý"
    Dùng \(\Delta=b^2-4ac\).

??? example "Xem lời giải"
    \[
    \Delta=9-40=-31<0,
    \]
    nên phương trình không có nghiệm thực.

#### 12-WR-04 · Delta phẩy
Dùng \(\Delta'\) giải \(x^2-6x+5=0\).

??? tip "Gợi ý"
    \(b'=-3\).

??? example "Xem lời giải"
    \[
    \Delta'=9-5=4,\qquad x=3\pm2.
    \]
    Vậy \(x=1\) hoặc \(x=5\).

#### 12-WR-05 · Công thức nghiệm
Giải \(2x^2-5x+2=0\).

??? tip "Gợi ý"
    \(\Delta=9\).

??? example "Xem lời giải"
    \[
    x=\frac{5\pm3}{4},
    \]
    nên \(x=2\) hoặc \(x=\frac12\).

#### 12-WR-06 · Nghiệm kép
Giải \(x^2-8x+16=0\).

??? tip "Gợi ý"
    Nhận ra bình phương hoàn chỉnh hoặc dùng Δ.

??? example "Xem lời giải"
    \[
    (x-4)^2=0\Rightarrow x=4
    \]
    là nghiệm kép.

#### 12-WR-07 · Nhẩm nghiệm
Giải nhanh \(x^2-9x+20=0\).

??? tip "Gợi ý"
    Tìm hai số có tổng 9 và tích 20.

??? example "Xem lời giải"
    Hai số là 4 và 5, nên nghiệm là \(x=4,5\).

#### 12-WR-08 · Viète
Không giải \(x^2-7x+12=0\), hãy tính \(x_1+x_2\) và \(x_1x_2\).

??? tip "Gợi ý"
    Dùng \(S=-b/a\), \(P=c/a\).

??? example "Xem lời giải"
    \[
    x_1+x_2=7,\qquad x_1x_2=12.
    \]

#### 12-WR-09 · Lập phương trình từ nghiệm
Lập phương trình bậc hai hệ số đầu bằng 1 có hai nghiệm 2 và -5.

??? tip "Gợi ý"
    Tính tổng S và tích P.

??? example "Xem lời giải"
    \[
    S=-3,\quad P=-10,
    \]
    nên \(x^2+3x-10=0\).

#### 12-WR-10 · Viète ngược
Lập phương trình bậc hai hệ số đầu bằng 1 có tổng hai nghiệm bằng 6 và tích bằng 5.

??? tip "Gợi ý"
    Dùng \(x^2-Sx+P=0\).

??? example "Xem lời giải"
    \[
    x^2-6x+5=0.
    \]

### Entrance10 / Extension

#### 12-ENT-01 · Biểu thức đối xứng
Cho \(x_1,x_2\) là nghiệm của \(x^2-5x+3=0\). Tính \(x_1^2+x_2^2\).

??? tip "Gợi ý"
    \(x_1^2+x_2^2=S^2-2P\).

??? example "Xem lời giải"
    \[
    25-6=19.
    \]

#### 12-ENT-02 · Dấu nghiệm
Cho \(x^2+x-6=0\) có hai nghiệm thực. Xét dấu hai nghiệm bằng Viète.

??? tip "Gợi ý"
    Xét dấu của tích P.

??? example "Xem lời giải"
    \[
    P=-6<0,
    \]
    nên hai nghiệm trái dấu.

### Challenge

#### 12-CH-01 · Tham số số nghiệm
Tìm m để \(x^2-2x+m=0\) có hai nghiệm thực phân biệt.

??? tip "Gợi ý"
    Yêu cầu \(\Delta>0\).

??? example "Xem lời giải"
    \[
    4-4m>0\Rightarrow m<1.
    \]

---

## Theo dõi sau khi luyện
- [ ] Tôi kiểm tra điều kiện hệ số bậc hai trước khi dùng công thức.
- [ ] Tôi tính Δ/Δ' đúng dấu.
- [ ] Tôi chọn được cách giải ngắn gọn.
- [ ] Tôi dùng Viète đúng chiều và đúng điều kiện.
- [ ] Khi tương đối chắc, tôi chuyển sang [✅ Core Readiness Check](tu-kiem-tra.md).

## Liên kết Roadmap

- **← Chuyên đề trước:** [11 – Căn thức](../11-can-thuc/index.md)
- **← Học kiến thức:** [Chuyên đề 12 – Phương trình bậc hai & Viète](index.md)
- **→ Tự kiểm tra:** [Core Readiness Check](tu-kiem-tra.md)
- **→ Chuyên đề tiếp theo:** [13 – Góc và đường thẳng](../13-goc-va-duong-thang/index.md)


## Exact candidate JSON

```json
{
  "schema_version": "1.0.0",
  "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B3-R1-20261001",
  "snapshot_date": "2026-10-01",
  "status": "REVIEW_ONLY_PENDING_NOTEBOOKLM_R1",
  "production_catalog_unchanged": true,
  "auto_readiness_credit": false,
  "self_marking_only": true,
  "scope": {
    "topics": [
      "CT10",
      "CT11",
      "CT12"
    ],
    "exercise_count": 6,
    "rule": "2 candidate items per topic: one CORE_BASE and one CORE_APPLY"
  },
  "exercises": [
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
      }
    }
  ]
}

```
