# Temp · Toán 10 KNTT tập 1 · Chương III · Bài 5–6 · D1–D6 R01

**PACKET_ID:** `THPT-G10-CHIII-B05-B06-D1D6-AUTHORING-20261029-R01`  
**STATUS:** `NEW_ACADEMIC_MATERIAL_DELTA_C / ACADEMIC_REVIEW_PENDING / CONTENT_READY=NO`  
**OWNER_LANE:** `AUTHORING_ONLY` (A1–A7; không code website, merge/deploy, Mastery).  
**LEARNING_PATH:** `SGK_CHAPTER`; **RELEASE_SCOPE:** `PUBLIC_FORMATIVE_ONLY`; chỉ B05/B06, không có Tự kiểm tra cuối chương hoặc TOPIC Readiness.  
**MASTER_PLAN:** THPT Dual Complete Learning Paths v2.0 (file Project 08), không suy từ bài SGK sang Chuyên đề.  
**PERMANENT_SOURCES:** 5 nguồn THPT NotebookLM v2.0 đang hiệu lực, không sử dụng v1.0:
1. `01_THPT_MASTER_PLAN_v2.0.md`
2. `02_THPT_NOTEBOOKLM_INDEPENDENT_REVIEW_RULES_v2.0.md`
3. `03_THPT_ACADEMIC_SOURCES_AND_DEPTH_AUDIT_v2.0.md`
4. `04_THPT_GOLDEN_LEARNING_ARCHITECTURE_v2.0.md`
5. `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.0.md`

## 1. SOURCE_RECEIPT · SGK/SBT KNTT S1, trang in

| Phạm vi | SGK Toán 10 KNTT tập 1 | SBT Toán 10 KNTT tập 1 | Kiểm toán |
|---|---|---|---|
| Bài 5: Giá trị lượng giác của một góc từ 0° đến 180° | 33–37 (nội dung 34–37) | 29–33 | Đối chiếu trực tiếp PDF scan: nửa đường tròn đơn vị, bảng giá trị, góc bù, hệ thức và ứng dụng góc |
| Bài 6: Hệ thức lượng trong tam giác | 38–43 | 34–39 | Đối chiếu trực tiếp PDF scan: định lí côsin/sin, giải tam giác, diện tích theo sin, Heron, r/R, đo đạc ứng dụng |
| Bài tập cuối Chương III | 44–45 | 40–44 | Đối chiếu bài tập tổng hợp, trắc nghiệm/tự luận; là nguồn đối chiếu độ đa dạng, KHÔNG đưa câu kiểm tra giữ kín vào bản công khai |
| Hướng dẫn lời giải SBT Chương III | — | Bắt đầu 94 | Nguồn S1 cho đối chiếu thuật toán/đáp án, không sao chép nguyên bài sách |

**Nguồn lưu trữ:** thư mục `KNTT TOAN 10` của chủ dự án trên Google Drive (SGK/SBT Toán 10 tập 1 bản PDF scan). Các câu dưới đây là **đề tự biên soạn**, không chép nguyên văn bài SBT; những ví dụ bổ sung nếu vượt khái niệm Core sẽ gắn nhãn vận dụng rõ ràng. Đề nghị NotebookLM xác nhận độc lập từng phạm vi trang và việc phân loại Core/Practice.

## 2. Cấu trúc, canonical policy và outcome map

- **EXPECTED_LESSONS:** 2 (`B05`, `B06`).
- **EXPECTED_D2_EXAMPLES:** 6 (3 mỗi bài).
- **EXPECTED_FORMATIVE_ITEM_ID:** 16 (4 `SGK_CORE` + 12 `SGK_PRACTICE`).
- **EXPECTED_WRITTEN_ITEM_ID:** 2 (một bài Anchor là **nhãn của Written**, không tạo ngân hàng mới).
- **EXPECTED_CANONICAL_TOTAL:** 18; mỗi câu có một `item_id` canonical đề xuất, một bộ đề/đáp án/lời giải, không nhân bản trên Topic.
- **EXPECTED_FIGURE_ID:** 2 (`FIG-G10-B05-01`, `FIG-G10-B06-01`).
- **EXPECTED_HELP_ID:** 4 (HELP không phải item ngân hàng).
- **EVIDENCE_BOUNDARY:** SGK Core/Practice chỉ là học liệu công khai Formative; không ghi Skill Mastery từ câu tập hoặc bài tự luận tự đối chiếu.

| Outcome ID | Thuộc bài | Kiến thức/năng lực | D1 | D2 | D3/D4 chứng cứ |
|---|---|---|---|---|---|
| `G10-B05-UNIT_SEMICIRCLE` | B05 | Điểm M trên nửa đường tròn đơn vị, sin/cos là tung/hoành | B05-D1.1 | EX-B05-01 | B05-C01; FIG-B05 |
| `G10-B05-SPECIAL_ANGLES` | B05 | GTLG các góc đặc biệt 0°–180° | B05-D1.2 | EX-B05-01,03 | B05-C01; B05-P01, P03 |
| `G10-B05-SIGN_DOMAIN` | B05 | Dấu và điều kiện xác định sin, cos, tan, cot | B05-D1.1/2 | EX-B05-02 | B05-C02; B05-P02, P06 |
| `G10-B05-SUPPLEMENTARY` | B05 | GTLG của hai góc bù | B05-D1.3 | EX-B05-01/03 | B05-P01, P03, P05 |
| `G10-B05-IDENTITIES` | B05 | Hệ thức lượng giác cơ bản và suy giá trị | B05-D1.4 | EX-B05-02 | B05-P02, P04, P06; W05 |
| `G10-B06-COSINE_RULE` | B06 | Định lí côsin và nhận diện góc đối diện | B06-D1.1 | EX-B06-01 | B06-C01, P04, P06; FIG-B06 |
| `G10-B06-SINE_RULE` | B06 | Định lí sin, góc còn lại và bán kính ngoại tiếp | B06-D1.2 | EX-B06-02 | B06-P01, P03, P05; W06 |
| `G10-B06-AREA_SIN` | B06 | Diện tích qua hai cạnh và góc xen giữa | B06-D1.3 | EX-B06-01 | B06-C02, P04, P06; FIG-B06 |
| `G10-B06-HERON` | B06 | Heron, bán kính nội/ngoại tiếp | B06-D1.3 | EX-B06-03 | B06-P02, P04; W06 |
| `G10-B06-APPLICATION` | B06 | Giải tam giác/đo đạc, mô hình và đơn vị | B06-D1.4 | EX-B06-02/03 | B06-P03, P05; W06 |

**Lưu ý ID:** toàn bộ outcome trên là mã ứng viên mới để review, không tự khẳng định đã tồn tại trong hệ thống canonical. Dùng chung role/placement khi bài tương thích trong nhánh TOPIC sau này, không copy câu/đáp án.

## 3. BÀI 5 · Giá trị lượng giác của một góc từ 0° đến 180°

### B05-D1.1 · Định nghĩa trên nửa đường tròn đơn vị

Cho `0° ≤ α ≤ 180°`. Điểm `M(x,y)` trên nửa đường tròn đơn vị tâm O, từ tia Ox quay góc α ngược chiều kim đồng hồ, xác định `cos α = x`, `sin α = y` và `x²+y²=1`, `y≥0`. Sin luôn không âm; cos dương với góc nhọn, bằng 0 tại 90°, âm với góc tù.

\[
\tan\alpha=\frac{\sin\alpha}{\cos\alpha}\quad\text{chỉ khi }\cos\alpha\ne0;\qquad
\cot\alpha=\frac{\cos\alpha}{\sin\alpha}\quad\text{chỉ khi }\sin\alpha\ne0.
\]

`tan 90°` không xác định; `cot 0°` và `cot 180°` không xác định. `sin`, `cos` xác định trên toàn đoạn 0°–180°. Trên góc tù 90°–180°, cả tan và cot (khi có nghĩa) đều âm.

### B05-D1.2 · Giá trị đặc biệt

| α | 0° | 30° | 45° | 60° | 90° | 120° | 135° | 150° | 180° |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| sin α | 0 | 1/2 | √2/2 | √3/2 | 1 | √3/2 | √2/2 | 1/2 | 0 |
| cos α | 1 | √3/2 | √2/2 | 1/2 | 0 | −1/2 | −√2/2 | −√3/2 | −1 |

Với tan/cot, dùng tỷ số sin/cos chỉ **khi mẫu khác 0**; không ghi một số tại ô không xác định. SBT p.29–30 cung cấp bảng và những ví dụ góc đặc biệt; ở đây nêu tối thiểu các hàng sin/cos để học sinh tránh học thuộc tan/cot sai điều kiện.

### B05-D1.3 · Góc bù

Với hai góc bù `α` và `180°−α`:
\[
\begin{aligned}
\sin(180^\circ-\alpha)&=\sin\alpha, & \cos(180^\circ-\alpha)&=-\cos\alpha,\\
\tan(180^\circ-\alpha)&=-\tan\alpha, & \cot(180^\circ-\alpha)&=-\cot\alpha
\end{aligned}
\]
Hai đẳng thức có tan và cot chỉ dùng khi vế tương ứng đều xác định. Đây không phải công thức sin/cos của tổng hai góc bất kỳ; không đưa nội dung công thức cộng Toán 11 vào Core.

### B05-D1.4 · Hệ thức cơ bản và dấu

\[
\sin^2\alpha+\cos^2\alpha=1,\quad
1+\tan^2\alpha=\frac1{\cos^2\alpha}\;(\cos\alpha\ne0),\quad
1+\cot^2\alpha=\frac1{\sin^2\alpha}\;(\sin\alpha\ne0).
\]
Khi `sin α ≠ 0` **và** `cos α ≠ 0`, có `tan α·cot α=1`. Biết một giá trị sin/cos cần xét **góc nhọn hay tù** để chọn dấu căn còn lại.

### B05-D2 · Ví dụ giải mẫu

**EX-G10-B05-01 — Góc 120°:** `120°=180°−60°`, do đó 
\(\sin120^\circ=\sqrt3/2\), \(\cos120^\circ=-1/2\), \(\tan120^\circ=-\sqrt3\), \(\cot120^\circ=-\sqrt3/3\). Cos âm vì góc tù; hai tỷ số đều có nghĩa.

**EX-G10-B05-02 — Biết sin và biết góc tù:** Cho góc tù α với `sin α=3/5`. Từ `sin²+cos²=1` suy `cos²=16/25`; chọn `cos α=−4/5` vì góc tù, và `tan α=−3/4`. Lỗi thường gặp: dùng căn dương mà không xét miền của α.

**EX-G10-B05-03 — Tính biểu thức góc bù:** `sin150°+cos150° = 1/2−√3/2=(1−√3)/2`. Trước khi thay giá trị, nhận ra `150°=180°−30°`, sin giữ nguyên, cos đổi dấu.

## 4. BÀI 6 · Hệ thức lượng trong tam giác

### B06-D1.1 · Kí hiệu và định lí côsin

Trong tam giác **không suy biến** ABC, đặt `a=BC`, `b=CA`, `c=AB`, với các góc đối diện tương ứng A,B,C; các cạnh `a,b,c>0`, thỏa bất đẳng thức tam giác nghiêm ngặt.
\[
\begin{aligned}
a^2&=b^2+c^2-2bc\cos A,\\
b^2&=a^2+c^2-2ac\cos B,\\
c^2&=a^2+b^2-2ab\cos C.
\end{aligned}
\]
Từ đó \(\cos A=(b^2+c^2-a^2)/(2bc)\), tương tự cho B,C. Nếu `A=90°`, định lí trở thành Pitago. Không chọn nhầm góc B trong công thức liên quan `b,c`.

### B06-D1.2 · Định lí sin

Với `R>0` là bán kính ngoại tiếp:
\[
\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}=2R.
\]
Mọi góc trong của tam giác nằm trong `(0°,180°)` nên các sin dương. Nếu đã biết hai góc, góc thứ ba bằng `180°−A−B`; trước khi dùng cần `A+B<180°`. Trường hợp chỉ biết `A,a,b` có thể có hai góc B thỏa phương trình sin, nên không mặc định phép lấy arcsin trả một tam giác duy nhất.

### B06-D1.3 · Diện tích, Heron và bán kính

Với `p=(a+b+c)/2` và diện tích `S>0`:
\[
S=\tfrac12bc\sin A=\tfrac12ca\sin B=\tfrac12ab\sin C,\qquad
S=\sqrt{p(p-a)(p-b)(p-c)},
\]
\[
S=pr,\qquad S=\frac{abc}{4R}.
\]
Trong đó r là bán kính đường tròn **nội tiếp**, R là bán kính **ngoại tiếp**. Đơn vị diện tích là đơn vị độ dài bình phương; không dùng Heron khi ba cạnh không tạo thành tam giác.

### B06-D1.4 · Giải tam giác và ứng dụng S1

Khi biết đủ ba cạnh (SSS), thường dùng định lí côsin tìm góc; khi biết hai cạnh và góc xen giữa (SAS), tìm cạnh còn lại bằng côsin; khi biết hai góc và một cạnh (ASA/AAS), dùng định lí sin. Với đo đạc thực tế, phải khai báo đoạn mốc, góc quan sát là **góc trong của tam giác nào**, độ dài cần tìm, đơn vị và độ chính xác hợp lý. Nếu cần bán kính ngoại tiếp, dùng `2R=a/sin A` hoặc `S=abc/(4R)`.

### B06-D2 · Ví dụ giải mẫu

**EX-G10-B06-01 — Côsin và diện tích:** `b=6,c=8,A=60°`. 
\(a^2=36+64-2\cdot6\cdot8\cdot\tfrac12=52\), nên \(a=2\sqrt{13}\). Đồng thời \(S=\tfrac12\cdot6\cdot8\cdot\sin60^\circ=12\sqrt3\). Nêu đúng góc xen giữa và cạnh đối diện.

**EX-G10-B06-02 — Định lí sin:** `A=30°,B=45°,a=5`; vậy `C=105°`. 
\(b=5\sin45^\circ/\sin30^\circ=5\sqrt2\), \(2R=5/\sin30^\circ=10\), nên `R=5`. Các góc đều hợp lệ.

**EX-G10-B06-03 — Heron và hai bán kính:** Ba cạnh 13,14,15 thỏa bất đẳng thức tam giác. Nửa chu vi `p=21`, 
\(S=\sqrt{21\cdot8\cdot7\cdot6}=84\), bán kính nội tiếp `r=S/p=4`, bán kính ngoại tiếp 
\(R=13\cdot14\cdot15/(4\cdot84)=65/8\). Không nhầm r và R.

## 5. D3 · 16 CÂU CORE / PRACTICE CÓ CANONICAL ID, ĐÁP ÁN, GỢI Ý, LỜI GIẢI

### THPT-G10-B05-C01

- **Bài:** B05; **placement:** `SGK_CORE`; **role:** `FORMATIVE`; **outcome:** `G10-B05-UNIT_SEMICIRCLE`; **difficulty:** `BASIC`.
- **STEM:** Giá trị của \(\cos120^\circ\) là bao nhiêu?
- **OPTIONS:** A. \(\tfrac12\) | B. \(-\tfrac12\) | C. \(\tfrac{\sqrt3}{2}\) | D. \(-\tfrac{\sqrt3}{2}\)
- **ANSWER:** B
- **HINT (chỉ luyện tập):** Viết 120° dưới dạng 180°−60°.
- **EXPLANATION:** \(\cos120^\circ=\cos(180^\circ-60^\circ)=-\cos60^\circ=-\tfrac12\).

### THPT-G10-B05-C02

- **Bài:** B05; **placement:** `SGK_CORE`; **role:** `FORMATIVE`; **outcome:** `G10-B05-SIGN_DOMAIN`; **difficulty:** `BASIC`.
- **STEM:** Trong đoạn từ 0° đến 180°, biểu thức nào sau đây **không xác định**?
- **OPTIONS:** A. \(\sin90^\circ\) | B. \(\cos180^\circ\) | C. \(\tan90^\circ\) | D. \(\tan180^\circ\)
- **ANSWER:** C
- **HINT (chỉ luyện tập):** Tan là tỉ số sin/cos; khi nào mẫu bằng 0?
- **EXPLANATION:** Tại 90°, cos=0 nên tan không xác định. Tan180°=0 vì cos180°=−1 khác 0.

### THPT-G10-B05-P01

- **Bài:** B05; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B05-SUPPLEMENTARY`; **difficulty:** `CORE_APPLY`.
- **STEM:** Cặp giá trị \((\sin150^\circ,\cos150^\circ)\) bằng bao nhiêu?
- **OPTIONS:** A. \((\tfrac12,\tfrac{\sqrt3}{2})\) | B. \((\tfrac12,-\tfrac{\sqrt3}{2})\) | C. \((-\tfrac12,-\tfrac{\sqrt3}{2})\) | D. \((\tfrac{\sqrt3}{2},-\tfrac12)\)
- **ANSWER:** B
- **HINT (chỉ luyện tập):** Hai góc 150° và 30° bù nhau.
- **EXPLANATION:** \(\sin150^\circ=\sin30^\circ=\tfrac12\); \(\cos150^\circ=-\cos30^\circ=-\tfrac{\sqrt3}{2}\).

### THPT-G10-B05-P02

- **Bài:** B05; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B05-IDENTITIES`; **difficulty:** `CORE_APPLY`.
- **STEM:** Cho góc tù α với \(\cos\alpha=-3/5\). Tính \(\sin\alpha\) và \(\tan\alpha\).
- **ANSWER:** \(\sin\alpha=4/5,\ \tan\alpha=-4/3\).
- **HINT (chỉ luyện tập):** Từ sin²+cos²=1, chọn dấu sin theo miền 90°<α<180°.
- **EXPLANATION:** \(\sin^2\alpha=1-9/25=16/25\). Góc tù có sin dương nên sin=4/5; tan=(4/5)/(−3/5)=−4/3.

### THPT-G10-B05-P03

- **Bài:** B05; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B05-SPECIAL_ANGLES`; **difficulty:** `CORE_APPLY`.
- **STEM:** Tính chính xác \(T=\sin135^\circ+\cos120^\circ\).
- **ANSWER:** \(T=(\sqrt2-1)/2\).
- **HINT (chỉ luyện tập):** Đưa từng góc về góc bù của góc nhọn.
- **EXPLANATION:** \(\sin135^\circ=\sin45^\circ=\sqrt2/2\), \(\cos120^\circ=-1/2\). Cộng lại được \((\sqrt2-1)/2\).

### THPT-G10-B05-P04

- **Bài:** B05; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B05-IDENTITIES`; **difficulty:** `CORE_APPLY`.
- **STEM:** Phát biểu nào đúng với **mọi** \(0^\circ\le\alpha\le180^\circ\)?
- **OPTIONS:** A. \(\tan\alpha\cdot\cot\alpha=1\) | B. \(\sin^2\alpha+\cos^2\alpha=1\) | C. \(\cos\alpha\ge0\) | D. \(\cot\alpha\) xác định với mọi α
- **ANSWER:** B
- **HINT (chỉ luyện tập):** Tìm công thức nào không có điều kiện mẫu khác 0.
- **EXPLANATION:** \(\sin^2\alpha+\cos^2\alpha=1\) đúng trên toàn đoạn. Câu A không có nghĩa tại 0°,90°,180°; cos âm với góc tù; cot0° và cot180° không xác định.

### THPT-G10-B05-P05

- **Bài:** B05; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B05-SUPPLEMENTARY`; **difficulty:** `CORE_APPLY`.
- **STEM:** Trong \([0^\circ,180^\circ]\), có những góc nào thỏa \(\sin\alpha=\sqrt3/2\)?
- **OPTIONS:** A. Chỉ 60° | B. Chỉ 120° | C. 60° và 120° | D. 30° và 150°
- **ANSWER:** C
- **HINT (chỉ luyện tập):** Sin hai góc bù bằng nhau.
- **EXPLANATION:** \(\sin60^\circ=\sqrt3/2\); góc bù 120° có cùng sin. Trong đoạn đã cho chỉ có hai góc đó.

### THPT-G10-B05-P06

- **Bài:** B05; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B05-SIGN_DOMAIN`; **difficulty:** `APPLICATION`.
- **STEM:** Góc tù α thỏa \(\tan\alpha=-2\). Tính \(\sin\alpha,\cos\alpha,\cot\alpha\).
- **ANSWER:** \(\sin\alpha=2/\sqrt5,\ \cos\alpha=-1/\sqrt5,\ \cot\alpha=-1/2\).
- **HINT (chỉ luyện tập):** Dùng 1+tan²=1/cos²; dấu cos của góc tù âm.
- **EXPLANATION:** \(\cos^2\alpha=1/5\); góc tù nên cos=−1/√5. Sin=tan·cos=2/√5; cot=1/tan=−1/2.

### THPT-G10-B06-C01

- **Bài:** B06; **placement:** `SGK_CORE`; **role:** `FORMATIVE`; **outcome:** `G10-B06-COSINE_RULE`; **difficulty:** `BASIC`.
- **STEM:** Trong tam giác ABC có \(b=5,c=7,A=60^\circ\). Tính \(a\).
- **OPTIONS:** A. \(\sqrt{39}\) | B. \(\sqrt{74}\) | C. \(\sqrt{109}\) | D. \(\sqrt{14}\)
- **ANSWER:** A
- **HINT (chỉ luyện tập):** a đối diện A, dùng a²=b²+c²−2bc cos A.
- **EXPLANATION:** \(a^2=25+49-2\cdot5\cdot7\cdot\tfrac12=39\), a=√39.

### THPT-G10-B06-C02

- **Bài:** B06; **placement:** `SGK_CORE`; **role:** `FORMATIVE`; **outcome:** `G10-B06-AREA_SIN`; **difficulty:** `BASIC`.
- **STEM:** Tam giác có \(b=8,c=5,A=30^\circ\). Diện tích \(S\) bằng bao nhiêu?
- **OPTIONS:** A. 20 | B. 10 | C. 40 | D. 5
- **ANSWER:** B
- **HINT (chỉ luyện tập):** Diện tích qua hai cạnh b,c và góc A xen giữa.
- **EXPLANATION:** \(S=\tfrac12\cdot8\cdot5\cdot\sin30^\circ=10\).

### THPT-G10-B06-P01

- **Bài:** B06; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B06-SINE_RULE`; **difficulty:** `CORE_APPLY`.
- **STEM:** Cho tam giác ABC có \(A=30^\circ,B=60^\circ,a=4\). Tính \(b\) và \(R\).
- **ANSWER:** \(b=4\sqrt3,\ R=4\).
- **HINT (chỉ luyện tập):** Theo định lí sin b/sinB=a/sinA=2R.
- **EXPLANATION:** \(b=4(\sqrt3/2)/(1/2)=4\sqrt3\); \(2R=4/(1/2)=8\), R=4.

### THPT-G10-B06-P02

- **Bài:** B06; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B06-HERON`; **difficulty:** `CORE_APPLY`.
- **STEM:** Tam giác cân có các cạnh 5,5,6. Tính \(S\) và bán kính nội tiếp \(r\).
- **ANSWER:** \(S=12,\ r=3/2\).
- **HINT (chỉ luyện tập):** p bằng nửa chu vi; dùng Heron và S=pr.
- **EXPLANATION:** \(p=8\); \(S=\sqrt{8\cdot3\cdot3\cdot2}=12\); \(r=S/p=3/2\).

### THPT-G10-B06-P03

- **Bài:** B06; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B06-SINE_RULE`; **difficulty:** `CORE_APPLY`.
- **STEM:** Tam giác ABC có \(A=30^\circ,B=60^\circ,c=8\). Tính \(a,b\).
- **ANSWER:** \(a=4,\ b=4\sqrt3\).
- **HINT (chỉ luyện tập):** Tính C trước: C=90°, c là cạnh đối diện 90°.
- **EXPLANATION:** \(C=90^\circ\), c/sinC=8. Vậy \(a=8\sin30^\circ=4\), \(b=8\sin60^\circ=4\sqrt3\).

### THPT-G10-B06-P04

- **Bài:** B06; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B06-HERON`; **difficulty:** `CORE_APPLY`.
- **STEM:** Tam giác có ba cạnh \(a=7,b=8,c=9\). Tính \(\cos C\) và diện tích \(S\).
- **ANSWER:** \(\cos C=2/7,\ S=12\sqrt5\).
- **HINT (chỉ luyện tập):** Định lí côsin cho góc C; dùng Heron với p=12.
- **EXPLANATION:** \(\cos C=(a^2+b^2-c^2)/(2ab)=(49+64-81)/(112)=2/7\). p=12; \(S=\sqrt{12\cdot5\cdot4\cdot3}=12\sqrt5\).

### THPT-G10-B06-P05

- **Bài:** B06; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B06-APPLICATION`; **difficulty:** `APPLICATION`.
- **STEM:** Đo khoảng cách qua một khu vực khó tiếp cận: người khảo sát đứng ở A và B cách nhau 100 m, ngắm điểm C sao cho \(\angle A=30^\circ,\angle B=60^\circ\) trong tam giác ABC. Tính BC và AC.
- **ANSWER:** \(BC=50\text{ m},\ AC=50\sqrt3\text{ m}\).
- **HINT (chỉ luyện tập):** Góc C bằng bao nhiêu? AB đối diện C.
- **EXPLANATION:** \(C=90^\circ\), \(AB=100\) là cạnh huyền. \(BC=AB\sin A=50\) m, \(AC=AB\sin B=50\sqrt3\) m.

### THPT-G10-B06-P06

- **Bài:** B06; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B06-COSINE_RULE`; **difficulty:** `CORE_APPLY`.
- **STEM:** Tam giác ABC có \(a=\sqrt{61},b=5,c=6\). Hãy xác định góc A và diện tích \(S\).
- **ANSWER:** \(A=90^\circ,\ S=15\).
- **HINT (chỉ luyện tập):** So sánh a² với b²+c².
- **EXPLANATION:** \(a^2=61=b^2+c^2=25+36\) nên \(\cos A=0\), A=90°. \(S=\tfrac12 bc=15\).

## 6. D4 · THƯ VIỆN WRITTEN DÙNG CHUNG (Anchor là thuộc tính Written)

### THPT-G10-CHIII-W05

- **Bài:** B05; **placement:** `WRITTEN`; **role:** `WRITTEN`; **outcomes:** `G10-B05-UNIT_SEMICIRCLE`, `G10-B05-IDENTITIES`, `G10-B05-SUPPLEMENTARY`; **difficulty:** `APPLICATION`; **rubric:** 7 điểm. 
- **STEM:** Một vòng quay có tâm O cao hơn mặt đất 12 m, bán kính 10 m. Xét vị trí M được xác định bởi góc 150° so với tia Ox hướng ngang sang phải, theo chiều dương, trên nửa đường tròn phía trên O. (a) Tính tọa độ của M trong hệ trục Oxy (mét). (b) Tìm độ cao M so với mặt đất. (c) Giải thích dấu của cos150° bằng hình học, không chỉ thuộc bảng số.
- **HINT (luyện tập):** Với bán kính 10, hoành độ bằng `10cos150°`, tung độ bằng `10sin150°`; độ cao mặt đất = cao độ tâm + tung độ.
- **LỜI GIẢI:** (a) \(x_M=10\cos150^\circ=-5\sqrt3\) (m), \(y_M=10\sin150^\circ=5\) (m). (b) Độ cao M là \(12+5=17\) m. (c) Góc 150° nằm phía trái trục Oy nên hình chiếu xuống trục Ox âm, từ đó cos150°<0.
- **RUBRIC 7 điểm:** (1) Nêu đúng quy chiếu tâm O, bán kính và góc (1đ); (2) viết đúng `x=Rcos`, `y=Rsin` (2đ); (3) thay giá trị góc bù tính đủ tọa độ (2đ); (4) tính độ cao mặt đất 17 m (1đ); (5) giải thích hình học dấu cos (1đ). Không trừ lặp cùng lỗi số ở các bước phụ thuộc khi cách làm đúng; giáo viên/người học đối chiếu thủ công, không tự cộng Mastery.

### THPT-G10-CHIII-W06-ANCHOR

- **Bài:** B06; **placement:** `WRITTEN`; **role:** `WRITTEN`, `ANCHOR=true` (chỉ nhãn, cùng một item_id/rubric); **outcomes:** `G10-B06-COSINE_RULE`, `G10-B06-HERON`, `G10-B06-APPLICATION`; **difficulty:** `APPLICATION`; **rubric:** 7 điểm.
- **STEM:** Một mảnh đất hình tam giác ABC có AB=9 m, AC=10 m và BC=17 m. (a) Chứng minh ba cạnh tạo thành tam giác. Tính \(\cos A\) và cho biết góc A nhọn hay tù. (b) Tính diện tích S bằng công thức Heron. (c) Tính bán kính đường tròn nội tiếp r và ngoại tiếp R. (d) Nếu trải cỏ toàn bộ mảnh đất, giá 120.000 đồng/m², tính chi phí chưa gồm công.
- **HINT (luyện tập):** Kiểm tra 9+10>17; a=BC là cạnh đối diện A; nửa chu vi p=(9+10+17)/2; dùng S=pr và S=abc/(4R).
- **LỜI GIẢI:** (a) Vì \(9+10=19>17\) nên ba độ dài lập thành một tam giác. Với a=17,b=10,c=9, \(\cos A=(b^2+c^2-a^2)/(2bc)=(100+81-289)/(180)=-3/5\), nên A **tù**. (b) \(p=18\), \(S=\sqrt{18\cdot(18-17)\cdot(18-10)\cdot(18-9)}=\sqrt{18\cdot1\cdot8\cdot9}=36\text{ m}^2\). (c) \(r=S/p=36/18=2\text{ m}\), \(R=abc/(4S)=17\cdot10\cdot9/(4\cdot36)=85/8\text{ m}\). (d) Chi phí \(36\cdot120000=4\,320\,000\) đồng.
- **RUBRIC 7 điểm:** kiểm tra bất đẳng thức tam giác (1đ); sử dụng đúng định lí côsin và tính cos A (1.5đ); suy góc A tù (0.5đ); tính p và S đúng kèm m² (2đ); suy r và R đúng đơn vị (1.5đ); chi phí cỏ đúng (0.5đ). Tự luận tự đối chiếu không cập nhật Skill Mastery.

## 7. D5 · HAI SVG NGUỒN THẬT (TOÀN BỘ XML TRONG GÓI)

- **FIG-G10-B05-01:** B05 — nửa đường tròn đơn vị, M tại góc 120° có tọa độ (−1/2,√3/2), dấu và điều kiện tan/cot. File nguồn `THPT_G10_B05_SEMICIRCLE_120_D5_R01.svg` (width 950, height 540, viewBox, role=img/title/desc).
- **FIG-G10-B06-01:** B06 — tam giác có AB=8, AC=6, A=60°, BC=2√13, S=12√3. File nguồn `THPT_G10_B06_COSINE_AREA_TRIANGLE_D5_R01.svg` (width 950, height 540, viewBox, role=img/title/desc).

**Quy tắc D5:** Cần kiểm toán độc lập đúng điểm/toạ độ, tia góc, nét, chữ, mối quan hệ với ví dụ và sự phù hợp thiết bị. Bản PNG chỉ dùng tác giả xem trước; tệp SVG sau review phải trùng chính xác XML được duyệt.

### FIG-G10-B05-01 · THPT_G10_B05_SEMICIRCLE_120_D5_R01.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="950" height="540" viewBox="0 0 950 540" role="img" aria-labelledby="t1 d1">
<title id="t1">Giá trị lượng giác của góc 120 độ trên nửa đường tròn đơn vị</title>
<desc id="d1">O tọa độ (0,0), nửa đường tròn đơn vị phía trên trục hoành. Tia OM ở góc 120 độ gặp M tại âm một phần hai, căn ba phần hai. Cos âm, sin dương; hình chiếu xuống trục x là âm một phần hai.</desc>
<rect width="950" height="540" rx="20" fill="#f8fafc"/>
<text x="36" y="55" fill="#0f172a" font-family="Arial,sans-serif" font-size="28" font-weight="bold">Bài 5 · Giá trị lượng giác góc 120°</text>
<path d="M 160 398 A 220 220 0 0 1 600 398" fill="none" stroke="#2563eb" stroke-width="4"/>
<path d="M 120 398 H 665" stroke="#475569" stroke-width="2.5"/>
<path d="M 380 435 V 121" stroke="#475569" stroke-width="2.5"/>
<path d="M 600 398 L 588 392 L 588 404 Z" fill="#475569"/>
<path d="M 380 121 L 374 135 L 386 135 Z" fill="#475569"/>
<line x1="380" y1="398" x2="270" y2="207.475" stroke="#047857" stroke-width="4"/>
<path d="M 436 398 A 56 56 0 0 0 352 349.503" fill="none" stroke="#db6a15" stroke-width="4"/>
<line x1="270" y1="207.475" x2="270" y2="398" stroke="#b45309" stroke-dasharray="8 8" stroke-width="3"/>
<line x1="270" y1="207.475" x2="380" y2="207.475" stroke="#b45309" stroke-dasharray="8 8" stroke-width="3"/>
<circle cx="380" cy="398" r="6" fill="#0f172a"/>
<circle cx="270" cy="207.475" r="7" fill="#047857"/>
<text x="393" y="419" font-size="20" font-family="Arial,sans-serif" fill="#0f172a">O</text>
<text x="242" y="195" font-size="22" font-weight="bold" font-family="Arial,sans-serif" fill="#047857">M</text>
<text x="327" y="330" font-size="23" font-weight="bold" font-family="Arial,sans-serif" fill="#b45309">120°</text>
<text x="263" y="429" font-size="21" font-family="Arial,sans-serif" fill="#b45309">−1/2</text>
<text x="393" y="213" font-size="21" font-family="Arial,sans-serif" fill="#b45309">√3/2</text>
<text x="593" y="426" font-size="18" font-family="Arial,sans-serif" fill="#475569">1</text>
<text x="150" y="426" font-size="18" font-family="Arial,sans-serif" fill="#475569">−1</text>
<text x="670" y="405" font-size="22" font-family="Arial,sans-serif" fill="#475569">x</text>
<text x="394" y="124" font-size="22" font-family="Arial,sans-serif" fill="#475569">y</text>
<rect x="680" y="175" width="244" height="242" rx="15" fill="#e0f2fe" stroke="#93c5fd"/>
<text x="700" y="213" font-size="20" font-family="Arial,sans-serif" fill="#0f172a">Góc tù: cos &lt; 0</text>
<text x="700" y="254" font-size="20" font-family="Arial,sans-serif" fill="#0f172a">sin 120° = √3/2</text>
<text x="700" y="294" font-size="20" font-family="Arial,sans-serif" fill="#0f172a">cos 120° = −1/2</text>
<text x="700" y="334" font-size="20" font-family="Arial,sans-serif" fill="#0f172a">tan 120° = −√3</text>
<text x="700" y="374" font-size="20" font-family="Arial,sans-serif" fill="#0f172a">cot 120° = −√3/3</text>
<text x="38" y="504" font-size="19" font-family="Arial,sans-serif" fill="#334155">Lưu ý: tan không xác định tại 90°; cot không xác định tại 0° và 180°.</text>
</svg>
```

### FIG-G10-B06-01 · THPT_G10_B06_COSINE_AREA_TRIANGLE_D5_R01.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="950" height="540" viewBox="0 0 950 540" role="img" aria-labelledby="t2 d2">
<title id="t2">Tam giác ABC minh họa định lí côsin và công thức diện tích theo hai cạnh cùng góc xen giữa</title>
<desc id="d2">Tam giác ABC có AB bằng 8, AC bằng 6, góc A bằng 60 độ, BC bằng 2 căn 13. Công thức cạnh đối diện A là a bình bằng b bình cộng c bình trừ 2bc cos A, cho a bình bằng 52. Diện tích là nửa tích 6 nhân 8 nhân sin 60, bằng 12 căn 3.</desc>
<rect width="950" height="540" rx="20" fill="#f8fafc"/>
<text x="35" y="54" font-family="Arial,sans-serif" font-weight="bold" font-size="27" fill="#0f172a">Bài 6 · Côsin, góc xen giữa và diện tích</text>
<path d="M 150 410 L 520 410 L 288.75 169.677 Z" fill="#dbeafe" fill-opacity=".74" stroke="#1d4ed8" stroke-width="4" stroke-linejoin="round"/>
<path d="M 215 410 A 65 65 0 0 0 182.5 353.708" fill="none" stroke="#b45309" stroke-width="4"/>
<circle cx="150" cy="410" r="5" fill="#0f172a"/><circle cx="520" cy="410" r="5" fill="#0f172a"/><circle cx="288.75" cy="169.677" r="5" fill="#0f172a"/>
<text x="128" y="438" font-size="25" font-family="Arial,sans-serif" font-weight="bold" fill="#0f172a">A</text>
<text x="529" y="438" font-size="25" font-family="Arial,sans-serif" font-weight="bold" fill="#0f172a">B</text>
<text x="278" y="146" font-size="25" font-family="Arial,sans-serif" font-weight="bold" fill="#0f172a">C</text>
<text x="215" y="392" font-size="22" font-family="Arial,sans-serif" fill="#b45309">60°</text>
<text x="320" y="442" font-size="23" font-family="Arial,sans-serif" fill="#0f172a">c = 8</text>
<text x="182" y="264" font-size="23" font-family="Arial,sans-serif" fill="#0f172a">b = 6</text>
<text x="410" y="274" font-size="21" font-family="Arial,sans-serif" fill="#0f172a">a = 2√13</text>
<rect x="615" y="150" width="302" height="288" rx="16" fill="#ecfdf5" stroke="#86efac" stroke-width="2"/>
<text x="641" y="195" font-family="Arial,sans-serif" font-weight="bold" font-size="23" fill="#047857">Định lí côsin</text>
<text x="641" y="233" font-family="Arial,sans-serif" font-size="21" fill="#0f172a">a² = b² + c² − 2bc cos A</text>
<text x="641" y="270" font-family="Arial,sans-serif" font-size="21" fill="#0f172a">a² = 36 + 64 − 48 = 52</text>
<text x="641" y="310" font-family="Arial,sans-serif" font-weight="bold" font-size="23" fill="#047857">Diện tích</text>
<text x="641" y="348" font-family="Arial,sans-serif" font-size="21" fill="#0f172a">S = ½ bc sin A</text>
<text x="641" y="384" font-family="Arial,sans-serif" font-size="21" fill="#0f172a">S = ½ · 6 · 8 · sin 60°</text>
<text x="641" y="419" font-family="Arial,sans-serif" font-size="21" fill="#0f172a">S = 12√3</text>
<text x="36" y="501" font-size="19" font-family="Arial,sans-serif" fill="#334155">Phải dùng góc A xen giữa hai cạnh b và c; cạnh a đối diện A.</text>
</svg>
```

## 8. D6 · FOUR REMEDIATION HELP CARDS (không tạo item_id)

### HELP-G10-B05-01 · Nhầm dấu góc tù và hai góc bù
1. **Dấu hiệu:** Chọn cos120° dương hoặc cos150° bằng cos30°.
2. **Chẩn đoán:** Học sinh nhớ bảng góc nhọn nhưng bỏ nửa đường tròn phía trái trục Oy.
3. **Bản chất:** `sin(180°−α)=sinα`, `cos(180°−α)=−cosα`; điểm M góc tù nằm phía trái, tung độ dương.
4. **Tự sửa:** Vẽ M góc 120° trên FIG-G10-B05-01, đọc hoành/tung; giải lại không nhìn đáp án.
5. **Bài tiếp theo:** `THPT-G10-B05-P01`, sau đó `P03`. Chỉ hiện HELP trong luyện tập, không trong bài đánh giá độc lập.

### HELP-G10-B05-02 · Bỏ điều kiện tan/cot và chọn sai dấu căn
1. **Dấu hiệu:** Tính tan90° bằng 0; viết cot0° là vô hạn; cho cos góc tù dương khi biết sin.
2. **Chẩn đoán:** Bỏ mẫu của tỷ số sin/cos và không sử dụng miền của góc.
3. **Bản chất:** Tan chỉ xác định nếu cos≠0, cot nếu sin≠0; `sin²+cos²=1` cho hai dấu căn nhưng miền góc quyết định dấu.
4. **Tự sửa:** Kiểm tra mẫu và dấu trước khi thế số; tự đối chiếu từng bước.
5. **Bài tiếp theo:** `THPT-G10-B05-C02`, `P02`, `P06`; xem lại B05-D1.1/4.

### HELP-G10-B06-01 · Sai góc xen giữa / nhầm định lí sin và côsin
1. **Dấu hiệu:** Lấy `a²=b²+c²−2bc cos B` hoặc dùng sin để tìm cạnh trong tình huống chỉ biết hai cạnh và góc xen giữa.
2. **Chẩn đoán:** Không chỉ rõ cạnh đối diện góc A và hai cạnh kề góc A.
3. **Bản chất:** Với kí hiệu chuẩn a đối diện A; hệ thức đúng là `a²=b²+c²−2bc cos A`. Định lí sin liên hệ các **cặp cạnh–góc đối diện**.
4. **Tự sửa:** Ghi a,b,c lên FIG-G10-B06-01, kiểm tra góc A=60°, tính lại 52 và căn dương.
5. **Bài tiếp theo:** `THPT-G10-B06-C01`, `P06`, sau đó `P01`.

### HELP-G10-B06-02 · Nhầm diện tích, Heron, r/R và đơn vị
1. **Dấu hiệu:** Dùng `S=1/2 bc cos A`, tính r từ `abc/(4S)`, hoặc ghi m thay vì m².
2. **Chẩn đoán:** Nhớ công thức rời rạc, không phân biệt tâm nội/ngoại tiếp và góc xen giữa.
3. **Bản chất:** `S=1/2 bc sin A`, `S=sqrt[p(p−a)(p−b)(p−c)]`, `S=pr`, `S=abc/(4R)`.
4. **Tự sửa:** Làm tam giác 13–14–15: p=21, S=84, r=4, R=65/8; kiểm tra thứ nguyên.
5. **Bài tiếp theo:** `THPT-G10-B06-C02`, `P02`, `P04` và Written `W06-ANCHOR` tự đối chiếu. Không lấy kết quả tự luận làm Skill Mastery.

## 9. AUTHOR QA / RỦI RO & YÊU CẦU REVIEWER

### QA tự kiểm trước NotebookLM (không thay độc lập thẩm định)

- Một `item_id` ứng viên duy nhất cho mỗi câu, cùng stem/answer/explanation/hint/rubric. D4 Anchor chỉ là nhãn của một Written item.
- D5: chính xác 2 SVG XML hoàn chỉnh; điểm M ở góc 120° có tọa độ trên nửa đường tròn đơn vị, tam giác FIG-B06 có tỉ lệ b:c=6:8 và góc A=60°.
- Toán: kiểm riêng sin/cos góc tù, mẫu số tan/cot, số nghiệm của sinα=√3/2 trong [0°,180°], a²=52, S=12√3, Heron 13–14–15 cho S=84, r=4, R=65/8; W06 S=1250√3, R=50.
- **Điểm dễ sai:** Đừng lấy bản thân việc có 16 câu làm bằng chứng D3 đủ độ sâu; NotebookLM phải phân biệt thực chất outcome và SGK/SBT S1. Một vài câu thực hành có cùng đại lượng nhưng khác phương pháp/điều kiện; đánh giá trùng lặp thực chất.
- Không công khai câu/đáp án **Tự kiểm tra cuối chương** chưa kiểm chứng. Không bật chấm điểm/Mastery ở web.

### Yêu cầu NotebookLM trả về verdict độc lập

1. Đối chiếu đúng 5 Permanent Sources THPT v2.0 và trang SGK/SBT KNTT in trong SOURCE_RECEIPT, không tự nâng phạm vi Core vượt SGK.
2. Thẩm định D1 lý thuyết và điều kiện toán học, 6 ví dụ D2, mọi item theo **đúng canonical candidate ID** (16 D3, 2 D4), outcome 10/10, 2 SVG D5, 4 HELP_ID D6.
3. Trả `SOURCE_RECEIPT`, `OUTCOME_MATRIX`, `ITEM_ID_RECONCILIATION`, `LESSON_B05/B06_VERDICT`, `D1–D6_OVERALL`, `FIG_VERDICTS`, `HELP_VERDICTS` và độ đa dạng/nội dung chính xác.
4. Liệt kê lỗi P0/P1/P2, chỉ rõ `MINIMAL_DELTA`, `ACADEMIC_CLEARANCE_FOR_THIS_DELTA` và căn cứ SGK/SBT.
5. Chỉ cấp Academic PASS cho snapshot R01 nêu trên, không cho toàn Chương III, Topic, Chapter Readiness, Mastery hoặc release.

**FINAL_STATE:** `NOT_REVIEWED / A3_A5_A6_HOLD / CONTENT_READY_NO / NO_RELEASE`.
