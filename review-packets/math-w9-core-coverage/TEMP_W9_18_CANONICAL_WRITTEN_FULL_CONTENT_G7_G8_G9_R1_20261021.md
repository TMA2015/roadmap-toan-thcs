# W9 — First multi-grade canonical Written depth + KNTT-placement review batch (18 ORIGINAL items)

**PACKET_ID:** `MATH-W9-WRITTEN-G7G8G9-18SOURCE-PLACEMENT-DEPTH-R1-20261021`  
**Status:** `SOURCE_LOCKED_REVIEW_REQUEST_ONLY / NOT_NOTEBOOKLM_APPROVED / NO_LIVE_RELEASE`  
**S1 limitation:** The old KNTT row matrix included below is a *reviewed curriculum map summary*, not original textbook page evidence. Reviewer should compare actual independent KNTT textbook S1 material; when unavailable, report `G7/8/9_PLACEMENT:INSUFFICIENT_S1`, not fabricate `VERIFIED`.  
**Full canonical library:** `docs/assets/data/written-exercises/written-exercise-library-v1.json` Git blob `a8f19cea7f0f8b181e3cc1385ddbff13b75c252d` (74 approved exercises); **do not modify these items**.  
**Historical grade map:** `docs/assets/data/curriculum/kntt-coverage-matrix-6-9-v1.json` Git blob `2935f58925918674b5bacd2d8743d5526283adba` (2026-10-04 snapshot).  
**Owner direction:** Cover essentials, practical routines, representative written reasoning, useful prerequisite/skill links; do **not** use number of exercises as a coverage proxy. No claim of full curriculum coverage from this packet.

## Scope & methodology

This is a representative **first batch of 18 existing canonical Core Written IDs** (six grade-7, six grade-8, six grade-9). These are NOT newly authored questions, NOT a replacement for 66 unplaced IDs, and NOT a quota for the curriculum.

For each item, judge the mathematical argument and teaching quality from **exact original problem, solution, common errors and rubric** below. Determine if a Grade/Chapter/Lesson placement is warranted **from independent curriculum evidence**, not grade_overlay or appearance of a prerequisite. Suggest only actual KNTT placement(s) once S1 verified. A missing placement field means review outstanding; it does not mean the item or level is wrong.

Also judge ability to teach **why the method is selected**, illustrate a misconception, provide sensible prerequisite/remediation, and serve as CORE_BASE or CORE_APPLY at the referenced grade. If a figure is mathematically required, flag `FIGURE_REQUIRED` rather than hallucinate a diagram.

### Explicit review output for each of 18 canonical IDs

```text
ITEM_ID|...
MATH|PASS / REVISE / INSUFFICIENT_EVIDENCE
EXPLANATION|COMPLETE / MINOR_GAP / REVISE
PEDAGOGY|CORE_REPRESENTATIVE / SUPPORT_ONLY / TRANSFER_OR_ADVANCED / INSUFFICIENT_EVIDENCE
KNTT_PLACEMENT|VERIFIED:Gx_Chy_BaiZ / INSUFFICIENT_S1 / NOT_CORE_PLACEMENT
LESSON_EVIDENCE|exact primary KNTT evidence or missing
MISCONCEPTION_AND_METHOD|brief factual note
NEXT_ACTION|KEEP / ADD_VERIFIED_PLACEMENT_METADATA / REVISE_AUTHORING_SEPARATELY / HOLD
```

**Required batch-level receipt:** exactly 18 IDs, duplicates none, unexpected none; count verified vs S1-insufficient vs rejected; 3 grades covered for review **only**, no user-facing placement until authorized; `AUTHORIZATION|NO_LIVE_RELEASE`.

## Historical KNTT source-map snippets — context only

The following are the exact lesson-reference and topical roadmap descriptors from the historical matrix. They are *possible destinations for review*, not automatic matches of specific written questions.

### Grade 7: 21 mapped lesson groups

| Chapter | Lesson reference | Curriculum scope | Topic roadmap | Historical skill-mapping state |
|---:|---|---|---|---|
| 1 | Bài 1-3 | Tập hợp số hữu tỉ; cộng, trừ, nhân, chia số hữu tỉ; lũy thừa với số mũ tự nhiên của số hữu tỉ. | 02-so-va-phep-tinh:PRIMARY | CURRENT_MAPPED |
| 1 | Bài 4 | Thứ tự thực hiện phép tính; quy tắc chuyển vế trong các bài toán tìm số hữu tỉ chưa biết. | 02-so-va-phep-tinh:PRIMARY, 08-phuong-trinh-bat-phuong-trinh:PREREQUISITE | PARTIAL_RECONCILE |
| 2 | Bài 5-7 | Số thập phân vô hạn tuần hoàn; số vô tỉ; căn bậc hai số học; tập hợp số thực. | 02-so-va-phep-tinh:PRIMARY, 11-can-thuc:PREREQUISITE | PARTIAL_RECONCILE |
| 3 | Bài 8 | Góc ở vị trí đặc biệt và tia phân giác của một góc. | 13-goc-va-duong-thang:PRIMARY | CURRENT_MAPPED |
| 3 | Bài 9-10 | Dấu hiệu nhận biết hai đường thẳng song song; tiên đề Euclid; tính chất của hai đường thẳng song song. | 13-goc-va-duong-thang:PRIMARY | CURRENT_MAPPED |
| 3 | Bài 11 | Khái niệm định lí; giả thiết, kết luận; bước đầu chứng minh định lí. | 13-goc-va-duong-thang:PRIMARY, 14-tam-giac:PREREQUISITE | CURRENT_MAPPED |
| 4 | Bài 12 | Tổng các góc trong một tam giác. | 14-tam-giac:PRIMARY | CURRENT_MAPPED |
| 4 | Bài 13-15 | Hai tam giác bằng nhau; các trường hợp c-c-c, c-g-c, g-c-g và các trường hợp bằng nhau của tam giác vuông. | 14-tam-giac:PRIMARY | CURRENT_MAPPED |
| 4 | Bài 16 | Tam giác cân; đường trung trực của đoạn thẳng và tính chất cách đều hai đầu mút. | 14-tam-giac:PRIMARY, 15-duong-dong-quy:PREREQUISITE | CURRENT_MAPPED |
| 5 | Bài 17 | Thu thập và phân loại dữ liệu. | 21-thong-ke:PRIMARY | CURRENT_MAPPED |
| 5 | Bài 18-19 | Biểu đồ hình quạt tròn và biểu đồ đoạn thẳng; đọc, biểu diễn và nhận xét dữ liệu. | 21-thong-ke:PRIMARY, 03-ti-le-ti-le-thuc:SECONDARY | PARTIAL_RECONCILE |
| 6 | Bài 20-21 | Tỉ lệ thức; tính chất dãy tỉ số bằng nhau. | 03-ti-le-ti-le-thuc:PRIMARY | CURRENT_MAPPED |
| 6 | Bài 22-23 | Đại lượng tỉ lệ thuận, tỉ lệ nghịch và các bài toán ứng dụng. | 03-ti-le-ti-le-thuc:PRIMARY, 24-bai-toan-thuc-te:SECONDARY | CURRENT_MAPPED |
| 7 | Bài 24-25 | Biểu thức đại số; giá trị biểu thức; đa thức một biến, hệ số và bậc. | 04-bieu-thuc-dai-so:PRIMARY | PARTIAL_RECONCILE |
| 7 | Bài 26-28 | Cộng, trừ, nhân và chia đa thức một biến. | 04-bieu-thuc-dai-so:PRIMARY, 05-7-hang-dang-thuc:PREREQUISITE, 06-phan-tich-da-thuc:PREREQUISITE | CURRENT_MAPPED |
| 8 | Bài 29 | Làm quen với biến cố; biến cố chắc chắn, không thể và ngẫu nhiên trong các tình huống đơn giản. | 23-xac-suat:PRIMARY | CURRENT_MAPPED |
| 8 | Bài 30 | Làm quen với xác suất của biến cố trong các mô hình đơn giản. | 23-xac-suat:PRIMARY | PARTIAL_RECONCILE |
| 9 | Bài 31-33 | Quan hệ góc–cạnh đối diện; đường vuông góc và đường xiên; bất đẳng thức tam giác. | 14-tam-giac:PRIMARY | CURRENT_MAPPED |
| 9 | Bài 34-35 | Sự đồng quy và tính chất cơ bản của trung tuyến, phân giác, trung trực, đường cao. | 15-duong-dong-quy:PRIMARY | CURRENT_MAPPED |
| 10 | Bài 36 | Hình hộp chữ nhật và hình lập phương; yếu tố hình, diện tích xung quanh/toàn phần và thể tích. | 20-hinh-hoc-tong-hop:PRIMARY, 24-bai-toan-thuc-te:SECONDARY | CURRENT_MAPPED |
| 10 | Bài 37 | Hình lăng trụ đứng tam giác, tứ giác; yếu tố hình, diện tích xung quanh và thể tích; vận dụng thực tế. | 20-hinh-hoc-tong-hop:PRIMARY, 24-bai-toan-thuc-te:SECONDARY | CURRENT_MAPPED |

### Grade 8: 16 mapped lesson groups

| Chapter | Lesson reference | Curriculum scope | Topic roadmap | Historical skill-mapping state |
|---:|---|---|---|---|
| 1 | Bài 1-5 | Đơn thức và đa thức nhiều biến; hệ số, bậc, hạng tử đồng dạng; thu gọn; cộng, trừ, nhân đa thức; chia đa thức cho đơn thức. | 04-bieu-thuc-dai-so:PRIMARY | CURRENT_MAPPED |
| 2 | Bài 6-8 | Nhận dạng, khai triển, biến đổi và vận dụng 7 hằng đẳng thức đáng nhớ. | 05-7-hang-dang-thuc:PRIMARY | CURRENT_MAPPED |
| 2 | Bài 9 | Phân tích đa thức thành nhân tử bằng đặt nhân tử chung, nhóm hạng tử, dùng hằng đẳng thức và phối hợp các phương pháp ở mức KNTT Core. | 06-phan-tich-da-thuc:PRIMARY | CURRENT_MAPPED |
| 3 | Bài 10-14 | Tứ giác và tổng góc; hình thang cân, hình bình hành, hình chữ nhật, hình thoi, hình vuông: tính chất, dấu hiệu nhận biết và quan hệ bao hàm. | 16-tu-giac:PRIMARY | CURRENT_MAPPED |
| 4 | Bài 15-16 | Định lí Thalès thuận, đảo; tỉ lệ đoạn thẳng; đường trung bình của tam giác. | 17-thales-dong-dang:PRIMARY | CURRENT_MAPPED |
| 4 | Bài 17 | Tính chất đường phân giác trong tam giác và sử dụng tỉ lệ đoạn thẳng. | 17-thales-dong-dang:PRIMARY | CURRENT_MAPPED |
| 5 | Bài 18-20 | Thu thập, phân loại, biểu diễn và phân tích dữ liệu; chọn/đọc/chuyển dạng biểu đồ; nhận xét số liệu từ biểu đồ. | 21-thong-ke:PRIMARY | CURRENT_MAPPED |
| 6 | Bài 21-24 | Phân thức đại số; điều kiện mẫu khác 0; tính chất cơ bản; rút gọn, quy đồng; cộng, trừ, nhân, chia phân thức. | 07-phan-thuc-dai-so:PRIMARY | PARTIAL_RECONCILE |
| 7 | Bài 25-26 | Khái niệm và nghiệm phương trình bậc nhất một ẩn; biến đổi về ax+b=0; giải bài toán bằng cách lập phương trình. | 08-phuong-trinh-bat-phuong-trinh:PRIMARY, 24-bai-toan-thuc-te:SECONDARY | CURRENT_MAPPED |
| 7 | Bài 27-29 | Khái niệm hàm số; giá trị và bảng giá trị; điểm/đồ thị; hàm số bậc nhất y=ax+b và đồ thị; hệ số góc. | 10-ham-so-do-thi:PRIMARY | CURRENT_MAPPED |
| 8 | Bài 30 | Kết quả có thể của hành động/thực nghiệm và kết quả thuận lợi cho một biến cố. | 23-xac-suat:PRIMARY | PARTIAL_RECONCILE |
| 8 | Bài 31-32 | Tính xác suất của biến cố bằng tỉ số trong mô hình đơn giản; liên hệ xác suất thực nghiệm với xác suất. | 23-xac-suat:PRIMARY | CURRENT_MAPPED |
| 9 | Bài 33-34, 36 | Hai tam giác đồng dạng; ba trường hợp đồng dạng; đồng dạng của tam giác vuông; thứ tự tương ứng và tính độ dài. | 17-thales-dong-dang:PRIMARY | CURRENT_MAPPED |
| 9 | Bài 35 | Định lí Pythagore thuận và đảo, tính độ dài trong tam giác vuông. | 18-he-thuc-luong:PRIMARY | CURRENT_MAPPED |
| 9 | Bài 37 | Nhận biết và mô tả hình đồng dạng ở mức KNTT lớp 8. | 17-thales-dong-dang:PRIMARY, 20-hinh-hoc-tong-hop:SECONDARY | CURRENT_MAPPED |
| 10 | Bài 38-39 | Hình chóp tam giác đều, hình chóp tứ giác đều; nhận biết yếu tố hình; diện tích xung quanh và thể tích. | 20-hinh-hoc-tong-hop:PRIMARY, 24-bai-toan-thuc-te:SECONDARY | CURRENT_MAPPED |

### Grade 9: 10 mapped lesson groups

| Chapter | Lesson reference | Curriculum scope | Topic roadmap | Historical skill-mapping state |
|---:|---|---|---|---|
| 1 |  | Phương trình và hệ hai phương trình bậc nhất hai ẩn | 09-he-phuong-trinh:PRIMARY_OR_UNSPECIFIED, 24-bai-toan-thuc-te:PRIMARY_OR_UNSPECIFIED | CURRENT_MAPPED |
| 2 |  | Phương trình và bất phương trình bậc nhất một ẩn | 08-phuong-trinh-bat-phuong-trinh:PRIMARY_OR_UNSPECIFIED | CURRENT_MAPPED |
| 3 |  | Căn bậc hai và căn bậc ba | 11-can-thuc:PRIMARY_OR_UNSPECIFIED | CURRENT_MAPPED |
| 4 |  | Hệ thức lượng trong tam giác vuông | 18-he-thuc-luong:PRIMARY_OR_UNSPECIFIED, 24-bai-toan-thuc-te:PRIMARY_OR_UNSPECIFIED | CURRENT_MAPPED |
| 5 |  | Đường tròn | 19-duong-tron:PRIMARY_OR_UNSPECIFIED | CURRENT_MAPPED |
| 6 |  | Hàm số y=ax² và phương trình bậc hai | 10-ham-so-do-thi:PRIMARY_OR_UNSPECIFIED, 12-phuong-trinh-bac-hai-viete:PRIMARY_OR_UNSPECIFIED, 24-bai-toan-thuc-te:PRIMARY_OR_UNSPECIFIED | CURRENT_MAPPED_ITEM_REVIEW |
| 7 |  | Tần số và tần số tương đối | 21-thong-ke:PRIMARY_OR_UNSPECIFIED | PARTIAL_RECONCILE |
| 8 |  | Xác suất của biến cố trong một số mô hình xác suất đơn giản | 23-xac-suat:PRIMARY_OR_UNSPECIFIED | CURRENT_MAPPED_ITEM_REVIEW |
| 9 |  | Đường tròn ngoại tiếp và đường tròn nội tiếp | 19-duong-tron:PRIMARY_OR_UNSPECIFIED | CURRENT_MAPPED |
| 10 |  | Một số hình khối trong thực tiễn | 20-hinh-hoc-tong-hop:PRIMARY_OR_UNSPECIFIED, 24-bai-toan-thuc-te:PRIMARY_OR_UNSPECIFIED | CURRENT_MAPPED |


## Grade 7 — six original canonical Written cases

### 7.1 — WX03-RAT-001 · Từ tổng số phần đến giá trị từng phần

- Canonical ID: `WX03-RAT-001`; topic: `CT03` (`03-ti-le-ti-le-thuc`); kind: `standard`; level: `CORE_BASE`; academic review: `APPROVED` / `NOTEBOOKLM_R1`
- Advisory `grade_overlay`: `7` — **NOT validated KNTT placement**; actual `kntt_placements`: `[]`.
- Problem type: Chia một tổng theo tỉ lệ; skills: day-ti-so-bang-nhau; chia-theo-ti-le; prerequisite skills: not supplied.
- Existing source links: docs/kien-thuc/03-ti-le-ti-le-thuc/bai-tap.md#03-M2-01; docs/assets/data/curriculum/topic03-learning-workspace.json#rat03-core-g7-3; remediation links: Ôn CĐ03 – Dãy tỉ số bằng nhau và chia theo tỉ lệ — ../kien-thuc/03-ti-le-ti-le-thuc/core/; Practice Room CĐ03 — ../kien-thuc/03-ti-le-ti-le-thuc/bai-tap/.
- Figure: none; expected work: 9 minutes.

**Original problem (unchanged)**

Chia số $84$ thành hai phần $x$ và $y$ theo tỉ lệ

$$x:y=2:5.$$

Tính $x,y$ và kiểm tra cả tổng lẫn tỉ lệ.

**Original solution steps**

**S1 — Biểu diễn theo cùng một đơn vị phần:** Vì $x:y=2:5$, đặt

$$x=2k,\qquad y=5k.$$

**S2 — Dùng tổng:** Ta có

$$x+y=84\Rightarrow2k+5k=84\Rightarrow7k=84,$$

nên $k=12$.

**S3 — Tính hai phần:** Suy ra

$$x=2\cdot12=24,\qquad y=5\cdot12=60.$$

**S4 — Kiểm tra:** Ta có $24+60=84$ và

$$24:60=2:5.$$

Vậy kết quả thỏa cả tổng và tỉ lệ đã cho.

**Original rubric (total `4`)**

- Biểu diễn đúng $x=2k,y=5k$ hoặc cách tương đương. (1 điểm)
- Dùng đúng $x+y=84$ để tìm $k=12$. (1 điểm)
- Tính đúng $x=24,y=60$. (1 điểm)
- Kiểm tra đúng tổng và tỉ lệ. (1 điểm)

**Original common mistakes**

- Chia 84 trực tiếp cho 2 và 5 riêng rẽ.
- Dùng hiệu $5-2$ thay vì tổng số phần $2+5$.
- Tìm được hai số nhưng không kiểm tra lại tỉ lệ.


### 7.2 — WX03-RAT-002 · Nhiều người hơn thì số ngày phải giảm

- Canonical ID: `WX03-RAT-002`; topic: `CT03` (`03-ti-le-ti-le-thuc`); kind: `standard`; level: `CORE_APPLY`; academic review: `APPROVED` / `NOTEBOOKLM_R1`
- Advisory `grade_overlay`: `7` — **NOT validated KNTT placement**; actual `kntt_placements`: `[]`.
- Problem type: Nhận dạng và giải bài toán tỉ lệ nghịch; skills: ti-le-nghich; he-so-ti-le-nghich; phan-biet-thuan-nghich; prerequisite skills: not supplied.
- Existing source links: docs/kien-thuc/03-ti-le-ti-le-thuc/bai-tap.md#03-M2-03; docs/assets/data/curriculum/topic03-learning-workspace.json#rat03-core-g7-5; remediation links: Ôn CĐ03 – Đại lượng tỉ lệ nghịch — ../kien-thuc/03-ti-le-ti-le-thuc/core/; Practice Room CĐ03 — ../kien-thuc/03-ti-le-ti-le-thuc/bai-tap/.
- Figure: none; expected work: 10 minutes.

**Original problem (unchanged)**

Bốn người làm xong một công việc trong $15$ ngày. Giả sử mọi người có năng suất như nhau và khối lượng công việc không đổi.

1. Giải thích vì sao số người và số ngày là hai đại lượng tỉ lệ nghịch.
2. Nếu có $6$ người thì cần bao nhiêu ngày?
3. Kiểm tra kết quả bằng tích “số người × số ngày”.

**Original solution steps**

**S1 — Nhận dạng tỉ lệ nghịch:** Khối lượng công việc không đổi và năng suất mỗi người như nhau. Khi số người tăng thì số ngày cần thiết giảm sao cho tích **số người × số ngày** không đổi. Vì vậy hai đại lượng tỉ lệ nghịch.

**S2 — Lập quan hệ tích không đổi:** Ta có

$$4\cdot15=6\cdot t,$$

với $t$ là số ngày cần khi có 6 người.

**S3 — Giải:** Suy ra

$$t=\frac{4\cdot15}{6}=10.$$

**S4 — Kiểm tra:** Ta có

$$4\cdot15=60,\qquad6\cdot10=60.$$

Hai tích bằng nhau, nên kết quả phù hợp với quan hệ tỉ lệ nghịch.

**Original rubric (total `4`)**

- Giải thích đúng vì sao đây là tỉ lệ nghịch. (1 điểm)
- Lập đúng $4\cdot15=6t$. (1 điểm)
- Tính đúng $t=10$ ngày. (1 điểm)
- Kiểm tra đúng bằng tích không đổi. (1 điểm)

**Original common mistakes**

- Cho rằng nhiều người hơn thì số ngày cũng tăng theo tỉ lệ thuận.
- Lập tỉ lệ sai chiều và nhận kết quả 22,5 ngày.
- Không nêu giả thiết năng suất như nhau/khối lượng công việc không đổi.


### 7.3 — WX13-LIN-001 · Nhận đúng vị trí góc rồi mới kết luận song song

- Canonical ID: `WX13-LIN-001`; topic: `CT13` (`13-goc-va-duong-thang`); kind: `standard`; level: `CORE_BASE`; academic review: `APPROVED` / `NOTEBOOKLM_R1`
- Advisory `grade_overlay`: `7` — **NOT validated KNTT placement**; actual `kntt_placements`: `[]`.
- Problem type: Dùng góc so le trong để chứng minh song song; skills: goc-so-le-trong; dau-hieu-song-song; lap-luan-chung-minh-ngan; prerequisite skills: nhan-dang-goc-dac-biet.
- Existing source links: docs/kien-thuc/13-goc-va-duong-thang/bai-tap.md#13-WR-08; docs/assets/data/curriculum/topic13-learning-workspace.json#geo13-core-3; docs/assets/data/curriculum/topic13-learning-workspace.json#geo13-core-4; remediation links: Ôn CĐ13 – Góc tạo bởi một đường cắt và dấu hiệu song song — ../kien-thuc/13-goc-va-duong-thang/core/; Practice Room CĐ13 — ../kien-thuc/13-goc-va-duong-thang/bai-tap/.
- Figure: none; expected work: 8 minutes.

**Original problem (unchanged)**

Đường thẳng $c$ cắt hai đường thẳng phân biệt $a$ và $b$. Một cặp góc **so le trong** tạo bởi $c$ với $a,b$ đều có số đo $68^\circ$.

Chứng minh $a\parallel b$ và nêu rõ căn cứ dùng ở bước kết luận.

**Original solution steps**

**S1 — Xác định đúng quan hệ vị trí:** Theo đề bài, hai góc đã cho là một cặp **so le trong** do đường thẳng $c$ cắt $a$ và $b$.

**S2 — So sánh số đo:** Hai góc đều bằng $68^\circ$, nên chúng bằng nhau.

**S3 — Áp dụng dấu hiệu song song:** Nếu một đường thẳng cắt hai đường thẳng và tạo ra một cặp góc so le trong bằng nhau thì hai đường thẳng đó song song.

**S4 — Kết luận:** Vì vậy

$$a\parallel b.$$

**Original rubric (total `4`)**

- Nhận đúng hai góc là so le trong. (1 điểm)
- Nêu được hai góc bằng nhau vì cùng bằng $68^\circ$. (1 điểm)
- Dùng đúng dấu hiệu nhận biết hai đường thẳng song song. (1 điểm)
- Kết luận đúng $a\parallel b$. (1 điểm)

**Original common mistakes**

- Chỉ thấy hai góc bằng nhau rồi kết luận song song mà không xác định chúng là so le trong/đồng vị.
- Dùng tính chất 'hai đường song song thì góc bằng nhau' theo chiều ngược mà không gọi đúng đó là dấu hiệu.
- Suy ra song song chỉ từ hình vẽ.


### 7.4 — WX14-TRI-001 · Từ trung điểm đến đường cao trong tam giác cân

- Canonical ID: `WX14-TRI-001`; topic: `CT14` (`14-tam-giac`); kind: `standard`; level: `CORE_BASE`; academic review: `APPROVED` / `NOTEBOOKLM_R1`
- Advisory `grade_overlay`: `7` — **NOT validated KNTT placement**; actual `kntt_placements`: `[]`.
- Problem type: Dùng tam giác bằng nhau để chứng minh đường cao; skills: tam-giac-can; tam-giac-bang-nhau-ccc; trung-diem; vuong-goc; prerequisite skills: tong-goc-tam-giac; hai-tam-giac-bang-nhau.
- Existing source links: docs/kien-thuc/14-tam-giac/bai-tap.md#14-WR-08; docs/kien-thuc/14-tam-giac/bai-tap.md#14-WR-09; remediation links: Ôn CĐ14 – Core theo chặng — ../kien-thuc/14-tam-giac/core/; Luyện tam giác bằng nhau — ../kien-thuc/14-tam-giac/bai-tap/.
- Figure: ../assets/geometry/written-library/wx14-tri-001.svg / alt: Tam giác ABC cân tại A, M là trung điểm của BC và đoạn AM được nối.; expected work: 12 minutes.

**Original problem (unchanged)**

Cho tam giác $ABC$ cân tại $A$ ($AB=AC$). Gọi $M$ là trung điểm của $BC$.

1. Chứng minh $\triangle ABM=\triangle ACM$.
2. Suy ra $AM\perp BC$.

**Original solution steps**

**S1 — Xét hai tam giác phù hợp:** Xét $\triangle ABM$ và $\triangle ACM$.

**S2 — Chỉ ra ba cặp cạnh bằng nhau:** Ta có $AB=AC$ (giả thiết), $BM=CM$ (vì $M$ là trung điểm của $BC$), và $AM$ là cạnh chung.

**S3 — Kết luận hai tam giác bằng nhau:** Suy ra

$$\triangle ABM=\triangle ACM$$

theo trường hợp c.c.c.

**S4 — Suy ra hai góc tại M bằng nhau:** Từ hai tam giác bằng nhau,

$$\angle BMA=\angle AMC.$$

**S5 — Dùng tính thẳng hàng để kết luận vuông góc:** Vì $B,M,C$ thẳng hàng nên $\angle BMA+\angle AMC=180^\circ$. Hai góc này lại bằng nhau, do đó mỗi góc bằng $90^\circ$. Vậy $AM\perp BC$.

**Original rubric (total `5`)**

- Chọn đúng hai tam giác $ABM$ và $ACM$. (1 điểm)
- Nêu đủ $AB=AC$, $BM=CM$, $AM$ chung. (1 điểm)
- Kết luận hai tam giác bằng nhau theo c.c.c. (1 điểm)
- Suy ra đúng $\angle BMA=\angle AMC$. (1 điểm)
- Dùng $B,M,C$ thẳng hàng để kết luận mỗi góc $90^\circ$ và $AM\perp BC$. (1 điểm)

**Original common mistakes**

- Kết luận ngay $AM\perp BC$ chỉ vì hình vẽ trông đối xứng.
- Quên nêu $AM$ là cạnh chung khi dùng c.c.c.
- Có hai góc bằng nhau nhưng không giải thích vì sao tổng của chúng bằng $180^\circ$.


### 7.5 — WX14-TRI-002 · Chọn đúng cặp tam giác để tạo đoạn cần chứng minh

- Canonical ID: `WX14-TRI-002`; topic: `CT14` (`14-tam-giac`); kind: `standard`; level: `CORE_APPLY`; academic review: `APPROVED` / `NOTEBOOKLM_R1`
- Advisory `grade_overlay`: `7` — **NOT validated KNTT placement**; actual `kntt_placements`: `[]`.
- Problem type: Chứng minh hai đoạn bằng nhau bằng c.g.c; skills: tam-giac-can; tam-giac-bang-nhau-cgc; tuong-ung-tam-giac; prerequisite skills: hai-tam-giac-bang-nhau; goc-xen-giua.
- Existing source links: docs/kien-thuc/14-tam-giac/bai-tap.md#14-WR-09; docs/kien-thuc/14-tam-giac/bai-tap.md#14-ENT-01; remediation links: Ôn trường hợp c.g.c. — ../kien-thuc/14-tam-giac/core/; Practice Room CĐ14 — ../kien-thuc/14-tam-giac/bai-tap/.
- Figure: ../assets/geometry/written-library/wx14-tri-002.svg / alt: Tam giác ABC cân tại A, D nằm trên AB, E nằm trên AC, có các đoạn BE và CD.; expected work: 15 minutes.

**Original problem (unchanged)**

Cho tam giác $ABC$ cân tại $A$ ($AB=AC$). Điểm $D$ thuộc đoạn $AB$, điểm $E$ thuộc đoạn $AC$ và $AD=AE$. Chứng minh

$$BE=CD.$$

**Original solution steps**

**S1 — Nhìn từ mục tiêu:** Muốn chứng minh $BE=CD$, ta tìm hai tam giác chứa lần lượt hai đoạn này. Chọn $\triangle ABE$ và $\triangle ACD$.

**S2 — Ghép hai cặp cạnh:** Theo giả thiết, $AB=AC$ và $AE=AD$.

**S3 — Ghép góc xen giữa:** Vì $E$ nằm trên $AC$ và $D$ nằm trên $AB$ nên

$$\angle BAE=\angle CAD=\angle BAC.$$

**S4 — Kết luận hai tam giác bằng nhau:** Suy ra

$$\triangle ABE=\triangle ACD$$

theo trường hợp c.g.c., với sự tương ứng $B\leftrightarrow C$ và $E\leftrightarrow D$.

**S5 — Suy ra đoạn tương ứng:** Hai cạnh tương ứng $BE$ và $CD$ bằng nhau. Vậy $BE=CD$.

**Original rubric (total `5`)**

- Chọn được hai tam giác $ABE$ và $ACD$. (1 điểm)
- Nêu đúng hai cặp cạnh $AB=AC$ và $AE=AD$. (1 điểm)
- Giải thích đúng $\angle BAE=\angle CAD$. (1 điểm)
- Kết luận hai tam giác bằng nhau theo c.g.c. với đúng thứ tự tương ứng. (1 điểm)
- Suy ra đúng $BE=CD$. (1 điểm)

**Original common mistakes**

- Chọn hai tam giác không chứa đồng thời hai đoạn $BE$ và $CD$.
- Dùng c.g.c. nhưng không kiểm tra góc đã dùng có nằm xen giữa hai cặp cạnh đã biết hay không.
- Viết sai thứ tự tương ứng của hai tam giác nên suy ra sai cặp cạnh.


### 7.6 — WX15-CEN-002 · Không nhầm khoảng cách tới cạnh với khoảng cách tới đỉnh

- Canonical ID: `WX15-CEN-002`; topic: `CT15` (`15-duong-dong-quy`); kind: `standard`; level: `CORE_APPLY`; academic review: `APPROVED` / `NOTEBOOKLM_R1`
- Advisory `grade_overlay`: `7` — **NOT validated KNTT placement**; actual `kntt_placements`: `[]`.
- Problem type: Phân biệt tâm nội tiếp và tâm ngoại tiếp từ họ đường; skills: nhan-biet-phan-giac; tam-noi-tiep; nhan-biet-trung-truc; tam-ngoai-tiep; phan-biet-bon-tam; prerequisite skills: tia-phan-giac; tinh-chat-duong-trung-truc.
- Existing source links: docs/kien-thuc/15-duong-dong-quy/bai-tap.md#15-WR-05; docs/kien-thuc/15-duong-dong-quy/bai-tap.md#15-WR-06; docs/kien-thuc/15-duong-dong-quy/bai-tap.md#15-WR-07; docs/assets/data/curriculum/topic15-learning-workspace.json#geo15-core-3; docs/assets/data/curriculum/topic15-learning-workspace.json#geo15-core-4; docs/assets/data/curriculum/topic15-learning-workspace.json#geo15-core-5; remediation links: Ôn CĐ15 – Tâm nội tiếp và tâm ngoại tiếp — ../kien-thuc/15-duong-dong-quy/core/; Practice Room CĐ15 — ../kien-thuc/15-duong-dong-quy/bai-tap/.
- Figure: none; expected work: 12 minutes.

**Original problem (unchanged)**

Trong tam giác $ABC$:

- Hai tia phân giác **trong** của góc $A$ và góc $B$ cắt nhau tại $I$.
- Hai đường trung trực của $AB$ và $AC$ cắt nhau tại $O$.

1. Xác định vai trò của $I$ và $O$.
2. Nêu quan hệ khoảng cách đặc trưng của $I$ đối với ba **đường thẳng chứa cạnh**.
3. Nêu quan hệ khoảng cách đặc trưng của $O$ đối với ba **đỉnh**.
4. Giải thích vì sao mệnh đề $IA=IB=IC$ không phải là căn cứ đúng để nhận dạng $I$ là tâm nội tiếp.

**Original solution steps**

**S1 — Nhận dạng I:** Hai phân giác trong của tam giác cắt nhau tại tâm nội tiếp. Vì vậy $I$ là tâm nội tiếp của tam giác $ABC$; phân giác trong thứ ba cũng đi qua $I$.

**S2 — Khoảng cách đặc trưng của I:** Tâm nội tiếp cách đều ba đường thẳng chứa các cạnh:

$$d(I,AB)=d(I,BC)=d(I,CA).$$

**S3 — Nhận dạng O:** Hai đường trung trực của các cạnh cắt nhau tại tâm ngoại tiếp. Vì vậy $O$ là tâm ngoại tiếp của tam giác $ABC$; trung trực cạnh $BC$ cũng đi qua $O$.

**S4 — Khoảng cách đặc trưng của O:** Tâm ngoại tiếp cách đều ba đỉnh:

$$OA=OB=OC.$$

**S5 — Phân biệt hai tính chất:** Quan hệ $IA=IB=IC$ là dạng 'cách đều ba đỉnh', gắn với tâm ngoại tiếp chứ không phải tính chất nhận dạng tâm nội tiếp. Với tâm nội tiếp, đại lượng cần so sánh là khoảng cách từ $I$ tới ba đường thẳng chứa cạnh.

**Original rubric (total `4`)**

- Xác định đúng $I$ là tâm nội tiếp. (1 điểm)
- Nêu đúng $d(I,AB)=d(I,BC)=d(I,CA)$. (1 điểm)
- Xác định đúng $O$ là tâm ngoại tiếp và $OA=OB=OC$. (1 điểm)
- Giải thích đúng vì sao $IA=IB=IC$ không nhận dạng tâm nội tiếp. (1 điểm)

**Original common mistakes**

- Dùng khoảng cách tới đỉnh để mô tả tâm nội tiếp.
- Nhầm giao của phân giác trong với giao của trung trực.
- Cho rằng tâm nội tiếp và tâm ngoại tiếp luôn trùng nhau.


## Grade 8 — six original canonical Written cases

### 8.1 — WX04-ALG-003 · Khai triển đủ hai tích trước khi thu gọn

- Canonical ID: `WX04-ALG-003`; topic: `CT04` (`04-bieu-thuc-dai-so`); kind: `standard`; level: `CORE_BASE`; academic review: `APPROVED` / `NOTEBOOKLM_R1`
- Advisory `grade_overlay`: `7,8` — **NOT validated KNTT placement**; actual `kntt_placements`: `[]`.
- Problem type: Nhân hai đa thức rồi thu gọn biểu thức; skills: nhan-bieu-thuc; tinh-phan-phoi; prerequisite skills: thu-gon-da-thuc; bo-ngoac-dau.
- Existing source links: docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md#04-WR-05; docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md#04-WR-06; docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md#04-WR-10; remediation links: Ôn CĐ04 – Core — ../kien-thuc/04-bieu-thuc-dai-so/core/; Luyện thêm CĐ04 — ../kien-thuc/04-bieu-thuc-dai-so/bai-tap/.
- Figure: none; expected work: 8 minutes.

**Original problem (unchanged)**

Cho

$$A=(2x-3)(x+4)-(x-1)(x+2).$$

1. Khai triển và thu gọn $A$.
2. Tính giá trị của $A$ tại $x=-2$.

**Original solution steps**

**S1 — Khai triển tích thứ nhất:** $$(2x-3)(x+4)=2x^2+8x-3x-12=2x^2+5x-12.$$

**S2 — Khai triển tích thứ hai:** $$(x-1)(x+2)=x^2+2x-x-2=x^2+x-2.$$

**S3 — Thu gọn toàn biểu thức:** Vì tích thứ hai đang bị trừ nên

$$A=2x^2+5x-12-(x^2+x-2)=x^2+4x-10.$$

**S4 — Thay số:** Tại $x=-2$,

$$A=(-2)^2+4(-2)-10=4-8-10=-14.$$

**Original rubric (total `4`)**

- Khai triển đúng $(2x-3)(x+4)$. (1 điểm)
- Khai triển đúng $(x-1)(x+2)$. (1 điểm)
- Xử lý đúng dấu trừ và thu gọn được $A=x^2+4x-10$. (1 điểm)
- Tính đúng $A(-2)=-14$. (1 điểm)

**Original common mistakes**

- Chỉ nhân hạng tử đầu của mỗi ngoặc.
- Quên đổi dấu toàn bộ tích thứ hai khi bỏ ngoặc.
- Thay $x=-2$ nhưng tính $4x$ thành $+8$.


### 8.2 — WX05-IDN-001 · Kiểm tra đủ hai bình phương và hạng tử giữa

- Canonical ID: `WX05-IDN-001`; topic: `CT05` (`05-7-hang-dang-thuc`); kind: `standard`; level: `CORE_BASE`; academic review: `APPROVED` / `NOTEBOOKLM_R1`
- Advisory `grade_overlay`: `8` — **NOT validated KNTT placement**; actual `kntt_placements`: `[]`.
- Problem type: Nhận dạng bình phương hoàn chỉnh; skills: binh-phuong-hieu; binh-phuong-hoan-chinh; nhan-dang-hdt; prerequisite skills: nhan-bieu-thuc.
- Existing source links: docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md#05-WR-02; docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md#05-WR-03; docs/assets/data/curriculum/topic05-learning-workspace.json#id05-core-1; docs/assets/data/curriculum/topic05-learning-workspace.json#id05-core-5; remediation links: Ôn CĐ05 – Bình phương tổng và hiệu — ../kien-thuc/05-7-hang-dang-thuc/core/; Practice Room CĐ05 — ../kien-thuc/05-7-hang-dang-thuc/bai-tap/.
- Figure: none; expected work: 8 minutes.

**Original problem (unchanged)**

Viết đa thức

$$x^2-10x+25$$

dưới dạng bình phương của một hiệu. Hãy chỉ rõ ba thành phần dùng để nhận dạng và khai triển ngược để kiểm tra.

**Original solution steps**

**S1 — Nhận hai bình phương:** Ta có

$$x^2=(x)^2,\qquad 25=5^2.$$

**S2 — Kiểm tra hạng tử giữa:** Hạng tử giữa là

$$-10x=-2\cdot x\cdot5,$$

đúng với mẫu $A^2-2AB+B^2$.

**S3 — Viết bình phương hoàn chỉnh:** Vì vậy

$$x^2-10x+25=(x-5)^2.$$

**S4 — Khai triển ngược để kiểm tra:** Ta có

$$(x-5)^2=x^2-10x+25,$$

trùng với đa thức ban đầu.

**Original rubric (total `4`)**

- Nhận đúng $x^2$ và $25$ là hai bình phương. (1 điểm)
- Kiểm tra đúng $-10x=-2\cdot x\cdot5$. (1 điểm)
- Viết đúng $(x-5)^2$. (1 điểm)
- Khai triển ngược đúng để kiểm tra. (1 điểm)

**Original common mistakes**

- Chỉ nhìn hạng tử đầu và cuối rồi kết luận mà không kiểm tra hạng tử giữa.
- Viết $(x+5)^2$ dù hạng tử giữa mang dấu âm.
- Viết $(x-5)^2=x^2-25$.


### 8.3 — WX06-FAC-001 · Nhìn hai ngoặc đối nhau trước khi đặt nhân tử

- Canonical ID: `WX06-FAC-001`; topic: `CT06` (`06-phan-tich-da-thuc`); kind: `standard`; level: `CORE_BASE`; academic review: `APPROVED` / `NOTEBOOKLM_R1`
- Advisory `grade_overlay`: `8` — **NOT validated KNTT placement**; actual `kntt_placements`: `[]`.
- Problem type: Đổi dấu để tạo nhân tử chung; skills: nhan-tu-chung; doi-dau-nhan-tu-chung; prerequisite skills: thu-gon-da-thuc.
- Existing source links: docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-01; docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-02; docs/assets/data/curriculum/topic06-learning-workspace.json#fac06-core-1; remediation links: Ôn CĐ06 – Nhân tử chung và đổi dấu — ../kien-thuc/06-phan-tich-da-thuc/core/; Practice Room CĐ06 — ../kien-thuc/06-phan-tich-da-thuc/bai-tap/.
- Figure: none; expected work: 9 minutes.

**Original problem (unchanged)**

Phân tích hoàn toàn thành nhân tử:

$$P=2x(x-y)+4(y-x).$$

Hãy chỉ rõ bước đổi dấu của ngoặc trước khi đặt nhân tử chung.

**Original solution steps**

**S1 — Nhận hai ngoặc đối nhau:** Ta có

$$y-x=-(x-y).$$

**S2 — Đổi về cùng một ngoặc:** Do đó

$$P=2x(x-y)-4(x-y).$$

**S3 — Đặt nhân tử chung:** Đặt $2(x-y)$ làm nhân tử chung:

$$P=2(x-y)(x-2).$$

**S4 — Kiểm tra nhanh:** Nhân ngược:

$$2(x-y)(x-2)=2x(x-y)-4(x-y)=2x(x-y)+4(y-x),$$

đúng với biểu thức ban đầu.

**Original rubric (total `4`)**

- Dùng đúng $y-x=-(x-y)$. (1 điểm)
- Đổi biểu thức về $2x(x-y)-4(x-y)$. (1 điểm)
- Đặt đúng nhân tử chung để được $2(x-y)(x-2)$. (1 điểm)
- Kiểm tra ngược hợp lệ. (1 điểm)

**Original common mistakes**

- Xem $y-x$ và $x-y$ là cùng một ngoặc.
- Đổi dấu ngoặc nhưng quên đổi dấu hệ số đi kèm.
- Chỉ đặt $(x-y)$ chung và không rút tiếp nhân tử số $2$.


### 8.4 — WX07-RAT-001 · Rút gọn nhưng không làm mất điều kiện ban đầu

- Canonical ID: `WX07-RAT-001`; topic: `CT07` (`07-phan-thuc-dai-so`); kind: `standard`; level: `CORE_BASE`; academic review: `APPROVED` / `NOTEBOOKLM_R1`
- Advisory `grade_overlay`: `8` — **NOT validated KNTT placement**; actual `kntt_placements`: `[]`.
- Problem type: Rút gọn phân thức và giữ điều kiện xác định; skills: dieu-kien-xac-dinh; phan-tich-da-thuc; rut-gon-phan-thuc; prerequisite skills: hang-dang-thuc; phan-tich-da-thuc.
- Existing source links: docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md#07-WR-07; docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md#07-WR-11; remediation links: Ôn CĐ07 – Core theo chặng — ../kien-thuc/07-phan-thuc-dai-so/core/; Luyện thêm CĐ07 — ../kien-thuc/07-phan-thuc-dai-so/bai-tap/.
- Figure: none; expected work: 8 minutes.

**Original problem (unchanged)**

Cho

$$A=\frac{x^2-9}{x^2-3x}.$$

1. Tìm điều kiện xác định của $A$.
2. Rút gọn $A$.
3. Viết kết quả cuối cùng kèm điều kiện của $x$.

**Original solution steps**

**S1 — Điều kiện xác định:** Mẫu số là $x^2-3x=x(x-3)$. Vì mẫu phải khác $0$ nên

$$x\ne0,\qquad x\ne3.$$

**S2 — Phân tích tử và mẫu:** Dùng hiệu hai bình phương:

$$x^2-9=(x-3)(x+3),$$

và

$$x^2-3x=x(x-3).$$

**S3 — Rút gọn:** Trên miền xác định đã nêu,

$$A=\frac{(x-3)(x+3)}{x(x-3)}=\frac{x+3}{x}.$$

**S4 — Kết luận:** Vậy

$$A=\frac{x+3}{x},\qquad x\ne0,3.$$

Điều kiện $x\ne3$ vẫn phải giữ dù nhân tử $x-3$ đã được rút gọn.

**Original rubric (total `4`)**

- Xác định đúng mẫu và điều kiện $x\ne0,3$. (1 điểm)
- Phân tích đúng $x^2-9$ và $x^2-3x$ thành nhân tử. (1 điểm)
- Rút gọn đúng về $\frac{x+3}{x}$. (1 điểm)
- Kết luận giữ đủ điều kiện ban đầu $x\ne0,3$. (1 điểm)

**Original common mistakes**

- Chỉ ghi $x\ne0$ sau khi rút gọn và quên mất $x\ne3$.
- Triệt tiêu $x-3$ trước khi nêu điều kiện xác định.
- Phân tích sai $x^2-3x$ thành $x(x+3)$.


### 8.5 — WX16-QUAD-001 · Hai dấu hiệu nối tiếp: hình bình hành → hình chữ nhật

- Canonical ID: `WX16-QUAD-001`; topic: `CT16` (`16-tu-giac`); kind: `standard`; level: `CORE_BASE`; academic review: `APPROVED` / `NOTEBOOKLM_R1`
- Advisory `grade_overlay`: `8` — **NOT validated KNTT placement**; actual `kntt_placements`: `[]`.
- Problem type: Chứng minh hình bình hành rồi nâng cấp thành hình chữ nhật; skills: hbh-dau-hieu; hcn-dau-hieu; prerequisite skills: tinh-chat-song-song.
- Existing source links: docs/kien-thuc/16-tu-giac/bai-tap.md#16-WR-04; docs/kien-thuc/16-tu-giac/bai-tap.md#16-WR-05; docs/assets/data/curriculum/topic16-learning-workspace.json#geo16-core-2; docs/assets/data/curriculum/topic16-learning-workspace.json#geo16-core-3; remediation links: Ôn CĐ16 – Dấu hiệu hình bình hành và hình chữ nhật — ../kien-thuc/16-tu-giac/core/; Practice Room CĐ16 — ../kien-thuc/16-tu-giac/bai-tap/.
- Figure: none; expected work: 10 minutes.

**Original problem (unchanged)**

Cho tứ giác lồi $ABCD$ có

$$AB\parallel CD,\qquad AB=CD,\qquad \angle ABC=90^\circ.$$

Chứng minh $ABCD$ là hình chữ nhật.

**Original solution steps**

**S1 — Nhận ra dấu hiệu hình bình hành:** Trong tứ giác $ABCD$, $AB$ và $CD$ là một cặp cạnh đối. Theo giả thiết, cặp cạnh đối này vừa song song vừa bằng nhau.

**S2 — Kết luận hình bình hành:** Tứ giác có một cặp cạnh đối vừa song song vừa bằng nhau là hình bình hành. Do đó $ABCD$ là hình bình hành.

**S3 — Dùng thêm góc vuông:** Hình bình hành $ABCD$ có $\angle ABC=90^\circ$.

**S4 — Nâng cấp kết luận:** Hình bình hành có một góc vuông là hình chữ nhật. Vậy $ABCD$ là hình chữ nhật.

**Original rubric (total `4`)**

- Xác định $AB$ và $CD$ là hai cạnh đối, vừa song song vừa bằng nhau. (1 điểm)
- Dùng đúng dấu hiệu để kết luận $ABCD$ là hình bình hành. (1 điểm)
- Sử dụng đúng giả thiết $\angle ABC=90^\circ$ sau khi đã có hình bình hành. (1 điểm)
- Kết luận đúng $ABCD$ là hình chữ nhật. (1 điểm)

**Original common mistakes**

- Kết luận hình chữ nhật ngay từ $AB\parallel CD$ và $AB=CD$ mà không qua bước hình bình hành.
- Dùng một góc vuông để kết luận tứ giác bất kỳ là hình chữ nhật.
- Nhầm $AB$ và $CD$ là hai cạnh kề.


### 8.6 — WX17-SIM-001 · Từ hai tỉ số đúng đến kết luận song song

- Canonical ID: `WX17-SIM-001`; topic: `CT17` (`17-thales-dong-dang`); kind: `standard`; level: `CORE_BASE`; academic review: `APPROVED` / `NOTEBOOKLM_R1`
- Advisory `grade_overlay`: `8` — **NOT validated KNTT placement**; actual `kntt_placements`: `[]`.
- Problem type: Chứng minh song song bằng định lí Thales đảo; skills: thales-dao; ti-le-doan-thang; prerequisite skills: tinh-chat-song-song.
- Existing source links: docs/kien-thuc/17-thales-dong-dang/bai-tap.md#17-WR-02; docs/assets/data/curriculum/topic17-learning-workspace.json#geo17-core-1; remediation links: Ôn CĐ17 – Thales thuận và đảo — ../kien-thuc/17-thales-dong-dang/core/; Practice Room CĐ17 — ../kien-thuc/17-thales-dong-dang/bai-tap/.
- Figure: none; expected work: 10 minutes.

**Original problem (unchanged)**

Cho tam giác $ABC$. Điểm $D$ thuộc đoạn $AB$, điểm $E$ thuộc đoạn $AC$. Biết

$$AD=4\text{ cm},\quad DB=2\text{ cm},\quad AE=6\text{ cm},\quad EC=3\text{ cm}.$$

Chứng minh $DE\parallel BC$.

**Original solution steps**

**S1 — Xác định cấu hình:** Theo giả thiết, $D$ nằm trên đoạn $AB$ và $E$ nằm trên đoạn $AC$, đúng vị trí để xét định lí Thales đảo trong tam giác $ABC$.

**S2 — Tính hai tỉ số tương ứng:** Ta có

$$\frac{AD}{DB}=\frac42=2,\qquad \frac{AE}{EC}=\frac63=2.$$

**S3 — So sánh:** Suy ra

$$\frac{AD}{DB}=\frac{AE}{EC}.$$

**S4 — Kết luận bằng Thales đảo:** Vì $D\in AB$, $E\in AC$ và hai tỉ số tương ứng bằng nhau, theo định lí Thales đảo:

$$DE\parallel BC.$$

**Original rubric (total `4`)**

- Nêu đúng vị trí $D\in AB$, $E\in AC$ trong tam giác $ABC$. (1 điểm)
- Tính đúng $AD/DB=2$ và $AE/EC=2$. (1 điểm)
- So sánh đúng hai tỉ số tương ứng. (1 điểm)
- Dùng đúng định lí Thales đảo để kết luận $DE\parallel BC$. (1 điểm)

**Original common mistakes**

- Dùng Thales thuận để chứng minh song song khi song song chưa phải giả thiết.
- Ghép sai các đoạn, chẳng hạn so $AD/DB$ với $EC/AE$.
- Bỏ qua điều kiện $D,E$ phải nằm trên hai cạnh tương ứng của tam giác.


## Grade 9 — six original canonical Written cases

### 9.1 — WX09-SYS-003 · Từ tổng số vé và tổng tiền đến hệ phương trình

- Canonical ID: `WX09-SYS-003`; topic: `CT09` (`09-he-phuong-trinh`); kind: `anchor`; level: `CORE_BASE`; academic review: `APPROVED` / `NOTEBOOKLM_R1`
- Advisory `grade_overlay`: `9` — **NOT validated KNTT placement**; actual `kntt_placements`: `[]`.
- Problem type: Lập hệ từ số lượng và tổng giá trị; skills: lap-he-bai-toan; bai-toan-so; giai-he-cong; kiem-tra-nghiem-he; prerequisite skills: giai-he-cong.
- Existing source links: review-packets/academic-depth/ct09-p1b/01_NOTEBOOKLM_CT09_P1B_WRITTEN_ANCHORS_R1.md; docs/assets/data/curriculum/topic09-learning-workspace.json#sys09-core-5; remediation links: Ôn CĐ09 – Hệ phương trình — ../kien-thuc/09-he-phuong-trinh/core/; Practice Room CĐ09 — ../kien-thuc/09-he-phuong-trinh/bai-tap/.
- Figure: none; expected work: 15 minutes.

**Original problem (unchanged)**

Một khu tham quan bán tổng cộng **40 vé** trong một lượt khách. Vé người lớn giá **15 nghìn đồng**, vé học sinh giá **8 nghìn đồng**. Tổng số tiền thu được là **488 nghìn đồng**.

Hỏi đã bán bao nhiêu vé người lớn và bao nhiêu vé học sinh?

**Original hints**

1. Có hai loại vé và cần tìm **số lượng của từng loại**. Hãy chọn hai ẩn theo số vé.

2. Bài cho hai quan hệ độc lập:
- tổng số vé;
- tổng số tiền.

3. Nếu gọi $x$ là số vé người lớn và $y$ là số vé học sinh, hãy bắt đầu bằng

$$x+y=40.$$

Phương trình tiền phải có đơn vị nghìn đồng.

**Original full solution**

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

**Original rationale for method choice**

Cộng đại số thuận tiện vì phương trình số lượng có thể nhân với $8$ để khử ngay $y$. Phần khó chính của bài không phải phép khử mà là **dịch đúng hai dữ kiện sang hai phương trình cùng đơn vị**.

**Original rubric (total `5`)**

- Chọn đúng hai ẩn và điều kiện. (1 điểm)
- Lập đúng $x+y=40$. (1 điểm)
- Lập đúng $15x+8y=488$. (1 điểm)
- Giải đúng $x=24, y=16$. (1 điểm)
- Kiểm tra và kết luận đúng ngữ cảnh. (1 điểm)

**Original common mistakes**

- Viết $15x+8y=40$, làm hai vế khác đại lượng.
- Quên ghi đơn vị nghìn đồng.
- Giải ra $x,y$ nhưng không kiểm tra chúng là số nguyên không âm.
- Chỉ kiểm tra tổng số vé mà không kiểm tra tổng tiền.

**Original remediation**

- Nếu chưa biết đặt ẩn/lập hệ: quay lại CĐ09 → “Bài toán bằng cách lập hệ”.
- Nếu lập được hệ nhưng giải chậm: ôn “phương pháp cộng đại số”.
- Bài anh em dễ hơn: tổng 20 vé, hai mức giá, số tiền được chọn để nghiệm nguyên nhỏ.


### 9.2 — WX10-FUN-002 · Nhìn cấu trúc parabol từ bảng giá trị đối xứng

- Canonical ID: `WX10-FUN-002`; topic: `CT10` (`10-ham-so-do-thi`); kind: `standard`; level: `CORE_APPLY`; academic review: `APPROVED` / `NOTEBOOKLM_R1`
- Advisory `grade_overlay`: `9` — **NOT validated KNTT placement**; actual `kntt_placements`: `[]`.
- Problem type: Parabol y=ax²: bảng giá trị, đối xứng và điểm thuộc đồ thị; skills: bang-gia-tri; ham-y-ax2; doi-xung-parabol; diem-thuoc-parabol; prerequisite skills: toa-do-diem.
- Existing source links: docs/kien-thuc/10-ham-so-do-thi/bai-tap.md#10-WR-08; docs/kien-thuc/10-ham-so-do-thi/bai-tap.md#10-WR-09; docs/kien-thuc/10-ham-so-do-thi/bai-tap.md#10-WR-10; docs/assets/data/curriculum/topic10-learning-workspace.json#fun10-core-5; remediation links: Ôn CĐ10 – Parabol y=ax² — ../kien-thuc/10-ham-so-do-thi/core/; Practice Room CĐ10 — ../kien-thuc/10-ham-so-do-thi/bai-tap/.
- Figure: none; expected work: 12 minutes.

**Original problem (unchanged)**

Cho parabol

$$y=\frac12x^2.$$

1. Lập bảng giá trị khi $x=-4,-2,0,2,4$.
2. Từ bảng, nêu đỉnh, trục đối xứng và hướng mở của parabol.
3. Kiểm tra điểm $P(6;18)$ có thuộc parabol hay không.

**Original solution steps**

**S1 — Tính các giá trị y:** Thay lần lượt các giá trị $x$ vào $y=\frac12x^2$:

$$8,\ 2,\ 0,\ 2,\ 8.$$

Các cặp tương ứng là $(-4;8),(-2;2),(0;0),(2;2),(4;8)$.

**S2 — Nhận ra tính đối xứng:** Các giá trị tại $x$ và $-x$ bằng nhau, nên đồ thị đối xứng qua trục $Oy$.

**S3 — Nêu đỉnh và hướng mở:** Đây là dạng đặc biệt $y=ax^2$ với $a=\frac12>0$, nên parabol có đỉnh $O(0;0)$ và mở lên.

**S4 — Kiểm tra điểm P:** Với $x=6$:

$$y=\frac12\cdot6^2=18.$$

Tung độ tính được đúng bằng tung độ của $P$, nên $P(6;18)$ thuộc parabol.

**Original rubric (total `4`)**

- Lập đúng bảng $y=8,2,0,2,8$ theo thứ tự đã cho. (1 điểm)
- Nêu đúng đối xứng qua $Oy$ từ các cặp $x,-x$. (1 điểm)
- Nêu đúng đỉnh $O(0;0)$ và hướng mở lên vì $a>0$. (1 điểm)
- Thay $x=6$, tính được $y=18$ và kết luận $P$ thuộc parabol. (1 điểm)

**Original common mistakes**

- Tính $(-4)^2=-16$ thay vì $16$.
- Áp dụng tính chất đỉnh $O$ cho mọi hàm bậc hai thay vì đúng dạng $y=ax^2$.
- Chỉ nhìn hình/ước lượng thay vì thay hoành độ để kiểm tra điểm thuộc đồ thị.


### 9.3 — WX11-RAD-001 · Xét điều kiện trước, giữ giá trị tuyệt đối đúng chỗ

- Canonical ID: `WX11-RAD-001`; topic: `CT11` (`11-can-thuc`); kind: `standard`; level: `CORE_BASE`; academic review: `APPROVED` / `NOTEBOOKLM_R1`
- Advisory `grade_overlay`: `9` — **NOT validated KNTT placement**; actual `kntt_placements`: `[]`.
- Problem type: Điều kiện căn và căn của bình phương; skills: dkxd-can; can-binh-phuong; prerequisite skills: phep-tinh-so-thuc.
- Existing source links: docs/kien-thuc/11-can-thuc/bai-tap.md#11-WR-01; docs/kien-thuc/11-can-thuc/bai-tap.md#11-WR-02; docs/assets/data/curriculum/topic11-learning-workspace.json#rad11-core-1; remediation links: Ôn CĐ11 – Điều kiện và căn của bình phương — ../kien-thuc/11-can-thuc/core/; Practice Room CĐ11 — ../kien-thuc/11-can-thuc/bai-tap/.
- Figure: none; expected work: 9 minutes.

**Original problem (unchanged)**

Cho biểu thức

$$A=\sqrt{(x-3)^2}+\sqrt{2x-4}.$$

1. Tìm điều kiện xác định của $A$.
2. Rút gọn căn thức thứ nhất.
3. Tính $A$ tại $x=2$.

**Original solution steps**

**S1 — Tìm điều kiện xác định:** Căn $\sqrt{(x-3)^2}$ luôn có nghĩa với mọi $x$ thực. Căn thứ hai cần

$$2x-4\ge0\Rightarrow x\ge2.$$

Vậy điều kiện xác định của $A$ là $x\ge2$.

**S2 — Rút gọn căn của bình phương:** Với mọi $x$ thực,

$$\sqrt{(x-3)^2}=|x-3|.$$

Do đó trên miền xác định,

$$A=|x-3|+\sqrt{2x-4}.$$

**S3 — Thay x=2:** Giá trị $x=2$ thỏa điều kiện. Khi đó

$$A=|2-3|+\sqrt{4-4}=1+0=1.$$

**Original rubric (total `4`)**

- Xác định đúng điều kiện $x\ge2$. (1 điểm)
- Rút gọn đúng $\sqrt{(x-3)^2}=|x-3|$. (1 điểm)
- Kiểm tra $x=2$ thuộc miền xác định và tính đúng $A=1$. (1 điểm)
- Không tự bỏ dấu giá trị tuyệt đối khi chưa biết dấu $x-3$. (1 điểm)

**Original common mistakes**

- Bắt $(x-3)^2\ge0$ rồi tạo thêm điều kiện không cần thiết.
- Viết $\sqrt{(x-3)^2}=x-3$ với mọi $x$.
- Thay số trước khi xác định miền của biểu thức.


### 9.4 — WX12-QUA-001 · Đọc đúng hệ số, tính Δ rồi kiểm tra đủ hai nghiệm

- Canonical ID: `WX12-QUA-001`; topic: `CT12` (`12-phuong-trinh-bac-hai-viete`); kind: `standard`; level: `CORE_BASE`; academic review: `APPROVED` / `NOTEBOOKLM_R1`
- Advisory `grade_overlay`: `9` — **NOT validated KNTT placement**; actual `kntt_placements`: `[]`.
- Problem type: Giải phương trình bậc hai bằng biệt thức và kiểm tra nghiệm; skills: he-so-abc; tinh-delta; cong-thuc-nghiem; giai-pt-bac-hai; prerequisite skills: can-bac-hai-so-hoc.
- Existing source links: docs/kien-thuc/12-phuong-trinh-bac-hai-viete/bai-tap.md#12-WR-03; docs/kien-thuc/12-phuong-trinh-bac-hai-viete/bai-tap.md#12-WR-05; docs/assets/data/curriculum/topic12-learning-workspace.json#qua12-core-2; docs/assets/data/curriculum/topic12-learning-workspace.json#qua12-core-3; remediation links: Ôn CĐ12 – Δ và công thức nghiệm — ../kien-thuc/12-phuong-trinh-bac-hai-viete/core/; Practice Room CĐ12 — ../kien-thuc/12-phuong-trinh-bac-hai-viete/bai-tap/.
- Figure: none; expected work: 11 minutes.

**Original problem (unchanged)**

Giải phương trình

$$3x^2+x-2=0$$

bằng công thức nghiệm, rồi kiểm tra cả hai nghiệm tìm được.

**Original solution steps**

**S1 — Xác định hệ số:** Phương trình đã ở dạng $ax^2+bx+c=0$ với

$$a=3,\qquad b=1,\qquad c=-2.$$

**S2 — Tính biệt thức:** Ta có

$$\Delta=b^2-4ac=1^2-4\cdot3\cdot(-2)=25>0.$$

**S3 — Dùng công thức nghiệm:** Vì $\Delta>0$, phương trình có hai nghiệm phân biệt:

$$x=\frac{-1\pm\sqrt{25}}{2\cdot3}=\frac{-1\pm5}{6}.$$

Suy ra

$$x_1=\frac23,\qquad x_2=-1.$$

**S4 — Kiểm tra hai nghiệm:** Với $x=\frac23$:

$$3\cdot\frac49+\frac23-2=0.$$

Với $x=-1$:

$$3-1-2=0.$$

Cả hai đều thỏa phương trình.

**Original rubric (total `4`)**

- Xác định đúng $a=3,b=1,c=-2$. (1 điểm)
- Tính đúng $\Delta=25>0$. (1 điểm)
- Dùng đúng công thức và tìm được $x=2/3,-1$. (1 điểm)
- Kiểm tra đúng cả hai nghiệm. (1 điểm)

**Original common mistakes**

- Đọc $c=2$ thay vì $-2$.
- Quên mẫu $2a$ trong công thức nghiệm.
- Tìm đủ hai giá trị nhưng không kiểm tra hoặc kiểm tra chỉ một nghiệm.


### 9.5 — WX18-TRI-002 · Tách chênh cao khỏi chiều cao toàn vật

- Canonical ID: `WX18-TRI-002`; topic: `CT18` (`18-he-thuc-luong`); kind: `standard`; level: `CORE_APPLY`; academic review: `APPROVED` / `NOTEBOOKLM_R1`
- Advisory `grade_overlay`: `9` — **NOT validated KNTT placement**; actual `kntt_placements`: `[]`.
- Problem type: Góc nâng và chiều cao có tầm mắt; skills: goc-nang-ha; chieu-cao-khoang-cach; tan; tim-canh-luong-giac; prerequisite skills: tan.
- Existing source links: docs/kien-thuc/18-he-thuc-luong/bai-tap.md#18-WR-08; docs/kien-thuc/18-he-thuc-luong/bai-tap.md#18-WR-09; docs/kien-thuc/18-he-thuc-luong/bai-tap.md#18-WR-10; docs/assets/data/curriculum/topic18-learning-workspace.json#geo18-core-5; remediation links: Ôn CĐ18 – Góc nâng và đo chiều cao — ../kien-thuc/18-he-thuc-luong/core/; Practice Room CĐ18 — ../kien-thuc/18-he-thuc-luong/bai-tap/.
- Figure: none; expected work: 12 minutes.

**Original problem (unchanged)**

Một người đứng trên mặt đất phẳng, cách chân một tháp theo phương ngang $24$ m. Mắt người đó cao $1{,}5$ m so với mặt đất. Góc nâng từ tầm mắt đến đỉnh tháp là $30^\circ$. Giả sử chân tháp và chân người cùng cao độ, tháp thẳng đứng.

Tính chiều cao tháp. Viết kết quả chính xác rồi làm tròn đến $0{,}1$ m.

**Original solution steps**

**S1 — Xác định tam giác vuông mô hình:** Khoảng cách ngang từ người đến chân tháp là cạnh kề của góc nâng $30^\circ$. Cạnh đối là **độ chênh cao từ tầm mắt đến đỉnh tháp**, không phải toàn bộ chiều cao tháp.

**S2 — Dùng tan để tính chênh cao:** Gọi $h$ là độ chênh cao từ tầm mắt đến đỉnh tháp. Khi đó

$$\tan30^\circ=\frac{h}{24}.$$

Suy ra

$$h=24\tan30^\circ=24\cdot\frac1{\sqrt3}=8\sqrt3\text{ m}.$$

**S3 — Cộng chiều cao tầm mắt:** Chiều cao tháp là

$$H=1{,}5+8\sqrt3\text{ m}.$$

**S4 — Làm tròn:** Vì $8\sqrt3\approx13{,}856$, nên

$$H\approx15{,}356\text{ m}\approx15{,}4\text{ m}.$$

**S5 — Kết luận:** Chiều cao tháp là

$$\boxed{1{,}5+8\sqrt3\text{ m}\approx15{,}4\text{ m}}.$$

**Original rubric (total `5`)**

- Mô hình đúng: 24 m là khoảng cách ngang/cạnh kề; cạnh đối là chênh cao từ mắt tới đỉnh. (1 điểm)
- Lập đúng $\tan30^\circ=h/24$. (1 điểm)
- Tính đúng $h=8\sqrt3$ m. (1 điểm)
- Cộng đúng chiều cao mắt để được $H=1{,}5+8\sqrt3$ m. (1 điểm)
- Làm tròn đúng $H\approx15{,}4$ m và kết luận kèm đơn vị. (1 điểm)

**Original common mistakes**

- Dùng 24 m như cạnh huyền thay vì khoảng cách ngang.
- Tính được $8\sqrt3$ m rồi coi đó là toàn bộ chiều cao tháp, quên cộng $1{,}5$ m.
- Đo góc nâng với phương thẳng đứng hoặc làm tròn quá sớm.


### 9.6 — WX19-CIR-002 · Nhận ra nội tiếp rồi khai thác cặp góc đối

- Canonical ID: `WX19-CIR-002`; topic: `CT19` (`19-duong-tron`); kind: `standard`; level: `CORE_APPLY`; academic review: `APPROVED` / `NOTEBOOKLM_R1`
- Advisory `grade_overlay`: `9` — **NOT validated KNTT placement**; actual `kntt_placements`: `[]`.
- Problem type: Dấu hiệu tứ giác nội tiếp và góc đối; skills: tu-giac-noi-tiep; dau-hieu-noi-tiep; prerequisite skills: do-goc.
- Existing source links: docs/kien-thuc/19-duong-tron/bai-tap.md#19-WR-08; docs/assets/data/curriculum/topic19-learning-workspace.json#geo19-core-4; remediation links: Ôn CĐ19 – Tứ giác nội tiếp — ../kien-thuc/19-duong-tron/core/; Practice Room CĐ19 — ../kien-thuc/19-duong-tron/bai-tap/.
- Figure: none; expected work: 10 minutes.

**Original problem (unchanged)**

Cho tứ giác **lồi** $ABCD$ có

$$\angle BAD=72^\circ,\qquad \angle BCD=108^\circ.$$

1. Chứng minh $ABCD$ nội tiếp được một đường tròn.
2. Biết thêm $\angle ABC=118^\circ$. Tính $\angle ADC$.

**Original solution steps**

**S1 — Kiểm tra một cặp góc đối:** Hai góc $\angle BAD$ và $\angle BCD$ là hai góc đối của tứ giác lồi $ABCD$ và

$$72^\circ+108^\circ=180^\circ.$$

**S2 — Kết luận nội tiếp:** Vì một cặp góc đối của tứ giác lồi bù nhau, theo dấu hiệu đảo, bốn điểm $A,B,C,D$ cùng thuộc một đường tròn. Do đó $ABCD$ là tứ giác nội tiếp.

**S3 — Dùng tính chất của tứ giác nội tiếp:** Trong tứ giác nội tiếp, hai góc đối bù nhau:

$$\angle ABC+\angle ADC=180^\circ.$$

**S4 — Tính góc còn lại:** Suy ra

$$\angle ADC=180^\circ-118^\circ=62^\circ.$$

**Original rubric (total `4`)**

- Nhận ra đúng $\angle BAD$ và $\angle BCD$ là hai góc đối và có tổng $180^\circ$. (1 điểm)
- Dùng đúng dấu hiệu đảo để chứng minh tứ giác nội tiếp. (1 điểm)
- Viết đúng tính chất $\angle ABC+\angle ADC=180^\circ$. (1 điểm)
- Tính đúng $\angle ADC=62^\circ$. (1 điểm)

**Original common mistakes**

- Kết luận nội tiếp chỉ vì hình vẽ trông giống tứ giác nội tiếp.
- Dùng hai góc kề thay vì một cặp góc đối để kiểm tra tổng $180^\circ$.
- Sau khi đã chứng minh nội tiếp, trừ sai và cho $\angle ADC=118^\circ$.


## Review integrity and boundaries

- All `18` IDs are one-to-one references to the EXISTING `74` canonical items; the original math text, answer/solution steps, rubrics and metadata are reproduced for **independent review only**.
- Verify placement against independent **grade-specific KNTT S1** textbook chapter/lesson descriptions before appending any `kntt_placements`. A content item using fractions as a prerequisite is NOT automatically a Grade6 placement.
- Do not create extra items, edit approved solutions, change grade navigation, migrate or regrade attempts, or award automatic independent Readiness/Mastery.
- If reviewer advises a revision, keep old approved canonical source stable until a separate revised packet is independently approved by Owner.

```text
PACKET_ID|MATH-W9-WRITTEN-G7G8G9-18SOURCE-PLACEMENT-DEPTH-R1-20261021
EXPECTED_IDS|WX03-RAT-001,WX03-RAT-002,WX13-LIN-001,WX14-TRI-001,WX14-TRI-002,WX15-CEN-002,WX04-ALG-003,WX05-IDN-001,WX06-FAC-001,WX07-RAT-001,WX16-QUAD-001,WX17-SIM-001,WX09-SYS-003,WX10-FUN-002,WX11-RAD-001,WX12-QUA-001,WX18-TRI-002,WX19-CIR-002
EXPECTED_COUNT|18
REVIEWED_COUNT|...
MATH_PASS_COUNT|...
PLACEMENT_VERIFIED_COUNT|...
PLACEMENT_INSUFFICIENT_S1_COUNT|...
NEXT_REVIEW_BATCH|...
AUTHORIZATION|NO_LIVE_RELEASE
```
