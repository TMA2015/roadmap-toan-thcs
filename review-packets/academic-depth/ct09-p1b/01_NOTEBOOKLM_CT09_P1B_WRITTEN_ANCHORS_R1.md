# NOTEBOOKLM SOURCE — CT09 P1-B Written Anchors R1 Independent Review

Packet: `MATH-ACADEMIC-DEPTH-CT09-P1B-WRITTEN-R1-20261003`  
State: **REVIEW ONLY / CANDIDATE CONTENT / NO LEARNER-FACING RELEASE YET**

Permanent sources expected:
- `01_TOAN_THCS_MASTER_PLAN_v1.1.md`
- `00_NOTEBOOK_MATH_PERMANENT_v1.1.md`

Accepted context:
- Academic Depth Framework R1: PASS.
- CT09 Gap Audit + Content Delta R1: C1–C10 PASS, 0 revisions.
- CT09 P1-A: owner production QA PASS on desktop and iPad.
- P1-B is authorized to add **4 foundation/support written anchors + 2 Entrance10 anchors**, with progressive static help, full solution, method rationale, common mistakes, rubric and remediation.

No item below is copied verbatim from a commercial book or an official exam. The mathematical structures are source-backed; the wording and numbers are original for this project.

---

# 1. P1-B design contract

Each anchor must support self-study without requiring AI Tutor.

Required help sequence:
1. Gợi ý 1 — nhìn dữ kiện / cấu trúc;
2. Gợi ý 2 — chọn mô hình hoặc phương pháp;
3. Gợi ý 3 — bước đầu tiên;
4. lời giải đầy đủ;
5. vì sao chọn cách này;
6. lỗi thường gặp;
7. rubric tự chấm từng bước;
8. đường quay lại kiến thức nền.

Self-check is learner-facing only and does not create automatic Mastery/Readiness credit.

---

# 2. Candidate A — Count / value modeling

ID candidate: `WX09-SYS-003`  
Learner layer: **Nền tảng**  
Problem type: count/value two-unknown system  
Pedagogical role: current-program authentic structure + complete modeling workflow  
Estimated time: 12–15 minutes

## Problem

Một khu tham quan bán tổng cộng **40 vé** trong một lượt khách. Vé người lớn giá **15 nghìn đồng**, vé học sinh giá **8 nghìn đồng**. Tổng số tiền thu được là **488 nghìn đồng**.

Hỏi đã bán bao nhiêu vé người lớn và bao nhiêu vé học sinh?

## Hint ladder

### Gợi ý 1
Có hai loại vé và cần tìm **số lượng của từng loại**. Hãy chọn hai ẩn theo số vé.

### Gợi ý 2
Bài cho hai quan hệ độc lập:
- tổng số vé;
- tổng số tiền.

### Gợi ý 3
Nếu gọi (x) là số vé người lớn và (y) là số vé học sinh, hãy bắt đầu bằng:

[
x+y=40.
]

Phương trình tiền phải có đơn vị nghìn đồng.

## Full solution

Gọi:
- (x) là số vé người lớn;
- (y) là số vé học sinh.

Điều kiện: (x,y) là các số nguyên không âm.

Từ tổng số vé:

[
x+y=40.
]

Từ tổng số tiền, tính theo nghìn đồng:

[
15x+8y=488.
]

Ta có hệ:

[
egin{cases}
x+y=40\
15x+8y=488
end{cases}
]

Nhân phương trình đầu với (8):

[
8x+8y=320.
]

Lấy phương trình tiền trừ phương trình này:

[
7x=168Rightarrow x=24.
]

Suy ra:

[
y=40-24=16.
]

Kiểm tra:

[
24+16=40,
]

[
15cdot24+8cdot16=360+128=488.
]

Vậy đã bán **24 vé người lớn** và **16 vé học sinh**.

## Why this method

Cộng đại số thuận tiện vì phương trình số lượng có thể nhân với (8) để khử ngay (y). Phần khó chính của bài không phải phép khử mà là **dịch đúng hai dữ kiện sang hai phương trình cùng đơn vị**.

## Common mistakes

- Viết (15x+8y=40), làm hai vế khác đại lượng.
- Quên ghi đơn vị nghìn đồng.
- Giải ra (x,y) nhưng không kiểm tra chúng là số nguyên không âm.
- Chỉ kiểm tra tổng số vé mà không kiểm tra tổng tiền.

## Self-check rubric — 5 points

1. Chọn đúng hai ẩn + điều kiện: 1 điểm.
2. Lập đúng (x+y=40): 1 điểm.
3. Lập đúng (15x+8y=488): 1 điểm.
4. Giải đúng (x=24, y=16): 1 điểm.
5. Kiểm tra và kết luận đúng ngữ cảnh: 1 điểm.

## Remediation

- Nếu chưa biết đặt ẩn/lập hệ: quay lại CĐ09 → “Bài toán bằng cách lập hệ”.
- Nếu lập được hệ nhưng giải chậm: ôn “phương pháp cộng đại số”.
- Easier sibling idea: tổng 20 vé, hai mức giá, số tiền được chọn để nghiệm nguyên nhỏ.

---

# 3. Candidate B — Price / discount modeling

ID candidate: `WX09-SYS-004`  
Learner layer: **Nền tảng / vận dụng**  
Problem type: listed price + different discount rates  
Pedagogical role: current-program entrance-transfer structure  
Estimated time: 15 minutes

## Problem

Một cửa hàng bán một **đèn bàn học** và một **tai nghe**. Tổng giá niêm yết của hai sản phẩm là **2 400 nghìn đồng**.

Trong chương trình khuyến mại:
- đèn bàn được giảm **10%**;
- tai nghe được giảm **20%**.

Sau giảm giá, tổng số tiền khách phải trả là **2 100 nghìn đồng**.

Tìm giá niêm yết của mỗi sản phẩm.

## Hint ladder

### Gợi ý 1
Hai ẩn nên là **hai giá niêm yết**, không phải số tiền được giảm.

### Gợi ý 2
Giảm 10% nghĩa là trả 90% giá niêm yết; giảm 20% nghĩa là trả 80%.

### Gợi ý 3
Nếu (x,y) lần lượt là hai giá niêm yết tính theo nghìn đồng:

[
x+y=2400.
]

Hãy viết phương trình số tiền đã trả bằng (0{,}9x) và (0{,}8y).

## Full solution

Gọi:
- (x) là giá niêm yết của đèn bàn;
- (y) là giá niêm yết của tai nghe;

đơn vị: nghìn đồng. Điều kiện: (x>0, y>0).

Ta có:

[
x+y=2400.
]

Sau giảm giá, khách trả:

[
0{,}9x+0{,}8y=2100.
]

Nhân phương trình hai với (10):

[
9x+8y=21000.
]

Nhân phương trình đầu với (8):

[
8x+8y=19200.
]

Lấy hai phương trình trừ nhau:

[
x=1800.
]

Suy ra:

[
y=2400-1800=600.
]

Kiểm tra tiền sau giảm:

[
0{,}9cdot1800+0{,}8cdot600=1620+480=2100.
]

Vậy giá niêm yết là:
- **1 800 nghìn đồng** cho đèn bàn;
- **600 nghìn đồng** cho tai nghe.

## Why this method

Mô hình hóa bằng hệ giúp giữ riêng hai giá chưa biết. Cần phân biệt rõ:
- giá niêm yết;
- phần trăm được giảm;
- số tiền thực trả.

## Common mistakes

- Dùng (0{,}1x) và (0{,}2y) làm số tiền phải trả thay vì số tiền được giảm.
- Trộn đơn vị đồng và nghìn đồng.
- Viết (x+y=2100) dù 2100 là tổng sau giảm.
- Không kiểm tra lại bằng số tiền thực trả.

## Self-check rubric — 5 points

1. Chọn đúng ẩn, đơn vị, điều kiện: 1 điểm.
2. Lập đúng phương trình tổng giá niêm yết: 1 điểm.
3. Lập đúng phương trình sau giảm giá: 1 điểm.
4. Giải đúng (x=1800, y=600): 1 điểm.
5. Kiểm tra phần trăm và kết luận: 1 điểm.

## Remediation

- Nếu nhầm phần trăm: ôn CĐ02/CĐ03 phần phần trăm.
- Nếu khó lập phương trình: quay lại ví dụ “hai quan hệ độc lập” của CĐ09.

---

# 4. Candidate C — Mixture / concentration

ID candidate: `WX09-SYS-005`  
Learner layer: **Củng cố**  
Problem type: mixture / concentration  
Pedagogical role: transfer from quantity relation to component-amount relation  
Estimated time: 15 minutes

## Problem

Cần pha **20 lít** dung dịch muối nồng độ **19%** từ hai loại dung dịch có nồng độ **10%** và **25%**.

Hỏi cần bao nhiêu lít mỗi loại?

## Hint ladder

### Gợi ý 1
Một phương trình đến từ **tổng thể tích**.

### Gợi ý 2
Phương trình còn lại phải theo **lượng muối**, không phải cộng trực tiếp các phần trăm.

### Gợi ý 3
Nếu (x,y) là số lít dung dịch 10% và 25%:

[
x+y=20.
]

Lượng muối trong hỗn hợp cuối là:

[
19%cdot20=3{,}8	ext{ lít tương đương theo mô hình}.
]

## Full solution

Gọi:
- (x) lít dung dịch 10%;
- (y) lít dung dịch 25%.

Điều kiện:

[
xge0,qquad yge0.
]

Tổng thể tích:

[
x+y=20.
]

Lượng muối trong hai phần:

[
0{,}10x+0{,}25y.
]

Dung dịch cuối 20 lít, nồng độ 19%, nên lượng muối là:

[
0{,}19cdot20=3{,}8.
]

Ta có hệ:

[
egin{cases}
x+y=20\
0{,}10x+0{,}25y=3{,}8
end{cases}
]

Thế (x=20-y):

[
0{,}10(20-y)+0{,}25y=3{,}8.
]

[
2+0{,}15y=3{,}8
Rightarrow0{,}15y=1{,}8
Rightarrow y=12.
]

Suy ra:

[
x=8.
]

Kiểm tra:

[
0{,}10cdot8+0{,}25cdot12=0{,}8+3=3{,}8.
]

Vậy cần **8 lít dung dịch 10%** và **12 lít dung dịch 25%**.

## Why this method

Hai quan hệ độc lập là:
- bảo toàn tổng thể tích;
- bảo toàn lượng chất đang xét.

Không thể lập phương trình bằng cách cộng (10%+25%=19%).

## Common mistakes

- Cộng trực tiếp hai nồng độ.
- Quên nhân nồng độ với thể tích tương ứng.
- Dùng 19 thay vì 0,19.
- Không kiểm tra tổng thể tích sau khi giải.

## Self-check rubric — 5 points

1. Chọn hai ẩn + điều kiện: 1 điểm.
2. Lập đúng (x+y=20): 1 điểm.
3. Lập đúng phương trình lượng muối: 1 điểm.
4. Giải đúng (x=8, y=12): 1 điểm.
5. Kiểm tra và kết luận đúng đơn vị: 1 điểm.

## Remediation

- Nếu nhầm phần trăm: ôn phần trăm trước.
- Nếu chưa hiểu phương trình thứ hai: xem lại khái niệm “lượng thành phần = tỉ lệ × tổng lượng”.

---

# 5. Candidate D — Genuine work/rate modeling

ID candidate: `WX09-SYS-006`  
Learner layer: **Củng cố**  
Problem type: productivity / rate with different times  
Pedagogical role: replace a disguised sum-difference “productivity” item with a genuine rate model  
Estimated time: 15 minutes

## Problem

Hai máy A và B làm việc với năng suất không đổi.

- Nếu cả hai cùng hoạt động trong **4 giờ**, tổng cộng làm được **200 chi tiết**.
- Trong **3 giờ**, máy A làm được nhiều hơn lượng máy B làm trong **2 giờ** là **50 chi tiết**.

Tìm năng suất của mỗi máy, tính theo chi tiết/giờ.

## Hint ladder

### Gợi ý 1
Ẩn nên là **năng suất mỗi giờ**, không phải tổng số sản phẩm.

### Gợi ý 2
Số sản phẩm = năng suất × thời gian.

### Gợi ý 3
Nếu năng suất A, B là (x,y):

[
4x+4y=200.
]

Quan hệ thứ hai là:

[
3x-2y=50.
]

## Full solution

Gọi:
- (x) là năng suất máy A, đơn vị chi tiết/giờ;
- (y) là năng suất máy B.

Điều kiện:

[
x>0,qquad y>0.
]

Trong 4 giờ, hai máy làm:

[
4x+4y=200
Rightarrow x+y=50.
]

Theo dữ kiện thứ hai:

[
3x-2y=50.
]

Ta có:

[
egin{cases}
x+y=50\
3x-2y=50
end{cases}
]

Từ (y=50-x):

[
3x-2(50-x)=50.
]

[
3x-100+2x=50
Rightarrow5x=150
Rightarrow x=30.
]

Suy ra:

[
y=20.
]

Kiểm tra:

[
4cdot30+4cdot20=200,
]

[
3cdot30-2cdot20=90-40=50.
]

Vậy:
- máy A: **30 chi tiết/giờ**;
- máy B: **20 chi tiết/giờ**.

## Why this method

Bài này buộc người học phân biệt:
- năng suất;
- thời gian;
- lượng công việc hoàn thành.

Nó không chỉ là bài “tổng và hiệu hai số” đổi tên.

## Common mistakes

- Dùng (x+y=200) dù (x,y) là năng suất mỗi giờ.
- Viết (3x-y=50) và bỏ mất 2 giờ của máy B.
- Quên đơn vị chi tiết/giờ.
- Không kiểm tra cả hai dữ kiện thời gian.

## Self-check rubric — 5 points

1. Đặt đúng năng suất làm ẩn + đơn vị: 1 điểm.
2. Lập đúng (4x+4y=200): 1 điểm.
3. Lập đúng (3x-2y=50): 1 điểm.
4. Giải đúng (x=30, y=20): 1 điểm.
5. Kiểm tra và kết luận đúng: 1 điểm.

## Remediation

- Nếu nhầm đại lượng: quay lại công thức “lượng công việc = năng suất × thời gian”.
- Nếu hệ đúng nhưng giải sai: ôn thế/cộng đại số.

---

# 6. Candidate E — Repeated-expression substitution

ID candidate: `WX09-SYS-007`  
Learner layer: **Ôn thi vào 10**  
Problem type: repeated expression → auxiliary variable → linear system  
Pedagogical role: transfer structure observed in historical Hà Nội entrance evidence  
Estimated time: 15 minutes

## Problem

Giải hệ:

[
egin{cases}
sqrt{x+1}+y=5\
2sqrt{x+1}-3y=0
end{cases}
]

## Hint ladder

### Gợi ý 1
Hai phương trình cùng chứa biểu thức (sqrt{x+1}).

### Gợi ý 2
Hãy đặt:

[
u=sqrt{x+1},qquad uge0.
]

### Gợi ý 3
Sau khi đặt (u), hệ trở thành:

[
egin{cases}
u+y=5\
2u-3y=0
end{cases}
]

Hãy giải hệ này trước.

## Full solution

Điều kiện:

[
x+1ge0Rightarrow xge-1.
]

Đặt:

[
u=sqrt{x+1},qquad uge0.
]

Hệ trở thành:

[
egin{cases}
u+y=5\
2u-3y=0
end{cases}
]

Từ phương trình đầu:

[
y=5-u.
]

Thế vào phương trình hai:

[
2u-3(5-u)=0.
]

[
2u-15+3u=0
Rightarrow5u=15
Rightarrow u=3.
]

Suy ra:

[
y=2.
]

Quay lại biến (x):

[
sqrt{x+1}=3
Rightarrow x+1=9
Rightarrow x=8.
]

Kiểm tra:

[
sqrt{8+1}+2=3+2=5,
]

[
2sqrt{9}-3cdot2=6-6=0.
]

Vậy nghiệm là:

[
(x;y)=(8;2).
]

## Why this method

Mục tiêu không phải học một “hệ căn mới”, mà là nhận ra **cùng một biểu thức lặp lại** và tạm coi nó như một ẩn. Sau khi giải hệ tuyến tính, phải quay lại biến ban đầu và kiểm tra điều kiện.

## Common mistakes

- Đặt (u) nhưng quên (uge0).
- Giải được (u,y) rồi kết luận luôn ((u;y)) là nghiệm cần tìm.
- Bình phương (sqrt{x+1}=3) nhưng không quay lại kiểm tra.
- Không nêu điều kiện (xge-1).

## Self-check rubric — 6 points

1. Nêu đúng điều kiện: 1 điểm.
2. Đặt (u=sqrt{x+1}), ghi (uge0): 1 điểm.
3. Lập đúng hệ theo (u,y): 1 điểm.
4. Giải đúng (u=3, y=2): 1 điểm.
5. Quay lại tìm đúng (x=8): 1 điểm.
6. Kiểm tra và kết luận: 1 điểm.

## Remediation

- Nếu chưa nhận ra biểu thức lặp: xem lại bài biến đổi trước khi giải.
- Nếu khó giải hệ mới: ôn phương pháp thế/cộng đại số.
- Nếu quên điều kiện căn: ôn CĐ11 về căn thức.

---

# 7. Candidate F — Parameter classification with safe case split

ID candidate: `WX09-SYS-008`  
Learner layer: **Ôn thi vào 10**  
Problem type: parameter → one / no / infinitely many solutions  
Pedagogical role: teach safe case split before dividing by a parameter expression  
Estimated time: 18 minutes

## Problem

Biện luận số nghiệm của hệ theo tham số (m):

[
egin{cases}
x+y=2\
(m-1)ig((m+1)x+yig)=m-1
end{cases}
]

## Hint ladder

### Gợi ý 1
Trước khi chia hai vế phương trình hai cho (m-1), phải xét riêng giá trị nào?

### Gợi ý 2
Xét (m=1) trước. Sau đó mới làm việc với trường hợp (m
e1).

### Gợi ý 3
Khi (m
e1), phương trình hai trở thành:

[
(m+1)x+y=1.
]

Trừ phương trình (x+y=2), ta được:

[
mx=-1.
]

Hãy tiếp tục tách trường hợp (m=0) và (m
e0).

## Full solution

Xét hai trường hợp.

### Trường hợp 1: (m=1)

Phương trình hai trở thành:

[
0=0.
]

Hệ chỉ còn:

[
x+y=2.
]

Đây là một phương trình bậc nhất hai ẩn nên có vô số cặp nghiệm.

Vì vậy, khi:

[
m=1,
]

hệ có **vô số nghiệm**.

### Trường hợp 2: (m
e1)

Ta được phép chia phương trình hai cho (m-1):

[
(m+1)x+y=1.
]

Kết hợp với:

[
x+y=2.
]

Lấy phương trình mới trừ phương trình đầu:

[
mx=-1.
]

#### Nếu (m=0)

Ta được:

[
0=-1,
]

vô lý. Hệ **vô nghiệm**.

#### Nếu (m
e0) và (m
e1)

Ta có:

[
x=-rac1m.
]

Từ (x+y=2):

[
y=2+rac1m.
]

Vậy hệ có **một nghiệm duy nhất**.

## Final classification

- (m=1): vô số nghiệm.
- (m=0): vô nghiệm.
- (m
e0,1): một nghiệm duy nhất,

với:

[
(x;y)=left(-rac1m; 2+rac1might).
]

## Why this method

Điểm trọng tâm là **không được chia cho biểu thức chứa tham số trước khi kiểm tra nó có thể bằng 0 hay không**. Việc tách trường hợp bảo vệ lời giải khỏi làm mất trường hợp đặc biệt.

## Common mistakes

- Chia ngay cho (m-1), làm mất trường hợp (m=1).
- Từ (mx=-1) chia tiếp cho (m) mà không xét (m=0).
- Kết luận (m=0) có nghiệm vì quên kiểm tra mâu thuẫn (0=-1).
- Nêu số nghiệm nhưng không tổng hợp đầy đủ các trường hợp.

## Self-check rubric — 6 points

1. Xét riêng (m=1): 1 điểm.
2. Kết luận đúng vô số nghiệm khi (m=1): 1 điểm.
3. Với (m
e1), chia hợp lệ và đưa về hệ mới: 1 điểm.
4. Suy ra đúng (mx=-1): 1 điểm.
5. Xét đúng (m=0) → vô nghiệm: 1 điểm.
6. Với (m
e0,1), kết luận một nghiệm duy nhất và viết đúng nghiệm: 1 điểm.

## Remediation

- Nếu chưa hiểu số nghiệm: quay lại ý nghĩa hình học hai đường thẳng.
- Nếu hay chia mất trường hợp: ôn nguyên tắc điều kiện trước khi chia.
- Nếu biến đổi hệ chậm: ôn cộng đại số.

---

# 8. Anti-inflation / non-duplication check

The six anchors are intentionally structurally different.

- A: count + total value.
- B: original price + percentage payment.
- C: total quantity + component conservation.
- D: rate × different times.
- E: repeated-expression substitution then back-substitution.
- F: parameter case split and degeneracy.

Changing nouns/numbers within one of these families would **not** create a new anchor.

The existing CT09 short written set may remain as quick practice, but these six are intended to become the **deep self-study anchors**.

---

# 9. Proposed learner UI contract after approval

Do not show all support at once.

For each new anchor:
- problem first;
- one compact **Gợi ý** control reveals hints progressively: Hint 1 → Hint 2 → Hint 3;
- separate **Lời giải**;
- separate **Tự chấm**;
- separate **Lỗi thường gặp**;
- prerequisite/remediation links below.

Underlying metadata may retain layer/skill IDs, but learner-facing labels should use:
- **Nền tảng**
- **Củng cố**
- **Ôn thi vào 10**

rather than internal product/assessment terminology.

No help interaction writes Mastery/Readiness evidence.

---

# 10. Independent review questions

Return PASS / REVISE for each item.

1. W1 — Are all six problem statements and full solutions mathematically correct?
2. W2 — Are A and B distinct enough pedagogically, rather than being near-clones of the same value model?
3. W3 — Does C correctly model mixture/concentration at an appropriate Grade-9 self-study level?
4. W4 — Is D a genuine rate/productivity model rather than a disguised sum-difference exercise?
5. W5 — Is E an appropriate Entrance10 transfer anchor and is the substitution/back-substitution logic complete?
6. W6 — Is F mathematically sound, and does it teach the parameter case split without relying on an unsafe division?
7. W7 — Are the learner layers correct: A–B foundation/application, C–D support, E–F Entrance10?
8. W8 — Is the 3-step hint ladder sufficiently progressive without giving away the full solution too early?
9. W9 — Are rubrics/common mistakes/remediation sufficient for self-study without AI?
10. W10 — Does this six-anchor set improve CT09 written transfer without unnecessary content inflation?

Also identify:
- any wording ambiguity;
- any unit/condition issue;
- any step that assumes untaught knowledge;
- any anchor that should be simplified, removed, or re-layered;
- any missing essential Core written family that would make this P1-B set insufficient.

Overall verdict exactly:
- `PASS`
- `REVISIONS_REQUIRED`

A PASS authorizes integration of these six original anchors into CT09 P1-B only. It does not authorize mass-edit of other topics, automatic Mastery/Readiness credit, regrade/backfill, or removal of existing learner history.
