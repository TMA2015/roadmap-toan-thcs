# NotebookLM Source — CT08 S2 Full-Bank Item Audit R1

Packet ID: `MATH-SKILL-CORE08-S2-OVERLAY-R1-20261002`

Source JSON overlay blob (repo provenance only): `7f5ce109eb0a02d0bad45f3914dbbd6be9eccf92`
S2 family registry blob: `867d1b6fee2676cceff64117fc6c7983abec8233`
Scope: **132 Practice questions**; proposed mapping: **132 primary / 0 formative-only**; clone families: **16**.

## Academic boundary

- This is a question-level audit after S2 family-level NotebookLM PASS.
- Max one primary diagnostic skill per one-answer MCQ.
- Learner-facing family is broader than diagnostic subskill; do not create extra learner mastery bars.
- `bien-doi-pt-nhieu-buoc`, `doi-chieu-nghiem`, `doi-chieu-bpt`, and order-property subskills may be primary diagnostic evidence when directly isolated, but they remain inside their broader learner family.
- `lap-phuong-trinh` and `lap-bat-phuong-trinh` final-answer MCQs are **partial modeling evidence only**. They cannot by themselves certify full modeling ability; written gaps remain required.
- `pt-tich` must remain compatible with S1 product-equation/factorization relation; do not duplicate learner-facing mastery.
- Entrance10 / Challenge evidence must not gate Core.
- Legacy question IDs, wording, answers and tags remain unchanged.
- No runtime, Readiness/mastery, history backfill or learner-progress migration is authorized.

## CT08 learner-facing families

- `EQ-BASIC` | Giải phương trình cơ bản | KNTT-Core | subskills=nghiem-phuong-trinh,pt-bac-nhat,bien-doi-pt-nhieu-buoc,pt-tich
- `EQ-RATIONAL` | Phương trình chứa ẩn ở mẫu | KNTT-Core | subskills=dkxd-phuong-trinh-mau,khu-mau-phuong-trinh,doi-chieu-nghiem
- `INEQ-ORDER` | Bất đẳng thức và tính chất thứ tự | KNTT-Core | subskills=bat-dang-thuc,tinh-chat-thu-tu-phep-cong,tinh-chat-thu-tu-phep-nhan
- `INEQ-SOLVE` | Giải và biểu diễn bất phương trình | KNTT-Core | subskills=bpt-bac-nhat,doi-chieu-bpt,bieu-dien-tap-nghiem,giao-tap-nghiem
- `EQ-MODEL` | Lập phương trình từ bài toán | KNTT-Core | subskills=lap-phuong-trinh
- `INEQ-MODEL` | Lập bất phương trình từ bài toán | Entrance10 | subskills=lap-bat-phuong-trinh
- `EQ-PARAM` | Phương trình/bất phương trình có tham số | Specialized-Challenge | subskills=tham-so-co-ban

## Primary counts

- `nghiem-phuong-trinh`: 6
- `pt-bac-nhat`: 28
- `pt-tich`: 12
- `dkxd-phuong-trinh-mau`: 8
- `khu-mau-phuong-trinh`: 12
- `doi-chieu-nghiem`: 6
- `bpt-bac-nhat`: 14
- `doi-chieu-bpt`: 8
- `bieu-dien-tap-nghiem`: 6
- `giao-tap-nghiem`: 6
- `lap-phuong-trinh`: 6
- `lap-bat-phuong-trinh`: 4
- `tham-so-co-ban`: 4
- `bat-dang-thuc`: 4
- `tinh-chat-thu-tu-phep-cong`: 4
- `tinh-chat-thu-tu-phep-nhan`: 4

## Family counts

- `EQ-BASIC`: 46
- `EQ-RATIONAL`: 26
- `INEQ-SOLVE`: 34
- `EQ-MODEL`: 6
- `INEQ-MODEL`: 4
- `EQ-PARAM`: 4
- `INEQ-ORDER`: 12

## Clone families

- `EQ08-SOLUTION-CONCEPT-001-006` → EQ08V1_001, EQ08V1_002, EQ08V1_003, EQ08V1_004, EQ08V1_005, EQ08V1_006
- `EQ08-LINEAR-SIMPLE-007-022` → EQ08V1_007, EQ08V1_008, EQ08V1_009, EQ08V1_010, EQ08V1_011, EQ08V1_012, EQ08V1_013, EQ08V1_014, EQ08V1_015, EQ08V1_016, EQ08V1_017, EQ08V1_018, EQ08V1_019, EQ08V1_020, EQ08V1_021, EQ08V1_022
- `EQ08-LINEAR-MULTISTEP-023-034` → EQ08V1_023, EQ08V1_024, EQ08V1_025, EQ08V1_026, EQ08V1_027, EQ08V1_028, EQ08V1_029, EQ08V1_030, EQ08V1_031, EQ08V1_032, EQ08V1_033, EQ08V1_034
- `EQ08-PRODUCT-035-046` → EQ08V1_035, EQ08V1_036, EQ08V1_037, EQ08V1_038, EQ08V1_039, EQ08V1_040, EQ08V1_041, EQ08V1_042, EQ08V1_043, EQ08V1_044, EQ08V1_045, EQ08V1_046
- `EQ08-RATIONAL-DOMAIN-047-054` → EQ08V1_047, EQ08V1_048, EQ08V1_049, EQ08V1_050, EQ08V1_051, EQ08V1_052, EQ08V1_053, EQ08V1_054
- `EQ08-RATIONAL-RECIPROCAL-055-060` → EQ08V1_055, EQ08V1_056, EQ08V1_057, EQ08V1_058, EQ08V1_059, EQ08V1_060
- `EQ08-RATIONAL-LINEAR-061-066` → EQ08V1_061, EQ08V1_062, EQ08V1_063, EQ08V1_064, EQ08V1_065, EQ08V1_066
- `EQ08-RATIONAL-REJECT-067-072` → EQ08V1_067, EQ08V1_068, EQ08V1_069, EQ08V1_070, EQ08V1_071, EQ08V1_072
- `EQ08-INEQ-SIMPLE-073-086` → EQ08V1_073, EQ08V1_074, EQ08V1_075, EQ08V1_076, EQ08V1_077, EQ08V1_078, EQ08V1_079, EQ08V1_080, EQ08V1_081, EQ08V1_082, EQ08V1_083, EQ08V1_084, EQ08V1_085, EQ08V1_086
- `EQ08-INEQ-FLIP-087-094` → EQ08V1_087, EQ08V1_088, EQ08V1_089, EQ08V1_090, EQ08V1_091, EQ08V1_092, EQ08V1_093, EQ08V1_094
- `EQ08-NUMBERLINE-095-100` → EQ08V1_095, EQ08V1_096, EQ08V1_097, EQ08V1_098, EQ08V1_099, EQ08V1_100
- `EQ08-INTERSECTION-101-106` → EQ08V1_101, EQ08V1_102, EQ08V1_103, EQ08V1_104, EQ08V1_105, EQ08V1_106
- `EQ08-INEQ-MODEL-113-116` → EQ08V1_113, EQ08V1_114, EQ08V1_115, EQ08V1_116
- `EQ08-PARAM-117-120` → EQ08V1_117, EQ08V1_118, EQ08V1_119, EQ08V1_120
- `EQ08-ORDER-ADD-125-128` → EQ08V1_125, EQ08V1_126, EQ08V1_127, EQ08V1_128
- `EQ08-ORDER-MULTIPLY-129-132` → EQ08V1_129, EQ08V1_130, EQ08V1_131, EQ08V1_132

## 132 item mappings

Format:
`ID|legacy_tags|primary|family|supporting|evidence|clone|question|correct_answer|note`

```text
EQ08V1_001|nghiem-phuong-trinh|nghiem-phuong-trinh|EQ-BASIC||MCQ_RECOGNITION_ONLY|EQ08-SOLUTION-CONCEPT-001-006|Nhận xét đúng về phương trình \(2x+1=7\) là:|\(x=3\) là một nghiệm vì thay vào làm hai vế bằng nhau.|
EQ08V1_002|nghiem-phuong-trinh|nghiem-phuong-trinh|EQ-BASIC||MCQ_RECOGNITION_ONLY|EQ08-SOLUTION-CONCEPT-001-006|Nhận xét đúng về phương trình \(3x-5=10\) là:|\(x=5\) là một nghiệm vì thay vào làm hai vế bằng nhau.|
EQ08V1_003|nghiem-phuong-trinh|nghiem-phuong-trinh|EQ-BASIC||MCQ_RECOGNITION_ONLY|EQ08-SOLUTION-CONCEPT-001-006|Nhận xét đúng về phương trình \(x^2-4=0\) là:|\(x=2\) là một nghiệm vì thay vào làm hai vế bằng nhau.|
EQ08V1_004|nghiem-phuong-trinh|nghiem-phuong-trinh|EQ-BASIC||MCQ_RECOGNITION_ONLY|EQ08-SOLUTION-CONCEPT-001-006|Nhận xét đúng về phương trình \(5-x=1\) là:|\(x=4\) là một nghiệm vì thay vào làm hai vế bằng nhau.|
EQ08V1_005|nghiem-phuong-trinh|nghiem-phuong-trinh|EQ-BASIC||MCQ_RECOGNITION_ONLY|EQ08-SOLUTION-CONCEPT-001-006|Nhận xét đúng về phương trình \(4x=20\) là:|\(x=5\) là một nghiệm vì thay vào làm hai vế bằng nhau.|
EQ08V1_006|nghiem-phuong-trinh|nghiem-phuong-trinh|EQ-BASIC||MCQ_RECOGNITION_ONLY|EQ08-SOLUTION-CONCEPT-001-006|Nhận xét đúng về phương trình \(x(x-3)=0\) là:|\(x=0\) là một nghiệm vì thay vào làm hai vế bằng nhau.|
EQ08V1_007|pt-bac-nhat|pt-bac-nhat|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-SIMPLE-007-022|Giải phương trình \(2x-8=-10\).|\(x=-1\)|
EQ08V1_008|pt-bac-nhat|pt-bac-nhat|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-SIMPLE-007-022|Giải phương trình \(3x+2=-13\).|\(x=-5\)|
EQ08V1_009|pt-bac-nhat|pt-bac-nhat|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-SIMPLE-007-022|Giải phương trình \(3x-8=4\).|\(x=4\)|
EQ08V1_010|pt-bac-nhat|pt-bac-nhat|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-SIMPLE-007-022|Giải phương trình \(2x+4=-4\).|\(x=-4\)|
EQ08V1_011|pt-bac-nhat|pt-bac-nhat|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-SIMPLE-007-022|Giải phương trình \(6x+2=-28\).|\(x=-5\)|
EQ08V1_012|pt-bac-nhat|pt-bac-nhat|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-SIMPLE-007-022|Giải phương trình \(3x+7=1\).|\(x=-2\)|
EQ08V1_013|pt-bac-nhat|pt-bac-nhat|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-SIMPLE-007-022|Giải phương trình \(3x+2=14\).|\(x=4\)|
EQ08V1_014|pt-bac-nhat|pt-bac-nhat|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-SIMPLE-007-022|Giải phương trình \(4x+4=16\).|\(x=3\)|
EQ08V1_015|pt-bac-nhat|pt-bac-nhat|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-SIMPLE-007-022|Giải phương trình \(7x-3=11\).|\(x=2\)|
EQ08V1_016|pt-bac-nhat|pt-bac-nhat|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-SIMPLE-007-022|Giải phương trình \(6x-8=22\).|\(x=5\)|
EQ08V1_017|pt-bac-nhat|pt-bac-nhat|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-SIMPLE-007-022|Giải phương trình \(4x+4=-16\).|\(x=-5\)|
EQ08V1_018|pt-bac-nhat|pt-bac-nhat|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-SIMPLE-007-022|Giải phương trình \(2x+7=17\).|\(x=5\)|
EQ08V1_019|pt-bac-nhat|pt-bac-nhat|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-SIMPLE-007-022|Giải phương trình \(2x+4=14\).|\(x=5\)|
EQ08V1_020|pt-bac-nhat|pt-bac-nhat|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-SIMPLE-007-022|Giải phương trình \(4x-3=-19\).|\(x=-4\)|
EQ08V1_021|pt-bac-nhat|pt-bac-nhat|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-SIMPLE-007-022|Giải phương trình \(7x-5=-19\).|\(x=-2\)|
EQ08V1_022|pt-bac-nhat|pt-bac-nhat|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-SIMPLE-007-022|Giải phương trình \(2x+2=0\).|\(x=-1\)|
EQ08V1_023|bien-doi-pt-nhieu-buoc,pt-bac-nhat|pt-bac-nhat|EQ-BASIC|bien-doi-pt-nhieu-buoc|MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-MULTISTEP-023-034|Giải phương trình \(2(x-1)+2(x+2)=10\).|\(x=2\)|
EQ08V1_024|bien-doi-pt-nhieu-buoc,pt-bac-nhat|pt-bac-nhat|EQ-BASIC|bien-doi-pt-nhieu-buoc|MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-MULTISTEP-023-034|Giải phương trình \(4(x-4)+3(x+2)=-31\).|\(x=-3\)|
EQ08V1_025|bien-doi-pt-nhieu-buoc,pt-bac-nhat|pt-bac-nhat|EQ-BASIC|bien-doi-pt-nhieu-buoc|MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-MULTISTEP-023-034|Giải phương trình \(4(x-4)+2(x+2)=0\).|\(x=2\)|
EQ08V1_026|bien-doi-pt-nhieu-buoc,pt-bac-nhat|pt-bac-nhat|EQ-BASIC|bien-doi-pt-nhieu-buoc|MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-MULTISTEP-023-034|Giải phương trình \(4(x-3)+2(x+1)=-22\).|\(x=-2\)|
EQ08V1_027|bien-doi-pt-nhieu-buoc,pt-bac-nhat|pt-bac-nhat|EQ-BASIC|bien-doi-pt-nhieu-buoc|MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-MULTISTEP-023-034|Giải phương trình \(3(x-3)+2(x+2)=15\).|\(x=4\)|
EQ08V1_028|bien-doi-pt-nhieu-buoc,pt-bac-nhat|pt-bac-nhat|EQ-BASIC|bien-doi-pt-nhieu-buoc|MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-MULTISTEP-023-034|Giải phương trình \(3(x-4)+2(x+3)=-1\).|\(x=1\)|
EQ08V1_029|bien-doi-pt-nhieu-buoc,pt-bac-nhat|pt-bac-nhat|EQ-BASIC|bien-doi-pt-nhieu-buoc|MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-MULTISTEP-023-034|Giải phương trình \(4(x-2)+1(x+2)=-21\).|\(x=-3\)|
EQ08V1_030|bien-doi-pt-nhieu-buoc,pt-bac-nhat|pt-bac-nhat|EQ-BASIC|bien-doi-pt-nhieu-buoc|MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-MULTISTEP-023-034|Giải phương trình \(2(x-3)+3(x+3)=28\).|\(x=5\)|
EQ08V1_031|bien-doi-pt-nhieu-buoc,pt-bac-nhat|pt-bac-nhat|EQ-BASIC|bien-doi-pt-nhieu-buoc|MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-MULTISTEP-023-034|Giải phương trình \(4(x-1)+1(x+3)=9\).|\(x=2\)|
EQ08V1_032|bien-doi-pt-nhieu-buoc,pt-bac-nhat|pt-bac-nhat|EQ-BASIC|bien-doi-pt-nhieu-buoc|MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-MULTISTEP-023-034|Giải phương trình \(4(x-2)+1(x+1)=-12\).|\(x=-1\)|
EQ08V1_033|bien-doi-pt-nhieu-buoc,pt-bac-nhat|pt-bac-nhat|EQ-BASIC|bien-doi-pt-nhieu-buoc|MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-MULTISTEP-023-034|Giải phương trình \(2(x-4)+1(x+1)=-1\).|\(x=2\)|
EQ08V1_034|bien-doi-pt-nhieu-buoc,pt-bac-nhat|pt-bac-nhat|EQ-BASIC|bien-doi-pt-nhieu-buoc|MCQ_FINAL_ANSWER_ONLY|EQ08-LINEAR-MULTISTEP-023-034|Giải phương trình \(4(x-1)+1(x+2)=18\).|\(x=4\)|
EQ08V1_035|pt-tich|pt-tich|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-PRODUCT-035-046|Giải phương trình \((x-0)(x-5)=0\).|\(x=0\;\text{hoặc}\;x=5\)|
EQ08V1_036|pt-tich|pt-tich|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-PRODUCT-035-046|Giải phương trình \((x+1)(x-3)=0\).|\(x=-1\;\text{hoặc}\;x=3\)|
EQ08V1_037|pt-tich|pt-tich|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-PRODUCT-035-046|Giải phương trình \((x-2)(x-6)=0\).|\(x=2\;\text{hoặc}\;x=6\)|
EQ08V1_038|pt-tich|pt-tich|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-PRODUCT-035-046|Giải phương trình \((x+4)(x-1)=0\).|\(x=-4\;\text{hoặc}\;x=1\)|
EQ08V1_039|pt-tich|pt-tich|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-PRODUCT-035-046|Giải phương trình \((x-3)(x-7)=0\).|\(x=3\;\text{hoặc}\;x=7\)|
EQ08V1_040|pt-tich|pt-tich|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-PRODUCT-035-046|Giải phương trình \((x+2)(x-4)=0\).|\(x=-2\;\text{hoặc}\;x=4\)|
EQ08V1_041|pt-tich|pt-tich|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-PRODUCT-035-046|Giải phương trình \((x-1)(x-5)=0\).|\(x=1\;\text{hoặc}\;x=5\)|
EQ08V1_042|pt-tich|pt-tich|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-PRODUCT-035-046|Giải phương trình \((x+3)(x-2)=0\).|\(x=-3\;\text{hoặc}\;x=2\)|
EQ08V1_043|pt-tich|pt-tich|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-PRODUCT-035-046|Giải phương trình \((x-4)(x-8)=0\).|\(x=4\;\text{hoặc}\;x=8\)|
EQ08V1_044|pt-tich|pt-tich|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-PRODUCT-035-046|Giải phương trình \((x+5)(x+1)=0\).|\(x=-5\;\text{hoặc}\;x=-1\)|
EQ08V1_045|pt-tich|pt-tich|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-PRODUCT-035-046|Giải phương trình \((x-0)(x+6)=0\).|\(x=0\;\text{hoặc}\;x=-6\)|
EQ08V1_046|pt-tich|pt-tich|EQ-BASIC||MCQ_FINAL_ANSWER_ONLY|EQ08-PRODUCT-035-046|Giải phương trình \((x+2)(x+7)=0\).|\(x=-2\;\text{hoặc}\;x=-7\)|
EQ08V1_047|dkxd-phuong-trinh-mau|dkxd-phuong-trinh-mau|EQ-RATIONAL||MCQ_RECOGNITION_ONLY|EQ08-RATIONAL-DOMAIN-047-054|Điều kiện xác định của phương trình \(\frac{x+1}{x--4}=2\) là:|\(x\ne -4\)|
EQ08V1_048|dkxd-phuong-trinh-mau|dkxd-phuong-trinh-mau|EQ-RATIONAL||MCQ_RECOGNITION_ONLY|EQ08-RATIONAL-DOMAIN-047-054|Điều kiện xác định của phương trình \(\frac{x+1}{x--3}=2\) là:|\(x\ne -3\)|
EQ08V1_049|dkxd-phuong-trinh-mau|dkxd-phuong-trinh-mau|EQ-RATIONAL||MCQ_RECOGNITION_ONLY|EQ08-RATIONAL-DOMAIN-047-054|Điều kiện xác định của phương trình \(\frac{x+1}{x--2}=2\) là:|\(x\ne -2\)|
EQ08V1_050|dkxd-phuong-trinh-mau|dkxd-phuong-trinh-mau|EQ-RATIONAL||MCQ_RECOGNITION_ONLY|EQ08-RATIONAL-DOMAIN-047-054|Điều kiện xác định của phương trình \(\frac{x+1}{x--1}=2\) là:|\(x\ne -1\)|
EQ08V1_051|dkxd-phuong-trinh-mau|dkxd-phuong-trinh-mau|EQ-RATIONAL||MCQ_RECOGNITION_ONLY|EQ08-RATIONAL-DOMAIN-047-054|Điều kiện xác định của phương trình \(\frac{x+1}{x-1}=2\) là:|\(x\ne 1\)|
EQ08V1_052|dkxd-phuong-trinh-mau|dkxd-phuong-trinh-mau|EQ-RATIONAL||MCQ_RECOGNITION_ONLY|EQ08-RATIONAL-DOMAIN-047-054|Điều kiện xác định của phương trình \(\frac{x+1}{x-2}=2\) là:|\(x\ne 2\)|
EQ08V1_053|dkxd-phuong-trinh-mau|dkxd-phuong-trinh-mau|EQ-RATIONAL||MCQ_RECOGNITION_ONLY|EQ08-RATIONAL-DOMAIN-047-054|Điều kiện xác định của phương trình \(\frac{x+1}{x-3}=2\) là:|\(x\ne 3\)|
EQ08V1_054|dkxd-phuong-trinh-mau|dkxd-phuong-trinh-mau|EQ-RATIONAL||MCQ_RECOGNITION_ONLY|EQ08-RATIONAL-DOMAIN-047-054|Điều kiện xác định của phương trình \(\frac{x+1}{x-4}=2\) là:|\(x\ne 4\)|
EQ08V1_055|khu-mau-phuong-trinh,dkxd-phuong-trinh-mau|khu-mau-phuong-trinh|EQ-RATIONAL|dkxd-phuong-trinh-mau|MCQ_FINAL_ANSWER_ONLY|EQ08-RATIONAL-RECIPROCAL-055-060|Giải phương trình \(\frac1{x-1}=3\).|\(x=\frac{4}{3}\)|
EQ08V1_056|khu-mau-phuong-trinh,dkxd-phuong-trinh-mau|khu-mau-phuong-trinh|EQ-RATIONAL|dkxd-phuong-trinh-mau|MCQ_FINAL_ANSWER_ONLY|EQ08-RATIONAL-RECIPROCAL-055-060|Giải phương trình \(\frac1{x-2}=3\).|\(x=\frac{7}{3}\)|
EQ08V1_057|khu-mau-phuong-trinh,dkxd-phuong-trinh-mau|khu-mau-phuong-trinh|EQ-RATIONAL|dkxd-phuong-trinh-mau|MCQ_FINAL_ANSWER_ONLY|EQ08-RATIONAL-RECIPROCAL-055-060|Giải phương trình \(\frac1{x-3}=2\).|\(x=\frac{7}{2}\)|
EQ08V1_058|khu-mau-phuong-trinh,dkxd-phuong-trinh-mau|khu-mau-phuong-trinh|EQ-RATIONAL|dkxd-phuong-trinh-mau|MCQ_FINAL_ANSWER_ONLY|EQ08-RATIONAL-RECIPROCAL-055-060|Giải phương trình \(\frac1{x-4}=2\).|\(x=\frac{9}{2}\)|
EQ08V1_059|khu-mau-phuong-trinh,dkxd-phuong-trinh-mau|khu-mau-phuong-trinh|EQ-RATIONAL|dkxd-phuong-trinh-mau|MCQ_FINAL_ANSWER_ONLY|EQ08-RATIONAL-RECIPROCAL-055-060|Giải phương trình \(\frac1{x-5}=3\).|\(x=\frac{16}{3}\)|
EQ08V1_060|khu-mau-phuong-trinh,dkxd-phuong-trinh-mau|khu-mau-phuong-trinh|EQ-RATIONAL|dkxd-phuong-trinh-mau|MCQ_FINAL_ANSWER_ONLY|EQ08-RATIONAL-RECIPROCAL-055-060|Giải phương trình \(\frac1{x-6}=3\).|\(x=\frac{19}{3}\)|
EQ08V1_061|khu-mau-phuong-trinh,dkxd-phuong-trinh-mau|khu-mau-phuong-trinh|EQ-RATIONAL|dkxd-phuong-trinh-mau|MCQ_FINAL_ANSWER_ONLY|EQ08-RATIONAL-LINEAR-061-066|Giải phương trình \(\frac{x+3}{x-1}=4\).|\(x=\frac{7}{3}\)|
EQ08V1_062|khu-mau-phuong-trinh,dkxd-phuong-trinh-mau|khu-mau-phuong-trinh|EQ-RATIONAL|dkxd-phuong-trinh-mau|MCQ_FINAL_ANSWER_ONLY|EQ08-RATIONAL-LINEAR-061-066|Giải phương trình \(\frac{x+3}{x-2}=4\).|\(x=\frac{11}{3}\)|
EQ08V1_063|khu-mau-phuong-trinh,dkxd-phuong-trinh-mau|khu-mau-phuong-trinh|EQ-RATIONAL|dkxd-phuong-trinh-mau|MCQ_FINAL_ANSWER_ONLY|EQ08-RATIONAL-LINEAR-061-066|Giải phương trình \(\frac{x+1}{x-3}=3\).|\(x=5\)|
EQ08V1_064|khu-mau-phuong-trinh,dkxd-phuong-trinh-mau|khu-mau-phuong-trinh|EQ-RATIONAL|dkxd-phuong-trinh-mau|MCQ_FINAL_ANSWER_ONLY|EQ08-RATIONAL-LINEAR-061-066|Giải phương trình \(\frac{x+4}{x-4}=4\).|\(x=\frac{20}{3}\)|
EQ08V1_065|khu-mau-phuong-trinh,dkxd-phuong-trinh-mau|khu-mau-phuong-trinh|EQ-RATIONAL|dkxd-phuong-trinh-mau|MCQ_FINAL_ANSWER_ONLY|EQ08-RATIONAL-LINEAR-061-066|Giải phương trình \(\frac{x+1}{x-5}=2\).|\(x=11\)|
EQ08V1_066|khu-mau-phuong-trinh,dkxd-phuong-trinh-mau|khu-mau-phuong-trinh|EQ-RATIONAL|dkxd-phuong-trinh-mau|MCQ_FINAL_ANSWER_ONLY|EQ08-RATIONAL-LINEAR-061-066|Giải phương trình \(\frac{x+4}{x-6}=3\).|\(x=11\)|
EQ08V1_067|doi-chieu-nghiem,dkxd-phuong-trinh-mau|doi-chieu-nghiem|EQ-RATIONAL|dkxd-phuong-trinh-mau|MCQ_RECOGNITION_ONLY|EQ08-RATIONAL-REJECT-067-072|Trong quá trình giải \(\frac{x^2-4}{x-2}=0\), nhận xét nào đúng?|\(x=2\) bị loại vì làm mẫu bằng 0.|
EQ08V1_068|doi-chieu-nghiem,dkxd-phuong-trinh-mau|doi-chieu-nghiem|EQ-RATIONAL|dkxd-phuong-trinh-mau|MCQ_RECOGNITION_ONLY|EQ08-RATIONAL-REJECT-067-072|Trong quá trình giải \(\frac{x-3}{x-3}=1\), nhận xét nào đúng?|\(x=3\) bị loại vì biểu thức ban đầu không xác định.|
EQ08V1_069|doi-chieu-nghiem,dkxd-phuong-trinh-mau|doi-chieu-nghiem|EQ-RATIONAL|dkxd-phuong-trinh-mau|MCQ_RECOGNITION_ONLY|EQ08-RATIONAL-REJECT-067-072|Trong quá trình giải \(\frac{x+1}{x+1}=1\), nhận xét nào đúng?|\(x=-1\) bị loại vì mẫu bằng 0.|
EQ08V1_070|doi-chieu-nghiem,dkxd-phuong-trinh-mau|doi-chieu-nghiem|EQ-RATIONAL|dkxd-phuong-trinh-mau|MCQ_RECOGNITION_ONLY|EQ08-RATIONAL-REJECT-067-072|Trong quá trình giải \(\frac{x^2-9}{x-3}=6\), nhận xét nào đúng?|\(x=3\) bị loại dù biểu thức rút gọn cho x+3=6.|
EQ08V1_071|doi-chieu-nghiem,dkxd-phuong-trinh-mau|doi-chieu-nghiem|EQ-RATIONAL|dkxd-phuong-trinh-mau|MCQ_RECOGNITION_ONLY|EQ08-RATIONAL-REJECT-067-072|Trong quá trình giải \(\frac{x(x-2)}{x}=0\), nhận xét nào đúng?|\(x=0\) bị loại vì mẫu x bằng 0.|
EQ08V1_072|doi-chieu-nghiem,dkxd-phuong-trinh-mau|doi-chieu-nghiem|EQ-RATIONAL|dkxd-phuong-trinh-mau|MCQ_RECOGNITION_ONLY|EQ08-RATIONAL-REJECT-067-072|Trong quá trình giải \(\frac{(x-5)(x+1)}{x-5}=6\), nhận xét nào đúng?|\(x=5\) bị loại vì mẫu ban đầu bằng 0.|
EQ08V1_073|bpt-bac-nhat|bpt-bac-nhat|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-SIMPLE-073-086|Giải bất phương trình \(3x-6 \le -12\).|\(x \le -2\)|
EQ08V1_074|bpt-bac-nhat|bpt-bac-nhat|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-SIMPLE-073-086|Giải bất phương trình \(3x-6 \ge -3\).|\(x \ge 1\)|
EQ08V1_075|bpt-bac-nhat|bpt-bac-nhat|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-SIMPLE-073-086|Giải bất phương trình \(3x+7 > 13\).|\(x > 2\)|
EQ08V1_076|bpt-bac-nhat|bpt-bac-nhat|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-SIMPLE-073-086|Giải bất phương trình \(3x+5 > 11\).|\(x > 2\)|
EQ08V1_077|bpt-bac-nhat|bpt-bac-nhat|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-SIMPLE-073-086|Giải bất phương trình \(3x+7 < -5\).|\(x < -4\)|
EQ08V1_078|bpt-bac-nhat|bpt-bac-nhat|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-SIMPLE-073-086|Giải bất phương trình \(5x+5 < 25\).|\(x < 4\)|
EQ08V1_079|bpt-bac-nhat|bpt-bac-nhat|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-SIMPLE-073-086|Giải bất phương trình \(2x-6 < -14\).|\(x < -4\)|
EQ08V1_080|bpt-bac-nhat|bpt-bac-nhat|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-SIMPLE-073-086|Giải bất phương trình \(3x+5 > 14\).|\(x > 3\)|
EQ08V1_081|bpt-bac-nhat|bpt-bac-nhat|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-SIMPLE-073-086|Giải bất phương trình \(2x-3 \le 3\).|\(x \le 3\)|
EQ08V1_082|bpt-bac-nhat|bpt-bac-nhat|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-SIMPLE-073-086|Giải bất phương trình \(4x-3 \ge 5\).|\(x \ge 2\)|
EQ08V1_083|bpt-bac-nhat|bpt-bac-nhat|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-SIMPLE-073-086|Giải bất phương trình \(6x-6 < -30\).|\(x < -4\)|
EQ08V1_084|bpt-bac-nhat|bpt-bac-nhat|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-SIMPLE-073-086|Giải bất phương trình \(4x+2 < 22\).|\(x < 5\)|
EQ08V1_085|bpt-bac-nhat|bpt-bac-nhat|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-SIMPLE-073-086|Giải bất phương trình \(4x+7 < 11\).|\(x < 1\)|
EQ08V1_086|bpt-bac-nhat|bpt-bac-nhat|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-SIMPLE-073-086|Giải bất phương trình \(2x+7 \ge 9\).|\(x \ge 1\)|
EQ08V1_087|doi-chieu-bpt,bpt-bac-nhat|doi-chieu-bpt|INEQ-SOLVE|bpt-bac-nhat|MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-FLIP-087-094|Giải bất phương trình \(-3x > 12\).|\(x < -4\)|
EQ08V1_088|doi-chieu-bpt,bpt-bac-nhat|doi-chieu-bpt|INEQ-SOLVE|bpt-bac-nhat|MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-FLIP-087-094|Giải bất phương trình \(-2x \ge 4\).|\(x \le -2\)|
EQ08V1_089|doi-chieu-bpt,bpt-bac-nhat|doi-chieu-bpt|INEQ-SOLVE|bpt-bac-nhat|MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-FLIP-087-094|Giải bất phương trình \(-3x \le -3\).|\(x \ge 1\)|
EQ08V1_090|doi-chieu-bpt,bpt-bac-nhat|doi-chieu-bpt|INEQ-SOLVE|bpt-bac-nhat|MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-FLIP-087-094|Giải bất phương trình \(-2x > 8\).|\(x < -4\)|
EQ08V1_091|doi-chieu-bpt,bpt-bac-nhat|doi-chieu-bpt|INEQ-SOLVE|bpt-bac-nhat|MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-FLIP-087-094|Giải bất phương trình \(-4x \ge -12\).|\(x \le 3\)|
EQ08V1_092|doi-chieu-bpt,bpt-bac-nhat|doi-chieu-bpt|INEQ-SOLVE|bpt-bac-nhat|MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-FLIP-087-094|Giải bất phương trình \(-2x \le 2\).|\(x \ge -1\)|
EQ08V1_093|doi-chieu-bpt,bpt-bac-nhat|doi-chieu-bpt|INEQ-SOLVE|bpt-bac-nhat|MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-FLIP-087-094|Giải bất phương trình \(-2x \ge -4\).|\(x \le 2\)|
EQ08V1_094|doi-chieu-bpt,bpt-bac-nhat|doi-chieu-bpt|INEQ-SOLVE|bpt-bac-nhat|MCQ_FINAL_ANSWER_ONLY|EQ08-INEQ-FLIP-087-094|Giải bất phương trình \(-4x \ge -4\).|\(x \le 1\)|
EQ08V1_095|bieu-dien-tap-nghiem|bieu-dien-tap-nghiem|INEQ-SOLVE||MCQ_RECOGNITION_ONLY|EQ08-NUMBERLINE-095-100|Cách biểu diễn đúng tập nghiệm \(x>2\) trên trục số là:|Điểm 2 không lấy, tô về phía bên phải.|
EQ08V1_096|bieu-dien-tap-nghiem|bieu-dien-tap-nghiem|INEQ-SOLVE||MCQ_RECOGNITION_ONLY|EQ08-NUMBERLINE-095-100|Cách biểu diễn đúng tập nghiệm \(x\ge -1\) trên trục số là:|Điểm -1 được lấy, tô về phía bên phải.|
EQ08V1_097|bieu-dien-tap-nghiem|bieu-dien-tap-nghiem|INEQ-SOLVE||MCQ_RECOGNITION_ONLY|EQ08-NUMBERLINE-095-100|Cách biểu diễn đúng tập nghiệm \(x<3\) trên trục số là:|Điểm 3 không lấy, tô về phía bên trái.|
EQ08V1_098|bieu-dien-tap-nghiem|bieu-dien-tap-nghiem|INEQ-SOLVE||MCQ_RECOGNITION_ONLY|EQ08-NUMBERLINE-095-100|Cách biểu diễn đúng tập nghiệm \(x\le0\) trên trục số là:|Điểm 0 được lấy, tô về phía bên trái.|
EQ08V1_099|bieu-dien-tap-nghiem|bieu-dien-tap-nghiem|INEQ-SOLVE||MCQ_RECOGNITION_ONLY|EQ08-NUMBERLINE-095-100|Cách biểu diễn đúng tập nghiệm \(x>-4\) trên trục số là:|Điểm -4 không lấy, tô về phía bên phải.|
EQ08V1_100|bieu-dien-tap-nghiem|bieu-dien-tap-nghiem|INEQ-SOLVE||MCQ_RECOGNITION_ONLY|EQ08-NUMBERLINE-095-100|Cách biểu diễn đúng tập nghiệm \(x\le5\) trên trục số là:|Điểm 5 được lấy, tô về phía bên trái.|
EQ08V1_101|giao-tap-nghiem|giao-tap-nghiem|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INTERSECTION-101-106|Tìm giao của hai điều kiện \(x>1\) và \(x\le5\).|\(1<x\le5\)|
EQ08V1_102|giao-tap-nghiem|giao-tap-nghiem|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INTERSECTION-101-106|Tìm giao của hai điều kiện \(x\ge-2\) và \(x<3\).|\(-2\le x<3\)|
EQ08V1_103|giao-tap-nghiem|giao-tap-nghiem|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INTERSECTION-101-106|Tìm giao của hai điều kiện \(x>-4\) và \(x<0\).|\(-4<x<0\)|
EQ08V1_104|giao-tap-nghiem|giao-tap-nghiem|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INTERSECTION-101-106|Tìm giao của hai điều kiện \(x\ge1\) và \(x\le1\).|\(x=1\)|
EQ08V1_105|giao-tap-nghiem|giao-tap-nghiem|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INTERSECTION-101-106|Tìm giao của hai điều kiện \(x>2\) và \(x>5\).|\(x>5\)|
EQ08V1_106|giao-tap-nghiem|giao-tap-nghiem|INEQ-SOLVE||MCQ_FINAL_ANSWER_ONLY|EQ08-INTERSECTION-101-106|Tìm giao của hai điều kiện \(x<4\) và \(x\le2\).|\(x\le2\)|
EQ08V1_107|lap-phuong-trinh|lap-phuong-trinh|EQ-MODEL||MCQ_MODELING_PARTIAL_FINAL_ANSWER||Tổng của một số và 7 bằng 19. Số đó là:|12|Final-answer MCQ supports modeling evidence but cannot certify the full equation-construction process; written evidence remains required for full skill certification.
EQ08V1_108|lap-phuong-trinh|lap-phuong-trinh|EQ-MODEL||MCQ_MODELING_PARTIAL_FINAL_ANSWER||Một số gấp 3 lần rồi bớt 5 được 16. Số đó là:|7|Final-answer MCQ supports modeling evidence but cannot certify the full equation-construction process; written evidence remains required for full skill certification.
EQ08V1_109|lap-phuong-trinh|lap-phuong-trinh|EQ-MODEL||MCQ_MODELING_PARTIAL_FINAL_ANSWER||Hai lần một số cộng 4 bằng 18. Số đó là:|7|Final-answer MCQ supports modeling evidence but cannot certify the full equation-construction process; written evidence remains required for full skill certification.
EQ08V1_110|lap-phuong-trinh|lap-phuong-trinh|EQ-MODEL||MCQ_MODELING_PARTIAL_FINAL_ANSWER||Mẹ hơn con 24 tuổi và tổng tuổi hai mẹ con là 50. Tuổi con là:|13|Final-answer MCQ supports modeling evidence but cannot certify the full equation-construction process; written evidence remains required for full skill certification.
EQ08V1_111|lap-phuong-trinh|lap-phuong-trinh|EQ-MODEL||MCQ_MODELING_PARTIAL_FINAL_ANSWER||Chu vi hình chữ nhật là 30 cm, chiều dài hơn chiều rộng 3 cm. Chiều rộng là:|6|Final-answer MCQ supports modeling evidence but cannot certify the full equation-construction process; written evidence remains required for full skill certification.
EQ08V1_112|lap-phuong-trinh|lap-phuong-trinh|EQ-MODEL||MCQ_MODELING_PARTIAL_FINAL_ANSWER||Một số khi chia cho 4 rồi cộng 3 được 8. Số đó là:|20|Final-answer MCQ supports modeling evidence but cannot certify the full equation-construction process; written evidence remains required for full skill certification.
EQ08V1_113|lap-bat-phuong-trinh|lap-bat-phuong-trinh|INEQ-MODEL||MCQ_MODELING_PARTIAL_FINAL_ANSWER|EQ08-INEQ-MODEL-113-116|Bạn có 200.000 đồng, đã dùng 60.000 đồng. Mỗi vé giá 35.000 đồng. Số vé tối đa có thể mua là:|4|Final-answer MCQ supports modeling evidence but cannot certify the full inequality-construction process; written evidence remains required for full skill certification.
EQ08V1_114|lap-bat-phuong-trinh|lap-bat-phuong-trinh|INEQ-MODEL||MCQ_MODELING_PARTIAL_FINAL_ANSWER|EQ08-INEQ-MODEL-113-116|Một thang máy chịu tối đa 600 kg. Đã có 3 người tổng 210 kg; mỗi kiện hàng 65 kg. Số kiện tối đa là:|6|Final-answer MCQ supports modeling evidence but cannot certify the full inequality-construction process; written evidence remains required for full skill certification.
EQ08V1_115|lap-bat-phuong-trinh|lap-bat-phuong-trinh|INEQ-MODEL||MCQ_MODELING_PARTIAL_FINAL_ANSWER|EQ08-INEQ-MODEL-113-116|Bạn cần ít nhất 120 điểm, đã có 78 điểm. Mỗi bài đúng thêm 7 điểm. Cần đúng ít nhất bao nhiêu bài nữa?|6|Final-answer MCQ supports modeling evidence but cannot certify the full inequality-construction process; written evidence remains required for full skill certification.
EQ08V1_116|lap-bat-phuong-trinh|lap-bat-phuong-trinh|INEQ-MODEL||MCQ_MODELING_PARTIAL_FINAL_ANSWER|EQ08-INEQ-MODEL-113-116|Một xe chở tối đa 1000 kg, hàng hiện có 640 kg. Mỗi thùng 45 kg. Chở thêm tối đa bao nhiêu thùng?|8|Final-answer MCQ supports modeling evidence but cannot certify the full inequality-construction process; written evidence remains required for full skill certification.
EQ08V1_117|tham-so-co-ban|tham-so-co-ban|EQ-PARAM||MCQ_FINAL_ANSWER_ONLY|EQ08-PARAM-117-120|Biện luận cơ bản phương trình \((m-1)x=2m+3\).|Khi \(m\ne1\), phương trình có nghiệm duy nhất; khi \(m=1\), phương trình vô nghiệm.|
EQ08V1_118|tham-so-co-ban|tham-so-co-ban|EQ-PARAM||MCQ_FINAL_ANSWER_ONLY|EQ08-PARAM-117-120|Biện luận cơ bản phương trình \((m-2)x=m+1\).|Khi \(m=2\), phương trình vô nghiệm; khi \(m\ne2\), có nghiệm duy nhất.|
EQ08V1_119|tham-so-co-ban|tham-so-co-ban|EQ-PARAM||MCQ_FINAL_ANSWER_ONLY|EQ08-PARAM-117-120|Biện luận cơ bản phương trình \(mx=0\).|Nếu \(m=0\), mọi x đều là nghiệm; nếu \(m\ne0\), nghiệm duy nhất là \(x=0\).|
EQ08V1_120|tham-so-co-ban|tham-so-co-ban|EQ-PARAM||MCQ_FINAL_ANSWER_ONLY|EQ08-PARAM-117-120|Biện luận cơ bản phương trình \((m+3)x=m+3\).|Nếu \(m=-3\), mọi x đều là nghiệm; nếu \(m\ne-3\), nghiệm duy nhất là \(x=1\).|
EQ08V1_121|bat-dang-thuc|bat-dang-thuc|INEQ-ORDER||MCQ_RECOGNITION_ONLY||Bất đẳng thức nào biểu diễn đúng câu “x lớn hơn 3”?|\(x>3\)|
EQ08V1_122|bat-dang-thuc|bat-dang-thuc|INEQ-ORDER||MCQ_RECOGNITION_ONLY||Khẳng định nào đúng?|\(-4<1\)|
EQ08V1_123|bat-dang-thuc|bat-dang-thuc|INEQ-ORDER||MCQ_RECOGNITION_ONLY||Bất đẳng thức \(2x+1\le7\) có nghĩa là:|\(2x+1\) nhỏ hơn hoặc bằng 7.|
EQ08V1_124|bat-dang-thuc|bat-dang-thuc|INEQ-ORDER||MCQ_RECOGNITION_ONLY||Nếu \(a=b\) thì phát biểu nào KHÔNG phải là bất đẳng thức nghiêm đúng giữa a và b?|\(a<b\)|
EQ08V1_125|tinh-chat-thu-tu-phep-cong|tinh-chat-thu-tu-phep-cong|INEQ-ORDER||MCQ_FINAL_ANSWER_ONLY|EQ08-ORDER-ADD-125-128|Nếu \(a<b\), khi cộng 5 vào hai vế ta được:|\(a+5<b+5\)|
EQ08V1_126|tinh-chat-thu-tu-phep-cong|tinh-chat-thu-tu-phep-cong|INEQ-ORDER||MCQ_FINAL_ANSWER_ONLY|EQ08-ORDER-ADD-125-128|Từ \(x-3<2\), cộng 3 vào hai vế ta được:|\(x<5\)|
EQ08V1_127|tinh-chat-thu-tu-phep-cong|tinh-chat-thu-tu-phep-cong|INEQ-ORDER||MCQ_FINAL_ANSWER_ONLY|EQ08-ORDER-ADD-125-128|Từ \(-2<4\), khẳng định nào đúng sau khi cộng 7 vào hai vế?|\(5<11\)|
EQ08V1_128|tinh-chat-thu-tu-phep-cong|tinh-chat-thu-tu-phep-cong|INEQ-ORDER||MCQ_FINAL_ANSWER_ONLY|EQ08-ORDER-ADD-125-128|Nếu \(m\le n\), phép biến đổi nào luôn đúng?|\(m-c\le n-c\) với mọi c|
EQ08V1_129|tinh-chat-thu-tu-phep-nhan|tinh-chat-thu-tu-phep-nhan|INEQ-ORDER||MCQ_FINAL_ANSWER_ONLY|EQ08-ORDER-MULTIPLY-129-132|Nếu \(a<b\) và \(c>0\), khẳng định đúng là:|\(ac<bc\)|
EQ08V1_130|tinh-chat-thu-tu-phep-nhan|tinh-chat-thu-tu-phep-nhan|INEQ-ORDER||MCQ_FINAL_ANSWER_ONLY|EQ08-ORDER-MULTIPLY-129-132|Nếu \(a<b\) và \(c<0\), khẳng định đúng là:|\(ac>bc\)|
EQ08V1_131|tinh-chat-thu-tu-phep-nhan|tinh-chat-thu-tu-phep-nhan|INEQ-ORDER||MCQ_FINAL_ANSWER_ONLY|EQ08-ORDER-MULTIPLY-129-132|Từ \(-2x<6\), chia hai vế cho \(-2\) ta được:|\(x>-3\)|
EQ08V1_132|tinh-chat-thu-tu-phep-nhan|tinh-chat-thu-tu-phep-nhan|INEQ-ORDER||MCQ_FINAL_ANSWER_ONLY|EQ08-ORDER-MULTIPLY-129-132|Từ \(3x\ge9\), chia hai vế cho 3 ta được:|\(x\ge3\)|
```

## Required output

Return exactly these machine-checkable lines.
`PACKET|MATH-SKILL-CORE08-S2-OVERLAY-R1-20261002|PASS`
or replace PASS with `REVISIONS_REQUIRED` / `INSUFFICIENT_EVIDENCE`.
`COVERAGE|132|<reviewed_count>|<revision_count>|<missing_count>`

If revisions exist:
`FIX|<question_id>|<field>|<current>|<corrected>|<reason>`
If none: `FIX_COUNT|0`

Review all 16 clone families:
`CLONE|<family_id>|PASS`
or `CLONE|<family_id>|REVISE|<corrected membership>|<reason>`

`CHECK|001_006|PASS`
`CHECK|023_034|PASS`
`CHECK|035_046|PASS`
`CHECK|047_054|PASS`
`CHECK|055_066|PASS`
`CHECK|067_072|PASS`
`CHECK|087_094|PASS`
`CHECK|095_106|PASS`
`CHECK|107_112|PASS`
`CHECK|113_116|PASS`
`CHECK|117_120|PASS`
`CHECK|125_132|PASS`

Counts:
`COUNT|MAPPED_PRIMARY|132`
`COUNT|FORMATIVE_ONLY|0`
and one `COUNT|PRIMARY|<skill_id>|<count>` line for each primary skill above.

Architecture:
`ARCH_1|PASS` max one primary per MCQ
`ARCH_2|PASS` learner family remains broader than diagnostic subskill
`ARCH_3|PASS` multistep/supporting tags do not create duplicate mastery
`ARCH_4|PASS` rational-equation domain / clearing denominator / root-check evidence is coherent
`ARCH_5|PASS` inequality sign reversal and representation evidence is coherent
`ARCH_6|PASS` modeling MCQs remain partial evidence; written certification still required
`ARCH_7|PASS` CT08 product-equation evidence remains compatible with S1
`ARCH_8|PASS` optional/Challenge evidence does not gate Core
`ARCH_9|PASS` clone families are evidence de-dup only
`ARCH_10|PASS` legacy content/answers/tags unchanged and no runtime/history migration

Final:
`AUTHORIZATION|CLEARED_FOR_CT08_S2_RECONCILIATION`
or `AUTHORIZATION|BLOCKED_PENDING_REVISIONS`
No prose or markdown tables outside these lines.
