# Self-Learning Math — 8-item Written Quality Pilot, NotebookLM review packet

**Packet ID:** `MATH-WRITTEN-QUALITY-8PILOT-20261022-R0`  
**Date:** 2026-10-22  
**Source lock:** `docs/assets/data/written-exercises/written-exercise-library-v1.json` Git blob `5141a40bf1b8f8763257857d3b805d681a0956fa`  
**Review set:** Exactly 8 existing items, no new items, no proposed replacements.  
**Status:** REVIEW_REQUESTED / NOT_REVIEWED; no authorization to edit or deploy.

## Review source selection

Permanent sources (select exactly one current version each):
1. Self-Learning Math Master Plan v1.2.1 (repository canonical equivalent).
2. NotebookLM Math Review Rules v1.2.

Temporary sources: this packet, plus verified S1 KNTT SGK/SBT/course-extract sources when curriculum placement is being reviewed. Do not select old review packets or obsolete Master Plans. If S1 source is absent, verdict for curriculum mapping must be `INSUFFICIENT_EVIDENCE`.

## Task and boundaries

Check **each of 8 exact exercise IDs individually**, using D4 Written Problem Solving and D6 Help/Remediation first, plus D2/D3 overlap and D5 exam evidence only when independently supplied. Review math correctness, edge conditions, wording ambiguity, method choice, hint spoiler risk, all solution steps, proof logic, rubric points, errors, grade/learning layer and existing source hints.

A metadata academic-review marker is **not** a replacement for this review. Source refs included below are provenance pointers only and are not newly verified underlying copies.

**Prohibited:** mass adding exercises; re-ID; changing canonical MCQs; automatic learner-credit from self-marking; promoting lower-grade prerequisites into KNTT placement; asserting exam frequency without an authenticated exam corpus; activating Readiness/Mastery; publishing.

The following item blocks are copied from the catalog source and should be assessed as they stand.

## Canonical eight-item source (source-order independent)

### WX02-NUM-001 — Nhiều phần quà giống nhau nhất: vì sao phải dùng ƯCLN?

- Topic: `CT02`; kind: `standard`; level: `CORE_BASE`; layer: `KNTT-Core`; expected minutes: 10.

- Grade overlay (advisory): `[6]`; catalog KNTT placement: `[{"grade":6,"chapter":2,"lesson":"Bài 11–12 — Ước chung, ƯCLN; bội chung, BCNN và ứng dụng"}]`.

- Problem type: `gcd-max-equal-groups` — Chọn ƯCLN cho bài toán chia nhiều nhóm nhất.

- Prerequisites: thu-tu-phep-tinh; Skills: ucln, phan-tich-thua-so-nguyen-to.

- Source refs (not independently hydrated in packet): `docs/kien-thuc/02-so-va-phep-tinh/bai-tap.md#02-G6-WR-02`; `docs/assets/data/curriculum/topic02-learning-workspace.json#num02-g6-core-2`.

#### Problem

Có $36$ bút và $48$ quyển vở. Muốn chia thành **nhiều phần quà giống nhau nhất**, dùng hết cả hai loại.

1. Giải thích vì sao số phần quà phải là ước chung của $36$ và $48$.
2. Tìm số phần quà nhiều nhất.
3. Tính số bút và số vở trong mỗi phần quà.

#### Worked solution steps

**S1: Chuyển điều kiện thực tế thành điều kiện chia hết**

Nếu chia thành $n$ phần quà giống nhau và dùng hết, thì $36$ và $48$ đều phải chia hết cho $n$. Vì vậy $n$ là một **ước chung** của $36$ và $48$.

**S2: Chọn công cụ phù hợp**

Đề yêu cầu **nhiều phần quà nhất**, nên ta cần ước chung lớn nhất:

$$n=\operatorname{ƯCLN}(36,48).$$

**S3: Tính ƯCLN**

Phân tích:

$$36=2^2\cdot3^2,\qquad48=2^4\cdot3.$$

Suy ra

$$\operatorname{ƯCLN}(36,48)=2^2\cdot3=12.$$

**S4: Tính mỗi phần quà**

Có $12$ phần quà. Mỗi phần có

$$36:12=3\text{ bút},\qquad48:12=4\text{ vở}.$$

#### Rubric (4 points)

- Giải thích được số phần quà phải là ước chung. — **1 point(s)**
- Chọn đúng ƯCLN vì cần số nhóm lớn nhất. — **1 point(s)**
- Tính đúng $\operatorname{ƯCLN}(36,48)=12$. — **1 point(s)**
- Kết luận đúng mỗi phần có 3 bút và 4 vở. — **1 point(s)**

#### Common mistakes

- Dùng BCNN thay vì ƯCLN.
- Tìm được 12 nhưng không giải thích vì sao đó là số nhóm lớn nhất.
- Chia ngược số nhóm cho số đồ vật.

#### Remediation links

- Ôn CĐ02 – ƯCLN và BCNN: `../kien-thuc/02-so-va-phep-tinh/core/`
- Practice Room CĐ02: `../kien-thuc/02-so-va-phep-tinh/bai-tap/`

#### Figure

No catalog figure reference.

---

### WX02-NUM-003 — Biết một phần để tìm toàn bộ, rồi từ toàn bộ tìm tiếp một phần

- Topic: `CT02`; kind: `anchor`; level: `CORE_APPLY`; layer: `KNTT-Core`; expected minutes: 15.

- Grade overlay (advisory): `[6]`; catalog KNTT placement: `[{"grade":6,"chapter":6,"lesson":"Bài 27 — Hai bài toán về phân số"}]`.

- Problem type: `fraction-direct-inverse-two-stage` — Phân biệt tìm một phần của số đã biết và tìm toàn bộ từ một phần đã biết.

- Prerequisites: rut-gon-phan-so; Skills: phep-tinh-phan-so.

- Source refs (not independently hydrated in packet): `docs/assets/data/curriculum/topic02-learning-workspace.json#num02-g6-core-4`; `docs/assets/data/practice/02-so-va-phep-tinh-micro-v1.json#NUM02MICRO_030`; `docs/assets/data/practice/02-so-va-phep-tinh-micro-v1.json#NUM02MICRO_031`; `docs/assets/data/practice/02-so-va-phep-tinh-micro-v1.json#NUM02MICRO_032`.

#### Problem

Lớp 6A đặt mục tiêu quyên góp một số sách cho thư viện. Sau tuần thứ nhất, lớp đã quyên góp được **72 quyển**, bằng $\frac35$ số sách theo kế hoạch. Trong tuần thứ hai, lớp quyên góp thêm số sách bằng $\frac14$ số sách theo kế hoạch.

1. Tính số sách theo kế hoạch. Giải thích vì sao ở bước này phải **chia** $72$ cho $\frac35$.
2. Tính số sách lớp quyên góp thêm trong tuần thứ hai. Giải thích vì sao ở bước này lại **nhân** với $\frac14$.
3. Sau hai tuần, lớp còn thiếu bao nhiêu quyển để đạt kế hoạch?
4. Viết một phép tính khác để kiểm tra kết quả câu 3.

#### Progressive hints

**Hint 1:**

$72$ là **giá trị của $\frac35$ số sách theo kế hoạch**, còn tổng số sách theo kế hoạch chưa biết. Đây là dạng tìm số ban đầu khi biết một phân số của nó.

**Hint 2:**

Muốn tìm toàn bộ kế hoạch, tính $72\div\frac35$. Sau khi đã biết toàn bộ, tuần thứ hai là $\frac14$ **của số đã biết**, nên dùng phép nhân.

**Hint 3:**

Sau hai tuần, có thể kiểm tra bằng cách cộng hai phần đã quyên góp: $\frac35+\frac14$, rồi tìm phần còn thiếu của kế hoạch.

#### Full solution

Gọi số sách theo kế hoạch là toàn bộ cần tìm.

Vì $72$ quyển bằng $\frac35$ số sách theo kế hoạch nên số sách theo kế hoạch là

$$72\div\frac35=72\cdot\frac53=120\text{ (quyển)}.$$

Ở câu 1 phải **chia cho $\frac35$** vì ta đã biết giá trị của một phần bằng $\frac35$ của toàn bộ và cần tìm lại toàn bộ.

Tuần thứ hai quyên góp số sách bằng $\frac14$ của kế hoạch, mà kế hoạch đã biết là $120$ quyển, nên số sách tuần thứ hai là

$$120\cdot\frac14=30\text{ (quyển)}.$$

Ở câu 2 phải **nhân với $\frac14$** vì ta đang tìm $\frac14$ của một số đã biết.

Sau hai tuần, lớp đã có

$$72+30=102\text{ (quyển)}.$$

Số sách còn thiếu là

$$120-102=18\text{ (quyển)}.$$

Kiểm tra theo phân số của kế hoạch:

$$\frac35+\frac14=\frac{12}{20}+\frac5{20}=\frac{17}{20}.$$

Vậy phần còn thiếu là

$$1-\frac{17}{20}=\frac3{20},$$

và

$$120\cdot\frac3{20}=18\text{ (quyển)}.$$

Kết luận: kế hoạch là **120 quyển**, tuần thứ hai quyên góp **30 quyển**, và sau hai tuần còn thiếu **18 quyển**.

#### Why this method

Điểm chính của bài là **nhận đúng quan hệ giữa phần và toàn bộ trước khi chọn phép tính**. Khi biết toàn bộ và cần tìm một phân số của nó, dùng phép nhân. Khi biết giá trị của một phân số và cần tìm lại toàn bộ, dùng phép chia cho phân số đó. Cùng xuất hiện $\frac35$ hay $\frac14$ nhưng phép tính phụ thuộc vào đại lượng nào đã biết.

#### Rubric (5 points)

- Nhận đúng câu 1 là dạng tìm toàn bộ từ một phần đã biết và giải thích được vì sao dùng phép chia. — **1 point(s)**
- Tính đúng số sách theo kế hoạch là 120 quyển. — **1 point(s)**
- Nhận đúng câu 2 là dạng tìm một phần của số đã biết và tính đúng 30 quyển. — **1 point(s)**
- Tính đúng số sách còn thiếu là 18 quyển. — **1 point(s)**
- Có phép kiểm tra hợp lý, chẳng hạn dùng $17/20$ đã quyên góp hoặc $3/20$ còn thiếu. — **1 point(s)**

#### Common mistakes

- Tính $72\cdot\frac35$ ở câu 1 vì chỉ nhìn thấy phân số mà không xác định đang tìm toàn bộ.
- Lấy $\frac14$ của 72 quyển hoặc của số còn lại, trong khi đề nói $\frac14$ số sách theo kế hoạch.
- Cộng $\frac35+\frac14$ sai do không quy đồng mẫu.
- Có kết quả số nhưng không giải thích vì sao một bước dùng chia còn bước kia dùng nhân.

#### Remediation

- Nếu nhầm nhân/chia: quay lại CĐ02, phân biệt hai dạng của Bài 27 bằng câu hỏi “đã biết toàn bộ chưa?”.
- Nếu tính phân số chậm: ôn phép nhân, phép chia và quy đồng phân số.
- Bài dễ hơn: tìm $\frac35$ của 40; sau đó giải riêng bài “$\frac35$ của một số bằng 24”.

#### Figure

No catalog figure reference.

---

### WX13-LIN-001 — Nhận đúng vị trí góc rồi mới kết luận song song

- Topic: `CT13`; kind: `standard`; level: `CORE_BASE`; layer: `KNTT-Core`; expected minutes: 8.

- Grade overlay (advisory): `[7]`; catalog KNTT placement: `[{"grade":7,"chapter":3,"lesson":"Bài 9 — Hai đường thẳng song song và dấu hiệu nhận biết"}]`.

- Problem type: `parallel-converse-alt-interior` — Dùng góc so le trong để chứng minh song song.

- Prerequisites: nhan-dang-goc-dac-biet; Skills: goc-so-le-trong, dau-hieu-song-song, lap-luan-chung-minh-ngan.

- Source refs (not independently hydrated in packet): `docs/kien-thuc/13-goc-va-duong-thang/bai-tap.md#13-WR-08`; `docs/assets/data/curriculum/topic13-learning-workspace.json#geo13-core-3`; `docs/assets/data/curriculum/topic13-learning-workspace.json#geo13-core-4`.

#### Problem

Đường thẳng $c$ cắt hai đường thẳng phân biệt $a$ và $b$. Một cặp góc **so le trong** tạo bởi $c$ với $a,b$ đều có số đo $68^\circ$.

Chứng minh $a\parallel b$ và nêu rõ căn cứ dùng ở bước kết luận.

#### Worked solution steps

**S1: Xác định đúng quan hệ vị trí**

Theo đề bài, hai góc đã cho là một cặp **so le trong** do đường thẳng $c$ cắt $a$ và $b$.

**S2: So sánh số đo**

Hai góc đều bằng $68^\circ$, nên chúng bằng nhau.

**S3: Áp dụng dấu hiệu song song**

Nếu một đường thẳng cắt hai đường thẳng và tạo ra một cặp góc so le trong bằng nhau thì hai đường thẳng đó song song.

**S4: Kết luận**

Vì vậy

$$a\parallel b.$$

#### Rubric (4 points)

- Nhận đúng hai góc là so le trong. — **1 point(s)**
- Nêu được hai góc bằng nhau vì cùng bằng $68^\circ$. — **1 point(s)**
- Dùng đúng dấu hiệu nhận biết hai đường thẳng song song. — **1 point(s)**
- Kết luận đúng $a\parallel b$. — **1 point(s)**

#### Common mistakes

- Chỉ thấy hai góc bằng nhau rồi kết luận song song mà không xác định chúng là so le trong/đồng vị.
- Dùng tính chất 'hai đường song song thì góc bằng nhau' theo chiều ngược mà không gọi đúng đó là dấu hiệu.
- Suy ra song song chỉ từ hình vẽ.

#### Remediation links

- Ôn CĐ13 – Góc tạo bởi một đường cắt và dấu hiệu song song: `../kien-thuc/13-goc-va-duong-thang/core/`
- Practice Room CĐ13: `../kien-thuc/13-goc-va-duong-thang/bai-tap/`

#### Figure

No catalog figure reference.

---

### WX03-RAT-002 — Nhiều người hơn thì số ngày phải giảm

- Topic: `CT03`; kind: `standard`; level: `CORE_APPLY`; layer: `KNTT-Core`; expected minutes: 10.

- Grade overlay (advisory): `[7]`; catalog KNTT placement: `[{"grade":7,"chapter":6,"lesson":"Bài 23 — Đại lượng tỉ lệ nghịch"}]`.

- Problem type: `inverse-proportion-workers-days` — Nhận dạng và giải bài toán tỉ lệ nghịch.

- Prerequisites: (none); Skills: ti-le-nghich, he-so-ti-le-nghich, phan-biet-thuan-nghich.

- Source refs (not independently hydrated in packet): `docs/kien-thuc/03-ti-le-ti-le-thuc/bai-tap.md#03-M2-03`; `docs/assets/data/curriculum/topic03-learning-workspace.json#rat03-core-g7-5`.

#### Problem

Bốn người làm xong một công việc trong $15$ ngày. Giả sử mọi người có năng suất như nhau và khối lượng công việc không đổi.

1. Giải thích vì sao số người và số ngày là hai đại lượng tỉ lệ nghịch.
2. Nếu có $6$ người thì cần bao nhiêu ngày?
3. Kiểm tra kết quả bằng tích “số người × số ngày”.

#### Worked solution steps

**S1: Nhận dạng tỉ lệ nghịch**

Khối lượng công việc không đổi và năng suất mỗi người như nhau. Khi số người tăng thì số ngày cần thiết giảm sao cho tích **số người × số ngày** không đổi. Vì vậy hai đại lượng tỉ lệ nghịch.

**S2: Lập quan hệ tích không đổi**

Ta có

$$4\cdot15=6\cdot t,$$

với $t$ là số ngày cần khi có 6 người.

**S3: Giải**

Suy ra

$$t=\frac{4\cdot15}{6}=10.$$

**S4: Kiểm tra**

Ta có

$$4\cdot15=60,\qquad6\cdot10=60.$$

Hai tích bằng nhau, nên kết quả phù hợp với quan hệ tỉ lệ nghịch.

#### Rubric (4 points)

- Giải thích đúng vì sao đây là tỉ lệ nghịch. — **1 point(s)**
- Lập đúng $4\cdot15=6t$. — **1 point(s)**
- Tính đúng $t=10$ ngày. — **1 point(s)**
- Kiểm tra đúng bằng tích không đổi. — **1 point(s)**

#### Common mistakes

- Cho rằng nhiều người hơn thì số ngày cũng tăng theo tỉ lệ thuận.
- Lập tỉ lệ sai chiều và nhận kết quả 22,5 ngày.
- Không nêu giả thiết năng suất như nhau/khối lượng công việc không đổi.

#### Remediation links

- Ôn CĐ03 – Đại lượng tỉ lệ nghịch: `../kien-thuc/03-ti-le-ti-le-thuc/core/`
- Practice Room CĐ03: `../kien-thuc/03-ti-le-ti-le-thuc/bai-tap/`

#### Figure

No catalog figure reference.

---

### WX16-QUAD-001 — Hai dấu hiệu nối tiếp: hình bình hành → hình chữ nhật

- Topic: `CT16`; kind: `standard`; level: `CORE_BASE`; layer: `KNTT-Core`; expected minutes: 10.

- Grade overlay (advisory): `[8]`; catalog KNTT placement: `[{"grade":8,"chapter":3,"lesson":"Bài 12–13 — Hình bình hành và hình chữ nhật"}]`.

- Problem type: `quadrilateral-upgrade-parallelogram-rectangle` — Chứng minh hình bình hành rồi nâng cấp thành hình chữ nhật.

- Prerequisites: tinh-chat-song-song; Skills: hbh-dau-hieu, hcn-dau-hieu.

- Source refs (not independently hydrated in packet): `docs/kien-thuc/16-tu-giac/bai-tap.md#16-WR-04`; `docs/kien-thuc/16-tu-giac/bai-tap.md#16-WR-05`; `docs/assets/data/curriculum/topic16-learning-workspace.json#geo16-core-2`; `docs/assets/data/curriculum/topic16-learning-workspace.json#geo16-core-3`.

#### Problem

Cho tứ giác lồi $ABCD$ có

$$AB\parallel CD,\qquad AB=CD,\qquad \angle ABC=90^\circ.$$

Chứng minh $ABCD$ là hình chữ nhật.

#### Worked solution steps

**S1: Nhận ra dấu hiệu hình bình hành**

Trong tứ giác $ABCD$, $AB$ và $CD$ là một cặp cạnh đối. Theo giả thiết, cặp cạnh đối này vừa song song vừa bằng nhau.

**S2: Kết luận hình bình hành**

Tứ giác có một cặp cạnh đối vừa song song vừa bằng nhau là hình bình hành. Do đó $ABCD$ là hình bình hành.

**S3: Dùng thêm góc vuông**

Hình bình hành $ABCD$ có $\angle ABC=90^\circ$.

**S4: Nâng cấp kết luận**

Hình bình hành có một góc vuông là hình chữ nhật. Vậy $ABCD$ là hình chữ nhật.

#### Rubric (4 points)

- Xác định $AB$ và $CD$ là hai cạnh đối, vừa song song vừa bằng nhau. — **1 point(s)**
- Dùng đúng dấu hiệu để kết luận $ABCD$ là hình bình hành. — **1 point(s)**
- Sử dụng đúng giả thiết $\angle ABC=90^\circ$ sau khi đã có hình bình hành. — **1 point(s)**
- Kết luận đúng $ABCD$ là hình chữ nhật. — **1 point(s)**

#### Common mistakes

- Kết luận hình chữ nhật ngay từ $AB\parallel CD$ và $AB=CD$ mà không qua bước hình bình hành.
- Dùng một góc vuông để kết luận tứ giác bất kỳ là hình chữ nhật.
- Nhầm $AB$ và $CD$ là hai cạnh kề.

#### Remediation links

- Ôn CĐ16 – Dấu hiệu hình bình hành và hình chữ nhật: `../kien-thuc/16-tu-giac/core/`
- Practice Room CĐ16: `../kien-thuc/16-tu-giac/bai-tap/`

#### Figure

No catalog figure reference.

---

### WX07-RAT-001 — Rút gọn nhưng không làm mất điều kiện ban đầu

- Topic: `CT07`; kind: `standard`; level: `CORE_BASE`; layer: `KNTT-Core`; expected minutes: 8.

- Grade overlay (advisory): `[8]`; catalog KNTT placement: `[{"grade":8,"chapter":6,"lesson":"Bài 21–22 — Phân thức đại số và tính chất cơ bản"}]`.

- Problem type: `rat-simplify-domain` — Rút gọn phân thức và giữ điều kiện xác định.

- Prerequisites: hang-dang-thuc, phan-tich-da-thuc; Skills: dieu-kien-xac-dinh, phan-tich-da-thuc, rut-gon-phan-thuc.

- Source refs (not independently hydrated in packet): `docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md#07-WR-07`; `docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md#07-WR-11`.

#### Problem

Cho

$$A=\frac{x^2-9}{x^2-3x}.$$

1. Tìm điều kiện xác định của $A$.
2. Rút gọn $A$.
3. Viết kết quả cuối cùng kèm điều kiện của $x$.

#### Worked solution steps

**S1: Điều kiện xác định**

Mẫu số là $x^2-3x=x(x-3)$. Vì mẫu phải khác $0$ nên

$$x\ne0,\qquad x\ne3.$$

**S2: Phân tích tử và mẫu**

Dùng hiệu hai bình phương:

$$x^2-9=(x-3)(x+3),$$

và

$$x^2-3x=x(x-3).$$

**S3: Rút gọn**

Trên miền xác định đã nêu,

$$A=\frac{(x-3)(x+3)}{x(x-3)}=\frac{x+3}{x}.$$

**S4: Kết luận**

Vậy

$$A=\frac{x+3}{x},\qquad x\ne0,3.$$

Điều kiện $x\ne3$ vẫn phải giữ dù nhân tử $x-3$ đã được rút gọn.

#### Rubric (4 points)

- Xác định đúng mẫu và điều kiện $x\ne0,3$. — **1 point(s)**
- Phân tích đúng $x^2-9$ và $x^2-3x$ thành nhân tử. — **1 point(s)**
- Rút gọn đúng về $\frac{x+3}{x}$. — **1 point(s)**
- Kết luận giữ đủ điều kiện ban đầu $x\ne0,3$. — **1 point(s)**

#### Common mistakes

- Chỉ ghi $x\ne0$ sau khi rút gọn và quên mất $x\ne3$.
- Triệt tiêu $x-3$ trước khi nêu điều kiện xác định.
- Phân tích sai $x^2-3x$ thành $x(x+3)$.

#### Remediation links

- Ôn CĐ07 – Core theo chặng: `../kien-thuc/07-phan-thuc-dai-so/core/`
- Luyện thêm CĐ07: `../kien-thuc/07-phan-thuc-dai-so/bai-tap/`

#### Figure

No catalog figure reference.

---

### WX09-SYS-003 — Từ tổng số vé và tổng tiền đến hệ phương trình

- Topic: `CT09`; kind: `anchor`; level: `CORE_BASE`; layer: `KNTT-Core`; expected minutes: 15.

- Grade overlay (advisory): `[9]`; catalog KNTT placement: `[{"grade":9,"chapter":1,"lesson":"Bài 3 — Giải bài toán bằng cách lập hệ phương trình"}]`.

- Problem type: `system-modelling-count-value` — Lập hệ từ số lượng và tổng giá trị.

- Prerequisites: giai-he-cong; Skills: lap-he-bai-toan, bai-toan-so, giai-he-cong, kiem-tra-nghiem-he.

- Source refs (not independently hydrated in packet): `review-packets/academic-depth/ct09-p1b/01_NOTEBOOKLM_CT09_P1B_WRITTEN_ANCHORS_R1.md`; `docs/assets/data/curriculum/topic09-learning-workspace.json#sys09-core-5`.

#### Problem

Một khu tham quan bán tổng cộng **40 vé** trong một lượt khách. Vé người lớn giá **15 nghìn đồng**, vé học sinh giá **8 nghìn đồng**. Tổng số tiền thu được là **488 nghìn đồng**.

Hỏi đã bán bao nhiêu vé người lớn và bao nhiêu vé học sinh?

#### Progressive hints

**Hint 1:**

Có hai loại vé và cần tìm **số lượng của từng loại**. Hãy chọn hai ẩn theo số vé.

**Hint 2:**

Bài cho hai quan hệ độc lập:
- tổng số vé;
- tổng số tiền.

**Hint 3:**

Nếu gọi $x$ là số vé người lớn và $y$ là số vé học sinh, hãy bắt đầu bằng

$$x+y=40.$$

Phương trình tiền phải có đơn vị nghìn đồng.

#### Full solution

Gọi $x$ là số vé người lớn và $y$ là số vé học sinh. Điều kiện: $x,y$ là các số nguyên không âm.

Từ tổng số vé:

$$x+y=40.$$

Từ tổng số tiền, tính theo nghìn đồng:

$$15x+8y=488.$$

Ta có hệ:

$$\begin{cases}x+y=40\\15x+8y=488\end{cases}$$

Nhân phương trình đầu với $8$:

$$8x+8y=320.$$

Lấy phương trình tiền trừ phương trình này:

$$7x=168\Rightarrow x=24.$$

Suy ra

$$y=40-24=16.$$

Kiểm tra:

$$24+16=40,$$

$$15\cdot24+8\cdot16=360+128=488.$$

Vậy đã bán **24 vé người lớn** và **16 vé học sinh**.

#### Why this method

Cộng đại số thuận tiện vì phương trình số lượng có thể nhân với $8$ để khử ngay $y$. Phần khó chính của bài không phải phép khử mà là **dịch đúng hai dữ kiện sang hai phương trình cùng đơn vị**.

#### Rubric (5 points)

- Chọn đúng hai ẩn và điều kiện. — **1 point(s)**
- Lập đúng $x+y=40$. — **1 point(s)**
- Lập đúng $15x+8y=488$. — **1 point(s)**
- Giải đúng $x=24, y=16$. — **1 point(s)**
- Kiểm tra và kết luận đúng ngữ cảnh. — **1 point(s)**

#### Common mistakes

- Viết $15x+8y=40$, làm hai vế khác đại lượng.
- Quên ghi đơn vị nghìn đồng.
- Giải ra $x,y$ nhưng không kiểm tra chúng là số nguyên không âm.
- Chỉ kiểm tra tổng số vé mà không kiểm tra tổng tiền.

#### Remediation

- Nếu chưa biết đặt ẩn/lập hệ: quay lại CĐ09 → “Bài toán bằng cách lập hệ”.
- Nếu lập được hệ nhưng giải chậm: ôn “phương pháp cộng đại số”.
- Bài anh em dễ hơn: tổng 20 vé, hai mức giá, số tiền được chọn để nghiệm nguyên nhỏ.

#### Figure

No catalog figure reference.

---

### WX19-CIR-002 — Nhận ra nội tiếp rồi khai thác cặp góc đối

- Topic: `CT19`; kind: `standard`; level: `CORE_APPLY`; layer: `KNTT-Core`; expected minutes: 10.

- Grade overlay (advisory): `[9]`; catalog KNTT placement: `[{"grade":9,"chapter":9,"lesson":"Bài 29 — Tứ giác nội tiếp"}]`.

- Problem type: `circle-cyclic-quadrilateral-angle` — Dấu hiệu tứ giác nội tiếp và góc đối.

- Prerequisites: do-goc; Skills: tu-giac-noi-tiep, dau-hieu-noi-tiep.

- Source refs (not independently hydrated in packet): `docs/kien-thuc/19-duong-tron/bai-tap.md#19-WR-08`; `docs/assets/data/curriculum/topic19-learning-workspace.json#geo19-core-4`.

#### Problem

Cho tứ giác **lồi** $ABCD$ có

$$\angle BAD=72^\circ,\qquad \angle BCD=108^\circ.$$

1. Chứng minh $ABCD$ nội tiếp được một đường tròn.
2. Biết thêm $\angle ABC=118^\circ$. Tính $\angle ADC$.

#### Worked solution steps

**S1: Kiểm tra một cặp góc đối**

Hai góc $\angle BAD$ và $\angle BCD$ là hai góc đối của tứ giác lồi $ABCD$ và

$$72^\circ+108^\circ=180^\circ.$$

**S2: Kết luận nội tiếp**

Vì một cặp góc đối của tứ giác lồi bù nhau, theo dấu hiệu đảo, bốn điểm $A,B,C,D$ cùng thuộc một đường tròn. Do đó $ABCD$ là tứ giác nội tiếp.

**S3: Dùng tính chất của tứ giác nội tiếp**

Trong tứ giác nội tiếp, hai góc đối bù nhau:

$$\angle ABC+\angle ADC=180^\circ.$$

**S4: Tính góc còn lại**

Suy ra

$$\angle ADC=180^\circ-118^\circ=62^\circ.$$

#### Rubric (4 points)

- Nhận ra đúng $\angle BAD$ và $\angle BCD$ là hai góc đối và có tổng $180^\circ$. — **1 point(s)**
- Dùng đúng dấu hiệu đảo để chứng minh tứ giác nội tiếp. — **1 point(s)**
- Viết đúng tính chất $\angle ABC+\angle ADC=180^\circ$. — **1 point(s)**
- Tính đúng $\angle ADC=62^\circ$. — **1 point(s)**

#### Common mistakes

- Kết luận nội tiếp chỉ vì hình vẽ trông giống tứ giác nội tiếp.
- Dùng hai góc kề thay vì một cặp góc đối để kiểm tra tổng $180^\circ$.
- Sau khi đã chứng minh nội tiếp, trừ sai và cho $\angle ADC=118^\circ$.

#### Remediation links

- Ôn CĐ19 – Tứ giác nội tiếp: `../kien-thuc/19-duong-tron/core/`
- Practice Room CĐ19: `../kien-thuc/19-duong-tron/bai-tap/`

#### Figure

No catalog figure reference.

---

## Required reviewer output

Return a machine-readable verdict for each of these IDs exactly once, in this order:

```text
PACKET_ID|MATH-WRITTEN-QUALITY-8PILOT-20261022-R0
SOURCE_BLOB|5141a40bf1b8f8763257857d3b805d681a0956fa
EXPECTED_COUNT|8
ITEM|WX02-NUM-001|PASS/REVISE/INSUFFICIENT_EVIDENCE
ITEM|WX02-NUM-003|PASS/REVISE/INSUFFICIENT_EVIDENCE
ITEM|WX13-LIN-001|PASS/REVISE/INSUFFICIENT_EVIDENCE
ITEM|WX03-RAT-002|PASS/REVISE/INSUFFICIENT_EVIDENCE
ITEM|WX16-QUAD-001|PASS/REVISE/INSUFFICIENT_EVIDENCE
ITEM|WX07-RAT-001|PASS/REVISE/INSUFFICIENT_EVIDENCE
ITEM|WX09-SYS-003|PASS/REVISE/INSUFFICIENT_EVIDENCE
ITEM|WX19-CIR-002|PASS/REVISE/INSUFFICIENT_EVIDENCE
COVERAGE|8|<REVIEWED_COUNT>|<MISSING_COUNT>|<UNEXPECTED_COUNT>
OVERALL|PASS/REVISE/INSUFFICIENT_EVIDENCE
AUTHORIZATION|REVIEW_ONLY_NO_DEPLOY
```

For each non-PASS: exact exercise ID, issue category (math / pedagogy / rubric / map / provenance / diagram), severity P0/P1/P2, exact evidence and minimal proposed correction. Separately report KNTT placement verification status per ID. Never infer that missing S1 or authentic exam evidence is a PASS. Reviewer output alone does not authorize release.
