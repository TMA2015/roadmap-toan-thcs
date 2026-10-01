# SOURCE PACKET — Written Exercise Library Expansion B4 R1

Packet ID: `MATH-WRITTEN-LIBRARY-EXPANSION-B4-R1-20261001`

## Source lock

Review **only** the material in this packet.

- Base production checkpoint: `28b1561a49ab4d935ba6167aa9d7bf1350fc0788`
- Branch: `review/written-library-expansion-b4-r1-20261001`
- Candidate JSON: `review-packets/written-exercise-library/26_WRITTEN_EXPANSION_B4_CANDIDATE.json`
  - blob: `1184135a82b038cd1d03623107ed8cccc33837da`
- Design contract blob: `ab4ab40044baa0ddc7b2da344f2205fcdb7032ee`
- Production catalog blob: `60f3c2cd402e8a573299068c710473e2d42ec423`
- CĐ13 Learning Workspace blob: `d5aa55f158cbff42eae388e76f485d072878095a`
- CĐ15 Learning Workspace blob: `8d434c8fc3ee3b021f97c3e2fb4b88ca9365a3ba`
- CĐ23 Learning Workspace blob: `7b2659c78e298017d16ec52f2a45cd57d3d88191`
- CĐ13 written-practice source blob: `88b63b418032be845c535598ece747fbb82cc97f`
- CĐ15 written-practice source blob: `2a80519449440c60b1f0322c2edc79efa9a3c2a2`
- CĐ23 practice source blob: `dff2ec1ef5385b1bcfca83d9ce070544c2ccde6b`

## Scope

Exactly 6 **review-only** candidate exercises:

1. `WX13-LIN-001`
2. `WX13-LIN-002`
3. `WX15-CEN-001`
4. `WX15-CEN-002`
5. `WX23-PRO-001`
6. `WX23-PRO-002`

Two candidates per topic: one `CORE_BASE` and one `CORE_APPLY`.

Selection rationale is pedagogical, not an exam-frequency claim:
- CT13 observes theorem direction, GT/KL and proof with explicit grounds;
- CT15 observes special-line/center identification and distinguishes distances to sides from distances to vertices;
- CT23 observes favorable-outcome reasoning, equal-likelihood conditions and theoretical-vs-experimental probability.

**Important:** production catalog is unchanged. This packet does not authorize publication, deployment, Readiness/mastery credit, canonical-evidence expansion, or G3.

## Review boundary

For EACH item review:
- mathematical correctness;
- hypotheses/domain/units;
- exact skill IDs and KNTT-Core boundary against the locked Learning Workspace;
- step-by-step solution logic and final conclusion;
- rubric alignment and totals;
- common mistakes/remediation;
- duplicate/near-duplicate risk against the locked production catalog and topic practice source;
- CORE_BASE vs CORE_APPLY classification;
- paper-first self-study suitability.

Special checks:
- CT13: distinguish properties of known parallel lines from converse criteria used to prove parallelism; no fact may be inferred from a diagram.
- CT15: distinguish median/perpendicular bisector and incenter/circumcenter; verify the centroid ratio is read from the vertex; distance-to-side vs distance-to-vertex language must be exact.
- CT23: stay inside KNTT-Core. Do NOT promote complement events, tree diagrams, two-dice/multistep probability, or no-replacement problems. Verify equal-likelihood is stated before using the classical ratio; theoretical and experimental probabilities need not be equal in a finite sample.

## Architecture checks

ARCH_1 — exactly 6 candidates, two each for CT13/CT15/CT23.  
ARCH_2 — each topic has one CORE_BASE and one CORE_APPLY.  
ARCH_3 — all six remain review-only and do not alter the production catalog.  
ARCH_4 — self-marking only; no automatic Readiness/mastery credit.  
ARCH_5 — stable unique exercise IDs; no collision with the current production catalog.  
ARCH_6 — all skill IDs/layers are supported by the locked Learning Workspaces.  
ARCH_7 — every item contains problem, stepwise solution, rubric, common mistakes, remediation, and source refs.  
ARCH_8 — no unsupported exam-frequency claim is used to justify inclusion.  
ARCH_9 — CT13/CT15 geometry reasoning uses explicit hypotheses/theorems and does not infer facts from appearance.  
ARCH_10 — CT23 remains Core: equal-likelihood checks and experimental/theoretical interpretation are correct; no extension-only probability machinery is required.

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
      "CT10",
      "CT11",
      "CT12",
      "CT14",
      "CT16",
      "CT17",
      "CT18",
      "CT19",
      "CT24"
    ],
    "exercise_count": 24,
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
      }
    ],
    "rule": "Append-only publication of academically reviewed written exercises; self-marking only."
  }
}

```

## Locked CĐ13 Learning Workspace

```json
{
  "schema": "roadmap-topic-learning-workspace-v1",
  "topic": "13-goc-va-duong-thang",
  "title": "Góc và quan hệ giữa các đường thẳng",
  "core_progress_policy": {
    "layer": "KNTT-Core",
    "rule": "Only mapped Core cards contribute to readiness. Core-Support and Entrance10/Challenge never gate Core completion."
  },
  "cards": [
    {
      "id": "geo13-core-1",
      "order": 1,
      "title": "Điểm, tia, đoạn thẳng",
      "kntt_lessons": [
        "Lớp 6 · Bài 32–35"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "diem-thuoc-duong",
        "diem-nam-giua",
        "tia",
        "tia-doi",
        "doan-thang-do-dai",
        "trung-diem"
      ],
      "prerequisites": [],
      "micro_practice": [
        "GEO13MICRO_001",
        "GEO13MICRO_002",
        "GEO13MICRO_003",
        "GEO13MICRO_016",
        "GEO13MICRO_017",
        "GEO13MICRO_018"
      ],
      "teaching_copy": {
        "key_idea": "Qua hai điểm phân biệt có đúng một đường thẳng. Tia có một gốc và kéo dài vô hạn về một phía; hai tia đối nhau phải cùng gốc, cùng đường thẳng và ngược hướng. Đoạn \\(AB\\) có hai đầu mút. Nếu \\(M\\) nằm giữa A và B thì \\(AM+MB=AB\\); M là trung điểm cần thêm \\(AM=MB\\).",
        "worked_example": {
          "problem": "Ba điểm A, O, B thẳng hàng theo thứ tự A–O–B; \\(AO=3\\text{ cm}\\), \\(OB=3\\text{ cm}\\). Nêu quan hệ hai tia OA, OB và kết luận vị trí của O đối với AB.",
          "solution": "Bước 1: OA và OB cùng gốc O, nằm trên đường thẳng AB và đi về hai phía ngược nhau, nên là hai tia đối nhau.\nBước 2: \\(AO+OB=6\\text{ cm}=AB\\) vì O nằm giữa A và B.\nBước 3: O vừa nằm giữa A, B vừa có \\(OA=OB\\), nên O là trung điểm AB."
        },
        "misconception": "Hai tia chỉ cùng gốc chưa chắc đối nhau; MA=MB một mình không chứng minh M là trung điểm nếu chưa biết M thuộc đoạn AB.",
        "summary": "Tia đối nhau: cùng gốc–cùng đường–ngược hướng; trung điểm: nằm giữa và hai nửa bằng nhau.",
        "source_reference": "docs/kien-thuc/13-goc-va-duong-thang/index.md",
        "source_sections": [
          "3.1"
        ],
        "source_question_ids": [
          "GEO13MICRO_001",
          "GEO13MICRO_002",
          "GEO13MICRO_003"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE13-15-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo13-core-2",
      "order": 2,
      "title": "Góc và các quan hệ góc",
      "kntt_lessons": [
        "Lớp 6 · Bài 36–37",
        "Lớp 7 · Bài 8"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "khai-niem-goc",
        "do-goc",
        "phan-loai-goc",
        "goc-phu-bu",
        "goc-doi-dinh",
        "tia-phan-giac",
        "nhan-dang-goc-dac-biet"
      ],
      "prerequisites": [
        "tia"
      ],
      "micro_practice": [
        "GEO13MICRO_004",
        "GEO13MICRO_005",
        "GEO13MICRO_006",
        "GEO13MICRO_019",
        "GEO13MICRO_020",
        "GEO13MICRO_021",
        "GEO13MICRO_022"
      ],
      "teaching_copy": {
        "key_idea": "Góc có đỉnh và hai tia cạnh, số đo theo độ. Nhọn \\(0^\\circ<\\alpha<90^\\circ\\), vuông \\(90^\\circ\\), tù \\(90^\\circ<\\alpha<180^\\circ\\), bẹt \\(180^\\circ\\). Phụ nhau tổng \\(90^\\circ\\), bù nhau tổng \\(180^\\circ\\); kề bù còn phải kề nhau. Tia phân giác phải **nằm trong góc** và chia thành hai góc bằng nhau. Góc đối đỉnh chỉ hình thành khi hai đường thẳng cắt nhau, các cạnh từng cặp đối nhau.",
        "worked_example": {
          "problem": "Hai tia Ox và Oy đối nhau, tia Oz nằm trong góc bẹt xOy và \\(\\angle xOz=65^\\circ\\). Tính \\(\\angle zOy\\), phân loại góc xOz và nêu quan hệ hai góc xOz, zOy.",
          "solution": "Bước 1: \\(\\angle xOy=180^\\circ\\) vì Ox, Oy là hai tia đối nhau.\nBước 2: \\(65^\\circ+\\angle zOy=180^\\circ\\), suy ra \\(\\angle zOy=115^\\circ\\).\nBước 3: xOz là góc nhọn; zOy là góc tù. Hai góc chung Oz, không chồng phần trong và có tổng \\(180^\\circ\\), nên kề bù."
        },
        "misconception": "Chỉ nhìn hai góc có tổng 180° rồi khẳng định kề bù; hoặc kết luận phân giác từ hai số đo bằng nhau mà chưa biết tia nằm bên trong.",
        "summary": "Tên quan hệ góc cần cả vị trí tia và số đo, không chỉ dựa vào tổng số độ.",
        "source_reference": "docs/kien-thuc/13-goc-va-duong-thang/index.md",
        "source_sections": [
          "3.2",
          "3.3",
          "3.4",
          "3.5",
          "3.6"
        ],
        "source_question_ids": [
          "GEO13MICRO_004",
          "GEO13MICRO_005",
          "GEO13MICRO_006"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE13-15-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo13-core-3",
      "order": 3,
      "title": "Góc tạo bởi một đường cắt",
      "kntt_lessons": [
        "Lớp 7 · Bài 9–10"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "goc-so-le-trong",
        "goc-dong-vi",
        "goc-trong-cung-phia"
      ],
      "prerequisites": [
        "nhan-dang-goc-dac-biet"
      ],
      "micro_practice": [
        "GEO13MICRO_007",
        "GEO13MICRO_008",
        "GEO13MICRO_009"
      ],
      "teaching_copy": {
        "key_idea": "Góc so le trong nằm giữa hai đường và khác phía đường cắt; đồng vị cùng vị trí tương ứng; trong cùng phía nằm giữa hai đường và cùng phía đường cắt. Đây là **tên vị trí**, chưa tự suy ra bằng nhau khi chưa có giả thiết hai đường song song. Khi đã biết song song: so le trong/đồng vị bằng nhau, trong cùng phía bù nhau.",
        "worked_example": {
          "problem": "Đường cắt c gặp hai đường thẳng phân biệt a, b. Một góc trong cùng phía tại giao điểm với a bằng \\(112^\\circ\\). Nếu \\(a\\parallel b\\), góc trong cùng phía tương ứng tại giao điểm với b bằng bao nhiêu?",
          "solution": "Bước 1: Xác định giả thiết \\(a\\parallel b\\) và hai góc **trong cùng phía** do c cắt.\nBước 2: Tính chất song song cho tổng hai góc là \\(180^\\circ\\).\nBước 3: Góc cần tìm \\(180^\\circ-112^\\circ=68^\\circ\\)."
        },
        "misconception": "Cứ thấy hai góc cùng tên thì cho bằng nhau; hai góc trong cùng phía của hai đường song song là hai góc bù nhau.",
        "summary": "Nhận dạng vị trí trước; chỉ dùng tính chất góc sau khi có căn cứ song song.",
        "source_reference": "docs/kien-thuc/13-goc-va-duong-thang/index.md",
        "source_sections": [
          "3.7",
          "3.8",
          "3.9"
        ],
        "source_question_ids": [
          "GEO13MICRO_007",
          "GEO13MICRO_008",
          "GEO13MICRO_009"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE13-15-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo13-core-4",
      "order": 4,
      "title": "Song song và tiên đề Euclid",
      "kntt_lessons": [
        "Lớp 7 · Bài 9–10"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "tinh-chat-song-song",
        "dau-hieu-song-song",
        "tien-de-euclid"
      ],
      "prerequisites": [
        "goc-so-le-trong",
        "goc-dong-vi"
      ],
      "micro_practice": [
        "GEO13MICRO_010",
        "GEO13MICRO_011",
        "GEO13MICRO_012"
      ],
      "teaching_copy": {
        "key_idea": "Phân biệt chiều định lí: biết \\(a\\parallel b\\) thì suy ra quan hệ góc (tính chất); biết một cặp góc so le trong hoặc đồng vị bằng nhau, hay hai góc trong cùng phía bù nhau thì suy ra \\(a\\parallel b\\) (dấu hiệu). Hai đường phân biệt cùng vuông góc với một đường thứ ba thì song song. Qua điểm ngoài một đường thẳng chỉ có một đường song song với đường ấy.",
        "worked_example": {
          "problem": "Hai đường thẳng phân biệt a, b cùng vuông góc với c. Một đường d đi qua M ngoài a và song song a. Chứng minh b song song a và nêu tại sao chỉ có một đường thẳng đi qua M song song a.",
          "solution": "Bước 1: Theo giả thiết, \\(a\\perp c,\\ b\\perp c\\) và a, b phân biệt.\nBước 2: Theo tính chất hai đường thẳng phân biệt cùng vuông góc với một đường thứ ba trong mặt phẳng, \\(a\\parallel b\\).\nBước 3: Theo tiên đề Euclid, qua M ở ngoài a có đúng một đường thẳng song song a; đó là d."
        },
        "misconception": "Sử dụng tính chất song song khi đang phải chứng minh song song, hoặc quên điều kiện hai đường phân biệt / điểm nằm ngoài đường.",
        "summary": "Định lí đi từ giả thiết sang kết luận; xác định chính xác chiều suy luận.",
        "source_reference": "docs/kien-thuc/13-goc-va-duong-thang/index.md",
        "source_sections": [
          "3.8",
          "3.9",
          "3.10",
          "3.11"
        ],
        "source_question_ids": [
          "GEO13MICRO_010",
          "GEO13MICRO_011",
          "GEO13MICRO_012"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE13-15-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo13-core-5",
      "order": 5,
      "title": "Định lí, giả thiết và kết luận",
      "kntt_lessons": [
        "Lớp 7 · Bài 11"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "gia-thiet-ket-luan",
        "lap-luan-chung-minh-ngan"
      ],
      "prerequisites": [
        "tinh-chat-song-song",
        "dau-hieu-song-song"
      ],
      "micro_practice": [
        "GEO13MICRO_013",
        "GEO13MICRO_014",
        "GEO13MICRO_015"
      ],
      "teaching_copy": {
        "key_idea": "Trong một định lí “Nếu P thì Q”, giả thiết là P, kết luận là Q. Một bước chứng minh cần nêu mệnh đề và căn cứ: giả thiết, định nghĩa, định lí đã học hoặc kết quả ở bước trước. Hình vẽ chỉ giúp định hướng, không tự tạo ra dữ kiện.",
        "worked_example": {
          "problem": "Cho \\(a\\parallel b\\) và \\(c\\perp a\\) (cùng trong mặt phẳng). Hãy trình bày ngắn gọn vì sao \\(c\\perp b\\), phân biệt giả thiết với kết luận.",
          "solution": "Bước 1: Giả thiết (GT): \\(a\\parallel b,\\ c\\perp a\\).\nBước 2: Dùng tính chất đường thẳng vuông góc với một trong hai đường song song: \\(c\\perp b\\).\nBước 3: Kết luận (KL): \\(c\\perp b\\). Căn cứ là tính chất đã học, không phải do hình nhìn có vẻ vuông góc."
        },
        "misconception": "Viết kết luận vào cột giả thiết, hoặc nói chỉ vì hình vẽ có góc vuông mà chưa viện dẫn quan hệ đã cho.",
        "summary": "Mỗi bước = mệnh đề + căn cứ; hình vẽ không thay lời chứng minh.",
        "source_reference": "docs/kien-thuc/13-goc-va-duong-thang/index.md",
        "source_sections": [
          "3.12"
        ],
        "source_question_ids": [
          "GEO13MICRO_013",
          "GEO13MICRO_014",
          "GEO13MICRO_015"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE13-15-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    }
  ],
  "extensions": [
    {
      "id": "geo13-support-1",
      "layer": "Core-Support",
      "title": "Vuông góc – song song như công cụ hỗ trợ",
      "gates_core": false
    },
    {
      "id": "geo13-ent10-1",
      "layer": "Entrance10",
      "title": "Chuỗi suy luận góc nhiều bước trong hình tổng hợp",
      "gates_core": false
    },
    {
      "id": "geo13-challenge-1",
      "layer": "Specialized-Challenge",
      "title": "Bài tham số và cấu hình suy luận phức hợp",
      "gates_core": false
    }
  ],
  "micro_practice_bank": "assets/data/practice/13-goc-va-duong-thang-micro-v1.json",
  "geometry_contract": "assets/data/curriculum/geometry-architecture-v1.json",
  "observed_signal_policy": {
    "rule": "Signals are observations only; they never create causal remediation without sufficient learner evidence and a reviewed rule."
  },
  "qa_notes": [
    "All 21 mapped Core skill IDs are represented across cards.",
    "Text-first micro items avoid scale-dependent visual inference.",
    "duong-vuong-goc and vuong-goc-song-song remain Core-Support in the current coverage matrix.",
    "Exactly one primary assessed skill per new question; original three Base–Trap–Apply records and teaching source IDs remain unchanged. Additional formative coverage does not certify mastery."
  ]
}

```

## Locked CĐ15 Learning Workspace

```json
{
  "schema": "roadmap-topic-learning-workspace-v1",
  "topic": "15-duong-dong-quy",
  "title": "Các đường đồng quy trong tam giác",
  "core_progress_policy": {
    "layer": "KNTT-Core",
    "rule": "Only mapped Core cards contribute to readiness; support properties do not gate Core completion."
  },
  "cards": [
    {
      "id": "geo15-core-1",
      "order": 1,
      "title": "Trung tuyến và trọng tâm",
      "kntt_lessons": [
        "Lớp 7"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "nhan-biet-trung-tuyen",
        "trong-tam",
        "ti-so-trong-tam"
      ],
      "prerequisites": [
        "trung-diem"
      ],
      "micro_practice": [
        "GEO15MICRO_001",
        "GEO15MICRO_002",
        "GEO15MICRO_003"
      ],
      "teaching_copy": {
        "key_idea": "Trung tuyến nối một đỉnh với trung điểm cạnh đối diện. Ba trung tuyến đồng quy ở trọng tâm G; trên trung tuyến AM từ A đến BC, G ở giữa A và M và \\(AG=2GM=\\frac23AM\\). Tỉ số đo từ đỉnh đến G là phần **dài hơn**.",
        "worked_example": {
          "problem": "Tam giác ABC có M là trung điểm BC, G là trọng tâm và \\(AM=18\\) cm. Tính AG, GM.",
          "solution": "Bước 1: AM là trung tuyến của ABC.\nBước 2: \\(AG=\\frac23\\cdot18=12\\) cm.\nBước 3: \\(GM=\\frac13\\cdot18=6\\) cm; kiểm tra \\(AG=2GM\\) và \\(AG+GM=AM\\)."
        },
        "misconception": "Viết ngược AG:GM thành 1:2 hoặc áp dụng tỉ lệ trên đường không phải trung tuyến.",
        "summary": "Trên trung tuyến: đỉnh → G là 2 phần, G → trung điểm là 1 phần.",
        "source_reference": "docs/kien-thuc/15-duong-dong-quy/index.md",
        "source_sections": [
          "3.1"
        ],
        "source_question_ids": [
          "GEO15MICRO_001",
          "GEO15MICRO_002",
          "GEO15MICRO_003"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE13-15-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo15-core-2",
      "order": 2,
      "title": "Đường cao và trực tâm",
      "kntt_lessons": [
        "Lớp 7"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "nhan-biet-duong-cao",
        "truc-tam"
      ],
      "prerequisites": [
        "duong-vuong-goc"
      ],
      "micro_practice": [
        "GEO15MICRO_004",
        "GEO15MICRO_005",
        "GEO15MICRO_006"
      ],
      "teaching_copy": {
        "key_idea": "Đường cao từ A đi qua A và vuông góc với **đường thẳng chứa BC**, kể cả khi chân đường cao nằm ngoài đoạn BC. Ba đường cao đồng quy ở trực tâm H: tam giác nhọn H trong; vuông H là đỉnh góc vuông; tù H ở ngoài.",
        "worked_example": {
          "problem": "Tam giác ABC vuông tại B. Trực tâm H ở đâu? Vì sao?",
          "solution": "Bước 1: \\(AB\\perp BC\\), nên đường thẳng AB là đường cao từ A và BC là đường cao từ C.\nBước 2: Hai đường cao cắt nhau tại B.\nBước 3: Trực tâm \\(H=B\\)."
        },
        "misconception": "Cho rằng đường cao luôn cắt đoạn đối diện hoặc trực tâm luôn nằm trong tam giác.",
        "summary": "Đường cao vuông góc đường chứa cạnh; ở tam giác vuông, trực tâm tại đỉnh góc vuông.",
        "source_reference": "docs/kien-thuc/15-duong-dong-quy/index.md",
        "source_sections": [
          "3.2"
        ],
        "source_question_ids": [
          "GEO15MICRO_004",
          "GEO15MICRO_005",
          "GEO15MICRO_006"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE13-15-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo15-core-3",
      "order": 3,
      "title": "Phân giác và tâm nội tiếp",
      "kntt_lessons": [
        "Lớp 7"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "nhan-biet-phan-giac",
        "tam-noi-tiep"
      ],
      "prerequisites": [
        "tia-phan-giac"
      ],
      "micro_practice": [
        "GEO15MICRO_007",
        "GEO15MICRO_008",
        "GEO15MICRO_009"
      ],
      "teaching_copy": {
        "key_idea": "Ba phân giác **trong** đồng quy ở tâm nội tiếp I, một điểm trong tam giác cách đều ba **đường thẳng chứa cạnh**. Với điểm nằm trong một góc, cách đều hai đường chứa cạnh thì điểm nằm trên tia phân giác. Không nhầm khoảng cách tới cạnh với khoảng cách tới đỉnh.",
        "worked_example": {
          "problem": "I nằm trong tam giác ABC và là giao điểm hai tia phân giác trong của góc A, B. So sánh khoảng cách từ I tới ba đường thẳng AB, BC, CA.",
          "solution": "Bước 1: I trên phân giác trong A nên \\(d(I,AB)=d(I,AC)\\).\nBước 2: I trên phân giác trong B nên \\(d(I,BA)=d(I,BC)\\).\nBước 3: Ba khoảng cách tới các đường chứa cạnh bằng nhau; I là tâm nội tiếp, không phải điểm cách đều ba đỉnh."
        },
        "misconception": "Dùng IA=IB=IC để nhận dạng tâm nội tiếp; đó là tính chất của tâm ngoại tiếp.",
        "summary": "Tâm nội tiếp cách đều các cạnh (khoảng cách vuông góc), không phải các đỉnh.",
        "source_reference": "docs/kien-thuc/15-duong-dong-quy/index.md",
        "source_sections": [
          "3.3",
          "3.5"
        ],
        "source_question_ids": [
          "GEO15MICRO_007",
          "GEO15MICRO_008",
          "GEO15MICRO_009"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE13-15-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo15-core-4",
      "order": 4,
      "title": "Trung trực và tâm ngoại tiếp",
      "kntt_lessons": [
        "Lớp 7"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "nhan-biet-trung-truc",
        "tam-ngoai-tiep"
      ],
      "prerequisites": [
        "tinh-chat-duong-trung-truc"
      ],
      "micro_practice": [
        "GEO15MICRO_010",
        "GEO15MICRO_011",
        "GEO15MICRO_012"
      ],
      "teaching_copy": {
        "key_idea": "Ba đường trung trực các cạnh đồng quy ở tâm ngoại tiếp O; \\(OA=OB=OC\\). Nếu tam giác vuông, O là trung điểm **cạnh huyền**. Nếu tam giác tù, O có thể nằm ngoài tam giác; không được suy ra O luôn nằm bên trong.",
        "worked_example": {
          "problem": "Tam giác ABC vuông tại A, cạnh huyền BC dài 10 cm. Xác định tâm ngoại tiếp O và tính OA, OB, OC.",
          "solution": "Bước 1: Với tam giác vuông tại A, tâm ngoại tiếp O là trung điểm BC.\nBước 2: \\(OB=OC=\\frac{BC}{2}=5\\) cm.\nBước 3: Điểm O cũng cách đều đỉnh A, nên \\(OA=OB=OC=5\\) cm."
        },
        "misconception": "Chọn giao phân giác thay vì trung trực, hoặc đặt tâm ngoại tiếp tại đỉnh góc vuông.",
        "summary": "Ngoại tiếp: cách đều ba đỉnh; tam giác vuông: tâm là trung điểm cạnh huyền.",
        "source_reference": "docs/kien-thuc/15-duong-dong-quy/index.md",
        "source_sections": [
          "3.4",
          "3.5"
        ],
        "source_question_ids": [
          "GEO15MICRO_010",
          "GEO15MICRO_011",
          "GEO15MICRO_012"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE13-15-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    },
    {
      "id": "geo15-core-5",
      "order": 5,
      "title": "Bốn tâm và tính đồng quy",
      "kntt_lessons": [
        "Lớp 7"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "phan-biet-bon-tam",
        "dong-quy-bon-duong-dac-biet"
      ],
      "prerequisites": [
        "trong-tam",
        "truc-tam",
        "tam-noi-tiep",
        "tam-ngoai-tiep"
      ],
      "micro_practice": [
        "GEO15MICRO_013",
        "GEO15MICRO_014",
        "GEO15MICRO_015"
      ],
      "teaching_copy": {
        "key_idea": "Bốn họ đường đặc biệt đồng quy **riêng**: trung tuyến→G, đường cao→H, phân giác trong→I, trung trực→O. Nói chung bốn tâm khác nhau; chỉ ở tam giác đặc biệt như tam giác đều có thể trùng nhau. Không kết luận mọi đường thuộc cả bốn họ đồng quy tại một điểm.",
        "worked_example": {
          "problem": "Tam giác ABC đều. Những tâm nào trong G (trọng tâm), H (trực tâm), I (nội tiếp), O (ngoại tiếp) trùng nhau?",
          "solution": "Bước 1: Trong tam giác đều, trung tuyến từ mỗi đỉnh cũng là đường cao, phân giác và trung trực cạnh đối diện.\nBước 2: Ba đường chung này đồng quy tại một điểm.\nBước 3: Vì vậy \\(G=H=I=O\\) **trong tam giác đều**; đây không phải kết luận cho mọi tam giác."
        },
        "misconception": "Suy rộng tính chất đặc biệt của tam giác đều cho tam giác tùy ý.",
        "summary": "Bốn họ đường, bốn tâm theo định nghĩa; có thể trùng nhau trong cấu hình đặc biệt.",
        "source_reference": "docs/kien-thuc/15-duong-dong-quy/index.md",
        "source_sections": [
          "3.5",
          "3.6A"
        ],
        "source_question_ids": [
          "GEO15MICRO_013",
          "GEO15MICRO_014",
          "GEO15MICRO_015"
        ],
        "review_status": "SELF_AUDITED",
        "review_method": "SOURCE_LOCKED_BOUNDED_SELF_AUDIT",
        "academic_review_ref": "content-staging/reviews/MATH-CORE13-15-GEOMETRY-SELF-AUDIT-20260929.md"
      }
    }
  ],
  "extensions": [
    {
      "id": "geo15-support-1",
      "layer": "Core-Support",
      "title": "Vị trí trực tâm/tâm ngoại tiếp và tính chất cách đều",
      "gates_core": false
    },
    {
      "id": "geo15-ent10-1",
      "layer": "Entrance10",
      "title": "Khai thác các tâm trong hình học tổng hợp",
      "gates_core": false
    }
  ],
  "micro_practice_bank": "assets/data/practice/15-duong-dong-quy-micro-v1.json",
  "geometry_contract": "assets/data/curriculum/geometry-architecture-v1.json"
}

```

## Locked CĐ23 Learning Workspace

```json
{
  "schema": "roadmap-topic-learning-workspace-v1",
  "topic": "23-xac-suat",
  "title": "Xác suất",
  "core_progress_policy": {
    "layer": "KNTT-Core",
    "rule": "Only five grade-mapped Core cards; Core-Support and Entrance10 never gate Core."
  },
  "cards": [
    {
      "id": "prob23-core-1",
      "order": 1,
      "title": "Kết quả có thể và xác suất thực nghiệm",
      "kntt_lessons": [
        "Lớp 6: Bài 42–43"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "xac-suat-thuc-nghiem"
      ],
      "prerequisites": [],
      "micro_practice": [
        "PRO23MICRO_001",
        "PRO23MICRO_002",
        "PRO23MICRO_003"
      ],
      "teaching_copy": {
        "key_idea": "Xác suất thực nghiệm (tần số tương đối) của một sự kiện là tỉ số giữa số lần sự kiện đó xảy ra và tổng số lần thực hiện phép thử.",
        "worked_example": {
          "problem": "Tung một đồng xu 20 lần, mặt ngửa xuất hiện 12 lần. Xác suất thực nghiệm của mặt ngửa bằng bao nhiêu?",
          "solution": "Có 12 lần ngửa trên 20 lần thử. Xác suất thực nghiệm là 12/20 = 3/5."
        },
        "misconception": "Học sinh thường lấy nhầm số lần sự kiện 'không xảy ra' để chia, hoặc chia cho số lần của kết quả khác thay vì tổng số lần thử.",
        "summary": "Để tính xác suất thực nghiệm, ta đếm số lần kết quả thuận lợi xuất hiện trên thực tế rồi chia cho tổng số lần đã thực hiện thí nghiệm."
      }
    },
    {
      "id": "prob23-core-2",
      "order": 2,
      "title": "Biến cố và các loại biến cố",
      "kntt_lessons": [
        "Lớp 7: Bài 29"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "bien-co",
        "bien-co-chac-chan-khong-the"
      ],
      "prerequisites": [],
      "micro_practice": [
        "PRO23MICRO_004",
        "PRO23MICRO_005",
        "PRO23MICRO_006"
      ],
      "teaching_copy": {
        "key_idea": "Biến cố là hiện tượng có thể hoặc không thể xảy ra dựa trên một phép thử. Biến cố chắc chắn luôn xảy ra, còn biến cố không thể không bao giờ xảy ra.",
        "worked_example": {
          "problem": "Gieo xúc xắc sáu mặt. Phân loại các biến cố: số chấm lớn hơn 0; số chấm bằng 7; số chấm lẻ.",
          "solution": "Lớn hơn 0 là chắc chắn; bằng 7 là không thể; số chấm lẻ là ngẫu nhiên."
        },
        "misconception": "Đôi khi học sinh nhầm lẫn giữa một biến cố ngẫu nhiên có xác suất thấp với biến cố không thể.",
        "summary": "Liệt kê chính xác không gian các kết quả có thể của phép thử sẽ giúp ta phân loại đúng tính chất của biến cố."
      }
    },
    {
      "id": "prob23-core-3",
      "order": 3,
      "title": "Xác suất của biến cố đơn giản",
      "kntt_lessons": [
        "Lớp 7: Bài 30"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "xac-suat-co-dien",
        "kiem-tra-xac-suat"
      ],
      "prerequisites": [],
      "micro_practice": [
        "PRO23MICRO_007",
        "PRO23MICRO_008",
        "PRO23MICRO_009",
        "PRO23MICRO_016"
      ],
      "teaching_copy": {
        "key_idea": "Trong một phép thử có các kết quả đồng khả năng, xác suất của một biến cố bằng số kết quả thuận lợi cho biến cố đó chia cho tổng số kết quả có thể xảy ra.",
        "worked_example": {
          "problem": "Có 10 thẻ giống nhau, đánh số từ 1 đến 10, trộn đều rồi rút một thẻ. Xác suất rút số chia hết cho 5 bằng bao nhiêu?",
          "solution": "Hai thẻ ghi 5 và 10 thuận lợi trong 10 thẻ đồng khả năng. Xác suất bằng 2/10 = 1/5."
        },
        "misconception": "Học sinh áp dụng công thức tỉ số ngay cả khi các kết quả không đồng khả năng (ví dụ: vòng quay có các ô to nhỏ khác nhau).",
        "summary": "Xác định rõ điều kiện đồng khả năng, đếm chính xác số kết quả thuận lợi, rồi lập tỉ số để tìm xác suất cổ điển."
      }
    },
    {
      "id": "prob23-core-4",
      "order": 4,
      "title": "Phép thử và kết quả thuận lợi",
      "kntt_lessons": [
        "Lớp 8: Bài 30"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "phep-thu-ngau-nhien",
        "bien-co"
      ],
      "prerequisites": [],
      "micro_practice": [
        "PRO23MICRO_010",
        "PRO23MICRO_011",
        "PRO23MICRO_012"
      ],
      "teaching_copy": {
        "key_idea": "Phép thử ngẫu nhiên là hành động mà ta không biết trước chắc chắn kết quả. Kết quả thuận lợi là kết quả cụ thể khiến cho một biến cố xảy ra.",
        "worked_example": {
          "problem": "Một vòng quay có năm ô ghi 1, 2, 3, 4, 5. Biến cố A là dừng ở ô ghi số chẵn. Các kết quả thuận lợi của A là gì?",
          "solution": "Các số chẵn trên vòng quay là 2 và 4, nên kết quả thuận lợi là {2; 4}."
        },
        "misconception": "Liệt kê thừa kết quả thuận lợi do hiểu sai định nghĩa toán học (ví dụ: nhầm số 1 là số nguyên tố).",
        "summary": "Cần đọc kỹ cả yêu cầu của phép thử ngẫu nhiên và điều kiện mô tả biến cố để tìm chính xác tập kết quả thuận lợi."
      }
    },
    {
      "id": "prob23-core-5",
      "order": 5,
      "title": "Xác suất theo tỉ số và đối chiếu thực nghiệm",
      "kntt_lessons": [
        "Lớp 8: Bài 31–32"
      ],
      "layer": "KNTT-Core",
      "skills": [
        "xac-suat-co-dien",
        "kiem-tra-xac-suat",
        "xac-suat-thuc-nghiem"
      ],
      "prerequisites": [],
      "micro_practice": [
        "PRO23MICRO_013",
        "PRO23MICRO_014",
        "PRO23MICRO_015",
        "PRO23MICRO_017"
      ],
      "teaching_copy": {
        "key_idea": "Xác suất thực nghiệm là tỉ số tính từ thực tế quan sát được. Với số lần thử lớn, nó thường tiến gần đến xác suất lý thuyết (cổ điển), nhưng với mẫu hữu hạn, hai giá trị này có thể khác biệt.",
        "worked_example": {
          "problem": "Xác suất theo mô hình của một cú ném trúng là 0,5. Trong 10 lần ném có 6 lần trúng. Xác suất thực nghiệm bằng bao nhiêu?",
          "solution": "Số lần trúng là 6 trong 10 lần ném, nên xác suất thực nghiệm là 6/10 = 0,6. Với số lần thử hữu hạn, hai giá trị không bắt buộc bằng nhau."
        },
        "misconception": "Lầm tưởng xác suất lý thuyết 1/2 nghĩa là hễ cứ thực hiện 2 lần thì chắc chắn 1 lần thành công.",
        "summary": "Xác suất mô hình giúp ta ước lượng xu hướng dài hạn, trong khi kết quả thực nghiệm phản ánh cụ thể những gì đã xảy ra ngẫu nhiên."
      }
    }
  ],
  "extensions": [
    {
      "id": "prob23-ext-1",
      "layer": "Core-Support",
      "title": "Không gian mẫu, biến cố đối và đồng xu nhiều lần – không chấm Core",
      "gates_core": false
    },
    {
      "id": "prob23-ext-2",
      "layer": "Entrance10",
      "title": "Hai xúc xắc, sơ đồ cây và bài toán nhiều bước – không chấm Core",
      "gates_core": false
    }
  ],
  "micro_practice_bank": "assets/data/practice/23-xac-suat-micro-v1.json",
  "qa_notes": [
    "Seven-gap R1 PASS: appended PRO23MICRO_016–017; original 15 records and learner history remain immutable."
  ]
}

```

## CĐ13 existing written-practice source

# Practice Room – Chuyên đề 13: Góc và quan hệ giữa các đường thẳng

> **Mục tiêu:** luyện chắc KNTT Core lớp 6–7 từ ngôn ngữ điểm–tia–đoạn–góc đến song song và bước đầu chứng minh.
>
> **Nguyên tắc hình học:** hình vẽ chỉ minh họa; mọi kết luận phải dựa trên giả thiết, định nghĩa hoặc định lí.

## B. ✍️ Luyện tự luận & trình bày

### Core KNTT

#### 13-WR-01 · Điểm nằm giữa
B nằm giữa A và C, AB=4 cm, AC=11 cm. Tính BC.

??? tip "Gợi ý"
    Dùng AB+BC=AC.

??? example "Xem lời giải"
    \[
    BC=AC-AB=11-4=7\text{ cm}.
    \]

#### 13-WR-02 · Tia và tia đối
Nêu đủ ba điều kiện để hai tia Ox và Oy là hai tia đối nhau.

??? tip "Gợi ý"
    Kiểm tra gốc, đường thẳng chứa và hướng.

??? example "Xem lời giải"
    Hai tia phải cùng gốc O, cùng nằm trên một đường thẳng và đi về hai phía ngược nhau.

#### 13-WR-03 · Trung điểm
M nằm giữa A,B; AB=14 cm và AM=7 cm. Chứng minh M là trung điểm AB.

??? tip "Gợi ý"
    Tính MB rồi kiểm tra hai điều kiện trung điểm.

??? example "Xem lời giải"
    Vì M nằm giữa A,B:
    \[
    MB=AB-AM=7\text{ cm}.
    \]
    Do AM=MB=7 cm và M nằm giữa A,B, M là trung điểm AB.

#### 13-WR-04 · Góc và số đo
Oz nằm trong góc xOy=95°, biết góc xOz=38°. Tính góc zOy.

??? tip "Gợi ý"
    Hai góc nhỏ cộng lại thành góc lớn.

??? example "Xem lời giải"
    \[
    \angle zOy=95^\circ-38^\circ=57^\circ.
    \]

#### 13-WR-05 · Tia phân giác
Oz là tia phân giác góc xOy=126°. Tính hai góc tạo thành.

??? tip "Gợi ý"
    Chia đôi số đo góc.

??? example "Xem lời giải"
    \[
    \angle xOz=\angle zOy=63^\circ.
    \]

#### 13-WR-06 · Vị trí góc
Giải thích bằng lời cách nhận ra một cặp góc so le trong khi một đường thẳng cắt hai đường thẳng khác.

??? tip "Gợi ý"
    Dùng hai từ khóa “trong” và “so le”.

??? example "Xem lời giải"
    Hai góc phải nằm giữa hai đường thẳng và ở hai phía khác nhau của đường cắt.

#### 13-WR-07 · Từ song song suy ra góc
Cho a∥b và c cắt a,b. Một góc đồng vị bằng 72°. Tính góc đồng vị tương ứng và một góc kề bù với nó.

??? tip "Gợi ý"
    Đồng vị bằng nhau; kề bù tổng 180°.

??? example "Xem lời giải"
    Góc đồng vị tương ứng bằng 72°. Góc kề bù bằng \(180^\circ-72^\circ=108^\circ\).

#### 13-WR-08 · Dấu hiệu song song
c cắt a,b. Một cặp góc so le trong cùng bằng 65°. Chứng minh a∥b.

??? tip "Gợi ý"
    Ghi rõ vị trí của hai góc trước khi dùng dấu hiệu.

??? example "Xem lời giải"
    Hai góc đã cho là một cặp so le trong và bằng nhau. Theo dấu hiệu nhận biết hai đường thẳng song song, suy ra \(a\parallel b\).

#### 13-WR-09 · Tiên đề Euclid
M nằm ngoài a. Hai đường b,c đều qua M và đều song song với a. Chứng minh b và c trùng nhau.

??? tip "Gợi ý"
    Dùng tính duy nhất trong tiên đề Euclid.

??? example "Xem lời giải"
    Qua M ngoài a chỉ có duy nhất một đường thẳng song song với a. Vì b và c đều thỏa điều kiện đó, b và c là cùng một đường thẳng.

#### 13-WR-10 · GT/KL và proof chain
Cho giả thiết \(a\parallel b\), \(c\perp a\). Hãy viết GT, KL và chuỗi lập luận để kết luận \(c\perp b\).

??? tip "Gợi ý"
    Viết mỗi bước theo dạng mệnh đề + căn cứ.

??? example "Xem lời giải"
    **GT:** \(a\parallel b,\ c\perp a\).  
    **KL:** \(c\perp b\).

    Vì \(c\perp a\), góc tạo bởi c và a bằng \(90^\circ\). Do \(a\parallel b\), góc tương ứng tạo bởi c và b cũng bằng \(90^\circ\). Vậy \(c\perp b\).

### Core-Support

#### 13-SUP-01 · Vuông góc – song song
Giải thích vì sao hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì song song.

??? example "Xem lời giải"
    Một đường cắt tạo với cả hai đường hai góc đồng vị bằng \(90^\circ\), nên theo dấu hiệu song song, hai đường đó song song.

### Entrance10 / Extension

#### 13-ENT-01 · Chuỗi suy luận nhiều bước
Trong một bài hình tổng hợp, hãy viết chuỗi: song song → góc bằng nhau → nhận dạng hai tam giác có hai góc tương ứng bằng nhau.

??? example "Xem lời giải"
    Từ hai đường song song suy ra cặp góc so le trong/đồng vị bằng nhau. Kết hợp thêm một cặp góc bằng nhau khác để chuẩn bị áp dụng tiêu chuẩn đồng dạng ở Chuyên đề 17.

### Challenge

#### 13-CH-01 · Kiểm tra giả thiết ẩn
Một hình vẽ cho hai đường trông có vẻ song song nhưng đề không cho ký hiệu hoặc dữ kiện góc. Có được dùng tính chất đường song song không? Giải thích.

??? example "Xem lời giải"
    Không. Hình vẽ không phải giả thiết; cần có dữ kiện hoặc chứng minh được hai đường song song trước.

---

## Theo dõi sau khi luyện
- [ ] Tôi phân biệt nằm giữa và trung điểm.
- [ ] Tôi đọc đúng tia, góc và vị trí các cặp góc.
- [ ] Tôi phân biệt tính chất song song với dấu hiệu song song.
- [ ] Tôi hiểu tính duy nhất trong tiên đề Euclid.
- [ ] Tôi viết được GT/KL và từng bước chứng minh có căn cứ.
- [ ] Khi tương đối chắc, tôi chuyển sang [✅ Core Readiness Check](tu-kiem-tra.md).

## Liên kết Roadmap

- **← Chuyên đề trước:** [12 – Phương trình bậc hai & Viète](../12-phuong-trinh-bac-hai-viete/index.md)
- **← Học kiến thức:** [Chuyên đề 13 – Góc và đường thẳng](index.md)
- **→ Tự kiểm tra:** [Core Readiness Check](tu-kiem-tra.md)
- **→ Chuyên đề tiếp theo:** [14 – Tam giác](../14-tam-giac/index.md)


## CĐ15 existing written-practice source

# Practice Room – Chuyên đề 15: Các đường đồng quy trong tam giác

> **Mục tiêu:** phân biệt bốn họ đường đặc biệt, bốn tâm G–H–I–O và hiểu đúng bốn định lí đồng quy.
>
> **Cảnh báo:** “bốn họ đồng quy” không có nghĩa mười hai đường luôn đi qua cùng một điểm.

## B. ✍️ Luyện tự luận & trình bày

### Core KNTT

#### 15-WR-01 · Trung tuyến
M là trung điểm BC. Gọi tên AM.

??? example "Xem lời giải"
    AM là trung tuyến từ A.

#### 15-WR-02 · Trọng tâm
AM=15 cm, G là trọng tâm trên AM. Tính AG,GM.

??? example "Xem lời giải"
    AG:GM=2:1 nên AG=10 cm, GM=5 cm.

#### 15-WR-03 · Đường cao
Nêu định nghĩa đường cao từ A.

??? example "Xem lời giải"
    Đường thẳng qua A và vuông góc với đường thẳng chứa cạnh BC.

#### 15-WR-04 · Trực tâm
Ba đường cao gặp nhau tại đâu?

??? example "Xem lời giải"
    Tại trực tâm H.

#### 15-WR-05 · Phân giác
Hai phân giác trong cắt nhau tại I. Xác định I.

??? example "Xem lời giải"
    I là tâm nội tiếp; phân giác trong thứ ba cũng đi qua I.

#### 15-WR-06 · Trung trực
Hai trung trực của AB và AC cắt nhau tại O. Xác định O.

??? example "Xem lời giải"
    O là tâm ngoại tiếp; trung trực BC cũng đi qua O.

#### 15-WR-07 · Bốn tâm
Lập bảng G,H,I,O và họ đường tạo nên từng tâm.

??? example "Xem lời giải"
    G–trung tuyến; H–đường cao; I–phân giác trong; O–trung trực.

#### 15-WR-08 · Đồng quy đúng nghĩa
Giải thích vì sao câu “bốn đường đặc biệt đồng quy tại một điểm” là sai nếu nói cho tam giác bất kỳ.

??? example "Xem lời giải"
    Mỗi **họ ba đường cùng loại** đồng quy tại một tâm riêng. G,H,I,O nói chung khác nhau.

#### 15-WR-09 · Trường hợp đặc biệt
Trong tam giác đều, quan hệ giữa G,H,I,O là gì?

??? example "Xem lời giải"
    Do đối xứng, bốn tâm trùng nhau.

#### 15-WR-10 · Phân biệt trung tuyến và trung trực
Nêu hai điểm khác nhau cơ bản.

??? example "Xem lời giải"
    Trung tuyến đi từ đỉnh tới trung điểm cạnh đối; trung trực vuông góc một cạnh tại trung điểm và không bắt buộc đi qua đỉnh.

### Core-Support

Các tính chất vị trí H/O và cách đều cạnh/đỉnh vẫn được luyện, nhưng không gate Core readiness trong mapping hiện tại.

### Entrance10 / Extension

Khai thác các tâm trong bài tổng hợp chỉ sau khi nhận dạng đúng họ đường và tâm tương ứng.

### Challenge

#### 15-CH-01 · Bốn tâm có luôn khác nhau?
Xét câu “G, H, I, O luôn là bốn điểm phân biệt”. Câu này đúng hay sai?

??? example "Xem lời giải"
    Sai. Trong tam giác đều, bốn tâm trùng nhau. Vì vậy phải phân biệt phát biểu tổng quát với trường hợp đặc biệt.

## Liên kết Roadmap

- **← Chuyên đề trước:** [14 – Tam giác](../14-tam-giac/index.md)
- **← Học kiến thức:** [Chuyên đề 15 – Các đường đồng quy](index.md)
- **→ Tự kiểm tra:** [Core Readiness Check](tu-kiem-tra.md)
- **→ Chuyên đề tiếp theo:** [16 – Tứ giác](../16-tu-giac/index.md)


## CĐ23 existing practice source

# Bài tập – Chuyên đề 23: Xác suất

> **Phân tầng:** luyện Core theo KNTT lớp 6–8 trước; các bài sơ đồ cây, biến cố đối, nhiều bước và rút không hoàn lại nằm ở Core-Support/Entrance10. Kết quả phần mở rộng không khóa Core Readiness.
>
> **Quy ước mã bài:** `23-Mx-yy`.

## B. Luyện tự luận / trình bày

Bên cạnh Practice Room tương tác, học sinh có thể [mở bộ tự luận 10 câu và hướng dẫn chấm](tu-kiem-tra-tu-luan.md) để luyện lập luận bằng lời, trình bày phép tính và giải thích kết quả. Bộ tự luận có nội dung mở rộng nên **không tính vào Core Readiness**.

**Ví dụ trình bày Core:** Một đồng xu được tung 20 lần, xuất hiện 13 lần ngửa. Tính xác suất thực nghiệm của mặt ngửa.

??? example "Xem lời giải"
    Gọi A là sự kiện “xuất hiện mặt ngửa”. Trong 20 lần tung, A xảy ra 13 lần. Vậy xác suất thực nghiệm trong loạt thử là \(\frac{13}{20}\). Đây là tỉ lệ quan sát của loạt thử, không khẳng định rằng lần tung tiếp theo sẽ ra ngửa.

### Chọn đúng tầng học

- **KNTT-Core:** luyện theo lớp và kỹ năng đã học, gồm kết quả có thể, biến cố đơn giản, xác suất theo tỉ số và thực nghiệm.
- **Core-Support:** luyện bổ trợ, chẳng hạn biến cố đối hoặc không gian mẫu nhiều bước; không khóa Core.
- **Entrance10:** bài mở rộng như sơ đồ cây, hai xúc xắc hoặc rút thẻ không hoàn lại; không dùng để chấm Core.
- **Specialized-Challenge:** tầng Challenge được dành riêng cho phần phát triển sau; chưa coi là nội dung bắt buộc trong ngân hàng 120 câu hiện tại.

---

# Mức 1 – Nhận biết

### 23-M1-01
Gieo một xúc xắc sáu mặt. Viết không gian mẫu.

### 23-M1-02
Biến cố là gì?

### 23-M1-03
Xác suất của một biến cố luôn nằm trong khoảng nào?

### 23-M1-04
Biến cố chắc chắn có xác suất bằng bao nhiêu?

### 23-M1-05
Biến cố không thể có xác suất bằng bao nhiêu?

### 23-M1-06
Khi nào dùng được công thức \(P(A)=n(A)/n(\Omega)\)?

### 23-M1-07
Viết công thức xác suất của biến cố đối.

### 23-M1-08
Khi thí nghiệm có nhiều bước, công cụ nào thường giúp liệt kê kết quả có hệ thống?

# Mức 2 – Thông hiểu

### 23-M2-01
Gieo một xúc xắc cân đối. Tính xác suất ra số lớn hơn 4.

### 23-M2-02
Gieo một xúc xắc cân đối. Tính xác suất ra số chẵn.

### 23-M2-03
Tung một đồng xu cân đối hai lần. Liệt kê không gian mẫu.

### 23-M2-04
Với phép thử trên, tính xác suất có đúng một lần ngửa.

### 23-M2-05
Một hộp có các thẻ 1 đến 10, rút ngẫu nhiên một thẻ. Tính xác suất rút số chia hết cho 3.

### 23-M2-06
Một biến cố có xác suất \(0,7\). Xác suất biến cố đối bằng bao nhiêu?

### 23-M2-07
Một học sinh dùng \(n(A)/n(\Omega)\) dù các kết quả không đồng khả năng. Hãy chỉ ra lỗi.

### 23-M2-08
Tung đồng xu hai lần. Biến cố “ít nhất một lần ngửa” gồm những kết quả nào?

# Mức 3 – Vận dụng

### 23-M3-01
Gieo hai xúc xắc cân đối. Tính xác suất tổng bằng 7.

### 23-M3-02
Gieo hai xúc xắc cân đối. Tính xác suất tổng bằng 2 hoặc 12.

### 23-M3-03
Tung đồng xu cân đối ba lần. Tính xác suất có ít nhất một lần ngửa bằng biến cố đối.

### 23-M3-04
Tung đồng xu cân đối ba lần. Tính xác suất có đúng hai lần ngửa.

### 23-M3-05
Một hộp có 5 thẻ đỏ và 3 thẻ xanh, rút ngẫu nhiên một thẻ. Tính xác suất rút thẻ đỏ.

### 23-M3-06
Tung một đồng xu rồi gieo một xúc xắc. Tính xác suất đồng xu ngửa và xúc xắc ra số chẵn.

### 23-M3-07
Một phép thử hai bước độc lập có xác suất thành công mỗi bước là \(1/2\). Tính xác suất thành công đúng một bước.

### 23-M3-08
Một túi có 3 thẻ ghi A và 2 thẻ ghi B. Rút một thẻ ngẫu nhiên rồi hoàn lại, sau đó rút lần hai. Tính xác suất cả hai lần đều rút A.

### 23-M3-09
Với dữ kiện trên nhưng không hoàn lại thẻ sau lần đầu, giải thích vì sao xác suất ở bước hai phụ thuộc kết quả bước một.

### 23-M3-10
Một kết quả tính xác suất là \(1,2\). Hãy giải thích vì sao chắc chắn sai và nêu cách kiểm tra lại.

# Mức 4 – Tổng hợp / ôn thi

### 23-M4-01
Tung đồng xu cân đối ba lần. Tính xác suất có ít nhất một lần sấp.

### 23-M4-02
Gieo hai xúc xắc cân đối. Tính xác suất tổng lớn hơn 9.

### 23-M4-03
Một hộp có 4 thẻ đỏ, 6 thẻ xanh. Rút hai lần có hoàn lại. Tính xác suất rút đúng một thẻ đỏ.

### 23-M4-04
Cùng hộp trên, rút hai lần không hoàn lại. Tính xác suất cả hai thẻ đều đỏ.

### 23-M4-05
Một trò chơi gồm tung đồng xu cân đối rồi gieo xúc xắc cân đối. Tính xác suất đồng xu ngửa hoặc xúc xắc ra số 6.

### 23-M4-06
Một phép thử có ba bước độc lập, mỗi bước thành công với xác suất \(0,8\). Tính xác suất cả ba bước đều thành công.

### 23-M4-07
Một bài “ít nhất một lần thành công” có nhiều bước độc lập. Hãy nêu vì sao dùng biến cố đối thường ngắn hơn liệt kê trực tiếp.

### 23-M4-08
Hãy thiết kế sơ đồ cây cho một phép thử hai bước có các xác suất khác nhau ở bước hai tùy kết quả bước một, và nêu cách tính xác suất một nhánh.

# Đáp án nhanh

| Mã | Đáp án |
|---|---|
| 23-M1-01 | \(\{1,2,3,4,5,6\}\) |
| 23-M1-02 | Tập con của không gian mẫu |
| 23-M1-03 | \([0,1]\) |
| 23-M1-04 | 1 |
| 23-M1-05 | 0 |
| 23-M1-06 | Khi không gian mẫu hữu hạn và các kết quả đồng khả năng |
| 23-M1-07 | \(P(\overline A)=1-P(A)\) |
| 23-M1-08 | Bảng liệt kê hoặc sơ đồ cây |
| 23-M2-01 | \(2/6=1/3\) |
| 23-M2-02 | \(3/6=1/2\) |
| 23-M2-03 | \(\{NN,NS,SN,SS\}\) |
| 23-M2-04 | \(1/2\) |
| 23-M2-05 | \(3/10\) |
| 23-M2-06 | \(0,3\) |
| 23-M2-07 | Công thức cổ điển không áp dụng nếu các kết quả không đồng khả năng |
| 23-M2-08 | \(NN,NS,SN\) |
| 23-M3-01 | \(6/36=1/6\) |
| 23-M3-02 | \(2/36=1/18\) |
| 23-M3-03 | \(1-(1/2)^3=7/8\) |
| 23-M3-04 | \(3/8\) |
| 23-M3-05 | \(5/8\) |
| 23-M3-06 | \(1/2\cdot1/2=1/4\) |
| 23-M3-07 | \(1/2\) |
| 23-M3-08 | \((3/5)^2=9/25\) |
| 23-M3-09 | Thành phần trong túi thay đổi sau lần rút đầu |
| 23-M3-10 | Xác suất phải nằm trong \([0,1]\) |
| 23-M4-01 | \(1-(1/2)^3=7/8\) |
| 23-M4-02 | \(6/36=1/6\) |
| 23-M4-03 | \(2\cdot(4/10)(6/10)=12/25\) |
| 23-M4-04 | \((4/10)(3/9)=2/15\) |
| 23-M4-05 | \(1/2+1/6-(1/2)(1/6)=7/12\) |
| 23-M4-06 | \(0,8^3=0,512\) |
| 23-M4-07 | Chỉ cần tính trường hợp không thành công lần nào rồi lấy \(1-\) kết quả đó |
| 23-M4-08 | Nhân các xác suất có điều kiện phù hợp trên từng nhánh |

# Hướng dẫn chọn lọc

## 23-M3-01
Có 36 cặp có thứ tự đồng khả năng. Tổng bằng 7 ở:

$$
(1,6),(2,5),(3,4),(4,3),(5,2),(6,1).
$$

Vậy:

$$
P=\frac6{36}=\frac16.
$$

## 23-M4-05
Gọi \(A\): đồng xu ngửa, \(B\): xúc xắc ra 6. Hai biến cố độc lập nên:

$$
P(A\cap B)=\frac12\cdot\frac16=\frac1{12}.
$$

Do đó:

$$
P(A\cup B)=P(A)+P(B)-P(A\cap B)
=\frac12+\frac16-\frac1{12}
=\frac7{12}.
$$

# Theo dõi tiến độ

- [ ] M1 đạt ít nhất 6/8.
- [ ] M2 đạt ít nhất 6/8.
- [ ] M3 đạt ít nhất 7/10.
- [ ] M4 đã thử ít nhất 4/8.
- [ ] Tôi kiểm tra điều kiện đồng khả năng trước khi dùng công thức cổ điển.

## Liên kết Roadmap

- **← Chuyên đề trước:** [22 – Đại lượng đặc trưng](../22-dai-luong-dac-trung/index.md)
- **← Học kiến thức:** [Chuyên đề 23 – Xác suất](index.md)
- **→ Tự kiểm tra:** [Tự kiểm tra Chuyên đề 23](tu-kiem-tra.md)
- **→ Chuyên đề tiếp theo:** [24 – Bài toán thực tế](../24-bai-toan-thuc-te/index.md)


## Exact candidate JSON

```json
{
  "schema_version": "1.0.0",
  "packet_id": "MATH-WRITTEN-LIBRARY-EXPANSION-B4-R1-20261001",
  "snapshot_date": "2026-10-01",
  "status": "REVIEW_ONLY_PENDING_NOTEBOOKLM_R1",
  "production_catalog_unchanged": true,
  "auto_readiness_credit": false,
  "self_marking_only": true,
  "scope": {
    "topics": [
      "CT13",
      "CT15",
      "CT23"
    ],
    "exercise_count": 6,
    "rule": "2 candidate items per topic: one CORE_BASE and one CORE_APPLY"
  },
  "exercises": [
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
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
        "status": "PENDING_NOTEBOOKLM_R1"
      }
    }
  ]
}

```
