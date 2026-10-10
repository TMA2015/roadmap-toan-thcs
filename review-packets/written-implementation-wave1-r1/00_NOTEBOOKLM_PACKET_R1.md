# NotebookLM Review Packet — Written Implementation Wave 1 R1

**packet_id:** `MATH-WRITTEN-IMPLEMENTATION-W1-R1-20261010`  
**authorization:** `WRITTEN_COVERAGE_PRIORITY_R1_REVIEW_COMPLETE`  
**status:** CANDIDATE — no merge/import before independent academic PASS

## Fixed scope

Review exactly 9 new KNTT-Core / CORE_BASE written exercises:
- ALG-MULTIPLY → WX04-ALG-003
- RAD-TRANSFORM → WX11-RAD-003
- TRI-ANGLE-SIDE → WX14-TRI-003
- QUAD-RHOMBUS → WX16-QUAD-003
- QUAD-TRAPEZOID → WX16-QUAD-004
- SIM-MID-BISECTOR → WX17-SIM-003
- RIGHT-PYTHAGORE → WX18-TRI-003
- CIRCLE-ANGLES → WX19-CIR-003
- CIRCLE-CHORD-ARC → WX19-CIR-004

Also verify the already-approved crosswalk metadata:
- WX24-MOD-002 → SYS-MODEL,SYS-SOLVE
- WX23-PRO-003 → PROB-EVENT

No CORE_APPLY item is authorized in this wave.

## Review criteria

For each new exercise verify:
1. mathematical correctness and sufficient hypotheses;
2. exact final conclusion;
3. KNTT-Core grade/layer fit;
4. intended canonical family alignment;
5. whether a paper-first solution truly exposes reasoning not already captured by MCQ/Micro/Readiness;
6. step-by-step solution logic;
7. rubric alignment;
8. common-mistake quality;
9. duplicate/near-duplicate structure against the current Written library;
10. geometry diagram consistency where present.

Do not add more exercises merely to raise counts.

## Candidate items

### WX04-ALG-003 — ALG-MULTIPLY

```json
{
  "exercise_id": "WX04-ALG-003",
  "exercise_kind": "standard",
  "topic_id": "CT04",
  "topic_slug": "04-bieu-thuc-dai-so",
  "topic_title": "Biểu thức và biến đổi đại số",
  "problem_type_id": "polynomial-multiplication-distribution",
  "problem_type_title": "Nhân biểu thức và phân phối nhiều bước",
  "title": "Nhân từng hạng tử trước, rồi mới thu gọn",
  "learning_layer": "KNTT-Core",
  "level": "CORE_BASE",
  "grade_overlay": [
    7,
    8
  ],
  "canonical_family_ids": [
    "ALG-MULTIPLY"
  ],
  "skills": [
    "nhan-bieu-thuc",
    "tinh-phan-phoi"
  ],
  "prerequisites": [
    "thu-gon-da-thuc",
    "bo-ngoac-dau"
  ],
  "estimated_minutes": 9,
  "problem_markdown": "Cho\n\n$$A=(2x-3)(x+4)-x(x-1).$$\n\nKhai triển và thu gọn $A$. Hãy viết rõ bước nhân phân phối của từng tích.",
  "figure_uri": null,
  "figure_alt": null,
  "solution_steps": [
    {
      "step_id": "S1",
      "title": "Khai triển tích thứ nhất",
      "content_markdown": "Dùng tính phân phối:\n\n$$(2x-3)(x+4)=2x\\cdot x+2x\\cdot4-3\\cdot x-3\\cdot4=2x^2+5x-12.$$"
    },
    {
      "step_id": "S2",
      "title": "Khai triển tích thứ hai",
      "content_markdown": "Ta có\n\n$$x(x-1)=x^2-x.$$"
    },
    {
      "step_id": "S3",
      "title": "Thay vào biểu thức và bỏ ngoặc",
      "content_markdown": "Suy ra\n\n$$A=2x^2+5x-12-(x^2-x)=2x^2+5x-12-x^2+x.$$"
    },
    {
      "step_id": "S4",
      "title": "Thu gọn",
      "content_markdown": "Gộp các hạng tử đồng dạng:\n\n$$\\boxed{A=x^2+6x-12}.$$"
    }
  ],
  "rubric": [
    {
      "criterion": "Khai triển đúng $(2x-3)(x+4)$.",
      "points": 1
    },
    {
      "criterion": "Khai triển đúng $x(x-1)$.",
      "points": 1
    },
    {
      "criterion": "Bỏ ngoặc trừ đúng dấu.",
      "points": 1
    },
    {
      "criterion": "Thu gọn đúng $x^2+6x-12$.",
      "points": 1
    }
  ],
  "rubric_total": 4,
  "common_mistakes": [
    "Chỉ nhân hạng tử đầu của một ngoặc.",
    "Sai dấu khi trừ $x(x-1)$.",
    "Gộp các hạng tử không đồng dạng."
  ],
  "remediation_links": [
    {
      "label": "Ôn CĐ04 – Nhân và tính phân phối",
      "href": "../kien-thuc/04-bieu-thuc-dai-so/core/"
    },
    {
      "label": "Practice Room CĐ04",
      "href": "../kien-thuc/04-bieu-thuc-dai-so/bai-tap/"
    }
  ],
  "source_refs": [
    "docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md#04-WR-05",
    "docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md#04-WR-06",
    "docs/assets/data/curriculum/topic04-learning-workspace.json#alg04-core-4"
  ],
  "academic_review": {
    "status": "PENDING",
    "method": "NOTEBOOKLM_R1",
    "packet_id": "MATH-WRITTEN-IMPLEMENTATION-W1-R1-20261010",
    "receipt": null
  }
}
```

### WX11-RAD-003 — RAD-TRANSFORM

```json
{
  "exercise_id": "WX11-RAD-003",
  "exercise_kind": "standard",
  "topic_id": "CT11",
  "topic_slug": "11-can-thuc",
  "topic_title": "Căn thức",
  "problem_type_id": "radical-transform-perfect-square-factors",
  "problem_type_title": "Tách thừa số chính phương và thu gọn căn thức",
  "title": "Tách đúng thừa số chính phương trước khi cộng căn đồng dạng",
  "learning_layer": "KNTT-Core",
  "level": "CORE_BASE",
  "grade_overlay": [
    9
  ],
  "canonical_family_ids": [
    "RAD-TRANSFORM"
  ],
  "skills": [
    "khai-phuong-tich",
    "dua-thua-so-ra"
  ],
  "prerequisites": [
    "can-dong-dang"
  ],
  "estimated_minutes": 8,
  "problem_markdown": "Rút gọn biểu thức\n\n$$A=\\sqrt{75}+2\\sqrt{12}-\\sqrt{27}.$$\n\nHãy viết rõ cách tách thừa số chính phương trong từng căn thức.",
  "figure_uri": null,
  "figure_alt": null,
  "solution_steps": [
    {
      "step_id": "S1",
      "title": "Biến đổi $\\sqrt{75}$",
      "content_markdown": "Ta có $75=25\\cdot3$, nên\n\n$$\\sqrt{75}=\\sqrt{25\\cdot3}=5\\sqrt3.$$"
    },
    {
      "step_id": "S2",
      "title": "Biến đổi $2\\sqrt{12}$",
      "content_markdown": "Vì $12=4\\cdot3$,\n\n$$2\\sqrt{12}=2\\sqrt{4\\cdot3}=4\\sqrt3.$$"
    },
    {
      "step_id": "S3",
      "title": "Biến đổi $\\sqrt{27}$",
      "content_markdown": "Vì $27=9\\cdot3$,\n\n$$\\sqrt{27}=\\sqrt{9\\cdot3}=3\\sqrt3.$$"
    },
    {
      "step_id": "S4",
      "title": "Thu gọn",
      "content_markdown": "Các căn thức đã đồng dạng:\n\n$$A=5\\sqrt3+4\\sqrt3-3\\sqrt3=\\boxed{6\\sqrt3}.$$"
    }
  ],
  "rubric": [
    {
      "criterion": "Biến đổi đúng $\\sqrt{75}=5\\sqrt3$.",
      "points": 1
    },
    {
      "criterion": "Biến đổi đúng $2\\sqrt{12}=4\\sqrt3$.",
      "points": 1
    },
    {
      "criterion": "Biến đổi đúng $\\sqrt{27}=3\\sqrt3$.",
      "points": 1
    },
    {
      "criterion": "Thu gọn đúng $A=6\\sqrt3$.",
      "points": 1
    }
  ],
  "rubric_total": 4,
  "common_mistakes": [
    "Tách thừa số không phải số chính phương.",
    "Quên hệ số 2 đứng trước $\\sqrt{12}$.",
    "Cộng trực tiếp các số dưới dấu căn."
  ],
  "remediation_links": [
    {
      "label": "Ôn CĐ11 – Biến đổi căn thức",
      "href": "../kien-thuc/11-can-thuc/core/"
    },
    {
      "label": "Practice Room CĐ11",
      "href": "../kien-thuc/11-can-thuc/bai-tap/"
    }
  ],
  "source_refs": [
    "docs/kien-thuc/11-can-thuc/bai-tap.md#11-WR-03",
    "docs/kien-thuc/11-can-thuc/bai-tap.md#11-WR-05",
    "docs/assets/data/curriculum/topic11-learning-workspace.json#rad11-core-2",
    "docs/assets/data/curriculum/topic11-learning-workspace.json#rad11-core-3"
  ],
  "academic_review": {
    "status": "PENDING",
    "method": "NOTEBOOKLM_R1",
    "packet_id": "MATH-WRITTEN-IMPLEMENTATION-W1-R1-20261010",
    "receipt": null
  }
}
```

### WX14-TRI-003 — TRI-ANGLE-SIDE

```json
{
  "exercise_id": "WX14-TRI-003",
  "exercise_kind": "standard",
  "topic_id": "CT14",
  "topic_slug": "14-tam-giac",
  "topic_title": "Tam giác",
  "problem_type_id": "triangle-inequality-angle-side-integer",
  "problem_type_title": "Kết hợp bất đẳng thức tam giác với quan hệ góc–cạnh",
  "title": "Hai điều kiện cùng siết miền giá trị của cạnh",
  "learning_layer": "KNTT-Core",
  "level": "CORE_BASE",
  "grade_overlay": [
    7
  ],
  "canonical_family_ids": [
    "TRI-ANGLE-SIDE"
  ],
  "skills": [
    "so-sanh-canh-goc",
    "bat-dang-thuc-tam-giac"
  ],
  "prerequisites": [
    "so-sanh-so-nguyen"
  ],
  "estimated_minutes": 10,
  "problem_markdown": "Cho tam giác $ABC$ có\n\n$$AB=x\\text{ cm},\\qquad AC=8\\text{ cm},\\qquad BC=5\\text{ cm},$$\n\ntrong đó $x$ là số nguyên dương. Biết $\\angle B>\\angle C$.\n\nTìm tất cả giá trị có thể của $x$.",
  "figure_uri": "../assets/geometry/written-library/wx14-tri-003.svg",
  "figure_alt": "Tam giác ABC với AB=x, AC=8, BC=5; góc B lớn hơn góc C.",
  "solution_steps": [
    {
      "step_id": "S1",
      "title": "Dùng bất đẳng thức tam giác",
      "content_markdown": "Ba độ dài phải thỏa\n\n$$|AC-BC|<AB<AC+BC.$$\n\nSuy ra\n\n$$|8-5|<x<8+5\\Rightarrow 3<x<13.$$"
    },
    {
      "step_id": "S2",
      "title": "Dùng quan hệ góc–cạnh",
      "content_markdown": "Trong một tam giác, góc lớn hơn đối diện cạnh lớn hơn. Vì $\\angle B>\\angle C$, cạnh đối diện $\\angle B$ là $AC$ lớn hơn cạnh đối diện $\\angle C$ là $AB$. Do đó\n\n$$8>x.$$"
    },
    {
      "step_id": "S3",
      "title": "Kết hợp hai điều kiện",
      "content_markdown": "Từ $3<x<13$ và $x<8$, ta được\n\n$$3<x<8.$$"
    },
    {
      "step_id": "S4",
      "title": "Lấy các giá trị nguyên dương",
      "content_markdown": "Vì $x$ là số nguyên dương,\n\n$$\\boxed{x\\in\\{4,5,6,7\\}}.$$"
    }
  ],
  "rubric": [
    {
      "criterion": "Lập đúng bất đẳng thức $3<x<13$.",
      "points": 1
    },
    {
      "criterion": "Từ $\\angle B>\\angle C$ suy ra đúng $AC>AB$, tức $x<8$.",
      "points": 1
    },
    {
      "criterion": "Kết hợp đúng thành $3<x<8$.",
      "points": 1
    },
    {
      "criterion": "Liệt kê đúng $x=4,5,6,7$.",
      "points": 1
    }
  ],
  "rubric_total": 4,
  "common_mistakes": [
    "So sánh góc với cạnh kề thay vì cạnh đối diện.",
    "Dùng bất đẳng thức tam giác không nghiêm ngặt.",
    "Quên điều kiện $x$ là số nguyên."
  ],
  "remediation_links": [
    {
      "label": "Ôn CĐ14 – Góc, cạnh và bất đẳng thức",
      "href": "../kien-thuc/14-tam-giac/core/"
    },
    {
      "label": "Practice Room CĐ14",
      "href": "../kien-thuc/14-tam-giac/bai-tap/"
    }
  ],
  "source_refs": [
    "docs/kien-thuc/14-tam-giac/bai-tap.md#14-WR-02",
    "docs/assets/data/curriculum/topic14-learning-workspace.json#geo14-core-1"
  ],
  "academic_review": {
    "status": "PENDING",
    "method": "NOTEBOOKLM_R1",
    "packet_id": "MATH-WRITTEN-IMPLEMENTATION-W1-R1-20261010",
    "receipt": null
  }
}
```

### WX16-QUAD-003 — QUAD-RHOMBUS

```json
{
  "exercise_id": "WX16-QUAD-003",
  "exercise_kind": "standard",
  "topic_id": "CT16",
  "topic_slug": "16-tu-giac",
  "topic_title": "Tứ giác và các hình đặc biệt",
  "problem_type_id": "rhombus-parallelogram-perpendicular-diagonals-proof",
  "problem_type_title": "Chứng minh hình thoi từ hình bình hành có hai đường chéo vuông góc",
  "title": "Từ đường chéo vuông góc đến hai cạnh kề bằng nhau",
  "learning_layer": "KNTT-Core",
  "level": "CORE_BASE",
  "grade_overlay": [
    8
  ],
  "canonical_family_ids": [
    "QUAD-RHOMBUS"
  ],
  "skills": [
    "hthoi-dau-hieu"
  ],
  "prerequisites": [
    "hbh-tinh-chat",
    "tam-giac-bang-nhau-cgc"
  ],
  "estimated_minutes": 11,
  "problem_markdown": "Cho hình bình hành $ABCD$. Hai đường chéo $AC$ và $BD$ cắt nhau tại $O$ và $AC\\perp BD$.\n\nChứng minh $ABCD$ là hình thoi.",
  "figure_uri": "../assets/geometry/written-library/wx16-quad-003.svg",
  "figure_alt": "Hình bình hành ABCD có hai đường chéo AC, BD cắt nhau vuông góc tại O.",
  "solution_steps": [
    {
      "step_id": "S1",
      "title": "Khai thác tính chất hình bình hành",
      "content_markdown": "Vì $ABCD$ là hình bình hành nên hai đường chéo chia đôi nhau. Do đó\n\n$$OB=OD.$$"
    },
    {
      "step_id": "S2",
      "title": "Chọn hai tam giác tại giao điểm",
      "content_markdown": "Xét $\\triangle AOB$ và $\\triangle AOD$. Ta có $AO$ chung, $OB=OD$, và\n\n$$\\angle AOB=\\angle AOD=90^\\circ.$$"
    },
    {
      "step_id": "S3",
      "title": "Chứng minh hai tam giác bằng nhau",
      "content_markdown": "Suy ra $\\triangle AOB=\\triangle AOD$ theo c.g.c."
    },
    {
      "step_id": "S4",
      "title": "Suy ra dấu hiệu hình thoi",
      "content_markdown": "Từ đó $AB=AD$. Hình bình hành có hai cạnh kề bằng nhau là hình thoi. Vậy\n\n$$\\boxed{ABCD\\text{ là hình thoi}.}$$"
    }
  ],
  "rubric": [
    {
      "criterion": "Dùng đúng tính chất đường chéo hình bình hành để có $OB=OD$.",
      "points": 1
    },
    {
      "criterion": "Nêu đủ $AO$ chung và hai góc vuông.",
      "points": 1
    },
    {
      "criterion": "Chứng minh đúng hai tam giác $AOB,AOD$ bằng nhau.",
      "points": 1
    },
    {
      "criterion": "Suy ra $AB=AD$ và dùng đúng dấu hiệu hình thoi.",
      "points": 1
    }
  ],
  "rubric_total": 4,
  "common_mistakes": [
    "Thấy hai đường chéo vuông góc rồi kết luận ngay hình thoi mà không dùng tiền đề hình bình hành.",
    "Quên chứng minh $OB=OD$.",
    "Dùng sai cặp tam giác quanh giao điểm hai đường chéo."
  ],
  "remediation_links": [
    {
      "label": "Ôn CĐ16 – Hình thoi",
      "href": "../kien-thuc/16-tu-giac/core/"
    },
    {
      "label": "Practice Room CĐ16",
      "href": "../kien-thuc/16-tu-giac/bai-tap/"
    }
  ],
  "source_refs": [
    "docs/kien-thuc/16-tu-giac/bai-tap.md#16-WR-06",
    "docs/assets/data/curriculum/topic16-learning-workspace.json#geo16-core-4"
  ],
  "academic_review": {
    "status": "PENDING",
    "method": "NOTEBOOKLM_R1",
    "packet_id": "MATH-WRITTEN-IMPLEMENTATION-W1-R1-20261010",
    "receipt": null
  }
}
```

### WX16-QUAD-004 — QUAD-TRAPEZOID

```json
{
  "exercise_id": "WX16-QUAD-004",
  "exercise_kind": "standard",
  "topic_id": "CT16",
  "topic_slug": "16-tu-giac",
  "topic_title": "Tứ giác và các hình đặc biệt",
  "problem_type_id": "isosceles-trapezoid-base-angles-diagonals",
  "problem_type_title": "Từ hình thang cân đến góc đáy và hai đường chéo bằng nhau",
  "title": "Dùng đúng tính chất hình thang cân rồi mới chứng minh đường chéo",
  "learning_layer": "KNTT-Core",
  "level": "CORE_BASE",
  "grade_overlay": [
    8
  ],
  "canonical_family_ids": [
    "QUAD-TRAPEZOID"
  ],
  "skills": [
    "hinh-thang",
    "hinh-thang-can"
  ],
  "prerequisites": [
    "tam-giac-bang-nhau-cgc"
  ],
  "estimated_minutes": 11,
  "problem_markdown": "Cho hình thang $ABCD$ ($AB\\parallel CD$) có $AD=BC$.\n\n1. Giải thích vì sao $ABCD$ là hình thang cân và suy ra $\\angle DAB=\\angle ABC$.\n2. Chứng minh $AC=BD$.",
  "figure_uri": "../assets/geometry/written-library/wx16-quad-004.svg",
  "figure_alt": "Hình thang ABCD có AB song song CD và hai cạnh bên AD, BC bằng nhau; vẽ hai đường chéo AC, BD.",
  "solution_steps": [
    {
      "step_id": "S1",
      "title": "Nhận dạng hình thang cân",
      "content_markdown": "Ta có $AB\\parallel CD$ nên $ABCD$ là hình thang. Hai cạnh bên lại thỏa $AD=BC$, do đó $ABCD$ là hình thang cân."
    },
    {
      "step_id": "S2",
      "title": "Dùng tính chất góc kề một đáy",
      "content_markdown": "Trong hình thang cân, hai góc kề cùng một đáy bằng nhau. Vì vậy\n\n$$\\angle DAB=\\angle ABC.$$"
    },
    {
      "step_id": "S3",
      "title": "Xét hai tam giác chứa hai đường chéo",
      "content_markdown": "Xét $\\triangle DAB$ và $\\triangle CBA$. Ta có $AD=BC$, $AB$ chung và $\\angle DAB=\\angle ABC$."
    },
    {
      "step_id": "S4",
      "title": "Kết luận hai đường chéo bằng nhau",
      "content_markdown": "Suy ra $\\triangle DAB=\\triangle CBA$ theo c.g.c., nên hai cạnh tương ứng\n\n$$\\boxed{BD=AC}.$$"
    }
  ],
  "rubric": [
    {
      "criterion": "Nhận dạng đúng $ABCD$ là hình thang cân từ $AB\\parallel CD$ và $AD=BC$.",
      "points": 1
    },
    {
      "criterion": "Suy ra đúng $\\angle DAB=\\angle ABC$.",
      "points": 1
    },
    {
      "criterion": "Chứng minh đúng $\\triangle DAB=\\triangle CBA$.",
      "points": 1
    },
    {
      "criterion": "Kết luận đúng $AC=BD$.",
      "points": 1
    }
  ],
  "rubric_total": 4,
  "common_mistakes": [
    "Nhầm hai cạnh bên với hai đáy.",
    "Dùng tính chất đường chéo bằng nhau trước khi xác định hình thang cân.",
    "Ghép sai góc trong tiêu chuẩn c.g.c."
  ],
  "remediation_links": [
    {
      "label": "Ôn CĐ16 – Hình thang và hình thang cân",
      "href": "../kien-thuc/16-tu-giac/core/"
    },
    {
      "label": "Practice Room CĐ16",
      "href": "../kien-thuc/16-tu-giac/bai-tap/"
    }
  ],
  "source_refs": [
    "docs/kien-thuc/16-tu-giac/bai-tap.md#16-WR-02",
    "docs/assets/data/curriculum/topic16-learning-workspace.json#geo16-core-1"
  ],
  "academic_review": {
    "status": "PENDING",
    "method": "NOTEBOOKLM_R1",
    "packet_id": "MATH-WRITTEN-IMPLEMENTATION-W1-R1-20261010",
    "receipt": null
  }
}
```

### WX17-SIM-003 — SIM-MID-BISECTOR

```json
{
  "exercise_id": "WX17-SIM-003",
  "exercise_kind": "standard",
  "topic_id": "CT17",
  "topic_slug": "17-thales-dong-dang",
  "topic_title": "Thales và tam giác đồng dạng",
  "problem_type_id": "midsegment-angle-bisector-two-methods",
  "problem_type_title": "Đường trung bình và phân giác trong cùng một tam giác",
  "title": "Hai định lí, hai tỉ lệ khác nhau trong cùng một hình",
  "learning_layer": "KNTT-Core",
  "level": "CORE_BASE",
  "grade_overlay": [
    8
  ],
  "canonical_family_ids": [
    "SIM-MID-BISECTOR"
  ],
  "skills": [
    "duong-trung-binh",
    "tinh-chat-duong-phan-giac"
  ],
  "prerequisites": [
    "ti-le-doan-thang"
  ],
  "estimated_minutes": 12,
  "problem_markdown": "Cho tam giác $ABC$ có $AB=6$ cm, $AC=9$ cm, $BC=10$ cm. Gọi $M,N$ lần lượt là trung điểm của $AB,AC$. Tia phân giác của $\\angle A$ cắt $BC$ tại $D$.\n\n1. Chứng minh $MN\\parallel BC$ và tính $MN$.\n2. Tính $BD$ và $DC$.",
  "figure_uri": "../assets/geometry/written-library/wx17-sim-003.svg",
  "figure_alt": "Tam giác ABC có M, N là trung điểm AB, AC; MN nối hai trung điểm; AD là phân giác góc A cắt BC tại D.",
  "solution_steps": [
    {
      "step_id": "S1",
      "title": "Dùng định lí đường trung bình",
      "content_markdown": "Vì $M,N$ là trung điểm của $AB,AC$, đoạn $MN$ là đường trung bình của tam giác $ABC$. Do đó\n\n$$MN\\parallel BC,\\qquad MN=\\frac12BC=5\\text{ cm}.$$"
    },
    {
      "step_id": "S2",
      "title": "Lập tỉ số từ đường phân giác",
      "content_markdown": "Vì $AD$ là phân giác của $\\angle A$, theo tính chất đường phân giác:\n\n$$\\frac{BD}{DC}=\\frac{AB}{AC}=\\frac69=\\frac23.$$"
    },
    {
      "step_id": "S3",
      "title": "Dùng tổng hai đoạn",
      "content_markdown": "Đặt $BD=2k$, $DC=3k$. Vì $BD+DC=BC=10$ nên\n\n$$5k=10\\Rightarrow k=2.$$"
    },
    {
      "step_id": "S4",
      "title": "Kết luận",
      "content_markdown": "Vậy\n\n$$\\boxed{BD=4\\text{ cm},\\qquad DC=6\\text{ cm}}.$$"
    }
  ],
  "rubric": [
    {
      "criterion": "Nhận ra đúng $MN$ là đường trung bình và kết luận $MN\\parallel BC$.",
      "points": 1
    },
    {
      "criterion": "Tính đúng $MN=5$ cm.",
      "points": 1
    },
    {
      "criterion": "Lập đúng $BD/DC=AB/AC=2/3$.",
      "points": 1
    },
    {
      "criterion": "Dùng $BD+DC=10$ để tính đúng $BD=4$, $DC=6$.",
      "points": 1
    }
  ],
  "rubric_total": 4,
  "common_mistakes": [
    "Nhầm đường trung bình với đường phân giác.",
    "Đảo tỉ số $BD/DC$ nhưng không đảo tỉ số $AB/AC$.",
    "Quên dùng $BD+DC=BC$ để tìm từng đoạn."
  ],
  "remediation_links": [
    {
      "label": "Ôn CĐ17 – Đường trung bình và phân giác",
      "href": "../kien-thuc/17-thales-dong-dang/core/"
    },
    {
      "label": "Practice Room CĐ17",
      "href": "../kien-thuc/17-thales-dong-dang/bai-tap/"
    }
  ],
  "source_refs": [
    "docs/kien-thuc/17-thales-dong-dang/bai-tap.md#17-WR-03",
    "docs/kien-thuc/17-thales-dong-dang/bai-tap.md#17-WR-04",
    "docs/assets/data/curriculum/topic17-learning-workspace.json#geo17-core-2"
  ],
  "academic_review": {
    "status": "PENDING",
    "method": "NOTEBOOKLM_R1",
    "packet_id": "MATH-WRITTEN-IMPLEMENTATION-W1-R1-20261010",
    "receipt": null
  }
}
```

### WX18-TRI-003 — RIGHT-PYTHAGORE

```json
{
  "exercise_id": "WX18-TRI-003",
  "exercise_kind": "standard",
  "topic_id": "CT18",
  "topic_slug": "18-he-thuc-luong",
  "topic_title": "Hệ thức lượng trong tam giác vuông",
  "problem_type_id": "pythagorean-converse-altitude-area",
  "problem_type_title": "Dùng Pythagore đảo rồi tính đường cao từ diện tích",
  "title": "Xác nhận tam giác vuông trước khi dùng hai cạnh góc vuông",
  "learning_layer": "KNTT-Core",
  "level": "CORE_BASE",
  "grade_overlay": [
    9
  ],
  "canonical_family_ids": [
    "RIGHT-PYTHAGORE"
  ],
  "skills": [
    "pythagore-dao",
    "canh-huyen"
  ],
  "prerequisites": [
    "dien-tich-tam-giac"
  ],
  "estimated_minutes": 10,
  "problem_markdown": "Cho tam giác $ABC$ có\n\n$$AB=9\\text{ cm},\\qquad AC=12\\text{ cm},\\qquad BC=15\\text{ cm}.$$\n\n1. Chứng minh tam giác $ABC$ vuông tại $A$.\n2. Gọi $AH$ là đường cao ứng với cạnh $BC$. Tính $AH$.",
  "figure_uri": "../assets/geometry/written-library/wx18-tri-003.svg",
  "figure_alt": "Tam giác ABC với BC là cạnh dài nhất; AH vuông góc BC tại H.",
  "solution_steps": [
    {
      "step_id": "S1",
      "title": "Kiểm tra hệ thức Pythagore đảo",
      "content_markdown": "Ta có\n\n$$AB^2+AC^2=9^2+12^2=81+144=225=15^2=BC^2.$$"
    },
    {
      "step_id": "S2",
      "title": "Kết luận tam giác vuông",
      "content_markdown": "Vì bình phương cạnh lớn nhất bằng tổng bình phương hai cạnh còn lại, theo định lí Pythagore đảo, $\\triangle ABC$ vuông tại $A$ và $BC$ là cạnh huyền."
    },
    {
      "step_id": "S3",
      "title": "Tính diện tích theo hai cạnh góc vuông",
      "content_markdown": "Diện tích tam giác là\n\n$$S=\\frac12\\,AB\\cdot AC=\\frac12\\cdot9\\cdot12=54\\text{ cm}^2.$$"
    },
    {
      "step_id": "S4",
      "title": "Tính đường cao ứng với cạnh huyền",
      "content_markdown": "Mặt khác\n\n$$S=\\frac12\\,BC\\cdot AH=\\frac12\\cdot15\\cdot AH.$$\n\nDo đó\n\n$$AH=\\frac{108}{15}=\\boxed{\\frac{36}{5}\\text{ cm}}=7{,}2\\text{ cm}.$$"
    }
  ],
  "rubric": [
    {
      "criterion": "Kiểm tra đúng $9^2+12^2=15^2$.",
      "points": 1
    },
    {
      "criterion": "Dùng đúng Pythagore đảo để kết luận vuông tại $A$ và xác định $BC$ là cạnh huyền.",
      "points": 1
    },
    {
      "criterion": "Tính đúng diện tích $54\\text{ cm}^2$.",
      "points": 1
    },
    {
      "criterion": "Từ diện tích suy ra đúng $AH=36/5\\text{ cm}$.",
      "points": 1
    }
  ],
  "rubric_total": 4,
  "common_mistakes": [
    "Dùng Pythagore thuận trước khi chứng minh tam giác vuông.",
    "Chọn nhầm cạnh huyền.",
    "Dùng $AH$ như một cạnh góc vuông của tam giác ban đầu."
  ],
  "remediation_links": [
    {
      "label": "Ôn CĐ18 – Pythagore và tam giác vuông",
      "href": "../kien-thuc/18-he-thuc-luong/core/"
    },
    {
      "label": "Practice Room CĐ18",
      "href": "../kien-thuc/18-he-thuc-luong/bai-tap/"
    }
  ],
  "source_refs": [
    "docs/kien-thuc/14-tam-giac/bai-tap.md#14-SUP-01",
    "docs/assets/data/curriculum/topic18-learning-workspace.json#geo18-core-1"
  ],
  "academic_review": {
    "status": "PENDING",
    "method": "NOTEBOOKLM_R1",
    "packet_id": "MATH-WRITTEN-IMPLEMENTATION-W1-R1-20261010",
    "receipt": null
  }
}
```

### WX19-CIR-003 — CIRCLE-ANGLES

```json
{
  "exercise_id": "WX19-CIR-003",
  "exercise_kind": "standard",
  "topic_id": "CT19",
  "topic_slug": "19-duong-tron",
  "topic_title": "Đường tròn",
  "problem_type_id": "circle-central-inscribed-angle-chain",
  "problem_type_title": "Từ tam giác bán kính đến góc ở tâm và góc nội tiếp",
  "title": "Đi từ bán kính đến góc nội tiếp theo đúng chuỗi",
  "learning_layer": "KNTT-Core",
  "level": "CORE_BASE",
  "grade_overlay": [
    9
  ],
  "canonical_family_ids": [
    "CIRCLE-ANGLES"
  ],
  "skills": [
    "goc-o-tam",
    "goc-noi-tiep"
  ],
  "prerequisites": [
    "tam-giac-can",
    "tong-goc-tam-giac"
  ],
  "estimated_minutes": 10,
  "problem_markdown": "Cho đường tròn tâm $O$ và ba điểm $A,B,C$ thuộc đường tròn, trong đó $C$ nằm trên cung lớn $AB$. Biết $\\angle OAB=35^\\circ$.\n\nTính $\\angle ACB$.",
  "figure_uri": "../assets/geometry/written-library/wx19-cir-003.svg",
  "figure_alt": "Đường tròn tâm O với A, B trên cung nhỏ và C trên cung lớn AB; nối OA, OB, CA, CB.",
  "solution_steps": [
    {
      "step_id": "S1",
      "title": "Nhận ra tam giác cân",
      "content_markdown": "Vì $OA=OB$ là hai bán kính nên $\\triangle AOB$ cân tại $O$. Do đó\n\n$$\\angle OBA=\\angle OAB=35^\\circ.$$"
    },
    {
      "step_id": "S2",
      "title": "Tính góc ở tâm",
      "content_markdown": "Trong $\\triangle AOB$,\n\n$$\\angle AOB=180^\\circ-35^\\circ-35^\\circ=110^\\circ.$$"
    },
    {
      "step_id": "S3",
      "title": "Xác định cung bị chắn",
      "content_markdown": "Vì $C$ nằm trên cung lớn $AB$, góc nội tiếp $\\angle ACB$ chắn cung nhỏ $AB$, có số đo bằng góc ở tâm $\\angle AOB=110^\\circ$."
    },
    {
      "step_id": "S4",
      "title": "Dùng định lí góc nội tiếp",
      "content_markdown": "Góc nội tiếp bằng nửa số đo cung bị chắn, nên\n\n$$\\boxed{\\angle ACB=\\frac{110^\\circ}{2}=55^\\circ}.$$"
    }
  ],
  "rubric": [
    {
      "criterion": "Nhận ra $OA=OB$ và suy ra hai góc đáy bằng $35^\\circ$.",
      "points": 1
    },
    {
      "criterion": "Tính đúng $\\angle AOB=110^\\circ$.",
      "points": 1
    },
    {
      "criterion": "Xác định đúng $\\angle ACB$ chắn cung nhỏ $AB$.",
      "points": 1
    },
    {
      "criterion": "Kết luận đúng $\\angle ACB=55^\\circ$.",
      "points": 1
    }
  ],
  "rubric_total": 4,
  "common_mistakes": [
    "Quên dùng $OA=OB$ nên không tính được góc ở tâm.",
    "Lấy góc nội tiếp bằng đúng góc ở tâm thay vì bằng một nửa.",
    "Không để ý vị trí $C$ trên cung lớn $AB$."
  ],
  "remediation_links": [
    {
      "label": "Ôn CĐ19 – Góc nội tiếp",
      "href": "../kien-thuc/19-duong-tron/core/"
    },
    {
      "label": "Practice Room CĐ19",
      "href": "../kien-thuc/19-duong-tron/bai-tap/"
    }
  ],
  "source_refs": [
    "docs/kien-thuc/19-duong-tron/bai-tap.md#19-WR-07",
    "docs/assets/data/curriculum/topic19-learning-workspace.json#geo19-core-3"
  ],
  "academic_review": {
    "status": "PENDING",
    "method": "NOTEBOOKLM_R1",
    "packet_id": "MATH-WRITTEN-IMPLEMENTATION-W1-R1-20261010",
    "receipt": null
  }
}
```

### WX19-CIR-004 — CIRCLE-CHORD-ARC

```json
{
  "exercise_id": "WX19-CIR-004",
  "exercise_kind": "standard",
  "topic_id": "CT19",
  "topic_slug": "19-duong-tron",
  "topic_title": "Đường tròn",
  "problem_type_id": "circle-equal-distance-chord-arc-proof",
  "problem_type_title": "Từ khoảng cách tới tâm đến dây và cung bằng nhau",
  "title": "Hai khoảng cách bằng nhau dẫn tới hai dây bằng nhau",
  "learning_layer": "KNTT-Core",
  "level": "CORE_BASE",
  "grade_overlay": [
    9
  ],
  "canonical_family_ids": [
    "CIRCLE-CHORD-ARC"
  ],
  "skills": [
    "day-va-tam",
    "cung-va-day"
  ],
  "prerequisites": [
    "tam-giac-vuong",
    "tam-giac-bang-nhau"
  ],
  "estimated_minutes": 12,
  "problem_markdown": "Trong đường tròn tâm $O$, $AB$ và $CD$ là hai dây. Kẻ $OM\\perp AB$ tại $M$ và $ON\\perp CD$ tại $N$. Biết $OM=ON$.\n\nChứng minh:\n\n1. $AB=CD$.\n2. Hai cung nhỏ $AB$ và $CD$ bằng nhau.",
  "figure_uri": "../assets/geometry/written-library/wx19-cir-004.svg",
  "figure_alt": "Đường tròn tâm O có hai dây AB, CD; OM và ON vuông góc với các dây tại M, N và có độ dài bằng nhau.",
  "solution_steps": [
    {
      "step_id": "S1",
      "title": "Dùng đường vuông góc từ tâm",
      "content_markdown": "Đường vuông góc kẻ từ tâm đến một dây đi qua trung điểm của dây. Vì vậy\n\n$$AM=MB,\\qquad CN=ND.$$"
    },
    {
      "step_id": "S2",
      "title": "So sánh hai tam giác vuông",
      "content_markdown": "Xét hai tam giác vuông $\\triangle OMA$ và $\\triangle ONC$. Ta có $OA=OC$ (bán kính) và $OM=ON$ (giả thiết). Do đó hai tam giác vuông bằng nhau theo trường hợp cạnh huyền – cạnh góc vuông."
    },
    {
      "step_id": "S3",
      "title": "Suy ra hai dây bằng nhau",
      "content_markdown": "Từ hai tam giác bằng nhau, $AM=CN$. Vì $M,N$ là trung điểm các dây,\n\n$$AB=2AM=2CN=CD.$$"
    },
    {
      "step_id": "S4",
      "title": "Suy ra hai cung bằng nhau",
      "content_markdown": "Trong cùng một đường tròn, hai dây bằng nhau chắn hai cung nhỏ bằng nhau. Vậy\n\n$$\\boxed{\\widehat{AB}=\\widehat{CD}}.$$"
    }
  ],
  "rubric": [
    {
      "criterion": "Dùng đúng tính chất đường vuông góc từ tâm để suy ra $M,N$ là trung điểm các dây.",
      "points": 1
    },
    {
      "criterion": "Chứng minh đúng $\\triangle OMA=\\triangle ONC$.",
      "points": 1
    },
    {
      "criterion": "Suy ra đúng $AB=CD$.",
      "points": 1
    },
    {
      "criterion": "Dùng đúng quan hệ dây–cung để kết luận hai cung nhỏ bằng nhau.",
      "points": 1
    }
  ],
  "rubric_total": 4,
  "common_mistakes": [
    "Chỉ dựa vào hình vẽ để cho rằng $M,N$ là trung điểm.",
    "So sánh hai tam giác nhưng quên $OA=OC$ là bán kính.",
    "Kết luận cung bằng nhau mà chưa chứng minh hai dây bằng nhau."
  ],
  "remediation_links": [
    {
      "label": "Ôn CĐ19 – Dây, cung và tâm",
      "href": "../kien-thuc/19-duong-tron/core/"
    },
    {
      "label": "Practice Room CĐ19",
      "href": "../kien-thuc/19-duong-tron/bai-tap/"
    }
  ],
  "source_refs": [
    "docs/kien-thuc/19-duong-tron/bai-tap.md#19-WR-01",
    "docs/assets/data/curriculum/topic19-learning-workspace.json#geo19-core-1"
  ],
  "academic_review": {
    "status": "PENDING",
    "method": "NOTEBOOKLM_R1",
    "packet_id": "MATH-WRITTEN-IMPLEMENTATION-W1-R1-20261010",
    "receipt": null
  }
}
```

## Required machine-readable result

```text
PACKET|MATH-WRITTEN-IMPLEMENTATION-W1-R1-20261010
OVERALL|PASS|REVISIONS_REQUIRED
ITEM|WX04-ALG-003|PASS|REVISIONS_REQUIRED
ITEM|WX11-RAD-003|PASS|REVISIONS_REQUIRED
ITEM|WX14-TRI-003|PASS|REVISIONS_REQUIRED
ITEM|WX16-QUAD-003|PASS|REVISIONS_REQUIRED
ITEM|WX16-QUAD-004|PASS|REVISIONS_REQUIRED
ITEM|WX17-SIM-003|PASS|REVISIONS_REQUIRED
ITEM|WX18-TRI-003|PASS|REVISIONS_REQUIRED
ITEM|WX19-CIR-003|PASS|REVISIONS_REQUIRED
ITEM|WX19-CIR-004|PASS|REVISIONS_REQUIRED
CROSSWALK|WX24-MOD-002|SYS-MODEL,SYS-SOLVE|PASS|REVISIONS_REQUIRED
CROSSWALK|WX23-PRO-003|PROB-EVENT|PASS|REVISIONS_REQUIRED
BOUNDARY|NO_CORE_APPLY_IN_WAVE1|PASS|FAIL
BOUNDARY|NO_NEW_CANONICAL_FAMILY|PASS|FAIL
BOUNDARY|ANCHORS_NOT_DUPLICATED|PASS|FAIL
BOUNDARY|NO_READINESS_MASTERY_CREDIT|PASS|FAIL
MISSING_DECISIONS|NONE|...
CLEARANCE|WRITTEN_IMPLEMENTATION_W1_R1_CONTENT_REVIEW_COMPLETE
```

If any candidate needs correction, return REVISIONS_REQUIRED with the exact item ID and exact correction.
