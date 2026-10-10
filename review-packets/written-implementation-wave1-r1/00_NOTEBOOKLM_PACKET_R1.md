# NotebookLM Review Packet — Written Implementation Wave 1 R1

**packet_id:** `MATH-WRITTEN-IMPLEMENTATION-W1-R1-20261010`  
**status:** CANDIDATE — no live-library import before independent academic PASS  
**authorization:** `WRITTEN_COVERAGE_PRIORITY_R1_REVIEW_COMPLETE`

## Scope

Review exactly 9 new KNTT-Core / CORE_BASE Written exercises, one for each independently approved ADD_WRITTEN family:

- ALG-MULTIPLY → WX04-ALG-003
- RAD-TRANSFORM → WX11-RAD-003
- TRI-ANGLE-SIDE → WX14-TRI-003
- RIGHT-PYTHAGORE → WX18-TRI-003
- QUAD-RHOMBUS → WX16-QUAD-003
- QUAD-TRAPEZOID → WX16-QUAD-004
- SIM-MID-BISECTOR → WX17-SIM-003
- CIRCLE-ANGLES → WX19-CIR-003
- CIRCLE-CHORD-ARC → WX19-CIR-004

Also verify the two already-approved crosswalk updates:
- WX24-MOD-002 → SYS-MODEL,SYS-SOLVE
- WX23-PRO-003 → PROB-EVENT

## Protected boundaries

- Do not create a new canonical family.
- Do not add CORE_APPLY items in this wave.
- Do not add any family outside the 9 approved ADD_WRITTEN families.
- Do not duplicate Topic 25 Anchors.
- Written self-marking grants no Readiness or Mastery credit.
- The live Written library remains 54 items until this packet passes.

## Review criteria

For every candidate:
1. mathematical correctness;
2. sufficient hypotheses and exact conclusion;
3. grade/layer fit;
4. one clear primary problem type;
5. intended canonical-family alignment;
6. step-by-step solution logic;
7. rubric alignment;
8. common-mistake quality;
9. no unnecessary duplication with the existing Written library;
10. whether a diagram is materially required. If so, return REVISIONS_REQUIRED and specify the required figure information.


---

## WX04-ALG-003 — Khai triển đủ hai tích trước khi thu gọn

- **Family:** ALG-MULTIPLY
- **Topic:** CT04 — Biểu thức đại số
- **Layer / level:** KNTT-Core / CORE_BASE
- **Problem type:** algebra-expand-two-products — Nhân hai đa thức rồi thu gọn biểu thức
- **Skills:** nhan-bieu-thuc, tinh-phan-phoi
- **Prerequisites:** thu-gon-da-thuc, bo-ngoac-dau

### Problem

Cho

$$A=(2x-3)(x+4)-(x-1)(x+2).$$

1. Khai triển và thu gọn $A$.
2. Tính giá trị của $A$ tại $x=-2$.

### Solution steps

**S1. Khai triển tích thứ nhất**

$$(2x-3)(x+4)=2x^2+8x-3x-12=2x^2+5x-12.$$

**S2. Khai triển tích thứ hai**

$$(x-1)(x+2)=x^2+2x-x-2=x^2+x-2.$$

**S3. Thu gọn toàn biểu thức**

Vì tích thứ hai đang bị trừ nên

$$A=2x^2+5x-12-(x^2+x-2)=x^2+4x-10.$$

**S4. Thay số**

Tại $x=-2$,

$$A=(-2)^2+4(-2)-10=4-8-10=-14.$$

### Rubric (4 points)

1. Khai triển đúng $(2x-3)(x+4)$. — 1 point(s)
2. Khai triển đúng $(x-1)(x+2)$. — 1 point(s)
3. Xử lý đúng dấu trừ và thu gọn được $A=x^2+4x-10$. — 1 point(s)
4. Tính đúng $A(-2)=-14$. — 1 point(s)

### Common mistakes

- Chỉ nhân hạng tử đầu của mỗi ngoặc.
- Quên đổi dấu toàn bộ tích thứ hai khi bỏ ngoặc.
- Thay $x=-2$ nhưng tính $4x$ thành $+8$.

### Internal source refs

- `docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md#04-WR-05`
- `docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md#04-WR-06`
- `docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md#04-WR-10`

---

## WX11-RAD-003 — Biến đổi từng căn về cùng một căn cơ bản

- **Family:** RAD-TRANSFORM
- **Topic:** CT11 — Căn thức và biến đổi căn thức
- **Layer / level:** KNTT-Core / CORE_BASE
- **Problem type:** radical-extract-combine — Đưa thừa số ra ngoài dấu căn rồi thu gọn
- **Skills:** khai-phuong-tich, dua-thua-so-ra
- **Prerequisites:** can-bac-hai-so-hoc

### Problem

Rút gọn biểu thức

$$A=\sqrt{72}-\sqrt{18}+\sqrt{8}.$$

Trình bày rõ bước biến đổi từng căn thức trước khi cộng trừ.

### Solution steps

**S1. Biến đổi $\sqrt{72}$**

$$\sqrt{72}=\sqrt{36\cdot2}=6\sqrt2.$$

**S2. Biến đổi $\sqrt{18}$ và $\sqrt8$**

$$\sqrt{18}=\sqrt{9\cdot2}=3\sqrt2,\qquad \sqrt8=\sqrt{4\cdot2}=2\sqrt2.$$

**S3. Thu gọn**

Do các căn đã đồng dạng,

$$A=6\sqrt2-3\sqrt2+2\sqrt2=5\sqrt2.$$

### Rubric (3 points)

1. Biến đổi đúng $\sqrt{72}=6\sqrt2$. — 1 point(s)
2. Biến đổi đúng $\sqrt{18}=3\sqrt2$ và $\sqrt8=2\sqrt2$. — 1 point(s)
3. Thu gọn đúng về $5\sqrt2$. — 1 point(s)

### Common mistakes

- Tách $72$ thành tích không có thừa số chính phương hữu ích.
- Nhầm $\sqrt{a+b}=\sqrt a+\sqrt b$.
- Cộng trừ hệ số khi các căn chưa được đưa về cùng dạng.

### Internal source refs

- `docs/kien-thuc/11-can-thuc/bai-tap.md#11-WR-03`
- `docs/kien-thuc/11-can-thuc/bai-tap.md#11-WR-05`
- `docs/kien-thuc/11-can-thuc/bai-tap.md#11-WR-06`

---

## WX14-TRI-003 — Lọc độ dài có thể xảy ra rồi sắp thứ tự các góc

- **Family:** TRI-ANGLE-SIDE
- **Topic:** CT14 — Tam giác
- **Layer / level:** KNTT-Core / CORE_BASE
- **Problem type:** triangle-inequality-angle-order — Bất đẳng thức tam giác kết hợp quan hệ cạnh–góc
- **Skills:** bat-dang-thuc-tam-giac, so-sanh-canh-goc
- **Prerequisites:** so-sanh-so-nguyen

### Problem

Cho tam giác $ABC$ có $AB=5$, $AC=8$, $BC=x$, trong đó $x$ là số nguyên dương và chu vi tam giác nhỏ hơn $20$.

1. Tìm tất cả giá trị có thể của $x$.
2. Với $x=6$, sắp xếp $\angle A,\angle B,\angle C$ theo thứ tự tăng dần.

### Solution steps

**S1. Dùng bất đẳng thức tam giác**

Ta cần

$$|8-5|<x<8+5,$$

nên

$$3<x<13.$$

**S2. Dùng điều kiện chu vi**

Chu vi nhỏ hơn $20$ nên

$$5+8+x<20\Rightarrow x<7.$$

**S3. Kết hợp và dùng tính nguyên**

Vì $x$ nguyên dương, $3<x<7$, nên

$$x\in\{4,5,6\}.$$

**S4. So sánh góc khi $x=6$**

Khi đó $AB=5$, $BC=6$, $AC=8$. Trong một tam giác, cạnh lớn hơn đối diện góc lớn hơn. Vì

$$5<6<8,$$

nên

$$\angle C<\angle A<\angle B.$$

### Rubric (4 points)

1. Lập đúng $3<x<13$ từ bất đẳng thức tam giác. — 1 point(s)
2. Dùng đúng điều kiện chu vi để suy ra $x<7$. — 1 point(s)
3. Kết luận đúng $x\in\{4,5,6\}$. — 1 point(s)
4. Với $x=6$, ghép đúng cạnh đối diện và kết luận $\angle C<\angle A<\angle B$. — 1 point(s)

### Common mistakes

- Chỉ kiểm tra $x<13$ mà quên điều kiện $x>3$.
- Quên dùng điều kiện chu vi.
- So sánh góc theo cạnh kề thay vì cạnh đối diện.

### Internal source refs

- `docs/kien-thuc/14-tam-giac/bai-tap.md#14-WR-02`
- `docs/kien-thuc/14-tam-giac/bai-tap.md#14-WR-03`

---

## WX18-TRI-003 — Kiểm tra bình phương ba cạnh trước khi kết luận góc vuông

- **Family:** RIGHT-PYTHAGORE
- **Topic:** CT18 — Hệ thức lượng trong tam giác vuông
- **Layer / level:** KNTT-Core / CORE_BASE
- **Problem type:** pythagorean-converse-identify-right-angle — Dùng định lí Pythagore đảo để nhận biết tam giác vuông
- **Skills:** pythagore-dao, canh-huyen
- **Prerequisites:** luy-thua

### Problem

Cho tam giác $ABC$ có

$$AB=9,\qquad AC=12,\qquad BC=15.$$

Hãy chứng minh tam giác $ABC$ vuông và chỉ rõ góc vuông, cạnh huyền.

### Solution steps

**S1. Xác định cạnh lớn nhất**

Cạnh lớn nhất là $BC=15$.

**S2. So sánh bình phương**

Ta có

$$AB^2+AC^2=9^2+12^2=81+144=225,$$

và

$$BC^2=15^2=225.$$

**S3. Dùng định lí Pythagore đảo**

Vì $AB^2+AC^2=BC^2$, theo định lí Pythagore đảo, tam giác $ABC$ vuông tại $A$.

**S4. Xác định cạnh huyền**

Cạnh đối diện góc vuông $A$ là $BC$, nên $BC$ là cạnh huyền.

### Rubric (4 points)

1. Xác định đúng $BC$ là cạnh lớn nhất. — 1 point(s)
2. Tính đúng $9^2+12^2=15^2=225$. — 1 point(s)
3. Dùng đúng định lí Pythagore đảo để kết luận vuông tại $A$. — 1 point(s)
4. Nêu đúng $BC$ là cạnh huyền. — 1 point(s)

### Common mistakes

- Dùng định lí Pythagore thuận để 'chứng minh' tam giác đã vuông.
- Không kiểm tra cạnh lớn nhất trước khi áp dụng mệnh đề đảo.
- Kết luận sai vị trí góc vuông.

### Internal source refs

- `docs/kien-thuc/18-he-thuc-luong/bai-tap.md#18-WR-01`
- `docs/kien-thuc/18-he-thuc-luong/bai-tap.md#18-WR-02`
- `docs/kien-thuc/18-he-thuc-luong/bai-tap.md#18-WR-03`

---

## WX16-QUAD-003 — Chứng minh hình bình hành trước rồi mới nâng cấp thành hình thoi

- **Family:** QUAD-RHOMBUS
- **Topic:** CT16 — Tứ giác và các hình đặc biệt
- **Layer / level:** KNTT-Core / CORE_BASE
- **Problem type:** quadrilateral-diagonals-rhombus-proof — Từ hai đường chéo cắt nhau tại trung điểm và vuông góc đến hình thoi
- **Skills:** hthoi-dau-hieu
- **Prerequisites:** hbh-dau-hieu

### Problem

Cho tứ giác $ABCD$ có hai đường chéo $AC$ và $BD$ cắt nhau tại $O$. Biết

$$OA=OC,\qquad OB=OD,\qquad AC\perp BD.$$

Chứng minh $ABCD$ là hình thoi.

### Solution steps

**S1. Nhận ra hai đường chéo cắt tại trung điểm**

Từ $OA=OC$ suy ra $O$ là trung điểm của $AC$; từ $OB=OD$ suy ra $O$ là trung điểm của $BD$.

**S2. Kết luận hình bình hành**

Hai đường chéo của tứ giác cắt nhau tại trung điểm của mỗi đường, nên $ABCD$ là hình bình hành.

**S3. Nâng cấp thành hình thoi**

Hình bình hành $ABCD$ có hai đường chéo vuông góc $AC\perp BD$, nên $ABCD$ là hình thoi.

### Rubric (3 points)

1. Suy ra đúng $O$ là trung điểm của cả hai đường chéo. — 1 point(s)
2. Dùng đúng dấu hiệu để kết luận $ABCD$ là hình bình hành. — 1 point(s)
3. Dùng đúng dấu hiệu hình bình hành có hai đường chéo vuông góc để kết luận hình thoi. — 1 point(s)

### Common mistakes

- Kết luận hình thoi ngay chỉ vì hai đường chéo vuông góc.
- Dùng hình vẽ để suy ra hai đường chéo cắt tại trung điểm mà không dùng các đẳng thức đã cho.
- Nhầm dấu hiệu của hình thoi với dấu hiệu hình chữ nhật.

### Internal source refs

- `docs/kien-thuc/16-tu-giac/bai-tap.md#16-WR-03`
- `docs/kien-thuc/16-tu-giac/bai-tap.md#16-WR-06`

---

## WX16-QUAD-004 — Dùng dấu hiệu hình thang cân rồi tính hai góc còn lại

- **Family:** QUAD-TRAPEZOID
- **Topic:** CT16 — Tứ giác và các hình đặc biệt
- **Layer / level:** KNTT-Core / CORE_BASE
- **Problem type:** isosceles-trapezoid-base-angles — Nhận biết hình thang cân từ hai góc kề một đáy
- **Skills:** hinh-thang, hinh-thang-can
- **Prerequisites:** goc-trong-cung-phia

### Problem

Cho hình thang $ABCD$ với $AB\parallel CD$. Biết

$$\angle A=\angle B=70^\circ.$$

1. Chứng minh $ABCD$ là hình thang cân.
2. Tính $\angle C$ và $\angle D$.

### Solution steps

**S1. Dùng dấu hiệu hình thang cân**

Trong hình thang $ABCD$, hai góc kề cùng đáy $AB$ bằng nhau: $\angle A=\angle B$. Vì vậy $ABCD$ là hình thang cân.

**S2. Tính góc D**

Do $AB\parallel CD$, hai góc trong cùng phía trên cạnh bên $AD$ bù nhau:

$$\angle A+\angle D=180^\circ.$$ 

Suy ra $\angle D=110^\circ$.

**S3. Tính góc C**

Tương tự trên cạnh bên $BC$,

$$\angle B+\angle C=180^\circ,$$

nên $\angle C=110^\circ$.

### Rubric (3 points)

1. Dùng đúng dấu hiệu hai góc kề một đáy bằng nhau để kết luận hình thang cân. — 1 point(s)
2. Tính đúng $\angle D=110^\circ$. — 1 point(s)
3. Tính đúng $\angle C=110^\circ$. — 1 point(s)

### Common mistakes

- Cho rằng mọi hình thang đều có hai góc kề một đáy bằng nhau.
- Nhầm cặp góc trong cùng phía do hai đáy song song.
- Tính góc còn lại bằng $70^\circ$ thay vì dùng tổng $180^\circ$.

### Internal source refs

- `docs/kien-thuc/16-tu-giac/bai-tap.md#16-WR-02`

---

## WX17-SIM-003 — Từ tỉ số phân giác đến hai độ dài cụ thể

- **Family:** SIM-MID-BISECTOR
- **Topic:** CT17 — Thales và tam giác đồng dạng
- **Layer / level:** KNTT-Core / CORE_BASE
- **Problem type:** angle-bisector-segment-split — Tính hai đoạn do đường phân giác chia cạnh đối diện
- **Skills:** tinh-chat-duong-phan-giac
- **Prerequisites:** ti-le-thuc

### Problem

Trong tam giác $ABC$, $AD$ là đường phân giác của $\angle A$ và $D\in BC$. Biết

$$AB=6,\qquad AC=9,\qquad BC=10.$$

Tính $BD$ và $DC$.

### Solution steps

**S1. Lập tỉ số theo tính chất đường phân giác**

Theo tính chất đường phân giác trong tam giác,

$$\frac{BD}{DC}=\frac{AB}{AC}=\frac69=\frac23.$$

**S2. Đặt hai đoạn theo cùng một đơn vị tỉ lệ**

Đặt $BD=2k$, $DC=3k$ với $k>0$.

**S3. Dùng tổng độ dài**

Vì $BD+DC=BC=10$ nên

$$2k+3k=10\Rightarrow k=2.$$

**S4. Kết luận**

Do đó

$$BD=4,\qquad DC=6.$$

### Rubric (4 points)

1. Lập đúng $\frac{BD}{DC}=\frac{AB}{AC}=\frac23$. — 1 point(s)
2. Đặt đúng $BD=2k,DC=3k$ hoặc lập hệ tương đương. — 1 point(s)
3. Dùng $BD+DC=10$ để tìm $k=2$. — 1 point(s)
4. Kết luận đúng $BD=4,DC=6$. — 1 point(s)

### Common mistakes

- Đảo tỉ số một phía nhưng không đảo phía còn lại.
- Dùng $AB+AC=BC$.
- Tìm đúng tỉ số nhưng không dùng tổng $BD+DC=BC$.

### Internal source refs

- `docs/kien-thuc/17-thales-dong-dang/bai-tap.md#17-WR-04`

---

## WX19-CIR-003 — Phân biệt cung nhỏ và cung lớn trước khi tính góc nội tiếp

- **Family:** CIRCLE-ANGLES
- **Topic:** CT19 — Đường tròn
- **Layer / level:** KNTT-Core / CORE_BASE
- **Problem type:** circle-central-inscribed-supplementary — Góc ở tâm và hai góc nội tiếp chắn hai cung bù nhau
- **Skills:** goc-o-tam, goc-noi-tiep
- **Prerequisites:** so-do-cung

### Problem

Trong đường tròn tâm $O$, $A,B,C,D$ cùng nằm trên đường tròn và

$$\angle AOB=124^\circ.$$

Điểm $C$ nằm trên cung lớn $AB$, còn $D$ nằm trên cung nhỏ $AB$.

1. Tính $\angle ACB$.
2. Tính $\angle ADB$.
3. Giải thích vì sao hai góc vừa tìm bù nhau.

### Solution steps

**S1. Xác định cung nhỏ AB**

Góc ở tâm $\angle AOB=124^\circ$ nên cung nhỏ $AB$ có số đo $124^\circ$.

**S2. Tính góc ACB**

Vì $C$ nằm trên cung lớn $AB$, góc nội tiếp $\angle ACB$ chắn cung nhỏ $AB$. Do đó

$$\angle ACB=\frac{124^\circ}{2}=62^\circ.$$

**S3. Tính góc ADB**

Cung lớn $AB$ có số đo

$$360^\circ-124^\circ=236^\circ.$$ 

Vì $D$ nằm trên cung nhỏ $AB$, $\angle ADB$ chắn cung lớn $AB$, nên

$$\angle ADB=\frac{236^\circ}{2}=118^\circ.$$

**S4. Kiểm tra quan hệ**

Ta có

$$62^\circ+118^\circ=180^\circ,$$

nên hai góc bù nhau.

### Rubric (4 points)

1. Xác định đúng cung nhỏ $AB$ bằng $124^\circ$. — 1 point(s)
2. Tính đúng $\angle ACB=62^\circ$. — 1 point(s)
3. Tính đúng cung lớn $AB=236^\circ$ và $\angle ADB=118^\circ$. — 1 point(s)
4. Giải thích đúng tổng hai góc bằng $180^\circ$. — 1 point(s)

### Common mistakes

- Không xét vị trí của đỉnh góc nội tiếp nên chọn nhầm cung bị chắn.
- Lấy góc nội tiếp bằng đúng số đo cung thay vì bằng nửa số đo cung.
- Quên rằng cung lớn bằng $360^\circ$ trừ cung nhỏ.

### Internal source refs

- `docs/kien-thuc/19-duong-tron/bai-tap.md#19-WR-07`

---

## WX19-CIR-004 — Từ khoảng cách tâm–dây đến nửa dây rồi so sánh cung

- **Family:** CIRCLE-CHORD-ARC
- **Topic:** CT19 — Đường tròn
- **Layer / level:** KNTT-Core / CORE_BASE
- **Problem type:** circle-center-perpendicular-chord — Đường vuông góc từ tâm đến dây và quan hệ dây–cung
- **Skills:** day-va-tam, cung-va-day
- **Prerequisites:** pythagore

### Problem

Cho đường tròn tâm $O$ bán kính $5$ cm. Dây $AB=8$ cm. Kẻ $OM\perp AB$ tại $M$.

1. Chứng minh $M$ là trung điểm của $AB$.
2. Tính $OM$.
3. Nếu $CD$ là một dây khác của cùng đường tròn và $CD=8$ cm, hãy so sánh hai cung nhỏ $AB$ và $CD$.

### Solution steps

**S1. Dùng tính chất đường vuông góc từ tâm đến dây**

Trong một đường tròn, đường vuông góc kẻ từ tâm đến một dây đi qua trung điểm của dây. Do $OM\perp AB$, suy ra

$$AM=MB=\frac{AB}{2}=4\text{ cm}.$$

**S2. Xét tam giác vuông OMA**

Tam giác $OMA$ vuông tại $M$, với $OA=5$ cm và $AM=4$ cm. Theo Pythagore,

$$OM^2=OA^2-AM^2=25-16=9,$$

nên $OM=3$ cm.

**S3. So sánh hai cung**

Trong cùng một đường tròn, hai dây bằng nhau chắn hai cung nhỏ bằng nhau. Vì $AB=CD=8$ cm nên hai cung nhỏ $AB$ và $CD$ bằng nhau.

### Rubric (4 points)

1. Dùng đúng tính chất tâm–dây để suy ra $AM=MB=4$ cm. — 1 point(s)
2. Lập đúng hệ thức Pythagore trong tam giác $OMA$. — 1 point(s)
3. Tính đúng $OM=3$ cm. — 1 point(s)
4. Dùng đúng quan hệ dây bằng nhau – cung bằng nhau để so sánh hai cung nhỏ. — 1 point(s)

### Common mistakes

- Cho rằng $M$ là trung điểm chỉ vì hình vẽ trông cân.
- Dùng $AB=8$ trực tiếp làm cạnh của tam giác vuông $OMA$ thay vì $AM=4$.
- So sánh cung của hai đường tròn khác nhau; định lí ở đây dùng trong cùng một đường tròn.

### Internal source refs

- `docs/kien-thuc/19-duong-tron/bai-tap.md#19-WR-01`

---

## Required response

Return a concise reasoning summary, then the complete machine-readable block.

```text
PACKET|MATH-WRITTEN-IMPLEMENTATION-W1-R1-20261010
OVERALL|PASS|REVISIONS_REQUIRED
ITEM|<exercise_id>|PASS|REVISIONS_REQUIRED
CROSSWALK|WX24-MOD-002|SYS-MODEL,SYS-SOLVE|PASS|REVISIONS_REQUIRED
CROSSWALK|WX23-PRO-003|PROB-EVENT|PASS|REVISIONS_REQUIRED
BOUNDARY|EXACTLY_9_CORE_BASE_ITEMS|PASS|FAIL
BOUNDARY|NO_NEW_CANONICAL_FAMILY|PASS|FAIL
BOUNDARY|NO_CORE_APPLY_IN_WAVE1|PASS|FAIL
BOUNDARY|ANCHORS_NOT_DUPLICATED|PASS|FAIL
BOUNDARY|NO_READINESS_MASTERY_CREDIT|PASS|FAIL
MISSING_DECISIONS|NONE|...
CLEARANCE|WRITTEN_IMPLEMENTATION_W1_R1_CONTENT_REVIEW_COMPLETE
```

Include exactly 9 ITEM lines and exactly 2 CROSSWALK lines.

If any item requires correction, use REVISIONS_REQUIRED and provide the exact exercise ID plus exact correction. Do not silently rewrite the item.
