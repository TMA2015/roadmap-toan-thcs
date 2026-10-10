# NotebookLM Packet — Readiness Implementation Wave 1 R1

**packet_id:** `MATH-READINESS-IMPLEMENTATION-W1-R1-20261010`  
**base clearance:** `READINESS_COVERAGE_PRIORITY_R1_REVIEW_COMPLETE`  
**candidate count:** 18 items / 18 approved families  
**status:** CANDIDATE ONLY — NOT PUBLISHED

## Review purpose

Independently review the mathematical and pedagogical correctness of exactly 18 proposed additional **soft Core Readiness MCQs**. Each item implements one and only one family previously classified `ADD_READINESS`.

The priority decision is already frozen. Do not reopen KEEP_AS_IS families and do not create more items.

## System boundaries

- Existing Readiness items remain unchanged.
- Exactly one candidate per approved `ADD_READINESS` family.
- No two-items-per-family quota beyond these 18 approved scopes.
- No threshold change.
- No hard-gate change.
- No hints or AI Tutor during Readiness.
- Feedback remains after submit.
- No Mastery/history change.
- No Practice/Written credit semantics change.
- Candidate content must not be published unless this content review passes.

## What to verify for every item

1. Mathematical correctness and unique keyed answer.
2. Distractors are plausible but unambiguously wrong.
3. Wording is clear for the stated grade and KNTT-Core scope.
4. The item measures the approved missing target, rather than merely duplicating the existing Readiness item.
5. Explanation is correct, concise, and does not introduce a new error.
6. Primary skill / canonical-family fit is correct.
7. Any geometry statement is self-contained; require a diagram only if the item cannot be judged unambiguously without one.
8. No item exceeds the approved ADD_SCOPE.

## Candidate items

### NUM02G6READY_014 — NUM-ORDER
- Approved ADD_SCOPE: Order of operations involving parentheses/brackets or nested expressions.
- Target file after approval: `docs/assets/data/assessment/02-so-va-phep-tinh-core-v1.json`
- Curriculum: KNTT, Grade 6, core
- Primary skill: `thu-tu-phep-tinh`
- Question: Tính \(36-2\times(5+3)\).
- Options:
  * 0. 20  ← keyed correct
  - 1. 272
  - 2. 50
  - 3. 19
- Explanation: Tính trong ngoặc trước: \(5+3=8\). Sau đó \(2\times8=16\), nên \(36-16=20\).

### NUM02G6READY_015 — NUM-INTEGER-OPS
- Approved ADD_SCOPE: Subtraction of negative integers or signed integer multiplication involving sign rules.
- Target file after approval: `docs/assets/data/assessment/02-so-va-phep-tinh-core-v1.json`
- Curriculum: KNTT, Grade 6, core
- Primary skill: `so-nguyen-phep-tinh`
- Question: Tính \((-6)\times(-4)\).
- Options:
  * 0. 24  ← keyed correct
  - 1. -24
  - 2. 10
  - 3. -10
- Explanation: Tích của hai số nguyên âm là số dương và \(6\times4=24\), nên kết quả là \(24\).

### NUM02G6READY_016 — NUM-GCD-LCM
- Approved ADD_SCOPE: Finding the Least Common Multiple (BCNN) of two natural numbers.
- Target file after approval: `docs/assets/data/assessment/02-so-va-phep-tinh-core-v1.json`
- Curriculum: KNTT, Grade 6, core
- Primary skill: `bcnn`
- Question: Tìm \(\operatorname{BCNN}(12,18)\).
- Options:
  * 0. 36  ← keyed correct
  - 1. 6
  - 2. 72
  - 3. 216
- Explanation: \(12=2^2\cdot3\), \(18=2\cdot3^2\). Lấy số mũ lớn nhất của mỗi thừa số nguyên tố: \(\operatorname{BCNN}=2^2\cdot3^2=36\).

### NUM02G6READY_017 — NUM-POWER
- Approved ADD_SCOPE: Division of powers with the same base or the zero-exponent rule.
- Target file after approval: `docs/assets/data/assessment/02-so-va-phep-tinh-core-v1.json`
- Curriculum: KNTT, Grade 6, core
- Primary skill: `luy-thua`
- Question: Tính \(3^5:3^2\).
- Options:
  * 0. \(3^3=27\)  ← keyed correct
  - 1. \(3^7=2187\)
  - 2. \(3^2=9\)
  - 3. \(1\)
- Explanation: Khi chia hai lũy thừa cùng cơ số khác 0, ta trừ số mũ: \(3^5:3^2=3^{5-2}=3^3=27\).

### NUM02G6READY_018 — NUM-FRACTION-FORM
- Approved ADD_SCOPE: Simplifying a fraction to irreducible form.
- Target file after approval: `docs/assets/data/assessment/02-so-va-phep-tinh-core-v1.json`
- Curriculum: KNTT, Grade 6, core
- Primary skill: `rut-gon-phan-so`
- Question: Rút gọn phân số \(\frac{18}{24}\) đến phân số tối giản.
- Options:
  * 0. \(\frac34\)  ← keyed correct
  - 1. \(\frac9{12}\)
  - 2. \(\frac23\)
  - 3. \(\frac46\)
- Explanation: \(\operatorname{ƯCLN}(18,24)=6\). Chia cả tử và mẫu cho 6 được \(\frac{18}{24}=\frac34\), là phân số tối giản.

### RAT03READY_011 — RATIO-DIRECT
- Approved ADD_SCOPE: Determining the constant of proportionality k from corresponding values or a table.
- Target file after approval: `docs/assets/data/assessment/03-ti-le-ti-le-thuc-core-v1.json`
- Curriculum: KNTT, Grade 7, core
- Primary skill: `he-so-ti-le-thuan`
- Question: Hai đại lượng \(x\) và \(y\) tỉ lệ thuận theo công thức \(y=kx\). Khi \(x=6\) thì \(y=15\). Hệ số tỉ lệ \(k\) bằng:
- Options:
  * 0. \(\frac52\)  ← keyed correct
  - 1. \(\frac25\)
  - 2. 9
  - 3. 21
- Explanation: Vì \(y=kx\), ta có \(k=\frac{y}{x}=\frac{15}{6}=\frac52\).

### RAT07READY_011 — RATEX-DOMAIN
- Approved ADD_SCOPE: Preservation of original domain restriction after simplifying a rational expression.
- Target file after approval: `docs/assets/data/assessment/07-phan-thuc-dai-so-core-v1.json`
- Curriculum: KNTT, Grade 8, core
- Primary skill: `giu-dieu-kien-ban-dau`
- Question: Cho \(P=\frac{(x-2)(x+1)}{x-2}\). Sau khi rút gọn được \(P=x+1\), điều kiện nào vẫn phải giữ?
- Options:
  * 0. \(x\ne2\)  ← keyed correct
  - 1. \(x\ne-1\)
  - 2. Mọi số thực \(x\)
  - 3. \(x=2\)
- Explanation: Biểu thức ban đầu có mẫu \(x-2\), nên phải có \(x\ne2\). Điều kiện này vẫn được giữ sau khi rút gọn.

### EQ08READY_011 — EQ-MODEL
- Approved ADD_SCOPE: Formulating a linear equation from a contextual real-world situation.
- Target file after approval: `docs/assets/data/assessment/08-phuong-trinh-bat-phuong-trinh-core-v1.json`
- Curriculum: KNTT, Grade 8, core
- Primary skill: `lap-phuong-trinh`
- Question: Mua 3 chiếc bút cùng giá \(x\) nghìn đồng mỗi chiếc và một quyển vở giá 12 nghìn đồng, tổng cộng 30 nghìn đồng. Phương trình đúng là:
- Options:
  * 0. \(3x+12=30\)  ← keyed correct
  - 1. \(3(x+12)=30\)
  - 2. \(x+12=30\)
  - 3. \(12x+3=30\)
- Explanation: Tiền 3 chiếc bút là \(3x\) nghìn đồng; cộng 12 nghìn đồng tiền vở được tổng 30 nghìn đồng, nên \(3x+12=30\).

### SYS09READY_011 — SYS-MODEL
- Approved ADD_SCOPE: Formulating a 2x2 system of linear equations from a contextual application.
- Target file after approval: `docs/assets/data/assessment/09-he-phuong-trinh-core-v1.json`
- Curriculum: KNTT, Grade 9, core
- Primary skill: `lap-he-bai-toan`
- Question: Một quầy bán 20 vé gồm vé người lớn giá 50 nghìn đồng và vé học sinh giá 30 nghìn đồng, thu được 760 nghìn đồng. Gọi \(x\) là số vé người lớn, \(y\) là số vé học sinh. Hệ phương trình đúng là:
- Options:
  * 0. \(\begin{cases}x+y=20\\50x+30y=760\end{cases}\)  ← keyed correct
  - 1. \(\begin{cases}x-y=20\\50x+30y=760\end{cases}\)
  - 2. \(\begin{cases}x+y=760\\50x+30y=20\end{cases}\)
  - 3. \(\begin{cases}x+y=20\\30x+50y=760\end{cases}\)
- Explanation: Tổng số vé cho \(x+y=20\). Tổng tiền (đơn vị nghìn đồng) cho \(50x+30y=760\).

### RAD11READY_011 — RAD-OPERATE
- Approved ADD_SCOPE: Multiplication or division of radicals using product/quotient rules.
- Target file after approval: `docs/assets/data/assessment/11-can-thuc-core-v1.json`
- Curriculum: KNTT, Grade 9, core
- Primary skill: `nhan-chia-can`
- Question: Tính \(\sqrt{12}\cdot\sqrt3\).
- Options:
  * 0. 6  ← keyed correct
  - 1. \(\sqrt{15}\)
  - 2. \(3\sqrt3\)
  - 3. 12
- Explanation: \(\sqrt{12}\cdot\sqrt3=\sqrt{36}=6\).

### GEO13READY_011 — GEO-TRANSVERSAL
- Approved ADD_SCOPE: Corresponding angles or consecutive interior angles under a transversal.
- Target file after approval: `docs/assets/data/assessment/13-goc-va-duong-thang-core-v1.json`
- Curriculum: KNTT, Grade 7, core
- Primary skill: `goc-trong-cung-phia`
- Question: Hai đường thẳng \(a\parallel b\) bị đường thẳng \(c\) cắt. Một cặp góc trong cùng phía có một góc bằng \(112^\circ\). Góc còn lại bằng:
- Options:
  * 0. \(68^\circ\)  ← keyed correct
  - 1. \(112^\circ\)
  - 2. \(56^\circ\)
  - 3. \(248^\circ\)
- Explanation: Hai góc trong cùng phía tạo bởi một đường cắt hai đường thẳng song song có tổng \(180^\circ\), nên góc còn lại bằng \(180^\circ-112^\circ=68^\circ\).

### GEO14READY_011 — TRI-SPECIAL
- Approved ADD_SCOPE: Identification criteria or angle properties of an equilateral triangle.
- Target file after approval: `docs/assets/data/assessment/14-tam-giac-core-v1.json`
- Curriculum: KNTT, Grade 7, core
- Primary skill: `tam-giac-deu`
- Question: Tam giác \(ABC\) cân tại \(A\) và \(\widehat A=60^\circ\). Kết luận nào đúng?
- Options:
  * 0. Tam giác \(ABC\) đều  ← keyed correct
  - 1. Tam giác \(ABC\) vuông tại \(A\)
  - 2. Tam giác \(ABC\) chỉ cân, không thể đều
  - 3. Chưa đủ dữ kiện để kết luận
- Explanation: Tam giác cân tại \(A\) có \(\widehat B=\widehat C\). Vì tổng ba góc bằng \(180^\circ\) và \(\widehat A=60^\circ\), suy ra \(\widehat B=\widehat C=60^\circ\), nên tam giác đều.

### GEO19READY_011 — CIRCLE-CHORD-ARC
- Approved ADD_SCOPE: Perpendicular relationship between a radius/diameter and a chord.
- Target file after approval: `docs/assets/data/assessment/19-duong-tron-core-v1.json`
- Curriculum: KNTT, Grade 9, core
- Primary skill: `day-va-tam`
- Question: Trong đường tròn tâm \(O\), \(AB\) là một dây và \(OM\perp AB\) tại \(M\). Kết luận nào đúng?
- Options:
  * 0. \(AM=MB\)  ← keyed correct
  - 1. \(OA=OM\)
  - 2. \(M\) là tâm đường tròn
  - 3. \(AB\) là đường kính
- Explanation: Đường vuông góc kẻ từ tâm đến một dây thì đi qua trung điểm của dây, nên \(AM=MB\).

### GEO19READY_012 — CIRCLE-ANGLES
- Approved ADD_SCOPE: Central angle or the central-angle/inscribed-angle relationship on the same arc.
- Target file after approval: `docs/assets/data/assessment/19-duong-tron-core-v1.json`
- Curriculum: KNTT, Grade 9, core
- Primary skill: `goc-o-tam`
- Question: Trong đường tròn tâm \(O\), góc nội tiếp \(\widehat{ACB}=35^\circ\) chắn cung nhỏ \(AB\). Góc ở tâm \(\widehat{AOB}\) chắn cùng cung nhỏ \(AB\) bằng:
- Options:
  * 0. \(70^\circ\)  ← keyed correct
  - 1. \(35^\circ\)
  - 2. \(17{,}5^\circ\)
  - 3. \(145^\circ\)
- Explanation: Góc ở tâm chắn cùng một cung bằng hai lần góc nội tiếp: \(\widehat{AOB}=2\cdot35^\circ=70^\circ\).

### GEO20READY_011 — GEO-REGULAR-SYMM
- Approved ADD_SCOPE: Center of symmetry or rotational symmetry for regular polygons.
- Target file after approval: `docs/assets/data/assessment/20-hinh-hoc-tong-hop-core-v1.json`
- Curriculum: KNTT, Grade 6, core
- Primary skill: `tam-doi-xung`
- Question: Hình lục giác đều \(ABCDEF\) có tâm \(O\). Khẳng định nào đúng?
- Options:
  * 0. \(O\) là tâm đối xứng của hình lục giác đều  ← keyed correct
  - 1. Đỉnh \(A\) là tâm đối xứng
  - 2. Trung điểm của cạnh \(AB\) là tâm đối xứng
  - 3. Hình lục giác đều không có tâm đối xứng
- Explanation: Phép đối xứng tâm \(O\) biến mỗi đỉnh của lục giác đều thành đỉnh đối diện, nên \(O\) là tâm đối xứng.

### GEO20READY_012 — SOLID-PYRAMID
- Approved ADD_SCOPE: Lateral surface area or slant-height calculation for a regular pyramid.
- Target file after approval: `docs/assets/data/assessment/20-hinh-hoc-tong-hop-core-v1.json`
- Curriculum: KNTT, Grade 8, core
- Primary skill: `dien-tich-xung-quanh-hinh-chop`
- Question: Một hình chóp tứ giác đều có chu vi đáy \(20\text{ cm}\) và trung đoạn \(6\text{ cm}\). Diện tích xung quanh của hình chóp bằng:
- Options:
  * 0. \(60\text{ cm}^2\)  ← keyed correct
  - 1. \(120\text{ cm}^2\)
  - 2. \(30\text{ cm}^2\)
  - 3. \(26\text{ cm}^2\)
- Explanation: Diện tích xung quanh hình chóp đều bằng \(\frac12\) chu vi đáy nhân trung đoạn: \(S_{xq}=\frac12\cdot20\cdot6=60\text{ cm}^2\).

### STA21READY_015 — STAT-FREQUENCY
- Approved ADD_SCOPE: Relative frequency calculation or percentage representation.
- Target file after approval: `docs/assets/data/assessment/21-thong-ke-core-v1.json`
- Curriculum: KNTT, Grade 9, core
- Primary skill: `tan-suat`
- Question: Trong 40 kết quả quan sát, giá trị \(A\) xuất hiện 8 lần. Tần số tương đối của \(A\) bằng:
- Options:
  * 0. 20%  ← keyed correct
  - 1. 8%
  - 2. 32%
  - 3. 5%
- Explanation: Tần số tương đối bằng \(\frac{8}{40}=0{,}2=20\%\).

### STA21READY_016 — STAT-ADVANCED-DATA
- Approved ADD_SCOPE: Representative value or boundary conditions for a grouped interval [a;b).
- Target file after approval: `docs/assets/data/assessment/21-thong-ke-core-v1.json`
- Curriculum: KNTT, Grade 9, core
- Primary skill: `du-lieu-ghep-nhom`
- Question: Giá trị đại diện của nhóm \([10;20)\) là:
- Options:
  * 0. 15  ← keyed correct
  - 1. 10
  - 2. 20
  - 3. 30
- Explanation: Giá trị đại diện của một nhóm thường lấy bằng trung điểm của khoảng: \(\frac{10+20}{2}=15\).


## Required machine-readable result

Return a concise reasoning summary and then:

```text
PACKET|MATH-READINESS-IMPLEMENTATION-W1-R1-20261010
OVERALL|PASS|REVISIONS_REQUIRED
ITEM|<item_id>|<family_id>|PASS|REVISE
... exactly 18 ITEM lines ...
REVISION|<item_id>|<issue>|<required correction>
... one REVISION line per item marked REVISE; none for PASS items ...
BOUNDARY|EXACTLY_18_APPROVED_FAMILIES|PASS|FAIL
BOUNDARY|NO_EXISTING_ITEM_REWRITE|PASS|FAIL
BOUNDARY|NO_EXTRA_READINESS_ITEMS|PASS|FAIL
BOUNDARY|NO_THRESHOLD_OR_HARD_GATE_CHANGE|PASS|FAIL
BOUNDARY|NO_MASTERY_HISTORY_CHANGE|PASS|FAIL
MISSING_DECISIONS|NONE|...
CLEARANCE|READINESS_IMPLEMENTATION_W1_R1_CONTENT_REVIEW_COMPLETE
```

Only return the clearance line when the overall verdict is PASS and all 18 items PASS.
