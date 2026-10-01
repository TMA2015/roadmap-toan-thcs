# SOURCE PACKET — Written Exercise Library Expansion B1 R1

Packet ID: `MATH-WRITTEN-LIBRARY-EXPANSION-B1-R1-20261001`

## Source lock

Review **only** the material in this packet.

- Base production checkpoint before this review-only branch: `00adbf3cabb3ceb8d14ed95102cd3f45a2e0f33a`
- Branch: `review/written-library-expansion-b1-r1-20261001`
- Candidate JSON: `review-packets/written-exercise-library/07_WRITTEN_EXPANSION_B1_CANDIDATE.json`
  - blob: `afa995465f875acf4cf1cb838df6ddfb885ea206`
- Design contract blob: `ab4ab40044baa0ddc7b2da344f2205fcdb7032ee`
- Production pilot catalog blob: `bf926501b512a85fc2f0b73786784aa4cbe26f81`
- CĐ08 Learning Workspace blob: `9fc70ad021985a58a9248a9c4d9016b0b1645e5d`
- CĐ17 Learning Workspace blob: `48f7c5f3406ae41494ffab937b829afcb84eb2e2`
- CĐ19 Learning Workspace blob: `77c28a878857b082fbce244f38b2435ff72edb98`
- CĐ08 written-practice source blob: `b841559e3c4e21f0809a861b92197bbd6be3247b`
- CĐ17 written-practice source blob: `d4a37304612feb9838d63063156b639e28160a3c`
- CĐ19 written-practice source blob: `8beca6002685639a092eafcd8a65d31b1e37ef1f`

## Scope

Exactly 6 **review-only** candidate exercises:

1. `WX08-EQI-001`
2. `WX08-EQI-002`
3. `WX17-SIM-001`
4. `WX17-SIM-002`
5. `WX19-CIR-001`
6. `WX19-CIR-002`

Two candidates per topic: one `CORE_BASE` and one `CORE_APPLY`.

**Important:** production catalog is unchanged. This packet does not authorize publication, deployment, Readiness/mastery credit, or G3/canonical-evidence expansion.

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
- suitability for paper-first self-study.

For geometry:
- do not infer any fact from an absent or illustrative diagram;
- verify theorem conditions and correspondence/order;
- a figure is not required when the written hypotheses are sufficient.

## Architecture checks

ARCH_1 — exactly 6 candidates, two each for CT08/CT17/CT19.  
ARCH_2 — each topic has one CORE_BASE and one CORE_APPLY.  
ARCH_3 — all six remain review-only and do not alter the production catalog.  
ARCH_4 — self-marking only; no automatic Readiness/mastery credit.  
ARCH_5 — stable unique exercise IDs; no collision with the current production pilot catalog.  
ARCH_6 — all skill IDs/layers are supported by the locked Learning Workspaces.  
ARCH_7 — every item contains problem, stepwise solution, rubric, common mistakes, remediation, and source refs.  
ARCH_8 — no unsupported exam-frequency claim is used to justify inclusion.

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


## Current production pilot catalog — duplicate/ID reference

```json
{
  "schema_version": "1.0.0",
  "catalog_id": "MATH-WRITTEN-EXERCISE-LIBRARY-V1",
  "snapshot_date": "2026-10-01",
  "status": "PILOT_CANDIDATE_PENDING_NOTEBOOKLM_R1",
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
      }
    }
  ],
  "extension_policy": [
    "Append new exercises; never reuse an existing exercise_id.",
    "Prefer one CORE_BASE item per problem type; add CORE_APPLY only when it adds a distinct reasoning demand.",
    "Written-library self-marking never grants automatic Readiness/mastery credit in v1.",
    "Geometry figures support orientation only and never create unstated hypotheses.",
    "Existing Topic 25 A25 anchors keep their IDs and source of truth; future general-library surfacing must reference rather than duplicate them."
  ]
}

```

## Locked CĐ08 Learning Workspace

```json
{
  "schema": "roadmap-topic-learning-workspace-v1",
  "topic": "08-phuong-trinh-bat-phuong-trinh",
  "title": "Phương trình và bất phương trình",
  "core_progress_policy": {
    "layer": "KNTT-Core",
    "rule": "Only Core cards contribute to readiness. Entrance10 and Challenge never gate Core completion."
  },
  "cards": [
    {
      "id": "eq08-core-1",
      "order": 1,
      "title": "Nghiệm & phương trình bậc nhất",
      "kntt_lessons": [
        "Lớp 8 → 9"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "nghiem-phuong-trinh",
        "pt-bac-nhat",
        "bien-doi-pt-nhieu-buoc"
      ],
      "prerequisites": [
        "thu-gon-da-thuc"
      ],
      "micro_practice": [
        "EQ08MICRO_001",
        "EQ08MICRO_002",
        "EQ08MICRO_003"
      ],
      "teaching_copy": {
        "key_idea": "Nghiệm của phương trình là giá trị làm hai vế bằng nhau. Với phương trình bậc nhất \\(ax+b=0\\), \\(a\\ne0\\), ta chuyển vế rồi chia cho \\(a\\). Khi có ngoặc, phải phân phối, thu gọn hai vế trước; chỉ nhân/chia với số hoặc biểu thức đã biết khác \\(0\\).",
        "worked_example": {
          "problem": "Giải phương trình \\(2(x+1)+3=3x-1\\).",
          "solution": "Bước 1: Bỏ ngoặc: \\(2x+2+3=3x-1\\).\nBước 2: Thu gọn và chuyển vế: \\(2x+5=3x-1\\), suy ra \\(x=6\\).\nBước 3: Thay lại: vế trái \\(2\\cdot7+3=17\\), vế phải \\(18-1=17\\)."
        },
        "misconception": "Bỏ ngoặc thiếu hạng tử, chuyển vế sai dấu hoặc chia cho hệ số có thể bằng 0.",
        "summary": "Thu gọn → chuyển vế → chia hệ số khác 0 → thay lại kiểm tra.",
        "source_reference": "docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/index.md",
        "source_sections": [
          "3.1",
          "Ví dụ 1"
        ],
        "source_question_ids": [
          "EQ08MICRO_001",
          "EQ08MICRO_002",
          "EQ08MICRO_003"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "eq08-core-2",
      "order": 2,
      "title": "Phương trình tích & chứa mẫu",
      "kntt_lessons": [
        "Core"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "pt-tich",
        "dkxd-phuong-trinh-mau",
        "khu-mau-phuong-trinh",
        "doi-chieu-nghiem"
      ],
      "prerequisites": [
        "phan-tich-da-thuc",
        "phan-thuc-dai-so"
      ],
      "micro_practice": [
        "EQ08MICRO_004",
        "EQ08MICRO_005",
        "EQ08MICRO_006",
        "EQ08MICRO_016"
      ],
      "teaching_copy": {
        "key_idea": "Phương trình tích \\(A(x)B(x)=0\\) được giải bằng cách cho từng nhân tử bằng \\(0\\). Với phương trình chứa ẩn ở mẫu: tìm ĐKXĐ trước, nhân cả hai vế với mẫu chung trên miền xác định, giải rồi **đối chiếu nghiệm với điều kiện ban đầu**. Giá trị loại từ đầu không được lấy lại.",
        "worked_example": {
          "problem": "Giải \\(\\frac{x^2-4}{x-2}=0\\).",
          "solution": "Bước 1: \\(x-2\\ne0\\Rightarrow x\\ne2\\).\nBước 2: Nhân hai vế với \\(x-2\\) trên miền đã xác định: \\(x^2-4=0\\).\nBước 3: \\((x-2)(x+2)=0\\Rightarrow x=2\\) hoặc \\(x=-2\\).\nBước 4: Loại \\(x=2\\) vì trái ĐKXĐ. Vậy \\(S=\\{-2\\}\\)."
        },
        "misconception": "Khử mẫu khi chưa ghi điều kiện, hoặc kết luận cả nghiệm ngoại lai sau khi giải phương trình tích.",
        "summary": "ĐKXĐ → khử mẫu trên miền hợp lệ → giải → đối chiếu → kết luận.",
        "source_reference": "docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/index.md",
        "source_sections": [
          "3.2",
          "3.3"
        ],
        "source_question_ids": [
          "EQ08MICRO_004",
          "EQ08MICRO_005",
          "EQ08MICRO_006"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "eq08-core-3",
      "order": 3,
      "title": "Bất đẳng thức & tính chất thứ tự",
      "kntt_lessons": [
        "Lớp 9"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "bat-dang-thuc",
        "tinh-chat-thu-tu-phep-cong",
        "tinh-chat-thu-tu-phep-nhan"
      ],
      "prerequisites": [
        "phep-tinh-so-huu-ti"
      ],
      "micro_practice": [
        "EQ08MICRO_007",
        "EQ08MICRO_008",
        "EQ08MICRO_009"
      ],
      "teaching_copy": {
        "key_idea": "Bất đẳng thức diễn tả quan hệ \\(<,>,\\le,\\ge\\). Cộng/trừ cùng một biểu thức ở hai vế giữ chiều. Nhân/chia với **số dương** giữ chiều, với **số âm** phải đổi chiều. Không nhân/chia bởi biểu thức chưa biết dấu mà không xét trường hợp.",
        "worked_example": {
          "problem": "Giải bất phương trình \\(-4x+5\\le13\\).",
          "solution": "Bước 1: Trừ \\(5\\) cả hai vế: \\(-4x\\le8\\).\nBước 2: Chia cả hai vế cho số âm \\(-4\\), phải đổi chiều: \\(x\\ge-2\\).\nBước 3: Thử \\(x=-2\\) được \\(13\\le13\\), đúng; \\(x=-3\\) cho \\(17\\le13\\), sai."
        },
        "misconception": "Giữ nguyên chiều khi chia cho một số âm hoặc đổi chiều ngay từ bước cộng/trừ.",
        "summary": "Cộng/trừ giữ chiều; nhân/chia số âm đổi chiều.",
        "source_reference": "docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/index.md",
        "source_sections": [
          "3.4",
          "Ví dụ 3"
        ],
        "source_question_ids": [
          "EQ08MICRO_007",
          "EQ08MICRO_008",
          "EQ08MICRO_009"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "eq08-core-4",
      "order": 4,
      "title": "Bất phương trình & tập nghiệm",
      "kntt_lessons": [
        "Lớp 9"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "bpt-bac-nhat",
        "doi-chieu-bpt",
        "bieu-dien-tap-nghiem"
      ],
      "prerequisites": [
        "tinh-chat-thu-tu-phep-nhan"
      ],
      "micro_practice": [
        "EQ08MICRO_010",
        "EQ08MICRO_011",
        "EQ08MICRO_012"
      ],
      "teaching_copy": {
        "key_idea": "Giải bất phương trình bậc nhất bằng các phép biến đổi đúng chiều. Khi thể hiện trên trục số, kiểm tra **mốc biên** và **hướng**: \\(<,>\\) dùng điểm rỗng; \\(\\le,\\ge\\) dùng điểm đặc.",
        "worked_example": {
          "problem": "Giải \\(-3x+2\\ge8\\) và mô tả tập nghiệm trên trục số.",
          "solution": "Bước 1: \\(-3x\\ge6\\).\nBước 2: Chia cho \\(-3\\) và đổi chiều: \\(x\\le-2\\).\nBước 3: Đặt điểm **đặc** tại \\(-2\\), tô về bên trái vì có nhận mốc."
        },
        "misconception": "Giải đúng bất phương trình nhưng dùng điểm rỗng thay điểm đặc hoặc tô nhầm hướng.",
        "summary": "Kết quả đại số và hình trục số phải cùng mô tả một tập nghiệm.",
        "source_reference": "docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/index.md",
        "source_sections": [
          "3.4",
          "Trực quan – biểu diễn tập nghiệm"
        ],
        "source_question_ids": [
          "EQ08MICRO_010",
          "EQ08MICRO_011",
          "EQ08MICRO_012"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "eq08-core-5",
      "order": 5,
      "title": "Lập phương trình từ bài toán",
      "kntt_lessons": [
        "Ứng dụng Core"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "lap-phuong-trinh"
      ],
      "prerequisites": [
        "pt-bac-nhat"
      ],
      "micro_practice": [
        "EQ08MICRO_013",
        "EQ08MICRO_014",
        "EQ08MICRO_015"
      ],
      "teaching_copy": {
        "key_idea": "Trong bài toán thực tế, đặt ẩn kèm đơn vị và điều kiện, biểu diễn các đại lượng còn lại theo ẩn, lập phương trình theo dữ kiện, giải rồi đối chiếu điều kiện và trả lời bằng lời. Không coi câu lập phương trình là nghiệm cuối cùng của bài toán.",
        "worked_example": {
          "problem": "Có 8 vé, vé người lớn 50 nghìn và vé trẻ em 30 nghìn. Tổng tiền là 340 nghìn. Tìm số vé mỗi loại.",
          "solution": "Bước 1: Gọi \\(x\\) là số vé người lớn, \\(x\\) nguyên, \\(0\\le x\\le8\\); số vé trẻ em \\(8-x\\).\nBước 2: Lập \\(50x+30(8-x)=340\\) (đơn vị nghìn đồng).\nBước 3: \\(20x+240=340\\Rightarrow x=5\\); số vé trẻ em \\(8-5=3\\).\nBước 4: Hai số vé nguyên không âm, đúng tổng 8 và tổng tiền 340 nghìn."
        },
        "misconception": "Nhầm đơn vị, biểu diễn số vé còn lại thành (8+x), hoặc không kiểm tra tính nguyên và không âm.",
        "summary": "Ẩn và điều kiện → phương trình theo dữ kiện → giải → kiểm tra thực tế.",
        "source_reference": "docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/index.md",
        "source_sections": [
          "Mức 3 — Vận dụng",
          "Ví dụ mẫu"
        ],
        "source_question_ids": [
          "EQ08MICRO_013",
          "EQ08MICRO_014",
          "EQ08MICRO_015"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md"
      }
    }
  ],
  "extensions": [
    {
      "id": "eq08-ent10-1",
      "layer": "Entrance10",
      "title": "Lập bất phương trình từ bài toán",
      "gates_core": false
    },
    {
      "id": "eq08-ent10-2",
      "layer": "Entrance10",
      "title": "Giao nhiều tập nghiệm",
      "gates_core": false
    },
    {
      "id": "eq08-challenge-1",
      "layer": "Specialized-Challenge",
      "title": "Tham số trong phương trình/bất phương trình",
      "gates_core": false
    }
  ],
  "micro_practice_bank": "assets/data/practice/08-phuong-trinh-bat-phuong-trinh-micro-v1.json",
  "observed_signal_policy": {
    "rule": "Signals are observations only; they never create causal remediation without sufficient learner evidence and a reviewed rule."
  },
  "qa_notes": [
    "CĐ08 preserves Grade 8 → Grade 9 Vertical Spine.",
    "bat-dang-thuc, tinh-chat-thu-tu-phep-cong and tinh-chat-thu-tu-phep-nhan have real Practice Bank coverage before Golden rollout.",
    "tham-so-co-ban and giao-tap-nghiem are excluded from Core readiness; lap-bat-phuong-trinh remains Extension pending explicit source promotion.",
    "Dedicated coverage items are appended after the three original base/trap/apply items without changing R2/previously reviewed teaching content or learner-evidence semantics; each item assesses exactly one declared primary skill."
  ]
}

```

## Locked CĐ17 Learning Workspace

```json
{
  "schema": "roadmap-topic-learning-workspace-v1",
  "topic": "17-thales-dong-dang",
  "title": "Thales và tam giác đồng dạng",
  "core_progress_policy": {
    "layer": "KNTT-Core",
    "rule": "Only mapped Core cards contribute to readiness; support/extension content never gates Core."
  },
  "cards": [
    {
      "id": "geo17-core-1",
      "order": 1,
      "title": "Thales thuận, đảo và tỉ lệ",
      "kntt_lessons": [
        "Lớp 8"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "thales-thuan",
        "thales-dao",
        "ti-le-doan-thang"
      ],
      "prerequisites": [
        "tinh-chat-song-song"
      ],
      "micro_practice": [
        "GEO17MICRO_001",
        "GEO17MICRO_002",
        "GEO17MICRO_003"
      ],
      "teaching_copy": {
        "key_idea": "Trong tam giác ABC, D nằm **trên đoạn** AB và E nằm **trên đoạn** AC. Nếu \\(DE\\parallel BC\\) thì \\(\\frac{AD}{AB}=\\frac{AE}{AC}\\) và \\(\\frac{AD}{DB}=\\frac{AE}{EC}\\) khi các mẫu dương. Chiều đảo: nếu hai điểm nằm đúng hai cạnh và các tỉ số tương ứng bằng nhau, suy ra \\(DE\\parallel BC\\). Không viết tỉ số theo cặp cạnh không tương ứng.",
        "worked_example": {
          "problem": "Trong tam giác ABC, \\(D\\in AB,E\\in AC\\), \\(AD=3,DB=2,AE=6,EC=4\\) (độ dài dương). Có thể kết luận \\(DE\\parallel BC\\) không?",
          "solution": "Bước 1: \\(AD/DB=3/2\\) và \\(AE/EC=6/4=3/2\\).\nBước 2: D và E nằm trên hai cạnh tương ứng; các tỉ số bằng nhau.\nBước 3: Theo Thales đảo, \\(DE\\parallel BC\\)."
        },
        "misconception": "So sánh AD với EC hoặc bỏ qua điều kiện D, E phải nằm trên hai cạnh trong cấu hình đang xét.",
        "summary": "Thales: ghép các đoạn tương ứng; chiều đảo cần vị trí hai điểm trên cạnh.",
        "source_reference": "docs/kien-thuc/17-thales-dong-dang/index.md",
        "source_sections": [
          "3.1",
          "3.2"
        ],
        "source_question_ids": [
          "GEO17MICRO_001",
          "GEO17MICRO_002",
          "GEO17MICRO_003"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE16-18-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo17-core-2",
      "order": 2,
      "title": "Đường trung bình và phân giác",
      "kntt_lessons": [
        "Lớp 8"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "duong-trung-binh",
        "tinh-chat-duong-phan-giac"
      ],
      "prerequisites": [
        "trung-diem",
        "ti-le-doan-thang"
      ],
      "micro_practice": [
        "GEO17MICRO_004",
        "GEO17MICRO_005",
        "GEO17MICRO_006"
      ],
      "teaching_copy": {
        "key_idea": "Trong tam giác ABC, M, N lần lượt là trung điểm AB và AC thì \\(MN\\parallel BC\\) và \\(MN=\\frac12 BC\\). Đường phân giác trong AD (D thuộc BC) cho \\(\\frac{BD}{DC}=\\frac{AB}{AC}\\). Hai công cụ khác nhau: trung điểm tạo đường trung bình; phân giác chia cạnh đối diện theo tỉ lệ hai cạnh kề.",
        "worked_example": {
          "problem": "Tam giác ABC có M, N là trung điểm AB, AC, \\(BC=14\\) cm. Đồng thời, AD là phân giác trong góc A, D trên BC và \\(AB:AC=2:3\\). Tìm MN và tỉ số BD:DC.",
          "solution": "Bước 1: MN là đường trung bình nên \\(MN=BC/2=7\\) cm, \\(MN\\parallel BC\\).\nBước 2: Định lí phân giác trong: \\(BD/DC=AB/AC=2/3\\).\nBước 3: MN=7 cm và BD:DC=2:3 là hai kết quả từ hai giả thiết riêng; không cho rằng D là trung điểm."
        },
        "misconception": "Nhầm tỉ số chia cạnh của phân giác với đường trung tuyến hoặc kết luận D là trung điểm khi AB khác AC.",
        "summary": "Trung điểm → đường trung bình bằng nửa cạnh; phân giác → tỉ số hai cạnh kề.",
        "source_reference": "docs/kien-thuc/17-thales-dong-dang/index.md",
        "source_sections": [
          "3.3",
          "3.6",
          "Dạng 3"
        ],
        "source_question_ids": [
          "GEO17MICRO_004",
          "GEO17MICRO_005",
          "GEO17MICRO_006"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE16-18-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo17-core-3",
      "order": 3,
      "title": "Nhận biết và thứ tự tương ứng",
      "kntt_lessons": [
        "Lớp 8"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "nhan-biet-dong-dang",
        "thu-tu-tuong-ung"
      ],
      "prerequisites": [
        "viet-tuong-ung-tam-giac-bang-nhau"
      ],
      "micro_practice": [
        "GEO17MICRO_007",
        "GEO17MICRO_008",
        "GEO17MICRO_009"
      ],
      "teaching_copy": {
        "key_idea": "Hai tam giác đồng dạng có các góc tương ứng bằng nhau, cạnh tương ứng tỉ lệ. Thứ tự trong ký hiệu \\(\\triangle ABC\\sim\\triangle DEF\\) xác định A↔D, B↔E, C↔F. Từ đó \\(AB/DE=BC/EF=AC/DF\\). Không được đổi ngẫu nhiên thứ tự khi tính độ dài.",
        "worked_example": {
          "problem": "Biết \\(\\triangle ABC\\sim\\triangle MNP\\), \\(AB=6\\), \\(MN=9\\), \\(AC=8\\). Tính MP.",
          "solution": "Bước 1: Viết đúng A↔M, B↔N, C↔P nên AB↔MN và AC↔MP.\nBước 2: \\(AB/MN=AC/MP\\), tức \\(6/9=8/MP\\).\nBước 3: \\(MP=8\\cdot9/6=12\\)."
        },
        "misconception": "Ghép AC với NP chỉ vì cùng là cạnh còn lại hoặc dùng tỉ số đảo ở một cặp.",
        "summary": "Viết thứ tự đỉnh tương ứng trước khi lập tỉ số cạnh.",
        "source_reference": "docs/kien-thuc/17-thales-dong-dang/index.md",
        "source_sections": [
          "3.4"
        ],
        "source_question_ids": [
          "GEO17MICRO_007",
          "GEO17MICRO_008",
          "GEO17MICRO_009"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE16-18-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo17-core-4",
      "order": 4,
      "title": "Ba trường hợp đồng dạng",
      "kntt_lessons": [
        "Lớp 8"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "dong-dang-gg",
        "dong-dang-cgc",
        "dong-dang-ccc"
      ],
      "prerequisites": [
        "thu-tu-tuong-ung"
      ],
      "micro_practice": [
        "GEO17MICRO_010",
        "GEO17MICRO_011",
        "GEO17MICRO_012"
      ],
      "teaching_copy": {
        "key_idea": "Ba tiêu chuẩn đồng dạng: g-g (hai góc tương ứng bằng nhau); c-g-c (hai cặp cạnh tương ứng tỉ lệ và **góc xen giữa** bằng nhau); c-c-c (ba cặp cạnh tương ứng cùng một tỉ số). Không dùng chỉ hai cặp cạnh tỉ lệ và một góc không xen giữa để suy ra c-g-c.",
        "worked_example": {
          "problem": "Tam giác ABC và DEF có \\(AB/DE=AC/DF=2/3\\) và \\(\\angle BAC=\\angle EDF\\). Chứng minh hai tam giác đồng dạng.",
          "solution": "Bước 1: AB↔DE, AC↔DF là hai cặp cạnh tương ứng tỉ lệ.\nBước 2: Góc BAC nằm giữa AB, AC; góc EDF nằm giữa DE, DF, và hai góc này bằng nhau.\nBước 3: Theo c-g-c, \\(\\triangle ABC\\sim\\triangle DEF\\)."
        },
        "misconception": "Áp dụng c-g-c khi góc đã biết không xen giữa đúng hai cạnh đưa vào tỉ số.",
        "summary": "c-g-c đồng dạng: tỉ lệ hai cặp cạnh và bằng nhau ở góc xen giữa.",
        "source_reference": "docs/kien-thuc/17-thales-dong-dang/index.md",
        "source_sections": [
          "3.5"
        ],
        "source_question_ids": [
          "GEO17MICRO_010",
          "GEO17MICRO_011",
          "GEO17MICRO_012"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE16-18-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo17-core-5",
      "order": 5,
      "title": "Tính độ dài và hình đồng dạng",
      "kntt_lessons": [
        "Lớp 8"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "tinh-do-dai-dong-dang",
        "hinh-dong-dang"
      ],
      "prerequisites": [
        "nhan-biet-dong-dang"
      ],
      "micro_practice": [
        "GEO17MICRO_013",
        "GEO17MICRO_014",
        "GEO17MICRO_015"
      ],
      "teaching_copy": {
        "key_idea": "Từ \\(\\triangle ABC\\sim\\triangle DEF\\), các độ dài tương ứng theo cùng một hệ số k. Tỉ số chu vi cũng bằng k, tỉ số diện tích bằng \\(k^2\\); phần hệ quả đo lường được giữ làm kiến thức liên hệ, không tự tính là Core readiness nếu đang ở lớp mở rộng. Trong Core hãy lập đúng tỉ lệ cạnh để tìm độ dài.",
        "worked_example": {
          "problem": "Hai tam giác đồng dạng với \\(AB/DE=BC/EF=2/3\\). Biết \\(BC=10\\) cm. Tính EF và kiểm tra tỉ lệ.",
          "solution": "Bước 1: \\(BC/EF=2/3\\).\nBước 2: \\(10/EF=2/3\\Rightarrow EF=15\\) cm.\nBước 3: \\(BC/EF=10/15=2/3\\), phù hợp tỉ số đồng dạng đã cho."
        },
        "misconception": "Đảo một tỉ số riêng lẻ dẫn đến EF=20/3; đưa tỉ số diện tích k² vào phép tính cạnh.",
        "summary": "Tìm cạnh bằng đúng tỉ số cùng thứ tự của hai tam giác.",
        "source_reference": "docs/kien-thuc/17-thales-dong-dang/index.md",
        "source_sections": [
          "3.4",
          "3.5A",
          "3.6",
          "Dạng 5"
        ],
        "source_question_ids": [
          "GEO17MICRO_013",
          "GEO17MICRO_014",
          "GEO17MICRO_015"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE16-18-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    }
  ],
  "extensions": [
    {
      "id": "geo17-ext-1",
      "layer": "Core-Support",
      "title": "Tỉ số chu vi, diện tích và hệ thức tích",
      "gates_core": false
    },
    {
      "id": "geo17-ext-2",
      "layer": "Entrance10",
      "title": "Kết hợp song song – đồng dạng trong chứng minh",
      "gates_core": false
    },
    {
      "id": "geo17-ext-3",
      "layer": "Challenge",
      "title": "Chuỗi đồng dạng nhiều bước",
      "gates_core": false
    }
  ],
  "micro_practice_bank": "assets/data/practice/17-thales-dong-dang-micro-v1.json",
  "geometry_contract": "assets/data/curriculum/geometry-architecture-v1.json"
}

```

## Locked CĐ19 Learning Workspace

```json
{
  "schema": "roadmap-topic-learning-workspace-v1",
  "topic": "19-duong-tron",
  "title": "Đường tròn",
  "core_progress_policy": {
    "layer": "KNTT-Core",
    "rule": "Only mapped Core cards contribute to readiness; support/Entrance10/Challenge never gate Core."
  },
  "cards": [
    {
      "id": "geo19-core-1",
      "order": 1,
      "title": "Dây, cung và độ dài đường tròn",
      "kntt_lessons": [
        "Lớp 9"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "day-va-tam",
        "cung-va-day",
        "do-dai-duong-tron",
        "do-dai-cung"
      ],
      "prerequisites": [
        "goc-o-tam"
      ],
      "micro_practice": [
        "GEO19MICRO_001",
        "GEO19MICRO_002",
        "GEO19MICRO_003",
        "GEO19MICRO_016"
      ],
      "teaching_copy": {
        "key_idea": "Đường kính (hoặc đường thẳng qua tâm) vuông góc với một dây thì đi qua trung điểm của dây đó; ngược lại, đường kính đi qua trung điểm của một dây không đi qua tâm thì vuông góc với dây đó. Trong cùng một đường tròn, hai dây bằng nhau chắn hai cung nhỏ bằng nhau. Chu vi C=2πR và độ dài cung l=(n/360)·2πR=nπR/180.",
        "worked_example": {
          "problem": "Trong (O;5 cm), dây AB không là đường kính, OM⊥AB tại M, OM=3 cm. Tính AB và chu vi.",
          "solution": "MA=√(25−9)=4 cm do tam giác OMA vuông; M là trung điểm AB nên AB=8 cm; C=10π cm."
        },
        "misconception": "Áp dụng định lí đảo cho dây là đường kính; dùng πR thay vì 2πR.",
        "summary": "Dây–tâm cần giả thiết; chu vi dùng bán kính.",
        "source_reference": "docs/kien-thuc/19-duong-tron/index.md",
        "source_sections": [
          "3.0",
          "3.2",
          "3.6A"
        ],
        "source_question_ids": [
          "GEO19MICRO_001",
          "GEO19MICRO_002",
          "GEO19MICRO_003"
        ],
        "review_status": "APPROVED",
        "review_method": "NOTEBOOKLM_R1_TARGETED_R2",
        "academic_review_ref": "content-staging/reviews/MATH-CORE19-R2-RELEASE-RECONCILIATION-20260929.md",
        "review_source_blob_sha": "358a0461ea70ee587432d1ad8773c52973edfa8a",
        "review_packet_id": "MATH-CORE19-20-R2-20260929"
      }
    },
    {
      "id": "geo19-core-2",
      "order": 2,
      "title": "Vị trí tương đối",
      "kntt_lessons": [
        "Lớp 9"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "vi-tri-tuong-doi-duong-thang-duong-tron",
        "vi-tri-tuong-doi-hai-duong-tron"
      ],
      "prerequisites": [
        "khoang-cach-diem-duong-thang"
      ],
      "micro_practice": [
        "GEO19MICRO_004",
        "GEO19MICRO_005",
        "GEO19MICRO_006"
      ],
      "teaching_copy": {
        "key_idea": "So khoảng cách tâm–đường thẳng với R; hai đường tròn so d với R+r và |R−r|. R=r,d=0 là trùng nhau chứ không là tiếp xúc trong.",
        "worked_example": {
          "problem": "Cho (O;5 cm), đường thẳng a cách O 3 cm và đường tròn thứ hai bán kính 3 cm cách O 4 cm. Tìm vị trí.",
          "solution": "a cắt (O) tại hai điểm vì 3<5. Hai đường tròn cắt nhau tại hai điểm vì |5−3|=2<4<8=5+3."
        },
        "misconception": "Nhầm tiếp xúc ngoài với cắt hai điểm; bỏ sót trường hợp trùng nhau.",
        "summary": "So sánh các khoảng cách theo đúng ranh giới.",
        "source_reference": "docs/kien-thuc/19-duong-tron/index.md",
        "source_sections": [
          "3.0",
          "3.3"
        ],
        "source_question_ids": [
          "GEO19MICRO_004",
          "GEO19MICRO_005",
          "GEO19MICRO_006"
        ],
        "review_status": "APPROVED",
        "review_method": "NOTEBOOKLM_R1_TARGETED_R2",
        "academic_review_ref": "content-staging/reviews/MATH-CORE19-R2-RELEASE-RECONCILIATION-20260929.md",
        "review_source_blob_sha": "358a0461ea70ee587432d1ad8773c52973edfa8a",
        "review_packet_id": "MATH-CORE19-20-R2-20260929"
      }
    },
    {
      "id": "geo19-core-3",
      "order": 3,
      "title": "Góc nội tiếp",
      "kntt_lessons": [
        "Lớp 9"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "goc-noi-tiep"
      ],
      "prerequisites": [
        "do-goc"
      ],
      "micro_practice": [
        "GEO19MICRO_007",
        "GEO19MICRO_008",
        "GEO19MICRO_009"
      ],
      "teaching_copy": {
        "key_idea": "Góc nội tiếp bằng nửa cung bị chắn KHÔNG chứa đỉnh góc. Cung nhỏ/lớn cần chỉ rõ; góc chắn nửa đường tròn là 90°.",
        "worked_example": {
          "problem": "Cung nhỏ AB=110°, C trên cung lớn AB (C≠A,B). Tính ∠ACB.",
          "solution": "∠ACB chắn cung nhỏ AB, nên bằng 110°/2=55°."
        },
        "misconception": "Lấy cung có đỉnh C, hoặc lấy bằng luôn góc ở tâm.",
        "summary": "Chọn đúng cung bị chắn trước khi tính.",
        "source_reference": "docs/kien-thuc/19-duong-tron/index.md",
        "source_sections": [
          "3.1",
          "3.3A"
        ],
        "source_question_ids": [
          "GEO19MICRO_007",
          "GEO19MICRO_008",
          "GEO19MICRO_009"
        ],
        "review_status": "APPROVED",
        "review_method": "NOTEBOOKLM_R1_TARGETED_R2",
        "academic_review_ref": "content-staging/reviews/MATH-CORE19-R2-RELEASE-RECONCILIATION-20260929.md",
        "review_source_blob_sha": "358a0461ea70ee587432d1ad8773c52973edfa8a",
        "review_packet_id": "MATH-CORE19-20-R2-20260929"
      }
    },
    {
      "id": "geo19-core-4",
      "order": 4,
      "title": "Nội tiếp và ngoại tiếp tam giác",
      "kntt_lessons": [
        "Lớp 9"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "tu-giac-noi-tiep",
        "dau-hieu-noi-tiep",
        "duong-tron-ngoai-tiep-tam-giac",
        "duong-tron-noi-tiep-tam-giac"
      ],
      "prerequisites": [
        "tam-ngoai-tiep",
        "tam-noi-tiep"
      ],
      "micro_practice": [
        "GEO19MICRO_010",
        "GEO19MICRO_011",
        "GEO19MICRO_012",
        "GEO19MICRO_017"
      ],
      "teaching_copy": {
        "key_idea": "Tứ giác lồi có một cặp góc đối tổng 180° thì nội tiếp được đường tròn. Ngoại tiếp tam giác: giao trung trực và cách đều ba đỉnh; nội tiếp: giao phân giác và cách đều ba cạnh.",
        "worked_example": {
          "problem": "Tứ giác lồi ABCD có ∠BAD=68°, ∠BCD=112°. Kết luận tính nội tiếp.",
          "solution": "Hai góc A và C đối nhau, 68°+112°=180°. Theo dấu hiệu đảo, bốn đỉnh cùng thuộc một đường tròn."
        },
        "misconception": "Nhầm tính chất với đảo, nhầm tâm nội tiếp/ngoại tiếp.",
        "summary": "Kết luận chỉ từ cặp góc đối và vị trí hợp lệ.",
        "source_reference": "docs/kien-thuc/19-duong-tron/index.md",
        "source_sections": [
          "3.0",
          "3.4"
        ],
        "source_question_ids": [
          "GEO19MICRO_010",
          "GEO19MICRO_011",
          "GEO19MICRO_012"
        ],
        "review_status": "APPROVED",
        "review_method": "NOTEBOOKLM_R1_TARGETED_R2",
        "academic_review_ref": "content-staging/reviews/MATH-CORE19-R2-RELEASE-RECONCILIATION-20260929.md",
        "review_source_blob_sha": "358a0461ea70ee587432d1ad8773c52973edfa8a",
        "review_packet_id": "MATH-CORE19-20-R2-20260929"
      }
    },
    {
      "id": "geo19-core-5",
      "order": 5,
      "title": "Đa giác đều, quạt tròn và vành khuyên",
      "kntt_lessons": [
        "Lớp 9"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "da-giac-deu",
        "dien-tich-quat-tron",
        "dien-tich-vanh-khuyen"
      ],
      "prerequisites": [
        "do-dai-duong-tron"
      ],
      "micro_practice": [
        "GEO19MICRO_013",
        "GEO19MICRO_014",
        "GEO19MICRO_015"
      ],
      "teaching_copy": {
        "key_idea": "Đa giác đều phải đều cạnh lẫn góc. Cung l=(n/360)2πR; quạt S=(n/360)πR²; vành khuyên đồng tâm S=π(R²−r²), R>r.",
        "worked_example": {
          "problem": "R=6 cm; quạt góc 120°; vành khuyên đồng tâm bán kính ngoài 6 cm, trong 4 cm. Tính ba đại lượng.",
          "solution": "l=4π cm; S_quạt=12π cm²; S_vành=π(36−16)=20π cm²."
        },
        "misconception": "Nhầm bán kính/đường kính, chu vi/diện tích, vành/quạt.",
        "summary": "Tách rõ độ dài và diện tích.",
        "source_reference": "docs/kien-thuc/19-duong-tron/index.md",
        "source_sections": [
          "3.0",
          "3.6A"
        ],
        "source_question_ids": [
          "GEO19MICRO_013",
          "GEO19MICRO_014",
          "GEO19MICRO_015"
        ],
        "review_status": "APPROVED",
        "review_method": "NOTEBOOKLM_R1_TARGETED_R2",
        "academic_review_ref": "content-staging/reviews/MATH-CORE19-R2-RELEASE-RECONCILIATION-20260929.md",
        "review_source_blob_sha": "358a0461ea70ee587432d1ad8773c52973edfa8a",
        "review_packet_id": "MATH-CORE19-20-R2-20260929"
      }
    }
  ],
  "extensions": [
    {
      "id": "geo19-ext-1",
      "layer": "Core-Support",
      "title": "Góc ở tâm, nửa đường tròn và tiếp tuyến–bán kính hỗ trợ suy luận",
      "gates_core": false
    },
    {
      "id": "geo19-ext-2",
      "layer": "Entrance10",
      "title": "Chứng minh tiếp tuyến và chuỗi nội tiếp–đồng dạng",
      "gates_core": false
    },
    {
      "id": "geo19-ext-3",
      "layer": "Challenge",
      "title": "Hệ thức hai dây / tiếp tuyến–cát tuyến và bài nhiều bước",
      "gates_core": false
    }
  ],
  "micro_practice_bank": "assets/data/practice/19-duong-tron-micro-v1.json",
  "geometry_contract": "assets/data/curriculum/geometry-architecture-v1.json"
}

```

## CĐ08 existing written-practice source

# Practice Room – Chuyên đề 08: Phương trình và bất phương trình

> **Mục tiêu:** rèn khả năng biến đổi phương trình/bất phương trình, kiểm soát điều kiện và mô hình hóa bằng phương trình.
>
> **Core mặc định:** giao nhiều tập nghiệm, lập bất phương trình từ bài toán và tham số nằm ở Entrance10 / Extension.

## B. ✍️ Luyện tự luận & trình bày

### Core KNTT

#### 08-WR-01 · Phương trình bậc nhất
Giải \(5x-7=18\).

??? tip "Gợi ý"
    Chuyển \(-7\) sang vế phải rồi chia cho 5.

??? example "Xem lời giải"
    \[
    5x=25\Rightarrow x=5.
    \]

#### 08-WR-02 · Phương trình nhiều bước
Giải \(2(x-3)+3(x+1)=12\).

??? tip "Gợi ý"
    Bỏ ngoặc, thu gọn rồi đưa về dạng \(ax+b=0\).

??? example "Xem lời giải"
    \[
    2x-6+3x+3=12\Rightarrow5x=15\Rightarrow x=3.
    \]

#### 08-WR-03 · Phương trình tích
Giải \((x-4)(2x+1)=0\).

??? tip "Gợi ý"
    Một tích bằng 0 khi ít nhất một nhân tử bằng 0.

??? example "Xem lời giải"
    \[
    x=4\qquad\text{hoặc}\qquad x=-\frac12.
    \]

#### 08-WR-04 · Điều kiện xác định
Tìm điều kiện xác định của \(\frac1{x-2}+\frac2{x+1}=3\).

??? tip "Gợi ý"
    Mỗi mẫu phải khác 0.

??? example "Xem lời giải"
    \[
    x\ne2,\qquad x\ne-1.
    \]

#### 08-WR-05 · Phương trình chứa mẫu
Giải \(\frac{x+1}{x-1}=2\).

??? tip "Gợi ý"
    Ghi ĐKXĐ trước, rồi nhân hai vế với \(x-1\).

??? example "Xem lời giải"
    ĐKXĐ: \(x\ne1\).

    \[
    x+1=2x-2\Rightarrow x=3.
    \]

    \(x=3\) thỏa điều kiện.

#### 08-WR-06 · Tính chất thứ tự với phép cộng
Từ \(x-5<3\), suy ra bất đẳng thức đơn giản theo \(x\).

??? tip "Gợi ý"
    Cộng 5 vào cả hai vế.

??? example "Xem lời giải"
    \[
    x<8.
    \]

#### 08-WR-07 · Tính chất thứ tự với phép nhân
Giải \(-4x\le12\).

??? tip "Gợi ý"
    Khi chia cho số âm phải đổi chiều.

??? example "Xem lời giải"
    \[
    x\ge-3.
    \]

#### 08-WR-08 · Bất phương trình bậc nhất
Giải \(3x+2>11\).

??? tip "Gợi ý"
    Đưa về \(3x>9\).

??? example "Xem lời giải"
    \[
    x>3.
    \]

#### 08-WR-09 · Biểu diễn tập nghiệm
Mô tả cách biểu diễn \(x\le2\) trên trục số.

??? tip "Gợi ý"
    Dấu \(\le\) có lấy mốc.

??? example "Xem lời giải"
    Đặt **điểm đặc** tại \(2\) và tô về phía bên trái.

#### 08-WR-10 · Lập phương trình
Một số cộng 7 rồi nhân 2 được 30. Tìm số đó.

??? tip "Gợi ý"
    Gọi số cần tìm là \(x\), lập phương trình \(2(x+7)=30\).

??? example "Xem lời giải"
    \[
    x+7=15\Rightarrow x=8.
    \]

### Entrance10 / Extension

#### 08-ENT-01 · Lập bất phương trình
Một xe chở tối đa 500 kg. Đã có 320 kg hàng; mỗi kiện thêm nặng 30 kg. Lập bất phương trình theo số kiện \(x\).

??? tip "Gợi ý"
    Tổng khối lượng không vượt quá 500.

??? example "Xem lời giải"
    \[
    320+30x\le500.
    \]

#### 08-ENT-02 · Giao tập nghiệm
Tìm các \(x\) thỏa đồng thời \(x>-2\) và \(x\le4\).

??? tip "Gợi ý"
    Lấy phần chung của hai tập nghiệm.

??? example "Xem lời giải"
    \[
    -2<x\le4.
    \]

### Challenge

#### 08-CH-01 · Tham số
Xét phương trình \((m-1)x=2\). Biện luận theo \(m\).

??? tip "Gợi ý"
    Tách trường hợp \(m-1=0\) và \(m-1\ne0\).

??? example "Xem lời giải"
    Nếu \(m\ne1\), phương trình có nghiệm duy nhất \(x=\frac2{m-1}\).  
    Nếu \(m=1\), phương trình trở thành \(0=2\), vô nghiệm.

---

## Theo dõi sau khi luyện
- [ ] Tôi đã làm một lượt Practice Engine không dùng hint.
- [ ] Tôi nhớ đổi chiều khi nhân/chia bất phương trình với số âm.
- [ ] Tôi luôn kiểm tra ĐKXĐ của phương trình chứa mẫu.
- [ ] Tôi đã tự giải ít nhất 3 bài Core trước khi mở lời giải.
- [ ] Khi tương đối chắc, tôi chuyển sang [✅ Core Readiness Check](tu-kiem-tra.md).

## Liên kết Roadmap

- **← Chuyên đề trước:** [07 – Phân thức đại số](../07-phan-thuc-dai-so/index.md)
- **← Học kiến thức:** [Chuyên đề 08 – Phương trình và bất phương trình](index.md)
- **→ Tự kiểm tra:** [Core Readiness Check](tu-kiem-tra.md)
- **→ Chuyên đề tiếp theo:** [09 – Hệ phương trình](../09-he-phuong-trinh/index.md)


## CĐ17 existing written-practice source

# Practice Room – Chuyên đề 17: Thales và tam giác đồng dạng

> **Mục tiêu:** luyện đúng **KNTT Core** trước; Core-Support / Entrance10 / Challenge không tính vào Core Readiness.
>
> **Geometry rule:** hình vẽ chỉ minh họa; kết luận phải dựa trên giả thiết hoặc định lí đã chứng minh.

## B. ✍️ Luyện tự luận & trình bày

### Core KNTT

#### 17-WR-01 · Thales thuận
DE∥BC, AD=4,AB=10,AC=15. Tính AE.

??? example "Xem lời giải"
    AE=6.

#### 17-WR-02 · Thales đảo
AD=3,AB=5,AE=6,AC=10. Chứng minh DE∥BC.

??? example "Xem lời giải"
    Hai tỉ số đều 3/5 nên theo Thales đảo DE∥BC.

#### 17-WR-03 · Đường trung bình
M,N là trung điểm AB,AC; BC=14. Tính MN.

??? example "Xem lời giải"
    MN=7 và MN∥BC.

#### 17-WR-04 · Phân giác
AD phân giác, AB=6,AC=9,BC=10. Tính BD,DC.

??? example "Xem lời giải"
    BD:DC=2:3, tổng 10 → BD=4,DC=6.

#### 17-WR-05 · Tương ứng
ΔABC∼ΔMNP. Viết các cặp cạnh và góc tương ứng.

??? example "Xem lời giải"
    A↔M,B↔N,C↔P; ghép cạnh/góc theo cùng thứ tự.

#### 17-WR-06 · g-g
DE∥BC. Chứng minh ΔADE∼ΔABC.

??? example "Xem lời giải"
    Hai cặp góc bằng do song song → g-g.

#### 17-WR-07 · c-g-c
Nêu điều kiện c-g-c đồng dạng.

??? example "Xem lời giải"
    Hai cặp cạnh tương ứng tỉ lệ và góc xen giữa bằng nhau.

#### 17-WR-08 · c-c-c
Các cạnh 3,4,5 và 6,8,10. Chứng minh đồng dạng.

??? example "Xem lời giải"
    3/6=4/8=5/10=1/2 → c-c-c.

#### 17-WR-09 · Tính độ dài
AB/DE=2/3, BC=8. Tính EF.

??? example "Xem lời giải"
    8/EF=2/3 → EF=12.

#### 17-WR-10 · Hình đồng dạng
Sơ đồ 1:200 có đoạn 3,5 cm. Tính độ dài thật.

??? example "Xem lời giải"
    3,5×200=700 cm=7 m.

### Core-Support / kết nối

Tỉ số chu vi, diện tích và hệ thức tích không gate Core.

### Entrance10 / Extension

#### 17-ENT-01 · Song song – đồng dạng
Luôn ghi đúng thứ tự tương ứng trước khi lập tỉ lệ.

### Challenge

#### 17-CH-01 · Nhiều tam giác
Ghi từng cặp tương ứng riêng để tránh ghép sai.

## Theo dõi sau khi luyện
- [ ] Tôi chỉ dùng dữ kiện đã cho hoặc đã chứng minh.
- [ ] Tôi ghi đúng định lí/dấu hiệu trước khi kết luận.
- [ ] Tôi đã chữa lại các câu sai mà không nhìn lời giải.

## Liên kết Roadmap

- **← Chuyên đề trước:** [16 – Tứ giác](../16-tu-giac/index.md)
- **← Học kiến thức:** [Chuyên đề 17 – Thales và tam giác đồng dạng](index.md)
- **→ Tự kiểm tra:** [Core Readiness Check](tu-kiem-tra.md)
- **→ Chuyên đề tiếp theo:** [18 – Hệ thức lượng trong tam giác vuông](../18-he-thuc-luong/index.md)


## CĐ19 existing written-practice source

# Practice Room – Chuyên đề 19: Đường tròn

> **Mục tiêu:** luyện **KNTT Core** trước; Core-Support / Entrance10 / Challenge không tính vào Core Readiness.
>
> **Geometry rule:** hình vẽ chỉ minh họa. Không suy thêm giả thiết từ hình; với công thức đo lường phải kiểm tra đúng đại lượng và đơn vị.

## B. ✍️ Luyện tự luận & trình bày

### Core KNTT

#### 19-WR-01 · Cung và dây
Trong cùng đường tròn, AB=CD. So sánh hai cung nhỏ AB và CD.

??? example "Xem lời giải"
    Hai cung nhỏ AB và CD bằng nhau vì trong cùng một đường tròn, hai dây bằng nhau chắn hai cung bằng nhau.

#### 19-WR-02 · Độ dài cung
Đường tròn R=9 cm. Tính độ dài cung 120°.

??? example "Xem lời giải"
    \(l=\frac{120}{360}\cdot2\pi\cdot9=6\pi\) cm.

#### 19-WR-03 · Quạt tròn
Tính diện tích quạt tròn R=6 cm, góc 60°.

??? example "Xem lời giải"
    \(S=\frac{60}{360}\pi\cdot6^2=6\pi\) cm².

#### 19-WR-04 · Vành khuyên
Tính diện tích vành khuyên R=8 cm,r=5 cm.

??? example "Xem lời giải"
    \(S=\pi(8^2-5^2)=39\pi\) cm².

#### 19-WR-05 · Đường thẳng – đường tròn
Nêu ba trường hợp theo d(O,d) so với R.

??? example "Xem lời giải"
    Nếu d<R: cắt hai điểm; d=R: tiếp tuyến; d>R: không có điểm chung.

#### 19-WR-06 · Hai đường tròn
Nêu điều kiện tiếp xúc ngoài và tiếp xúc trong theo R,r,d.

??? example "Xem lời giải"
    Tiếp xúc ngoài: \(d=R+r\). Tiếp xúc trong: \(d=|R-r|\).

#### 19-WR-07 · Góc nội tiếp
Góc nội tiếp chắn cung 110°. Tính góc.

??? example "Xem lời giải"
    \(55^\circ\).

#### 19-WR-08 · Tứ giác nội tiếp
Tứ giác ABCD có ∠A+∠C=180°. Nêu kết luận và dấu hiệu.

??? example "Xem lời giải"
    ABCD nội tiếp được một đường tròn vì hai góc đối bù nhau.

#### 19-WR-09 · Ngoại tiếp – nội tiếp tam giác
Nêu cách xác định tâm ngoại tiếp O và tâm nội tiếp I của tam giác.

??? example "Xem lời giải"
    O là giao ba đường trung trực; I là giao ba đường phân giác.

#### 19-WR-10 · Đa giác đều
Lục giác đều nội tiếp đường tròn bán kính R. Nêu độ dài cạnh lục giác.

??? example "Xem lời giải"
    Cạnh lục giác đều nội tiếp bằng bán kính: \(a=R\).

### Core-Support / kết nối

Góc ở tâm, góc chắn nửa đường tròn và tiếp tuyến–bán kính được dùng như kiến thức hỗ trợ.

### Entrance10 / Extension

#### 19-ENT-01 · Chuỗi nội tiếp – đồng dạng
Trong bài thi vào 10, sau khi chứng minh nội tiếp thường khai thác các góc bằng nhau để tạo tam giác đồng dạng.

### Challenge

#### 19-CH-01 · Hệ thức tích
Hai dây cắt nhau và tiếp tuyến–cát tuyến là mở rộng mạnh, nhưng không gate KNTT Core.

## Theo dõi sau khi luyện
- [ ] Tôi không suy dữ kiện chỉ vì hình trông có vẻ đúng.
- [ ] Tôi dùng đúng định lí/công thức và ghi đúng đơn vị.
- [ ] Tôi đã chữa lại các câu sai mà không nhìn lời giải.

## Liên kết Roadmap

- **← Chuyên đề trước:** [18 – Hệ thức lượng trong tam giác vuông](../18-he-thuc-luong/index.md)
- **← Học kiến thức:** [Chuyên đề 19 – Đường tròn](index.md)
- **→ Tự kiểm tra:** [Core Readiness Check](tu-kiem-tra.md)
- **→ Chuyên đề tiếp theo:** [20 – Hình học tổng hợp](../20-hinh-hoc-tong-hop/index.md)


## Exact candidate JSON

```json
{
  "schema_version": "1.0.0",
  "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B1-R1-20261001",
  "snapshot_date": "2026-10-01",
  "status": "REVIEW_ONLY_PENDING_NOTEBOOKLM_R1",
  "production_catalog_unchanged": true,
  "auto_readiness_credit": false,
  "self_marking_only": true,
  "scope": {
    "topics": [
      "CT08",
      "CT17",
      "CT19"
    ],
    "exercise_count": 6,
    "rule": "2 candidate items per topic: one CORE_BASE and one CORE_APPLY"
  },
  "exercises": [
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
      }
    }
  ]
}

```
